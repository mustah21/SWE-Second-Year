let groceries = [];
let Nextid = 1;


const getAll = () => {
    return groceries;
}

const AddGroceries = (task, completed, dueDate) => {
    if (!task || completed === undefined || !dueDate) {
        return false;
    }

    const newgroceries = {
        id: Nextid++,
        task,
        completed,
        dueDate
    };
    groceries.push(newgroceries);
    return newgroceries;
}


const findById = (id) => {
    const numericId = Number(id);
    const shop = groceries.find(item => item.id === numericId);
    if (shop){
        return shop;
    } else {
        return false;
    }
}


const updateOneElementById = (id, updatedData) => {
    const shop = findById(id);

    if (shop) {
        if (updatedData.task) {
            shop.task = updatedData.task;
        }
        if (updatedData.completed !== undefined) {
            shop.completed = updatedData.completed;
        }
        if (updatedData.dueDate) {
            shop.dueDate = updatedData.dueDate;
        }
        console.log(shop)
        return shop;
    }

    return false;
};


const deleteOneById = (id) => {
    const shop = findById(id);
    if (shop) {
        const intiallength = groceries.length;
        groceries = groceries.filter((shop) => shop.id !== Number(id));
        return groceries.length < intiallength;
    }
    return false;
}

//testing 

if (require.main === module) {

    let result = AddGroceries("buy milk", false, "2025-08-03");
    console.log(result);

    result = AddGroceries("get pringles", true, "2025-09-30");
    console.log(result);

    console.log(`Get all the data ${JSON.stringify(getAll())}`);
    console.log(`If you wish to find by id ${JSON.stringify(findById(1))}`);

    console.log(`You may update like this: ${JSON.stringify(updateOneElementById(1, { task: "Get groceries man", completed: false, dueDate: "2025-09-02" }))}`);
    console.log(`You may delete with id: ${deleteOneById(1)} `);
}

Todo = {
  getAll,
  AddGroceries,
  findById,
  updateOneElementById,
  deleteOneById,
};

module.exports = Todo;