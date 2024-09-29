import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
export declare const file_zitadel_user_v2_email: GenFile;
export type SetHumanEmail = Message<"zitadel.user.v2.SetHumanEmail"> & {
    email: string;
    verification: {
        value: SendEmailVerificationCode;
        case: "sendCode";
    } | {
        value: ReturnEmailVerificationCode;
        case: "returnCode";
    } | {
        value: boolean;
        case: "isVerified";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const SetHumanEmailSchema: GenMessage<SetHumanEmail>;
export type HumanEmail = Message<"zitadel.user.v2.HumanEmail"> & {
    email: string;
    isVerified: boolean;
};
export declare const HumanEmailSchema: GenMessage<HumanEmail>;
export type SendEmailVerificationCode = Message<"zitadel.user.v2.SendEmailVerificationCode"> & {
    urlTemplate?: string;
};
export declare const SendEmailVerificationCodeSchema: GenMessage<SendEmailVerificationCode>;
export type ReturnEmailVerificationCode = Message<"zitadel.user.v2.ReturnEmailVerificationCode"> & {};
export declare const ReturnEmailVerificationCodeSchema: GenMessage<ReturnEmailVerificationCode>;
