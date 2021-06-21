import {
    INCREMENT,
    DECREMENT,
    ADD_ITEM,
    DELETE_ITEM
} from '../actions';

const INIT_STATE = {
    user: 0,
    itemList: [],
};

const authReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, user: state.user + 1 };
        case DECREMENT:
            return { ...state, user: state.user - 1};
        case ADD_ITEM:
            return { ...state, itemList: [...state.itemList ,{item: action.payload.item, id: Math.random()}] };
        case DELETE_ITEM:
            return { ...state, itemList: state.itemList.filter(item => item.id != action.payload.id) };
        default: return { ...state };
    }
}
export default authReducer