/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Duration } from "../google/protobuf/duration.js";
import { Change, ChangeQuery } from "./change.js";
import { IDPUserLink } from "./idp.js";
import { Metadata, MetadataQuery } from "./metadata.js";
import { ListDetails, ListQuery, ObjectDetails } from "./object.js";
import { Org, OrgFieldName, OrgQuery } from "./org.js";
import { LabelPolicy, LoginPolicy, PasswordComplexityPolicy, PrivacyPolicy } from "./policy.js";
import { AuthFactor, Email, Gender, Membership, MembershipQuery, Phone, Profile, RefreshToken, Session, Type, User, UserGrantState, WebAuthNKey, WebAuthNToken, WebAuthNVerification } from "./user.js";
export declare const protobufPackage = "zitadel.auth.v1";
export interface HealthzRequest {
}
export interface HealthzResponse {
}
export interface GetSupportedLanguagesRequest {
}
export interface GetSupportedLanguagesResponse {
    languages: string[];
}
export interface GetMyUserRequest {
}
export interface GetMyUserResponse {
    user: User | undefined;
    lastLogin: Date | undefined;
}
export interface RemoveMyUserRequest {
}
export interface RemoveMyUserResponse {
    details: ObjectDetails | undefined;
}
export interface ListMyUserChangesRequest {
    query: ChangeQuery | undefined;
}
export interface ListMyUserChangesResponse {
    result: Change[];
}
export interface ListMyUserSessionsRequest {
}
export interface ListMyUserSessionsResponse {
    result: Session[];
}
export interface ListMyMetadataRequest {
    query: ListQuery | undefined;
    queries: MetadataQuery[];
}
export interface ListMyMetadataResponse {
    details: ListDetails | undefined;
    result: Metadata[];
}
export interface GetMyMetadataRequest {
    key: string;
}
export interface GetMyMetadataResponse {
    metadata: Metadata | undefined;
}
export interface SetMyMetadataRequest {
    key: string;
    value: Buffer;
}
export interface SetMyMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface BulkSetMyMetadataRequest {
    metadata: BulkSetMyMetadataRequest_Metadata[];
}
export interface BulkSetMyMetadataRequest_Metadata {
    key: string;
    value: Buffer;
}
export interface BulkSetMyMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMyMetadataRequest {
    key: string;
}
export interface RemoveMyMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface BulkRemoveMyMetadataRequest {
    keys: string[];
}
export interface BulkRemoveMyMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface ListMyRefreshTokensRequest {
}
export interface ListMyRefreshTokensResponse {
    details: ListDetails | undefined;
    result: RefreshToken[];
}
export interface RevokeMyRefreshTokenRequest {
    id: string;
}
export interface RevokeMyRefreshTokenResponse {
    details: ObjectDetails | undefined;
}
export interface RevokeAllMyRefreshTokensRequest {
}
export interface RevokeAllMyRefreshTokensResponse {
}
export interface UpdateMyUserNameRequest {
    userName: string;
}
export interface UpdateMyUserNameResponse {
    details: ObjectDetails | undefined;
}
export interface GetMyPasswordComplexityPolicyRequest {
}
export interface GetMyPasswordComplexityPolicyResponse {
    policy: PasswordComplexityPolicy | undefined;
}
export interface UpdateMyPasswordRequest {
    oldPassword: string;
    newPassword: string;
}
export interface UpdateMyPasswordResponse {
    details: ObjectDetails | undefined;
}
export interface GetMyProfileRequest {
}
export interface GetMyProfileResponse {
    details: ObjectDetails | undefined;
    profile: Profile | undefined;
}
export interface UpdateMyProfileRequest {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface UpdateMyProfileResponse {
    details: ObjectDetails | undefined;
}
export interface GetMyEmailRequest {
}
export interface GetMyEmailResponse {
    details: ObjectDetails | undefined;
    email: Email | undefined;
}
export interface SetMyEmailRequest {
    email: string;
}
export interface SetMyEmailResponse {
    details: ObjectDetails | undefined;
}
export interface VerifyMyEmailRequest {
    code: string;
}
export interface VerifyMyEmailResponse {
    details: ObjectDetails | undefined;
}
export interface ResendMyEmailVerificationRequest {
}
export interface ResendMyEmailVerificationResponse {
    details: ObjectDetails | undefined;
}
export interface GetMyPhoneRequest {
}
export interface GetMyPhoneResponse {
    details: ObjectDetails | undefined;
    phone: Phone | undefined;
}
export interface SetMyPhoneRequest {
    phone: string;
}
export interface SetMyPhoneResponse {
    details: ObjectDetails | undefined;
}
export interface VerifyMyPhoneRequest {
    code: string;
}
export interface VerifyMyPhoneResponse {
    details: ObjectDetails | undefined;
}
export interface ResendMyPhoneVerificationRequest {
}
export interface ResendMyPhoneVerificationResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMyPhoneRequest {
}
export interface RemoveMyPhoneResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMyAvatarRequest {
}
export interface RemoveMyAvatarResponse {
    details: ObjectDetails | undefined;
}
export interface ListMyLinkedIDPsRequest {
    query: ListQuery | undefined;
}
export interface ListMyLinkedIDPsResponse {
    details: ListDetails | undefined;
    result: IDPUserLink[];
}
export interface RemoveMyLinkedIDPRequest {
    idpId: string;
    linkedUserId: string;
}
export interface RemoveMyLinkedIDPResponse {
    details: ObjectDetails | undefined;
}
export interface ListMyAuthFactorsRequest {
}
export interface ListMyAuthFactorsResponse {
    result: AuthFactor[];
}
export interface AddMyAuthFactorU2FRequest {
}
export interface AddMyAuthFactorU2FResponse {
    key: WebAuthNKey | undefined;
    details: ObjectDetails | undefined;
}
export interface AddMyAuthFactorOTPRequest {
}
export interface AddMyAuthFactorOTPResponse {
    url: string;
    secret: string;
    details: ObjectDetails | undefined;
}
export interface VerifyMyAuthFactorOTPRequest {
    code: string;
}
export interface VerifyMyAuthFactorOTPResponse {
    details: ObjectDetails | undefined;
}
export interface VerifyMyAuthFactorU2FRequest {
    verification: WebAuthNVerification | undefined;
}
export interface VerifyMyAuthFactorU2FResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMyAuthFactorOTPRequest {
}
export interface RemoveMyAuthFactorOTPResponse {
    details: ObjectDetails | undefined;
}
export interface AddMyAuthFactorOTPSMSRequest {
}
export interface AddMyAuthFactorOTPSMSResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMyAuthFactorOTPSMSRequest {
}
export interface RemoveMyAuthFactorOTPSMSResponse {
    details: ObjectDetails | undefined;
}
export interface AddMyAuthFactorOTPEmailRequest {
}
export interface AddMyAuthFactorOTPEmailResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMyAuthFactorOTPEmailRequest {
}
export interface RemoveMyAuthFactorOTPEmailResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMyAuthFactorU2FRequest {
    tokenId: string;
}
export interface RemoveMyAuthFactorU2FResponse {
    details: ObjectDetails | undefined;
}
export interface ListMyPasswordlessRequest {
}
export interface ListMyPasswordlessResponse {
    result: WebAuthNToken[];
}
export interface AddMyPasswordlessRequest {
}
export interface AddMyPasswordlessResponse {
    key: WebAuthNKey | undefined;
    details: ObjectDetails | undefined;
}
export interface AddMyPasswordlessLinkRequest {
}
export interface AddMyPasswordlessLinkResponse {
    details: ObjectDetails | undefined;
    link: string;
    expiration: Duration | undefined;
}
export interface SendMyPasswordlessLinkRequest {
}
export interface SendMyPasswordlessLinkResponse {
    details: ObjectDetails | undefined;
}
export interface VerifyMyPasswordlessRequest {
    verification: WebAuthNVerification | undefined;
}
export interface VerifyMyPasswordlessResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMyPasswordlessRequest {
    tokenId: string;
}
export interface RemoveMyPasswordlessResponse {
    details: ObjectDetails | undefined;
}
export interface ListMyUserGrantsRequest {
    query: ListQuery | undefined;
}
export interface ListMyUserGrantsResponse {
    details: ListDetails | undefined;
    result: UserGrant[];
}
export interface UserGrant {
    orgId: string;
    projectId: string;
    userId: string;
    roles: string[];
    orgName: string;
    grantId: string;
    details: ObjectDetails | undefined;
    orgDomain: string;
    projectName: string;
    projectGrantId: string;
    roleKeys: string[];
    userType: Type;
    state: UserGrantState;
}
export interface ListMyProjectOrgsRequest {
    query: ListQuery | undefined;
    queries: OrgQuery[];
    sortingColumn: OrgFieldName;
}
export interface ListMyProjectOrgsResponse {
    details: ListDetails | undefined;
    result: Org[];
}
export interface ListMyZitadelPermissionsRequest {
}
export interface ListMyZitadelPermissionsResponse {
    result: string[];
}
export interface ListMyProjectPermissionsRequest {
}
export interface ListMyProjectPermissionsResponse {
    result: string[];
}
export interface ListMyMembershipsRequest {
    query: ListQuery | undefined;
    queries: MembershipQuery[];
}
export interface ListMyMembershipsResponse {
    details: ListDetails | undefined;
    result: Membership[];
}
export interface GetMyLabelPolicyRequest {
}
export interface GetMyLabelPolicyResponse {
    policy: LabelPolicy | undefined;
}
export interface GetMyPrivacyPolicyRequest {
}
export interface GetMyPrivacyPolicyResponse {
    policy: PrivacyPolicy | undefined;
}
export interface GetMyLoginPolicyRequest {
}
export interface GetMyLoginPolicyResponse {
    policy: LoginPolicy | undefined;
}
export declare const HealthzRequest: MessageFns<HealthzRequest>;
export declare const HealthzResponse: MessageFns<HealthzResponse>;
export declare const GetSupportedLanguagesRequest: MessageFns<GetSupportedLanguagesRequest>;
export declare const GetSupportedLanguagesResponse: MessageFns<GetSupportedLanguagesResponse>;
export declare const GetMyUserRequest: MessageFns<GetMyUserRequest>;
export declare const GetMyUserResponse: MessageFns<GetMyUserResponse>;
export declare const RemoveMyUserRequest: MessageFns<RemoveMyUserRequest>;
export declare const RemoveMyUserResponse: MessageFns<RemoveMyUserResponse>;
export declare const ListMyUserChangesRequest: MessageFns<ListMyUserChangesRequest>;
export declare const ListMyUserChangesResponse: MessageFns<ListMyUserChangesResponse>;
export declare const ListMyUserSessionsRequest: MessageFns<ListMyUserSessionsRequest>;
export declare const ListMyUserSessionsResponse: MessageFns<ListMyUserSessionsResponse>;
export declare const ListMyMetadataRequest: MessageFns<ListMyMetadataRequest>;
export declare const ListMyMetadataResponse: MessageFns<ListMyMetadataResponse>;
export declare const GetMyMetadataRequest: MessageFns<GetMyMetadataRequest>;
export declare const GetMyMetadataResponse: MessageFns<GetMyMetadataResponse>;
export declare const SetMyMetadataRequest: MessageFns<SetMyMetadataRequest>;
export declare const SetMyMetadataResponse: MessageFns<SetMyMetadataResponse>;
export declare const BulkSetMyMetadataRequest: MessageFns<BulkSetMyMetadataRequest>;
export declare const BulkSetMyMetadataRequest_Metadata: MessageFns<BulkSetMyMetadataRequest_Metadata>;
export declare const BulkSetMyMetadataResponse: MessageFns<BulkSetMyMetadataResponse>;
export declare const RemoveMyMetadataRequest: MessageFns<RemoveMyMetadataRequest>;
export declare const RemoveMyMetadataResponse: MessageFns<RemoveMyMetadataResponse>;
export declare const BulkRemoveMyMetadataRequest: MessageFns<BulkRemoveMyMetadataRequest>;
export declare const BulkRemoveMyMetadataResponse: MessageFns<BulkRemoveMyMetadataResponse>;
export declare const ListMyRefreshTokensRequest: MessageFns<ListMyRefreshTokensRequest>;
export declare const ListMyRefreshTokensResponse: MessageFns<ListMyRefreshTokensResponse>;
export declare const RevokeMyRefreshTokenRequest: MessageFns<RevokeMyRefreshTokenRequest>;
export declare const RevokeMyRefreshTokenResponse: MessageFns<RevokeMyRefreshTokenResponse>;
export declare const RevokeAllMyRefreshTokensRequest: MessageFns<RevokeAllMyRefreshTokensRequest>;
export declare const RevokeAllMyRefreshTokensResponse: MessageFns<RevokeAllMyRefreshTokensResponse>;
export declare const UpdateMyUserNameRequest: MessageFns<UpdateMyUserNameRequest>;
export declare const UpdateMyUserNameResponse: MessageFns<UpdateMyUserNameResponse>;
export declare const GetMyPasswordComplexityPolicyRequest: MessageFns<GetMyPasswordComplexityPolicyRequest>;
export declare const GetMyPasswordComplexityPolicyResponse: MessageFns<GetMyPasswordComplexityPolicyResponse>;
export declare const UpdateMyPasswordRequest: MessageFns<UpdateMyPasswordRequest>;
export declare const UpdateMyPasswordResponse: MessageFns<UpdateMyPasswordResponse>;
export declare const GetMyProfileRequest: MessageFns<GetMyProfileRequest>;
export declare const GetMyProfileResponse: MessageFns<GetMyProfileResponse>;
export declare const UpdateMyProfileRequest: MessageFns<UpdateMyProfileRequest>;
export declare const UpdateMyProfileResponse: MessageFns<UpdateMyProfileResponse>;
export declare const GetMyEmailRequest: MessageFns<GetMyEmailRequest>;
export declare const GetMyEmailResponse: MessageFns<GetMyEmailResponse>;
export declare const SetMyEmailRequest: MessageFns<SetMyEmailRequest>;
export declare const SetMyEmailResponse: MessageFns<SetMyEmailResponse>;
export declare const VerifyMyEmailRequest: MessageFns<VerifyMyEmailRequest>;
export declare const VerifyMyEmailResponse: MessageFns<VerifyMyEmailResponse>;
export declare const ResendMyEmailVerificationRequest: MessageFns<ResendMyEmailVerificationRequest>;
export declare const ResendMyEmailVerificationResponse: MessageFns<ResendMyEmailVerificationResponse>;
export declare const GetMyPhoneRequest: MessageFns<GetMyPhoneRequest>;
export declare const GetMyPhoneResponse: MessageFns<GetMyPhoneResponse>;
export declare const SetMyPhoneRequest: MessageFns<SetMyPhoneRequest>;
export declare const SetMyPhoneResponse: MessageFns<SetMyPhoneResponse>;
export declare const VerifyMyPhoneRequest: MessageFns<VerifyMyPhoneRequest>;
export declare const VerifyMyPhoneResponse: MessageFns<VerifyMyPhoneResponse>;
export declare const ResendMyPhoneVerificationRequest: MessageFns<ResendMyPhoneVerificationRequest>;
export declare const ResendMyPhoneVerificationResponse: MessageFns<ResendMyPhoneVerificationResponse>;
export declare const RemoveMyPhoneRequest: MessageFns<RemoveMyPhoneRequest>;
export declare const RemoveMyPhoneResponse: MessageFns<RemoveMyPhoneResponse>;
export declare const RemoveMyAvatarRequest: MessageFns<RemoveMyAvatarRequest>;
export declare const RemoveMyAvatarResponse: MessageFns<RemoveMyAvatarResponse>;
export declare const ListMyLinkedIDPsRequest: MessageFns<ListMyLinkedIDPsRequest>;
export declare const ListMyLinkedIDPsResponse: MessageFns<ListMyLinkedIDPsResponse>;
export declare const RemoveMyLinkedIDPRequest: MessageFns<RemoveMyLinkedIDPRequest>;
export declare const RemoveMyLinkedIDPResponse: MessageFns<RemoveMyLinkedIDPResponse>;
export declare const ListMyAuthFactorsRequest: MessageFns<ListMyAuthFactorsRequest>;
export declare const ListMyAuthFactorsResponse: MessageFns<ListMyAuthFactorsResponse>;
export declare const AddMyAuthFactorU2FRequest: MessageFns<AddMyAuthFactorU2FRequest>;
export declare const AddMyAuthFactorU2FResponse: MessageFns<AddMyAuthFactorU2FResponse>;
export declare const AddMyAuthFactorOTPRequest: MessageFns<AddMyAuthFactorOTPRequest>;
export declare const AddMyAuthFactorOTPResponse: MessageFns<AddMyAuthFactorOTPResponse>;
export declare const VerifyMyAuthFactorOTPRequest: MessageFns<VerifyMyAuthFactorOTPRequest>;
export declare const VerifyMyAuthFactorOTPResponse: MessageFns<VerifyMyAuthFactorOTPResponse>;
export declare const VerifyMyAuthFactorU2FRequest: MessageFns<VerifyMyAuthFactorU2FRequest>;
export declare const VerifyMyAuthFactorU2FResponse: MessageFns<VerifyMyAuthFactorU2FResponse>;
export declare const RemoveMyAuthFactorOTPRequest: MessageFns<RemoveMyAuthFactorOTPRequest>;
export declare const RemoveMyAuthFactorOTPResponse: MessageFns<RemoveMyAuthFactorOTPResponse>;
export declare const AddMyAuthFactorOTPSMSRequest: MessageFns<AddMyAuthFactorOTPSMSRequest>;
export declare const AddMyAuthFactorOTPSMSResponse: MessageFns<AddMyAuthFactorOTPSMSResponse>;
export declare const RemoveMyAuthFactorOTPSMSRequest: MessageFns<RemoveMyAuthFactorOTPSMSRequest>;
export declare const RemoveMyAuthFactorOTPSMSResponse: MessageFns<RemoveMyAuthFactorOTPSMSResponse>;
export declare const AddMyAuthFactorOTPEmailRequest: MessageFns<AddMyAuthFactorOTPEmailRequest>;
export declare const AddMyAuthFactorOTPEmailResponse: MessageFns<AddMyAuthFactorOTPEmailResponse>;
export declare const RemoveMyAuthFactorOTPEmailRequest: MessageFns<RemoveMyAuthFactorOTPEmailRequest>;
export declare const RemoveMyAuthFactorOTPEmailResponse: MessageFns<RemoveMyAuthFactorOTPEmailResponse>;
export declare const RemoveMyAuthFactorU2FRequest: MessageFns<RemoveMyAuthFactorU2FRequest>;
export declare const RemoveMyAuthFactorU2FResponse: MessageFns<RemoveMyAuthFactorU2FResponse>;
export declare const ListMyPasswordlessRequest: MessageFns<ListMyPasswordlessRequest>;
export declare const ListMyPasswordlessResponse: MessageFns<ListMyPasswordlessResponse>;
export declare const AddMyPasswordlessRequest: MessageFns<AddMyPasswordlessRequest>;
export declare const AddMyPasswordlessResponse: MessageFns<AddMyPasswordlessResponse>;
export declare const AddMyPasswordlessLinkRequest: MessageFns<AddMyPasswordlessLinkRequest>;
export declare const AddMyPasswordlessLinkResponse: MessageFns<AddMyPasswordlessLinkResponse>;
export declare const SendMyPasswordlessLinkRequest: MessageFns<SendMyPasswordlessLinkRequest>;
export declare const SendMyPasswordlessLinkResponse: MessageFns<SendMyPasswordlessLinkResponse>;
export declare const VerifyMyPasswordlessRequest: MessageFns<VerifyMyPasswordlessRequest>;
export declare const VerifyMyPasswordlessResponse: MessageFns<VerifyMyPasswordlessResponse>;
export declare const RemoveMyPasswordlessRequest: MessageFns<RemoveMyPasswordlessRequest>;
export declare const RemoveMyPasswordlessResponse: MessageFns<RemoveMyPasswordlessResponse>;
export declare const ListMyUserGrantsRequest: MessageFns<ListMyUserGrantsRequest>;
export declare const ListMyUserGrantsResponse: MessageFns<ListMyUserGrantsResponse>;
export declare const UserGrant: MessageFns<UserGrant>;
export declare const ListMyProjectOrgsRequest: MessageFns<ListMyProjectOrgsRequest>;
export declare const ListMyProjectOrgsResponse: MessageFns<ListMyProjectOrgsResponse>;
export declare const ListMyZitadelPermissionsRequest: MessageFns<ListMyZitadelPermissionsRequest>;
export declare const ListMyZitadelPermissionsResponse: MessageFns<ListMyZitadelPermissionsResponse>;
export declare const ListMyProjectPermissionsRequest: MessageFns<ListMyProjectPermissionsRequest>;
export declare const ListMyProjectPermissionsResponse: MessageFns<ListMyProjectPermissionsResponse>;
export declare const ListMyMembershipsRequest: MessageFns<ListMyMembershipsRequest>;
export declare const ListMyMembershipsResponse: MessageFns<ListMyMembershipsResponse>;
export declare const GetMyLabelPolicyRequest: MessageFns<GetMyLabelPolicyRequest>;
export declare const GetMyLabelPolicyResponse: MessageFns<GetMyLabelPolicyResponse>;
export declare const GetMyPrivacyPolicyRequest: MessageFns<GetMyPrivacyPolicyRequest>;
export declare const GetMyPrivacyPolicyResponse: MessageFns<GetMyPrivacyPolicyResponse>;
export declare const GetMyLoginPolicyRequest: MessageFns<GetMyLoginPolicyRequest>;
export declare const GetMyLoginPolicyResponse: MessageFns<GetMyLoginPolicyResponse>;
export type AuthServiceDefinition = typeof AuthServiceDefinition;
export declare const AuthServiceDefinition: {
    readonly name: "AuthService";
    readonly fullName: "zitadel.auth.v1.AuthService";
    readonly methods: {
        readonly healthz: {
            readonly name: "Healthz";
            readonly requestType: MessageFns<HealthzRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<HealthzResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSupportedLanguages: {
            readonly name: "GetSupportedLanguages";
            readonly requestType: MessageFns<GetSupportedLanguagesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetSupportedLanguagesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyUser: {
            readonly name: "GetMyUser";
            readonly requestType: MessageFns<GetMyUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMyUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMyUser: {
            readonly name: "RemoveMyUser";
            readonly requestType: MessageFns<RemoveMyUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMyUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyUserChanges: {
            readonly name: "ListMyUserChanges";
            readonly requestType: MessageFns<ListMyUserChangesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyUserChangesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyUserSessions: {
            readonly name: "ListMyUserSessions";
            readonly requestType: MessageFns<ListMyUserSessionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyUserSessionsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyMetadata: {
            readonly name: "ListMyMetadata";
            readonly requestType: MessageFns<ListMyMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyMetadata: {
            readonly name: "GetMyMetadata";
            readonly requestType: MessageFns<GetMyMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMyMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyRefreshTokens: {
            readonly name: "ListMyRefreshTokens";
            readonly requestType: MessageFns<ListMyRefreshTokensRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyRefreshTokensResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly revokeMyRefreshToken: {
            readonly name: "RevokeMyRefreshToken";
            readonly requestType: MessageFns<RevokeMyRefreshTokenRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RevokeMyRefreshTokenResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly revokeAllMyRefreshTokens: {
            readonly name: "RevokeAllMyRefreshTokens";
            readonly requestType: MessageFns<RevokeAllMyRefreshTokensRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RevokeAllMyRefreshTokensResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateMyUserName: {
            readonly name: "UpdateMyUserName";
            readonly requestType: MessageFns<UpdateMyUserNameRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateMyUserNameResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyPasswordComplexityPolicy: {
            readonly name: "GetMyPasswordComplexityPolicy";
            readonly requestType: MessageFns<GetMyPasswordComplexityPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMyPasswordComplexityPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateMyPassword: {
            readonly name: "UpdateMyPassword";
            readonly requestType: MessageFns<UpdateMyPasswordRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateMyPasswordResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyProfile: {
            readonly name: "GetMyProfile";
            readonly requestType: MessageFns<GetMyProfileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMyProfileResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateMyProfile: {
            readonly name: "UpdateMyProfile";
            readonly requestType: MessageFns<UpdateMyProfileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateMyProfileResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyEmail: {
            readonly name: "GetMyEmail";
            readonly requestType: MessageFns<GetMyEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMyEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setMyEmail: {
            readonly name: "SetMyEmail";
            readonly requestType: MessageFns<SetMyEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetMyEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyMyEmail: {
            readonly name: "VerifyMyEmail";
            readonly requestType: MessageFns<VerifyMyEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyMyEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendMyEmailVerification: {
            readonly name: "ResendMyEmailVerification";
            readonly requestType: MessageFns<ResendMyEmailVerificationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendMyEmailVerificationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyPhone: {
            readonly name: "GetMyPhone";
            readonly requestType: MessageFns<GetMyPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMyPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setMyPhone: {
            readonly name: "SetMyPhone";
            readonly requestType: MessageFns<SetMyPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetMyPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyMyPhone: {
            readonly name: "VerifyMyPhone";
            readonly requestType: MessageFns<VerifyMyPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyMyPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendMyPhoneVerification: {
            readonly name: "ResendMyPhoneVerification";
            readonly requestType: MessageFns<ResendMyPhoneVerificationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendMyPhoneVerificationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMyPhone: {
            readonly name: "RemoveMyPhone";
            readonly requestType: MessageFns<RemoveMyPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMyPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMyAvatar: {
            readonly name: "RemoveMyAvatar";
            readonly requestType: MessageFns<RemoveMyAvatarRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMyAvatarResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyLinkedIDPs: {
            readonly name: "ListMyLinkedIDPs";
            readonly requestType: MessageFns<ListMyLinkedIDPsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyLinkedIDPsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMyLinkedIDP: {
            readonly name: "RemoveMyLinkedIDP";
            readonly requestType: MessageFns<RemoveMyLinkedIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMyLinkedIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyAuthFactors: {
            readonly name: "ListMyAuthFactors";
            readonly requestType: MessageFns<ListMyAuthFactorsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyAuthFactorsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMyAuthFactorOTP: {
            readonly name: "AddMyAuthFactorOTP";
            readonly requestType: MessageFns<AddMyAuthFactorOTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddMyAuthFactorOTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyMyAuthFactorOTP: {
            readonly name: "VerifyMyAuthFactorOTP";
            readonly requestType: MessageFns<VerifyMyAuthFactorOTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyMyAuthFactorOTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMyAuthFactorOTP: {
            readonly name: "RemoveMyAuthFactorOTP";
            readonly requestType: MessageFns<RemoveMyAuthFactorOTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMyAuthFactorOTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMyAuthFactorOTPSMS: {
            readonly name: "AddMyAuthFactorOTPSMS";
            readonly requestType: MessageFns<AddMyAuthFactorOTPSMSRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddMyAuthFactorOTPSMSResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMyAuthFactorOTPSMS: {
            readonly name: "RemoveMyAuthFactorOTPSMS";
            readonly requestType: MessageFns<RemoveMyAuthFactorOTPSMSRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMyAuthFactorOTPSMSResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMyAuthFactorOTPEmail: {
            readonly name: "AddMyAuthFactorOTPEmail";
            readonly requestType: MessageFns<AddMyAuthFactorOTPEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddMyAuthFactorOTPEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMyAuthFactorOTPEmail: {
            readonly name: "RemoveMyAuthFactorOTPEmail";
            readonly requestType: MessageFns<RemoveMyAuthFactorOTPEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMyAuthFactorOTPEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMyAuthFactorU2F: {
            readonly name: "AddMyAuthFactorU2F";
            readonly requestType: MessageFns<AddMyAuthFactorU2FRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddMyAuthFactorU2FResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyMyAuthFactorU2F: {
            readonly name: "VerifyMyAuthFactorU2F";
            readonly requestType: MessageFns<VerifyMyAuthFactorU2FRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyMyAuthFactorU2FResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMyAuthFactorU2F: {
            readonly name: "RemoveMyAuthFactorU2F";
            readonly requestType: MessageFns<RemoveMyAuthFactorU2FRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMyAuthFactorU2FResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyPasswordless: {
            readonly name: "ListMyPasswordless";
            readonly requestType: MessageFns<ListMyPasswordlessRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyPasswordlessResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMyPasswordless: {
            readonly name: "AddMyPasswordless";
            readonly requestType: MessageFns<AddMyPasswordlessRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddMyPasswordlessResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMyPasswordlessLink: {
            readonly name: "AddMyPasswordlessLink";
            readonly requestType: MessageFns<AddMyPasswordlessLinkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddMyPasswordlessLinkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly sendMyPasswordlessLink: {
            readonly name: "SendMyPasswordlessLink";
            readonly requestType: MessageFns<SendMyPasswordlessLinkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SendMyPasswordlessLinkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly verifyMyPasswordless: {
            readonly name: "VerifyMyPasswordless";
            readonly requestType: MessageFns<VerifyMyPasswordlessRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<VerifyMyPasswordlessResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMyPasswordless: {
            readonly name: "RemoveMyPasswordless";
            readonly requestType: MessageFns<RemoveMyPasswordlessRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMyPasswordlessResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyUserGrants: {
            readonly name: "ListMyUserGrants";
            readonly requestType: MessageFns<ListMyUserGrantsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyUserGrantsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyProjectOrgs: {
            readonly name: "ListMyProjectOrgs";
            readonly requestType: MessageFns<ListMyProjectOrgsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyProjectOrgsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyZitadelPermissions: {
            readonly name: "ListMyZitadelPermissions";
            readonly requestType: MessageFns<ListMyZitadelPermissionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyZitadelPermissionsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyProjectPermissions: {
            readonly name: "ListMyProjectPermissions";
            readonly requestType: MessageFns<ListMyProjectPermissionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyProjectPermissionsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMyMemberships: {
            readonly name: "ListMyMemberships";
            readonly requestType: MessageFns<ListMyMembershipsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMyMembershipsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyLabelPolicy: {
            readonly name: "GetMyLabelPolicy";
            readonly requestType: MessageFns<GetMyLabelPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMyLabelPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyPrivacyPolicy: {
            readonly name: "GetMyPrivacyPolicy";
            readonly requestType: MessageFns<GetMyPrivacyPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMyPrivacyPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyLoginPolicy: {
            readonly name: "GetMyLoginPolicy";
            readonly requestType: MessageFns<GetMyLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMyLoginPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
    };
};
export interface AuthServiceImplementation<CallContextExt = {}> {
    healthz(request: HealthzRequest, context: CallContext & CallContextExt): Promise<DeepPartial<HealthzResponse>>;
    getSupportedLanguages(request: GetSupportedLanguagesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSupportedLanguagesResponse>>;
    getMyUser(request: GetMyUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyUserResponse>>;
    removeMyUser(request: RemoveMyUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyUserResponse>>;
    listMyUserChanges(request: ListMyUserChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyUserChangesResponse>>;
    listMyUserSessions(request: ListMyUserSessionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyUserSessionsResponse>>;
    listMyMetadata(request: ListMyMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyMetadataResponse>>;
    getMyMetadata(request: GetMyMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyMetadataResponse>>;
    listMyRefreshTokens(request: ListMyRefreshTokensRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyRefreshTokensResponse>>;
    revokeMyRefreshToken(request: RevokeMyRefreshTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RevokeMyRefreshTokenResponse>>;
    revokeAllMyRefreshTokens(request: RevokeAllMyRefreshTokensRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RevokeAllMyRefreshTokensResponse>>;
    updateMyUserName(request: UpdateMyUserNameRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateMyUserNameResponse>>;
    getMyPasswordComplexityPolicy(request: GetMyPasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyPasswordComplexityPolicyResponse>>;
    updateMyPassword(request: UpdateMyPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateMyPasswordResponse>>;
    getMyProfile(request: GetMyProfileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyProfileResponse>>;
    updateMyProfile(request: UpdateMyProfileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateMyProfileResponse>>;
    getMyEmail(request: GetMyEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyEmailResponse>>;
    setMyEmail(request: SetMyEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetMyEmailResponse>>;
    verifyMyEmail(request: VerifyMyEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyMyEmailResponse>>;
    resendMyEmailVerification(request: ResendMyEmailVerificationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendMyEmailVerificationResponse>>;
    getMyPhone(request: GetMyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyPhoneResponse>>;
    setMyPhone(request: SetMyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetMyPhoneResponse>>;
    verifyMyPhone(request: VerifyMyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyMyPhoneResponse>>;
    resendMyPhoneVerification(request: ResendMyPhoneVerificationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendMyPhoneVerificationResponse>>;
    removeMyPhone(request: RemoveMyPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyPhoneResponse>>;
    removeMyAvatar(request: RemoveMyAvatarRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyAvatarResponse>>;
    listMyLinkedIDPs(request: ListMyLinkedIDPsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyLinkedIDPsResponse>>;
    removeMyLinkedIDP(request: RemoveMyLinkedIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyLinkedIDPResponse>>;
    listMyAuthFactors(request: ListMyAuthFactorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyAuthFactorsResponse>>;
    addMyAuthFactorOTP(request: AddMyAuthFactorOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyAuthFactorOTPResponse>>;
    verifyMyAuthFactorOTP(request: VerifyMyAuthFactorOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyMyAuthFactorOTPResponse>>;
    removeMyAuthFactorOTP(request: RemoveMyAuthFactorOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyAuthFactorOTPResponse>>;
    addMyAuthFactorOTPSMS(request: AddMyAuthFactorOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyAuthFactorOTPSMSResponse>>;
    removeMyAuthFactorOTPSMS(request: RemoveMyAuthFactorOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyAuthFactorOTPSMSResponse>>;
    addMyAuthFactorOTPEmail(request: AddMyAuthFactorOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyAuthFactorOTPEmailResponse>>;
    removeMyAuthFactorOTPEmail(request: RemoveMyAuthFactorOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyAuthFactorOTPEmailResponse>>;
    addMyAuthFactorU2F(request: AddMyAuthFactorU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyAuthFactorU2FResponse>>;
    verifyMyAuthFactorU2F(request: VerifyMyAuthFactorU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyMyAuthFactorU2FResponse>>;
    removeMyAuthFactorU2F(request: RemoveMyAuthFactorU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyAuthFactorU2FResponse>>;
    listMyPasswordless(request: ListMyPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyPasswordlessResponse>>;
    addMyPasswordless(request: AddMyPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyPasswordlessResponse>>;
    addMyPasswordlessLink(request: AddMyPasswordlessLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMyPasswordlessLinkResponse>>;
    sendMyPasswordlessLink(request: SendMyPasswordlessLinkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SendMyPasswordlessLinkResponse>>;
    verifyMyPasswordless(request: VerifyMyPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<VerifyMyPasswordlessResponse>>;
    removeMyPasswordless(request: RemoveMyPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMyPasswordlessResponse>>;
    listMyUserGrants(request: ListMyUserGrantsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyUserGrantsResponse>>;
    listMyProjectOrgs(request: ListMyProjectOrgsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyProjectOrgsResponse>>;
    listMyZitadelPermissions(request: ListMyZitadelPermissionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyZitadelPermissionsResponse>>;
    listMyProjectPermissions(request: ListMyProjectPermissionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyProjectPermissionsResponse>>;
    listMyMemberships(request: ListMyMembershipsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMyMembershipsResponse>>;
    getMyLabelPolicy(request: GetMyLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyLabelPolicyResponse>>;
    getMyPrivacyPolicy(request: GetMyPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyPrivacyPolicyResponse>>;
    getMyLoginPolicy(request: GetMyLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyLoginPolicyResponse>>;
}
export interface AuthServiceClient<CallOptionsExt = {}> {
    healthz(request: DeepPartial<HealthzRequest>, options?: CallOptions & CallOptionsExt): Promise<HealthzResponse>;
    getSupportedLanguages(request: DeepPartial<GetSupportedLanguagesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSupportedLanguagesResponse>;
    getMyUser(request: DeepPartial<GetMyUserRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyUserResponse>;
    removeMyUser(request: DeepPartial<RemoveMyUserRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyUserResponse>;
    listMyUserChanges(request: DeepPartial<ListMyUserChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyUserChangesResponse>;
    listMyUserSessions(request: DeepPartial<ListMyUserSessionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyUserSessionsResponse>;
    listMyMetadata(request: DeepPartial<ListMyMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyMetadataResponse>;
    getMyMetadata(request: DeepPartial<GetMyMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyMetadataResponse>;
    listMyRefreshTokens(request: DeepPartial<ListMyRefreshTokensRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyRefreshTokensResponse>;
    revokeMyRefreshToken(request: DeepPartial<RevokeMyRefreshTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<RevokeMyRefreshTokenResponse>;
    revokeAllMyRefreshTokens(request: DeepPartial<RevokeAllMyRefreshTokensRequest>, options?: CallOptions & CallOptionsExt): Promise<RevokeAllMyRefreshTokensResponse>;
    updateMyUserName(request: DeepPartial<UpdateMyUserNameRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateMyUserNameResponse>;
    getMyPasswordComplexityPolicy(request: DeepPartial<GetMyPasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyPasswordComplexityPolicyResponse>;
    updateMyPassword(request: DeepPartial<UpdateMyPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateMyPasswordResponse>;
    getMyProfile(request: DeepPartial<GetMyProfileRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyProfileResponse>;
    updateMyProfile(request: DeepPartial<UpdateMyProfileRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateMyProfileResponse>;
    getMyEmail(request: DeepPartial<GetMyEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyEmailResponse>;
    setMyEmail(request: DeepPartial<SetMyEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<SetMyEmailResponse>;
    verifyMyEmail(request: DeepPartial<VerifyMyEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyMyEmailResponse>;
    resendMyEmailVerification(request: DeepPartial<ResendMyEmailVerificationRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendMyEmailVerificationResponse>;
    getMyPhone(request: DeepPartial<GetMyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyPhoneResponse>;
    setMyPhone(request: DeepPartial<SetMyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<SetMyPhoneResponse>;
    verifyMyPhone(request: DeepPartial<VerifyMyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyMyPhoneResponse>;
    resendMyPhoneVerification(request: DeepPartial<ResendMyPhoneVerificationRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendMyPhoneVerificationResponse>;
    removeMyPhone(request: DeepPartial<RemoveMyPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyPhoneResponse>;
    removeMyAvatar(request: DeepPartial<RemoveMyAvatarRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyAvatarResponse>;
    listMyLinkedIDPs(request: DeepPartial<ListMyLinkedIDPsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyLinkedIDPsResponse>;
    removeMyLinkedIDP(request: DeepPartial<RemoveMyLinkedIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyLinkedIDPResponse>;
    listMyAuthFactors(request: DeepPartial<ListMyAuthFactorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyAuthFactorsResponse>;
    addMyAuthFactorOTP(request: DeepPartial<AddMyAuthFactorOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyAuthFactorOTPResponse>;
    verifyMyAuthFactorOTP(request: DeepPartial<VerifyMyAuthFactorOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyMyAuthFactorOTPResponse>;
    removeMyAuthFactorOTP(request: DeepPartial<RemoveMyAuthFactorOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyAuthFactorOTPResponse>;
    addMyAuthFactorOTPSMS(request: DeepPartial<AddMyAuthFactorOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyAuthFactorOTPSMSResponse>;
    removeMyAuthFactorOTPSMS(request: DeepPartial<RemoveMyAuthFactorOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyAuthFactorOTPSMSResponse>;
    addMyAuthFactorOTPEmail(request: DeepPartial<AddMyAuthFactorOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyAuthFactorOTPEmailResponse>;
    removeMyAuthFactorOTPEmail(request: DeepPartial<RemoveMyAuthFactorOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyAuthFactorOTPEmailResponse>;
    addMyAuthFactorU2F(request: DeepPartial<AddMyAuthFactorU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyAuthFactorU2FResponse>;
    verifyMyAuthFactorU2F(request: DeepPartial<VerifyMyAuthFactorU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyMyAuthFactorU2FResponse>;
    removeMyAuthFactorU2F(request: DeepPartial<RemoveMyAuthFactorU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyAuthFactorU2FResponse>;
    listMyPasswordless(request: DeepPartial<ListMyPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyPasswordlessResponse>;
    addMyPasswordless(request: DeepPartial<AddMyPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyPasswordlessResponse>;
    addMyPasswordlessLink(request: DeepPartial<AddMyPasswordlessLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMyPasswordlessLinkResponse>;
    sendMyPasswordlessLink(request: DeepPartial<SendMyPasswordlessLinkRequest>, options?: CallOptions & CallOptionsExt): Promise<SendMyPasswordlessLinkResponse>;
    verifyMyPasswordless(request: DeepPartial<VerifyMyPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<VerifyMyPasswordlessResponse>;
    removeMyPasswordless(request: DeepPartial<RemoveMyPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMyPasswordlessResponse>;
    listMyUserGrants(request: DeepPartial<ListMyUserGrantsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyUserGrantsResponse>;
    listMyProjectOrgs(request: DeepPartial<ListMyProjectOrgsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyProjectOrgsResponse>;
    listMyZitadelPermissions(request: DeepPartial<ListMyZitadelPermissionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyZitadelPermissionsResponse>;
    listMyProjectPermissions(request: DeepPartial<ListMyProjectPermissionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyProjectPermissionsResponse>;
    listMyMemberships(request: DeepPartial<ListMyMembershipsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMyMembershipsResponse>;
    getMyLabelPolicy(request: DeepPartial<GetMyLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyLabelPolicyResponse>;
    getMyPrivacyPolicy(request: DeepPartial<GetMyPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyPrivacyPolicyResponse>;
    getMyLoginPolicy(request: DeepPartial<GetMyLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyLoginPolicyResponse>;
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
