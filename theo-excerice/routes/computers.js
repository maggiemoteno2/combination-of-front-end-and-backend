const ComputerModel = require("../models/computerModel");

const computers = function(app) {
  app.get("/computers", function(req, res) {
    ComputerModel.find()
      .then(data => res.send(data))
      .catch(e => console.log(e));
  });

  app.post("/computer", function(req, res) {
    console.log("name", req.body.name);
    const computerModel = new ComputerModel({
      name: req.body.name
    });

    computerModel
      .save()
      .then(computer => res.send(computer))
      .catch(e => console.log(e));
  });

  app.delete("/computers/:id", function(req, res) {
    console.log("delete", req.params.id);
    ComputerModel.findByIdAndDelete({ _id: req.params.id }, req.body).then(
      function() {
        ComputerModel.findOneAndDelete({ _id: req.params.id }).then(function(
          data
        ) {
          res.send(data);
        });
      }
    );
  });
};

module.exports = { computers };
