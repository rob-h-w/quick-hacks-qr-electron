import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type counterStateType = {
  +counter: number
};

export type messageStatetype = {
  +message: string
};

export type Action = {
  +message: string,
  +type: string
};

export type GetState = () => messageStatetype;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
