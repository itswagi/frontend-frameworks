import * as React from 'react'
import { appReducer } from './reducer';
import { State, AppProviderProps, Dispatch } from './types';

const AppStateContext = React.createContext<
  {state: State; dispatch: Dispatch} | undefined
>(undefined)

function AppProvider({children}: AppProviderProps) {
  const [state, dispatch] = React.useReducer(appReducer, {count: 0})

  const value = {state, dispatch}
  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  )
}

function useCount() {
  const context = React.useContext(AppStateContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {AppProvider, useCount}