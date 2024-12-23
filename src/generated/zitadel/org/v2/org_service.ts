// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: zitadel/org/v2/org_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire"
import Long from "long"
import { type CallContext, type CallOptions } from "nice-grpc-common"
import { Details, ListDetails, ListQuery } from "../../object/v2/object.js"
import { AddHumanUserRequest } from "../../user/v2/user_service.js"
import { Organization } from "./org.js"
import {
  OrganizationFieldName,
  organizationFieldNameFromJSON,
  organizationFieldNameToJSON,
  SearchQuery
} from "./query.js"

export const protobufPackage = "zitadel.org.v2"

export interface AddOrganizationRequest {
  name: string
  admins: AddOrganizationRequest_Admin[]
}

export interface AddOrganizationRequest_Admin {
  userId?: string | undefined
  human?: AddHumanUserRequest | undefined
  /** specify Org Member Roles for the provided user (default is ORG_OWNER if roles are empty) */
  roles: string[]
}

export interface AddOrganizationResponse {
  details: Details | undefined
  organizationId: string
  createdAdmins: AddOrganizationResponse_CreatedAdmin[]
}

export interface AddOrganizationResponse_CreatedAdmin {
  userId: string
  emailCode?: string | undefined
  phoneCode?: string | undefined
}

export interface ListOrganizationsRequest {
  /** list limitations and ordering */
  query: ListQuery | undefined
  /** the field the result is sorted */
  sortingColumn: OrganizationFieldName
  /** criteria the client is looking for */
  queries: SearchQuery[]
}

export interface ListOrganizationsResponse {
  details: ListDetails | undefined
  sortingColumn: OrganizationFieldName
  result: Organization[]
}

function createBaseAddOrganizationRequest(): AddOrganizationRequest {
  return { name: "", admins: [] }
}

export const AddOrganizationRequest: MessageFns<AddOrganizationRequest> = {
  encode(
    message: AddOrganizationRequest,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name)
    }
    for (const v of message.admins) {
      AddOrganizationRequest_Admin.encode(v!, writer.uint32(18).fork()).join()
    }
    return writer
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): AddOrganizationRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAddOrganizationRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.name = reader.string()
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.admins.push(
            AddOrganizationRequest_Admin.decode(reader, reader.uint32())
          )
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): AddOrganizationRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      admins: globalThis.Array.isArray(object?.admins)
        ? object.admins.map((e: any) =>
            AddOrganizationRequest_Admin.fromJSON(e)
          )
        : []
    }
  },

  toJSON(message: AddOrganizationRequest): unknown {
    const obj: any = {}
    if (message.name !== "") {
      obj.name = message.name
    }
    if (message.admins?.length) {
      obj.admins = message.admins.map((e) =>
        AddOrganizationRequest_Admin.toJSON(e)
      )
    }
    return obj
  },

  create(base?: DeepPartial<AddOrganizationRequest>): AddOrganizationRequest {
    return AddOrganizationRequest.fromPartial(base ?? {})
  },
  fromPartial(
    object: DeepPartial<AddOrganizationRequest>
  ): AddOrganizationRequest {
    const message = createBaseAddOrganizationRequest()
    message.name = object.name ?? ""
    message.admins =
      object.admins?.map((e) => AddOrganizationRequest_Admin.fromPartial(e)) ||
      []
    return message
  }
}

function createBaseAddOrganizationRequest_Admin(): AddOrganizationRequest_Admin {
  return { userId: undefined, human: undefined, roles: [] }
}

export const AddOrganizationRequest_Admin: MessageFns<AddOrganizationRequest_Admin> =
  {
    encode(
      message: AddOrganizationRequest_Admin,
      writer: BinaryWriter = new BinaryWriter()
    ): BinaryWriter {
      if (message.userId !== undefined) {
        writer.uint32(10).string(message.userId)
      }
      if (message.human !== undefined) {
        AddHumanUserRequest.encode(
          message.human,
          writer.uint32(18).fork()
        ).join()
      }
      for (const v of message.roles) {
        writer.uint32(26).string(v!)
      }
      return writer
    },

    decode(
      input: BinaryReader | Uint8Array,
      length?: number
    ): AddOrganizationRequest_Admin {
      const reader =
        input instanceof BinaryReader ? input : new BinaryReader(input)
      let end = length === undefined ? reader.len : reader.pos + length
      const message = createBaseAddOrganizationRequest_Admin()
      while (reader.pos < end) {
        const tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            if (tag !== 10) {
              break
            }

            message.userId = reader.string()
            continue
          case 2:
            if (tag !== 18) {
              break
            }

            message.human = AddHumanUserRequest.decode(reader, reader.uint32())
            continue
          case 3:
            if (tag !== 26) {
              break
            }

            message.roles.push(reader.string())
            continue
        }
        if ((tag & 7) === 4 || tag === 0) {
          break
        }
        reader.skip(tag & 7)
      }
      return message
    },

    fromJSON(object: any): AddOrganizationRequest_Admin {
      return {
        userId: isSet(object.userId)
          ? globalThis.String(object.userId)
          : undefined,
        human: isSet(object.human)
          ? AddHumanUserRequest.fromJSON(object.human)
          : undefined,
        roles: globalThis.Array.isArray(object?.roles)
          ? object.roles.map((e: any) => globalThis.String(e))
          : []
      }
    },

    toJSON(message: AddOrganizationRequest_Admin): unknown {
      const obj: any = {}
      if (message.userId !== undefined) {
        obj.userId = message.userId
      }
      if (message.human !== undefined) {
        obj.human = AddHumanUserRequest.toJSON(message.human)
      }
      if (message.roles?.length) {
        obj.roles = message.roles
      }
      return obj
    },

    create(
      base?: DeepPartial<AddOrganizationRequest_Admin>
    ): AddOrganizationRequest_Admin {
      return AddOrganizationRequest_Admin.fromPartial(base ?? {})
    },
    fromPartial(
      object: DeepPartial<AddOrganizationRequest_Admin>
    ): AddOrganizationRequest_Admin {
      const message = createBaseAddOrganizationRequest_Admin()
      message.userId = object.userId ?? undefined
      message.human =
        object.human !== undefined && object.human !== null
          ? AddHumanUserRequest.fromPartial(object.human)
          : undefined
      message.roles = object.roles?.map((e) => e) || []
      return message
    }
  }

function createBaseAddOrganizationResponse(): AddOrganizationResponse {
  return { details: undefined, organizationId: "", createdAdmins: [] }
}

export const AddOrganizationResponse: MessageFns<AddOrganizationResponse> = {
  encode(
    message: AddOrganizationResponse,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.details !== undefined) {
      Details.encode(message.details, writer.uint32(10).fork()).join()
    }
    if (message.organizationId !== "") {
      writer.uint32(18).string(message.organizationId)
    }
    for (const v of message.createdAdmins) {
      AddOrganizationResponse_CreatedAdmin.encode(
        v!,
        writer.uint32(26).fork()
      ).join()
    }
    return writer
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): AddOrganizationResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseAddOrganizationResponse()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.details = Details.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 18) {
            break
          }

          message.organizationId = reader.string()
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.createdAdmins.push(
            AddOrganizationResponse_CreatedAdmin.decode(reader, reader.uint32())
          )
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): AddOrganizationResponse {
    return {
      details: isSet(object.details)
        ? Details.fromJSON(object.details)
        : undefined,
      organizationId: isSet(object.organizationId)
        ? globalThis.String(object.organizationId)
        : "",
      createdAdmins: globalThis.Array.isArray(object?.createdAdmins)
        ? object.createdAdmins.map((e: any) =>
            AddOrganizationResponse_CreatedAdmin.fromJSON(e)
          )
        : []
    }
  },

  toJSON(message: AddOrganizationResponse): unknown {
    const obj: any = {}
    if (message.details !== undefined) {
      obj.details = Details.toJSON(message.details)
    }
    if (message.organizationId !== "") {
      obj.organizationId = message.organizationId
    }
    if (message.createdAdmins?.length) {
      obj.createdAdmins = message.createdAdmins.map((e) =>
        AddOrganizationResponse_CreatedAdmin.toJSON(e)
      )
    }
    return obj
  },

  create(base?: DeepPartial<AddOrganizationResponse>): AddOrganizationResponse {
    return AddOrganizationResponse.fromPartial(base ?? {})
  },
  fromPartial(
    object: DeepPartial<AddOrganizationResponse>
  ): AddOrganizationResponse {
    const message = createBaseAddOrganizationResponse()
    message.details =
      object.details !== undefined && object.details !== null
        ? Details.fromPartial(object.details)
        : undefined
    message.organizationId = object.organizationId ?? ""
    message.createdAdmins =
      object.createdAdmins?.map((e) =>
        AddOrganizationResponse_CreatedAdmin.fromPartial(e)
      ) || []
    return message
  }
}

function createBaseAddOrganizationResponse_CreatedAdmin(): AddOrganizationResponse_CreatedAdmin {
  return { userId: "", emailCode: undefined, phoneCode: undefined }
}

export const AddOrganizationResponse_CreatedAdmin: MessageFns<AddOrganizationResponse_CreatedAdmin> =
  {
    encode(
      message: AddOrganizationResponse_CreatedAdmin,
      writer: BinaryWriter = new BinaryWriter()
    ): BinaryWriter {
      if (message.userId !== "") {
        writer.uint32(10).string(message.userId)
      }
      if (message.emailCode !== undefined) {
        writer.uint32(18).string(message.emailCode)
      }
      if (message.phoneCode !== undefined) {
        writer.uint32(26).string(message.phoneCode)
      }
      return writer
    },

    decode(
      input: BinaryReader | Uint8Array,
      length?: number
    ): AddOrganizationResponse_CreatedAdmin {
      const reader =
        input instanceof BinaryReader ? input : new BinaryReader(input)
      let end = length === undefined ? reader.len : reader.pos + length
      const message = createBaseAddOrganizationResponse_CreatedAdmin()
      while (reader.pos < end) {
        const tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            if (tag !== 10) {
              break
            }

            message.userId = reader.string()
            continue
          case 2:
            if (tag !== 18) {
              break
            }

            message.emailCode = reader.string()
            continue
          case 3:
            if (tag !== 26) {
              break
            }

            message.phoneCode = reader.string()
            continue
        }
        if ((tag & 7) === 4 || tag === 0) {
          break
        }
        reader.skip(tag & 7)
      }
      return message
    },

    fromJSON(object: any): AddOrganizationResponse_CreatedAdmin {
      return {
        userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
        emailCode: isSet(object.emailCode)
          ? globalThis.String(object.emailCode)
          : undefined,
        phoneCode: isSet(object.phoneCode)
          ? globalThis.String(object.phoneCode)
          : undefined
      }
    },

    toJSON(message: AddOrganizationResponse_CreatedAdmin): unknown {
      const obj: any = {}
      if (message.userId !== "") {
        obj.userId = message.userId
      }
      if (message.emailCode !== undefined) {
        obj.emailCode = message.emailCode
      }
      if (message.phoneCode !== undefined) {
        obj.phoneCode = message.phoneCode
      }
      return obj
    },

    create(
      base?: DeepPartial<AddOrganizationResponse_CreatedAdmin>
    ): AddOrganizationResponse_CreatedAdmin {
      return AddOrganizationResponse_CreatedAdmin.fromPartial(base ?? {})
    },
    fromPartial(
      object: DeepPartial<AddOrganizationResponse_CreatedAdmin>
    ): AddOrganizationResponse_CreatedAdmin {
      const message = createBaseAddOrganizationResponse_CreatedAdmin()
      message.userId = object.userId ?? ""
      message.emailCode = object.emailCode ?? undefined
      message.phoneCode = object.phoneCode ?? undefined
      return message
    }
  }

function createBaseListOrganizationsRequest(): ListOrganizationsRequest {
  return { query: undefined, sortingColumn: 0, queries: [] }
}

export const ListOrganizationsRequest: MessageFns<ListOrganizationsRequest> = {
  encode(
    message: ListOrganizationsRequest,
    writer: BinaryWriter = new BinaryWriter()
  ): BinaryWriter {
    if (message.query !== undefined) {
      ListQuery.encode(message.query, writer.uint32(10).fork()).join()
    }
    if (message.sortingColumn !== 0) {
      writer.uint32(16).int32(message.sortingColumn)
    }
    for (const v of message.queries) {
      SearchQuery.encode(v!, writer.uint32(26).fork()).join()
    }
    return writer
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number
  ): ListOrganizationsRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseListOrganizationsRequest()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break
          }

          message.query = ListQuery.decode(reader, reader.uint32())
          continue
        case 2:
          if (tag !== 16) {
            break
          }

          message.sortingColumn = reader.int32() as any
          continue
        case 3:
          if (tag !== 26) {
            break
          }

          message.queries.push(SearchQuery.decode(reader, reader.uint32()))
          continue
      }
      if ((tag & 7) === 4 || tag === 0) {
        break
      }
      reader.skip(tag & 7)
    }
    return message
  },

  fromJSON(object: any): ListOrganizationsRequest {
    return {
      query: isSet(object.query) ? ListQuery.fromJSON(object.query) : undefined,
      sortingColumn: isSet(object.sortingColumn)
        ? organizationFieldNameFromJSON(object.sortingColumn)
        : 0,
      queries: globalThis.Array.isArray(object?.queries)
        ? object.queries.map((e: any) => SearchQuery.fromJSON(e))
        : []
    }
  },

  toJSON(message: ListOrganizationsRequest): unknown {
    const obj: any = {}
    if (message.query !== undefined) {
      obj.query = ListQuery.toJSON(message.query)
    }
    if (message.sortingColumn !== 0) {
      obj.sortingColumn = organizationFieldNameToJSON(message.sortingColumn)
    }
    if (message.queries?.length) {
      obj.queries = message.queries.map((e) => SearchQuery.toJSON(e))
    }
    return obj
  },

  create(
    base?: DeepPartial<ListOrganizationsRequest>
  ): ListOrganizationsRequest {
    return ListOrganizationsRequest.fromPartial(base ?? {})
  },
  fromPartial(
    object: DeepPartial<ListOrganizationsRequest>
  ): ListOrganizationsRequest {
    const message = createBaseListOrganizationsRequest()
    message.query =
      object.query !== undefined && object.query !== null
        ? ListQuery.fromPartial(object.query)
        : undefined
    message.sortingColumn = object.sortingColumn ?? 0
    message.queries =
      object.queries?.map((e) => SearchQuery.fromPartial(e)) || []
    return message
  }
}

function createBaseListOrganizationsResponse(): ListOrganizationsResponse {
  return { details: undefined, sortingColumn: 0, result: [] }
}

export const ListOrganizationsResponse: MessageFns<ListOrganizationsResponse> =
  {
    encode(
      message: ListOrganizationsResponse,
      writer: BinaryWriter = new BinaryWriter()
    ): BinaryWriter {
      if (message.details !== undefined) {
        ListDetails.encode(message.details, writer.uint32(10).fork()).join()
      }
      if (message.sortingColumn !== 0) {
        writer.uint32(16).int32(message.sortingColumn)
      }
      for (const v of message.result) {
        Organization.encode(v!, writer.uint32(26).fork()).join()
      }
      return writer
    },

    decode(
      input: BinaryReader | Uint8Array,
      length?: number
    ): ListOrganizationsResponse {
      const reader =
        input instanceof BinaryReader ? input : new BinaryReader(input)
      let end = length === undefined ? reader.len : reader.pos + length
      const message = createBaseListOrganizationsResponse()
      while (reader.pos < end) {
        const tag = reader.uint32()
        switch (tag >>> 3) {
          case 1:
            if (tag !== 10) {
              break
            }

            message.details = ListDetails.decode(reader, reader.uint32())
            continue
          case 2:
            if (tag !== 16) {
              break
            }

            message.sortingColumn = reader.int32() as any
            continue
          case 3:
            if (tag !== 26) {
              break
            }

            message.result.push(Organization.decode(reader, reader.uint32()))
            continue
        }
        if ((tag & 7) === 4 || tag === 0) {
          break
        }
        reader.skip(tag & 7)
      }
      return message
    },

    fromJSON(object: any): ListOrganizationsResponse {
      return {
        details: isSet(object.details)
          ? ListDetails.fromJSON(object.details)
          : undefined,
        sortingColumn: isSet(object.sortingColumn)
          ? organizationFieldNameFromJSON(object.sortingColumn)
          : 0,
        result: globalThis.Array.isArray(object?.result)
          ? object.result.map((e: any) => Organization.fromJSON(e))
          : []
      }
    },

    toJSON(message: ListOrganizationsResponse): unknown {
      const obj: any = {}
      if (message.details !== undefined) {
        obj.details = ListDetails.toJSON(message.details)
      }
      if (message.sortingColumn !== 0) {
        obj.sortingColumn = organizationFieldNameToJSON(message.sortingColumn)
      }
      if (message.result?.length) {
        obj.result = message.result.map((e) => Organization.toJSON(e))
      }
      return obj
    },

    create(
      base?: DeepPartial<ListOrganizationsResponse>
    ): ListOrganizationsResponse {
      return ListOrganizationsResponse.fromPartial(base ?? {})
    },
    fromPartial(
      object: DeepPartial<ListOrganizationsResponse>
    ): ListOrganizationsResponse {
      const message = createBaseListOrganizationsResponse()
      message.details =
        object.details !== undefined && object.details !== null
          ? ListDetails.fromPartial(object.details)
          : undefined
      message.sortingColumn = object.sortingColumn ?? 0
      message.result =
        object.result?.map((e) => Organization.fromPartial(e)) || []
      return message
    }
  }

export type OrganizationServiceDefinition = typeof OrganizationServiceDefinition
export const OrganizationServiceDefinition = {
  name: "OrganizationService",
  fullName: "zitadel.org.v2.OrganizationService",
  methods: {
    /**
     * Create an Organization
     *
     * Create a new organization with an administrative user. If no specific roles are sent for the users, they will be granted the role ORG_OWNER.
     */
    addOrganization: {
      name: "AddOrganization",
      requestType: AddOrganizationRequest,
      requestStream: false,
      responseType: AddOrganizationResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([13, 74, 11, 10, 3, 50, 48, 48, 18, 4, 10, 2, 79, 75])
          ],
          400010: [
            Buffer.from([
              19, 10, 12, 10, 10, 111, 114, 103, 46, 99, 114, 101, 97, 116, 101,
              18, 3, 8, 201, 1
            ])
          ],
          578365826: [
            Buffer.from([
              22, 58, 1, 42, 34, 17, 47, 118, 50, 47, 111, 114, 103, 97, 110,
              105, 122, 97, 116, 105, 111, 110, 115
            ])
          ]
        }
      }
    },
    /**
     * Search Organizations
     *
     * Search for Organizations. By default, we will return all organization of the instance. Make sure to include a limit and sorting for pagination..
     */
    listOrganizations: {
      name: "ListOrganizations",
      requestType: ListOrganizationsRequest,
      requestStream: false,
      responseType: ListOrganizationsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          8338: [
            Buffer.from([
              115, 74, 55, 10, 3, 50, 48, 48, 18, 48, 10, 46, 65, 32, 108, 105,
              115, 116, 32, 111, 102, 32, 97, 108, 108, 32, 111, 114, 103, 97,
              110, 105, 122, 97, 116, 105, 111, 110, 115, 32, 109, 97, 116, 99,
              104, 105, 110, 103, 32, 116, 104, 101, 32, 113, 117, 101, 114,
              121, 74, 56, 10, 3, 52, 48, 48, 18, 49, 10, 18, 105, 110, 118, 97,
              108, 105, 100, 32, 108, 105, 115, 116, 32, 113, 117, 101, 114,
              121, 18, 27, 10, 25, 26, 23, 35, 47, 100, 101, 102, 105, 110, 105,
              116, 105, 111, 110, 115, 47, 114, 112, 99, 83, 116, 97, 116, 117,
              115
            ])
          ],
          400010: [
            Buffer.from([
              17, 10, 15, 10, 13, 97, 117, 116, 104, 101, 110, 116, 105, 99, 97,
              116, 101, 100
            ])
          ],
          578365826: [
            Buffer.from([
              30, 58, 1, 42, 34, 25, 47, 118, 50, 47, 111, 114, 103, 97, 110,
              105, 122, 97, 116, 105, 111, 110, 115, 47, 95, 115, 101, 97, 114,
              99, 104
            ])
          ]
        }
      }
    }
  }
} as const

export interface OrganizationServiceImplementation<CallContextExt = {}> {
  /**
   * Create an Organization
   *
   * Create a new organization with an administrative user. If no specific roles are sent for the users, they will be granted the role ORG_OWNER.
   */
  addOrganization(
    request: AddOrganizationRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<AddOrganizationResponse>>
  /**
   * Search Organizations
   *
   * Search for Organizations. By default, we will return all organization of the instance. Make sure to include a limit and sorting for pagination..
   */
  listOrganizations(
    request: ListOrganizationsRequest,
    context: CallContext & CallContextExt
  ): Promise<DeepPartial<ListOrganizationsResponse>>
}

export interface OrganizationServiceClient<CallOptionsExt = {}> {
  /**
   * Create an Organization
   *
   * Create a new organization with an administrative user. If no specific roles are sent for the users, they will be granted the role ORG_OWNER.
   */
  addOrganization(
    request: DeepPartial<AddOrganizationRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<AddOrganizationResponse>
  /**
   * Search Organizations
   *
   * Search for Organizations. By default, we will return all organization of the instance. Make sure to include a limit and sorting for pagination..
   */
  listOrganizations(
    request: DeepPartial<ListOrganizationsRequest>,
    options?: CallOptions & CallOptionsExt
  ): Promise<ListOrganizationsResponse>
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends globalThis.Array<infer U>
  ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function isSet(value: any): boolean {
  return value !== null && value !== undefined
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter
  decode(input: BinaryReader | Uint8Array, length?: number): T
  fromJSON(object: any): T
  toJSON(message: T): unknown
  create(base?: DeepPartial<T>): T
  fromPartial(object: DeepPartial<T>): T
}
