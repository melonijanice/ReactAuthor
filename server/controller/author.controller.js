const Authors = require('../model/author.model'); 
module.exports.getAll=(request,response)=>
{
    Authors.find({})
            .then((authors)=>{
                console.log("Fetching all authors...");
                console.log(authors);
                response.json(authors);
            })
            .catch(err =>
        {
            console.log("Unable to fetch the Author");
            response.json(err)}
        );
}
module.exports.create=(request,response)=>
{
    Authors.create(request.body)
    .then(author=>{
        console.log("Sucessfully added an author");
        response.json(author)}
    )
    .catch(err=>{
        response.status(400).json(err)//catch errors
        console.log("Error adding to DB at API");
        response.json(err)})
}
module.exports.getOne=(request,response)=>
{
    Authors.findById({_id:request.params.id})
            .then((author)=>{
                console.log("Getting single Author");
                console.log(author)
             
                response.json(author);
            })
            .catch(err =>{response.status(400).json(err);
                            }
        );
}

module.exports.update=(request,response)=>
{
    Authors.findByIdAndUpdate(request.params.id,request.body,
        {new:true,runValidators:true}
        //return updated objects and run the validators that were used for update
        )
    .then(updatedauthor=>response.json(updatedauthor))
    .catch(err=>{
        response.status(400).json(err)
        console.log("Error adding to DB at API");
        response.json(err)})
}

module.exports.delete=(request,response)=>
{
    Authors.findByIdAndDelete(request.params.id)
    .then(deletedauthor=>response.json(deletedauthor))
    .catch(err=>response.json(err))
}
