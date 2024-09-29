/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Instance, Organization } from "../../../object/v3alpha/object.js";
import { Details, ListDetails, SearchQuery } from "../../object/v3alpha/object.js";
import { AuthenticatorRegistrationCode, IdentityProviderIntent, IDPAuthenticator, IDPInformation, LDAPCredentials, RedirectURLs, ReturnPasswordResetCode, ReturnWebAuthNRegistrationCode, SendPasswordResetEmail, SendPasswordResetSMS, SendWebAuthNRegistrationLink, SetPassword, SetUsername, StartWebAuthNRegistration, VerifyWebAuthNRegistration } from "./authenticator.js";
import { ReturnEmailVerificationCode, ReturnPhoneVerificationCode, SendEmailVerificationCode, SendPhoneVerificationCode, SetEmail, SetPhone } from "./communication.js";
import { FieldName, SearchFilter } from "./query.js";
import { CreateUser, GetUser, PatchUser } from "./user.js";
export declare const protobufPackage = "zitadel.resources.user.v3alpha";
export interface SearchUsersRequest {
    instance?: Instance | undefined;
    query: SearchQuery | undefined;
    sortingColumn: FieldName;
    filters: SearchFilter[];
}
export interface SearchUsersResponse {
    details: ListDetails | undefined;
    result: GetUser[];
}
export interface GetUserRequest {
    instance?: Instance | undefined;
    id: string;
}
export interface GetUserResponse {
    user: GetUser | undefined;
}
export interface CreateUserRequest {
    instance?: Instance | undefined;
    organization: Organization | undefined;
    user: CreateUser | undefined;
}
export interface CreateUserResponse {
    details: Details | undefined;
    emailCode?: string | undefined;
    phoneCode?: string | undefined;
}
export interface PatchUserRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    user: PatchUser | undefined;
}
export interface PatchUserResponse {
    details: Details | undefined;
    emailCode?: string | undefined;
    phoneCode?: string | undefined;
}
export interface DeactivateUserRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
}
export interface DeactivateUserResponse {
    details: Details | undefined;
}
export interface ActivateUserRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
}
export interface ActivateUserResponse {
    details: Details | undefined;
}
export interface LockUserRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
}
export interface LockUserResponse {
    details: Details | undefined;
}
export interface UnlockUserRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
}
export interface UnlockUserResponse {
    details: Details | undefined;
}
export interface DeleteUserRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
}
export interface DeleteUserResponse {
    details: Details | undefined;
}
export interface SetContactEmailRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    email: SetEmail | undefined;
}
export interface SetContactEmailResponse {
    details: Details | undefined;
    verificationCode?: string | undefined;
}
export interface VerifyContactEmailRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    verificationCode: string;
}
export interface VerifyContactEmailResponse {
    details: Details | undefined;
}
export interface ResendContactEmailCodeRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    sendCode?: SendEmailVerificationCode | undefined;
    returnCode?: ReturnEmailVerificationCode | undefined;
}
export interface ResendContactEmailCodeResponse {
    details: Details | undefined;
    verificationCode?: string | undefined;
}
export interface SetContactPhoneRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    phone: SetPhone | undefined;
}
export interface SetContactPhoneResponse {
    details: Details | undefined;
    verificationCode?: string | undefined;
}
export interface VerifyContactPhoneRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    verificationCode: string;
}
export interface VerifyContactPhoneResponse {
    details: Details | undefined;
}
export interface ResendContactPhoneCodeRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    sendCode?: SendPhoneVerificationCode | undefined;
    returnCode?: ReturnPhoneVerificationCode | undefined;
}
export interface ResendContactPhoneCodeResponse {
    details: Details | undefined;
    verificationCode?: string | undefined;
}
export interface AddUsernameRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    username: SetUsername | undefined;
}
export interface AddUsernameResponse {
    details: Details | undefined;
    usernameId: string;
}
export interface RemoveUsernameRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    usernameId: string;
}
export interface RemoveUsernameResponse {
    details: Details | undefined;
}
export interface SetPasswordRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    newPassword: SetPassword | undefined;
}
export interface SetPasswordResponse {
    details: Details | undefined;
}
export interface RequestPasswordResetRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    sendEmail?: SendPasswordResetEmail | undefined;
    sendSms?: SendPasswordResetSMS | undefined;
    returnCode?: ReturnPasswordResetCode | undefined;
}
export interface RequestPasswordResetResponse {
    details: Details | undefined;
    verificationCode?: string | undefined;
}
export interface StartWebAuthNRegistrationRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    registration: StartWebAuthNRegistration | undefined;
}
export interface StartWebAuthNRegistrationResponse {
    details: Details | undefined;
    webAuthNId: string;
    publicKeyCredentialCreationOptions: {
        [key: string]: any;
    } | undefined;
}
export interface VerifyWebAuthNRegistrationRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    webAuthNId: string;
    verify: VerifyWebAuthNRegistration | undefined;
}
export interface VerifyWebAuthNRegistrationResponse {
    details: Details | undefined;
}
export interface CreateWebAuthNRegistrationLinkRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    sendLink?: SendWebAuthNRegistrationLink | undefined;
    returnCode?: ReturnWebAuthNRegistrationCode | undefined;
}
export interface CreateWebAuthNRegistrationLinkResponse {
    details: Details | undefined;
    code?: AuthenticatorRegistrationCode | undefined;
}
export interface RemoveWebAuthNAuthenticatorRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    webAuthNId: string;
}
export interface RemoveWebAuthNAuthenticatorResponse {
    details: Details | undefined;
}
export interface StartTOTPRegistrationRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
}
export interface StartTOTPRegistrationResponse {
    details: Details | undefined;
    totpId: string;
    uri: string;
    secret: string;
}
export interface VerifyTOTPRegistrationRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    totpId: string;
    code: string;
}
export interface VerifyTOTPRegistrationResponse {
    details: Details | undefined;
}
export interface RemoveTOTPAuthenticatorRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    totpId: string;
}
export interface RemoveTOTPAuthenticatorResponse {
    details: Details | undefined;
}
export interface AddOTPSMSAuthenticatorRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    phone: SetPhone | undefined;
}
export interface AddOTPSMSAuthenticatorResponse {
    details: Details | undefined;
    otpSmsId: string;
    verificationCode?: string | undefined;
}
export interface VerifyOTPSMSRegistrationRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    otpSmsId: string;
    code: string;
}
export interface VerifyOTPSMSRegistrationResponse {
    details: Details | undefined;
}
export interface RemoveOTPSMSAuthenticatorRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    otpSmsId: string;
}
export interface RemoveOTPSMSAuthenticatorResponse {
    details: Details | undefined;
}
export interface AddOTPEmailAuthenticatorRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    email: SetEmail | undefined;
}
export interface AddOTPEmailAuthenticatorResponse {
    details: Details | undefined;
    otpEmailId: string;
    verificationCode?: string | undefined;
}
export interface VerifyOTPEmailRegistrationRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    otpEmailId: string;
    code: string;
}
export interface VerifyOTPEmailRegistrationResponse {
    details: Details | undefined;
}
export interface RemoveOTPEmailAuthenticatorRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    otpEmailId: string;
}
export interface RemoveOTPEmailAuthenticatorResponse {
    details: Details | undefined;
}
export interface StartIdentityProviderIntentRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    idpId: string;
    urls?: RedirectURLs | undefined;
    ldap?: LDAPCredentials | undefined;
}
export interface StartIdentityProviderIntentResponse {
    details: Details | undefined;
    authUrl?: string | undefined;
    idpIntent?: IdentityProviderIntent | undefined;
    postForm?: Buffer | undefined;
}
export interface GetIdentityProviderIntentRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    idpIntentId: string;
    idpIntentToken: string;
}
export interface GetIdentityProviderIntentResponse {
    details: Details | undefined;
    idpInformation: IDPInformation | undefined;
    id?: string | undefined;
}
export interface AddIDPAuthenticatorRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    authenticator: IDPAuthenticator | undefined;
}
export interface AddIDPAuthenticatorResponse {
    details: Details | undefined;
}
export interface RemoveIDPAuthenticatorRequest {
    instance?: Instance | undefined;
    organization?: Organization | undefined;
    id: string;
    idpId: string;
}
export interface RemoveIDPAuthenticatorResponse {
    details: Details | undefined;
}
export declare const SearchUsersRequest: MessageFns<SearchUsersRequest>;
export declare const SearchUsersResponse: MessageFns<SearchUsersResponse>;
export declare const GetUserRequest: MessageFns<GetUserRequest>;
export declare const GetUserResponse: MessageFns<GetUserResponse>;
export declare const CreateUserRequest: MessageFns<CreateUserRequest>;
export declare const CreateUserResponse: MessageFns<CreateUserResponse>;
export declare const PatchUserRequest: MessageFns<PatchUserRequest>;
export declare const PatchUserResponse: MessageFns<PatchUserResponse>;
export declare const DeactivateUserRequest: MessageFns<DeactivateUserRequest>;
export declare const DeactivateUserResponse: MessageFns<DeactivateUserResponse>;
export declare const ActivateUserRequest: MessageFns<ActivateUserRequest>;
export declare const ActivateUserResponse: MessageFns<ActivateUserResponse>;
export declare const LockUserRequest: MessageFns<LockUserRequest>;
export declare const LockUserResponse: MessageFns<LockUserResponse>;
export declare const UnlockUserRequest: MessageFns<UnlockUserRequest>;
export declare const UnlockUserResponse: MessageFns<UnlockUserResponse>;
export declare const DeleteUserRequest: MessageFns<DeleteUserRequest>;
export declare const DeleteUserResponse: MessageFns<DeleteUserResponse>;
export declare const SetContactEmailRequest: MessageFns<SetContactEmailRequest>;
export declare const SetContactEmailResponse: MessageFns<SetContactEmailResponse>;
export declare const VerifyContactEmailRequest: MessageFns<VerifyContactEmailRequest>;
export declare const VerifyContactEmailResponse: MessageFns<VerifyContactEmailResponse>;
export declare const ResendContactEmailCodeRequest: MessageFns<ResendContactEmailCodeRequest>;
export declare const ResendContactEmailCodeResponse: MessageFns<ResendContactEmailCodeResponse>;
export declare const SetContactPhoneRequest: MessageFns<SetContactPhoneRequest>;
export declare const SetContactPhoneResponse: MessageFns<SetContactPhoneResponse>;
export declare const VerifyContactPhoneRequest: MessageFns<VerifyContactPhoneRequest>;
export declare const VerifyContactPhoneResponse: MessageFns<VerifyContactPhoneResponse>;
export declare const ResendContactPhoneCodeRequest: MessageFns<ResendContactPhoneCodeRequest>;
export declare const ResendContactPhoneCodeResponse: MessageFns<ResendContactPhoneCodeResponse>;
export declare const AddUsernameRequest: MessageFns<AddUsernameRequest>;
export declare const AddUsernameResponse: MessageFns<AddUsernameResponse>;
export declare const RemoveUsernameRequest: MessageFns<RemoveUsernameRequest>;
export declare const RemoveUsernameResponse: MessageFns<RemoveUsernameResponse>;
export declare const SetPasswordRequest: MessageFns<SetPasswordRequest>;
export declare const SetPasswordResponse: MessageFns<SetPasswordResponse>;
export declare const RequestPasswordResetRequest: MessageFns<RequestPasswordResetRequest>;
export declare const RequestPasswordResetResponse: MessageFns<RequestPasswordResetResponse>;
export declare const StartWebAuthNRegistrationRequest: MessageFns<StartWebAuthNRegistrationRequest>;
export declare const StartWebAuthNRegistrationResponse: MessageFns<StartWebAuthNRegistrationResponse>;
export declare const VerifyWebAuthNRegistrationRequest: MessageFns<VerifyWebAuthNRegistrationRequest>;
export declare const VerifyWebAuthNRegistrationResponse: MessageFns<VerifyWebAuthNRegistrationResponse>;
export declare const CreateWebAuthNRegistrationLinkRequest: MessageFns<CreateWebAuthNRegistrationLinkRequest>;
export declare const CreateWebAuthNRegistrationLinkResponse: MessageFns<CreateWebAuthNRegistrationLinkResponse>;
export declare const RemoveWebAuthNAuthenticatorRequest: MessageFns<RemoveWebAuthNAuthenticatorRequest>;
export declare const RemoveWebAuthNAuthenticatorResponse: MessageFns<RemoveWebAuthNAuthenticatorResponse>;
export declare const StartTOTPRegistrationRequest: MessageFns<StartTOTPRegistrationRequest>;
export declare const StartTOTPRegistrationResponse: MessageFns<StartTOTPRegistrationResponse>;
export declare const VerifyTOTPRegistrationRequest: MessageFns<VerifyTOTPRegistrationRequest>;
export declare const VerifyTOTPRegistrationResponse: MessageFns<VerifyTOTPRegistrationResponse>;
export declare const RemoveTOTPAuthenticatorRequest: MessageFns<RemoveTOTPAuthenticatorRequest>;
export declare const RemoveTOTPAuthenticatorResponse: MessageFns<RemoveTOTPAuthenticatorResponse>;
export declare const AddOTPSMSAuthenticatorRequest: MessageFns<AddOTPSMSAuthenticatorRequest>;
export declare const AddOTPSMSAuthenticatorResponse: MessageFns<AddOTPSMSAuthenticatorResponse>;
export declare const VerifyOTPSMSRegistrationRequest: MessageFns<VerifyOTPSMSRegistrationRequest>;
export declare const VerifyOTPSMSRegistrationResponse: MessageFns<VerifyOTPSMSRegistrationResponse>;
export declare const RemoveOTPSMSAuthenticatorRequest: MessageFns<RemoveOTPSMSAuthenticatorRequest>;
export declare const RemoveOTPSMSAuthenticatorResponse: MessageFns<RemoveOTPSMSAuthenticatorResponse>;
export declare const AddOTPEmailAuthenticatorRequest: MessageFns<AddOTPEmailAuthenticatorRequest>;
export declare const AddOTPEmailAuthenticatorResponse: MessageFns<AddOTPEmailAuthenticatorResponse>;
export declare const VerifyOTPEmailRegistrationRequest: MessageFns<VerifyOTPEmailRegistrationRequest>;
export declare const VerifyOTPEmailRegistrationResponse: MessageFns<VerifyOTPEmailRegistrationResponse>;
export declare const RemoveOTPEmailAuthenticatorRequest: MessageFns<RemoveOTPEmailAuthenticatorRequest>;
export declare const RemoveOTPEmailAuthenticatorResponse: MessageFns<RemoveOTPEmailAuthenticatorResponse>;
export declare const StartIdentityProviderIntentRequest: MessageFns<StartIdentityProviderIntentRequest>;
export declare const StartIdentityProviderIntentResponse: MessageFns<StartIdentityProviderIntentResponse>;
export declare const GetIdentityProviderIntentRequest: MessageFns<GetIdentityProviderIntentRequest>;
export declare const GetIdentityProviderIntentResponse: MessageFns<GetIdentityProviderIntentResponse>;
export declare const AddIDPAuthenticatorRequest: MessageFns<AddIDPAuthenticatorRequest>;
export declare const AddIDPAuthenticatorResponse: MessageFns<AddIDPAuthenticatorResponse>;
export declare const RemoveIDPAuthenticatorRequest: MessageFns<RemoveIDPAuthenticatorRequest>;
export declare const RemoveIDPAuthenticatorResponse: MessageFns<RemoveIDPAuthenticatorResponse>;
export type ZITADELUsersDefinition = typeof ZITADELUsersDefinition;
export declare const ZITADELUsersDefinition: {
    readonly name: "ZITADELUsers";
    readonly fullName: "zitadel.resources.user.v3alpha.ZITADELUsers";
    readonly methods: {
        readonly searchUsers: {
            readonly name: "SearchUsers";
            readonly requestType: MessageFns<SearchUsersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SearchUsersResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getUser: {
            readonly name: "GetUser";
            readonly requestType: MessageFns<GetUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly createUser: {
            readonly name: "CreateUser";
            readonly requestType: MessageFns<CreateUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly patchUser: {
            readonly name: "PatchUser";
            readonly requestType: MessageFns<PatchUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<PatchUserResponse>;
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
        readonly activateUser: {
            readonly name: "ActivateUser";
            readonly requestType: MessageFns<ActivateUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateUserResponse>;
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
        readonly setContactEmail: {
            readonly name: "SetContactEmail";
            readonly requestType: MessageFns<SetContactEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetContactEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyContactEmail: {
            readonly name: "VerifyContactEmail";
            readonly requestType: MessageFns<VerifyContactEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyContactEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendContactEmailCode: {
            readonly name: "ResendContactEmailCode";
            readonly requestType: MessageFns<ResendContactEmailCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendContactEmailCodeResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setContactPhone: {
            readonly name: "SetContactPhone";
            readonly requestType: MessageFns<SetContactPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetContactPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyContactPhone: {
            readonly name: "VerifyContactPhone";
            readonly requestType: MessageFns<VerifyContactPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyContactPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendContactPhoneCode: {
            readonly name: "ResendContactPhoneCode";
            readonly requestType: MessageFns<ResendContactPhoneCodeRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendContactPhoneCodeResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addUsername: {
            readonly name: "AddUsername";
            readonly requestType: MessageFns<AddUsernameRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddUsernameResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeUsername: {
            readonly name: "RemoveUsername";
            readonly requestType: MessageFns<RemoveUsernameRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveUsernameResponse>;
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
        readonly requestPasswordReset: {
            readonly name: "RequestPasswordReset";
            readonly requestType: MessageFns<RequestPasswordResetRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RequestPasswordResetResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly startWebAuthNRegistration: {
            readonly name: "StartWebAuthNRegistration";
            readonly requestType: MessageFns<StartWebAuthNRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<StartWebAuthNRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyWebAuthNRegistration: {
            readonly name: "VerifyWebAuthNRegistration";
            readonly requestType: MessageFns<VerifyWebAuthNRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyWebAuthNRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly createWebAuthNRegistrationLink: {
            readonly name: "CreateWebAuthNRegistrationLink";
            readonly requestType: MessageFns<CreateWebAuthNRegistrationLinkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateWebAuthNRegistrationLinkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeWebAuthNAuthenticator: {
            readonly name: "RemoveWebAuthNAuthenticator";
            readonly requestType: MessageFns<RemoveWebAuthNAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveWebAuthNAuthenticatorResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly startTOTPRegistration: {
            readonly name: "StartTOTPRegistration";
            readonly requestType: MessageFns<StartTOTPRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<StartTOTPRegistrationResponse>;
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
        readonly removeTOTPAuthenticator: {
            readonly name: "RemoveTOTPAuthenticator";
            readonly requestType: MessageFns<RemoveTOTPAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveTOTPAuthenticatorResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOTPSMSAuthenticator: {
            readonly name: "AddOTPSMSAuthenticator";
            readonly requestType: MessageFns<AddOTPSMSAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOTPSMSAuthenticatorResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyOTPSMSRegistration: {
            readonly name: "VerifyOTPSMSRegistration";
            readonly requestType: MessageFns<VerifyOTPSMSRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyOTPSMSRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOTPSMSAuthenticator: {
            readonly name: "RemoveOTPSMSAuthenticator";
            readonly requestType: MessageFns<RemoveOTPSMSAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOTPSMSAuthenticatorResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOTPEmailAuthenticator: {
            readonly name: "AddOTPEmailAuthenticator";
            readonly requestType: MessageFns<AddOTPEmailAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOTPEmailAuthenticatorResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyOTPEmailRegistration: {
            readonly name: "VerifyOTPEmailRegistration";
            readonly requestType: MessageFns<VerifyOTPEmailRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyOTPEmailRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOTPEmailAuthenticator: {
            readonly name: "RemoveOTPEmailAuthenticator";
            readonly requestType: MessageFns<RemoveOTPEmailAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOTPEmailAuthenticatorResponse>;
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
        readonly getIdentityProviderIntent: {
            readonly name: "GetIdentityProviderIntent";
            readonly requestType: MessageFns<GetIdentityProviderIntentRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetIdentityProviderIntentResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addIDPAuthenticator: {
            readonly name: "AddIDPAuthenticator";
            readonly requestType: MessageFns<AddIDPAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddIDPAuthenticatorResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400010: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeIDPAuthenticator: {
            readonly name: "RemoveIDPAuthenticator";
            readonly requestType: MessageFns<RemoveIDPAuthenticatorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveIDPAuthenticatorResponse>;
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
export interface ZITADELUsersServiceImplementation<CallContextExt = {}> {
    searchUsers(request: SearchUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SearchUsersResponse>>;
    getUser(request: GetUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserResponse>>;
    createUser(request: CreateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateUserResponse>>;
    patchUser(request: PatchUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PatchUserResponse>>;
    deactivateUser(request: DeactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateUserResponse>>;
    activateUser(request: ActivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateUserResponse>>;
    lockUser(request: LockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LockUserResponse>>;
    unlockUser(request: UnlockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UnlockUserResponse>>;
    deleteUser(request: DeleteUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteUserResponse>>;
    setContactEmail(request: SetContactEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetContactEmailResponse>>;
    verifyContactEmail(request: VerifyContactEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyContactEmailResponse>>;
    resendContactEmailCode(request: ResendContactEmailCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendContactEmailCodeResponse>>;
    setContactPhone(request: SetContactPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetContactPhoneResponse>>;
    verifyContactPhone(request: VerifyContactPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyContactPhoneResponse>>;
    resendContactPhoneCode(request: ResendContactPhoneCodeRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendContactPhoneCodeResponse>>;
    addUsername(request: AddUsernameRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddUsernameResponse>>;
    removeUsername(request: RemoveUsernameRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveUsernameResponse>>;
    setPassword(request: SetPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPasswordResponse>>;
    requestPasswordReset(request: RequestPasswordResetRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RequestPasswordResetResponse>>;
    startWebAuthNRegistration(request: StartWebAuthNRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StartWebAuthNRegistrationResponse>>;
    verifyWebAuthNRegistration(request: VerifyWebAuthNRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyWebAuthNRegistrationResponse>>;
    createWebAuthNRegistrationLink(request: CreateWebAuthNRegistrationLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateWebAuthNRegistrationLinkResponse>>;
    removeWebAuthNAuthenticator(request: RemoveWebAuthNAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveWebAuthNAuthenticatorResponse>>;
    startTOTPRegistration(request: StartTOTPRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StartTOTPRegistrationResponse>>;
    verifyTOTPRegistration(request: VerifyTOTPRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyTOTPRegistrationResponse>>;
    removeTOTPAuthenticator(request: RemoveTOTPAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveTOTPAuthenticatorResponse>>;
    addOTPSMSAuthenticator(request: AddOTPSMSAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPSMSAuthenticatorResponse>>;
    verifyOTPSMSRegistration(request: VerifyOTPSMSRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyOTPSMSRegistrationResponse>>;
    removeOTPSMSAuthenticator(request: RemoveOTPSMSAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPSMSAuthenticatorResponse>>;
    addOTPEmailAuthenticator(request: AddOTPEmailAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOTPEmailAuthenticatorResponse>>;
    verifyOTPEmailRegistration(request: VerifyOTPEmailRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyOTPEmailRegistrationResponse>>;
    removeOTPEmailAuthenticator(request: RemoveOTPEmailAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOTPEmailAuthenticatorResponse>>;
    startIdentityProviderIntent(request: StartIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<StartIdentityProviderIntentResponse>>;
    getIdentityProviderIntent(request: GetIdentityProviderIntentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetIdentityProviderIntentResponse>>;
    addIDPAuthenticator(request: AddIDPAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddIDPAuthenticatorResponse>>;
    removeIDPAuthenticator(request: RemoveIDPAuthenticatorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveIDPAuthenticatorResponse>>;
}
export interface ZITADELUsersClient<CallOptionsExt = {}> {
    searchUsers(request: DeepPartial<SearchUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<SearchUsersResponse>;
    getUser(request: DeepPartial<GetUserRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserResponse>;
    createUser(request: DeepPartial<CreateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateUserResponse>;
    patchUser(request: DeepPartial<PatchUserRequest>, options?: CallOptions & CallOptionsExt): Promise<PatchUserResponse>;
    deactivateUser(request: DeepPartial<DeactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateUserResponse>;
    activateUser(request: DeepPartial<ActivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateUserResponse>;
    lockUser(request: DeepPartial<LockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<LockUserResponse>;
    unlockUser(request: DeepPartial<UnlockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UnlockUserResponse>;
    deleteUser(request: DeepPartial<DeleteUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteUserResponse>;
    setContactEmail(request: DeepPartial<SetContactEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<SetContactEmailResponse>;
    verifyContactEmail(request: DeepPartial<VerifyContactEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyContactEmailResponse>;
    resendContactEmailCode(request: DeepPartial<ResendContactEmailCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendContactEmailCodeResponse>;
    setContactPhone(request: DeepPartial<SetContactPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<SetContactPhoneResponse>;
    verifyContactPhone(request: DeepPartial<VerifyContactPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyContactPhoneResponse>;
    resendContactPhoneCode(request: DeepPartial<ResendContactPhoneCodeRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendContactPhoneCodeResponse>;
    addUsername(request: DeepPartial<AddUsernameRequest>, options?: CallOptions & CallOptionsExt): Promise<AddUsernameResponse>;
    removeUsername(request: DeepPartial<RemoveUsernameRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveUsernameResponse>;
    setPassword(request: DeepPartial<SetPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPasswordResponse>;
    requestPasswordReset(request: DeepPartial<RequestPasswordResetRequest>, options?: CallOptions & CallOptionsExt): Promise<RequestPasswordResetResponse>;
    startWebAuthNRegistration(request: DeepPartial<StartWebAuthNRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<StartWebAuthNRegistrationResponse>;
    verifyWebAuthNRegistration(request: DeepPartial<VerifyWebAuthNRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyWebAuthNRegistrationResponse>;
    createWebAuthNRegistrationLink(request: DeepPartial<CreateWebAuthNRegistrationLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateWebAuthNRegistrationLinkResponse>;
    removeWebAuthNAuthenticator(request: DeepPartial<RemoveWebAuthNAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveWebAuthNAuthenticatorResponse>;
    startTOTPRegistration(request: DeepPartial<StartTOTPRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<StartTOTPRegistrationResponse>;
    verifyTOTPRegistration(request: DeepPartial<VerifyTOTPRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyTOTPRegistrationResponse>;
    removeTOTPAuthenticator(request: DeepPartial<RemoveTOTPAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveTOTPAuthenticatorResponse>;
    addOTPSMSAuthenticator(request: DeepPartial<AddOTPSMSAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPSMSAuthenticatorResponse>;
    verifyOTPSMSRegistration(request: DeepPartial<VerifyOTPSMSRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyOTPSMSRegistrationResponse>;
    removeOTPSMSAuthenticator(request: DeepPartial<RemoveOTPSMSAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPSMSAuthenticatorResponse>;
    addOTPEmailAuthenticator(request: DeepPartial<AddOTPEmailAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOTPEmailAuthenticatorResponse>;
    verifyOTPEmailRegistration(request: DeepPartial<VerifyOTPEmailRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyOTPEmailRegistrationResponse>;
    removeOTPEmailAuthenticator(request: DeepPartial<RemoveOTPEmailAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOTPEmailAuthenticatorResponse>;
    startIdentityProviderIntent(request: DeepPartial<StartIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<StartIdentityProviderIntentResponse>;
    getIdentityProviderIntent(request: DeepPartial<GetIdentityProviderIntentRequest>, options?: CallOptions & CallOptionsExt): Promise<GetIdentityProviderIntentResponse>;
    addIDPAuthenticator(request: DeepPartial<AddIDPAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<AddIDPAuthenticatorResponse>;
    removeIDPAuthenticator(request: DeepPartial<RemoveIDPAuthenticatorRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveIDPAuthenticatorResponse>;
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
