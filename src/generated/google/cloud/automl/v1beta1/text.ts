// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/automl/v1beta1/text.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ClassificationType, classificationTypeFromJSON, classificationTypeToJSON } from "./classification.js";

export const protobufPackage = "google.cloud.automl.v1beta1";

/** Dataset metadata for classification. */
export interface TextClassificationDatasetMetadata {
  /** Required. Type of the classification problem. */
  classificationType: ClassificationType;
}

/** Model metadata that is specific to text classification. */
export interface TextClassificationModelMetadata {
  /** Output only. Classification type of the dataset used to train this model. */
  classificationType: ClassificationType;
}

/** Dataset metadata that is specific to text extraction */
export interface TextExtractionDatasetMetadata {
}

/** Model metadata that is specific to text extraction. */
export interface TextExtractionModelMetadata {
  /**
   * Indicates the scope of model use case.
   *
   * * `default`: Use to train a general text extraction model. Default value.
   *
   * * `health_care`: Use to train a text extraction model that is tuned for
   *   healthcare applications.
   */
  modelHint: string;
}

/** Dataset metadata for text sentiment. */
export interface TextSentimentDatasetMetadata {
  /**
   * Required. A sentiment is expressed as an integer ordinal, where higher value
   * means a more positive sentiment. The range of sentiments that will be used
   * is between 0 and sentiment_max (inclusive on both ends), and all the values
   * in the range must be represented in the dataset before a model can be
   * created.
   * sentiment_max value must be between 1 and 10 (inclusive).
   */
  sentimentMax: number;
}

/** Model metadata that is specific to text sentiment. */
export interface TextSentimentModelMetadata {
}

function createBaseTextClassificationDatasetMetadata(): TextClassificationDatasetMetadata {
  return { classificationType: 0 };
}

export const TextClassificationDatasetMetadata: MessageFns<TextClassificationDatasetMetadata> = {
  encode(message: TextClassificationDatasetMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.classificationType !== 0) {
      writer.uint32(8).int32(message.classificationType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextClassificationDatasetMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextClassificationDatasetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.classificationType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextClassificationDatasetMetadata {
    return {
      classificationType: isSet(object.classificationType) ? classificationTypeFromJSON(object.classificationType) : 0,
    };
  },

  toJSON(message: TextClassificationDatasetMetadata): unknown {
    const obj: any = {};
    if (message.classificationType !== 0) {
      obj.classificationType = classificationTypeToJSON(message.classificationType);
    }
    return obj;
  },

  create(base?: DeepPartial<TextClassificationDatasetMetadata>): TextClassificationDatasetMetadata {
    return TextClassificationDatasetMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TextClassificationDatasetMetadata>): TextClassificationDatasetMetadata {
    const message = createBaseTextClassificationDatasetMetadata();
    message.classificationType = object.classificationType ?? 0;
    return message;
  },
};

function createBaseTextClassificationModelMetadata(): TextClassificationModelMetadata {
  return { classificationType: 0 };
}

export const TextClassificationModelMetadata: MessageFns<TextClassificationModelMetadata> = {
  encode(message: TextClassificationModelMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.classificationType !== 0) {
      writer.uint32(24).int32(message.classificationType);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextClassificationModelMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextClassificationModelMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 24) {
            break;
          }

          message.classificationType = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextClassificationModelMetadata {
    return {
      classificationType: isSet(object.classificationType) ? classificationTypeFromJSON(object.classificationType) : 0,
    };
  },

  toJSON(message: TextClassificationModelMetadata): unknown {
    const obj: any = {};
    if (message.classificationType !== 0) {
      obj.classificationType = classificationTypeToJSON(message.classificationType);
    }
    return obj;
  },

  create(base?: DeepPartial<TextClassificationModelMetadata>): TextClassificationModelMetadata {
    return TextClassificationModelMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TextClassificationModelMetadata>): TextClassificationModelMetadata {
    const message = createBaseTextClassificationModelMetadata();
    message.classificationType = object.classificationType ?? 0;
    return message;
  },
};

function createBaseTextExtractionDatasetMetadata(): TextExtractionDatasetMetadata {
  return {};
}

export const TextExtractionDatasetMetadata: MessageFns<TextExtractionDatasetMetadata> = {
  encode(_: TextExtractionDatasetMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextExtractionDatasetMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextExtractionDatasetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): TextExtractionDatasetMetadata {
    return {};
  },

  toJSON(_: TextExtractionDatasetMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<TextExtractionDatasetMetadata>): TextExtractionDatasetMetadata {
    return TextExtractionDatasetMetadata.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<TextExtractionDatasetMetadata>): TextExtractionDatasetMetadata {
    const message = createBaseTextExtractionDatasetMetadata();
    return message;
  },
};

function createBaseTextExtractionModelMetadata(): TextExtractionModelMetadata {
  return { modelHint: "" };
}

export const TextExtractionModelMetadata: MessageFns<TextExtractionModelMetadata> = {
  encode(message: TextExtractionModelMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.modelHint !== "") {
      writer.uint32(26).string(message.modelHint);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextExtractionModelMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextExtractionModelMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.modelHint = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextExtractionModelMetadata {
    return { modelHint: isSet(object.modelHint) ? globalThis.String(object.modelHint) : "" };
  },

  toJSON(message: TextExtractionModelMetadata): unknown {
    const obj: any = {};
    if (message.modelHint !== "") {
      obj.modelHint = message.modelHint;
    }
    return obj;
  },

  create(base?: DeepPartial<TextExtractionModelMetadata>): TextExtractionModelMetadata {
    return TextExtractionModelMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TextExtractionModelMetadata>): TextExtractionModelMetadata {
    const message = createBaseTextExtractionModelMetadata();
    message.modelHint = object.modelHint ?? "";
    return message;
  },
};

function createBaseTextSentimentDatasetMetadata(): TextSentimentDatasetMetadata {
  return { sentimentMax: 0 };
}

export const TextSentimentDatasetMetadata: MessageFns<TextSentimentDatasetMetadata> = {
  encode(message: TextSentimentDatasetMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sentimentMax !== 0) {
      writer.uint32(8).int32(message.sentimentMax);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextSentimentDatasetMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextSentimentDatasetMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.sentimentMax = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextSentimentDatasetMetadata {
    return { sentimentMax: isSet(object.sentimentMax) ? globalThis.Number(object.sentimentMax) : 0 };
  },

  toJSON(message: TextSentimentDatasetMetadata): unknown {
    const obj: any = {};
    if (message.sentimentMax !== 0) {
      obj.sentimentMax = Math.round(message.sentimentMax);
    }
    return obj;
  },

  create(base?: DeepPartial<TextSentimentDatasetMetadata>): TextSentimentDatasetMetadata {
    return TextSentimentDatasetMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TextSentimentDatasetMetadata>): TextSentimentDatasetMetadata {
    const message = createBaseTextSentimentDatasetMetadata();
    message.sentimentMax = object.sentimentMax ?? 0;
    return message;
  },
};

function createBaseTextSentimentModelMetadata(): TextSentimentModelMetadata {
  return {};
}

export const TextSentimentModelMetadata: MessageFns<TextSentimentModelMetadata> = {
  encode(_: TextSentimentModelMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextSentimentModelMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextSentimentModelMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): TextSentimentModelMetadata {
    return {};
  },

  toJSON(_: TextSentimentModelMetadata): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<TextSentimentModelMetadata>): TextSentimentModelMetadata {
    return TextSentimentModelMetadata.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<TextSentimentModelMetadata>): TextSentimentModelMetadata {
    const message = createBaseTextSentimentModelMetadata();
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
