/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Duration } from "../google/protobuf/duration.js";
import { Action, ActionFieldName, ActionIDQuery, ActionNameQuery, ActionStateQuery, Flow, FlowType, TriggerType } from "./action.js";
import { APIAuthMethodType, App, AppQuery, OIDCAppType, OIDCAuthMethodType, OIDCGrantType, OIDCResponseType, OIDCTokenType, OIDCVersion } from "./app.js";
import { Key, KeyType } from "./auth_n_key.js";
import { Change, ChangeQuery } from "./change.js";
import { AzureADTenant, IDP, IDPFieldName, IDPIDQuery, IDPLoginPolicyLink, IDPNameQuery, IDPOwnerType, IDPOwnerTypeQuery, IDPStylingType, IDPUserLink, LDAPAttributes, OIDCMappingField, Options, Provider, SAMLBinding, SAMLNameIDFormat } from "./idp.js";
import { Member, SearchQuery as SearchQuery1 } from "./member.js";
import { LocalizedMessage } from "./message.js";
import { Metadata, MetadataQuery } from "./metadata.js";
import { ListDetails, ListQuery, ObjectDetails } from "./object.js";
import { Domain, DomainSearchQuery, DomainValidationType, Org } from "./org.js";
import { DomainPolicy, LabelPolicy, LockoutPolicy, LoginPolicy, MultiFactorType, NotificationPolicy, OrgIAMPolicy, PasswordAgePolicy, PasswordComplexityPolicy, PasswordlessType, PrivacyPolicy, SecondFactorType, ThemeMode } from "./policy.js";
import { AllProjectGrantQuery, GrantedProject, PrivateLabelingSetting, Project, ProjectGrantQuery, ProjectQuery, Role, RoleQuery } from "./project.js";
import { EmailVerificationDoneScreenText, EmailVerificationScreenText, ExternalRegistrationUserOverviewScreenText, ExternalUserNotFoundScreenText, FooterText, InitializeUserDoneScreenText, InitializeUserScreenText, InitMFADoneScreenText, InitMFAOTPScreenText, InitMFAPromptScreenText, InitMFAU2FScreenText, InitPasswordDoneScreenText, InitPasswordScreenText, LinkingUserDoneScreenText, LinkingUserPromptScreenText, LoginCustomText, LoginScreenText, LogoutDoneScreenText, MessageCustomText, MFAProvidersText, PasswordChangeDoneScreenText, PasswordChangeScreenText, PasswordlessPromptScreenText, PasswordlessRegistrationDoneScreenText, PasswordlessRegistrationScreenText, PasswordlessScreenText, PasswordResetDoneScreenText, PasswordScreenText, RegistrationOptionScreenText, RegistrationOrgScreenText, RegistrationUserScreenText, SelectAccountScreenText, SuccessLoginScreenText, UsernameChangeDoneScreenText, UsernameChangeScreenText, VerifyMFAOTPScreenText, VerifyMFAU2FScreenText } from "./text.js";
import { AccessTokenType, AuthFactor, Email, Gender, Membership, MembershipQuery, PersonalAccessToken, Phone, Profile, SearchQuery, User, UserFieldName, UserGrant, UserGrantQuery, WebAuthNToken } from "./user.js";
export declare const protobufPackage = "zitadel.management.v1";
export interface HealthzRequest {
}
export interface HealthzResponse {
}
export interface GetOIDCInformationRequest {
}
export interface GetOIDCInformationResponse {
    issuer: string;
    discoveryEndpoint: string;
}
export interface GetIAMRequest {
}
export interface GetIAMResponse {
    globalOrgId: string;
    iamProjectId: string;
    defaultOrgId: string;
}
export interface GetSupportedLanguagesRequest {
}
export interface GetSupportedLanguagesResponse {
    languages: string[];
}
export interface GetUserByIDRequest {
    id: string;
}
export interface GetUserByIDResponse {
    user: User | undefined;
}
export interface GetUserByLoginNameGlobalRequest {
    loginName: string;
}
export interface GetUserByLoginNameGlobalResponse {
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
export interface ListUserChangesRequest {
    query: ChangeQuery | undefined;
    userId: string;
}
export interface ListUserChangesResponse {
    result: Change[];
}
export interface IsUserUniqueRequest {
    userName: string;
    email: string;
}
export interface IsUserUniqueResponse {
    isUnique: boolean;
}
export interface AddHumanUserRequest {
    userName: string;
    profile: AddHumanUserRequest_Profile | undefined;
    email: AddHumanUserRequest_Email | undefined;
    phone: AddHumanUserRequest_Phone | undefined;
    initialPassword: string;
}
export interface AddHumanUserRequest_Profile {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface AddHumanUserRequest_Email {
    email: string;
    isEmailVerified: boolean;
}
export interface AddHumanUserRequest_Phone {
    phone: string;
    isPhoneVerified: boolean;
}
export interface AddHumanUserResponse {
    userId: string;
    details: ObjectDetails | undefined;
}
export interface ImportHumanUserRequest {
    userName: string;
    profile: ImportHumanUserRequest_Profile | undefined;
    email: ImportHumanUserRequest_Email | undefined;
    phone: ImportHumanUserRequest_Phone | undefined;
    password: string;
    hashedPassword: ImportHumanUserRequest_HashedPassword | undefined;
    passwordChangeRequired: boolean;
    requestPasswordlessRegistration: boolean;
    otpCode: string;
    idps: ImportHumanUserRequest_IDP[];
}
export interface ImportHumanUserRequest_Profile {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface ImportHumanUserRequest_Email {
    email: string;
    isEmailVerified: boolean;
}
export interface ImportHumanUserRequest_Phone {
    phone: string;
    isPhoneVerified: boolean;
}
export interface ImportHumanUserRequest_HashedPassword {
    value: string;
}
export interface ImportHumanUserRequest_IDP {
    configId: string;
    externalUserId: string;
    displayName: string;
}
export interface ImportHumanUserResponse {
    userId: string;
    details: ObjectDetails | undefined;
    passwordlessRegistration: ImportHumanUserResponse_PasswordlessRegistration | undefined;
}
export interface ImportHumanUserResponse_PasswordlessRegistration {
    link: string;
    lifetime: Duration | undefined;
    expiration: Duration | undefined;
}
export interface AddMachineUserRequest {
    userName: string;
    name: string;
    description: string;
    accessTokenType: AccessTokenType;
    userId?: string | undefined;
}
export interface AddMachineUserResponse {
    userId: string;
    details: ObjectDetails | undefined;
}
export interface DeactivateUserRequest {
    id: string;
}
export interface DeactivateUserResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateUserRequest {
    id: string;
}
export interface ReactivateUserResponse {
    details: ObjectDetails | undefined;
}
export interface LockUserRequest {
    id: string;
}
export interface LockUserResponse {
    details: ObjectDetails | undefined;
}
export interface UnlockUserRequest {
    id: string;
}
export interface UnlockUserResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveUserRequest {
    id: string;
}
export interface RemoveUserResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateUserNameRequest {
    userId: string;
    userName: string;
}
export interface UpdateUserNameResponse {
    details: ObjectDetails | undefined;
}
export interface ListUserMetadataRequest {
    id: string;
    query: ListQuery | undefined;
    queries: MetadataQuery[];
}
export interface ListUserMetadataResponse {
    details: ListDetails | undefined;
    result: Metadata[];
}
export interface GetUserMetadataRequest {
    id: string;
    key: string;
}
export interface GetUserMetadataResponse {
    metadata: Metadata | undefined;
}
export interface SetUserMetadataRequest {
    id: string;
    key: string;
    value: Buffer;
}
export interface SetUserMetadataResponse {
    id: string;
    details: ObjectDetails | undefined;
}
export interface BulkSetUserMetadataRequest {
    id: string;
    metadata: BulkSetUserMetadataRequest_Metadata[];
}
export interface BulkSetUserMetadataRequest_Metadata {
    key: string;
    value: Buffer;
}
export interface BulkSetUserMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveUserMetadataRequest {
    id: string;
    key: string;
}
export interface RemoveUserMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface BulkRemoveUserMetadataRequest {
    id: string;
    keys: string[];
}
export interface BulkRemoveUserMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface GetHumanProfileRequest {
    userId: string;
}
export interface GetHumanProfileResponse {
    details: ObjectDetails | undefined;
    profile: Profile | undefined;
}
export interface UpdateHumanProfileRequest {
    userId: string;
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface UpdateHumanProfileResponse {
    details: ObjectDetails | undefined;
}
export interface GetHumanEmailRequest {
    userId: string;
}
export interface GetHumanEmailResponse {
    details: ObjectDetails | undefined;
    email: Email | undefined;
}
export interface UpdateHumanEmailRequest {
    userId: string;
    email: string;
    isEmailVerified: boolean;
}
export interface UpdateHumanEmailResponse {
    details: ObjectDetails | undefined;
}
export interface ResendHumanInitializationRequest {
    userId: string;
    email: string;
}
export interface ResendHumanInitializationResponse {
    details: ObjectDetails | undefined;
}
export interface ResendHumanEmailVerificationRequest {
    userId: string;
}
export interface ResendHumanEmailVerificationResponse {
    details: ObjectDetails | undefined;
}
export interface GetHumanPhoneRequest {
    userId: string;
}
export interface GetHumanPhoneResponse {
    details: ObjectDetails | undefined;
    phone: Phone | undefined;
}
export interface UpdateHumanPhoneRequest {
    userId: string;
    phone: string;
    isPhoneVerified: boolean;
}
export interface UpdateHumanPhoneResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanPhoneRequest {
    userId: string;
}
export interface RemoveHumanPhoneResponse {
    details: ObjectDetails | undefined;
}
export interface ResendHumanPhoneVerificationRequest {
    userId: string;
}
export interface ResendHumanPhoneVerificationResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanAvatarRequest {
    userId: string;
}
export interface RemoveHumanAvatarResponse {
    details: ObjectDetails | undefined;
}
export interface SetHumanInitialPasswordRequest {
    userId: string;
    password: string;
}
export interface SetHumanInitialPasswordResponse {
    details: ObjectDetails | undefined;
}
export interface SetHumanPasswordRequest {
    userId: string;
    password: string;
    noChangeRequired: boolean;
}
export interface SetHumanPasswordResponse {
    details: ObjectDetails | undefined;
}
export interface SendHumanResetPasswordNotificationRequest {
    userId: string;
    type: SendHumanResetPasswordNotificationRequest_Type;
}
export declare enum SendHumanResetPasswordNotificationRequest_Type {
    TYPE_EMAIL = 0,
    TYPE_SMS = 1,
    UNRECOGNIZED = -1
}
export declare function sendHumanResetPasswordNotificationRequest_TypeFromJSON(object: any): SendHumanResetPasswordNotificationRequest_Type;
export declare function sendHumanResetPasswordNotificationRequest_TypeToJSON(object: SendHumanResetPasswordNotificationRequest_Type): string;
export interface SendHumanResetPasswordNotificationResponse {
    details: ObjectDetails | undefined;
}
export interface ListHumanAuthFactorsRequest {
    userId: string;
}
export interface ListHumanAuthFactorsResponse {
    result: AuthFactor[];
}
export interface RemoveHumanAuthFactorOTPRequest {
    userId: string;
}
export interface RemoveHumanAuthFactorOTPResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanAuthFactorU2FRequest {
    userId: string;
    tokenId: string;
}
export interface RemoveHumanAuthFactorU2FResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanAuthFactorOTPSMSRequest {
    userId: string;
}
export interface RemoveHumanAuthFactorOTPSMSResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanAuthFactorOTPEmailRequest {
    userId: string;
}
export interface RemoveHumanAuthFactorOTPEmailResponse {
    details: ObjectDetails | undefined;
}
export interface ListHumanPasswordlessRequest {
    userId: string;
}
export interface ListHumanPasswordlessResponse {
    result: WebAuthNToken[];
}
export interface AddPasswordlessRegistrationRequest {
    userId: string;
}
export interface AddPasswordlessRegistrationResponse {
    details: ObjectDetails | undefined;
    link: string;
    expiration: Duration | undefined;
}
export interface SendPasswordlessRegistrationRequest {
    userId: string;
}
export interface SendPasswordlessRegistrationResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveHumanPasswordlessRequest {
    userId: string;
    tokenId: string;
}
export interface RemoveHumanPasswordlessResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateMachineRequest {
    userId: string;
    description: string;
    name: string;
    accessTokenType: AccessTokenType;
}
export interface UpdateMachineResponse {
    details: ObjectDetails | undefined;
}
export interface GenerateMachineSecretRequest {
    userId: string;
}
export interface GenerateMachineSecretResponse {
    clientId: string;
    clientSecret: string;
    details: ObjectDetails | undefined;
}
export interface RemoveMachineSecretRequest {
    userId: string;
}
export interface RemoveMachineSecretResponse {
    details: ObjectDetails | undefined;
}
export interface GetMachineKeyByIDsRequest {
    userId: string;
    keyId: string;
}
export interface GetMachineKeyByIDsResponse {
    key: Key | undefined;
}
export interface ListMachineKeysRequest {
    userId: string;
    query: ListQuery | undefined;
}
export interface ListMachineKeysResponse {
    details: ListDetails | undefined;
    result: Key[];
}
export interface AddMachineKeyRequest {
    userId: string;
    type: KeyType;
    expirationDate: Date | undefined;
    publicKey: Buffer;
}
export interface AddMachineKeyResponse {
    keyId: string;
    keyDetails: Buffer;
    details: ObjectDetails | undefined;
}
export interface RemoveMachineKeyRequest {
    userId: string;
    keyId: string;
}
export interface RemoveMachineKeyResponse {
    details: ObjectDetails | undefined;
}
export interface GetPersonalAccessTokenByIDsRequest {
    userId: string;
    tokenId: string;
}
export interface GetPersonalAccessTokenByIDsResponse {
    token: PersonalAccessToken | undefined;
}
export interface ListPersonalAccessTokensRequest {
    userId: string;
    query: ListQuery | undefined;
}
export interface ListPersonalAccessTokensResponse {
    details: ListDetails | undefined;
    result: PersonalAccessToken[];
}
export interface AddPersonalAccessTokenRequest {
    userId: string;
    expirationDate: Date | undefined;
}
export interface AddPersonalAccessTokenResponse {
    tokenId: string;
    token: string;
    details: ObjectDetails | undefined;
}
export interface RemovePersonalAccessTokenRequest {
    userId: string;
    tokenId: string;
}
export interface RemovePersonalAccessTokenResponse {
    details: ObjectDetails | undefined;
}
export interface ListHumanLinkedIDPsRequest {
    userId: string;
    query: ListQuery | undefined;
}
export interface ListHumanLinkedIDPsResponse {
    details: ListDetails | undefined;
    result: IDPUserLink[];
}
export interface RemoveHumanLinkedIDPRequest {
    userId: string;
    idpId: string;
    linkedUserId: string;
}
export interface RemoveHumanLinkedIDPResponse {
    details: ObjectDetails | undefined;
}
export interface ListUserMembershipsRequest {
    userId: string;
    query: ListQuery | undefined;
    queries: MembershipQuery[];
}
export interface ListUserMembershipsResponse {
    details: ListDetails | undefined;
    result: Membership[];
}
export interface GetMyOrgRequest {
}
export interface GetMyOrgResponse {
    org: Org | undefined;
}
export interface GetOrgByDomainGlobalRequest {
    domain: string;
}
export interface ListOrgChangesRequest {
    query: ChangeQuery | undefined;
}
export interface ListOrgChangesResponse {
    result: Change[];
}
export interface GetOrgByDomainGlobalResponse {
    org: Org | undefined;
}
export interface AddOrgRequest {
    name: string;
}
export interface AddOrgResponse {
    id: string;
    details: ObjectDetails | undefined;
}
export interface UpdateOrgRequest {
    name: string;
}
export interface UpdateOrgResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateOrgRequest {
}
export interface DeactivateOrgResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateOrgRequest {
}
export interface ReactivateOrgResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveOrgRequest {
}
export interface RemoveOrgResponse {
    details: ObjectDetails | undefined;
}
export interface ListOrgDomainsRequest {
    query: ListQuery | undefined;
    queries: DomainSearchQuery[];
}
export interface ListOrgDomainsResponse {
    details: ListDetails | undefined;
    result: Domain[];
}
export interface AddOrgDomainRequest {
    domain: string;
}
export interface AddOrgDomainResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveOrgDomainRequest {
    domain: string;
}
export interface RemoveOrgDomainResponse {
    details: ObjectDetails | undefined;
}
export interface GenerateOrgDomainValidationRequest {
    domain: string;
    type: DomainValidationType;
}
export interface GenerateOrgDomainValidationResponse {
    token: string;
    url: string;
}
export interface ValidateOrgDomainRequest {
    domain: string;
}
export interface ValidateOrgDomainResponse {
    details: ObjectDetails | undefined;
}
export interface SetPrimaryOrgDomainRequest {
    domain: string;
}
export interface SetPrimaryOrgDomainResponse {
    details: ObjectDetails | undefined;
}
export interface ListOrgMemberRolesRequest {
}
export interface ListOrgMemberRolesResponse {
    result: string[];
}
export interface ListOrgMembersRequest {
    query: ListQuery | undefined;
    queries: SearchQuery1[];
}
export interface ListOrgMembersResponse {
    details: ListDetails | undefined;
    result: Member[];
}
export interface AddOrgMemberRequest {
    userId: string;
    roles: string[];
}
export interface AddOrgMemberResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateOrgMemberRequest {
    userId: string;
    roles: string[];
}
export interface UpdateOrgMemberResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveOrgMemberRequest {
    userId: string;
}
export interface RemoveOrgMemberResponse {
    details: ObjectDetails | undefined;
}
export interface ListOrgMetadataRequest {
    query: ListQuery | undefined;
    queries: MetadataQuery[];
}
export interface ListOrgMetadataResponse {
    details: ListDetails | undefined;
    result: Metadata[];
}
export interface GetOrgMetadataRequest {
    key: string;
}
export interface GetOrgMetadataResponse {
    metadata: Metadata | undefined;
}
export interface SetOrgMetadataRequest {
    key: string;
    value: Buffer;
}
export interface SetOrgMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface BulkSetOrgMetadataRequest {
    metadata: BulkSetOrgMetadataRequest_Metadata[];
}
export interface BulkSetOrgMetadataRequest_Metadata {
    key: string;
    value: Buffer;
}
export interface BulkSetOrgMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveOrgMetadataRequest {
    key: string;
}
export interface RemoveOrgMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface BulkRemoveOrgMetadataRequest {
    keys: string[];
}
export interface BulkRemoveOrgMetadataResponse {
    details: ObjectDetails | undefined;
}
export interface GetProjectByIDRequest {
    id: string;
}
export interface GetProjectByIDResponse {
    project: Project | undefined;
}
export interface GetGrantedProjectByIDRequest {
    projectId: string;
    grantId: string;
}
export interface GetGrantedProjectByIDResponse {
    grantedProject: GrantedProject | undefined;
}
export interface ListProjectsRequest {
    query: ListQuery | undefined;
    queries: ProjectQuery[];
}
export interface ListProjectsResponse {
    details: ListDetails | undefined;
    result: Project[];
}
export interface ListGrantedProjectsRequest {
    query: ListQuery | undefined;
    queries: ProjectQuery[];
}
export interface ListGrantedProjectsResponse {
    details: ListDetails | undefined;
    result: GrantedProject[];
}
export interface ListProjectChangesRequest {
    query: ChangeQuery | undefined;
    projectId: string;
}
export interface ListProjectChangesResponse {
    result: Change[];
}
export interface AddProjectRequest {
    name: string;
    projectRoleAssertion: boolean;
    projectRoleCheck: boolean;
    hasProjectCheck: boolean;
    privateLabelingSetting: PrivateLabelingSetting;
}
export interface AddProjectResponse {
    id: string;
    details: ObjectDetails | undefined;
}
export interface UpdateProjectRequest {
    id: string;
    name: string;
    projectRoleAssertion: boolean;
    projectRoleCheck: boolean;
    hasProjectCheck: boolean;
    privateLabelingSetting: PrivateLabelingSetting;
}
export interface UpdateProjectResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateProjectRequest {
    id: string;
}
export interface DeactivateProjectResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateProjectRequest {
    id: string;
}
export interface ReactivateProjectResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveProjectRequest {
    id: string;
}
export interface RemoveProjectResponse {
    details: ObjectDetails | undefined;
}
export interface ListProjectMemberRolesRequest {
}
export interface ListProjectMemberRolesResponse {
    details: ListDetails | undefined;
    result: string[];
}
export interface AddProjectRoleRequest {
    projectId: string;
    roleKey: string;
    displayName: string;
    group: string;
}
export interface AddProjectRoleResponse {
    details: ObjectDetails | undefined;
}
export interface BulkAddProjectRolesRequest {
    projectId: string;
    roles: BulkAddProjectRolesRequest_Role[];
}
export interface BulkAddProjectRolesRequest_Role {
    key: string;
    displayName: string;
    group: string;
}
export interface BulkAddProjectRolesResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateProjectRoleRequest {
    projectId: string;
    roleKey: string;
    displayName: string;
    group: string;
}
export interface UpdateProjectRoleResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveProjectRoleRequest {
    projectId: string;
    roleKey: string;
}
export interface RemoveProjectRoleResponse {
    details: ObjectDetails | undefined;
}
export interface ListProjectRolesRequest {
    projectId: string;
    query: ListQuery | undefined;
    queries: RoleQuery[];
}
export interface ListProjectRolesResponse {
    details: ListDetails | undefined;
    result: Role[];
}
export interface ListGrantedProjectRolesRequest {
    projectId: string;
    grantId: string;
    query: ListQuery | undefined;
    queries: RoleQuery[];
}
export interface ListGrantedProjectRolesResponse {
    details: ListDetails | undefined;
    result: Role[];
}
export interface ListProjectMembersRequest {
    projectId: string;
    query: ListQuery | undefined;
    queries: SearchQuery1[];
}
export interface ListProjectMembersResponse {
    details: ListDetails | undefined;
    result: Member[];
}
export interface AddProjectMemberRequest {
    projectId: string;
    userId: string;
    roles: string[];
}
export interface AddProjectMemberResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateProjectMemberRequest {
    projectId: string;
    userId: string;
    roles: string[];
}
export interface UpdateProjectMemberResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveProjectMemberRequest {
    projectId: string;
    userId: string;
}
export interface RemoveProjectMemberResponse {
    details: ObjectDetails | undefined;
}
export interface GetAppByIDRequest {
    projectId: string;
    appId: string;
}
export interface GetAppByIDResponse {
    app: App | undefined;
}
export interface ListAppsRequest {
    projectId: string;
    query: ListQuery | undefined;
    queries: AppQuery[];
}
export interface ListAppsResponse {
    details: ListDetails | undefined;
    result: App[];
}
export interface ListAppChangesRequest {
    query: ChangeQuery | undefined;
    projectId: string;
    appId: string;
}
export interface ListAppChangesResponse {
    result: Change[];
}
export interface AddOIDCAppRequest {
    projectId: string;
    name: string;
    redirectUris: string[];
    responseTypes: OIDCResponseType[];
    grantTypes: OIDCGrantType[];
    appType: OIDCAppType;
    authMethodType: OIDCAuthMethodType;
    postLogoutRedirectUris: string[];
    version: OIDCVersion;
    devMode: boolean;
    accessTokenType: OIDCTokenType;
    accessTokenRoleAssertion: boolean;
    idTokenRoleAssertion: boolean;
    idTokenUserinfoAssertion: boolean;
    clockSkew: Duration | undefined;
    additionalOrigins: string[];
    skipNativeAppSuccessPage: boolean;
}
export interface AddOIDCAppResponse {
    appId: string;
    details: ObjectDetails | undefined;
    clientId: string;
    clientSecret: string;
    noneCompliant: boolean;
    complianceProblems: LocalizedMessage[];
}
export interface AddSAMLAppRequest {
    projectId: string;
    name: string;
    metadataXml?: Buffer | undefined;
    metadataUrl?: string | undefined;
}
export interface AddSAMLAppResponse {
    appId: string;
    details: ObjectDetails | undefined;
}
export interface AddAPIAppRequest {
    projectId: string;
    name: string;
    authMethodType: APIAuthMethodType;
}
export interface AddAPIAppResponse {
    appId: string;
    details: ObjectDetails | undefined;
    clientId: string;
    clientSecret: string;
}
export interface UpdateAppRequest {
    projectId: string;
    appId: string;
    name: string;
}
export interface UpdateAppResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateOIDCAppConfigRequest {
    projectId: string;
    appId: string;
    redirectUris: string[];
    responseTypes: OIDCResponseType[];
    grantTypes: OIDCGrantType[];
    appType: OIDCAppType;
    authMethodType: OIDCAuthMethodType;
    postLogoutRedirectUris: string[];
    devMode: boolean;
    accessTokenType: OIDCTokenType;
    accessTokenRoleAssertion: boolean;
    idTokenRoleAssertion: boolean;
    idTokenUserinfoAssertion: boolean;
    clockSkew: Duration | undefined;
    additionalOrigins: string[];
    skipNativeAppSuccessPage: boolean;
}
export interface UpdateOIDCAppConfigResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateSAMLAppConfigRequest {
    projectId: string;
    appId: string;
    metadataXml?: Buffer | undefined;
    metadataUrl?: string | undefined;
}
export interface UpdateSAMLAppConfigResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateAPIAppConfigRequest {
    projectId: string;
    appId: string;
    authMethodType: APIAuthMethodType;
}
export interface UpdateAPIAppConfigResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateAppRequest {
    projectId: string;
    appId: string;
}
export interface DeactivateAppResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateAppRequest {
    projectId: string;
    appId: string;
}
export interface ReactivateAppResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveAppRequest {
    projectId: string;
    appId: string;
}
export interface RemoveAppResponse {
    details: ObjectDetails | undefined;
}
export interface RegenerateOIDCClientSecretRequest {
    projectId: string;
    appId: string;
}
export interface RegenerateOIDCClientSecretResponse {
    clientSecret: string;
    details: ObjectDetails | undefined;
}
export interface RegenerateAPIClientSecretRequest {
    projectId: string;
    appId: string;
}
export interface RegenerateAPIClientSecretResponse {
    clientSecret: string;
    details: ObjectDetails | undefined;
}
export interface GetAppKeyRequest {
    projectId: string;
    appId: string;
    keyId: string;
}
export interface GetAppKeyResponse {
    key: Key | undefined;
}
export interface ListAppKeysRequest {
    query: ListQuery | undefined;
    appId: string;
    projectId: string;
}
export interface ListAppKeysResponse {
    details: ListDetails | undefined;
    result: Key[];
}
export interface AddAppKeyRequest {
    projectId: string;
    appId: string;
    type: KeyType;
    expirationDate: Date | undefined;
}
export interface AddAppKeyResponse {
    id: string;
    details: ObjectDetails | undefined;
    keyDetails: Buffer;
}
export interface RemoveAppKeyRequest {
    projectId: string;
    appId: string;
    keyId: string;
}
export interface RemoveAppKeyResponse {
    details: ObjectDetails | undefined;
}
export interface ListProjectGrantChangesRequest {
    query: ChangeQuery | undefined;
    projectId: string;
    grantId: string;
}
export interface ListProjectGrantChangesResponse {
    result: Change[];
}
export interface GetProjectGrantByIDRequest {
    projectId: string;
    grantId: string;
}
export interface GetProjectGrantByIDResponse {
    projectGrant: GrantedProject | undefined;
}
export interface ListProjectGrantsRequest {
    projectId: string;
    query: ListQuery | undefined;
    queries: ProjectGrantQuery[];
}
export interface ListProjectGrantsResponse {
    details: ListDetails | undefined;
    result: GrantedProject[];
}
export interface ListAllProjectGrantsRequest {
    query: ListQuery | undefined;
    queries: AllProjectGrantQuery[];
}
export interface ListAllProjectGrantsResponse {
    details: ListDetails | undefined;
    result: GrantedProject[];
}
export interface AddProjectGrantRequest {
    projectId: string;
    grantedOrgId: string;
    roleKeys: string[];
}
export interface AddProjectGrantResponse {
    grantId: string;
    details: ObjectDetails | undefined;
}
export interface UpdateProjectGrantRequest {
    projectId: string;
    grantId: string;
    roleKeys: string[];
}
export interface UpdateProjectGrantResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateProjectGrantRequest {
    projectId: string;
    grantId: string;
}
export interface DeactivateProjectGrantResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateProjectGrantRequest {
    projectId: string;
    grantId: string;
}
export interface ReactivateProjectGrantResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveProjectGrantRequest {
    projectId: string;
    grantId: string;
}
export interface RemoveProjectGrantResponse {
    details: ObjectDetails | undefined;
}
export interface ListProjectGrantMemberRolesRequest {
    query: ListQuery | undefined;
    result: string[];
}
export interface ListProjectGrantMemberRolesResponse {
    details: ListDetails | undefined;
    result: string[];
}
export interface ListProjectGrantMembersRequest {
    projectId: string;
    grantId: string;
    query: ListQuery | undefined;
    queries: SearchQuery1[];
}
export interface ListProjectGrantMembersResponse {
    details: ListDetails | undefined;
    result: Member[];
}
export interface AddProjectGrantMemberRequest {
    projectId: string;
    grantId: string;
    userId: string;
    roles: string[];
}
export interface AddProjectGrantMemberResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateProjectGrantMemberRequest {
    projectId: string;
    grantId: string;
    userId: string;
    roles: string[];
}
export interface UpdateProjectGrantMemberResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveProjectGrantMemberRequest {
    projectId: string;
    grantId: string;
    userId: string;
}
export interface RemoveProjectGrantMemberResponse {
    details: ObjectDetails | undefined;
}
export interface GetUserGrantByIDRequest {
    userId: string;
    grantId: string;
}
export interface GetUserGrantByIDResponse {
    userGrant: UserGrant | undefined;
}
export interface ListUserGrantRequest {
    query: ListQuery | undefined;
    queries: UserGrantQuery[];
}
export interface ListUserGrantResponse {
    details: ListDetails | undefined;
    result: UserGrant[];
}
export interface AddUserGrantRequest {
    userId: string;
    projectId: string;
    projectGrantId: string;
    roleKeys: string[];
}
export interface AddUserGrantResponse {
    userGrantId: string;
    details: ObjectDetails | undefined;
}
export interface UpdateUserGrantRequest {
    userId: string;
    grantId: string;
    roleKeys: string[];
}
export interface UpdateUserGrantResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateUserGrantRequest {
    userId: string;
    grantId: string;
}
export interface DeactivateUserGrantResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateUserGrantRequest {
    userId: string;
    grantId: string;
}
export interface ReactivateUserGrantResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveUserGrantRequest {
    userId: string;
    grantId: string;
}
export interface RemoveUserGrantResponse {
    details: ObjectDetails | undefined;
}
export interface BulkRemoveUserGrantRequest {
    grantId: string[];
}
export interface BulkRemoveUserGrantResponse {
}
export interface GetOrgIAMPolicyRequest {
}
export interface GetOrgIAMPolicyResponse {
    policy: OrgIAMPolicy | undefined;
}
export interface GetDomainPolicyRequest {
}
export interface GetDomainPolicyResponse {
    policy: DomainPolicy | undefined;
}
export interface GetLoginPolicyRequest {
}
export interface GetLoginPolicyResponse {
    policy: LoginPolicy | undefined;
    isDefault: boolean;
}
export interface GetDefaultLoginPolicyRequest {
}
export interface GetDefaultLoginPolicyResponse {
    policy: LoginPolicy | undefined;
}
export interface AddCustomLoginPolicyRequest {
    allowUsernamePassword: boolean;
    allowRegister: boolean;
    allowExternalIdp: boolean;
    forceMfa: boolean;
    passwordlessType: PasswordlessType;
    hidePasswordReset: boolean;
    ignoreUnknownUsernames: boolean;
    defaultRedirectUri: string;
    passwordCheckLifetime: Duration | undefined;
    externalLoginCheckLifetime: Duration | undefined;
    mfaInitSkipLifetime: Duration | undefined;
    secondFactorCheckLifetime: Duration | undefined;
    multiFactorCheckLifetime: Duration | undefined;
    secondFactors: SecondFactorType[];
    multiFactors: MultiFactorType[];
    idps: AddCustomLoginPolicyRequest_IDP[];
    allowDomainDiscovery: boolean;
    disableLoginWithEmail: boolean;
    disableLoginWithPhone: boolean;
    forceMfaLocalOnly: boolean;
}
export interface AddCustomLoginPolicyRequest_IDP {
    idpId: string;
    ownerType: IDPOwnerType;
}
export interface AddCustomLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomLoginPolicyRequest {
    allowUsernamePassword: boolean;
    allowRegister: boolean;
    allowExternalIdp: boolean;
    forceMfa: boolean;
    passwordlessType: PasswordlessType;
    hidePasswordReset: boolean;
    ignoreUnknownUsernames: boolean;
    defaultRedirectUri: string;
    passwordCheckLifetime: Duration | undefined;
    externalLoginCheckLifetime: Duration | undefined;
    mfaInitSkipLifetime: Duration | undefined;
    secondFactorCheckLifetime: Duration | undefined;
    multiFactorCheckLifetime: Duration | undefined;
    allowDomainDiscovery: boolean;
    disableLoginWithEmail: boolean;
    disableLoginWithPhone: boolean;
    forceMfaLocalOnly: boolean;
}
export interface UpdateCustomLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ResetLoginPolicyToDefaultRequest {
}
export interface ResetLoginPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface ListLoginPolicyIDPsRequest {
    query: ListQuery | undefined;
}
export interface ListLoginPolicyIDPsResponse {
    details: ListDetails | undefined;
    result: IDPLoginPolicyLink[];
}
export interface AddIDPToLoginPolicyRequest {
    idpId: string;
    ownerType: IDPOwnerType;
}
export interface AddIDPToLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveIDPFromLoginPolicyRequest {
    idpId: string;
}
export interface RemoveIDPFromLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ListLoginPolicySecondFactorsRequest {
}
export interface ListLoginPolicySecondFactorsResponse {
    details: ListDetails | undefined;
    result: SecondFactorType[];
}
export interface AddSecondFactorToLoginPolicyRequest {
    type: SecondFactorType;
}
export interface AddSecondFactorToLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveSecondFactorFromLoginPolicyRequest {
    type: SecondFactorType;
}
export interface RemoveSecondFactorFromLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ListLoginPolicyMultiFactorsRequest {
}
export interface ListLoginPolicyMultiFactorsResponse {
    details: ListDetails | undefined;
    result: MultiFactorType[];
}
export interface AddMultiFactorToLoginPolicyRequest {
    type: MultiFactorType;
}
export interface AddMultiFactorToLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveMultiFactorFromLoginPolicyRequest {
    type: MultiFactorType;
}
export interface RemoveMultiFactorFromLoginPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetPasswordComplexityPolicyRequest {
}
export interface GetPasswordComplexityPolicyResponse {
    policy: PasswordComplexityPolicy | undefined;
    isDefault: boolean;
}
export interface GetDefaultPasswordComplexityPolicyRequest {
}
export interface GetDefaultPasswordComplexityPolicyResponse {
    policy: PasswordComplexityPolicy | undefined;
}
export interface AddCustomPasswordComplexityPolicyRequest {
    minLength: Long;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
}
export interface AddCustomPasswordComplexityPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomPasswordComplexityPolicyRequest {
    minLength: Long;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
}
export interface UpdateCustomPasswordComplexityPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ResetPasswordComplexityPolicyToDefaultRequest {
}
export interface ResetPasswordComplexityPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetPasswordAgePolicyRequest {
}
export interface GetPasswordAgePolicyResponse {
    policy: PasswordAgePolicy | undefined;
    isDefault: boolean;
}
export interface GetDefaultPasswordAgePolicyRequest {
}
export interface GetDefaultPasswordAgePolicyResponse {
    policy: PasswordAgePolicy | undefined;
}
export interface AddCustomPasswordAgePolicyRequest {
    maxAgeDays: number;
    expireWarnDays: number;
}
export interface AddCustomPasswordAgePolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomPasswordAgePolicyRequest {
    maxAgeDays: number;
    expireWarnDays: number;
}
export interface UpdateCustomPasswordAgePolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ResetPasswordAgePolicyToDefaultRequest {
}
export interface ResetPasswordAgePolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetLockoutPolicyRequest {
}
export interface GetLockoutPolicyResponse {
    policy: LockoutPolicy | undefined;
    isDefault: boolean;
}
export interface GetDefaultLockoutPolicyRequest {
}
export interface GetDefaultLockoutPolicyResponse {
    policy: LockoutPolicy | undefined;
}
export interface AddCustomLockoutPolicyRequest {
    maxPasswordAttempts: number;
    maxOtpAttempts: number;
}
export interface AddCustomLockoutPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomLockoutPolicyRequest {
    maxPasswordAttempts: number;
    maxOtpAttempts: number;
}
export interface UpdateCustomLockoutPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ResetLockoutPolicyToDefaultRequest {
}
export interface ResetLockoutPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetPrivacyPolicyRequest {
}
export interface GetPrivacyPolicyResponse {
    policy: PrivacyPolicy | undefined;
}
export interface GetDefaultPrivacyPolicyRequest {
}
export interface GetDefaultPrivacyPolicyResponse {
    policy: PrivacyPolicy | undefined;
}
export interface AddCustomPrivacyPolicyRequest {
    tosLink: string;
    privacyLink: string;
    helpLink: string;
    supportEmail: string;
    docsLink: string;
    customLink: string;
    customLinkText: string;
}
export interface AddCustomPrivacyPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomPrivacyPolicyRequest {
    tosLink: string;
    privacyLink: string;
    helpLink: string;
    supportEmail: string;
    docsLink: string;
    customLink: string;
    customLinkText: string;
}
export interface UpdateCustomPrivacyPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ResetPrivacyPolicyToDefaultRequest {
}
export interface ResetPrivacyPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetNotificationPolicyRequest {
}
export interface GetNotificationPolicyResponse {
    policy: NotificationPolicy | undefined;
}
export interface GetDefaultNotificationPolicyRequest {
}
export interface GetDefaultNotificationPolicyResponse {
    policy: NotificationPolicy | undefined;
}
export interface AddCustomNotificationPolicyRequest {
    passwordChange: boolean;
}
export interface AddCustomNotificationPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomNotificationPolicyRequest {
    passwordChange: boolean;
}
export interface UpdateCustomNotificationPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ResetNotificationPolicyToDefaultRequest {
}
export interface ResetNotificationPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetLabelPolicyRequest {
}
export interface GetLabelPolicyResponse {
    policy: LabelPolicy | undefined;
    isDefault: boolean;
}
export interface GetPreviewLabelPolicyRequest {
}
export interface GetPreviewLabelPolicyResponse {
    policy: LabelPolicy | undefined;
    isDefault: boolean;
}
export interface GetDefaultLabelPolicyRequest {
}
export interface GetDefaultLabelPolicyResponse {
    policy: LabelPolicy | undefined;
}
export interface AddCustomLabelPolicyRequest {
    primaryColor: string;
    hideLoginNameSuffix: boolean;
    warnColor: string;
    backgroundColor: string;
    fontColor: string;
    primaryColorDark: string;
    backgroundColorDark: string;
    warnColorDark: string;
    fontColorDark: string;
    disableWatermark: boolean;
    themeMode: ThemeMode;
}
export interface AddCustomLabelPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomLabelPolicyRequest {
    primaryColor: string;
    hideLoginNameSuffix: boolean;
    warnColor: string;
    backgroundColor: string;
    fontColor: string;
    primaryColorDark: string;
    backgroundColorDark: string;
    warnColorDark: string;
    fontColorDark: string;
    disableWatermark: boolean;
    themeMode: ThemeMode;
}
export interface UpdateCustomLabelPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ActivateCustomLabelPolicyRequest {
}
export interface ActivateCustomLabelPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveCustomLabelPolicyLogoRequest {
}
export interface RemoveCustomLabelPolicyLogoResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveCustomLabelPolicyLogoDarkRequest {
}
export interface RemoveCustomLabelPolicyLogoDarkResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveCustomLabelPolicyIconRequest {
}
export interface RemoveCustomLabelPolicyIconResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveCustomLabelPolicyIconDarkRequest {
}
export interface RemoveCustomLabelPolicyIconDarkResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveCustomLabelPolicyFontRequest {
}
export interface RemoveCustomLabelPolicyFontResponse {
    details: ObjectDetails | undefined;
}
export interface ResetLabelPolicyToDefaultRequest {
}
export interface ResetLabelPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomInitMessageTextRequest {
    language: string;
}
export interface GetCustomInitMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultInitMessageTextRequest {
    language: string;
}
export interface GetDefaultInitMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomInitMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomInitMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomInitMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomInitMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultLoginTextsRequest {
    language: string;
}
export interface GetDefaultLoginTextsResponse {
    customText: LoginCustomText | undefined;
}
export interface GetCustomLoginTextsRequest {
    language: string;
}
export interface GetCustomLoginTextsResponse {
    customText: LoginCustomText | undefined;
}
export interface SetCustomLoginTextsRequest {
    language: string;
    selectAccountText: SelectAccountScreenText | undefined;
    loginText: LoginScreenText | undefined;
    passwordText: PasswordScreenText | undefined;
    usernameChangeText: UsernameChangeScreenText | undefined;
    usernameChangeDoneText: UsernameChangeDoneScreenText | undefined;
    initPasswordText: InitPasswordScreenText | undefined;
    initPasswordDoneText: InitPasswordDoneScreenText | undefined;
    emailVerificationText: EmailVerificationScreenText | undefined;
    emailVerificationDoneText: EmailVerificationDoneScreenText | undefined;
    initializeUserText: InitializeUserScreenText | undefined;
    initializeDoneText: InitializeUserDoneScreenText | undefined;
    initMfaPromptText: InitMFAPromptScreenText | undefined;
    initMfaOtpText: InitMFAOTPScreenText | undefined;
    initMfaU2fText: InitMFAU2FScreenText | undefined;
    initMfaDoneText: InitMFADoneScreenText | undefined;
    mfaProvidersText: MFAProvidersText | undefined;
    verifyMfaOtpText: VerifyMFAOTPScreenText | undefined;
    verifyMfaU2fText: VerifyMFAU2FScreenText | undefined;
    passwordlessText: PasswordlessScreenText | undefined;
    passwordChangeText: PasswordChangeScreenText | undefined;
    passwordChangeDoneText: PasswordChangeDoneScreenText | undefined;
    passwordResetDoneText: PasswordResetDoneScreenText | undefined;
    registrationOptionText: RegistrationOptionScreenText | undefined;
    registrationUserText: RegistrationUserScreenText | undefined;
    registrationOrgText: RegistrationOrgScreenText | undefined;
    linkingUserDoneText: LinkingUserDoneScreenText | undefined;
    externalUserNotFoundText: ExternalUserNotFoundScreenText | undefined;
    successLoginText: SuccessLoginScreenText | undefined;
    logoutText: LogoutDoneScreenText | undefined;
    footerText: FooterText | undefined;
    passwordlessPromptText: PasswordlessPromptScreenText | undefined;
    passwordlessRegistrationText: PasswordlessRegistrationScreenText | undefined;
    passwordlessRegistrationDoneText: PasswordlessRegistrationDoneScreenText | undefined;
    externalRegistrationUserOverviewText: ExternalRegistrationUserOverviewScreenText | undefined;
    linkingUserPromptText: LinkingUserPromptScreenText | undefined;
}
export interface SetCustomLoginTextsResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomLoginTextsToDefaultRequest {
    language: string;
}
export interface ResetCustomLoginTextsToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomPasswordResetMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordResetMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultPasswordResetMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordResetMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomPasswordResetMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomPasswordResetMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordResetMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordResetMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomVerifyEmailMessageTextRequest {
    language: string;
}
export interface GetCustomVerifyEmailMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultVerifyEmailMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifyEmailMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomVerifyEmailMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomVerifyEmailMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifyEmailMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifyEmailMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomVerifyPhoneMessageTextRequest {
    language: string;
}
export interface GetCustomVerifyPhoneMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultVerifyPhoneMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifyPhoneMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomVerifyPhoneMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomVerifyPhoneMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifyPhoneMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifyPhoneMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomVerifySMSOTPMessageTextRequest {
    language: string;
}
export interface GetCustomVerifySMSOTPMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultVerifySMSOTPMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifySMSOTPMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomVerifySMSOTPMessageTextRequest {
    language: string;
    text: string;
}
export interface SetCustomVerifySMSOTPMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifySMSOTPMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifySMSOTPMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomVerifyEmailOTPMessageTextRequest {
    language: string;
}
export interface GetCustomVerifyEmailOTPMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultVerifyEmailOTPMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifyEmailOTPMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomVerifyEmailOTPMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomVerifyEmailOTPMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifyEmailOTPMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifyEmailOTPMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomDomainClaimedMessageTextRequest {
    language: string;
}
export interface GetCustomDomainClaimedMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultDomainClaimedMessageTextRequest {
    language: string;
}
export interface GetDefaultDomainClaimedMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomDomainClaimedMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomDomainClaimedMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomDomainClaimedMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomDomainClaimedMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomPasswordlessRegistrationMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordlessRegistrationMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultPasswordlessRegistrationMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordlessRegistrationMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomPasswordlessRegistrationMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomPasswordlessRegistrationMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomPasswordChangeMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordChangeMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultPasswordChangeMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordChangeMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomPasswordChangeMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomPasswordChangeMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordChangeMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordChangeMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomInviteUserMessageTextRequest {
    language: string;
}
export interface GetCustomInviteUserMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetDefaultInviteUserMessageTextRequest {
    language: string;
}
export interface GetDefaultInviteUserMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetCustomInviteUserMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetCustomInviteUserMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomInviteUserMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomInviteUserMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetOrgIDPByIDRequest {
    id: string;
}
export interface GetOrgIDPByIDResponse {
    idp: IDP | undefined;
}
export interface ListOrgIDPsRequest {
    query: ListQuery | undefined;
    sortingColumn: IDPFieldName;
    queries: IDPQuery[];
}
export interface IDPQuery {
    idpIdQuery?: IDPIDQuery | undefined;
    idpNameQuery?: IDPNameQuery | undefined;
    ownerTypeQuery?: IDPOwnerTypeQuery | undefined;
}
export interface ListOrgIDPsResponse {
    details: ListDetails | undefined;
    sortingColumn: IDPFieldName;
    result: IDP[];
}
export interface AddOrgOIDCIDPRequest {
    name: string;
    stylingType: IDPStylingType;
    clientId: string;
    clientSecret: string;
    issuer: string;
    scopes: string[];
    displayNameMapping: OIDCMappingField;
    usernameMapping: OIDCMappingField;
    autoRegister: boolean;
}
export interface AddOrgOIDCIDPResponse {
    details: ObjectDetails | undefined;
    idpId: string;
}
export interface AddOrgJWTIDPRequest {
    name: string;
    stylingType: IDPStylingType;
    jwtEndpoint: string;
    issuer: string;
    keysEndpoint: string;
    headerName: string;
    autoRegister: boolean;
}
export interface AddOrgJWTIDPResponse {
    details: ObjectDetails | undefined;
    idpId: string;
}
export interface DeactivateOrgIDPRequest {
    idpId: string;
}
export interface DeactivateOrgIDPResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateOrgIDPRequest {
    idpId: string;
}
export interface ReactivateOrgIDPResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveOrgIDPRequest {
    idpId: string;
}
export interface RemoveOrgIDPResponse {
}
export interface UpdateOrgIDPRequest {
    idpId: string;
    name: string;
    stylingType: IDPStylingType;
    autoRegister: boolean;
}
export interface UpdateOrgIDPResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateOrgIDPOIDCConfigRequest {
    idpId: string;
    clientId: string;
    clientSecret: string;
    issuer: string;
    scopes: string[];
    displayNameMapping: OIDCMappingField;
    usernameMapping: OIDCMappingField;
}
export interface UpdateOrgIDPOIDCConfigResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateOrgIDPJWTConfigRequest {
    idpId: string;
    jwtEndpoint: string;
    issuer: string;
    keysEndpoint: string;
    headerName: string;
}
export interface UpdateOrgIDPJWTConfigResponse {
    details: ObjectDetails | undefined;
}
export interface ListProvidersRequest {
    query: ListQuery | undefined;
    queries: ProviderQuery[];
}
export interface ProviderQuery {
    idpIdQuery?: IDPIDQuery | undefined;
    idpNameQuery?: IDPNameQuery | undefined;
    ownerTypeQuery?: IDPOwnerTypeQuery | undefined;
}
export interface ListProvidersResponse {
    details: ListDetails | undefined;
    result: Provider[];
}
export interface GetProviderByIDRequest {
    id: string;
}
export interface GetProviderByIDResponse {
    idp: Provider | undefined;
}
export interface AddGenericOAuthProviderRequest {
    name: string;
    clientId: string;
    clientSecret: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
    idAttribute: string;
    providerOptions: Options | undefined;
}
export interface AddGenericOAuthProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGenericOAuthProviderRequest {
    id: string;
    name: string;
    clientId: string;
    clientSecret: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
    idAttribute: string;
    providerOptions: Options | undefined;
}
export interface UpdateGenericOAuthProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGenericOIDCProviderRequest {
    name: string;
    issuer: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
    isIdTokenMapping: boolean;
}
export interface AddGenericOIDCProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGenericOIDCProviderRequest {
    id: string;
    name: string;
    issuer: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
    isIdTokenMapping: boolean;
}
export interface UpdateGenericOIDCProviderResponse {
    details: ObjectDetails | undefined;
}
export interface MigrateGenericOIDCProviderRequest {
    id: string;
    azure?: AddAzureADProviderRequest | undefined;
    google?: AddGoogleProviderRequest | undefined;
}
export interface MigrateGenericOIDCProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddJWTProviderRequest {
    name: string;
    issuer: string;
    jwtEndpoint: string;
    keysEndpoint: string;
    headerName: string;
    providerOptions: Options | undefined;
}
export interface AddJWTProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateJWTProviderRequest {
    id: string;
    name: string;
    issuer: string;
    jwtEndpoint: string;
    keysEndpoint: string;
    headerName: string;
    providerOptions: Options | undefined;
}
export interface UpdateJWTProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddAzureADProviderRequest {
    name: string;
    clientId: string;
    clientSecret: string;
    tenant: AzureADTenant | undefined;
    emailVerified: boolean;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddAzureADProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateAzureADProviderRequest {
    id: string;
    name: string;
    clientId: string;
    clientSecret: string;
    tenant: AzureADTenant | undefined;
    emailVerified: boolean;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateAzureADProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGitHubProviderRequest {
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddGitHubProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGitHubProviderRequest {
    id: string;
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateGitHubProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGitHubEnterpriseServerProviderRequest {
    clientId: string;
    name: string;
    clientSecret: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddGitHubEnterpriseServerProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGitHubEnterpriseServerProviderRequest {
    id: string;
    name: string;
    clientId: string;
    clientSecret: string;
    authorizationEndpoint: string;
    tokenEndpoint: string;
    userEndpoint: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateGitHubEnterpriseServerProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGitLabProviderRequest {
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddGitLabProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGitLabProviderRequest {
    id: string;
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateGitLabProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGitLabSelfHostedProviderRequest {
    issuer: string;
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddGitLabSelfHostedProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGitLabSelfHostedProviderRequest {
    id: string;
    issuer: string;
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateGitLabSelfHostedProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddGoogleProviderRequest {
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddGoogleProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateGoogleProviderRequest {
    id: string;
    name: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateGoogleProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddLDAPProviderRequest {
    name: string;
    servers: string[];
    startTls: boolean;
    baseDn: string;
    bindDn: string;
    bindPassword: string;
    userBase: string;
    userObjectClasses: string[];
    userFilters: string[];
    timeout: Duration | undefined;
    attributes: LDAPAttributes | undefined;
    providerOptions: Options | undefined;
}
export interface AddLDAPProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateLDAPProviderRequest {
    id: string;
    name: string;
    servers: string[];
    startTls: boolean;
    baseDn: string;
    bindDn: string;
    bindPassword: string;
    userBase: string;
    userObjectClasses: string[];
    userFilters: string[];
    timeout: Duration | undefined;
    attributes: LDAPAttributes | undefined;
    providerOptions: Options | undefined;
}
export interface UpdateLDAPProviderResponse {
    details: ObjectDetails | undefined;
}
export interface AddSAMLProviderRequest {
    name: string;
    metadataXml?: Buffer | undefined;
    metadataUrl?: string | undefined;
    binding: SAMLBinding;
    withSignedRequest: boolean;
    providerOptions: Options | undefined;
    nameIdFormat?: SAMLNameIDFormat | undefined;
    transientMappingAttributeName?: string | undefined;
}
export interface AddSAMLProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateSAMLProviderRequest {
    id: string;
    name: string;
    metadataXml?: Buffer | undefined;
    metadataUrl?: string | undefined;
    binding: SAMLBinding;
    withSignedRequest: boolean;
    providerOptions: Options | undefined;
    nameIdFormat?: SAMLNameIDFormat | undefined;
    transientMappingAttributeName?: string | undefined;
}
export interface UpdateSAMLProviderResponse {
    details: ObjectDetails | undefined;
}
export interface RegenerateSAMLProviderCertificateRequest {
    id: string;
}
export interface RegenerateSAMLProviderCertificateResponse {
    details: ObjectDetails | undefined;
}
export interface AddAppleProviderRequest {
    name: string;
    clientId: string;
    teamId: string;
    keyId: string;
    privateKey: Buffer;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface AddAppleProviderResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateAppleProviderRequest {
    id: string;
    name: string;
    clientId: string;
    teamId: string;
    keyId: string;
    privateKey: Buffer;
    scopes: string[];
    providerOptions: Options | undefined;
}
export interface UpdateAppleProviderResponse {
    details: ObjectDetails | undefined;
}
export interface DeleteProviderRequest {
    id: string;
}
export interface DeleteProviderResponse {
    details: ObjectDetails | undefined;
}
export interface ListActionsRequest {
    query: ListQuery | undefined;
    sortingColumn: ActionFieldName;
    queries: ActionQuery[];
}
export interface ActionQuery {
    actionIdQuery?: ActionIDQuery | undefined;
    actionNameQuery?: ActionNameQuery | undefined;
    actionStateQuery?: ActionStateQuery | undefined;
}
export interface ListActionsResponse {
    details: ListDetails | undefined;
    sortingColumn: ActionFieldName;
    result: Action[];
}
export interface CreateActionRequest {
    name: string;
    script: string;
    timeout: Duration | undefined;
    allowedToFail: boolean;
}
export interface CreateActionResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface GetActionRequest {
    id: string;
}
export interface GetActionResponse {
    action: Action | undefined;
}
export interface UpdateActionRequest {
    id: string;
    name: string;
    script: string;
    timeout: Duration | undefined;
    allowedToFail: boolean;
}
export interface UpdateActionResponse {
    details: ObjectDetails | undefined;
}
export interface DeleteActionRequest {
    id: string;
}
export interface DeleteActionResponse {
}
export interface ListFlowTypesRequest {
}
export interface ListFlowTypesResponse {
    result: FlowType[];
}
export interface ListFlowTriggerTypesRequest {
    type: string;
}
export interface ListFlowTriggerTypesResponse {
    result: TriggerType[];
}
export interface DeactivateActionRequest {
    id: string;
}
export interface DeactivateActionResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateActionRequest {
    id: string;
}
export interface ReactivateActionResponse {
    details: ObjectDetails | undefined;
}
export interface GetFlowRequest {
    type: string;
}
export interface GetFlowResponse {
    flow: Flow | undefined;
}
export interface ClearFlowRequest {
    type: string;
}
export interface ClearFlowResponse {
    details: ObjectDetails | undefined;
}
export interface SetTriggerActionsRequest {
    flowType: string;
    triggerType: string;
    actionIds: string[];
}
export interface SetTriggerActionsResponse {
    details: ObjectDetails | undefined;
}
export declare const HealthzRequest: MessageFns<HealthzRequest>;
export declare const HealthzResponse: MessageFns<HealthzResponse>;
export declare const GetOIDCInformationRequest: MessageFns<GetOIDCInformationRequest>;
export declare const GetOIDCInformationResponse: MessageFns<GetOIDCInformationResponse>;
export declare const GetIAMRequest: MessageFns<GetIAMRequest>;
export declare const GetIAMResponse: MessageFns<GetIAMResponse>;
export declare const GetSupportedLanguagesRequest: MessageFns<GetSupportedLanguagesRequest>;
export declare const GetSupportedLanguagesResponse: MessageFns<GetSupportedLanguagesResponse>;
export declare const GetUserByIDRequest: MessageFns<GetUserByIDRequest>;
export declare const GetUserByIDResponse: MessageFns<GetUserByIDResponse>;
export declare const GetUserByLoginNameGlobalRequest: MessageFns<GetUserByLoginNameGlobalRequest>;
export declare const GetUserByLoginNameGlobalResponse: MessageFns<GetUserByLoginNameGlobalResponse>;
export declare const ListUsersRequest: MessageFns<ListUsersRequest>;
export declare const ListUsersResponse: MessageFns<ListUsersResponse>;
export declare const ListUserChangesRequest: MessageFns<ListUserChangesRequest>;
export declare const ListUserChangesResponse: MessageFns<ListUserChangesResponse>;
export declare const IsUserUniqueRequest: MessageFns<IsUserUniqueRequest>;
export declare const IsUserUniqueResponse: MessageFns<IsUserUniqueResponse>;
export declare const AddHumanUserRequest: MessageFns<AddHumanUserRequest>;
export declare const AddHumanUserRequest_Profile: MessageFns<AddHumanUserRequest_Profile>;
export declare const AddHumanUserRequest_Email: MessageFns<AddHumanUserRequest_Email>;
export declare const AddHumanUserRequest_Phone: MessageFns<AddHumanUserRequest_Phone>;
export declare const AddHumanUserResponse: MessageFns<AddHumanUserResponse>;
export declare const ImportHumanUserRequest: MessageFns<ImportHumanUserRequest>;
export declare const ImportHumanUserRequest_Profile: MessageFns<ImportHumanUserRequest_Profile>;
export declare const ImportHumanUserRequest_Email: MessageFns<ImportHumanUserRequest_Email>;
export declare const ImportHumanUserRequest_Phone: MessageFns<ImportHumanUserRequest_Phone>;
export declare const ImportHumanUserRequest_HashedPassword: MessageFns<ImportHumanUserRequest_HashedPassword>;
export declare const ImportHumanUserRequest_IDP: MessageFns<ImportHumanUserRequest_IDP>;
export declare const ImportHumanUserResponse: MessageFns<ImportHumanUserResponse>;
export declare const ImportHumanUserResponse_PasswordlessRegistration: MessageFns<ImportHumanUserResponse_PasswordlessRegistration>;
export declare const AddMachineUserRequest: MessageFns<AddMachineUserRequest>;
export declare const AddMachineUserResponse: MessageFns<AddMachineUserResponse>;
export declare const DeactivateUserRequest: MessageFns<DeactivateUserRequest>;
export declare const DeactivateUserResponse: MessageFns<DeactivateUserResponse>;
export declare const ReactivateUserRequest: MessageFns<ReactivateUserRequest>;
export declare const ReactivateUserResponse: MessageFns<ReactivateUserResponse>;
export declare const LockUserRequest: MessageFns<LockUserRequest>;
export declare const LockUserResponse: MessageFns<LockUserResponse>;
export declare const UnlockUserRequest: MessageFns<UnlockUserRequest>;
export declare const UnlockUserResponse: MessageFns<UnlockUserResponse>;
export declare const RemoveUserRequest: MessageFns<RemoveUserRequest>;
export declare const RemoveUserResponse: MessageFns<RemoveUserResponse>;
export declare const UpdateUserNameRequest: MessageFns<UpdateUserNameRequest>;
export declare const UpdateUserNameResponse: MessageFns<UpdateUserNameResponse>;
export declare const ListUserMetadataRequest: MessageFns<ListUserMetadataRequest>;
export declare const ListUserMetadataResponse: MessageFns<ListUserMetadataResponse>;
export declare const GetUserMetadataRequest: MessageFns<GetUserMetadataRequest>;
export declare const GetUserMetadataResponse: MessageFns<GetUserMetadataResponse>;
export declare const SetUserMetadataRequest: MessageFns<SetUserMetadataRequest>;
export declare const SetUserMetadataResponse: MessageFns<SetUserMetadataResponse>;
export declare const BulkSetUserMetadataRequest: MessageFns<BulkSetUserMetadataRequest>;
export declare const BulkSetUserMetadataRequest_Metadata: MessageFns<BulkSetUserMetadataRequest_Metadata>;
export declare const BulkSetUserMetadataResponse: MessageFns<BulkSetUserMetadataResponse>;
export declare const RemoveUserMetadataRequest: MessageFns<RemoveUserMetadataRequest>;
export declare const RemoveUserMetadataResponse: MessageFns<RemoveUserMetadataResponse>;
export declare const BulkRemoveUserMetadataRequest: MessageFns<BulkRemoveUserMetadataRequest>;
export declare const BulkRemoveUserMetadataResponse: MessageFns<BulkRemoveUserMetadataResponse>;
export declare const GetHumanProfileRequest: MessageFns<GetHumanProfileRequest>;
export declare const GetHumanProfileResponse: MessageFns<GetHumanProfileResponse>;
export declare const UpdateHumanProfileRequest: MessageFns<UpdateHumanProfileRequest>;
export declare const UpdateHumanProfileResponse: MessageFns<UpdateHumanProfileResponse>;
export declare const GetHumanEmailRequest: MessageFns<GetHumanEmailRequest>;
export declare const GetHumanEmailResponse: MessageFns<GetHumanEmailResponse>;
export declare const UpdateHumanEmailRequest: MessageFns<UpdateHumanEmailRequest>;
export declare const UpdateHumanEmailResponse: MessageFns<UpdateHumanEmailResponse>;
export declare const ResendHumanInitializationRequest: MessageFns<ResendHumanInitializationRequest>;
export declare const ResendHumanInitializationResponse: MessageFns<ResendHumanInitializationResponse>;
export declare const ResendHumanEmailVerificationRequest: MessageFns<ResendHumanEmailVerificationRequest>;
export declare const ResendHumanEmailVerificationResponse: MessageFns<ResendHumanEmailVerificationResponse>;
export declare const GetHumanPhoneRequest: MessageFns<GetHumanPhoneRequest>;
export declare const GetHumanPhoneResponse: MessageFns<GetHumanPhoneResponse>;
export declare const UpdateHumanPhoneRequest: MessageFns<UpdateHumanPhoneRequest>;
export declare const UpdateHumanPhoneResponse: MessageFns<UpdateHumanPhoneResponse>;
export declare const RemoveHumanPhoneRequest: MessageFns<RemoveHumanPhoneRequest>;
export declare const RemoveHumanPhoneResponse: MessageFns<RemoveHumanPhoneResponse>;
export declare const ResendHumanPhoneVerificationRequest: MessageFns<ResendHumanPhoneVerificationRequest>;
export declare const ResendHumanPhoneVerificationResponse: MessageFns<ResendHumanPhoneVerificationResponse>;
export declare const RemoveHumanAvatarRequest: MessageFns<RemoveHumanAvatarRequest>;
export declare const RemoveHumanAvatarResponse: MessageFns<RemoveHumanAvatarResponse>;
export declare const SetHumanInitialPasswordRequest: MessageFns<SetHumanInitialPasswordRequest>;
export declare const SetHumanInitialPasswordResponse: MessageFns<SetHumanInitialPasswordResponse>;
export declare const SetHumanPasswordRequest: MessageFns<SetHumanPasswordRequest>;
export declare const SetHumanPasswordResponse: MessageFns<SetHumanPasswordResponse>;
export declare const SendHumanResetPasswordNotificationRequest: MessageFns<SendHumanResetPasswordNotificationRequest>;
export declare const SendHumanResetPasswordNotificationResponse: MessageFns<SendHumanResetPasswordNotificationResponse>;
export declare const ListHumanAuthFactorsRequest: MessageFns<ListHumanAuthFactorsRequest>;
export declare const ListHumanAuthFactorsResponse: MessageFns<ListHumanAuthFactorsResponse>;
export declare const RemoveHumanAuthFactorOTPRequest: MessageFns<RemoveHumanAuthFactorOTPRequest>;
export declare const RemoveHumanAuthFactorOTPResponse: MessageFns<RemoveHumanAuthFactorOTPResponse>;
export declare const RemoveHumanAuthFactorU2FRequest: MessageFns<RemoveHumanAuthFactorU2FRequest>;
export declare const RemoveHumanAuthFactorU2FResponse: MessageFns<RemoveHumanAuthFactorU2FResponse>;
export declare const RemoveHumanAuthFactorOTPSMSRequest: MessageFns<RemoveHumanAuthFactorOTPSMSRequest>;
export declare const RemoveHumanAuthFactorOTPSMSResponse: MessageFns<RemoveHumanAuthFactorOTPSMSResponse>;
export declare const RemoveHumanAuthFactorOTPEmailRequest: MessageFns<RemoveHumanAuthFactorOTPEmailRequest>;
export declare const RemoveHumanAuthFactorOTPEmailResponse: MessageFns<RemoveHumanAuthFactorOTPEmailResponse>;
export declare const ListHumanPasswordlessRequest: MessageFns<ListHumanPasswordlessRequest>;
export declare const ListHumanPasswordlessResponse: MessageFns<ListHumanPasswordlessResponse>;
export declare const AddPasswordlessRegistrationRequest: MessageFns<AddPasswordlessRegistrationRequest>;
export declare const AddPasswordlessRegistrationResponse: MessageFns<AddPasswordlessRegistrationResponse>;
export declare const SendPasswordlessRegistrationRequest: MessageFns<SendPasswordlessRegistrationRequest>;
export declare const SendPasswordlessRegistrationResponse: MessageFns<SendPasswordlessRegistrationResponse>;
export declare const RemoveHumanPasswordlessRequest: MessageFns<RemoveHumanPasswordlessRequest>;
export declare const RemoveHumanPasswordlessResponse: MessageFns<RemoveHumanPasswordlessResponse>;
export declare const UpdateMachineRequest: MessageFns<UpdateMachineRequest>;
export declare const UpdateMachineResponse: MessageFns<UpdateMachineResponse>;
export declare const GenerateMachineSecretRequest: MessageFns<GenerateMachineSecretRequest>;
export declare const GenerateMachineSecretResponse: MessageFns<GenerateMachineSecretResponse>;
export declare const RemoveMachineSecretRequest: MessageFns<RemoveMachineSecretRequest>;
export declare const RemoveMachineSecretResponse: MessageFns<RemoveMachineSecretResponse>;
export declare const GetMachineKeyByIDsRequest: MessageFns<GetMachineKeyByIDsRequest>;
export declare const GetMachineKeyByIDsResponse: MessageFns<GetMachineKeyByIDsResponse>;
export declare const ListMachineKeysRequest: MessageFns<ListMachineKeysRequest>;
export declare const ListMachineKeysResponse: MessageFns<ListMachineKeysResponse>;
export declare const AddMachineKeyRequest: MessageFns<AddMachineKeyRequest>;
export declare const AddMachineKeyResponse: MessageFns<AddMachineKeyResponse>;
export declare const RemoveMachineKeyRequest: MessageFns<RemoveMachineKeyRequest>;
export declare const RemoveMachineKeyResponse: MessageFns<RemoveMachineKeyResponse>;
export declare const GetPersonalAccessTokenByIDsRequest: MessageFns<GetPersonalAccessTokenByIDsRequest>;
export declare const GetPersonalAccessTokenByIDsResponse: MessageFns<GetPersonalAccessTokenByIDsResponse>;
export declare const ListPersonalAccessTokensRequest: MessageFns<ListPersonalAccessTokensRequest>;
export declare const ListPersonalAccessTokensResponse: MessageFns<ListPersonalAccessTokensResponse>;
export declare const AddPersonalAccessTokenRequest: MessageFns<AddPersonalAccessTokenRequest>;
export declare const AddPersonalAccessTokenResponse: MessageFns<AddPersonalAccessTokenResponse>;
export declare const RemovePersonalAccessTokenRequest: MessageFns<RemovePersonalAccessTokenRequest>;
export declare const RemovePersonalAccessTokenResponse: MessageFns<RemovePersonalAccessTokenResponse>;
export declare const ListHumanLinkedIDPsRequest: MessageFns<ListHumanLinkedIDPsRequest>;
export declare const ListHumanLinkedIDPsResponse: MessageFns<ListHumanLinkedIDPsResponse>;
export declare const RemoveHumanLinkedIDPRequest: MessageFns<RemoveHumanLinkedIDPRequest>;
export declare const RemoveHumanLinkedIDPResponse: MessageFns<RemoveHumanLinkedIDPResponse>;
export declare const ListUserMembershipsRequest: MessageFns<ListUserMembershipsRequest>;
export declare const ListUserMembershipsResponse: MessageFns<ListUserMembershipsResponse>;
export declare const GetMyOrgRequest: MessageFns<GetMyOrgRequest>;
export declare const GetMyOrgResponse: MessageFns<GetMyOrgResponse>;
export declare const GetOrgByDomainGlobalRequest: MessageFns<GetOrgByDomainGlobalRequest>;
export declare const ListOrgChangesRequest: MessageFns<ListOrgChangesRequest>;
export declare const ListOrgChangesResponse: MessageFns<ListOrgChangesResponse>;
export declare const GetOrgByDomainGlobalResponse: MessageFns<GetOrgByDomainGlobalResponse>;
export declare const AddOrgRequest: MessageFns<AddOrgRequest>;
export declare const AddOrgResponse: MessageFns<AddOrgResponse>;
export declare const UpdateOrgRequest: MessageFns<UpdateOrgRequest>;
export declare const UpdateOrgResponse: MessageFns<UpdateOrgResponse>;
export declare const DeactivateOrgRequest: MessageFns<DeactivateOrgRequest>;
export declare const DeactivateOrgResponse: MessageFns<DeactivateOrgResponse>;
export declare const ReactivateOrgRequest: MessageFns<ReactivateOrgRequest>;
export declare const ReactivateOrgResponse: MessageFns<ReactivateOrgResponse>;
export declare const RemoveOrgRequest: MessageFns<RemoveOrgRequest>;
export declare const RemoveOrgResponse: MessageFns<RemoveOrgResponse>;
export declare const ListOrgDomainsRequest: MessageFns<ListOrgDomainsRequest>;
export declare const ListOrgDomainsResponse: MessageFns<ListOrgDomainsResponse>;
export declare const AddOrgDomainRequest: MessageFns<AddOrgDomainRequest>;
export declare const AddOrgDomainResponse: MessageFns<AddOrgDomainResponse>;
export declare const RemoveOrgDomainRequest: MessageFns<RemoveOrgDomainRequest>;
export declare const RemoveOrgDomainResponse: MessageFns<RemoveOrgDomainResponse>;
export declare const GenerateOrgDomainValidationRequest: MessageFns<GenerateOrgDomainValidationRequest>;
export declare const GenerateOrgDomainValidationResponse: MessageFns<GenerateOrgDomainValidationResponse>;
export declare const ValidateOrgDomainRequest: MessageFns<ValidateOrgDomainRequest>;
export declare const ValidateOrgDomainResponse: MessageFns<ValidateOrgDomainResponse>;
export declare const SetPrimaryOrgDomainRequest: MessageFns<SetPrimaryOrgDomainRequest>;
export declare const SetPrimaryOrgDomainResponse: MessageFns<SetPrimaryOrgDomainResponse>;
export declare const ListOrgMemberRolesRequest: MessageFns<ListOrgMemberRolesRequest>;
export declare const ListOrgMemberRolesResponse: MessageFns<ListOrgMemberRolesResponse>;
export declare const ListOrgMembersRequest: MessageFns<ListOrgMembersRequest>;
export declare const ListOrgMembersResponse: MessageFns<ListOrgMembersResponse>;
export declare const AddOrgMemberRequest: MessageFns<AddOrgMemberRequest>;
export declare const AddOrgMemberResponse: MessageFns<AddOrgMemberResponse>;
export declare const UpdateOrgMemberRequest: MessageFns<UpdateOrgMemberRequest>;
export declare const UpdateOrgMemberResponse: MessageFns<UpdateOrgMemberResponse>;
export declare const RemoveOrgMemberRequest: MessageFns<RemoveOrgMemberRequest>;
export declare const RemoveOrgMemberResponse: MessageFns<RemoveOrgMemberResponse>;
export declare const ListOrgMetadataRequest: MessageFns<ListOrgMetadataRequest>;
export declare const ListOrgMetadataResponse: MessageFns<ListOrgMetadataResponse>;
export declare const GetOrgMetadataRequest: MessageFns<GetOrgMetadataRequest>;
export declare const GetOrgMetadataResponse: MessageFns<GetOrgMetadataResponse>;
export declare const SetOrgMetadataRequest: MessageFns<SetOrgMetadataRequest>;
export declare const SetOrgMetadataResponse: MessageFns<SetOrgMetadataResponse>;
export declare const BulkSetOrgMetadataRequest: MessageFns<BulkSetOrgMetadataRequest>;
export declare const BulkSetOrgMetadataRequest_Metadata: MessageFns<BulkSetOrgMetadataRequest_Metadata>;
export declare const BulkSetOrgMetadataResponse: MessageFns<BulkSetOrgMetadataResponse>;
export declare const RemoveOrgMetadataRequest: MessageFns<RemoveOrgMetadataRequest>;
export declare const RemoveOrgMetadataResponse: MessageFns<RemoveOrgMetadataResponse>;
export declare const BulkRemoveOrgMetadataRequest: MessageFns<BulkRemoveOrgMetadataRequest>;
export declare const BulkRemoveOrgMetadataResponse: MessageFns<BulkRemoveOrgMetadataResponse>;
export declare const GetProjectByIDRequest: MessageFns<GetProjectByIDRequest>;
export declare const GetProjectByIDResponse: MessageFns<GetProjectByIDResponse>;
export declare const GetGrantedProjectByIDRequest: MessageFns<GetGrantedProjectByIDRequest>;
export declare const GetGrantedProjectByIDResponse: MessageFns<GetGrantedProjectByIDResponse>;
export declare const ListProjectsRequest: MessageFns<ListProjectsRequest>;
export declare const ListProjectsResponse: MessageFns<ListProjectsResponse>;
export declare const ListGrantedProjectsRequest: MessageFns<ListGrantedProjectsRequest>;
export declare const ListGrantedProjectsResponse: MessageFns<ListGrantedProjectsResponse>;
export declare const ListProjectChangesRequest: MessageFns<ListProjectChangesRequest>;
export declare const ListProjectChangesResponse: MessageFns<ListProjectChangesResponse>;
export declare const AddProjectRequest: MessageFns<AddProjectRequest>;
export declare const AddProjectResponse: MessageFns<AddProjectResponse>;
export declare const UpdateProjectRequest: MessageFns<UpdateProjectRequest>;
export declare const UpdateProjectResponse: MessageFns<UpdateProjectResponse>;
export declare const DeactivateProjectRequest: MessageFns<DeactivateProjectRequest>;
export declare const DeactivateProjectResponse: MessageFns<DeactivateProjectResponse>;
export declare const ReactivateProjectRequest: MessageFns<ReactivateProjectRequest>;
export declare const ReactivateProjectResponse: MessageFns<ReactivateProjectResponse>;
export declare const RemoveProjectRequest: MessageFns<RemoveProjectRequest>;
export declare const RemoveProjectResponse: MessageFns<RemoveProjectResponse>;
export declare const ListProjectMemberRolesRequest: MessageFns<ListProjectMemberRolesRequest>;
export declare const ListProjectMemberRolesResponse: MessageFns<ListProjectMemberRolesResponse>;
export declare const AddProjectRoleRequest: MessageFns<AddProjectRoleRequest>;
export declare const AddProjectRoleResponse: MessageFns<AddProjectRoleResponse>;
export declare const BulkAddProjectRolesRequest: MessageFns<BulkAddProjectRolesRequest>;
export declare const BulkAddProjectRolesRequest_Role: MessageFns<BulkAddProjectRolesRequest_Role>;
export declare const BulkAddProjectRolesResponse: MessageFns<BulkAddProjectRolesResponse>;
export declare const UpdateProjectRoleRequest: MessageFns<UpdateProjectRoleRequest>;
export declare const UpdateProjectRoleResponse: MessageFns<UpdateProjectRoleResponse>;
export declare const RemoveProjectRoleRequest: MessageFns<RemoveProjectRoleRequest>;
export declare const RemoveProjectRoleResponse: MessageFns<RemoveProjectRoleResponse>;
export declare const ListProjectRolesRequest: MessageFns<ListProjectRolesRequest>;
export declare const ListProjectRolesResponse: MessageFns<ListProjectRolesResponse>;
export declare const ListGrantedProjectRolesRequest: MessageFns<ListGrantedProjectRolesRequest>;
export declare const ListGrantedProjectRolesResponse: MessageFns<ListGrantedProjectRolesResponse>;
export declare const ListProjectMembersRequest: MessageFns<ListProjectMembersRequest>;
export declare const ListProjectMembersResponse: MessageFns<ListProjectMembersResponse>;
export declare const AddProjectMemberRequest: MessageFns<AddProjectMemberRequest>;
export declare const AddProjectMemberResponse: MessageFns<AddProjectMemberResponse>;
export declare const UpdateProjectMemberRequest: MessageFns<UpdateProjectMemberRequest>;
export declare const UpdateProjectMemberResponse: MessageFns<UpdateProjectMemberResponse>;
export declare const RemoveProjectMemberRequest: MessageFns<RemoveProjectMemberRequest>;
export declare const RemoveProjectMemberResponse: MessageFns<RemoveProjectMemberResponse>;
export declare const GetAppByIDRequest: MessageFns<GetAppByIDRequest>;
export declare const GetAppByIDResponse: MessageFns<GetAppByIDResponse>;
export declare const ListAppsRequest: MessageFns<ListAppsRequest>;
export declare const ListAppsResponse: MessageFns<ListAppsResponse>;
export declare const ListAppChangesRequest: MessageFns<ListAppChangesRequest>;
export declare const ListAppChangesResponse: MessageFns<ListAppChangesResponse>;
export declare const AddOIDCAppRequest: MessageFns<AddOIDCAppRequest>;
export declare const AddOIDCAppResponse: MessageFns<AddOIDCAppResponse>;
export declare const AddSAMLAppRequest: MessageFns<AddSAMLAppRequest>;
export declare const AddSAMLAppResponse: MessageFns<AddSAMLAppResponse>;
export declare const AddAPIAppRequest: MessageFns<AddAPIAppRequest>;
export declare const AddAPIAppResponse: MessageFns<AddAPIAppResponse>;
export declare const UpdateAppRequest: MessageFns<UpdateAppRequest>;
export declare const UpdateAppResponse: MessageFns<UpdateAppResponse>;
export declare const UpdateOIDCAppConfigRequest: MessageFns<UpdateOIDCAppConfigRequest>;
export declare const UpdateOIDCAppConfigResponse: MessageFns<UpdateOIDCAppConfigResponse>;
export declare const UpdateSAMLAppConfigRequest: MessageFns<UpdateSAMLAppConfigRequest>;
export declare const UpdateSAMLAppConfigResponse: MessageFns<UpdateSAMLAppConfigResponse>;
export declare const UpdateAPIAppConfigRequest: MessageFns<UpdateAPIAppConfigRequest>;
export declare const UpdateAPIAppConfigResponse: MessageFns<UpdateAPIAppConfigResponse>;
export declare const DeactivateAppRequest: MessageFns<DeactivateAppRequest>;
export declare const DeactivateAppResponse: MessageFns<DeactivateAppResponse>;
export declare const ReactivateAppRequest: MessageFns<ReactivateAppRequest>;
export declare const ReactivateAppResponse: MessageFns<ReactivateAppResponse>;
export declare const RemoveAppRequest: MessageFns<RemoveAppRequest>;
export declare const RemoveAppResponse: MessageFns<RemoveAppResponse>;
export declare const RegenerateOIDCClientSecretRequest: MessageFns<RegenerateOIDCClientSecretRequest>;
export declare const RegenerateOIDCClientSecretResponse: MessageFns<RegenerateOIDCClientSecretResponse>;
export declare const RegenerateAPIClientSecretRequest: MessageFns<RegenerateAPIClientSecretRequest>;
export declare const RegenerateAPIClientSecretResponse: MessageFns<RegenerateAPIClientSecretResponse>;
export declare const GetAppKeyRequest: MessageFns<GetAppKeyRequest>;
export declare const GetAppKeyResponse: MessageFns<GetAppKeyResponse>;
export declare const ListAppKeysRequest: MessageFns<ListAppKeysRequest>;
export declare const ListAppKeysResponse: MessageFns<ListAppKeysResponse>;
export declare const AddAppKeyRequest: MessageFns<AddAppKeyRequest>;
export declare const AddAppKeyResponse: MessageFns<AddAppKeyResponse>;
export declare const RemoveAppKeyRequest: MessageFns<RemoveAppKeyRequest>;
export declare const RemoveAppKeyResponse: MessageFns<RemoveAppKeyResponse>;
export declare const ListProjectGrantChangesRequest: MessageFns<ListProjectGrantChangesRequest>;
export declare const ListProjectGrantChangesResponse: MessageFns<ListProjectGrantChangesResponse>;
export declare const GetProjectGrantByIDRequest: MessageFns<GetProjectGrantByIDRequest>;
export declare const GetProjectGrantByIDResponse: MessageFns<GetProjectGrantByIDResponse>;
export declare const ListProjectGrantsRequest: MessageFns<ListProjectGrantsRequest>;
export declare const ListProjectGrantsResponse: MessageFns<ListProjectGrantsResponse>;
export declare const ListAllProjectGrantsRequest: MessageFns<ListAllProjectGrantsRequest>;
export declare const ListAllProjectGrantsResponse: MessageFns<ListAllProjectGrantsResponse>;
export declare const AddProjectGrantRequest: MessageFns<AddProjectGrantRequest>;
export declare const AddProjectGrantResponse: MessageFns<AddProjectGrantResponse>;
export declare const UpdateProjectGrantRequest: MessageFns<UpdateProjectGrantRequest>;
export declare const UpdateProjectGrantResponse: MessageFns<UpdateProjectGrantResponse>;
export declare const DeactivateProjectGrantRequest: MessageFns<DeactivateProjectGrantRequest>;
export declare const DeactivateProjectGrantResponse: MessageFns<DeactivateProjectGrantResponse>;
export declare const ReactivateProjectGrantRequest: MessageFns<ReactivateProjectGrantRequest>;
export declare const ReactivateProjectGrantResponse: MessageFns<ReactivateProjectGrantResponse>;
export declare const RemoveProjectGrantRequest: MessageFns<RemoveProjectGrantRequest>;
export declare const RemoveProjectGrantResponse: MessageFns<RemoveProjectGrantResponse>;
export declare const ListProjectGrantMemberRolesRequest: MessageFns<ListProjectGrantMemberRolesRequest>;
export declare const ListProjectGrantMemberRolesResponse: MessageFns<ListProjectGrantMemberRolesResponse>;
export declare const ListProjectGrantMembersRequest: MessageFns<ListProjectGrantMembersRequest>;
export declare const ListProjectGrantMembersResponse: MessageFns<ListProjectGrantMembersResponse>;
export declare const AddProjectGrantMemberRequest: MessageFns<AddProjectGrantMemberRequest>;
export declare const AddProjectGrantMemberResponse: MessageFns<AddProjectGrantMemberResponse>;
export declare const UpdateProjectGrantMemberRequest: MessageFns<UpdateProjectGrantMemberRequest>;
export declare const UpdateProjectGrantMemberResponse: MessageFns<UpdateProjectGrantMemberResponse>;
export declare const RemoveProjectGrantMemberRequest: MessageFns<RemoveProjectGrantMemberRequest>;
export declare const RemoveProjectGrantMemberResponse: MessageFns<RemoveProjectGrantMemberResponse>;
export declare const GetUserGrantByIDRequest: MessageFns<GetUserGrantByIDRequest>;
export declare const GetUserGrantByIDResponse: MessageFns<GetUserGrantByIDResponse>;
export declare const ListUserGrantRequest: MessageFns<ListUserGrantRequest>;
export declare const ListUserGrantResponse: MessageFns<ListUserGrantResponse>;
export declare const AddUserGrantRequest: MessageFns<AddUserGrantRequest>;
export declare const AddUserGrantResponse: MessageFns<AddUserGrantResponse>;
export declare const UpdateUserGrantRequest: MessageFns<UpdateUserGrantRequest>;
export declare const UpdateUserGrantResponse: MessageFns<UpdateUserGrantResponse>;
export declare const DeactivateUserGrantRequest: MessageFns<DeactivateUserGrantRequest>;
export declare const DeactivateUserGrantResponse: MessageFns<DeactivateUserGrantResponse>;
export declare const ReactivateUserGrantRequest: MessageFns<ReactivateUserGrantRequest>;
export declare const ReactivateUserGrantResponse: MessageFns<ReactivateUserGrantResponse>;
export declare const RemoveUserGrantRequest: MessageFns<RemoveUserGrantRequest>;
export declare const RemoveUserGrantResponse: MessageFns<RemoveUserGrantResponse>;
export declare const BulkRemoveUserGrantRequest: MessageFns<BulkRemoveUserGrantRequest>;
export declare const BulkRemoveUserGrantResponse: MessageFns<BulkRemoveUserGrantResponse>;
export declare const GetOrgIAMPolicyRequest: MessageFns<GetOrgIAMPolicyRequest>;
export declare const GetOrgIAMPolicyResponse: MessageFns<GetOrgIAMPolicyResponse>;
export declare const GetDomainPolicyRequest: MessageFns<GetDomainPolicyRequest>;
export declare const GetDomainPolicyResponse: MessageFns<GetDomainPolicyResponse>;
export declare const GetLoginPolicyRequest: MessageFns<GetLoginPolicyRequest>;
export declare const GetLoginPolicyResponse: MessageFns<GetLoginPolicyResponse>;
export declare const GetDefaultLoginPolicyRequest: MessageFns<GetDefaultLoginPolicyRequest>;
export declare const GetDefaultLoginPolicyResponse: MessageFns<GetDefaultLoginPolicyResponse>;
export declare const AddCustomLoginPolicyRequest: MessageFns<AddCustomLoginPolicyRequest>;
export declare const AddCustomLoginPolicyRequest_IDP: MessageFns<AddCustomLoginPolicyRequest_IDP>;
export declare const AddCustomLoginPolicyResponse: MessageFns<AddCustomLoginPolicyResponse>;
export declare const UpdateCustomLoginPolicyRequest: MessageFns<UpdateCustomLoginPolicyRequest>;
export declare const UpdateCustomLoginPolicyResponse: MessageFns<UpdateCustomLoginPolicyResponse>;
export declare const ResetLoginPolicyToDefaultRequest: MessageFns<ResetLoginPolicyToDefaultRequest>;
export declare const ResetLoginPolicyToDefaultResponse: MessageFns<ResetLoginPolicyToDefaultResponse>;
export declare const ListLoginPolicyIDPsRequest: MessageFns<ListLoginPolicyIDPsRequest>;
export declare const ListLoginPolicyIDPsResponse: MessageFns<ListLoginPolicyIDPsResponse>;
export declare const AddIDPToLoginPolicyRequest: MessageFns<AddIDPToLoginPolicyRequest>;
export declare const AddIDPToLoginPolicyResponse: MessageFns<AddIDPToLoginPolicyResponse>;
export declare const RemoveIDPFromLoginPolicyRequest: MessageFns<RemoveIDPFromLoginPolicyRequest>;
export declare const RemoveIDPFromLoginPolicyResponse: MessageFns<RemoveIDPFromLoginPolicyResponse>;
export declare const ListLoginPolicySecondFactorsRequest: MessageFns<ListLoginPolicySecondFactorsRequest>;
export declare const ListLoginPolicySecondFactorsResponse: MessageFns<ListLoginPolicySecondFactorsResponse>;
export declare const AddSecondFactorToLoginPolicyRequest: MessageFns<AddSecondFactorToLoginPolicyRequest>;
export declare const AddSecondFactorToLoginPolicyResponse: MessageFns<AddSecondFactorToLoginPolicyResponse>;
export declare const RemoveSecondFactorFromLoginPolicyRequest: MessageFns<RemoveSecondFactorFromLoginPolicyRequest>;
export declare const RemoveSecondFactorFromLoginPolicyResponse: MessageFns<RemoveSecondFactorFromLoginPolicyResponse>;
export declare const ListLoginPolicyMultiFactorsRequest: MessageFns<ListLoginPolicyMultiFactorsRequest>;
export declare const ListLoginPolicyMultiFactorsResponse: MessageFns<ListLoginPolicyMultiFactorsResponse>;
export declare const AddMultiFactorToLoginPolicyRequest: MessageFns<AddMultiFactorToLoginPolicyRequest>;
export declare const AddMultiFactorToLoginPolicyResponse: MessageFns<AddMultiFactorToLoginPolicyResponse>;
export declare const RemoveMultiFactorFromLoginPolicyRequest: MessageFns<RemoveMultiFactorFromLoginPolicyRequest>;
export declare const RemoveMultiFactorFromLoginPolicyResponse: MessageFns<RemoveMultiFactorFromLoginPolicyResponse>;
export declare const GetPasswordComplexityPolicyRequest: MessageFns<GetPasswordComplexityPolicyRequest>;
export declare const GetPasswordComplexityPolicyResponse: MessageFns<GetPasswordComplexityPolicyResponse>;
export declare const GetDefaultPasswordComplexityPolicyRequest: MessageFns<GetDefaultPasswordComplexityPolicyRequest>;
export declare const GetDefaultPasswordComplexityPolicyResponse: MessageFns<GetDefaultPasswordComplexityPolicyResponse>;
export declare const AddCustomPasswordComplexityPolicyRequest: MessageFns<AddCustomPasswordComplexityPolicyRequest>;
export declare const AddCustomPasswordComplexityPolicyResponse: MessageFns<AddCustomPasswordComplexityPolicyResponse>;
export declare const UpdateCustomPasswordComplexityPolicyRequest: MessageFns<UpdateCustomPasswordComplexityPolicyRequest>;
export declare const UpdateCustomPasswordComplexityPolicyResponse: MessageFns<UpdateCustomPasswordComplexityPolicyResponse>;
export declare const ResetPasswordComplexityPolicyToDefaultRequest: MessageFns<ResetPasswordComplexityPolicyToDefaultRequest>;
export declare const ResetPasswordComplexityPolicyToDefaultResponse: MessageFns<ResetPasswordComplexityPolicyToDefaultResponse>;
export declare const GetPasswordAgePolicyRequest: MessageFns<GetPasswordAgePolicyRequest>;
export declare const GetPasswordAgePolicyResponse: MessageFns<GetPasswordAgePolicyResponse>;
export declare const GetDefaultPasswordAgePolicyRequest: MessageFns<GetDefaultPasswordAgePolicyRequest>;
export declare const GetDefaultPasswordAgePolicyResponse: MessageFns<GetDefaultPasswordAgePolicyResponse>;
export declare const AddCustomPasswordAgePolicyRequest: MessageFns<AddCustomPasswordAgePolicyRequest>;
export declare const AddCustomPasswordAgePolicyResponse: MessageFns<AddCustomPasswordAgePolicyResponse>;
export declare const UpdateCustomPasswordAgePolicyRequest: MessageFns<UpdateCustomPasswordAgePolicyRequest>;
export declare const UpdateCustomPasswordAgePolicyResponse: MessageFns<UpdateCustomPasswordAgePolicyResponse>;
export declare const ResetPasswordAgePolicyToDefaultRequest: MessageFns<ResetPasswordAgePolicyToDefaultRequest>;
export declare const ResetPasswordAgePolicyToDefaultResponse: MessageFns<ResetPasswordAgePolicyToDefaultResponse>;
export declare const GetLockoutPolicyRequest: MessageFns<GetLockoutPolicyRequest>;
export declare const GetLockoutPolicyResponse: MessageFns<GetLockoutPolicyResponse>;
export declare const GetDefaultLockoutPolicyRequest: MessageFns<GetDefaultLockoutPolicyRequest>;
export declare const GetDefaultLockoutPolicyResponse: MessageFns<GetDefaultLockoutPolicyResponse>;
export declare const AddCustomLockoutPolicyRequest: MessageFns<AddCustomLockoutPolicyRequest>;
export declare const AddCustomLockoutPolicyResponse: MessageFns<AddCustomLockoutPolicyResponse>;
export declare const UpdateCustomLockoutPolicyRequest: MessageFns<UpdateCustomLockoutPolicyRequest>;
export declare const UpdateCustomLockoutPolicyResponse: MessageFns<UpdateCustomLockoutPolicyResponse>;
export declare const ResetLockoutPolicyToDefaultRequest: MessageFns<ResetLockoutPolicyToDefaultRequest>;
export declare const ResetLockoutPolicyToDefaultResponse: MessageFns<ResetLockoutPolicyToDefaultResponse>;
export declare const GetPrivacyPolicyRequest: MessageFns<GetPrivacyPolicyRequest>;
export declare const GetPrivacyPolicyResponse: MessageFns<GetPrivacyPolicyResponse>;
export declare const GetDefaultPrivacyPolicyRequest: MessageFns<GetDefaultPrivacyPolicyRequest>;
export declare const GetDefaultPrivacyPolicyResponse: MessageFns<GetDefaultPrivacyPolicyResponse>;
export declare const AddCustomPrivacyPolicyRequest: MessageFns<AddCustomPrivacyPolicyRequest>;
export declare const AddCustomPrivacyPolicyResponse: MessageFns<AddCustomPrivacyPolicyResponse>;
export declare const UpdateCustomPrivacyPolicyRequest: MessageFns<UpdateCustomPrivacyPolicyRequest>;
export declare const UpdateCustomPrivacyPolicyResponse: MessageFns<UpdateCustomPrivacyPolicyResponse>;
export declare const ResetPrivacyPolicyToDefaultRequest: MessageFns<ResetPrivacyPolicyToDefaultRequest>;
export declare const ResetPrivacyPolicyToDefaultResponse: MessageFns<ResetPrivacyPolicyToDefaultResponse>;
export declare const GetNotificationPolicyRequest: MessageFns<GetNotificationPolicyRequest>;
export declare const GetNotificationPolicyResponse: MessageFns<GetNotificationPolicyResponse>;
export declare const GetDefaultNotificationPolicyRequest: MessageFns<GetDefaultNotificationPolicyRequest>;
export declare const GetDefaultNotificationPolicyResponse: MessageFns<GetDefaultNotificationPolicyResponse>;
export declare const AddCustomNotificationPolicyRequest: MessageFns<AddCustomNotificationPolicyRequest>;
export declare const AddCustomNotificationPolicyResponse: MessageFns<AddCustomNotificationPolicyResponse>;
export declare const UpdateCustomNotificationPolicyRequest: MessageFns<UpdateCustomNotificationPolicyRequest>;
export declare const UpdateCustomNotificationPolicyResponse: MessageFns<UpdateCustomNotificationPolicyResponse>;
export declare const ResetNotificationPolicyToDefaultRequest: MessageFns<ResetNotificationPolicyToDefaultRequest>;
export declare const ResetNotificationPolicyToDefaultResponse: MessageFns<ResetNotificationPolicyToDefaultResponse>;
export declare const GetLabelPolicyRequest: MessageFns<GetLabelPolicyRequest>;
export declare const GetLabelPolicyResponse: MessageFns<GetLabelPolicyResponse>;
export declare const GetPreviewLabelPolicyRequest: MessageFns<GetPreviewLabelPolicyRequest>;
export declare const GetPreviewLabelPolicyResponse: MessageFns<GetPreviewLabelPolicyResponse>;
export declare const GetDefaultLabelPolicyRequest: MessageFns<GetDefaultLabelPolicyRequest>;
export declare const GetDefaultLabelPolicyResponse: MessageFns<GetDefaultLabelPolicyResponse>;
export declare const AddCustomLabelPolicyRequest: MessageFns<AddCustomLabelPolicyRequest>;
export declare const AddCustomLabelPolicyResponse: MessageFns<AddCustomLabelPolicyResponse>;
export declare const UpdateCustomLabelPolicyRequest: MessageFns<UpdateCustomLabelPolicyRequest>;
export declare const UpdateCustomLabelPolicyResponse: MessageFns<UpdateCustomLabelPolicyResponse>;
export declare const ActivateCustomLabelPolicyRequest: MessageFns<ActivateCustomLabelPolicyRequest>;
export declare const ActivateCustomLabelPolicyResponse: MessageFns<ActivateCustomLabelPolicyResponse>;
export declare const RemoveCustomLabelPolicyLogoRequest: MessageFns<RemoveCustomLabelPolicyLogoRequest>;
export declare const RemoveCustomLabelPolicyLogoResponse: MessageFns<RemoveCustomLabelPolicyLogoResponse>;
export declare const RemoveCustomLabelPolicyLogoDarkRequest: MessageFns<RemoveCustomLabelPolicyLogoDarkRequest>;
export declare const RemoveCustomLabelPolicyLogoDarkResponse: MessageFns<RemoveCustomLabelPolicyLogoDarkResponse>;
export declare const RemoveCustomLabelPolicyIconRequest: MessageFns<RemoveCustomLabelPolicyIconRequest>;
export declare const RemoveCustomLabelPolicyIconResponse: MessageFns<RemoveCustomLabelPolicyIconResponse>;
export declare const RemoveCustomLabelPolicyIconDarkRequest: MessageFns<RemoveCustomLabelPolicyIconDarkRequest>;
export declare const RemoveCustomLabelPolicyIconDarkResponse: MessageFns<RemoveCustomLabelPolicyIconDarkResponse>;
export declare const RemoveCustomLabelPolicyFontRequest: MessageFns<RemoveCustomLabelPolicyFontRequest>;
export declare const RemoveCustomLabelPolicyFontResponse: MessageFns<RemoveCustomLabelPolicyFontResponse>;
export declare const ResetLabelPolicyToDefaultRequest: MessageFns<ResetLabelPolicyToDefaultRequest>;
export declare const ResetLabelPolicyToDefaultResponse: MessageFns<ResetLabelPolicyToDefaultResponse>;
export declare const GetCustomInitMessageTextRequest: MessageFns<GetCustomInitMessageTextRequest>;
export declare const GetCustomInitMessageTextResponse: MessageFns<GetCustomInitMessageTextResponse>;
export declare const GetDefaultInitMessageTextRequest: MessageFns<GetDefaultInitMessageTextRequest>;
export declare const GetDefaultInitMessageTextResponse: MessageFns<GetDefaultInitMessageTextResponse>;
export declare const SetCustomInitMessageTextRequest: MessageFns<SetCustomInitMessageTextRequest>;
export declare const SetCustomInitMessageTextResponse: MessageFns<SetCustomInitMessageTextResponse>;
export declare const ResetCustomInitMessageTextToDefaultRequest: MessageFns<ResetCustomInitMessageTextToDefaultRequest>;
export declare const ResetCustomInitMessageTextToDefaultResponse: MessageFns<ResetCustomInitMessageTextToDefaultResponse>;
export declare const GetDefaultLoginTextsRequest: MessageFns<GetDefaultLoginTextsRequest>;
export declare const GetDefaultLoginTextsResponse: MessageFns<GetDefaultLoginTextsResponse>;
export declare const GetCustomLoginTextsRequest: MessageFns<GetCustomLoginTextsRequest>;
export declare const GetCustomLoginTextsResponse: MessageFns<GetCustomLoginTextsResponse>;
export declare const SetCustomLoginTextsRequest: MessageFns<SetCustomLoginTextsRequest>;
export declare const SetCustomLoginTextsResponse: MessageFns<SetCustomLoginTextsResponse>;
export declare const ResetCustomLoginTextsToDefaultRequest: MessageFns<ResetCustomLoginTextsToDefaultRequest>;
export declare const ResetCustomLoginTextsToDefaultResponse: MessageFns<ResetCustomLoginTextsToDefaultResponse>;
export declare const GetCustomPasswordResetMessageTextRequest: MessageFns<GetCustomPasswordResetMessageTextRequest>;
export declare const GetCustomPasswordResetMessageTextResponse: MessageFns<GetCustomPasswordResetMessageTextResponse>;
export declare const GetDefaultPasswordResetMessageTextRequest: MessageFns<GetDefaultPasswordResetMessageTextRequest>;
export declare const GetDefaultPasswordResetMessageTextResponse: MessageFns<GetDefaultPasswordResetMessageTextResponse>;
export declare const SetCustomPasswordResetMessageTextRequest: MessageFns<SetCustomPasswordResetMessageTextRequest>;
export declare const SetCustomPasswordResetMessageTextResponse: MessageFns<SetCustomPasswordResetMessageTextResponse>;
export declare const ResetCustomPasswordResetMessageTextToDefaultRequest: MessageFns<ResetCustomPasswordResetMessageTextToDefaultRequest>;
export declare const ResetCustomPasswordResetMessageTextToDefaultResponse: MessageFns<ResetCustomPasswordResetMessageTextToDefaultResponse>;
export declare const GetCustomVerifyEmailMessageTextRequest: MessageFns<GetCustomVerifyEmailMessageTextRequest>;
export declare const GetCustomVerifyEmailMessageTextResponse: MessageFns<GetCustomVerifyEmailMessageTextResponse>;
export declare const GetDefaultVerifyEmailMessageTextRequest: MessageFns<GetDefaultVerifyEmailMessageTextRequest>;
export declare const GetDefaultVerifyEmailMessageTextResponse: MessageFns<GetDefaultVerifyEmailMessageTextResponse>;
export declare const SetCustomVerifyEmailMessageTextRequest: MessageFns<SetCustomVerifyEmailMessageTextRequest>;
export declare const SetCustomVerifyEmailMessageTextResponse: MessageFns<SetCustomVerifyEmailMessageTextResponse>;
export declare const ResetCustomVerifyEmailMessageTextToDefaultRequest: MessageFns<ResetCustomVerifyEmailMessageTextToDefaultRequest>;
export declare const ResetCustomVerifyEmailMessageTextToDefaultResponse: MessageFns<ResetCustomVerifyEmailMessageTextToDefaultResponse>;
export declare const GetCustomVerifyPhoneMessageTextRequest: MessageFns<GetCustomVerifyPhoneMessageTextRequest>;
export declare const GetCustomVerifyPhoneMessageTextResponse: MessageFns<GetCustomVerifyPhoneMessageTextResponse>;
export declare const GetDefaultVerifyPhoneMessageTextRequest: MessageFns<GetDefaultVerifyPhoneMessageTextRequest>;
export declare const GetDefaultVerifyPhoneMessageTextResponse: MessageFns<GetDefaultVerifyPhoneMessageTextResponse>;
export declare const SetCustomVerifyPhoneMessageTextRequest: MessageFns<SetCustomVerifyPhoneMessageTextRequest>;
export declare const SetCustomVerifyPhoneMessageTextResponse: MessageFns<SetCustomVerifyPhoneMessageTextResponse>;
export declare const ResetCustomVerifyPhoneMessageTextToDefaultRequest: MessageFns<ResetCustomVerifyPhoneMessageTextToDefaultRequest>;
export declare const ResetCustomVerifyPhoneMessageTextToDefaultResponse: MessageFns<ResetCustomVerifyPhoneMessageTextToDefaultResponse>;
export declare const GetCustomVerifySMSOTPMessageTextRequest: MessageFns<GetCustomVerifySMSOTPMessageTextRequest>;
export declare const GetCustomVerifySMSOTPMessageTextResponse: MessageFns<GetCustomVerifySMSOTPMessageTextResponse>;
export declare const GetDefaultVerifySMSOTPMessageTextRequest: MessageFns<GetDefaultVerifySMSOTPMessageTextRequest>;
export declare const GetDefaultVerifySMSOTPMessageTextResponse: MessageFns<GetDefaultVerifySMSOTPMessageTextResponse>;
export declare const SetCustomVerifySMSOTPMessageTextRequest: MessageFns<SetCustomVerifySMSOTPMessageTextRequest>;
export declare const SetCustomVerifySMSOTPMessageTextResponse: MessageFns<SetCustomVerifySMSOTPMessageTextResponse>;
export declare const ResetCustomVerifySMSOTPMessageTextToDefaultRequest: MessageFns<ResetCustomVerifySMSOTPMessageTextToDefaultRequest>;
export declare const ResetCustomVerifySMSOTPMessageTextToDefaultResponse: MessageFns<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>;
export declare const GetCustomVerifyEmailOTPMessageTextRequest: MessageFns<GetCustomVerifyEmailOTPMessageTextRequest>;
export declare const GetCustomVerifyEmailOTPMessageTextResponse: MessageFns<GetCustomVerifyEmailOTPMessageTextResponse>;
export declare const GetDefaultVerifyEmailOTPMessageTextRequest: MessageFns<GetDefaultVerifyEmailOTPMessageTextRequest>;
export declare const GetDefaultVerifyEmailOTPMessageTextResponse: MessageFns<GetDefaultVerifyEmailOTPMessageTextResponse>;
export declare const SetCustomVerifyEmailOTPMessageTextRequest: MessageFns<SetCustomVerifyEmailOTPMessageTextRequest>;
export declare const SetCustomVerifyEmailOTPMessageTextResponse: MessageFns<SetCustomVerifyEmailOTPMessageTextResponse>;
export declare const ResetCustomVerifyEmailOTPMessageTextToDefaultRequest: MessageFns<ResetCustomVerifyEmailOTPMessageTextToDefaultRequest>;
export declare const ResetCustomVerifyEmailOTPMessageTextToDefaultResponse: MessageFns<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>;
export declare const GetCustomDomainClaimedMessageTextRequest: MessageFns<GetCustomDomainClaimedMessageTextRequest>;
export declare const GetCustomDomainClaimedMessageTextResponse: MessageFns<GetCustomDomainClaimedMessageTextResponse>;
export declare const GetDefaultDomainClaimedMessageTextRequest: MessageFns<GetDefaultDomainClaimedMessageTextRequest>;
export declare const GetDefaultDomainClaimedMessageTextResponse: MessageFns<GetDefaultDomainClaimedMessageTextResponse>;
export declare const SetCustomDomainClaimedMessageTextRequest: MessageFns<SetCustomDomainClaimedMessageTextRequest>;
export declare const SetCustomDomainClaimedMessageTextResponse: MessageFns<SetCustomDomainClaimedMessageTextResponse>;
export declare const ResetCustomDomainClaimedMessageTextToDefaultRequest: MessageFns<ResetCustomDomainClaimedMessageTextToDefaultRequest>;
export declare const ResetCustomDomainClaimedMessageTextToDefaultResponse: MessageFns<ResetCustomDomainClaimedMessageTextToDefaultResponse>;
export declare const GetCustomPasswordlessRegistrationMessageTextRequest: MessageFns<GetCustomPasswordlessRegistrationMessageTextRequest>;
export declare const GetCustomPasswordlessRegistrationMessageTextResponse: MessageFns<GetCustomPasswordlessRegistrationMessageTextResponse>;
export declare const GetDefaultPasswordlessRegistrationMessageTextRequest: MessageFns<GetDefaultPasswordlessRegistrationMessageTextRequest>;
export declare const GetDefaultPasswordlessRegistrationMessageTextResponse: MessageFns<GetDefaultPasswordlessRegistrationMessageTextResponse>;
export declare const SetCustomPasswordlessRegistrationMessageTextRequest: MessageFns<SetCustomPasswordlessRegistrationMessageTextRequest>;
export declare const SetCustomPasswordlessRegistrationMessageTextResponse: MessageFns<SetCustomPasswordlessRegistrationMessageTextResponse>;
export declare const ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest: MessageFns<ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest>;
export declare const ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse: MessageFns<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>;
export declare const GetCustomPasswordChangeMessageTextRequest: MessageFns<GetCustomPasswordChangeMessageTextRequest>;
export declare const GetCustomPasswordChangeMessageTextResponse: MessageFns<GetCustomPasswordChangeMessageTextResponse>;
export declare const GetDefaultPasswordChangeMessageTextRequest: MessageFns<GetDefaultPasswordChangeMessageTextRequest>;
export declare const GetDefaultPasswordChangeMessageTextResponse: MessageFns<GetDefaultPasswordChangeMessageTextResponse>;
export declare const SetCustomPasswordChangeMessageTextRequest: MessageFns<SetCustomPasswordChangeMessageTextRequest>;
export declare const SetCustomPasswordChangeMessageTextResponse: MessageFns<SetCustomPasswordChangeMessageTextResponse>;
export declare const ResetCustomPasswordChangeMessageTextToDefaultRequest: MessageFns<ResetCustomPasswordChangeMessageTextToDefaultRequest>;
export declare const ResetCustomPasswordChangeMessageTextToDefaultResponse: MessageFns<ResetCustomPasswordChangeMessageTextToDefaultResponse>;
export declare const GetCustomInviteUserMessageTextRequest: MessageFns<GetCustomInviteUserMessageTextRequest>;
export declare const GetCustomInviteUserMessageTextResponse: MessageFns<GetCustomInviteUserMessageTextResponse>;
export declare const GetDefaultInviteUserMessageTextRequest: MessageFns<GetDefaultInviteUserMessageTextRequest>;
export declare const GetDefaultInviteUserMessageTextResponse: MessageFns<GetDefaultInviteUserMessageTextResponse>;
export declare const SetCustomInviteUserMessageTextRequest: MessageFns<SetCustomInviteUserMessageTextRequest>;
export declare const SetCustomInviteUserMessageTextResponse: MessageFns<SetCustomInviteUserMessageTextResponse>;
export declare const ResetCustomInviteUserMessageTextToDefaultRequest: MessageFns<ResetCustomInviteUserMessageTextToDefaultRequest>;
export declare const ResetCustomInviteUserMessageTextToDefaultResponse: MessageFns<ResetCustomInviteUserMessageTextToDefaultResponse>;
export declare const GetOrgIDPByIDRequest: MessageFns<GetOrgIDPByIDRequest>;
export declare const GetOrgIDPByIDResponse: MessageFns<GetOrgIDPByIDResponse>;
export declare const ListOrgIDPsRequest: MessageFns<ListOrgIDPsRequest>;
export declare const IDPQuery: MessageFns<IDPQuery>;
export declare const ListOrgIDPsResponse: MessageFns<ListOrgIDPsResponse>;
export declare const AddOrgOIDCIDPRequest: MessageFns<AddOrgOIDCIDPRequest>;
export declare const AddOrgOIDCIDPResponse: MessageFns<AddOrgOIDCIDPResponse>;
export declare const AddOrgJWTIDPRequest: MessageFns<AddOrgJWTIDPRequest>;
export declare const AddOrgJWTIDPResponse: MessageFns<AddOrgJWTIDPResponse>;
export declare const DeactivateOrgIDPRequest: MessageFns<DeactivateOrgIDPRequest>;
export declare const DeactivateOrgIDPResponse: MessageFns<DeactivateOrgIDPResponse>;
export declare const ReactivateOrgIDPRequest: MessageFns<ReactivateOrgIDPRequest>;
export declare const ReactivateOrgIDPResponse: MessageFns<ReactivateOrgIDPResponse>;
export declare const RemoveOrgIDPRequest: MessageFns<RemoveOrgIDPRequest>;
export declare const RemoveOrgIDPResponse: MessageFns<RemoveOrgIDPResponse>;
export declare const UpdateOrgIDPRequest: MessageFns<UpdateOrgIDPRequest>;
export declare const UpdateOrgIDPResponse: MessageFns<UpdateOrgIDPResponse>;
export declare const UpdateOrgIDPOIDCConfigRequest: MessageFns<UpdateOrgIDPOIDCConfigRequest>;
export declare const UpdateOrgIDPOIDCConfigResponse: MessageFns<UpdateOrgIDPOIDCConfigResponse>;
export declare const UpdateOrgIDPJWTConfigRequest: MessageFns<UpdateOrgIDPJWTConfigRequest>;
export declare const UpdateOrgIDPJWTConfigResponse: MessageFns<UpdateOrgIDPJWTConfigResponse>;
export declare const ListProvidersRequest: MessageFns<ListProvidersRequest>;
export declare const ProviderQuery: MessageFns<ProviderQuery>;
export declare const ListProvidersResponse: MessageFns<ListProvidersResponse>;
export declare const GetProviderByIDRequest: MessageFns<GetProviderByIDRequest>;
export declare const GetProviderByIDResponse: MessageFns<GetProviderByIDResponse>;
export declare const AddGenericOAuthProviderRequest: MessageFns<AddGenericOAuthProviderRequest>;
export declare const AddGenericOAuthProviderResponse: MessageFns<AddGenericOAuthProviderResponse>;
export declare const UpdateGenericOAuthProviderRequest: MessageFns<UpdateGenericOAuthProviderRequest>;
export declare const UpdateGenericOAuthProviderResponse: MessageFns<UpdateGenericOAuthProviderResponse>;
export declare const AddGenericOIDCProviderRequest: MessageFns<AddGenericOIDCProviderRequest>;
export declare const AddGenericOIDCProviderResponse: MessageFns<AddGenericOIDCProviderResponse>;
export declare const UpdateGenericOIDCProviderRequest: MessageFns<UpdateGenericOIDCProviderRequest>;
export declare const UpdateGenericOIDCProviderResponse: MessageFns<UpdateGenericOIDCProviderResponse>;
export declare const MigrateGenericOIDCProviderRequest: MessageFns<MigrateGenericOIDCProviderRequest>;
export declare const MigrateGenericOIDCProviderResponse: MessageFns<MigrateGenericOIDCProviderResponse>;
export declare const AddJWTProviderRequest: MessageFns<AddJWTProviderRequest>;
export declare const AddJWTProviderResponse: MessageFns<AddJWTProviderResponse>;
export declare const UpdateJWTProviderRequest: MessageFns<UpdateJWTProviderRequest>;
export declare const UpdateJWTProviderResponse: MessageFns<UpdateJWTProviderResponse>;
export declare const AddAzureADProviderRequest: MessageFns<AddAzureADProviderRequest>;
export declare const AddAzureADProviderResponse: MessageFns<AddAzureADProviderResponse>;
export declare const UpdateAzureADProviderRequest: MessageFns<UpdateAzureADProviderRequest>;
export declare const UpdateAzureADProviderResponse: MessageFns<UpdateAzureADProviderResponse>;
export declare const AddGitHubProviderRequest: MessageFns<AddGitHubProviderRequest>;
export declare const AddGitHubProviderResponse: MessageFns<AddGitHubProviderResponse>;
export declare const UpdateGitHubProviderRequest: MessageFns<UpdateGitHubProviderRequest>;
export declare const UpdateGitHubProviderResponse: MessageFns<UpdateGitHubProviderResponse>;
export declare const AddGitHubEnterpriseServerProviderRequest: MessageFns<AddGitHubEnterpriseServerProviderRequest>;
export declare const AddGitHubEnterpriseServerProviderResponse: MessageFns<AddGitHubEnterpriseServerProviderResponse>;
export declare const UpdateGitHubEnterpriseServerProviderRequest: MessageFns<UpdateGitHubEnterpriseServerProviderRequest>;
export declare const UpdateGitHubEnterpriseServerProviderResponse: MessageFns<UpdateGitHubEnterpriseServerProviderResponse>;
export declare const AddGitLabProviderRequest: MessageFns<AddGitLabProviderRequest>;
export declare const AddGitLabProviderResponse: MessageFns<AddGitLabProviderResponse>;
export declare const UpdateGitLabProviderRequest: MessageFns<UpdateGitLabProviderRequest>;
export declare const UpdateGitLabProviderResponse: MessageFns<UpdateGitLabProviderResponse>;
export declare const AddGitLabSelfHostedProviderRequest: MessageFns<AddGitLabSelfHostedProviderRequest>;
export declare const AddGitLabSelfHostedProviderResponse: MessageFns<AddGitLabSelfHostedProviderResponse>;
export declare const UpdateGitLabSelfHostedProviderRequest: MessageFns<UpdateGitLabSelfHostedProviderRequest>;
export declare const UpdateGitLabSelfHostedProviderResponse: MessageFns<UpdateGitLabSelfHostedProviderResponse>;
export declare const AddGoogleProviderRequest: MessageFns<AddGoogleProviderRequest>;
export declare const AddGoogleProviderResponse: MessageFns<AddGoogleProviderResponse>;
export declare const UpdateGoogleProviderRequest: MessageFns<UpdateGoogleProviderRequest>;
export declare const UpdateGoogleProviderResponse: MessageFns<UpdateGoogleProviderResponse>;
export declare const AddLDAPProviderRequest: MessageFns<AddLDAPProviderRequest>;
export declare const AddLDAPProviderResponse: MessageFns<AddLDAPProviderResponse>;
export declare const UpdateLDAPProviderRequest: MessageFns<UpdateLDAPProviderRequest>;
export declare const UpdateLDAPProviderResponse: MessageFns<UpdateLDAPProviderResponse>;
export declare const AddSAMLProviderRequest: MessageFns<AddSAMLProviderRequest>;
export declare const AddSAMLProviderResponse: MessageFns<AddSAMLProviderResponse>;
export declare const UpdateSAMLProviderRequest: MessageFns<UpdateSAMLProviderRequest>;
export declare const UpdateSAMLProviderResponse: MessageFns<UpdateSAMLProviderResponse>;
export declare const RegenerateSAMLProviderCertificateRequest: MessageFns<RegenerateSAMLProviderCertificateRequest>;
export declare const RegenerateSAMLProviderCertificateResponse: MessageFns<RegenerateSAMLProviderCertificateResponse>;
export declare const AddAppleProviderRequest: MessageFns<AddAppleProviderRequest>;
export declare const AddAppleProviderResponse: MessageFns<AddAppleProviderResponse>;
export declare const UpdateAppleProviderRequest: MessageFns<UpdateAppleProviderRequest>;
export declare const UpdateAppleProviderResponse: MessageFns<UpdateAppleProviderResponse>;
export declare const DeleteProviderRequest: MessageFns<DeleteProviderRequest>;
export declare const DeleteProviderResponse: MessageFns<DeleteProviderResponse>;
export declare const ListActionsRequest: MessageFns<ListActionsRequest>;
export declare const ActionQuery: MessageFns<ActionQuery>;
export declare const ListActionsResponse: MessageFns<ListActionsResponse>;
export declare const CreateActionRequest: MessageFns<CreateActionRequest>;
export declare const CreateActionResponse: MessageFns<CreateActionResponse>;
export declare const GetActionRequest: MessageFns<GetActionRequest>;
export declare const GetActionResponse: MessageFns<GetActionResponse>;
export declare const UpdateActionRequest: MessageFns<UpdateActionRequest>;
export declare const UpdateActionResponse: MessageFns<UpdateActionResponse>;
export declare const DeleteActionRequest: MessageFns<DeleteActionRequest>;
export declare const DeleteActionResponse: MessageFns<DeleteActionResponse>;
export declare const ListFlowTypesRequest: MessageFns<ListFlowTypesRequest>;
export declare const ListFlowTypesResponse: MessageFns<ListFlowTypesResponse>;
export declare const ListFlowTriggerTypesRequest: MessageFns<ListFlowTriggerTypesRequest>;
export declare const ListFlowTriggerTypesResponse: MessageFns<ListFlowTriggerTypesResponse>;
export declare const DeactivateActionRequest: MessageFns<DeactivateActionRequest>;
export declare const DeactivateActionResponse: MessageFns<DeactivateActionResponse>;
export declare const ReactivateActionRequest: MessageFns<ReactivateActionRequest>;
export declare const ReactivateActionResponse: MessageFns<ReactivateActionResponse>;
export declare const GetFlowRequest: MessageFns<GetFlowRequest>;
export declare const GetFlowResponse: MessageFns<GetFlowResponse>;
export declare const ClearFlowRequest: MessageFns<ClearFlowRequest>;
export declare const ClearFlowResponse: MessageFns<ClearFlowResponse>;
export declare const SetTriggerActionsRequest: MessageFns<SetTriggerActionsRequest>;
export declare const SetTriggerActionsResponse: MessageFns<SetTriggerActionsResponse>;
export type ManagementServiceDefinition = typeof ManagementServiceDefinition;
export declare const ManagementServiceDefinition: {
    readonly name: "ManagementService";
    readonly fullName: "zitadel.management.v1.ManagementService";
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
        readonly getOIDCInformation: {
            readonly name: "GetOIDCInformation";
            readonly requestType: MessageFns<GetOIDCInformationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetOIDCInformationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getIAM: {
            readonly name: "GetIAM";
            readonly requestType: MessageFns<GetIAMRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetIAMResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
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
        readonly getUserByID: {
            readonly name: "GetUserByID";
            readonly requestType: MessageFns<GetUserByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetUserByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getUserByLoginNameGlobal: {
            readonly name: "GetUserByLoginNameGlobal";
            readonly requestType: MessageFns<GetUserByLoginNameGlobalRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetUserByLoginNameGlobalResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
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
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listUserChanges: {
            readonly name: "ListUserChanges";
            readonly requestType: MessageFns<ListUserChangesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListUserChangesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly isUserUnique: {
            readonly name: "IsUserUnique";
            readonly requestType: MessageFns<IsUserUniqueRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<IsUserUniqueResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addHumanUser: {
            readonly name: "AddHumanUser";
            readonly requestType: MessageFns<AddHumanUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddHumanUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly importHumanUser: {
            readonly name: "ImportHumanUser";
            readonly requestType: MessageFns<ImportHumanUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ImportHumanUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMachineUser: {
            readonly name: "AddMachineUser";
            readonly requestType: MessageFns<AddMachineUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddMachineUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
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
                    readonly 400002: readonly [Buffer];
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
                    readonly 400002: readonly [Buffer];
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
                    readonly 400002: readonly [Buffer];
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
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeUser: {
            readonly name: "RemoveUser";
            readonly requestType: MessageFns<RemoveUserRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveUserResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateUserName: {
            readonly name: "UpdateUserName";
            readonly requestType: MessageFns<UpdateUserNameRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateUserNameResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setUserMetadata: {
            readonly name: "SetUserMetadata";
            readonly requestType: MessageFns<SetUserMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetUserMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkSetUserMetadata: {
            readonly name: "BulkSetUserMetadata";
            readonly requestType: MessageFns<BulkSetUserMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<BulkSetUserMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listUserMetadata: {
            readonly name: "ListUserMetadata";
            readonly requestType: MessageFns<ListUserMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListUserMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getUserMetadata: {
            readonly name: "GetUserMetadata";
            readonly requestType: MessageFns<GetUserMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetUserMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeUserMetadata: {
            readonly name: "RemoveUserMetadata";
            readonly requestType: MessageFns<RemoveUserMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveUserMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkRemoveUserMetadata: {
            readonly name: "BulkRemoveUserMetadata";
            readonly requestType: MessageFns<BulkRemoveUserMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<BulkRemoveUserMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getHumanProfile: {
            readonly name: "GetHumanProfile";
            readonly requestType: MessageFns<GetHumanProfileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetHumanProfileResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateHumanProfile: {
            readonly name: "UpdateHumanProfile";
            readonly requestType: MessageFns<UpdateHumanProfileRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateHumanProfileResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getHumanEmail: {
            readonly name: "GetHumanEmail";
            readonly requestType: MessageFns<GetHumanEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetHumanEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateHumanEmail: {
            readonly name: "UpdateHumanEmail";
            readonly requestType: MessageFns<UpdateHumanEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateHumanEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendHumanInitialization: {
            readonly name: "ResendHumanInitialization";
            readonly requestType: MessageFns<ResendHumanInitializationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendHumanInitializationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendHumanEmailVerification: {
            readonly name: "ResendHumanEmailVerification";
            readonly requestType: MessageFns<ResendHumanEmailVerificationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendHumanEmailVerificationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getHumanPhone: {
            readonly name: "GetHumanPhone";
            readonly requestType: MessageFns<GetHumanPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetHumanPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateHumanPhone: {
            readonly name: "UpdateHumanPhone";
            readonly requestType: MessageFns<UpdateHumanPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateHumanPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanPhone: {
            readonly name: "RemoveHumanPhone";
            readonly requestType: MessageFns<RemoveHumanPhoneRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveHumanPhoneResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resendHumanPhoneVerification: {
            readonly name: "ResendHumanPhoneVerification";
            readonly requestType: MessageFns<ResendHumanPhoneVerificationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResendHumanPhoneVerificationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanAvatar: {
            readonly name: "RemoveHumanAvatar";
            readonly requestType: MessageFns<RemoveHumanAvatarRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveHumanAvatarResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setHumanInitialPassword: {
            readonly name: "SetHumanInitialPassword";
            readonly requestType: MessageFns<SetHumanInitialPasswordRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetHumanInitialPasswordResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setHumanPassword: {
            readonly name: "SetHumanPassword";
            readonly requestType: MessageFns<SetHumanPasswordRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetHumanPasswordResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly sendHumanResetPasswordNotification: {
            readonly name: "SendHumanResetPasswordNotification";
            readonly requestType: MessageFns<SendHumanResetPasswordNotificationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SendHumanResetPasswordNotificationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listHumanAuthFactors: {
            readonly name: "ListHumanAuthFactors";
            readonly requestType: MessageFns<ListHumanAuthFactorsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListHumanAuthFactorsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanAuthFactorOTP: {
            readonly name: "RemoveHumanAuthFactorOTP";
            readonly requestType: MessageFns<RemoveHumanAuthFactorOTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveHumanAuthFactorOTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanAuthFactorU2F: {
            readonly name: "RemoveHumanAuthFactorU2F";
            readonly requestType: MessageFns<RemoveHumanAuthFactorU2FRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveHumanAuthFactorU2FResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanAuthFactorOTPSMS: {
            readonly name: "RemoveHumanAuthFactorOTPSMS";
            readonly requestType: MessageFns<RemoveHumanAuthFactorOTPSMSRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveHumanAuthFactorOTPSMSResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanAuthFactorOTPEmail: {
            readonly name: "RemoveHumanAuthFactorOTPEmail";
            readonly requestType: MessageFns<RemoveHumanAuthFactorOTPEmailRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveHumanAuthFactorOTPEmailResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listHumanPasswordless: {
            readonly name: "ListHumanPasswordless";
            readonly requestType: MessageFns<ListHumanPasswordlessRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListHumanPasswordlessResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addPasswordlessRegistration: {
            readonly name: "AddPasswordlessRegistration";
            readonly requestType: MessageFns<AddPasswordlessRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddPasswordlessRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly sendPasswordlessRegistration: {
            readonly name: "SendPasswordlessRegistration";
            readonly requestType: MessageFns<SendPasswordlessRegistrationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SendPasswordlessRegistrationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanPasswordless: {
            readonly name: "RemoveHumanPasswordless";
            readonly requestType: MessageFns<RemoveHumanPasswordlessRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveHumanPasswordlessResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateMachine: {
            readonly name: "UpdateMachine";
            readonly requestType: MessageFns<UpdateMachineRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateMachineResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly generateMachineSecret: {
            readonly name: "GenerateMachineSecret";
            readonly requestType: MessageFns<GenerateMachineSecretRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GenerateMachineSecretResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMachineSecret: {
            readonly name: "RemoveMachineSecret";
            readonly requestType: MessageFns<RemoveMachineSecretRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMachineSecretResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMachineKeyByIDs: {
            readonly name: "GetMachineKeyByIDs";
            readonly requestType: MessageFns<GetMachineKeyByIDsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMachineKeyByIDsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMachineKeys: {
            readonly name: "ListMachineKeys";
            readonly requestType: MessageFns<ListMachineKeysRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMachineKeysResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMachineKey: {
            readonly name: "AddMachineKey";
            readonly requestType: MessageFns<AddMachineKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddMachineKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMachineKey: {
            readonly name: "RemoveMachineKey";
            readonly requestType: MessageFns<RemoveMachineKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMachineKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPersonalAccessTokenByIDs: {
            readonly name: "GetPersonalAccessTokenByIDs";
            readonly requestType: MessageFns<GetPersonalAccessTokenByIDsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetPersonalAccessTokenByIDsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listPersonalAccessTokens: {
            readonly name: "ListPersonalAccessTokens";
            readonly requestType: MessageFns<ListPersonalAccessTokensRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListPersonalAccessTokensResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addPersonalAccessToken: {
            readonly name: "AddPersonalAccessToken";
            readonly requestType: MessageFns<AddPersonalAccessTokenRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddPersonalAccessTokenResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removePersonalAccessToken: {
            readonly name: "RemovePersonalAccessToken";
            readonly requestType: MessageFns<RemovePersonalAccessTokenRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemovePersonalAccessTokenResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listHumanLinkedIDPs: {
            readonly name: "ListHumanLinkedIDPs";
            readonly requestType: MessageFns<ListHumanLinkedIDPsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListHumanLinkedIDPsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeHumanLinkedIDP: {
            readonly name: "RemoveHumanLinkedIDP";
            readonly requestType: MessageFns<RemoveHumanLinkedIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveHumanLinkedIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listUserMemberships: {
            readonly name: "ListUserMemberships";
            readonly requestType: MessageFns<ListUserMembershipsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListUserMembershipsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyOrg: {
            readonly name: "GetMyOrg";
            readonly requestType: MessageFns<GetMyOrgRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMyOrgResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOrgByDomainGlobal: {
            readonly name: "GetOrgByDomainGlobal";
            readonly requestType: MessageFns<GetOrgByDomainGlobalRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetOrgByDomainGlobalResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgChanges: {
            readonly name: "ListOrgChanges";
            readonly requestType: MessageFns<ListOrgChangesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrgChangesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOrg: {
            readonly name: "AddOrg";
            readonly requestType: MessageFns<AddOrgRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOrgResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOrg: {
            readonly name: "UpdateOrg";
            readonly requestType: MessageFns<UpdateOrgRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateOrgResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateOrg: {
            readonly name: "DeactivateOrg";
            readonly requestType: MessageFns<DeactivateOrgRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateOrgResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateOrg: {
            readonly name: "ReactivateOrg";
            readonly requestType: MessageFns<ReactivateOrgRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateOrgResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOrg: {
            readonly name: "RemoveOrg";
            readonly requestType: MessageFns<RemoveOrgRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOrgResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setOrgMetadata: {
            readonly name: "SetOrgMetadata";
            readonly requestType: MessageFns<SetOrgMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetOrgMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkSetOrgMetadata: {
            readonly name: "BulkSetOrgMetadata";
            readonly requestType: MessageFns<BulkSetOrgMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<BulkSetOrgMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgMetadata: {
            readonly name: "ListOrgMetadata";
            readonly requestType: MessageFns<ListOrgMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrgMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOrgMetadata: {
            readonly name: "GetOrgMetadata";
            readonly requestType: MessageFns<GetOrgMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetOrgMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOrgMetadata: {
            readonly name: "RemoveOrgMetadata";
            readonly requestType: MessageFns<RemoveOrgMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOrgMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkRemoveOrgMetadata: {
            readonly name: "BulkRemoveOrgMetadata";
            readonly requestType: MessageFns<BulkRemoveOrgMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<BulkRemoveOrgMetadataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgDomains: {
            readonly name: "ListOrgDomains";
            readonly requestType: MessageFns<ListOrgDomainsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrgDomainsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOrgDomain: {
            readonly name: "AddOrgDomain";
            readonly requestType: MessageFns<AddOrgDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOrgDomainResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOrgDomain: {
            readonly name: "RemoveOrgDomain";
            readonly requestType: MessageFns<RemoveOrgDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOrgDomainResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly generateOrgDomainValidation: {
            readonly name: "GenerateOrgDomainValidation";
            readonly requestType: MessageFns<GenerateOrgDomainValidationRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GenerateOrgDomainValidationResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly validateOrgDomain: {
            readonly name: "ValidateOrgDomain";
            readonly requestType: MessageFns<ValidateOrgDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ValidateOrgDomainResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setPrimaryOrgDomain: {
            readonly name: "SetPrimaryOrgDomain";
            readonly requestType: MessageFns<SetPrimaryOrgDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetPrimaryOrgDomainResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgMemberRoles: {
            readonly name: "ListOrgMemberRoles";
            readonly requestType: MessageFns<ListOrgMemberRolesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrgMemberRolesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgMembers: {
            readonly name: "ListOrgMembers";
            readonly requestType: MessageFns<ListOrgMembersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrgMembersResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOrgMember: {
            readonly name: "AddOrgMember";
            readonly requestType: MessageFns<AddOrgMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOrgMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOrgMember: {
            readonly name: "UpdateOrgMember";
            readonly requestType: MessageFns<UpdateOrgMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateOrgMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOrgMember: {
            readonly name: "RemoveOrgMember";
            readonly requestType: MessageFns<RemoveOrgMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOrgMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getProjectByID: {
            readonly name: "GetProjectByID";
            readonly requestType: MessageFns<GetProjectByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetProjectByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getGrantedProjectByID: {
            readonly name: "GetGrantedProjectByID";
            readonly requestType: MessageFns<GetGrantedProjectByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetGrantedProjectByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjects: {
            readonly name: "ListProjects";
            readonly requestType: MessageFns<ListProjectsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listGrantedProjects: {
            readonly name: "ListGrantedProjects";
            readonly requestType: MessageFns<ListGrantedProjectsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListGrantedProjectsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listGrantedProjectRoles: {
            readonly name: "ListGrantedProjectRoles";
            readonly requestType: MessageFns<ListGrantedProjectRolesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListGrantedProjectRolesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectChanges: {
            readonly name: "ListProjectChanges";
            readonly requestType: MessageFns<ListProjectChangesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectChangesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addProject: {
            readonly name: "AddProject";
            readonly requestType: MessageFns<AddProjectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddProjectResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateProject: {
            readonly name: "UpdateProject";
            readonly requestType: MessageFns<UpdateProjectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateProjectResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateProject: {
            readonly name: "DeactivateProject";
            readonly requestType: MessageFns<DeactivateProjectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateProjectResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateProject: {
            readonly name: "ReactivateProject";
            readonly requestType: MessageFns<ReactivateProjectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateProjectResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeProject: {
            readonly name: "RemoveProject";
            readonly requestType: MessageFns<RemoveProjectRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveProjectResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectRoles: {
            readonly name: "ListProjectRoles";
            readonly requestType: MessageFns<ListProjectRolesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectRolesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addProjectRole: {
            readonly name: "AddProjectRole";
            readonly requestType: MessageFns<AddProjectRoleRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddProjectRoleResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkAddProjectRoles: {
            readonly name: "BulkAddProjectRoles";
            readonly requestType: MessageFns<BulkAddProjectRolesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<BulkAddProjectRolesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateProjectRole: {
            readonly name: "UpdateProjectRole";
            readonly requestType: MessageFns<UpdateProjectRoleRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateProjectRoleResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeProjectRole: {
            readonly name: "RemoveProjectRole";
            readonly requestType: MessageFns<RemoveProjectRoleRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveProjectRoleResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectMemberRoles: {
            readonly name: "ListProjectMemberRoles";
            readonly requestType: MessageFns<ListProjectMemberRolesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectMemberRolesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectMembers: {
            readonly name: "ListProjectMembers";
            readonly requestType: MessageFns<ListProjectMembersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectMembersResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addProjectMember: {
            readonly name: "AddProjectMember";
            readonly requestType: MessageFns<AddProjectMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddProjectMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateProjectMember: {
            readonly name: "UpdateProjectMember";
            readonly requestType: MessageFns<UpdateProjectMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateProjectMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeProjectMember: {
            readonly name: "RemoveProjectMember";
            readonly requestType: MessageFns<RemoveProjectMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveProjectMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getAppByID: {
            readonly name: "GetAppByID";
            readonly requestType: MessageFns<GetAppByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetAppByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listApps: {
            readonly name: "ListApps";
            readonly requestType: MessageFns<ListAppsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListAppsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listAppChanges: {
            readonly name: "ListAppChanges";
            readonly requestType: MessageFns<ListAppChangesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListAppChangesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOIDCApp: {
            readonly name: "AddOIDCApp";
            readonly requestType: MessageFns<AddOIDCAppRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOIDCAppResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addSAMLApp: {
            readonly name: "AddSAMLApp";
            readonly requestType: MessageFns<AddSAMLAppRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddSAMLAppResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addAPIApp: {
            readonly name: "AddAPIApp";
            readonly requestType: MessageFns<AddAPIAppRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddAPIAppResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateApp: {
            readonly name: "UpdateApp";
            readonly requestType: MessageFns<UpdateAppRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateAppResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOIDCAppConfig: {
            readonly name: "UpdateOIDCAppConfig";
            readonly requestType: MessageFns<UpdateOIDCAppConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateOIDCAppConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSAMLAppConfig: {
            readonly name: "UpdateSAMLAppConfig";
            readonly requestType: MessageFns<UpdateSAMLAppConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateSAMLAppConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateAPIAppConfig: {
            readonly name: "UpdateAPIAppConfig";
            readonly requestType: MessageFns<UpdateAPIAppConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateAPIAppConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateApp: {
            readonly name: "DeactivateApp";
            readonly requestType: MessageFns<DeactivateAppRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateAppResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateApp: {
            readonly name: "ReactivateApp";
            readonly requestType: MessageFns<ReactivateAppRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateAppResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeApp: {
            readonly name: "RemoveApp";
            readonly requestType: MessageFns<RemoveAppRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveAppResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly regenerateOIDCClientSecret: {
            readonly name: "RegenerateOIDCClientSecret";
            readonly requestType: MessageFns<RegenerateOIDCClientSecretRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RegenerateOIDCClientSecretResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly regenerateAPIClientSecret: {
            readonly name: "RegenerateAPIClientSecret";
            readonly requestType: MessageFns<RegenerateAPIClientSecretRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RegenerateAPIClientSecretResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getAppKey: {
            readonly name: "GetAppKey";
            readonly requestType: MessageFns<GetAppKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetAppKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listAppKeys: {
            readonly name: "ListAppKeys";
            readonly requestType: MessageFns<ListAppKeysRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListAppKeysResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addAppKey: {
            readonly name: "AddAppKey";
            readonly requestType: MessageFns<AddAppKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddAppKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeAppKey: {
            readonly name: "RemoveAppKey";
            readonly requestType: MessageFns<RemoveAppKeyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveAppKeyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectGrantChanges: {
            readonly name: "ListProjectGrantChanges";
            readonly requestType: MessageFns<ListProjectGrantChangesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectGrantChangesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getProjectGrantByID: {
            readonly name: "GetProjectGrantByID";
            readonly requestType: MessageFns<GetProjectGrantByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetProjectGrantByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectGrants: {
            readonly name: "ListProjectGrants";
            readonly requestType: MessageFns<ListProjectGrantsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectGrantsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listAllProjectGrants: {
            readonly name: "ListAllProjectGrants";
            readonly requestType: MessageFns<ListAllProjectGrantsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListAllProjectGrantsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addProjectGrant: {
            readonly name: "AddProjectGrant";
            readonly requestType: MessageFns<AddProjectGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddProjectGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateProjectGrant: {
            readonly name: "UpdateProjectGrant";
            readonly requestType: MessageFns<UpdateProjectGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateProjectGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateProjectGrant: {
            readonly name: "DeactivateProjectGrant";
            readonly requestType: MessageFns<DeactivateProjectGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateProjectGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateProjectGrant: {
            readonly name: "ReactivateProjectGrant";
            readonly requestType: MessageFns<ReactivateProjectGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateProjectGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeProjectGrant: {
            readonly name: "RemoveProjectGrant";
            readonly requestType: MessageFns<RemoveProjectGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveProjectGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectGrantMemberRoles: {
            readonly name: "ListProjectGrantMemberRoles";
            readonly requestType: MessageFns<ListProjectGrantMemberRolesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectGrantMemberRolesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProjectGrantMembers: {
            readonly name: "ListProjectGrantMembers";
            readonly requestType: MessageFns<ListProjectGrantMembersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProjectGrantMembersResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addProjectGrantMember: {
            readonly name: "AddProjectGrantMember";
            readonly requestType: MessageFns<AddProjectGrantMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddProjectGrantMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateProjectGrantMember: {
            readonly name: "UpdateProjectGrantMember";
            readonly requestType: MessageFns<UpdateProjectGrantMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateProjectGrantMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeProjectGrantMember: {
            readonly name: "RemoveProjectGrantMember";
            readonly requestType: MessageFns<RemoveProjectGrantMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveProjectGrantMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getUserGrantByID: {
            readonly name: "GetUserGrantByID";
            readonly requestType: MessageFns<GetUserGrantByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetUserGrantByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listUserGrants: {
            readonly name: "ListUserGrants";
            readonly requestType: MessageFns<ListUserGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListUserGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addUserGrant: {
            readonly name: "AddUserGrant";
            readonly requestType: MessageFns<AddUserGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddUserGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateUserGrant: {
            readonly name: "UpdateUserGrant";
            readonly requestType: MessageFns<UpdateUserGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateUserGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateUserGrant: {
            readonly name: "DeactivateUserGrant";
            readonly requestType: MessageFns<DeactivateUserGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateUserGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateUserGrant: {
            readonly name: "ReactivateUserGrant";
            readonly requestType: MessageFns<ReactivateUserGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateUserGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeUserGrant: {
            readonly name: "RemoveUserGrant";
            readonly requestType: MessageFns<RemoveUserGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveUserGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly bulkRemoveUserGrant: {
            readonly name: "BulkRemoveUserGrant";
            readonly requestType: MessageFns<BulkRemoveUserGrantRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<BulkRemoveUserGrantResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOrgIAMPolicy: {
            readonly name: "GetOrgIAMPolicy";
            readonly requestType: MessageFns<GetOrgIAMPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetOrgIAMPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDomainPolicy: {
            readonly name: "GetDomainPolicy";
            readonly requestType: MessageFns<GetDomainPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDomainPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getLoginPolicy: {
            readonly name: "GetLoginPolicy";
            readonly requestType: MessageFns<GetLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetLoginPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultLoginPolicy: {
            readonly name: "GetDefaultLoginPolicy";
            readonly requestType: MessageFns<GetDefaultLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultLoginPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomLoginPolicy: {
            readonly name: "AddCustomLoginPolicy";
            readonly requestType: MessageFns<AddCustomLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddCustomLoginPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomLoginPolicy: {
            readonly name: "UpdateCustomLoginPolicy";
            readonly requestType: MessageFns<UpdateCustomLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateCustomLoginPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetLoginPolicyToDefault: {
            readonly name: "ResetLoginPolicyToDefault";
            readonly requestType: MessageFns<ResetLoginPolicyToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetLoginPolicyToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listLoginPolicyIDPs: {
            readonly name: "ListLoginPolicyIDPs";
            readonly requestType: MessageFns<ListLoginPolicyIDPsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListLoginPolicyIDPsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addIDPToLoginPolicy: {
            readonly name: "AddIDPToLoginPolicy";
            readonly requestType: MessageFns<AddIDPToLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddIDPToLoginPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeIDPFromLoginPolicy: {
            readonly name: "RemoveIDPFromLoginPolicy";
            readonly requestType: MessageFns<RemoveIDPFromLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveIDPFromLoginPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listLoginPolicySecondFactors: {
            readonly name: "ListLoginPolicySecondFactors";
            readonly requestType: MessageFns<ListLoginPolicySecondFactorsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListLoginPolicySecondFactorsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addSecondFactorToLoginPolicy: {
            readonly name: "AddSecondFactorToLoginPolicy";
            readonly requestType: MessageFns<AddSecondFactorToLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddSecondFactorToLoginPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeSecondFactorFromLoginPolicy: {
            readonly name: "RemoveSecondFactorFromLoginPolicy";
            readonly requestType: MessageFns<RemoveSecondFactorFromLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveSecondFactorFromLoginPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listLoginPolicyMultiFactors: {
            readonly name: "ListLoginPolicyMultiFactors";
            readonly requestType: MessageFns<ListLoginPolicyMultiFactorsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListLoginPolicyMultiFactorsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addMultiFactorToLoginPolicy: {
            readonly name: "AddMultiFactorToLoginPolicy";
            readonly requestType: MessageFns<AddMultiFactorToLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddMultiFactorToLoginPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeMultiFactorFromLoginPolicy: {
            readonly name: "RemoveMultiFactorFromLoginPolicy";
            readonly requestType: MessageFns<RemoveMultiFactorFromLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveMultiFactorFromLoginPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPasswordComplexityPolicy: {
            readonly name: "GetPasswordComplexityPolicy";
            readonly requestType: MessageFns<GetPasswordComplexityPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetPasswordComplexityPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultPasswordComplexityPolicy: {
            readonly name: "GetDefaultPasswordComplexityPolicy";
            readonly requestType: MessageFns<GetDefaultPasswordComplexityPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultPasswordComplexityPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomPasswordComplexityPolicy: {
            readonly name: "AddCustomPasswordComplexityPolicy";
            readonly requestType: MessageFns<AddCustomPasswordComplexityPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddCustomPasswordComplexityPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomPasswordComplexityPolicy: {
            readonly name: "UpdateCustomPasswordComplexityPolicy";
            readonly requestType: MessageFns<UpdateCustomPasswordComplexityPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateCustomPasswordComplexityPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetPasswordComplexityPolicyToDefault: {
            readonly name: "ResetPasswordComplexityPolicyToDefault";
            readonly requestType: MessageFns<ResetPasswordComplexityPolicyToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetPasswordComplexityPolicyToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPasswordAgePolicy: {
            readonly name: "GetPasswordAgePolicy";
            readonly requestType: MessageFns<GetPasswordAgePolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetPasswordAgePolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultPasswordAgePolicy: {
            readonly name: "GetDefaultPasswordAgePolicy";
            readonly requestType: MessageFns<GetDefaultPasswordAgePolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultPasswordAgePolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomPasswordAgePolicy: {
            readonly name: "AddCustomPasswordAgePolicy";
            readonly requestType: MessageFns<AddCustomPasswordAgePolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddCustomPasswordAgePolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomPasswordAgePolicy: {
            readonly name: "UpdateCustomPasswordAgePolicy";
            readonly requestType: MessageFns<UpdateCustomPasswordAgePolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateCustomPasswordAgePolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetPasswordAgePolicyToDefault: {
            readonly name: "ResetPasswordAgePolicyToDefault";
            readonly requestType: MessageFns<ResetPasswordAgePolicyToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetPasswordAgePolicyToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getLockoutPolicy: {
            readonly name: "GetLockoutPolicy";
            readonly requestType: MessageFns<GetLockoutPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetLockoutPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultLockoutPolicy: {
            readonly name: "GetDefaultLockoutPolicy";
            readonly requestType: MessageFns<GetDefaultLockoutPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultLockoutPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomLockoutPolicy: {
            readonly name: "AddCustomLockoutPolicy";
            readonly requestType: MessageFns<AddCustomLockoutPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddCustomLockoutPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomLockoutPolicy: {
            readonly name: "UpdateCustomLockoutPolicy";
            readonly requestType: MessageFns<UpdateCustomLockoutPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateCustomLockoutPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetLockoutPolicyToDefault: {
            readonly name: "ResetLockoutPolicyToDefault";
            readonly requestType: MessageFns<ResetLockoutPolicyToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetLockoutPolicyToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPrivacyPolicy: {
            readonly name: "GetPrivacyPolicy";
            readonly requestType: MessageFns<GetPrivacyPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetPrivacyPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultPrivacyPolicy: {
            readonly name: "GetDefaultPrivacyPolicy";
            readonly requestType: MessageFns<GetDefaultPrivacyPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultPrivacyPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomPrivacyPolicy: {
            readonly name: "AddCustomPrivacyPolicy";
            readonly requestType: MessageFns<AddCustomPrivacyPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddCustomPrivacyPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomPrivacyPolicy: {
            readonly name: "UpdateCustomPrivacyPolicy";
            readonly requestType: MessageFns<UpdateCustomPrivacyPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateCustomPrivacyPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetPrivacyPolicyToDefault: {
            readonly name: "ResetPrivacyPolicyToDefault";
            readonly requestType: MessageFns<ResetPrivacyPolicyToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetPrivacyPolicyToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getNotificationPolicy: {
            readonly name: "GetNotificationPolicy";
            readonly requestType: MessageFns<GetNotificationPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetNotificationPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultNotificationPolicy: {
            readonly name: "GetDefaultNotificationPolicy";
            readonly requestType: MessageFns<GetDefaultNotificationPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultNotificationPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomNotificationPolicy: {
            readonly name: "AddCustomNotificationPolicy";
            readonly requestType: MessageFns<AddCustomNotificationPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddCustomNotificationPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomNotificationPolicy: {
            readonly name: "UpdateCustomNotificationPolicy";
            readonly requestType: MessageFns<UpdateCustomNotificationPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateCustomNotificationPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetNotificationPolicyToDefault: {
            readonly name: "ResetNotificationPolicyToDefault";
            readonly requestType: MessageFns<ResetNotificationPolicyToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetNotificationPolicyToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getLabelPolicy: {
            readonly name: "GetLabelPolicy";
            readonly requestType: MessageFns<GetLabelPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetLabelPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getPreviewLabelPolicy: {
            readonly name: "GetPreviewLabelPolicy";
            readonly requestType: MessageFns<GetPreviewLabelPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetPreviewLabelPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultLabelPolicy: {
            readonly name: "GetDefaultLabelPolicy";
            readonly requestType: MessageFns<GetDefaultLabelPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultLabelPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomLabelPolicy: {
            readonly name: "AddCustomLabelPolicy";
            readonly requestType: MessageFns<AddCustomLabelPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddCustomLabelPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomLabelPolicy: {
            readonly name: "UpdateCustomLabelPolicy";
            readonly requestType: MessageFns<UpdateCustomLabelPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateCustomLabelPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly activateCustomLabelPolicy: {
            readonly name: "ActivateCustomLabelPolicy";
            readonly requestType: MessageFns<ActivateCustomLabelPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateCustomLabelPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeCustomLabelPolicyLogo: {
            readonly name: "RemoveCustomLabelPolicyLogo";
            readonly requestType: MessageFns<RemoveCustomLabelPolicyLogoRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveCustomLabelPolicyLogoResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeCustomLabelPolicyLogoDark: {
            readonly name: "RemoveCustomLabelPolicyLogoDark";
            readonly requestType: MessageFns<RemoveCustomLabelPolicyLogoDarkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveCustomLabelPolicyLogoDarkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeCustomLabelPolicyIcon: {
            readonly name: "RemoveCustomLabelPolicyIcon";
            readonly requestType: MessageFns<RemoveCustomLabelPolicyIconRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveCustomLabelPolicyIconResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeCustomLabelPolicyIconDark: {
            readonly name: "RemoveCustomLabelPolicyIconDark";
            readonly requestType: MessageFns<RemoveCustomLabelPolicyIconDarkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveCustomLabelPolicyIconDarkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeCustomLabelPolicyFont: {
            readonly name: "RemoveCustomLabelPolicyFont";
            readonly requestType: MessageFns<RemoveCustomLabelPolicyFontRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveCustomLabelPolicyFontResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetLabelPolicyToDefault: {
            readonly name: "ResetLabelPolicyToDefault";
            readonly requestType: MessageFns<ResetLabelPolicyToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetLabelPolicyToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomInitMessageText: {
            readonly name: "GetCustomInitMessageText";
            readonly requestType: MessageFns<GetCustomInitMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomInitMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultInitMessageText: {
            readonly name: "GetDefaultInitMessageText";
            readonly requestType: MessageFns<GetDefaultInitMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultInitMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomInitMessageText: {
            readonly name: "SetCustomInitMessageText";
            readonly requestType: MessageFns<SetCustomInitMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetCustomInitMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomInitMessageTextToDefault: {
            readonly name: "ResetCustomInitMessageTextToDefault";
            readonly requestType: MessageFns<ResetCustomInitMessageTextToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomInitMessageTextToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomPasswordResetMessageText: {
            readonly name: "GetCustomPasswordResetMessageText";
            readonly requestType: MessageFns<GetCustomPasswordResetMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomPasswordResetMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultPasswordResetMessageText: {
            readonly name: "GetDefaultPasswordResetMessageText";
            readonly requestType: MessageFns<GetDefaultPasswordResetMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultPasswordResetMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomPasswordResetMessageText: {
            readonly name: "SetCustomPasswordResetMessageText";
            readonly requestType: MessageFns<SetCustomPasswordResetMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetCustomPasswordResetMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomPasswordResetMessageTextToDefault: {
            readonly name: "ResetCustomPasswordResetMessageTextToDefault";
            readonly requestType: MessageFns<ResetCustomPasswordResetMessageTextToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomPasswordResetMessageTextToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomVerifyEmailMessageText: {
            readonly name: "GetCustomVerifyEmailMessageText";
            readonly requestType: MessageFns<GetCustomVerifyEmailMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomVerifyEmailMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultVerifyEmailMessageText: {
            readonly name: "GetDefaultVerifyEmailMessageText";
            readonly requestType: MessageFns<GetDefaultVerifyEmailMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultVerifyEmailMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomVerifyEmailMessageText: {
            readonly name: "SetCustomVerifyEmailMessageText";
            readonly requestType: MessageFns<SetCustomVerifyEmailMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetCustomVerifyEmailMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomVerifyEmailMessageTextToDefault: {
            readonly name: "ResetCustomVerifyEmailMessageTextToDefault";
            readonly requestType: MessageFns<ResetCustomVerifyEmailMessageTextToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomVerifyEmailMessageTextToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomVerifyPhoneMessageText: {
            readonly name: "GetCustomVerifyPhoneMessageText";
            readonly requestType: MessageFns<GetCustomVerifyPhoneMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomVerifyPhoneMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultVerifyPhoneMessageText: {
            readonly name: "GetDefaultVerifyPhoneMessageText";
            readonly requestType: MessageFns<GetDefaultVerifyPhoneMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultVerifyPhoneMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomVerifyPhoneMessageText: {
            readonly name: "SetCustomVerifyPhoneMessageText";
            readonly requestType: MessageFns<SetCustomVerifyPhoneMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetCustomVerifyPhoneMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomVerifyPhoneMessageTextToDefault: {
            readonly name: "ResetCustomVerifyPhoneMessageTextToDefault";
            readonly requestType: MessageFns<ResetCustomVerifyPhoneMessageTextToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomVerifyPhoneMessageTextToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomVerifySMSOTPMessageText: {
            readonly name: "GetCustomVerifySMSOTPMessageText";
            readonly requestType: MessageFns<GetCustomVerifySMSOTPMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomVerifySMSOTPMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultVerifySMSOTPMessageText: {
            readonly name: "GetDefaultVerifySMSOTPMessageText";
            readonly requestType: MessageFns<GetDefaultVerifySMSOTPMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultVerifySMSOTPMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomVerifySMSOTPMessageText: {
            readonly name: "SetCustomVerifySMSOTPMessageText";
            readonly requestType: MessageFns<SetCustomVerifySMSOTPMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetCustomVerifySMSOTPMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomVerifySMSOTPMessageTextToDefault: {
            readonly name: "ResetCustomVerifySMSOTPMessageTextToDefault";
            readonly requestType: MessageFns<ResetCustomVerifySMSOTPMessageTextToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomVerifyEmailOTPMessageText: {
            readonly name: "GetCustomVerifyEmailOTPMessageText";
            readonly requestType: MessageFns<GetCustomVerifyEmailOTPMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomVerifyEmailOTPMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultVerifyEmailOTPMessageText: {
            readonly name: "GetDefaultVerifyEmailOTPMessageText";
            readonly requestType: MessageFns<GetDefaultVerifyEmailOTPMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultVerifyEmailOTPMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomVerifyEmailOTPMessageText: {
            readonly name: "SetCustomVerifyEmailOTPMessageText";
            readonly requestType: MessageFns<SetCustomVerifyEmailOTPMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetCustomVerifyEmailOTPMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomVerifyEmailOTPMessageTextToDefault: {
            readonly name: "ResetCustomVerifyEmailOTPMessageTextToDefault";
            readonly requestType: MessageFns<ResetCustomVerifyEmailOTPMessageTextToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomDomainClaimedMessageText: {
            readonly name: "GetCustomDomainClaimedMessageText";
            readonly requestType: MessageFns<GetCustomDomainClaimedMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomDomainClaimedMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultDomainClaimedMessageText: {
            readonly name: "GetDefaultDomainClaimedMessageText";
            readonly requestType: MessageFns<GetDefaultDomainClaimedMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultDomainClaimedMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomDomainClaimedMessageCustomText: {
            readonly name: "SetCustomDomainClaimedMessageCustomText";
            readonly requestType: MessageFns<SetCustomDomainClaimedMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetCustomDomainClaimedMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomDomainClaimedMessageTextToDefault: {
            readonly name: "ResetCustomDomainClaimedMessageTextToDefault";
            readonly requestType: MessageFns<ResetCustomDomainClaimedMessageTextToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomDomainClaimedMessageTextToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomPasswordlessRegistrationMessageText: {
            readonly name: "GetCustomPasswordlessRegistrationMessageText";
            readonly requestType: MessageFns<GetCustomPasswordlessRegistrationMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomPasswordlessRegistrationMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultPasswordlessRegistrationMessageText: {
            readonly name: "GetDefaultPasswordlessRegistrationMessageText";
            readonly requestType: MessageFns<GetDefaultPasswordlessRegistrationMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultPasswordlessRegistrationMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomPasswordlessRegistrationMessageCustomText: {
            readonly name: "SetCustomPasswordlessRegistrationMessageCustomText";
            readonly requestType: MessageFns<SetCustomPasswordlessRegistrationMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetCustomPasswordlessRegistrationMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomPasswordlessRegistrationMessageTextToDefault: {
            readonly name: "ResetCustomPasswordlessRegistrationMessageTextToDefault";
            readonly requestType: MessageFns<ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomPasswordChangeMessageText: {
            readonly name: "GetCustomPasswordChangeMessageText";
            readonly requestType: MessageFns<GetCustomPasswordChangeMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomPasswordChangeMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultPasswordChangeMessageText: {
            readonly name: "GetDefaultPasswordChangeMessageText";
            readonly requestType: MessageFns<GetDefaultPasswordChangeMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultPasswordChangeMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomPasswordChangeMessageCustomText: {
            readonly name: "SetCustomPasswordChangeMessageCustomText";
            readonly requestType: MessageFns<SetCustomPasswordChangeMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetCustomPasswordChangeMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomPasswordChangeMessageTextToDefault: {
            readonly name: "ResetCustomPasswordChangeMessageTextToDefault";
            readonly requestType: MessageFns<ResetCustomPasswordChangeMessageTextToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomPasswordChangeMessageTextToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomInviteUserMessageText: {
            readonly name: "GetCustomInviteUserMessageText";
            readonly requestType: MessageFns<GetCustomInviteUserMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomInviteUserMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultInviteUserMessageText: {
            readonly name: "GetDefaultInviteUserMessageText";
            readonly requestType: MessageFns<GetDefaultInviteUserMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultInviteUserMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomInviteUserMessageCustomText: {
            readonly name: "SetCustomInviteUserMessageCustomText";
            readonly requestType: MessageFns<SetCustomInviteUserMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetCustomInviteUserMessageTextResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomInviteUserMessageTextToDefault: {
            readonly name: "ResetCustomInviteUserMessageTextToDefault";
            readonly requestType: MessageFns<ResetCustomInviteUserMessageTextToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomInviteUserMessageTextToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomLoginTexts: {
            readonly name: "GetCustomLoginTexts";
            readonly requestType: MessageFns<GetCustomLoginTextsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomLoginTextsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultLoginTexts: {
            readonly name: "GetDefaultLoginTexts";
            readonly requestType: MessageFns<GetDefaultLoginTextsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultLoginTextsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setCustomLoginText: {
            readonly name: "SetCustomLoginText";
            readonly requestType: MessageFns<SetCustomLoginTextsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetCustomLoginTextsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomLoginTextToDefault: {
            readonly name: "ResetCustomLoginTextToDefault";
            readonly requestType: MessageFns<ResetCustomLoginTextsToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomLoginTextsToDefaultResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOrgIDPByID: {
            readonly name: "GetOrgIDPByID";
            readonly requestType: MessageFns<GetOrgIDPByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetOrgIDPByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgIDPs: {
            readonly name: "ListOrgIDPs";
            readonly requestType: MessageFns<ListOrgIDPsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrgIDPsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOrgOIDCIDP: {
            readonly name: "AddOrgOIDCIDP";
            readonly requestType: MessageFns<AddOrgOIDCIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOrgOIDCIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOrgJWTIDP: {
            readonly name: "AddOrgJWTIDP";
            readonly requestType: MessageFns<AddOrgJWTIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOrgJWTIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateOrgIDP: {
            readonly name: "DeactivateOrgIDP";
            readonly requestType: MessageFns<DeactivateOrgIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateOrgIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateOrgIDP: {
            readonly name: "ReactivateOrgIDP";
            readonly requestType: MessageFns<ReactivateOrgIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateOrgIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeOrgIDP: {
            readonly name: "RemoveOrgIDP";
            readonly requestType: MessageFns<RemoveOrgIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveOrgIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOrgIDP: {
            readonly name: "UpdateOrgIDP";
            readonly requestType: MessageFns<UpdateOrgIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateOrgIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOrgIDPOIDCConfig: {
            readonly name: "UpdateOrgIDPOIDCConfig";
            readonly requestType: MessageFns<UpdateOrgIDPOIDCConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateOrgIDPOIDCConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOrgIDPJWTConfig: {
            readonly name: "UpdateOrgIDPJWTConfig";
            readonly requestType: MessageFns<UpdateOrgIDPJWTConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateOrgIDPJWTConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listProviders: {
            readonly name: "ListProviders";
            readonly requestType: MessageFns<ListProvidersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListProvidersResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getProviderByID: {
            readonly name: "GetProviderByID";
            readonly requestType: MessageFns<GetProviderByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetProviderByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addGenericOAuthProvider: {
            readonly name: "AddGenericOAuthProvider";
            readonly requestType: MessageFns<AddGenericOAuthProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddGenericOAuthProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateGenericOAuthProvider: {
            readonly name: "UpdateGenericOAuthProvider";
            readonly requestType: MessageFns<UpdateGenericOAuthProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateGenericOAuthProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addGenericOIDCProvider: {
            readonly name: "AddGenericOIDCProvider";
            readonly requestType: MessageFns<AddGenericOIDCProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddGenericOIDCProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateGenericOIDCProvider: {
            readonly name: "UpdateGenericOIDCProvider";
            readonly requestType: MessageFns<UpdateGenericOIDCProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateGenericOIDCProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly migrateGenericOIDCProvider: {
            readonly name: "MigrateGenericOIDCProvider";
            readonly requestType: MessageFns<MigrateGenericOIDCProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<MigrateGenericOIDCProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addJWTProvider: {
            readonly name: "AddJWTProvider";
            readonly requestType: MessageFns<AddJWTProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddJWTProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateJWTProvider: {
            readonly name: "UpdateJWTProvider";
            readonly requestType: MessageFns<UpdateJWTProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateJWTProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addAzureADProvider: {
            readonly name: "AddAzureADProvider";
            readonly requestType: MessageFns<AddAzureADProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddAzureADProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateAzureADProvider: {
            readonly name: "UpdateAzureADProvider";
            readonly requestType: MessageFns<UpdateAzureADProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateAzureADProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addGitHubProvider: {
            readonly name: "AddGitHubProvider";
            readonly requestType: MessageFns<AddGitHubProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddGitHubProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateGitHubProvider: {
            readonly name: "UpdateGitHubProvider";
            readonly requestType: MessageFns<UpdateGitHubProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateGitHubProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addGitHubEnterpriseServerProvider: {
            readonly name: "AddGitHubEnterpriseServerProvider";
            readonly requestType: MessageFns<AddGitHubEnterpriseServerProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddGitHubEnterpriseServerProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateGitHubEnterpriseServerProvider: {
            readonly name: "UpdateGitHubEnterpriseServerProvider";
            readonly requestType: MessageFns<UpdateGitHubEnterpriseServerProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateGitHubEnterpriseServerProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addGitLabProvider: {
            readonly name: "AddGitLabProvider";
            readonly requestType: MessageFns<AddGitLabProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddGitLabProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateGitLabProvider: {
            readonly name: "UpdateGitLabProvider";
            readonly requestType: MessageFns<UpdateGitLabProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateGitLabProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addGitLabSelfHostedProvider: {
            readonly name: "AddGitLabSelfHostedProvider";
            readonly requestType: MessageFns<AddGitLabSelfHostedProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddGitLabSelfHostedProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateGitLabSelfHostedProvider: {
            readonly name: "UpdateGitLabSelfHostedProvider";
            readonly requestType: MessageFns<UpdateGitLabSelfHostedProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateGitLabSelfHostedProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addGoogleProvider: {
            readonly name: "AddGoogleProvider";
            readonly requestType: MessageFns<AddGoogleProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddGoogleProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateGoogleProvider: {
            readonly name: "UpdateGoogleProvider";
            readonly requestType: MessageFns<UpdateGoogleProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateGoogleProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addLDAPProvider: {
            readonly name: "AddLDAPProvider";
            readonly requestType: MessageFns<AddLDAPProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddLDAPProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateLDAPProvider: {
            readonly name: "UpdateLDAPProvider";
            readonly requestType: MessageFns<UpdateLDAPProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateLDAPProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addAppleProvider: {
            readonly name: "AddAppleProvider";
            readonly requestType: MessageFns<AddAppleProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddAppleProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateAppleProvider: {
            readonly name: "UpdateAppleProvider";
            readonly requestType: MessageFns<UpdateAppleProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateAppleProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addSAMLProvider: {
            readonly name: "AddSAMLProvider";
            readonly requestType: MessageFns<AddSAMLProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddSAMLProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSAMLProvider: {
            readonly name: "UpdateSAMLProvider";
            readonly requestType: MessageFns<UpdateSAMLProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateSAMLProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly regenerateSAMLProviderCertificate: {
            readonly name: "RegenerateSAMLProviderCertificate";
            readonly requestType: MessageFns<RegenerateSAMLProviderCertificateRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RegenerateSAMLProviderCertificateResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deleteProvider: {
            readonly name: "DeleteProvider";
            readonly requestType: MessageFns<DeleteProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listActions: {
            readonly name: "ListActions";
            readonly requestType: MessageFns<ListActionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListActionsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getAction: {
            readonly name: "GetAction";
            readonly requestType: MessageFns<GetActionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetActionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly createAction: {
            readonly name: "CreateAction";
            readonly requestType: MessageFns<CreateActionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<CreateActionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateAction: {
            readonly name: "UpdateAction";
            readonly requestType: MessageFns<UpdateActionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateActionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateAction: {
            readonly name: "DeactivateAction";
            readonly requestType: MessageFns<DeactivateActionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateActionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateAction: {
            readonly name: "ReactivateAction";
            readonly requestType: MessageFns<ReactivateActionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateActionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deleteAction: {
            readonly name: "DeleteAction";
            readonly requestType: MessageFns<DeleteActionRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeleteActionResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listFlowTypes: {
            readonly name: "ListFlowTypes";
            readonly requestType: MessageFns<ListFlowTypesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListFlowTypesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listFlowTriggerTypes: {
            readonly name: "ListFlowTriggerTypes";
            readonly requestType: MessageFns<ListFlowTriggerTypesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListFlowTriggerTypesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getFlow: {
            readonly name: "GetFlow";
            readonly requestType: MessageFns<GetFlowRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetFlowResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly clearFlow: {
            readonly name: "ClearFlow";
            readonly requestType: MessageFns<ClearFlowRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ClearFlowResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setTriggerActions: {
            readonly name: "SetTriggerActions";
            readonly requestType: MessageFns<SetTriggerActionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetTriggerActionsResponse>;
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
export interface ManagementServiceImplementation<CallContextExt = {}> {
    healthz(request: HealthzRequest, context: CallContext & CallContextExt): Promise<DeepPartial<HealthzResponse>>;
    getOIDCInformation(request: GetOIDCInformationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOIDCInformationResponse>>;
    getIAM(request: GetIAMRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetIAMResponse>>;
    getSupportedLanguages(request: GetSupportedLanguagesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSupportedLanguagesResponse>>;
    getUserByID(request: GetUserByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserByIDResponse>>;
    getUserByLoginNameGlobal(request: GetUserByLoginNameGlobalRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserByLoginNameGlobalResponse>>;
    listUsers(request: ListUsersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUsersResponse>>;
    listUserChanges(request: ListUserChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUserChangesResponse>>;
    isUserUnique(request: IsUserUniqueRequest, context: CallContext & CallContextExt): Promise<DeepPartial<IsUserUniqueResponse>>;
    addHumanUser(request: AddHumanUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddHumanUserResponse>>;
    importHumanUser(request: ImportHumanUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ImportHumanUserResponse>>;
    addMachineUser(request: AddMachineUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMachineUserResponse>>;
    deactivateUser(request: DeactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateUserResponse>>;
    reactivateUser(request: ReactivateUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateUserResponse>>;
    lockUser(request: LockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LockUserResponse>>;
    unlockUser(request: UnlockUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UnlockUserResponse>>;
    removeUser(request: RemoveUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveUserResponse>>;
    updateUserName(request: UpdateUserNameRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateUserNameResponse>>;
    setUserMetadata(request: SetUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetUserMetadataResponse>>;
    bulkSetUserMetadata(request: BulkSetUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkSetUserMetadataResponse>>;
    listUserMetadata(request: ListUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUserMetadataResponse>>;
    getUserMetadata(request: GetUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserMetadataResponse>>;
    removeUserMetadata(request: RemoveUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveUserMetadataResponse>>;
    bulkRemoveUserMetadata(request: BulkRemoveUserMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkRemoveUserMetadataResponse>>;
    getHumanProfile(request: GetHumanProfileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetHumanProfileResponse>>;
    updateHumanProfile(request: UpdateHumanProfileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateHumanProfileResponse>>;
    getHumanEmail(request: GetHumanEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetHumanEmailResponse>>;
    updateHumanEmail(request: UpdateHumanEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateHumanEmailResponse>>;
    resendHumanInitialization(request: ResendHumanInitializationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendHumanInitializationResponse>>;
    resendHumanEmailVerification(request: ResendHumanEmailVerificationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendHumanEmailVerificationResponse>>;
    getHumanPhone(request: GetHumanPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetHumanPhoneResponse>>;
    updateHumanPhone(request: UpdateHumanPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateHumanPhoneResponse>>;
    removeHumanPhone(request: RemoveHumanPhoneRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanPhoneResponse>>;
    resendHumanPhoneVerification(request: ResendHumanPhoneVerificationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResendHumanPhoneVerificationResponse>>;
    removeHumanAvatar(request: RemoveHumanAvatarRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanAvatarResponse>>;
    setHumanInitialPassword(request: SetHumanInitialPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetHumanInitialPasswordResponse>>;
    setHumanPassword(request: SetHumanPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetHumanPasswordResponse>>;
    sendHumanResetPasswordNotification(request: SendHumanResetPasswordNotificationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SendHumanResetPasswordNotificationResponse>>;
    listHumanAuthFactors(request: ListHumanAuthFactorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListHumanAuthFactorsResponse>>;
    removeHumanAuthFactorOTP(request: RemoveHumanAuthFactorOTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanAuthFactorOTPResponse>>;
    removeHumanAuthFactorU2F(request: RemoveHumanAuthFactorU2FRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanAuthFactorU2FResponse>>;
    removeHumanAuthFactorOTPSMS(request: RemoveHumanAuthFactorOTPSMSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanAuthFactorOTPSMSResponse>>;
    removeHumanAuthFactorOTPEmail(request: RemoveHumanAuthFactorOTPEmailRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanAuthFactorOTPEmailResponse>>;
    listHumanPasswordless(request: ListHumanPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListHumanPasswordlessResponse>>;
    addPasswordlessRegistration(request: AddPasswordlessRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddPasswordlessRegistrationResponse>>;
    sendPasswordlessRegistration(request: SendPasswordlessRegistrationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SendPasswordlessRegistrationResponse>>;
    removeHumanPasswordless(request: RemoveHumanPasswordlessRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanPasswordlessResponse>>;
    updateMachine(request: UpdateMachineRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateMachineResponse>>;
    generateMachineSecret(request: GenerateMachineSecretRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GenerateMachineSecretResponse>>;
    removeMachineSecret(request: RemoveMachineSecretRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMachineSecretResponse>>;
    getMachineKeyByIDs(request: GetMachineKeyByIDsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMachineKeyByIDsResponse>>;
    listMachineKeys(request: ListMachineKeysRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMachineKeysResponse>>;
    addMachineKey(request: AddMachineKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMachineKeyResponse>>;
    removeMachineKey(request: RemoveMachineKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMachineKeyResponse>>;
    getPersonalAccessTokenByIDs(request: GetPersonalAccessTokenByIDsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPersonalAccessTokenByIDsResponse>>;
    listPersonalAccessTokens(request: ListPersonalAccessTokensRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListPersonalAccessTokensResponse>>;
    addPersonalAccessToken(request: AddPersonalAccessTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddPersonalAccessTokenResponse>>;
    removePersonalAccessToken(request: RemovePersonalAccessTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemovePersonalAccessTokenResponse>>;
    listHumanLinkedIDPs(request: ListHumanLinkedIDPsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListHumanLinkedIDPsResponse>>;
    removeHumanLinkedIDP(request: RemoveHumanLinkedIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveHumanLinkedIDPResponse>>;
    listUserMemberships(request: ListUserMembershipsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUserMembershipsResponse>>;
    getMyOrg(request: GetMyOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyOrgResponse>>;
    getOrgByDomainGlobal(request: GetOrgByDomainGlobalRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgByDomainGlobalResponse>>;
    listOrgChanges(request: ListOrgChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgChangesResponse>>;
    addOrg(request: AddOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrgResponse>>;
    updateOrg(request: UpdateOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgResponse>>;
    deactivateOrg(request: DeactivateOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateOrgResponse>>;
    reactivateOrg(request: ReactivateOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateOrgResponse>>;
    removeOrg(request: RemoveOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgResponse>>;
    setOrgMetadata(request: SetOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetOrgMetadataResponse>>;
    bulkSetOrgMetadata(request: BulkSetOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkSetOrgMetadataResponse>>;
    listOrgMetadata(request: ListOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgMetadataResponse>>;
    getOrgMetadata(request: GetOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgMetadataResponse>>;
    removeOrgMetadata(request: RemoveOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgMetadataResponse>>;
    bulkRemoveOrgMetadata(request: BulkRemoveOrgMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkRemoveOrgMetadataResponse>>;
    listOrgDomains(request: ListOrgDomainsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgDomainsResponse>>;
    addOrgDomain(request: AddOrgDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrgDomainResponse>>;
    removeOrgDomain(request: RemoveOrgDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgDomainResponse>>;
    generateOrgDomainValidation(request: GenerateOrgDomainValidationRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GenerateOrgDomainValidationResponse>>;
    validateOrgDomain(request: ValidateOrgDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ValidateOrgDomainResponse>>;
    setPrimaryOrgDomain(request: SetPrimaryOrgDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetPrimaryOrgDomainResponse>>;
    listOrgMemberRoles(request: ListOrgMemberRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgMemberRolesResponse>>;
    listOrgMembers(request: ListOrgMembersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgMembersResponse>>;
    addOrgMember(request: AddOrgMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrgMemberResponse>>;
    updateOrgMember(request: UpdateOrgMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgMemberResponse>>;
    removeOrgMember(request: RemoveOrgMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgMemberResponse>>;
    getProjectByID(request: GetProjectByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetProjectByIDResponse>>;
    getGrantedProjectByID(request: GetGrantedProjectByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetGrantedProjectByIDResponse>>;
    listProjects(request: ListProjectsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectsResponse>>;
    listGrantedProjects(request: ListGrantedProjectsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListGrantedProjectsResponse>>;
    listGrantedProjectRoles(request: ListGrantedProjectRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListGrantedProjectRolesResponse>>;
    listProjectChanges(request: ListProjectChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectChangesResponse>>;
    addProject(request: AddProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddProjectResponse>>;
    updateProject(request: UpdateProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectResponse>>;
    deactivateProject(request: DeactivateProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateProjectResponse>>;
    reactivateProject(request: ReactivateProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateProjectResponse>>;
    removeProject(request: RemoveProjectRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveProjectResponse>>;
    listProjectRoles(request: ListProjectRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectRolesResponse>>;
    addProjectRole(request: AddProjectRoleRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddProjectRoleResponse>>;
    bulkAddProjectRoles(request: BulkAddProjectRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkAddProjectRolesResponse>>;
    updateProjectRole(request: UpdateProjectRoleRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectRoleResponse>>;
    removeProjectRole(request: RemoveProjectRoleRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveProjectRoleResponse>>;
    listProjectMemberRoles(request: ListProjectMemberRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectMemberRolesResponse>>;
    listProjectMembers(request: ListProjectMembersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectMembersResponse>>;
    addProjectMember(request: AddProjectMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddProjectMemberResponse>>;
    updateProjectMember(request: UpdateProjectMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectMemberResponse>>;
    removeProjectMember(request: RemoveProjectMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveProjectMemberResponse>>;
    getAppByID(request: GetAppByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAppByIDResponse>>;
    listApps(request: ListAppsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAppsResponse>>;
    listAppChanges(request: ListAppChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAppChangesResponse>>;
    addOIDCApp(request: AddOIDCAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOIDCAppResponse>>;
    addSAMLApp(request: AddSAMLAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSAMLAppResponse>>;
    addAPIApp(request: AddAPIAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddAPIAppResponse>>;
    updateApp(request: UpdateAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAppResponse>>;
    updateOIDCAppConfig(request: UpdateOIDCAppConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOIDCAppConfigResponse>>;
    updateSAMLAppConfig(request: UpdateSAMLAppConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSAMLAppConfigResponse>>;
    updateAPIAppConfig(request: UpdateAPIAppConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAPIAppConfigResponse>>;
    deactivateApp(request: DeactivateAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateAppResponse>>;
    reactivateApp(request: ReactivateAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateAppResponse>>;
    removeApp(request: RemoveAppRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveAppResponse>>;
    regenerateOIDCClientSecret(request: RegenerateOIDCClientSecretRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegenerateOIDCClientSecretResponse>>;
    regenerateAPIClientSecret(request: RegenerateAPIClientSecretRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegenerateAPIClientSecretResponse>>;
    getAppKey(request: GetAppKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAppKeyResponse>>;
    listAppKeys(request: ListAppKeysRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAppKeysResponse>>;
    addAppKey(request: AddAppKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddAppKeyResponse>>;
    removeAppKey(request: RemoveAppKeyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveAppKeyResponse>>;
    listProjectGrantChanges(request: ListProjectGrantChangesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectGrantChangesResponse>>;
    getProjectGrantByID(request: GetProjectGrantByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetProjectGrantByIDResponse>>;
    listProjectGrants(request: ListProjectGrantsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectGrantsResponse>>;
    listAllProjectGrants(request: ListAllProjectGrantsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAllProjectGrantsResponse>>;
    addProjectGrant(request: AddProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddProjectGrantResponse>>;
    updateProjectGrant(request: UpdateProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectGrantResponse>>;
    deactivateProjectGrant(request: DeactivateProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateProjectGrantResponse>>;
    reactivateProjectGrant(request: ReactivateProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateProjectGrantResponse>>;
    removeProjectGrant(request: RemoveProjectGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveProjectGrantResponse>>;
    listProjectGrantMemberRoles(request: ListProjectGrantMemberRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectGrantMemberRolesResponse>>;
    listProjectGrantMembers(request: ListProjectGrantMembersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProjectGrantMembersResponse>>;
    addProjectGrantMember(request: AddProjectGrantMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddProjectGrantMemberResponse>>;
    updateProjectGrantMember(request: UpdateProjectGrantMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateProjectGrantMemberResponse>>;
    removeProjectGrantMember(request: RemoveProjectGrantMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveProjectGrantMemberResponse>>;
    getUserGrantByID(request: GetUserGrantByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserGrantByIDResponse>>;
    listUserGrants(request: ListUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListUserGrantResponse>>;
    addUserGrant(request: AddUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddUserGrantResponse>>;
    updateUserGrant(request: UpdateUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateUserGrantResponse>>;
    deactivateUserGrant(request: DeactivateUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateUserGrantResponse>>;
    reactivateUserGrant(request: ReactivateUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateUserGrantResponse>>;
    removeUserGrant(request: RemoveUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveUserGrantResponse>>;
    bulkRemoveUserGrant(request: BulkRemoveUserGrantRequest, context: CallContext & CallContextExt): Promise<DeepPartial<BulkRemoveUserGrantResponse>>;
    getOrgIAMPolicy(request: GetOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgIAMPolicyResponse>>;
    getDomainPolicy(request: GetDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDomainPolicyResponse>>;
    getLoginPolicy(request: GetLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLoginPolicyResponse>>;
    getDefaultLoginPolicy(request: GetDefaultLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLoginPolicyResponse>>;
    addCustomLoginPolicy(request: AddCustomLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomLoginPolicyResponse>>;
    updateCustomLoginPolicy(request: UpdateCustomLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomLoginPolicyResponse>>;
    resetLoginPolicyToDefault(request: ResetLoginPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetLoginPolicyToDefaultResponse>>;
    listLoginPolicyIDPs(request: ListLoginPolicyIDPsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListLoginPolicyIDPsResponse>>;
    addIDPToLoginPolicy(request: AddIDPToLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddIDPToLoginPolicyResponse>>;
    removeIDPFromLoginPolicy(request: RemoveIDPFromLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveIDPFromLoginPolicyResponse>>;
    listLoginPolicySecondFactors(request: ListLoginPolicySecondFactorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListLoginPolicySecondFactorsResponse>>;
    addSecondFactorToLoginPolicy(request: AddSecondFactorToLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSecondFactorToLoginPolicyResponse>>;
    removeSecondFactorFromLoginPolicy(request: RemoveSecondFactorFromLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveSecondFactorFromLoginPolicyResponse>>;
    listLoginPolicyMultiFactors(request: ListLoginPolicyMultiFactorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListLoginPolicyMultiFactorsResponse>>;
    addMultiFactorToLoginPolicy(request: AddMultiFactorToLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddMultiFactorToLoginPolicyResponse>>;
    removeMultiFactorFromLoginPolicy(request: RemoveMultiFactorFromLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveMultiFactorFromLoginPolicyResponse>>;
    getPasswordComplexityPolicy(request: GetPasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPasswordComplexityPolicyResponse>>;
    getDefaultPasswordComplexityPolicy(request: GetDefaultPasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordComplexityPolicyResponse>>;
    addCustomPasswordComplexityPolicy(request: AddCustomPasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomPasswordComplexityPolicyResponse>>;
    updateCustomPasswordComplexityPolicy(request: UpdateCustomPasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomPasswordComplexityPolicyResponse>>;
    resetPasswordComplexityPolicyToDefault(request: ResetPasswordComplexityPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetPasswordComplexityPolicyToDefaultResponse>>;
    getPasswordAgePolicy(request: GetPasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPasswordAgePolicyResponse>>;
    getDefaultPasswordAgePolicy(request: GetDefaultPasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordAgePolicyResponse>>;
    addCustomPasswordAgePolicy(request: AddCustomPasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomPasswordAgePolicyResponse>>;
    updateCustomPasswordAgePolicy(request: UpdateCustomPasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomPasswordAgePolicyResponse>>;
    resetPasswordAgePolicyToDefault(request: ResetPasswordAgePolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetPasswordAgePolicyToDefaultResponse>>;
    getLockoutPolicy(request: GetLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLockoutPolicyResponse>>;
    getDefaultLockoutPolicy(request: GetDefaultLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLockoutPolicyResponse>>;
    addCustomLockoutPolicy(request: AddCustomLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomLockoutPolicyResponse>>;
    updateCustomLockoutPolicy(request: UpdateCustomLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomLockoutPolicyResponse>>;
    resetLockoutPolicyToDefault(request: ResetLockoutPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetLockoutPolicyToDefaultResponse>>;
    getPrivacyPolicy(request: GetPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPrivacyPolicyResponse>>;
    getDefaultPrivacyPolicy(request: GetDefaultPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPrivacyPolicyResponse>>;
    addCustomPrivacyPolicy(request: AddCustomPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomPrivacyPolicyResponse>>;
    updateCustomPrivacyPolicy(request: UpdateCustomPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomPrivacyPolicyResponse>>;
    resetPrivacyPolicyToDefault(request: ResetPrivacyPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetPrivacyPolicyToDefaultResponse>>;
    getNotificationPolicy(request: GetNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNotificationPolicyResponse>>;
    getDefaultNotificationPolicy(request: GetDefaultNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultNotificationPolicyResponse>>;
    addCustomNotificationPolicy(request: AddCustomNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomNotificationPolicyResponse>>;
    updateCustomNotificationPolicy(request: UpdateCustomNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomNotificationPolicyResponse>>;
    resetNotificationPolicyToDefault(request: ResetNotificationPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetNotificationPolicyToDefaultResponse>>;
    getLabelPolicy(request: GetLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLabelPolicyResponse>>;
    getPreviewLabelPolicy(request: GetPreviewLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPreviewLabelPolicyResponse>>;
    getDefaultLabelPolicy(request: GetDefaultLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLabelPolicyResponse>>;
    addCustomLabelPolicy(request: AddCustomLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomLabelPolicyResponse>>;
    updateCustomLabelPolicy(request: UpdateCustomLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomLabelPolicyResponse>>;
    activateCustomLabelPolicy(request: ActivateCustomLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateCustomLabelPolicyResponse>>;
    removeCustomLabelPolicyLogo(request: RemoveCustomLabelPolicyLogoRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveCustomLabelPolicyLogoResponse>>;
    removeCustomLabelPolicyLogoDark(request: RemoveCustomLabelPolicyLogoDarkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveCustomLabelPolicyLogoDarkResponse>>;
    removeCustomLabelPolicyIcon(request: RemoveCustomLabelPolicyIconRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveCustomLabelPolicyIconResponse>>;
    removeCustomLabelPolicyIconDark(request: RemoveCustomLabelPolicyIconDarkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveCustomLabelPolicyIconDarkResponse>>;
    removeCustomLabelPolicyFont(request: RemoveCustomLabelPolicyFontRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveCustomLabelPolicyFontResponse>>;
    resetLabelPolicyToDefault(request: ResetLabelPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetLabelPolicyToDefaultResponse>>;
    getCustomInitMessageText(request: GetCustomInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomInitMessageTextResponse>>;
    getDefaultInitMessageText(request: GetDefaultInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultInitMessageTextResponse>>;
    setCustomInitMessageText(request: SetCustomInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomInitMessageTextResponse>>;
    resetCustomInitMessageTextToDefault(request: ResetCustomInitMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomInitMessageTextToDefaultResponse>>;
    getCustomPasswordResetMessageText(request: GetCustomPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordResetMessageTextResponse>>;
    getDefaultPasswordResetMessageText(request: GetDefaultPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordResetMessageTextResponse>>;
    setCustomPasswordResetMessageText(request: SetCustomPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomPasswordResetMessageTextResponse>>;
    resetCustomPasswordResetMessageTextToDefault(request: ResetCustomPasswordResetMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordResetMessageTextToDefaultResponse>>;
    getCustomVerifyEmailMessageText(request: GetCustomVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyEmailMessageTextResponse>>;
    getDefaultVerifyEmailMessageText(request: GetDefaultVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyEmailMessageTextResponse>>;
    setCustomVerifyEmailMessageText(request: SetCustomVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomVerifyEmailMessageTextResponse>>;
    resetCustomVerifyEmailMessageTextToDefault(request: ResetCustomVerifyEmailMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultResponse>>;
    getCustomVerifyPhoneMessageText(request: GetCustomVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyPhoneMessageTextResponse>>;
    getDefaultVerifyPhoneMessageText(request: GetDefaultVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyPhoneMessageTextResponse>>;
    setCustomVerifyPhoneMessageText(request: SetCustomVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomVerifyPhoneMessageTextResponse>>;
    resetCustomVerifyPhoneMessageTextToDefault(request: ResetCustomVerifyPhoneMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultResponse>>;
    getCustomVerifySMSOTPMessageText(request: GetCustomVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifySMSOTPMessageTextResponse>>;
    getDefaultVerifySMSOTPMessageText(request: GetDefaultVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifySMSOTPMessageTextResponse>>;
    setCustomVerifySMSOTPMessageText(request: SetCustomVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomVerifySMSOTPMessageTextResponse>>;
    resetCustomVerifySMSOTPMessageTextToDefault(request: ResetCustomVerifySMSOTPMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>>;
    getCustomVerifyEmailOTPMessageText(request: GetCustomVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyEmailOTPMessageTextResponse>>;
    getDefaultVerifyEmailOTPMessageText(request: GetDefaultVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyEmailOTPMessageTextResponse>>;
    setCustomVerifyEmailOTPMessageText(request: SetCustomVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomVerifyEmailOTPMessageTextResponse>>;
    resetCustomVerifyEmailOTPMessageTextToDefault(request: ResetCustomVerifyEmailOTPMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>>;
    getCustomDomainClaimedMessageText(request: GetCustomDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomDomainClaimedMessageTextResponse>>;
    getDefaultDomainClaimedMessageText(request: GetDefaultDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultDomainClaimedMessageTextResponse>>;
    setCustomDomainClaimedMessageCustomText(request: SetCustomDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomDomainClaimedMessageTextResponse>>;
    resetCustomDomainClaimedMessageTextToDefault(request: ResetCustomDomainClaimedMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultResponse>>;
    getCustomPasswordlessRegistrationMessageText(request: GetCustomPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordlessRegistrationMessageTextResponse>>;
    getDefaultPasswordlessRegistrationMessageText(request: GetDefaultPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordlessRegistrationMessageTextResponse>>;
    setCustomPasswordlessRegistrationMessageCustomText(request: SetCustomPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomPasswordlessRegistrationMessageTextResponse>>;
    resetCustomPasswordlessRegistrationMessageTextToDefault(request: ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>>;
    getCustomPasswordChangeMessageText(request: GetCustomPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordChangeMessageTextResponse>>;
    getDefaultPasswordChangeMessageText(request: GetDefaultPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordChangeMessageTextResponse>>;
    setCustomPasswordChangeMessageCustomText(request: SetCustomPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomPasswordChangeMessageTextResponse>>;
    resetCustomPasswordChangeMessageTextToDefault(request: ResetCustomPasswordChangeMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultResponse>>;
    getCustomInviteUserMessageText(request: GetCustomInviteUserMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomInviteUserMessageTextResponse>>;
    getDefaultInviteUserMessageText(request: GetDefaultInviteUserMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultInviteUserMessageTextResponse>>;
    setCustomInviteUserMessageCustomText(request: SetCustomInviteUserMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomInviteUserMessageTextResponse>>;
    resetCustomInviteUserMessageTextToDefault(request: ResetCustomInviteUserMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomInviteUserMessageTextToDefaultResponse>>;
    getCustomLoginTexts(request: GetCustomLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomLoginTextsResponse>>;
    getDefaultLoginTexts(request: GetDefaultLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLoginTextsResponse>>;
    setCustomLoginText(request: SetCustomLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomLoginTextsResponse>>;
    resetCustomLoginTextToDefault(request: ResetCustomLoginTextsToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomLoginTextsToDefaultResponse>>;
    getOrgIDPByID(request: GetOrgIDPByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgIDPByIDResponse>>;
    listOrgIDPs(request: ListOrgIDPsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgIDPsResponse>>;
    addOrgOIDCIDP(request: AddOrgOIDCIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrgOIDCIDPResponse>>;
    addOrgJWTIDP(request: AddOrgJWTIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOrgJWTIDPResponse>>;
    deactivateOrgIDP(request: DeactivateOrgIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateOrgIDPResponse>>;
    reactivateOrgIDP(request: ReactivateOrgIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateOrgIDPResponse>>;
    removeOrgIDP(request: RemoveOrgIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgIDPResponse>>;
    updateOrgIDP(request: UpdateOrgIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgIDPResponse>>;
    updateOrgIDPOIDCConfig(request: UpdateOrgIDPOIDCConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgIDPOIDCConfigResponse>>;
    updateOrgIDPJWTConfig(request: UpdateOrgIDPJWTConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgIDPJWTConfigResponse>>;
    listProviders(request: ListProvidersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListProvidersResponse>>;
    getProviderByID(request: GetProviderByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetProviderByIDResponse>>;
    addGenericOAuthProvider(request: AddGenericOAuthProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGenericOAuthProviderResponse>>;
    updateGenericOAuthProvider(request: UpdateGenericOAuthProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGenericOAuthProviderResponse>>;
    addGenericOIDCProvider(request: AddGenericOIDCProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGenericOIDCProviderResponse>>;
    updateGenericOIDCProvider(request: UpdateGenericOIDCProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGenericOIDCProviderResponse>>;
    migrateGenericOIDCProvider(request: MigrateGenericOIDCProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<MigrateGenericOIDCProviderResponse>>;
    addJWTProvider(request: AddJWTProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddJWTProviderResponse>>;
    updateJWTProvider(request: UpdateJWTProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateJWTProviderResponse>>;
    addAzureADProvider(request: AddAzureADProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddAzureADProviderResponse>>;
    updateAzureADProvider(request: UpdateAzureADProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAzureADProviderResponse>>;
    addGitHubProvider(request: AddGitHubProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitHubProviderResponse>>;
    updateGitHubProvider(request: UpdateGitHubProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitHubProviderResponse>>;
    addGitHubEnterpriseServerProvider(request: AddGitHubEnterpriseServerProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitHubEnterpriseServerProviderResponse>>;
    updateGitHubEnterpriseServerProvider(request: UpdateGitHubEnterpriseServerProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitHubEnterpriseServerProviderResponse>>;
    addGitLabProvider(request: AddGitLabProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitLabProviderResponse>>;
    updateGitLabProvider(request: UpdateGitLabProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitLabProviderResponse>>;
    addGitLabSelfHostedProvider(request: AddGitLabSelfHostedProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGitLabSelfHostedProviderResponse>>;
    updateGitLabSelfHostedProvider(request: UpdateGitLabSelfHostedProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGitLabSelfHostedProviderResponse>>;
    addGoogleProvider(request: AddGoogleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddGoogleProviderResponse>>;
    updateGoogleProvider(request: UpdateGoogleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateGoogleProviderResponse>>;
    addLDAPProvider(request: AddLDAPProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddLDAPProviderResponse>>;
    updateLDAPProvider(request: UpdateLDAPProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateLDAPProviderResponse>>;
    addAppleProvider(request: AddAppleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddAppleProviderResponse>>;
    updateAppleProvider(request: UpdateAppleProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateAppleProviderResponse>>;
    addSAMLProvider(request: AddSAMLProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSAMLProviderResponse>>;
    updateSAMLProvider(request: UpdateSAMLProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSAMLProviderResponse>>;
    regenerateSAMLProviderCertificate(request: RegenerateSAMLProviderCertificateRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegenerateSAMLProviderCertificateResponse>>;
    deleteProvider(request: DeleteProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteProviderResponse>>;
    listActions(request: ListActionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListActionsResponse>>;
    getAction(request: GetActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetActionResponse>>;
    createAction(request: CreateActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateActionResponse>>;
    updateAction(request: UpdateActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateActionResponse>>;
    deactivateAction(request: DeactivateActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateActionResponse>>;
    reactivateAction(request: ReactivateActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateActionResponse>>;
    deleteAction(request: DeleteActionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteActionResponse>>;
    listFlowTypes(request: ListFlowTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFlowTypesResponse>>;
    listFlowTriggerTypes(request: ListFlowTriggerTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFlowTriggerTypesResponse>>;
    getFlow(request: GetFlowRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetFlowResponse>>;
    clearFlow(request: ClearFlowRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ClearFlowResponse>>;
    setTriggerActions(request: SetTriggerActionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetTriggerActionsResponse>>;
}
export interface ManagementServiceClient<CallOptionsExt = {}> {
    healthz(request: DeepPartial<HealthzRequest>, options?: CallOptions & CallOptionsExt): Promise<HealthzResponse>;
    getOIDCInformation(request: DeepPartial<GetOIDCInformationRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOIDCInformationResponse>;
    getIAM(request: DeepPartial<GetIAMRequest>, options?: CallOptions & CallOptionsExt): Promise<GetIAMResponse>;
    getSupportedLanguages(request: DeepPartial<GetSupportedLanguagesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSupportedLanguagesResponse>;
    getUserByID(request: DeepPartial<GetUserByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserByIDResponse>;
    getUserByLoginNameGlobal(request: DeepPartial<GetUserByLoginNameGlobalRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserByLoginNameGlobalResponse>;
    listUsers(request: DeepPartial<ListUsersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUsersResponse>;
    listUserChanges(request: DeepPartial<ListUserChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUserChangesResponse>;
    isUserUnique(request: DeepPartial<IsUserUniqueRequest>, options?: CallOptions & CallOptionsExt): Promise<IsUserUniqueResponse>;
    addHumanUser(request: DeepPartial<AddHumanUserRequest>, options?: CallOptions & CallOptionsExt): Promise<AddHumanUserResponse>;
    importHumanUser(request: DeepPartial<ImportHumanUserRequest>, options?: CallOptions & CallOptionsExt): Promise<ImportHumanUserResponse>;
    addMachineUser(request: DeepPartial<AddMachineUserRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMachineUserResponse>;
    deactivateUser(request: DeepPartial<DeactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateUserResponse>;
    reactivateUser(request: DeepPartial<ReactivateUserRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateUserResponse>;
    lockUser(request: DeepPartial<LockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<LockUserResponse>;
    unlockUser(request: DeepPartial<UnlockUserRequest>, options?: CallOptions & CallOptionsExt): Promise<UnlockUserResponse>;
    removeUser(request: DeepPartial<RemoveUserRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveUserResponse>;
    updateUserName(request: DeepPartial<UpdateUserNameRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateUserNameResponse>;
    setUserMetadata(request: DeepPartial<SetUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<SetUserMetadataResponse>;
    bulkSetUserMetadata(request: DeepPartial<BulkSetUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkSetUserMetadataResponse>;
    listUserMetadata(request: DeepPartial<ListUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUserMetadataResponse>;
    getUserMetadata(request: DeepPartial<GetUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserMetadataResponse>;
    removeUserMetadata(request: DeepPartial<RemoveUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveUserMetadataResponse>;
    bulkRemoveUserMetadata(request: DeepPartial<BulkRemoveUserMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkRemoveUserMetadataResponse>;
    getHumanProfile(request: DeepPartial<GetHumanProfileRequest>, options?: CallOptions & CallOptionsExt): Promise<GetHumanProfileResponse>;
    updateHumanProfile(request: DeepPartial<UpdateHumanProfileRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateHumanProfileResponse>;
    getHumanEmail(request: DeepPartial<GetHumanEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<GetHumanEmailResponse>;
    updateHumanEmail(request: DeepPartial<UpdateHumanEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateHumanEmailResponse>;
    resendHumanInitialization(request: DeepPartial<ResendHumanInitializationRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendHumanInitializationResponse>;
    resendHumanEmailVerification(request: DeepPartial<ResendHumanEmailVerificationRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendHumanEmailVerificationResponse>;
    getHumanPhone(request: DeepPartial<GetHumanPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<GetHumanPhoneResponse>;
    updateHumanPhone(request: DeepPartial<UpdateHumanPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateHumanPhoneResponse>;
    removeHumanPhone(request: DeepPartial<RemoveHumanPhoneRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanPhoneResponse>;
    resendHumanPhoneVerification(request: DeepPartial<ResendHumanPhoneVerificationRequest>, options?: CallOptions & CallOptionsExt): Promise<ResendHumanPhoneVerificationResponse>;
    removeHumanAvatar(request: DeepPartial<RemoveHumanAvatarRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanAvatarResponse>;
    setHumanInitialPassword(request: DeepPartial<SetHumanInitialPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<SetHumanInitialPasswordResponse>;
    setHumanPassword(request: DeepPartial<SetHumanPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<SetHumanPasswordResponse>;
    sendHumanResetPasswordNotification(request: DeepPartial<SendHumanResetPasswordNotificationRequest>, options?: CallOptions & CallOptionsExt): Promise<SendHumanResetPasswordNotificationResponse>;
    listHumanAuthFactors(request: DeepPartial<ListHumanAuthFactorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListHumanAuthFactorsResponse>;
    removeHumanAuthFactorOTP(request: DeepPartial<RemoveHumanAuthFactorOTPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanAuthFactorOTPResponse>;
    removeHumanAuthFactorU2F(request: DeepPartial<RemoveHumanAuthFactorU2FRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanAuthFactorU2FResponse>;
    removeHumanAuthFactorOTPSMS(request: DeepPartial<RemoveHumanAuthFactorOTPSMSRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanAuthFactorOTPSMSResponse>;
    removeHumanAuthFactorOTPEmail(request: DeepPartial<RemoveHumanAuthFactorOTPEmailRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanAuthFactorOTPEmailResponse>;
    listHumanPasswordless(request: DeepPartial<ListHumanPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<ListHumanPasswordlessResponse>;
    addPasswordlessRegistration(request: DeepPartial<AddPasswordlessRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<AddPasswordlessRegistrationResponse>;
    sendPasswordlessRegistration(request: DeepPartial<SendPasswordlessRegistrationRequest>, options?: CallOptions & CallOptionsExt): Promise<SendPasswordlessRegistrationResponse>;
    removeHumanPasswordless(request: DeepPartial<RemoveHumanPasswordlessRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanPasswordlessResponse>;
    updateMachine(request: DeepPartial<UpdateMachineRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateMachineResponse>;
    generateMachineSecret(request: DeepPartial<GenerateMachineSecretRequest>, options?: CallOptions & CallOptionsExt): Promise<GenerateMachineSecretResponse>;
    removeMachineSecret(request: DeepPartial<RemoveMachineSecretRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMachineSecretResponse>;
    getMachineKeyByIDs(request: DeepPartial<GetMachineKeyByIDsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMachineKeyByIDsResponse>;
    listMachineKeys(request: DeepPartial<ListMachineKeysRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMachineKeysResponse>;
    addMachineKey(request: DeepPartial<AddMachineKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMachineKeyResponse>;
    removeMachineKey(request: DeepPartial<RemoveMachineKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMachineKeyResponse>;
    getPersonalAccessTokenByIDs(request: DeepPartial<GetPersonalAccessTokenByIDsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPersonalAccessTokenByIDsResponse>;
    listPersonalAccessTokens(request: DeepPartial<ListPersonalAccessTokensRequest>, options?: CallOptions & CallOptionsExt): Promise<ListPersonalAccessTokensResponse>;
    addPersonalAccessToken(request: DeepPartial<AddPersonalAccessTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<AddPersonalAccessTokenResponse>;
    removePersonalAccessToken(request: DeepPartial<RemovePersonalAccessTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<RemovePersonalAccessTokenResponse>;
    listHumanLinkedIDPs(request: DeepPartial<ListHumanLinkedIDPsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListHumanLinkedIDPsResponse>;
    removeHumanLinkedIDP(request: DeepPartial<RemoveHumanLinkedIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveHumanLinkedIDPResponse>;
    listUserMemberships(request: DeepPartial<ListUserMembershipsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUserMembershipsResponse>;
    getMyOrg(request: DeepPartial<GetMyOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyOrgResponse>;
    getOrgByDomainGlobal(request: DeepPartial<GetOrgByDomainGlobalRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgByDomainGlobalResponse>;
    listOrgChanges(request: DeepPartial<ListOrgChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgChangesResponse>;
    addOrg(request: DeepPartial<AddOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrgResponse>;
    updateOrg(request: DeepPartial<UpdateOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgResponse>;
    deactivateOrg(request: DeepPartial<DeactivateOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateOrgResponse>;
    reactivateOrg(request: DeepPartial<ReactivateOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateOrgResponse>;
    removeOrg(request: DeepPartial<RemoveOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgResponse>;
    setOrgMetadata(request: DeepPartial<SetOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<SetOrgMetadataResponse>;
    bulkSetOrgMetadata(request: DeepPartial<BulkSetOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkSetOrgMetadataResponse>;
    listOrgMetadata(request: DeepPartial<ListOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgMetadataResponse>;
    getOrgMetadata(request: DeepPartial<GetOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgMetadataResponse>;
    removeOrgMetadata(request: DeepPartial<RemoveOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgMetadataResponse>;
    bulkRemoveOrgMetadata(request: DeepPartial<BulkRemoveOrgMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkRemoveOrgMetadataResponse>;
    listOrgDomains(request: DeepPartial<ListOrgDomainsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgDomainsResponse>;
    addOrgDomain(request: DeepPartial<AddOrgDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrgDomainResponse>;
    removeOrgDomain(request: DeepPartial<RemoveOrgDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgDomainResponse>;
    generateOrgDomainValidation(request: DeepPartial<GenerateOrgDomainValidationRequest>, options?: CallOptions & CallOptionsExt): Promise<GenerateOrgDomainValidationResponse>;
    validateOrgDomain(request: DeepPartial<ValidateOrgDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<ValidateOrgDomainResponse>;
    setPrimaryOrgDomain(request: DeepPartial<SetPrimaryOrgDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<SetPrimaryOrgDomainResponse>;
    listOrgMemberRoles(request: DeepPartial<ListOrgMemberRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgMemberRolesResponse>;
    listOrgMembers(request: DeepPartial<ListOrgMembersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgMembersResponse>;
    addOrgMember(request: DeepPartial<AddOrgMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrgMemberResponse>;
    updateOrgMember(request: DeepPartial<UpdateOrgMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgMemberResponse>;
    removeOrgMember(request: DeepPartial<RemoveOrgMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgMemberResponse>;
    getProjectByID(request: DeepPartial<GetProjectByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetProjectByIDResponse>;
    getGrantedProjectByID(request: DeepPartial<GetGrantedProjectByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetGrantedProjectByIDResponse>;
    listProjects(request: DeepPartial<ListProjectsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectsResponse>;
    listGrantedProjects(request: DeepPartial<ListGrantedProjectsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListGrantedProjectsResponse>;
    listGrantedProjectRoles(request: DeepPartial<ListGrantedProjectRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListGrantedProjectRolesResponse>;
    listProjectChanges(request: DeepPartial<ListProjectChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectChangesResponse>;
    addProject(request: DeepPartial<AddProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<AddProjectResponse>;
    updateProject(request: DeepPartial<UpdateProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectResponse>;
    deactivateProject(request: DeepPartial<DeactivateProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateProjectResponse>;
    reactivateProject(request: DeepPartial<ReactivateProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateProjectResponse>;
    removeProject(request: DeepPartial<RemoveProjectRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveProjectResponse>;
    listProjectRoles(request: DeepPartial<ListProjectRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectRolesResponse>;
    addProjectRole(request: DeepPartial<AddProjectRoleRequest>, options?: CallOptions & CallOptionsExt): Promise<AddProjectRoleResponse>;
    bulkAddProjectRoles(request: DeepPartial<BulkAddProjectRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkAddProjectRolesResponse>;
    updateProjectRole(request: DeepPartial<UpdateProjectRoleRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectRoleResponse>;
    removeProjectRole(request: DeepPartial<RemoveProjectRoleRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveProjectRoleResponse>;
    listProjectMemberRoles(request: DeepPartial<ListProjectMemberRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectMemberRolesResponse>;
    listProjectMembers(request: DeepPartial<ListProjectMembersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectMembersResponse>;
    addProjectMember(request: DeepPartial<AddProjectMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<AddProjectMemberResponse>;
    updateProjectMember(request: DeepPartial<UpdateProjectMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectMemberResponse>;
    removeProjectMember(request: DeepPartial<RemoveProjectMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveProjectMemberResponse>;
    getAppByID(request: DeepPartial<GetAppByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAppByIDResponse>;
    listApps(request: DeepPartial<ListAppsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAppsResponse>;
    listAppChanges(request: DeepPartial<ListAppChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAppChangesResponse>;
    addOIDCApp(request: DeepPartial<AddOIDCAppRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOIDCAppResponse>;
    addSAMLApp(request: DeepPartial<AddSAMLAppRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSAMLAppResponse>;
    addAPIApp(request: DeepPartial<AddAPIAppRequest>, options?: CallOptions & CallOptionsExt): Promise<AddAPIAppResponse>;
    updateApp(request: DeepPartial<UpdateAppRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAppResponse>;
    updateOIDCAppConfig(request: DeepPartial<UpdateOIDCAppConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOIDCAppConfigResponse>;
    updateSAMLAppConfig(request: DeepPartial<UpdateSAMLAppConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSAMLAppConfigResponse>;
    updateAPIAppConfig(request: DeepPartial<UpdateAPIAppConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAPIAppConfigResponse>;
    deactivateApp(request: DeepPartial<DeactivateAppRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateAppResponse>;
    reactivateApp(request: DeepPartial<ReactivateAppRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateAppResponse>;
    removeApp(request: DeepPartial<RemoveAppRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveAppResponse>;
    regenerateOIDCClientSecret(request: DeepPartial<RegenerateOIDCClientSecretRequest>, options?: CallOptions & CallOptionsExt): Promise<RegenerateOIDCClientSecretResponse>;
    regenerateAPIClientSecret(request: DeepPartial<RegenerateAPIClientSecretRequest>, options?: CallOptions & CallOptionsExt): Promise<RegenerateAPIClientSecretResponse>;
    getAppKey(request: DeepPartial<GetAppKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAppKeyResponse>;
    listAppKeys(request: DeepPartial<ListAppKeysRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAppKeysResponse>;
    addAppKey(request: DeepPartial<AddAppKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddAppKeyResponse>;
    removeAppKey(request: DeepPartial<RemoveAppKeyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveAppKeyResponse>;
    listProjectGrantChanges(request: DeepPartial<ListProjectGrantChangesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectGrantChangesResponse>;
    getProjectGrantByID(request: DeepPartial<GetProjectGrantByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetProjectGrantByIDResponse>;
    listProjectGrants(request: DeepPartial<ListProjectGrantsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectGrantsResponse>;
    listAllProjectGrants(request: DeepPartial<ListAllProjectGrantsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAllProjectGrantsResponse>;
    addProjectGrant(request: DeepPartial<AddProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<AddProjectGrantResponse>;
    updateProjectGrant(request: DeepPartial<UpdateProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectGrantResponse>;
    deactivateProjectGrant(request: DeepPartial<DeactivateProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateProjectGrantResponse>;
    reactivateProjectGrant(request: DeepPartial<ReactivateProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateProjectGrantResponse>;
    removeProjectGrant(request: DeepPartial<RemoveProjectGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveProjectGrantResponse>;
    listProjectGrantMemberRoles(request: DeepPartial<ListProjectGrantMemberRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectGrantMemberRolesResponse>;
    listProjectGrantMembers(request: DeepPartial<ListProjectGrantMembersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProjectGrantMembersResponse>;
    addProjectGrantMember(request: DeepPartial<AddProjectGrantMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<AddProjectGrantMemberResponse>;
    updateProjectGrantMember(request: DeepPartial<UpdateProjectGrantMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateProjectGrantMemberResponse>;
    removeProjectGrantMember(request: DeepPartial<RemoveProjectGrantMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveProjectGrantMemberResponse>;
    getUserGrantByID(request: DeepPartial<GetUserGrantByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserGrantByIDResponse>;
    listUserGrants(request: DeepPartial<ListUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<ListUserGrantResponse>;
    addUserGrant(request: DeepPartial<AddUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<AddUserGrantResponse>;
    updateUserGrant(request: DeepPartial<UpdateUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateUserGrantResponse>;
    deactivateUserGrant(request: DeepPartial<DeactivateUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateUserGrantResponse>;
    reactivateUserGrant(request: DeepPartial<ReactivateUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateUserGrantResponse>;
    removeUserGrant(request: DeepPartial<RemoveUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveUserGrantResponse>;
    bulkRemoveUserGrant(request: DeepPartial<BulkRemoveUserGrantRequest>, options?: CallOptions & CallOptionsExt): Promise<BulkRemoveUserGrantResponse>;
    getOrgIAMPolicy(request: DeepPartial<GetOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgIAMPolicyResponse>;
    getDomainPolicy(request: DeepPartial<GetDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDomainPolicyResponse>;
    getLoginPolicy(request: DeepPartial<GetLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLoginPolicyResponse>;
    getDefaultLoginPolicy(request: DeepPartial<GetDefaultLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLoginPolicyResponse>;
    addCustomLoginPolicy(request: DeepPartial<AddCustomLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomLoginPolicyResponse>;
    updateCustomLoginPolicy(request: DeepPartial<UpdateCustomLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomLoginPolicyResponse>;
    resetLoginPolicyToDefault(request: DeepPartial<ResetLoginPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetLoginPolicyToDefaultResponse>;
    listLoginPolicyIDPs(request: DeepPartial<ListLoginPolicyIDPsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListLoginPolicyIDPsResponse>;
    addIDPToLoginPolicy(request: DeepPartial<AddIDPToLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddIDPToLoginPolicyResponse>;
    removeIDPFromLoginPolicy(request: DeepPartial<RemoveIDPFromLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveIDPFromLoginPolicyResponse>;
    listLoginPolicySecondFactors(request: DeepPartial<ListLoginPolicySecondFactorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListLoginPolicySecondFactorsResponse>;
    addSecondFactorToLoginPolicy(request: DeepPartial<AddSecondFactorToLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSecondFactorToLoginPolicyResponse>;
    removeSecondFactorFromLoginPolicy(request: DeepPartial<RemoveSecondFactorFromLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveSecondFactorFromLoginPolicyResponse>;
    listLoginPolicyMultiFactors(request: DeepPartial<ListLoginPolicyMultiFactorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListLoginPolicyMultiFactorsResponse>;
    addMultiFactorToLoginPolicy(request: DeepPartial<AddMultiFactorToLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddMultiFactorToLoginPolicyResponse>;
    removeMultiFactorFromLoginPolicy(request: DeepPartial<RemoveMultiFactorFromLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveMultiFactorFromLoginPolicyResponse>;
    getPasswordComplexityPolicy(request: DeepPartial<GetPasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPasswordComplexityPolicyResponse>;
    getDefaultPasswordComplexityPolicy(request: DeepPartial<GetDefaultPasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordComplexityPolicyResponse>;
    addCustomPasswordComplexityPolicy(request: DeepPartial<AddCustomPasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomPasswordComplexityPolicyResponse>;
    updateCustomPasswordComplexityPolicy(request: DeepPartial<UpdateCustomPasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomPasswordComplexityPolicyResponse>;
    resetPasswordComplexityPolicyToDefault(request: DeepPartial<ResetPasswordComplexityPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetPasswordComplexityPolicyToDefaultResponse>;
    getPasswordAgePolicy(request: DeepPartial<GetPasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPasswordAgePolicyResponse>;
    getDefaultPasswordAgePolicy(request: DeepPartial<GetDefaultPasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordAgePolicyResponse>;
    addCustomPasswordAgePolicy(request: DeepPartial<AddCustomPasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomPasswordAgePolicyResponse>;
    updateCustomPasswordAgePolicy(request: DeepPartial<UpdateCustomPasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomPasswordAgePolicyResponse>;
    resetPasswordAgePolicyToDefault(request: DeepPartial<ResetPasswordAgePolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetPasswordAgePolicyToDefaultResponse>;
    getLockoutPolicy(request: DeepPartial<GetLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLockoutPolicyResponse>;
    getDefaultLockoutPolicy(request: DeepPartial<GetDefaultLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLockoutPolicyResponse>;
    addCustomLockoutPolicy(request: DeepPartial<AddCustomLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomLockoutPolicyResponse>;
    updateCustomLockoutPolicy(request: DeepPartial<UpdateCustomLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomLockoutPolicyResponse>;
    resetLockoutPolicyToDefault(request: DeepPartial<ResetLockoutPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetLockoutPolicyToDefaultResponse>;
    getPrivacyPolicy(request: DeepPartial<GetPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPrivacyPolicyResponse>;
    getDefaultPrivacyPolicy(request: DeepPartial<GetDefaultPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPrivacyPolicyResponse>;
    addCustomPrivacyPolicy(request: DeepPartial<AddCustomPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomPrivacyPolicyResponse>;
    updateCustomPrivacyPolicy(request: DeepPartial<UpdateCustomPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomPrivacyPolicyResponse>;
    resetPrivacyPolicyToDefault(request: DeepPartial<ResetPrivacyPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetPrivacyPolicyToDefaultResponse>;
    getNotificationPolicy(request: DeepPartial<GetNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNotificationPolicyResponse>;
    getDefaultNotificationPolicy(request: DeepPartial<GetDefaultNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultNotificationPolicyResponse>;
    addCustomNotificationPolicy(request: DeepPartial<AddCustomNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomNotificationPolicyResponse>;
    updateCustomNotificationPolicy(request: DeepPartial<UpdateCustomNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomNotificationPolicyResponse>;
    resetNotificationPolicyToDefault(request: DeepPartial<ResetNotificationPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetNotificationPolicyToDefaultResponse>;
    getLabelPolicy(request: DeepPartial<GetLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLabelPolicyResponse>;
    getPreviewLabelPolicy(request: DeepPartial<GetPreviewLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPreviewLabelPolicyResponse>;
    getDefaultLabelPolicy(request: DeepPartial<GetDefaultLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLabelPolicyResponse>;
    addCustomLabelPolicy(request: DeepPartial<AddCustomLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomLabelPolicyResponse>;
    updateCustomLabelPolicy(request: DeepPartial<UpdateCustomLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomLabelPolicyResponse>;
    activateCustomLabelPolicy(request: DeepPartial<ActivateCustomLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateCustomLabelPolicyResponse>;
    removeCustomLabelPolicyLogo(request: DeepPartial<RemoveCustomLabelPolicyLogoRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveCustomLabelPolicyLogoResponse>;
    removeCustomLabelPolicyLogoDark(request: DeepPartial<RemoveCustomLabelPolicyLogoDarkRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveCustomLabelPolicyLogoDarkResponse>;
    removeCustomLabelPolicyIcon(request: DeepPartial<RemoveCustomLabelPolicyIconRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveCustomLabelPolicyIconResponse>;
    removeCustomLabelPolicyIconDark(request: DeepPartial<RemoveCustomLabelPolicyIconDarkRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveCustomLabelPolicyIconDarkResponse>;
    removeCustomLabelPolicyFont(request: DeepPartial<RemoveCustomLabelPolicyFontRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveCustomLabelPolicyFontResponse>;
    resetLabelPolicyToDefault(request: DeepPartial<ResetLabelPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetLabelPolicyToDefaultResponse>;
    getCustomInitMessageText(request: DeepPartial<GetCustomInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomInitMessageTextResponse>;
    getDefaultInitMessageText(request: DeepPartial<GetDefaultInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultInitMessageTextResponse>;
    setCustomInitMessageText(request: DeepPartial<SetCustomInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomInitMessageTextResponse>;
    resetCustomInitMessageTextToDefault(request: DeepPartial<ResetCustomInitMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomInitMessageTextToDefaultResponse>;
    getCustomPasswordResetMessageText(request: DeepPartial<GetCustomPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordResetMessageTextResponse>;
    getDefaultPasswordResetMessageText(request: DeepPartial<GetDefaultPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordResetMessageTextResponse>;
    setCustomPasswordResetMessageText(request: DeepPartial<SetCustomPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomPasswordResetMessageTextResponse>;
    resetCustomPasswordResetMessageTextToDefault(request: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordResetMessageTextToDefaultResponse>;
    getCustomVerifyEmailMessageText(request: DeepPartial<GetCustomVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyEmailMessageTextResponse>;
    getDefaultVerifyEmailMessageText(request: DeepPartial<GetDefaultVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyEmailMessageTextResponse>;
    setCustomVerifyEmailMessageText(request: DeepPartial<SetCustomVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomVerifyEmailMessageTextResponse>;
    resetCustomVerifyEmailMessageTextToDefault(request: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyEmailMessageTextToDefaultResponse>;
    getCustomVerifyPhoneMessageText(request: DeepPartial<GetCustomVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyPhoneMessageTextResponse>;
    getDefaultVerifyPhoneMessageText(request: DeepPartial<GetDefaultVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyPhoneMessageTextResponse>;
    setCustomVerifyPhoneMessageText(request: DeepPartial<SetCustomVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomVerifyPhoneMessageTextResponse>;
    resetCustomVerifyPhoneMessageTextToDefault(request: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyPhoneMessageTextToDefaultResponse>;
    getCustomVerifySMSOTPMessageText(request: DeepPartial<GetCustomVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifySMSOTPMessageTextResponse>;
    getDefaultVerifySMSOTPMessageText(request: DeepPartial<GetDefaultVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifySMSOTPMessageTextResponse>;
    setCustomVerifySMSOTPMessageText(request: DeepPartial<SetCustomVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomVerifySMSOTPMessageTextResponse>;
    resetCustomVerifySMSOTPMessageTextToDefault(request: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>;
    getCustomVerifyEmailOTPMessageText(request: DeepPartial<GetCustomVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyEmailOTPMessageTextResponse>;
    getDefaultVerifyEmailOTPMessageText(request: DeepPartial<GetDefaultVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyEmailOTPMessageTextResponse>;
    setCustomVerifyEmailOTPMessageText(request: DeepPartial<SetCustomVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomVerifyEmailOTPMessageTextResponse>;
    resetCustomVerifyEmailOTPMessageTextToDefault(request: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>;
    getCustomDomainClaimedMessageText(request: DeepPartial<GetCustomDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomDomainClaimedMessageTextResponse>;
    getDefaultDomainClaimedMessageText(request: DeepPartial<GetDefaultDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultDomainClaimedMessageTextResponse>;
    setCustomDomainClaimedMessageCustomText(request: DeepPartial<SetCustomDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomDomainClaimedMessageTextResponse>;
    resetCustomDomainClaimedMessageTextToDefault(request: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomDomainClaimedMessageTextToDefaultResponse>;
    getCustomPasswordlessRegistrationMessageText(request: DeepPartial<GetCustomPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordlessRegistrationMessageTextResponse>;
    getDefaultPasswordlessRegistrationMessageText(request: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordlessRegistrationMessageTextResponse>;
    setCustomPasswordlessRegistrationMessageCustomText(request: DeepPartial<SetCustomPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomPasswordlessRegistrationMessageTextResponse>;
    resetCustomPasswordlessRegistrationMessageTextToDefault(request: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>;
    getCustomPasswordChangeMessageText(request: DeepPartial<GetCustomPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordChangeMessageTextResponse>;
    getDefaultPasswordChangeMessageText(request: DeepPartial<GetDefaultPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordChangeMessageTextResponse>;
    setCustomPasswordChangeMessageCustomText(request: DeepPartial<SetCustomPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomPasswordChangeMessageTextResponse>;
    resetCustomPasswordChangeMessageTextToDefault(request: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordChangeMessageTextToDefaultResponse>;
    getCustomInviteUserMessageText(request: DeepPartial<GetCustomInviteUserMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomInviteUserMessageTextResponse>;
    getDefaultInviteUserMessageText(request: DeepPartial<GetDefaultInviteUserMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultInviteUserMessageTextResponse>;
    setCustomInviteUserMessageCustomText(request: DeepPartial<SetCustomInviteUserMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomInviteUserMessageTextResponse>;
    resetCustomInviteUserMessageTextToDefault(request: DeepPartial<ResetCustomInviteUserMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomInviteUserMessageTextToDefaultResponse>;
    getCustomLoginTexts(request: DeepPartial<GetCustomLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomLoginTextsResponse>;
    getDefaultLoginTexts(request: DeepPartial<GetDefaultLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLoginTextsResponse>;
    setCustomLoginText(request: DeepPartial<SetCustomLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomLoginTextsResponse>;
    resetCustomLoginTextToDefault(request: DeepPartial<ResetCustomLoginTextsToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomLoginTextsToDefaultResponse>;
    getOrgIDPByID(request: DeepPartial<GetOrgIDPByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgIDPByIDResponse>;
    listOrgIDPs(request: DeepPartial<ListOrgIDPsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgIDPsResponse>;
    addOrgOIDCIDP(request: DeepPartial<AddOrgOIDCIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrgOIDCIDPResponse>;
    addOrgJWTIDP(request: DeepPartial<AddOrgJWTIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOrgJWTIDPResponse>;
    deactivateOrgIDP(request: DeepPartial<DeactivateOrgIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateOrgIDPResponse>;
    reactivateOrgIDP(request: DeepPartial<ReactivateOrgIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateOrgIDPResponse>;
    removeOrgIDP(request: DeepPartial<RemoveOrgIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgIDPResponse>;
    updateOrgIDP(request: DeepPartial<UpdateOrgIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgIDPResponse>;
    updateOrgIDPOIDCConfig(request: DeepPartial<UpdateOrgIDPOIDCConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgIDPOIDCConfigResponse>;
    updateOrgIDPJWTConfig(request: DeepPartial<UpdateOrgIDPJWTConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgIDPJWTConfigResponse>;
    listProviders(request: DeepPartial<ListProvidersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListProvidersResponse>;
    getProviderByID(request: DeepPartial<GetProviderByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetProviderByIDResponse>;
    addGenericOAuthProvider(request: DeepPartial<AddGenericOAuthProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGenericOAuthProviderResponse>;
    updateGenericOAuthProvider(request: DeepPartial<UpdateGenericOAuthProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGenericOAuthProviderResponse>;
    addGenericOIDCProvider(request: DeepPartial<AddGenericOIDCProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGenericOIDCProviderResponse>;
    updateGenericOIDCProvider(request: DeepPartial<UpdateGenericOIDCProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGenericOIDCProviderResponse>;
    migrateGenericOIDCProvider(request: DeepPartial<MigrateGenericOIDCProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<MigrateGenericOIDCProviderResponse>;
    addJWTProvider(request: DeepPartial<AddJWTProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddJWTProviderResponse>;
    updateJWTProvider(request: DeepPartial<UpdateJWTProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateJWTProviderResponse>;
    addAzureADProvider(request: DeepPartial<AddAzureADProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddAzureADProviderResponse>;
    updateAzureADProvider(request: DeepPartial<UpdateAzureADProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAzureADProviderResponse>;
    addGitHubProvider(request: DeepPartial<AddGitHubProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitHubProviderResponse>;
    updateGitHubProvider(request: DeepPartial<UpdateGitHubProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitHubProviderResponse>;
    addGitHubEnterpriseServerProvider(request: DeepPartial<AddGitHubEnterpriseServerProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitHubEnterpriseServerProviderResponse>;
    updateGitHubEnterpriseServerProvider(request: DeepPartial<UpdateGitHubEnterpriseServerProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitHubEnterpriseServerProviderResponse>;
    addGitLabProvider(request: DeepPartial<AddGitLabProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitLabProviderResponse>;
    updateGitLabProvider(request: DeepPartial<UpdateGitLabProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitLabProviderResponse>;
    addGitLabSelfHostedProvider(request: DeepPartial<AddGitLabSelfHostedProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGitLabSelfHostedProviderResponse>;
    updateGitLabSelfHostedProvider(request: DeepPartial<UpdateGitLabSelfHostedProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGitLabSelfHostedProviderResponse>;
    addGoogleProvider(request: DeepPartial<AddGoogleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddGoogleProviderResponse>;
    updateGoogleProvider(request: DeepPartial<UpdateGoogleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateGoogleProviderResponse>;
    addLDAPProvider(request: DeepPartial<AddLDAPProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddLDAPProviderResponse>;
    updateLDAPProvider(request: DeepPartial<UpdateLDAPProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateLDAPProviderResponse>;
    addAppleProvider(request: DeepPartial<AddAppleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddAppleProviderResponse>;
    updateAppleProvider(request: DeepPartial<UpdateAppleProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateAppleProviderResponse>;
    addSAMLProvider(request: DeepPartial<AddSAMLProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSAMLProviderResponse>;
    updateSAMLProvider(request: DeepPartial<UpdateSAMLProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSAMLProviderResponse>;
    regenerateSAMLProviderCertificate(request: DeepPartial<RegenerateSAMLProviderCertificateRequest>, options?: CallOptions & CallOptionsExt): Promise<RegenerateSAMLProviderCertificateResponse>;
    deleteProvider(request: DeepPartial<DeleteProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteProviderResponse>;
    listActions(request: DeepPartial<ListActionsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListActionsResponse>;
    getAction(request: DeepPartial<GetActionRequest>, options?: CallOptions & CallOptionsExt): Promise<GetActionResponse>;
    createAction(request: DeepPartial<CreateActionRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateActionResponse>;
    updateAction(request: DeepPartial<UpdateActionRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateActionResponse>;
    deactivateAction(request: DeepPartial<DeactivateActionRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateActionResponse>;
    reactivateAction(request: DeepPartial<ReactivateActionRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateActionResponse>;
    deleteAction(request: DeepPartial<DeleteActionRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteActionResponse>;
    listFlowTypes(request: DeepPartial<ListFlowTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFlowTypesResponse>;
    listFlowTriggerTypes(request: DeepPartial<ListFlowTriggerTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFlowTriggerTypesResponse>;
    getFlow(request: DeepPartial<GetFlowRequest>, options?: CallOptions & CallOptionsExt): Promise<GetFlowResponse>;
    clearFlow(request: DeepPartial<ClearFlowRequest>, options?: CallOptions & CallOptionsExt): Promise<ClearFlowResponse>;
    setTriggerActions(request: DeepPartial<SetTriggerActionsRequest>, options?: CallOptions & CallOptionsExt): Promise<SetTriggerActionsResponse>;
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
