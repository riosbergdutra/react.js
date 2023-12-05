import { createSlice } from "@reduxjs/toolkit";

// Cria um slice Redux para o contador
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    // Reduz o estado para incrementar o valor
    increment: (state) => {
      state.value += 1;
    },
    // Reduz o estado para decrementar o valor
    decrement: (state) => {
      state.value -= 1;
    },
    // Reduz o estado para incrementar o valor por uma quantidade específica
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

// Exporta ações e o redutor do slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;