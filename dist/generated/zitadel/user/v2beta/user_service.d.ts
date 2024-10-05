/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Details, ListDetails, ListQuery, Organization } from "../../object/v2beta/object.js";
import { PasskeyAuthenticator, PasskeyRegistrationCode, ReturnPasskeyRegistrationCode, SendPasskeyRegistrationLink } from "./auth.js";
import { ReturnEmailVerificationCode, SendEmailVerificationCode, SetHumanEmail } from "./email.js";
import { IDPInformation, IDPIntent, IDPLink, LDAPCredentials, RedirectURLs } from "./idp.js";
import { HashedPassword, Password, ReturnPasswordResetCode, SendPasswordResetLink, SetPassword } from "./password.js";
import { ReturnPhoneVerificationCode, SendPhoneVerificationCode, SetHumanPhone } from "./phone.js";
import { SearchQuery, UserFieldName } from "./query.js";
import { SetHumanProfile, SetMetadataEntry, User } from "./user.js";
export declare const protobufPackage = "zitadel.user.v2beta";
export declare enum AuthenticationMethodType {
    AUTHENTICATION_METHOD_TYPE_UNSPECIFIED = 0,
    AUTHENTICATION_METHOD_TYPE_PASSWORD = 1,
    AUTHENTICATION_METHOD_TYPE_PASSKEY = 2,
    AUTHENTICATION_METHOD_TYPE_IDP = 3,
    AUTHENTICATION_METHOD_TYPE_TOTP = 4,
    AUTHENTICATION_METHOD_TYPE_U2F = 5,
    AUTHENTICATION_METHOD_TYPE_OTP_SMS = 6,
    AUTHENTICATION_METHOD_TYPE_OTP_EMAIL = 7,
    UNRECOGNIZED = -1
}
export declare function authenticationMethodTypeFromJSON(object: any): AuthenticationMethodType;
export declare function authenticationMethodTypeToJSON(object: AuthenticationMethodType): string;
export interface AddHumanUserRequest {
    userId?: string | undefined;
    username?: string | undefined;
    organization: Organization | undefined;
    profile: SetHumanProfile | undefined;
    email: SetHumanEmail | undefined;
    phone: SetHumanPhone | undefined;
    metadata: SetMetadataEntry[];
    password?: Password | undefined;
    hashedPassword?: HashedPassword | undefined;
    idpLinks: IDPLink[];
    totpSecret?: string | undefined;
}
export interface AddHumanUserResponse {
    userId: string;
    details: Details | undefined;
    emailCode?: string | undefined;
    phoneCode?: string | undefined;
}
export interface GetUserByIDRequest {
    userId: string;
}
export interface GetUserByIDResponse {
    details: Details | undefined;
    user: User | undefined;
}
export interface ListUsersRequest {
    query: ListQuery | undefined;
    sortingColumn: UserFieldName;
    queries: SearchQuery[];
}
export interface ListUsersResponse {
    details: ListDetails | undefined;
    sortingColumn: UserFieldName;
    result: User[];
}
export interface SetEmailRequest {
    userId: string;
    email: string;
    sendCode?: SendEmailVerificationCode | undefined;
    returnCode?: ReturnEmailVerificationCode | undefined;
    isVerified?: boolean | undefined;
}
export interface SetEmailResponse {
    details: Details | undefined;
    verificationCode?: string | undefined;
}
export interface ResendEmailCodeRequest {
    userId: string;
    sendCode?: SendEmailVerificationCode | undefined;
    returnCode?: ReturnEmailVerificationCode | undefined;
}
export interface ResendEmailCodeResponse {
    details: Details | undefined;
    verificationCode?: string | undefined;
}
export interface VerifyEmailRequest {
    userId: string;
    verificationCode: string;
}
export interface VerifyEmailResponse {
    details: Details | undefined;
}
export interface SetPhoneRequest {
    userId: string;
    phone: string;
    sendCode?: SendPhoneVerificationCode | undefined;
    returnCode?: ReturnPhoneVerificationCode | undefined;
    isVerified?: boolean | undefined;
}
export interface SetPhoneResponse {
    details: Details | undefined;
    verificationCode?: string | undefined;
}
export interface RemovePhoneRequest {
    userId: string;
}
export interface RemovePhoneResponse {
    details: Details | undefined;
}
export interface ResendPhoneCodeRequest {
    userId: string;
    sendCode?: SendPhoneVerificationCode | undefined;
    returnCode?: ReturnPhoneVerificationCode | undefined;
}
export interface ResendPhoneCodeResponse {
    details: Details | undefined;
    verificationCode?: string | undefined;
}
export interface VerifyPhoneRequest {
    userId: string;
    verificationCode: string;
}
export interface VerifyPhoneResponse {
    details: Details | undefined;
}
export interface DeleteUserRequest {
    userId: string;
}
export interface DeleteUserResponse {
    details: Details | undefined;
}
export interface UpdateHumanUserRequest {
    userId: string;
    username?: string | undefined;
    profile?: SetHumanProfile | undefined;
    email?: SetHumanEmail | undefined;
    phone?: SetHumanPhone | undefined;
    password?: SetPassword | undefined;
}
export interface UpdateHumanUserResponse {
    details: Details | undefined;
    emailCode?: string | undefined;
    phoneCode?: string | undefined;
}
export interface DeactivateUserRequest {
    userId: string;
}
export interface DeactivateUserResponse {
    details: Details | undefined;
}
export interface ReactivateUserRequest {
    userId: string;
}
export interface ReactivateUserResponse {
    details: Details | undefined;
}
export interface LockUserRequest {
    userId: string;
}
export interface LockUserResponse {
    details: Details | undefined;
}
export interface UnlockUserRequest {
    userId: string;
}
export interface UnlockUserResponse {
    details: Details | undefined;
}
export interface RegisterPasskeyRequest {
    userId: string;
    code?: PasskeyRegistrationCode | undefined;
    authenticator: PasskeyAuthenticator;
    domain: string;
}
export interface RegisterPasskeyResponse {
    details: Details | undefined;
    passkeyId: string;
    publicKeyCredentialCreationOptions: {
        [key: string]: any;
    } | undefined;
}
export interface VerifyPasskeyRegistrationRequest {
    userId: string;
    passkeyId: string;
    publicKeyCredential: {
        [key: string]: any;
    } | undefined;
    passkeyName: string;
}
export interface VerifyPasskeyRegistrationResponse {
    details: Details | undefined;
}
export interface RegisterU2FRequest {
    userId: string;
    domain: string;
}
export interface RegisterU2FResponse {
    details: Details | undefined;
    u2fId: string;
    publicKeyCredentialCreationOptions: {
        [key: string]: any;
    } | undefined;
}
export interface VerifyU2FRegistrationRequest {
    userId: string;
    u2fId: string;
    publicKeyCredential: {
        [key: string]: any;
    } | undefined;
    tokenName: string;
}
export interface VerifyU2FRegistrationResponse {
    details: Details | undefined;
}
export interface RegisterTOTPRequest {
    userId: string;
}
export interface RegisterTOTPResponse {
    details: Details | undefined;
    uri: string;
    secret: string;
}
export interface VerifyTOTPRegistrationRequest {
    userId: string;
    code: string;
}
export interface VerifyTOTPRegistrationResponse {
    details: Details | undefined;
}
export interface RemoveTOTPRequest {
    userId: string;
}
export interface RemoveTOTPResponse {
    details: Details | undefined;
}
export interface AddOTPSMSRequest {
    userId: string;
}
export interface AddOTPSMSResponse {
    details: Details | undefined;
}
export interface RemoveOTPSMSRequest {
    userId: string;
}
export interface RemoveOTPSMSResponse {
    details: Details | undefined;
}
export interface AddOTPEmailRequest {
    userId: string;
}
export interface AddOTPEmailResponse {
    details: Details | undefined;
}
export interface RemoveOTPEmailRequest {
    userId: string;
}
export interface RemoveOTPEmailResponse {
    details: Details | undefined;
}
export interface CreatePasskeyRegistrationLinkRequest {
    userId: string;
    sendLink?: SendPasskeyRegistrationLink | undefined;
    returnCode?: ReturnPasskeyRegistrationCode | undefined;
}
export interface CreatePasskeyRegistrationLinkResponse {
    details: Details | undefined;
    code?: PasskeyRegistrationCode | undefined;
}
export interface StartIdentityProviderIntentRequest {
    idpId: string;
    urls?: RedirectURLs | undefined;
    ldap?: LDAPCredentials | undefined;
}
export interface StartIdentityProviderIntentResponse {
    details: Details | undefined;
    authUrl?: string | undefined;
    idpIntent?: IDPIntent | undefined;
    postForm?: Buffer | undefined;
}
export interface RetrieveIdentityProviderIntentRequest {
    idpIntentId: string;
    idpIntentToken: string;
}
export interface RetrieveIdentityProviderIntentResponse {
    details: Details | undefined;
    idpInformation: IDPInformation | undefined;
    userId: string;
}
export interface AddIDPLinkRequest {
    userId: string;
    idpLink: IDPLink | undefined;
}
export interface AddIDPLinkResponse {
    details: Details | undefined;
}
export interface PasswordResetRequest {
    userId: string;
    sendLink?: SendPasswordResetLink | undefined;
    returnCode?: ReturnPasswordResetCode | undefined;
}
export interface PasswordResetResponse {
    details: Details | undefined;
    verificationCode?: string | undefined;
}
export interface SetPasswordRequest {
    userId: string;
    newPassword: Password | undefined;
    currentPassword?: string | undefined;
    verificationCode?: string | undefined;
}
export interface SetPasswordResponse {
    details: Details | undefined;
}
export interface ListAuthenticationMethodTypesRequest {
    userId: string;
}
export interface ListAuthenticationMethodTypesResponse {
    details: ListDetails | undefined;
    authMethodTypes: AuthenticationMethodType[];
}
export declare const AddHumanUserRequest: MessageFns<AddHumanUserRequest>;
export declare const AddHumanUserResponse: MessageFns<AddHumanUserResponse>;
export declare const GetUserByIDRequest: MessageFns<GetUserByIDRequest>;
export declare const GetUserByIDResponse: MessageFns<GetUserByIDResponse>;
export declare const ListUsersRequest: MessageFns<ListUsersRequest>;
export declare const ListUsersResponse: MessageFns<ListUsersResponse>;
export declare const SetEmailRequest: MessageFns<SetEmailRequest>;
export declare const SetEmailResponse: MessageFns<SetEmailResponse>;
export declare const ResendEmailCodeRequest: MessageFns<ResendEmailCodeRequest>;
export declare const ResendEmailCodeResponse: MessageFns<ResendEmailCodeResponse>;
export declare const VerifyEmailRequest: MessageFns<VerifyEmailRequest>;
export declare const VerifyEmailResponse: MessageFns<VerifyEmailResponse>;
export declare const SetPhoneRequest: MessageFns<SetPhoneRequest>;
export declare const SetPhoneResponse: MessageFns<SetPhoneResponse>;
export declare const RemovePhoneRequest: MessageFns<RemovePhoneRequest>;
export declare const RemovePhoneResponse: MessageFns<RemovePhoneResponse>;
export declare const ResendPhoneCodeRequest: MessageFns<ResendPhoneCodeRequest>;
export declare const ResendPhoneCodeResponse: MessageFns<ResendPhoneCodeResponse>;
export declare const VerifyPhoneRequest: MessageFns<VerifyPhoneRequest>;
export declare const VerifyPhoneResponse: MessageFns<VerifyPhoneResponse>;
export declare const DeleteUserRequest: MessageFns<DeleteUserRequest>;
export declare const DeleteUserResponse: MessageFns<DeleteUserResponse>;
export declare const UpdateHumanUserRequest: MessageFns<UpdateHumanUserRequest>;
export declare const UpdateHumanUserResponse: MessageFns<UpdateHumanUserResponse>;
export declare const DeactivateUserRequest: MessageFns<DeactivateUserRequest>;
export declare const DeactivateUserResponse: MessageFns<DeactivateUserResponse>;
export declare const ReactivateUserRequest: MessageFns<ReactivateUserRequest>;
export declare const ReactivateUserResponse: MessageFns<ReactivateUserResponse>;
export declare const LockUserRequest: MessageFns<LockUserRequest>;
export declare const LockUserResponse: MessageFns<LockUserResponse>;
export declare const UnlockUserRequest: MessageFns<UnlockUserRequest>;
export declare const UnlockUserResponse: MessageFns<UnlockUserResponse>;
export declare const RegisterPasskeyRequest: MessageFns<RegisterPasskeyRequest>;
export declare const RegisterPasskeyResponse: MessageFns<RegisterPasskeyResponse>;
export declare const VerifyPasskeyRegistrationRequest: MessageFns<VerifyPasskeyRegistrationRequest>;
export declare const VerifyPasskeyRegistrationResponse: MessageFns<VerifyPasskeyRegistrationResponse>;
export declare const RegisterU2FRequest: MessageFns<RegisterU2FRequest>;
export declare const RegisterU2FResponse: MessageFns<RegisterU2FResponse>;
export declare const VerifyU2FRegistrationRequest: MessageFns<VerifyU2FRegistrationRequest>;
export declare const VerifyU2FRegistrationResponse: MessageFns<VerifyU2FRegistrationResponse>;
export declare const RegisterTOTPRequest: MessageFns<RegisterTOTPRequest>;
export declare const RegisterTOTPResponse: MessageFns<RegisterTOTPResponse>;
export declare const VerifyTOTPRegistrationRequest: MessageFns<VerifyTOTPRegistrationRequest>;
export declare const VerifyTOTPRegistrationResponse: MessageFns<VerifyTOTPRegistrationResponse>;
export declare const RemoveTOTPRequest: MessageFns<RemoveTOTPRequest>;
export declare const RemoveTOTPResponse: MessageFns<RemoveTOTPResponse>;
export declare const AddOTPSMSRequest: MessageFns<AddOTPSMSRequest>;
export declare const AddOTPSMSResponse: MessageFns<AddOTPSMSResponse>;
export declare const RemoveOTPSMSRequest: MessageFns<RemoveOTPSMSRequest>;
export declare const RemoveOTPSMSResponse: MessageFns<RemoveOTPSMSResponse>;
export declare const AddOTPEmailRequest: MessageFns<AddOTPEmailRequest>;
export declare const AddOTPEmailResponse: MessageFns<AddOTPEmailResponse>;
export declare const RemoveOTPEmailRequest: MessageFns<RemoveOTPEmailRequest>;
export declare const RemoveOTPEmailResponse: MessageFns<RemoveOTPEmailResponse>;
export declare const CreatePasskeyRegistrationLinkRequest: MessageFns<CreatePasskeyRegistrationLinkRequest>;
export declare const CreatePasskeyRegistrationLinkResponse: MessageFns<CreatePasskeyRegistrationLinkResponse>;
export declare const StartIdentityProviderIntentRequest: MessageFns<StartIdentityProviderIntentRequest>;
export declare const StartIdentityProviderIntentResponse: MessageFns<StartIdentityProviderIntentResponse>;
export declare const RetrieveIdentityProviderIntentRequest: MessageFns<RetrieveIdentityProviderIntentRequest>;
export declare const RetrieveIdentityProviderIntentResponse: MessageFns<RetrieveIdentityProviderIntentResponse>;
export declare const AddIDPLinkRequest: MessageFns<AddIDPLinkRequest>;
export declare const AddIDPLinkResponse: MessageFns<AddIDPLinkResponse>;
export declare const PasswordResetRequest: MessageFns<PasswordResetRequest>;
export declare const PasswordResetResponse: MessageFns<PasswordResetResponse>;
export declare const SetPasswordRequest: MessageFns<SetPasswordRequest>;
export declare const SetPasswordResponse: MessageFns<SetPasswordResponse>;
export declare const ListAuthenticationMethodTypesRequest: MessageFns<ListAuthenticationMethodTypesRequest>;
export declare const ListAuthenticationMethodTypesResponse: MessageFns<ListAuthenticationMethodTypesResponse>;
export type UserServiceDefinition = typeof UserServiceDefinition;
export declare const UserServiceDefinition: {
    readonly name: "UserService";
    readonly fullName: "zitadel.user.v2beta.UserService";
    readonly methods: {
        readonly addHumanUser: {
            readonly name: "AddHumanUser";
            readonly requestType: MessageFns<AddHumanUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddHumanUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getUserByID: {
            readonly name: "GetUserByID";
            readonly requestType: MessageFns<GetUserByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetUserByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listUsers: {
            readonly name: "ListUsers";
            readonly requestType: MessageFns<ListUsersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListUsersResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setEmail: {
            readonly name: "SetEmail";
            readonly requestType: MessageFns<SetEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendEmailCode: {
            readonly name: "ResendEmailCode";
            readonly requestType: MessageFns<ResendEmailCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendEmailCodeResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyEmail: {
            readonly name: "VerifyEmail";
            readonly requestType: MessageFns<VerifyEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setPhone: {
            readonly name: "SetPhone";
            readonly requestType: MessageFns<SetPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removePhone: {
            readonly name: "RemovePhone";
            readonly requestType: MessageFns<RemovePhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemovePhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendPhoneCode: {
            readonly name: "ResendPhoneCode";
            readonly requestType: MessageFns<ResendPhoneCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendPhoneCodeResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyPhone: {
            readonly name: "VerifyPhone";
            readonly requestType: MessageFns<VerifyPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateHumanUser: {
            readonly name: "UpdateHumanUser";
            readonly requestType: MessageFns<UpdateHumanUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateHumanUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateUser: {
            readonly name: "DeactivateUser";
            readonly requestType: MessageFns<DeactivateUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateUser: {
            readonly name: "ReactivateUser";
            readonly requestType: MessageFns<ReactivateUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly lockUser: {
            readonly name: "LockUser";
            readonly requestType: MessageFns<LockUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<LockUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly unlockUser: {
            readonly name: "UnlockUser";
            readonly requestType: MessageFns<UnlockUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UnlockUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deleteUser: {
            readonly name: "DeleteUser";
            readonly requestType: MessageFns<DeleteUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly registerPasskey: {
            readonly name: "RegisterPasskey";
            readonly requestType: MessageFns<RegisterPasskeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RegisterPasskeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyPasskeyRegistration: {
            readonly name: "VerifyPasskeyRegistration";
            readonly requestType: MessageFns<VerifyPasskeyRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyPasskeyRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly createPasskeyRegistrationLink: {
            readonly name: "CreatePasskeyRegistrationLink";
            readonly requestType: MessageFns<CreatePasskeyRegistrationLinkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreatePasskeyRegistrationLinkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly registerU2F: {
            readonly name: "RegisterU2F";
            readonly requestType: MessageFns<RegisterU2FRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RegisterU2FResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyU2FRegistration: {
            readonly name: "VerifyU2FRegistration";
            readonly requestType: MessageFns<VerifyU2FRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyU2FRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly registerTOTP: {
            readonly name: "RegisterTOTP";
            readonly requestType: MessageFns<RegisterTOTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RegisterTOTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyTOTPRegistration: {
            readonly name: "VerifyTOTPRegistration";
            readonly requestType: MessageFns<VerifyTOTPRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyTOTPRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeTOTP: {
            readonly name: "RemoveTOTP";
            readonly requestType: MessageFns<RemoveTOTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveTOTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOTPSMS: {
            readonly name: "AddOTPSMS";
            readonly requestType: MessageFns<AddOTPSMSRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOTPSMSResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOTPSMS: {
            readonly name: "RemoveOTPSMS";
            readonly requestType: MessageFns<RemoveOTPSMSRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOTPSMSResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOTPEmail: {
            readonly name: "AddOTPEmail";
            readonly requestType: MessageFns<AddOTPEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOTPEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOTPEmail: {
            readonly name: "RemoveOTPEmail";
            readonly requestType: MessageFns<RemoveOTPEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOTPEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly startIdentityProviderIntent: {
            readonly name: "StartIdentityProviderIntent";
            readonly requestType: MessageFns<StartIdentityProviderIntentRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<StartIdentityProviderIntentResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly retrieveIdentityProviderIntent: {
            readonly name: "RetrieveIdentityProviderIntent";
            readonly requestType: MessageFns<RetrieveIdentityProviderIntentRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RetrieveIdentityProviderIntentResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addIDPLink: {
            readonly name: "AddIDPLink";
            readonly requestType: MessageFns<AddIDPLinkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddIDPLinkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly passwordReset: {
            readonly name: "PasswordReset";
            readonly requestType: MessageFns<PasswordResetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<PasswordResetResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setPassword: {
            readonly name: "SetPassword";
            readonly requestType: MessageFns<SetPasswordRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetPasswordResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listAuthenticationMethodTypes: {
            readonly name: "ListAuthenticationMethodTypes";
            readonly requestType: MessageFns<ListAuthenticationMethodTypesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListAuthenticationMethodTypesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
    };
};
export interface UserServiceImplementation<CallContextExt = {}> {
    addHumanUser(request: AddHumanUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddHumanUserResponse>>;
    getUserByID(request: GetUserByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserByIDResponse>>;
    listUsers(request: ListUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUsersResponse>>;
    setEmail(request: SetEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetEmailResponse>>;
    resendEmailCode(request: ResendEmailCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendEmailCodeResponse>>;
    verifyEmail(request: VerifyEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyEmailResponse>>;
    setPhone(request: SetPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPhoneResponse>>;
    removePhone(request: RemovePhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemovePhoneResponse>>;
    resendPhoneCode(request: ResendPhoneCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendPhoneCodeResponse>>;
    verifyPhone(request: VerifyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyPhoneResponse>>;
    updateHumanUser(request: UpdateHumanUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateHumanUserResponse>>;
    deactivateUser(request: DeactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateUserResponse>>;
    reactivateUser(request: ReactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateUserResponse>>;
    lockUser(request: LockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LockUserResponse>>;
    unlockUser(request: UnlockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UnlockUserResponse>>;
    deleteUser(request: DeleteUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteUserResponse>>;
    registerPasskey(request: RegisterPasskeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterPasskeyResponse>>;
    verifyPasskeyRegistration(request: VerifyPasskeyRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyPasskeyRegistrationResponse>>;
    createPasskeyRegistrationLink(request: CreatePasskeyRegistrationLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreatePasskeyRegistrationLinkResponse>>;
    registerU2F(request: RegisterU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterU2FResponse>>;
    verifyU2FRegistration(request: VerifyU2FRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyU2FRegistrationResponse>>;
    registerTOTP(request: RegisterTOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterTOTPResponse>>;
    verifyTOTPRegistration(request: VerifyTOTPRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyTOTPRegistrationResponse>>;
    removeTOTP(request: RemoveTOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveTOTPResponse>>;
    addOTPSMS(request: AddOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPSMSResponse>>;
    removeOTPSMS(request: RemoveOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPSMSResponse>>;
    addOTPEmail(request: AddOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPEmailResponse>>;
    removeOTPEmail(request: RemoveOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPEmailResponse>>;
    startIdentityProviderIntent(request: StartIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StartIdentityProviderIntentResponse>>;
    retrieveIdentityProviderIntent(request: RetrieveIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RetrieveIdentityProviderIntentResponse>>;
    addIDPLink(request: AddIDPLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddIDPLinkResponse>>;
    passwordReset(request: PasswordResetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PasswordResetResponse>>;
    setPassword(request: SetPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPasswordResponse>>;
    listAuthenticationMethodTypes(request: ListAuthenticationMethodTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAuthenticationMethodTypesResponse>>;
}
export interface UserServiceClient<CallOptionsExt = {}> {
    addHumanUser(request: DeepPartial<AddHumanUserRequest>, options?: CallOptions & CallOptionsExt): Promise<AddHumanUserResponse>;
    getUserByID(request: DeepPartial<GetUserByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserByIDResponse>;
    listUsers(request: DeepPartial<ListUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUsersResponse>;
    setEmail(request: DeepPartial<SetEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<SetEmailResponse>;
    resendEmailCode(request: DeepPartial<ResendEmailCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendEmailCodeResponse>;
    verifyEmail(request: DeepPartial<VerifyEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyEmailResponse>;
    setPhone(request: DeepPartial<SetPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPhoneResponse>;
    removePhone(request: DeepPartial<RemovePhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<RemovePhoneResponse>;
    resendPhoneCode(request: DeepPartial<ResendPhoneCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendPhoneCodeResponse>;
    verifyPhone(request: DeepPartial<VerifyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyPhoneResponse>;
    updateHumanUser(request: DeepPartial<UpdateHumanUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateHumanUserResponse>;
    deactivateUser(request: DeepPartial<DeactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateUserResponse>;
    reactivateUser(request: DeepPartial<ReactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateUserResponse>;
    lockUser(request: DeepPartial<LockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<LockUserResponse>;
    unlockUser(request: DeepPartial<UnlockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UnlockUserResponse>;
    deleteUser(request: DeepPartial<DeleteUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteUserResponse>;
    registerPasskey(request: DeepPartial<RegisterPasskeyRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterPasskeyResponse>;
    verifyPasskeyRegistration(request: DeepPartial<VerifyPasskeyRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyPasskeyRegistrationResponse>;
    createPasskeyRegistrationLink(request: DeepPartial<CreatePasskeyRegistrationLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<CreatePasskeyRegistrationLinkResponse>;
    registerU2F(request: DeepPartial<RegisterU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterU2FResponse>;
    verifyU2FRegistration(request: DeepPartial<VerifyU2FRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyU2FRegistrationResponse>;
    registerTOTP(request: DeepPartial<RegisterTOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterTOTPResponse>;
    verifyTOTPRegistration(request: DeepPartial<VerifyTOTPRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyTOTPRegistrationResponse>;
    removeTOTP(request: DeepPartial<RemoveTOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveTOTPResponse>;
    addOTPSMS(request: DeepPartial<AddOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPSMSResponse>;
    removeOTPSMS(request: DeepPartial<RemoveOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPSMSResponse>;
    addOTPEmail(request: DeepPartial<AddOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPEmailResponse>;
    removeOTPEmail(request: DeepPartial<RemoveOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPEmailResponse>;
    startIdentityProviderIntent(request: DeepPartial<StartIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<StartIdentityProviderIntentResponse>;
    retrieveIdentityProviderIntent(request: DeepPartial<RetrieveIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<RetrieveIdentityProviderIntentResponse>;
    addIDPLink(request: DeepPartial<AddIDPLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<AddIDPLinkResponse>;
    passwordReset(request: DeepPartial<PasswordResetRequest>, options?: CallOptions & CallOptionsExt): Promise<PasswordResetResponse>;
    setPassword(request: DeepPartial<SetPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPasswordResponse>;
    listAuthenticationMethodTypes(request: DeepPartial<ListAuthenticationMethodTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAuthenticationMethodTypesResponse>;
}
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
