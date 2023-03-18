import messageService from "./services/messages";
import Form from "./components/Form.js";
import { useEffect, useState } from "react";

function App() {
  const [messageInfo, setMessageInfo] = useState({
    text: "",
    user: "",
    added: new Date(),
  });
  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log("effect");

    messageService.getAll().then((initalMessage) => {
      setPost(initalMessage);
    });
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setMessageInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const addMessage = {
      text: messageInfo.text,
      user: messageInfo.user,
      added: new Date(),
    };

    messageService.create(addMessage).then((returnMessage) => {
      setPost(post.concat(returnMessage));
      setMessageInfo({
        text: "",
        user: "",
        added: new Date(),
      });
    });

    console.log(post);
  }

  return (
    <div>
      <h1>Mini Message Board</h1>
      <div className="chat">
        {post === null
          ? ""
          : post.map((post, index) => (
              <div key={index}>
                <div>{post.user}</div>
                <p>{post.text}</p>
              </div>
            ))}
      </div>
      <Form
        user={messageInfo.user}
        text={messageInfo.text}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
