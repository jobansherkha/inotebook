const express = require("express");
const router = express.Router();
const Note = require("../modals/Note");
var fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const { findById } = require("../modals/User");

// route 1 : fetch all the notes  get , login required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});

// Route 2 :  create a note using : Post "/api/notes/addnote"  login required

router.post(
  "/addnote",
  [
    body("title", "please enter a valid title").isLength({ min: 3 }),
    body("description", "description must be atlest 5 characters").isLength({
      min: 5,
    }),
  ],
  fetchuser,
  async (req, res) => {
    const { title, description, tag } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savednote = await note.save();
      res.json(savednote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("some error occured");
    }
  }
);

// Route 3 :  update a note using : Put "/api/notes/updatenote"  login required
router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  //create a new note object

  const newNote = {};
  if(title){
    newNote.title = title;
  };
  if(description){
    newNote.description = description;
  };
  if(tag){
    newNote.tag = tag;
  };

  // find a note to update and update it
  let  note = await  Note.findById(req.params.id);
  if(!note) {
    return res.status(404).send("note not found");
  }
  if( note.user.toString() !== req.user.id) {
    return res.status(401).send("not allowed");
  };

  note = await Note.findByIdAndUpdate(
    req.params.id,
    { $set: newNote },
    { new: true }
  );
  res.json({note});
});
// Route 4 :  Delete a note using : delete "/api/notes/delete"  login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  

  // find a note to delete:

  let  note = await  Note.findById(req.params.id);
  if(!note) {
    return res.status(404).send("note not found");
  }
  if( note.user.toString() !==  req.user.id) {
    return res.status(401).send("not allowed");
  };

  note = await Note.findByIdAndDelete (req.params.id);
  res.json({ "success"  : "note has been deleted ", note: note });
});

module.exports = router;
