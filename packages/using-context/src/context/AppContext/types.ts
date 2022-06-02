import { PostDataType } from '../../utils/mocks';

export type Dispatch = (action: Action) => void;
export type State = { posts: PostDataType[] | [] };
export type AppProviderProps = { children: React.ReactNode };

export type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
		? {
				type: Key;
		  }
		: {
				type: Key;
				payload: M[Key];
		  };
};

export enum ActionType {
	ADD_FETCHED_POSTS = 'add_fetched_posts',
}

export type ActionEvents = {
	[ActionType.ADD_FETCHED_POSTS]: PostDataType[];
};

export type Action = ActionMap<ActionEvents>[keyof ActionMap<ActionEvents>];
