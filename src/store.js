import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/auth'

export default configureStore({
  reducer: {
    auth: counterReducer,
  },
})