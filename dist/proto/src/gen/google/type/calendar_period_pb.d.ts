import type { GenEnum, GenFile } from "@bufbuild/protobuf/codegenv1";
export declare const file_google_type_calendar_period: GenFile;
export declare enum CalendarPeriod {
    CALENDAR_PERIOD_UNSPECIFIED = 0,
    DAY = 1,
    WEEK = 2,
    FORTNIGHT = 3,
    MONTH = 4,
    QUARTER = 5,
    HALF = 6,
    YEAR = 7
}
export declare const CalendarPeriodSchema: GenEnum<CalendarPeriod>;
