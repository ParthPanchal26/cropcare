import { configureStore } from '@reduxjs/toolkit'
import navSlice from './features/navbar/navbarSlice'

export const store = configureStore({
  reducer: {
    navbar: navSlice,
  },
})