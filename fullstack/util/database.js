const Sequelize=require('sequelize')

const sequelize= new Sequelize('expensetracker','root','Vera2359',{
    dialect:'mysql',
    host:'localhost'
})



module.exports=sequelize;