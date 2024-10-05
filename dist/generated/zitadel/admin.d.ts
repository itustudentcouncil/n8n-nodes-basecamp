/// <reference types="node" />
/// <reference types="node" />
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Duration } from "../google/protobuf/duration.js";
import { AggregateType, Event, EventType } from "./event.js";
import { AzureADTenant, IDP, IDPFieldName, IDPIDQuery, IDPLoginPolicyLink, IDPNameQuery, IDPStylingType, IDPUserLink, LDAPAttributes, OIDCMappingField, Options, Provider, SAMLBinding, SAMLNameIDFormat } from "./idp.js";
import { Domain, DomainFieldName, DomainSearchQuery, InstanceDetail, TrustedDomain, TrustedDomainSearchQuery } from "./instance.js";
import { AddCustomLabelPolicyRequest, AddCustomLockoutPolicyRequest, AddCustomLoginPolicyRequest, AddCustomPasswordComplexityPolicyRequest, AddCustomPrivacyPolicyRequest, AddOrgMemberRequest, AddOrgRequest, AddProjectGrantMemberRequest, AddProjectMemberRequest, AddProjectRoleRequest, AddUserGrantRequest, SetCustomDomainClaimedMessageTextRequest, SetCustomInitMessageTextRequest, SetCustomInviteUserMessageTextRequest, SetCustomLoginTextsRequest as SetCustomLoginTextsRequest2, SetCustomPasswordlessRegistrationMessageTextRequest, SetCustomPasswordResetMessageTextRequest, SetCustomVerifyEmailMessageTextRequest, SetCustomVerifyEmailOTPMessageTextRequest, SetCustomVerifyPhoneMessageTextRequest, SetCustomVerifySMSOTPMessageTextRequest, SetTriggerActionsRequest, SetUserMetadataRequest } from "./management.js";
import { Member, SearchQuery } from "./member.js";
import { Milestone, MilestoneFieldName, MilestoneQuery } from "./milestone/v1/milestone.js";
import { ListDetails, ListQuery, ObjectDetails } from "./object.js";
import { Domain as Domain3, Org, OrgFieldName, OrgQuery } from "./org.js";
import { DomainPolicy, LabelPolicy, LockoutPolicy, LoginPolicy, MultiFactorType, NotificationPolicy, OrgIAMPolicy, PasswordAgePolicy, PasswordComplexityPolicy, PasswordlessType, PrivacyPolicy, SecondFactorType, ThemeMode } from "./policy.js";
import { DebugNotificationProvider, EmailProvider, OIDCSettings, SecretGenerator, SecretGeneratorQuery, SecretGeneratorType, SecurityPolicy, SMSProvider, SMTPConfig } from "./settings.js";
import { EmailVerificationDoneScreenText, EmailVerificationScreenText, ExternalRegistrationUserOverviewScreenText, ExternalUserNotFoundScreenText, FooterText, InitializeUserDoneScreenText, InitializeUserScreenText, InitMFADoneScreenText, InitMFAOTPScreenText, InitMFAPromptScreenText, InitMFAU2FScreenText, InitPasswordDoneScreenText, InitPasswordScreenText, LinkingUserDoneScreenText, LinkingUserPromptScreenText, LoginCustomText, LoginScreenText, LogoutDoneScreenText, MessageCustomText, MFAProvidersText, PasswordChangeDoneScreenText, PasswordChangeScreenText, PasswordlessPromptScreenText, PasswordlessRegistrationDoneScreenText, PasswordlessRegistrationScreenText, PasswordlessScreenText, PasswordResetDoneScreenText, PasswordScreenText, RegistrationOptionScreenText, RegistrationOrgScreenText, RegistrationUserScreenText, SelectAccountScreenText, SuccessLoginScreenText, UsernameChangeDoneScreenText, UsernameChangeScreenText, VerifyMFAOTPScreenText, VerifyMFAU2FScreenText } from "./text.js";
import { Gender } from "./user.js";
import { DataAction, DataAPIApplication, DataAppKey, DataHumanUser, DataJWTIDP, DataMachineKey, DataMachineUser, DataOIDCApplication, DataOIDCIDP, DataProject, DataProjectGrant, ImportDataOrg as ImportDataOrg1 } from "./v1.js";
export declare const protobufPackage = "zitadel.admin.v1";
export interface HealthzRequest {
}
export interface HealthzResponse {
}
export interface GetSupportedLanguagesRequest {
}
export interface GetSupportedLanguagesResponse {
    languages: string[];
}
export interface GetAllowedLanguagesRequest {
}
export interface GetAllowedLanguagesResponse {
    languages: string[];
}
export interface SetDefaultLanguageRequest {
    language: string;
}
export interface SetDefaultLanguageResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultLanguageRequest {
}
export interface GetDefaultLanguageResponse {
    language: string;
}
export interface SetDefaultOrgRequest {
    orgId: string;
}
export interface SetDefaultOrgResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultOrgRequest {
}
export interface GetDefaultOrgResponse {
    org: Org | undefined;
}
export interface GetMyInstanceRequest {
}
export interface GetMyInstanceResponse {
    instance: InstanceDetail | undefined;
}
export interface ListInstanceDomainsRequest {
    query: ListQuery | undefined;
    sortingColumn: DomainFieldName;
    queries: DomainSearchQuery[];
}
export interface ListInstanceDomainsResponse {
    details: ListDetails | undefined;
    sortingColumn: DomainFieldName;
    result: Domain[];
}
export interface ListInstanceTrustedDomainsRequest {
    query: ListQuery | undefined;
    sortingColumn: DomainFieldName;
    queries: TrustedDomainSearchQuery[];
}
export interface ListInstanceTrustedDomainsResponse {
    details: ListDetails | undefined;
    sortingColumn: DomainFieldName;
    result: TrustedDomain[];
}
export interface AddInstanceTrustedDomainRequest {
    domain: string;
}
export interface AddInstanceTrustedDomainResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveInstanceTrustedDomainRequest {
    domain: string;
}
export interface RemoveInstanceTrustedDomainResponse {
    details: ObjectDetails | undefined;
}
export interface ListSecretGeneratorsRequest {
    query: ListQuery | undefined;
    queries: SecretGeneratorQuery[];
}
export interface ListSecretGeneratorsResponse {
    details: ListDetails | undefined;
    result: SecretGenerator[];
}
export interface GetSecretGeneratorRequest {
    generatorType: SecretGeneratorType;
}
export interface GetSecretGeneratorResponse {
    secretGenerator: SecretGenerator | undefined;
}
export interface UpdateSecretGeneratorRequest {
    generatorType: SecretGeneratorType;
    length: number;
    expiry: Duration | undefined;
    includeLowerLetters: boolean;
    includeUpperLetters: boolean;
    includeDigits: boolean;
    includeSymbols: boolean;
}
export interface UpdateSecretGeneratorResponse {
    details: ObjectDetails | undefined;
}
export interface GetSMTPConfigRequest {
}
export interface GetSMTPConfigResponse {
    smtpConfig: SMTPConfig | undefined;
}
export interface GetSMTPConfigByIdRequest {
    id: string;
}
export interface GetSMTPConfigByIdResponse {
    smtpConfig: SMTPConfig | undefined;
}
export interface ListSMTPConfigsRequest {
    query: ListQuery | undefined;
}
export interface ListSMTPConfigsResponse {
    details: ListDetails | undefined;
    result: SMTPConfig[];
}
export interface AddSMTPConfigRequest {
    senderAddress: string;
    senderName: string;
    tls: boolean;
    host: string;
    user: string;
    password: string;
    replyToAddress: string;
    description: string;
}
export interface AddSMTPConfigResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateSMTPConfigRequest {
    senderAddress: string;
    senderName: string;
    tls: boolean;
    host: string;
    user: string;
    replyToAddress: string;
    password: string;
    description: string;
    id: string;
}
export interface UpdateSMTPConfigResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateSMTPConfigPasswordRequest {
    password: string;
    id: string;
}
export interface UpdateSMTPConfigPasswordResponse {
    details: ObjectDetails | undefined;
}
export interface ActivateSMTPConfigRequest {
    id: string;
}
export interface ActivateSMTPConfigResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateSMTPConfigRequest {
    id: string;
}
export interface DeactivateSMTPConfigResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveSMTPConfigRequest {
    id: string;
}
export interface RemoveSMTPConfigResponse {
    details: ObjectDetails | undefined;
}
export interface TestSMTPConfigByIdRequest {
    id: string;
    receiverAddress: string;
}
export interface TestSMTPConfigByIdResponse {
}
export interface TestSMTPConfigRequest {
    senderAddress: string;
    senderName: string;
    tls: boolean;
    host: string;
    user: string;
    password: string;
    receiverAddress: string;
    id: string;
}
export interface TestSMTPConfigResponse {
}
export interface GetEmailProviderRequest {
}
export interface GetEmailProviderResponse {
    config: EmailProvider | undefined;
}
export interface GetEmailProviderByIdRequest {
    id: string;
}
export interface GetEmailProviderByIdResponse {
    config: EmailProvider | undefined;
}
export interface ListEmailProvidersRequest {
    query: ListQuery | undefined;
}
export interface ListEmailProvidersResponse {
    details: ListDetails | undefined;
    result: EmailProvider[];
}
export interface AddEmailProviderSMTPRequest {
    senderAddress: string;
    senderName: string;
    tls: boolean;
    host: string;
    user: string;
    password: string;
    replyToAddress: string;
    description: string;
}
export interface AddEmailProviderSMTPResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateEmailProviderSMTPRequest {
    senderAddress: string;
    senderName: string;
    tls: boolean;
    host: string;
    user: string;
    replyToAddress: string;
    password: string;
    description: string;
    id: string;
}
export interface UpdateEmailProviderSMTPResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateEmailProviderSMTPPasswordRequest {
    password: string;
    id: string;
}
export interface UpdateEmailProviderSMTPPasswordResponse {
    details: ObjectDetails | undefined;
}
export interface AddEmailProviderHTTPRequest {
    endpoint: string;
    description: string;
}
export interface AddEmailProviderHTTPResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateEmailProviderHTTPRequest {
    id: string;
    endpoint: string;
    description: string;
}
export interface UpdateEmailProviderHTTPResponse {
    details: ObjectDetails | undefined;
}
export interface ActivateEmailProviderRequest {
    id: string;
}
export interface ActivateEmailProviderResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateEmailProviderRequest {
    id: string;
}
export interface DeactivateEmailProviderResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveEmailProviderRequest {
    id: string;
}
export interface RemoveEmailProviderResponse {
    details: ObjectDetails | undefined;
}
export interface TestEmailProviderSMTPByIdRequest {
    id: string;
    receiverAddress: string;
}
export interface TestEmailProviderSMTPByIdResponse {
}
export interface TestEmailProviderSMTPRequest {
    senderAddress: string;
    senderName: string;
    tls: boolean;
    host: string;
    user: string;
    password: string;
    receiverAddress: string;
    id: string;
}
export interface TestEmailProviderSMTPResponse {
}
export interface ListSMSProvidersRequest {
    query: ListQuery | undefined;
}
export interface ListSMSProvidersResponse {
    details: ListDetails | undefined;
    result: SMSProvider[];
}
export interface GetSMSProviderRequest {
    id: string;
}
export interface GetSMSProviderResponse {
    config: SMSProvider | undefined;
}
export interface AddSMSProviderTwilioRequest {
    sid: string;
    token: string;
    senderNumber: string;
    description: string;
    verifyServiceSid: string;
}
export interface AddSMSProviderTwilioResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateSMSProviderTwilioRequest {
    id: string;
    sid: string;
    senderNumber: string;
    description: string;
    verifyServiceSid: string;
}
export interface UpdateSMSProviderTwilioResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateSMSProviderTwilioTokenRequest {
    id: string;
    token: string;
}
export interface UpdateSMSProviderTwilioTokenResponse {
    details: ObjectDetails | undefined;
}
export interface AddSMSProviderHTTPRequest {
    endpoint: string;
    description: string;
}
export interface AddSMSProviderHTTPResponse {
    details: ObjectDetails | undefined;
    id: string;
}
export interface UpdateSMSProviderHTTPRequest {
    id: string;
    endpoint: string;
    description: string;
}
export interface UpdateSMSProviderHTTPResponse {
    details: ObjectDetails | undefined;
}
export interface ActivateSMSProviderRequest {
    id: string;
}
export interface ActivateSMSProviderResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateSMSProviderRequest {
    id: string;
}
export interface DeactivateSMSProviderResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveSMSProviderRequest {
    id: string;
}
export interface RemoveSMSProviderResponse {
    details: ObjectDetails | undefined;
}
export interface GetFileSystemNotificationProviderRequest {
}
export interface GetFileSystemNotificationProviderResponse {
    provider: DebugNotificationProvider | undefined;
}
export interface GetLogNotificationProviderRequest {
}
export interface GetLogNotificationProviderResponse {
    provider: DebugNotificationProvider | undefined;
}
export interface GetOIDCSettingsRequest {
}
export interface GetOIDCSettingsResponse {
    settings: OIDCSettings | undefined;
}
export interface AddOIDCSettingsRequest {
    accessTokenLifetime: Duration | undefined;
    idTokenLifetime: Duration | undefined;
    refreshTokenIdleExpiration: Duration | undefined;
    refreshTokenExpiration: Duration | undefined;
}
export interface AddOIDCSettingsResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateOIDCSettingsRequest {
    accessTokenLifetime: Duration | undefined;
    idTokenLifetime: Duration | undefined;
    refreshTokenIdleExpiration: Duration | undefined;
    refreshTokenExpiration: Duration | undefined;
}
export interface UpdateOIDCSettingsResponse {
    details: ObjectDetails | undefined;
}
export interface GetSecurityPolicyRequest {
}
export interface GetSecurityPolicyResponse {
    policy: SecurityPolicy | undefined;
}
export interface SetSecurityPolicyRequest {
    enableIframeEmbedding: boolean;
    allowedOrigins: string[];
    enableImpersonation: boolean;
}
export interface SetSecurityPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface IsOrgUniqueRequest {
    name: string;
    domain: string;
}
export interface IsOrgUniqueResponse {
    isUnique: boolean;
}
export interface GetOrgByIDRequest {
    id: string;
}
export interface GetOrgByIDResponse {
    org: Org | undefined;
}
export interface ListOrgsRequest {
    query: ListQuery | undefined;
    sortingColumn: OrgFieldName;
    queries: OrgQuery[];
}
export interface ListOrgsResponse {
    details: ListDetails | undefined;
    sortingColumn: OrgFieldName;
    result: Org[];
}
export interface SetUpOrgRequest {
    org: SetUpOrgRequest_Org | undefined;
    human?: SetUpOrgRequest_Human | undefined;
    roles: string[];
}
export interface SetUpOrgRequest_Org {
    name: string;
    domain: string;
}
export interface SetUpOrgRequest_Human {
    userName: string;
    profile: SetUpOrgRequest_Human_Profile | undefined;
    email: SetUpOrgRequest_Human_Email | undefined;
    phone: SetUpOrgRequest_Human_Phone | undefined;
    password: string;
}
export interface SetUpOrgRequest_Human_Profile {
    firstName: string;
    lastName: string;
    nickName: string;
    displayName: string;
    preferredLanguage: string;
    gender: Gender;
}
export interface SetUpOrgRequest_Human_Email {
    email: string;
    isEmailVerified: boolean;
}
export interface SetUpOrgRequest_Human_Phone {
    phone: string;
    isPhoneVerified: boolean;
}
export interface SetUpOrgResponse {
    details: ObjectDetails | undefined;
    orgId: string;
    userId: string;
}
export interface RemoveOrgRequest {
    orgId: string;
}
export interface RemoveOrgResponse {
    details: ObjectDetails | undefined;
}
export interface GetIDPByIDRequest {
    id: string;
}
export interface GetIDPByIDResponse {
    idp: IDP | undefined;
}
export interface ListIDPsRequest {
    query: ListQuery | undefined;
    sortingColumn: IDPFieldName;
    queries: IDPQuery[];
}
export interface IDPQuery {
    idpIdQuery?: IDPIDQuery | undefined;
    idpNameQuery?: IDPNameQuery | undefined;
}
export interface ListIDPsResponse {
    details: ListDetails | undefined;
    sortingColumn: IDPFieldName;
    result: IDP[];
}
export interface AddOIDCIDPRequest {
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
export interface AddOIDCIDPResponse {
    details: ObjectDetails | undefined;
    idpId: string;
}
export interface AddJWTIDPRequest {
    name: string;
    stylingType: IDPStylingType;
    jwtEndpoint: string;
    issuer: string;
    keysEndpoint: string;
    headerName: string;
    autoRegister: boolean;
}
export interface AddJWTIDPResponse {
    details: ObjectDetails | undefined;
    idpId: string;
}
export interface UpdateIDPRequest {
    idpId: string;
    name: string;
    stylingType: IDPStylingType;
    autoRegister: boolean;
}
export interface UpdateIDPResponse {
    details: ObjectDetails | undefined;
}
export interface DeactivateIDPRequest {
    idpId: string;
}
export interface DeactivateIDPResponse {
    details: ObjectDetails | undefined;
}
export interface ReactivateIDPRequest {
    idpId: string;
}
export interface ReactivateIDPResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveIDPRequest {
    idpId: string;
}
export interface RemoveIDPResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateIDPOIDCConfigRequest {
    idpId: string;
    issuer: string;
    clientId: string;
    clientSecret: string;
    scopes: string[];
    displayNameMapping: OIDCMappingField;
    usernameMapping: OIDCMappingField;
}
export interface UpdateIDPOIDCConfigResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateIDPJWTConfigRequest {
    idpId: string;
    jwtEndpoint: string;
    issuer: string;
    keysEndpoint: string;
    headerName: string;
}
export interface UpdateIDPJWTConfigResponse {
    details: ObjectDetails | undefined;
}
export interface ListProvidersRequest {
    query: ListQuery | undefined;
    queries: ProviderQuery[];
}
export interface ProviderQuery {
    idpIdQuery?: IDPIDQuery | undefined;
    idpNameQuery?: IDPNameQuery | undefined;
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
export interface DeleteProviderRequest {
    id: string;
}
export interface DeleteProviderResponse {
    details: ObjectDetails | undefined;
}
export interface GetOrgIAMPolicyRequest {
}
export interface GetOrgIAMPolicyResponse {
    policy: OrgIAMPolicy | undefined;
}
export interface UpdateOrgIAMPolicyRequest {
    userLoginMustBeDomain: boolean;
}
export interface UpdateOrgIAMPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomOrgIAMPolicyRequest {
    orgId: string;
}
export interface GetCustomOrgIAMPolicyResponse {
    policy: OrgIAMPolicy | undefined;
    isDefault: boolean;
}
export interface AddCustomOrgIAMPolicyRequest {
    orgId: string;
    userLoginMustBeDomain: boolean;
}
export interface AddCustomOrgIAMPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomOrgIAMPolicyRequest {
    orgId: string;
    userLoginMustBeDomain: boolean;
}
export interface UpdateCustomOrgIAMPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomOrgIAMPolicyToDefaultRequest {
    orgId: string;
}
export interface ResetCustomOrgIAMPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDomainPolicyRequest {
}
export interface GetDomainPolicyResponse {
    policy: DomainPolicy | undefined;
}
export interface UpdateDomainPolicyRequest {
    userLoginMustBeDomain: boolean;
    validateOrgDomains: boolean;
    smtpSenderAddressMatchesInstanceDomain: boolean;
}
export interface UpdateDomainPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetCustomDomainPolicyRequest {
    orgId: string;
}
export interface GetCustomDomainPolicyResponse {
    policy: DomainPolicy | undefined;
    isDefault: boolean;
}
export interface AddCustomDomainPolicyRequest {
    orgId: string;
    userLoginMustBeDomain: boolean;
    validateOrgDomains: boolean;
    smtpSenderAddressMatchesInstanceDomain: boolean;
}
export interface AddCustomDomainPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateCustomDomainPolicyRequest {
    orgId: string;
    userLoginMustBeDomain: boolean;
    validateOrgDomains: boolean;
    smtpSenderAddressMatchesInstanceDomain: boolean;
}
export interface UpdateCustomDomainPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomDomainPolicyToDefaultRequest {
    orgId: string;
}
export interface ResetCustomDomainPolicyToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetLabelPolicyRequest {
}
export interface GetLabelPolicyResponse {
    policy: LabelPolicy | undefined;
}
export interface GetPreviewLabelPolicyRequest {
}
export interface GetPreviewLabelPolicyResponse {
    policy: LabelPolicy | undefined;
}
export interface UpdateLabelPolicyRequest {
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
export interface UpdateLabelPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface ActivateLabelPolicyRequest {
}
export interface ActivateLabelPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveLabelPolicyLogoRequest {
}
export interface RemoveLabelPolicyLogoResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveLabelPolicyLogoDarkRequest {
}
export interface RemoveLabelPolicyLogoDarkResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveLabelPolicyIconRequest {
}
export interface RemoveLabelPolicyIconResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveLabelPolicyIconDarkRequest {
}
export interface RemoveLabelPolicyIconDarkResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveLabelPolicyFontRequest {
}
export interface RemoveLabelPolicyFontResponse {
    details: ObjectDetails | undefined;
}
export interface GetLoginPolicyRequest {
}
export interface GetLoginPolicyResponse {
    policy: LoginPolicy | undefined;
}
export interface UpdateLoginPolicyRequest {
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
export interface UpdateLoginPolicyResponse {
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
}
export interface UpdatePasswordComplexityPolicyRequest {
    minLength: number;
    hasUppercase: boolean;
    hasLowercase: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
}
export interface UpdatePasswordComplexityPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetPasswordAgePolicyRequest {
}
export interface GetPasswordAgePolicyResponse {
    policy: PasswordAgePolicy | undefined;
}
export interface UpdatePasswordAgePolicyRequest {
    maxAgeDays: number;
    expireWarnDays: number;
}
export interface UpdatePasswordAgePolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetLockoutPolicyRequest {
}
export interface GetLockoutPolicyResponse {
    policy: LockoutPolicy | undefined;
}
export interface UpdateLockoutPolicyRequest {
    maxPasswordAttempts: number;
    maxOtpAttempts: number;
}
export interface UpdateLockoutPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetPrivacyPolicyRequest {
}
export interface GetPrivacyPolicyResponse {
    policy: PrivacyPolicy | undefined;
}
export interface UpdatePrivacyPolicyRequest {
    tosLink: string;
    privacyLink: string;
    helpLink: string;
    supportEmail: string;
    docsLink: string;
    customLink: string;
    customLinkText: string;
}
export interface UpdatePrivacyPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface AddNotificationPolicyRequest {
    passwordChange: boolean;
}
export interface AddNotificationPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetNotificationPolicyRequest {
}
export interface GetNotificationPolicyResponse {
    policy: NotificationPolicy | undefined;
}
export interface UpdateNotificationPolicyRequest {
    passwordChange: boolean;
}
export interface UpdateNotificationPolicyResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultInitMessageTextRequest {
    language: string;
}
export interface GetDefaultInitMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomInitMessageTextRequest {
    language: string;
}
export interface GetCustomInitMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultInitMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultInitMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomInitMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomInitMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultPasswordResetMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordResetMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomPasswordResetMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordResetMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultPasswordResetMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultPasswordResetMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordResetMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordResetMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultVerifyEmailMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifyEmailMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomVerifyEmailMessageTextRequest {
    language: string;
}
export interface GetCustomVerifyEmailMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultVerifyEmailMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultVerifyEmailMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifyEmailMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifyEmailMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultVerifyPhoneMessageTextRequest {
    language: string;
}
export interface GetDefaultVerifyPhoneMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomVerifyPhoneMessageTextRequest {
    language: string;
}
export interface GetCustomVerifyPhoneMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultVerifyPhoneMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultVerifyPhoneMessageTextResponse {
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
export interface SetDefaultVerifySMSOTPMessageTextRequest {
    language: string;
    text: string;
}
export interface SetDefaultVerifySMSOTPMessageTextResponse {
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
export interface SetDefaultVerifyEmailOTPMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultVerifyEmailOTPMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomVerifyEmailOTPMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomVerifyEmailOTPMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultDomainClaimedMessageTextRequest {
    language: string;
}
export interface GetDefaultDomainClaimedMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomDomainClaimedMessageTextRequest {
    language: string;
}
export interface GetCustomDomainClaimedMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultDomainClaimedMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultDomainClaimedMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomDomainClaimedMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomDomainClaimedMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultPasswordChangeMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordChangeMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomPasswordChangeMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordChangeMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultPasswordChangeMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultPasswordChangeMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordChangeMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordChangeMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultInviteUserMessageTextRequest {
    language: string;
}
export interface GetDefaultInviteUserMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomInviteUserMessageTextRequest {
    language: string;
}
export interface GetCustomInviteUserMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultInviteUserMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultInviteUserMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomInviteUserMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomInviteUserMessageTextToDefaultResponse {
    details: ObjectDetails | undefined;
}
export interface GetDefaultPasswordlessRegistrationMessageTextRequest {
    language: string;
}
export interface GetDefaultPasswordlessRegistrationMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface GetCustomPasswordlessRegistrationMessageTextRequest {
    language: string;
}
export interface GetCustomPasswordlessRegistrationMessageTextResponse {
    customText: MessageCustomText | undefined;
}
export interface SetDefaultPasswordlessRegistrationMessageTextRequest {
    language: string;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
}
export interface SetDefaultPasswordlessRegistrationMessageTextResponse {
    details: ObjectDetails | undefined;
}
export interface ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest {
    language: string;
}
export interface ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse {
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
export interface AddIAMMemberRequest {
    userId: string;
    roles: string[];
}
export interface AddIAMMemberResponse {
    details: ObjectDetails | undefined;
}
export interface UpdateIAMMemberRequest {
    userId: string;
    roles: string[];
}
export interface UpdateIAMMemberResponse {
    details: ObjectDetails | undefined;
}
export interface RemoveIAMMemberRequest {
    userId: string;
}
export interface RemoveIAMMemberResponse {
    details: ObjectDetails | undefined;
}
export interface ListIAMMemberRolesRequest {
}
export interface ListIAMMemberRolesResponse {
    details: ListDetails | undefined;
    roles: string[];
}
export interface ListIAMMembersRequest {
    query: ListQuery | undefined;
    queries: SearchQuery[];
}
export interface ListIAMMembersResponse {
    details: ListDetails | undefined;
    result: Member[];
}
export interface ListViewsRequest {
}
export interface ListViewsResponse {
    result: View[];
}
export interface ListFailedEventsRequest {
}
export interface ListFailedEventsResponse {
    result: FailedEvent[];
}
export interface RemoveFailedEventRequest {
    database: string;
    viewName: string;
    failedSequence: Long;
}
export interface RemoveFailedEventResponse {
}
export interface View {
    database: string;
    viewName: string;
    processedSequence: Long;
    eventTimestamp: Date | undefined;
    lastSuccessfulSpoolerRun: Date | undefined;
}
export interface FailedEvent {
    database: string;
    viewName: string;
    failedSequence: Long;
    failureCount: Long;
    errorMessage: string;
    lastFailed: Date | undefined;
}
export interface ImportDataRequest {
    dataOrgs?: ImportDataOrg | undefined;
    dataOrgsv1?: ImportDataOrg1 | undefined;
    dataOrgsLocal?: ImportDataRequest_LocalInput | undefined;
    dataOrgsv1Local?: ImportDataRequest_LocalInput | undefined;
    dataOrgsS3?: ImportDataRequest_S3Input | undefined;
    dataOrgsv1S3?: ImportDataRequest_S3Input | undefined;
    dataOrgsGcs?: ImportDataRequest_GCSInput | undefined;
    dataOrgsv1Gcs?: ImportDataRequest_GCSInput | undefined;
    timeout: string;
}
export interface ImportDataRequest_LocalInput {
    path: string;
}
export interface ImportDataRequest_S3Input {
    path: string;
    endpoint: string;
    accessKeyId: string;
    secretAccessKey: string;
    ssl: boolean;
    bucket: string;
}
export interface ImportDataRequest_GCSInput {
    bucket: string;
    serviceaccountJson: string;
    path: string;
}
export interface ImportDataOrg {
    orgs: DataOrg[];
}
export interface DataOrg {
    orgId: string;
    org: AddOrgRequest | undefined;
    domainPolicy: AddCustomDomainPolicyRequest | undefined;
    labelPolicy: AddCustomLabelPolicyRequest | undefined;
    lockoutPolicy: AddCustomLockoutPolicyRequest | undefined;
    loginPolicy: AddCustomLoginPolicyRequest | undefined;
    passwordComplexityPolicy: AddCustomPasswordComplexityPolicyRequest | undefined;
    privacyPolicy: AddCustomPrivacyPolicyRequest | undefined;
    projects: DataProject[];
    projectRoles: AddProjectRoleRequest[];
    apiApps: DataAPIApplication[];
    oidcApps: DataOIDCApplication[];
    humanUsers: DataHumanUser[];
    machineUsers: DataMachineUser[];
    triggerActions: SetTriggerActionsRequest[];
    actions: DataAction[];
    projectGrants: DataProjectGrant[];
    userGrants: AddUserGrantRequest[];
    orgMembers: AddOrgMemberRequest[];
    projectMembers: AddProjectMemberRequest[];
    projectGrantMembers: AddProjectGrantMemberRequest[];
    userMetadata: SetUserMetadataRequest[];
    loginTexts: SetCustomLoginTextsRequest2[];
    initMessages: SetCustomInitMessageTextRequest[];
    passwordResetMessages: SetCustomPasswordResetMessageTextRequest[];
    verifyEmailMessages: SetCustomVerifyEmailMessageTextRequest[];
    verifyPhoneMessages: SetCustomVerifyPhoneMessageTextRequest[];
    domainClaimedMessages: SetCustomDomainClaimedMessageTextRequest[];
    passwordlessRegistrationMessages: SetCustomPasswordlessRegistrationMessageTextRequest[];
    oidcIdps: DataOIDCIDP[];
    jwtIdps: DataJWTIDP[];
    userLinks: IDPUserLink[];
    domains: Domain3[];
    appKeys: DataAppKey[];
    machineKeys: DataMachineKey[];
    verifySmsOtpMessages: SetCustomVerifySMSOTPMessageTextRequest[];
    verifyEmailOtpMessages: SetCustomVerifyEmailOTPMessageTextRequest[];
    inviteUserMessages: SetCustomInviteUserMessageTextRequest[];
}
export interface ImportDataResponse {
    errors: ImportDataError[];
    success: ImportDataSuccess | undefined;
}
export interface ImportDataError {
    type: string;
    id: string;
    message: string;
}
export interface ImportDataSuccess {
    orgs: ImportDataSuccessOrg[];
}
export interface ImportDataSuccessOrg {
    orgId: string;
    projectIds: string[];
    projectRoles: string[];
    oidcAppIds: string[];
    apiAppIds: string[];
    humanUserIds: string[];
    machineUserIds: string[];
    actionIds: string[];
    triggerActions: SetTriggerActionsRequest[];
    projectGrants: ImportDataSuccessProjectGrant[];
    userGrants: ImportDataSuccessUserGrant[];
    orgMembers: string[];
    projectMembers: ImportDataSuccessProjectMember[];
    projectGrantMembers: ImportDataSuccessProjectGrantMember[];
    oidcIpds: string[];
    jwtIdps: string[];
    idpLinks: string[];
    userLinks: ImportDataSuccessUserLinks[];
    userMetadata: ImportDataSuccessUserMetadata[];
    domains: string[];
    appKeys: string[];
    machineKeys: string[];
}
export interface ImportDataSuccessProjectGrant {
    grantId: string;
    projectId: string;
    orgId: string;
}
export interface ImportDataSuccessUserGrant {
    projectId: string;
    userId: string;
}
export interface ImportDataSuccessProjectMember {
    projectId: string;
    userId: string;
}
export interface ImportDataSuccessProjectGrantMember {
    projectId: string;
    grantId: string;
    userId: string;
}
export interface ImportDataSuccessUserLinks {
    userId: string;
    externalUserId: string;
    displayName: string;
    idpId: string;
}
export interface ImportDataSuccessUserMetadata {
    userId: string;
    key: string;
}
export interface ExportDataRequest {
    orgIds: string[];
    excludedOrgIds: string[];
    withPasswords: boolean;
    withOtp: boolean;
    responseOutput: boolean;
    localOutput: ExportDataRequest_LocalOutput | undefined;
    s3Output: ExportDataRequest_S3Output | undefined;
    gcsOutput: ExportDataRequest_GCSOutput | undefined;
    timeout: string;
}
export interface ExportDataRequest_LocalOutput {
    path: string;
}
export interface ExportDataRequest_S3Output {
    path: string;
    endpoint: string;
    accessKeyId: string;
    secretAccessKey: string;
    ssl: boolean;
    bucket: string;
}
export interface ExportDataRequest_GCSOutput {
    bucket: string;
    serviceaccountJson: string;
    path: string;
}
export interface ExportDataResponse {
    orgs: DataOrg[];
}
export interface ListEventsRequest {
    sequence: Long;
    limit: number;
    asc: boolean;
    editorUserId: string;
    eventTypes: string[];
    aggregateId: string;
    aggregateTypes: string[];
    resourceOwner: string;
    creationDate: Date | undefined;
    range?: ListEventsRequest_creationDateRange | undefined;
    from?: Date | undefined;
}
export interface ListEventsRequest_creationDateRange {
    since: Date | undefined;
    until: Date | undefined;
}
export interface ListEventsResponse {
    events: Event[];
}
export interface ListEventTypesRequest {
}
export interface ListEventTypesResponse {
    eventTypes: EventType[];
}
export interface ListAggregateTypesRequest {
}
export interface ListAggregateTypesResponse {
    aggregateTypes: AggregateType[];
}
export interface ActivateFeatureLoginDefaultOrgRequest {
}
export interface ActivateFeatureLoginDefaultOrgResponse {
    details: ObjectDetails | undefined;
}
export interface ListMilestonesRequest {
    query: ListQuery | undefined;
    sortingColumn: MilestoneFieldName;
    queries: MilestoneQuery[];
}
export interface ListMilestonesResponse {
    details: ListDetails | undefined;
    result: Milestone[];
}
export interface SetRestrictionsRequest {
    disallowPublicOrgRegistration?: boolean | undefined;
    allowedLanguages?: SelectLanguages | undefined;
}
export interface SelectLanguages {
    list: string[];
}
export interface SetRestrictionsResponse {
    details: ObjectDetails | undefined;
}
export interface GetRestrictionsRequest {
}
export interface GetRestrictionsResponse {
    details: ObjectDetails | undefined;
    disallowPublicOrgRegistration: boolean;
    allowedLanguages: string[];
}
export declare const HealthzRequest: MessageFns<HealthzRequest>;
export declare const HealthzResponse: MessageFns<HealthzResponse>;
export declare const GetSupportedLanguagesRequest: MessageFns<GetSupportedLanguagesRequest>;
export declare const GetSupportedLanguagesResponse: MessageFns<GetSupportedLanguagesResponse>;
export declare const GetAllowedLanguagesRequest: MessageFns<GetAllowedLanguagesRequest>;
export declare const GetAllowedLanguagesResponse: MessageFns<GetAllowedLanguagesResponse>;
export declare const SetDefaultLanguageRequest: MessageFns<SetDefaultLanguageRequest>;
export declare const SetDefaultLanguageResponse: MessageFns<SetDefaultLanguageResponse>;
export declare const GetDefaultLanguageRequest: MessageFns<GetDefaultLanguageRequest>;
export declare const GetDefaultLanguageResponse: MessageFns<GetDefaultLanguageResponse>;
export declare const SetDefaultOrgRequest: MessageFns<SetDefaultOrgRequest>;
export declare const SetDefaultOrgResponse: MessageFns<SetDefaultOrgResponse>;
export declare const GetDefaultOrgRequest: MessageFns<GetDefaultOrgRequest>;
export declare const GetDefaultOrgResponse: MessageFns<GetDefaultOrgResponse>;
export declare const GetMyInstanceRequest: MessageFns<GetMyInstanceRequest>;
export declare const GetMyInstanceResponse: MessageFns<GetMyInstanceResponse>;
export declare const ListInstanceDomainsRequest: MessageFns<ListInstanceDomainsRequest>;
export declare const ListInstanceDomainsResponse: MessageFns<ListInstanceDomainsResponse>;
export declare const ListInstanceTrustedDomainsRequest: MessageFns<ListInstanceTrustedDomainsRequest>;
export declare const ListInstanceTrustedDomainsResponse: MessageFns<ListInstanceTrustedDomainsResponse>;
export declare const AddInstanceTrustedDomainRequest: MessageFns<AddInstanceTrustedDomainRequest>;
export declare const AddInstanceTrustedDomainResponse: MessageFns<AddInstanceTrustedDomainResponse>;
export declare const RemoveInstanceTrustedDomainRequest: MessageFns<RemoveInstanceTrustedDomainRequest>;
export declare const RemoveInstanceTrustedDomainResponse: MessageFns<RemoveInstanceTrustedDomainResponse>;
export declare const ListSecretGeneratorsRequest: MessageFns<ListSecretGeneratorsRequest>;
export declare const ListSecretGeneratorsResponse: MessageFns<ListSecretGeneratorsResponse>;
export declare const GetSecretGeneratorRequest: MessageFns<GetSecretGeneratorRequest>;
export declare const GetSecretGeneratorResponse: MessageFns<GetSecretGeneratorResponse>;
export declare const UpdateSecretGeneratorRequest: MessageFns<UpdateSecretGeneratorRequest>;
export declare const UpdateSecretGeneratorResponse: MessageFns<UpdateSecretGeneratorResponse>;
export declare const GetSMTPConfigRequest: MessageFns<GetSMTPConfigRequest>;
export declare const GetSMTPConfigResponse: MessageFns<GetSMTPConfigResponse>;
export declare const GetSMTPConfigByIdRequest: MessageFns<GetSMTPConfigByIdRequest>;
export declare const GetSMTPConfigByIdResponse: MessageFns<GetSMTPConfigByIdResponse>;
export declare const ListSMTPConfigsRequest: MessageFns<ListSMTPConfigsRequest>;
export declare const ListSMTPConfigsResponse: MessageFns<ListSMTPConfigsResponse>;
export declare const AddSMTPConfigRequest: MessageFns<AddSMTPConfigRequest>;
export declare const AddSMTPConfigResponse: MessageFns<AddSMTPConfigResponse>;
export declare const UpdateSMTPConfigRequest: MessageFns<UpdateSMTPConfigRequest>;
export declare const UpdateSMTPConfigResponse: MessageFns<UpdateSMTPConfigResponse>;
export declare const UpdateSMTPConfigPasswordRequest: MessageFns<UpdateSMTPConfigPasswordRequest>;
export declare const UpdateSMTPConfigPasswordResponse: MessageFns<UpdateSMTPConfigPasswordResponse>;
export declare const ActivateSMTPConfigRequest: MessageFns<ActivateSMTPConfigRequest>;
export declare const ActivateSMTPConfigResponse: MessageFns<ActivateSMTPConfigResponse>;
export declare const DeactivateSMTPConfigRequest: MessageFns<DeactivateSMTPConfigRequest>;
export declare const DeactivateSMTPConfigResponse: MessageFns<DeactivateSMTPConfigResponse>;
export declare const RemoveSMTPConfigRequest: MessageFns<RemoveSMTPConfigRequest>;
export declare const RemoveSMTPConfigResponse: MessageFns<RemoveSMTPConfigResponse>;
export declare const TestSMTPConfigByIdRequest: MessageFns<TestSMTPConfigByIdRequest>;
export declare const TestSMTPConfigByIdResponse: MessageFns<TestSMTPConfigByIdResponse>;
export declare const TestSMTPConfigRequest: MessageFns<TestSMTPConfigRequest>;
export declare const TestSMTPConfigResponse: MessageFns<TestSMTPConfigResponse>;
export declare const GetEmailProviderRequest: MessageFns<GetEmailProviderRequest>;
export declare const GetEmailProviderResponse: MessageFns<GetEmailProviderResponse>;
export declare const GetEmailProviderByIdRequest: MessageFns<GetEmailProviderByIdRequest>;
export declare const GetEmailProviderByIdResponse: MessageFns<GetEmailProviderByIdResponse>;
export declare const ListEmailProvidersRequest: MessageFns<ListEmailProvidersRequest>;
export declare const ListEmailProvidersResponse: MessageFns<ListEmailProvidersResponse>;
export declare const AddEmailProviderSMTPRequest: MessageFns<AddEmailProviderSMTPRequest>;
export declare const AddEmailProviderSMTPResponse: MessageFns<AddEmailProviderSMTPResponse>;
export declare const UpdateEmailProviderSMTPRequest: MessageFns<UpdateEmailProviderSMTPRequest>;
export declare const UpdateEmailProviderSMTPResponse: MessageFns<UpdateEmailProviderSMTPResponse>;
export declare const UpdateEmailProviderSMTPPasswordRequest: MessageFns<UpdateEmailProviderSMTPPasswordRequest>;
export declare const UpdateEmailProviderSMTPPasswordResponse: MessageFns<UpdateEmailProviderSMTPPasswordResponse>;
export declare const AddEmailProviderHTTPRequest: MessageFns<AddEmailProviderHTTPRequest>;
export declare const AddEmailProviderHTTPResponse: MessageFns<AddEmailProviderHTTPResponse>;
export declare const UpdateEmailProviderHTTPRequest: MessageFns<UpdateEmailProviderHTTPRequest>;
export declare const UpdateEmailProviderHTTPResponse: MessageFns<UpdateEmailProviderHTTPResponse>;
export declare const ActivateEmailProviderRequest: MessageFns<ActivateEmailProviderRequest>;
export declare const ActivateEmailProviderResponse: MessageFns<ActivateEmailProviderResponse>;
export declare const DeactivateEmailProviderRequest: MessageFns<DeactivateEmailProviderRequest>;
export declare const DeactivateEmailProviderResponse: MessageFns<DeactivateEmailProviderResponse>;
export declare const RemoveEmailProviderRequest: MessageFns<RemoveEmailProviderRequest>;
export declare const RemoveEmailProviderResponse: MessageFns<RemoveEmailProviderResponse>;
export declare const TestEmailProviderSMTPByIdRequest: MessageFns<TestEmailProviderSMTPByIdRequest>;
export declare const TestEmailProviderSMTPByIdResponse: MessageFns<TestEmailProviderSMTPByIdResponse>;
export declare const TestEmailProviderSMTPRequest: MessageFns<TestEmailProviderSMTPRequest>;
export declare const TestEmailProviderSMTPResponse: MessageFns<TestEmailProviderSMTPResponse>;
export declare const ListSMSProvidersRequest: MessageFns<ListSMSProvidersRequest>;
export declare const ListSMSProvidersResponse: MessageFns<ListSMSProvidersResponse>;
export declare const GetSMSProviderRequest: MessageFns<GetSMSProviderRequest>;
export declare const GetSMSProviderResponse: MessageFns<GetSMSProviderResponse>;
export declare const AddSMSProviderTwilioRequest: MessageFns<AddSMSProviderTwilioRequest>;
export declare const AddSMSProviderTwilioResponse: MessageFns<AddSMSProviderTwilioResponse>;
export declare const UpdateSMSProviderTwilioRequest: MessageFns<UpdateSMSProviderTwilioRequest>;
export declare const UpdateSMSProviderTwilioResponse: MessageFns<UpdateSMSProviderTwilioResponse>;
export declare const UpdateSMSProviderTwilioTokenRequest: MessageFns<UpdateSMSProviderTwilioTokenRequest>;
export declare const UpdateSMSProviderTwilioTokenResponse: MessageFns<UpdateSMSProviderTwilioTokenResponse>;
export declare const AddSMSProviderHTTPRequest: MessageFns<AddSMSProviderHTTPRequest>;
export declare const AddSMSProviderHTTPResponse: MessageFns<AddSMSProviderHTTPResponse>;
export declare const UpdateSMSProviderHTTPRequest: MessageFns<UpdateSMSProviderHTTPRequest>;
export declare const UpdateSMSProviderHTTPResponse: MessageFns<UpdateSMSProviderHTTPResponse>;
export declare const ActivateSMSProviderRequest: MessageFns<ActivateSMSProviderRequest>;
export declare const ActivateSMSProviderResponse: MessageFns<ActivateSMSProviderResponse>;
export declare const DeactivateSMSProviderRequest: MessageFns<DeactivateSMSProviderRequest>;
export declare const DeactivateSMSProviderResponse: MessageFns<DeactivateSMSProviderResponse>;
export declare const RemoveSMSProviderRequest: MessageFns<RemoveSMSProviderRequest>;
export declare const RemoveSMSProviderResponse: MessageFns<RemoveSMSProviderResponse>;
export declare const GetFileSystemNotificationProviderRequest: MessageFns<GetFileSystemNotificationProviderRequest>;
export declare const GetFileSystemNotificationProviderResponse: MessageFns<GetFileSystemNotificationProviderResponse>;
export declare const GetLogNotificationProviderRequest: MessageFns<GetLogNotificationProviderRequest>;
export declare const GetLogNotificationProviderResponse: MessageFns<GetLogNotificationProviderResponse>;
export declare const GetOIDCSettingsRequest: MessageFns<GetOIDCSettingsRequest>;
export declare const GetOIDCSettingsResponse: MessageFns<GetOIDCSettingsResponse>;
export declare const AddOIDCSettingsRequest: MessageFns<AddOIDCSettingsRequest>;
export declare const AddOIDCSettingsResponse: MessageFns<AddOIDCSettingsResponse>;
export declare const UpdateOIDCSettingsRequest: MessageFns<UpdateOIDCSettingsRequest>;
export declare const UpdateOIDCSettingsResponse: MessageFns<UpdateOIDCSettingsResponse>;
export declare const GetSecurityPolicyRequest: MessageFns<GetSecurityPolicyRequest>;
export declare const GetSecurityPolicyResponse: MessageFns<GetSecurityPolicyResponse>;
export declare const SetSecurityPolicyRequest: MessageFns<SetSecurityPolicyRequest>;
export declare const SetSecurityPolicyResponse: MessageFns<SetSecurityPolicyResponse>;
export declare const IsOrgUniqueRequest: MessageFns<IsOrgUniqueRequest>;
export declare const IsOrgUniqueResponse: MessageFns<IsOrgUniqueResponse>;
export declare const GetOrgByIDRequest: MessageFns<GetOrgByIDRequest>;
export declare const GetOrgByIDResponse: MessageFns<GetOrgByIDResponse>;
export declare const ListOrgsRequest: MessageFns<ListOrgsRequest>;
export declare const ListOrgsResponse: MessageFns<ListOrgsResponse>;
export declare const SetUpOrgRequest: MessageFns<SetUpOrgRequest>;
export declare const SetUpOrgRequest_Org: MessageFns<SetUpOrgRequest_Org>;
export declare const SetUpOrgRequest_Human: MessageFns<SetUpOrgRequest_Human>;
export declare const SetUpOrgRequest_Human_Profile: MessageFns<SetUpOrgRequest_Human_Profile>;
export declare const SetUpOrgRequest_Human_Email: MessageFns<SetUpOrgRequest_Human_Email>;
export declare const SetUpOrgRequest_Human_Phone: MessageFns<SetUpOrgRequest_Human_Phone>;
export declare const SetUpOrgResponse: MessageFns<SetUpOrgResponse>;
export declare const RemoveOrgRequest: MessageFns<RemoveOrgRequest>;
export declare const RemoveOrgResponse: MessageFns<RemoveOrgResponse>;
export declare const GetIDPByIDRequest: MessageFns<GetIDPByIDRequest>;
export declare const GetIDPByIDResponse: MessageFns<GetIDPByIDResponse>;
export declare const ListIDPsRequest: MessageFns<ListIDPsRequest>;
export declare const IDPQuery: MessageFns<IDPQuery>;
export declare const ListIDPsResponse: MessageFns<ListIDPsResponse>;
export declare const AddOIDCIDPRequest: MessageFns<AddOIDCIDPRequest>;
export declare const AddOIDCIDPResponse: MessageFns<AddOIDCIDPResponse>;
export declare const AddJWTIDPRequest: MessageFns<AddJWTIDPRequest>;
export declare const AddJWTIDPResponse: MessageFns<AddJWTIDPResponse>;
export declare const UpdateIDPRequest: MessageFns<UpdateIDPRequest>;
export declare const UpdateIDPResponse: MessageFns<UpdateIDPResponse>;
export declare const DeactivateIDPRequest: MessageFns<DeactivateIDPRequest>;
export declare const DeactivateIDPResponse: MessageFns<DeactivateIDPResponse>;
export declare const ReactivateIDPRequest: MessageFns<ReactivateIDPRequest>;
export declare const ReactivateIDPResponse: MessageFns<ReactivateIDPResponse>;
export declare const RemoveIDPRequest: MessageFns<RemoveIDPRequest>;
export declare const RemoveIDPResponse: MessageFns<RemoveIDPResponse>;
export declare const UpdateIDPOIDCConfigRequest: MessageFns<UpdateIDPOIDCConfigRequest>;
export declare const UpdateIDPOIDCConfigResponse: MessageFns<UpdateIDPOIDCConfigResponse>;
export declare const UpdateIDPJWTConfigRequest: MessageFns<UpdateIDPJWTConfigRequest>;
export declare const UpdateIDPJWTConfigResponse: MessageFns<UpdateIDPJWTConfigResponse>;
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
export declare const AddAppleProviderRequest: MessageFns<AddAppleProviderRequest>;
export declare const AddAppleProviderResponse: MessageFns<AddAppleProviderResponse>;
export declare const UpdateAppleProviderRequest: MessageFns<UpdateAppleProviderRequest>;
export declare const UpdateAppleProviderResponse: MessageFns<UpdateAppleProviderResponse>;
export declare const AddSAMLProviderRequest: MessageFns<AddSAMLProviderRequest>;
export declare const AddSAMLProviderResponse: MessageFns<AddSAMLProviderResponse>;
export declare const UpdateSAMLProviderRequest: MessageFns<UpdateSAMLProviderRequest>;
export declare const UpdateSAMLProviderResponse: MessageFns<UpdateSAMLProviderResponse>;
export declare const RegenerateSAMLProviderCertificateRequest: MessageFns<RegenerateSAMLProviderCertificateRequest>;
export declare const RegenerateSAMLProviderCertificateResponse: MessageFns<RegenerateSAMLProviderCertificateResponse>;
export declare const DeleteProviderRequest: MessageFns<DeleteProviderRequest>;
export declare const DeleteProviderResponse: MessageFns<DeleteProviderResponse>;
export declare const GetOrgIAMPolicyRequest: MessageFns<GetOrgIAMPolicyRequest>;
export declare const GetOrgIAMPolicyResponse: MessageFns<GetOrgIAMPolicyResponse>;
export declare const UpdateOrgIAMPolicyRequest: MessageFns<UpdateOrgIAMPolicyRequest>;
export declare const UpdateOrgIAMPolicyResponse: MessageFns<UpdateOrgIAMPolicyResponse>;
export declare const GetCustomOrgIAMPolicyRequest: MessageFns<GetCustomOrgIAMPolicyRequest>;
export declare const GetCustomOrgIAMPolicyResponse: MessageFns<GetCustomOrgIAMPolicyResponse>;
export declare const AddCustomOrgIAMPolicyRequest: MessageFns<AddCustomOrgIAMPolicyRequest>;
export declare const AddCustomOrgIAMPolicyResponse: MessageFns<AddCustomOrgIAMPolicyResponse>;
export declare const UpdateCustomOrgIAMPolicyRequest: MessageFns<UpdateCustomOrgIAMPolicyRequest>;
export declare const UpdateCustomOrgIAMPolicyResponse: MessageFns<UpdateCustomOrgIAMPolicyResponse>;
export declare const ResetCustomOrgIAMPolicyToDefaultRequest: MessageFns<ResetCustomOrgIAMPolicyToDefaultRequest>;
export declare const ResetCustomOrgIAMPolicyToDefaultResponse: MessageFns<ResetCustomOrgIAMPolicyToDefaultResponse>;
export declare const GetDomainPolicyRequest: MessageFns<GetDomainPolicyRequest>;
export declare const GetDomainPolicyResponse: MessageFns<GetDomainPolicyResponse>;
export declare const UpdateDomainPolicyRequest: MessageFns<UpdateDomainPolicyRequest>;
export declare const UpdateDomainPolicyResponse: MessageFns<UpdateDomainPolicyResponse>;
export declare const GetCustomDomainPolicyRequest: MessageFns<GetCustomDomainPolicyRequest>;
export declare const GetCustomDomainPolicyResponse: MessageFns<GetCustomDomainPolicyResponse>;
export declare const AddCustomDomainPolicyRequest: MessageFns<AddCustomDomainPolicyRequest>;
export declare const AddCustomDomainPolicyResponse: MessageFns<AddCustomDomainPolicyResponse>;
export declare const UpdateCustomDomainPolicyRequest: MessageFns<UpdateCustomDomainPolicyRequest>;
export declare const UpdateCustomDomainPolicyResponse: MessageFns<UpdateCustomDomainPolicyResponse>;
export declare const ResetCustomDomainPolicyToDefaultRequest: MessageFns<ResetCustomDomainPolicyToDefaultRequest>;
export declare const ResetCustomDomainPolicyToDefaultResponse: MessageFns<ResetCustomDomainPolicyToDefaultResponse>;
export declare const GetLabelPolicyRequest: MessageFns<GetLabelPolicyRequest>;
export declare const GetLabelPolicyResponse: MessageFns<GetLabelPolicyResponse>;
export declare const GetPreviewLabelPolicyRequest: MessageFns<GetPreviewLabelPolicyRequest>;
export declare const GetPreviewLabelPolicyResponse: MessageFns<GetPreviewLabelPolicyResponse>;
export declare const UpdateLabelPolicyRequest: MessageFns<UpdateLabelPolicyRequest>;
export declare const UpdateLabelPolicyResponse: MessageFns<UpdateLabelPolicyResponse>;
export declare const ActivateLabelPolicyRequest: MessageFns<ActivateLabelPolicyRequest>;
export declare const ActivateLabelPolicyResponse: MessageFns<ActivateLabelPolicyResponse>;
export declare const RemoveLabelPolicyLogoRequest: MessageFns<RemoveLabelPolicyLogoRequest>;
export declare const RemoveLabelPolicyLogoResponse: MessageFns<RemoveLabelPolicyLogoResponse>;
export declare const RemoveLabelPolicyLogoDarkRequest: MessageFns<RemoveLabelPolicyLogoDarkRequest>;
export declare const RemoveLabelPolicyLogoDarkResponse: MessageFns<RemoveLabelPolicyLogoDarkResponse>;
export declare const RemoveLabelPolicyIconRequest: MessageFns<RemoveLabelPolicyIconRequest>;
export declare const RemoveLabelPolicyIconResponse: MessageFns<RemoveLabelPolicyIconResponse>;
export declare const RemoveLabelPolicyIconDarkRequest: MessageFns<RemoveLabelPolicyIconDarkRequest>;
export declare const RemoveLabelPolicyIconDarkResponse: MessageFns<RemoveLabelPolicyIconDarkResponse>;
export declare const RemoveLabelPolicyFontRequest: MessageFns<RemoveLabelPolicyFontRequest>;
export declare const RemoveLabelPolicyFontResponse: MessageFns<RemoveLabelPolicyFontResponse>;
export declare const GetLoginPolicyRequest: MessageFns<GetLoginPolicyRequest>;
export declare const GetLoginPolicyResponse: MessageFns<GetLoginPolicyResponse>;
export declare const UpdateLoginPolicyRequest: MessageFns<UpdateLoginPolicyRequest>;
export declare const UpdateLoginPolicyResponse: MessageFns<UpdateLoginPolicyResponse>;
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
export declare const UpdatePasswordComplexityPolicyRequest: MessageFns<UpdatePasswordComplexityPolicyRequest>;
export declare const UpdatePasswordComplexityPolicyResponse: MessageFns<UpdatePasswordComplexityPolicyResponse>;
export declare const GetPasswordAgePolicyRequest: MessageFns<GetPasswordAgePolicyRequest>;
export declare const GetPasswordAgePolicyResponse: MessageFns<GetPasswordAgePolicyResponse>;
export declare const UpdatePasswordAgePolicyRequest: MessageFns<UpdatePasswordAgePolicyRequest>;
export declare const UpdatePasswordAgePolicyResponse: MessageFns<UpdatePasswordAgePolicyResponse>;
export declare const GetLockoutPolicyRequest: MessageFns<GetLockoutPolicyRequest>;
export declare const GetLockoutPolicyResponse: MessageFns<GetLockoutPolicyResponse>;
export declare const UpdateLockoutPolicyRequest: MessageFns<UpdateLockoutPolicyRequest>;
export declare const UpdateLockoutPolicyResponse: MessageFns<UpdateLockoutPolicyResponse>;
export declare const GetPrivacyPolicyRequest: MessageFns<GetPrivacyPolicyRequest>;
export declare const GetPrivacyPolicyResponse: MessageFns<GetPrivacyPolicyResponse>;
export declare const UpdatePrivacyPolicyRequest: MessageFns<UpdatePrivacyPolicyRequest>;
export declare const UpdatePrivacyPolicyResponse: MessageFns<UpdatePrivacyPolicyResponse>;
export declare const AddNotificationPolicyRequest: MessageFns<AddNotificationPolicyRequest>;
export declare const AddNotificationPolicyResponse: MessageFns<AddNotificationPolicyResponse>;
export declare const GetNotificationPolicyRequest: MessageFns<GetNotificationPolicyRequest>;
export declare const GetNotificationPolicyResponse: MessageFns<GetNotificationPolicyResponse>;
export declare const UpdateNotificationPolicyRequest: MessageFns<UpdateNotificationPolicyRequest>;
export declare const UpdateNotificationPolicyResponse: MessageFns<UpdateNotificationPolicyResponse>;
export declare const GetDefaultInitMessageTextRequest: MessageFns<GetDefaultInitMessageTextRequest>;
export declare const GetDefaultInitMessageTextResponse: MessageFns<GetDefaultInitMessageTextResponse>;
export declare const GetCustomInitMessageTextRequest: MessageFns<GetCustomInitMessageTextRequest>;
export declare const GetCustomInitMessageTextResponse: MessageFns<GetCustomInitMessageTextResponse>;
export declare const SetDefaultInitMessageTextRequest: MessageFns<SetDefaultInitMessageTextRequest>;
export declare const SetDefaultInitMessageTextResponse: MessageFns<SetDefaultInitMessageTextResponse>;
export declare const ResetCustomInitMessageTextToDefaultRequest: MessageFns<ResetCustomInitMessageTextToDefaultRequest>;
export declare const ResetCustomInitMessageTextToDefaultResponse: MessageFns<ResetCustomInitMessageTextToDefaultResponse>;
export declare const GetDefaultPasswordResetMessageTextRequest: MessageFns<GetDefaultPasswordResetMessageTextRequest>;
export declare const GetDefaultPasswordResetMessageTextResponse: MessageFns<GetDefaultPasswordResetMessageTextResponse>;
export declare const GetCustomPasswordResetMessageTextRequest: MessageFns<GetCustomPasswordResetMessageTextRequest>;
export declare const GetCustomPasswordResetMessageTextResponse: MessageFns<GetCustomPasswordResetMessageTextResponse>;
export declare const SetDefaultPasswordResetMessageTextRequest: MessageFns<SetDefaultPasswordResetMessageTextRequest>;
export declare const SetDefaultPasswordResetMessageTextResponse: MessageFns<SetDefaultPasswordResetMessageTextResponse>;
export declare const ResetCustomPasswordResetMessageTextToDefaultRequest: MessageFns<ResetCustomPasswordResetMessageTextToDefaultRequest>;
export declare const ResetCustomPasswordResetMessageTextToDefaultResponse: MessageFns<ResetCustomPasswordResetMessageTextToDefaultResponse>;
export declare const GetDefaultVerifyEmailMessageTextRequest: MessageFns<GetDefaultVerifyEmailMessageTextRequest>;
export declare const GetDefaultVerifyEmailMessageTextResponse: MessageFns<GetDefaultVerifyEmailMessageTextResponse>;
export declare const GetCustomVerifyEmailMessageTextRequest: MessageFns<GetCustomVerifyEmailMessageTextRequest>;
export declare const GetCustomVerifyEmailMessageTextResponse: MessageFns<GetCustomVerifyEmailMessageTextResponse>;
export declare const SetDefaultVerifyEmailMessageTextRequest: MessageFns<SetDefaultVerifyEmailMessageTextRequest>;
export declare const SetDefaultVerifyEmailMessageTextResponse: MessageFns<SetDefaultVerifyEmailMessageTextResponse>;
export declare const ResetCustomVerifyEmailMessageTextToDefaultRequest: MessageFns<ResetCustomVerifyEmailMessageTextToDefaultRequest>;
export declare const ResetCustomVerifyEmailMessageTextToDefaultResponse: MessageFns<ResetCustomVerifyEmailMessageTextToDefaultResponse>;
export declare const GetDefaultVerifyPhoneMessageTextRequest: MessageFns<GetDefaultVerifyPhoneMessageTextRequest>;
export declare const GetDefaultVerifyPhoneMessageTextResponse: MessageFns<GetDefaultVerifyPhoneMessageTextResponse>;
export declare const GetCustomVerifyPhoneMessageTextRequest: MessageFns<GetCustomVerifyPhoneMessageTextRequest>;
export declare const GetCustomVerifyPhoneMessageTextResponse: MessageFns<GetCustomVerifyPhoneMessageTextResponse>;
export declare const SetDefaultVerifyPhoneMessageTextRequest: MessageFns<SetDefaultVerifyPhoneMessageTextRequest>;
export declare const SetDefaultVerifyPhoneMessageTextResponse: MessageFns<SetDefaultVerifyPhoneMessageTextResponse>;
export declare const ResetCustomVerifyPhoneMessageTextToDefaultRequest: MessageFns<ResetCustomVerifyPhoneMessageTextToDefaultRequest>;
export declare const ResetCustomVerifyPhoneMessageTextToDefaultResponse: MessageFns<ResetCustomVerifyPhoneMessageTextToDefaultResponse>;
export declare const GetCustomVerifySMSOTPMessageTextRequest: MessageFns<GetCustomVerifySMSOTPMessageTextRequest>;
export declare const GetCustomVerifySMSOTPMessageTextResponse: MessageFns<GetCustomVerifySMSOTPMessageTextResponse>;
export declare const GetDefaultVerifySMSOTPMessageTextRequest: MessageFns<GetDefaultVerifySMSOTPMessageTextRequest>;
export declare const GetDefaultVerifySMSOTPMessageTextResponse: MessageFns<GetDefaultVerifySMSOTPMessageTextResponse>;
export declare const SetDefaultVerifySMSOTPMessageTextRequest: MessageFns<SetDefaultVerifySMSOTPMessageTextRequest>;
export declare const SetDefaultVerifySMSOTPMessageTextResponse: MessageFns<SetDefaultVerifySMSOTPMessageTextResponse>;
export declare const ResetCustomVerifySMSOTPMessageTextToDefaultRequest: MessageFns<ResetCustomVerifySMSOTPMessageTextToDefaultRequest>;
export declare const ResetCustomVerifySMSOTPMessageTextToDefaultResponse: MessageFns<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>;
export declare const GetCustomVerifyEmailOTPMessageTextRequest: MessageFns<GetCustomVerifyEmailOTPMessageTextRequest>;
export declare const GetCustomVerifyEmailOTPMessageTextResponse: MessageFns<GetCustomVerifyEmailOTPMessageTextResponse>;
export declare const GetDefaultVerifyEmailOTPMessageTextRequest: MessageFns<GetDefaultVerifyEmailOTPMessageTextRequest>;
export declare const GetDefaultVerifyEmailOTPMessageTextResponse: MessageFns<GetDefaultVerifyEmailOTPMessageTextResponse>;
export declare const SetDefaultVerifyEmailOTPMessageTextRequest: MessageFns<SetDefaultVerifyEmailOTPMessageTextRequest>;
export declare const SetDefaultVerifyEmailOTPMessageTextResponse: MessageFns<SetDefaultVerifyEmailOTPMessageTextResponse>;
export declare const ResetCustomVerifyEmailOTPMessageTextToDefaultRequest: MessageFns<ResetCustomVerifyEmailOTPMessageTextToDefaultRequest>;
export declare const ResetCustomVerifyEmailOTPMessageTextToDefaultResponse: MessageFns<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>;
export declare const GetDefaultDomainClaimedMessageTextRequest: MessageFns<GetDefaultDomainClaimedMessageTextRequest>;
export declare const GetDefaultDomainClaimedMessageTextResponse: MessageFns<GetDefaultDomainClaimedMessageTextResponse>;
export declare const GetCustomDomainClaimedMessageTextRequest: MessageFns<GetCustomDomainClaimedMessageTextRequest>;
export declare const GetCustomDomainClaimedMessageTextResponse: MessageFns<GetCustomDomainClaimedMessageTextResponse>;
export declare const SetDefaultDomainClaimedMessageTextRequest: MessageFns<SetDefaultDomainClaimedMessageTextRequest>;
export declare const SetDefaultDomainClaimedMessageTextResponse: MessageFns<SetDefaultDomainClaimedMessageTextResponse>;
export declare const ResetCustomDomainClaimedMessageTextToDefaultRequest: MessageFns<ResetCustomDomainClaimedMessageTextToDefaultRequest>;
export declare const ResetCustomDomainClaimedMessageTextToDefaultResponse: MessageFns<ResetCustomDomainClaimedMessageTextToDefaultResponse>;
export declare const GetDefaultPasswordChangeMessageTextRequest: MessageFns<GetDefaultPasswordChangeMessageTextRequest>;
export declare const GetDefaultPasswordChangeMessageTextResponse: MessageFns<GetDefaultPasswordChangeMessageTextResponse>;
export declare const GetCustomPasswordChangeMessageTextRequest: MessageFns<GetCustomPasswordChangeMessageTextRequest>;
export declare const GetCustomPasswordChangeMessageTextResponse: MessageFns<GetCustomPasswordChangeMessageTextResponse>;
export declare const SetDefaultPasswordChangeMessageTextRequest: MessageFns<SetDefaultPasswordChangeMessageTextRequest>;
export declare const SetDefaultPasswordChangeMessageTextResponse: MessageFns<SetDefaultPasswordChangeMessageTextResponse>;
export declare const ResetCustomPasswordChangeMessageTextToDefaultRequest: MessageFns<ResetCustomPasswordChangeMessageTextToDefaultRequest>;
export declare const ResetCustomPasswordChangeMessageTextToDefaultResponse: MessageFns<ResetCustomPasswordChangeMessageTextToDefaultResponse>;
export declare const GetDefaultInviteUserMessageTextRequest: MessageFns<GetDefaultInviteUserMessageTextRequest>;
export declare const GetDefaultInviteUserMessageTextResponse: MessageFns<GetDefaultInviteUserMessageTextResponse>;
export declare const GetCustomInviteUserMessageTextRequest: MessageFns<GetCustomInviteUserMessageTextRequest>;
export declare const GetCustomInviteUserMessageTextResponse: MessageFns<GetCustomInviteUserMessageTextResponse>;
export declare const SetDefaultInviteUserMessageTextRequest: MessageFns<SetDefaultInviteUserMessageTextRequest>;
export declare const SetDefaultInviteUserMessageTextResponse: MessageFns<SetDefaultInviteUserMessageTextResponse>;
export declare const ResetCustomInviteUserMessageTextToDefaultRequest: MessageFns<ResetCustomInviteUserMessageTextToDefaultRequest>;
export declare const ResetCustomInviteUserMessageTextToDefaultResponse: MessageFns<ResetCustomInviteUserMessageTextToDefaultResponse>;
export declare const GetDefaultPasswordlessRegistrationMessageTextRequest: MessageFns<GetDefaultPasswordlessRegistrationMessageTextRequest>;
export declare const GetDefaultPasswordlessRegistrationMessageTextResponse: MessageFns<GetDefaultPasswordlessRegistrationMessageTextResponse>;
export declare const GetCustomPasswordlessRegistrationMessageTextRequest: MessageFns<GetCustomPasswordlessRegistrationMessageTextRequest>;
export declare const GetCustomPasswordlessRegistrationMessageTextResponse: MessageFns<GetCustomPasswordlessRegistrationMessageTextResponse>;
export declare const SetDefaultPasswordlessRegistrationMessageTextRequest: MessageFns<SetDefaultPasswordlessRegistrationMessageTextRequest>;
export declare const SetDefaultPasswordlessRegistrationMessageTextResponse: MessageFns<SetDefaultPasswordlessRegistrationMessageTextResponse>;
export declare const ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest: MessageFns<ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest>;
export declare const ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse: MessageFns<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>;
export declare const GetDefaultLoginTextsRequest: MessageFns<GetDefaultLoginTextsRequest>;
export declare const GetDefaultLoginTextsResponse: MessageFns<GetDefaultLoginTextsResponse>;
export declare const GetCustomLoginTextsRequest: MessageFns<GetCustomLoginTextsRequest>;
export declare const GetCustomLoginTextsResponse: MessageFns<GetCustomLoginTextsResponse>;
export declare const SetCustomLoginTextsRequest: MessageFns<SetCustomLoginTextsRequest>;
export declare const SetCustomLoginTextsResponse: MessageFns<SetCustomLoginTextsResponse>;
export declare const ResetCustomLoginTextsToDefaultRequest: MessageFns<ResetCustomLoginTextsToDefaultRequest>;
export declare const ResetCustomLoginTextsToDefaultResponse: MessageFns<ResetCustomLoginTextsToDefaultResponse>;
export declare const AddIAMMemberRequest: MessageFns<AddIAMMemberRequest>;
export declare const AddIAMMemberResponse: MessageFns<AddIAMMemberResponse>;
export declare const UpdateIAMMemberRequest: MessageFns<UpdateIAMMemberRequest>;
export declare const UpdateIAMMemberResponse: MessageFns<UpdateIAMMemberResponse>;
export declare const RemoveIAMMemberRequest: MessageFns<RemoveIAMMemberRequest>;
export declare const RemoveIAMMemberResponse: MessageFns<RemoveIAMMemberResponse>;
export declare const ListIAMMemberRolesRequest: MessageFns<ListIAMMemberRolesRequest>;
export declare const ListIAMMemberRolesResponse: MessageFns<ListIAMMemberRolesResponse>;
export declare const ListIAMMembersRequest: MessageFns<ListIAMMembersRequest>;
export declare const ListIAMMembersResponse: MessageFns<ListIAMMembersResponse>;
export declare const ListViewsRequest: MessageFns<ListViewsRequest>;
export declare const ListViewsResponse: MessageFns<ListViewsResponse>;
export declare const ListFailedEventsRequest: MessageFns<ListFailedEventsRequest>;
export declare const ListFailedEventsResponse: MessageFns<ListFailedEventsResponse>;
export declare const RemoveFailedEventRequest: MessageFns<RemoveFailedEventRequest>;
export declare const RemoveFailedEventResponse: MessageFns<RemoveFailedEventResponse>;
export declare const View: MessageFns<View>;
export declare const FailedEvent: MessageFns<FailedEvent>;
export declare const ImportDataRequest: MessageFns<ImportDataRequest>;
export declare const ImportDataRequest_LocalInput: MessageFns<ImportDataRequest_LocalInput>;
export declare const ImportDataRequest_S3Input: MessageFns<ImportDataRequest_S3Input>;
export declare const ImportDataRequest_GCSInput: MessageFns<ImportDataRequest_GCSInput>;
export declare const ImportDataOrg: MessageFns<ImportDataOrg>;
export declare const DataOrg: MessageFns<DataOrg>;
export declare const ImportDataResponse: MessageFns<ImportDataResponse>;
export declare const ImportDataError: MessageFns<ImportDataError>;
export declare const ImportDataSuccess: MessageFns<ImportDataSuccess>;
export declare const ImportDataSuccessOrg: MessageFns<ImportDataSuccessOrg>;
export declare const ImportDataSuccessProjectGrant: MessageFns<ImportDataSuccessProjectGrant>;
export declare const ImportDataSuccessUserGrant: MessageFns<ImportDataSuccessUserGrant>;
export declare const ImportDataSuccessProjectMember: MessageFns<ImportDataSuccessProjectMember>;
export declare const ImportDataSuccessProjectGrantMember: MessageFns<ImportDataSuccessProjectGrantMember>;
export declare const ImportDataSuccessUserLinks: MessageFns<ImportDataSuccessUserLinks>;
export declare const ImportDataSuccessUserMetadata: MessageFns<ImportDataSuccessUserMetadata>;
export declare const ExportDataRequest: MessageFns<ExportDataRequest>;
export declare const ExportDataRequest_LocalOutput: MessageFns<ExportDataRequest_LocalOutput>;
export declare const ExportDataRequest_S3Output: MessageFns<ExportDataRequest_S3Output>;
export declare const ExportDataRequest_GCSOutput: MessageFns<ExportDataRequest_GCSOutput>;
export declare const ExportDataResponse: MessageFns<ExportDataResponse>;
export declare const ListEventsRequest: MessageFns<ListEventsRequest>;
export declare const ListEventsRequest_creationDateRange: MessageFns<ListEventsRequest_creationDateRange>;
export declare const ListEventsResponse: MessageFns<ListEventsResponse>;
export declare const ListEventTypesRequest: MessageFns<ListEventTypesRequest>;
export declare const ListEventTypesResponse: MessageFns<ListEventTypesResponse>;
export declare const ListAggregateTypesRequest: MessageFns<ListAggregateTypesRequest>;
export declare const ListAggregateTypesResponse: MessageFns<ListAggregateTypesResponse>;
export declare const ActivateFeatureLoginDefaultOrgRequest: MessageFns<ActivateFeatureLoginDefaultOrgRequest>;
export declare const ActivateFeatureLoginDefaultOrgResponse: MessageFns<ActivateFeatureLoginDefaultOrgResponse>;
export declare const ListMilestonesRequest: MessageFns<ListMilestonesRequest>;
export declare const ListMilestonesResponse: MessageFns<ListMilestonesResponse>;
export declare const SetRestrictionsRequest: MessageFns<SetRestrictionsRequest>;
export declare const SelectLanguages: MessageFns<SelectLanguages>;
export declare const SetRestrictionsResponse: MessageFns<SetRestrictionsResponse>;
export declare const GetRestrictionsRequest: MessageFns<GetRestrictionsRequest>;
export declare const GetRestrictionsResponse: MessageFns<GetRestrictionsResponse>;
export type AdminServiceDefinition = typeof AdminServiceDefinition;
export declare const AdminServiceDefinition: {
    readonly name: "AdminService";
    readonly fullName: "zitadel.admin.v1.AdminService";
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
        readonly getAllowedLanguages: {
            readonly name: "GetAllowedLanguages";
            readonly requestType: MessageFns<GetAllowedLanguagesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetAllowedLanguagesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setDefaultLanguage: {
            readonly name: "SetDefaultLanguage";
            readonly requestType: MessageFns<SetDefaultLanguageRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultLanguageResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultLanguage: {
            readonly name: "GetDefaultLanguage";
            readonly requestType: MessageFns<GetDefaultLanguageRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultLanguageResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getMyInstance: {
            readonly name: "GetMyInstance";
            readonly requestType: MessageFns<GetMyInstanceRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetMyInstanceResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listInstanceDomains: {
            readonly name: "ListInstanceDomains";
            readonly requestType: MessageFns<ListInstanceDomainsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListInstanceDomainsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listInstanceTrustedDomains: {
            readonly name: "ListInstanceTrustedDomains";
            readonly requestType: MessageFns<ListInstanceTrustedDomainsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListInstanceTrustedDomainsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addInstanceTrustedDomain: {
            readonly name: "AddInstanceTrustedDomain";
            readonly requestType: MessageFns<AddInstanceTrustedDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddInstanceTrustedDomainResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeInstanceTrustedDomain: {
            readonly name: "RemoveInstanceTrustedDomain";
            readonly requestType: MessageFns<RemoveInstanceTrustedDomainRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveInstanceTrustedDomainResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listSecretGenerators: {
            readonly name: "ListSecretGenerators";
            readonly requestType: MessageFns<ListSecretGeneratorsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListSecretGeneratorsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSecretGenerator: {
            readonly name: "GetSecretGenerator";
            readonly requestType: MessageFns<GetSecretGeneratorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetSecretGeneratorResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSecretGenerator: {
            readonly name: "UpdateSecretGenerator";
            readonly requestType: MessageFns<UpdateSecretGeneratorRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateSecretGeneratorResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSMTPConfig: {
            readonly name: "GetSMTPConfig";
            readonly requestType: MessageFns<GetSMTPConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetSMTPConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSMTPConfigById: {
            readonly name: "GetSMTPConfigById";
            readonly requestType: MessageFns<GetSMTPConfigByIdRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetSMTPConfigByIdResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addSMTPConfig: {
            readonly name: "AddSMTPConfig";
            readonly requestType: MessageFns<AddSMTPConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddSMTPConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSMTPConfig: {
            readonly name: "UpdateSMTPConfig";
            readonly requestType: MessageFns<UpdateSMTPConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateSMTPConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSMTPConfigPassword: {
            readonly name: "UpdateSMTPConfigPassword";
            readonly requestType: MessageFns<UpdateSMTPConfigPasswordRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateSMTPConfigPasswordResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly activateSMTPConfig: {
            readonly name: "ActivateSMTPConfig";
            readonly requestType: MessageFns<ActivateSMTPConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateSMTPConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateSMTPConfig: {
            readonly name: "DeactivateSMTPConfig";
            readonly requestType: MessageFns<DeactivateSMTPConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateSMTPConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeSMTPConfig: {
            readonly name: "RemoveSMTPConfig";
            readonly requestType: MessageFns<RemoveSMTPConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveSMTPConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly testSMTPConfigById: {
            readonly name: "TestSMTPConfigById";
            readonly requestType: MessageFns<TestSMTPConfigByIdRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TestSMTPConfigByIdResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly testSMTPConfig: {
            readonly name: "TestSMTPConfig";
            readonly requestType: MessageFns<TestSMTPConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TestSMTPConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listSMTPConfigs: {
            readonly name: "ListSMTPConfigs";
            readonly requestType: MessageFns<ListSMTPConfigsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListSMTPConfigsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listEmailProviders: {
            readonly name: "ListEmailProviders";
            readonly requestType: MessageFns<ListEmailProvidersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListEmailProvidersResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getEmailProvider: {
            readonly name: "GetEmailProvider";
            readonly requestType: MessageFns<GetEmailProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetEmailProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getEmailProviderById: {
            readonly name: "GetEmailProviderById";
            readonly requestType: MessageFns<GetEmailProviderByIdRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetEmailProviderByIdResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addEmailProviderSMTP: {
            readonly name: "AddEmailProviderSMTP";
            readonly requestType: MessageFns<AddEmailProviderSMTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddEmailProviderSMTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateEmailProviderSMTP: {
            readonly name: "UpdateEmailProviderSMTP";
            readonly requestType: MessageFns<UpdateEmailProviderSMTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateEmailProviderSMTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addEmailProviderHTTP: {
            readonly name: "AddEmailProviderHTTP";
            readonly requestType: MessageFns<AddEmailProviderHTTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddEmailProviderHTTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateEmailProviderHTTP: {
            readonly name: "UpdateEmailProviderHTTP";
            readonly requestType: MessageFns<UpdateEmailProviderHTTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateEmailProviderHTTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateEmailProviderSMTPPassword: {
            readonly name: "UpdateEmailProviderSMTPPassword";
            readonly requestType: MessageFns<UpdateEmailProviderSMTPPasswordRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateEmailProviderSMTPPasswordResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly activateEmailProvider: {
            readonly name: "ActivateEmailProvider";
            readonly requestType: MessageFns<ActivateEmailProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateEmailProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateEmailProvider: {
            readonly name: "DeactivateEmailProvider";
            readonly requestType: MessageFns<DeactivateEmailProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateEmailProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeEmailProvider: {
            readonly name: "RemoveEmailProvider";
            readonly requestType: MessageFns<RemoveEmailProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveEmailProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly testEmailProviderSMTPById: {
            readonly name: "TestEmailProviderSMTPById";
            readonly requestType: MessageFns<TestEmailProviderSMTPByIdRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TestEmailProviderSMTPByIdResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly testEmailProviderSMTP: {
            readonly name: "TestEmailProviderSMTP";
            readonly requestType: MessageFns<TestEmailProviderSMTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<TestEmailProviderSMTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listSMSProviders: {
            readonly name: "ListSMSProviders";
            readonly requestType: MessageFns<ListSMSProvidersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListSMSProvidersResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSMSProvider: {
            readonly name: "GetSMSProvider";
            readonly requestType: MessageFns<GetSMSProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetSMSProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addSMSProviderTwilio: {
            readonly name: "AddSMSProviderTwilio";
            readonly requestType: MessageFns<AddSMSProviderTwilioRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddSMSProviderTwilioResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSMSProviderTwilio: {
            readonly name: "UpdateSMSProviderTwilio";
            readonly requestType: MessageFns<UpdateSMSProviderTwilioRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateSMSProviderTwilioResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSMSProviderTwilioToken: {
            readonly name: "UpdateSMSProviderTwilioToken";
            readonly requestType: MessageFns<UpdateSMSProviderTwilioTokenRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateSMSProviderTwilioTokenResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addSMSProviderHTTP: {
            readonly name: "AddSMSProviderHTTP";
            readonly requestType: MessageFns<AddSMSProviderHTTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddSMSProviderHTTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateSMSProviderHTTP: {
            readonly name: "UpdateSMSProviderHTTP";
            readonly requestType: MessageFns<UpdateSMSProviderHTTPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateSMSProviderHTTPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly activateSMSProvider: {
            readonly name: "ActivateSMSProvider";
            readonly requestType: MessageFns<ActivateSMSProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateSMSProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateSMSProvider: {
            readonly name: "DeactivateSMSProvider";
            readonly requestType: MessageFns<DeactivateSMSProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateSMSProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeSMSProvider: {
            readonly name: "RemoveSMSProvider";
            readonly requestType: MessageFns<RemoveSMSProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveSMSProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOIDCSettings: {
            readonly name: "GetOIDCSettings";
            readonly requestType: MessageFns<GetOIDCSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetOIDCSettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOIDCSettings: {
            readonly name: "AddOIDCSettings";
            readonly requestType: MessageFns<AddOIDCSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOIDCSettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateOIDCSettings: {
            readonly name: "UpdateOIDCSettings";
            readonly requestType: MessageFns<UpdateOIDCSettingsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateOIDCSettingsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getFileSystemNotificationProvider: {
            readonly name: "GetFileSystemNotificationProvider";
            readonly requestType: MessageFns<GetFileSystemNotificationProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetFileSystemNotificationProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getLogNotificationProvider: {
            readonly name: "GetLogNotificationProvider";
            readonly requestType: MessageFns<GetLogNotificationProviderRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetLogNotificationProviderResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getSecurityPolicy: {
            readonly name: "GetSecurityPolicy";
            readonly requestType: MessageFns<GetSecurityPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetSecurityPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setSecurityPolicy: {
            readonly name: "SetSecurityPolicy";
            readonly requestType: MessageFns<SetSecurityPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetSecurityPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getOrgByID: {
            readonly name: "GetOrgByID";
            readonly requestType: MessageFns<GetOrgByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetOrgByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly isOrgUnique: {
            readonly name: "IsOrgUnique";
            readonly requestType: MessageFns<IsOrgUniqueRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<IsOrgUniqueResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setDefaultOrg: {
            readonly name: "SetDefaultOrg";
            readonly requestType: MessageFns<SetDefaultOrgRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultOrgResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getDefaultOrg: {
            readonly name: "GetDefaultOrg";
            readonly requestType: MessageFns<GetDefaultOrgRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetDefaultOrgResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listOrgs: {
            readonly name: "ListOrgs";
            readonly requestType: MessageFns<ListOrgsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListOrgsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setUpOrg: {
            readonly name: "SetUpOrg";
            readonly requestType: MessageFns<SetUpOrgRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetUpOrgResponse>;
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
        readonly getIDPByID: {
            readonly name: "GetIDPByID";
            readonly requestType: MessageFns<GetIDPByIDRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetIDPByIDResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listIDPs: {
            readonly name: "ListIDPs";
            readonly requestType: MessageFns<ListIDPsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListIDPsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addOIDCIDP: {
            readonly name: "AddOIDCIDP";
            readonly requestType: MessageFns<AddOIDCIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddOIDCIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addJWTIDP: {
            readonly name: "AddJWTIDP";
            readonly requestType: MessageFns<AddJWTIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddJWTIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateIDP: {
            readonly name: "UpdateIDP";
            readonly requestType: MessageFns<UpdateIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly deactivateIDP: {
            readonly name: "DeactivateIDP";
            readonly requestType: MessageFns<DeactivateIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<DeactivateIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly reactivateIDP: {
            readonly name: "ReactivateIDP";
            readonly requestType: MessageFns<ReactivateIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ReactivateIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeIDP: {
            readonly name: "RemoveIDP";
            readonly requestType: MessageFns<RemoveIDPRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveIDPResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateIDPOIDCConfig: {
            readonly name: "UpdateIDPOIDCConfig";
            readonly requestType: MessageFns<UpdateIDPOIDCConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateIDPOIDCConfigResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateIDPJWTConfig: {
            readonly name: "UpdateIDPJWTConfig";
            readonly requestType: MessageFns<UpdateIDPJWTConfigRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateIDPJWTConfigResponse>;
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
        readonly updateOrgIAMPolicy: {
            readonly name: "UpdateOrgIAMPolicy";
            readonly requestType: MessageFns<UpdateOrgIAMPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateOrgIAMPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomOrgIAMPolicy: {
            readonly name: "GetCustomOrgIAMPolicy";
            readonly requestType: MessageFns<GetCustomOrgIAMPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomOrgIAMPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomOrgIAMPolicy: {
            readonly name: "AddCustomOrgIAMPolicy";
            readonly requestType: MessageFns<AddCustomOrgIAMPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddCustomOrgIAMPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomOrgIAMPolicy: {
            readonly name: "UpdateCustomOrgIAMPolicy";
            readonly requestType: MessageFns<UpdateCustomOrgIAMPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateCustomOrgIAMPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomOrgIAMPolicyToDefault: {
            readonly name: "ResetCustomOrgIAMPolicyToDefault";
            readonly requestType: MessageFns<ResetCustomOrgIAMPolicyToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomOrgIAMPolicyToDefaultResponse>;
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
        readonly updateDomainPolicy: {
            readonly name: "UpdateDomainPolicy";
            readonly requestType: MessageFns<UpdateDomainPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateDomainPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getCustomDomainPolicy: {
            readonly name: "GetCustomDomainPolicy";
            readonly requestType: MessageFns<GetCustomDomainPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetCustomDomainPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addCustomDomainPolicy: {
            readonly name: "AddCustomDomainPolicy";
            readonly requestType: MessageFns<AddCustomDomainPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddCustomDomainPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateCustomDomainPolicy: {
            readonly name: "UpdateCustomDomainPolicy";
            readonly requestType: MessageFns<UpdateCustomDomainPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateCustomDomainPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly resetCustomDomainPolicyToDefault: {
            readonly name: "ResetCustomDomainPolicyToDefault";
            readonly requestType: MessageFns<ResetCustomDomainPolicyToDefaultRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ResetCustomDomainPolicyToDefaultResponse>;
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
        readonly updateLabelPolicy: {
            readonly name: "UpdateLabelPolicy";
            readonly requestType: MessageFns<UpdateLabelPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateLabelPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly activateLabelPolicy: {
            readonly name: "ActivateLabelPolicy";
            readonly requestType: MessageFns<ActivateLabelPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateLabelPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeLabelPolicyLogo: {
            readonly name: "RemoveLabelPolicyLogo";
            readonly requestType: MessageFns<RemoveLabelPolicyLogoRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveLabelPolicyLogoResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeLabelPolicyLogoDark: {
            readonly name: "RemoveLabelPolicyLogoDark";
            readonly requestType: MessageFns<RemoveLabelPolicyLogoDarkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveLabelPolicyLogoDarkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeLabelPolicyIcon: {
            readonly name: "RemoveLabelPolicyIcon";
            readonly requestType: MessageFns<RemoveLabelPolicyIconRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveLabelPolicyIconResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeLabelPolicyIconDark: {
            readonly name: "RemoveLabelPolicyIconDark";
            readonly requestType: MessageFns<RemoveLabelPolicyIconDarkRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveLabelPolicyIconDarkResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeLabelPolicyFont: {
            readonly name: "RemoveLabelPolicyFont";
            readonly requestType: MessageFns<RemoveLabelPolicyFontRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveLabelPolicyFontResponse>;
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
        readonly updateLoginPolicy: {
            readonly name: "UpdateLoginPolicy";
            readonly requestType: MessageFns<UpdateLoginPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateLoginPolicyResponse>;
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
        readonly updatePasswordComplexityPolicy: {
            readonly name: "UpdatePasswordComplexityPolicy";
            readonly requestType: MessageFns<UpdatePasswordComplexityPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdatePasswordComplexityPolicyResponse>;
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
        readonly updatePasswordAgePolicy: {
            readonly name: "UpdatePasswordAgePolicy";
            readonly requestType: MessageFns<UpdatePasswordAgePolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdatePasswordAgePolicyResponse>;
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
        readonly updateLockoutPolicy: {
            readonly name: "UpdateLockoutPolicy";
            readonly requestType: MessageFns<UpdateLockoutPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateLockoutPolicyResponse>;
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
        readonly updatePrivacyPolicy: {
            readonly name: "UpdatePrivacyPolicy";
            readonly requestType: MessageFns<UpdatePrivacyPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdatePrivacyPolicyResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addNotificationPolicy: {
            readonly name: "AddNotificationPolicy";
            readonly requestType: MessageFns<AddNotificationPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddNotificationPolicyResponse>;
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
        readonly updateNotificationPolicy: {
            readonly name: "UpdateNotificationPolicy";
            readonly requestType: MessageFns<UpdateNotificationPolicyRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateNotificationPolicyResponse>;
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
        readonly setDefaultInitMessageText: {
            readonly name: "SetDefaultInitMessageText";
            readonly requestType: MessageFns<SetDefaultInitMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultInitMessageTextResponse>;
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
        readonly setDefaultPasswordResetMessageText: {
            readonly name: "SetDefaultPasswordResetMessageText";
            readonly requestType: MessageFns<SetDefaultPasswordResetMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultPasswordResetMessageTextResponse>;
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
        readonly setDefaultVerifyEmailMessageText: {
            readonly name: "SetDefaultVerifyEmailMessageText";
            readonly requestType: MessageFns<SetDefaultVerifyEmailMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultVerifyEmailMessageTextResponse>;
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
        readonly setDefaultVerifyPhoneMessageText: {
            readonly name: "SetDefaultVerifyPhoneMessageText";
            readonly requestType: MessageFns<SetDefaultVerifyPhoneMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultVerifyPhoneMessageTextResponse>;
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
        readonly setDefaultVerifySMSOTPMessageText: {
            readonly name: "SetDefaultVerifySMSOTPMessageText";
            readonly requestType: MessageFns<SetDefaultVerifySMSOTPMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultVerifySMSOTPMessageTextResponse>;
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
        readonly setDefaultVerifyEmailOTPMessageText: {
            readonly name: "SetDefaultVerifyEmailOTPMessageText";
            readonly requestType: MessageFns<SetDefaultVerifyEmailOTPMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultVerifyEmailOTPMessageTextResponse>;
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
        readonly setDefaultDomainClaimedMessageText: {
            readonly name: "SetDefaultDomainClaimedMessageText";
            readonly requestType: MessageFns<SetDefaultDomainClaimedMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultDomainClaimedMessageTextResponse>;
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
        readonly setDefaultPasswordlessRegistrationMessageText: {
            readonly name: "SetDefaultPasswordlessRegistrationMessageText";
            readonly requestType: MessageFns<SetDefaultPasswordlessRegistrationMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultPasswordlessRegistrationMessageTextResponse>;
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
        readonly setDefaultPasswordChangeMessageText: {
            readonly name: "SetDefaultPasswordChangeMessageText";
            readonly requestType: MessageFns<SetDefaultPasswordChangeMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultPasswordChangeMessageTextResponse>;
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
        readonly setDefaultInviteUserMessageText: {
            readonly name: "SetDefaultInviteUserMessageText";
            readonly requestType: MessageFns<SetDefaultInviteUserMessageTextRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetDefaultInviteUserMessageTextResponse>;
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
        readonly listIAMMemberRoles: {
            readonly name: "ListIAMMemberRoles";
            readonly requestType: MessageFns<ListIAMMemberRolesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListIAMMemberRolesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listIAMMembers: {
            readonly name: "ListIAMMembers";
            readonly requestType: MessageFns<ListIAMMembersRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListIAMMembersResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly addIAMMember: {
            readonly name: "AddIAMMember";
            readonly requestType: MessageFns<AddIAMMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<AddIAMMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly updateIAMMember: {
            readonly name: "UpdateIAMMember";
            readonly requestType: MessageFns<UpdateIAMMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<UpdateIAMMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeIAMMember: {
            readonly name: "RemoveIAMMember";
            readonly requestType: MessageFns<RemoveIAMMemberRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveIAMMemberResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listViews: {
            readonly name: "ListViews";
            readonly requestType: MessageFns<ListViewsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListViewsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listFailedEvents: {
            readonly name: "ListFailedEvents";
            readonly requestType: MessageFns<ListFailedEventsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListFailedEventsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly removeFailedEvent: {
            readonly name: "RemoveFailedEvent";
            readonly requestType: MessageFns<RemoveFailedEventRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<RemoveFailedEventResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly importData: {
            readonly name: "ImportData";
            readonly requestType: MessageFns<ImportDataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ImportDataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly exportData: {
            readonly name: "ExportData";
            readonly requestType: MessageFns<ExportDataRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ExportDataResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listEventTypes: {
            readonly name: "ListEventTypes";
            readonly requestType: MessageFns<ListEventTypesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListEventTypesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listEvents: {
            readonly name: "ListEvents";
            readonly requestType: MessageFns<ListEventsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListEventsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listAggregateTypes: {
            readonly name: "ListAggregateTypes";
            readonly requestType: MessageFns<ListAggregateTypesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListAggregateTypesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly activateFeatureLoginDefaultOrg: {
            readonly name: "ActivateFeatureLoginDefaultOrg";
            readonly requestType: MessageFns<ActivateFeatureLoginDefaultOrgRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ActivateFeatureLoginDefaultOrgResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly listMilestones: {
            readonly name: "ListMilestones";
            readonly requestType: MessageFns<ListMilestonesRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<ListMilestonesResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly setRestrictions: {
            readonly name: "SetRestrictions";
            readonly requestType: MessageFns<SetRestrictionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<SetRestrictionsResponse>;
            readonly responseStream: false;
            readonly options: {
                readonly _unknownFields: {
                    readonly 8338: readonly [Buffer];
                    readonly 400002: readonly [Buffer];
                    readonly 578365826: readonly [Buffer];
                };
            };
        };
        readonly getRestrictions: {
            readonly name: "GetRestrictions";
            readonly requestType: MessageFns<GetRestrictionsRequest>;
            readonly requestStream: false;
            readonly responseType: MessageFns<GetRestrictionsResponse>;
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
export interface AdminServiceImplementation<CallContextExt = {}> {
    healthz(request: HealthzRequest, context: CallContext & CallContextExt): Promise<DeepPartial<HealthzResponse>>;
    getSupportedLanguages(request: GetSupportedLanguagesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSupportedLanguagesResponse>>;
    getAllowedLanguages(request: GetAllowedLanguagesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetAllowedLanguagesResponse>>;
    setDefaultLanguage(request: SetDefaultLanguageRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultLanguageResponse>>;
    getDefaultLanguage(request: GetDefaultLanguageRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLanguageResponse>>;
    getMyInstance(request: GetMyInstanceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetMyInstanceResponse>>;
    listInstanceDomains(request: ListInstanceDomainsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListInstanceDomainsResponse>>;
    listInstanceTrustedDomains(request: ListInstanceTrustedDomainsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListInstanceTrustedDomainsResponse>>;
    addInstanceTrustedDomain(request: AddInstanceTrustedDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddInstanceTrustedDomainResponse>>;
    removeInstanceTrustedDomain(request: RemoveInstanceTrustedDomainRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveInstanceTrustedDomainResponse>>;
    listSecretGenerators(request: ListSecretGeneratorsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListSecretGeneratorsResponse>>;
    getSecretGenerator(request: GetSecretGeneratorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSecretGeneratorResponse>>;
    updateSecretGenerator(request: UpdateSecretGeneratorRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSecretGeneratorResponse>>;
    getSMTPConfig(request: GetSMTPConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSMTPConfigResponse>>;
    getSMTPConfigById(request: GetSMTPConfigByIdRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSMTPConfigByIdResponse>>;
    addSMTPConfig(request: AddSMTPConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSMTPConfigResponse>>;
    updateSMTPConfig(request: UpdateSMTPConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSMTPConfigResponse>>;
    updateSMTPConfigPassword(request: UpdateSMTPConfigPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSMTPConfigPasswordResponse>>;
    activateSMTPConfig(request: ActivateSMTPConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateSMTPConfigResponse>>;
    deactivateSMTPConfig(request: DeactivateSMTPConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateSMTPConfigResponse>>;
    removeSMTPConfig(request: RemoveSMTPConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveSMTPConfigResponse>>;
    testSMTPConfigById(request: TestSMTPConfigByIdRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TestSMTPConfigByIdResponse>>;
    testSMTPConfig(request: TestSMTPConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TestSMTPConfigResponse>>;
    listSMTPConfigs(request: ListSMTPConfigsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListSMTPConfigsResponse>>;
    listEmailProviders(request: ListEmailProvidersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListEmailProvidersResponse>>;
    getEmailProvider(request: GetEmailProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetEmailProviderResponse>>;
    getEmailProviderById(request: GetEmailProviderByIdRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetEmailProviderByIdResponse>>;
    addEmailProviderSMTP(request: AddEmailProviderSMTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddEmailProviderSMTPResponse>>;
    updateEmailProviderSMTP(request: UpdateEmailProviderSMTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateEmailProviderSMTPResponse>>;
    addEmailProviderHTTP(request: AddEmailProviderHTTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddEmailProviderHTTPResponse>>;
    updateEmailProviderHTTP(request: UpdateEmailProviderHTTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateEmailProviderHTTPResponse>>;
    updateEmailProviderSMTPPassword(request: UpdateEmailProviderSMTPPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateEmailProviderSMTPPasswordResponse>>;
    activateEmailProvider(request: ActivateEmailProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateEmailProviderResponse>>;
    deactivateEmailProvider(request: DeactivateEmailProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateEmailProviderResponse>>;
    removeEmailProvider(request: RemoveEmailProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveEmailProviderResponse>>;
    testEmailProviderSMTPById(request: TestEmailProviderSMTPByIdRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TestEmailProviderSMTPByIdResponse>>;
    testEmailProviderSMTP(request: TestEmailProviderSMTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<TestEmailProviderSMTPResponse>>;
    listSMSProviders(request: ListSMSProvidersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListSMSProvidersResponse>>;
    getSMSProvider(request: GetSMSProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSMSProviderResponse>>;
    addSMSProviderTwilio(request: AddSMSProviderTwilioRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSMSProviderTwilioResponse>>;
    updateSMSProviderTwilio(request: UpdateSMSProviderTwilioRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSMSProviderTwilioResponse>>;
    updateSMSProviderTwilioToken(request: UpdateSMSProviderTwilioTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSMSProviderTwilioTokenResponse>>;
    addSMSProviderHTTP(request: AddSMSProviderHTTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddSMSProviderHTTPResponse>>;
    updateSMSProviderHTTP(request: UpdateSMSProviderHTTPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateSMSProviderHTTPResponse>>;
    activateSMSProvider(request: ActivateSMSProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateSMSProviderResponse>>;
    deactivateSMSProvider(request: DeactivateSMSProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateSMSProviderResponse>>;
    removeSMSProvider(request: RemoveSMSProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveSMSProviderResponse>>;
    getOIDCSettings(request: GetOIDCSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOIDCSettingsResponse>>;
    addOIDCSettings(request: AddOIDCSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOIDCSettingsResponse>>;
    updateOIDCSettings(request: UpdateOIDCSettingsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOIDCSettingsResponse>>;
    getFileSystemNotificationProvider(request: GetFileSystemNotificationProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetFileSystemNotificationProviderResponse>>;
    getLogNotificationProvider(request: GetLogNotificationProviderRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLogNotificationProviderResponse>>;
    getSecurityPolicy(request: GetSecurityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetSecurityPolicyResponse>>;
    setSecurityPolicy(request: SetSecurityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetSecurityPolicyResponse>>;
    getOrgByID(request: GetOrgByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgByIDResponse>>;
    isOrgUnique(request: IsOrgUniqueRequest, context: CallContext & CallContextExt): Promise<DeepPartial<IsOrgUniqueResponse>>;
    setDefaultOrg(request: SetDefaultOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultOrgResponse>>;
    getDefaultOrg(request: GetDefaultOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultOrgResponse>>;
    listOrgs(request: ListOrgsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListOrgsResponse>>;
    setUpOrg(request: SetUpOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetUpOrgResponse>>;
    removeOrg(request: RemoveOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveOrgResponse>>;
    getIDPByID(request: GetIDPByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetIDPByIDResponse>>;
    listIDPs(request: ListIDPsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListIDPsResponse>>;
    addOIDCIDP(request: AddOIDCIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddOIDCIDPResponse>>;
    addJWTIDP(request: AddJWTIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddJWTIDPResponse>>;
    updateIDP(request: UpdateIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateIDPResponse>>;
    deactivateIDP(request: DeactivateIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeactivateIDPResponse>>;
    reactivateIDP(request: ReactivateIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ReactivateIDPResponse>>;
    removeIDP(request: RemoveIDPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveIDPResponse>>;
    updateIDPOIDCConfig(request: UpdateIDPOIDCConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateIDPOIDCConfigResponse>>;
    updateIDPJWTConfig(request: UpdateIDPJWTConfigRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateIDPJWTConfigResponse>>;
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
    getOrgIAMPolicy(request: GetOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetOrgIAMPolicyResponse>>;
    updateOrgIAMPolicy(request: UpdateOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateOrgIAMPolicyResponse>>;
    getCustomOrgIAMPolicy(request: GetCustomOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomOrgIAMPolicyResponse>>;
    addCustomOrgIAMPolicy(request: AddCustomOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomOrgIAMPolicyResponse>>;
    updateCustomOrgIAMPolicy(request: UpdateCustomOrgIAMPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomOrgIAMPolicyResponse>>;
    resetCustomOrgIAMPolicyToDefault(request: ResetCustomOrgIAMPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomOrgIAMPolicyToDefaultResponse>>;
    getDomainPolicy(request: GetDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDomainPolicyResponse>>;
    updateDomainPolicy(request: UpdateDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateDomainPolicyResponse>>;
    getCustomDomainPolicy(request: GetCustomDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomDomainPolicyResponse>>;
    addCustomDomainPolicy(request: AddCustomDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddCustomDomainPolicyResponse>>;
    updateCustomDomainPolicy(request: UpdateCustomDomainPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateCustomDomainPolicyResponse>>;
    resetCustomDomainPolicyToDefault(request: ResetCustomDomainPolicyToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomDomainPolicyToDefaultResponse>>;
    getLabelPolicy(request: GetLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLabelPolicyResponse>>;
    getPreviewLabelPolicy(request: GetPreviewLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPreviewLabelPolicyResponse>>;
    updateLabelPolicy(request: UpdateLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateLabelPolicyResponse>>;
    activateLabelPolicy(request: ActivateLabelPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateLabelPolicyResponse>>;
    removeLabelPolicyLogo(request: RemoveLabelPolicyLogoRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveLabelPolicyLogoResponse>>;
    removeLabelPolicyLogoDark(request: RemoveLabelPolicyLogoDarkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveLabelPolicyLogoDarkResponse>>;
    removeLabelPolicyIcon(request: RemoveLabelPolicyIconRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveLabelPolicyIconResponse>>;
    removeLabelPolicyIconDark(request: RemoveLabelPolicyIconDarkRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveLabelPolicyIconDarkResponse>>;
    removeLabelPolicyFont(request: RemoveLabelPolicyFontRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveLabelPolicyFontResponse>>;
    getLoginPolicy(request: GetLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLoginPolicyResponse>>;
    updateLoginPolicy(request: UpdateLoginPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateLoginPolicyResponse>>;
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
    updatePasswordComplexityPolicy(request: UpdatePasswordComplexityPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdatePasswordComplexityPolicyResponse>>;
    getPasswordAgePolicy(request: GetPasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPasswordAgePolicyResponse>>;
    updatePasswordAgePolicy(request: UpdatePasswordAgePolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdatePasswordAgePolicyResponse>>;
    getLockoutPolicy(request: GetLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetLockoutPolicyResponse>>;
    updateLockoutPolicy(request: UpdateLockoutPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateLockoutPolicyResponse>>;
    getPrivacyPolicy(request: GetPrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPrivacyPolicyResponse>>;
    updatePrivacyPolicy(request: UpdatePrivacyPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdatePrivacyPolicyResponse>>;
    addNotificationPolicy(request: AddNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddNotificationPolicyResponse>>;
    getNotificationPolicy(request: GetNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNotificationPolicyResponse>>;
    updateNotificationPolicy(request: UpdateNotificationPolicyRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateNotificationPolicyResponse>>;
    getDefaultInitMessageText(request: GetDefaultInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultInitMessageTextResponse>>;
    getCustomInitMessageText(request: GetCustomInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomInitMessageTextResponse>>;
    setDefaultInitMessageText(request: SetDefaultInitMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultInitMessageTextResponse>>;
    resetCustomInitMessageTextToDefault(request: ResetCustomInitMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomInitMessageTextToDefaultResponse>>;
    getDefaultPasswordResetMessageText(request: GetDefaultPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordResetMessageTextResponse>>;
    getCustomPasswordResetMessageText(request: GetCustomPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordResetMessageTextResponse>>;
    setDefaultPasswordResetMessageText(request: SetDefaultPasswordResetMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultPasswordResetMessageTextResponse>>;
    resetCustomPasswordResetMessageTextToDefault(request: ResetCustomPasswordResetMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordResetMessageTextToDefaultResponse>>;
    getDefaultVerifyEmailMessageText(request: GetDefaultVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyEmailMessageTextResponse>>;
    getCustomVerifyEmailMessageText(request: GetCustomVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyEmailMessageTextResponse>>;
    setDefaultVerifyEmailMessageText(request: SetDefaultVerifyEmailMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultVerifyEmailMessageTextResponse>>;
    resetCustomVerifyEmailMessageTextToDefault(request: ResetCustomVerifyEmailMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultResponse>>;
    getDefaultVerifyPhoneMessageText(request: GetDefaultVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyPhoneMessageTextResponse>>;
    getCustomVerifyPhoneMessageText(request: GetCustomVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyPhoneMessageTextResponse>>;
    setDefaultVerifyPhoneMessageText(request: SetDefaultVerifyPhoneMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultVerifyPhoneMessageTextResponse>>;
    resetCustomVerifyPhoneMessageTextToDefault(request: ResetCustomVerifyPhoneMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultResponse>>;
    getDefaultVerifySMSOTPMessageText(request: GetDefaultVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifySMSOTPMessageTextResponse>>;
    getCustomVerifySMSOTPMessageText(request: GetCustomVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifySMSOTPMessageTextResponse>>;
    setDefaultVerifySMSOTPMessageText(request: SetDefaultVerifySMSOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultVerifySMSOTPMessageTextResponse>>;
    resetCustomVerifySMSOTPMessageTextToDefault(request: ResetCustomVerifySMSOTPMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>>;
    getDefaultVerifyEmailOTPMessageText(request: GetDefaultVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultVerifyEmailOTPMessageTextResponse>>;
    getCustomVerifyEmailOTPMessageText(request: GetCustomVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomVerifyEmailOTPMessageTextResponse>>;
    setDefaultVerifyEmailOTPMessageText(request: SetDefaultVerifyEmailOTPMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultVerifyEmailOTPMessageTextResponse>>;
    resetCustomVerifyEmailOTPMessageTextToDefault(request: ResetCustomVerifyEmailOTPMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>>;
    getDefaultDomainClaimedMessageText(request: GetDefaultDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultDomainClaimedMessageTextResponse>>;
    getCustomDomainClaimedMessageText(request: GetCustomDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomDomainClaimedMessageTextResponse>>;
    setDefaultDomainClaimedMessageText(request: SetDefaultDomainClaimedMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultDomainClaimedMessageTextResponse>>;
    resetCustomDomainClaimedMessageTextToDefault(request: ResetCustomDomainClaimedMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultResponse>>;
    getDefaultPasswordlessRegistrationMessageText(request: GetDefaultPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordlessRegistrationMessageTextResponse>>;
    getCustomPasswordlessRegistrationMessageText(request: GetCustomPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordlessRegistrationMessageTextResponse>>;
    setDefaultPasswordlessRegistrationMessageText(request: SetDefaultPasswordlessRegistrationMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultPasswordlessRegistrationMessageTextResponse>>;
    resetCustomPasswordlessRegistrationMessageTextToDefault(request: ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>>;
    getDefaultPasswordChangeMessageText(request: GetDefaultPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultPasswordChangeMessageTextResponse>>;
    getCustomPasswordChangeMessageText(request: GetCustomPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomPasswordChangeMessageTextResponse>>;
    setDefaultPasswordChangeMessageText(request: SetDefaultPasswordChangeMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultPasswordChangeMessageTextResponse>>;
    resetCustomPasswordChangeMessageTextToDefault(request: ResetCustomPasswordChangeMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultResponse>>;
    getDefaultInviteUserMessageText(request: GetDefaultInviteUserMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultInviteUserMessageTextResponse>>;
    getCustomInviteUserMessageText(request: GetCustomInviteUserMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomInviteUserMessageTextResponse>>;
    setDefaultInviteUserMessageText(request: SetDefaultInviteUserMessageTextRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDefaultInviteUserMessageTextResponse>>;
    resetCustomInviteUserMessageTextToDefault(request: ResetCustomInviteUserMessageTextToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomInviteUserMessageTextToDefaultResponse>>;
    getDefaultLoginTexts(request: GetDefaultLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDefaultLoginTextsResponse>>;
    getCustomLoginTexts(request: GetCustomLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCustomLoginTextsResponse>>;
    setCustomLoginText(request: SetCustomLoginTextsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetCustomLoginTextsResponse>>;
    resetCustomLoginTextToDefault(request: ResetCustomLoginTextsToDefaultRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetCustomLoginTextsToDefaultResponse>>;
    listIAMMemberRoles(request: ListIAMMemberRolesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListIAMMemberRolesResponse>>;
    listIAMMembers(request: ListIAMMembersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListIAMMembersResponse>>;
    addIAMMember(request: AddIAMMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AddIAMMemberResponse>>;
    updateIAMMember(request: UpdateIAMMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateIAMMemberResponse>>;
    removeIAMMember(request: RemoveIAMMemberRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveIAMMemberResponse>>;
    listViews(request: ListViewsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListViewsResponse>>;
    listFailedEvents(request: ListFailedEventsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFailedEventsResponse>>;
    removeFailedEvent(request: RemoveFailedEventRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RemoveFailedEventResponse>>;
    importData(request: ImportDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ImportDataResponse>>;
    exportData(request: ExportDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ExportDataResponse>>;
    listEventTypes(request: ListEventTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListEventTypesResponse>>;
    listEvents(request: ListEventsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListEventsResponse>>;
    listAggregateTypes(request: ListAggregateTypesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAggregateTypesResponse>>;
    activateFeatureLoginDefaultOrg(request: ActivateFeatureLoginDefaultOrgRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ActivateFeatureLoginDefaultOrgResponse>>;
    listMilestones(request: ListMilestonesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListMilestonesResponse>>;
    setRestrictions(request: SetRestrictionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetRestrictionsResponse>>;
    getRestrictions(request: GetRestrictionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetRestrictionsResponse>>;
}
export interface AdminServiceClient<CallOptionsExt = {}> {
    healthz(request: DeepPartial<HealthzRequest>, options?: CallOptions & CallOptionsExt): Promise<HealthzResponse>;
    getSupportedLanguages(request: DeepPartial<GetSupportedLanguagesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSupportedLanguagesResponse>;
    getAllowedLanguages(request: DeepPartial<GetAllowedLanguagesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetAllowedLanguagesResponse>;
    setDefaultLanguage(request: DeepPartial<SetDefaultLanguageRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultLanguageResponse>;
    getDefaultLanguage(request: DeepPartial<GetDefaultLanguageRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLanguageResponse>;
    getMyInstance(request: DeepPartial<GetMyInstanceRequest>, options?: CallOptions & CallOptionsExt): Promise<GetMyInstanceResponse>;
    listInstanceDomains(request: DeepPartial<ListInstanceDomainsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListInstanceDomainsResponse>;
    listInstanceTrustedDomains(request: DeepPartial<ListInstanceTrustedDomainsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListInstanceTrustedDomainsResponse>;
    addInstanceTrustedDomain(request: DeepPartial<AddInstanceTrustedDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<AddInstanceTrustedDomainResponse>;
    removeInstanceTrustedDomain(request: DeepPartial<RemoveInstanceTrustedDomainRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveInstanceTrustedDomainResponse>;
    listSecretGenerators(request: DeepPartial<ListSecretGeneratorsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListSecretGeneratorsResponse>;
    getSecretGenerator(request: DeepPartial<GetSecretGeneratorRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSecretGeneratorResponse>;
    updateSecretGenerator(request: DeepPartial<UpdateSecretGeneratorRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSecretGeneratorResponse>;
    getSMTPConfig(request: DeepPartial<GetSMTPConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSMTPConfigResponse>;
    getSMTPConfigById(request: DeepPartial<GetSMTPConfigByIdRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSMTPConfigByIdResponse>;
    addSMTPConfig(request: DeepPartial<AddSMTPConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSMTPConfigResponse>;
    updateSMTPConfig(request: DeepPartial<UpdateSMTPConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSMTPConfigResponse>;
    updateSMTPConfigPassword(request: DeepPartial<UpdateSMTPConfigPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSMTPConfigPasswordResponse>;
    activateSMTPConfig(request: DeepPartial<ActivateSMTPConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateSMTPConfigResponse>;
    deactivateSMTPConfig(request: DeepPartial<DeactivateSMTPConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateSMTPConfigResponse>;
    removeSMTPConfig(request: DeepPartial<RemoveSMTPConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveSMTPConfigResponse>;
    testSMTPConfigById(request: DeepPartial<TestSMTPConfigByIdRequest>, options?: CallOptions & CallOptionsExt): Promise<TestSMTPConfigByIdResponse>;
    testSMTPConfig(request: DeepPartial<TestSMTPConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<TestSMTPConfigResponse>;
    listSMTPConfigs(request: DeepPartial<ListSMTPConfigsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListSMTPConfigsResponse>;
    listEmailProviders(request: DeepPartial<ListEmailProvidersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListEmailProvidersResponse>;
    getEmailProvider(request: DeepPartial<GetEmailProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<GetEmailProviderResponse>;
    getEmailProviderById(request: DeepPartial<GetEmailProviderByIdRequest>, options?: CallOptions & CallOptionsExt): Promise<GetEmailProviderByIdResponse>;
    addEmailProviderSMTP(request: DeepPartial<AddEmailProviderSMTPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddEmailProviderSMTPResponse>;
    updateEmailProviderSMTP(request: DeepPartial<UpdateEmailProviderSMTPRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateEmailProviderSMTPResponse>;
    addEmailProviderHTTP(request: DeepPartial<AddEmailProviderHTTPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddEmailProviderHTTPResponse>;
    updateEmailProviderHTTP(request: DeepPartial<UpdateEmailProviderHTTPRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateEmailProviderHTTPResponse>;
    updateEmailProviderSMTPPassword(request: DeepPartial<UpdateEmailProviderSMTPPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateEmailProviderSMTPPasswordResponse>;
    activateEmailProvider(request: DeepPartial<ActivateEmailProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateEmailProviderResponse>;
    deactivateEmailProvider(request: DeepPartial<DeactivateEmailProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateEmailProviderResponse>;
    removeEmailProvider(request: DeepPartial<RemoveEmailProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveEmailProviderResponse>;
    testEmailProviderSMTPById(request: DeepPartial<TestEmailProviderSMTPByIdRequest>, options?: CallOptions & CallOptionsExt): Promise<TestEmailProviderSMTPByIdResponse>;
    testEmailProviderSMTP(request: DeepPartial<TestEmailProviderSMTPRequest>, options?: CallOptions & CallOptionsExt): Promise<TestEmailProviderSMTPResponse>;
    listSMSProviders(request: DeepPartial<ListSMSProvidersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListSMSProvidersResponse>;
    getSMSProvider(request: DeepPartial<GetSMSProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSMSProviderResponse>;
    addSMSProviderTwilio(request: DeepPartial<AddSMSProviderTwilioRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSMSProviderTwilioResponse>;
    updateSMSProviderTwilio(request: DeepPartial<UpdateSMSProviderTwilioRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSMSProviderTwilioResponse>;
    updateSMSProviderTwilioToken(request: DeepPartial<UpdateSMSProviderTwilioTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSMSProviderTwilioTokenResponse>;
    addSMSProviderHTTP(request: DeepPartial<AddSMSProviderHTTPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddSMSProviderHTTPResponse>;
    updateSMSProviderHTTP(request: DeepPartial<UpdateSMSProviderHTTPRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateSMSProviderHTTPResponse>;
    activateSMSProvider(request: DeepPartial<ActivateSMSProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateSMSProviderResponse>;
    deactivateSMSProvider(request: DeepPartial<DeactivateSMSProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateSMSProviderResponse>;
    removeSMSProvider(request: DeepPartial<RemoveSMSProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveSMSProviderResponse>;
    getOIDCSettings(request: DeepPartial<GetOIDCSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOIDCSettingsResponse>;
    addOIDCSettings(request: DeepPartial<AddOIDCSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOIDCSettingsResponse>;
    updateOIDCSettings(request: DeepPartial<UpdateOIDCSettingsRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOIDCSettingsResponse>;
    getFileSystemNotificationProvider(request: DeepPartial<GetFileSystemNotificationProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<GetFileSystemNotificationProviderResponse>;
    getLogNotificationProvider(request: DeepPartial<GetLogNotificationProviderRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLogNotificationProviderResponse>;
    getSecurityPolicy(request: DeepPartial<GetSecurityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetSecurityPolicyResponse>;
    setSecurityPolicy(request: DeepPartial<SetSecurityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<SetSecurityPolicyResponse>;
    getOrgByID(request: DeepPartial<GetOrgByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgByIDResponse>;
    isOrgUnique(request: DeepPartial<IsOrgUniqueRequest>, options?: CallOptions & CallOptionsExt): Promise<IsOrgUniqueResponse>;
    setDefaultOrg(request: DeepPartial<SetDefaultOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultOrgResponse>;
    getDefaultOrg(request: DeepPartial<GetDefaultOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultOrgResponse>;
    listOrgs(request: DeepPartial<ListOrgsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListOrgsResponse>;
    setUpOrg(request: DeepPartial<SetUpOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<SetUpOrgResponse>;
    removeOrg(request: DeepPartial<RemoveOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveOrgResponse>;
    getIDPByID(request: DeepPartial<GetIDPByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetIDPByIDResponse>;
    listIDPs(request: DeepPartial<ListIDPsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListIDPsResponse>;
    addOIDCIDP(request: DeepPartial<AddOIDCIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddOIDCIDPResponse>;
    addJWTIDP(request: DeepPartial<AddJWTIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<AddJWTIDPResponse>;
    updateIDP(request: DeepPartial<UpdateIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateIDPResponse>;
    deactivateIDP(request: DeepPartial<DeactivateIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<DeactivateIDPResponse>;
    reactivateIDP(request: DeepPartial<ReactivateIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<ReactivateIDPResponse>;
    removeIDP(request: DeepPartial<RemoveIDPRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveIDPResponse>;
    updateIDPOIDCConfig(request: DeepPartial<UpdateIDPOIDCConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateIDPOIDCConfigResponse>;
    updateIDPJWTConfig(request: DeepPartial<UpdateIDPJWTConfigRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateIDPJWTConfigResponse>;
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
    getOrgIAMPolicy(request: DeepPartial<GetOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetOrgIAMPolicyResponse>;
    updateOrgIAMPolicy(request: DeepPartial<UpdateOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateOrgIAMPolicyResponse>;
    getCustomOrgIAMPolicy(request: DeepPartial<GetCustomOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomOrgIAMPolicyResponse>;
    addCustomOrgIAMPolicy(request: DeepPartial<AddCustomOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomOrgIAMPolicyResponse>;
    updateCustomOrgIAMPolicy(request: DeepPartial<UpdateCustomOrgIAMPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomOrgIAMPolicyResponse>;
    resetCustomOrgIAMPolicyToDefault(request: DeepPartial<ResetCustomOrgIAMPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomOrgIAMPolicyToDefaultResponse>;
    getDomainPolicy(request: DeepPartial<GetDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDomainPolicyResponse>;
    updateDomainPolicy(request: DeepPartial<UpdateDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateDomainPolicyResponse>;
    getCustomDomainPolicy(request: DeepPartial<GetCustomDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomDomainPolicyResponse>;
    addCustomDomainPolicy(request: DeepPartial<AddCustomDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddCustomDomainPolicyResponse>;
    updateCustomDomainPolicy(request: DeepPartial<UpdateCustomDomainPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateCustomDomainPolicyResponse>;
    resetCustomDomainPolicyToDefault(request: DeepPartial<ResetCustomDomainPolicyToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomDomainPolicyToDefaultResponse>;
    getLabelPolicy(request: DeepPartial<GetLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLabelPolicyResponse>;
    getPreviewLabelPolicy(request: DeepPartial<GetPreviewLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPreviewLabelPolicyResponse>;
    updateLabelPolicy(request: DeepPartial<UpdateLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateLabelPolicyResponse>;
    activateLabelPolicy(request: DeepPartial<ActivateLabelPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateLabelPolicyResponse>;
    removeLabelPolicyLogo(request: DeepPartial<RemoveLabelPolicyLogoRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveLabelPolicyLogoResponse>;
    removeLabelPolicyLogoDark(request: DeepPartial<RemoveLabelPolicyLogoDarkRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveLabelPolicyLogoDarkResponse>;
    removeLabelPolicyIcon(request: DeepPartial<RemoveLabelPolicyIconRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveLabelPolicyIconResponse>;
    removeLabelPolicyIconDark(request: DeepPartial<RemoveLabelPolicyIconDarkRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveLabelPolicyIconDarkResponse>;
    removeLabelPolicyFont(request: DeepPartial<RemoveLabelPolicyFontRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveLabelPolicyFontResponse>;
    getLoginPolicy(request: DeepPartial<GetLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLoginPolicyResponse>;
    updateLoginPolicy(request: DeepPartial<UpdateLoginPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateLoginPolicyResponse>;
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
    updatePasswordComplexityPolicy(request: DeepPartial<UpdatePasswordComplexityPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdatePasswordComplexityPolicyResponse>;
    getPasswordAgePolicy(request: DeepPartial<GetPasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPasswordAgePolicyResponse>;
    updatePasswordAgePolicy(request: DeepPartial<UpdatePasswordAgePolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdatePasswordAgePolicyResponse>;
    getLockoutPolicy(request: DeepPartial<GetLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetLockoutPolicyResponse>;
    updateLockoutPolicy(request: DeepPartial<UpdateLockoutPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateLockoutPolicyResponse>;
    getPrivacyPolicy(request: DeepPartial<GetPrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPrivacyPolicyResponse>;
    updatePrivacyPolicy(request: DeepPartial<UpdatePrivacyPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdatePrivacyPolicyResponse>;
    addNotificationPolicy(request: DeepPartial<AddNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<AddNotificationPolicyResponse>;
    getNotificationPolicy(request: DeepPartial<GetNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNotificationPolicyResponse>;
    updateNotificationPolicy(request: DeepPartial<UpdateNotificationPolicyRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateNotificationPolicyResponse>;
    getDefaultInitMessageText(request: DeepPartial<GetDefaultInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultInitMessageTextResponse>;
    getCustomInitMessageText(request: DeepPartial<GetCustomInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomInitMessageTextResponse>;
    setDefaultInitMessageText(request: DeepPartial<SetDefaultInitMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultInitMessageTextResponse>;
    resetCustomInitMessageTextToDefault(request: DeepPartial<ResetCustomInitMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomInitMessageTextToDefaultResponse>;
    getDefaultPasswordResetMessageText(request: DeepPartial<GetDefaultPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordResetMessageTextResponse>;
    getCustomPasswordResetMessageText(request: DeepPartial<GetCustomPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordResetMessageTextResponse>;
    setDefaultPasswordResetMessageText(request: DeepPartial<SetDefaultPasswordResetMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultPasswordResetMessageTextResponse>;
    resetCustomPasswordResetMessageTextToDefault(request: DeepPartial<ResetCustomPasswordResetMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordResetMessageTextToDefaultResponse>;
    getDefaultVerifyEmailMessageText(request: DeepPartial<GetDefaultVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyEmailMessageTextResponse>;
    getCustomVerifyEmailMessageText(request: DeepPartial<GetCustomVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyEmailMessageTextResponse>;
    setDefaultVerifyEmailMessageText(request: DeepPartial<SetDefaultVerifyEmailMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultVerifyEmailMessageTextResponse>;
    resetCustomVerifyEmailMessageTextToDefault(request: DeepPartial<ResetCustomVerifyEmailMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyEmailMessageTextToDefaultResponse>;
    getDefaultVerifyPhoneMessageText(request: DeepPartial<GetDefaultVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyPhoneMessageTextResponse>;
    getCustomVerifyPhoneMessageText(request: DeepPartial<GetCustomVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyPhoneMessageTextResponse>;
    setDefaultVerifyPhoneMessageText(request: DeepPartial<SetDefaultVerifyPhoneMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultVerifyPhoneMessageTextResponse>;
    resetCustomVerifyPhoneMessageTextToDefault(request: DeepPartial<ResetCustomVerifyPhoneMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyPhoneMessageTextToDefaultResponse>;
    getDefaultVerifySMSOTPMessageText(request: DeepPartial<GetDefaultVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifySMSOTPMessageTextResponse>;
    getCustomVerifySMSOTPMessageText(request: DeepPartial<GetCustomVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifySMSOTPMessageTextResponse>;
    setDefaultVerifySMSOTPMessageText(request: DeepPartial<SetDefaultVerifySMSOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultVerifySMSOTPMessageTextResponse>;
    resetCustomVerifySMSOTPMessageTextToDefault(request: DeepPartial<ResetCustomVerifySMSOTPMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifySMSOTPMessageTextToDefaultResponse>;
    getDefaultVerifyEmailOTPMessageText(request: DeepPartial<GetDefaultVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultVerifyEmailOTPMessageTextResponse>;
    getCustomVerifyEmailOTPMessageText(request: DeepPartial<GetCustomVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomVerifyEmailOTPMessageTextResponse>;
    setDefaultVerifyEmailOTPMessageText(request: DeepPartial<SetDefaultVerifyEmailOTPMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultVerifyEmailOTPMessageTextResponse>;
    resetCustomVerifyEmailOTPMessageTextToDefault(request: DeepPartial<ResetCustomVerifyEmailOTPMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomVerifyEmailOTPMessageTextToDefaultResponse>;
    getDefaultDomainClaimedMessageText(request: DeepPartial<GetDefaultDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultDomainClaimedMessageTextResponse>;
    getCustomDomainClaimedMessageText(request: DeepPartial<GetCustomDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomDomainClaimedMessageTextResponse>;
    setDefaultDomainClaimedMessageText(request: DeepPartial<SetDefaultDomainClaimedMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultDomainClaimedMessageTextResponse>;
    resetCustomDomainClaimedMessageTextToDefault(request: DeepPartial<ResetCustomDomainClaimedMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomDomainClaimedMessageTextToDefaultResponse>;
    getDefaultPasswordlessRegistrationMessageText(request: DeepPartial<GetDefaultPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordlessRegistrationMessageTextResponse>;
    getCustomPasswordlessRegistrationMessageText(request: DeepPartial<GetCustomPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordlessRegistrationMessageTextResponse>;
    setDefaultPasswordlessRegistrationMessageText(request: DeepPartial<SetDefaultPasswordlessRegistrationMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultPasswordlessRegistrationMessageTextResponse>;
    resetCustomPasswordlessRegistrationMessageTextToDefault(request: DeepPartial<ResetCustomPasswordlessRegistrationMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordlessRegistrationMessageTextToDefaultResponse>;
    getDefaultPasswordChangeMessageText(request: DeepPartial<GetDefaultPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultPasswordChangeMessageTextResponse>;
    getCustomPasswordChangeMessageText(request: DeepPartial<GetCustomPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomPasswordChangeMessageTextResponse>;
    setDefaultPasswordChangeMessageText(request: DeepPartial<SetDefaultPasswordChangeMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultPasswordChangeMessageTextResponse>;
    resetCustomPasswordChangeMessageTextToDefault(request: DeepPartial<ResetCustomPasswordChangeMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomPasswordChangeMessageTextToDefaultResponse>;
    getDefaultInviteUserMessageText(request: DeepPartial<GetDefaultInviteUserMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultInviteUserMessageTextResponse>;
    getCustomInviteUserMessageText(request: DeepPartial<GetCustomInviteUserMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomInviteUserMessageTextResponse>;
    setDefaultInviteUserMessageText(request: DeepPartial<SetDefaultInviteUserMessageTextRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDefaultInviteUserMessageTextResponse>;
    resetCustomInviteUserMessageTextToDefault(request: DeepPartial<ResetCustomInviteUserMessageTextToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomInviteUserMessageTextToDefaultResponse>;
    getDefaultLoginTexts(request: DeepPartial<GetDefaultLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDefaultLoginTextsResponse>;
    getCustomLoginTexts(request: DeepPartial<GetCustomLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCustomLoginTextsResponse>;
    setCustomLoginText(request: DeepPartial<SetCustomLoginTextsRequest>, options?: CallOptions & CallOptionsExt): Promise<SetCustomLoginTextsResponse>;
    resetCustomLoginTextToDefault(request: DeepPartial<ResetCustomLoginTextsToDefaultRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetCustomLoginTextsToDefaultResponse>;
    listIAMMemberRoles(request: DeepPartial<ListIAMMemberRolesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListIAMMemberRolesResponse>;
    listIAMMembers(request: DeepPartial<ListIAMMembersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListIAMMembersResponse>;
    addIAMMember(request: DeepPartial<AddIAMMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<AddIAMMemberResponse>;
    updateIAMMember(request: DeepPartial<UpdateIAMMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateIAMMemberResponse>;
    removeIAMMember(request: DeepPartial<RemoveIAMMemberRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveIAMMemberResponse>;
    listViews(request: DeepPartial<ListViewsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListViewsResponse>;
    listFailedEvents(request: DeepPartial<ListFailedEventsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFailedEventsResponse>;
    removeFailedEvent(request: DeepPartial<RemoveFailedEventRequest>, options?: CallOptions & CallOptionsExt): Promise<RemoveFailedEventResponse>;
    importData(request: DeepPartial<ImportDataRequest>, options?: CallOptions & CallOptionsExt): Promise<ImportDataResponse>;
    exportData(request: DeepPartial<ExportDataRequest>, options?: CallOptions & CallOptionsExt): Promise<ExportDataResponse>;
    listEventTypes(request: DeepPartial<ListEventTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListEventTypesResponse>;
    listEvents(request: DeepPartial<ListEventsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListEventsResponse>;
    listAggregateTypes(request: DeepPartial<ListAggregateTypesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAggregateTypesResponse>;
    activateFeatureLoginDefaultOrg(request: DeepPartial<ActivateFeatureLoginDefaultOrgRequest>, options?: CallOptions & CallOptionsExt): Promise<ActivateFeatureLoginDefaultOrgResponse>;
    listMilestones(request: DeepPartial<ListMilestonesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListMilestonesResponse>;
    setRestrictions(request: DeepPartial<SetRestrictionsRequest>, options?: CallOptions & CallOptionsExt): Promise<SetRestrictionsResponse>;
    getRestrictions(request: DeepPartial<GetRestrictionsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetRestrictionsResponse>;
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
