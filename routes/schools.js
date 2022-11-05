const express = require("express");
const router = express.Router();
const School = require("../models/Schools");

//ADD NEW SCHOOL
router.post("/", async (req, res) => {
  const school = new School({
    name: req.body.name,
    email: req.body.email,
    is_registered: req.body.is_registered,
  });
  try {
    const newSchool = await school.save();
    res.json(newSchool);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET ALL SCHOOLS
router.get("/", async (req, res) => {
  try {
    const schools = await School.find();
    res.json(schools);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET SCHOOL BY ID
router.get("/:schoolId", async (req, res) => {
  try {
    const school = await School.findById(req.params.schoolId);
    res.json(school);
  } catch (err) {
    res.json({ message: err });
  }
});

//DELETE SCHOOL
router.delete("/:schoolId", async (req, res) => {
  try {
    const deletedSchool = await School.deleteOne({ _id: req.params.schoolId });
    res.json(deletedSchool);
  } catch (err) {
    res.json({ message: err });
  }
});

//UPDATE SCHOOL
router.patch("/:schoolId", async (req, res) => {
  try {
    const updatedSchool = await School.updateOne(
      { _id: req.params.schoolId },
      {
        $set: {
          is_registered: req.body.is_registered,
        },
      }
    );
    res.json(updatedSchool);
  } catch (err) {
    res.json({ message: err });
  }
});

//GET SCHOOLS' CLASSROOMS
router.get("/classrooms", (req, res) => {
  res.send("Classrooms Page");
});

module.exports = router;
