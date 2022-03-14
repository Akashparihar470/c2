const express = require("express");
const { connect } = require("http2");
const mongoose = require("mongoose");

const app = express();

const userSchema = new mongoose.Schema({
    first_name: String,  required: true,
    last_name: String, required: true,
    email: String, required: true,
    address: String, required: true,
    age: Number, required: true,
    gender:String, required: true,
},{
    timestamps: true,
});


 const Branchdetail = new mongoose.Schema({
     name: {type: mongoose.Schema.Types.first_name, ref: "user", required: true},
     address: {type: mongoose.Schema.Types.address, ref: "user", required: true},
     IFSC: {String, required: true},
     MICR: {Number, required:true},
 },{
     timestamps:true,
 })

 var branchSchema = mongoose.model("branch",Branchdetail); 


 const MasterAccount = new mongoose.Schema({
     balance: Number, required,
 },{
     timestamps:true,
 })

 var master = mongoose.model("master",master); 

 const SavingsAccount = new mongoose.Schema({
    account_number: {type: Number, required: true, unique: true},
    balance: {type: Number, required: true},
    interestRate: { type: Number, required: true},
 },{
     timestamps: true,
 })

 var saving = mongoose.model("saving",SavingsAccount); 

 const FixedAccount = new mongoose.Schema({
    account_number: {type: Number, required: true, unique: true},
    balance: {type: Number, required: true},
    interestRate: { type: Number, required: true},
    start_date: { type: Date, required: true},
    maturity_date: {type: Date, required:true}
 },{
     timestamps:true
 })

 var fixed = mongoose.model("fixed",FixedAccount); 

 const User = mongoose.model("user",userSchema);

app.post("/users", async(req,res) =>{
    try{
        const user = await User.create(req.body);
        return res.status(201).send(user)
    }
    
        catch(err){
            return res.status(500).send({message: err.message});
        }
    
})
app.post("/fix", async(req,res) =>{
    try{
        const master = fix.find().populate("master_id").lean().exac();
        return res.status(201).send(user)
    }
    
        catch(err){
            return res.status(500).send({message: err.message});
        }
    
})


app.listen(5000,async() => {
    try{
        await connect();
    }
    catch(err){
        console.log(err);
    }
})