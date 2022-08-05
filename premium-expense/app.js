const express=require('express')
const app=express();
const bodyparser=require('body-parser')
const cors=require('cors')
const db=require('./utils/db')
const dotenv = require('dotenv');
const jwt=require('jsonwebtoken');
const path=require('path')







const user=require("./models/usersignup")
const expenses=require("./models/expense")
const order=require("./models/orders")
const ledb=require("./models/leaderboard")
const fgtpwd=require("./models/ForgotPasswordRequests")

const auth = require("./controllers/authorization")
const fogotpasswordroutes=require("./routes/forgotpassword")


app.use(cors());
dotenv.config();

const publicRoutes=require('./routes/public')
const expenseRoutes=require('./routes/expense')
const purchaseRoutes=require('./routes/purchase')

app.use(bodyparser.json())

app.set("view engine", "jade");
app.set("views", "views");

app.get('/', function(req,res) {
    res.render('login',{pageTitle:'Login',layout:false});

});






user.hasMany(expenses);
expenses.belongsTo(user);

user.hasMany(order);
order.belongsTo(user);

user.hasOne(ledb);
ledb.belongsTo(user);

user.hasMany(fgtpwd);
fgtpwd.belongsTo(user);

app.use(fogotpasswordroutes)
app.use(publicRoutes)

app.use('*', auth.authenticate) 
app.use(purchaseRoutes)
app.use(expenseRoutes)
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,`Views/${req.url}`))
    
    })

db.sync().then(()=>{
    app.listen(3000)
})






