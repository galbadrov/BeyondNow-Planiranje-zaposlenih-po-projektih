import express from "express";
import { addEmployee, getEmployees } from "../controllers/employeeController";

const router = express.Router();

router.get("/", getEmployees);      // za GET /api/employees
router.post("/", addEmployee);      // za POST /api/employees

export default router;
