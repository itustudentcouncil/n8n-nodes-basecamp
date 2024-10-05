import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
export declare const protobufPackage = "zitadel.user.v2beta";
export declare enum NotificationType {
    NOTIFICATION_TYPE_Unspecified = 0,
    NOTIFICATION_TYPE_Email = 1,
    NOTIFICATION_TYPE_SMS = 2,
    UNRECOGNIZED = -1
}
export declare function notificationTypeFromJSON(object: any): NotificationType;
export declare function notificationTypeToJSON(object: NotificationType): string;
export interface Password {
    password: string;
    changeRequired: boolean;
}
export interface HashedPassword {
    hash: string;
    changeRequired: boolean;
}
export interface SendPasswordResetLink {
    notificationType: NotificationType;
    urlTemplate?: string | undefined;
}
export interface ReturnPasswordResetCode {
}
export interface SetPassword {
    password?: Password | undefined;
    hashedPassword?: HashedPassword | undefined;
    currentPassword?: string | undefined;
    verificationCode?: string | undefined;
}
export declare const Password: MessageFns<Password>;
export declare const HashedPassword: MessageFns<HashedPassword>;
export declare const SendPasswordResetLink: MessageFns<SendPasswordResetLink>;
export declare const ReturnPasswordResetCode: MessageFns<ReturnPasswordResetCode>;
export declare const SetPassword: MessageFns<SetPassword>;
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
