import {createSlice} from "@reduxjs/toolkit";
import { fetchBooks,deleteBook,updateBook,addBook, } from "../actions/actionBook";

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchBooks.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchBooks.rejected, (state,action) => {
            console.log('Error', action.payload)
            state.isError = true;
        });
         builder.addCase(updateBook.pending, (state,action) => {
            state.isLoading = true;
         });
         builder.addCase(updateBook.fulfilled, (state,action) => {
             state.isLoading = false;
             state.data = action.payload;
         });
         builder.addCase(updateBook.rejected, (state,action) => {
            console.log('Error', action.payload)
             state.isError = true;
         });
         builder.addCase(addBook.pending, (state,action) => {
             state.isLoading = true;
         });
         builder.addCase(addBook.fulfilled, (state,action) => {
             state.isLoading = false;
             state.data = action.payload;
         });
         builder.addCase(addBook.rejected, (state,action) => {
             console.log('Error', action.payload)
             state.isError = true;
         });
         builder.addCase(deleteBook.pending, (state,action) => {
             state.isLoading = true;
         });
         builder.addCase(deleteBook.fulfilled, (state,action) => {
             state.isLoading = false;
             state.data = action.payload;
             state.data.filter(item => item.id !== action.payload);
         });
         builder.addCase(deleteBook.rejected, (state,action) => {
             console.log('Error', action.payload)
             state.isError = true;
         });
    
    }
});

export default bookSlice.reducer;