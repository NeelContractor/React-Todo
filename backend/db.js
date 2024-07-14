const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://neelcontractor7:Doctordoom2003@paytm.ozsifoy.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}