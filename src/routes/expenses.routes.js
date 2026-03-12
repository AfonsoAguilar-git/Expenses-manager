const express = require("express");
const router = express.Router();

const expensesController = require("../controllers/expenses.controller");
const {validateData} = require("../middlewares/middleWares");



//estatisticas de categoria
router.get("/category/:category/stats", expensesController.getCategoryStat_C);

//total de despesas
router.get("/total", expensesController.totalExpenses_C);

//listar despesas (com ou sem filtros)
router.get("/", expensesController.listExpenses_C);

//ver por id
router.get("/:id", expensesController.getExpenseById_C);


//atualizar
router.patch("/:id", expensesController.updateExpense_C);

//criar
router.post("/", validateData, expensesController.addExpense_C);

//apagar
router.delete("/:id", expensesController.deleteExpense_C);

module.exports = router;
