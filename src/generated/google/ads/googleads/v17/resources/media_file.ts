// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/ads/googleads/v17/resources/media_file.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import {
  MediaTypeEnum_MediaType,
  mediaTypeEnum_MediaTypeFromJSON,
  mediaTypeEnum_MediaTypeToJSON,
} from "../enums/media_type.js";
import {
  MimeTypeEnum_MimeType,
  mimeTypeEnum_MimeTypeFromJSON,
  mimeTypeEnum_MimeTypeToJSON,
} from "../enums/mime_type.js";

export const protobufPackage = "google.ads.googleads.v17.resources";

/** A media file. */
export interface MediaFile {
  /**
   * Immutable. The resource name of the media file.
   * Media file resource names have the form:
   *
   * `customers/{customer_id}/mediaFiles/{media_file_id}`
   */
  resourceName: string;
  /** Output only. The ID of the media file. */
  id?:
    | Long
    | undefined;
  /** Immutable. Type of the media file. */
  type: MediaTypeEnum_MediaType;
  /** Output only. The mime type of the media file. */
  mimeType: MimeTypeEnum_MimeType;
  /**
   * Immutable. The URL of where the original media file was downloaded from (or
   * a file name). Only used for media of type AUDIO and IMAGE.
   */
  sourceUrl?:
    | string
    | undefined;
  /**
   * Immutable. The name of the media file. The name can be used by clients to
   * help identify previously uploaded media.
   */
  name?:
    | string
    | undefined;
  /** Output only. The size of the media file in bytes. */
  fileSize?:
    | Long
    | undefined;
  /** Immutable. Encapsulates an Image. */
  image?:
    | MediaImage
    | undefined;
  /**
   * Immutable. A ZIP archive media the content of which contains HTML5
   * assets.
   */
  mediaBundle?:
    | MediaBundle
    | undefined;
  /** Output only. Encapsulates an Audio. */
  audio?:
    | MediaAudio
    | undefined;
  /** Immutable. Encapsulates a Video. */
  video?: MediaVideo | undefined;
}

/** Encapsulates an Image. */
export interface MediaImage {
  /** Immutable. Raw image data. */
  data?:
    | Buffer
    | undefined;
  /** Output only. The url to the full size version of the image. */
  fullSizeImageUrl?:
    | string
    | undefined;
  /** Output only. The url to the preview size version of the image. */
  previewSizeImageUrl?: string | undefined;
}

/** Represents a ZIP archive media the content of which contains HTML5 assets. */
export interface MediaBundle {
  /** Immutable. Raw zipped data. */
  data?:
    | Buffer
    | undefined;
  /**
   * Output only. The url to access the uploaded zipped data.
   * For example, https://tpc.googlesyndication.com/simgad/123
   * This field is read-only.
   */
  url?: string | undefined;
}

/** Encapsulates an Audio. */
export interface MediaAudio {
  /** Output only. The duration of the Audio in milliseconds. */
  adDurationMillis?: Long | undefined;
}

/** Encapsulates a Video. */
export interface MediaVideo {
  /** Output only. The duration of the Video in milliseconds. */
  adDurationMillis?:
    | Long
    | undefined;
  /**
   * Immutable. The YouTube video ID (as seen in YouTube URLs). Adding prefix
   * "https://www.youtube.com/watch?v=" to this ID will get the YouTube
   * streaming URL for this video.
   */
  youtubeVideoId?:
    | string
    | undefined;
  /**
   * Output only. The Advertising Digital Identification code for this video, as
   * defined by the American Association of Advertising Agencies, used mainly
   * for television commercials.
   */
  advertisingIdCode?:
    | string
    | undefined;
  /**
   * Output only. The Industry Standard Commercial Identifier code for this
   * video, used mainly for television commercials.
   */
  isciCode?: string | undefined;
}

function createBaseMediaFile(): MediaFile {
  return {
    resourceName: "",
    id: undefined,
    type: 0,
    mimeType: 0,
    sourceUrl: undefined,
    name: undefined,
    fileSize: undefined,
    image: undefined,
    mediaBundle: undefined,
    audio: undefined,
    video: undefined,
  };
}

export const MediaFile: MessageFns<MediaFile> = {
  encode(message: MediaFile, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.resourceName !== "") {
      writer.uint32(10).string(message.resourceName);
    }
    if (message.id !== undefined) {
      writer.uint32(96).int64(message.id.toString());
    }
    if (message.type !== 0) {
      writer.uint32(40).int32(message.type);
    }
    if (message.mimeType !== 0) {
      writer.uint32(48).int32(message.mimeType);
    }
    if (message.sourceUrl !== undefined) {
      writer.uint32(106).string(message.sourceUrl);
    }
    if (message.name !== undefined) {
      writer.uint32(114).string(message.name);
    }
    if (message.fileSize !== undefined) {
      writer.uint32(120).int64(message.fileSize.toString());
    }
    if (message.image !== undefined) {
      MediaImage.encode(message.image, writer.uint32(26).fork()).join();
    }
    if (message.mediaBundle !== undefined) {
      MediaBundle.encode(message.mediaBundle, writer.uint32(34).fork()).join();
    }
    if (message.audio !== undefined) {
      MediaAudio.encode(message.audio, writer.uint32(82).fork()).join();
    }
    if (message.video !== undefined) {
      MediaVideo.encode(message.video, writer.uint32(90).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MediaFile {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.resourceName = reader.string();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.id = Long.fromString(reader.int64().toString());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.mimeType = reader.int32() as any;
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.sourceUrl = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.name = reader.string();
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.fileSize = Long.fromString(reader.int64().toString());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.image = MediaImage.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.mediaBundle = MediaBundle.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.audio = MediaAudio.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.video = MediaVideo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MediaFile {
    return {
      resourceName: isSet(object.resourceName) ? globalThis.String(object.resourceName) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : undefined,
      type: isSet(object.type) ? mediaTypeEnum_MediaTypeFromJSON(object.type) : 0,
      mimeType: isSet(object.mimeType) ? mimeTypeEnum_MimeTypeFromJSON(object.mimeType) : 0,
      sourceUrl: isSet(object.sourceUrl) ? globalThis.String(object.sourceUrl) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : undefined,
      fileSize: isSet(object.fileSize) ? Long.fromValue(object.fileSize) : undefined,
      image: isSet(object.image) ? MediaImage.fromJSON(object.image) : undefined,
      mediaBundle: isSet(object.mediaBundle) ? MediaBundle.fromJSON(object.mediaBundle) : undefined,
      audio: isSet(object.audio) ? MediaAudio.fromJSON(object.audio) : undefined,
      video: isSet(object.video) ? MediaVideo.fromJSON(object.video) : undefined,
    };
  },

  toJSON(message: MediaFile): unknown {
    const obj: any = {};
    if (message.resourceName !== "") {
      obj.resourceName = message.resourceName;
    }
    if (message.id !== undefined) {
      obj.id = (message.id || Long.ZERO).toString();
    }
    if (message.type !== 0) {
      obj.type = mediaTypeEnum_MediaTypeToJSON(message.type);
    }
    if (message.mimeType !== 0) {
      obj.mimeType = mimeTypeEnum_MimeTypeToJSON(message.mimeType);
    }
    if (message.sourceUrl !== undefined) {
      obj.sourceUrl = message.sourceUrl;
    }
    if (message.name !== undefined) {
      obj.name = message.name;
    }
    if (message.fileSize !== undefined) {
      obj.fileSize = (message.fileSize || Long.ZERO).toString();
    }
    if (message.image !== undefined) {
      obj.image = MediaImage.toJSON(message.image);
    }
    if (message.mediaBundle !== undefined) {
      obj.mediaBundle = MediaBundle.toJSON(message.mediaBundle);
    }
    if (message.audio !== undefined) {
      obj.audio = MediaAudio.toJSON(message.audio);
    }
    if (message.video !== undefined) {
      obj.video = MediaVideo.toJSON(message.video);
    }
    return obj;
  },

  create(base?: DeepPartial<MediaFile>): MediaFile {
    return MediaFile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MediaFile>): MediaFile {
    const message = createBaseMediaFile();
    message.resourceName = object.resourceName ?? "";
    message.id = (object.id !== undefined && object.id !== null) ? Long.fromValue(object.id) : undefined;
    message.type = object.type ?? 0;
    message.mimeType = object.mimeType ?? 0;
    message.sourceUrl = object.sourceUrl ?? undefined;
    message.name = object.name ?? undefined;
    message.fileSize = (object.fileSize !== undefined && object.fileSize !== null)
      ? Long.fromValue(object.fileSize)
      : undefined;
    message.image = (object.image !== undefined && object.image !== null)
      ? MediaImage.fromPartial(object.image)
      : undefined;
    message.mediaBundle = (object.mediaBundle !== undefined && object.mediaBundle !== null)
      ? MediaBundle.fromPartial(object.mediaBundle)
      : undefined;
    message.audio = (object.audio !== undefined && object.audio !== null)
      ? MediaAudio.fromPartial(object.audio)
      : undefined;
    message.video = (object.video !== undefined && object.video !== null)
      ? MediaVideo.fromPartial(object.video)
      : undefined;
    return message;
  },
};

function createBaseMediaImage(): MediaImage {
  return { data: undefined, fullSizeImageUrl: undefined, previewSizeImageUrl: undefined };
}

export const MediaImage: MessageFns<MediaImage> = {
  encode(message: MediaImage, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.data !== undefined) {
      writer.uint32(34).bytes(message.data);
    }
    if (message.fullSizeImageUrl !== undefined) {
      writer.uint32(18).string(message.fullSizeImageUrl);
    }
    if (message.previewSizeImageUrl !== undefined) {
      writer.uint32(26).string(message.previewSizeImageUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MediaImage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaImage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          if (tag !== 34) {
            break;
          }

          message.data = Buffer.from(reader.bytes());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fullSizeImageUrl = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.previewSizeImageUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MediaImage {
    return {
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : undefined,
      fullSizeImageUrl: isSet(object.fullSizeImageUrl) ? globalThis.String(object.fullSizeImageUrl) : undefined,
      previewSizeImageUrl: isSet(object.previewSizeImageUrl)
        ? globalThis.String(object.previewSizeImageUrl)
        : undefined,
    };
  },

  toJSON(message: MediaImage): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.fullSizeImageUrl !== undefined) {
      obj.fullSizeImageUrl = message.fullSizeImageUrl;
    }
    if (message.previewSizeImageUrl !== undefined) {
      obj.previewSizeImageUrl = message.previewSizeImageUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<MediaImage>): MediaImage {
    return MediaImage.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MediaImage>): MediaImage {
    const message = createBaseMediaImage();
    message.data = object.data ?? undefined;
    message.fullSizeImageUrl = object.fullSizeImageUrl ?? undefined;
    message.previewSizeImageUrl = object.previewSizeImageUrl ?? undefined;
    return message;
  },
};

function createBaseMediaBundle(): MediaBundle {
  return { data: undefined, url: undefined };
}

export const MediaBundle: MessageFns<MediaBundle> = {
  encode(message: MediaBundle, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.data !== undefined) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.url !== undefined) {
      writer.uint32(18).string(message.url);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MediaBundle {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaBundle();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = Buffer.from(reader.bytes());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.url = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MediaBundle {
    return {
      data: isSet(object.data) ? Buffer.from(bytesFromBase64(object.data)) : undefined,
      url: isSet(object.url) ? globalThis.String(object.url) : undefined,
    };
  },

  toJSON(message: MediaBundle): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = base64FromBytes(message.data);
    }
    if (message.url !== undefined) {
      obj.url = message.url;
    }
    return obj;
  },

  create(base?: DeepPartial<MediaBundle>): MediaBundle {
    return MediaBundle.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MediaBundle>): MediaBundle {
    const message = createBaseMediaBundle();
    message.data = object.data ?? undefined;
    message.url = object.url ?? undefined;
    return message;
  },
};

function createBaseMediaAudio(): MediaAudio {
  return { adDurationMillis: undefined };
}

export const MediaAudio: MessageFns<MediaAudio> = {
  encode(message: MediaAudio, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.adDurationMillis !== undefined) {
      writer.uint32(16).int64(message.adDurationMillis.toString());
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MediaAudio {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaAudio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.adDurationMillis = Long.fromString(reader.int64().toString());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MediaAudio {
    return { adDurationMillis: isSet(object.adDurationMillis) ? Long.fromValue(object.adDurationMillis) : undefined };
  },

  toJSON(message: MediaAudio): unknown {
    const obj: any = {};
    if (message.adDurationMillis !== undefined) {
      obj.adDurationMillis = (message.adDurationMillis || Long.ZERO).toString();
    }
    return obj;
  },

  create(base?: DeepPartial<MediaAudio>): MediaAudio {
    return MediaAudio.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MediaAudio>): MediaAudio {
    const message = createBaseMediaAudio();
    message.adDurationMillis = (object.adDurationMillis !== undefined && object.adDurationMillis !== null)
      ? Long.fromValue(object.adDurationMillis)
      : undefined;
    return message;
  },
};

function createBaseMediaVideo(): MediaVideo {
  return { adDurationMillis: undefined, youtubeVideoId: undefined, advertisingIdCode: undefined, isciCode: undefined };
}

export const MediaVideo: MessageFns<MediaVideo> = {
  encode(message: MediaVideo, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.adDurationMillis !== undefined) {
      writer.uint32(40).int64(message.adDurationMillis.toString());
    }
    if (message.youtubeVideoId !== undefined) {
      writer.uint32(50).string(message.youtubeVideoId);
    }
    if (message.advertisingIdCode !== undefined) {
      writer.uint32(58).string(message.advertisingIdCode);
    }
    if (message.isciCode !== undefined) {
      writer.uint32(66).string(message.isciCode);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): MediaVideo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMediaVideo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 40) {
            break;
          }

          message.adDurationMillis = Long.fromString(reader.int64().toString());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.youtubeVideoId = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.advertisingIdCode = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.isciCode = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): MediaVideo {
    return {
      adDurationMillis: isSet(object.adDurationMillis) ? Long.fromValue(object.adDurationMillis) : undefined,
      youtubeVideoId: isSet(object.youtubeVideoId) ? globalThis.String(object.youtubeVideoId) : undefined,
      advertisingIdCode: isSet(object.advertisingIdCode) ? globalThis.String(object.advertisingIdCode) : undefined,
      isciCode: isSet(object.isciCode) ? globalThis.String(object.isciCode) : undefined,
    };
  },

  toJSON(message: MediaVideo): unknown {
    const obj: any = {};
    if (message.adDurationMillis !== undefined) {
      obj.adDurationMillis = (message.adDurationMillis || Long.ZERO).toString();
    }
    if (message.youtubeVideoId !== undefined) {
      obj.youtubeVideoId = message.youtubeVideoId;
    }
    if (message.advertisingIdCode !== undefined) {
      obj.advertisingIdCode = message.advertisingIdCode;
    }
    if (message.isciCode !== undefined) {
      obj.isciCode = message.isciCode;
    }
    return obj;
  },

  create(base?: DeepPartial<MediaVideo>): MediaVideo {
    return MediaVideo.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<MediaVideo>): MediaVideo {
    const message = createBaseMediaVideo();
    message.adDurationMillis = (object.adDurationMillis !== undefined && object.adDurationMillis !== null)
      ? Long.fromValue(object.adDurationMillis)
      : undefined;
    message.youtubeVideoId = object.youtubeVideoId ?? undefined;
    message.advertisingIdCode = object.advertisingIdCode ?? undefined;
    message.isciCode = object.isciCode ?? undefined;
    return message;
  },
};

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