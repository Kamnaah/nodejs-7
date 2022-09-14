const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel = require('./models/marioChar');
// const router = express.Router();


// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
app.use(bodyParser())

// your code goes here

app.get('/mario', async (req,res)=>{
    try{
        const user=await marioModel.find();
        res.json({
        status:"success",
        user: user});

    }catch(e){
        res.status(400).json({
            status:"failed",
            message:e.message
        })
    }
    
    })

    app.get('/mario/:id', async (req,res)=>{
        try{
            const id=req.params.id;
            const user = await marioModel.find({_id:id});
            res.json({
                status:"success",
                user: user});

        }

        catch(e){
            res.status(400).json({
                status:"failed",
                message:e.message
            })
        }
    });
app.post('/mario', async(req,res)=>{
    try{
        const user=await marioModel.create(req.body);
        res.status(201).json({
            status:"success",
            user: user
        });

    }
    catch(e){
        res.status(400).json({
            status:'failed',
            message:e.message
        })
    }
    })

app.patch('/mario/:id', async(req,res)=>{
        try{
            const user=await marioModel.updateOne({_id:req.params.id},req.body);
            res.json({
                status:"success",
                user: user
            });
    
        }
        catch(e){
            res.status(400).json({
                status:'failed',
                message:e.message
            })
        }
        })
 //delete
app.delete('/mario/:id', async(req,res)=>{
    try{
        const user=await marioModel.deleteOne({_id:req.params.id},req.body);
        res.status(200).json({
            status:"success",
            user: user
        });

    }
    catch(e){
        res.status(400).json({
            status:'failed',
            message:e.message
        })
    }
    })

    
// Create data 

module.exports = app;