import { useReducer } from "react"
import { types } from "../../types/types"
import { CardContext } from "./CardContext"
import { cardReducer, initialCardState } from "./cardReducer"

export const CardProvider = ({ children }) => {

  const [cardState, dispatch] = useReducer(cardReducer, initialCardState)


  const setSelectedCard = (card) => ({
    type: types.selectCard,
    payload: card
  })

  return (
    <CardContext.Provider value={{ cardState, dispatch }}>
      {children}
    </CardContext.Provider>
  )

}