const router = require("express").Router();
const pool = require("../db");
const authorization = require('../middleware/authorization')


router.get('/', authorization, async(req, res) => {
    try {
        const user = await pool.query("SELECT * FROM users WHERE id=$1", [req.user]);
        const newUser = user.rows[0];
        res.json(newUser);
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error");
    }
});

router.post('/todo', authorization, async(req, res) => {
    try {
        const { name, description } = req.body;
        const result = await pool.query(`INSERT INTO tasks (user_id, name, description, date_created, important) VALUES ($1, $2, $3, to_timestamp(${Date.now()} / 1000.0), $4) RETURNING id as id, name as name, description as description, TO_CHAR(date_created :: DATE, 'Mon dd, yyyy') as date_created, important as important;`, [req.user, name, description, false])
        const todo = result.rows[0]
        res.json({ todo });
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error");
    }
});

router.get('/todo', authorization, async(req, res) => {

    try {
        const result = await pool.query("SELECT id, name, description, TO_CHAR(date_created :: DATE, 'Mon dd, yyyy') as date_created, important FROM tasks WHERE user_id=$1 ORDER BY date_created ASC, important DESC", [req.user]);
        const todos = result.rows

        res.json({ todos });
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error");
    }
});
router.put('/todo/:id', authorization, async(req, res) => {
    try {
        const { name, description } = req.body;
        const result = await pool.query("UPDATE tasks SET name=$1, description=$2 WHERE id=$3", [name, description, req.params.id]);
        res.json({ result });
    } catch (err) {
        res.status(500).json("Server Error");
    }
});
router.put('/important/:id', authorization, async(req, res) => {
    try {
        const id = req.params.id;
        const updatedTodo = await pool.query("UPDATE tasks SET important = NOT important WHERE id=$1", [id]);
        res.json({ updatedTodo });
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error");
    }
});

router.delete('/todo/:id', authorization, async(req, res) => {
    try {
        const deleted_task = await pool.query("DELETE FROM tasks WHERE id=$1", [req.params.id]);
        res.json({ deleted_task });
    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error");
    }
});

router.get('/search', authorization, async(req, res) => {
    try {
        const search = req.query.query.toUpperCase()
        const result = await pool.query(`SELECT id, name, description, TO_CHAR(date_created :: DATE, 'Mon dd, yyyy') as date_created, important FROM tasks WHERE UPPER(name) LIKE '${search}%' OR UPPER(description) LIKE '${search}%' AND user_id=$1  ORDER BY date_created ASC, important DESC`, [req.user]);
        const searchResult = result.rows
        res.json({ searchResult });

    } catch (err) {
        console.error(err.message)
        res.status(500).json("Server Error");
    }
});

module.exports = router;