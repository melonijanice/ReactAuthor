const authorController = require('../controller/author.controller'); 
module.exports=function(app){

    app.get('/api/authors/',authorController.getAll),
    app.post('/api/authors/',authorController.create),
    app.get('/api/authors/:id',authorController.getOne),
    app.put('/api/authors/:id',authorController.update),
    app.delete('/api/authors/:id',authorController.delete)

}