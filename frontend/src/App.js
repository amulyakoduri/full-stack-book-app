import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from "./components/Register";
import AdminRoute from "./components/AdminRoute";
import UserRoute from "./components/UserRoute";

import './App.css';
import BookList from "./components/BookList";
import UserList from './components/UserList';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user.token, "token")
  return (
    <div>
    
    <BrowserRouter>
     <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path={ user.user.role? '/admin': '/user'} element={user.user.role? <AdminRoute/> :<UserRoute/> }/>
        <Route exact path='/admin/bookList' element={<BookList/>}/>
        <Route exact path='/admin/userList' element={<UserList/>}/>
     </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
