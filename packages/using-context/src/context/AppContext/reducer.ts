import { State, Action, ActionType } from "./types"

// export const appReducer = (draft: State, action: Action) => {
//   switch(action.type) {
//     case ActionType.ADD_FETCHED_POSTS: {
//       if( !draft.posts?.length ) {
//         draft.posts = [ ...action.payload ]
//         break;
//       } else {
//         draft.posts = [ ...draft.posts, ...action.payload ]
//         break;
//       }
//     }
//   }
// }

export function appReducer(state: State, action: Action) {
  switch (action.type) {
    case ActionType.ADD_FETCHED_POSTS: {
      return {
        ...state,
       posts: [
         ...state.posts,
         ...action.payload
       ]
      }
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
