// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: zitadel/resources/user/v3alpha/user.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Struct } from "../../../../google/protobuf/struct.js";
import { Details } from "../../object/v3alpha/object.js";
import { Authenticators, SetAuthenticators } from "./authenticator.js";
import { Contact, SetContact } from "./communication.js";

export const protobufPackage = "zitadel.resources.user.v3alpha";

export enum State {
  USER_STATE_UNSPECIFIED = 0,
  USER_STATE_ACTIVE = 1,
  USER_STATE_INACTIVE = 2,
  USER_STATE_DELETED = 3,
  USER_STATE_LOCKED = 4,
  UNRECOGNIZED = -1,
}

export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "USER_STATE_UNSPECIFIED":
      return State.USER_STATE_UNSPECIFIED;
    case 1:
    case "USER_STATE_ACTIVE":
      return State.USER_STATE_ACTIVE;
    case 2:
    case "USER_STATE_INACTIVE":
      return State.USER_STATE_INACTIVE;
    case 3:
    case "USER_STATE_DELETED":
      return State.USER_STATE_DELETED;
    case 4:
    case "USER_STATE_LOCKED":
      return State.USER_STATE_LOCKED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}

export function stateToJSON(object: State): string {
  switch (object) {
    case State.USER_STATE_UNSPECIFIED:
      return "USER_STATE_UNSPECIFIED";
    case State.USER_STATE_ACTIVE:
      return "USER_STATE_ACTIVE";
    case State.USER_STATE_INACTIVE:
      return "USER_STATE_INACTIVE";
    case State.USER_STATE_DELETED:
      return "USER_STATE_DELETED";
    case State.USER_STATE_LOCKED:
      return "USER_STATE_LOCKED";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface CreateUser {
  /** Define the schema the user's data schema by providing it's ID. */
  schemaId: string;
  data:
    | { [key: string]: any }
    | undefined;
  /** Set the contact information (email, phone) for the user. */
  contact:
    | SetContact
    | undefined;
  /** Set the initial authenticators of the user. */
  authenticators:
    | SetAuthenticators
    | undefined;
  /** Optionally set a unique identifier of the user. If unset, ZITADEL will take care of it. */
  userId?: string | undefined;
}

export interface PatchUser {
  schemaId?: string | undefined;
  data?:
    | { [key: string]: any }
    | undefined;
  /** Set the contact information (email, phone) for the user. */
  contact?: SetContact | undefined;
}

export interface GetUser {
  /** Details provide some base information (such as the last change date) of the user. */
  details:
    | Details
    | undefined;
  /** The schema the user and it's data is based on. */
  schema: GetSchema | undefined;
  data:
    | { [key: string]: any }
    | undefined;
  /** Contact information for the user. ZITADEL will use this in case of internal notifications. */
  contact:
    | Contact
    | undefined;
  /**
   * The user's authenticators. They are used to identify and authenticate the user
   * during the authentication process.
   */
  authenticators:
    | Authenticators
    | undefined;
  /** State of the user. */
  state: State;
}

export interface GetSchema {
  /** The unique identifier of the user schema. */
  id: string;
  /** The human readable name of the user schema. */
  type: string;
  /** The revision the user's data is based on of the revision. */
  revision: number;
}

function createBaseCreateUser(): CreateUser {
  return { schemaId: "", data: undefined, contact: undefined, authenticators: undefined, userId: undefined };
}

export const CreateUser: MessageFns<CreateUser> = {
  encode(message: CreateUser, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.schemaId !== "") {
      writer.uint32(10).string(message.schemaId);
    }
    if (message.data !== undefined) {
      Struct.encode(Struct.wrap(message.data), writer.uint32(18).fork()).join();
    }
    if (message.contact !== undefined) {
      SetContact.encode(message.contact, writer.uint32(26).fork()).join();
    }
    if (message.authenticators !== undefined) {
      SetAuthenticators.encode(message.authenticators, writer.uint32(34).fork()).join();
    }
    if (message.userId !== undefined) {
      writer.uint32(42).string(message.userId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateUser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contact = SetContact.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.authenticators = SetAuthenticators.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.userId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUser {
    return {
      schemaId: isSet(object.schemaId) ? globalThis.String(object.schemaId) : "",
      data: isObject(object.data) ? object.data : undefined,
      contact: isSet(object.contact) ? SetContact.fromJSON(object.contact) : undefined,
      authenticators: isSet(object.authenticators) ? SetAuthenticators.fromJSON(object.authenticators) : undefined,
      userId: isSet(object.userId) ? globalThis.String(object.userId) : undefined,
    };
  },

  toJSON(message: CreateUser): unknown {
    const obj: any = {};
    if (message.schemaId !== "") {
      obj.schemaId = message.schemaId;
    }
    if (message.data !== undefined) {
      obj.data = message.data;
    }
    if (message.contact !== undefined) {
      obj.contact = SetContact.toJSON(message.contact);
    }
    if (message.authenticators !== undefined) {
      obj.authenticators = SetAuthenticators.toJSON(message.authenticators);
    }
    if (message.userId !== undefined) {
      obj.userId = message.userId;
    }
    return obj;
  },

  create(base?: DeepPartial<CreateUser>): CreateUser {
    return CreateUser.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<CreateUser>): CreateUser {
    const message = createBaseCreateUser();
    message.schemaId = object.schemaId ?? "";
    message.data = object.data ?? undefined;
    message.contact = (object.contact !== undefined && object.contact !== null)
      ? SetContact.fromPartial(object.contact)
      : undefined;
    message.authenticators = (object.authenticators !== undefined && object.authenticators !== null)
      ? SetAuthenticators.fromPartial(object.authenticators)
      : undefined;
    message.userId = object.userId ?? undefined;
    return message;
  },
};

function createBasePatchUser(): PatchUser {
  return { schemaId: undefined, data: undefined, contact: undefined };
}

export const PatchUser: MessageFns<PatchUser> = {
  encode(message: PatchUser, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.schemaId !== undefined) {
      writer.uint32(10).string(message.schemaId);
    }
    if (message.data !== undefined) {
      Struct.encode(Struct.wrap(message.data), writer.uint32(18).fork()).join();
    }
    if (message.contact !== undefined) {
      SetContact.encode(message.contact, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PatchUser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePatchUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.schemaId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.data = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contact = SetContact.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PatchUser {
    return {
      schemaId: isSet(object.schemaId) ? globalThis.String(object.schemaId) : undefined,
      data: isObject(object.data) ? object.data : undefined,
      contact: isSet(object.contact) ? SetContact.fromJSON(object.contact) : undefined,
    };
  },

  toJSON(message: PatchUser): unknown {
    const obj: any = {};
    if (message.schemaId !== undefined) {
      obj.schemaId = message.schemaId;
    }
    if (message.data !== undefined) {
      obj.data = message.data;
    }
    if (message.contact !== undefined) {
      obj.contact = SetContact.toJSON(message.contact);
    }
    return obj;
  },

  create(base?: DeepPartial<PatchUser>): PatchUser {
    return PatchUser.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<PatchUser>): PatchUser {
    const message = createBasePatchUser();
    message.schemaId = object.schemaId ?? undefined;
    message.data = object.data ?? undefined;
    message.contact = (object.contact !== undefined && object.contact !== null)
      ? SetContact.fromPartial(object.contact)
      : undefined;
    return message;
  },
};

function createBaseGetUser(): GetUser {
  return {
    details: undefined,
    schema: undefined,
    data: undefined,
    contact: undefined,
    authenticators: undefined,
    state: 0,
  };
}

export const GetUser: MessageFns<GetUser> = {
  encode(message: GetUser, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).join();
    }
    if (message.schema !== undefined) {
      GetSchema.encode(message.schema, writer.uint32(18).fork()).join();
    }
    if (message.data !== undefined) {
      Struct.encode(Struct.wrap(message.data), writer.uint32(26).fork()).join();
    }
    if (message.contact !== undefined) {
      Contact.encode(message.contact, writer.uint32(34).fork()).join();
    }
    if (message.authenticators !== undefined) {
      Authenticators.encode(message.authenticators, writer.uint32(42).fork()).join();
    }
    if (message.state !== 0) {
      writer.uint32(48).int32(message.state);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUser {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUser();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.details = Details.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.schema = GetSchema.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.data = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.contact = Contact.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.authenticators = Authenticators.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUser {
    return {
      details: isSet(object.details) ? Details.fromJSON(object.details) : undefined,
      schema: isSet(object.schema) ? GetSchema.fromJSON(object.schema) : undefined,
      data: isObject(object.data) ? object.data : undefined,
      contact: isSet(object.contact) ? Contact.fromJSON(object.contact) : undefined,
      authenticators: isSet(object.authenticators) ? Authenticators.fromJSON(object.authenticators) : undefined,
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
    };
  },

  toJSON(message: GetUser): unknown {
    const obj: any = {};
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details);
    }
    if (message.schema !== undefined) {
      obj.schema = GetSchema.toJSON(message.schema);
    }
    if (message.data !== undefined) {
      obj.data = message.data;
    }
    if (message.contact !== undefined) {
      obj.contact = Contact.toJSON(message.contact);
    }
    if (message.authenticators !== undefined) {
      obj.authenticators = Authenticators.toJSON(message.authenticators);
    }
    if (message.state !== 0) {
      obj.state = stateToJSON(message.state);
    }
    return obj;
  },

  create(base?: DeepPartial<GetUser>): GetUser {
    return GetUser.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUser>): GetUser {
    const message = createBaseGetUser();
    message.details = (object.details !== undefined && object.details !== null)
      ? Details.fromPartial(object.details)
      : undefined;
    message.schema = (object.schema !== undefined && object.schema !== null)
      ? GetSchema.fromPartial(object.schema)
      : undefined;
    message.data = object.data ?? undefined;
    message.contact = (object.contact !== undefined && object.contact !== null)
      ? Contact.fromPartial(object.contact)
      : undefined;
    message.authenticators = (object.authenticators !== undefined && object.authenticators !== null)
      ? Authenticators.fromPartial(object.authenticators)
      : undefined;
    message.state = object.state ?? 0;
    return message;
  },
};

function createBaseGetSchema(): GetSchema {
  return { id: "", type: "", revision: 0 };
}

export const GetSchema: MessageFns<GetSchema> = {
  encode(message: GetSchema, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.type !== "") {
      writer.uint32(18).string(message.type);
    }
    if (message.revision !== 0) {
      writer.uint32(24).uint32(message.revision);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetSchema {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetSchema();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.type = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.revision = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetSchema {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      type: isSet(object.type) ? globalThis.String(object.type) : "",
      revision: isSet(object.revision) ? globalThis.Number(object.revision) : 0,
    };
  },

  toJSON(message: GetSchema): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.type !== "") {
      obj.type = message.type;
    }
    if (message.revision !== 0) {
      obj.revision = Math.round(message.revision);
    }
    return obj;
  },

  create(base?: DeepPartial<GetSchema>): GetSchema {
    return GetSchema.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetSchema>): GetSchema {
    const message = createBaseGetSchema();
    message.id = object.id ?? "";
    message.type = object.type ?? "";
    message.revision = object.revision ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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
