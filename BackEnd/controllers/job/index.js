const connection = require("../../models/db");



const creategrop = (req, res) => {
    const { gropjob, ActualCost, TotalBudget, BudgetVal } = req.body;
    const query = `INSERT INTO grop_job (gropjob,ActualCost,TotalBudget,BudgetVal)VALUES(?,?,?,?);`;
    const data = [gropjob, ActualCost, TotalBudget, BudgetVal];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(409).json({
                success: false,
                massage: "this grop finded",
                err: err.message
            });
        }
        res.status(200).json({
            success: true,
            massage: "Grop Created Successfully",
            result: result
        });
    })
};


const createSubJob = (req, res) => {
    const { grop, ActualCost, TotalBudget, BudgetVal,grop_name } = req.body;
    const query = `INSERT INTO sub_job (grop,ActualCost,TotalBudget,BudgetVal,grop_name)VALUES(?,?,?,?,?);`;
    const data = [grop, ActualCost, TotalBudget, BudgetVal,grop_name ];
    connection.query(query, data, (err, result) => {
        if (err) {
            return res.status(409).json({
                success: false,
                massage: "this sub_job finded",
                err: err.message
            });
        }
        res.status(200).json({
            success: true,
            massage: "sub_job Created Successfully",
            result: result
        });
    })
};



module.exports = {
    creategrop,createSubJob
};