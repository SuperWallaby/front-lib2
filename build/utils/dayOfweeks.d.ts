declare const JDMonthTextChanger: (Month: string | number) => string;
declare const JDWeekChanger: (number: number, bit?: boolean | undefined) => string;
declare const dayarrEnToBooleanArr: (dayArr: string[]) => boolean[];
declare const dayarrEnToValueArr: (dayArr: any[]) => any[];
export declare const applyDaysToArr: (applyDaysBinary: number) => DayOfWeekEnum[];
export declare const arrToApplyDays: (arr: (number | boolean)[]) => number;
export declare enum DayOfWeekEnum {
    SUN = 1,
    MON = 2,
    TUE = 4,
    WED = 8,
    THU = 16,
    FRI = 32,
    SAT = 64,
    ALL_DAY = 127
}
export declare const numberToStrings: (number: number, merge?: string | undefined) => string | string[];
export declare const koreaToNumber: (foo: string) => 6 | 5 | 4 | 3 | 2 | 1 | 0 | undefined;
export { dayarrEnToValueArr, JDMonthTextChanger, JDWeekChanger, dayarrEnToBooleanArr };
