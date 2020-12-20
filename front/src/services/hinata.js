import dayjs from "dayjs";

const hinataInfo = [
    {
        name: 'MATSUDA KONOKA',
        birthday: '4-27',
    },
    {
        name: 'sample',
        birthday: '12-21',
    }
]

export const setBirthDay = () => {
    const day = hinataInfo.map((info, i) => ({
        ...info,
        id: i,
    }));
    return day;
}

export const isHinataBirthDay = (d1, d2) => {
    const format = "YYYMMDD";
    return dayjs(d1).format(format) === d2.format(format);
}