export const CAFE = {
  DAYS: ["월", "화", "수", "목", "금", "토", "일"],
  TIME: {
    OPEN_KOR: "오픈시각",
    CLOSE_KOR: "마감시각",
    OPEN_TIME: "10:00",
    CLOSE_TIME: "22:00",
  },
  PRICE_INPUT: {
    DEFAULT: 3,
    MIN: 1,
    MAX: 5,
    MIN_LIMIT_MSG: "최소 1개 이상 입력해주세요.",
    MAX_LIMIT_MSG: "최대 5개까지 입력 가능합니다.",
  },
  MESSAGE: {
    IMAGE_IS_REQUIRED: "카페 이미지를 업로드 해주세요.",
    REGISTER_SUCCESS: "카페가 등록되었습니다.",
    REGISTER_FAIL: "카페 등록에 실패했습니다.",
  },
};

export function getDefaultOpenHourList() {
  const openHourList = [];
  for (let i = 0; i < CAFE.DAYS.length; i++) {
    openHourList.push({
      day: CAFE.DAYS[i],
      time: `${CAFE.TIME.OPEN_TIME} ~ ${CAFE.TIME.CLOSE_TIME}`,
    });
  }
  return openHourList;
}
export const DEFAULT_OPEN_HOUR_LIST = CAFE.DAYS.reduce((acc, cur) => {
  acc?.push({
    day: cur,
    time: `${CAFE.TIME.OPEN_TIME} ~ ${CAFE.TIME.CLOSE_TIME}`,
  });
}, []);
