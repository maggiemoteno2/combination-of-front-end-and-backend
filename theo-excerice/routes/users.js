const UsersModel = require("../models/usersModel");

const users = app => {
  app.get("/users", function(req, res) {
    UsersModel.find()
      .then(data => res.send(data))
      .catch(e => console.log(e));
  });

  app.post("/usersAdded/:name", function(req, res) {
    const userSchema = new UsersModel({
      name: req.params.name
    });

    userSchema
      .save()
      .then(users => res.send(users))
      .catch(e => console.log(e));
  });

  app.delete("/users/delete/:id", function(req, res) {
    console.log("my id", req.params.id);
    UsersModel.findByIdAndDelete({ _id: req.params.id }).then(function(data) {
      res.send(data);
    });
  });
};

module.exports = { users };
