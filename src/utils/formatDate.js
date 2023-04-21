import dayjs from "dayjs";
export function formatMothDay(date, format = "MM月DD日") {
  return dayjs(date).format(format)
}

export function getDiffDays(startDay, endDay) {
  return dayjs(endDay).diff(startDay, "day")
}