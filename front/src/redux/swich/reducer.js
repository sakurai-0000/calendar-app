import {
    HINATA_SET_SWICH_CHECH,
} from "./actions";

const init = {
    isSwitched: false,
};

const hinataBirthdayReducer = (state = init, action) => {
    const { type, payload } = action;
    switch (type) {
        case HINATA_SET_SWICH_CHECH:
            return { ...state, isSwitched: payload };
        default:
            return state;
    }
};

export default hinataBirthdayReducer;