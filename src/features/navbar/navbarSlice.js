import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const counterSlice = createSlice({
  name: 'navSlice',
  initialState,
  reducers: {
    updateNav: (state) => !state
  },
})

export const { updateNav } = counterSlice.actions

export default counterSlice.reducer