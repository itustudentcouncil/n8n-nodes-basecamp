// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/documentai/v1beta2/barcode.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.documentai.v1beta2";

/** Encodes the detailed information of a barcode. */
export interface Barcode {
  /**
   * Format of a barcode.
   * The supported formats are:
   *
   * - `CODE_128`: Code 128 type.
   * - `CODE_39`: Code 39 type.
   * - `CODE_93`: Code 93 type.
   * - `CODABAR`: Codabar type.
   * - `DATA_MATRIX`: 2D Data Matrix type.
   * - `ITF`: ITF type.
   * - `EAN_13`: EAN-13 type.
   * - `EAN_8`: EAN-8 type.
   * - `QR_CODE`: 2D QR code type.
   * - `UPC_A`: UPC-A type.
   * - `UPC_E`: UPC-E type.
   * - `PDF417`: PDF417 type.
   * - `AZTEC`: 2D Aztec code type.
   * - `DATABAR`: GS1 DataBar code type.
   */
  format: string;
  /**
   * Value format describes the format of the value that a barcode
   * encodes.
   * The supported formats are:
   *
   * - `CONTACT_INFO`: Contact information.
   * - `EMAIL`: Email address.
   * - `ISBN`: ISBN identifier.
   * - `PHONE`: Phone number.
   * - `PRODUCT`: Product.
   * - `SMS`: SMS message.
   * - `TEXT`: Text string.
   * - `URL`: URL address.
   * - `WIFI`: Wifi information.
   * - `GEO`: Geo-localization.
   * - `CALENDAR_EVENT`: Calendar event.
   * - `DRIVER_LICENSE`: Driver's license.
   */
  valueFormat: string;
  /**
   * Raw value encoded in the barcode.
   * For example: `'MEBKM:TITLE:Google;URL:https://www.google.com;;'`.
   */
  rawValue: string;
}

function createBaseBarcode(): Barcode {
  return { format: "", valueFormat: "", rawValue: "" };
}

export const Barcode: MessageFns<Barcode> = {
  encode(message: Barcode, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.format !== "") {
      writer.uint32(10).string(message.format);
    }
    if (message.valueFormat !== "") {
      writer.uint32(18).string(message.valueFormat);
    }
    if (message.rawValue !== "") {
      writer.uint32(26).string(message.rawValue);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Barcode {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBarcode();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.format = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.valueFormat = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rawValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Barcode {
    return {
      format: isSet(object.format) ? globalThis.String(object.format) : "",
      valueFormat: isSet(object.valueFormat) ? globalThis.String(object.valueFormat) : "",
      rawValue: isSet(object.rawValue) ? globalThis.String(object.rawValue) : "",
    };
  },

  toJSON(message: Barcode): unknown {
    const obj: any = {};
    if (message.format !== "") {
      obj.format = message.format;
    }
    if (message.valueFormat !== "") {
      obj.valueFormat = message.valueFormat;
    }
    if (message.rawValue !== "") {
      obj.rawValue = message.rawValue;
    }
    return obj;
  },

  create(base?: DeepPartial<Barcode>): Barcode {
    return Barcode.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Barcode>): Barcode {
    const message = createBaseBarcode();
    message.format = object.format ?? "";
    message.valueFormat = object.valueFormat ?? "";
    message.rawValue = object.rawValue ?? "";
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
