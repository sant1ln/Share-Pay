import { useReducer } from "react"
import { CardContext } from "./CardContext"
import { cardReducer, initialCardState } from "./cardReducer"

export const CardProvider = ({children}) => {
  
  const [cardState, dispatch] = useReducer(cardReducer,initialCardState)

  return (
    <CardContext.Provider value={{cardState,dispatch}}>
      {children}
    </CardContext.Provider>
  )

}