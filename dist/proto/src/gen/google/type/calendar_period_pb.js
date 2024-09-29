"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarPeriodSchema = exports.CalendarPeriod = exports.file_google_type_calendar_period = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
exports.file_google_type_calendar_period = (0, codegenv1_1.fileDesc)("CiFnb29nbGUvdHlwZS9jYWxlbmRhcl9wZXJpb2QucHJvdG8SC2dvb2dsZS50eXBlKn8KDkNhbGVuZGFyUGVyaW9kEh8KG0NBTEVOREFSX1BFUklPRF9VTlNQRUNJRklFRBAAEgcKA0RBWRABEggKBFdFRUsQAhINCglGT1JUTklHSFQQAxIJCgVNT05USBAEEgsKB1FVQVJURVIQBRIICgRIQUxGEAYSCAoEWUVBUhAHQngKD2NvbS5nb29nbGUudHlwZUITQ2FsZW5kYXJQZXJpb2RQcm90b1ABWkhnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL3R5cGUvY2FsZW5kYXJwZXJpb2Q7Y2FsZW5kYXJwZXJpb2SiAgNHVFBiBnByb3RvMw");
var CalendarPeriod;
(function (CalendarPeriod) {
    CalendarPeriod[CalendarPeriod["CALENDAR_PERIOD_UNSPECIFIED"] = 0] = "CALENDAR_PERIOD_UNSPECIFIED";
    CalendarPeriod[CalendarPeriod["DAY"] = 1] = "DAY";
    CalendarPeriod[CalendarPeriod["WEEK"] = 2] = "WEEK";
    CalendarPeriod[CalendarPeriod["FORTNIGHT"] = 3] = "FORTNIGHT";
    CalendarPeriod[CalendarPeriod["MONTH"] = 4] = "MONTH";
    CalendarPeriod[CalendarPeriod["QUARTER"] = 5] = "QUARTER";
    CalendarPeriod[CalendarPeriod["HALF"] = 6] = "HALF";
    CalendarPeriod[CalendarPeriod["YEAR"] = 7] = "YEAR";
})(CalendarPeriod = exports.CalendarPeriod || (exports.CalendarPeriod = {}));
exports.CalendarPeriodSchema = (0, codegenv1_1.enumDesc)(exports.file_google_type_calendar_period, 0);
//# sourceMappingURL=calendar_period_pb.js.map