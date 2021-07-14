import { initialState } from '../../store';
import { Actions } from './actions';


export const SentenceHandler = {
  [Actions.RESET_SENTENCE]: (state) => ({
    ...state,
    sentences: initialState.sentences,
  }),
  [Actions.FACT]: (state, payload) => ({
    ...state,
    sentences: payload.sentences,
  }),
};