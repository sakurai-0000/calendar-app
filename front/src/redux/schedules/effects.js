import {
    schedulesSetLoading,
    schedulesFetchItem,
    schedulesAddItem,
    schedulesDeleteItem,
    schedulesAsyncFailure
} from "./actions";
import { get, post, deleteRequest } from "../../services/api";
import { formatSchedule } from "../../services/schedule";

export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
    dispatch(schedulesSetLoading());
    try {
        // エラー処理テスト用
        // const result = await get(`schedules`);
        // const result = await get(`schedules?month=${month}&year=${year}`);
        const result = await get(`schedules?month=${month}&year=${year}`);
        const resultHinata = await get(`hinata?month=${month}&year=${year}`);

        // const formatedSchedule = result.map(r => formatSchedule(r));
        // const formatedHinataSchedule = resultHinata.map(r => formatSchedule(r));
        // console.log(formatedSchedule);
        // console.log(formatedHinataSchedule);
        const formatedSchedule = {
            schedule : result.map(r => formatSchedule(r)),
            hinataSchedule : resultHinata.map(r => formatSchedule(r)),
        };
        console.log(formatedSchedule);
        dispatch(schedulesFetchItem(formatedSchedule));
    } catch (err) {
        console.log(err);
        dispatch(schedulesAsyncFailure(err.message));
    }

};

export const asyncSchedulesAddItem = schedule => async dispatch => {
    // loading: tureにする
    dispatch(schedulesSetLoading());
    try {
        const body = { ...schedule, date: schedule.date.toISOString() };
        const result = await post("schedules", body);

        const newScgedules = formatSchedule(result);
        dispatch(schedulesAddItem(newScgedules));
        dispatch(schedulesAsyncFailure(err.message));
    } catch (err) {
        console.log(err);
        dispatch(schedulesAsyncFailure(err.message));
    }
}

export const asyncSchedulesDeleteItem = id => async (dispatch, getState) => {
    dispatch(schedulesSetLoading());
    const currentSchedules = getState().schedules.items;
    try {
        await deleteRequest(`schedules/${id}`);

        // 成功したローカルのsteteを削除
        const newScgedules = currentSchedules.filter(s => s.id !== id);
        dispatch(schedulesDeleteItem(newScgedules));
    } catch (err) {
        console.log(err);
        dispatch(schedulesAsyncFailure(err.message));
    }
};
