// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/securitycenter/v1/security_posture.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.cloud.securitycenter.v1";

/**
 * Represents a posture that is deployed on Google Cloud by the
 * Security Command Center Posture Management service.
 * A posture contains one or more policy sets. A policy set is a
 * group of policies that enforce a set of security rules on Google
 * Cloud.
 */
export interface SecurityPosture {
  /** Name of the posture, for example, `CIS-Posture`. */
  name: string;
  /** The version of the posture, for example, `c7cfa2a8`. */
  revisionId: string;
  /**
   * The project, folder, or organization on which the posture is deployed,
   * for example, `projects/{project_number}`.
   */
  postureDeploymentResource: string;
  /**
   * The name of the posture deployment, for example,
   * `organizations/{org_id}/posturedeployments/{posture_deployment_id}`.
   */
  postureDeployment: string;
  /**
   * The name of the updated policy, for example,
   * `projects/{project_id}/policies/{constraint_name}`.
   */
  changedPolicy: string;
  /** The name of the updated policyset, for example, `cis-policyset`. */
  policySet: string;
  /** The ID of the updated policy, for example, `compute-policy-1`. */
  policy: string;
  /**
   * The details about a change in an updated policy that violates the deployed
   * posture.
   */
  policyDriftDetails: SecurityPosture_PolicyDriftDetails[];
}

/**
 * The policy field that violates the deployed posture and its expected and
 * detected values.
 */
export interface SecurityPosture_PolicyDriftDetails {
  /**
   * The name of the updated field, for example
   * constraint.implementation.policy_rules[0].enforce
   */
  field: string;
  /**
   * The value of this field that was configured in a posture, for example,
   * `true` or `allowed_values={"projects/29831892"}`.
   */
  expectedValue: string;
  /**
   * The detected value that violates the deployed posture, for example,
   * `false` or `allowed_values={"projects/22831892"}`.
   */
  detectedValue: string;
}

function createBaseSecurityPosture(): SecurityPosture {
  return {
    name: "",
    revisionId: "",
    postureDeploymentResource: "",
    postureDeployment: "",
    changedPolicy: "",
    policySet: "",
    policy: "",
    policyDriftDetails: [],
  };
}

export const SecurityPosture: MessageFns<SecurityPosture> = {
  encode(message: SecurityPosture, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.revisionId !== "") {
      writer.uint32(18).string(message.revisionId);
    }
    if (message.postureDeploymentResource !== "") {
      writer.uint32(26).string(message.postureDeploymentResource);
    }
    if (message.postureDeployment !== "") {
      writer.uint32(34).string(message.postureDeployment);
    }
    if (message.changedPolicy !== "") {
      writer.uint32(42).string(message.changedPolicy);
    }
    if (message.policySet !== "") {
      writer.uint32(50).string(message.policySet);
    }
    if (message.policy !== "") {
      writer.uint32(58).string(message.policy);
    }
    for (const v of message.policyDriftDetails) {
      SecurityPosture_PolicyDriftDetails.encode(v!, writer.uint32(66).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SecurityPosture {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityPosture();
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
          if (tag !== 18) {
            break;
          }

          message.revisionId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.postureDeploymentResource = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.postureDeployment = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.changedPolicy = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.policySet = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.policy = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.policyDriftDetails.push(SecurityPosture_PolicyDriftDetails.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecurityPosture {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      revisionId: isSet(object.revisionId) ? globalThis.String(object.revisionId) : "",
      postureDeploymentResource: isSet(object.postureDeploymentResource)
        ? globalThis.String(object.postureDeploymentResource)
        : "",
      postureDeployment: isSet(object.postureDeployment) ? globalThis.String(object.postureDeployment) : "",
      changedPolicy: isSet(object.changedPolicy) ? globalThis.String(object.changedPolicy) : "",
      policySet: isSet(object.policySet) ? globalThis.String(object.policySet) : "",
      policy: isSet(object.policy) ? globalThis.String(object.policy) : "",
      policyDriftDetails: globalThis.Array.isArray(object?.policyDriftDetails)
        ? object.policyDriftDetails.map((e: any) => SecurityPosture_PolicyDriftDetails.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SecurityPosture): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.revisionId !== "") {
      obj.revisionId = message.revisionId;
    }
    if (message.postureDeploymentResource !== "") {
      obj.postureDeploymentResource = message.postureDeploymentResource;
    }
    if (message.postureDeployment !== "") {
      obj.postureDeployment = message.postureDeployment;
    }
    if (message.changedPolicy !== "") {
      obj.changedPolicy = message.changedPolicy;
    }
    if (message.policySet !== "") {
      obj.policySet = message.policySet;
    }
    if (message.policy !== "") {
      obj.policy = message.policy;
    }
    if (message.policyDriftDetails?.length) {
      obj.policyDriftDetails = message.policyDriftDetails.map((e) => SecurityPosture_PolicyDriftDetails.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SecurityPosture>): SecurityPosture {
    return SecurityPosture.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SecurityPosture>): SecurityPosture {
    const message = createBaseSecurityPosture();
    message.name = object.name ?? "";
    message.revisionId = object.revisionId ?? "";
    message.postureDeploymentResource = object.postureDeploymentResource ?? "";
    message.postureDeployment = object.postureDeployment ?? "";
    message.changedPolicy = object.changedPolicy ?? "";
    message.policySet = object.policySet ?? "";
    message.policy = object.policy ?? "";
    message.policyDriftDetails =
      object.policyDriftDetails?.map((e) => SecurityPosture_PolicyDriftDetails.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSecurityPosture_PolicyDriftDetails(): SecurityPosture_PolicyDriftDetails {
  return { field: "", expectedValue: "", detectedValue: "" };
}

export const SecurityPosture_PolicyDriftDetails: MessageFns<SecurityPosture_PolicyDriftDetails> = {
  encode(message: SecurityPosture_PolicyDriftDetails, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.field !== "") {
      writer.uint32(10).string(message.field);
    }
    if (message.expectedValue !== "") {
      writer.uint32(18).string(message.expectedValue);
    }
    if (message.detectedValue !== "") {
      writer.uint32(26).string(message.detectedValue);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SecurityPosture_PolicyDriftDetails {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSecurityPosture_PolicyDriftDetails();
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

          message.expectedValue = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.detectedValue = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SecurityPosture_PolicyDriftDetails {
    return {
      field: isSet(object.field) ? globalThis.String(object.field) : "",
      expectedValue: isSet(object.expectedValue) ? globalThis.String(object.expectedValue) : "",
      detectedValue: isSet(object.detectedValue) ? globalThis.String(object.detectedValue) : "",
    };
  },

  toJSON(message: SecurityPosture_PolicyDriftDetails): unknown {
    const obj: any = {};
    if (message.field !== "") {
      obj.field = message.field;
    }
    if (message.expectedValue !== "") {
      obj.expectedValue = message.expectedValue;
    }
    if (message.detectedValue !== "") {
      obj.detectedValue = message.detectedValue;
    }
    return obj;
  },

  create(base?: DeepPartial<SecurityPosture_PolicyDriftDetails>): SecurityPosture_PolicyDriftDetails {
    return SecurityPosture_PolicyDriftDetails.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SecurityPosture_PolicyDriftDetails>): SecurityPosture_PolicyDriftDetails {
    const message = createBaseSecurityPosture_PolicyDriftDetails();
    message.field = object.field ?? "";
    message.expectedValue = object.expectedValue ?? "";
    message.detectedValue = object.detectedValue ?? "";
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
