import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const authHeader =() => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user.user.role && user.token) {
      // for Node.js Express back-end
      return { 'x-access-token': user.token };
    } else {
      return {};
    }
  } 

  const user = JSON.parse(localStorage.getItem('user'));


export const registerUser = createAsyncThunk('registerUser', async({name,email,password,role}) => {
    const response = await axios.post("http://localhost:2000/api/v1/register", {
        name: name,
        email: email,
        password: password,
        role: role
    });
    return response.data
});

export const loginUser = createAsyncThunk('loginUser', async ({email,password}) => {
   const response = await axios.post("http://localhost:2000/api/v1/login",{email,password})
   if (response.data.token) {
       localStorage.setItem("user", JSON.stringify(response.data));
    }
    console.log(response.data)
  return response.data;
});

export const logoutUser = createAsyncThunk('logutUser', async() => {
    localStorage.removeItem("user");
})

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
    const response = await axios.get('http://localhost:2000/api/v1/users',{cookies: user.token})
    return response.data
});

export const deleteUser = createAsyncThunk('deleteUser',  async(id) => {
    const response = await axios.delete(`http://localhost:2000/api/v1/user/${id}`,{cookies: user.token})
    const deleteUser = response.data.filter((user) => {
         return user.id !== id
    })
    return deleteUser
})

export const updateUser =  authHeader(createAsyncThunk('updateUser', async({id,name,email,password,role}) => {
    const response = await axios.put(`http://localhost:2000/api/v1/book/${id}`,{cookies: user.token}, {
        name: name,
        demail: email,
        password: password,
        role: role
    })

    return response.data
}))

export const addUser =  createAsyncThunk('addBook',async({name,email,password,role}) => {
    const response = await axios.post('http://localhost:2000/api/v1/user/new',{cookies: user.token}, {
        name: name,
        demail: email,
        password: password,
        role: role
    })

    return response.data;
});


