
import { LANG } from "../hooks/hook";
import { isArray } from "util";
import { STORE_TYPE_OP, STORE_PAYNEED_OP, DAY_SELECT_OP } from "../types/const";

export const globalLanguageSetting = () => {
  const setArrayWithLang = (set: Array<any>, enumKey?: string) => {
    if (!enumKey) {
      set.forEach((setIn: any) => {
        setIn.label = LANG(setIn.value);
      });
    } else {
      set.forEach((setIn: any) => {
        setIn.label = LANG(enumKey)[setIn.value];
      });
    }
  };

  const settings: any[] = [
    { value: STORE_TYPE_OP, enumKey: "StoreType" },
    STORE_PAYNEED_OP,
    { value: DAY_SELECT_OP, enumKey: "Day" }
  ];

  settings.forEach((set: any) => {
    if (!isArray(set)) {
      // lang객체에 네임스페이스가 있는 OP 들일경우
      if (set.hasOwnProperty("enumKey")) {
        setArrayWithLang(set.value, set.enumKey);
      }
      // 네임스페이스가 없는 일반 객체일 경우
      for (const key in set) {
        // @ts-ignore
        set[key] = LANG(key);
      }
    } else {
      setArrayWithLang(set);
    }
  });
};
