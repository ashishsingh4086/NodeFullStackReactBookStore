const express= require('express');


const app = express();
const bodyParser= require('body-parser');
const mongoose= require('mongoose');
const Genre = require('./models/Genre');
const Book = require('./models/Book');
const keys= require('./dev');
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI);

app.get('/',(req,res)=>{
    res.send('hello');
});

app.get('/api/genres',(req,res)=>{
    Genre.getGenres((err,genres)=>{
        if(err){
            throw err;
        }
        res.json(genres);
    })
});

app.get('/api/genres/:id', (req,res)=>{
    Genre.getGenreById((req.params.id),(err,genre)=>{
            if(err){
                throw err;
            }
            res.json(genre);
    });
});


app.post('/api/genres',(req,res)=>{
    const genre = req.body;
    Genre.addGenre(genre, (err,genre)=>{
        if(err){
            throw err;
        }
        res.json(genre);
    })
})
app.post('/api/genres/delete/:id',(req,res)=>{
    Genre.deleteGenre(req.params.id,(err)=>{
        if(!err){
            res.redirect("/api/genres");
           console.log("yay");
        }
        else{
            throw err;
        }
        

    })
})
app.get('/api/book',(req,res)=>{
    Book.getBook((err,book)=>{
        if(err){
            throw err;
        }
        res.json(book);
    })
});

app.get('/api/book/:id',(req,res)=>{
    Book.getBookById(req.params.id, (err,book)=>{
        if(err){
            throw(err);
        }
        res.json(book);
    });
});

app.post('/api/book',(req,res)=>{
    const book = req.body;
    Book.addBook(book, (err,books)=>{
        if(err){
            throw err;
        }
        res.json(books);
    })
})
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("Port is running on 5000.....");