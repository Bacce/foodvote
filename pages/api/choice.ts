import { NextApiRequest } from "next";
import { IChoice } from "../../types";

const allChoices: IChoice[] = [];

export default (req: NextApiRequest, res: any) => {
  if (req.method === "GET") {
    res.status(201).json(allChoices);
  }

  if (req.method === "POST") {
    const choice = req.body;
    const i = allChoices.findIndex(e => e.user === choice.user && e.msg === choice.msg);
    if (i > -1) {
      allChoices.splice(i, 1);
    }
    else {
      allChoices.push(choice);
    }

    res?.socket?.server?.io?.emit("allChoices", allChoices);

    res.status(201).json(choice);
  }
};
