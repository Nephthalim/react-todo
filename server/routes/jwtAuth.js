const router = require("express").Router();
const bcrypt = require('bcryptjs');
const pool = require("../db");
const jwtGenerator = require("../utils/jwtGenerator.js");

router.post('/register', async(req, res) => {
    try {

        const { name, email, password } = req.body;

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        if (user.rows.length !== 0) {
            return res.status(401).send("User already exists");
        }

        const saltRound = 10;
        const genSalt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, genSalt);

        const newUser = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", [name, email, bcryptPassword])
        const token = await jwtGenerator(newUser.rows[0].id)

        return res.json({ token })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/login', async(req, res) => {
    try {
        const { email, password } = req.body;

        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (user.rows.length === 0) {
            return res.status(401).send("Password or Email is incorrect")
        }

        const validPassword = bcrypt.compare(password, user.rows[0].password);

        if (!validPassword) {
            return res.status(401).send("Password or Email is incorrect")
        }

        const token = await jwtGenerator(user.rows[0].id)
        res.setHeader('Content-Type', 'application/json');
        return res.json({ token })
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;