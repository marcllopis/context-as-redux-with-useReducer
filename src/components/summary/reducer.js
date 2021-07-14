import { initialState } from '../../store';
import { Actions } from './actions';


export const SummaryHandler = {
  [Actions.RESET_STATE]: () => initialState,
};