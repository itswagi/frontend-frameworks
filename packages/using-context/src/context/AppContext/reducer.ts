import { State, Action, ActionType } from "./types"

export function appReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.INCREMENT: {
      return {count: state.count + 1}
    }
    case ActionType.DECREMENT: {
      return {count: state.count - 1}
    }
  }
}

/*
  If you are running into errors in reducer, double check if all types are 
  handled above or try using the below code in the switch above

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
*/
