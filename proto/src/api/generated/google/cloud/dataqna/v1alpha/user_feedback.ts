// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/dataqna/v1alpha/user_feedback.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.dataqna.v1alpha";

/** Feedback provided by a user. */
export interface UserFeedback {
  /**
   * Required. The unique identifier for the user feedback.
   * User feedback is a singleton resource on a Question.
   * Example: `projects/foo/locations/bar/questions/1234/userFeedback`
   */
  name: string;
  /** Free form user feedback, such as a text box. */
  freeFormFeedback: string;
  /** The user feedback rating */
  rating: UserFeedback_UserFeedbackRating;
}

/** Enumeration of feedback ratings. */
export enum UserFeedback_UserFeedbackRating {
  /** USER_FEEDBACK_RATING_UNSPECIFIED - No rating was specified. */
  USER_FEEDBACK_RATING_UNSPECIFIED = 0,
  /** POSITIVE - The user provided positive feedback. */
  POSITIVE = 1,
  /** NEGATIVE - The user provided negative feedback. */
  NEGATIVE = 2,
  UNRECOGNIZED = -1,
}

export function userFeedback_UserFeedbackRatingFromJSON(object: any): UserFeedback_UserFeedbackRating {
  switch (object) {
    case 0:
    case "USER_FEEDBACK_RATING_UNSPECIFIED":
      return UserFeedback_UserFeedbackRating.USER_FEEDBACK_RATING_UNSPECIFIED;
    case 1:
    case "POSITIVE":
      return UserFeedback_UserFeedbackRating.POSITIVE;
    case 2:
    case "NEGATIVE":
      return UserFeedback_UserFeedbackRating.NEGATIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return UserFeedback_UserFeedbackRating.UNRECOGNIZED;
  }
}

export function userFeedback_UserFeedbackRatingToJSON(object: UserFeedback_UserFeedbackRating): string {
  switch (object) {
    case UserFeedback_UserFeedbackRating.USER_FEEDBACK_RATING_UNSPECIFIED:
      return "USER_FEEDBACK_RATING_UNSPECIFIED";
    case UserFeedback_UserFeedbackRating.POSITIVE:
      return "POSITIVE";
    case UserFeedback_UserFeedbackRating.NEGATIVE:
      return "NEGATIVE";
    case UserFeedback_UserFeedbackRating.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseUserFeedback(): UserFeedback {
  return { name: "", freeFormFeedback: "", rating: 0 };
}

export const UserFeedback: MessageFns<UserFeedback> = {
  encode(message: UserFeedback, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.freeFormFeedback !== "") {
      writer.uint32(18).string(message.freeFormFeedback);
    }
    if (message.rating !== 0) {
      writer.uint32(24).int32(message.rating);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserFeedback {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFeedback();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.freeFormFeedback = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.rating = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFeedback {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      freeFormFeedback: isSet(object.freeFormFeedback) ? globalThis.String(object.freeFormFeedback) : "",
      rating: isSet(object.rating) ? userFeedback_UserFeedbackRatingFromJSON(object.rating) : 0,
    };
  },

  toJSON(message: UserFeedback): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.freeFormFeedback !== "") {
      obj.freeFormFeedback = message.freeFormFeedback;
    }
    if (message.rating !== 0) {
      obj.rating = userFeedback_UserFeedbackRatingToJSON(message.rating);
    }
    return obj;
  },

  create(base?: DeepPartial<UserFeedback>): UserFeedback {
    return UserFeedback.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserFeedback>): UserFeedback {
    const message = createBaseUserFeedback();
    message.name = object.name ?? "";
    message.freeFormFeedback = object.freeFormFeedback ?? "";
    message.rating = object.rating ?? 0;
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