import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
export declare const file_zitadel_user_v2_phone: GenFile;
export type SetHumanPhone = Message<"zitadel.user.v2.SetHumanPhone"> & {
    phone: string;
    verification: {
        value: SendPhoneVerificationCode;
        case: "sendCode";
    } | {
        value: ReturnPhoneVerificationCode;
        case: "returnCode";
    } | {
        value: boolean;
        case: "isVerified";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const SetHumanPhoneSchema: GenMessage<SetHumanPhone>;
export type HumanPhone = Message<"zitadel.user.v2.HumanPhone"> & {
    phone: string;
    isVerified: boolean;
};
export declare const HumanPhoneSchema: GenMessage<HumanPhone>;
export type SendPhoneVerificationCode = Message<"zitadel.user.v2.SendPhoneVerificationCode"> & {};
export declare const SendPhoneVerificationCodeSchema: GenMessage<SendPhoneVerificationCode>;
export type ReturnPhoneVerificationCode = Message<"zitadel.user.v2.ReturnPhoneVerificationCode"> & {};
export declare const ReturnPhoneVerificationCodeSchema: GenMessage<ReturnPhoneVerificationCode>;
