const express=require("express");
const app=express();
const mongoose=require("mongoose")
const cors=require("cors")
const {todo}=require("./db")
const { createtodo,updatetodo }=require("./types");
app.use(express.json());
app.use(cors());
app.post("/todo",async function(req,res){
   const createpayload=req.body;
   const parsedpayload=createtodo.safeParse(createpayload);
   if(!parsedpayload.success){
    res.json({
        msg:"not valid schema for todo"
    })
    return;
}
await todo.create({
    title:createpayload.title,
    description:createpayload.description,
    completed:false
})

res.json({
    msg:"todo created successfully"
})
})
app.get("/todos",async function(req,res){
  const todos=await todo.find({});
  res.json({
    todos
  })
})
app.put("/completed",async function(req,res){
      const createpayload=req.body;
    const parsedpayload=updatetodo.safeParse(createpayload);
    if(!parsedpayload.success){
        res.json({
            msg:"wrong inputs for completing todo"
        })
        return;
    }
  await todo.updateOne({
    _id:createpayload.id
  },{
    completed:true
  })
  res.json({
    msg:"todo completed successfully"
  })
})
app.listen(3000);