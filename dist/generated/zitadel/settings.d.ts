import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../google/protobuf/duration.js";
import { ObjectDetails } from "./object.js";
export declare const protobufPackage = "zitadel.settings.v1";
export declare enum SMTPConfigState {
    SMTP_CONFIG_STATE_UNSPECIFIED = 0,
    SMTP_CONFIG_ACTIVE = 1,
    SMTP_CONFIG_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function sMTPConfigStateFromJSON(object: any): SMTPConfigState;
export declare function sMTPConfigStateToJSON(object: SMTPConfigState): string;
export declare enum SecretGeneratorType {
    SECRET_GENERATOR_TYPE_UNSPECIFIED = 0,
    SECRET_GENERATOR_TYPE_INIT_CODE = 1,
    SECRET_GENERATOR_TYPE_VERIFY_EMAIL_CODE = 2,
    SECRET_GENERATOR_TYPE_VERIFY_PHONE_CODE = 3,
    SECRET_GENERATOR_TYPE_PASSWORD_RESET_CODE = 4,
    SECRET_GENERATOR_TYPE_PASSWORDLESS_INIT_CODE = 5,
    SECRET_GENERATOR_TYPE_APP_SECRET = 6,
    SECRET_GENERATOR_TYPE_OTP_SMS = 7,
    SECRET_GENERATOR_TYPE_OTP_EMAIL = 8,
    UNRECOGNIZED = -1
}
export declare function secretGeneratorTypeFromJSON(object: any): SecretGeneratorType;
export declare function secretGeneratorTypeToJSON(object: SecretGeneratorType): string;
export declare enum EmailProviderState {
    EMAIL_PROVIDER_STATE_UNSPECIFIED = 0,
    EMAIL_PROVIDER_ACTIVE = 1,
    EMAIL_PROVIDER_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function emailProviderStateFromJSON(object: any): EmailProviderState;
export declare function emailProviderStateToJSON(object: EmailProviderState): string;
export declare enum SMSProviderConfigState {
    SMS_PROVIDER_CONFIG_STATE_UNSPECIFIED = 0,
    SMS_PROVIDER_CONFIG_ACTIVE = 1,
    SMS_PROVIDER_CONFIG_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function sMSProviderConfigStateFromJSON(object: any): SMSProviderConfigState;
export declare function sMSProviderConfigStateToJSON(object: SMSProviderConfigState): string;
export interface SecretGenerator {
    generatorType: SecretGeneratorType;
    details: ObjectDetails | undefined;
    length: number;
    expiry: Duration | undefined;
    includeLowerLetters: boolean;
    includeUpperLetters: boolean;
    includeDigits: boolean;
    includeSymbols: boolean;
}
export interface SecretGeneratorQuery {
    typeQuery?: SecretGeneratorTypeQuery | undefined;
}
export interface SecretGeneratorTypeQuery {
    generatorType: SecretGeneratorType;
}
export interface SMTPConfig {
    details: ObjectDetails | undefined;
    senderAddress: string;
    senderName: string;
    tls: boolean;
    host: string;
    user: string;
    replyToAddress: string;
    state: SMTPConfigState;
    description: string;
    id: string;
}
export interface EmailProvider {
    details: ObjectDetails | undefined;
    id: string;
    state: EmailProviderState;
    description: string;
    smtp?: EmailProviderSMTP | undefined;
    http?: EmailProviderHTTP | undefined;
}
export interface EmailProviderSMTP {
    senderAddress: string;
    senderName: string;
    tls: boolean;
    host: string;
    user: string;
    replyToAddress: string;
}
export interface EmailProviderHTTP {
    endpoint: string;
}
export interface SMSProvider {
    details: ObjectDetails | undefined;
    id: string;
    state: SMSProviderConfigState;
    description: string;
    twilio?: TwilioConfig | undefined;
    http?: HTTPConfig | undefined;
}
export interface TwilioConfig {
    sid: string;
    senderNumber: string;
    verifyServiceSid: string;
}
export interface HTTPConfig {
    endpoint: string;
}
export interface DebugNotificationProvider {
    details: ObjectDetails | undefined;
    compact: boolean;
}
export interface OIDCSettings {
    details: ObjectDetails | undefined;
    accessTokenLifetime: Duration | undefined;
    idTokenLifetime: Duration | undefined;
    refreshTokenIdleExpiration: Duration | undefined;
    refreshTokenExpiration: Duration | undefined;
}
export interface SecurityPolicy {
    details: ObjectDetails | undefined;
    enableIframeEmbedding: boolean;
    allowedOrigins: string[];
    enableImpersonation: boolean;
}
export declare const SecretGenerator: MessageFns<SecretGenerator>;
export declare const SecretGeneratorQuery: MessageFns<SecretGeneratorQuery>;
export declare const SecretGeneratorTypeQuery: MessageFns<SecretGeneratorTypeQuery>;
export declare const SMTPConfig: MessageFns<SMTPConfig>;
export declare const EmailProvider: MessageFns<EmailProvider>;
export declare const EmailProviderSMTP: MessageFns<EmailProviderSMTP>;
export declare const EmailProviderHTTP: MessageFns<EmailProviderHTTP>;
export declare const SMSProvider: MessageFns<SMSProvider>;
export declare const TwilioConfig: MessageFns<TwilioConfig>;
export declare const HTTPConfig: MessageFns<HTTPConfig>;
export declare const DebugNotificationProvider: MessageFns<DebugNotificationProvider>;
export declare const OIDCSettings: MessageFns<OIDCSettings>;
export declare const SecurityPolicy: MessageFns<SecurityPolicy>;
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
