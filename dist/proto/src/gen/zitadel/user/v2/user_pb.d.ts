import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Details } from "../../object/v2/object_pb";
import type { HumanEmail } from "./email_pb";
import type { HumanPhone } from "./phone_pb";
import type { Message } from "@bufbuild/protobuf";
export declare const file_zitadel_user_v2_user: GenFile;
export type SetHumanProfile = Message<"zitadel.user.v2.SetHumanProfile"> & {
    givenName: string;
    familyName: string;
    nickName?: string;
    displayName?: string;
    preferredLanguage?: string;
    gender?: Gender;
};
export declare const SetHumanProfileSchema: GenMessage<SetHumanProfile>;
export type HumanProfile = Message<"zitadel.user.v2.HumanProfile"> & {
    givenName: string;
    familyName: string;
    nickName?: string;
    displayName?: string;
    preferredLanguage?: string;
    gender?: Gender;
    avatarUrl: string;
};
export declare const HumanProfileSchema: GenMessage<HumanProfile>;
export type SetMetadataEntry = Message<"zitadel.user.v2.SetMetadataEntry"> & {
    key: string;
    value: Uint8Array;
};
export declare const SetMetadataEntrySchema: GenMessage<SetMetadataEntry>;
export type HumanUser = Message<"zitadel.user.v2.HumanUser"> & {
    userId: string;
    state: UserState;
    username: string;
    loginNames: string[];
    preferredLoginName: string;
    profile?: HumanProfile;
    email?: HumanEmail;
    phone?: HumanPhone;
    passwordChangeRequired: boolean;
    passwordChanged?: Timestamp;
};
export declare const HumanUserSchema: GenMessage<HumanUser>;
export type User = Message<"zitadel.user.v2.User"> & {
    userId: string;
    details?: Details;
    state: UserState;
    username: string;
    loginNames: string[];
    preferredLoginName: string;
    type: {
        value: HumanUser;
        case: "human";
    } | {
        value: MachineUser;
        case: "machine";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const UserSchema: GenMessage<User>;
export type MachineUser = Message<"zitadel.user.v2.MachineUser"> & {
    name: string;
    description: string;
    hasSecret: boolean;
    accessTokenType: AccessTokenType;
};
export declare const MachineUserSchema: GenMessage<MachineUser>;
export type Passkey = Message<"zitadel.user.v2.Passkey"> & {
    id: string;
    state: AuthFactorState;
    name: string;
};
export declare const PasskeySchema: GenMessage<Passkey>;
export type SendInviteCode = Message<"zitadel.user.v2.SendInviteCode"> & {
    urlTemplate?: string;
    applicationName?: string;
};
export declare const SendInviteCodeSchema: GenMessage<SendInviteCode>;
export type ReturnInviteCode = Message<"zitadel.user.v2.ReturnInviteCode"> & {};
export declare const ReturnInviteCodeSchema: GenMessage<ReturnInviteCode>;
export declare enum Gender {
    UNSPECIFIED = 0,
    FEMALE = 1,
    MALE = 2,
    DIVERSE = 3
}
export declare const GenderSchema: GenEnum<Gender>;
export declare enum AccessTokenType {
    BEARER = 0,
    JWT = 1
}
export declare const AccessTokenTypeSchema: GenEnum<AccessTokenType>;
export declare enum UserState {
    UNSPECIFIED = 0,
    ACTIVE = 1,
    INACTIVE = 2,
    DELETED = 3,
    LOCKED = 4,
    INITIAL = 5
}
export declare const UserStateSchema: GenEnum<UserState>;
export declare enum AuthFactorState {
    UNSPECIFIED = 0,
    NOT_READY = 1,
    READY = 2,
    REMOVED = 3
}
export declare const AuthFactorStateSchema: GenEnum<AuthFactorState>;
