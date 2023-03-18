// Get All messages
// GET /
let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
  {
    text: "Hi Charles!",
    user: "Mall",
    added: new Date(),
  },
  {
    text: "Hello Mall!",
    user: "Steven",
    added: new Date(),
  },
];

function getMessages(req, res) {
  res.status(200).json(messages);
}

function setNewMessages(req, res) {
  const body = req.body;
  // if (!body.text || !body.user) {
  //   res.status(400);
  //   throw new Error("Please add a message");
  // }
  const newMessage = {
    text: body.text,
    user: body.user,
    added: new Date(),
  };

  messages = messages.concat(newMessage);
  res.json(newMessage);
  console.log(newMessage);
}

// function updateMessages(req, res) {
//   res.status(200).json({ message: `Update goal ${req.params.id}` });
// }

// function deleteMessage(req, res) {
//   res.status(200).json({ message: `Delete goal ${req.params.id}` });
// }

module.exports = {
  getMessages,
  setNewMessages,
  //   updateMessages,
  //   deleteMessage,
};
