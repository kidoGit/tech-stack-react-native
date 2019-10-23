// giving default value of null to state because initially when the app runs, state will be undefined which should not be returned from reducer
export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};