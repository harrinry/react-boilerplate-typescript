/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectHome = (state: ApplicationRootState) => {
  return state.home ? state.home : initialState;
};

const makeSelectUsername = () =>
  createSelector(
    selectHome,
    substate => {
      return substate.username;
    },
  );

export { selectHome, makeSelectUsername };
