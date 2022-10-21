const connection = require("../../models/db");


const userjop = (req, res) => {
    const { grop_id, user_id, job_id } = req.body
    const query = `INSERT INTO grop_users (grop_id, user_id,job_id)VALUES(?,?,?);`;
    const data = [grop_id, user_id, job_id];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(409).json({
                success: false,
                massage: "this  finded",
                err: err.message
            });
        }
        res.status(200).json({
            success: true,
            massage: "Grop and sub Created Successfully",
            result: result
        });
    });
};

const getjopUser = (req, res) => {
    /*
    SELECT *
  FROM table1
  INNER JOIN table2
  ON table1.id = table2.id
  INNER JOIN table3
  ON table2.id = table3.id;
    */

    const query = `SELECT * from grop_job inner join grop_users on grop_job.id=grop_users.grop_id inner join sub_job on grop_users.job_id=sub_job.id inner join users on grop_users.user_id=users.id ORDER BY gropjob;`;
    // const query = `SELECT * from grop_job inner join users on grop_job.id=users.id;`
    connection.query(query, (err, result) => {
        if (err) {
            return res.status(409).json({
                success: false,
                massage: "this  finded",
                err: err.message
            });
        }
        res.status(200).json({
            success: true,
            massage: "all it Successfully",
            result: result
        });
    });
}

module.exports = {
    userjop, getjopUser
};