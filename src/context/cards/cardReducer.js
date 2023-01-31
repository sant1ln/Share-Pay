import { types } from "../../types/types";

export const initialCardState = {
  cards: [
    {
      type: 'premium',
      number: '4041 5913 0619 5075',
      expiration: '02/27'
    },
    {
      type: 'gold',
      number: '4041 5913 0619 5075',
      expiration: '02/27'
    },
    {
      type: 'platinum',
      number: '4041 5913 0619 5075',
      expiration: '02/27'
    },
  ],
  selectedCard: {
    type: 'premium',
    number: '4041 5913 0619 5075',
    expiration: '02/27'
  }
}

export const cardReducer = (state = initialCardState, action) => {
  switch (action) {
    case types.setAllCards:
      return {
        ...state,
        cards: action.payload
      }
    case types.selectCard:
      return {
        ...state,
        selectedCard: action.payload
      }
  }
}