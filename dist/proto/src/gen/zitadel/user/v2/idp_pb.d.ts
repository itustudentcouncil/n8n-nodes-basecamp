import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { JsonObject, Message } from "@bufbuild/protobuf";
export declare const file_zitadel_user_v2_idp: GenFile;
export type LDAPCredentials = Message<"zitadel.user.v2.LDAPCredentials"> & {
    username: string;
    password: string;
};
export declare const LDAPCredentialsSchema: GenMessage<LDAPCredentials>;
export type RedirectURLs = Message<"zitadel.user.v2.RedirectURLs"> & {
    successUrl: string;
    failureUrl: string;
};
export declare const RedirectURLsSchema: GenMessage<RedirectURLs>;
export type IDPIntent = Message<"zitadel.user.v2.IDPIntent"> & {
    idpIntentId: string;
    idpIntentToken: string;
    userId: string;
};
export declare const IDPIntentSchema: GenMessage<IDPIntent>;
export type IDPInformation = Message<"zitadel.user.v2.IDPInformation"> & {
    access: {
        value: IDPOAuthAccessInformation;
        case: "oauth";
    } | {
        value: IDPLDAPAccessInformation;
        case: "ldap";
    } | {
        value: IDPSAMLAccessInformation;
        case: "saml";
    } | {
        case: undefined;
        value?: undefined;
    };
    idpId: string;
    userId: string;
    userName: string;
    rawInformation?: JsonObject;
};
export declare const IDPInformationSchema: GenMessage<IDPInformation>;
export type IDPOAuthAccessInformation = Message<"zitadel.user.v2.IDPOAuthAccessInformation"> & {
    accessToken: string;
    idToken?: string;
};
export declare const IDPOAuthAccessInformationSchema: GenMessage<IDPOAuthAccessInformation>;
export type IDPLDAPAccessInformation = Message<"zitadel.user.v2.IDPLDAPAccessInformation"> & {
    attributes?: JsonObject;
};
export declare const IDPLDAPAccessInformationSchema: GenMessage<IDPLDAPAccessInformation>;
export type IDPSAMLAccessInformation = Message<"zitadel.user.v2.IDPSAMLAccessInformation"> & {
    assertion: Uint8Array;
};
export declare const IDPSAMLAccessInformationSchema: GenMessage<IDPSAMLAccessInformation>;
export type IDPLink = Message<"zitadel.user.v2.IDPLink"> & {
    idpId: string;
    userId: string;
    userName: string;
};
export declare const IDPLinkSchema: GenMessage<IDPLink>;
