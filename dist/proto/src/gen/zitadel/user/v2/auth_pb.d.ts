import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
export declare const file_zitadel_user_v2_auth: GenFile;
export type SendPasskeyRegistrationLink = Message<"zitadel.user.v2.SendPasskeyRegistrationLink"> & {
    urlTemplate?: string;
};
export declare const SendPasskeyRegistrationLinkSchema: GenMessage<SendPasskeyRegistrationLink>;
export type ReturnPasskeyRegistrationCode = Message<"zitadel.user.v2.ReturnPasskeyRegistrationCode"> & {};
export declare const ReturnPasskeyRegistrationCodeSchema: GenMessage<ReturnPasskeyRegistrationCode>;
export type PasskeyRegistrationCode = Message<"zitadel.user.v2.PasskeyRegistrationCode"> & {
    id: string;
    code: string;
};
export declare const PasskeyRegistrationCodeSchema: GenMessage<PasskeyRegistrationCode>;
export declare enum PasskeyAuthenticator {
    UNSPECIFIED = 0,
    PLATFORM = 1,
    CROSS_PLATFORM = 2
}
export declare const PasskeyAuthenticatorSchema: GenEnum<PasskeyAuthenticator>;
