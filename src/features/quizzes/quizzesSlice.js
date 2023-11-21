import { createSlice } from "@reduxjs/toolkit";

const quizzesSlice = createSlice({

    name: "quizzes",
    initialState: {
        quizzes: {}
    },

    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;       
        }
    }

})

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer