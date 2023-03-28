
// import { useEffect } from 'react';
// import {useDispatch ,useSelector } from 'react-redux';
// import {fetchUsers} from './redux/actions/actionUser';


export const ProtectedRoute = (path,element) => {
    const user = JSON.parse(localStorage.getItem('user'));
      
    if (user && user.token) {
          // for Node.js Express back-end
        return { 'x-access-token': user.token };
    } else {
        return {};
      }
    } 


export default ProtectedRoute