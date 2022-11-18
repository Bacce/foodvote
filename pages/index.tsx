import React, { useState, useEffect } from "react";
import SocketIOClient from "socket.io-client";

interface IMsg {
  user: string;
  msg: string;
}

interface IOption {
  id: number;
  name:string;
  type:string;
  lat:number;
  lon:number;
}

// component
const Index: React.FC = () => {
  const [user, setUser] = useState("");
  const [connected, setConnected] = useState<boolean>(false);
  const [choices, setChoices] = useState<IMsg[]>([]);
  const [options, setOptions] = useState<IOption[]>([]);

  useEffect((): any => {
    // Get all the options to select from
    fetch("/api/options", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.json())
    .then((data)=>{setOptions(data)})
    .catch((e)=>{console.error("ERROR: Options request error",e)});

    // connect to socket server
    const socket = SocketIOClient.connect(process.env.BASE_URL, {
      path: "/api/socketio",
    });

    // log socket connection
    socket.on("connect", () => {
      console.log("SOCKET CONNECTED!", socket.id);
      setConnected(true);
    });

    socket.on("allChoices", (allChoices: IMsg[]) => {
      console.log("allMessage", allChoices);
      setChoices([...allChoices]);
    });

    // socket disconnet onUnmount if exists
    if (socket) return () => socket.disconnect();
  }, []);

  const sendMessage = async (msg:any) => {
    if (msg) {
      // build message obj
      const message: IMsg = {
        user,
        msg,
      };

      // dispatch message to other users
      fetch("/api/choice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
    }
  };

  return (<>{connected ? (<>
        User:<input
          type="text"
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />

        <div>
          {options.map((option, index)=>(<div key={index}>
            <button onClick={()=>{sendMessage(option.id)}}>{option.name}</button>
            {choices.map((choice)=>{return(Number(choice.msg)===option.id?<span>{choice.user} - </span>:<></>)})}
            </div>))}
        </div>

        <div>
          {choices.length ? (
            choices.map((choice, i) => (
              <div key={"msg_" + i}>
                <span>
                  {choice.user}
                </span>
                : {choice.msg}
              </div>
            ))
          ) : (
            <>NoMsg</>
          )}
        </div>
      </>):(<>Initializing...</>)}
      </>
  );
};

export default Index;
