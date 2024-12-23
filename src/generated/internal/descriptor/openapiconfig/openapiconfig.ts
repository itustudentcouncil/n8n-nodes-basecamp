// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: internal/descriptor/openapiconfig/openapiconfig.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { JSONSchema, Operation, Schema, Swagger, Tag } from "../../../protoc-gen-openapiv2/options/openapiv2.js";

export const protobufPackage = "grpc.gateway.internal.descriptor.openapiconfig";

/** OpenAPIFileOption represents OpenAPI options on a file */
export interface OpenAPIFileOption {
  file: string;
  option: Swagger | undefined;
}

/** OpenAPIMethodOption represents OpenAPI options on a method */
export interface OpenAPIMethodOption {
  method: string;
  option: Operation | undefined;
}

/** OpenAPIMessageOption represents OpenAPI options on a message */
export interface OpenAPIMessageOption {
  message: string;
  option: Schema | undefined;
}

/** OpenAPIServiceOption represents OpenAPI options on a service */
export interface OpenAPIServiceOption {
  /** ex: Service */
  service: string;
  option: Tag | undefined;
}

/** OpenAPIFieldOption represents OpenAPI options on a field */
export interface OpenAPIFieldOption {
  field: string;
  option: JSONSchema | undefined;
}

/** OpenAPIOptions represents OpenAPI protobuf options */
export interface OpenAPIOptions {
  file: OpenAPIFileOption[];
  method: OpenAPIMethodOption[];
  message: OpenAPIMessageOption[];
  service: OpenAPIServiceOption[];
  field: OpenAPIFieldOption[];
}

/** OpenAPIConfig represents a set of OpenAPI options */
export interface OpenAPIConfig {
  openapiOptions: OpenAPIOptions | undefined;
}

function createBaseOpenAPIFileOption(): OpenAPIFileOption {
  return { file: "", option: undefined };
}

export const OpenAPIFileOption: MessageFns<OpenAPIFileOption> = {
  encode(message: OpenAPIFileOption, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.file !== "") {
      writer.uint32(10).string(message.file);
    }
    if (message.option !== undefined) {
      Swagger.encode(message.option, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OpenAPIFileOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenAPIFileOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.file = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.option = Swagger.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenAPIFileOption {
    return {
      file: isSet(object.file) ? globalThis.String(object.file) : "",
      option: isSet(object.option) ? Swagger.fromJSON(object.option) : undefined,
    };
  },

  toJSON(message: OpenAPIFileOption): unknown {
    const obj: any = {};
    if (message.file !== "") {
      obj.file = message.file;
    }
    if (message.option !== undefined) {
      obj.option = Swagger.toJSON(message.option);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenAPIFileOption>): OpenAPIFileOption {
    return OpenAPIFileOption.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenAPIFileOption>): OpenAPIFileOption {
    const message = createBaseOpenAPIFileOption();
    message.file = object.file ?? "";
    message.option = (object.option !== undefined && object.option !== null)
      ? Swagger.fromPartial(object.option)
      : undefined;
    return message;
  },
};

function createBaseOpenAPIMethodOption(): OpenAPIMethodOption {
  return { method: "", option: undefined };
}

export const OpenAPIMethodOption: MessageFns<OpenAPIMethodOption> = {
  encode(message: OpenAPIMethodOption, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.method !== "") {
      writer.uint32(10).string(message.method);
    }
    if (message.option !== undefined) {
      Operation.encode(message.option, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OpenAPIMethodOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenAPIMethodOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.method = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.option = Operation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenAPIMethodOption {
    return {
      method: isSet(object.method) ? globalThis.String(object.method) : "",
      option: isSet(object.option) ? Operation.fromJSON(object.option) : undefined,
    };
  },

  toJSON(message: OpenAPIMethodOption): unknown {
    const obj: any = {};
    if (message.method !== "") {
      obj.method = message.method;
    }
    if (message.option !== undefined) {
      obj.option = Operation.toJSON(message.option);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenAPIMethodOption>): OpenAPIMethodOption {
    return OpenAPIMethodOption.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenAPIMethodOption>): OpenAPIMethodOption {
    const message = createBaseOpenAPIMethodOption();
    message.method = object.method ?? "";
    message.option = (object.option !== undefined && object.option !== null)
      ? Operation.fromPartial(object.option)
      : undefined;
    return message;
  },
};

function createBaseOpenAPIMessageOption(): OpenAPIMessageOption {
  return { message: "", option: undefined };
}

export const OpenAPIMessageOption: MessageFns<OpenAPIMessageOption> = {
  encode(message: OpenAPIMessageOption, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.option !== undefined) {
      Schema.encode(message.option, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OpenAPIMessageOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenAPIMessageOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.message = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.option = Schema.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenAPIMessageOption {
    return {
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      option: isSet(object.option) ? Schema.fromJSON(object.option) : undefined,
    };
  },

  toJSON(message: OpenAPIMessageOption): unknown {
    const obj: any = {};
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.option !== undefined) {
      obj.option = Schema.toJSON(message.option);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenAPIMessageOption>): OpenAPIMessageOption {
    return OpenAPIMessageOption.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenAPIMessageOption>): OpenAPIMessageOption {
    const message = createBaseOpenAPIMessageOption();
    message.message = object.message ?? "";
    message.option = (object.option !== undefined && object.option !== null)
      ? Schema.fromPartial(object.option)
      : undefined;
    return message;
  },
};

function createBaseOpenAPIServiceOption(): OpenAPIServiceOption {
  return { service: "", option: undefined };
}

export const OpenAPIServiceOption: MessageFns<OpenAPIServiceOption> = {
  encode(message: OpenAPIServiceOption, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.service !== "") {
      writer.uint32(10).string(message.service);
    }
    if (message.option !== undefined) {
      Tag.encode(message.option, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OpenAPIServiceOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenAPIServiceOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.service = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.option = Tag.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenAPIServiceOption {
    return {
      service: isSet(object.service) ? globalThis.String(object.service) : "",
      option: isSet(object.option) ? Tag.fromJSON(object.option) : undefined,
    };
  },

  toJSON(message: OpenAPIServiceOption): unknown {
    const obj: any = {};
    if (message.service !== "") {
      obj.service = message.service;
    }
    if (message.option !== undefined) {
      obj.option = Tag.toJSON(message.option);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenAPIServiceOption>): OpenAPIServiceOption {
    return OpenAPIServiceOption.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenAPIServiceOption>): OpenAPIServiceOption {
    const message = createBaseOpenAPIServiceOption();
    message.service = object.service ?? "";
    message.option = (object.option !== undefined && object.option !== null)
      ? Tag.fromPartial(object.option)
      : undefined;
    return message;
  },
};

function createBaseOpenAPIFieldOption(): OpenAPIFieldOption {
  return { field: "", option: undefined };
}

export const OpenAPIFieldOption: MessageFns<OpenAPIFieldOption> = {
  encode(message: OpenAPIFieldOption, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.option !== undefined) {
      JSONSchema.encode(message.option, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OpenAPIFieldOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenAPIFieldOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.field = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.option = JSONSchema.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenAPIFieldOption {
    return {
      field: isSet(object.field) ? globalThis.String(object.field) : "",
      option: isSet(object.option) ? JSONSchema.fromJSON(object.option) : undefined,
    };
  },

  toJSON(message: OpenAPIFieldOption): unknown {
    const obj: any = {};
    if (message.field !== "") {
      obj.field = message.field;
    }
    if (message.option !== undefined) {
      obj.option = JSONSchema.toJSON(message.option);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenAPIFieldOption>): OpenAPIFieldOption {
    return OpenAPIFieldOption.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenAPIFieldOption>): OpenAPIFieldOption {
    const message = createBaseOpenAPIFieldOption();
    message.field = object.field ?? "";
    message.option = (object.option !== undefined && object.option !== null)
      ? JSONSchema.fromPartial(object.option)
      : undefined;
    return message;
  },
};

function createBaseOpenAPIOptions(): OpenAPIOptions {
  return { file: [], method: [], message: [], service: [], field: [] };
}

export const OpenAPIOptions: MessageFns<OpenAPIOptions> = {
  encode(message: OpenAPIOptions, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.file) {
      OpenAPIFileOption.encode(v!, writer.uint32(10).fork()).join();
    }
    for (const v of message.method) {
      OpenAPIMethodOption.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.message) {
      OpenAPIMessageOption.encode(v!, writer.uint32(26).fork()).join();
    }
    for (const v of message.service) {
      OpenAPIServiceOption.encode(v!, writer.uint32(34).fork()).join();
    }
    for (const v of message.field) {
      OpenAPIFieldOption.encode(v!, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OpenAPIOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenAPIOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.file.push(OpenAPIFileOption.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.method.push(OpenAPIMethodOption.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message.push(OpenAPIMessageOption.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.service.push(OpenAPIServiceOption.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.field.push(OpenAPIFieldOption.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenAPIOptions {
    return {
      file: globalThis.Array.isArray(object?.file) ? object.file.map((e: any) => OpenAPIFileOption.fromJSON(e)) : [],
      method: globalThis.Array.isArray(object?.method)
        ? object.method.map((e: any) => OpenAPIMethodOption.fromJSON(e))
        : [],
      message: globalThis.Array.isArray(object?.message)
        ? object.message.map((e: any) => OpenAPIMessageOption.fromJSON(e))
        : [],
      service: globalThis.Array.isArray(object?.service)
        ? object.service.map((e: any) => OpenAPIServiceOption.fromJSON(e))
        : [],
      field: globalThis.Array.isArray(object?.field)
        ? object.field.map((e: any) => OpenAPIFieldOption.fromJSON(e))
        : [],
    };
  },

  toJSON(message: OpenAPIOptions): unknown {
    const obj: any = {};
    if (message.file?.length) {
      obj.file = message.file.map((e) => OpenAPIFileOption.toJSON(e));
    }
    if (message.method?.length) {
      obj.method = message.method.map((e) => OpenAPIMethodOption.toJSON(e));
    }
    if (message.message?.length) {
      obj.message = message.message.map((e) => OpenAPIMessageOption.toJSON(e));
    }
    if (message.service?.length) {
      obj.service = message.service.map((e) => OpenAPIServiceOption.toJSON(e));
    }
    if (message.field?.length) {
      obj.field = message.field.map((e) => OpenAPIFieldOption.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<OpenAPIOptions>): OpenAPIOptions {
    return OpenAPIOptions.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenAPIOptions>): OpenAPIOptions {
    const message = createBaseOpenAPIOptions();
    message.file = object.file?.map((e) => OpenAPIFileOption.fromPartial(e)) || [];
    message.method = object.method?.map((e) => OpenAPIMethodOption.fromPartial(e)) || [];
    message.message = object.message?.map((e) => OpenAPIMessageOption.fromPartial(e)) || [];
    message.service = object.service?.map((e) => OpenAPIServiceOption.fromPartial(e)) || [];
    message.field = object.field?.map((e) => OpenAPIFieldOption.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOpenAPIConfig(): OpenAPIConfig {
  return { openapiOptions: undefined };
}

export const OpenAPIConfig: MessageFns<OpenAPIConfig> = {
  encode(message: OpenAPIConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.openapiOptions !== undefined) {
      OpenAPIOptions.encode(message.openapiOptions, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OpenAPIConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOpenAPIConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.openapiOptions = OpenAPIOptions.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OpenAPIConfig {
    return {
      openapiOptions: isSet(object.openapiOptions) ? OpenAPIOptions.fromJSON(object.openapiOptions) : undefined,
    };
  },

  toJSON(message: OpenAPIConfig): unknown {
    const obj: any = {};
    if (message.openapiOptions !== undefined) {
      obj.openapiOptions = OpenAPIOptions.toJSON(message.openapiOptions);
    }
    return obj;
  },

  create(base?: DeepPartial<OpenAPIConfig>): OpenAPIConfig {
    return OpenAPIConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OpenAPIConfig>): OpenAPIConfig {
    const message = createBaseOpenAPIConfig();
    message.openapiOptions = (object.openapiOptions !== undefined && object.openapiOptions !== null)
      ? OpenAPIOptions.fromPartial(object.openapiOptions)
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
