import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
export declare const file_zitadel_user_v2_password: GenFile;
export type Password = Message<"zitadel.user.v2.Password"> & {
    password: string;
    changeRequired: boolean;
};
export declare const PasswordSchema: GenMessage<Password>;
export type HashedPassword = Message<"zitadel.user.v2.HashedPassword"> & {
    hash: string;
    changeRequired: boolean;
};
export declare const HashedPasswordSchema: GenMessage<HashedPassword>;
export type SendPasswordResetLink = Message<"zitadel.user.v2.SendPasswordResetLink"> & {
    notificationType: NotificationType;
    urlTemplate?: string;
};
export declare const SendPasswordResetLinkSchema: GenMessage<SendPasswordResetLink>;
export type ReturnPasswordResetCode = Message<"zitadel.user.v2.ReturnPasswordResetCode"> & {};
export declare const ReturnPasswordResetCodeSchema: GenMessage<ReturnPasswordResetCode>;
export type SetPassword = Message<"zitadel.user.v2.SetPassword"> & {
    passwordType: {
        value: Password;
        case: "password";
    } | {
        value: HashedPassword;
        case: "hashedPassword";
    } | {
        case: undefined;
        value?: undefined;
    };
    verification: {
        value: string;
        case: "currentPassword";
    } | {
        value: string;
        case: "verificationCode";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const SetPasswordSchema: GenMessage<SetPassword>;
export declare enum NotificationType {
    Unspecified = 0,
    Email = 1,
    SMS = 2
}
export declare const NotificationTypeSchema: GenEnum<NotificationType>;
