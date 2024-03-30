import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Add = () => {
    const [ successMsg, setSuccessMsg] = useState('')
    const [ errorMsg, setErrorMsg] = useState('')

    const [book,setBook] = useState({
        title:"",
        desc:"",
        price:null,
        cover:""
    })

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setBook(prev=>({...prev,[e.target.name]:e.target.value}))
    }

    const handleClick =  async(e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/books", book)
            setSuccessMsg("Book is added Successfully")
            setErrorMsg('')
            setTimeout(()=>{
                navigate("/")
            },3000)
            
        } catch (error) {
            console.log(error)
            setErrorMsg("Some thing went Wrong")
        }
    }

    console.log(book)
  return (
    <div className='form'>
        <h1>Add New Book</h1>
        <input type='text' placeholder='title' onChange={handleChange} name='title'/>
        <input type='text' placeholder='desc' onChange={handleChange} name='desc'/>
        <input type='number' placeholder='price' onChange={handleChange} name='price'/>
        <input type='text' placeholder='cover' onChange={handleChange} name='cover'/>
        <button onClick={handleClick}>Add</button>
        <div className='status'>
            {successMsg && <p style={{color:"green"}}>{successMsg}</p>}
            {errorMsg && <p style={{color:"red"}}>{errorMsg}</p>}
        </div>
    </div>
  )
}

export default Add