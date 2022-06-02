import * as React from 'react'
import { appReducer } from './reducer';
import { State, AppProviderProps, Dispatch } from './types';

const initialState: State = {
  posts: []
}

const AppStateContext = React.createContext<
  {state: State; dispatch: Dispatch} | undefined
>(undefined)

function AppProvider({children}: AppProviderProps) {
  const [state, dispatch] = React.useReducer(appReducer, initialState)

  const value = {state, dispatch}
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  )
}

function useApp() {
  const context = React.useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {AppProvider, useApp}