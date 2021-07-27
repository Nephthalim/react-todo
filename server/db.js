const Pool = require("pg").Pool;

// const pool = new Pool({
//     connectionString: 'postgres://hxaabbiaeetlth:539514fa91c74edc97580b2a6b3a61c0266d25a918a68d25a602aec3bf51b13c@ec2-18-214-195-34.compute-1.amazonaws.com:5432/d1t54v2p34mnc',
//     ssl: { rejectUnauthorized: false }
// });

const pool = new Pool({
    user: 'hxaabbiaeetlth',
    password: '539514fa91c74edc97580b2a6b3a61c0266d25a918a68d25a602aec3bf51b13c',
    host: 'ec2-18-214-195-34.compute-1.amazonaws.com',
    port: 5432,
    database: 'd1t54v2p34mnch',
    ssl: { rejectUnauthorized: false }

})


module.exports = pool;