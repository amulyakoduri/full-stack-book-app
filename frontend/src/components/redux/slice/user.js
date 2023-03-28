import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers,registerUser,loginUser,logoutUser,deleteUser,updateUser ,addUser} from "../actions/actionUser"; 

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        data: [],
        isError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state,action) => {
            console.log('Error', action.payload)
            state.isError = true;
        });
        builder.addCase(registerUser.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(registerUser.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(registerUser.rejected, (state,action) => {
            console.log('Error', action.payload)
            state.isError = action.error;
        })
        builder.addCase(loginUser.pending, (state,action) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state,action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(loginUser.rejected, (state,action) => {
            console.log('Error', action.payload)
            state.isError = action.error;
        })
         builder.addCase(updateUser.pending, (state,action) => {
             state.isLoading = true;
         });
         builder.addCase(updateUser.fulfilled, (state,action) => {
             state.isLoading = false;
             state.data.push(action.payload);
         });
         builder.addCase(updateUser.rejected, (state,action) => {
             console.log('Error', action.payload)
             state.isError = action.error;
          });
         builder.addCase(addUser.pending, (state,action) => {
           state.isLoading = true;
         });
         builder.addCase(addUser.fulfilled, (state,action) => {
             state.isLoading = false;
             state.data.push(action.payload);
         });
         builder.addCase(addUser.rejected, (state,action) => {
             console.log('Error', action.payload)
             state.isError = action.error;
         });
         builder.addCase(deleteUser.pending, (state,action) => {
            state.isLoading = true;
         });
         builder.addCase(deleteUser.fulfilled, (state,action) => {
             state.isLoading = false;
             state.data.push(action.payload);
             state.data.filter(item => item.id !== action.payload);
         });
         builder.addCase(deleteUser.rejected, (state,action) => {
             console.log('Error', action.payload)
             state.isError = action.error;
         });
         builder.addCase(logoutUser.pending, (state,action) => {
             state.isLoading = true;
         });
         builder.addCase(logoutUser.fulfilled, (state,action) => {
             state.isLoading = false;
             state.data.push(action.payload);
         });
         builder.addCase(logoutUser.rejected, (state,action) => {
             console.log('Error', action.payload)
             state.isError = action.error;
         });
     }
});

export default userSlice.reducer;

