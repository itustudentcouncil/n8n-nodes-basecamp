// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/chromeos/uidetection/v1/ui_detection.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";

export const protobufPackage = "google.chromeos.uidetection.v1";

/** Request message for UI detection. */
export interface UiDetectionRequest {
  /** Required. Required field that represents a PNG image. */
  imagePng: Buffer;
  /** Required. Required field that indicates the detection type. */
  request:
    | DetectionRequest
    | undefined;
  /**
   * Indicates whether to fall back to resizing the image if no elements are
   * detected.
   */
  resizeImage?:
    | boolean
    | undefined;
  /**
   * Deprecated as of 2023-03-29. Use test_metadata instead.
   *
   * @deprecated
   */
  testId: string;
  /** Optional. Metadata about the client for analytics. */
  testMetadata:
    | TestMetadata
    | undefined;
  /** Optional. Indicates whether to always start by resizing the image. */
  forceImageResizing: boolean;
  /** Optional. Indicates whether to respond with the transformed image png. */
  returnTransformedImage: boolean;
}

/** Detection type specifies what to detect in the image. */
export interface DetectionRequest {
  /** Detection type for word detection. */
  wordDetectionRequest?:
    | WordDetectionRequest
    | undefined;
  /** Detection type for text block detection. */
  textBlockDetectionRequest?:
    | TextBlockDetectionRequest
    | undefined;
  /** Detection type for custom icon detection. */
  customIconDetectionRequest?: CustomIconDetectionRequest | undefined;
}

/** Metadata about the client test and test device. */
export interface TestMetadata {
  /** Name of the calling test. For example, 'tast.uidetection.BasicDetections'. */
  testId: string;
  /** Board name of the ChromeOS device under test. For example, 'volteer'. */
  board: string;
  /** Model name of the ChromeOS device under test. For example, 'volet'. */
  model: string;
  /**
   * ChromeOS build of the device under test.
   * For example, 'volteer-release/R110-15275.0.0-75031-8794956681263330561'.
   */
  crosBuild: string;
}

/** Detection type for word detection. */
export interface WordDetectionRequest {
  /** Required. The word to locate in the image. */
  word: string;
  /** Indicating whether the query string is a regex or not. */
  regexMode: boolean;
  /** Indicating whether the detection is an approximate match. */
  disableApproxMatch: boolean;
  /**
   * Levenshtein distance threshold.
   * Applicable only if regex_mode is False.
   */
  maxEditDistance?: number | undefined;
}

/** Detection type for text block detection. */
export interface TextBlockDetectionRequest {
  /** Required. The text block consisting a list of words to locate in the image. */
  words: string[];
  /** Indicating whether the query string is a regex or not. */
  regexMode: boolean;
  /** Indicating whether the detection is an approximate match. */
  disableApproxMatch: boolean;
  /**
   * Levenshtein distance threshold.
   * Applicable only if regex_mode is False.
   */
  maxEditDistance?:
    | number
    | undefined;
  /**
   * Indicating whether the detection result should only contain the specified
   * words.
   */
  specifiedWordsOnly: boolean;
}

/** Detection type for custom icon detection. */
export interface CustomIconDetectionRequest {
  /** Required. Required field that represents an icon in PNG format. */
  iconPng: Buffer;
  /** Set match_count to -1 to not limit the number of matches. */
  matchCount: number;
  /**
   * Confidence threshold in the range [0.0, 1.0] below which the matches will
   * be considered as non-existent.
   */
  minConfidenceThreshold: number;
}

/** Response message for UI detection. */
export interface UiDetectionResponse {
  /** Locations of matching UI elements. */
  boundingBoxes: BoundingBox[];
  /**
   * The transformed detection image PNG, if requested and transformations were
   * applied.
   */
  transformedImagePng: Buffer;
  /**
   * The amount the original image was scaled by to make the transformed image.
   * 1.0 if the detection result is not based on a resized image.
   */
  resizingScaleFactor: number;
}

/**
 * The location of a UI element.
 * A bounding box is reprensented by its top-left point [left, top]
 * and its bottom-right point [right, bottom].
 */
export interface BoundingBox {
  /** The text found in the bounding box. */
  text: string;
  /** The y-coordinate of the top-left point. */
  top: number;
  /** The x-coordinate of the top-left point. */
  left: number;
  /** The y-coordinate of the bottom-right point. */
  bottom: number;
  /** The x-coordinate of the bottom-right point. */
  right: number;
}

function createBaseUiDetectionRequest(): UiDetectionRequest {
  return {
    imagePng: Buffer.alloc(0),
    request: undefined,
    resizeImage: undefined,
    testId: "",
    testMetadata: undefined,
    forceImageResizing: false,
    returnTransformedImage: false,
  };
}

export const UiDetectionRequest: MessageFns<UiDetectionRequest> = {
  encode(message: UiDetectionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.imagePng.length !== 0) {
      writer.uint32(10).bytes(message.imagePng);
    }
    if (message.request !== undefined) {
      DetectionRequest.encode(message.request, writer.uint32(18).fork()).join();
    }
    if (message.resizeImage !== undefined) {
      writer.uint32(24).bool(message.resizeImage);
    }
    if (message.testId !== "") {
      writer.uint32(34).string(message.testId);
    }
    if (message.testMetadata !== undefined) {
      TestMetadata.encode(message.testMetadata, writer.uint32(42).fork()).join();
    }
    if (message.forceImageResizing !== false) {
      writer.uint32(48).bool(message.forceImageResizing);
    }
    if (message.returnTransformedImage !== false) {
      writer.uint32(56).bool(message.returnTransformedImage);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UiDetectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUiDetectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.imagePng = Buffer.from(reader.bytes());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.request = DetectionRequest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.resizeImage = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.testId = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.testMetadata = TestMetadata.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.forceImageResizing = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.returnTransformedImage = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UiDetectionRequest {
    return {
      imagePng: isSet(object.imagePng) ? Buffer.from(bytesFromBase64(object.imagePng)) : Buffer.alloc(0),
      request: isSet(object.request) ? DetectionRequest.fromJSON(object.request) : undefined,
      resizeImage: isSet(object.resizeImage) ? globalThis.Boolean(object.resizeImage) : undefined,
      testId: isSet(object.testId) ? globalThis.String(object.testId) : "",
      testMetadata: isSet(object.testMetadata) ? TestMetadata.fromJSON(object.testMetadata) : undefined,
      forceImageResizing: isSet(object.forceImageResizing) ? globalThis.Boolean(object.forceImageResizing) : false,
      returnTransformedImage: isSet(object.returnTransformedImage)
        ? globalThis.Boolean(object.returnTransformedImage)
        : false,
    };
  },

  toJSON(message: UiDetectionRequest): unknown {
    const obj: any = {};
    if (message.imagePng.length !== 0) {
      obj.imagePng = base64FromBytes(message.imagePng);
    }
    if (message.request !== undefined) {
      obj.request = DetectionRequest.toJSON(message.request);
    }
    if (message.resizeImage !== undefined) {
      obj.resizeImage = message.resizeImage;
    }
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    if (message.testMetadata !== undefined) {
      obj.testMetadata = TestMetadata.toJSON(message.testMetadata);
    }
    if (message.forceImageResizing !== false) {
      obj.forceImageResizing = message.forceImageResizing;
    }
    if (message.returnTransformedImage !== false) {
      obj.returnTransformedImage = message.returnTransformedImage;
    }
    return obj;
  },

  create(base?: DeepPartial<UiDetectionRequest>): UiDetectionRequest {
    return UiDetectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UiDetectionRequest>): UiDetectionRequest {
    const message = createBaseUiDetectionRequest();
    message.imagePng = object.imagePng ?? Buffer.alloc(0);
    message.request = (object.request !== undefined && object.request !== null)
      ? DetectionRequest.fromPartial(object.request)
      : undefined;
    message.resizeImage = object.resizeImage ?? undefined;
    message.testId = object.testId ?? "";
    message.testMetadata = (object.testMetadata !== undefined && object.testMetadata !== null)
      ? TestMetadata.fromPartial(object.testMetadata)
      : undefined;
    message.forceImageResizing = object.forceImageResizing ?? false;
    message.returnTransformedImage = object.returnTransformedImage ?? false;
    return message;
  },
};

function createBaseDetectionRequest(): DetectionRequest {
  return {
    wordDetectionRequest: undefined,
    textBlockDetectionRequest: undefined,
    customIconDetectionRequest: undefined,
  };
}

export const DetectionRequest: MessageFns<DetectionRequest> = {
  encode(message: DetectionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.wordDetectionRequest !== undefined) {
      WordDetectionRequest.encode(message.wordDetectionRequest, writer.uint32(10).fork()).join();
    }
    if (message.textBlockDetectionRequest !== undefined) {
      TextBlockDetectionRequest.encode(message.textBlockDetectionRequest, writer.uint32(18).fork()).join();
    }
    if (message.customIconDetectionRequest !== undefined) {
      CustomIconDetectionRequest.encode(message.customIconDetectionRequest, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DetectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDetectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.wordDetectionRequest = WordDetectionRequest.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.textBlockDetectionRequest = TextBlockDetectionRequest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.customIconDetectionRequest = CustomIconDetectionRequest.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DetectionRequest {
    return {
      wordDetectionRequest: isSet(object.wordDetectionRequest)
        ? WordDetectionRequest.fromJSON(object.wordDetectionRequest)
        : undefined,
      textBlockDetectionRequest: isSet(object.textBlockDetectionRequest)
        ? TextBlockDetectionRequest.fromJSON(object.textBlockDetectionRequest)
        : undefined,
      customIconDetectionRequest: isSet(object.customIconDetectionRequest)
        ? CustomIconDetectionRequest.fromJSON(object.customIconDetectionRequest)
        : undefined,
    };
  },

  toJSON(message: DetectionRequest): unknown {
    const obj: any = {};
    if (message.wordDetectionRequest !== undefined) {
      obj.wordDetectionRequest = WordDetectionRequest.toJSON(message.wordDetectionRequest);
    }
    if (message.textBlockDetectionRequest !== undefined) {
      obj.textBlockDetectionRequest = TextBlockDetectionRequest.toJSON(message.textBlockDetectionRequest);
    }
    if (message.customIconDetectionRequest !== undefined) {
      obj.customIconDetectionRequest = CustomIconDetectionRequest.toJSON(message.customIconDetectionRequest);
    }
    return obj;
  },

  create(base?: DeepPartial<DetectionRequest>): DetectionRequest {
    return DetectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DetectionRequest>): DetectionRequest {
    const message = createBaseDetectionRequest();
    message.wordDetectionRequest = (object.wordDetectionRequest !== undefined && object.wordDetectionRequest !== null)
      ? WordDetectionRequest.fromPartial(object.wordDetectionRequest)
      : undefined;
    message.textBlockDetectionRequest =
      (object.textBlockDetectionRequest !== undefined && object.textBlockDetectionRequest !== null)
        ? TextBlockDetectionRequest.fromPartial(object.textBlockDetectionRequest)
        : undefined;
    message.customIconDetectionRequest =
      (object.customIconDetectionRequest !== undefined && object.customIconDetectionRequest !== null)
        ? CustomIconDetectionRequest.fromPartial(object.customIconDetectionRequest)
        : undefined;
    return message;
  },
};

function createBaseTestMetadata(): TestMetadata {
  return { testId: "", board: "", model: "", crosBuild: "" };
}

export const TestMetadata: MessageFns<TestMetadata> = {
  encode(message: TestMetadata, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.testId !== "") {
      writer.uint32(10).string(message.testId);
    }
    if (message.board !== "") {
      writer.uint32(18).string(message.board);
    }
    if (message.model !== "") {
      writer.uint32(26).string(message.model);
    }
    if (message.crosBuild !== "") {
      writer.uint32(34).string(message.crosBuild);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TestMetadata {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTestMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.testId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.board = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.model = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.crosBuild = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TestMetadata {
    return {
      testId: isSet(object.testId) ? globalThis.String(object.testId) : "",
      board: isSet(object.board) ? globalThis.String(object.board) : "",
      model: isSet(object.model) ? globalThis.String(object.model) : "",
      crosBuild: isSet(object.crosBuild) ? globalThis.String(object.crosBuild) : "",
    };
  },

  toJSON(message: TestMetadata): unknown {
    const obj: any = {};
    if (message.testId !== "") {
      obj.testId = message.testId;
    }
    if (message.board !== "") {
      obj.board = message.board;
    }
    if (message.model !== "") {
      obj.model = message.model;
    }
    if (message.crosBuild !== "") {
      obj.crosBuild = message.crosBuild;
    }
    return obj;
  },

  create(base?: DeepPartial<TestMetadata>): TestMetadata {
    return TestMetadata.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TestMetadata>): TestMetadata {
    const message = createBaseTestMetadata();
    message.testId = object.testId ?? "";
    message.board = object.board ?? "";
    message.model = object.model ?? "";
    message.crosBuild = object.crosBuild ?? "";
    return message;
  },
};

function createBaseWordDetectionRequest(): WordDetectionRequest {
  return { word: "", regexMode: false, disableApproxMatch: false, maxEditDistance: undefined };
}

export const WordDetectionRequest: MessageFns<WordDetectionRequest> = {
  encode(message: WordDetectionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.word !== "") {
      writer.uint32(10).string(message.word);
    }
    if (message.regexMode !== false) {
      writer.uint32(16).bool(message.regexMode);
    }
    if (message.disableApproxMatch !== false) {
      writer.uint32(24).bool(message.disableApproxMatch);
    }
    if (message.maxEditDistance !== undefined) {
      writer.uint32(32).int32(message.maxEditDistance);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): WordDetectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWordDetectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.word = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.regexMode = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.disableApproxMatch = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maxEditDistance = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): WordDetectionRequest {
    return {
      word: isSet(object.word) ? globalThis.String(object.word) : "",
      regexMode: isSet(object.regexMode) ? globalThis.Boolean(object.regexMode) : false,
      disableApproxMatch: isSet(object.disableApproxMatch) ? globalThis.Boolean(object.disableApproxMatch) : false,
      maxEditDistance: isSet(object.maxEditDistance) ? globalThis.Number(object.maxEditDistance) : undefined,
    };
  },

  toJSON(message: WordDetectionRequest): unknown {
    const obj: any = {};
    if (message.word !== "") {
      obj.word = message.word;
    }
    if (message.regexMode !== false) {
      obj.regexMode = message.regexMode;
    }
    if (message.disableApproxMatch !== false) {
      obj.disableApproxMatch = message.disableApproxMatch;
    }
    if (message.maxEditDistance !== undefined) {
      obj.maxEditDistance = Math.round(message.maxEditDistance);
    }
    return obj;
  },

  create(base?: DeepPartial<WordDetectionRequest>): WordDetectionRequest {
    return WordDetectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<WordDetectionRequest>): WordDetectionRequest {
    const message = createBaseWordDetectionRequest();
    message.word = object.word ?? "";
    message.regexMode = object.regexMode ?? false;
    message.disableApproxMatch = object.disableApproxMatch ?? false;
    message.maxEditDistance = object.maxEditDistance ?? undefined;
    return message;
  },
};

function createBaseTextBlockDetectionRequest(): TextBlockDetectionRequest {
  return {
    words: [],
    regexMode: false,
    disableApproxMatch: false,
    maxEditDistance: undefined,
    specifiedWordsOnly: false,
  };
}

export const TextBlockDetectionRequest: MessageFns<TextBlockDetectionRequest> = {
  encode(message: TextBlockDetectionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.words) {
      writer.uint32(10).string(v!);
    }
    if (message.regexMode !== false) {
      writer.uint32(16).bool(message.regexMode);
    }
    if (message.disableApproxMatch !== false) {
      writer.uint32(24).bool(message.disableApproxMatch);
    }
    if (message.maxEditDistance !== undefined) {
      writer.uint32(32).int32(message.maxEditDistance);
    }
    if (message.specifiedWordsOnly !== false) {
      writer.uint32(40).bool(message.specifiedWordsOnly);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TextBlockDetectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTextBlockDetectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.words.push(reader.string());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.regexMode = reader.bool();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.disableApproxMatch = reader.bool();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.maxEditDistance = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.specifiedWordsOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TextBlockDetectionRequest {
    return {
      words: globalThis.Array.isArray(object?.words) ? object.words.map((e: any) => globalThis.String(e)) : [],
      regexMode: isSet(object.regexMode) ? globalThis.Boolean(object.regexMode) : false,
      disableApproxMatch: isSet(object.disableApproxMatch) ? globalThis.Boolean(object.disableApproxMatch) : false,
      maxEditDistance: isSet(object.maxEditDistance) ? globalThis.Number(object.maxEditDistance) : undefined,
      specifiedWordsOnly: isSet(object.specifiedWordsOnly) ? globalThis.Boolean(object.specifiedWordsOnly) : false,
    };
  },

  toJSON(message: TextBlockDetectionRequest): unknown {
    const obj: any = {};
    if (message.words?.length) {
      obj.words = message.words;
    }
    if (message.regexMode !== false) {
      obj.regexMode = message.regexMode;
    }
    if (message.disableApproxMatch !== false) {
      obj.disableApproxMatch = message.disableApproxMatch;
    }
    if (message.maxEditDistance !== undefined) {
      obj.maxEditDistance = Math.round(message.maxEditDistance);
    }
    if (message.specifiedWordsOnly !== false) {
      obj.specifiedWordsOnly = message.specifiedWordsOnly;
    }
    return obj;
  },

  create(base?: DeepPartial<TextBlockDetectionRequest>): TextBlockDetectionRequest {
    return TextBlockDetectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TextBlockDetectionRequest>): TextBlockDetectionRequest {
    const message = createBaseTextBlockDetectionRequest();
    message.words = object.words?.map((e) => e) || [];
    message.regexMode = object.regexMode ?? false;
    message.disableApproxMatch = object.disableApproxMatch ?? false;
    message.maxEditDistance = object.maxEditDistance ?? undefined;
    message.specifiedWordsOnly = object.specifiedWordsOnly ?? false;
    return message;
  },
};

function createBaseCustomIconDetectionRequest(): CustomIconDetectionRequest {
  return { iconPng: Buffer.alloc(0), matchCount: 0, minConfidenceThreshold: 0 };
}

export const CustomIconDetectionRequest: MessageFns<CustomIconDetectionRequest> = {
  encode(message: CustomIconDetectionRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.iconPng.length !== 0) {
      writer.uint32(10).bytes(message.iconPng);
    }
    if (message.matchCount !== 0) {
      writer.uint32(16).int32(message.matchCount);
    }
    if (message.minConfidenceThreshold !== 0) {
      writer.uint32(25).double(message.minConfidenceThreshold);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CustomIconDetectionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCustomIconDetectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.iconPng = Buffer.from(reader.bytes());
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.matchCount = reader.int32();
          continue;
        case 3:
          if (tag !== 25) {
            break;
          }

          message.minConfidenceThreshold = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CustomIconDetectionRequest {
    return {
      iconPng: isSet(object.iconPng) ? Buffer.from(bytesFromBase64(object.iconPng)) : Buffer.alloc(0),
      matchCount: isSet(object.matchCount) ? globalThis.Number(object.matchCount) : 0,
      minConfidenceThreshold: isSet(object.minConfidenceThreshold)
        ? globalThis.Number(object.minConfidenceThreshold)
        : 0,
    };
  },

  toJSON(message: CustomIconDetectionRequest): unknown {
    const obj: any = {};
    if (message.iconPng.length !== 0) {
      obj.iconPng = base64FromBytes(message.iconPng);
    }
    if (message.matchCount !== 0) {
      obj.matchCount = Math.round(message.matchCount);
    }
    if (message.minConfidenceThreshold !== 0) {
      obj.minConfidenceThreshold = message.minConfidenceThreshold;
    }
    return obj;
  },

  create(base?: DeepPartial<CustomIconDetectionRequest>): CustomIconDetectionRequest {
    return CustomIconDetectionRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CustomIconDetectionRequest>): CustomIconDetectionRequest {
    const message = createBaseCustomIconDetectionRequest();
    message.iconPng = object.iconPng ?? Buffer.alloc(0);
    message.matchCount = object.matchCount ?? 0;
    message.minConfidenceThreshold = object.minConfidenceThreshold ?? 0;
    return message;
  },
};

function createBaseUiDetectionResponse(): UiDetectionResponse {
  return { boundingBoxes: [], transformedImagePng: Buffer.alloc(0), resizingScaleFactor: 0 };
}

export const UiDetectionResponse: MessageFns<UiDetectionResponse> = {
  encode(message: UiDetectionResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.boundingBoxes) {
      BoundingBox.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.transformedImagePng.length !== 0) {
      writer.uint32(18).bytes(message.transformedImagePng);
    }
    if (message.resizingScaleFactor !== 0) {
      writer.uint32(29).float(message.resizingScaleFactor);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UiDetectionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUiDetectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.boundingBoxes.push(BoundingBox.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.transformedImagePng = Buffer.from(reader.bytes());
          continue;
        case 3:
          if (tag !== 29) {
            break;
          }

          message.resizingScaleFactor = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UiDetectionResponse {
    return {
      boundingBoxes: globalThis.Array.isArray(object?.boundingBoxes)
        ? object.boundingBoxes.map((e: any) => BoundingBox.fromJSON(e))
        : [],
      transformedImagePng: isSet(object.transformedImagePng)
        ? Buffer.from(bytesFromBase64(object.transformedImagePng))
        : Buffer.alloc(0),
      resizingScaleFactor: isSet(object.resizingScaleFactor) ? globalThis.Number(object.resizingScaleFactor) : 0,
    };
  },

  toJSON(message: UiDetectionResponse): unknown {
    const obj: any = {};
    if (message.boundingBoxes?.length) {
      obj.boundingBoxes = message.boundingBoxes.map((e) => BoundingBox.toJSON(e));
    }
    if (message.transformedImagePng.length !== 0) {
      obj.transformedImagePng = base64FromBytes(message.transformedImagePng);
    }
    if (message.resizingScaleFactor !== 0) {
      obj.resizingScaleFactor = message.resizingScaleFactor;
    }
    return obj;
  },

  create(base?: DeepPartial<UiDetectionResponse>): UiDetectionResponse {
    return UiDetectionResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UiDetectionResponse>): UiDetectionResponse {
    const message = createBaseUiDetectionResponse();
    message.boundingBoxes = object.boundingBoxes?.map((e) => BoundingBox.fromPartial(e)) || [];
    message.transformedImagePng = object.transformedImagePng ?? Buffer.alloc(0);
    message.resizingScaleFactor = object.resizingScaleFactor ?? 0;
    return message;
  },
};

function createBaseBoundingBox(): BoundingBox {
  return { text: "", top: 0, left: 0, bottom: 0, right: 0 };
}

export const BoundingBox: MessageFns<BoundingBox> = {
  encode(message: BoundingBox, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.top !== 0) {
      writer.uint32(16).int32(message.top);
    }
    if (message.left !== 0) {
      writer.uint32(24).int32(message.left);
    }
    if (message.bottom !== 0) {
      writer.uint32(32).int32(message.bottom);
    }
    if (message.right !== 0) {
      writer.uint32(40).int32(message.right);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BoundingBox {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBoundingBox();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.top = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.left = reader.int32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.bottom = reader.int32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.right = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BoundingBox {
    return {
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      top: isSet(object.top) ? globalThis.Number(object.top) : 0,
      left: isSet(object.left) ? globalThis.Number(object.left) : 0,
      bottom: isSet(object.bottom) ? globalThis.Number(object.bottom) : 0,
      right: isSet(object.right) ? globalThis.Number(object.right) : 0,
    };
  },

  toJSON(message: BoundingBox): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.top !== 0) {
      obj.top = Math.round(message.top);
    }
    if (message.left !== 0) {
      obj.left = Math.round(message.left);
    }
    if (message.bottom !== 0) {
      obj.bottom = Math.round(message.bottom);
    }
    if (message.right !== 0) {
      obj.right = Math.round(message.right);
    }
    return obj;
  },

  create(base?: DeepPartial<BoundingBox>): BoundingBox {
    return BoundingBox.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BoundingBox>): BoundingBox {
    const message = createBaseBoundingBox();
    message.text = object.text ?? "";
    message.top = object.top ?? 0;
    message.left = object.left ?? 0;
    message.bottom = object.bottom ?? 0;
    message.right = object.right ?? 0;
    return message;
  },
};

/** Provides image-based UI detection service. */
export type UiDetectionServiceDefinition = typeof UiDetectionServiceDefinition;
export const UiDetectionServiceDefinition = {
  name: "UiDetectionService",
  fullName: "google.chromeos.uidetection.v1.UiDetectionService",
  methods: {
    /** Runs the detection. */
    executeDetection: {
      name: "ExecuteDetection",
      requestType: UiDetectionRequest,
      requestStream: false,
      responseType: UiDetectionResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              30,
              18,
              28,
              47,
              118,
              49,
              47,
              101,
              120,
              101,
              99,
              117,
              116,
              101,
              68,
              101,
              116,
              101,
              99,
              116,
              105,
              111,
              110,
              58,
              101,
              120,
              101,
              99,
              117,
              116,
              101,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface UiDetectionServiceImplementation<CallContextExt = {}> {
  /** Runs the detection. */
  executeDetection(
    request: UiDetectionRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UiDetectionResponse>>;
}

export interface UiDetectionServiceClient<CallOptionsExt = {}> {
  /** Runs the detection. */
  executeDetection(
    request: DeepPartial<UiDetectionRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UiDetectionResponse>;
}

function bytesFromBase64(b64: string): Uint8Array {
  return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}

function base64FromBytes(arr: Uint8Array): string {
  return globalThis.Buffer.from(arr).toString("base64");
}

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