// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/apps/drive/labels/v2beta/label_limits.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { DateMessage } from "../../../../type/date.js";

export const protobufPackage = "google.apps.drive.labels.v2beta";

/**
 * Label constraints governing the structure of a Label; such as, the maximum
 * number of Fields allowed and maximum length of the label title.
 */
export interface LabelLimits {
  /** Resource name. */
  name: string;
  /** The maximum number of characters allowed for the title. */
  maxTitleLength: number;
  /** The maximum number of characters allowed for the description. */
  maxDescriptionLength: number;
  /** The maximum number of Fields allowed within the label. */
  maxFields: number;
  /** The maximum number of published Fields that can be deleted. */
  maxDeletedFields: number;
  /**
   * The maximum number of draft revisions that will be kept before deleting
   * old drafts.
   */
  maxDraftRevisions: number;
  /** The limits for Fields. */
  fieldLimits: FieldLimits | undefined;
}

/**
 * Field constants governing the structure of a Field; such as, the maximum
 * title length, minimum and maximum field values or length, etc.
 */
export interface FieldLimits {
  /** Max length for the id. */
  maxIdLength: number;
  /** Limits for Field title. */
  maxDisplayNameLength: number;
  /** Limits for Field description, also called help text. */
  maxDescriptionLength: number;
  /**
   * The relevant limits for the specified Field.Type.
   * Text Field limits.
   */
  textLimits:
    | TextLimits
    | undefined;
  /** Long text Field limits. */
  longTextLimits:
    | LongTextLimits
    | undefined;
  /** Integer Field limits. */
  integerLimits:
    | IntegerLimits
    | undefined;
  /** Date Field limits. */
  dateLimits:
    | DateLimits
    | undefined;
  /** User Field limits. */
  userLimits:
    | UserLimits
    | undefined;
  /** Selection Field limits. */
  selectionLimits: SelectionLimits | undefined;
}

/** Limits for list-variant of a Field type. */
export interface ListLimits {
  /** Maximum number of values allowed for the Field type. */
  maxEntries: number;
}

/** Limits for text Field type. */
export interface TextLimits {
  /** Minimum length allowed for a text Field type. */
  minLength: number;
  /** Maximum length allowed for a text Field type. */
  maxLength: number;
}

/** Limits for long text Field type. */
export interface LongTextLimits {
  /** Minimum length allowed for a long text Field type. */
  minLength: number;
  /** Maximum length allowed for a long text Field type. */
  maxLength: number;
}

/** Limits for integer Field type. */
export interface IntegerLimits {
  /** Minimum value for an integer Field type. */
  minValue: Long;
  /** Maximum value for an integer Field type. */
  maxValue: Long;
}

/** Limits for date Field type. */
export interface DateLimits {
  /** Minimum value for the date Field type. */
  minValue:
    | DateMessage
    | undefined;
  /** Maximum value for the date Field type. */
  maxValue: DateMessage | undefined;
}

/** Limits for selection Field type. */
export interface SelectionLimits {
  /** Limits for list-variant of a Field type. */
  listLimits:
    | ListLimits
    | undefined;
  /** Maximum ID length for a selection options. */
  maxIdLength: number;
  /** Maximum length for display name. */
  maxDisplayNameLength: number;
  /** The max number of choices. */
  maxChoices: number;
  /** Maximum number of deleted choices. */
  maxDeletedChoices: number;
}

/** Limits for Field.Type.USER. */
export interface UserLimits {
  /** Limits for list-variant of a Field type. */
  listLimits: ListLimits | undefined;
}

function createBaseLabelLimits(): LabelLimits {
  return {
    name: "",
    maxTitleLength: 0,
    maxDescriptionLength: 0,
    maxFields: 0,
    maxDeletedFields: 0,
    maxDraftRevisions: 0,
    fieldLimits: undefined,
  };
}

export const LabelLimits: MessageFns<LabelLimits> = {
  encode(message: LabelLimits, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.maxTitleLength !== 0) {
      writer.uint32(16).int32(message.maxTitleLength);
    }
    if (message.maxDescriptionLength !== 0) {
      writer.uint32(24).int32(message.maxDescriptionLength);
    }
    if (message.maxFields !== 0) {
      writer.uint32(32).int32(message.maxFields);
    }
    if (message.maxDeletedFields !== 0) {
      writer.uint32(40).int32(message.maxDeletedFields);
    }
    if (message.maxDraftRevisions !== 0) {
      writer.uint32(48).int32(message.maxDraftRevisions);
    }
    if (message.fieldLimits !== undefined) {
      FieldLimits.encode(message.fieldLimits, writer.uint32(58).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LabelLimits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLabelLimits();
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
          if (tag !== 16) {
            break;
          }

          message.maxTitleLength = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxDescriptionLength = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maxFields = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxDeletedFields = reader.int32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.maxDraftRevisions = reader.int32();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.fieldLimits = FieldLimits.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LabelLimits {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      maxTitleLength: isSet(object.maxTitleLength) ? globalThis.Number(object.maxTitleLength) : 0,
      maxDescriptionLength: isSet(object.maxDescriptionLength) ? globalThis.Number(object.maxDescriptionLength) : 0,
      maxFields: isSet(object.maxFields) ? globalThis.Number(object.maxFields) : 0,
      maxDeletedFields: isSet(object.maxDeletedFields) ? globalThis.Number(object.maxDeletedFields) : 0,
      maxDraftRevisions: isSet(object.maxDraftRevisions) ? globalThis.Number(object.maxDraftRevisions) : 0,
      fieldLimits: isSet(object.fieldLimits) ? FieldLimits.fromJSON(object.fieldLimits) : undefined,
    };
  },

  toJSON(message: LabelLimits): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.maxTitleLength !== 0) {
      obj.maxTitleLength = Math.round(message.maxTitleLength);
    }
    if (message.maxDescriptionLength !== 0) {
      obj.maxDescriptionLength = Math.round(message.maxDescriptionLength);
    }
    if (message.maxFields !== 0) {
      obj.maxFields = Math.round(message.maxFields);
    }
    if (message.maxDeletedFields !== 0) {
      obj.maxDeletedFields = Math.round(message.maxDeletedFields);
    }
    if (message.maxDraftRevisions !== 0) {
      obj.maxDraftRevisions = Math.round(message.maxDraftRevisions);
    }
    if (message.fieldLimits !== undefined) {
      obj.fieldLimits = FieldLimits.toJSON(message.fieldLimits);
    }
    return obj;
  },

  create(base?: DeepPartial<LabelLimits>): LabelLimits {
    return LabelLimits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LabelLimits>): LabelLimits {
    const message = createBaseLabelLimits();
    message.name = object.name ?? "";
    message.maxTitleLength = object.maxTitleLength ?? 0;
    message.maxDescriptionLength = object.maxDescriptionLength ?? 0;
    message.maxFields = object.maxFields ?? 0;
    message.maxDeletedFields = object.maxDeletedFields ?? 0;
    message.maxDraftRevisions = object.maxDraftRevisions ?? 0;
    message.fieldLimits = (object.fieldLimits !== undefined && object.fieldLimits !== null)
      ? FieldLimits.fromPartial(object.fieldLimits)
      : undefined;
    return message;
  },
};

function createBaseFieldLimits(): FieldLimits {
  return {
    maxIdLength: 0,
    maxDisplayNameLength: 0,
    maxDescriptionLength: 0,
    textLimits: undefined,
    longTextLimits: undefined,
    integerLimits: undefined,
    dateLimits: undefined,
    userLimits: undefined,
    selectionLimits: undefined,
  };
}

export const FieldLimits: MessageFns<FieldLimits> = {
  encode(message: FieldLimits, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.maxIdLength !== 0) {
      writer.uint32(8).int32(message.maxIdLength);
    }
    if (message.maxDisplayNameLength !== 0) {
      writer.uint32(16).int32(message.maxDisplayNameLength);
    }
    if (message.maxDescriptionLength !== 0) {
      writer.uint32(24).int32(message.maxDescriptionLength);
    }
    if (message.textLimits !== undefined) {
      TextLimits.encode(message.textLimits, writer.uint32(34).fork()).join();
    }
    if (message.longTextLimits !== undefined) {
      LongTextLimits.encode(message.longTextLimits, writer.uint32(42).fork()).join();
    }
    if (message.integerLimits !== undefined) {
      IntegerLimits.encode(message.integerLimits, writer.uint32(50).fork()).join();
    }
    if (message.dateLimits !== undefined) {
      DateLimits.encode(message.dateLimits, writer.uint32(58).fork()).join();
    }
    if (message.userLimits !== undefined) {
      UserLimits.encode(message.userLimits, writer.uint32(66).fork()).join();
    }
    if (message.selectionLimits !== undefined) {
      SelectionLimits.encode(message.selectionLimits, writer.uint32(74).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): FieldLimits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFieldLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxIdLength = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxDisplayNameLength = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxDescriptionLength = reader.int32();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.textLimits = TextLimits.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.longTextLimits = LongTextLimits.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.integerLimits = IntegerLimits.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.dateLimits = DateLimits.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.userLimits = UserLimits.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.selectionLimits = SelectionLimits.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FieldLimits {
    return {
      maxIdLength: isSet(object.maxIdLength) ? globalThis.Number(object.maxIdLength) : 0,
      maxDisplayNameLength: isSet(object.maxDisplayNameLength) ? globalThis.Number(object.maxDisplayNameLength) : 0,
      maxDescriptionLength: isSet(object.maxDescriptionLength) ? globalThis.Number(object.maxDescriptionLength) : 0,
      textLimits: isSet(object.textLimits) ? TextLimits.fromJSON(object.textLimits) : undefined,
      longTextLimits: isSet(object.longTextLimits) ? LongTextLimits.fromJSON(object.longTextLimits) : undefined,
      integerLimits: isSet(object.integerLimits) ? IntegerLimits.fromJSON(object.integerLimits) : undefined,
      dateLimits: isSet(object.dateLimits) ? DateLimits.fromJSON(object.dateLimits) : undefined,
      userLimits: isSet(object.userLimits) ? UserLimits.fromJSON(object.userLimits) : undefined,
      selectionLimits: isSet(object.selectionLimits) ? SelectionLimits.fromJSON(object.selectionLimits) : undefined,
    };
  },

  toJSON(message: FieldLimits): unknown {
    const obj: any = {};
    if (message.maxIdLength !== 0) {
      obj.maxIdLength = Math.round(message.maxIdLength);
    }
    if (message.maxDisplayNameLength !== 0) {
      obj.maxDisplayNameLength = Math.round(message.maxDisplayNameLength);
    }
    if (message.maxDescriptionLength !== 0) {
      obj.maxDescriptionLength = Math.round(message.maxDescriptionLength);
    }
    if (message.textLimits !== undefined) {
      obj.textLimits = TextLimits.toJSON(message.textLimits);
    }
    if (message.longTextLimits !== undefined) {
      obj.longTextLimits = LongTextLimits.toJSON(message.longTextLimits);
    }
    if (message.integerLimits !== undefined) {
      obj.integerLimits = IntegerLimits.toJSON(message.integerLimits);
    }
    if (message.dateLimits !== undefined) {
      obj.dateLimits = DateLimits.toJSON(message.dateLimits);
    }
    if (message.userLimits !== undefined) {
      obj.userLimits = UserLimits.toJSON(message.userLimits);
    }
    if (message.selectionLimits !== undefined) {
      obj.selectionLimits = SelectionLimits.toJSON(message.selectionLimits);
    }
    return obj;
  },

  create(base?: DeepPartial<FieldLimits>): FieldLimits {
    return FieldLimits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<FieldLimits>): FieldLimits {
    const message = createBaseFieldLimits();
    message.maxIdLength = object.maxIdLength ?? 0;
    message.maxDisplayNameLength = object.maxDisplayNameLength ?? 0;
    message.maxDescriptionLength = object.maxDescriptionLength ?? 0;
    message.textLimits = (object.textLimits !== undefined && object.textLimits !== null)
      ? TextLimits.fromPartial(object.textLimits)
      : undefined;
    message.longTextLimits = (object.longTextLimits !== undefined && object.longTextLimits !== null)
      ? LongTextLimits.fromPartial(object.longTextLimits)
      : undefined;
    message.integerLimits = (object.integerLimits !== undefined && object.integerLimits !== null)
      ? IntegerLimits.fromPartial(object.integerLimits)
      : undefined;
    message.dateLimits = (object.dateLimits !== undefined && object.dateLimits !== null)
      ? DateLimits.fromPartial(object.dateLimits)
      : undefined;
    message.userLimits = (object.userLimits !== undefined && object.userLimits !== null)
      ? UserLimits.fromPartial(object.userLimits)
      : undefined;
    message.selectionLimits = (object.selectionLimits !== undefined && object.selectionLimits !== null)
      ? SelectionLimits.fromPartial(object.selectionLimits)
      : undefined;
    return message;
  },
};

function createBaseListLimits(): ListLimits {
  return { maxEntries: 0 };
}

export const ListLimits: MessageFns<ListLimits> = {
  encode(message: ListLimits, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.maxEntries !== 0) {
      writer.uint32(8).int32(message.maxEntries);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListLimits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxEntries = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ListLimits {
    return { maxEntries: isSet(object.maxEntries) ? globalThis.Number(object.maxEntries) : 0 };
  },

  toJSON(message: ListLimits): unknown {
    const obj: any = {};
    if (message.maxEntries !== 0) {
      obj.maxEntries = Math.round(message.maxEntries);
    }
    return obj;
  },

  create(base?: DeepPartial<ListLimits>): ListLimits {
    return ListLimits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListLimits>): ListLimits {
    const message = createBaseListLimits();
    message.maxEntries = object.maxEntries ?? 0;
    return message;
  },
};

function createBaseTextLimits(): TextLimits {
  return { minLength: 0, maxLength: 0 };
}

export const TextLimits: MessageFns<TextLimits> = {
  encode(message: TextLimits, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.minLength !== 0) {
      writer.uint32(8).int32(message.minLength);
    }
    if (message.maxLength !== 0) {
      writer.uint32(16).int32(message.maxLength);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextLimits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.minLength = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxLength = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextLimits {
    return {
      minLength: isSet(object.minLength) ? globalThis.Number(object.minLength) : 0,
      maxLength: isSet(object.maxLength) ? globalThis.Number(object.maxLength) : 0,
    };
  },

  toJSON(message: TextLimits): unknown {
    const obj: any = {};
    if (message.minLength !== 0) {
      obj.minLength = Math.round(message.minLength);
    }
    if (message.maxLength !== 0) {
      obj.maxLength = Math.round(message.maxLength);
    }
    return obj;
  },

  create(base?: DeepPartial<TextLimits>): TextLimits {
    return TextLimits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TextLimits>): TextLimits {
    const message = createBaseTextLimits();
    message.minLength = object.minLength ?? 0;
    message.maxLength = object.maxLength ?? 0;
    return message;
  },
};

function createBaseLongTextLimits(): LongTextLimits {
  return { minLength: 0, maxLength: 0 };
}

export const LongTextLimits: MessageFns<LongTextLimits> = {
  encode(message: LongTextLimits, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.minLength !== 0) {
      writer.uint32(8).int32(message.minLength);
    }
    if (message.maxLength !== 0) {
      writer.uint32(16).int32(message.maxLength);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LongTextLimits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLongTextLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.minLength = reader.int32();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxLength = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LongTextLimits {
    return {
      minLength: isSet(object.minLength) ? globalThis.Number(object.minLength) : 0,
      maxLength: isSet(object.maxLength) ? globalThis.Number(object.maxLength) : 0,
    };
  },

  toJSON(message: LongTextLimits): unknown {
    const obj: any = {};
    if (message.minLength !== 0) {
      obj.minLength = Math.round(message.minLength);
    }
    if (message.maxLength !== 0) {
      obj.maxLength = Math.round(message.maxLength);
    }
    return obj;
  },

  create(base?: DeepPartial<LongTextLimits>): LongTextLimits {
    return LongTextLimits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LongTextLimits>): LongTextLimits {
    const message = createBaseLongTextLimits();
    message.minLength = object.minLength ?? 0;
    message.maxLength = object.maxLength ?? 0;
    return message;
  },
};

function createBaseIntegerLimits(): IntegerLimits {
  return { minValue: Long.ZERO, maxValue: Long.ZERO };
}

export const IntegerLimits: MessageFns<IntegerLimits> = {
  encode(message: IntegerLimits, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (!message.minValue.equals(Long.ZERO)) {
      writer.uint32(8).int64(message.minValue.toString());
    }
    if (!message.maxValue.equals(Long.ZERO)) {
      writer.uint32(16).int64(message.maxValue.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): IntegerLimits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIntegerLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.minValue = Long.fromString(reader.int64().toString());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxValue = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): IntegerLimits {
    return {
      minValue: isSet(object.minValue) ? Long.fromValue(object.minValue) : Long.ZERO,
      maxValue: isSet(object.maxValue) ? Long.fromValue(object.maxValue) : Long.ZERO,
    };
  },

  toJSON(message: IntegerLimits): unknown {
    const obj: any = {};
    if (!message.minValue.equals(Long.ZERO)) {
      obj.minValue = (message.minValue || Long.ZERO).toString();
    }
    if (!message.maxValue.equals(Long.ZERO)) {
      obj.maxValue = (message.maxValue || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<IntegerLimits>): IntegerLimits {
    return IntegerLimits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<IntegerLimits>): IntegerLimits {
    const message = createBaseIntegerLimits();
    message.minValue = (object.minValue !== undefined && object.minValue !== null)
      ? Long.fromValue(object.minValue)
      : Long.ZERO;
    message.maxValue = (object.maxValue !== undefined && object.maxValue !== null)
      ? Long.fromValue(object.maxValue)
      : Long.ZERO;
    return message;
  },
};

function createBaseDateLimits(): DateLimits {
  return { minValue: undefined, maxValue: undefined };
}

export const DateLimits: MessageFns<DateLimits> = {
  encode(message: DateLimits, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.minValue !== undefined) {
      DateMessage.encode(message.minValue, writer.uint32(10).fork()).join();
    }
    if (message.maxValue !== undefined) {
      DateMessage.encode(message.maxValue, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DateLimits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDateLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.minValue = DateMessage.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxValue = DateMessage.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DateLimits {
    return {
      minValue: isSet(object.minValue) ? DateMessage.fromJSON(object.minValue) : undefined,
      maxValue: isSet(object.maxValue) ? DateMessage.fromJSON(object.maxValue) : undefined,
    };
  },

  toJSON(message: DateLimits): unknown {
    const obj: any = {};
    if (message.minValue !== undefined) {
      obj.minValue = DateMessage.toJSON(message.minValue);
    }
    if (message.maxValue !== undefined) {
      obj.maxValue = DateMessage.toJSON(message.maxValue);
    }
    return obj;
  },

  create(base?: DeepPartial<DateLimits>): DateLimits {
    return DateLimits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DateLimits>): DateLimits {
    const message = createBaseDateLimits();
    message.minValue = (object.minValue !== undefined && object.minValue !== null)
      ? DateMessage.fromPartial(object.minValue)
      : undefined;
    message.maxValue = (object.maxValue !== undefined && object.maxValue !== null)
      ? DateMessage.fromPartial(object.maxValue)
      : undefined;
    return message;
  },
};

function createBaseSelectionLimits(): SelectionLimits {
  return { listLimits: undefined, maxIdLength: 0, maxDisplayNameLength: 0, maxChoices: 0, maxDeletedChoices: 0 };
}

export const SelectionLimits: MessageFns<SelectionLimits> = {
  encode(message: SelectionLimits, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.listLimits !== undefined) {
      ListLimits.encode(message.listLimits, writer.uint32(10).fork()).join();
    }
    if (message.maxIdLength !== 0) {
      writer.uint32(16).int32(message.maxIdLength);
    }
    if (message.maxDisplayNameLength !== 0) {
      writer.uint32(24).int32(message.maxDisplayNameLength);
    }
    if (message.maxChoices !== 0) {
      writer.uint32(32).int32(message.maxChoices);
    }
    if (message.maxDeletedChoices !== 0) {
      writer.uint32(40).int32(message.maxDeletedChoices);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SelectionLimits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSelectionLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.listLimits = ListLimits.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxIdLength = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxDisplayNameLength = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maxChoices = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxDeletedChoices = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SelectionLimits {
    return {
      listLimits: isSet(object.listLimits) ? ListLimits.fromJSON(object.listLimits) : undefined,
      maxIdLength: isSet(object.maxIdLength) ? globalThis.Number(object.maxIdLength) : 0,
      maxDisplayNameLength: isSet(object.maxDisplayNameLength) ? globalThis.Number(object.maxDisplayNameLength) : 0,
      maxChoices: isSet(object.maxChoices) ? globalThis.Number(object.maxChoices) : 0,
      maxDeletedChoices: isSet(object.maxDeletedChoices) ? globalThis.Number(object.maxDeletedChoices) : 0,
    };
  },

  toJSON(message: SelectionLimits): unknown {
    const obj: any = {};
    if (message.listLimits !== undefined) {
      obj.listLimits = ListLimits.toJSON(message.listLimits);
    }
    if (message.maxIdLength !== 0) {
      obj.maxIdLength = Math.round(message.maxIdLength);
    }
    if (message.maxDisplayNameLength !== 0) {
      obj.maxDisplayNameLength = Math.round(message.maxDisplayNameLength);
    }
    if (message.maxChoices !== 0) {
      obj.maxChoices = Math.round(message.maxChoices);
    }
    if (message.maxDeletedChoices !== 0) {
      obj.maxDeletedChoices = Math.round(message.maxDeletedChoices);
    }
    return obj;
  },

  create(base?: DeepPartial<SelectionLimits>): SelectionLimits {
    return SelectionLimits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SelectionLimits>): SelectionLimits {
    const message = createBaseSelectionLimits();
    message.listLimits = (object.listLimits !== undefined && object.listLimits !== null)
      ? ListLimits.fromPartial(object.listLimits)
      : undefined;
    message.maxIdLength = object.maxIdLength ?? 0;
    message.maxDisplayNameLength = object.maxDisplayNameLength ?? 0;
    message.maxChoices = object.maxChoices ?? 0;
    message.maxDeletedChoices = object.maxDeletedChoices ?? 0;
    return message;
  },
};

function createBaseUserLimits(): UserLimits {
  return { listLimits: undefined };
}

export const UserLimits: MessageFns<UserLimits> = {
  encode(message: UserLimits, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.listLimits !== undefined) {
      ListLimits.encode(message.listLimits, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UserLimits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.listLimits = ListLimits.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserLimits {
    return { listLimits: isSet(object.listLimits) ? ListLimits.fromJSON(object.listLimits) : undefined };
  },

  toJSON(message: UserLimits): unknown {
    const obj: any = {};
    if (message.listLimits !== undefined) {
      obj.listLimits = ListLimits.toJSON(message.listLimits);
    }
    return obj;
  },

  create(base?: DeepPartial<UserLimits>): UserLimits {
    return UserLimits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UserLimits>): UserLimits {
    const message = createBaseUserLimits();
    message.listLimits = (object.listLimits !== undefined && object.listLimits !== null)
      ? ListLimits.fromPartial(object.listLimits)
      : undefined;
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