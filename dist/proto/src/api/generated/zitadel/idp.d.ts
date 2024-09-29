/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../google/protobuf/duration.js";
import { ObjectDetails, TextQueryMethod } from "./object.js";
export declare const protobufPackage = "zitadel.idp.v1";
export declare enum IDPState {
    IDP_STATE_UNSPECIFIED = 0,
    IDP_STATE_ACTIVE = 1,
    IDP_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function iDPStateFromJSON(object: any): IDPState;
export declare function iDPStateToJSON(object: IDPState): string;
export declare enum IDPStylingType {
    STYLING_TYPE_UNSPECIFIED = 0,
    STYLING_TYPE_GOOGLE = 1,
    UNRECOGNIZED = -1
}
export declare function iDPStylingTypeFromJSON(object: any): IDPStylingType;
export declare function iDPStylingTypeToJSON(object: IDPStylingType): string;
export declare enum IDPType {
    IDP_TYPE_UNSPECIFIED = 0,
    IDP_TYPE_OIDC = 1,
    IDP_TYPE_JWT = 3,
    UNRECOGNIZED = -1
}
export declare function iDPTypeFromJSON(object: any): IDPType;
export declare function iDPTypeToJSON(object: IDPType): string;
export declare enum IDPOwnerType {
    IDP_OWNER_TYPE_UNSPECIFIED = 0,
    IDP_OWNER_TYPE_SYSTEM = 1,
    IDP_OWNER_TYPE_ORG = 2,
    UNRECOGNIZED = -1
}
export declare function iDPOwnerTypeFromJSON(object: any): IDPOwnerType;
export declare function iDPOwnerTypeToJSON(object: IDPOwnerType): string;
export declare enum OIDCMappingField {
    OIDC_MAPPING_FIELD_UNSPECIFIED = 0,
    OIDC_MAPPING_FIELD_PREFERRED_USERNAME = 1,
    OIDC_MAPPING_FIELD_EMAIL = 2,
    UNRECOGNIZED = -1
}
export declare function oIDCMappingFieldFromJSON(object: any): OIDCMappingField;
export declare function oIDCMappingFieldToJSON(object: OIDCMappingField): string;
export declare enum IDPFieldName {
    IDP_FIELD_NAME_UNSPECIFIED = 0,
    IDP_FIELD_NAME_NAME = 1,
    UNRECOGNIZED = -1
}
export declare function iDPFieldNameFromJSON(object: any): IDPFieldName;
export declare function iDPFieldNameToJSON(object: IDPFieldName): string;
export declare enum ProviderType {
    PROVIDER_TYPE_UNSPECIFIED = 0,
    PROVIDER_TYPE_OIDC = 1,
    PROVIDER_TYPE_JWT = 2,
    PROVIDER_TYPE_LDAP = 3,
    PROVIDER_TYPE_OAUTH = 4,
    PROVIDER_TYPE_AZURE_AD = 5,
    PROVIDER_TYPE_GITHUB = 6,
    PROVIDER_TYPE_GITHUB_ES = 7,
    PROVIDER_TYPE_GITLAB = 8,
    PROVIDER_TYPE_GITLAB_SELF_HOSTED = 9,
    PROVIDER_TYPE_GOOGLE = 10,
    PROVIDER_TYPE_APPLE = 11,
    PROVIDER_TYPE_SAML = 12,
    UNRECOGNIZED = -1
}
export declare function providerTypeFromJSON(object: any): ProviderType;
export declare function providerTypeToJSON(object: ProviderType): string;
export declare enum SAMLBinding {
    SAML_BINDING_UNSPECIFIED = 0,
    SAML_BINDING_POST = 1,
    SAML_BINDING_REDIRECT = 2,
    SAML_BINDING_ARTIFACT = 3,
    UNRECOGNIZED = -1
}
export declare function sAMLBindingFromJSON(object: any): SAMLBinding;
export declare function sAMLBindingToJSON(object: SAMLBinding): string;
export declare enum SAMLNameIDFormat {
    SAML_NAME_ID_FORMAT_UNSPECIFIED = 0,
    SAML_NAME_ID_FORMAT_EMAIL_ADDRESS = 1,
    SAML_NAME_ID_FORMAT_PERSISTENT = 2,
    SAML_NAME_ID_FORMAT_TRANSIENT = 3,
    UNRECOGNIZED = -1
}
export declare function sAMLNameIDFormatFromJSON(object: any): SAMLNameIDFormat;
export declare function sAMLNameIDFormatToJSON(object: SAMLNameIDFormat): string;
export declare enum AutoLinkingOption {
    AUTO_LINKING_OPTION_UNSPECIFIED = 0,
    AUTO_LINKING_OPTION_USERNAME = 1,
    AUTO_LINKING_OPTION_EMAIL = 2,
    UNRECOGNIZED = -1
}
export declare function autoLinkingOptionFromJSON(object: any): AutoLinkingOption;
export declare function autoLinkingOptionToJSON(object: AutoLinkingOption): string;
export declare enum AzureADTenantType {
    AZURE_AD_TENANT_TYPE_COMMON = 0,
    AZURE_AD_TENANT_TYPE_ORGANISATIONS = 1,
    AZURE_AD_TENANT_TYPE_CONSUMERS = 2,
    UNRECOGNIZED = -1
}
export declare function azureADTenantTypeFromJSON(object: any): AzureADTenantType;
export declare function azureADTenantTypeToJSON(object: AzureADTenantType): string;
export interface IDP {
    id: string;
    details: ObjectDetails | undefined;
    state: IDPState;
    name: string;
    stylingType: IDPStylingType;
    owner: IDPOwnerType;
    oidcConfig?: OIDCConfig | undefined;
    jwtConfig?: JWTConfig | undefined;
    autoRegister: boolean;
}
export interface IDPUserLink {
    userId: string;
    idpId: string;
    idpName: string;
    providedUserId: string;
    providedUserName: string;
    idpType: IDPType;
}
export interface IDPLoginPolicyLink {
    idpId: string;
    idpName: string;
    idpType: IDPType;
}
export interface OIDCConfig {
    clientId: string;
    issuer: string;
    scopes: string[];
    displayNameMapping: OIDCMappingField;
    usernameMapping: OIDCMappingField;
}
export interface JWTConfig {
    jwtEndpoint: string;
    issuer: string;
    keysEndpoint: string;
    headerName: string;
}
export interface IDPIDQuery {
    id: string;
}
export interface IDPNameQuery {
    name: string;
    method: TextQueryMethod;
}
export interface IDPOwnerTypeQuery {
    ownerType: IDPOwnerType;
}
export interface Provider {
    id: string;
    details: ObjectDetails | undefined;
    state: IDPState;
    name: string;
    owner: IDPOwnerType;
    type: ProviderType;
    config: ProviderConfig | undefined;
}
export interface ProviderConfig {
    options: Options | undefined;
    ldap?: LDAPConfig | undefined;
    google?: GoogleConfig | undefined;
    oauth?: OAuthConfig | undefined;
    oidc?: GenericOIDCConfig | undefined;
    jwt?: JWTConfig | undefined;
    github?: GitHubConfig | undefined;
    githubEs?: GitHubEnterpriseServerConfig | undefined;
    gitlab?: GitLabConfig | undefined;
    gitlabSelfHosted?: GitLabSelfHostedConfig | undefined;
    azureAd?: AzureADConfig | undefined;
    apple?: AppleConfig | undefined;
    saml?: SAMLConfig | undefined;
}
export interface OAuthConfig {
    clientId: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
    idAttribute: string;
}
export interface GenericOIDCConfig {
    issuer: string;
    clientId: string;
    scopes: string[];
    isIdTokenMapping: boolean;
}
export interface GitHubConfig {
    clientId: string;
    scopes: string[];
}
export interface GitHubEnterpriseServerConfig {
    clientId: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
}
export interface GoogleConfig {
    clientId: string;
    scopes: string[];
}
export interface GitLabConfig {
    clientId: string;
    scopes: string[];
}
export interface GitLabSelfHostedConfig {
    issuer: string;
    clientId: string;
    scopes: string[];
}
export interface LDAPConfig {
    servers: string[];
    startTls: boolean;
    baseDn: string;
    bindDn: string;
    userBase: string;
    userObjectClasses: string[];
    userFilters: string[];
    timeout: Duration | undefined;
    attributes: LDAPAttributes | undefined;
}
export interface SAMLConfig {
    metadataXml: Buffer;
    binding: SAMLBinding;
    withSignedRequest: boolean;
    nameIdFormat: SAMLNameIDFormat;
    transientMappingAttributeName?: string | undefined;
}
export interface AzureADConfig {
    clientId: string;
    tenant: AzureADTenant | undefined;
    emailVerified: boolean;
    scopes: string[];
}
export interface Options {
    isLinkingAllowed: boolean;
    isCreationAllowed: boolean;
    isAutoCreation: boolean;
    isAutoUpdate: boolean;
    autoLinking: AutoLinkingOption;
}
export interface LDAPAttributes {
    idAttribute: string;
    firstNameAttribute: string;
    lastNameAttribute: string;
    displayNameAttribute: string;
    nickNameAttribute: string;
    preferredUsernameAttribute: string;
    emailAttribute: string;
    emailVerifiedAttribute: string;
    phoneAttribute: string;
    phoneVerifiedAttribute: string;
    preferredLanguageAttribute: string;
    avatarUrlAttribute: string;
    profileAttribute: string;
}
export interface AzureADTenant {
    tenantType?: AzureADTenantType | undefined;
    tenantId?: string | undefined;
}
export interface AppleConfig {
    clientId: string;
    teamId: string;
    keyId: string;
    scopes: string[];
}
export declare const IDP: MessageFns<IDP>;
export declare const IDPUserLink: MessageFns<IDPUserLink>;
export declare const IDPLoginPolicyLink: MessageFns<IDPLoginPolicyLink>;
export declare const OIDCConfig: MessageFns<OIDCConfig>;
export declare const JWTConfig: MessageFns<JWTConfig>;
export declare const IDPIDQuery: MessageFns<IDPIDQuery>;
export declare const IDPNameQuery: MessageFns<IDPNameQuery>;
export declare const IDPOwnerTypeQuery: MessageFns<IDPOwnerTypeQuery>;
export declare const Provider: MessageFns<Provider>;
export declare const ProviderConfig: MessageFns<ProviderConfig>;
export declare const OAuthConfig: MessageFns<OAuthConfig>;
export declare const GenericOIDCConfig: MessageFns<GenericOIDCConfig>;
export declare const GitHubConfig: MessageFns<GitHubConfig>;
export declare const GitHubEnterpriseServerConfig: MessageFns<GitHubEnterpriseServerConfig>;
export declare const GoogleConfig: MessageFns<GoogleConfig>;
export declare const GitLabConfig: MessageFns<GitLabConfig>;
export declare const GitLabSelfHostedConfig: MessageFns<GitLabSelfHostedConfig>;
export declare const LDAPConfig: MessageFns<LDAPConfig>;
export declare const SAMLConfig: MessageFns<SAMLConfig>;
export declare const AzureADConfig: MessageFns<AzureADConfig>;
export declare const Options: MessageFns<Options>;
export declare const LDAPAttributes: MessageFns<LDAPAttributes>;
export declare const AzureADTenant: MessageFns<AzureADTenant>;
export declare const AppleConfig: MessageFns<AppleConfig>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
