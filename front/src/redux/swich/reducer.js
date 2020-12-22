import {
    HINATA_SET_SWICH_CHECH,
} from "./actions";
import { setBirthDay } from "../../services/hinata";

const init = {
    hinataInfo: setBirthDay(),
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