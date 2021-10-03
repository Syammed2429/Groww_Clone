const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.set('view engine','ejs');

const connect =()=>{
    return mongoose.connect("mongodb+srv://Mayank:mayank12345@cluster0.dfin9.mongodb.net/myfunds?retryWrites=true&w=majority");
}

//create schema for mutual funds
const mutualSchema = new mongoose.Schema({
    imageurl:{type:String,required:true},
    body:{type:String,required:true},
    day:{type:String,required:true},
    year:{type:String,required:true},
    years:{type:String,required:true},
    daypercen:{type:String,required:true},
    yearpercen:{type:String,required:true},
    threepercen:{type:String,required:true},
    risk:{type:String,required:true},
    stars:{type:String,required:true},
    others:{type:String,required:true},

},{
    versionKey:false,
    timestamps:true
})

// connect with mutual funds
const Mutualfund = mongoose.model("mutualfund" , mutualSchema);

app.post("/mutuals" , async (req,res)=>{
    const mutual = await Mutualfund.create(req.body);
    
    return res.status(201).send({mutual});
})

app.get("/mutuals" , async (req,res)=>{
    const mutuals = await Mutualfund.find().lean().exec();

    // return res.status(200).send({mutuals});
    res.render("all_mutual",{
        mutuals:mutuals
    })
})

app.patch("/mutuals/:id" , async (req,res) =>{
    const mutual = await Mutualfund.findByIdAndUpdate(req.params.id).lean().exec();

    return res.status(200).send({mutual});
})

//popstart
//create schema for popular funds
const popfundSchema = new mongoose.Schema({
    imageurl:{type:String,required:true},
    body:{type:String,required:true},
    increase:{type:String,required:true},
    year:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
})

// connect with polular funds
const Popfund = mongoose.model("popfund" , popfundSchema);

app.post("/funds" , async (req,res)=>{
    const fund = await Popfund.create(req.body);
    
    return res.status(201).send({fund});
})

app.get("/funds" , async (req,res)=>{
    const funds = await Popfund.find().lean().exec();

    // return res.status(200).send({funds});
     res.render('mutual_fund',{
         funds:funds
     })
})
//popend


app.listen(2524, async function(){
    await connect();
    console.log("I am listinging to you on port number 2524");
})