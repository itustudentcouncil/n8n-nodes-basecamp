// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/contentwarehouse/v1/ruleset_service.proto

/* eslint-disable */
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Empty } from "../../../protobuf/empty.js";
import { RuleSet } from "./rule_engine.js";
import {
  CreateRuleSetRequest,
  DeleteRuleSetRequest,
  GetRuleSetRequest,
  ListRuleSetsRequest,
  ListRuleSetsResponse,
  UpdateRuleSetRequest,
} from "./ruleset_service_request.js";

export const protobufPackage = "google.cloud.contentwarehouse.v1";

/** Service to manage customer specific RuleSets. */
export type RuleSetServiceDefinition = typeof RuleSetServiceDefinition;
export const RuleSetServiceDefinition = {
  name: "RuleSetService",
  fullName: "google.cloud.contentwarehouse.v1.RuleSetService",
  methods: {
    /** Creates a ruleset. */
    createRuleSet: {
      name: "CreateRuleSet",
      requestType: CreateRuleSetRequest,
      requestStream: false,
      responseType: RuleSet,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([15, 112, 97, 114, 101, 110, 116, 44, 114, 117, 108, 101, 95, 115, 101, 116])],
          578365826: [
            Buffer.from([
              56,
              58,
              8,
              114,
              117,
              108,
              101,
              95,
              115,
              101,
              116,
              34,
              44,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              47,
              114,
              117,
              108,
              101,
              83,
              101,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /** Gets a ruleset. Returns NOT_FOUND if the ruleset does not exist. */
    getRuleSet: {
      name: "GetRuleSet",
      requestType: GetRuleSetRequest,
      requestStream: false,
      responseType: RuleSet,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              46,
              18,
              44,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              114,
              117,
              108,
              101,
              83,
              101,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /**
     * Updates a ruleset. Returns INVALID_ARGUMENT if the name of the ruleset
     * is non-empty and does not equal the existing name.
     */
    updateRuleSet: {
      name: "UpdateRuleSet",
      requestType: UpdateRuleSetRequest,
      requestStream: false,
      responseType: RuleSet,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([13, 110, 97, 109, 101, 44, 114, 117, 108, 101, 95, 115, 101, 116])],
          578365826: [
            Buffer.from([
              49,
              58,
              1,
              42,
              50,
              44,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              114,
              117,
              108,
              101,
              83,
              101,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** Deletes a ruleset. Returns NOT_FOUND if the document does not exist. */
    deleteRuleSet: {
      name: "DeleteRuleSet",
      requestType: DeleteRuleSetRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              46,
              42,
              44,
              47,
              118,
              49,
              47,
              123,
              110,
              97,
              109,
              101,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              47,
              114,
              117,
              108,
              101,
              83,
              101,
              116,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** Lists rulesets. */
    listRuleSets: {
      name: "ListRuleSets",
      requestType: ListRuleSetsRequest,
      requestStream: false,
      responseType: ListRuleSetsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              46,
              18,
              44,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              114,
              101,
              110,
              116,
              61,
              112,
              114,
              111,
              106,
              101,
              99,
              116,
              115,
              47,
              42,
              47,
              108,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
              47,
              42,
              125,
              47,
              114,
              117,
              108,
              101,
              83,
              101,
              116,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface RuleSetServiceImplementation<CallContextExt = {}> {
  /** Creates a ruleset. */
  createRuleSet(request: CreateRuleSetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RuleSet>>;
  /** Gets a ruleset. Returns NOT_FOUND if the ruleset does not exist. */
  getRuleSet(request: GetRuleSetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RuleSet>>;
  /**
   * Updates a ruleset. Returns INVALID_ARGUMENT if the name of the ruleset
   * is non-empty and does not equal the existing name.
   */
  updateRuleSet(request: UpdateRuleSetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RuleSet>>;
  /** Deletes a ruleset. Returns NOT_FOUND if the document does not exist. */
  deleteRuleSet(request: DeleteRuleSetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
  /** Lists rulesets. */
  listRuleSets(
    request: ListRuleSetsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListRuleSetsResponse>>;
}

export interface RuleSetServiceClient<CallOptionsExt = {}> {
  /** Creates a ruleset. */
  createRuleSet(request: DeepPartial<CreateRuleSetRequest>, options?: CallOptions & CallOptionsExt): Promise<RuleSet>;
  /** Gets a ruleset. Returns NOT_FOUND if the ruleset does not exist. */
  getRuleSet(request: DeepPartial<GetRuleSetRequest>, options?: CallOptions & CallOptionsExt): Promise<RuleSet>;
  /**
   * Updates a ruleset. Returns INVALID_ARGUMENT if the name of the ruleset
   * is non-empty and does not equal the existing name.
   */
  updateRuleSet(request: DeepPartial<UpdateRuleSetRequest>, options?: CallOptions & CallOptionsExt): Promise<RuleSet>;
  /** Deletes a ruleset. Returns NOT_FOUND if the document does not exist. */
  deleteRuleSet(request: DeepPartial<DeleteRuleSetRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
  /** Lists rulesets. */
  listRuleSets(
    request: DeepPartial<ListRuleSetsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListRuleSetsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;