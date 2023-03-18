const express = require("express");
const router = express.Router();
const {
  getMessages,
  //   updateMessages,
  setNewMessages,
  //   deleteMessage,
} = require("../controllers/messageController");

router.get("/", getMessages);

// router.get("/new", (req, res) => {
//   res.status(200).json({ create: "create new message" });
// });

router.post("/", setNewMessages);

// router.put("/:id", updateMessages);

// router.delete("/:id", deleteMessage);

module.exports = router;
