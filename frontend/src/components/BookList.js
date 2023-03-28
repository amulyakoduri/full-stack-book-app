
import { useEffect, useState } from 'react';
import { fetchBooks,deleteBook,addBook,updateBook} from './redux/actions/actionBook';
import { useDispatch,useSelector } from 'react-redux';

const BookList = () => {
    const [name, setName] = useState('')
    const [description, setDec] = useState('')
    const [term, setTerm] = useState(true)

    const dispatch = useDispatch();
     const {isLoading, data, error} = useSelector((state) => {
         return state.books
     });

     useEffect(() => {
      dispatch(fetchBooks())
     },[])

     const handleBookEdit = (id) => {
        setTerm(true)
        const {name,description} = data.map((user) => user.id === id )
        const updatedData = {
            name: name,
            description: description
        }

        dispatch(updateBook({...updatedData}))
     }

     const handleBookDelete = (id) => {
        dispatch(deleteBook(id))
     }
    
     const handleSubmitAdd = (e) => {
        e.preventDefault();
        const book = {
            name: name,
            description: description
        }
        console.log(book, "books data" )
      dispatch(addBook({...book}))
        
     }
     return(
        <div>
          <form onSubmit={term ? handleSubmitAdd: handleBookEdit}>
            <input type="name" defaultValue={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" defaultValue={description} onChange={(e) => setDec(e.target.value)}/>
            <button>{term ? 'Add': 'submit'}</button>
          </form>
          {data.map((book) => {
            return(
                <div key={book.id}>
                    <h1>{book.name}</h1>
                    <p>{book.description}</p>
                    <button onClick={() =>handleBookEdit(book.id)}>Edit</button>
                    <button onClick={() => handleBookDelete(book.id)}>Delete</button>
                </div>
            )
          })}
        </div>
    )
}
export default BookList