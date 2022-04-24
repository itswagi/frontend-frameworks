export type Dispatch = (action: Action) => void
export type State = {count: number}
export type AppProviderProps = {children: React.ReactNode}

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined ? {
    type: Key
  } : {
    type: Key
    payload: M[Key]
  }
} 

export enum ActionType {
  INCREMENT = 'increment',
  DECREMENT = 'decrement'
}

export type ActionEvents = {
  [ActionType.INCREMENT]: undefined
  [ActionType.DECREMENT]: undefined
}

export type Action = ActionMap<ActionEvents>[keyof ActionMap<ActionEvents>]