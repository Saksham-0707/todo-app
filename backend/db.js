const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://admin:admin@cluster0.nq7jkly.mongodb.net/todoapp");
const TodoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model('todos',TodoSchema)
module.exports={
  todo
}
