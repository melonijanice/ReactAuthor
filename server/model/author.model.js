const mongoose=require("mongoose");
const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, "An Authors name is required"],
        minlength:[5, "A name must be atleast 5 characters long"]
    }
})
module.exports = mongoose.model('Author', AuthorSchema);//to use it in controller, export the schema