import { connect } from "react-redux";
import CalendarBord from "./presentation";
import { createCalendar } from "../../services/calendar";
import {
    addScheduleOpenDialog,
    addScheduleSetValue
} from "../../redux/addSchedule/actions";

import { setSchedules } from "../../services/schedule";
import { asyncSchedulesFetchItem } from "../../redux/schedules/effects";

import {
    currentScheduleSetItem,
    currentScheduleOpenDialog
} from "../../redux/currentSchedule/actions";

const mapStateToProps = state => ({
    calendar: state.calendar,
    schedules: state.schedules,
    hinata: state.hinata,
});

const mapDispatchToProps = dispatch => ({
    openAddScheduleDialog: d => {
        dispatch(addScheduleOpenDialog());
        dispatch(addScheduleSetValue({ date: d }));
    },
    openCurrentScheduleDialog: (schedule, e) => {
        // 他のイベントが発火するのをキャンセル
        e.stopPropagation();
        dispatch(currentScheduleSetItem(schedule));
        dispatch(currentScheduleOpenDialog());
    },
    fetchSchedule: month => {
        dispatch(asyncSchedulesFetchItem(month));
    }
});

const mergeProps = (stateProps, dispatchProps) => {
    const {
        calendar: month,
        schedules: { items: schedules }
    } = stateProps;

    const calendar = setSchedules(createCalendar(month), schedules);

    return {
        ...stateProps,
        ...dispatchProps,
        fetchSchedule: () => dispatchProps.fetchSchedule(month),
        calendar,
        month
    };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CalendarBord);