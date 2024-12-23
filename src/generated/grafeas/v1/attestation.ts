// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: grafeas/v1/attestation.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Signature } from "./common.js";

export const protobufPackage = "grafeas.v1";

/**
 * Note kind that represents a logical attestation "role" or "authority". For
 * example, an organization might have one `Authority` for "QA" and one for
 * "build". This note is intended to act strictly as a grouping mechanism for
 * the attached occurrences (Attestations). This grouping mechanism also
 * provides a security boundary, since IAM ACLs gate the ability for a principle
 * to attach an occurrence to a given note. It also provides a single point of
 * lookup to find all attached attestation occurrences, even if they don't all
 * live in the same project.
 */
export interface AttestationNote {
  /** Hint hints at the purpose of the attestation authority. */
  hint: AttestationNote_Hint | undefined;
}

/**
 * This submessage provides human-readable hints about the purpose of the
 * authority. Because the name of a note acts as its resource reference, it is
 * important to disambiguate the canonical name of the Note (which might be a
 * UUID for security purposes) from "readable" names more suitable for debug
 * output. Note that these hints should not be used to look up authorities in
 * security sensitive contexts, such as when looking up attestations to
 * verify.
 */
export interface AttestationNote_Hint {
  /**
   * Required. The human readable name of this attestation authority, for
   * example "qa".
   */
  humanReadableName: string;
}

export interface Jwt {
  /**
   * The compact encoding of a JWS, which is always three base64 encoded strings
   * joined by periods. For details, see:
   * https://tools.ietf.org/html/rfc7515.html#section-3.1
   */
  compactJwt: string;
}

/**
 * Occurrence that represents a single "attestation". The authenticity of an
 * attestation can be verified using the attached signature. If the verifier
 * trusts the public key of the signer, then verifying the signature is
 * sufficient to establish trust. In this circumstance, the authority to which
 * this attestation is attached is primarily useful for lookup (how to find
 * this attestation if you already know the authority and artifact to be
 * verified) and intent (for which authority this attestation was intended to
 * sign.
 */
export interface AttestationOccurrence {
  /**
   * Required. The serialized payload that is verified by one or more
   * `signatures`.
   */
  serializedPayload: Buffer;
  /**
   * One or more signatures over `serialized_payload`.  Verifier implementations
   * should consider this attestation message verified if at least one
   * `signature` verifies `serialized_payload`.  See `Signature` in common.proto
   * for more details on signature structure and verification.
   */
  signatures: Signature[];
  /**
   * One or more JWTs encoding a self-contained attestation.
   * Each JWT encodes the payload that it verifies within the JWT itself.
   * Verifier implementation SHOULD ignore the `serialized_payload` field
   * when verifying these JWTs.
   * If only JWTs are present on this AttestationOccurrence, then the
   * `serialized_payload` SHOULD be left empty.
   * Each JWT SHOULD encode a claim specific to the `resource_uri` of this
   * Occurrence, but this is not validated by Grafeas metadata API
   * implementations.  The JWT itself is opaque to Grafeas.
   */
  jwts: Jwt[];
}

function createBaseAttestationNote(): AttestationNote {
  return { hint: undefined };
}

export const AttestationNote: MessageFns<AttestationNote> = {
  encode(message: AttestationNote, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.hint !== undefined) {
      AttestationNote_Hint.encode(message.hint, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AttestationNote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestationNote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hint = AttestationNote_Hint.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttestationNote {
    return { hint: isSet(object.hint) ? AttestationNote_Hint.fromJSON(object.hint) : undefined };
  },

  toJSON(message: AttestationNote): unknown {
    const obj: any = {};
    if (message.hint !== undefined) {
      obj.hint = AttestationNote_Hint.toJSON(message.hint);
    }
    return obj;
  },

  create(base?: DeepPartial<AttestationNote>): AttestationNote {
    return AttestationNote.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AttestationNote>): AttestationNote {
    const message = createBaseAttestationNote();
    message.hint = (object.hint !== undefined && object.hint !== null)
      ? AttestationNote_Hint.fromPartial(object.hint)
      : undefined;
    return message;
  },
};

function createBaseAttestationNote_Hint(): AttestationNote_Hint {
  return { humanReadableName: "" };
}

export const AttestationNote_Hint: MessageFns<AttestationNote_Hint> = {
  encode(message: AttestationNote_Hint, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.humanReadableName !== "") {
      writer.uint32(10).string(message.humanReadableName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AttestationNote_Hint {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestationNote_Hint();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.humanReadableName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttestationNote_Hint {
    return { humanReadableName: isSet(object.humanReadableName) ? globalThis.String(object.humanReadableName) : "" };
  },

  toJSON(message: AttestationNote_Hint): unknown {
    const obj: any = {};
    if (message.humanReadableName !== "") {
      obj.humanReadableName = message.humanReadableName;
    }
    return obj;
  },

  create(base?: DeepPartial<AttestationNote_Hint>): AttestationNote_Hint {
    return AttestationNote_Hint.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AttestationNote_Hint>): AttestationNote_Hint {
    const message = createBaseAttestationNote_Hint();
    message.humanReadableName = object.humanReadableName ?? "";
    return message;
  },
};

function createBaseJwt(): Jwt {
  return { compactJwt: "" };
}

export const Jwt: MessageFns<Jwt> = {
  encode(message: Jwt, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.compactJwt !== "") {
      writer.uint32(10).string(message.compactJwt);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Jwt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJwt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.compactJwt = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Jwt {
    return { compactJwt: isSet(object.compactJwt) ? globalThis.String(object.compactJwt) : "" };
  },

  toJSON(message: Jwt): unknown {
    const obj: any = {};
    if (message.compactJwt !== "") {
      obj.compactJwt = message.compactJwt;
    }
    return obj;
  },

  create(base?: DeepPartial<Jwt>): Jwt {
    return Jwt.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Jwt>): Jwt {
    const message = createBaseJwt();
    message.compactJwt = object.compactJwt ?? "";
    return message;
  },
};

function createBaseAttestationOccurrence(): AttestationOccurrence {
  return { serializedPayload: Buffer.alloc(0), signatures: [], jwts: [] };
}

export const AttestationOccurrence: MessageFns<AttestationOccurrence> = {
  encode(message: AttestationOccurrence, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.serializedPayload.length !== 0) {
      writer.uint32(10).bytes(message.serializedPayload);
    }
    for (const v of message.signatures) {
      Signature.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.jwts) {
      Jwt.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AttestationOccurrence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestationOccurrence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.serializedPayload = Buffer.from(reader.bytes());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.signatures.push(Signature.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jwts.push(Jwt.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AttestationOccurrence {
    return {
      serializedPayload: isSet(object.serializedPayload)
        ? Buffer.from(bytesFromBase64(object.serializedPayload))
        : Buffer.alloc(0),
      signatures: globalThis.Array.isArray(object?.signatures)
        ? object.signatures.map((e: any) => Signature.fromJSON(e))
        : [],
      jwts: globalThis.Array.isArray(object?.jwts) ? object.jwts.map((e: any) => Jwt.fromJSON(e)) : [],
    };
  },

  toJSON(message: AttestationOccurrence): unknown {
    const obj: any = {};
    if (message.serializedPayload.length !== 0) {
      obj.serializedPayload = base64FromBytes(message.serializedPayload);
    }
    if (message.signatures?.length) {
      obj.signatures = message.signatures.map((e) => Signature.toJSON(e));
    }
    if (message.jwts?.length) {
      obj.jwts = message.jwts.map((e) => Jwt.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AttestationOccurrence>): AttestationOccurrence {
    return AttestationOccurrence.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AttestationOccurrence>): AttestationOccurrence {
    const message = createBaseAttestationOccurrence();
    message.serializedPayload = object.serializedPayload ?? Buffer.alloc(0);
    message.signatures = object.signatures?.map((e) => Signature.fromPartial(e)) || [];
    message.jwts = object.jwts?.map((e) => Jwt.fromPartial(e)) || [];
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
