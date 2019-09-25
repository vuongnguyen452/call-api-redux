import * as Types from './../constants/ActionTypes';
const initialState = {
    isShow: false
}
const loading = (state = initialState, action) => {
    switch (action.type) {
        case Types.SHOW_LOADING:
            return {
                ...state,
                isShow: true
            };
        case Types.HIDE_LOADING:
            return {
                ...state,
                isShow: false
            }
        default: return state;
    }
}
export default loading;