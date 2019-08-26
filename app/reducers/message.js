// @flow
import { SET_MESSAGE } from '../actions/message';
import type { Action } from './types';

export default function message(state: string = '', action: Action) {
  switch (action.type) {
    case SET_MESSAGE:
      return action.message;
    default:
      return state;
  }
}
