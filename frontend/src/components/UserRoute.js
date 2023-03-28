
import { useSelector } from 'react-redux';

const UserRoute = () => {
    const {isLoading, data, error} = useSelector((state) => {
        return state.books
    });
    
     return(
        <div>
          <h1>Book List</h1>
          {data.map((book) => {
            return(
                <div>
                    <h1>{book.name}</h1>
                    <p>{book.description}</p>
                </div>
            )
          })}
        </div>
    )
}
export default UserRoute