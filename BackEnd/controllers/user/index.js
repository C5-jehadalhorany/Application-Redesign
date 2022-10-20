const connection = require("../../models/db");


const getalluser = (req, res) => {
    const query = `SELECT * from users WHERE is_deleted=0;`;
    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                massage: "server error",
                err: err,
            });
        }
        res.status(200).json({
            success: true,
            massage: "ALL the users",
            result: result,
        });
    });
};

const getuserbyid = (req, res) => {
    const userID = req.params.id
    const query = `SELECT * from users WHERE id=? and is_deleted=0;`;
    const data = [userID]
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                massage: "Server error",
                err: err,
            });
        };
        res.status(200).json({
            success: true,
            massage: `userby${userID}`,
            result: result,
        });
    });
};

const createuser = (req, res) => {
    const { email,img } = req.body;
    const query = `INSERT INTO users (email,img)VALUES(?,?);`;
    const data = [email,img];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(409).json({
                success: false,
                massage: "this user finded",
                err: err.message
            });
        }
        res.status(200).json({
            success: true,
            massage: "Account Created Successfully",
            result: result
        });
    })
};

const login = (req, res) => {
    const {email}=req.body;
    const query = `SELECT * from users WHERE email=?;`;
    const data = [email];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(409).json({
                success: false,
                massage: "not find",
                err: err
            });
        }
        res.status(200).json({
            success: true,
            massage: "login Successfully",
            result: result
        });
    });
};

module.exports = {
    getalluser,
    getuserbyid,
    createuser,
    login
};