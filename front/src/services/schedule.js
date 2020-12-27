import { isSameDay } from './calendar';
import dayjs from "dayjs";

export const setSchedules = (calendar, schedules) => {
    const schedule = schedules.schedule || [];
    const hinataSchedule = schedules.hinataSchedule || [];
    return calendar.map(c => ({
        date: c,
        schedules: schedule.filter(e => isSameDay(e.date, c)),
        hinataSchedules: hinataSchedule.filter(e => isSameDay(e.date, c))
    }));
};

export const formatSchedule = schedule => ({
    ...schedule,
    date: dayjs(schedule.date)
});

export const isCloseDialog = schedule => {
    const message = "保存されていない変更を破棄しますか？";

    return isScheduleEmpty(schedule) || window.confirm(message);
}


const isScheduleEmpty = schedule =>
    !schedule.title && !schedule.description && !schedule.location;