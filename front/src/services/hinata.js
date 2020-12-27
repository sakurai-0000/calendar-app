import dayjs from "dayjs";

export const isHinataBirthDay = (d1, d2) => {
    const format = "YYYMMDD";
    return dayjs(d1).format(format) === d2.format(format);
}