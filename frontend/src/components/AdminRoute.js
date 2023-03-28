import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import { fetchBooks} from './redux/actions/actionBook';
import { fetchUsers} from './redux/actions/actionUser';


const AdminRoute = () => {

    const dispatch = useDispatch();

    const {isLoading, data, error} = useSelector((state) => {
        return state.books
    });

    console.log(data, "books")
    const handleBooks =  () => {
        dispatch(fetchBooks())
    }
    const handleUser = () => {
        dispatch(fetchUsers())
    }

     return( 
        <div>
            <button onClick={handleBooks} > List of Users</button>
            <button onClick={handleUser} ><Link to="/admin/bookList">List of Books</Link></button>
        </div>
     )
}

export default AdminRoute