const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type:String
     
    },
    pages:{
        type:String
    },
    image_url:{
        type:String
    },
    buy_url:{
        type:String
    },
    create_data:{
        type: Date,
        default : Date.now
    }
});

const Book = module.exports= mongoose.model('Book',bookSchema);

module.exports.getBook= (callback,limit)=>{
    Book.find(callback).limit(limit);
}

module.exports.addBook =(book,callback)=>{
    Book.create(book,callback);
}

module.exports.getBookById = (id,callback)=>{
    Book.findById(id,callback);
}