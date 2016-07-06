var express = require('express')
var app = express();

var burgers = [
                "Hamburger",
                "Cheese Burger",
                "Dble Cheese Burger"
               ];

var tacos = [
                "Soft Taco",
                "Crunchy Taco",
                "Super Taco"
               ];

app.get("/pick_a_color/:color", function (req, res) {
    var color = req.params.color;
    res.send("Your color is " + color);

});

app.get("/taco/:index", function (req, res){    
    var index = req.params.index;
    var choice = tacos[index];
    res.send(choice);   
});

app.get("/burger/:index", function (req, res){    
    var index = req.params.index;
    var choice = burgers[index];
    res.send(choice);   
});


app.get("/pickanumber", function (req, res) {
   var number = parseInt(req.query.number);
   var correctAnswer = 7;
   if (number === correctAnswer) {
       res.send("Nailed it!");
   } else if (number < correctAnswer) {
       res.send("Too Low");
   } else {
       res.send("Too High");
   }

   res.send("You picked " + number + "!");
   
});

app.get("/", function (req, res) {
    res.send("Kyle Gibbons");
});

app.get("/burgers", function (req, res) {
    //send all the burgers     
    res.send(burgers.join(", "));
});

app.get("/tacos", function (req, res) {
    //send all the tacos           
    res.send(tacos.join(", "));
});

app.listen(3000, function () {
});