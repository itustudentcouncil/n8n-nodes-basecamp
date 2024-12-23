// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/networkservices/v1beta1/network_services.proto

/* eslint-disable */
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Operation } from "../../../longrunning/operations.js";
import {
  CreateEndpointPolicyRequest,
  DeleteEndpointPolicyRequest,
  EndpointPolicy,
  GetEndpointPolicyRequest,
  ListEndpointPoliciesRequest,
  ListEndpointPoliciesResponse,
  UpdateEndpointPolicyRequest,
} from "./endpoint_policy.js";

export const protobufPackage = "google.cloud.networkservices.v1beta1";

/** Service describing handlers for resources. */
export type NetworkServicesDefinition = typeof NetworkServicesDefinition;
export const NetworkServicesDefinition = {
  name: "NetworkServices",
  fullName: "google.cloud.networkservices.v1beta1.NetworkServices",
  methods: {
    /** Lists EndpointPolicies in a given project and location. */
    listEndpointPolicies: {
      name: "ListEndpointPolicies",
      requestType: ListEndpointPoliciesRequest,
      requestStream: false,
      responseType: ListEndpointPoliciesResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              59,
              18,
              57,
              47,
              118,
              49,
              98,
              101,
              116,
              97,
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
              101,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              80,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
            ]),
          ],
        },
      },
    },
    /** Gets details of a single EndpointPolicy. */
    getEndpointPolicy: {
      name: "GetEndpointPolicy",
      requestType: GetEndpointPolicyRequest,
      requestStream: false,
      responseType: EndpointPolicy,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              59,
              18,
              57,
              47,
              118,
              49,
              98,
              101,
              116,
              97,
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
              101,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              80,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** Creates a new EndpointPolicy in a given project and location. */
    createEndpointPolicy: {
      name: "CreateEndpointPolicy",
      requestType: CreateEndpointPolicyRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          8394: [
            Buffer.from([
              72,
              10,
              14,
              69,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              80,
              111,
              108,
              105,
              99,
              121,
              18,
              54,
              103,
              111,
              111,
              103,
              108,
              101,
              46,
              99,
              108,
              111,
              117,
              100,
              46,
              110,
              101,
              116,
              119,
              111,
              114,
              107,
              115,
              101,
              114,
              118,
              105,
              99,
              101,
              115,
              46,
              118,
              49,
              98,
              101,
              116,
              97,
              49,
              46,
              79,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              77,
              101,
              116,
              97,
              100,
              97,
              116,
              97,
            ]),
          ],
          8410: [
            Buffer.from([
              41,
              112,
              97,
              114,
              101,
              110,
              116,
              44,
              101,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              95,
              112,
              111,
              108,
              105,
              99,
              121,
              44,
              101,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              95,
              112,
              111,
              108,
              105,
              99,
              121,
              95,
              105,
              100,
            ]),
          ],
          578365826: [
            Buffer.from([
              76,
              58,
              15,
              101,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              95,
              112,
              111,
              108,
              105,
              99,
              121,
              34,
              57,
              47,
              118,
              49,
              98,
              101,
              116,
              97,
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
              101,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              80,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
            ]),
          ],
        },
      },
    },
    /** Updates the parameters of a single EndpointPolicy. */
    updateEndpointPolicy: {
      name: "UpdateEndpointPolicy",
      requestType: UpdateEndpointPolicyRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          8394: [
            Buffer.from([
              72,
              10,
              14,
              69,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              80,
              111,
              108,
              105,
              99,
              121,
              18,
              54,
              103,
              111,
              111,
              103,
              108,
              101,
              46,
              99,
              108,
              111,
              117,
              100,
              46,
              110,
              101,
              116,
              119,
              111,
              114,
              107,
              115,
              101,
              114,
              118,
              105,
              99,
              101,
              115,
              46,
              118,
              49,
              98,
              101,
              116,
              97,
              49,
              46,
              79,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              77,
              101,
              116,
              97,
              100,
              97,
              116,
              97,
            ]),
          ],
          8410: [
            Buffer.from([
              27,
              101,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              95,
              112,
              111,
              108,
              105,
              99,
              121,
              44,
              117,
              112,
              100,
              97,
              116,
              101,
              95,
              109,
              97,
              115,
              107,
            ]),
          ],
          578365826: [
            Buffer.from([
              92,
              58,
              15,
              101,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              95,
              112,
              111,
              108,
              105,
              99,
              121,
              50,
              73,
              47,
              118,
              49,
              98,
              101,
              116,
              97,
              49,
              47,
              123,
              101,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              95,
              112,
              111,
              108,
              105,
              99,
              121,
              46,
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
              101,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              80,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
    /** Deletes a single EndpointPolicy. */
    deleteEndpointPolicy: {
      name: "DeleteEndpointPolicy",
      requestType: DeleteEndpointPolicyRequest,
      requestStream: false,
      responseType: Operation,
      responseStream: false,
      options: {
        _unknownFields: {
          8394: [
            Buffer.from([
              79,
              10,
              21,
              103,
              111,
              111,
              103,
              108,
              101,
              46,
              112,
              114,
              111,
              116,
              111,
              98,
              117,
              102,
              46,
              69,
              109,
              112,
              116,
              121,
              18,
              54,
              103,
              111,
              111,
              103,
              108,
              101,
              46,
              99,
              108,
              111,
              117,
              100,
              46,
              110,
              101,
              116,
              119,
              111,
              114,
              107,
              115,
              101,
              114,
              118,
              105,
              99,
              101,
              115,
              46,
              118,
              49,
              98,
              101,
              116,
              97,
              49,
              46,
              79,
              112,
              101,
              114,
              97,
              116,
              105,
              111,
              110,
              77,
              101,
              116,
              97,
              100,
              97,
              116,
              97,
            ]),
          ],
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              59,
              42,
              57,
              47,
              118,
              49,
              98,
              101,
              116,
              97,
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
              101,
              110,
              100,
              112,
              111,
              105,
              110,
              116,
              80,
              111,
              108,
              105,
              99,
              105,
              101,
              115,
              47,
              42,
              125,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface NetworkServicesServiceImplementation<CallContextExt = {}> {
  /** Lists EndpointPolicies in a given project and location. */
  listEndpointPolicies(
    request: ListEndpointPoliciesRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListEndpointPoliciesResponse>>;
  /** Gets details of a single EndpointPolicy. */
  getEndpointPolicy(
    request: GetEndpointPolicyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<EndpointPolicy>>;
  /** Creates a new EndpointPolicy in a given project and location. */
  createEndpointPolicy(
    request: CreateEndpointPolicyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Operation>>;
  /** Updates the parameters of a single EndpointPolicy. */
  updateEndpointPolicy(
    request: UpdateEndpointPolicyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Operation>>;
  /** Deletes a single EndpointPolicy. */
  deleteEndpointPolicy(
    request: DeleteEndpointPolicyRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Operation>>;
}

export interface NetworkServicesClient<CallOptionsExt = {}> {
  /** Lists EndpointPolicies in a given project and location. */
  listEndpointPolicies(
    request: DeepPartial<ListEndpointPoliciesRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListEndpointPoliciesResponse>;
  /** Gets details of a single EndpointPolicy. */
  getEndpointPolicy(
    request: DeepPartial<GetEndpointPolicyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<EndpointPolicy>;
  /** Creates a new EndpointPolicy in a given project and location. */
  createEndpointPolicy(
    request: DeepPartial<CreateEndpointPolicyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Operation>;
  /** Updates the parameters of a single EndpointPolicy. */
  updateEndpointPolicy(
    request: DeepPartial<UpdateEndpointPolicyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Operation>;
  /** Deletes a single EndpointPolicy. */
  deleteEndpointPolicy(
    request: DeepPartial<DeleteEndpointPolicyRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Operation>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
