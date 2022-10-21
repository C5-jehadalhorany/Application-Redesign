const express = require("express");
require("dotenv").config();
const cors = require("cors");
require("./models/db");
const app = express();

const userRotuer = require("./routes/user");
const loginRotuer = require("./routes/login");
const gropRotuer = require("./routes/grop");
const jopUserRotuer = require("./routes/jopUser");




app.use(express.json());
app.use(cors());
app.use("/user", userRotuer);
app.use("/login", loginRotuer);
app.use("/grop", gropRotuer);
app.use("/jopUser", jopUserRotuer)



const PORT = process.env.PORT || 5000;


app.listen(PORT, (() => {
    console.log(`server on ${PORT}`);
}))


/*
routes

- add user 
http://localhost:5000/user/
post
-for test in post man

{
"email":"jehad",
"img":"123"
}

-add job
http://localhost:5000/grop/grop
post
-for test in post man

{"gropjob":"Develoments ",
"ActualCost":50,
"TotalBudget":48,
"BudgetVal":-2
}

-add sub job
http://localhost:5000/grop/sub
post
-for test in post man

{"grop":"Modules",
"ActualCostsub":17,
"TotalBudgetsub":21,
"BudgetValsub":4,
"grop_name":3       here can  1-Application  2-Develoments 3-Testing
}

add users in job or sub
http://localhost:5000/jopUser
post-get
-for test in post man

{
    "grop_id": 3,    here can 1-Application  2-Develoments 3-Testing
    "user_id":1,     here can 1-jehad  2-ahmad 
    "job_id": 8      here can -Test Cases-Regression Testing-New Feature-Components-Pages-Modules-Planning-UI Design
}

*/