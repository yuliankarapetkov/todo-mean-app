import { createSelector } from '@ngrx/store';

import * as fromRoot from '../reducers';
import * as fromAuth from '../reducers/auth.reducer';

export const getIsAuthenticated = createSelector(fromRoot.getAuthState, fromAuth.getIsAuthenticated);