import { createSlice } from "@reduxjs/toolkit";


const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },

    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload
        }
    }
})

export const { addCard } = cardsSlice.actions
export const selectCardById = (id) => state => state.cards.cards[id]

export default cardsSlice.reducer