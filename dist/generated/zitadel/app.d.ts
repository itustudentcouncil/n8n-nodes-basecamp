/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../google/protobuf/duration.js";
import { LocalizedMessage } from "./message.js";
import { ObjectDetails, TextQueryMethod } from "./object.js";
export declare const protobufPackage = "zitadel.app.v1";
export declare enum AppState {
    APP_STATE_UNSPECIFIED = 0,
    APP_STATE_ACTIVE = 1,
    APP_STATE_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function appStateFromJSON(object: any): AppState;
export declare function appStateToJSON(object: AppState): string;
export declare enum OIDCResponseType {
    OIDC_RESPONSE_TYPE_CODE = 0,
    OIDC_RESPONSE_TYPE_ID_TOKEN = 1,
    OIDC_RESPONSE_TYPE_ID_TOKEN_TOKEN = 2,
    UNRECOGNIZED = -1
}
export declare function oIDCResponseTypeFromJSON(object: any): OIDCResponseType;
export declare function oIDCResponseTypeToJSON(object: OIDCResponseType): string;
export declare enum OIDCGrantType {
    OIDC_GRANT_TYPE_AUTHORIZATION_CODE = 0,
    OIDC_GRANT_TYPE_IMPLICIT = 1,
    OIDC_GRANT_TYPE_REFRESH_TOKEN = 2,
    OIDC_GRANT_TYPE_DEVICE_CODE = 3,
    OIDC_GRANT_TYPE_TOKEN_EXCHANGE = 4,
    UNRECOGNIZED = -1
}
export declare function oIDCGrantTypeFromJSON(object: any): OIDCGrantType;
export declare function oIDCGrantTypeToJSON(object: OIDCGrantType): string;
export declare enum OIDCAppType {
    OIDC_APP_TYPE_WEB = 0,
    OIDC_APP_TYPE_USER_AGENT = 1,
    OIDC_APP_TYPE_NATIVE = 2,
    UNRECOGNIZED = -1
}
export declare function oIDCAppTypeFromJSON(object: any): OIDCAppType;
export declare function oIDCAppTypeToJSON(object: OIDCAppType): string;
export declare enum OIDCAuthMethodType {
    OIDC_AUTH_METHOD_TYPE_BASIC = 0,
    OIDC_AUTH_METHOD_TYPE_POST = 1,
    OIDC_AUTH_METHOD_TYPE_NONE = 2,
    OIDC_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 3,
    UNRECOGNIZED = -1
}
export declare function oIDCAuthMethodTypeFromJSON(object: any): OIDCAuthMethodType;
export declare function oIDCAuthMethodTypeToJSON(object: OIDCAuthMethodType): string;
export declare enum OIDCVersion {
    OIDC_VERSION_1_0 = 0,
    UNRECOGNIZED = -1
}
export declare function oIDCVersionFromJSON(object: any): OIDCVersion;
export declare function oIDCVersionToJSON(object: OIDCVersion): string;
export declare enum OIDCTokenType {
    OIDC_TOKEN_TYPE_BEARER = 0,
    OIDC_TOKEN_TYPE_JWT = 1,
    UNRECOGNIZED = -1
}
export declare function oIDCTokenTypeFromJSON(object: any): OIDCTokenType;
export declare function oIDCTokenTypeToJSON(object: OIDCTokenType): string;
export declare enum APIAuthMethodType {
    API_AUTH_METHOD_TYPE_BASIC = 0,
    API_AUTH_METHOD_TYPE_PRIVATE_KEY_JWT = 1,
    UNRECOGNIZED = -1
}
export declare function aPIAuthMethodTypeFromJSON(object: any): APIAuthMethodType;
export declare function aPIAuthMethodTypeToJSON(object: APIAuthMethodType): string;
export interface App {
    id: string;
    details: ObjectDetails | undefined;
    state: AppState;
    name: string;
    oidcConfig?: OIDCConfig | undefined;
    apiConfig?: APIConfig | undefined;
    samlConfig?: SAMLConfig | undefined;
}
export interface AppQuery {
    nameQuery?: AppNameQuery | undefined;
}
export interface AppNameQuery {
    name: string;
    method: TextQueryMethod;
}
export interface OIDCConfig {
    redirectUris: string[];
    responseTypes: OIDCResponseType[];
    grantTypes: OIDCGrantType[];
    appType: OIDCAppType;
    clientId: string;
    authMethodType: OIDCAuthMethodType;
    postLogoutRedirectUris: string[];
    version: OIDCVersion;
    noneCompliant: boolean;
    complianceProblems: LocalizedMessage[];
    devMode: boolean;
    accessTokenType: OIDCTokenType;
    accessTokenRoleAssertion: boolean;
    idTokenRoleAssertion: boolean;
    idTokenUserinfoAssertion: boolean;
    clockSkew: Duration | undefined;
    additionalOrigins: string[];
    allowedOrigins: string[];
    skipNativeAppSuccessPage: boolean;
}
export interface SAMLConfig {
    metadataXml?: Buffer | undefined;
    metadataUrl?: string | undefined;
}
export interface APIConfig {
    clientId: string;
    authMethodType: APIAuthMethodType;
}
export declare const App: MessageFns<App>;
export declare const AppQuery: MessageFns<AppQuery>;
export declare const AppNameQuery: MessageFns<AppNameQuery>;
export declare const OIDCConfig: MessageFns<OIDCConfig>;
export declare const SAMLConfig: MessageFns<SAMLConfig>;
export declare const APIConfig: MessageFns<APIConfig>;
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
