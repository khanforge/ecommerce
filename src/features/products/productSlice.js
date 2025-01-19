import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./counterApi";

const initialState = {
    value:0,
    status:'idle',
};

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async(amount)=>{
        const response = await fetchCount(amount);
        return response.data;
    }
)

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state) => {
            state.value +=1;

        }
    },
    extraReducers:(builder)=>{
        bilder.addCase(incrementAsync.pending, (state)=>{
            state.status = "Loading";
        }).addCase(incrementAsync.fulfilled, (state, action) => {
            state.value += action.payload;
            state.status = "idle"
        })
    }
});
export const {increment} = counterSlice.actions;
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;