// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/idp/v2/idp.proto (package zitadel.idp.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_zitadel_protoc_gen_zitadel_v2_options } from "../../protoc_gen_zitadel/v2/options_pb";
import type { Details } from "../../object/v2/object_pb";
import { file_zitadel_object_v2_object } from "../../object/v2/object_pb";
import { file_google_api_annotations } from "../../../google/api/annotations_pb";
import { file_google_api_field_behavior } from "../../../google/api/field_behavior_pb";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../protoc-gen-openapiv2/options/annotations_pb";
import { file_validate_validate } from "../../../validate/validate_pb";
import type { Duration } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/idp/v2/idp.proto.
 */
export const file_zitadel_idp_v2_idp: GenFile = /*@__PURE__*/
  fileDesc("Chh6aXRhZGVsL2lkcC92Mi9pZHAucHJvdG8SDnppdGFkZWwuaWRwLnYyIvABCgNJRFASJAoCaWQYASABKAlCGJJBFUoTIjY5NjI5MDIzOTA2NDg4MzM0IhIrCgdkZXRhaWxzGAIgASgLMhoueml0YWRlbC5vYmplY3QudjIuRGV0YWlscxInCgVzdGF0ZRgDIAEoDjIYLnppdGFkZWwuaWRwLnYyLklEUFN0YXRlEhsKBG5hbWUYBCABKAlCDZJBCkoIIkdvb2dsZSISJQoEdHlwZRgFIAEoDjIXLnppdGFkZWwuaWRwLnYyLklEUFR5cGUSKQoGY29uZmlnGAYgASgLMhkueml0YWRlbC5pZHAudjIuSURQQ29uZmlnIpwFCglJRFBDb25maWcSKAoHb3B0aW9ucxgBIAEoCzIXLnppdGFkZWwuaWRwLnYyLk9wdGlvbnMSKgoEbGRhcBgCIAEoCzIaLnppdGFkZWwuaWRwLnYyLkxEQVBDb25maWdIABIuCgZnb29nbGUYAyABKAsyHC56aXRhZGVsLmlkcC52Mi5Hb29nbGVDb25maWdIABIsCgVvYXV0aBgEIAEoCzIbLnppdGFkZWwuaWRwLnYyLk9BdXRoQ29uZmlnSAASMQoEb2lkYxgFIAEoCzIhLnppdGFkZWwuaWRwLnYyLkdlbmVyaWNPSURDQ29uZmlnSAASKAoDand0GAYgASgLMhkueml0YWRlbC5pZHAudjIuSldUQ29uZmlnSAASLgoGZ2l0aHViGAcgASgLMhwueml0YWRlbC5pZHAudjIuR2l0SHViQ29uZmlnSAASQQoJZ2l0aHViX2VzGAggASgLMiwueml0YWRlbC5pZHAudjIuR2l0SHViRW50ZXJwcmlzZVNlcnZlckNvbmZpZ0gAEi4KBmdpdGxhYhgJIAEoCzIcLnppdGFkZWwuaWRwLnYyLkdpdExhYkNvbmZpZ0gAEkQKEmdpdGxhYl9zZWxmX2hvc3RlZBgKIAEoCzImLnppdGFkZWwuaWRwLnYyLkdpdExhYlNlbGZIb3N0ZWRDb25maWdIABIxCghhenVyZV9hZBgLIAEoCzIdLnppdGFkZWwuaWRwLnYyLkF6dXJlQURDb25maWdIABIsCgVhcHBsZRgMIAEoCzIbLnppdGFkZWwuaWRwLnYyLkFwcGxlQ29uZmlnSAASKgoEc2FtbBgNIAEoCzIaLnppdGFkZWwuaWRwLnYyLlNBTUxDb25maWdIAEIICgZjb25maWciiwIKCUpXVENvbmZpZxJCCgxqd3RfZW5kcG9pbnQYASABKAlCLJJBH0odImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbSL6QgdyBRABGMgBEjwKBmlzc3VlchgCIAEoCUIskkEfSh0iaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tIvpCB3IFEAEYyAESSAoNa2V5c19lbmRwb2ludBgDIAEoCUIxkkEkSiIiaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2tleXMi+kIHcgUQARjIARIyCgtoZWFkZXJfbmFtZRgEIAEoCUIdkkEQSg4ieC1hdXRoLXRva2VuIvpCB3IFEAEYyAEi9gIKC09BdXRoQ29uZmlnEiMKCWNsaWVudF9pZBgBIAEoCUIQkkENSgsiY2xpZW50LWlkIhJTChZhdXRob3JpemF0aW9uX2VuZHBvaW50GAIgASgJQjOSQTBKLiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aCISQgoOdG9rZW5fZW5kcG9pbnQYAyABKAlCKpJBJ0olImh0dHBzOi8vb2F1dGgyLmdvb2dsZWFwaXMuY29tL3Rva2VuIhJOCg11c2VyX2VuZHBvaW50GAQgASgJQjeSQTRKMiJodHRwczovL29wZW5pZGNvbm5lY3QuZ29vZ2xlYXBpcy5jb20vdjEvdXNlcmluZm8iEjMKBnNjb3BlcxgFIAMoCUIjkkEgSh5bIm9wZW5pZCIsICJwcm9maWxlIiwgImVtYWlsIl0SJAoMaWRfYXR0cmlidXRlGAYgASgJQg6SQQtKCSJ1c2VyX2lkIiLKAQoRR2VuZXJpY09JRENDb25maWcSMwoGaXNzdWVyGAEgASgJQiOSQSBKHiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vIhIjCgljbGllbnRfaWQYAiABKAlCEJJBDUoLImNsaWVudC1pZCISMwoGc2NvcGVzGAMgAygJQiOSQSBKHlsib3BlbmlkIiwgInByb2ZpbGUiLCAiZW1haWwiXRImChNpc19pZF90b2tlbl9tYXBwaW5nGAQgASgIQgmSQQZKBHRydWUiaAoMR2l0SHViQ29uZmlnEiMKCWNsaWVudF9pZBgBIAEoCUIQkkENSgsiY2xpZW50LWlkIhIzCgZzY29wZXMYAiADKAlCI5JBIEoeWyJvcGVuaWQiLCAicHJvZmlsZSIsICJlbWFpbCJdIscBChxHaXRIdWJFbnRlcnByaXNlU2VydmVyQ29uZmlnEiMKCWNsaWVudF9pZBgBIAEoCUIQkkENSgsiY2xpZW50LWlkIhIeChZhdXRob3JpemF0aW9uX2VuZHBvaW50GAIgASgJEhYKDnRva2VuX2VuZHBvaW50GAMgASgJEhUKDXVzZXJfZW5kcG9pbnQYBCABKAkSMwoGc2NvcGVzGAUgAygJQiOSQSBKHlsib3BlbmlkIiwgInByb2ZpbGUiLCAiZW1haWwiXSJoCgxHb29nbGVDb25maWcSIwoJY2xpZW50X2lkGAEgASgJQhCSQQ1KCyJjbGllbnQtaWQiEjMKBnNjb3BlcxgCIAMoCUIjkkEgSh5bIm9wZW5pZCIsICJwcm9maWxlIiwgImVtYWlsIl0iaAoMR2l0TGFiQ29uZmlnEiMKCWNsaWVudF9pZBgBIAEoCUIQkkENSgsiY2xpZW50LWlkIhIzCgZzY29wZXMYAiADKAlCI5JBIEoeWyJvcGVuaWQiLCAicHJvZmlsZSIsICJlbWFpbCJdIoIBChZHaXRMYWJTZWxmSG9zdGVkQ29uZmlnEg4KBmlzc3VlchgBIAEoCRIjCgljbGllbnRfaWQYAiABKAlCEJJBDUoLImNsaWVudC1pZCISMwoGc2NvcGVzGAMgAygJQiOSQSBKHlsib3BlbmlkIiwgInByb2ZpbGUiLCAiZW1haWwiXSL4AQoKTERBUENvbmZpZxIPCgdzZXJ2ZXJzGAEgAygJEhEKCXN0YXJ0X3RscxgCIAEoCBIPCgdiYXNlX2RuGAMgASgJEg8KB2JpbmRfZG4YBCABKAkSEQoJdXNlcl9iYXNlGAUgASgJEhsKE3VzZXJfb2JqZWN0X2NsYXNzZXMYBiADKAkSFAoMdXNlcl9maWx0ZXJzGAcgAygJEioKB3RpbWVvdXQYCCABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb24SMgoKYXR0cmlidXRlcxgJIAEoCzIeLnppdGFkZWwuaWRwLnYyLkxEQVBBdHRyaWJ1dGVzIvsBCgpTQU1MQ29uZmlnEhQKDG1ldGFkYXRhX3htbBgBIAEoDBIsCgdiaW5kaW5nGAIgASgOMhsueml0YWRlbC5pZHAudjIuU0FNTEJpbmRpbmcSGwoTd2l0aF9zaWduZWRfcmVxdWVzdBgDIAEoCBI4Cg5uYW1lX2lkX2Zvcm1hdBgEIAEoDjIgLnppdGFkZWwuaWRwLnYyLlNBTUxOYW1lSURGb3JtYXQSLQogdHJhbnNpZW50X21hcHBpbmdfYXR0cmlidXRlX25hbWUYBSABKAlIAIgBAUIjCiFfdHJhbnNpZW50X21hcHBpbmdfYXR0cmlidXRlX25hbWUivQEKDUF6dXJlQURDb25maWcSIwoJY2xpZW50X2lkGAEgASgJQhCSQQ1KCyJjbGllbnQtaWQiEi0KBnRlbmFudBgCIAEoCzIdLnppdGFkZWwuaWRwLnYyLkF6dXJlQURUZW5hbnQSFgoOZW1haWxfdmVyaWZpZWQYAyABKAgSQAoGc2NvcGVzGAQgAygJQjCSQS1KK1sib3BlbmlkIiwgInByb2ZpbGUiLCAiZW1haWwiLCAiVXNlci5SZWFkIl0irQEKB09wdGlvbnMSGgoSaXNfbGlua2luZ19hbGxvd2VkGAEgASgIEhsKE2lzX2NyZWF0aW9uX2FsbG93ZWQYAiABKAgSGAoQaXNfYXV0b19jcmVhdGlvbhgDIAEoCBIWCg5pc19hdXRvX3VwZGF0ZRgEIAEoCBI3CgxhdXRvX2xpbmtpbmcYBSABKA4yIS56aXRhZGVsLmlkcC52Mi5BdXRvTGlua2luZ09wdGlvbiKbBAoOTERBUEF0dHJpYnV0ZXMSHgoMaWRfYXR0cmlidXRlGAEgASgJQgj6QgVyAxjIARImChRmaXJzdF9uYW1lX2F0dHJpYnV0ZRgCIAEoCUII+kIFcgMYyAESJQoTbGFzdF9uYW1lX2F0dHJpYnV0ZRgDIAEoCUII+kIFcgMYyAESKAoWZGlzcGxheV9uYW1lX2F0dHJpYnV0ZRgEIAEoCUII+kIFcgMYyAESJQoTbmlja19uYW1lX2F0dHJpYnV0ZRgFIAEoCUII+kIFcgMYyAESLgoccHJlZmVycmVkX3VzZXJuYW1lX2F0dHJpYnV0ZRgGIAEoCUII+kIFcgMYyAESIQoPZW1haWxfYXR0cmlidXRlGAcgASgJQgj6QgVyAxjIARIqChhlbWFpbF92ZXJpZmllZF9hdHRyaWJ1dGUYCCABKAlCCPpCBXIDGMgBEiEKD3Bob25lX2F0dHJpYnV0ZRgJIAEoCUII+kIFcgMYyAESKgoYcGhvbmVfdmVyaWZpZWRfYXR0cmlidXRlGAogASgJQgj6QgVyAxjIARIuChxwcmVmZXJyZWRfbGFuZ3VhZ2VfYXR0cmlidXRlGAsgASgJQgj6QgVyAxjIARImChRhdmF0YXJfdXJsX2F0dHJpYnV0ZRgMIAEoCUII+kIFcgMYyAESIwoRcHJvZmlsZV9hdHRyaWJ1dGUYDSABKAlCCPpCBXIDGMgBImYKDUF6dXJlQURUZW5hbnQSOAoLdGVuYW50X3R5cGUYASABKA4yIS56aXRhZGVsLmlkcC52Mi5BenVyZUFEVGVuYW50VHlwZUgAEhMKCXRlbmFudF9pZBgCIAEoCUgAQgYKBHR5cGUipAEKC0FwcGxlQ29uZmlnEicKCWNsaWVudF9pZBgBIAEoCUIUkkERSg8iY29tLmNsaWVudC5pZCISIgoHdGVhbV9pZBgCIAEoCUIRkkEOSgwiQUxUMDNKVjNPUyISIAoGa2V5X2lkGAMgASgJQhCSQQ1KCyJPR0tESzI1S0QiEiYKBnNjb3BlcxgEIAMoCUIWkkETShFbIm5hbWUiLCAiZW1haWwiXSqCAQoISURQU3RhdGUSGQoVSURQX1NUQVRFX1VOU1BFQ0lGSUVEEAASFAoQSURQX1NUQVRFX0FDVElWRRABEhYKEklEUF9TVEFURV9JTkFDVElWRRACEhUKEUlEUF9TVEFURV9SRU1PVkVEEAMSFgoSSURQX1NUQVRFX01JR1JBVEVEEAQqpQIKB0lEUFR5cGUSGAoUSURQX1RZUEVfVU5TUEVDSUZJRUQQABIRCg1JRFBfVFlQRV9PSURDEAESEAoMSURQX1RZUEVfSldUEAISEQoNSURQX1RZUEVfTERBUBADEhIKDklEUF9UWVBFX09BVVRIEAQSFQoRSURQX1RZUEVfQVpVUkVfQUQQBRITCg9JRFBfVFlQRV9HSVRIVUIQBhIWChJJRFBfVFlQRV9HSVRIVUJfRVMQBxITCg9JRFBfVFlQRV9HSVRMQUIQCBIfChtJRFBfVFlQRV9HSVRMQUJfU0VMRl9IT1NURUQQCRITCg9JRFBfVFlQRV9HT09HTEUQChISCg5JRFBfVFlQRV9BUFBMRRALEhEKDUlEUF9UWVBFX1NBTUwQDCp4CgtTQU1MQmluZGluZxIcChhTQU1MX0JJTkRJTkdfVU5TUEVDSUZJRUQQABIVChFTQU1MX0JJTkRJTkdfUE9TVBABEhkKFVNBTUxfQklORElOR19SRURJUkVDVBACEhkKFVNBTUxfQklORElOR19BUlRJRkFDVBADKqUBChBTQU1MTmFtZUlERm9ybWF0EiMKH1NBTUxfTkFNRV9JRF9GT1JNQVRfVU5TUEVDSUZJRUQQABIlCiFTQU1MX05BTUVfSURfRk9STUFUX0VNQUlMX0FERFJFU1MQARIiCh5TQU1MX05BTUVfSURfRk9STUFUX1BFUlNJU1RFTlQQAhIhCh1TQU1MX05BTUVfSURfRk9STUFUX1RSQU5TSUVOVBADKnkKEUF1dG9MaW5raW5nT3B0aW9uEiMKH0FVVE9fTElOS0lOR19PUFRJT05fVU5TUEVDSUZJRUQQABIgChxBVVRPX0xJTktJTkdfT1BUSU9OX1VTRVJOQU1FEAESHQoZQVVUT19MSU5LSU5HX09QVElPTl9FTUFJTBACKoABChFBenVyZUFEVGVuYW50VHlwZRIfChtBWlVSRV9BRF9URU5BTlRfVFlQRV9DT01NT04QABImCiJBWlVSRV9BRF9URU5BTlRfVFlQRV9PUkdBTklTQVRJT05TEAESIgoeQVpVUkVfQURfVEVOQU5UX1RZUEVfQ09OU1VNRVJTEAJCMFouZ2l0aHViLmNvbS96aXRhZGVsL3ppdGFkZWwvcGtnL2dycGMvaWRwL3YyO2lkcGIGcHJvdG8z", [file_zitadel_protoc_gen_zitadel_v2_options, file_zitadel_object_v2_object, file_google_api_annotations, file_google_api_field_behavior, file_protoc_gen_openapiv2_options_annotations, file_validate_validate, file_google_protobuf_duration]);

/**
 * @generated from message zitadel.idp.v2.IDP
 */
export type IDP = Message<"zitadel.idp.v2.IDP"> & {
  /**
   * Unique identifier for the identity provider.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: zitadel.object.v2.Details details = 2;
   */
  details?: Details;

  /**
   * Current state of the identity provider.
   *
   * @generated from field: zitadel.idp.v2.IDPState state = 3;
   */
  state: IDPState;

  /**
   * @generated from field: string name = 4;
   */
  name: string;

  /**
   * Type of the identity provider, for example OIDC, JWT, LDAP and SAML.
   *
   * @generated from field: zitadel.idp.v2.IDPType type = 5;
   */
  type: IDPType;

  /**
   * Configuration for the type of the identity provider.
   *
   * @generated from field: zitadel.idp.v2.IDPConfig config = 6;
   */
  config?: IDPConfig;
};

/**
 * Describes the message zitadel.idp.v2.IDP.
 * Use `create(IDPSchema)` to create a new message.
 */
export const IDPSchema: GenMessage<IDP> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 0);

/**
 * @generated from message zitadel.idp.v2.IDPConfig
 */
export type IDPConfig = Message<"zitadel.idp.v2.IDPConfig"> & {
  /**
   * @generated from field: zitadel.idp.v2.Options options = 1;
   */
  options?: Options;

  /**
   * @generated from oneof zitadel.idp.v2.IDPConfig.config
   */
  config: {
    /**
     * @generated from field: zitadel.idp.v2.LDAPConfig ldap = 2;
     */
    value: LDAPConfig;
    case: "ldap";
  } | {
    /**
     * @generated from field: zitadel.idp.v2.GoogleConfig google = 3;
     */
    value: GoogleConfig;
    case: "google";
  } | {
    /**
     * @generated from field: zitadel.idp.v2.OAuthConfig oauth = 4;
     */
    value: OAuthConfig;
    case: "oauth";
  } | {
    /**
     * @generated from field: zitadel.idp.v2.GenericOIDCConfig oidc = 5;
     */
    value: GenericOIDCConfig;
    case: "oidc";
  } | {
    /**
     * @generated from field: zitadel.idp.v2.JWTConfig jwt = 6;
     */
    value: JWTConfig;
    case: "jwt";
  } | {
    /**
     * @generated from field: zitadel.idp.v2.GitHubConfig github = 7;
     */
    value: GitHubConfig;
    case: "github";
  } | {
    /**
     * @generated from field: zitadel.idp.v2.GitHubEnterpriseServerConfig github_es = 8;
     */
    value: GitHubEnterpriseServerConfig;
    case: "githubEs";
  } | {
    /**
     * @generated from field: zitadel.idp.v2.GitLabConfig gitlab = 9;
     */
    value: GitLabConfig;
    case: "gitlab";
  } | {
    /**
     * @generated from field: zitadel.idp.v2.GitLabSelfHostedConfig gitlab_self_hosted = 10;
     */
    value: GitLabSelfHostedConfig;
    case: "gitlabSelfHosted";
  } | {
    /**
     * @generated from field: zitadel.idp.v2.AzureADConfig azure_ad = 11;
     */
    value: AzureADConfig;
    case: "azureAd";
  } | {
    /**
     * @generated from field: zitadel.idp.v2.AppleConfig apple = 12;
     */
    value: AppleConfig;
    case: "apple";
  } | {
    /**
     * @generated from field: zitadel.idp.v2.SAMLConfig saml = 13;
     */
    value: SAMLConfig;
    case: "saml";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message zitadel.idp.v2.IDPConfig.
 * Use `create(IDPConfigSchema)` to create a new message.
 */
export const IDPConfigSchema: GenMessage<IDPConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 1);

/**
 * @generated from message zitadel.idp.v2.JWTConfig
 */
export type JWTConfig = Message<"zitadel.idp.v2.JWTConfig"> & {
  /**
   * The endpoint where the JWT can be extracted.
   *
   * @generated from field: string jwt_endpoint = 1;
   */
  jwtEndpoint: string;

  /**
   * The issuer of the JWT (for validation).
   *
   * @generated from field: string issuer = 2;
   */
  issuer: string;

  /**
   * The endpoint to the key (JWK) which is used to sign the JWT with.
   *
   * @generated from field: string keys_endpoint = 3;
   */
  keysEndpoint: string;

  /**
   * The name of the header where the JWT is sent in, default is authorization.
   *
   * @generated from field: string header_name = 4;
   */
  headerName: string;
};

/**
 * Describes the message zitadel.idp.v2.JWTConfig.
 * Use `create(JWTConfigSchema)` to create a new message.
 */
export const JWTConfigSchema: GenMessage<JWTConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 2);

/**
 * @generated from message zitadel.idp.v2.OAuthConfig
 */
export type OAuthConfig = Message<"zitadel.idp.v2.OAuthConfig"> & {
  /**
   * Client id generated by the identity provider.
   *
   * @generated from field: string client_id = 1;
   */
  clientId: string;

  /**
   * The endpoint where ZITADEL send the user to authenticate.
   *
   * @generated from field: string authorization_endpoint = 2;
   */
  authorizationEndpoint: string;

  /**
   * The endpoint where ZITADEL can get the token.
   *
   * @generated from field: string token_endpoint = 3;
   */
  tokenEndpoint: string;

  /**
   * The endpoint where ZITADEL can get the user information.
   *
   * @generated from field: string user_endpoint = 4;
   */
  userEndpoint: string;

  /**
   * The scopes requested by ZITADEL during the request on the identity provider.
   *
   * @generated from field: repeated string scopes = 5;
   */
  scopes: string[];

  /**
   * Defines how the attribute is called where ZITADEL can get the id of the user.
   *
   * @generated from field: string id_attribute = 6;
   */
  idAttribute: string;
};

/**
 * Describes the message zitadel.idp.v2.OAuthConfig.
 * Use `create(OAuthConfigSchema)` to create a new message.
 */
export const OAuthConfigSchema: GenMessage<OAuthConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 3);

/**
 * @generated from message zitadel.idp.v2.GenericOIDCConfig
 */
export type GenericOIDCConfig = Message<"zitadel.idp.v2.GenericOIDCConfig"> & {
  /**
   * The OIDC issuer of the identity provider.
   *
   * @generated from field: string issuer = 1;
   */
  issuer: string;

  /**
   * Client id generated by the identity provider.
   *
   * @generated from field: string client_id = 2;
   */
  clientId: string;

  /**
   * The scopes requested by ZITADEL during the request on the identity provider.
   *
   * @generated from field: repeated string scopes = 3;
   */
  scopes: string[];

  /**
   * If true, provider information get mapped from the id token, not from the userinfo endpoint.
   *
   * @generated from field: bool is_id_token_mapping = 4;
   */
  isIdTokenMapping: boolean;
};

/**
 * Describes the message zitadel.idp.v2.GenericOIDCConfig.
 * Use `create(GenericOIDCConfigSchema)` to create a new message.
 */
export const GenericOIDCConfigSchema: GenMessage<GenericOIDCConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 4);

/**
 * @generated from message zitadel.idp.v2.GitHubConfig
 */
export type GitHubConfig = Message<"zitadel.idp.v2.GitHubConfig"> & {
  /**
   * The client ID of the GitHub App.
   *
   * @generated from field: string client_id = 1;
   */
  clientId: string;

  /**
   * The scopes requested by ZITADEL during the request to GitHub.
   *
   * @generated from field: repeated string scopes = 2;
   */
  scopes: string[];
};

/**
 * Describes the message zitadel.idp.v2.GitHubConfig.
 * Use `create(GitHubConfigSchema)` to create a new message.
 */
export const GitHubConfigSchema: GenMessage<GitHubConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 5);

/**
 * @generated from message zitadel.idp.v2.GitHubEnterpriseServerConfig
 */
export type GitHubEnterpriseServerConfig = Message<"zitadel.idp.v2.GitHubEnterpriseServerConfig"> & {
  /**
   * The client ID of the GitHub App.
   *
   * @generated from field: string client_id = 1;
   */
  clientId: string;

  /**
   * @generated from field: string authorization_endpoint = 2;
   */
  authorizationEndpoint: string;

  /**
   * @generated from field: string token_endpoint = 3;
   */
  tokenEndpoint: string;

  /**
   * @generated from field: string user_endpoint = 4;
   */
  userEndpoint: string;

  /**
   * The scopes requested by ZITADEL during the request to GitHub.
   *
   * @generated from field: repeated string scopes = 5;
   */
  scopes: string[];
};

/**
 * Describes the message zitadel.idp.v2.GitHubEnterpriseServerConfig.
 * Use `create(GitHubEnterpriseServerConfigSchema)` to create a new message.
 */
export const GitHubEnterpriseServerConfigSchema: GenMessage<GitHubEnterpriseServerConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 6);

/**
 * @generated from message zitadel.idp.v2.GoogleConfig
 */
export type GoogleConfig = Message<"zitadel.idp.v2.GoogleConfig"> & {
  /**
   * Client id of the Google application.
   *
   * @generated from field: string client_id = 1;
   */
  clientId: string;

  /**
   * The scopes requested by ZITADEL during the request to Google.
   *
   * @generated from field: repeated string scopes = 2;
   */
  scopes: string[];
};

/**
 * Describes the message zitadel.idp.v2.GoogleConfig.
 * Use `create(GoogleConfigSchema)` to create a new message.
 */
export const GoogleConfigSchema: GenMessage<GoogleConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 7);

/**
 * @generated from message zitadel.idp.v2.GitLabConfig
 */
export type GitLabConfig = Message<"zitadel.idp.v2.GitLabConfig"> & {
  /**
   * Client id of the GitLab application.
   *
   * @generated from field: string client_id = 1;
   */
  clientId: string;

  /**
   * The scopes requested by ZITADEL during the request to GitLab.
   *
   * @generated from field: repeated string scopes = 2;
   */
  scopes: string[];
};

/**
 * Describes the message zitadel.idp.v2.GitLabConfig.
 * Use `create(GitLabConfigSchema)` to create a new message.
 */
export const GitLabConfigSchema: GenMessage<GitLabConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 8);

/**
 * @generated from message zitadel.idp.v2.GitLabSelfHostedConfig
 */
export type GitLabSelfHostedConfig = Message<"zitadel.idp.v2.GitLabSelfHostedConfig"> & {
  /**
   * @generated from field: string issuer = 1;
   */
  issuer: string;

  /**
   * Client id of the GitLab application.
   *
   * @generated from field: string client_id = 2;
   */
  clientId: string;

  /**
   * The scopes requested by ZITADEL during the request to GitLab.
   *
   * @generated from field: repeated string scopes = 3;
   */
  scopes: string[];
};

/**
 * Describes the message zitadel.idp.v2.GitLabSelfHostedConfig.
 * Use `create(GitLabSelfHostedConfigSchema)` to create a new message.
 */
export const GitLabSelfHostedConfigSchema: GenMessage<GitLabSelfHostedConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 9);

/**
 * @generated from message zitadel.idp.v2.LDAPConfig
 */
export type LDAPConfig = Message<"zitadel.idp.v2.LDAPConfig"> & {
  /**
   * @generated from field: repeated string servers = 1;
   */
  servers: string[];

  /**
   * @generated from field: bool start_tls = 2;
   */
  startTls: boolean;

  /**
   * @generated from field: string base_dn = 3;
   */
  baseDn: string;

  /**
   * @generated from field: string bind_dn = 4;
   */
  bindDn: string;

  /**
   * @generated from field: string user_base = 5;
   */
  userBase: string;

  /**
   * @generated from field: repeated string user_object_classes = 6;
   */
  userObjectClasses: string[];

  /**
   * @generated from field: repeated string user_filters = 7;
   */
  userFilters: string[];

  /**
   * @generated from field: google.protobuf.Duration timeout = 8;
   */
  timeout?: Duration;

  /**
   * @generated from field: zitadel.idp.v2.LDAPAttributes attributes = 9;
   */
  attributes?: LDAPAttributes;
};

/**
 * Describes the message zitadel.idp.v2.LDAPConfig.
 * Use `create(LDAPConfigSchema)` to create a new message.
 */
export const LDAPConfigSchema: GenMessage<LDAPConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 10);

/**
 * @generated from message zitadel.idp.v2.SAMLConfig
 */
export type SAMLConfig = Message<"zitadel.idp.v2.SAMLConfig"> & {
  /**
   * Metadata of the SAML identity provider.
   *
   * @generated from field: bytes metadata_xml = 1;
   */
  metadataXml: Uint8Array;

  /**
   * Binding which defines the type of communication with the identity provider.
   *
   * @generated from field: zitadel.idp.v2.SAMLBinding binding = 2;
   */
  binding: SAMLBinding;

  /**
   * Boolean which defines if the authentication requests are signed.
   *
   * @generated from field: bool with_signed_request = 3;
   */
  withSignedRequest: boolean;

  /**
   * `nameid-format` for the SAML Request.
   *
   * @generated from field: zitadel.idp.v2.SAMLNameIDFormat name_id_format = 4;
   */
  nameIdFormat: SAMLNameIDFormat;

  /**
   * Optional name of the attribute, which will be used to map the user
   * in case the nameid-format returned is `urn:oasis:names:tc:SAML:2.0:nameid-format:transient`.
   *
   * @generated from field: optional string transient_mapping_attribute_name = 5;
   */
  transientMappingAttributeName?: string;
};

/**
 * Describes the message zitadel.idp.v2.SAMLConfig.
 * Use `create(SAMLConfigSchema)` to create a new message.
 */
export const SAMLConfigSchema: GenMessage<SAMLConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 11);

/**
 * @generated from message zitadel.idp.v2.AzureADConfig
 */
export type AzureADConfig = Message<"zitadel.idp.v2.AzureADConfig"> & {
  /**
   * Client id of the Azure AD application
   *
   * @generated from field: string client_id = 1;
   */
  clientId: string;

  /**
   * Defines what user accounts should be able to login (Personal, Organizational, All).
   *
   * @generated from field: zitadel.idp.v2.AzureADTenant tenant = 2;
   */
  tenant?: AzureADTenant;

  /**
   * Azure AD doesn't send if the email has been verified. Enable this if the user email should always be added verified in ZITADEL (no verification emails will be sent).
   *
   * @generated from field: bool email_verified = 3;
   */
  emailVerified: boolean;

  /**
   * The scopes requested by ZITADEL during the request to Azure AD.
   *
   * @generated from field: repeated string scopes = 4;
   */
  scopes: string[];
};

/**
 * Describes the message zitadel.idp.v2.AzureADConfig.
 * Use `create(AzureADConfigSchema)` to create a new message.
 */
export const AzureADConfigSchema: GenMessage<AzureADConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 12);

/**
 * @generated from message zitadel.idp.v2.Options
 */
export type Options = Message<"zitadel.idp.v2.Options"> & {
  /**
   * Enable if users should be able to link an existing ZITADEL user with an external account.
   *
   * @generated from field: bool is_linking_allowed = 1;
   */
  isLinkingAllowed: boolean;

  /**
   * Enable if users should be able to create a new account in ZITADEL when using an external account.
   *
   * @generated from field: bool is_creation_allowed = 2;
   */
  isCreationAllowed: boolean;

  /**
   * Enable if a new account in ZITADEL should be created automatically when login with an external account.
   *
   * @generated from field: bool is_auto_creation = 3;
   */
  isAutoCreation: boolean;

  /**
   * Enable if a the ZITADEL account fields should be updated automatically on each login.
   *
   * @generated from field: bool is_auto_update = 4;
   */
  isAutoUpdate: boolean;

  /**
   * Enable if users should get prompted to link an existing ZITADEL user to an external account if the selected attribute matches.
   *
   * @generated from field: zitadel.idp.v2.AutoLinkingOption auto_linking = 5;
   */
  autoLinking: AutoLinkingOption;
};

/**
 * Describes the message zitadel.idp.v2.Options.
 * Use `create(OptionsSchema)` to create a new message.
 */
export const OptionsSchema: GenMessage<Options> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 13);

/**
 * @generated from message zitadel.idp.v2.LDAPAttributes
 */
export type LDAPAttributes = Message<"zitadel.idp.v2.LDAPAttributes"> & {
  /**
   * @generated from field: string id_attribute = 1;
   */
  idAttribute: string;

  /**
   * @generated from field: string first_name_attribute = 2;
   */
  firstNameAttribute: string;

  /**
   * @generated from field: string last_name_attribute = 3;
   */
  lastNameAttribute: string;

  /**
   * @generated from field: string display_name_attribute = 4;
   */
  displayNameAttribute: string;

  /**
   * @generated from field: string nick_name_attribute = 5;
   */
  nickNameAttribute: string;

  /**
   * @generated from field: string preferred_username_attribute = 6;
   */
  preferredUsernameAttribute: string;

  /**
   * @generated from field: string email_attribute = 7;
   */
  emailAttribute: string;

  /**
   * @generated from field: string email_verified_attribute = 8;
   */
  emailVerifiedAttribute: string;

  /**
   * @generated from field: string phone_attribute = 9;
   */
  phoneAttribute: string;

  /**
   * @generated from field: string phone_verified_attribute = 10;
   */
  phoneVerifiedAttribute: string;

  /**
   * @generated from field: string preferred_language_attribute = 11;
   */
  preferredLanguageAttribute: string;

  /**
   * @generated from field: string avatar_url_attribute = 12;
   */
  avatarUrlAttribute: string;

  /**
   * @generated from field: string profile_attribute = 13;
   */
  profileAttribute: string;
};

/**
 * Describes the message zitadel.idp.v2.LDAPAttributes.
 * Use `create(LDAPAttributesSchema)` to create a new message.
 */
export const LDAPAttributesSchema: GenMessage<LDAPAttributes> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 14);

/**
 * @generated from message zitadel.idp.v2.AzureADTenant
 */
export type AzureADTenant = Message<"zitadel.idp.v2.AzureADTenant"> & {
  /**
   * @generated from oneof zitadel.idp.v2.AzureADTenant.type
   */
  type: {
    /**
     * @generated from field: zitadel.idp.v2.AzureADTenantType tenant_type = 1;
     */
    value: AzureADTenantType;
    case: "tenantType";
  } | {
    /**
     * @generated from field: string tenant_id = 2;
     */
    value: string;
    case: "tenantId";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message zitadel.idp.v2.AzureADTenant.
 * Use `create(AzureADTenantSchema)` to create a new message.
 */
export const AzureADTenantSchema: GenMessage<AzureADTenant> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 15);

/**
 * @generated from message zitadel.idp.v2.AppleConfig
 */
export type AppleConfig = Message<"zitadel.idp.v2.AppleConfig"> & {
  /**
   * Client id (App ID or Service ID) provided by Apple.
   *
   * @generated from field: string client_id = 1;
   */
  clientId: string;

  /**
   * Team ID provided by Apple.
   *
   * @generated from field: string team_id = 2;
   */
  teamId: string;

  /**
   * ID of the private key generated by Apple.
   *
   * @generated from field: string key_id = 3;
   */
  keyId: string;

  /**
   * The scopes requested by ZITADEL during the request to Apple.
   *
   * @generated from field: repeated string scopes = 4;
   */
  scopes: string[];
};

/**
 * Describes the message zitadel.idp.v2.AppleConfig.
 * Use `create(AppleConfigSchema)` to create a new message.
 */
export const AppleConfigSchema: GenMessage<AppleConfig> = /*@__PURE__*/
  messageDesc(file_zitadel_idp_v2_idp, 16);

/**
 * @generated from enum zitadel.idp.v2.IDPState
 */
export enum IDPState {
  /**
   * @generated from enum value: IDP_STATE_UNSPECIFIED = 0;
   */
  IDP_STATE_UNSPECIFIED = 0,

  /**
   * @generated from enum value: IDP_STATE_ACTIVE = 1;
   */
  IDP_STATE_ACTIVE = 1,

  /**
   * @generated from enum value: IDP_STATE_INACTIVE = 2;
   */
  IDP_STATE_INACTIVE = 2,

  /**
   * @generated from enum value: IDP_STATE_REMOVED = 3;
   */
  IDP_STATE_REMOVED = 3,

  /**
   * @generated from enum value: IDP_STATE_MIGRATED = 4;
   */
  IDP_STATE_MIGRATED = 4,
}

/**
 * Describes the enum zitadel.idp.v2.IDPState.
 */
export const IDPStateSchema: GenEnum<IDPState> = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 0);

/**
 * @generated from enum zitadel.idp.v2.IDPType
 */
export enum IDPType {
  /**
   * @generated from enum value: IDP_TYPE_UNSPECIFIED = 0;
   */
  IDP_TYPE_UNSPECIFIED = 0,

  /**
   * @generated from enum value: IDP_TYPE_OIDC = 1;
   */
  IDP_TYPE_OIDC = 1,

  /**
   * @generated from enum value: IDP_TYPE_JWT = 2;
   */
  IDP_TYPE_JWT = 2,

  /**
   * @generated from enum value: IDP_TYPE_LDAP = 3;
   */
  IDP_TYPE_LDAP = 3,

  /**
   * @generated from enum value: IDP_TYPE_OAUTH = 4;
   */
  IDP_TYPE_OAUTH = 4,

  /**
   * @generated from enum value: IDP_TYPE_AZURE_AD = 5;
   */
  IDP_TYPE_AZURE_AD = 5,

  /**
   * @generated from enum value: IDP_TYPE_GITHUB = 6;
   */
  IDP_TYPE_GITHUB = 6,

  /**
   * @generated from enum value: IDP_TYPE_GITHUB_ES = 7;
   */
  IDP_TYPE_GITHUB_ES = 7,

  /**
   * @generated from enum value: IDP_TYPE_GITLAB = 8;
   */
  IDP_TYPE_GITLAB = 8,

  /**
   * @generated from enum value: IDP_TYPE_GITLAB_SELF_HOSTED = 9;
   */
  IDP_TYPE_GITLAB_SELF_HOSTED = 9,

  /**
   * @generated from enum value: IDP_TYPE_GOOGLE = 10;
   */
  IDP_TYPE_GOOGLE = 10,

  /**
   * @generated from enum value: IDP_TYPE_APPLE = 11;
   */
  IDP_TYPE_APPLE = 11,

  /**
   * @generated from enum value: IDP_TYPE_SAML = 12;
   */
  IDP_TYPE_SAML = 12,
}

/**
 * Describes the enum zitadel.idp.v2.IDPType.
 */
export const IDPTypeSchema: GenEnum<IDPType> = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 1);

/**
 * @generated from enum zitadel.idp.v2.SAMLBinding
 */
export enum SAMLBinding {
  /**
   * @generated from enum value: SAML_BINDING_UNSPECIFIED = 0;
   */
  SAML_BINDING_UNSPECIFIED = 0,

  /**
   * @generated from enum value: SAML_BINDING_POST = 1;
   */
  SAML_BINDING_POST = 1,

  /**
   * @generated from enum value: SAML_BINDING_REDIRECT = 2;
   */
  SAML_BINDING_REDIRECT = 2,

  /**
   * @generated from enum value: SAML_BINDING_ARTIFACT = 3;
   */
  SAML_BINDING_ARTIFACT = 3,
}

/**
 * Describes the enum zitadel.idp.v2.SAMLBinding.
 */
export const SAMLBindingSchema: GenEnum<SAMLBinding> = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 2);

/**
 * @generated from enum zitadel.idp.v2.SAMLNameIDFormat
 */
export enum SAMLNameIDFormat {
  /**
   * @generated from enum value: SAML_NAME_ID_FORMAT_UNSPECIFIED = 0;
   */
  SAML_NAME_ID_FORMAT_UNSPECIFIED = 0,

  /**
   * @generated from enum value: SAML_NAME_ID_FORMAT_EMAIL_ADDRESS = 1;
   */
  SAML_NAME_ID_FORMAT_EMAIL_ADDRESS = 1,

  /**
   * @generated from enum value: SAML_NAME_ID_FORMAT_PERSISTENT = 2;
   */
  SAML_NAME_ID_FORMAT_PERSISTENT = 2,

  /**
   * @generated from enum value: SAML_NAME_ID_FORMAT_TRANSIENT = 3;
   */
  SAML_NAME_ID_FORMAT_TRANSIENT = 3,
}

/**
 * Describes the enum zitadel.idp.v2.SAMLNameIDFormat.
 */
export const SAMLNameIDFormatSchema: GenEnum<SAMLNameIDFormat> = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 3);

/**
 * @generated from enum zitadel.idp.v2.AutoLinkingOption
 */
export enum AutoLinkingOption {
  /**
   * AUTO_LINKING_OPTION_UNSPECIFIED disables the auto linking prompt.
   *
   * @generated from enum value: AUTO_LINKING_OPTION_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * AUTO_LINKING_OPTION_USERNAME will use the username of the external user to check for a corresponding ZITADEL user.
   *
   * @generated from enum value: AUTO_LINKING_OPTION_USERNAME = 1;
   */
  USERNAME = 1,

  /**
   * AUTO_LINKING_OPTION_EMAIL  will use the email of the external user to check for a corresponding ZITADEL user with the same verified email
   * Note that in case multiple users match, no prompt will be shown.
   *
   * @generated from enum value: AUTO_LINKING_OPTION_EMAIL = 2;
   */
  EMAIL = 2,
}

/**
 * Describes the enum zitadel.idp.v2.AutoLinkingOption.
 */
export const AutoLinkingOptionSchema: GenEnum<AutoLinkingOption> = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 4);

/**
 * @generated from enum zitadel.idp.v2.AzureADTenantType
 */
export enum AzureADTenantType {
  /**
   * @generated from enum value: AZURE_AD_TENANT_TYPE_COMMON = 0;
   */
  AZURE_AD_TENANT_TYPE_COMMON = 0,

  /**
   * @generated from enum value: AZURE_AD_TENANT_TYPE_ORGANISATIONS = 1;
   */
  AZURE_AD_TENANT_TYPE_ORGANISATIONS = 1,

  /**
   * @generated from enum value: AZURE_AD_TENANT_TYPE_CONSUMERS = 2;
   */
  AZURE_AD_TENANT_TYPE_CONSUMERS = 2,
}

/**
 * Describes the enum zitadel.idp.v2.AzureADTenantType.
 */
export const AzureADTenantTypeSchema: GenEnum<AzureADTenantType> = /*@__PURE__*/
  enumDesc(file_zitadel_idp_v2_idp, 5);
