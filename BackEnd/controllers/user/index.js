const connection = require("../../models/bd");


const getalluser = (req, res) => {
    const query = `SELECT * from users WHERE is_deleted=0`;
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
    const id = req.params.id
    const query = `SELECT * from users WHERE is_deleted=0`;
    connection.query(query, (err, result) => {
        if (err) {
            return res.status(500).json({
                success: false,
                massage: "Server error",
                err: err,
            });
        };
        res.status(200).json({
            success: true,
            massage: "user",
            result: result,
        });
    });
};


module.exports = {
    getalluser,
    getuserbyid
};