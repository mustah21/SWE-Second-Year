const express = require("express");
const bodyParser = require("body-parser");
const carController = require("./yourControllerFile"); // replace with your filename

const app = express();
const PORT = 4000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Routes
app.get("/cars", carController.getAllCars);
app.get("/cars/:carId", carController.getCarById);
app.post("/cars", carController.createCar);
app.put("/cars/:carId", carController.updateCar);
app.delete("/cars/:carId", carController.deleteCar);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// not my code taken by chatgpt