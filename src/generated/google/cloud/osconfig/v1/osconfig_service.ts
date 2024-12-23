// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/osconfig/v1/osconfig_service.proto

/* eslint-disable */
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Empty } from "../../../protobuf/empty.js";
import {
  CreatePatchDeploymentRequest,
  DeletePatchDeploymentRequest,
  GetPatchDeploymentRequest,
  ListPatchDeploymentsRequest,
  ListPatchDeploymentsResponse,
  PatchDeployment,
  PausePatchDeploymentRequest,
  ResumePatchDeploymentRequest,
  UpdatePatchDeploymentRequest,
} from "./patch_deployments.js";
import {
  CancelPatchJobRequest,
  ExecutePatchJobRequest,
  GetPatchJobRequest,
  ListPatchJobInstanceDetailsRequest,
  ListPatchJobInstanceDetailsResponse,
  ListPatchJobsRequest,
  ListPatchJobsResponse,
  PatchJob,
} from "./patch_jobs.js";

export const protobufPackage = "google.cloud.osconfig.v1";

/**
 * OS Config API
 *
 * The OS Config service is a server-side component that you can use to
 * manage package installations and patch jobs for virtual machine instances.
 */
export type OsConfigServiceDefinition = typeof OsConfigServiceDefinition;
export const OsConfigServiceDefinition = {
  name: "OsConfigService",
  fullName: "google.cloud.osconfig.v1.OsConfigService",
  methods: {
    /** Patch VM instances by creating and running a patch job. */
    executePatchJob: {
      name: "ExecutePatchJob",
      requestType: ExecutePatchJobRequest,
      requestStream: false,
      responseType: PatchJob,
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
              125,
              47,
              112,
              97,
              116,
              99,
              104,
              74,
              111,
              98,
              115,
              58,
              101,
              120,
              101,
              99,
              117,
              116,
              101,
            ]),
          ],
        },
      },
    },
    /**
     * Get the patch job. This can be used to track the progress of an
     * ongoing patch job or review the details of completed jobs.
     */
    getPatchJob: {
      name: "GetPatchJob",
      requestType: GetPatchJobRequest,
      requestStream: false,
      responseType: PatchJob,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              35,
              18,
              33,
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
              112,
              97,
              116,
              99,
              104,
              74,
              111,
              98,
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
     * Cancel a patch job. The patch job must be active. Canceled patch jobs
     * cannot be restarted.
     */
    cancelPatchJob: {
      name: "CancelPatchJob",
      requestType: CancelPatchJobRequest,
      requestStream: false,
      responseType: PatchJob,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              45,
              58,
              1,
              42,
              34,
              40,
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
              112,
              97,
              116,
              99,
              104,
              74,
              111,
              98,
              115,
              47,
              42,
              125,
              58,
              99,
              97,
              110,
              99,
              101,
              108,
            ]),
          ],
        },
      },
    },
    /** Get a list of patch jobs. */
    listPatchJobs: {
      name: "ListPatchJobs",
      requestType: ListPatchJobsRequest,
      requestStream: false,
      responseType: ListPatchJobsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              35,
              18,
              33,
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
              125,
              47,
              112,
              97,
              116,
              99,
              104,
              74,
              111,
              98,
              115,
            ]),
          ],
        },
      },
    },
    /** Get a list of instance details for a given patch job. */
    listPatchJobInstanceDetails: {
      name: "ListPatchJobInstanceDetails",
      requestType: ListPatchJobInstanceDetailsRequest,
      requestStream: false,
      responseType: ListPatchJobInstanceDetailsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              53,
              18,
              51,
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
              112,
              97,
              116,
              99,
              104,
              74,
              111,
              98,
              115,
              47,
              42,
              125,
              47,
              105,
              110,
              115,
              116,
              97,
              110,
              99,
              101,
              68,
              101,
              116,
              97,
              105,
              108,
              115,
            ]),
          ],
        },
      },
    },
    /** Create an OS Config patch deployment. */
    createPatchDeployment: {
      name: "CreatePatchDeployment",
      requestType: CreatePatchDeploymentRequest,
      requestStream: false,
      responseType: PatchDeployment,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              43,
              112,
              97,
              114,
              101,
              110,
              116,
              44,
              112,
              97,
              116,
              99,
              104,
              95,
              100,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
              116,
              44,
              112,
              97,
              116,
              99,
              104,
              95,
              100,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
              116,
              95,
              105,
              100,
            ]),
          ],
          578365826: [
            Buffer.from([
              60,
              58,
              16,
              112,
              97,
              116,
              99,
              104,
              95,
              100,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
              116,
              34,
              40,
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
              125,
              47,
              112,
              97,
              116,
              99,
              104,
              68,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /** Get an OS Config patch deployment. */
    getPatchDeployment: {
      name: "GetPatchDeployment",
      requestType: GetPatchDeploymentRequest,
      requestStream: false,
      responseType: PatchDeployment,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              42,
              18,
              40,
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
              112,
              97,
              116,
              99,
              104,
              68,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
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
    /** Get a page of OS Config patch deployments. */
    listPatchDeployments: {
      name: "ListPatchDeployments",
      requestType: ListPatchDeploymentsRequest,
      requestStream: false,
      responseType: ListPatchDeploymentsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([6, 112, 97, 114, 101, 110, 116])],
          578365826: [
            Buffer.from([
              42,
              18,
              40,
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
              125,
              47,
              112,
              97,
              116,
              99,
              104,
              68,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /** Delete an OS Config patch deployment. */
    deletePatchDeployment: {
      name: "DeletePatchDeployment",
      requestType: DeletePatchDeploymentRequest,
      requestStream: false,
      responseType: Empty,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              42,
              42,
              40,
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
              112,
              97,
              116,
              99,
              104,
              68,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
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
    /** Update an OS Config patch deployment. */
    updatePatchDeployment: {
      name: "UpdatePatchDeployment",
      requestType: UpdatePatchDeploymentRequest,
      requestStream: false,
      responseType: PatchDeployment,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [
            Buffer.from([
              28,
              112,
              97,
              116,
              99,
              104,
              95,
              100,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
              116,
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
              77,
              58,
              16,
              112,
              97,
              116,
              99,
              104,
              95,
              100,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
              116,
              50,
              57,
              47,
              118,
              49,
              47,
              123,
              112,
              97,
              116,
              99,
              104,
              95,
              100,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
              116,
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
              112,
              97,
              116,
              99,
              104,
              68,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
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
     * Change state of patch deployment to "PAUSED".
     * Patch deployment in paused state doesn't generate patch jobs.
     */
    pausePatchDeployment: {
      name: "PausePatchDeployment",
      requestType: PausePatchDeploymentRequest,
      requestStream: false,
      responseType: PatchDeployment,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              51,
              58,
              1,
              42,
              34,
              46,
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
              112,
              97,
              116,
              99,
              104,
              68,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
              116,
              115,
              47,
              42,
              125,
              58,
              112,
              97,
              117,
              115,
              101,
            ]),
          ],
        },
      },
    },
    /**
     * Change state of patch deployment back to "ACTIVE".
     * Patch deployment in active state continues to generate patch jobs.
     */
    resumePatchDeployment: {
      name: "ResumePatchDeployment",
      requestType: ResumePatchDeploymentRequest,
      requestStream: false,
      responseType: PatchDeployment,
      responseStream: false,
      options: {
        _unknownFields: {
          8410: [Buffer.from([4, 110, 97, 109, 101])],
          578365826: [
            Buffer.from([
              52,
              58,
              1,
              42,
              34,
              47,
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
              112,
              97,
              116,
              99,
              104,
              68,
              101,
              112,
              108,
              111,
              121,
              109,
              101,
              110,
              116,
              115,
              47,
              42,
              125,
              58,
              114,
              101,
              115,
              117,
              109,
              101,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface OsConfigServiceImplementation<CallContextExt = {}> {
  /** Patch VM instances by creating and running a patch job. */
  executePatchJob(
    request: ExecutePatchJobRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PatchJob>>;
  /**
   * Get the patch job. This can be used to track the progress of an
   * ongoing patch job or review the details of completed jobs.
   */
  getPatchJob(request: GetPatchJobRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PatchJob>>;
  /**
   * Cancel a patch job. The patch job must be active. Canceled patch jobs
   * cannot be restarted.
   */
  cancelPatchJob(request: CancelPatchJobRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PatchJob>>;
  /** Get a list of patch jobs. */
  listPatchJobs(
    request: ListPatchJobsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListPatchJobsResponse>>;
  /** Get a list of instance details for a given patch job. */
  listPatchJobInstanceDetails(
    request: ListPatchJobInstanceDetailsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListPatchJobInstanceDetailsResponse>>;
  /** Create an OS Config patch deployment. */
  createPatchDeployment(
    request: CreatePatchDeploymentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PatchDeployment>>;
  /** Get an OS Config patch deployment. */
  getPatchDeployment(
    request: GetPatchDeploymentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PatchDeployment>>;
  /** Get a page of OS Config patch deployments. */
  listPatchDeployments(
    request: ListPatchDeploymentsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ListPatchDeploymentsResponse>>;
  /** Delete an OS Config patch deployment. */
  deletePatchDeployment(
    request: DeletePatchDeploymentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<Empty>>;
  /** Update an OS Config patch deployment. */
  updatePatchDeployment(
    request: UpdatePatchDeploymentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PatchDeployment>>;
  /**
   * Change state of patch deployment to "PAUSED".
   * Patch deployment in paused state doesn't generate patch jobs.
   */
  pausePatchDeployment(
    request: PausePatchDeploymentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PatchDeployment>>;
  /**
   * Change state of patch deployment back to "ACTIVE".
   * Patch deployment in active state continues to generate patch jobs.
   */
  resumePatchDeployment(
    request: ResumePatchDeploymentRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<PatchDeployment>>;
}

export interface OsConfigServiceClient<CallOptionsExt = {}> {
  /** Patch VM instances by creating and running a patch job. */
  executePatchJob(
    request: DeepPartial<ExecutePatchJobRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PatchJob>;
  /**
   * Get the patch job. This can be used to track the progress of an
   * ongoing patch job or review the details of completed jobs.
   */
  getPatchJob(request: DeepPartial<GetPatchJobRequest>, options?: CallOptions & CallOptionsExt): Promise<PatchJob>;
  /**
   * Cancel a patch job. The patch job must be active. Canceled patch jobs
   * cannot be restarted.
   */
  cancelPatchJob(
    request: DeepPartial<CancelPatchJobRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PatchJob>;
  /** Get a list of patch jobs. */
  listPatchJobs(
    request: DeepPartial<ListPatchJobsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListPatchJobsResponse>;
  /** Get a list of instance details for a given patch job. */
  listPatchJobInstanceDetails(
    request: DeepPartial<ListPatchJobInstanceDetailsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListPatchJobInstanceDetailsResponse>;
  /** Create an OS Config patch deployment. */
  createPatchDeployment(
    request: DeepPartial<CreatePatchDeploymentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PatchDeployment>;
  /** Get an OS Config patch deployment. */
  getPatchDeployment(
    request: DeepPartial<GetPatchDeploymentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PatchDeployment>;
  /** Get a page of OS Config patch deployments. */
  listPatchDeployments(
    request: DeepPartial<ListPatchDeploymentsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ListPatchDeploymentsResponse>;
  /** Delete an OS Config patch deployment. */
  deletePatchDeployment(
    request: DeepPartial<DeletePatchDeploymentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<Empty>;
  /** Update an OS Config patch deployment. */
  updatePatchDeployment(
    request: DeepPartial<UpdatePatchDeploymentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PatchDeployment>;
  /**
   * Change state of patch deployment to "PAUSED".
   * Patch deployment in paused state doesn't generate patch jobs.
   */
  pausePatchDeployment(
    request: DeepPartial<PausePatchDeploymentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PatchDeployment>;
  /**
   * Change state of patch deployment back to "ACTIVE".
   * Patch deployment in active state continues to generate patch jobs.
   */
  resumePatchDeployment(
    request: DeepPartial<ResumePatchDeploymentRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<PatchDeployment>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
