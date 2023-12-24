const express = require("express");
const pizzaController = require("../controllers/pizzaController");
const router = express.Router();



router.post("/addPizza", pizzaController.addPizza)
router.post("/getAll", pizzaController.getPizzas);

module.exports = router;
