import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { authHeader } from "./actionUser";
const user = JSON.parse(localStorage.getItem('user'));

export const fetchBooks = createAsyncThunk('fetchBooks',  authHeader(async () => {
    const response = await axios.get('http://localhost:2000/api/v1/books', {cookies: user.token})
    return response.data.books
}))

export const deleteBook = createAsyncThunk('deleteBook',  async(id) => {
    const response = await axios.delete(`http://localhost:2000/api/v1/book/${id}`,{cookies: user.token})
    return response.data
})

export const updateBook = createAsyncThunk('updateBook',  async({id,name,description}) => {
    const response = await axios.put(`http://localhost:2000/api/v1/book/${id}`,{cookies: user.token},{
        name: name,
        description: description
    })

    return response.data
})


export const addBook = createAsyncThunk('addBook', async({name,description}) => {
       const response = await axios.post('http://localhost:2000/api/v1/book/new', 
       {cookies: user.token},
       {
         name: name,
         description: description,
       }, )

    console.log(response.data, "RESSSS")
    return response.data

})



