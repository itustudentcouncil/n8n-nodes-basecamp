import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { ObjectDetails } from "./object.js";
export declare const protobufPackage = "zitadel.text.v1";
export interface MessageCustomText {
    details: ObjectDetails | undefined;
    title: string;
    preHeader: string;
    subject: string;
    greeting: string;
    text: string;
    buttonText: string;
    footerText: string;
    isDefault: boolean;
}
export interface LoginCustomText {
    details: ObjectDetails | undefined;
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
    isDefault: boolean;
    linkingUserPromptText: LinkingUserPromptScreenText | undefined;
}
export interface SelectAccountScreenText {
    title: string;
    description: string;
    titleLinkingProcess: string;
    descriptionLinkingProcess: string;
    otherUser: string;
    sessionStateActive: string;
    sessionStateInactive: string;
    userMustBeMemberOfOrg: string;
}
export interface LoginScreenText {
    title: string;
    description: string;
    titleLinkingProcess: string;
    descriptionLinkingProcess: string;
    userMustBeMemberOfOrg: string;
    loginNameLabel: string;
    registerButtonText: string;
    nextButtonText: string;
    externalUserDescription: string;
    userNamePlaceholder: string;
    loginNamePlaceholder: string;
}
export interface PasswordScreenText {
    title: string;
    description: string;
    passwordLabel: string;
    resetLinkText: string;
    backButtonText: string;
    nextButtonText: string;
    minLength: string;
    hasUppercase: string;
    hasLowercase: string;
    hasNumber: string;
    hasSymbol: string;
    confirmation: string;
}
export interface UsernameChangeScreenText {
    title: string;
    description: string;
    usernameLabel: string;
    cancelButtonText: string;
    nextButtonText: string;
}
export interface UsernameChangeDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
}
export interface InitPasswordScreenText {
    title: string;
    description: string;
    codeLabel: string;
    newPasswordLabel: string;
    newPasswordConfirmLabel: string;
    nextButtonText: string;
    resendButtonText: string;
}
export interface InitPasswordDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
    cancelButtonText: string;
}
export interface EmailVerificationScreenText {
    title: string;
    description: string;
    codeLabel: string;
    nextButtonText: string;
    resendButtonText: string;
}
export interface EmailVerificationDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
    cancelButtonText: string;
    loginButtonText: string;
}
export interface InitializeUserScreenText {
    title: string;
    description: string;
    codeLabel: string;
    newPasswordLabel: string;
    newPasswordConfirmLabel: string;
    resendButtonText: string;
    nextButtonText: string;
}
export interface InitializeUserDoneScreenText {
    title: string;
    description: string;
    cancelButtonText: string;
    nextButtonText: string;
}
export interface InitMFAPromptScreenText {
    title: string;
    description: string;
    otpOption: string;
    u2fOption: string;
    skipButtonText: string;
    nextButtonText: string;
}
export interface InitMFAOTPScreenText {
    title: string;
    description: string;
    descriptionOtp: string;
    secretLabel: string;
    codeLabel: string;
    nextButtonText: string;
    cancelButtonText: string;
}
export interface InitMFAU2FScreenText {
    title: string;
    description: string;
    tokenNameLabel: string;
    notSupported: string;
    registerTokenButtonText: string;
    errorRetry: string;
}
export interface InitMFADoneScreenText {
    title: string;
    description: string;
    cancelButtonText: string;
    nextButtonText: string;
}
export interface MFAProvidersText {
    chooseOther: string;
    otp: string;
    u2f: string;
}
export interface VerifyMFAOTPScreenText {
    title: string;
    description: string;
    codeLabel: string;
    nextButtonText: string;
}
export interface VerifyMFAU2FScreenText {
    title: string;
    description: string;
    validateTokenText: string;
    notSupported: string;
    errorRetry: string;
}
export interface PasswordlessScreenText {
    title: string;
    description: string;
    loginWithPwButtonText: string;
    validateTokenButtonText: string;
    notSupported: string;
    errorRetry: string;
}
export interface PasswordChangeScreenText {
    title: string;
    description: string;
    oldPasswordLabel: string;
    newPasswordLabel: string;
    newPasswordConfirmLabel: string;
    cancelButtonText: string;
    nextButtonText: string;
    expiredDescription: string;
}
export interface PasswordChangeDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
}
export interface PasswordResetDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
}
export interface RegistrationOptionScreenText {
    title: string;
    description: string;
    userNameButtonText: string;
    externalLoginDescription: string;
    loginButtonText: string;
}
export interface RegistrationUserScreenText {
    title: string;
    description: string;
    descriptionOrgRegister: string;
    firstnameLabel: string;
    lastnameLabel: string;
    emailLabel: string;
    usernameLabel: string;
    languageLabel: string;
    genderLabel: string;
    passwordLabel: string;
    passwordConfirmLabel: string;
    tosAndPrivacyLabel: string;
    tosConfirm: string;
    tosLinkText: string;
    privacyConfirm: string;
    privacyLinkText: string;
    nextButtonText: string;
    backButtonText: string;
}
export interface ExternalRegistrationUserOverviewScreenText {
    title: string;
    description: string;
    emailLabel: string;
    usernameLabel: string;
    firstnameLabel: string;
    lastnameLabel: string;
    nicknameLabel: string;
    languageLabel: string;
    phoneLabel: string;
    tosAndPrivacyLabel: string;
    tosConfirm: string;
    tosLinkText: string;
    privacyLinkText: string;
    backButtonText: string;
    nextButtonText: string;
    privacyConfirm: string;
}
export interface RegistrationOrgScreenText {
    title: string;
    description: string;
    orgnameLabel: string;
    firstnameLabel: string;
    lastnameLabel: string;
    usernameLabel: string;
    emailLabel: string;
    passwordLabel: string;
    passwordConfirmLabel: string;
    tosAndPrivacyLabel: string;
    tosConfirm: string;
    tosLinkText: string;
    privacyConfirm: string;
    privacyLinkText: string;
    saveButtonText: string;
}
export interface LinkingUserPromptScreenText {
    title: string;
    description: string;
    linkButtonText: string;
    otherButtonText: string;
}
export interface LinkingUserDoneScreenText {
    title: string;
    description: string;
    cancelButtonText: string;
    nextButtonText: string;
}
export interface ExternalUserNotFoundScreenText {
    title: string;
    description: string;
    linkButtonText: string;
    autoRegisterButtonText: string;
    tosAndPrivacyLabel: string;
    tosConfirm: string;
    tosLinkText: string;
    privacyLinkText: string;
    privacyConfirm: string;
}
export interface SuccessLoginScreenText {
    title: string;
    autoRedirectDescription: string;
    redirectedDescription: string;
    nextButtonText: string;
}
export interface LogoutDoneScreenText {
    title: string;
    description: string;
    loginButtonText: string;
}
export interface FooterText {
    tos: string;
    privacyPolicy: string;
    help: string;
    supportEmail: string;
}
export interface PasswordlessPromptScreenText {
    title: string;
    description: string;
    descriptionInit: string;
    passwordlessButtonText: string;
    nextButtonText: string;
    skipButtonText: string;
}
export interface PasswordlessRegistrationScreenText {
    title: string;
    description: string;
    tokenNameLabel: string;
    notSupported: string;
    registerTokenButtonText: string;
    errorRetry: string;
}
export interface PasswordlessRegistrationDoneScreenText {
    title: string;
    description: string;
    nextButtonText: string;
    cancelButtonText: string;
    descriptionClose: string;
}
export declare const MessageCustomText: MessageFns<MessageCustomText>;
export declare const LoginCustomText: MessageFns<LoginCustomText>;
export declare const SelectAccountScreenText: MessageFns<SelectAccountScreenText>;
export declare const LoginScreenText: MessageFns<LoginScreenText>;
export declare const PasswordScreenText: MessageFns<PasswordScreenText>;
export declare const UsernameChangeScreenText: MessageFns<UsernameChangeScreenText>;
export declare const UsernameChangeDoneScreenText: MessageFns<UsernameChangeDoneScreenText>;
export declare const InitPasswordScreenText: MessageFns<InitPasswordScreenText>;
export declare const InitPasswordDoneScreenText: MessageFns<InitPasswordDoneScreenText>;
export declare const EmailVerificationScreenText: MessageFns<EmailVerificationScreenText>;
export declare const EmailVerificationDoneScreenText: MessageFns<EmailVerificationDoneScreenText>;
export declare const InitializeUserScreenText: MessageFns<InitializeUserScreenText>;
export declare const InitializeUserDoneScreenText: MessageFns<InitializeUserDoneScreenText>;
export declare const InitMFAPromptScreenText: MessageFns<InitMFAPromptScreenText>;
export declare const InitMFAOTPScreenText: MessageFns<InitMFAOTPScreenText>;
export declare const InitMFAU2FScreenText: MessageFns<InitMFAU2FScreenText>;
export declare const InitMFADoneScreenText: MessageFns<InitMFADoneScreenText>;
export declare const MFAProvidersText: MessageFns<MFAProvidersText>;
export declare const VerifyMFAOTPScreenText: MessageFns<VerifyMFAOTPScreenText>;
export declare const VerifyMFAU2FScreenText: MessageFns<VerifyMFAU2FScreenText>;
export declare const PasswordlessScreenText: MessageFns<PasswordlessScreenText>;
export declare const PasswordChangeScreenText: MessageFns<PasswordChangeScreenText>;
export declare const PasswordChangeDoneScreenText: MessageFns<PasswordChangeDoneScreenText>;
export declare const PasswordResetDoneScreenText: MessageFns<PasswordResetDoneScreenText>;
export declare const RegistrationOptionScreenText: MessageFns<RegistrationOptionScreenText>;
export declare const RegistrationUserScreenText: MessageFns<RegistrationUserScreenText>;
export declare const ExternalRegistrationUserOverviewScreenText: MessageFns<ExternalRegistrationUserOverviewScreenText>;
export declare const RegistrationOrgScreenText: MessageFns<RegistrationOrgScreenText>;
export declare const LinkingUserPromptScreenText: MessageFns<LinkingUserPromptScreenText>;
export declare const LinkingUserDoneScreenText: MessageFns<LinkingUserDoneScreenText>;
export declare const ExternalUserNotFoundScreenText: MessageFns<ExternalUserNotFoundScreenText>;
export declare const SuccessLoginScreenText: MessageFns<SuccessLoginScreenText>;
export declare const LogoutDoneScreenText: MessageFns<LogoutDoneScreenText>;
export declare const FooterText: MessageFns<FooterText>;
export declare const PasswordlessPromptScreenText: MessageFns<PasswordlessPromptScreenText>;
export declare const PasswordlessRegistrationScreenText: MessageFns<PasswordlessRegistrationScreenText>;
export declare const PasswordlessRegistrationDoneScreenText: MessageFns<PasswordlessRegistrationDoneScreenText>;
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
