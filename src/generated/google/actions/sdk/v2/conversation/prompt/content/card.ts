// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/actions/sdk/v2/conversation/prompt/content/card.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Image, Image_ImageFill, image_ImageFillFromJSON, image_ImageFillToJSON } from "./image.js";
import { Link } from "./link.js";

export const protobufPackage = "google.actions.sdk.v2.conversation";

/** A basic card for displaying some information, e.g. an image and/or text. */
export interface Card {
  /**
   * Overall title of the card.
   * Optional.
   */
  title: string;
  /** Optional. */
  subtitle: string;
  /**
   * Body text of the card.
   * Supports a limited set of markdown syntax for formatting.
   * Required, unless image is present.
   */
  text: string;
  /**
   * A hero image for the card. The height is fixed to 192dp.
   * Optional.
   */
  image:
    | Image
    | undefined;
  /** How the image background will be filled. Optional. */
  imageFill: Image_ImageFill;
  /**
   * Button.
   * Optional.
   */
  button: Link | undefined;
}

function createBaseCard(): Card {
  return { title: "", subtitle: "", text: "", image: undefined, imageFill: 0, button: undefined };
}

export const Card: MessageFns<Card> = {
  encode(message: Card, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.subtitle !== "") {
      writer.uint32(18).string(message.subtitle);
    }
    if (message.text !== "") {
      writer.uint32(26).string(message.text);
    }
    if (message.image !== undefined) {
      Image.encode(message.image, writer.uint32(34).fork()).join();
    }
    if (message.imageFill !== 0) {
      writer.uint32(40).int32(message.imageFill);
    }
    if (message.button !== undefined) {
      Link.encode(message.button, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Card {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCard();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.subtitle = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.text = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.image = Image.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.imageFill = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.button = Link.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Card {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      subtitle: isSet(object.subtitle) ? globalThis.String(object.subtitle) : "",
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      image: isSet(object.image) ? Image.fromJSON(object.image) : undefined,
      imageFill: isSet(object.imageFill) ? image_ImageFillFromJSON(object.imageFill) : 0,
      button: isSet(object.button) ? Link.fromJSON(object.button) : undefined,
    };
  },

  toJSON(message: Card): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.subtitle !== "") {
      obj.subtitle = message.subtitle;
    }
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.image !== undefined) {
      obj.image = Image.toJSON(message.image);
    }
    if (message.imageFill !== 0) {
      obj.imageFill = image_ImageFillToJSON(message.imageFill);
    }
    if (message.button !== undefined) {
      obj.button = Link.toJSON(message.button);
    }
    return obj;
  },

  create(base?: DeepPartial<Card>): Card {
    return Card.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Card>): Card {
    const message = createBaseCard();
    message.title = object.title ?? "";
    message.subtitle = object.subtitle ?? "";
    message.text = object.text ?? "";
    message.image = (object.image !== undefined && object.image !== null) ? Image.fromPartial(object.image) : undefined;
    message.imageFill = object.imageFill ?? 0;
    message.button = (object.button !== undefined && object.button !== null)
      ? Link.fromPartial(object.button)
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