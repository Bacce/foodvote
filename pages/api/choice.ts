import { NextApiRequest } from "next";

interface IChoice {
  user: string;
  msg: string;
}

const allChoices:IChoice[] = [];
 

export default (req: NextApiRequest, res: any) => {
  if (req.method === "POST") {
    // get message
    const choice = req.body;
    const i = allChoices.findIndex(e => e.user === choice.user && e.msg === choice.msg);
    if(i>-1) {
      console.log("Item already on the list, removing");
      allChoices.splice(i, 1);
    }
    else {
      console.log("adding item to list");
      allChoices.push(choice);
    }

    // dispatch to channel "message"
    res?.socket?.server?.io?.emit("allChoices", allChoices);

    // return message
    res.status(201).json(choice);
  }
};
