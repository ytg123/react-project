import * as  constants from  './constants';

export const showFn = () => ({
	type:constants.CHANGE_STATUS_IS
});

export const hideFn = () => ({
	type:constants.CHANGE_STATUS_NOT
});