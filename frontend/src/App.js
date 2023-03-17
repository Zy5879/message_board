import messageService from "./services/messages";
import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    console.log("effect");

    messageService.getAll().then((initalMessage) => {
      setMessages(initalMessage);
    });
  }, []);

  console.log(messages);
  return (
    <div>
      <h1>Mini Message Board</h1>
      {messages === null
        ? ""
        : messages.map((message, index) => (
            <div key={index}>
              {message.user} {message.text} {message.added}
            </div>
          ))}
    </div>
  );
}

export default App;
