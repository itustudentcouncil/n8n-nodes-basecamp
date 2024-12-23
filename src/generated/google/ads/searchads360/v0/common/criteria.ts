// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/searchads360/v0/common/criteria.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  AgeRangeTypeEnum_AgeRangeType,
  ageRangeTypeEnum_AgeRangeTypeFromJSON,
  ageRangeTypeEnum_AgeRangeTypeToJSON,
} from "../enums/age_range_type.js";
import {
  DayOfWeekEnum_DayOfWeek,
  dayOfWeekEnum_DayOfWeekFromJSON,
  dayOfWeekEnum_DayOfWeekToJSON,
} from "../enums/day_of_week.js";
import { DeviceEnum_Device, deviceEnum_DeviceFromJSON, deviceEnum_DeviceToJSON } from "../enums/device.js";
import {
  GenderTypeEnum_GenderType,
  genderTypeEnum_GenderTypeFromJSON,
  genderTypeEnum_GenderTypeToJSON,
} from "../enums/gender_type.js";
import {
  KeywordMatchTypeEnum_KeywordMatchType,
  keywordMatchTypeEnum_KeywordMatchTypeFromJSON,
  keywordMatchTypeEnum_KeywordMatchTypeToJSON,
} from "../enums/keyword_match_type.js";
import {
  ListingGroupTypeEnum_ListingGroupType,
  listingGroupTypeEnum_ListingGroupTypeFromJSON,
  listingGroupTypeEnum_ListingGroupTypeToJSON,
} from "../enums/listing_group_type.js";
import {
  LocationGroupRadiusUnitsEnum_LocationGroupRadiusUnits,
  locationGroupRadiusUnitsEnum_LocationGroupRadiusUnitsFromJSON,
  locationGroupRadiusUnitsEnum_LocationGroupRadiusUnitsToJSON,
} from "../enums/location_group_radius_units.js";
import {
  MinuteOfHourEnum_MinuteOfHour,
  minuteOfHourEnum_MinuteOfHourFromJSON,
  minuteOfHourEnum_MinuteOfHourToJSON,
} from "../enums/minute_of_hour.js";
import {
  WebpageConditionOperandEnum_WebpageConditionOperand,
  webpageConditionOperandEnum_WebpageConditionOperandFromJSON,
  webpageConditionOperandEnum_WebpageConditionOperandToJSON,
} from "../enums/webpage_condition_operand.js";
import {
  WebpageConditionOperatorEnum_WebpageConditionOperator,
  webpageConditionOperatorEnum_WebpageConditionOperatorFromJSON,
  webpageConditionOperatorEnum_WebpageConditionOperatorToJSON,
} from "../enums/webpage_condition_operator.js";

export const protobufPackage = "google.ads.searchads360.v0.common";

/** A keyword criterion. */
export interface KeywordInfo {
  /** The text of the keyword (at most 80 characters and 10 words). */
  text?:
    | string
    | undefined;
  /** The match type of the keyword. */
  matchType: KeywordMatchTypeEnum_KeywordMatchType;
}

/** A location criterion. */
export interface LocationInfo {
  /** The geo target constant resource name. */
  geoTargetConstant?: string | undefined;
}

/** A device criterion. */
export interface DeviceInfo {
  /** Type of the device. */
  type: DeviceEnum_Device;
}

/** A listing group criterion. */
export interface ListingGroupInfo {
  /** Type of the listing group. */
  type: ListingGroupTypeEnum_ListingGroupType;
}

/**
 * Represents an AdSchedule criterion.
 *
 * AdSchedule is specified as the day of the week and a time interval
 * within which ads will be shown.
 *
 * No more than six AdSchedules can be added for the same day.
 */
export interface AdScheduleInfo {
  /**
   * Minutes after the start hour at which this schedule starts.
   *
   * This field is required for CREATE operations and is prohibited on UPDATE
   * operations.
   */
  startMinute: MinuteOfHourEnum_MinuteOfHour;
  /**
   * Minutes after the end hour at which this schedule ends. The schedule is
   * exclusive of the end minute.
   *
   * This field is required for CREATE operations and is prohibited on UPDATE
   * operations.
   */
  endMinute: MinuteOfHourEnum_MinuteOfHour;
  /**
   * Starting hour in 24 hour time.
   * This field must be between 0 and 23, inclusive.
   *
   * This field is required for CREATE operations and is prohibited on UPDATE
   * operations.
   */
  startHour?:
    | number
    | undefined;
  /**
   * Ending hour in 24 hour time; 24 signifies end of the day.
   * This field must be between 0 and 24, inclusive.
   *
   * This field is required for CREATE operations and is prohibited on UPDATE
   * operations.
   */
  endHour?:
    | number
    | undefined;
  /**
   * Day of the week the schedule applies to.
   *
   * This field is required for CREATE operations and is prohibited on UPDATE
   * operations.
   */
  dayOfWeek: DayOfWeekEnum_DayOfWeek;
}

/** An age range criterion. */
export interface AgeRangeInfo {
  /** Type of the age range. */
  type: AgeRangeTypeEnum_AgeRangeType;
}

/** A gender criterion. */
export interface GenderInfo {
  /** Type of the gender. */
  type: GenderTypeEnum_GenderType;
}

/**
 * A User List criterion. Represents a user list that is defined by the
 * advertiser to be targeted.
 */
export interface UserListInfo {
  /** The User List resource name. */
  userList?: string | undefined;
}

/** A language criterion. */
export interface LanguageInfo {
  /** The language constant resource name. */
  languageConstant?: string | undefined;
}

/** Represents a criterion for targeting webpages of an advertiser's website. */
export interface WebpageInfo {
  /**
   * The name of the criterion that is defined by this parameter. The name value
   * will be used for identifying, sorting and filtering criteria with this type
   * of parameters.
   *
   * This field is required for CREATE operations and is prohibited on UPDATE
   * operations.
   */
  criterionName?:
    | string
    | undefined;
  /**
   * Conditions, or logical expressions, for webpage targeting. The list of
   * webpage targeting conditions are and-ed together when evaluated
   * for targeting. An empty list of conditions indicates all pages of the
   * campaign's website are targeted.
   *
   * This field is required for CREATE operations and is prohibited on UPDATE
   * operations.
   */
  conditions: WebpageConditionInfo[];
  /**
   * Website criteria coverage percentage. This is the computed percentage
   * of website coverage based on the website target, negative website target
   * and negative keywords in the ad group and campaign. For instance, when
   * coverage returns as 1, it indicates it has 100% coverage. This field is
   * read-only.
   */
  coveragePercentage: number;
}

/** Logical expression for targeting webpages of an advertiser's website. */
export interface WebpageConditionInfo {
  /** Operand of webpage targeting condition. */
  operand: WebpageConditionOperandEnum_WebpageConditionOperand;
  /** Operator of webpage targeting condition. */
  operator: WebpageConditionOperatorEnum_WebpageConditionOperator;
  /** Argument of webpage targeting condition. */
  argument?: string | undefined;
}

/** A radius around a list of locations specified through a feed. */
export interface LocationGroupInfo {
  /**
   * Geo target constant(s) restricting the scope of the geographic area within
   * the feed. Currently only one geo target constant is allowed.
   */
  geoTargetConstants: string[];
  /**
   * Distance in units specifying the radius around targeted locations.
   * This is required and must be set in CREATE operations.
   */
  radius?:
    | Long
    | undefined;
  /**
   * Unit of the radius. Miles and meters are supported for geo target
   * constants. Milli miles and meters are supported for feed item sets.
   * This is required and must be set in CREATE operations.
   */
  radiusUnits: LocationGroupRadiusUnitsEnum_LocationGroupRadiusUnits;
  /**
   * FeedItemSets whose FeedItems are targeted. If multiple IDs are specified,
   * then all items that appear in at least one set are targeted. This field
   * cannot be used with geo_target_constants. This is optional and can only be
   * set in CREATE operations.
   */
  feedItemSets: string[];
}

/** An audience criterion. */
export interface AudienceInfo {
  /** The Audience resource name. */
  audience: string;
}

function createBaseKeywordInfo(): KeywordInfo {
  return { text: undefined, matchType: 0 };
}

export const KeywordInfo: MessageFns<KeywordInfo> = {
  encode(message: KeywordInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.text !== undefined) {
      writer.uint32(26).string(message.text);
    }
    if (message.matchType !== 0) {
      writer.uint32(16).int32(message.matchType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): KeywordInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeywordInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.text = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.matchType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): KeywordInfo {
    return {
      text: isSet(object.text) ? globalThis.String(object.text) : undefined,
      matchType: isSet(object.matchType) ? keywordMatchTypeEnum_KeywordMatchTypeFromJSON(object.matchType) : 0,
    };
  },

  toJSON(message: KeywordInfo): unknown {
    const obj: any = {};
    if (message.text !== undefined) {
      obj.text = message.text;
    }
    if (message.matchType !== 0) {
      obj.matchType = keywordMatchTypeEnum_KeywordMatchTypeToJSON(message.matchType);
    }
    return obj;
  },

  create(base?: DeepPartial<KeywordInfo>): KeywordInfo {
    return KeywordInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<KeywordInfo>): KeywordInfo {
    const message = createBaseKeywordInfo();
    message.text = object.text ?? undefined;
    message.matchType = object.matchType ?? 0;
    return message;
  },
};

function createBaseLocationInfo(): LocationInfo {
  return { geoTargetConstant: undefined };
}

export const LocationInfo: MessageFns<LocationInfo> = {
  encode(message: LocationInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.geoTargetConstant !== undefined) {
      writer.uint32(18).string(message.geoTargetConstant);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LocationInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.geoTargetConstant = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocationInfo {
    return {
      geoTargetConstant: isSet(object.geoTargetConstant) ? globalThis.String(object.geoTargetConstant) : undefined,
    };
  },

  toJSON(message: LocationInfo): unknown {
    const obj: any = {};
    if (message.geoTargetConstant !== undefined) {
      obj.geoTargetConstant = message.geoTargetConstant;
    }
    return obj;
  },

  create(base?: DeepPartial<LocationInfo>): LocationInfo {
    return LocationInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LocationInfo>): LocationInfo {
    const message = createBaseLocationInfo();
    message.geoTargetConstant = object.geoTargetConstant ?? undefined;
    return message;
  },
};

function createBaseDeviceInfo(): DeviceInfo {
  return { type: 0 };
}

export const DeviceInfo: MessageFns<DeviceInfo> = {
  encode(message: DeviceInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeviceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeviceInfo {
    return { type: isSet(object.type) ? deviceEnum_DeviceFromJSON(object.type) : 0 };
  },

  toJSON(message: DeviceInfo): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = deviceEnum_DeviceToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<DeviceInfo>): DeviceInfo {
    return DeviceInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeviceInfo>): DeviceInfo {
    const message = createBaseDeviceInfo();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseListingGroupInfo(): ListingGroupInfo {
  return { type: 0 };
}

export const ListingGroupInfo: MessageFns<ListingGroupInfo> = {
  encode(message: ListingGroupInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListingGroupInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListingGroupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListingGroupInfo {
    return { type: isSet(object.type) ? listingGroupTypeEnum_ListingGroupTypeFromJSON(object.type) : 0 };
  },

  toJSON(message: ListingGroupInfo): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = listingGroupTypeEnum_ListingGroupTypeToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<ListingGroupInfo>): ListingGroupInfo {
    return ListingGroupInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListingGroupInfo>): ListingGroupInfo {
    const message = createBaseListingGroupInfo();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseAdScheduleInfo(): AdScheduleInfo {
  return { startMinute: 0, endMinute: 0, startHour: undefined, endHour: undefined, dayOfWeek: 0 };
}

export const AdScheduleInfo: MessageFns<AdScheduleInfo> = {
  encode(message: AdScheduleInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.startMinute !== 0) {
      writer.uint32(8).int32(message.startMinute);
    }
    if (message.endMinute !== 0) {
      writer.uint32(16).int32(message.endMinute);
    }
    if (message.startHour !== undefined) {
      writer.uint32(48).int32(message.startHour);
    }
    if (message.endHour !== undefined) {
      writer.uint32(56).int32(message.endHour);
    }
    if (message.dayOfWeek !== 0) {
      writer.uint32(40).int32(message.dayOfWeek);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AdScheduleInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAdScheduleInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.startMinute = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.endMinute = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.startHour = reader.int32();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.endHour = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.dayOfWeek = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AdScheduleInfo {
    return {
      startMinute: isSet(object.startMinute) ? minuteOfHourEnum_MinuteOfHourFromJSON(object.startMinute) : 0,
      endMinute: isSet(object.endMinute) ? minuteOfHourEnum_MinuteOfHourFromJSON(object.endMinute) : 0,
      startHour: isSet(object.startHour) ? globalThis.Number(object.startHour) : undefined,
      endHour: isSet(object.endHour) ? globalThis.Number(object.endHour) : undefined,
      dayOfWeek: isSet(object.dayOfWeek) ? dayOfWeekEnum_DayOfWeekFromJSON(object.dayOfWeek) : 0,
    };
  },

  toJSON(message: AdScheduleInfo): unknown {
    const obj: any = {};
    if (message.startMinute !== 0) {
      obj.startMinute = minuteOfHourEnum_MinuteOfHourToJSON(message.startMinute);
    }
    if (message.endMinute !== 0) {
      obj.endMinute = minuteOfHourEnum_MinuteOfHourToJSON(message.endMinute);
    }
    if (message.startHour !== undefined) {
      obj.startHour = Math.round(message.startHour);
    }
    if (message.endHour !== undefined) {
      obj.endHour = Math.round(message.endHour);
    }
    if (message.dayOfWeek !== 0) {
      obj.dayOfWeek = dayOfWeekEnum_DayOfWeekToJSON(message.dayOfWeek);
    }
    return obj;
  },

  create(base?: DeepPartial<AdScheduleInfo>): AdScheduleInfo {
    return AdScheduleInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AdScheduleInfo>): AdScheduleInfo {
    const message = createBaseAdScheduleInfo();
    message.startMinute = object.startMinute ?? 0;
    message.endMinute = object.endMinute ?? 0;
    message.startHour = object.startHour ?? undefined;
    message.endHour = object.endHour ?? undefined;
    message.dayOfWeek = object.dayOfWeek ?? 0;
    return message;
  },
};

function createBaseAgeRangeInfo(): AgeRangeInfo {
  return { type: 0 };
}

export const AgeRangeInfo: MessageFns<AgeRangeInfo> = {
  encode(message: AgeRangeInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AgeRangeInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAgeRangeInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AgeRangeInfo {
    return { type: isSet(object.type) ? ageRangeTypeEnum_AgeRangeTypeFromJSON(object.type) : 0 };
  },

  toJSON(message: AgeRangeInfo): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = ageRangeTypeEnum_AgeRangeTypeToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<AgeRangeInfo>): AgeRangeInfo {
    return AgeRangeInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AgeRangeInfo>): AgeRangeInfo {
    const message = createBaseAgeRangeInfo();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseGenderInfo(): GenderInfo {
  return { type: 0 };
}

export const GenderInfo: MessageFns<GenderInfo> = {
  encode(message: GenderInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GenderInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GenderInfo {
    return { type: isSet(object.type) ? genderTypeEnum_GenderTypeFromJSON(object.type) : 0 };
  },

  toJSON(message: GenderInfo): unknown {
    const obj: any = {};
    if (message.type !== 0) {
      obj.type = genderTypeEnum_GenderTypeToJSON(message.type);
    }
    return obj;
  },

  create(base?: DeepPartial<GenderInfo>): GenderInfo {
    return GenderInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GenderInfo>): GenderInfo {
    const message = createBaseGenderInfo();
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseUserListInfo(): UserListInfo {
  return { userList: undefined };
}

export const UserListInfo: MessageFns<UserListInfo> = {
  encode(message: UserListInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.userList !== undefined) {
      writer.uint32(18).string(message.userList);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserListInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserListInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.userList = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserListInfo {
    return { userList: isSet(object.userList) ? globalThis.String(object.userList) : undefined };
  },

  toJSON(message: UserListInfo): unknown {
    const obj: any = {};
    if (message.userList !== undefined) {
      obj.userList = message.userList;
    }
    return obj;
  },

  create(base?: DeepPartial<UserListInfo>): UserListInfo {
    return UserListInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserListInfo>): UserListInfo {
    const message = createBaseUserListInfo();
    message.userList = object.userList ?? undefined;
    return message;
  },
};

function createBaseLanguageInfo(): LanguageInfo {
  return { languageConstant: undefined };
}

export const LanguageInfo: MessageFns<LanguageInfo> = {
  encode(message: LanguageInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.languageConstant !== undefined) {
      writer.uint32(18).string(message.languageConstant);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LanguageInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLanguageInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.languageConstant = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LanguageInfo {
    return {
      languageConstant: isSet(object.languageConstant) ? globalThis.String(object.languageConstant) : undefined,
    };
  },

  toJSON(message: LanguageInfo): unknown {
    const obj: any = {};
    if (message.languageConstant !== undefined) {
      obj.languageConstant = message.languageConstant;
    }
    return obj;
  },

  create(base?: DeepPartial<LanguageInfo>): LanguageInfo {
    return LanguageInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LanguageInfo>): LanguageInfo {
    const message = createBaseLanguageInfo();
    message.languageConstant = object.languageConstant ?? undefined;
    return message;
  },
};

function createBaseWebpageInfo(): WebpageInfo {
  return { criterionName: undefined, conditions: [], coveragePercentage: 0 };
}

export const WebpageInfo: MessageFns<WebpageInfo> = {
  encode(message: WebpageInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.criterionName !== undefined) {
      writer.uint32(26).string(message.criterionName);
    }
    for (const v of message.conditions) {
      WebpageConditionInfo.encode(v!, writer.uint32(18).fork()).join();
    }
    if (message.coveragePercentage !== 0) {
      writer.uint32(33).double(message.coveragePercentage);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WebpageInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebpageInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.criterionName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.conditions.push(WebpageConditionInfo.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 33) {
            break;
          }

          message.coveragePercentage = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WebpageInfo {
    return {
      criterionName: isSet(object.criterionName) ? globalThis.String(object.criterionName) : undefined,
      conditions: globalThis.Array.isArray(object?.conditions)
        ? object.conditions.map((e: any) => WebpageConditionInfo.fromJSON(e))
        : [],
      coveragePercentage: isSet(object.coveragePercentage) ? globalThis.Number(object.coveragePercentage) : 0,
    };
  },

  toJSON(message: WebpageInfo): unknown {
    const obj: any = {};
    if (message.criterionName !== undefined) {
      obj.criterionName = message.criterionName;
    }
    if (message.conditions?.length) {
      obj.conditions = message.conditions.map((e) => WebpageConditionInfo.toJSON(e));
    }
    if (message.coveragePercentage !== 0) {
      obj.coveragePercentage = message.coveragePercentage;
    }
    return obj;
  },

  create(base?: DeepPartial<WebpageInfo>): WebpageInfo {
    return WebpageInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WebpageInfo>): WebpageInfo {
    const message = createBaseWebpageInfo();
    message.criterionName = object.criterionName ?? undefined;
    message.conditions = object.conditions?.map((e) => WebpageConditionInfo.fromPartial(e)) || [];
    message.coveragePercentage = object.coveragePercentage ?? 0;
    return message;
  },
};

function createBaseWebpageConditionInfo(): WebpageConditionInfo {
  return { operand: 0, operator: 0, argument: undefined };
}

export const WebpageConditionInfo: MessageFns<WebpageConditionInfo> = {
  encode(message: WebpageConditionInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.operand !== 0) {
      writer.uint32(8).int32(message.operand);
    }
    if (message.operator !== 0) {
      writer.uint32(16).int32(message.operator);
    }
    if (message.argument !== undefined) {
      writer.uint32(34).string(message.argument);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WebpageConditionInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWebpageConditionInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.operand = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.operator = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.argument = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WebpageConditionInfo {
    return {
      operand: isSet(object.operand) ? webpageConditionOperandEnum_WebpageConditionOperandFromJSON(object.operand) : 0,
      operator: isSet(object.operator)
        ? webpageConditionOperatorEnum_WebpageConditionOperatorFromJSON(object.operator)
        : 0,
      argument: isSet(object.argument) ? globalThis.String(object.argument) : undefined,
    };
  },

  toJSON(message: WebpageConditionInfo): unknown {
    const obj: any = {};
    if (message.operand !== 0) {
      obj.operand = webpageConditionOperandEnum_WebpageConditionOperandToJSON(message.operand);
    }
    if (message.operator !== 0) {
      obj.operator = webpageConditionOperatorEnum_WebpageConditionOperatorToJSON(message.operator);
    }
    if (message.argument !== undefined) {
      obj.argument = message.argument;
    }
    return obj;
  },

  create(base?: DeepPartial<WebpageConditionInfo>): WebpageConditionInfo {
    return WebpageConditionInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WebpageConditionInfo>): WebpageConditionInfo {
    const message = createBaseWebpageConditionInfo();
    message.operand = object.operand ?? 0;
    message.operator = object.operator ?? 0;
    message.argument = object.argument ?? undefined;
    return message;
  },
};

function createBaseLocationGroupInfo(): LocationGroupInfo {
  return { geoTargetConstants: [], radius: undefined, radiusUnits: 0, feedItemSets: [] };
}

export const LocationGroupInfo: MessageFns<LocationGroupInfo> = {
  encode(message: LocationGroupInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.geoTargetConstants) {
      writer.uint32(50).string(v!);
    }
    if (message.radius !== undefined) {
      writer.uint32(56).int64(message.radius.toString());
    }
    if (message.radiusUnits !== 0) {
      writer.uint32(32).int32(message.radiusUnits);
    }
    for (const v of message.feedItemSets) {
      writer.uint32(66).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LocationGroupInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLocationGroupInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 6:
          if (tag !== 50) {
            break;
          }

          message.geoTargetConstants.push(reader.string());
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.radius = Long.fromString(reader.int64().toString());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.radiusUnits = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.feedItemSets.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LocationGroupInfo {
    return {
      geoTargetConstants: globalThis.Array.isArray(object?.geoTargetConstants)
        ? object.geoTargetConstants.map((e: any) => globalThis.String(e))
        : [],
      radius: isSet(object.radius) ? Long.fromValue(object.radius) : undefined,
      radiusUnits: isSet(object.radiusUnits)
        ? locationGroupRadiusUnitsEnum_LocationGroupRadiusUnitsFromJSON(object.radiusUnits)
        : 0,
      feedItemSets: globalThis.Array.isArray(object?.feedItemSets)
        ? object.feedItemSets.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: LocationGroupInfo): unknown {
    const obj: any = {};
    if (message.geoTargetConstants?.length) {
      obj.geoTargetConstants = message.geoTargetConstants;
    }
    if (message.radius !== undefined) {
      obj.radius = (message.radius || Long.ZERO).toString();
    }
    if (message.radiusUnits !== 0) {
      obj.radiusUnits = locationGroupRadiusUnitsEnum_LocationGroupRadiusUnitsToJSON(message.radiusUnits);
    }
    if (message.feedItemSets?.length) {
      obj.feedItemSets = message.feedItemSets;
    }
    return obj;
  },

  create(base?: DeepPartial<LocationGroupInfo>): LocationGroupInfo {
    return LocationGroupInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LocationGroupInfo>): LocationGroupInfo {
    const message = createBaseLocationGroupInfo();
    message.geoTargetConstants = object.geoTargetConstants?.map((e) => e) || [];
    message.radius = (object.radius !== undefined && object.radius !== null)
      ? Long.fromValue(object.radius)
      : undefined;
    message.radiusUnits = object.radiusUnits ?? 0;
    message.feedItemSets = object.feedItemSets?.map((e) => e) || [];
    return message;
  },
};

function createBaseAudienceInfo(): AudienceInfo {
  return { audience: "" };
}

export const AudienceInfo: MessageFns<AudienceInfo> = {
  encode(message: AudienceInfo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.audience !== "") {
      writer.uint32(10).string(message.audience);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AudienceInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAudienceInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.audience = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AudienceInfo {
    return { audience: isSet(object.audience) ? globalThis.String(object.audience) : "" };
  },

  toJSON(message: AudienceInfo): unknown {
    const obj: any = {};
    if (message.audience !== "") {
      obj.audience = message.audience;
    }
    return obj;
  },

  create(base?: DeepPartial<AudienceInfo>): AudienceInfo {
    return AudienceInfo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AudienceInfo>): AudienceInfo {
    const message = createBaseAudienceInfo();
    message.audience = object.audience ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
