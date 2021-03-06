import React from 'react'
import * as styles from "./style.css";
import { Typography } from "@material-ui/core";
import {
    isSameDay,
    isSameMonth,
    isFirstDay,
    getMonth
} from "../../services/calendar";
import Schedule from "../Schedule";

import dayjs from "dayjs";
import "dayjs/locale/ja";
dayjs.locale("ja");

const calendarElement = ({ day, month, schedules, ...props }) => {

    // 今月以外をグレーダウン
    const currentMonth = getMonth(month);
    const isCurrentMonth = isSameMonth(day, currentMonth);

    const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";

    // 文字列のフォーマットをどうするか
    // 月の最初だけ月情報をつける
    const format = isFirstDay(day) ? "M月D日" : "D";

    // 当日かどうか判断
    const today = dayjs();
    const isToday = isSameDay(day, today);
    return (
        <div className={styles.element}>
            <Typography
                className={styles.date}
                align="center"
                variant="caption"
                component="div"
                color={textColor}
            >
                <span className={isToday ? styles.today : ''}>
                    {day.format(format)}
                </span>
            </Typography>
            <div className={styles.schedules}>
                {schedules.map(e => (
                    <Schedule key={e.id} schedule={e} {...props} />
                ))}
            </div>
        </div>
    );
};

export default calendarElement;