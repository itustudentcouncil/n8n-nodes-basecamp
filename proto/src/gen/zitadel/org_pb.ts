// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/org.proto (package zitadel.org.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { ObjectDetails, TextQueryMethod } from "./object_pb";
import { file_zitadel_object } from "./object_pb";
import { file_validate_validate } from "../validate/validate_pb";
import { file_protoc_gen_openapiv2_options_annotations } from "../protoc-gen-openapiv2/options/annotations_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/org.proto.
 */
export const file_zitadel_org: GenFile = /*@__PURE__*/
  fileDesc("ChF6aXRhZGVsL29yZy5wcm90bxIOeml0YWRlbC5vcmcudjEi9AEKA09yZxIkCgJpZBgBIAEoCUIYkkEVShMiNjk2MjkwMjM5MDY0ODgzMzQiEioKB2RldGFpbHMYAiABKAsyGS56aXRhZGVsLnYxLk9iamVjdERldGFpbHMSTwoFc3RhdGUYAyABKA4yGC56aXRhZGVsLm9yZy52MS5PcmdTdGF0ZUImkkEjMiFjdXJyZW50IHN0YXRlIG9mIHRoZSBvcmdhbml6YXRpb24SHAoEbmFtZRgEIAEoCUIOkkELSgkiWklUQURFTCISLAoOcHJpbWFyeV9kb21haW4YBSABKAlCFJJBEUoPInppdGFkZWwuY2xvdWQiIoIDCgZEb21haW4SKAoGb3JnX2lkGAEgASgJQhiSQRVKEyI2OTYyOTAyMzkwNjQ4ODMzNCISKgoHZGV0YWlscxgCIAEoCzIZLnppdGFkZWwudjEuT2JqZWN0RGV0YWlscxInCgtkb21haW5fbmFtZRgDIAEoCUISkkEPSg0ieml0YWRlbC5jb20iEjsKC2lzX3ZlcmlmaWVkGAQgASgIQiaSQSMyIWRlZmluZXMgaWYgdGhlIGRvbWFpbiBpcyB2ZXJpZmllZBJECgppc19wcmltYXJ5GAUgASgIQjCSQS0yK2RlZmluZXMgaWYgdGhlIGRvbWFpbiBpcyB0aGUgcHJpbWFyeSBkb21haW4SdgoPdmFsaWRhdGlvbl90eXBlGAYgASgOMiQueml0YWRlbC5vcmcudjEuRG9tYWluVmFsaWRhdGlvblR5cGVCN5JBNDIyZGVmaW5lcyB0aGUgcHJvdG9jb2wgdGhlIGRvbWFpbiB3YXMgdmFsaWRhdGVkIHdpdGgi6gEKCE9yZ1F1ZXJ5EjIKCm5hbWVfcXVlcnkYASABKAsyHC56aXRhZGVsLm9yZy52MS5PcmdOYW1lUXVlcnlIABI2Cgxkb21haW5fcXVlcnkYAiABKAsyHi56aXRhZGVsLm9yZy52MS5PcmdEb21haW5RdWVyeUgAEjQKC3N0YXRlX3F1ZXJ5GAMgASgLMh0ueml0YWRlbC5vcmcudjEuT3JnU3RhdGVRdWVyeUgAEi4KCGlkX3F1ZXJ5GAQgASgLMhoueml0YWRlbC5vcmcudjEuT3JnSURRdWVyeUgAQgwKBXF1ZXJ5EgP4QgEimgEKDE9yZ05hbWVRdWVyeRIkCgRuYW1lGAEgASgJQhaSQQtKCSJaSVRBREVMIvpCBXIDGMgBEmQKBm1ldGhvZBgCIAEoDjIbLnppdGFkZWwudjEuVGV4dFF1ZXJ5TWV0aG9kQjeSQSwyKmRlZmluZXMgd2hpY2ggdGV4dCBlcXVhbGl0eSBtZXRob2QgaXMgdXNlZPpCBYIBAhABIqQBCg5PcmdEb21haW5RdWVyeRIsCgZkb21haW4YASABKAlCHJJBEUoPImNpdGFkZWwuY2xvdWQi+kIFcgMYyAESZAoGbWV0aG9kGAIgASgOMhsueml0YWRlbC52MS5UZXh0UXVlcnlNZXRob2RCN5JBLDIqZGVmaW5lcyB3aGljaCB0ZXh0IGVxdWFsaXR5IG1ldGhvZCBpcyB1c2Vk+kIFggECEAEiaAoNT3JnU3RhdGVRdWVyeRJXCgVzdGF0ZRgBIAEoDjIYLnppdGFkZWwub3JnLnYxLk9yZ1N0YXRlQi6SQSMyIWN1cnJlbnQgc3RhdGUgb2YgdGhlIG9yZ2FuaXphdGlvbvpCBYIBAhABIjoKCk9yZ0lEUXVlcnkSLAoCaWQYASABKAlCIJJBFUoTIjY5NjI5MDIzOTA2NDg4MzM0IvpCBXIDGMgBIl8KEURvbWFpblNlYXJjaFF1ZXJ5EjwKEWRvbWFpbl9uYW1lX3F1ZXJ5GAEgASgLMh8ueml0YWRlbC5vcmcudjEuRG9tYWluTmFtZVF1ZXJ5SABCDAoFcXVlcnkSA/hCASKjAQoPRG9tYWluTmFtZVF1ZXJ5EioKBG5hbWUYASABKAlCHJJBEUoPInppdGFkZWwuY2xvdWQi+kIFcgMYyAESZAoGbWV0aG9kGAIgASgOMhsueml0YWRlbC52MS5UZXh0UXVlcnlNZXRob2RCN5JBLDIqZGVmaW5lcyB3aGljaCB0ZXh0IGVxdWFsaXR5IG1ldGhvZCBpcyB1c2Vk+kIFggECEAEqagoIT3JnU3RhdGUSGQoVT1JHX1NUQVRFX1VOU1BFQ0lGSUVEEAASFAoQT1JHX1NUQVRFX0FDVElWRRABEhYKEk9SR19TVEFURV9JTkFDVElWRRACEhUKEU9SR19TVEFURV9SRU1PVkVEEAMqfwoURG9tYWluVmFsaWRhdGlvblR5cGUSJgoiRE9NQUlOX1ZBTElEQVRJT05fVFlQRV9VTlNQRUNJRklFRBAAEh8KG0RPTUFJTl9WQUxJREFUSU9OX1RZUEVfSFRUUBABEh4KGkRPTUFJTl9WQUxJREFUSU9OX1RZUEVfRE5TEAIqRwoMT3JnRmllbGROYW1lEh4KGk9SR19GSUVMRF9OQU1FX1VOU1BFQ0lGSUVEEAASFwoTT1JHX0ZJRUxEX05BTUVfTkFNRRABQilaJ2dpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL29yZ2IGcHJvdG8z", [file_zitadel_object, file_validate_validate, file_protoc_gen_openapiv2_options_annotations]);

/**
 * @generated from message zitadel.org.v1.Org
 */
export type Org = Message<"zitadel.org.v1.Org"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 2;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: zitadel.org.v1.OrgState state = 3;
   */
  state: OrgState;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * @generated from field: string primary_domain = 5;
   */
  primaryDomain: string;
};

/**
 * Describes the message zitadel.org.v1.Org.
 * Use `create(OrgSchema)` to create a new message.
 */
export const OrgSchema: GenMessage<Org> = /*@__PURE__*/
  messageDesc(file_zitadel_org, 0);

/**
 * @generated from message zitadel.org.v1.Domain
 */
export type Domain = Message<"zitadel.org.v1.Domain"> & {
  /**
   * @generated from field: string org_id = 1;
   */
  orgId: string;

  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 2;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: string domain_name = 3;
   */
  domainName: string;

  /**
   * @generated from field: bool is_verified = 4;
   */
  isVerified: boolean;

  /**
   * @generated from field: bool is_primary = 5;
   */
  isPrimary: boolean;

  /**
   * @generated from field: zitadel.org.v1.DomainValidationType validation_type = 6;
   */
  validationType: DomainValidationType;
};

/**
 * Describes the message zitadel.org.v1.Domain.
 * Use `create(DomainSchema)` to create a new message.
 */
export const DomainSchema: GenMessage<Domain> = /*@__PURE__*/
  messageDesc(file_zitadel_org, 1);

/**
 * @generated from message zitadel.org.v1.OrgQuery
 */
export type OrgQuery = Message<"zitadel.org.v1.OrgQuery"> & {
  /**
   * @generated from oneof zitadel.org.v1.OrgQuery.query
   */
  query: {
    /**
     * @generated from field: zitadel.org.v1.OrgNameQuery name_query = 1;
     */
    value: OrgNameQuery;
    case: "nameQuery";
  } | {
    /**
     * @generated from field: zitadel.org.v1.OrgDomainQuery domain_query = 2;
     */
    value: OrgDomainQuery;
    case: "domainQuery";
  } | {
    /**
     * @generated from field: zitadel.org.v1.OrgStateQuery state_query = 3;
     */
    value: OrgStateQuery;
    case: "stateQuery";
  } | {
    /**
     * @generated from field: zitadel.org.v1.OrgIDQuery id_query = 4;
     */
    value: OrgIDQuery;
    case: "idQuery";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message zitadel.org.v1.OrgQuery.
 * Use `create(OrgQuerySchema)` to create a new message.
 */
export const OrgQuerySchema: GenMessage<OrgQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_org, 2);

/**
 * @generated from message zitadel.org.v1.OrgNameQuery
 */
export type OrgNameQuery = Message<"zitadel.org.v1.OrgNameQuery"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;
};

/**
 * Describes the message zitadel.org.v1.OrgNameQuery.
 * Use `create(OrgNameQuerySchema)` to create a new message.
 */
export const OrgNameQuerySchema: GenMessage<OrgNameQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_org, 3);

/**
 * @generated from message zitadel.org.v1.OrgDomainQuery
 */
export type OrgDomainQuery = Message<"zitadel.org.v1.OrgDomainQuery"> & {
  /**
   * @generated from field: string domain = 1;
   */
  domain: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;
};

/**
 * Describes the message zitadel.org.v1.OrgDomainQuery.
 * Use `create(OrgDomainQuerySchema)` to create a new message.
 */
export const OrgDomainQuerySchema: GenMessage<OrgDomainQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_org, 4);

/**
 * @generated from message zitadel.org.v1.OrgStateQuery
 */
export type OrgStateQuery = Message<"zitadel.org.v1.OrgStateQuery"> & {
  /**
   * @generated from field: zitadel.org.v1.OrgState state = 1;
   */
  state: OrgState;
};

/**
 * Describes the message zitadel.org.v1.OrgStateQuery.
 * Use `create(OrgStateQuerySchema)` to create a new message.
 */
export const OrgStateQuerySchema: GenMessage<OrgStateQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_org, 5);

/**
 * @generated from message zitadel.org.v1.OrgIDQuery
 */
export type OrgIDQuery = Message<"zitadel.org.v1.OrgIDQuery"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;
};

/**
 * Describes the message zitadel.org.v1.OrgIDQuery.
 * Use `create(OrgIDQuerySchema)` to create a new message.
 */
export const OrgIDQuerySchema: GenMessage<OrgIDQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_org, 6);

/**
 * @generated from message zitadel.org.v1.DomainSearchQuery
 */
export type DomainSearchQuery = Message<"zitadel.org.v1.DomainSearchQuery"> & {
  /**
   * @generated from oneof zitadel.org.v1.DomainSearchQuery.query
   */
  query: {
    /**
     * @generated from field: zitadel.org.v1.DomainNameQuery domain_name_query = 1;
     */
    value: DomainNameQuery;
    case: "domainNameQuery";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message zitadel.org.v1.DomainSearchQuery.
 * Use `create(DomainSearchQuerySchema)` to create a new message.
 */
export const DomainSearchQuerySchema: GenMessage<DomainSearchQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_org, 7);

/**
 * @generated from message zitadel.org.v1.DomainNameQuery
 */
export type DomainNameQuery = Message<"zitadel.org.v1.DomainNameQuery"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: zitadel.v1.TextQueryMethod method = 2;
   */
  method: TextQueryMethod;
};

/**
 * Describes the message zitadel.org.v1.DomainNameQuery.
 * Use `create(DomainNameQuerySchema)` to create a new message.
 */
export const DomainNameQuerySchema: GenMessage<DomainNameQuery> = /*@__PURE__*/
  messageDesc(file_zitadel_org, 8);

/**
 * @generated from enum zitadel.org.v1.OrgState
 */
export enum OrgState {
  /**
   * @generated from enum value: ORG_STATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ORG_STATE_ACTIVE = 1;
   */
  ACTIVE = 1,

  /**
   * @generated from enum value: ORG_STATE_INACTIVE = 2;
   */
  INACTIVE = 2,

  /**
   * @generated from enum value: ORG_STATE_REMOVED = 3;
   */
  REMOVED = 3,
}

/**
 * Describes the enum zitadel.org.v1.OrgState.
 */
export const OrgStateSchema: GenEnum<OrgState> = /*@__PURE__*/
  enumDesc(file_zitadel_org, 0);

/**
 * @generated from enum zitadel.org.v1.DomainValidationType
 */
export enum DomainValidationType {
  /**
   * @generated from enum value: DOMAIN_VALIDATION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: DOMAIN_VALIDATION_TYPE_HTTP = 1;
   */
  HTTP = 1,

  /**
   * @generated from enum value: DOMAIN_VALIDATION_TYPE_DNS = 2;
   */
  DNS = 2,
}

/**
 * Describes the enum zitadel.org.v1.DomainValidationType.
 */
export const DomainValidationTypeSchema: GenEnum<DomainValidationType> = /*@__PURE__*/
  enumDesc(file_zitadel_org, 1);

/**
 * @generated from enum zitadel.org.v1.OrgFieldName
 */
export enum OrgFieldName {
  /**
   * @generated from enum value: ORG_FIELD_NAME_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: ORG_FIELD_NAME_NAME = 1;
   */
  NAME = 1,
}

/**
 * Describes the enum zitadel.org.v1.OrgFieldName.
 */
export const OrgFieldNameSchema: GenEnum<OrgFieldName> = /*@__PURE__*/
  enumDesc(file_zitadel_org, 2);
