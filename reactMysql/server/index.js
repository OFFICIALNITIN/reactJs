import express from 'express';
import mysql from 'mysql2';
import cors from 'cors'

const app = express()


const db = mysql.createConnection({
    connectionLimit:10,
    host:"localhost",
    user:"root",
    password:"@Nitin147",
    database:"test"
})
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.json("hello from backend")
})

app.get("/books",(req,res)=>{
    const q = "SELECT * FROM books;";
    db.query(q,(err,data)=>{
        if(err) return res.json(err)

        return res.json(data)
    })
})

app.post("/books",(req,res)=>{
    const q = "INSERT INTO books (`title`, `desc`,`price`, `cover`) VALUES (?)"
    const values = [
        req.body.title,
        req.body.desc,
        req.body.price,
        req.body.cover
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Books has been created successfully")
    })
})

app.delete("/books/:id",(req,res)=>{
    const bookId = req.params.id;
    const q =   "DELETE FROM books WHERE  id = ?"

    db.query(q,[bookId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been deleted successfully")
    })
})


app.listen(8800, ()=>{
    console.log("Connected to backend!")
})