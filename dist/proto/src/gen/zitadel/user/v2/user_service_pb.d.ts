import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import type { Details, ListDetails, ListQuery, Organization } from "../../object/v2/object_pb";
import type { PasskeyAuthenticator, PasskeyRegistrationCode, ReturnPasskeyRegistrationCode, SendPasskeyRegistrationLink } from "./auth_pb";
import type { ReturnEmailVerificationCode, SendEmailVerificationCode, SetHumanEmail } from "./email_pb";
import type { ReturnPhoneVerificationCode, SendPhoneVerificationCode, SetHumanPhone } from "./phone_pb";
import type { IDPInformation, IDPIntent, IDPLink, LDAPCredentials, RedirectURLs } from "./idp_pb";
import type { HashedPassword, Password, ReturnPasswordResetCode, SendPasswordResetLink, SetPassword } from "./password_pb";
import type { Passkey, ReturnInviteCode, SendInviteCode, SetHumanProfile, SetMetadataEntry, User } from "./user_pb";
import type { SearchQuery, UserFieldName } from "./query_pb";
import type { JsonObject, Message } from "@bufbuild/protobuf";
export declare const file_zitadel_user_v2_user_service: GenFile;
export type AddHumanUserRequest = Message<"zitadel.user.v2.AddHumanUserRequest"> & {
    userId?: string;
    username?: string;
    organization?: Organization;
    profile?: SetHumanProfile;
    email?: SetHumanEmail;
    phone?: SetHumanPhone;
    metadata: SetMetadataEntry[];
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
    idpLinks: IDPLink[];
    totpSecret?: string;
};
export declare const AddHumanUserRequestSchema: GenMessage<AddHumanUserRequest>;
export type AddHumanUserResponse = Message<"zitadel.user.v2.AddHumanUserResponse"> & {
    userId: string;
    details?: Details;
    emailCode?: string;
    phoneCode?: string;
};
export declare const AddHumanUserResponseSchema: GenMessage<AddHumanUserResponse>;
export type GetUserByIDRequest = Message<"zitadel.user.v2.GetUserByIDRequest"> & {
    userId: string;
};
export declare const GetUserByIDRequestSchema: GenMessage<GetUserByIDRequest>;
export type GetUserByIDResponse = Message<"zitadel.user.v2.GetUserByIDResponse"> & {
    details?: Details;
    user?: User;
};
export declare const GetUserByIDResponseSchema: GenMessage<GetUserByIDResponse>;
export type ListUsersRequest = Message<"zitadel.user.v2.ListUsersRequest"> & {
    query?: ListQuery;
    sortingColumn: UserFieldName;
    queries: SearchQuery[];
};
export declare const ListUsersRequestSchema: GenMessage<ListUsersRequest>;
export type ListUsersResponse = Message<"zitadel.user.v2.ListUsersResponse"> & {
    details?: ListDetails;
    sortingColumn: UserFieldName;
    result: User[];
};
export declare const ListUsersResponseSchema: GenMessage<ListUsersResponse>;
export type SetEmailRequest = Message<"zitadel.user.v2.SetEmailRequest"> & {
    userId: string;
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
export declare const SetEmailRequestSchema: GenMessage<SetEmailRequest>;
export type SetEmailResponse = Message<"zitadel.user.v2.SetEmailResponse"> & {
    details?: Details;
    verificationCode?: string;
};
export declare const SetEmailResponseSchema: GenMessage<SetEmailResponse>;
export type ResendEmailCodeRequest = Message<"zitadel.user.v2.ResendEmailCodeRequest"> & {
    userId: string;
    verification: {
        value: SendEmailVerificationCode;
        case: "sendCode";
    } | {
        value: ReturnEmailVerificationCode;
        case: "returnCode";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const ResendEmailCodeRequestSchema: GenMessage<ResendEmailCodeRequest>;
export type ResendEmailCodeResponse = Message<"zitadel.user.v2.ResendEmailCodeResponse"> & {
    details?: Details;
    verificationCode?: string;
};
export declare const ResendEmailCodeResponseSchema: GenMessage<ResendEmailCodeResponse>;
export type VerifyEmailRequest = Message<"zitadel.user.v2.VerifyEmailRequest"> & {
    userId: string;
    verificationCode: string;
};
export declare const VerifyEmailRequestSchema: GenMessage<VerifyEmailRequest>;
export type VerifyEmailResponse = Message<"zitadel.user.v2.VerifyEmailResponse"> & {
    details?: Details;
};
export declare const VerifyEmailResponseSchema: GenMessage<VerifyEmailResponse>;
export type SetPhoneRequest = Message<"zitadel.user.v2.SetPhoneRequest"> & {
    userId: string;
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
export declare const SetPhoneRequestSchema: GenMessage<SetPhoneRequest>;
export type SetPhoneResponse = Message<"zitadel.user.v2.SetPhoneResponse"> & {
    details?: Details;
    verificationCode?: string;
};
export declare const SetPhoneResponseSchema: GenMessage<SetPhoneResponse>;
export type RemovePhoneRequest = Message<"zitadel.user.v2.RemovePhoneRequest"> & {
    userId: string;
};
export declare const RemovePhoneRequestSchema: GenMessage<RemovePhoneRequest>;
export type RemovePhoneResponse = Message<"zitadel.user.v2.RemovePhoneResponse"> & {
    details?: Details;
};
export declare const RemovePhoneResponseSchema: GenMessage<RemovePhoneResponse>;
export type ResendPhoneCodeRequest = Message<"zitadel.user.v2.ResendPhoneCodeRequest"> & {
    userId: string;
    verification: {
        value: SendPhoneVerificationCode;
        case: "sendCode";
    } | {
        value: ReturnPhoneVerificationCode;
        case: "returnCode";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const ResendPhoneCodeRequestSchema: GenMessage<ResendPhoneCodeRequest>;
export type ResendPhoneCodeResponse = Message<"zitadel.user.v2.ResendPhoneCodeResponse"> & {
    details?: Details;
    verificationCode?: string;
};
export declare const ResendPhoneCodeResponseSchema: GenMessage<ResendPhoneCodeResponse>;
export type VerifyPhoneRequest = Message<"zitadel.user.v2.VerifyPhoneRequest"> & {
    userId: string;
    verificationCode: string;
};
export declare const VerifyPhoneRequestSchema: GenMessage<VerifyPhoneRequest>;
export type VerifyPhoneResponse = Message<"zitadel.user.v2.VerifyPhoneResponse"> & {
    details?: Details;
};
export declare const VerifyPhoneResponseSchema: GenMessage<VerifyPhoneResponse>;
export type DeleteUserRequest = Message<"zitadel.user.v2.DeleteUserRequest"> & {
    userId: string;
};
export declare const DeleteUserRequestSchema: GenMessage<DeleteUserRequest>;
export type DeleteUserResponse = Message<"zitadel.user.v2.DeleteUserResponse"> & {
    details?: Details;
};
export declare const DeleteUserResponseSchema: GenMessage<DeleteUserResponse>;
export type UpdateHumanUserRequest = Message<"zitadel.user.v2.UpdateHumanUserRequest"> & {
    userId: string;
    username?: string;
    profile?: SetHumanProfile;
    email?: SetHumanEmail;
    phone?: SetHumanPhone;
    password?: SetPassword;
};
export declare const UpdateHumanUserRequestSchema: GenMessage<UpdateHumanUserRequest>;
export type UpdateHumanUserResponse = Message<"zitadel.user.v2.UpdateHumanUserResponse"> & {
    details?: Details;
    emailCode?: string;
    phoneCode?: string;
};
export declare const UpdateHumanUserResponseSchema: GenMessage<UpdateHumanUserResponse>;
export type DeactivateUserRequest = Message<"zitadel.user.v2.DeactivateUserRequest"> & {
    userId: string;
};
export declare const DeactivateUserRequestSchema: GenMessage<DeactivateUserRequest>;
export type DeactivateUserResponse = Message<"zitadel.user.v2.DeactivateUserResponse"> & {
    details?: Details;
};
export declare const DeactivateUserResponseSchema: GenMessage<DeactivateUserResponse>;
export type ReactivateUserRequest = Message<"zitadel.user.v2.ReactivateUserRequest"> & {
    userId: string;
};
export declare const ReactivateUserRequestSchema: GenMessage<ReactivateUserRequest>;
export type ReactivateUserResponse = Message<"zitadel.user.v2.ReactivateUserResponse"> & {
    details?: Details;
};
export declare const ReactivateUserResponseSchema: GenMessage<ReactivateUserResponse>;
export type LockUserRequest = Message<"zitadel.user.v2.LockUserRequest"> & {
    userId: string;
};
export declare const LockUserRequestSchema: GenMessage<LockUserRequest>;
export type LockUserResponse = Message<"zitadel.user.v2.LockUserResponse"> & {
    details?: Details;
};
export declare const LockUserResponseSchema: GenMessage<LockUserResponse>;
export type UnlockUserRequest = Message<"zitadel.user.v2.UnlockUserRequest"> & {
    userId: string;
};
export declare const UnlockUserRequestSchema: GenMessage<UnlockUserRequest>;
export type UnlockUserResponse = Message<"zitadel.user.v2.UnlockUserResponse"> & {
    details?: Details;
};
export declare const UnlockUserResponseSchema: GenMessage<UnlockUserResponse>;
export type RegisterPasskeyRequest = Message<"zitadel.user.v2.RegisterPasskeyRequest"> & {
    userId: string;
    code?: PasskeyRegistrationCode;
    authenticator: PasskeyAuthenticator;
    domain: string;
};
export declare const RegisterPasskeyRequestSchema: GenMessage<RegisterPasskeyRequest>;
export type RegisterPasskeyResponse = Message<"zitadel.user.v2.RegisterPasskeyResponse"> & {
    details?: Details;
    passkeyId: string;
    publicKeyCredentialCreationOptions?: JsonObject;
};
export declare const RegisterPasskeyResponseSchema: GenMessage<RegisterPasskeyResponse>;
export type VerifyPasskeyRegistrationRequest = Message<"zitadel.user.v2.VerifyPasskeyRegistrationRequest"> & {
    userId: string;
    passkeyId: string;
    publicKeyCredential?: JsonObject;
    passkeyName: string;
};
export declare const VerifyPasskeyRegistrationRequestSchema: GenMessage<VerifyPasskeyRegistrationRequest>;
export type VerifyPasskeyRegistrationResponse = Message<"zitadel.user.v2.VerifyPasskeyRegistrationResponse"> & {
    details?: Details;
};
export declare const VerifyPasskeyRegistrationResponseSchema: GenMessage<VerifyPasskeyRegistrationResponse>;
export type RegisterU2FRequest = Message<"zitadel.user.v2.RegisterU2FRequest"> & {
    userId: string;
    domain: string;
};
export declare const RegisterU2FRequestSchema: GenMessage<RegisterU2FRequest>;
export type RegisterU2FResponse = Message<"zitadel.user.v2.RegisterU2FResponse"> & {
    details?: Details;
    u2fId: string;
    publicKeyCredentialCreationOptions?: JsonObject;
};
export declare const RegisterU2FResponseSchema: GenMessage<RegisterU2FResponse>;
export type VerifyU2FRegistrationRequest = Message<"zitadel.user.v2.VerifyU2FRegistrationRequest"> & {
    userId: string;
    u2fId: string;
    publicKeyCredential?: JsonObject;
    tokenName: string;
};
export declare const VerifyU2FRegistrationRequestSchema: GenMessage<VerifyU2FRegistrationRequest>;
export type VerifyU2FRegistrationResponse = Message<"zitadel.user.v2.VerifyU2FRegistrationResponse"> & {
    details?: Details;
};
export declare const VerifyU2FRegistrationResponseSchema: GenMessage<VerifyU2FRegistrationResponse>;
export type RemoveU2FRequest = Message<"zitadel.user.v2.RemoveU2FRequest"> & {
    userId: string;
    u2fId: string;
};
export declare const RemoveU2FRequestSchema: GenMessage<RemoveU2FRequest>;
export type RemoveU2FResponse = Message<"zitadel.user.v2.RemoveU2FResponse"> & {
    details?: Details;
};
export declare const RemoveU2FResponseSchema: GenMessage<RemoveU2FResponse>;
export type RegisterTOTPRequest = Message<"zitadel.user.v2.RegisterTOTPRequest"> & {
    userId: string;
};
export declare const RegisterTOTPRequestSchema: GenMessage<RegisterTOTPRequest>;
export type RegisterTOTPResponse = Message<"zitadel.user.v2.RegisterTOTPResponse"> & {
    details?: Details;
    uri: string;
    secret: string;
};
export declare const RegisterTOTPResponseSchema: GenMessage<RegisterTOTPResponse>;
export type VerifyTOTPRegistrationRequest = Message<"zitadel.user.v2.VerifyTOTPRegistrationRequest"> & {
    userId: string;
    code: string;
};
export declare const VerifyTOTPRegistrationRequestSchema: GenMessage<VerifyTOTPRegistrationRequest>;
export type VerifyTOTPRegistrationResponse = Message<"zitadel.user.v2.VerifyTOTPRegistrationResponse"> & {
    details?: Details;
};
export declare const VerifyTOTPRegistrationResponseSchema: GenMessage<VerifyTOTPRegistrationResponse>;
export type RemoveTOTPRequest = Message<"zitadel.user.v2.RemoveTOTPRequest"> & {
    userId: string;
};
export declare const RemoveTOTPRequestSchema: GenMessage<RemoveTOTPRequest>;
export type RemoveTOTPResponse = Message<"zitadel.user.v2.RemoveTOTPResponse"> & {
    details?: Details;
};
export declare const RemoveTOTPResponseSchema: GenMessage<RemoveTOTPResponse>;
export type AddOTPSMSRequest = Message<"zitadel.user.v2.AddOTPSMSRequest"> & {
    userId: string;
};
export declare const AddOTPSMSRequestSchema: GenMessage<AddOTPSMSRequest>;
export type AddOTPSMSResponse = Message<"zitadel.user.v2.AddOTPSMSResponse"> & {
    details?: Details;
};
export declare const AddOTPSMSResponseSchema: GenMessage<AddOTPSMSResponse>;
export type RemoveOTPSMSRequest = Message<"zitadel.user.v2.RemoveOTPSMSRequest"> & {
    userId: string;
};
export declare const RemoveOTPSMSRequestSchema: GenMessage<RemoveOTPSMSRequest>;
export type RemoveOTPSMSResponse = Message<"zitadel.user.v2.RemoveOTPSMSResponse"> & {
    details?: Details;
};
export declare const RemoveOTPSMSResponseSchema: GenMessage<RemoveOTPSMSResponse>;
export type AddOTPEmailRequest = Message<"zitadel.user.v2.AddOTPEmailRequest"> & {
    userId: string;
};
export declare const AddOTPEmailRequestSchema: GenMessage<AddOTPEmailRequest>;
export type AddOTPEmailResponse = Message<"zitadel.user.v2.AddOTPEmailResponse"> & {
    details?: Details;
};
export declare const AddOTPEmailResponseSchema: GenMessage<AddOTPEmailResponse>;
export type RemoveOTPEmailRequest = Message<"zitadel.user.v2.RemoveOTPEmailRequest"> & {
    userId: string;
};
export declare const RemoveOTPEmailRequestSchema: GenMessage<RemoveOTPEmailRequest>;
export type RemoveOTPEmailResponse = Message<"zitadel.user.v2.RemoveOTPEmailResponse"> & {
    details?: Details;
};
export declare const RemoveOTPEmailResponseSchema: GenMessage<RemoveOTPEmailResponse>;
export type CreatePasskeyRegistrationLinkRequest = Message<"zitadel.user.v2.CreatePasskeyRegistrationLinkRequest"> & {
    userId: string;
    medium: {
        value: SendPasskeyRegistrationLink;
        case: "sendLink";
    } | {
        value: ReturnPasskeyRegistrationCode;
        case: "returnCode";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const CreatePasskeyRegistrationLinkRequestSchema: GenMessage<CreatePasskeyRegistrationLinkRequest>;
export type CreatePasskeyRegistrationLinkResponse = Message<"zitadel.user.v2.CreatePasskeyRegistrationLinkResponse"> & {
    details?: Details;
    code?: PasskeyRegistrationCode;
};
export declare const CreatePasskeyRegistrationLinkResponseSchema: GenMessage<CreatePasskeyRegistrationLinkResponse>;
export type ListPasskeysRequest = Message<"zitadel.user.v2.ListPasskeysRequest"> & {
    userId: string;
};
export declare const ListPasskeysRequestSchema: GenMessage<ListPasskeysRequest>;
export type ListPasskeysResponse = Message<"zitadel.user.v2.ListPasskeysResponse"> & {
    details?: ListDetails;
    result: Passkey[];
};
export declare const ListPasskeysResponseSchema: GenMessage<ListPasskeysResponse>;
export type RemovePasskeyRequest = Message<"zitadel.user.v2.RemovePasskeyRequest"> & {
    userId: string;
    passkeyId: string;
};
export declare const RemovePasskeyRequestSchema: GenMessage<RemovePasskeyRequest>;
export type RemovePasskeyResponse = Message<"zitadel.user.v2.RemovePasskeyResponse"> & {
    details?: Details;
};
export declare const RemovePasskeyResponseSchema: GenMessage<RemovePasskeyResponse>;
export type StartIdentityProviderIntentRequest = Message<"zitadel.user.v2.StartIdentityProviderIntentRequest"> & {
    idpId: string;
    content: {
        value: RedirectURLs;
        case: "urls";
    } | {
        value: LDAPCredentials;
        case: "ldap";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const StartIdentityProviderIntentRequestSchema: GenMessage<StartIdentityProviderIntentRequest>;
export type StartIdentityProviderIntentResponse = Message<"zitadel.user.v2.StartIdentityProviderIntentResponse"> & {
    details?: Details;
    nextStep: {
        value: string;
        case: "authUrl";
    } | {
        value: IDPIntent;
        case: "idpIntent";
    } | {
        value: Uint8Array;
        case: "postForm";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const StartIdentityProviderIntentResponseSchema: GenMessage<StartIdentityProviderIntentResponse>;
export type RetrieveIdentityProviderIntentRequest = Message<"zitadel.user.v2.RetrieveIdentityProviderIntentRequest"> & {
    idpIntentId: string;
    idpIntentToken: string;
};
export declare const RetrieveIdentityProviderIntentRequestSchema: GenMessage<RetrieveIdentityProviderIntentRequest>;
export type RetrieveIdentityProviderIntentResponse = Message<"zitadel.user.v2.RetrieveIdentityProviderIntentResponse"> & {
    details?: Details;
    idpInformation?: IDPInformation;
    userId: string;
};
export declare const RetrieveIdentityProviderIntentResponseSchema: GenMessage<RetrieveIdentityProviderIntentResponse>;
export type AddIDPLinkRequest = Message<"zitadel.user.v2.AddIDPLinkRequest"> & {
    userId: string;
    idpLink?: IDPLink;
};
export declare const AddIDPLinkRequestSchema: GenMessage<AddIDPLinkRequest>;
export type AddIDPLinkResponse = Message<"zitadel.user.v2.AddIDPLinkResponse"> & {
    details?: Details;
};
export declare const AddIDPLinkResponseSchema: GenMessage<AddIDPLinkResponse>;
export type ListIDPLinksRequest = Message<"zitadel.user.v2.ListIDPLinksRequest"> & {
    userId: string;
    query?: ListQuery;
};
export declare const ListIDPLinksRequestSchema: GenMessage<ListIDPLinksRequest>;
export type ListIDPLinksResponse = Message<"zitadel.user.v2.ListIDPLinksResponse"> & {
    details?: ListDetails;
    result: IDPLink[];
};
export declare const ListIDPLinksResponseSchema: GenMessage<ListIDPLinksResponse>;
export type RemoveIDPLinkRequest = Message<"zitadel.user.v2.RemoveIDPLinkRequest"> & {
    userId: string;
    idpId: string;
    linkedUserId: string;
};
export declare const RemoveIDPLinkRequestSchema: GenMessage<RemoveIDPLinkRequest>;
export type RemoveIDPLinkResponse = Message<"zitadel.user.v2.RemoveIDPLinkResponse"> & {
    details?: Details;
};
export declare const RemoveIDPLinkResponseSchema: GenMessage<RemoveIDPLinkResponse>;
export type PasswordResetRequest = Message<"zitadel.user.v2.PasswordResetRequest"> & {
    userId: string;
    medium: {
        value: SendPasswordResetLink;
        case: "sendLink";
    } | {
        value: ReturnPasswordResetCode;
        case: "returnCode";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const PasswordResetRequestSchema: GenMessage<PasswordResetRequest>;
export type PasswordResetResponse = Message<"zitadel.user.v2.PasswordResetResponse"> & {
    details?: Details;
    verificationCode?: string;
};
export declare const PasswordResetResponseSchema: GenMessage<PasswordResetResponse>;
export type SetPasswordRequest = Message<"zitadel.user.v2.SetPasswordRequest"> & {
    userId: string;
    newPassword?: Password;
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
export declare const SetPasswordRequestSchema: GenMessage<SetPasswordRequest>;
export type SetPasswordResponse = Message<"zitadel.user.v2.SetPasswordResponse"> & {
    details?: Details;
};
export declare const SetPasswordResponseSchema: GenMessage<SetPasswordResponse>;
export type ListAuthenticationMethodTypesRequest = Message<"zitadel.user.v2.ListAuthenticationMethodTypesRequest"> & {
    userId: string;
};
export declare const ListAuthenticationMethodTypesRequestSchema: GenMessage<ListAuthenticationMethodTypesRequest>;
export type ListAuthenticationMethodTypesResponse = Message<"zitadel.user.v2.ListAuthenticationMethodTypesResponse"> & {
    details?: ListDetails;
    authMethodTypes: AuthenticationMethodType[];
};
export declare const ListAuthenticationMethodTypesResponseSchema: GenMessage<ListAuthenticationMethodTypesResponse>;
export type CreateInviteCodeRequest = Message<"zitadel.user.v2.CreateInviteCodeRequest"> & {
    userId: string;
    verification: {
        value: SendInviteCode;
        case: "sendCode";
    } | {
        value: ReturnInviteCode;
        case: "returnCode";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const CreateInviteCodeRequestSchema: GenMessage<CreateInviteCodeRequest>;
export type CreateInviteCodeResponse = Message<"zitadel.user.v2.CreateInviteCodeResponse"> & {
    details?: Details;
    inviteCode?: string;
};
export declare const CreateInviteCodeResponseSchema: GenMessage<CreateInviteCodeResponse>;
export type ResendInviteCodeRequest = Message<"zitadel.user.v2.ResendInviteCodeRequest"> & {
    userId: string;
};
export declare const ResendInviteCodeRequestSchema: GenMessage<ResendInviteCodeRequest>;
export type ResendInviteCodeResponse = Message<"zitadel.user.v2.ResendInviteCodeResponse"> & {
    details?: Details;
};
export declare const ResendInviteCodeResponseSchema: GenMessage<ResendInviteCodeResponse>;
export type VerifyInviteCodeRequest = Message<"zitadel.user.v2.VerifyInviteCodeRequest"> & {
    userId: string;
    verificationCode: string;
};
export declare const VerifyInviteCodeRequestSchema: GenMessage<VerifyInviteCodeRequest>;
export type VerifyInviteCodeResponse = Message<"zitadel.user.v2.VerifyInviteCodeResponse"> & {
    details?: Details;
};
export declare const VerifyInviteCodeResponseSchema: GenMessage<VerifyInviteCodeResponse>;
export declare enum AuthenticationMethodType {
    UNSPECIFIED = 0,
    PASSWORD = 1,
    PASSKEY = 2,
    IDP = 3,
    TOTP = 4,
    U2F = 5,
    OTP_SMS = 6,
    OTP_EMAIL = 7
}
export declare const AuthenticationMethodTypeSchema: GenEnum<AuthenticationMethodType>;
export declare const UserService: GenService<{
    addHumanUser: {
        methodKind: "unary";
        input: typeof AddHumanUserRequestSchema;
        output: typeof AddHumanUserResponseSchema;
    };
    getUserByID: {
        methodKind: "unary";
        input: typeof GetUserByIDRequestSchema;
        output: typeof GetUserByIDResponseSchema;
    };
    listUsers: {
        methodKind: "unary";
        input: typeof ListUsersRequestSchema;
        output: typeof ListUsersResponseSchema;
    };
    setEmail: {
        methodKind: "unary";
        input: typeof SetEmailRequestSchema;
        output: typeof SetEmailResponseSchema;
    };
    resendEmailCode: {
        methodKind: "unary";
        input: typeof ResendEmailCodeRequestSchema;
        output: typeof ResendEmailCodeResponseSchema;
    };
    verifyEmail: {
        methodKind: "unary";
        input: typeof VerifyEmailRequestSchema;
        output: typeof VerifyEmailResponseSchema;
    };
    setPhone: {
        methodKind: "unary";
        input: typeof SetPhoneRequestSchema;
        output: typeof SetPhoneResponseSchema;
    };
    removePhone: {
        methodKind: "unary";
        input: typeof RemovePhoneRequestSchema;
        output: typeof RemovePhoneResponseSchema;
    };
    resendPhoneCode: {
        methodKind: "unary";
        input: typeof ResendPhoneCodeRequestSchema;
        output: typeof ResendPhoneCodeResponseSchema;
    };
    verifyPhone: {
        methodKind: "unary";
        input: typeof VerifyPhoneRequestSchema;
        output: typeof VerifyPhoneResponseSchema;
    };
    updateHumanUser: {
        methodKind: "unary";
        input: typeof UpdateHumanUserRequestSchema;
        output: typeof UpdateHumanUserResponseSchema;
    };
    deactivateUser: {
        methodKind: "unary";
        input: typeof DeactivateUserRequestSchema;
        output: typeof DeactivateUserResponseSchema;
    };
    reactivateUser: {
        methodKind: "unary";
        input: typeof ReactivateUserRequestSchema;
        output: typeof ReactivateUserResponseSchema;
    };
    lockUser: {
        methodKind: "unary";
        input: typeof LockUserRequestSchema;
        output: typeof LockUserResponseSchema;
    };
    unlockUser: {
        methodKind: "unary";
        input: typeof UnlockUserRequestSchema;
        output: typeof UnlockUserResponseSchema;
    };
    deleteUser: {
        methodKind: "unary";
        input: typeof DeleteUserRequestSchema;
        output: typeof DeleteUserResponseSchema;
    };
    registerPasskey: {
        methodKind: "unary";
        input: typeof RegisterPasskeyRequestSchema;
        output: typeof RegisterPasskeyResponseSchema;
    };
    verifyPasskeyRegistration: {
        methodKind: "unary";
        input: typeof VerifyPasskeyRegistrationRequestSchema;
        output: typeof VerifyPasskeyRegistrationResponseSchema;
    };
    createPasskeyRegistrationLink: {
        methodKind: "unary";
        input: typeof CreatePasskeyRegistrationLinkRequestSchema;
        output: typeof CreatePasskeyRegistrationLinkResponseSchema;
    };
    listPasskeys: {
        methodKind: "unary";
        input: typeof ListPasskeysRequestSchema;
        output: typeof ListPasskeysResponseSchema;
    };
    removePasskey: {
        methodKind: "unary";
        input: typeof RemovePasskeyRequestSchema;
        output: typeof RemovePasskeyResponseSchema;
    };
    registerU2F: {
        methodKind: "unary";
        input: typeof RegisterU2FRequestSchema;
        output: typeof RegisterU2FResponseSchema;
    };
    verifyU2FRegistration: {
        methodKind: "unary";
        input: typeof VerifyU2FRegistrationRequestSchema;
        output: typeof VerifyU2FRegistrationResponseSchema;
    };
    removeU2F: {
        methodKind: "unary";
        input: typeof RemoveU2FRequestSchema;
        output: typeof RemoveU2FResponseSchema;
    };
    registerTOTP: {
        methodKind: "unary";
        input: typeof RegisterTOTPRequestSchema;
        output: typeof RegisterTOTPResponseSchema;
    };
    verifyTOTPRegistration: {
        methodKind: "unary";
        input: typeof VerifyTOTPRegistrationRequestSchema;
        output: typeof VerifyTOTPRegistrationResponseSchema;
    };
    removeTOTP: {
        methodKind: "unary";
        input: typeof RemoveTOTPRequestSchema;
        output: typeof RemoveTOTPResponseSchema;
    };
    addOTPSMS: {
        methodKind: "unary";
        input: typeof AddOTPSMSRequestSchema;
        output: typeof AddOTPSMSResponseSchema;
    };
    removeOTPSMS: {
        methodKind: "unary";
        input: typeof RemoveOTPSMSRequestSchema;
        output: typeof RemoveOTPSMSResponseSchema;
    };
    addOTPEmail: {
        methodKind: "unary";
        input: typeof AddOTPEmailRequestSchema;
        output: typeof AddOTPEmailResponseSchema;
    };
    removeOTPEmail: {
        methodKind: "unary";
        input: typeof RemoveOTPEmailRequestSchema;
        output: typeof RemoveOTPEmailResponseSchema;
    };
    startIdentityProviderIntent: {
        methodKind: "unary";
        input: typeof StartIdentityProviderIntentRequestSchema;
        output: typeof StartIdentityProviderIntentResponseSchema;
    };
    retrieveIdentityProviderIntent: {
        methodKind: "unary";
        input: typeof RetrieveIdentityProviderIntentRequestSchema;
        output: typeof RetrieveIdentityProviderIntentResponseSchema;
    };
    addIDPLink: {
        methodKind: "unary";
        input: typeof AddIDPLinkRequestSchema;
        output: typeof AddIDPLinkResponseSchema;
    };
    listIDPLinks: {
        methodKind: "unary";
        input: typeof ListIDPLinksRequestSchema;
        output: typeof ListIDPLinksResponseSchema;
    };
    removeIDPLink: {
        methodKind: "unary";
        input: typeof RemoveIDPLinkRequestSchema;
        output: typeof RemoveIDPLinkResponseSchema;
    };
    passwordReset: {
        methodKind: "unary";
        input: typeof PasswordResetRequestSchema;
        output: typeof PasswordResetResponseSchema;
    };
    setPassword: {
        methodKind: "unary";
        input: typeof SetPasswordRequestSchema;
        output: typeof SetPasswordResponseSchema;
    };
    listAuthenticationMethodTypes: {
        methodKind: "unary";
        input: typeof ListAuthenticationMethodTypesRequestSchema;
        output: typeof ListAuthenticationMethodTypesResponseSchema;
    };
    createInviteCode: {
        methodKind: "unary";
        input: typeof CreateInviteCodeRequestSchema;
        output: typeof CreateInviteCodeResponseSchema;
    };
    resendInviteCode: {
        methodKind: "unary";
        input: typeof ResendInviteCodeRequestSchema;
        output: typeof ResendInviteCodeResponseSchema;
    };
    verifyInviteCode: {
        methodKind: "unary";
        input: typeof VerifyInviteCodeRequestSchema;
        output: typeof VerifyInviteCodeResponseSchema;
    };
}>;
