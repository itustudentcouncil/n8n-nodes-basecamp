// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/iap/v1beta1/service.proto

/* eslint-disable */
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import {
  GetIamPolicyRequest,
  SetIamPolicyRequest,
  TestIamPermissionsRequest,
  TestIamPermissionsResponse,
} from "../../../iam/v1/iam_policy.js";
import { Policy } from "../../../iam/v1/policy.js";

export const protobufPackage = "google.cloud.iap.v1beta1";

/** APIs for Identity-Aware Proxy Admin configurations. */
export type IdentityAwareProxyAdminV1Beta1Definition = typeof IdentityAwareProxyAdminV1Beta1Definition;
export const IdentityAwareProxyAdminV1Beta1Definition = {
  name: "IdentityAwareProxyAdminV1Beta1",
  fullName: "google.cloud.iap.v1beta1.IdentityAwareProxyAdminV1Beta1",
  methods: {
    /**
     * Sets the access control policy for an Identity-Aware Proxy protected
     * resource. Replaces any existing policy.
     * More information about managing access via IAP can be found at:
     * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     */
    setIamPolicy: {
      name: "SetIamPolicy",
      requestType: SetIamPolicyRequest,
      requestStream: false,
      responseType: Policy,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              40,
              58,
              1,
              42,
              34,
              35,
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
              114,
              101,
              115,
              111,
              117,
              114,
              99,
              101,
              61,
              42,
              42,
              125,
              58,
              115,
              101,
              116,
              73,
              97,
              109,
              80,
              111,
              108,
              105,
              99,
              121,
            ]),
          ],
        },
      },
    },
    /**
     * Gets the access control policy for an Identity-Aware Proxy protected
     * resource.
     * More information about managing access via IAP can be found at:
     * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     */
    getIamPolicy: {
      name: "GetIamPolicy",
      requestType: GetIamPolicyRequest,
      requestStream: false,
      responseType: Policy,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              40,
              58,
              1,
              42,
              34,
              35,
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
              114,
              101,
              115,
              111,
              117,
              114,
              99,
              101,
              61,
              42,
              42,
              125,
              58,
              103,
              101,
              116,
              73,
              97,
              109,
              80,
              111,
              108,
              105,
              99,
              121,
            ]),
          ],
        },
      },
    },
    /**
     * Returns permissions that a caller has on the Identity-Aware Proxy protected
     * resource. If the resource does not exist or the caller does not have
     * Identity-Aware Proxy permissions a [google.rpc.Code.PERMISSION_DENIED]
     * will be returned.
     * More information about managing access via IAP can be found at:
     * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     */
    testIamPermissions: {
      name: "TestIamPermissions",
      requestType: TestIamPermissionsRequest,
      requestStream: false,
      responseType: TestIamPermissionsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              46,
              58,
              1,
              42,
              34,
              41,
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
              114,
              101,
              115,
              111,
              117,
              114,
              99,
              101,
              61,
              42,
              42,
              125,
              58,
              116,
              101,
              115,
              116,
              73,
              97,
              109,
              80,
              101,
              114,
              109,
              105,
              115,
              115,
              105,
              111,
              110,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface IdentityAwareProxyAdminV1Beta1ServiceImplementation<CallContextExt = {}> {
  /**
   * Sets the access control policy for an Identity-Aware Proxy protected
   * resource. Replaces any existing policy.
   * More information about managing access via IAP can be found at:
   * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
   */
  setIamPolicy(request: SetIamPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Policy>>;
  /**
   * Gets the access control policy for an Identity-Aware Proxy protected
   * resource.
   * More information about managing access via IAP can be found at:
   * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
   */
  getIamPolicy(request: GetIamPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Policy>>;
  /**
   * Returns permissions that a caller has on the Identity-Aware Proxy protected
   * resource. If the resource does not exist or the caller does not have
   * Identity-Aware Proxy permissions a [google.rpc.Code.PERMISSION_DENIED]
   * will be returned.
   * More information about managing access via IAP can be found at:
   * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
   */
  testIamPermissions(
    request: TestIamPermissionsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<TestIamPermissionsResponse>>;
}

export interface IdentityAwareProxyAdminV1Beta1Client<CallOptionsExt = {}> {
  /**
   * Sets the access control policy for an Identity-Aware Proxy protected
   * resource. Replaces any existing policy.
   * More information about managing access via IAP can be found at:
   * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
   */
  setIamPolicy(request: DeepPartial<SetIamPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<Policy>;
  /**
   * Gets the access control policy for an Identity-Aware Proxy protected
   * resource.
   * More information about managing access via IAP can be found at:
   * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
   */
  getIamPolicy(request: DeepPartial<GetIamPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<Policy>;
  /**
   * Returns permissions that a caller has on the Identity-Aware Proxy protected
   * resource. If the resource does not exist or the caller does not have
   * Identity-Aware Proxy permissions a [google.rpc.Code.PERMISSION_DENIED]
   * will be returned.
   * More information about managing access via IAP can be found at:
   * https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
   */
  testIamPermissions(
    request: DeepPartial<TestIamPermissionsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<TestIamPermissionsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
