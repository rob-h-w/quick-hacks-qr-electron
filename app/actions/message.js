import type { GetState, Dispatch } from '../reducers/types';

export const SET_MESSAGE = 'SET_MESSAGE';

export function setMessage(message: string) {
  return {
    type: SET_MESSAGE,
    message
  };
}
