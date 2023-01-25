export const CAFE = {
  TIME: {
    OPEN_KOR: "오픈시각",
    CLOSE_KOR: "마감시각",
    OPEN_TIME: "10:00",
    CLOSE_TIME: "22:00",
  },
};

export const DAYS = [
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
  "일요일",
];

export function getDefaultOpenHourList() {
  const openHourList = [];
  for (let i = 0; i < DAYS.length; i++) {
    openHourList.push({
      day: DAYS[i],
      time: `${CAFE.TIME.OPEN_TIME} ~ ${CAFE.TIME.CLOSE_TIME}`,
    });
  }
  return openHourList;
}
