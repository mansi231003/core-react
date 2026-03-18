import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
     incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    multiplyByAmount: (state, action) => {
        const [value1,value2] = action.payload
    state.value= (state.value *= value1)+value2

    },
  },
})

export const { increment, decrement, multiplyByAmount } = counterSlice.actions

export default counterSlice.reducer