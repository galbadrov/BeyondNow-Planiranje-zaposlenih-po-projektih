import dotenv from "dotenv";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";

dotenv.config();

const dataPathEnv = process.env.EMPLOYEES_DATA_PATH;
if (!dataPathEnv) {
  throw new Error("Missing EMPLOYEES_DATA_PATH environment variable");
}

const dataPath = path.resolve(process.cwd(), dataPathEnv);

// GET - preberi vse zaposlene
export const getEmployees = (_req: Request, res: Response): void => {
  try {
    if (!fs.existsSync(dataPath)) {
      // Če datoteka še ne obstaja, pošlji prazen seznam
      res.json([]);
      return;
    }
    const fileContent = fs.readFileSync(dataPath, "utf-8");
    const data = fileContent ? JSON.parse(fileContent) : [];
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error reading employees data" });
  }
};

// POST - dodaj novega zaposlenega
export const addEmployee = (req: Request, res: Response): void => {
  const { firstName, lastName, role, skill } = req.body;

  if (!firstName || !lastName || !role) {
    res.status(400).json({ message: "Missing required fields" });
    return;
  }

  const fullName = `${firstName} ${lastName}`;
  const newEmployee = {
    id: Date.now(),
    name: fullName,
    role,
    skill,
    avatar: `https://i.pravatar.cc/150?u=${fullName}`,
  };

  let data = [];
  try {
    if (fs.existsSync(dataPath)) {
      const fileContent = fs.readFileSync(dataPath, "utf-8");
      data = fileContent ? JSON.parse(fileContent) : [];
    }
  } catch (err) {
    res.status(500).json({ message: "Error reading employees data" });
    return;
  }

  data.push(newEmployee);

  try {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
  } catch (err) {
    res.status(500).json({ message: "Error writing employees data" });
    return;
  }

  res.status(201).json(newEmployee);
};
