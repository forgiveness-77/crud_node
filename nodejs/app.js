const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use("*", cors());
app.use(express.json())

mongoose
  .connect("mongodb://localhost:27017/users")
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });




  const userSchema = mongoose.Schema({
    title: {type:String, required:true},
    fName: {type:String, required:true},
    lName: {type:String, required:true},
    position: {type:String, required:true},
    company: {type:String, required:true},
    business_arena: {type:String, required:true},
    employees: {type:String, required:true},
    street: {type:String, required:true},
    information: {type:String, required:true},
    zipCode: {type:String, required:true},
    place: {type:String, required:true},
    country: {type:String, required:true},
    code: {type:String, required:true},
    phoneNumber: {type:String, required:true}, 
    email: {type:String, required:true},
  });

  const userModel = mongoose.model("User", userSchema);

// Create a new user
app.post("/user/create", async (req, res) => {
    try {
      const user = new userModel(req.body);
      await user.save();
      res.status(201).send({ success: true, message: "User added successfully", data: user });
    } catch (error) {
      res.status(500).send({ success: false, message: "Error creating user", error: error.message });
    }
  });
  
  // Get all users
  app.get("/users", async (req, res) => {
    try {
      const users = await userModel.find({});
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send({ success: false, message: "Error fetching users", error: error.message });
    }
  });
  
// update a user
app.put('/user/:id', async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).send('Invalid user ID');
    }
  
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        {
          title: req.body.title,
          fName: req.body.fName,
          lName: req.body.lName,
          position: req.body.position,
          company: req.body.company,
          business_arena: req.body.business_arena,
          employees: req.body.employees,
          street: req.body.street,
          information: req.body.information,
          zipCode: req.body.zipCode,
          place: req.body.place,
          country: req.body.country,
          code: req.body.code,
          phoneNumber: req.body.phoneNumber,
          email: req.body.email
        },
        { new: true }
      );
  
      if (!user) {
        return res.status(500).send('The user cannot be updated!');
      }

      res.send(user);
    } catch (err) {
      res.status(500).send('An error occurred while updating the user.').send({error: err});
    }
  });

  // Delete a user by ID
app.delete("/user/:id", async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).send({ success: false, message: "Invalid user ID" });
    }
  
    try {
      const user = await userModel.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).send({ success: false, message: "User not found" });
      }
      res.status(200).send({ success: true, message: "User deleted successfully" });
    } catch (error) {
      res.status(500).send({ success: false, message: "Error deleting user", error: error.message });
    }
  });
  

 


app.listen(3000, () => {
  console.log("Server running port 3000......");
});
