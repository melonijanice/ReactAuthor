const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/authors", { //creates a collection with this name
    useNewUrlParser: true, //flags needed for fallback options
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

