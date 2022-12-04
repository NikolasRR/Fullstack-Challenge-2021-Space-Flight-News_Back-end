import { Request, Response } from "express";

function sendGreetings(req: Request, res: Response) {
    res.send("Fullstack Challenge 2021 🏅 - Space Flight News");
}

const controllers = {
    sendGreetings
}

export default controllers;