import dayjs from "dayjs";

export function commonFormatDay(value: string) {
  try {
    return dayjs(value).format("MMM, DD YYYY");
  } catch (error) {
    throw Error(error as any);
  }
}
