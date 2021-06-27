import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contact: null
    },
    reducers: {
        allContact: (state, action) => {
            state.contact = action.payload;
        },
    },
})

export const { allContact } = contactSlice.actions;
export const selecContact = (state: any) => state.contact;
export default contactSlice.reducer;
