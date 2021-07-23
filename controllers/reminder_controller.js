let database = require("../database");
const fs = require("fs");
// const accessKey = "R7LIEyG41oZEV8epVFNqNVdmqurVDUMEJ7eGjM8oS_eQ";

let remindersController = {
  list: (req, res) => {
    // Step1: Make a resquest to the unsplash photos URL

    //res.render("reminder/index",{
    //   reminders: database.cindy.reminders,
    // });
    const listOfReminders = {
      reminders: database.cindy.reminders
    }
    res.send(listOfReminders);
  },

  new: (req, res) => {
    res.render("reminder/create");
  },
  create: (req, res) => {
    let reminder = {
      id: database.cindy.reminders.length + 1,
      title: req.body.title,
      description: req.body.description,
      completed: false,
    }
    database.cindy.reminders.push(reminder);
    res.redirect("/reminders");
  },
  listOne:function(req, res){
    let reminderToFind = req.params.id;
    let searchResult = database.cindy.reminders.find(function (reminder) {
      return reminder.id == reminderToFind;
    })
    if (searchResult != undefined) {
      res.render("reminder/single-reminder", { reminderItem: searchResult });
    } else {
      res.render("reminder/index", { reminders: database.cindy.reminders });
    }
  }
}
module.exports = remindersController;
