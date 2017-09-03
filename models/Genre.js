const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    create_data:{
        type: Date,
        default : Date.now
    }
});

const Genre = module.exports= mongoose.model('Genre',genreSchema);

module.exports.getGenres= (callback,limit)=>{
    Genre.find(callback).limit(limit);
}

module.exports.addGenre= (genre,callback)=>{
    Genre.create(genre,callback);
}

module.exports.getGenreById= (id,callback)=>{
    Genre.findById(id,callback);
}

module.exports.deleteGenre= (id,callback)=>{
    Genre.findByIdAndRemove(id,callback);
}