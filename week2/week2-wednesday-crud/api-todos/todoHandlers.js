const Todo = require("./todoLibs.js")


const getAllTodos = (req, res) => {
    const todoslist = Todo.getAll();
    res.json(todoslist);
};

const createTodo = (req, res) => {
    const { task, completed, dueDate } = req.body;
    const adding = Todo.AddGroceries(task, completed, dueDate);

    if (adding) {
        res.json(adding);
    } else {
        res.status(500).json({ message: "Failed to create new groceries" })
    }
};

const getTodoById = (req, res) => {
    const groceriesbyid = req.params.groceriesbyid;
    const groceries = Todo.findById(groceriesbyid);

    if (groceries) {
        res.json(groceries);
    } else {
        res.status(404).json({ message: "Item not found" });
    }
};

const updateTodo = (req, res) => {
    const groceriesbyid = req.params.groceriesbyid;
    const updategroceries = Todo.updateOneElementById(groceriesbyid, req.body);

    if (updategroceries) {
        res.json(updategroceries);
    } else {
        res.status(500).json({ message: "Cannot update groceries" })
}
};

const deleteTodo = (req, res) => {
    const groceriesbyid = req.params.groceriesbyId;
    const deletegroceries = Todo.deleteOneById(groceriesbyid);

    if (deletegroceries) {
        res.json(deletegroceries)
    } else {
        res.status(500).json({ message: " Groceries have been deleted successfully" })
    }
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
};