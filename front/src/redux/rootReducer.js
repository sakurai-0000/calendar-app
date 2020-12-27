import { combineReducers } from "redux";
import calendarReducer from "./calendar/reducer";
import addScheduleReducer from "./addSchedule/reducer";
import schedulesReducer from "./schedules/reducer";
import currentScheduleReducer from "./currentSchedule/reducer";
import hinataInfoReducer from "./swich/reducer";

const rootReducer = combineReducers({
    calendar: calendarReducer,
    addSchedule: addScheduleReducer,
    currentSchedule: currentScheduleReducer,
    schedules: schedulesReducer,
    hinataInfo: hinataInfoReducer,
});

export default rootReducer;