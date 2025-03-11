import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;

app.get("/api", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "/api n-point working",
  });
});

app.get("/api/test", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "/api/test n-point working",
  });
});

app.listen(PORT, () => {
  console.log(`Server run on port ${PORT}`);
});
