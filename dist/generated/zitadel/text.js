"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordlessRegistrationDoneScreenText = exports.PasswordlessRegistrationScreenText = exports.PasswordlessPromptScreenText = exports.FooterText = exports.LogoutDoneScreenText = exports.SuccessLoginScreenText = exports.ExternalUserNotFoundScreenText = exports.LinkingUserDoneScreenText = exports.LinkingUserPromptScreenText = exports.RegistrationOrgScreenText = exports.ExternalRegistrationUserOverviewScreenText = exports.RegistrationUserScreenText = exports.RegistrationOptionScreenText = exports.PasswordResetDoneScreenText = exports.PasswordChangeDoneScreenText = exports.PasswordChangeScreenText = exports.PasswordlessScreenText = exports.VerifyMFAU2FScreenText = exports.VerifyMFAOTPScreenText = exports.MFAProvidersText = exports.InitMFADoneScreenText = exports.InitMFAU2FScreenText = exports.InitMFAOTPScreenText = exports.InitMFAPromptScreenText = exports.InitializeUserDoneScreenText = exports.InitializeUserScreenText = exports.EmailVerificationDoneScreenText = exports.EmailVerificationScreenText = exports.InitPasswordDoneScreenText = exports.InitPasswordScreenText = exports.UsernameChangeDoneScreenText = exports.UsernameChangeScreenText = exports.PasswordScreenText = exports.LoginScreenText = exports.SelectAccountScreenText = exports.LoginCustomText = exports.MessageCustomText = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("./object.js");
exports.protobufPackage = "zitadel.text.v1";
function createBaseMessageCustomText() {
    return {
        details: undefined,
        title: "",
        preHeader: "",
        subject: "",
        greeting: "",
        text: "",
        buttonText: "",
        footerText: "",
        isDefault: false,
    };
}
exports.MessageCustomText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.title !== "") {
            writer.uint32(18).string(message.title);
        }
        if (message.preHeader !== "") {
            writer.uint32(26).string(message.preHeader);
        }
        if (message.subject !== "") {
            writer.uint32(34).string(message.subject);
        }
        if (message.greeting !== "") {
            writer.uint32(42).string(message.greeting);
        }
        if (message.text !== "") {
            writer.uint32(50).string(message.text);
        }
        if (message.buttonText !== "") {
            writer.uint32(58).string(message.buttonText);
        }
        if (message.footerText !== "") {
            writer.uint32(66).string(message.footerText);
        }
        if (message.isDefault !== false) {
            writer.uint32(72).bool(message.isDefault);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMessageCustomText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.preHeader = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.subject = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.greeting = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.text = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.buttonText = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.footerText = reader.string();
                    continue;
                case 9:
                    if (tag !== 72) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            preHeader: isSet(object.preHeader) ? globalThis.String(object.preHeader) : "",
            subject: isSet(object.subject) ? globalThis.String(object.subject) : "",
            greeting: isSet(object.greeting) ? globalThis.String(object.greeting) : "",
            text: isSet(object.text) ? globalThis.String(object.text) : "",
            buttonText: isSet(object.buttonText) ? globalThis.String(object.buttonText) : "",
            footerText: isSet(object.footerText) ? globalThis.String(object.footerText) : "",
            isDefault: isSet(object.isDefault) ? globalThis.Boolean(object.isDefault) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.preHeader !== "") {
            obj.preHeader = message.preHeader;
        }
        if (message.subject !== "") {
            obj.subject = message.subject;
        }
        if (message.greeting !== "") {
            obj.greeting = message.greeting;
        }
        if (message.text !== "") {
            obj.text = message.text;
        }
        if (message.buttonText !== "") {
            obj.buttonText = message.buttonText;
        }
        if (message.footerText !== "") {
            obj.footerText = message.footerText;
        }
        if (message.isDefault !== false) {
            obj.isDefault = message.isDefault;
        }
        return obj;
    },
    create(base) {
        return exports.MessageCustomText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseMessageCustomText();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.preHeader = (_b = object.preHeader) !== null && _b !== void 0 ? _b : "";
        message.subject = (_c = object.subject) !== null && _c !== void 0 ? _c : "";
        message.greeting = (_d = object.greeting) !== null && _d !== void 0 ? _d : "";
        message.text = (_e = object.text) !== null && _e !== void 0 ? _e : "";
        message.buttonText = (_f = object.buttonText) !== null && _f !== void 0 ? _f : "";
        message.footerText = (_g = object.footerText) !== null && _g !== void 0 ? _g : "";
        message.isDefault = (_h = object.isDefault) !== null && _h !== void 0 ? _h : false;
        return message;
    },
};
function createBaseLoginCustomText() {
    return {
        details: undefined,
        selectAccountText: undefined,
        loginText: undefined,
        passwordText: undefined,
        usernameChangeText: undefined,
        usernameChangeDoneText: undefined,
        initPasswordText: undefined,
        initPasswordDoneText: undefined,
        emailVerificationText: undefined,
        emailVerificationDoneText: undefined,
        initializeUserText: undefined,
        initializeDoneText: undefined,
        initMfaPromptText: undefined,
        initMfaOtpText: undefined,
        initMfaU2fText: undefined,
        initMfaDoneText: undefined,
        mfaProvidersText: undefined,
        verifyMfaOtpText: undefined,
        verifyMfaU2fText: undefined,
        passwordlessText: undefined,
        passwordChangeText: undefined,
        passwordChangeDoneText: undefined,
        passwordResetDoneText: undefined,
        registrationOptionText: undefined,
        registrationUserText: undefined,
        registrationOrgText: undefined,
        linkingUserDoneText: undefined,
        externalUserNotFoundText: undefined,
        successLoginText: undefined,
        logoutText: undefined,
        footerText: undefined,
        passwordlessPromptText: undefined,
        passwordlessRegistrationText: undefined,
        passwordlessRegistrationDoneText: undefined,
        externalRegistrationUserOverviewText: undefined,
        isDefault: false,
        linkingUserPromptText: undefined,
    };
}
exports.LoginCustomText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.selectAccountText !== undefined) {
            exports.SelectAccountScreenText.encode(message.selectAccountText, writer.uint32(18).fork()).join();
        }
        if (message.loginText !== undefined) {
            exports.LoginScreenText.encode(message.loginText, writer.uint32(26).fork()).join();
        }
        if (message.passwordText !== undefined) {
            exports.PasswordScreenText.encode(message.passwordText, writer.uint32(34).fork()).join();
        }
        if (message.usernameChangeText !== undefined) {
            exports.UsernameChangeScreenText.encode(message.usernameChangeText, writer.uint32(42).fork()).join();
        }
        if (message.usernameChangeDoneText !== undefined) {
            exports.UsernameChangeDoneScreenText.encode(message.usernameChangeDoneText, writer.uint32(50).fork()).join();
        }
        if (message.initPasswordText !== undefined) {
            exports.InitPasswordScreenText.encode(message.initPasswordText, writer.uint32(58).fork()).join();
        }
        if (message.initPasswordDoneText !== undefined) {
            exports.InitPasswordDoneScreenText.encode(message.initPasswordDoneText, writer.uint32(66).fork()).join();
        }
        if (message.emailVerificationText !== undefined) {
            exports.EmailVerificationScreenText.encode(message.emailVerificationText, writer.uint32(74).fork()).join();
        }
        if (message.emailVerificationDoneText !== undefined) {
            exports.EmailVerificationDoneScreenText.encode(message.emailVerificationDoneText, writer.uint32(82).fork()).join();
        }
        if (message.initializeUserText !== undefined) {
            exports.InitializeUserScreenText.encode(message.initializeUserText, writer.uint32(90).fork()).join();
        }
        if (message.initializeDoneText !== undefined) {
            exports.InitializeUserDoneScreenText.encode(message.initializeDoneText, writer.uint32(98).fork()).join();
        }
        if (message.initMfaPromptText !== undefined) {
            exports.InitMFAPromptScreenText.encode(message.initMfaPromptText, writer.uint32(106).fork()).join();
        }
        if (message.initMfaOtpText !== undefined) {
            exports.InitMFAOTPScreenText.encode(message.initMfaOtpText, writer.uint32(114).fork()).join();
        }
        if (message.initMfaU2fText !== undefined) {
            exports.InitMFAU2FScreenText.encode(message.initMfaU2fText, writer.uint32(122).fork()).join();
        }
        if (message.initMfaDoneText !== undefined) {
            exports.InitMFADoneScreenText.encode(message.initMfaDoneText, writer.uint32(130).fork()).join();
        }
        if (message.mfaProvidersText !== undefined) {
            exports.MFAProvidersText.encode(message.mfaProvidersText, writer.uint32(138).fork()).join();
        }
        if (message.verifyMfaOtpText !== undefined) {
            exports.VerifyMFAOTPScreenText.encode(message.verifyMfaOtpText, writer.uint32(146).fork()).join();
        }
        if (message.verifyMfaU2fText !== undefined) {
            exports.VerifyMFAU2FScreenText.encode(message.verifyMfaU2fText, writer.uint32(154).fork()).join();
        }
        if (message.passwordlessText !== undefined) {
            exports.PasswordlessScreenText.encode(message.passwordlessText, writer.uint32(162).fork()).join();
        }
        if (message.passwordChangeText !== undefined) {
            exports.PasswordChangeScreenText.encode(message.passwordChangeText, writer.uint32(170).fork()).join();
        }
        if (message.passwordChangeDoneText !== undefined) {
            exports.PasswordChangeDoneScreenText.encode(message.passwordChangeDoneText, writer.uint32(178).fork()).join();
        }
        if (message.passwordResetDoneText !== undefined) {
            exports.PasswordResetDoneScreenText.encode(message.passwordResetDoneText, writer.uint32(186).fork()).join();
        }
        if (message.registrationOptionText !== undefined) {
            exports.RegistrationOptionScreenText.encode(message.registrationOptionText, writer.uint32(194).fork()).join();
        }
        if (message.registrationUserText !== undefined) {
            exports.RegistrationUserScreenText.encode(message.registrationUserText, writer.uint32(202).fork()).join();
        }
        if (message.registrationOrgText !== undefined) {
            exports.RegistrationOrgScreenText.encode(message.registrationOrgText, writer.uint32(210).fork()).join();
        }
        if (message.linkingUserDoneText !== undefined) {
            exports.LinkingUserDoneScreenText.encode(message.linkingUserDoneText, writer.uint32(218).fork()).join();
        }
        if (message.externalUserNotFoundText !== undefined) {
            exports.ExternalUserNotFoundScreenText.encode(message.externalUserNotFoundText, writer.uint32(226).fork()).join();
        }
        if (message.successLoginText !== undefined) {
            exports.SuccessLoginScreenText.encode(message.successLoginText, writer.uint32(234).fork()).join();
        }
        if (message.logoutText !== undefined) {
            exports.LogoutDoneScreenText.encode(message.logoutText, writer.uint32(242).fork()).join();
        }
        if (message.footerText !== undefined) {
            exports.FooterText.encode(message.footerText, writer.uint32(250).fork()).join();
        }
        if (message.passwordlessPromptText !== undefined) {
            exports.PasswordlessPromptScreenText.encode(message.passwordlessPromptText, writer.uint32(258).fork()).join();
        }
        if (message.passwordlessRegistrationText !== undefined) {
            exports.PasswordlessRegistrationScreenText.encode(message.passwordlessRegistrationText, writer.uint32(266).fork()).join();
        }
        if (message.passwordlessRegistrationDoneText !== undefined) {
            exports.PasswordlessRegistrationDoneScreenText.encode(message.passwordlessRegistrationDoneText, writer.uint32(274).fork())
                .join();
        }
        if (message.externalRegistrationUserOverviewText !== undefined) {
            exports.ExternalRegistrationUserOverviewScreenText.encode(message.externalRegistrationUserOverviewText, writer.uint32(282).fork()).join();
        }
        if (message.isDefault !== false) {
            writer.uint32(288).bool(message.isDefault);
        }
        if (message.linkingUserPromptText !== undefined) {
            exports.LinkingUserPromptScreenText.encode(message.linkingUserPromptText, writer.uint32(298).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginCustomText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.selectAccountText = exports.SelectAccountScreenText.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.loginText = exports.LoginScreenText.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.passwordText = exports.PasswordScreenText.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.usernameChangeText = exports.UsernameChangeScreenText.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.usernameChangeDoneText = exports.UsernameChangeDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.initPasswordText = exports.InitPasswordScreenText.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.initPasswordDoneText = exports.InitPasswordDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.emailVerificationText = exports.EmailVerificationScreenText.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.emailVerificationDoneText = exports.EmailVerificationDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.initializeUserText = exports.InitializeUserScreenText.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.initializeDoneText = exports.InitializeUserDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.initMfaPromptText = exports.InitMFAPromptScreenText.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.initMfaOtpText = exports.InitMFAOTPScreenText.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.initMfaU2fText = exports.InitMFAU2FScreenText.decode(reader, reader.uint32());
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.initMfaDoneText = exports.InitMFADoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.mfaProvidersText = exports.MFAProvidersText.decode(reader, reader.uint32());
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.verifyMfaOtpText = exports.VerifyMFAOTPScreenText.decode(reader, reader.uint32());
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.verifyMfaU2fText = exports.VerifyMFAU2FScreenText.decode(reader, reader.uint32());
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.passwordlessText = exports.PasswordlessScreenText.decode(reader, reader.uint32());
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.passwordChangeText = exports.PasswordChangeScreenText.decode(reader, reader.uint32());
                    continue;
                case 22:
                    if (tag !== 178) {
                        break;
                    }
                    message.passwordChangeDoneText = exports.PasswordChangeDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 23:
                    if (tag !== 186) {
                        break;
                    }
                    message.passwordResetDoneText = exports.PasswordResetDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 24:
                    if (tag !== 194) {
                        break;
                    }
                    message.registrationOptionText = exports.RegistrationOptionScreenText.decode(reader, reader.uint32());
                    continue;
                case 25:
                    if (tag !== 202) {
                        break;
                    }
                    message.registrationUserText = exports.RegistrationUserScreenText.decode(reader, reader.uint32());
                    continue;
                case 26:
                    if (tag !== 210) {
                        break;
                    }
                    message.registrationOrgText = exports.RegistrationOrgScreenText.decode(reader, reader.uint32());
                    continue;
                case 27:
                    if (tag !== 218) {
                        break;
                    }
                    message.linkingUserDoneText = exports.LinkingUserDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 28:
                    if (tag !== 226) {
                        break;
                    }
                    message.externalUserNotFoundText = exports.ExternalUserNotFoundScreenText.decode(reader, reader.uint32());
                    continue;
                case 29:
                    if (tag !== 234) {
                        break;
                    }
                    message.successLoginText = exports.SuccessLoginScreenText.decode(reader, reader.uint32());
                    continue;
                case 30:
                    if (tag !== 242) {
                        break;
                    }
                    message.logoutText = exports.LogoutDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 31:
                    if (tag !== 250) {
                        break;
                    }
                    message.footerText = exports.FooterText.decode(reader, reader.uint32());
                    continue;
                case 32:
                    if (tag !== 258) {
                        break;
                    }
                    message.passwordlessPromptText = exports.PasswordlessPromptScreenText.decode(reader, reader.uint32());
                    continue;
                case 33:
                    if (tag !== 266) {
                        break;
                    }
                    message.passwordlessRegistrationText = exports.PasswordlessRegistrationScreenText.decode(reader, reader.uint32());
                    continue;
                case 34:
                    if (tag !== 274) {
                        break;
                    }
                    message.passwordlessRegistrationDoneText = exports.PasswordlessRegistrationDoneScreenText.decode(reader, reader.uint32());
                    continue;
                case 35:
                    if (tag !== 282) {
                        break;
                    }
                    message.externalRegistrationUserOverviewText = exports.ExternalRegistrationUserOverviewScreenText.decode(reader, reader.uint32());
                    continue;
                case 36:
                    if (tag !== 288) {
                        break;
                    }
                    message.isDefault = reader.bool();
                    continue;
                case 37:
                    if (tag !== 298) {
                        break;
                    }
                    message.linkingUserPromptText = exports.LinkingUserPromptScreenText.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            selectAccountText: isSet(object.selectAccountText)
                ? exports.SelectAccountScreenText.fromJSON(object.selectAccountText)
                : undefined,
            loginText: isSet(object.loginText) ? exports.LoginScreenText.fromJSON(object.loginText) : undefined,
            passwordText: isSet(object.passwordText) ? exports.PasswordScreenText.fromJSON(object.passwordText) : undefined,
            usernameChangeText: isSet(object.usernameChangeText)
                ? exports.UsernameChangeScreenText.fromJSON(object.usernameChangeText)
                : undefined,
            usernameChangeDoneText: isSet(object.usernameChangeDoneText)
                ? exports.UsernameChangeDoneScreenText.fromJSON(object.usernameChangeDoneText)
                : undefined,
            initPasswordText: isSet(object.initPasswordText)
                ? exports.InitPasswordScreenText.fromJSON(object.initPasswordText)
                : undefined,
            initPasswordDoneText: isSet(object.initPasswordDoneText)
                ? exports.InitPasswordDoneScreenText.fromJSON(object.initPasswordDoneText)
                : undefined,
            emailVerificationText: isSet(object.emailVerificationText)
                ? exports.EmailVerificationScreenText.fromJSON(object.emailVerificationText)
                : undefined,
            emailVerificationDoneText: isSet(object.emailVerificationDoneText)
                ? exports.EmailVerificationDoneScreenText.fromJSON(object.emailVerificationDoneText)
                : undefined,
            initializeUserText: isSet(object.initializeUserText)
                ? exports.InitializeUserScreenText.fromJSON(object.initializeUserText)
                : undefined,
            initializeDoneText: isSet(object.initializeDoneText)
                ? exports.InitializeUserDoneScreenText.fromJSON(object.initializeDoneText)
                : undefined,
            initMfaPromptText: isSet(object.initMfaPromptText)
                ? exports.InitMFAPromptScreenText.fromJSON(object.initMfaPromptText)
                : undefined,
            initMfaOtpText: isSet(object.initMfaOtpText) ? exports.InitMFAOTPScreenText.fromJSON(object.initMfaOtpText) : undefined,
            initMfaU2fText: isSet(object.initMfaU2fText) ? exports.InitMFAU2FScreenText.fromJSON(object.initMfaU2fText) : undefined,
            initMfaDoneText: isSet(object.initMfaDoneText)
                ? exports.InitMFADoneScreenText.fromJSON(object.initMfaDoneText)
                : undefined,
            mfaProvidersText: isSet(object.mfaProvidersText) ? exports.MFAProvidersText.fromJSON(object.mfaProvidersText) : undefined,
            verifyMfaOtpText: isSet(object.verifyMfaOtpText)
                ? exports.VerifyMFAOTPScreenText.fromJSON(object.verifyMfaOtpText)
                : undefined,
            verifyMfaU2fText: isSet(object.verifyMfaU2fText)
                ? exports.VerifyMFAU2FScreenText.fromJSON(object.verifyMfaU2fText)
                : undefined,
            passwordlessText: isSet(object.passwordlessText)
                ? exports.PasswordlessScreenText.fromJSON(object.passwordlessText)
                : undefined,
            passwordChangeText: isSet(object.passwordChangeText)
                ? exports.PasswordChangeScreenText.fromJSON(object.passwordChangeText)
                : undefined,
            passwordChangeDoneText: isSet(object.passwordChangeDoneText)
                ? exports.PasswordChangeDoneScreenText.fromJSON(object.passwordChangeDoneText)
                : undefined,
            passwordResetDoneText: isSet(object.passwordResetDoneText)
                ? exports.PasswordResetDoneScreenText.fromJSON(object.passwordResetDoneText)
                : undefined,
            registrationOptionText: isSet(object.registrationOptionText)
                ? exports.RegistrationOptionScreenText.fromJSON(object.registrationOptionText)
                : undefined,
            registrationUserText: isSet(object.registrationUserText)
                ? exports.RegistrationUserScreenText.fromJSON(object.registrationUserText)
                : undefined,
            registrationOrgText: isSet(object.registrationOrgText)
                ? exports.RegistrationOrgScreenText.fromJSON(object.registrationOrgText)
                : undefined,
            linkingUserDoneText: isSet(object.linkingUserDoneText)
                ? exports.LinkingUserDoneScreenText.fromJSON(object.linkingUserDoneText)
                : undefined,
            externalUserNotFoundText: isSet(object.externalUserNotFoundText)
                ? exports.ExternalUserNotFoundScreenText.fromJSON(object.externalUserNotFoundText)
                : undefined,
            successLoginText: isSet(object.successLoginText)
                ? exports.SuccessLoginScreenText.fromJSON(object.successLoginText)
                : undefined,
            logoutText: isSet(object.logoutText) ? exports.LogoutDoneScreenText.fromJSON(object.logoutText) : undefined,
            footerText: isSet(object.footerText) ? exports.FooterText.fromJSON(object.footerText) : undefined,
            passwordlessPromptText: isSet(object.passwordlessPromptText)
                ? exports.PasswordlessPromptScreenText.fromJSON(object.passwordlessPromptText)
                : undefined,
            passwordlessRegistrationText: isSet(object.passwordlessRegistrationText)
                ? exports.PasswordlessRegistrationScreenText.fromJSON(object.passwordlessRegistrationText)
                : undefined,
            passwordlessRegistrationDoneText: isSet(object.passwordlessRegistrationDoneText)
                ? exports.PasswordlessRegistrationDoneScreenText.fromJSON(object.passwordlessRegistrationDoneText)
                : undefined,
            externalRegistrationUserOverviewText: isSet(object.externalRegistrationUserOverviewText)
                ? exports.ExternalRegistrationUserOverviewScreenText.fromJSON(object.externalRegistrationUserOverviewText)
                : undefined,
            isDefault: isSet(object.isDefault) ? globalThis.Boolean(object.isDefault) : false,
            linkingUserPromptText: isSet(object.linkingUserPromptText)
                ? exports.LinkingUserPromptScreenText.fromJSON(object.linkingUserPromptText)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.selectAccountText !== undefined) {
            obj.selectAccountText = exports.SelectAccountScreenText.toJSON(message.selectAccountText);
        }
        if (message.loginText !== undefined) {
            obj.loginText = exports.LoginScreenText.toJSON(message.loginText);
        }
        if (message.passwordText !== undefined) {
            obj.passwordText = exports.PasswordScreenText.toJSON(message.passwordText);
        }
        if (message.usernameChangeText !== undefined) {
            obj.usernameChangeText = exports.UsernameChangeScreenText.toJSON(message.usernameChangeText);
        }
        if (message.usernameChangeDoneText !== undefined) {
            obj.usernameChangeDoneText = exports.UsernameChangeDoneScreenText.toJSON(message.usernameChangeDoneText);
        }
        if (message.initPasswordText !== undefined) {
            obj.initPasswordText = exports.InitPasswordScreenText.toJSON(message.initPasswordText);
        }
        if (message.initPasswordDoneText !== undefined) {
            obj.initPasswordDoneText = exports.InitPasswordDoneScreenText.toJSON(message.initPasswordDoneText);
        }
        if (message.emailVerificationText !== undefined) {
            obj.emailVerificationText = exports.EmailVerificationScreenText.toJSON(message.emailVerificationText);
        }
        if (message.emailVerificationDoneText !== undefined) {
            obj.emailVerificationDoneText = exports.EmailVerificationDoneScreenText.toJSON(message.emailVerificationDoneText);
        }
        if (message.initializeUserText !== undefined) {
            obj.initializeUserText = exports.InitializeUserScreenText.toJSON(message.initializeUserText);
        }
        if (message.initializeDoneText !== undefined) {
            obj.initializeDoneText = exports.InitializeUserDoneScreenText.toJSON(message.initializeDoneText);
        }
        if (message.initMfaPromptText !== undefined) {
            obj.initMfaPromptText = exports.InitMFAPromptScreenText.toJSON(message.initMfaPromptText);
        }
        if (message.initMfaOtpText !== undefined) {
            obj.initMfaOtpText = exports.InitMFAOTPScreenText.toJSON(message.initMfaOtpText);
        }
        if (message.initMfaU2fText !== undefined) {
            obj.initMfaU2fText = exports.InitMFAU2FScreenText.toJSON(message.initMfaU2fText);
        }
        if (message.initMfaDoneText !== undefined) {
            obj.initMfaDoneText = exports.InitMFADoneScreenText.toJSON(message.initMfaDoneText);
        }
        if (message.mfaProvidersText !== undefined) {
            obj.mfaProvidersText = exports.MFAProvidersText.toJSON(message.mfaProvidersText);
        }
        if (message.verifyMfaOtpText !== undefined) {
            obj.verifyMfaOtpText = exports.VerifyMFAOTPScreenText.toJSON(message.verifyMfaOtpText);
        }
        if (message.verifyMfaU2fText !== undefined) {
            obj.verifyMfaU2fText = exports.VerifyMFAU2FScreenText.toJSON(message.verifyMfaU2fText);
        }
        if (message.passwordlessText !== undefined) {
            obj.passwordlessText = exports.PasswordlessScreenText.toJSON(message.passwordlessText);
        }
        if (message.passwordChangeText !== undefined) {
            obj.passwordChangeText = exports.PasswordChangeScreenText.toJSON(message.passwordChangeText);
        }
        if (message.passwordChangeDoneText !== undefined) {
            obj.passwordChangeDoneText = exports.PasswordChangeDoneScreenText.toJSON(message.passwordChangeDoneText);
        }
        if (message.passwordResetDoneText !== undefined) {
            obj.passwordResetDoneText = exports.PasswordResetDoneScreenText.toJSON(message.passwordResetDoneText);
        }
        if (message.registrationOptionText !== undefined) {
            obj.registrationOptionText = exports.RegistrationOptionScreenText.toJSON(message.registrationOptionText);
        }
        if (message.registrationUserText !== undefined) {
            obj.registrationUserText = exports.RegistrationUserScreenText.toJSON(message.registrationUserText);
        }
        if (message.registrationOrgText !== undefined) {
            obj.registrationOrgText = exports.RegistrationOrgScreenText.toJSON(message.registrationOrgText);
        }
        if (message.linkingUserDoneText !== undefined) {
            obj.linkingUserDoneText = exports.LinkingUserDoneScreenText.toJSON(message.linkingUserDoneText);
        }
        if (message.externalUserNotFoundText !== undefined) {
            obj.externalUserNotFoundText = exports.ExternalUserNotFoundScreenText.toJSON(message.externalUserNotFoundText);
        }
        if (message.successLoginText !== undefined) {
            obj.successLoginText = exports.SuccessLoginScreenText.toJSON(message.successLoginText);
        }
        if (message.logoutText !== undefined) {
            obj.logoutText = exports.LogoutDoneScreenText.toJSON(message.logoutText);
        }
        if (message.footerText !== undefined) {
            obj.footerText = exports.FooterText.toJSON(message.footerText);
        }
        if (message.passwordlessPromptText !== undefined) {
            obj.passwordlessPromptText = exports.PasswordlessPromptScreenText.toJSON(message.passwordlessPromptText);
        }
        if (message.passwordlessRegistrationText !== undefined) {
            obj.passwordlessRegistrationText = exports.PasswordlessRegistrationScreenText.toJSON(message.passwordlessRegistrationText);
        }
        if (message.passwordlessRegistrationDoneText !== undefined) {
            obj.passwordlessRegistrationDoneText = exports.PasswordlessRegistrationDoneScreenText.toJSON(message.passwordlessRegistrationDoneText);
        }
        if (message.externalRegistrationUserOverviewText !== undefined) {
            obj.externalRegistrationUserOverviewText = exports.ExternalRegistrationUserOverviewScreenText.toJSON(message.externalRegistrationUserOverviewText);
        }
        if (message.isDefault !== false) {
            obj.isDefault = message.isDefault;
        }
        if (message.linkingUserPromptText !== undefined) {
            obj.linkingUserPromptText = exports.LinkingUserPromptScreenText.toJSON(message.linkingUserPromptText);
        }
        return obj;
    },
    create(base) {
        return exports.LoginCustomText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLoginCustomText();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.selectAccountText = (object.selectAccountText !== undefined && object.selectAccountText !== null)
            ? exports.SelectAccountScreenText.fromPartial(object.selectAccountText)
            : undefined;
        message.loginText = (object.loginText !== undefined && object.loginText !== null)
            ? exports.LoginScreenText.fromPartial(object.loginText)
            : undefined;
        message.passwordText = (object.passwordText !== undefined && object.passwordText !== null)
            ? exports.PasswordScreenText.fromPartial(object.passwordText)
            : undefined;
        message.usernameChangeText = (object.usernameChangeText !== undefined && object.usernameChangeText !== null)
            ? exports.UsernameChangeScreenText.fromPartial(object.usernameChangeText)
            : undefined;
        message.usernameChangeDoneText =
            (object.usernameChangeDoneText !== undefined && object.usernameChangeDoneText !== null)
                ? exports.UsernameChangeDoneScreenText.fromPartial(object.usernameChangeDoneText)
                : undefined;
        message.initPasswordText = (object.initPasswordText !== undefined && object.initPasswordText !== null)
            ? exports.InitPasswordScreenText.fromPartial(object.initPasswordText)
            : undefined;
        message.initPasswordDoneText = (object.initPasswordDoneText !== undefined && object.initPasswordDoneText !== null)
            ? exports.InitPasswordDoneScreenText.fromPartial(object.initPasswordDoneText)
            : undefined;
        message.emailVerificationText =
            (object.emailVerificationText !== undefined && object.emailVerificationText !== null)
                ? exports.EmailVerificationScreenText.fromPartial(object.emailVerificationText)
                : undefined;
        message.emailVerificationDoneText =
            (object.emailVerificationDoneText !== undefined && object.emailVerificationDoneText !== null)
                ? exports.EmailVerificationDoneScreenText.fromPartial(object.emailVerificationDoneText)
                : undefined;
        message.initializeUserText = (object.initializeUserText !== undefined && object.initializeUserText !== null)
            ? exports.InitializeUserScreenText.fromPartial(object.initializeUserText)
            : undefined;
        message.initializeDoneText = (object.initializeDoneText !== undefined && object.initializeDoneText !== null)
            ? exports.InitializeUserDoneScreenText.fromPartial(object.initializeDoneText)
            : undefined;
        message.initMfaPromptText = (object.initMfaPromptText !== undefined && object.initMfaPromptText !== null)
            ? exports.InitMFAPromptScreenText.fromPartial(object.initMfaPromptText)
            : undefined;
        message.initMfaOtpText = (object.initMfaOtpText !== undefined && object.initMfaOtpText !== null)
            ? exports.InitMFAOTPScreenText.fromPartial(object.initMfaOtpText)
            : undefined;
        message.initMfaU2fText = (object.initMfaU2fText !== undefined && object.initMfaU2fText !== null)
            ? exports.InitMFAU2FScreenText.fromPartial(object.initMfaU2fText)
            : undefined;
        message.initMfaDoneText = (object.initMfaDoneText !== undefined && object.initMfaDoneText !== null)
            ? exports.InitMFADoneScreenText.fromPartial(object.initMfaDoneText)
            : undefined;
        message.mfaProvidersText = (object.mfaProvidersText !== undefined && object.mfaProvidersText !== null)
            ? exports.MFAProvidersText.fromPartial(object.mfaProvidersText)
            : undefined;
        message.verifyMfaOtpText = (object.verifyMfaOtpText !== undefined && object.verifyMfaOtpText !== null)
            ? exports.VerifyMFAOTPScreenText.fromPartial(object.verifyMfaOtpText)
            : undefined;
        message.verifyMfaU2fText = (object.verifyMfaU2fText !== undefined && object.verifyMfaU2fText !== null)
            ? exports.VerifyMFAU2FScreenText.fromPartial(object.verifyMfaU2fText)
            : undefined;
        message.passwordlessText = (object.passwordlessText !== undefined && object.passwordlessText !== null)
            ? exports.PasswordlessScreenText.fromPartial(object.passwordlessText)
            : undefined;
        message.passwordChangeText = (object.passwordChangeText !== undefined && object.passwordChangeText !== null)
            ? exports.PasswordChangeScreenText.fromPartial(object.passwordChangeText)
            : undefined;
        message.passwordChangeDoneText =
            (object.passwordChangeDoneText !== undefined && object.passwordChangeDoneText !== null)
                ? exports.PasswordChangeDoneScreenText.fromPartial(object.passwordChangeDoneText)
                : undefined;
        message.passwordResetDoneText =
            (object.passwordResetDoneText !== undefined && object.passwordResetDoneText !== null)
                ? exports.PasswordResetDoneScreenText.fromPartial(object.passwordResetDoneText)
                : undefined;
        message.registrationOptionText =
            (object.registrationOptionText !== undefined && object.registrationOptionText !== null)
                ? exports.RegistrationOptionScreenText.fromPartial(object.registrationOptionText)
                : undefined;
        message.registrationUserText = (object.registrationUserText !== undefined && object.registrationUserText !== null)
            ? exports.RegistrationUserScreenText.fromPartial(object.registrationUserText)
            : undefined;
        message.registrationOrgText = (object.registrationOrgText !== undefined && object.registrationOrgText !== null)
            ? exports.RegistrationOrgScreenText.fromPartial(object.registrationOrgText)
            : undefined;
        message.linkingUserDoneText = (object.linkingUserDoneText !== undefined && object.linkingUserDoneText !== null)
            ? exports.LinkingUserDoneScreenText.fromPartial(object.linkingUserDoneText)
            : undefined;
        message.externalUserNotFoundText =
            (object.externalUserNotFoundText !== undefined && object.externalUserNotFoundText !== null)
                ? exports.ExternalUserNotFoundScreenText.fromPartial(object.externalUserNotFoundText)
                : undefined;
        message.successLoginText = (object.successLoginText !== undefined && object.successLoginText !== null)
            ? exports.SuccessLoginScreenText.fromPartial(object.successLoginText)
            : undefined;
        message.logoutText = (object.logoutText !== undefined && object.logoutText !== null)
            ? exports.LogoutDoneScreenText.fromPartial(object.logoutText)
            : undefined;
        message.footerText = (object.footerText !== undefined && object.footerText !== null)
            ? exports.FooterText.fromPartial(object.footerText)
            : undefined;
        message.passwordlessPromptText =
            (object.passwordlessPromptText !== undefined && object.passwordlessPromptText !== null)
                ? exports.PasswordlessPromptScreenText.fromPartial(object.passwordlessPromptText)
                : undefined;
        message.passwordlessRegistrationText =
            (object.passwordlessRegistrationText !== undefined && object.passwordlessRegistrationText !== null)
                ? exports.PasswordlessRegistrationScreenText.fromPartial(object.passwordlessRegistrationText)
                : undefined;
        message.passwordlessRegistrationDoneText =
            (object.passwordlessRegistrationDoneText !== undefined && object.passwordlessRegistrationDoneText !== null)
                ? exports.PasswordlessRegistrationDoneScreenText.fromPartial(object.passwordlessRegistrationDoneText)
                : undefined;
        message.externalRegistrationUserOverviewText =
            (object.externalRegistrationUserOverviewText !== undefined &&
                object.externalRegistrationUserOverviewText !== null)
                ? exports.ExternalRegistrationUserOverviewScreenText.fromPartial(object.externalRegistrationUserOverviewText)
                : undefined;
        message.isDefault = (_a = object.isDefault) !== null && _a !== void 0 ? _a : false;
        message.linkingUserPromptText =
            (object.linkingUserPromptText !== undefined && object.linkingUserPromptText !== null)
                ? exports.LinkingUserPromptScreenText.fromPartial(object.linkingUserPromptText)
                : undefined;
        return message;
    },
};
function createBaseSelectAccountScreenText() {
    return {
        title: "",
        description: "",
        titleLinkingProcess: "",
        descriptionLinkingProcess: "",
        otherUser: "",
        sessionStateActive: "",
        sessionStateInactive: "",
        userMustBeMemberOfOrg: "",
    };
}
exports.SelectAccountScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.titleLinkingProcess !== "") {
            writer.uint32(26).string(message.titleLinkingProcess);
        }
        if (message.descriptionLinkingProcess !== "") {
            writer.uint32(34).string(message.descriptionLinkingProcess);
        }
        if (message.otherUser !== "") {
            writer.uint32(42).string(message.otherUser);
        }
        if (message.sessionStateActive !== "") {
            writer.uint32(50).string(message.sessionStateActive);
        }
        if (message.sessionStateInactive !== "") {
            writer.uint32(58).string(message.sessionStateInactive);
        }
        if (message.userMustBeMemberOfOrg !== "") {
            writer.uint32(66).string(message.userMustBeMemberOfOrg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSelectAccountScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.titleLinkingProcess = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.descriptionLinkingProcess = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.otherUser = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.sessionStateActive = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.sessionStateInactive = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.userMustBeMemberOfOrg = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            titleLinkingProcess: isSet(object.titleLinkingProcess) ? globalThis.String(object.titleLinkingProcess) : "",
            descriptionLinkingProcess: isSet(object.descriptionLinkingProcess)
                ? globalThis.String(object.descriptionLinkingProcess)
                : "",
            otherUser: isSet(object.otherUser) ? globalThis.String(object.otherUser) : "",
            sessionStateActive: isSet(object.sessionStateActive) ? globalThis.String(object.sessionStateActive) : "",
            sessionStateInactive: isSet(object.sessionStateInactive) ? globalThis.String(object.sessionStateInactive) : "",
            userMustBeMemberOfOrg: isSet(object.userMustBeMemberOfOrg) ? globalThis.String(object.userMustBeMemberOfOrg) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.titleLinkingProcess !== "") {
            obj.titleLinkingProcess = message.titleLinkingProcess;
        }
        if (message.descriptionLinkingProcess !== "") {
            obj.descriptionLinkingProcess = message.descriptionLinkingProcess;
        }
        if (message.otherUser !== "") {
            obj.otherUser = message.otherUser;
        }
        if (message.sessionStateActive !== "") {
            obj.sessionStateActive = message.sessionStateActive;
        }
        if (message.sessionStateInactive !== "") {
            obj.sessionStateInactive = message.sessionStateInactive;
        }
        if (message.userMustBeMemberOfOrg !== "") {
            obj.userMustBeMemberOfOrg = message.userMustBeMemberOfOrg;
        }
        return obj;
    },
    create(base) {
        return exports.SelectAccountScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBaseSelectAccountScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.titleLinkingProcess = (_c = object.titleLinkingProcess) !== null && _c !== void 0 ? _c : "";
        message.descriptionLinkingProcess = (_d = object.descriptionLinkingProcess) !== null && _d !== void 0 ? _d : "";
        message.otherUser = (_e = object.otherUser) !== null && _e !== void 0 ? _e : "";
        message.sessionStateActive = (_f = object.sessionStateActive) !== null && _f !== void 0 ? _f : "";
        message.sessionStateInactive = (_g = object.sessionStateInactive) !== null && _g !== void 0 ? _g : "";
        message.userMustBeMemberOfOrg = (_h = object.userMustBeMemberOfOrg) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBaseLoginScreenText() {
    return {
        title: "",
        description: "",
        titleLinkingProcess: "",
        descriptionLinkingProcess: "",
        userMustBeMemberOfOrg: "",
        loginNameLabel: "",
        registerButtonText: "",
        nextButtonText: "",
        externalUserDescription: "",
        userNamePlaceholder: "",
        loginNamePlaceholder: "",
    };
}
exports.LoginScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.titleLinkingProcess !== "") {
            writer.uint32(26).string(message.titleLinkingProcess);
        }
        if (message.descriptionLinkingProcess !== "") {
            writer.uint32(34).string(message.descriptionLinkingProcess);
        }
        if (message.userMustBeMemberOfOrg !== "") {
            writer.uint32(42).string(message.userMustBeMemberOfOrg);
        }
        if (message.loginNameLabel !== "") {
            writer.uint32(50).string(message.loginNameLabel);
        }
        if (message.registerButtonText !== "") {
            writer.uint32(58).string(message.registerButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(66).string(message.nextButtonText);
        }
        if (message.externalUserDescription !== "") {
            writer.uint32(74).string(message.externalUserDescription);
        }
        if (message.userNamePlaceholder !== "") {
            writer.uint32(82).string(message.userNamePlaceholder);
        }
        if (message.loginNamePlaceholder !== "") {
            writer.uint32(90).string(message.loginNamePlaceholder);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.titleLinkingProcess = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.descriptionLinkingProcess = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.userMustBeMemberOfOrg = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.loginNameLabel = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.registerButtonText = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.externalUserDescription = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.userNamePlaceholder = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.loginNamePlaceholder = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            titleLinkingProcess: isSet(object.titleLinkingProcess) ? globalThis.String(object.titleLinkingProcess) : "",
            descriptionLinkingProcess: isSet(object.descriptionLinkingProcess)
                ? globalThis.String(object.descriptionLinkingProcess)
                : "",
            userMustBeMemberOfOrg: isSet(object.userMustBeMemberOfOrg) ? globalThis.String(object.userMustBeMemberOfOrg) : "",
            loginNameLabel: isSet(object.loginNameLabel) ? globalThis.String(object.loginNameLabel) : "",
            registerButtonText: isSet(object.registerButtonText) ? globalThis.String(object.registerButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            externalUserDescription: isSet(object.externalUserDescription)
                ? globalThis.String(object.externalUserDescription)
                : "",
            userNamePlaceholder: isSet(object.userNamePlaceholder) ? globalThis.String(object.userNamePlaceholder) : "",
            loginNamePlaceholder: isSet(object.loginNamePlaceholder) ? globalThis.String(object.loginNamePlaceholder) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.titleLinkingProcess !== "") {
            obj.titleLinkingProcess = message.titleLinkingProcess;
        }
        if (message.descriptionLinkingProcess !== "") {
            obj.descriptionLinkingProcess = message.descriptionLinkingProcess;
        }
        if (message.userMustBeMemberOfOrg !== "") {
            obj.userMustBeMemberOfOrg = message.userMustBeMemberOfOrg;
        }
        if (message.loginNameLabel !== "") {
            obj.loginNameLabel = message.loginNameLabel;
        }
        if (message.registerButtonText !== "") {
            obj.registerButtonText = message.registerButtonText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.externalUserDescription !== "") {
            obj.externalUserDescription = message.externalUserDescription;
        }
        if (message.userNamePlaceholder !== "") {
            obj.userNamePlaceholder = message.userNamePlaceholder;
        }
        if (message.loginNamePlaceholder !== "") {
            obj.loginNamePlaceholder = message.loginNamePlaceholder;
        }
        return obj;
    },
    create(base) {
        return exports.LoginScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        const message = createBaseLoginScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.titleLinkingProcess = (_c = object.titleLinkingProcess) !== null && _c !== void 0 ? _c : "";
        message.descriptionLinkingProcess = (_d = object.descriptionLinkingProcess) !== null && _d !== void 0 ? _d : "";
        message.userMustBeMemberOfOrg = (_e = object.userMustBeMemberOfOrg) !== null && _e !== void 0 ? _e : "";
        message.loginNameLabel = (_f = object.loginNameLabel) !== null && _f !== void 0 ? _f : "";
        message.registerButtonText = (_g = object.registerButtonText) !== null && _g !== void 0 ? _g : "";
        message.nextButtonText = (_h = object.nextButtonText) !== null && _h !== void 0 ? _h : "";
        message.externalUserDescription = (_j = object.externalUserDescription) !== null && _j !== void 0 ? _j : "";
        message.userNamePlaceholder = (_k = object.userNamePlaceholder) !== null && _k !== void 0 ? _k : "";
        message.loginNamePlaceholder = (_l = object.loginNamePlaceholder) !== null && _l !== void 0 ? _l : "";
        return message;
    },
};
function createBasePasswordScreenText() {
    return {
        title: "",
        description: "",
        passwordLabel: "",
        resetLinkText: "",
        backButtonText: "",
        nextButtonText: "",
        minLength: "",
        hasUppercase: "",
        hasLowercase: "",
        hasNumber: "",
        hasSymbol: "",
        confirmation: "",
    };
}
exports.PasswordScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.passwordLabel !== "") {
            writer.uint32(26).string(message.passwordLabel);
        }
        if (message.resetLinkText !== "") {
            writer.uint32(34).string(message.resetLinkText);
        }
        if (message.backButtonText !== "") {
            writer.uint32(42).string(message.backButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(50).string(message.nextButtonText);
        }
        if (message.minLength !== "") {
            writer.uint32(58).string(message.minLength);
        }
        if (message.hasUppercase !== "") {
            writer.uint32(66).string(message.hasUppercase);
        }
        if (message.hasLowercase !== "") {
            writer.uint32(74).string(message.hasLowercase);
        }
        if (message.hasNumber !== "") {
            writer.uint32(82).string(message.hasNumber);
        }
        if (message.hasSymbol !== "") {
            writer.uint32(90).string(message.hasSymbol);
        }
        if (message.confirmation !== "") {
            writer.uint32(98).string(message.confirmation);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.passwordLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.resetLinkText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.backButtonText = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.minLength = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.hasUppercase = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.hasLowercase = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.hasNumber = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.hasSymbol = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.confirmation = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            passwordLabel: isSet(object.passwordLabel) ? globalThis.String(object.passwordLabel) : "",
            resetLinkText: isSet(object.resetLinkText) ? globalThis.String(object.resetLinkText) : "",
            backButtonText: isSet(object.backButtonText) ? globalThis.String(object.backButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            minLength: isSet(object.minLength) ? globalThis.String(object.minLength) : "",
            hasUppercase: isSet(object.hasUppercase) ? globalThis.String(object.hasUppercase) : "",
            hasLowercase: isSet(object.hasLowercase) ? globalThis.String(object.hasLowercase) : "",
            hasNumber: isSet(object.hasNumber) ? globalThis.String(object.hasNumber) : "",
            hasSymbol: isSet(object.hasSymbol) ? globalThis.String(object.hasSymbol) : "",
            confirmation: isSet(object.confirmation) ? globalThis.String(object.confirmation) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.passwordLabel !== "") {
            obj.passwordLabel = message.passwordLabel;
        }
        if (message.resetLinkText !== "") {
            obj.resetLinkText = message.resetLinkText;
        }
        if (message.backButtonText !== "") {
            obj.backButtonText = message.backButtonText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.minLength !== "") {
            obj.minLength = message.minLength;
        }
        if (message.hasUppercase !== "") {
            obj.hasUppercase = message.hasUppercase;
        }
        if (message.hasLowercase !== "") {
            obj.hasLowercase = message.hasLowercase;
        }
        if (message.hasNumber !== "") {
            obj.hasNumber = message.hasNumber;
        }
        if (message.hasSymbol !== "") {
            obj.hasSymbol = message.hasSymbol;
        }
        if (message.confirmation !== "") {
            obj.confirmation = message.confirmation;
        }
        return obj;
    },
    create(base) {
        return exports.PasswordScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        const message = createBasePasswordScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.passwordLabel = (_c = object.passwordLabel) !== null && _c !== void 0 ? _c : "";
        message.resetLinkText = (_d = object.resetLinkText) !== null && _d !== void 0 ? _d : "";
        message.backButtonText = (_e = object.backButtonText) !== null && _e !== void 0 ? _e : "";
        message.nextButtonText = (_f = object.nextButtonText) !== null && _f !== void 0 ? _f : "";
        message.minLength = (_g = object.minLength) !== null && _g !== void 0 ? _g : "";
        message.hasUppercase = (_h = object.hasUppercase) !== null && _h !== void 0 ? _h : "";
        message.hasLowercase = (_j = object.hasLowercase) !== null && _j !== void 0 ? _j : "";
        message.hasNumber = (_k = object.hasNumber) !== null && _k !== void 0 ? _k : "";
        message.hasSymbol = (_l = object.hasSymbol) !== null && _l !== void 0 ? _l : "";
        message.confirmation = (_m = object.confirmation) !== null && _m !== void 0 ? _m : "";
        return message;
    },
};
function createBaseUsernameChangeScreenText() {
    return { title: "", description: "", usernameLabel: "", cancelButtonText: "", nextButtonText: "" };
}
exports.UsernameChangeScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.usernameLabel !== "") {
            writer.uint32(26).string(message.usernameLabel);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(34).string(message.cancelButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(42).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUsernameChangeScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.usernameLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            usernameLabel: isSet(object.usernameLabel) ? globalThis.String(object.usernameLabel) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? globalThis.String(object.cancelButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.usernameLabel !== "") {
            obj.usernameLabel = message.usernameLabel;
        }
        if (message.cancelButtonText !== "") {
            obj.cancelButtonText = message.cancelButtonText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.UsernameChangeScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseUsernameChangeScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.usernameLabel = (_c = object.usernameLabel) !== null && _c !== void 0 ? _c : "";
        message.cancelButtonText = (_d = object.cancelButtonText) !== null && _d !== void 0 ? _d : "";
        message.nextButtonText = (_e = object.nextButtonText) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseUsernameChangeDoneScreenText() {
    return { title: "", description: "", nextButtonText: "" };
}
exports.UsernameChangeDoneScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUsernameChangeDoneScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.UsernameChangeDoneScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUsernameChangeDoneScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.nextButtonText = (_c = object.nextButtonText) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseInitPasswordScreenText() {
    return {
        title: "",
        description: "",
        codeLabel: "",
        newPasswordLabel: "",
        newPasswordConfirmLabel: "",
        nextButtonText: "",
        resendButtonText: "",
    };
}
exports.InitPasswordScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.codeLabel !== "") {
            writer.uint32(26).string(message.codeLabel);
        }
        if (message.newPasswordLabel !== "") {
            writer.uint32(34).string(message.newPasswordLabel);
        }
        if (message.newPasswordConfirmLabel !== "") {
            writer.uint32(42).string(message.newPasswordConfirmLabel);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(50).string(message.nextButtonText);
        }
        if (message.resendButtonText !== "") {
            writer.uint32(58).string(message.resendButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitPasswordScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.codeLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.newPasswordLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.newPasswordConfirmLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.resendButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            codeLabel: isSet(object.codeLabel) ? globalThis.String(object.codeLabel) : "",
            newPasswordLabel: isSet(object.newPasswordLabel) ? globalThis.String(object.newPasswordLabel) : "",
            newPasswordConfirmLabel: isSet(object.newPasswordConfirmLabel)
                ? globalThis.String(object.newPasswordConfirmLabel)
                : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            resendButtonText: isSet(object.resendButtonText) ? globalThis.String(object.resendButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.codeLabel !== "") {
            obj.codeLabel = message.codeLabel;
        }
        if (message.newPasswordLabel !== "") {
            obj.newPasswordLabel = message.newPasswordLabel;
        }
        if (message.newPasswordConfirmLabel !== "") {
            obj.newPasswordConfirmLabel = message.newPasswordConfirmLabel;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.resendButtonText !== "") {
            obj.resendButtonText = message.resendButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.InitPasswordScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseInitPasswordScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.codeLabel = (_c = object.codeLabel) !== null && _c !== void 0 ? _c : "";
        message.newPasswordLabel = (_d = object.newPasswordLabel) !== null && _d !== void 0 ? _d : "";
        message.newPasswordConfirmLabel = (_e = object.newPasswordConfirmLabel) !== null && _e !== void 0 ? _e : "";
        message.nextButtonText = (_f = object.nextButtonText) !== null && _f !== void 0 ? _f : "";
        message.resendButtonText = (_g = object.resendButtonText) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseInitPasswordDoneScreenText() {
    return { title: "", description: "", nextButtonText: "", cancelButtonText: "" };
}
exports.InitPasswordDoneScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(34).string(message.cancelButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitPasswordDoneScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? globalThis.String(object.cancelButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.cancelButtonText !== "") {
            obj.cancelButtonText = message.cancelButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.InitPasswordDoneScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseInitPasswordDoneScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.nextButtonText = (_c = object.nextButtonText) !== null && _c !== void 0 ? _c : "";
        message.cancelButtonText = (_d = object.cancelButtonText) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseEmailVerificationScreenText() {
    return { title: "", description: "", codeLabel: "", nextButtonText: "", resendButtonText: "" };
}
exports.EmailVerificationScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.codeLabel !== "") {
            writer.uint32(26).string(message.codeLabel);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        if (message.resendButtonText !== "") {
            writer.uint32(42).string(message.resendButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailVerificationScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.codeLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.resendButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            codeLabel: isSet(object.codeLabel) ? globalThis.String(object.codeLabel) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            resendButtonText: isSet(object.resendButtonText) ? globalThis.String(object.resendButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.codeLabel !== "") {
            obj.codeLabel = message.codeLabel;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.resendButtonText !== "") {
            obj.resendButtonText = message.resendButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.EmailVerificationScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseEmailVerificationScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.codeLabel = (_c = object.codeLabel) !== null && _c !== void 0 ? _c : "";
        message.nextButtonText = (_d = object.nextButtonText) !== null && _d !== void 0 ? _d : "";
        message.resendButtonText = (_e = object.resendButtonText) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseEmailVerificationDoneScreenText() {
    return { title: "", description: "", nextButtonText: "", cancelButtonText: "", loginButtonText: "" };
}
exports.EmailVerificationDoneScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(34).string(message.cancelButtonText);
        }
        if (message.loginButtonText !== "") {
            writer.uint32(42).string(message.loginButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailVerificationDoneScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.loginButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? globalThis.String(object.cancelButtonText) : "",
            loginButtonText: isSet(object.loginButtonText) ? globalThis.String(object.loginButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.cancelButtonText !== "") {
            obj.cancelButtonText = message.cancelButtonText;
        }
        if (message.loginButtonText !== "") {
            obj.loginButtonText = message.loginButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.EmailVerificationDoneScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseEmailVerificationDoneScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.nextButtonText = (_c = object.nextButtonText) !== null && _c !== void 0 ? _c : "";
        message.cancelButtonText = (_d = object.cancelButtonText) !== null && _d !== void 0 ? _d : "";
        message.loginButtonText = (_e = object.loginButtonText) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseInitializeUserScreenText() {
    return {
        title: "",
        description: "",
        codeLabel: "",
        newPasswordLabel: "",
        newPasswordConfirmLabel: "",
        resendButtonText: "",
        nextButtonText: "",
    };
}
exports.InitializeUserScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.codeLabel !== "") {
            writer.uint32(26).string(message.codeLabel);
        }
        if (message.newPasswordLabel !== "") {
            writer.uint32(34).string(message.newPasswordLabel);
        }
        if (message.newPasswordConfirmLabel !== "") {
            writer.uint32(42).string(message.newPasswordConfirmLabel);
        }
        if (message.resendButtonText !== "") {
            writer.uint32(50).string(message.resendButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(58).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitializeUserScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.codeLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.newPasswordLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.newPasswordConfirmLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.resendButtonText = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            codeLabel: isSet(object.codeLabel) ? globalThis.String(object.codeLabel) : "",
            newPasswordLabel: isSet(object.newPasswordLabel) ? globalThis.String(object.newPasswordLabel) : "",
            newPasswordConfirmLabel: isSet(object.newPasswordConfirmLabel)
                ? globalThis.String(object.newPasswordConfirmLabel)
                : "",
            resendButtonText: isSet(object.resendButtonText) ? globalThis.String(object.resendButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.codeLabel !== "") {
            obj.codeLabel = message.codeLabel;
        }
        if (message.newPasswordLabel !== "") {
            obj.newPasswordLabel = message.newPasswordLabel;
        }
        if (message.newPasswordConfirmLabel !== "") {
            obj.newPasswordConfirmLabel = message.newPasswordConfirmLabel;
        }
        if (message.resendButtonText !== "") {
            obj.resendButtonText = message.resendButtonText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.InitializeUserScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseInitializeUserScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.codeLabel = (_c = object.codeLabel) !== null && _c !== void 0 ? _c : "";
        message.newPasswordLabel = (_d = object.newPasswordLabel) !== null && _d !== void 0 ? _d : "";
        message.newPasswordConfirmLabel = (_e = object.newPasswordConfirmLabel) !== null && _e !== void 0 ? _e : "";
        message.resendButtonText = (_f = object.resendButtonText) !== null && _f !== void 0 ? _f : "";
        message.nextButtonText = (_g = object.nextButtonText) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseInitializeUserDoneScreenText() {
    return { title: "", description: "", cancelButtonText: "", nextButtonText: "" };
}
exports.InitializeUserDoneScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(26).string(message.cancelButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitializeUserDoneScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? globalThis.String(object.cancelButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.cancelButtonText !== "") {
            obj.cancelButtonText = message.cancelButtonText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.InitializeUserDoneScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseInitializeUserDoneScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.cancelButtonText = (_c = object.cancelButtonText) !== null && _c !== void 0 ? _c : "";
        message.nextButtonText = (_d = object.nextButtonText) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseInitMFAPromptScreenText() {
    return { title: "", description: "", otpOption: "", u2fOption: "", skipButtonText: "", nextButtonText: "" };
}
exports.InitMFAPromptScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.otpOption !== "") {
            writer.uint32(26).string(message.otpOption);
        }
        if (message.u2fOption !== "") {
            writer.uint32(34).string(message.u2fOption);
        }
        if (message.skipButtonText !== "") {
            writer.uint32(42).string(message.skipButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(50).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitMFAPromptScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.otpOption = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.u2fOption = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.skipButtonText = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            otpOption: isSet(object.otpOption) ? globalThis.String(object.otpOption) : "",
            u2fOption: isSet(object.u2fOption) ? globalThis.String(object.u2fOption) : "",
            skipButtonText: isSet(object.skipButtonText) ? globalThis.String(object.skipButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.otpOption !== "") {
            obj.otpOption = message.otpOption;
        }
        if (message.u2fOption !== "") {
            obj.u2fOption = message.u2fOption;
        }
        if (message.skipButtonText !== "") {
            obj.skipButtonText = message.skipButtonText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.InitMFAPromptScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseInitMFAPromptScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.otpOption = (_c = object.otpOption) !== null && _c !== void 0 ? _c : "";
        message.u2fOption = (_d = object.u2fOption) !== null && _d !== void 0 ? _d : "";
        message.skipButtonText = (_e = object.skipButtonText) !== null && _e !== void 0 ? _e : "";
        message.nextButtonText = (_f = object.nextButtonText) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseInitMFAOTPScreenText() {
    return {
        title: "",
        description: "",
        descriptionOtp: "",
        secretLabel: "",
        codeLabel: "",
        nextButtonText: "",
        cancelButtonText: "",
    };
}
exports.InitMFAOTPScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.descriptionOtp !== "") {
            writer.uint32(26).string(message.descriptionOtp);
        }
        if (message.secretLabel !== "") {
            writer.uint32(34).string(message.secretLabel);
        }
        if (message.codeLabel !== "") {
            writer.uint32(42).string(message.codeLabel);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(50).string(message.nextButtonText);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(58).string(message.cancelButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitMFAOTPScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.descriptionOtp = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.secretLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.codeLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            descriptionOtp: isSet(object.descriptionOtp) ? globalThis.String(object.descriptionOtp) : "",
            secretLabel: isSet(object.secretLabel) ? globalThis.String(object.secretLabel) : "",
            codeLabel: isSet(object.codeLabel) ? globalThis.String(object.codeLabel) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? globalThis.String(object.cancelButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.descriptionOtp !== "") {
            obj.descriptionOtp = message.descriptionOtp;
        }
        if (message.secretLabel !== "") {
            obj.secretLabel = message.secretLabel;
        }
        if (message.codeLabel !== "") {
            obj.codeLabel = message.codeLabel;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.cancelButtonText !== "") {
            obj.cancelButtonText = message.cancelButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.InitMFAOTPScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseInitMFAOTPScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.descriptionOtp = (_c = object.descriptionOtp) !== null && _c !== void 0 ? _c : "";
        message.secretLabel = (_d = object.secretLabel) !== null && _d !== void 0 ? _d : "";
        message.codeLabel = (_e = object.codeLabel) !== null && _e !== void 0 ? _e : "";
        message.nextButtonText = (_f = object.nextButtonText) !== null && _f !== void 0 ? _f : "";
        message.cancelButtonText = (_g = object.cancelButtonText) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseInitMFAU2FScreenText() {
    return {
        title: "",
        description: "",
        tokenNameLabel: "",
        notSupported: "",
        registerTokenButtonText: "",
        errorRetry: "",
    };
}
exports.InitMFAU2FScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.tokenNameLabel !== "") {
            writer.uint32(26).string(message.tokenNameLabel);
        }
        if (message.notSupported !== "") {
            writer.uint32(34).string(message.notSupported);
        }
        if (message.registerTokenButtonText !== "") {
            writer.uint32(42).string(message.registerTokenButtonText);
        }
        if (message.errorRetry !== "") {
            writer.uint32(50).string(message.errorRetry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitMFAU2FScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tokenNameLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.notSupported = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.registerTokenButtonText = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.errorRetry = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            tokenNameLabel: isSet(object.tokenNameLabel) ? globalThis.String(object.tokenNameLabel) : "",
            notSupported: isSet(object.notSupported) ? globalThis.String(object.notSupported) : "",
            registerTokenButtonText: isSet(object.registerTokenButtonText)
                ? globalThis.String(object.registerTokenButtonText)
                : "",
            errorRetry: isSet(object.errorRetry) ? globalThis.String(object.errorRetry) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.tokenNameLabel !== "") {
            obj.tokenNameLabel = message.tokenNameLabel;
        }
        if (message.notSupported !== "") {
            obj.notSupported = message.notSupported;
        }
        if (message.registerTokenButtonText !== "") {
            obj.registerTokenButtonText = message.registerTokenButtonText;
        }
        if (message.errorRetry !== "") {
            obj.errorRetry = message.errorRetry;
        }
        return obj;
    },
    create(base) {
        return exports.InitMFAU2FScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseInitMFAU2FScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.tokenNameLabel = (_c = object.tokenNameLabel) !== null && _c !== void 0 ? _c : "";
        message.notSupported = (_d = object.notSupported) !== null && _d !== void 0 ? _d : "";
        message.registerTokenButtonText = (_e = object.registerTokenButtonText) !== null && _e !== void 0 ? _e : "";
        message.errorRetry = (_f = object.errorRetry) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseInitMFADoneScreenText() {
    return { title: "", description: "", cancelButtonText: "", nextButtonText: "" };
}
exports.InitMFADoneScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(26).string(message.cancelButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInitMFADoneScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? globalThis.String(object.cancelButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.cancelButtonText !== "") {
            obj.cancelButtonText = message.cancelButtonText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.InitMFADoneScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseInitMFADoneScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.cancelButtonText = (_c = object.cancelButtonText) !== null && _c !== void 0 ? _c : "";
        message.nextButtonText = (_d = object.nextButtonText) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseMFAProvidersText() {
    return { chooseOther: "", otp: "", u2f: "" };
}
exports.MFAProvidersText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.chooseOther !== "") {
            writer.uint32(10).string(message.chooseOther);
        }
        if (message.otp !== "") {
            writer.uint32(18).string(message.otp);
        }
        if (message.u2f !== "") {
            writer.uint32(26).string(message.u2f);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMFAProvidersText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.chooseOther = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.otp = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.u2f = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            chooseOther: isSet(object.chooseOther) ? globalThis.String(object.chooseOther) : "",
            otp: isSet(object.otp) ? globalThis.String(object.otp) : "",
            u2f: isSet(object.u2f) ? globalThis.String(object.u2f) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.chooseOther !== "") {
            obj.chooseOther = message.chooseOther;
        }
        if (message.otp !== "") {
            obj.otp = message.otp;
        }
        if (message.u2f !== "") {
            obj.u2f = message.u2f;
        }
        return obj;
    },
    create(base) {
        return exports.MFAProvidersText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMFAProvidersText();
        message.chooseOther = (_a = object.chooseOther) !== null && _a !== void 0 ? _a : "";
        message.otp = (_b = object.otp) !== null && _b !== void 0 ? _b : "";
        message.u2f = (_c = object.u2f) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseVerifyMFAOTPScreenText() {
    return { title: "", description: "", codeLabel: "", nextButtonText: "" };
}
exports.VerifyMFAOTPScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.codeLabel !== "") {
            writer.uint32(26).string(message.codeLabel);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMFAOTPScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.codeLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            codeLabel: isSet(object.codeLabel) ? globalThis.String(object.codeLabel) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.codeLabel !== "") {
            obj.codeLabel = message.codeLabel;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyMFAOTPScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseVerifyMFAOTPScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.codeLabel = (_c = object.codeLabel) !== null && _c !== void 0 ? _c : "";
        message.nextButtonText = (_d = object.nextButtonText) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseVerifyMFAU2FScreenText() {
    return { title: "", description: "", validateTokenText: "", notSupported: "", errorRetry: "" };
}
exports.VerifyMFAU2FScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.validateTokenText !== "") {
            writer.uint32(26).string(message.validateTokenText);
        }
        if (message.notSupported !== "") {
            writer.uint32(34).string(message.notSupported);
        }
        if (message.errorRetry !== "") {
            writer.uint32(42).string(message.errorRetry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVerifyMFAU2FScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.validateTokenText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.notSupported = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.errorRetry = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            validateTokenText: isSet(object.validateTokenText) ? globalThis.String(object.validateTokenText) : "",
            notSupported: isSet(object.notSupported) ? globalThis.String(object.notSupported) : "",
            errorRetry: isSet(object.errorRetry) ? globalThis.String(object.errorRetry) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.validateTokenText !== "") {
            obj.validateTokenText = message.validateTokenText;
        }
        if (message.notSupported !== "") {
            obj.notSupported = message.notSupported;
        }
        if (message.errorRetry !== "") {
            obj.errorRetry = message.errorRetry;
        }
        return obj;
    },
    create(base) {
        return exports.VerifyMFAU2FScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseVerifyMFAU2FScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.validateTokenText = (_c = object.validateTokenText) !== null && _c !== void 0 ? _c : "";
        message.notSupported = (_d = object.notSupported) !== null && _d !== void 0 ? _d : "";
        message.errorRetry = (_e = object.errorRetry) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBasePasswordlessScreenText() {
    return {
        title: "",
        description: "",
        loginWithPwButtonText: "",
        validateTokenButtonText: "",
        notSupported: "",
        errorRetry: "",
    };
}
exports.PasswordlessScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.loginWithPwButtonText !== "") {
            writer.uint32(26).string(message.loginWithPwButtonText);
        }
        if (message.validateTokenButtonText !== "") {
            writer.uint32(34).string(message.validateTokenButtonText);
        }
        if (message.notSupported !== "") {
            writer.uint32(42).string(message.notSupported);
        }
        if (message.errorRetry !== "") {
            writer.uint32(50).string(message.errorRetry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordlessScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.loginWithPwButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.validateTokenButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.notSupported = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.errorRetry = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            loginWithPwButtonText: isSet(object.loginWithPwButtonText) ? globalThis.String(object.loginWithPwButtonText) : "",
            validateTokenButtonText: isSet(object.validateTokenButtonText)
                ? globalThis.String(object.validateTokenButtonText)
                : "",
            notSupported: isSet(object.notSupported) ? globalThis.String(object.notSupported) : "",
            errorRetry: isSet(object.errorRetry) ? globalThis.String(object.errorRetry) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.loginWithPwButtonText !== "") {
            obj.loginWithPwButtonText = message.loginWithPwButtonText;
        }
        if (message.validateTokenButtonText !== "") {
            obj.validateTokenButtonText = message.validateTokenButtonText;
        }
        if (message.notSupported !== "") {
            obj.notSupported = message.notSupported;
        }
        if (message.errorRetry !== "") {
            obj.errorRetry = message.errorRetry;
        }
        return obj;
    },
    create(base) {
        return exports.PasswordlessScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBasePasswordlessScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.loginWithPwButtonText = (_c = object.loginWithPwButtonText) !== null && _c !== void 0 ? _c : "";
        message.validateTokenButtonText = (_d = object.validateTokenButtonText) !== null && _d !== void 0 ? _d : "";
        message.notSupported = (_e = object.notSupported) !== null && _e !== void 0 ? _e : "";
        message.errorRetry = (_f = object.errorRetry) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBasePasswordChangeScreenText() {
    return {
        title: "",
        description: "",
        oldPasswordLabel: "",
        newPasswordLabel: "",
        newPasswordConfirmLabel: "",
        cancelButtonText: "",
        nextButtonText: "",
        expiredDescription: "",
    };
}
exports.PasswordChangeScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.oldPasswordLabel !== "") {
            writer.uint32(26).string(message.oldPasswordLabel);
        }
        if (message.newPasswordLabel !== "") {
            writer.uint32(34).string(message.newPasswordLabel);
        }
        if (message.newPasswordConfirmLabel !== "") {
            writer.uint32(42).string(message.newPasswordConfirmLabel);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(50).string(message.cancelButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(58).string(message.nextButtonText);
        }
        if (message.expiredDescription !== "") {
            writer.uint32(66).string(message.expiredDescription);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordChangeScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.oldPasswordLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.newPasswordLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.newPasswordConfirmLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.expiredDescription = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            oldPasswordLabel: isSet(object.oldPasswordLabel) ? globalThis.String(object.oldPasswordLabel) : "",
            newPasswordLabel: isSet(object.newPasswordLabel) ? globalThis.String(object.newPasswordLabel) : "",
            newPasswordConfirmLabel: isSet(object.newPasswordConfirmLabel)
                ? globalThis.String(object.newPasswordConfirmLabel)
                : "",
            cancelButtonText: isSet(object.cancelButtonText) ? globalThis.String(object.cancelButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            expiredDescription: isSet(object.expiredDescription) ? globalThis.String(object.expiredDescription) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.oldPasswordLabel !== "") {
            obj.oldPasswordLabel = message.oldPasswordLabel;
        }
        if (message.newPasswordLabel !== "") {
            obj.newPasswordLabel = message.newPasswordLabel;
        }
        if (message.newPasswordConfirmLabel !== "") {
            obj.newPasswordConfirmLabel = message.newPasswordConfirmLabel;
        }
        if (message.cancelButtonText !== "") {
            obj.cancelButtonText = message.cancelButtonText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.expiredDescription !== "") {
            obj.expiredDescription = message.expiredDescription;
        }
        return obj;
    },
    create(base) {
        return exports.PasswordChangeScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const message = createBasePasswordChangeScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.oldPasswordLabel = (_c = object.oldPasswordLabel) !== null && _c !== void 0 ? _c : "";
        message.newPasswordLabel = (_d = object.newPasswordLabel) !== null && _d !== void 0 ? _d : "";
        message.newPasswordConfirmLabel = (_e = object.newPasswordConfirmLabel) !== null && _e !== void 0 ? _e : "";
        message.cancelButtonText = (_f = object.cancelButtonText) !== null && _f !== void 0 ? _f : "";
        message.nextButtonText = (_g = object.nextButtonText) !== null && _g !== void 0 ? _g : "";
        message.expiredDescription = (_h = object.expiredDescription) !== null && _h !== void 0 ? _h : "";
        return message;
    },
};
function createBasePasswordChangeDoneScreenText() {
    return { title: "", description: "", nextButtonText: "" };
}
exports.PasswordChangeDoneScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordChangeDoneScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.PasswordChangeDoneScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePasswordChangeDoneScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.nextButtonText = (_c = object.nextButtonText) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBasePasswordResetDoneScreenText() {
    return { title: "", description: "", nextButtonText: "" };
}
exports.PasswordResetDoneScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordResetDoneScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.PasswordResetDoneScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePasswordResetDoneScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.nextButtonText = (_c = object.nextButtonText) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegistrationOptionScreenText() {
    return { title: "", description: "", userNameButtonText: "", externalLoginDescription: "", loginButtonText: "" };
}
exports.RegistrationOptionScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.userNameButtonText !== "") {
            writer.uint32(26).string(message.userNameButtonText);
        }
        if (message.externalLoginDescription !== "") {
            writer.uint32(34).string(message.externalLoginDescription);
        }
        if (message.loginButtonText !== "") {
            writer.uint32(42).string(message.loginButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegistrationOptionScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.userNameButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.externalLoginDescription = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.loginButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            userNameButtonText: isSet(object.userNameButtonText) ? globalThis.String(object.userNameButtonText) : "",
            externalLoginDescription: isSet(object.externalLoginDescription)
                ? globalThis.String(object.externalLoginDescription)
                : "",
            loginButtonText: isSet(object.loginButtonText) ? globalThis.String(object.loginButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.userNameButtonText !== "") {
            obj.userNameButtonText = message.userNameButtonText;
        }
        if (message.externalLoginDescription !== "") {
            obj.externalLoginDescription = message.externalLoginDescription;
        }
        if (message.loginButtonText !== "") {
            obj.loginButtonText = message.loginButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.RegistrationOptionScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseRegistrationOptionScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.userNameButtonText = (_c = object.userNameButtonText) !== null && _c !== void 0 ? _c : "";
        message.externalLoginDescription = (_d = object.externalLoginDescription) !== null && _d !== void 0 ? _d : "";
        message.loginButtonText = (_e = object.loginButtonText) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseRegistrationUserScreenText() {
    return {
        title: "",
        description: "",
        descriptionOrgRegister: "",
        firstnameLabel: "",
        lastnameLabel: "",
        emailLabel: "",
        usernameLabel: "",
        languageLabel: "",
        genderLabel: "",
        passwordLabel: "",
        passwordConfirmLabel: "",
        tosAndPrivacyLabel: "",
        tosConfirm: "",
        tosLinkText: "",
        privacyConfirm: "",
        privacyLinkText: "",
        nextButtonText: "",
        backButtonText: "",
    };
}
exports.RegistrationUserScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.descriptionOrgRegister !== "") {
            writer.uint32(26).string(message.descriptionOrgRegister);
        }
        if (message.firstnameLabel !== "") {
            writer.uint32(34).string(message.firstnameLabel);
        }
        if (message.lastnameLabel !== "") {
            writer.uint32(42).string(message.lastnameLabel);
        }
        if (message.emailLabel !== "") {
            writer.uint32(50).string(message.emailLabel);
        }
        if (message.usernameLabel !== "") {
            writer.uint32(58).string(message.usernameLabel);
        }
        if (message.languageLabel !== "") {
            writer.uint32(66).string(message.languageLabel);
        }
        if (message.genderLabel !== "") {
            writer.uint32(74).string(message.genderLabel);
        }
        if (message.passwordLabel !== "") {
            writer.uint32(82).string(message.passwordLabel);
        }
        if (message.passwordConfirmLabel !== "") {
            writer.uint32(90).string(message.passwordConfirmLabel);
        }
        if (message.tosAndPrivacyLabel !== "") {
            writer.uint32(98).string(message.tosAndPrivacyLabel);
        }
        if (message.tosConfirm !== "") {
            writer.uint32(106).string(message.tosConfirm);
        }
        if (message.tosLinkText !== "") {
            writer.uint32(122).string(message.tosLinkText);
        }
        if (message.privacyConfirm !== "") {
            writer.uint32(130).string(message.privacyConfirm);
        }
        if (message.privacyLinkText !== "") {
            writer.uint32(146).string(message.privacyLinkText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(162).string(message.nextButtonText);
        }
        if (message.backButtonText !== "") {
            writer.uint32(170).string(message.backButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegistrationUserScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.descriptionOrgRegister = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.firstnameLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.lastnameLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.emailLabel = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.usernameLabel = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.languageLabel = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.genderLabel = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.passwordLabel = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.passwordConfirmLabel = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.tosAndPrivacyLabel = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.tosConfirm = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.tosLinkText = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.privacyConfirm = reader.string();
                    continue;
                case 18:
                    if (tag !== 146) {
                        break;
                    }
                    message.privacyLinkText = reader.string();
                    continue;
                case 20:
                    if (tag !== 162) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 21:
                    if (tag !== 170) {
                        break;
                    }
                    message.backButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            descriptionOrgRegister: isSet(object.descriptionOrgRegister)
                ? globalThis.String(object.descriptionOrgRegister)
                : "",
            firstnameLabel: isSet(object.firstnameLabel) ? globalThis.String(object.firstnameLabel) : "",
            lastnameLabel: isSet(object.lastnameLabel) ? globalThis.String(object.lastnameLabel) : "",
            emailLabel: isSet(object.emailLabel) ? globalThis.String(object.emailLabel) : "",
            usernameLabel: isSet(object.usernameLabel) ? globalThis.String(object.usernameLabel) : "",
            languageLabel: isSet(object.languageLabel) ? globalThis.String(object.languageLabel) : "",
            genderLabel: isSet(object.genderLabel) ? globalThis.String(object.genderLabel) : "",
            passwordLabel: isSet(object.passwordLabel) ? globalThis.String(object.passwordLabel) : "",
            passwordConfirmLabel: isSet(object.passwordConfirmLabel) ? globalThis.String(object.passwordConfirmLabel) : "",
            tosAndPrivacyLabel: isSet(object.tosAndPrivacyLabel) ? globalThis.String(object.tosAndPrivacyLabel) : "",
            tosConfirm: isSet(object.tosConfirm) ? globalThis.String(object.tosConfirm) : "",
            tosLinkText: isSet(object.tosLinkText) ? globalThis.String(object.tosLinkText) : "",
            privacyConfirm: isSet(object.privacyConfirm) ? globalThis.String(object.privacyConfirm) : "",
            privacyLinkText: isSet(object.privacyLinkText) ? globalThis.String(object.privacyLinkText) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            backButtonText: isSet(object.backButtonText) ? globalThis.String(object.backButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.descriptionOrgRegister !== "") {
            obj.descriptionOrgRegister = message.descriptionOrgRegister;
        }
        if (message.firstnameLabel !== "") {
            obj.firstnameLabel = message.firstnameLabel;
        }
        if (message.lastnameLabel !== "") {
            obj.lastnameLabel = message.lastnameLabel;
        }
        if (message.emailLabel !== "") {
            obj.emailLabel = message.emailLabel;
        }
        if (message.usernameLabel !== "") {
            obj.usernameLabel = message.usernameLabel;
        }
        if (message.languageLabel !== "") {
            obj.languageLabel = message.languageLabel;
        }
        if (message.genderLabel !== "") {
            obj.genderLabel = message.genderLabel;
        }
        if (message.passwordLabel !== "") {
            obj.passwordLabel = message.passwordLabel;
        }
        if (message.passwordConfirmLabel !== "") {
            obj.passwordConfirmLabel = message.passwordConfirmLabel;
        }
        if (message.tosAndPrivacyLabel !== "") {
            obj.tosAndPrivacyLabel = message.tosAndPrivacyLabel;
        }
        if (message.tosConfirm !== "") {
            obj.tosConfirm = message.tosConfirm;
        }
        if (message.tosLinkText !== "") {
            obj.tosLinkText = message.tosLinkText;
        }
        if (message.privacyConfirm !== "") {
            obj.privacyConfirm = message.privacyConfirm;
        }
        if (message.privacyLinkText !== "") {
            obj.privacyLinkText = message.privacyLinkText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.backButtonText !== "") {
            obj.backButtonText = message.backButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.RegistrationUserScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        const message = createBaseRegistrationUserScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.descriptionOrgRegister = (_c = object.descriptionOrgRegister) !== null && _c !== void 0 ? _c : "";
        message.firstnameLabel = (_d = object.firstnameLabel) !== null && _d !== void 0 ? _d : "";
        message.lastnameLabel = (_e = object.lastnameLabel) !== null && _e !== void 0 ? _e : "";
        message.emailLabel = (_f = object.emailLabel) !== null && _f !== void 0 ? _f : "";
        message.usernameLabel = (_g = object.usernameLabel) !== null && _g !== void 0 ? _g : "";
        message.languageLabel = (_h = object.languageLabel) !== null && _h !== void 0 ? _h : "";
        message.genderLabel = (_j = object.genderLabel) !== null && _j !== void 0 ? _j : "";
        message.passwordLabel = (_k = object.passwordLabel) !== null && _k !== void 0 ? _k : "";
        message.passwordConfirmLabel = (_l = object.passwordConfirmLabel) !== null && _l !== void 0 ? _l : "";
        message.tosAndPrivacyLabel = (_m = object.tosAndPrivacyLabel) !== null && _m !== void 0 ? _m : "";
        message.tosConfirm = (_o = object.tosConfirm) !== null && _o !== void 0 ? _o : "";
        message.tosLinkText = (_p = object.tosLinkText) !== null && _p !== void 0 ? _p : "";
        message.privacyConfirm = (_q = object.privacyConfirm) !== null && _q !== void 0 ? _q : "";
        message.privacyLinkText = (_r = object.privacyLinkText) !== null && _r !== void 0 ? _r : "";
        message.nextButtonText = (_s = object.nextButtonText) !== null && _s !== void 0 ? _s : "";
        message.backButtonText = (_t = object.backButtonText) !== null && _t !== void 0 ? _t : "";
        return message;
    },
};
function createBaseExternalRegistrationUserOverviewScreenText() {
    return {
        title: "",
        description: "",
        emailLabel: "",
        usernameLabel: "",
        firstnameLabel: "",
        lastnameLabel: "",
        nicknameLabel: "",
        languageLabel: "",
        phoneLabel: "",
        tosAndPrivacyLabel: "",
        tosConfirm: "",
        tosLinkText: "",
        privacyLinkText: "",
        backButtonText: "",
        nextButtonText: "",
        privacyConfirm: "",
    };
}
exports.ExternalRegistrationUserOverviewScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.emailLabel !== "") {
            writer.uint32(26).string(message.emailLabel);
        }
        if (message.usernameLabel !== "") {
            writer.uint32(34).string(message.usernameLabel);
        }
        if (message.firstnameLabel !== "") {
            writer.uint32(42).string(message.firstnameLabel);
        }
        if (message.lastnameLabel !== "") {
            writer.uint32(50).string(message.lastnameLabel);
        }
        if (message.nicknameLabel !== "") {
            writer.uint32(58).string(message.nicknameLabel);
        }
        if (message.languageLabel !== "") {
            writer.uint32(66).string(message.languageLabel);
        }
        if (message.phoneLabel !== "") {
            writer.uint32(74).string(message.phoneLabel);
        }
        if (message.tosAndPrivacyLabel !== "") {
            writer.uint32(82).string(message.tosAndPrivacyLabel);
        }
        if (message.tosConfirm !== "") {
            writer.uint32(90).string(message.tosConfirm);
        }
        if (message.tosLinkText !== "") {
            writer.uint32(98).string(message.tosLinkText);
        }
        if (message.privacyLinkText !== "") {
            writer.uint32(114).string(message.privacyLinkText);
        }
        if (message.backButtonText !== "") {
            writer.uint32(122).string(message.backButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(130).string(message.nextButtonText);
        }
        if (message.privacyConfirm !== "") {
            writer.uint32(138).string(message.privacyConfirm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExternalRegistrationUserOverviewScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.emailLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.usernameLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.firstnameLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.lastnameLabel = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.nicknameLabel = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.languageLabel = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.phoneLabel = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.tosAndPrivacyLabel = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.tosConfirm = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.tosLinkText = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.privacyLinkText = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.backButtonText = reader.string();
                    continue;
                case 16:
                    if (tag !== 130) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.privacyConfirm = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            emailLabel: isSet(object.emailLabel) ? globalThis.String(object.emailLabel) : "",
            usernameLabel: isSet(object.usernameLabel) ? globalThis.String(object.usernameLabel) : "",
            firstnameLabel: isSet(object.firstnameLabel) ? globalThis.String(object.firstnameLabel) : "",
            lastnameLabel: isSet(object.lastnameLabel) ? globalThis.String(object.lastnameLabel) : "",
            nicknameLabel: isSet(object.nicknameLabel) ? globalThis.String(object.nicknameLabel) : "",
            languageLabel: isSet(object.languageLabel) ? globalThis.String(object.languageLabel) : "",
            phoneLabel: isSet(object.phoneLabel) ? globalThis.String(object.phoneLabel) : "",
            tosAndPrivacyLabel: isSet(object.tosAndPrivacyLabel) ? globalThis.String(object.tosAndPrivacyLabel) : "",
            tosConfirm: isSet(object.tosConfirm) ? globalThis.String(object.tosConfirm) : "",
            tosLinkText: isSet(object.tosLinkText) ? globalThis.String(object.tosLinkText) : "",
            privacyLinkText: isSet(object.privacyLinkText) ? globalThis.String(object.privacyLinkText) : "",
            backButtonText: isSet(object.backButtonText) ? globalThis.String(object.backButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            privacyConfirm: isSet(object.privacyConfirm) ? globalThis.String(object.privacyConfirm) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.emailLabel !== "") {
            obj.emailLabel = message.emailLabel;
        }
        if (message.usernameLabel !== "") {
            obj.usernameLabel = message.usernameLabel;
        }
        if (message.firstnameLabel !== "") {
            obj.firstnameLabel = message.firstnameLabel;
        }
        if (message.lastnameLabel !== "") {
            obj.lastnameLabel = message.lastnameLabel;
        }
        if (message.nicknameLabel !== "") {
            obj.nicknameLabel = message.nicknameLabel;
        }
        if (message.languageLabel !== "") {
            obj.languageLabel = message.languageLabel;
        }
        if (message.phoneLabel !== "") {
            obj.phoneLabel = message.phoneLabel;
        }
        if (message.tosAndPrivacyLabel !== "") {
            obj.tosAndPrivacyLabel = message.tosAndPrivacyLabel;
        }
        if (message.tosConfirm !== "") {
            obj.tosConfirm = message.tosConfirm;
        }
        if (message.tosLinkText !== "") {
            obj.tosLinkText = message.tosLinkText;
        }
        if (message.privacyLinkText !== "") {
            obj.privacyLinkText = message.privacyLinkText;
        }
        if (message.backButtonText !== "") {
            obj.backButtonText = message.backButtonText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.privacyConfirm !== "") {
            obj.privacyConfirm = message.privacyConfirm;
        }
        return obj;
    },
    create(base) {
        return exports.ExternalRegistrationUserOverviewScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const message = createBaseExternalRegistrationUserOverviewScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.emailLabel = (_c = object.emailLabel) !== null && _c !== void 0 ? _c : "";
        message.usernameLabel = (_d = object.usernameLabel) !== null && _d !== void 0 ? _d : "";
        message.firstnameLabel = (_e = object.firstnameLabel) !== null && _e !== void 0 ? _e : "";
        message.lastnameLabel = (_f = object.lastnameLabel) !== null && _f !== void 0 ? _f : "";
        message.nicknameLabel = (_g = object.nicknameLabel) !== null && _g !== void 0 ? _g : "";
        message.languageLabel = (_h = object.languageLabel) !== null && _h !== void 0 ? _h : "";
        message.phoneLabel = (_j = object.phoneLabel) !== null && _j !== void 0 ? _j : "";
        message.tosAndPrivacyLabel = (_k = object.tosAndPrivacyLabel) !== null && _k !== void 0 ? _k : "";
        message.tosConfirm = (_l = object.tosConfirm) !== null && _l !== void 0 ? _l : "";
        message.tosLinkText = (_m = object.tosLinkText) !== null && _m !== void 0 ? _m : "";
        message.privacyLinkText = (_o = object.privacyLinkText) !== null && _o !== void 0 ? _o : "";
        message.backButtonText = (_p = object.backButtonText) !== null && _p !== void 0 ? _p : "";
        message.nextButtonText = (_q = object.nextButtonText) !== null && _q !== void 0 ? _q : "";
        message.privacyConfirm = (_r = object.privacyConfirm) !== null && _r !== void 0 ? _r : "";
        return message;
    },
};
function createBaseRegistrationOrgScreenText() {
    return {
        title: "",
        description: "",
        orgnameLabel: "",
        firstnameLabel: "",
        lastnameLabel: "",
        usernameLabel: "",
        emailLabel: "",
        passwordLabel: "",
        passwordConfirmLabel: "",
        tosAndPrivacyLabel: "",
        tosConfirm: "",
        tosLinkText: "",
        privacyConfirm: "",
        privacyLinkText: "",
        saveButtonText: "",
    };
}
exports.RegistrationOrgScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.orgnameLabel !== "") {
            writer.uint32(26).string(message.orgnameLabel);
        }
        if (message.firstnameLabel !== "") {
            writer.uint32(34).string(message.firstnameLabel);
        }
        if (message.lastnameLabel !== "") {
            writer.uint32(42).string(message.lastnameLabel);
        }
        if (message.usernameLabel !== "") {
            writer.uint32(50).string(message.usernameLabel);
        }
        if (message.emailLabel !== "") {
            writer.uint32(58).string(message.emailLabel);
        }
        if (message.passwordLabel !== "") {
            writer.uint32(74).string(message.passwordLabel);
        }
        if (message.passwordConfirmLabel !== "") {
            writer.uint32(82).string(message.passwordConfirmLabel);
        }
        if (message.tosAndPrivacyLabel !== "") {
            writer.uint32(90).string(message.tosAndPrivacyLabel);
        }
        if (message.tosConfirm !== "") {
            writer.uint32(98).string(message.tosConfirm);
        }
        if (message.tosLinkText !== "") {
            writer.uint32(114).string(message.tosLinkText);
        }
        if (message.privacyConfirm !== "") {
            writer.uint32(122).string(message.privacyConfirm);
        }
        if (message.privacyLinkText !== "") {
            writer.uint32(138).string(message.privacyLinkText);
        }
        if (message.saveButtonText !== "") {
            writer.uint32(154).string(message.saveButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegistrationOrgScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.orgnameLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.firstnameLabel = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.lastnameLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.usernameLabel = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.emailLabel = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.passwordLabel = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.passwordConfirmLabel = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.tosAndPrivacyLabel = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.tosConfirm = reader.string();
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.tosLinkText = reader.string();
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.privacyConfirm = reader.string();
                    continue;
                case 17:
                    if (tag !== 138) {
                        break;
                    }
                    message.privacyLinkText = reader.string();
                    continue;
                case 19:
                    if (tag !== 154) {
                        break;
                    }
                    message.saveButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            orgnameLabel: isSet(object.orgnameLabel) ? globalThis.String(object.orgnameLabel) : "",
            firstnameLabel: isSet(object.firstnameLabel) ? globalThis.String(object.firstnameLabel) : "",
            lastnameLabel: isSet(object.lastnameLabel) ? globalThis.String(object.lastnameLabel) : "",
            usernameLabel: isSet(object.usernameLabel) ? globalThis.String(object.usernameLabel) : "",
            emailLabel: isSet(object.emailLabel) ? globalThis.String(object.emailLabel) : "",
            passwordLabel: isSet(object.passwordLabel) ? globalThis.String(object.passwordLabel) : "",
            passwordConfirmLabel: isSet(object.passwordConfirmLabel) ? globalThis.String(object.passwordConfirmLabel) : "",
            tosAndPrivacyLabel: isSet(object.tosAndPrivacyLabel) ? globalThis.String(object.tosAndPrivacyLabel) : "",
            tosConfirm: isSet(object.tosConfirm) ? globalThis.String(object.tosConfirm) : "",
            tosLinkText: isSet(object.tosLinkText) ? globalThis.String(object.tosLinkText) : "",
            privacyConfirm: isSet(object.privacyConfirm) ? globalThis.String(object.privacyConfirm) : "",
            privacyLinkText: isSet(object.privacyLinkText) ? globalThis.String(object.privacyLinkText) : "",
            saveButtonText: isSet(object.saveButtonText) ? globalThis.String(object.saveButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.orgnameLabel !== "") {
            obj.orgnameLabel = message.orgnameLabel;
        }
        if (message.firstnameLabel !== "") {
            obj.firstnameLabel = message.firstnameLabel;
        }
        if (message.lastnameLabel !== "") {
            obj.lastnameLabel = message.lastnameLabel;
        }
        if (message.usernameLabel !== "") {
            obj.usernameLabel = message.usernameLabel;
        }
        if (message.emailLabel !== "") {
            obj.emailLabel = message.emailLabel;
        }
        if (message.passwordLabel !== "") {
            obj.passwordLabel = message.passwordLabel;
        }
        if (message.passwordConfirmLabel !== "") {
            obj.passwordConfirmLabel = message.passwordConfirmLabel;
        }
        if (message.tosAndPrivacyLabel !== "") {
            obj.tosAndPrivacyLabel = message.tosAndPrivacyLabel;
        }
        if (message.tosConfirm !== "") {
            obj.tosConfirm = message.tosConfirm;
        }
        if (message.tosLinkText !== "") {
            obj.tosLinkText = message.tosLinkText;
        }
        if (message.privacyConfirm !== "") {
            obj.privacyConfirm = message.privacyConfirm;
        }
        if (message.privacyLinkText !== "") {
            obj.privacyLinkText = message.privacyLinkText;
        }
        if (message.saveButtonText !== "") {
            obj.saveButtonText = message.saveButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.RegistrationOrgScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        const message = createBaseRegistrationOrgScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.orgnameLabel = (_c = object.orgnameLabel) !== null && _c !== void 0 ? _c : "";
        message.firstnameLabel = (_d = object.firstnameLabel) !== null && _d !== void 0 ? _d : "";
        message.lastnameLabel = (_e = object.lastnameLabel) !== null && _e !== void 0 ? _e : "";
        message.usernameLabel = (_f = object.usernameLabel) !== null && _f !== void 0 ? _f : "";
        message.emailLabel = (_g = object.emailLabel) !== null && _g !== void 0 ? _g : "";
        message.passwordLabel = (_h = object.passwordLabel) !== null && _h !== void 0 ? _h : "";
        message.passwordConfirmLabel = (_j = object.passwordConfirmLabel) !== null && _j !== void 0 ? _j : "";
        message.tosAndPrivacyLabel = (_k = object.tosAndPrivacyLabel) !== null && _k !== void 0 ? _k : "";
        message.tosConfirm = (_l = object.tosConfirm) !== null && _l !== void 0 ? _l : "";
        message.tosLinkText = (_m = object.tosLinkText) !== null && _m !== void 0 ? _m : "";
        message.privacyConfirm = (_o = object.privacyConfirm) !== null && _o !== void 0 ? _o : "";
        message.privacyLinkText = (_p = object.privacyLinkText) !== null && _p !== void 0 ? _p : "";
        message.saveButtonText = (_q = object.saveButtonText) !== null && _q !== void 0 ? _q : "";
        return message;
    },
};
function createBaseLinkingUserPromptScreenText() {
    return { title: "", description: "", linkButtonText: "", otherButtonText: "" };
}
exports.LinkingUserPromptScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.linkButtonText !== "") {
            writer.uint32(26).string(message.linkButtonText);
        }
        if (message.otherButtonText !== "") {
            writer.uint32(34).string(message.otherButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLinkingUserPromptScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.linkButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.otherButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            linkButtonText: isSet(object.linkButtonText) ? globalThis.String(object.linkButtonText) : "",
            otherButtonText: isSet(object.otherButtonText) ? globalThis.String(object.otherButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.linkButtonText !== "") {
            obj.linkButtonText = message.linkButtonText;
        }
        if (message.otherButtonText !== "") {
            obj.otherButtonText = message.otherButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.LinkingUserPromptScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLinkingUserPromptScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.linkButtonText = (_c = object.linkButtonText) !== null && _c !== void 0 ? _c : "";
        message.otherButtonText = (_d = object.otherButtonText) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseLinkingUserDoneScreenText() {
    return { title: "", description: "", cancelButtonText: "", nextButtonText: "" };
}
exports.LinkingUserDoneScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(26).string(message.cancelButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLinkingUserDoneScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? globalThis.String(object.cancelButtonText) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.cancelButtonText !== "") {
            obj.cancelButtonText = message.cancelButtonText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.LinkingUserDoneScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseLinkingUserDoneScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.cancelButtonText = (_c = object.cancelButtonText) !== null && _c !== void 0 ? _c : "";
        message.nextButtonText = (_d = object.nextButtonText) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseExternalUserNotFoundScreenText() {
    return {
        title: "",
        description: "",
        linkButtonText: "",
        autoRegisterButtonText: "",
        tosAndPrivacyLabel: "",
        tosConfirm: "",
        tosLinkText: "",
        privacyLinkText: "",
        privacyConfirm: "",
    };
}
exports.ExternalUserNotFoundScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.linkButtonText !== "") {
            writer.uint32(26).string(message.linkButtonText);
        }
        if (message.autoRegisterButtonText !== "") {
            writer.uint32(34).string(message.autoRegisterButtonText);
        }
        if (message.tosAndPrivacyLabel !== "") {
            writer.uint32(42).string(message.tosAndPrivacyLabel);
        }
        if (message.tosConfirm !== "") {
            writer.uint32(50).string(message.tosConfirm);
        }
        if (message.tosLinkText !== "") {
            writer.uint32(58).string(message.tosLinkText);
        }
        if (message.privacyLinkText !== "") {
            writer.uint32(66).string(message.privacyLinkText);
        }
        if (message.privacyConfirm !== "") {
            writer.uint32(82).string(message.privacyConfirm);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExternalUserNotFoundScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.linkButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.autoRegisterButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.tosAndPrivacyLabel = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.tosConfirm = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.tosLinkText = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.privacyLinkText = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.privacyConfirm = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            linkButtonText: isSet(object.linkButtonText) ? globalThis.String(object.linkButtonText) : "",
            autoRegisterButtonText: isSet(object.autoRegisterButtonText)
                ? globalThis.String(object.autoRegisterButtonText)
                : "",
            tosAndPrivacyLabel: isSet(object.tosAndPrivacyLabel) ? globalThis.String(object.tosAndPrivacyLabel) : "",
            tosConfirm: isSet(object.tosConfirm) ? globalThis.String(object.tosConfirm) : "",
            tosLinkText: isSet(object.tosLinkText) ? globalThis.String(object.tosLinkText) : "",
            privacyLinkText: isSet(object.privacyLinkText) ? globalThis.String(object.privacyLinkText) : "",
            privacyConfirm: isSet(object.privacyConfirm) ? globalThis.String(object.privacyConfirm) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.linkButtonText !== "") {
            obj.linkButtonText = message.linkButtonText;
        }
        if (message.autoRegisterButtonText !== "") {
            obj.autoRegisterButtonText = message.autoRegisterButtonText;
        }
        if (message.tosAndPrivacyLabel !== "") {
            obj.tosAndPrivacyLabel = message.tosAndPrivacyLabel;
        }
        if (message.tosConfirm !== "") {
            obj.tosConfirm = message.tosConfirm;
        }
        if (message.tosLinkText !== "") {
            obj.tosLinkText = message.tosLinkText;
        }
        if (message.privacyLinkText !== "") {
            obj.privacyLinkText = message.privacyLinkText;
        }
        if (message.privacyConfirm !== "") {
            obj.privacyConfirm = message.privacyConfirm;
        }
        return obj;
    },
    create(base) {
        return exports.ExternalUserNotFoundScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = createBaseExternalUserNotFoundScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.linkButtonText = (_c = object.linkButtonText) !== null && _c !== void 0 ? _c : "";
        message.autoRegisterButtonText = (_d = object.autoRegisterButtonText) !== null && _d !== void 0 ? _d : "";
        message.tosAndPrivacyLabel = (_e = object.tosAndPrivacyLabel) !== null && _e !== void 0 ? _e : "";
        message.tosConfirm = (_f = object.tosConfirm) !== null && _f !== void 0 ? _f : "";
        message.tosLinkText = (_g = object.tosLinkText) !== null && _g !== void 0 ? _g : "";
        message.privacyLinkText = (_h = object.privacyLinkText) !== null && _h !== void 0 ? _h : "";
        message.privacyConfirm = (_j = object.privacyConfirm) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
function createBaseSuccessLoginScreenText() {
    return { title: "", autoRedirectDescription: "", redirectedDescription: "", nextButtonText: "" };
}
exports.SuccessLoginScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.autoRedirectDescription !== "") {
            writer.uint32(18).string(message.autoRedirectDescription);
        }
        if (message.redirectedDescription !== "") {
            writer.uint32(26).string(message.redirectedDescription);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(34).string(message.nextButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSuccessLoginScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.autoRedirectDescription = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.redirectedDescription = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            autoRedirectDescription: isSet(object.autoRedirectDescription)
                ? globalThis.String(object.autoRedirectDescription)
                : "",
            redirectedDescription: isSet(object.redirectedDescription) ? globalThis.String(object.redirectedDescription) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.autoRedirectDescription !== "") {
            obj.autoRedirectDescription = message.autoRedirectDescription;
        }
        if (message.redirectedDescription !== "") {
            obj.redirectedDescription = message.redirectedDescription;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.SuccessLoginScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseSuccessLoginScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.autoRedirectDescription = (_b = object.autoRedirectDescription) !== null && _b !== void 0 ? _b : "";
        message.redirectedDescription = (_c = object.redirectedDescription) !== null && _c !== void 0 ? _c : "";
        message.nextButtonText = (_d = object.nextButtonText) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseLogoutDoneScreenText() {
    return { title: "", description: "", loginButtonText: "" };
}
exports.LogoutDoneScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.loginButtonText !== "") {
            writer.uint32(26).string(message.loginButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLogoutDoneScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.loginButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            loginButtonText: isSet(object.loginButtonText) ? globalThis.String(object.loginButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.loginButtonText !== "") {
            obj.loginButtonText = message.loginButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.LogoutDoneScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseLogoutDoneScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.loginButtonText = (_c = object.loginButtonText) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseFooterText() {
    return { tos: "", privacyPolicy: "", help: "", supportEmail: "" };
}
exports.FooterText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.tos !== "") {
            writer.uint32(10).string(message.tos);
        }
        if (message.privacyPolicy !== "") {
            writer.uint32(26).string(message.privacyPolicy);
        }
        if (message.help !== "") {
            writer.uint32(42).string(message.help);
        }
        if (message.supportEmail !== "") {
            writer.uint32(58).string(message.supportEmail);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFooterText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.tos = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.privacyPolicy = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.help = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.supportEmail = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            tos: isSet(object.tos) ? globalThis.String(object.tos) : "",
            privacyPolicy: isSet(object.privacyPolicy) ? globalThis.String(object.privacyPolicy) : "",
            help: isSet(object.help) ? globalThis.String(object.help) : "",
            supportEmail: isSet(object.supportEmail) ? globalThis.String(object.supportEmail) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tos !== "") {
            obj.tos = message.tos;
        }
        if (message.privacyPolicy !== "") {
            obj.privacyPolicy = message.privacyPolicy;
        }
        if (message.help !== "") {
            obj.help = message.help;
        }
        if (message.supportEmail !== "") {
            obj.supportEmail = message.supportEmail;
        }
        return obj;
    },
    create(base) {
        return exports.FooterText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseFooterText();
        message.tos = (_a = object.tos) !== null && _a !== void 0 ? _a : "";
        message.privacyPolicy = (_b = object.privacyPolicy) !== null && _b !== void 0 ? _b : "";
        message.help = (_c = object.help) !== null && _c !== void 0 ? _c : "";
        message.supportEmail = (_d = object.supportEmail) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBasePasswordlessPromptScreenText() {
    return {
        title: "",
        description: "",
        descriptionInit: "",
        passwordlessButtonText: "",
        nextButtonText: "",
        skipButtonText: "",
    };
}
exports.PasswordlessPromptScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.descriptionInit !== "") {
            writer.uint32(26).string(message.descriptionInit);
        }
        if (message.passwordlessButtonText !== "") {
            writer.uint32(34).string(message.passwordlessButtonText);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(42).string(message.nextButtonText);
        }
        if (message.skipButtonText !== "") {
            writer.uint32(50).string(message.skipButtonText);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordlessPromptScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.descriptionInit = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.passwordlessButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.skipButtonText = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            descriptionInit: isSet(object.descriptionInit) ? globalThis.String(object.descriptionInit) : "",
            passwordlessButtonText: isSet(object.passwordlessButtonText)
                ? globalThis.String(object.passwordlessButtonText)
                : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            skipButtonText: isSet(object.skipButtonText) ? globalThis.String(object.skipButtonText) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.descriptionInit !== "") {
            obj.descriptionInit = message.descriptionInit;
        }
        if (message.passwordlessButtonText !== "") {
            obj.passwordlessButtonText = message.passwordlessButtonText;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.skipButtonText !== "") {
            obj.skipButtonText = message.skipButtonText;
        }
        return obj;
    },
    create(base) {
        return exports.PasswordlessPromptScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBasePasswordlessPromptScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.descriptionInit = (_c = object.descriptionInit) !== null && _c !== void 0 ? _c : "";
        message.passwordlessButtonText = (_d = object.passwordlessButtonText) !== null && _d !== void 0 ? _d : "";
        message.nextButtonText = (_e = object.nextButtonText) !== null && _e !== void 0 ? _e : "";
        message.skipButtonText = (_f = object.skipButtonText) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBasePasswordlessRegistrationScreenText() {
    return {
        title: "",
        description: "",
        tokenNameLabel: "",
        notSupported: "",
        registerTokenButtonText: "",
        errorRetry: "",
    };
}
exports.PasswordlessRegistrationScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.tokenNameLabel !== "") {
            writer.uint32(26).string(message.tokenNameLabel);
        }
        if (message.notSupported !== "") {
            writer.uint32(34).string(message.notSupported);
        }
        if (message.registerTokenButtonText !== "") {
            writer.uint32(42).string(message.registerTokenButtonText);
        }
        if (message.errorRetry !== "") {
            writer.uint32(50).string(message.errorRetry);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordlessRegistrationScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tokenNameLabel = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.notSupported = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.registerTokenButtonText = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.errorRetry = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            tokenNameLabel: isSet(object.tokenNameLabel) ? globalThis.String(object.tokenNameLabel) : "",
            notSupported: isSet(object.notSupported) ? globalThis.String(object.notSupported) : "",
            registerTokenButtonText: isSet(object.registerTokenButtonText)
                ? globalThis.String(object.registerTokenButtonText)
                : "",
            errorRetry: isSet(object.errorRetry) ? globalThis.String(object.errorRetry) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.tokenNameLabel !== "") {
            obj.tokenNameLabel = message.tokenNameLabel;
        }
        if (message.notSupported !== "") {
            obj.notSupported = message.notSupported;
        }
        if (message.registerTokenButtonText !== "") {
            obj.registerTokenButtonText = message.registerTokenButtonText;
        }
        if (message.errorRetry !== "") {
            obj.errorRetry = message.errorRetry;
        }
        return obj;
    },
    create(base) {
        return exports.PasswordlessRegistrationScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBasePasswordlessRegistrationScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.tokenNameLabel = (_c = object.tokenNameLabel) !== null && _c !== void 0 ? _c : "";
        message.notSupported = (_d = object.notSupported) !== null && _d !== void 0 ? _d : "";
        message.registerTokenButtonText = (_e = object.registerTokenButtonText) !== null && _e !== void 0 ? _e : "";
        message.errorRetry = (_f = object.errorRetry) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBasePasswordlessRegistrationDoneScreenText() {
    return { title: "", description: "", nextButtonText: "", cancelButtonText: "", descriptionClose: "" };
}
exports.PasswordlessRegistrationDoneScreenText = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.nextButtonText !== "") {
            writer.uint32(26).string(message.nextButtonText);
        }
        if (message.cancelButtonText !== "") {
            writer.uint32(34).string(message.cancelButtonText);
        }
        if (message.descriptionClose !== "") {
            writer.uint32(42).string(message.descriptionClose);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePasswordlessRegistrationDoneScreenText();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.title = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.nextButtonText = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.cancelButtonText = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.descriptionClose = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            title: isSet(object.title) ? globalThis.String(object.title) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            nextButtonText: isSet(object.nextButtonText) ? globalThis.String(object.nextButtonText) : "",
            cancelButtonText: isSet(object.cancelButtonText) ? globalThis.String(object.cancelButtonText) : "",
            descriptionClose: isSet(object.descriptionClose) ? globalThis.String(object.descriptionClose) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.title !== "") {
            obj.title = message.title;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.nextButtonText !== "") {
            obj.nextButtonText = message.nextButtonText;
        }
        if (message.cancelButtonText !== "") {
            obj.cancelButtonText = message.cancelButtonText;
        }
        if (message.descriptionClose !== "") {
            obj.descriptionClose = message.descriptionClose;
        }
        return obj;
    },
    create(base) {
        return exports.PasswordlessRegistrationDoneScreenText.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBasePasswordlessRegistrationDoneScreenText();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.nextButtonText = (_c = object.nextButtonText) !== null && _c !== void 0 ? _c : "";
        message.cancelButtonText = (_d = object.cancelButtonText) !== null && _d !== void 0 ? _d : "";
        message.descriptionClose = (_e = object.descriptionClose) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=text.js.map