import React from "react"

const StateContext = React.createContext()
const DispatchContext = React.createContext()

// handle the reducer
const stateReducer = (state, action) => {
  switch (action.type) {
    case "isMenuVisible": {
      return { isMenuVisible: !state.isMenuVisible }
    }

    case "isMobileMenuVisible": {
      return { isMobileMenuVisible: true }
    }

    case "mobileMenuHide": {
      return { isMobileMenuVisible: false }
    }

    case "isInfo": {
      return { isInfo: !state.isInfo }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const initialState = {
  isMenuVisible: false,
  isMobileMenuVisible: false,
  isInfo: false,
}

function StateProvider({ children }) {
  const [state, dispatch] = React.useReducer(stateReducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

function useAppState() {
  const context = React.useContext(StateContext)
  if (context === undefined) {
    throw new Error("useContext must be used within a StateProvider")
  }
  return context
}

function useAppDispatch() {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error("useContext must be used within a StateProvider")
  }
  return context
}

function useContext() {
  return [useAppState(), useAppDispatch()]
}

export { StateProvider, useContext }
