import React, { useEffect } from "react";
import { GridList, Typography } from "@material-ui/core";
import * as styles from "./style.css";

import CalendarElement from "../CalendarElement";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const calendar = ({
    calendar,
    month,
    openAddScheduleDialog,
    openCurrentScheduleDialog,
    fetchSchedule,
    hinataInfo,
}) => {
    // reactの状態が更新されるたびに呼び出されるAPI
    // 第２引数を配列で指定すると指定された変数が更新された時だけuseEffect()が呼び出される
    // []を指定すると初回のみの実行になる
    useEffect(() => {
        fetchSchedule();
    }, []);
    return (
        <div className={styles.container}>
            <GridList className={styles.grid} cols={7} spacing={0} cellHeight={"auto"}>
                {days.map(d => (
                    <li key={d}>
                        <Typography
                            className={styles.days}
                            color="textSecondary"
                            align="center"
                            variant="caption"
                            component="div"
                        >
                            {d}
                        </Typography>
                    </li>
                ))}
                {calendar.map(({ date, schedules, hinataSchedules }) => (
                    <li
                        key={date.toISOString()}
                        onClick={() => openAddScheduleDialog(date)}
                    >
                        <CalendarElement
                            day={date}
                            month={month}
                            schedules={schedules}
                            hinataSchedules={hinataSchedules}
                            onClickSchedule={openCurrentScheduleDialog}
                            hinataInfo={hinataInfo}
                        />
                    </li>
                ))}
            </GridList>
        </div>
    );
};

export default calendar;
