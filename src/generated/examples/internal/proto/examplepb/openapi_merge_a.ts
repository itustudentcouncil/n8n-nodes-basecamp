// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: examples/internal/proto/examplepb/openapi_merge_a.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";

export const protobufPackage = "grpc.gateway.examples.internal.examplepb";

/** InMessageA represents a message to ServiceA and ServiceC. */
export interface InMessageA {
  /** Here is the explanation about InMessageA.values */
  values: string[];
}

/** OutMessageA represents a message returned from ServiceA. */
export interface OutMessageA {
  /** Here is the explanation about OutMessageA.value */
  value: string;
}

/** OutMessageC represents a message returned from ServiceC. */
export interface OutMessageC {
  /** Here is the explanation about OutMessageC.value */
  value: string;
}

function createBaseInMessageA(): InMessageA {
  return { values: [] };
}

export const InMessageA: MessageFns<InMessageA> = {
  encode(message: InMessageA, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.values) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): InMessageA {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInMessageA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.values.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): InMessageA {
    return {
      values: globalThis.Array.isArray(object?.values) ? object.values.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: InMessageA): unknown {
    const obj: any = {};
    if (message.values?.length) {
      obj.values = message.values;
    }
    return obj;
  },

  create(base?: DeepPartial<InMessageA>): InMessageA {
    return InMessageA.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<InMessageA>): InMessageA {
    const message = createBaseInMessageA();
    message.values = object.values?.map((e) => e) || [];
    return message;
  },
};

function createBaseOutMessageA(): OutMessageA {
  return { value: "" };
}

export const OutMessageA: MessageFns<OutMessageA> = {
  encode(message: OutMessageA, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OutMessageA {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutMessageA();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutMessageA {
    return { value: isSet(object.value) ? globalThis.String(object.value) : "" };
  },

  toJSON(message: OutMessageA): unknown {
    const obj: any = {};
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<OutMessageA>): OutMessageA {
    return OutMessageA.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OutMessageA>): OutMessageA {
    const message = createBaseOutMessageA();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseOutMessageC(): OutMessageC {
  return { value: "" };
}

export const OutMessageC: MessageFns<OutMessageC> = {
  encode(message: OutMessageC, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OutMessageC {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOutMessageC();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OutMessageC {
    return { value: isSet(object.value) ? globalThis.String(object.value) : "" };
  },

  toJSON(message: OutMessageC): unknown {
    const obj: any = {};
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create(base?: DeepPartial<OutMessageC>): OutMessageC {
    return OutMessageC.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OutMessageC>): OutMessageC {
    const message = createBaseOutMessageC();
    message.value = object.value ?? "";
    return message;
  },
};

/** ServiceA provices MethodOne and MethodTwo */
export type ServiceADefinition = typeof ServiceADefinition;
export const ServiceADefinition = {
  name: "ServiceA",
  fullName: "grpc.gateway.examples.internal.examplepb.ServiceA",
  methods: {
    /**
     * ServiceA.MethodOne receives InMessageA and returns OutMessageA
     *
     * Here is the detail explanation about ServiceA.MethodOne.
     */
    methodOne: {
      name: "MethodOne",
      requestType: InMessageA,
      requestStream: false,
      responseType: OutMessageA,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([20, 58, 1, 42, 34, 15, 47, 118, 49, 47, 101, 120, 97, 109, 112, 108, 101, 47, 97, 47, 49]),
          ],
        },
      },
    },
    /**
     * ServiceA.MethodTwo receives OutMessageA and returns InMessageA
     *
     * Here is the detail explanation about ServiceA.MethodTwo.
     */
    methodTwo: {
      name: "MethodTwo",
      requestType: OutMessageA,
      requestStream: false,
      responseType: InMessageA,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([20, 58, 1, 42, 34, 15, 47, 118, 49, 47, 101, 120, 97, 109, 112, 108, 101, 47, 97, 47, 50]),
          ],
        },
      },
    },
  },
} as const;

export interface ServiceAServiceImplementation<CallContextExt = {}> {
  /**
   * ServiceA.MethodOne receives InMessageA and returns OutMessageA
   *
   * Here is the detail explanation about ServiceA.MethodOne.
   */
  methodOne(request: InMessageA, context: CallContext & CallContextExt): Promise<DeepPartial<OutMessageA>>;
  /**
   * ServiceA.MethodTwo receives OutMessageA and returns InMessageA
   *
   * Here is the detail explanation about ServiceA.MethodTwo.
   */
  methodTwo(request: OutMessageA, context: CallContext & CallContextExt): Promise<DeepPartial<InMessageA>>;
}

export interface ServiceAClient<CallOptionsExt = {}> {
  /**
   * ServiceA.MethodOne receives InMessageA and returns OutMessageA
   *
   * Here is the detail explanation about ServiceA.MethodOne.
   */
  methodOne(request: DeepPartial<InMessageA>, options?: CallOptions & CallOptionsExt): Promise<OutMessageA>;
  /**
   * ServiceA.MethodTwo receives OutMessageA and returns InMessageA
   *
   * Here is the detail explanation about ServiceA.MethodTwo.
   */
  methodTwo(request: DeepPartial<OutMessageA>, options?: CallOptions & CallOptionsExt): Promise<InMessageA>;
}

/** ServiceC service responds to incoming merge requests. */
export type ServiceCDefinition = typeof ServiceCDefinition;
export const ServiceCDefinition = {
  name: "ServiceC",
  fullName: "grpc.gateway.examples.internal.examplepb.ServiceC",
  methods: {
    /**
     * ServiceC.MethodOne receives InMessageA and returns OutMessageC
     *
     * Here is the detail explanation about ServiceC.MethodOne.
     */
    methodOne: {
      name: "MethodOne",
      requestType: InMessageA,
      requestStream: false,
      responseType: OutMessageC,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([20, 58, 1, 42, 34, 15, 47, 118, 49, 47, 101, 120, 97, 109, 112, 108, 101, 47, 99, 47, 49]),
          ],
        },
      },
    },
    /**
     * ServiceC.MethodTwo receives OutMessageA and returns InMessageA
     *
     * Here is the detail explanation about ServiceC.MethodTwo.
     */
    methodTwo: {
      name: "MethodTwo",
      requestType: OutMessageA,
      requestStream: false,
      responseType: InMessageA,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([20, 58, 1, 42, 34, 15, 47, 118, 49, 47, 101, 120, 97, 109, 112, 108, 101, 47, 99, 47, 50]),
          ],
        },
      },
    },
  },
} as const;

export interface ServiceCServiceImplementation<CallContextExt = {}> {
  /**
   * ServiceC.MethodOne receives InMessageA and returns OutMessageC
   *
   * Here is the detail explanation about ServiceC.MethodOne.
   */
  methodOne(request: InMessageA, context: CallContext & CallContextExt): Promise<DeepPartial<OutMessageC>>;
  /**
   * ServiceC.MethodTwo receives OutMessageA and returns InMessageA
   *
   * Here is the detail explanation about ServiceC.MethodTwo.
   */
  methodTwo(request: OutMessageA, context: CallContext & CallContextExt): Promise<DeepPartial<InMessageA>>;
}

export interface ServiceCClient<CallOptionsExt = {}> {
  /**
   * ServiceC.MethodOne receives InMessageA and returns OutMessageC
   *
   * Here is the detail explanation about ServiceC.MethodOne.
   */
  methodOne(request: DeepPartial<InMessageA>, options?: CallOptions & CallOptionsExt): Promise<OutMessageC>;
  /**
   * ServiceC.MethodTwo receives OutMessageA and returns InMessageA
   *
   * Here is the detail explanation about ServiceC.MethodTwo.
   */
  methodTwo(request: DeepPartial<OutMessageA>, options?: CallOptions & CallOptionsExt): Promise<InMessageA>;
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
