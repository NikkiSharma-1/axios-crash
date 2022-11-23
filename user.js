const Sequalize=require('sequalize');

const sequalize=require('../database');
const User=sequalize.define('user',{
id:{
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
},
name:Sequalize.STRING,
email:{
    type: Sequalize.STRING,
    unique: true
},
phonenumber:{
    type: Sequalize.INTEGER,
    unique: true
}
});

module.exports=User;