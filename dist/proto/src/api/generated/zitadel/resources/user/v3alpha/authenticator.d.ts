/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Details } from "../../object/v3alpha/object.js";
export declare const protobufPackage = "zitadel.resources.user.v3alpha";
export declare enum AuthNKeyType {
    AUTHN_KEY_TYPE_UNSPECIFIED = 0,
    AUTHN_KEY_TYPE_JSON = 1,
    UNRECOGNIZED = -1
}
export declare function authNKeyTypeFromJSON(object: any): AuthNKeyType;
export declare function authNKeyTypeToJSON(object: AuthNKeyType): string;
export declare enum WebAuthNAuthenticatorType {
    WEB_AUTH_N_AUTHENTICATOR_UNSPECIFIED = 0,
    WEB_AUTH_N_AUTHENTICATOR_PLATFORM = 1,
    WEB_AUTH_N_AUTHENTICATOR_CROSS_PLATFORM = 2,
    UNRECOGNIZED = -1
}
export declare function webAuthNAuthenticatorTypeFromJSON(object: any): WebAuthNAuthenticatorType;
export declare function webAuthNAuthenticatorTypeToJSON(object: WebAuthNAuthenticatorType): string;
export interface Authenticators {
    usernames: Username[];
    password: Password | undefined;
    webAuthN: WebAuthN[];
    totps: TOTP[];
    otpSms: OTPSMS[];
    otpEmail: OTPEmail[];
    authenticationKeys: AuthenticationKey[];
    identityProviders: IdentityProvider[];
}
export interface Username {
    usernameId: string;
    username: string;
    isOrganizationSpecific: boolean;
}
export interface SetUsername {
    username: string;
    isOrganizationSpecific: boolean;
}
export interface Password {
    lastChanged: Date | undefined;
}
export interface WebAuthN {
    webAuthNId: string;
    name: string;
    isVerified: boolean;
    userVerified: boolean;
}
export interface StartWebAuthNRegistration {
    domain: string;
    authenticatorType: WebAuthNAuthenticatorType;
    code?: AuthenticatorRegistrationCode | undefined;
}
export interface VerifyWebAuthNRegistration {
    publicKeyCredential: {
        [key: string]: any;
    } | undefined;
    webAuthNName: string;
}
export interface OTPSMS {
    otpSmsId: string;
    phone: string;
    isVerified: boolean;
}
export interface OTPEmail {
    otpEmailId: string;
    address: string;
    isVerified: boolean;
}
export interface TOTP {
    totpId: string;
    name: string;
    isVerified: boolean;
}
export interface AuthenticationKey {
    authenticationKeyId: string;
    details: Details | undefined;
    type: AuthNKeyType;
    expirationDate: Date | undefined;
}
export interface IdentityProvider {
    idpId: string;
    idpName: string;
    userId: string;
    username: string;
}
export interface SetAuthenticators {
    usernames: SetUsername[];
    password: SetPassword | undefined;
}
export interface SetPassword {
    password?: string | undefined;
    hash?: string | undefined;
    changeRequired: boolean;
    currentPassword?: string | undefined;
    verificationCode?: string | undefined;
}
export interface SendPasswordResetEmail {
    urlTemplate?: string | undefined;
}
export interface SendPasswordResetSMS {
}
export interface ReturnPasswordResetCode {
}
export interface AuthenticatorRegistrationCode {
    id: string;
    code: string;
}
export interface SendWebAuthNRegistrationLink {
    urlTemplate?: string | undefined;
}
export interface ReturnWebAuthNRegistrationCode {
}
export interface RedirectURLs {
    successUrl: string;
    failureUrl: string;
}
export interface LDAPCredentials {
    username: string;
    password: string;
}
export interface IdentityProviderIntent {
    idpIntentId: string;
    idpIntentToken: string;
    userId?: string | undefined;
}
export interface IDPInformation {
    idpId: string;
    userId: string;
    userName: string;
    rawInformation: {
        [key: string]: any;
    } | undefined;
    oauth?: IDPOAuthAccessInformation | undefined;
    ldap?: IDPLDAPAccessInformation | undefined;
    saml?: IDPSAMLAccessInformation | undefined;
}
export interface IDPOAuthAccessInformation {
    accessToken: string;
    idToken?: string | undefined;
}
export interface IDPLDAPAccessInformation {
    attributes: {
        [key: string]: any;
    } | undefined;
}
export interface IDPSAMLAccessInformation {
    assertion: Buffer;
}
export interface IDPAuthenticator {
    idpId: string;
    userId: string;
    userName: string;
}
export declare const Authenticators: MessageFns<Authenticators>;
export declare const Username: MessageFns<Username>;
export declare const SetUsername: MessageFns<SetUsername>;
export declare const Password: MessageFns<Password>;
export declare const WebAuthN: MessageFns<WebAuthN>;
export declare const StartWebAuthNRegistration: MessageFns<StartWebAuthNRegistration>;
export declare const VerifyWebAuthNRegistration: MessageFns<VerifyWebAuthNRegistration>;
export declare const OTPSMS: MessageFns<OTPSMS>;
export declare const OTPEmail: MessageFns<OTPEmail>;
export declare const TOTP: MessageFns<TOTP>;
export declare const AuthenticationKey: MessageFns<AuthenticationKey>;
export declare const IdentityProvider: MessageFns<IdentityProvider>;
export declare const SetAuthenticators: MessageFns<SetAuthenticators>;
export declare const SetPassword: MessageFns<SetPassword>;
export declare const SendPasswordResetEmail: MessageFns<SendPasswordResetEmail>;
export declare const SendPasswordResetSMS: MessageFns<SendPasswordResetSMS>;
export declare const ReturnPasswordResetCode: MessageFns<ReturnPasswordResetCode>;
export declare const AuthenticatorRegistrationCode: MessageFns<AuthenticatorRegistrationCode>;
export declare const SendWebAuthNRegistrationLink: MessageFns<SendWebAuthNRegistrationLink>;
export declare const ReturnWebAuthNRegistrationCode: MessageFns<ReturnWebAuthNRegistrationCode>;
export declare const RedirectURLs: MessageFns<RedirectURLs>;
export declare const LDAPCredentials: MessageFns<LDAPCredentials>;
export declare const IdentityProviderIntent: MessageFns<IdentityProviderIntent>;
export declare const IDPInformation: MessageFns<IDPInformation>;
export declare const IDPOAuthAccessInformation: MessageFns<IDPOAuthAccessInformation>;
export declare const IDPLDAPAccessInformation: MessageFns<IDPLDAPAccessInformation>;
export declare const IDPSAMLAccessInformation: MessageFns<IDPSAMLAccessInformation>;
export declare const IDPAuthenticator: MessageFns<IDPAuthenticator>;
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
