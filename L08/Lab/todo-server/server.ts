import express, { Request, Response } from "express";
import { z } from "zod";

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

const todosData: Todo[] = [
  { id: crypto.randomUUID(), text: "Read lab requirements", done: false },
  { id: crypto.randomUUID(), text: "Build ToDo app with API", done: true },
];

const TodoCreateSchema = z.object({
  text: z.string().trim().min(1, "Text is required"),
});

const TodoUpdateSchema = z.object({
  text: z.string().trim().min(1, "Text is required"),
  done: z.boolean(),
});

const app = express();

const RESPONSE_THROTTLE_MIN_MS = 300;
const RESPONSE_THROTTLE_MAX_MS = 1500;

app.use(express.json());
app.use((_req, _res, next) => {
  const delay =
    Math.random() * (RESPONSE_THROTTLE_MAX_MS - RESPONSE_THROTTLE_MIN_MS) +
    RESPONSE_THROTTLE_MIN_MS;
  setTimeout(next, delay);
});

app.use((_req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");

  if (_req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.get("/todos", (_req: Request, res: Response) => {
  res.json(todosData);
});

app.post("/todos", (req: Request, res: Response) => {
  const result = TodoCreateSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.flatten().fieldErrors,
    });
  }

  const isDuplicate = todosData.some(
    (todo) => todo.text.toLowerCase() === result.data.text.toLowerCase(),
  );

  if (isDuplicate) {
    return res.status(409).json({ error: "Todo text already exists" });
  }

  const newTodo: Todo = {
    id: crypto.randomUUID(),
    text: result.data.text,
    done: false,
  };

  todosData.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/todos/:id", (req: Request, res: Response) => {
  const todo = todosData.find((item) => item.id === req.params.id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const result = TodoUpdateSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.flatten().fieldErrors,
    });
  }

  const isDuplicate = todosData.some(
    (item) =>
      item.text.toLowerCase() === result.data.text.toLowerCase() &&
      item.id !== req.params.id,
  );

  if (isDuplicate) {
    return res
      .status(409)
      .json({ error: "Another todo already has this text" });
  }

  todo.text = result.data.text;
  todo.done = result.data.done;

  res.json(todo);
});

app.delete("/todos/:id", (req: Request, res: Response) => {
  const index = todosData.findIndex((todo) => todo.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const [deletedTodo] = todosData.splice(index, 1);
  res.json(deletedTodo);
});

app.listen(3001, () => {
  console.log("ToDo server running on http://localhost:3001");
});
