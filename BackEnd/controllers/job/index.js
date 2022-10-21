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
    });
};


const createSubJob = (req, res) => {
    const { grop, ActualCostsub, TotalBudgetsub, BudgetValsub, grop_name } = req.body;
    const query = `INSERT INTO sub_job (grop, ActualCostsub, TotalBudgetsub, BudgetValsub,grop_name)VALUES(?,?,?,?,?);`;
    const data = [grop, ActualCostsub, TotalBudgetsub, BudgetValsub, grop_name];
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
    });
};


const getallsub = (req, res) => {
    let arr1 = ["Application ", "Develoments ", "Testing"];

    const query = `SELECT * from sub_job inner join grop_job on sub_job.grop_name=grop_job.id;`;
    connection.query(query, (err, result) => {
        console.log(result);
        if (err) {
            return res.status(500).json({
                success: false,
                massage: "server error",
                err: err,
            });
        }
        let arr2 = []
        for (let index = 0; index < arr1.length; index++) {
            const user = result.filter((ele,) => {
                return ele.gropjob == arr1[index]
            })
            arr2.push({
                grop: arr1[index], jops: user,
                acc: user[index].ActualCost,
                totle: user[index].TotalBudget,
                budget: user[index].TotalBudget - user[index].ActualCost
            })
        }
        res.status(200).json({
            success: true,
            massage: "ALL the sub",
            result: arr2,
        });
    });
}

module.exports = {
    creategrop, createSubJob, getallsub
};