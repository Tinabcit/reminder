const express = require("express");
const ejsLayouts = require("express-ejs-layouts");
const app = express();
require('dotenv').config();
const path = require("path");
const reminderController = require("./controllers/reminder_controller");
const authController = require("./controllers/auth_controller.js");
const morgan = require("morgan");


app.use(express.static(path.join(__dirname, './public')))
app.use(express.urlencoded({extended:false}));
app.use(ejsLayouts);
app.set("view engine","ejs");

// Case 1: User goes to localhost:8081/ -> Homepage/Marketing Page
app.get("/",function(req,res) {
    res.send("Welcome to our landing page. Marketing content goes here");
})
// facebook.com/cindy/newsfeed

// Case 2: User goes to localhost:8081/reminder -> Show a list of reminders

app.get("/reminder", reminderController.list)

// Case 3: User goes to localhost:8081/reminder/new -> Show a CREATE REMINDER PAGE
app.get("/reminder/new", reminderController.new)

// Case 4: User SENDS NEW REMINDER DATA TO US ((CREATING A REMINDER))

app.post("/reminder", reminderController.create)

//Case 5: User wants to SEE an individual reminder

app.get("/reminder/:id",reminderController.listOne)

// Case 6: User wants to EDIT an individual reminder

//app.get("/reminder/edit/id:",reminderController.edit)

// Case 7: User wants to UPDATE by clicking the UPDATE BUTTON from Case 6, and excepts their reminder to be updated

//app.post("/reminder/edit/id:", reminderController.update)

// Case 8: User clicks the DELETE BUTTON and we expect the reminder to be deleted.

app.post("/reminder/delete/id:", reminderController.delete)


//app.get("/register",authController.register);
//app.get("/login",authController.login);
//app.get("/register",authController.registerSubmit);
//app.get("/login",authController.loginSubmit);

// localhost:8081
app.listen(8081);