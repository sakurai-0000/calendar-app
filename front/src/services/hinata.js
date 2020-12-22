import dayjs from "dayjs";

const hinataInfo = [
    {
        name: 'MATSUDA KONOKA',
        birthday: '12-20',
    },
    {
        name: 'sample',
        birthday: '12-21',
    },
    {
        name: 'sample',
        birthday: '12-22',
    },
    {
        name: 'sample',
        birthday: '12-23',
    },    {
        name: 'sample',
        birthday: '12-24',
    },
    {
        name: 'sample',
        birthday: '12-25',
    },    {
        name: 'sample',
        birthday: '12-26',
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