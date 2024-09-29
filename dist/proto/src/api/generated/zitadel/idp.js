"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitLabConfig = exports.GoogleConfig = exports.GitHubEnterpriseServerConfig = exports.GitHubConfig = exports.GenericOIDCConfig = exports.OAuthConfig = exports.ProviderConfig = exports.Provider = exports.IDPOwnerTypeQuery = exports.IDPNameQuery = exports.IDPIDQuery = exports.JWTConfig = exports.OIDCConfig = exports.IDPLoginPolicyLink = exports.IDPUserLink = exports.IDP = exports.azureADTenantTypeToJSON = exports.azureADTenantTypeFromJSON = exports.AzureADTenantType = exports.autoLinkingOptionToJSON = exports.autoLinkingOptionFromJSON = exports.AutoLinkingOption = exports.sAMLNameIDFormatToJSON = exports.sAMLNameIDFormatFromJSON = exports.SAMLNameIDFormat = exports.sAMLBindingToJSON = exports.sAMLBindingFromJSON = exports.SAMLBinding = exports.providerTypeToJSON = exports.providerTypeFromJSON = exports.ProviderType = exports.iDPFieldNameToJSON = exports.iDPFieldNameFromJSON = exports.IDPFieldName = exports.oIDCMappingFieldToJSON = exports.oIDCMappingFieldFromJSON = exports.OIDCMappingField = exports.iDPOwnerTypeToJSON = exports.iDPOwnerTypeFromJSON = exports.IDPOwnerType = exports.iDPTypeToJSON = exports.iDPTypeFromJSON = exports.IDPType = exports.iDPStylingTypeToJSON = exports.iDPStylingTypeFromJSON = exports.IDPStylingType = exports.iDPStateToJSON = exports.iDPStateFromJSON = exports.IDPState = exports.protobufPackage = void 0;
exports.AppleConfig = exports.AzureADTenant = exports.LDAPAttributes = exports.Options = exports.AzureADConfig = exports.SAMLConfig = exports.LDAPConfig = exports.GitLabSelfHostedConfig = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const duration_js_1 = require("../google/protobuf/duration.js");
const object_js_1 = require("./object.js");
exports.protobufPackage = "zitadel.idp.v1";
var IDPState;
(function (IDPState) {
    IDPState[IDPState["IDP_STATE_UNSPECIFIED"] = 0] = "IDP_STATE_UNSPECIFIED";
    IDPState[IDPState["IDP_STATE_ACTIVE"] = 1] = "IDP_STATE_ACTIVE";
    IDPState[IDPState["IDP_STATE_INACTIVE"] = 2] = "IDP_STATE_INACTIVE";
    IDPState[IDPState["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IDPState = exports.IDPState || (exports.IDPState = {}));
function iDPStateFromJSON(object) {
    switch (object) {
        case 0:
        case "IDP_STATE_UNSPECIFIED":
            return IDPState.IDP_STATE_UNSPECIFIED;
        case 1:
        case "IDP_STATE_ACTIVE":
            return IDPState.IDP_STATE_ACTIVE;
        case 2:
        case "IDP_STATE_INACTIVE":
            return IDPState.IDP_STATE_INACTIVE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IDPState.UNRECOGNIZED;
    }
}
exports.iDPStateFromJSON = iDPStateFromJSON;
function iDPStateToJSON(object) {
    switch (object) {
        case IDPState.IDP_STATE_UNSPECIFIED:
            return "IDP_STATE_UNSPECIFIED";
        case IDPState.IDP_STATE_ACTIVE:
            return "IDP_STATE_ACTIVE";
        case IDPState.IDP_STATE_INACTIVE:
            return "IDP_STATE_INACTIVE";
        case IDPState.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.iDPStateToJSON = iDPStateToJSON;
var IDPStylingType;
(function (IDPStylingType) {
    IDPStylingType[IDPStylingType["STYLING_TYPE_UNSPECIFIED"] = 0] = "STYLING_TYPE_UNSPECIFIED";
    IDPStylingType[IDPStylingType["STYLING_TYPE_GOOGLE"] = 1] = "STYLING_TYPE_GOOGLE";
    IDPStylingType[IDPStylingType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IDPStylingType = exports.IDPStylingType || (exports.IDPStylingType = {}));
function iDPStylingTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "STYLING_TYPE_UNSPECIFIED":
            return IDPStylingType.STYLING_TYPE_UNSPECIFIED;
        case 1:
        case "STYLING_TYPE_GOOGLE":
            return IDPStylingType.STYLING_TYPE_GOOGLE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IDPStylingType.UNRECOGNIZED;
    }
}
exports.iDPStylingTypeFromJSON = iDPStylingTypeFromJSON;
function iDPStylingTypeToJSON(object) {
    switch (object) {
        case IDPStylingType.STYLING_TYPE_UNSPECIFIED:
            return "STYLING_TYPE_UNSPECIFIED";
        case IDPStylingType.STYLING_TYPE_GOOGLE:
            return "STYLING_TYPE_GOOGLE";
        case IDPStylingType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.iDPStylingTypeToJSON = iDPStylingTypeToJSON;
var IDPType;
(function (IDPType) {
    IDPType[IDPType["IDP_TYPE_UNSPECIFIED"] = 0] = "IDP_TYPE_UNSPECIFIED";
    IDPType[IDPType["IDP_TYPE_OIDC"] = 1] = "IDP_TYPE_OIDC";
    IDPType[IDPType["IDP_TYPE_JWT"] = 3] = "IDP_TYPE_JWT";
    IDPType[IDPType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IDPType = exports.IDPType || (exports.IDPType = {}));
function iDPTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "IDP_TYPE_UNSPECIFIED":
            return IDPType.IDP_TYPE_UNSPECIFIED;
        case 1:
        case "IDP_TYPE_OIDC":
            return IDPType.IDP_TYPE_OIDC;
        case 3:
        case "IDP_TYPE_JWT":
            return IDPType.IDP_TYPE_JWT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IDPType.UNRECOGNIZED;
    }
}
exports.iDPTypeFromJSON = iDPTypeFromJSON;
function iDPTypeToJSON(object) {
    switch (object) {
        case IDPType.IDP_TYPE_UNSPECIFIED:
            return "IDP_TYPE_UNSPECIFIED";
        case IDPType.IDP_TYPE_OIDC:
            return "IDP_TYPE_OIDC";
        case IDPType.IDP_TYPE_JWT:
            return "IDP_TYPE_JWT";
        case IDPType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.iDPTypeToJSON = iDPTypeToJSON;
var IDPOwnerType;
(function (IDPOwnerType) {
    IDPOwnerType[IDPOwnerType["IDP_OWNER_TYPE_UNSPECIFIED"] = 0] = "IDP_OWNER_TYPE_UNSPECIFIED";
    IDPOwnerType[IDPOwnerType["IDP_OWNER_TYPE_SYSTEM"] = 1] = "IDP_OWNER_TYPE_SYSTEM";
    IDPOwnerType[IDPOwnerType["IDP_OWNER_TYPE_ORG"] = 2] = "IDP_OWNER_TYPE_ORG";
    IDPOwnerType[IDPOwnerType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IDPOwnerType = exports.IDPOwnerType || (exports.IDPOwnerType = {}));
function iDPOwnerTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "IDP_OWNER_TYPE_UNSPECIFIED":
            return IDPOwnerType.IDP_OWNER_TYPE_UNSPECIFIED;
        case 1:
        case "IDP_OWNER_TYPE_SYSTEM":
            return IDPOwnerType.IDP_OWNER_TYPE_SYSTEM;
        case 2:
        case "IDP_OWNER_TYPE_ORG":
            return IDPOwnerType.IDP_OWNER_TYPE_ORG;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IDPOwnerType.UNRECOGNIZED;
    }
}
exports.iDPOwnerTypeFromJSON = iDPOwnerTypeFromJSON;
function iDPOwnerTypeToJSON(object) {
    switch (object) {
        case IDPOwnerType.IDP_OWNER_TYPE_UNSPECIFIED:
            return "IDP_OWNER_TYPE_UNSPECIFIED";
        case IDPOwnerType.IDP_OWNER_TYPE_SYSTEM:
            return "IDP_OWNER_TYPE_SYSTEM";
        case IDPOwnerType.IDP_OWNER_TYPE_ORG:
            return "IDP_OWNER_TYPE_ORG";
        case IDPOwnerType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.iDPOwnerTypeToJSON = iDPOwnerTypeToJSON;
var OIDCMappingField;
(function (OIDCMappingField) {
    OIDCMappingField[OIDCMappingField["OIDC_MAPPING_FIELD_UNSPECIFIED"] = 0] = "OIDC_MAPPING_FIELD_UNSPECIFIED";
    OIDCMappingField[OIDCMappingField["OIDC_MAPPING_FIELD_PREFERRED_USERNAME"] = 1] = "OIDC_MAPPING_FIELD_PREFERRED_USERNAME";
    OIDCMappingField[OIDCMappingField["OIDC_MAPPING_FIELD_EMAIL"] = 2] = "OIDC_MAPPING_FIELD_EMAIL";
    OIDCMappingField[OIDCMappingField["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OIDCMappingField = exports.OIDCMappingField || (exports.OIDCMappingField = {}));
function oIDCMappingFieldFromJSON(object) {
    switch (object) {
        case 0:
        case "OIDC_MAPPING_FIELD_UNSPECIFIED":
            return OIDCMappingField.OIDC_MAPPING_FIELD_UNSPECIFIED;
        case 1:
        case "OIDC_MAPPING_FIELD_PREFERRED_USERNAME":
            return OIDCMappingField.OIDC_MAPPING_FIELD_PREFERRED_USERNAME;
        case 2:
        case "OIDC_MAPPING_FIELD_EMAIL":
            return OIDCMappingField.OIDC_MAPPING_FIELD_EMAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OIDCMappingField.UNRECOGNIZED;
    }
}
exports.oIDCMappingFieldFromJSON = oIDCMappingFieldFromJSON;
function oIDCMappingFieldToJSON(object) {
    switch (object) {
        case OIDCMappingField.OIDC_MAPPING_FIELD_UNSPECIFIED:
            return "OIDC_MAPPING_FIELD_UNSPECIFIED";
        case OIDCMappingField.OIDC_MAPPING_FIELD_PREFERRED_USERNAME:
            return "OIDC_MAPPING_FIELD_PREFERRED_USERNAME";
        case OIDCMappingField.OIDC_MAPPING_FIELD_EMAIL:
            return "OIDC_MAPPING_FIELD_EMAIL";
        case OIDCMappingField.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.oIDCMappingFieldToJSON = oIDCMappingFieldToJSON;
var IDPFieldName;
(function (IDPFieldName) {
    IDPFieldName[IDPFieldName["IDP_FIELD_NAME_UNSPECIFIED"] = 0] = "IDP_FIELD_NAME_UNSPECIFIED";
    IDPFieldName[IDPFieldName["IDP_FIELD_NAME_NAME"] = 1] = "IDP_FIELD_NAME_NAME";
    IDPFieldName[IDPFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(IDPFieldName = exports.IDPFieldName || (exports.IDPFieldName = {}));
function iDPFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "IDP_FIELD_NAME_UNSPECIFIED":
            return IDPFieldName.IDP_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "IDP_FIELD_NAME_NAME":
            return IDPFieldName.IDP_FIELD_NAME_NAME;
        case -1:
        case "UNRECOGNIZED":
        default:
            return IDPFieldName.UNRECOGNIZED;
    }
}
exports.iDPFieldNameFromJSON = iDPFieldNameFromJSON;
function iDPFieldNameToJSON(object) {
    switch (object) {
        case IDPFieldName.IDP_FIELD_NAME_UNSPECIFIED:
            return "IDP_FIELD_NAME_UNSPECIFIED";
        case IDPFieldName.IDP_FIELD_NAME_NAME:
            return "IDP_FIELD_NAME_NAME";
        case IDPFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.iDPFieldNameToJSON = iDPFieldNameToJSON;
var ProviderType;
(function (ProviderType) {
    ProviderType[ProviderType["PROVIDER_TYPE_UNSPECIFIED"] = 0] = "PROVIDER_TYPE_UNSPECIFIED";
    ProviderType[ProviderType["PROVIDER_TYPE_OIDC"] = 1] = "PROVIDER_TYPE_OIDC";
    ProviderType[ProviderType["PROVIDER_TYPE_JWT"] = 2] = "PROVIDER_TYPE_JWT";
    ProviderType[ProviderType["PROVIDER_TYPE_LDAP"] = 3] = "PROVIDER_TYPE_LDAP";
    ProviderType[ProviderType["PROVIDER_TYPE_OAUTH"] = 4] = "PROVIDER_TYPE_OAUTH";
    ProviderType[ProviderType["PROVIDER_TYPE_AZURE_AD"] = 5] = "PROVIDER_TYPE_AZURE_AD";
    ProviderType[ProviderType["PROVIDER_TYPE_GITHUB"] = 6] = "PROVIDER_TYPE_GITHUB";
    ProviderType[ProviderType["PROVIDER_TYPE_GITHUB_ES"] = 7] = "PROVIDER_TYPE_GITHUB_ES";
    ProviderType[ProviderType["PROVIDER_TYPE_GITLAB"] = 8] = "PROVIDER_TYPE_GITLAB";
    ProviderType[ProviderType["PROVIDER_TYPE_GITLAB_SELF_HOSTED"] = 9] = "PROVIDER_TYPE_GITLAB_SELF_HOSTED";
    ProviderType[ProviderType["PROVIDER_TYPE_GOOGLE"] = 10] = "PROVIDER_TYPE_GOOGLE";
    ProviderType[ProviderType["PROVIDER_TYPE_APPLE"] = 11] = "PROVIDER_TYPE_APPLE";
    ProviderType[ProviderType["PROVIDER_TYPE_SAML"] = 12] = "PROVIDER_TYPE_SAML";
    ProviderType[ProviderType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProviderType = exports.ProviderType || (exports.ProviderType = {}));
function providerTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "PROVIDER_TYPE_UNSPECIFIED":
            return ProviderType.PROVIDER_TYPE_UNSPECIFIED;
        case 1:
        case "PROVIDER_TYPE_OIDC":
            return ProviderType.PROVIDER_TYPE_OIDC;
        case 2:
        case "PROVIDER_TYPE_JWT":
            return ProviderType.PROVIDER_TYPE_JWT;
        case 3:
        case "PROVIDER_TYPE_LDAP":
            return ProviderType.PROVIDER_TYPE_LDAP;
        case 4:
        case "PROVIDER_TYPE_OAUTH":
            return ProviderType.PROVIDER_TYPE_OAUTH;
        case 5:
        case "PROVIDER_TYPE_AZURE_AD":
            return ProviderType.PROVIDER_TYPE_AZURE_AD;
        case 6:
        case "PROVIDER_TYPE_GITHUB":
            return ProviderType.PROVIDER_TYPE_GITHUB;
        case 7:
        case "PROVIDER_TYPE_GITHUB_ES":
            return ProviderType.PROVIDER_TYPE_GITHUB_ES;
        case 8:
        case "PROVIDER_TYPE_GITLAB":
            return ProviderType.PROVIDER_TYPE_GITLAB;
        case 9:
        case "PROVIDER_TYPE_GITLAB_SELF_HOSTED":
            return ProviderType.PROVIDER_TYPE_GITLAB_SELF_HOSTED;
        case 10:
        case "PROVIDER_TYPE_GOOGLE":
            return ProviderType.PROVIDER_TYPE_GOOGLE;
        case 11:
        case "PROVIDER_TYPE_APPLE":
            return ProviderType.PROVIDER_TYPE_APPLE;
        case 12:
        case "PROVIDER_TYPE_SAML":
            return ProviderType.PROVIDER_TYPE_SAML;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProviderType.UNRECOGNIZED;
    }
}
exports.providerTypeFromJSON = providerTypeFromJSON;
function providerTypeToJSON(object) {
    switch (object) {
        case ProviderType.PROVIDER_TYPE_UNSPECIFIED:
            return "PROVIDER_TYPE_UNSPECIFIED";
        case ProviderType.PROVIDER_TYPE_OIDC:
            return "PROVIDER_TYPE_OIDC";
        case ProviderType.PROVIDER_TYPE_JWT:
            return "PROVIDER_TYPE_JWT";
        case ProviderType.PROVIDER_TYPE_LDAP:
            return "PROVIDER_TYPE_LDAP";
        case ProviderType.PROVIDER_TYPE_OAUTH:
            return "PROVIDER_TYPE_OAUTH";
        case ProviderType.PROVIDER_TYPE_AZURE_AD:
            return "PROVIDER_TYPE_AZURE_AD";
        case ProviderType.PROVIDER_TYPE_GITHUB:
            return "PROVIDER_TYPE_GITHUB";
        case ProviderType.PROVIDER_TYPE_GITHUB_ES:
            return "PROVIDER_TYPE_GITHUB_ES";
        case ProviderType.PROVIDER_TYPE_GITLAB:
            return "PROVIDER_TYPE_GITLAB";
        case ProviderType.PROVIDER_TYPE_GITLAB_SELF_HOSTED:
            return "PROVIDER_TYPE_GITLAB_SELF_HOSTED";
        case ProviderType.PROVIDER_TYPE_GOOGLE:
            return "PROVIDER_TYPE_GOOGLE";
        case ProviderType.PROVIDER_TYPE_APPLE:
            return "PROVIDER_TYPE_APPLE";
        case ProviderType.PROVIDER_TYPE_SAML:
            return "PROVIDER_TYPE_SAML";
        case ProviderType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.providerTypeToJSON = providerTypeToJSON;
var SAMLBinding;
(function (SAMLBinding) {
    SAMLBinding[SAMLBinding["SAML_BINDING_UNSPECIFIED"] = 0] = "SAML_BINDING_UNSPECIFIED";
    SAMLBinding[SAMLBinding["SAML_BINDING_POST"] = 1] = "SAML_BINDING_POST";
    SAMLBinding[SAMLBinding["SAML_BINDING_REDIRECT"] = 2] = "SAML_BINDING_REDIRECT";
    SAMLBinding[SAMLBinding["SAML_BINDING_ARTIFACT"] = 3] = "SAML_BINDING_ARTIFACT";
    SAMLBinding[SAMLBinding["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SAMLBinding = exports.SAMLBinding || (exports.SAMLBinding = {}));
function sAMLBindingFromJSON(object) {
    switch (object) {
        case 0:
        case "SAML_BINDING_UNSPECIFIED":
            return SAMLBinding.SAML_BINDING_UNSPECIFIED;
        case 1:
        case "SAML_BINDING_POST":
            return SAMLBinding.SAML_BINDING_POST;
        case 2:
        case "SAML_BINDING_REDIRECT":
            return SAMLBinding.SAML_BINDING_REDIRECT;
        case 3:
        case "SAML_BINDING_ARTIFACT":
            return SAMLBinding.SAML_BINDING_ARTIFACT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SAMLBinding.UNRECOGNIZED;
    }
}
exports.sAMLBindingFromJSON = sAMLBindingFromJSON;
function sAMLBindingToJSON(object) {
    switch (object) {
        case SAMLBinding.SAML_BINDING_UNSPECIFIED:
            return "SAML_BINDING_UNSPECIFIED";
        case SAMLBinding.SAML_BINDING_POST:
            return "SAML_BINDING_POST";
        case SAMLBinding.SAML_BINDING_REDIRECT:
            return "SAML_BINDING_REDIRECT";
        case SAMLBinding.SAML_BINDING_ARTIFACT:
            return "SAML_BINDING_ARTIFACT";
        case SAMLBinding.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sAMLBindingToJSON = sAMLBindingToJSON;
var SAMLNameIDFormat;
(function (SAMLNameIDFormat) {
    SAMLNameIDFormat[SAMLNameIDFormat["SAML_NAME_ID_FORMAT_UNSPECIFIED"] = 0] = "SAML_NAME_ID_FORMAT_UNSPECIFIED";
    SAMLNameIDFormat[SAMLNameIDFormat["SAML_NAME_ID_FORMAT_EMAIL_ADDRESS"] = 1] = "SAML_NAME_ID_FORMAT_EMAIL_ADDRESS";
    SAMLNameIDFormat[SAMLNameIDFormat["SAML_NAME_ID_FORMAT_PERSISTENT"] = 2] = "SAML_NAME_ID_FORMAT_PERSISTENT";
    SAMLNameIDFormat[SAMLNameIDFormat["SAML_NAME_ID_FORMAT_TRANSIENT"] = 3] = "SAML_NAME_ID_FORMAT_TRANSIENT";
    SAMLNameIDFormat[SAMLNameIDFormat["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SAMLNameIDFormat = exports.SAMLNameIDFormat || (exports.SAMLNameIDFormat = {}));
function sAMLNameIDFormatFromJSON(object) {
    switch (object) {
        case 0:
        case "SAML_NAME_ID_FORMAT_UNSPECIFIED":
            return SAMLNameIDFormat.SAML_NAME_ID_FORMAT_UNSPECIFIED;
        case 1:
        case "SAML_NAME_ID_FORMAT_EMAIL_ADDRESS":
            return SAMLNameIDFormat.SAML_NAME_ID_FORMAT_EMAIL_ADDRESS;
        case 2:
        case "SAML_NAME_ID_FORMAT_PERSISTENT":
            return SAMLNameIDFormat.SAML_NAME_ID_FORMAT_PERSISTENT;
        case 3:
        case "SAML_NAME_ID_FORMAT_TRANSIENT":
            return SAMLNameIDFormat.SAML_NAME_ID_FORMAT_TRANSIENT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SAMLNameIDFormat.UNRECOGNIZED;
    }
}
exports.sAMLNameIDFormatFromJSON = sAMLNameIDFormatFromJSON;
function sAMLNameIDFormatToJSON(object) {
    switch (object) {
        case SAMLNameIDFormat.SAML_NAME_ID_FORMAT_UNSPECIFIED:
            return "SAML_NAME_ID_FORMAT_UNSPECIFIED";
        case SAMLNameIDFormat.SAML_NAME_ID_FORMAT_EMAIL_ADDRESS:
            return "SAML_NAME_ID_FORMAT_EMAIL_ADDRESS";
        case SAMLNameIDFormat.SAML_NAME_ID_FORMAT_PERSISTENT:
            return "SAML_NAME_ID_FORMAT_PERSISTENT";
        case SAMLNameIDFormat.SAML_NAME_ID_FORMAT_TRANSIENT:
            return "SAML_NAME_ID_FORMAT_TRANSIENT";
        case SAMLNameIDFormat.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.sAMLNameIDFormatToJSON = sAMLNameIDFormatToJSON;
var AutoLinkingOption;
(function (AutoLinkingOption) {
    AutoLinkingOption[AutoLinkingOption["AUTO_LINKING_OPTION_UNSPECIFIED"] = 0] = "AUTO_LINKING_OPTION_UNSPECIFIED";
    AutoLinkingOption[AutoLinkingOption["AUTO_LINKING_OPTION_USERNAME"] = 1] = "AUTO_LINKING_OPTION_USERNAME";
    AutoLinkingOption[AutoLinkingOption["AUTO_LINKING_OPTION_EMAIL"] = 2] = "AUTO_LINKING_OPTION_EMAIL";
    AutoLinkingOption[AutoLinkingOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AutoLinkingOption = exports.AutoLinkingOption || (exports.AutoLinkingOption = {}));
function autoLinkingOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "AUTO_LINKING_OPTION_UNSPECIFIED":
            return AutoLinkingOption.AUTO_LINKING_OPTION_UNSPECIFIED;
        case 1:
        case "AUTO_LINKING_OPTION_USERNAME":
            return AutoLinkingOption.AUTO_LINKING_OPTION_USERNAME;
        case 2:
        case "AUTO_LINKING_OPTION_EMAIL":
            return AutoLinkingOption.AUTO_LINKING_OPTION_EMAIL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AutoLinkingOption.UNRECOGNIZED;
    }
}
exports.autoLinkingOptionFromJSON = autoLinkingOptionFromJSON;
function autoLinkingOptionToJSON(object) {
    switch (object) {
        case AutoLinkingOption.AUTO_LINKING_OPTION_UNSPECIFIED:
            return "AUTO_LINKING_OPTION_UNSPECIFIED";
        case AutoLinkingOption.AUTO_LINKING_OPTION_USERNAME:
            return "AUTO_LINKING_OPTION_USERNAME";
        case AutoLinkingOption.AUTO_LINKING_OPTION_EMAIL:
            return "AUTO_LINKING_OPTION_EMAIL";
        case AutoLinkingOption.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.autoLinkingOptionToJSON = autoLinkingOptionToJSON;
var AzureADTenantType;
(function (AzureADTenantType) {
    AzureADTenantType[AzureADTenantType["AZURE_AD_TENANT_TYPE_COMMON"] = 0] = "AZURE_AD_TENANT_TYPE_COMMON";
    AzureADTenantType[AzureADTenantType["AZURE_AD_TENANT_TYPE_ORGANISATIONS"] = 1] = "AZURE_AD_TENANT_TYPE_ORGANISATIONS";
    AzureADTenantType[AzureADTenantType["AZURE_AD_TENANT_TYPE_CONSUMERS"] = 2] = "AZURE_AD_TENANT_TYPE_CONSUMERS";
    AzureADTenantType[AzureADTenantType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AzureADTenantType = exports.AzureADTenantType || (exports.AzureADTenantType = {}));
function azureADTenantTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "AZURE_AD_TENANT_TYPE_COMMON":
            return AzureADTenantType.AZURE_AD_TENANT_TYPE_COMMON;
        case 1:
        case "AZURE_AD_TENANT_TYPE_ORGANISATIONS":
            return AzureADTenantType.AZURE_AD_TENANT_TYPE_ORGANISATIONS;
        case 2:
        case "AZURE_AD_TENANT_TYPE_CONSUMERS":
            return AzureADTenantType.AZURE_AD_TENANT_TYPE_CONSUMERS;
        case -1:
        case "UNRECOGNIZED":
        default:
            return AzureADTenantType.UNRECOGNIZED;
    }
}
exports.azureADTenantTypeFromJSON = azureADTenantTypeFromJSON;
function azureADTenantTypeToJSON(object) {
    switch (object) {
        case AzureADTenantType.AZURE_AD_TENANT_TYPE_COMMON:
            return "AZURE_AD_TENANT_TYPE_COMMON";
        case AzureADTenantType.AZURE_AD_TENANT_TYPE_ORGANISATIONS:
            return "AZURE_AD_TENANT_TYPE_ORGANISATIONS";
        case AzureADTenantType.AZURE_AD_TENANT_TYPE_CONSUMERS:
            return "AZURE_AD_TENANT_TYPE_CONSUMERS";
        case AzureADTenantType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.azureADTenantTypeToJSON = azureADTenantTypeToJSON;
function createBaseIDP() {
    return {
        id: "",
        details: undefined,
        state: 0,
        name: "",
        stylingType: 0,
        owner: 0,
        oidcConfig: undefined,
        jwtConfig: undefined,
        autoRegister: false,
    };
}
exports.IDP = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.stylingType !== 0) {
            writer.uint32(40).int32(message.stylingType);
        }
        if (message.owner !== 0) {
            writer.uint32(48).int32(message.owner);
        }
        if (message.oidcConfig !== undefined) {
            exports.OIDCConfig.encode(message.oidcConfig, writer.uint32(58).fork()).join();
        }
        if (message.jwtConfig !== undefined) {
            exports.JWTConfig.encode(message.jwtConfig, writer.uint32(74).fork()).join();
        }
        if (message.autoRegister !== false) {
            writer.uint32(64).bool(message.autoRegister);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDP();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.stylingType = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.owner = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.oidcConfig = exports.OIDCConfig.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.jwtConfig = exports.JWTConfig.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 64) {
                        break;
                    }
                    message.autoRegister = reader.bool();
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
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? iDPStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            stylingType: isSet(object.stylingType) ? iDPStylingTypeFromJSON(object.stylingType) : 0,
            owner: isSet(object.owner) ? iDPOwnerTypeFromJSON(object.owner) : 0,
            oidcConfig: isSet(object.oidcConfig) ? exports.OIDCConfig.fromJSON(object.oidcConfig) : undefined,
            jwtConfig: isSet(object.jwtConfig) ? exports.JWTConfig.fromJSON(object.jwtConfig) : undefined,
            autoRegister: isSet(object.autoRegister) ? globalThis.Boolean(object.autoRegister) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.state !== 0) {
            obj.state = iDPStateToJSON(message.state);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.stylingType !== 0) {
            obj.stylingType = iDPStylingTypeToJSON(message.stylingType);
        }
        if (message.owner !== 0) {
            obj.owner = iDPOwnerTypeToJSON(message.owner);
        }
        if (message.oidcConfig !== undefined) {
            obj.oidcConfig = exports.OIDCConfig.toJSON(message.oidcConfig);
        }
        if (message.jwtConfig !== undefined) {
            obj.jwtConfig = exports.JWTConfig.toJSON(message.jwtConfig);
        }
        if (message.autoRegister !== false) {
            obj.autoRegister = message.autoRegister;
        }
        return obj;
    },
    create(base) {
        return exports.IDP.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseIDP();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.stylingType = (_d = object.stylingType) !== null && _d !== void 0 ? _d : 0;
        message.owner = (_e = object.owner) !== null && _e !== void 0 ? _e : 0;
        message.oidcConfig = (object.oidcConfig !== undefined && object.oidcConfig !== null)
            ? exports.OIDCConfig.fromPartial(object.oidcConfig)
            : undefined;
        message.jwtConfig = (object.jwtConfig !== undefined && object.jwtConfig !== null)
            ? exports.JWTConfig.fromPartial(object.jwtConfig)
            : undefined;
        message.autoRegister = (_f = object.autoRegister) !== null && _f !== void 0 ? _f : false;
        return message;
    },
};
function createBaseIDPUserLink() {
    return { userId: "", idpId: "", idpName: "", providedUserId: "", providedUserName: "", idpType: 0 };
}
exports.IDPUserLink = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.idpId !== "") {
            writer.uint32(18).string(message.idpId);
        }
        if (message.idpName !== "") {
            writer.uint32(26).string(message.idpName);
        }
        if (message.providedUserId !== "") {
            writer.uint32(34).string(message.providedUserId);
        }
        if (message.providedUserName !== "") {
            writer.uint32(42).string(message.providedUserName);
        }
        if (message.idpType !== 0) {
            writer.uint32(48).int32(message.idpType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPUserLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.idpName = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.providedUserId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.providedUserName = reader.string();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.idpType = reader.int32();
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
            idpId: isSet(object.idpId) ? globalThis.String(object.idpId) : "",
            idpName: isSet(object.idpName) ? globalThis.String(object.idpName) : "",
            providedUserId: isSet(object.providedUserId) ? globalThis.String(object.providedUserId) : "",
            providedUserName: isSet(object.providedUserName) ? globalThis.String(object.providedUserName) : "",
            idpType: isSet(object.idpType) ? iDPTypeFromJSON(object.idpType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.idpId !== "") {
            obj.idpId = message.idpId;
        }
        if (message.idpName !== "") {
            obj.idpName = message.idpName;
        }
        if (message.providedUserId !== "") {
            obj.providedUserId = message.providedUserId;
        }
        if (message.providedUserName !== "") {
            obj.providedUserName = message.providedUserName;
        }
        if (message.idpType !== 0) {
            obj.idpType = iDPTypeToJSON(message.idpType);
        }
        return obj;
    },
    create(base) {
        return exports.IDPUserLink.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseIDPUserLink();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.idpId = (_b = object.idpId) !== null && _b !== void 0 ? _b : "";
        message.idpName = (_c = object.idpName) !== null && _c !== void 0 ? _c : "";
        message.providedUserId = (_d = object.providedUserId) !== null && _d !== void 0 ? _d : "";
        message.providedUserName = (_e = object.providedUserName) !== null && _e !== void 0 ? _e : "";
        message.idpType = (_f = object.idpType) !== null && _f !== void 0 ? _f : 0;
        return message;
    },
};
function createBaseIDPLoginPolicyLink() {
    return { idpId: "", idpName: "", idpType: 0 };
}
exports.IDPLoginPolicyLink = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.idpId !== "") {
            writer.uint32(10).string(message.idpId);
        }
        if (message.idpName !== "") {
            writer.uint32(18).string(message.idpName);
        }
        if (message.idpType !== 0) {
            writer.uint32(24).int32(message.idpType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPLoginPolicyLink();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idpId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.idpName = reader.string();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.idpType = reader.int32();
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
            idpId: isSet(object.idpId) ? globalThis.String(object.idpId) : "",
            idpName: isSet(object.idpName) ? globalThis.String(object.idpName) : "",
            idpType: isSet(object.idpType) ? iDPTypeFromJSON(object.idpType) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.idpId !== "") {
            obj.idpId = message.idpId;
        }
        if (message.idpName !== "") {
            obj.idpName = message.idpName;
        }
        if (message.idpType !== 0) {
            obj.idpType = iDPTypeToJSON(message.idpType);
        }
        return obj;
    },
    create(base) {
        return exports.IDPLoginPolicyLink.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseIDPLoginPolicyLink();
        message.idpId = (_a = object.idpId) !== null && _a !== void 0 ? _a : "";
        message.idpName = (_b = object.idpName) !== null && _b !== void 0 ? _b : "";
        message.idpType = (_c = object.idpType) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseOIDCConfig() {
    return { clientId: "", issuer: "", scopes: [], displayNameMapping: 0, usernameMapping: 0 };
}
exports.OIDCConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        for (const v of message.scopes) {
            writer.uint32(26).string(v);
        }
        if (message.displayNameMapping !== 0) {
            writer.uint32(32).int32(message.displayNameMapping);
        }
        if (message.usernameMapping !== 0) {
            writer.uint32(40).int32(message.usernameMapping);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOIDCConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.scopes.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.displayNameMapping = reader.int32();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.usernameMapping = reader.int32();
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
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            issuer: isSet(object.issuer) ? globalThis.String(object.issuer) : "",
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
            displayNameMapping: isSet(object.displayNameMapping) ? oIDCMappingFieldFromJSON(object.displayNameMapping) : 0,
            usernameMapping: isSet(object.usernameMapping) ? oIDCMappingFieldFromJSON(object.usernameMapping) : 0,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.issuer !== "") {
            obj.issuer = message.issuer;
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        if (message.displayNameMapping !== 0) {
            obj.displayNameMapping = oIDCMappingFieldToJSON(message.displayNameMapping);
        }
        if (message.usernameMapping !== 0) {
            obj.usernameMapping = oIDCMappingFieldToJSON(message.usernameMapping);
        }
        return obj;
    },
    create(base) {
        return exports.OIDCConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseOIDCConfig();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.issuer = (_b = object.issuer) !== null && _b !== void 0 ? _b : "";
        message.scopes = ((_c = object.scopes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.displayNameMapping = (_d = object.displayNameMapping) !== null && _d !== void 0 ? _d : 0;
        message.usernameMapping = (_e = object.usernameMapping) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseJWTConfig() {
    return { jwtEndpoint: "", issuer: "", keysEndpoint: "", headerName: "" };
}
exports.JWTConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.jwtEndpoint !== "") {
            writer.uint32(10).string(message.jwtEndpoint);
        }
        if (message.issuer !== "") {
            writer.uint32(18).string(message.issuer);
        }
        if (message.keysEndpoint !== "") {
            writer.uint32(26).string(message.keysEndpoint);
        }
        if (message.headerName !== "") {
            writer.uint32(34).string(message.headerName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseJWTConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.jwtEndpoint = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.keysEndpoint = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.headerName = reader.string();
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
            jwtEndpoint: isSet(object.jwtEndpoint) ? globalThis.String(object.jwtEndpoint) : "",
            issuer: isSet(object.issuer) ? globalThis.String(object.issuer) : "",
            keysEndpoint: isSet(object.keysEndpoint) ? globalThis.String(object.keysEndpoint) : "",
            headerName: isSet(object.headerName) ? globalThis.String(object.headerName) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.jwtEndpoint !== "") {
            obj.jwtEndpoint = message.jwtEndpoint;
        }
        if (message.issuer !== "") {
            obj.issuer = message.issuer;
        }
        if (message.keysEndpoint !== "") {
            obj.keysEndpoint = message.keysEndpoint;
        }
        if (message.headerName !== "") {
            obj.headerName = message.headerName;
        }
        return obj;
    },
    create(base) {
        return exports.JWTConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseJWTConfig();
        message.jwtEndpoint = (_a = object.jwtEndpoint) !== null && _a !== void 0 ? _a : "";
        message.issuer = (_b = object.issuer) !== null && _b !== void 0 ? _b : "";
        message.keysEndpoint = (_c = object.keysEndpoint) !== null && _c !== void 0 ? _c : "";
        message.headerName = (_d = object.headerName) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseIDPIDQuery() {
    return { id: "" };
}
exports.IDPIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
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
        return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        return obj;
    },
    create(base) {
        return exports.IDPIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIDPIDQuery();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseIDPNameQuery() {
    return { name: "", method: 0 };
}
exports.IDPNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.method = reader.int32();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.IDPNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseIDPNameQuery();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseIDPOwnerTypeQuery() {
    return { ownerType: 0 };
}
exports.IDPOwnerTypeQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.ownerType !== 0) {
            writer.uint32(8).int32(message.ownerType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseIDPOwnerTypeQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.ownerType = reader.int32();
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
        return { ownerType: isSet(object.ownerType) ? iDPOwnerTypeFromJSON(object.ownerType) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.ownerType !== 0) {
            obj.ownerType = iDPOwnerTypeToJSON(message.ownerType);
        }
        return obj;
    },
    create(base) {
        return exports.IDPOwnerTypeQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseIDPOwnerTypeQuery();
        message.ownerType = (_a = object.ownerType) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseProvider() {
    return { id: "", details: undefined, state: 0, name: "", owner: 0, type: 0, config: undefined };
}
exports.Provider = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.details !== undefined) {
            object_js_1.ObjectDetails.encode(message.details, writer.uint32(18).fork()).join();
        }
        if (message.state !== 0) {
            writer.uint32(24).int32(message.state);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.owner !== 0) {
            writer.uint32(40).int32(message.owner);
        }
        if (message.type !== 0) {
            writer.uint32(48).int32(message.type);
        }
        if (message.config !== undefined) {
            exports.ProviderConfig.encode(message.config, writer.uint32(58).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProvider();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.details = object_js_1.ObjectDetails.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.state = reader.int32();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.owner = reader.int32();
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.config = exports.ProviderConfig.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            details: isSet(object.details) ? object_js_1.ObjectDetails.fromJSON(object.details) : undefined,
            state: isSet(object.state) ? iDPStateFromJSON(object.state) : 0,
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            owner: isSet(object.owner) ? iDPOwnerTypeFromJSON(object.owner) : 0,
            type: isSet(object.type) ? providerTypeFromJSON(object.type) : 0,
            config: isSet(object.config) ? exports.ProviderConfig.fromJSON(object.config) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.details !== undefined) {
            obj.details = object_js_1.ObjectDetails.toJSON(message.details);
        }
        if (message.state !== 0) {
            obj.state = iDPStateToJSON(message.state);
        }
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.owner !== 0) {
            obj.owner = iDPOwnerTypeToJSON(message.owner);
        }
        if (message.type !== 0) {
            obj.type = providerTypeToJSON(message.type);
        }
        if (message.config !== undefined) {
            obj.config = exports.ProviderConfig.toJSON(message.config);
        }
        return obj;
    },
    create(base) {
        return exports.Provider.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseProvider();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.ObjectDetails.fromPartial(object.details)
            : undefined;
        message.state = (_b = object.state) !== null && _b !== void 0 ? _b : 0;
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.owner = (_d = object.owner) !== null && _d !== void 0 ? _d : 0;
        message.type = (_e = object.type) !== null && _e !== void 0 ? _e : 0;
        message.config = (object.config !== undefined && object.config !== null)
            ? exports.ProviderConfig.fromPartial(object.config)
            : undefined;
        return message;
    },
};
function createBaseProviderConfig() {
    return {
        options: undefined,
        ldap: undefined,
        google: undefined,
        oauth: undefined,
        oidc: undefined,
        jwt: undefined,
        github: undefined,
        githubEs: undefined,
        gitlab: undefined,
        gitlabSelfHosted: undefined,
        azureAd: undefined,
        apple: undefined,
        saml: undefined,
    };
}
exports.ProviderConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.options !== undefined) {
            exports.Options.encode(message.options, writer.uint32(10).fork()).join();
        }
        if (message.ldap !== undefined) {
            exports.LDAPConfig.encode(message.ldap, writer.uint32(18).fork()).join();
        }
        if (message.google !== undefined) {
            exports.GoogleConfig.encode(message.google, writer.uint32(26).fork()).join();
        }
        if (message.oauth !== undefined) {
            exports.OAuthConfig.encode(message.oauth, writer.uint32(34).fork()).join();
        }
        if (message.oidc !== undefined) {
            exports.GenericOIDCConfig.encode(message.oidc, writer.uint32(42).fork()).join();
        }
        if (message.jwt !== undefined) {
            exports.JWTConfig.encode(message.jwt, writer.uint32(50).fork()).join();
        }
        if (message.github !== undefined) {
            exports.GitHubConfig.encode(message.github, writer.uint32(58).fork()).join();
        }
        if (message.githubEs !== undefined) {
            exports.GitHubEnterpriseServerConfig.encode(message.githubEs, writer.uint32(66).fork()).join();
        }
        if (message.gitlab !== undefined) {
            exports.GitLabConfig.encode(message.gitlab, writer.uint32(74).fork()).join();
        }
        if (message.gitlabSelfHosted !== undefined) {
            exports.GitLabSelfHostedConfig.encode(message.gitlabSelfHosted, writer.uint32(82).fork()).join();
        }
        if (message.azureAd !== undefined) {
            exports.AzureADConfig.encode(message.azureAd, writer.uint32(90).fork()).join();
        }
        if (message.apple !== undefined) {
            exports.AppleConfig.encode(message.apple, writer.uint32(98).fork()).join();
        }
        if (message.saml !== undefined) {
            exports.SAMLConfig.encode(message.saml, writer.uint32(106).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseProviderConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.options = exports.Options.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.ldap = exports.LDAPConfig.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.google = exports.GoogleConfig.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.oauth = exports.OAuthConfig.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.oidc = exports.GenericOIDCConfig.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.jwt = exports.JWTConfig.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.github = exports.GitHubConfig.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.githubEs = exports.GitHubEnterpriseServerConfig.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.gitlab = exports.GitLabConfig.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.gitlabSelfHosted = exports.GitLabSelfHostedConfig.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.azureAd = exports.AzureADConfig.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.apple = exports.AppleConfig.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.saml = exports.SAMLConfig.decode(reader, reader.uint32());
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
            options: isSet(object.options) ? exports.Options.fromJSON(object.options) : undefined,
            ldap: isSet(object.ldap) ? exports.LDAPConfig.fromJSON(object.ldap) : undefined,
            google: isSet(object.google) ? exports.GoogleConfig.fromJSON(object.google) : undefined,
            oauth: isSet(object.oauth) ? exports.OAuthConfig.fromJSON(object.oauth) : undefined,
            oidc: isSet(object.oidc) ? exports.GenericOIDCConfig.fromJSON(object.oidc) : undefined,
            jwt: isSet(object.jwt) ? exports.JWTConfig.fromJSON(object.jwt) : undefined,
            github: isSet(object.github) ? exports.GitHubConfig.fromJSON(object.github) : undefined,
            githubEs: isSet(object.githubEs) ? exports.GitHubEnterpriseServerConfig.fromJSON(object.githubEs) : undefined,
            gitlab: isSet(object.gitlab) ? exports.GitLabConfig.fromJSON(object.gitlab) : undefined,
            gitlabSelfHosted: isSet(object.gitlabSelfHosted)
                ? exports.GitLabSelfHostedConfig.fromJSON(object.gitlabSelfHosted)
                : undefined,
            azureAd: isSet(object.azureAd) ? exports.AzureADConfig.fromJSON(object.azureAd) : undefined,
            apple: isSet(object.apple) ? exports.AppleConfig.fromJSON(object.apple) : undefined,
            saml: isSet(object.saml) ? exports.SAMLConfig.fromJSON(object.saml) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.options !== undefined) {
            obj.options = exports.Options.toJSON(message.options);
        }
        if (message.ldap !== undefined) {
            obj.ldap = exports.LDAPConfig.toJSON(message.ldap);
        }
        if (message.google !== undefined) {
            obj.google = exports.GoogleConfig.toJSON(message.google);
        }
        if (message.oauth !== undefined) {
            obj.oauth = exports.OAuthConfig.toJSON(message.oauth);
        }
        if (message.oidc !== undefined) {
            obj.oidc = exports.GenericOIDCConfig.toJSON(message.oidc);
        }
        if (message.jwt !== undefined) {
            obj.jwt = exports.JWTConfig.toJSON(message.jwt);
        }
        if (message.github !== undefined) {
            obj.github = exports.GitHubConfig.toJSON(message.github);
        }
        if (message.githubEs !== undefined) {
            obj.githubEs = exports.GitHubEnterpriseServerConfig.toJSON(message.githubEs);
        }
        if (message.gitlab !== undefined) {
            obj.gitlab = exports.GitLabConfig.toJSON(message.gitlab);
        }
        if (message.gitlabSelfHosted !== undefined) {
            obj.gitlabSelfHosted = exports.GitLabSelfHostedConfig.toJSON(message.gitlabSelfHosted);
        }
        if (message.azureAd !== undefined) {
            obj.azureAd = exports.AzureADConfig.toJSON(message.azureAd);
        }
        if (message.apple !== undefined) {
            obj.apple = exports.AppleConfig.toJSON(message.apple);
        }
        if (message.saml !== undefined) {
            obj.saml = exports.SAMLConfig.toJSON(message.saml);
        }
        return obj;
    },
    create(base) {
        return exports.ProviderConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseProviderConfig();
        message.options = (object.options !== undefined && object.options !== null)
            ? exports.Options.fromPartial(object.options)
            : undefined;
        message.ldap = (object.ldap !== undefined && object.ldap !== null)
            ? exports.LDAPConfig.fromPartial(object.ldap)
            : undefined;
        message.google = (object.google !== undefined && object.google !== null)
            ? exports.GoogleConfig.fromPartial(object.google)
            : undefined;
        message.oauth = (object.oauth !== undefined && object.oauth !== null)
            ? exports.OAuthConfig.fromPartial(object.oauth)
            : undefined;
        message.oidc = (object.oidc !== undefined && object.oidc !== null)
            ? exports.GenericOIDCConfig.fromPartial(object.oidc)
            : undefined;
        message.jwt = (object.jwt !== undefined && object.jwt !== null) ? exports.JWTConfig.fromPartial(object.jwt) : undefined;
        message.github = (object.github !== undefined && object.github !== null)
            ? exports.GitHubConfig.fromPartial(object.github)
            : undefined;
        message.githubEs = (object.githubEs !== undefined && object.githubEs !== null)
            ? exports.GitHubEnterpriseServerConfig.fromPartial(object.githubEs)
            : undefined;
        message.gitlab = (object.gitlab !== undefined && object.gitlab !== null)
            ? exports.GitLabConfig.fromPartial(object.gitlab)
            : undefined;
        message.gitlabSelfHosted = (object.gitlabSelfHosted !== undefined && object.gitlabSelfHosted !== null)
            ? exports.GitLabSelfHostedConfig.fromPartial(object.gitlabSelfHosted)
            : undefined;
        message.azureAd = (object.azureAd !== undefined && object.azureAd !== null)
            ? exports.AzureADConfig.fromPartial(object.azureAd)
            : undefined;
        message.apple = (object.apple !== undefined && object.apple !== null)
            ? exports.AppleConfig.fromPartial(object.apple)
            : undefined;
        message.saml = (object.saml !== undefined && object.saml !== null)
            ? exports.SAMLConfig.fromPartial(object.saml)
            : undefined;
        return message;
    },
};
function createBaseOAuthConfig() {
    return { clientId: "", authorizationEndpoint: "", tokenEndpoint: "", userEndpoint: "", scopes: [], idAttribute: "" };
}
exports.OAuthConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.authorizationEndpoint !== "") {
            writer.uint32(18).string(message.authorizationEndpoint);
        }
        if (message.tokenEndpoint !== "") {
            writer.uint32(26).string(message.tokenEndpoint);
        }
        if (message.userEndpoint !== "") {
            writer.uint32(34).string(message.userEndpoint);
        }
        for (const v of message.scopes) {
            writer.uint32(42).string(v);
        }
        if (message.idAttribute !== "") {
            writer.uint32(50).string(message.idAttribute);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOAuthConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.authorizationEndpoint = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tokenEndpoint = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userEndpoint = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.scopes.push(reader.string());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.idAttribute = reader.string();
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
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            authorizationEndpoint: isSet(object.authorizationEndpoint) ? globalThis.String(object.authorizationEndpoint) : "",
            tokenEndpoint: isSet(object.tokenEndpoint) ? globalThis.String(object.tokenEndpoint) : "",
            userEndpoint: isSet(object.userEndpoint) ? globalThis.String(object.userEndpoint) : "",
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
            idAttribute: isSet(object.idAttribute) ? globalThis.String(object.idAttribute) : "",
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.authorizationEndpoint !== "") {
            obj.authorizationEndpoint = message.authorizationEndpoint;
        }
        if (message.tokenEndpoint !== "") {
            obj.tokenEndpoint = message.tokenEndpoint;
        }
        if (message.userEndpoint !== "") {
            obj.userEndpoint = message.userEndpoint;
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        if (message.idAttribute !== "") {
            obj.idAttribute = message.idAttribute;
        }
        return obj;
    },
    create(base) {
        return exports.OAuthConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseOAuthConfig();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.authorizationEndpoint = (_b = object.authorizationEndpoint) !== null && _b !== void 0 ? _b : "";
        message.tokenEndpoint = (_c = object.tokenEndpoint) !== null && _c !== void 0 ? _c : "";
        message.userEndpoint = (_d = object.userEndpoint) !== null && _d !== void 0 ? _d : "";
        message.scopes = ((_e = object.scopes) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        message.idAttribute = (_f = object.idAttribute) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function createBaseGenericOIDCConfig() {
    return { issuer: "", clientId: "", scopes: [], isIdTokenMapping: false };
}
exports.GenericOIDCConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        for (const v of message.scopes) {
            writer.uint32(26).string(v);
        }
        if (message.isIdTokenMapping !== false) {
            writer.uint32(32).bool(message.isIdTokenMapping);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenericOIDCConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.scopes.push(reader.string());
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isIdTokenMapping = reader.bool();
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
            issuer: isSet(object.issuer) ? globalThis.String(object.issuer) : "",
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
            isIdTokenMapping: isSet(object.isIdTokenMapping) ? globalThis.Boolean(object.isIdTokenMapping) : false,
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.issuer !== "") {
            obj.issuer = message.issuer;
        }
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        if (message.isIdTokenMapping !== false) {
            obj.isIdTokenMapping = message.isIdTokenMapping;
        }
        return obj;
    },
    create(base) {
        return exports.GenericOIDCConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseGenericOIDCConfig();
        message.issuer = (_a = object.issuer) !== null && _a !== void 0 ? _a : "";
        message.clientId = (_b = object.clientId) !== null && _b !== void 0 ? _b : "";
        message.scopes = ((_c = object.scopes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        message.isIdTokenMapping = (_d = object.isIdTokenMapping) !== null && _d !== void 0 ? _d : false;
        return message;
    },
};
function createBaseGitHubConfig() {
    return { clientId: "", scopes: [] };
}
exports.GitHubConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.scopes) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGitHubConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        return obj;
    },
    create(base) {
        return exports.GitHubConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGitHubConfig();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.scopes = ((_b = object.scopes) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseGitHubEnterpriseServerConfig() {
    return { clientId: "", authorizationEndpoint: "", tokenEndpoint: "", userEndpoint: "", scopes: [] };
}
exports.GitHubEnterpriseServerConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.authorizationEndpoint !== "") {
            writer.uint32(18).string(message.authorizationEndpoint);
        }
        if (message.tokenEndpoint !== "") {
            writer.uint32(26).string(message.tokenEndpoint);
        }
        if (message.userEndpoint !== "") {
            writer.uint32(34).string(message.userEndpoint);
        }
        for (const v of message.scopes) {
            writer.uint32(42).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGitHubEnterpriseServerConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.authorizationEndpoint = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.tokenEndpoint = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.userEndpoint = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            authorizationEndpoint: isSet(object.authorizationEndpoint) ? globalThis.String(object.authorizationEndpoint) : "",
            tokenEndpoint: isSet(object.tokenEndpoint) ? globalThis.String(object.tokenEndpoint) : "",
            userEndpoint: isSet(object.userEndpoint) ? globalThis.String(object.userEndpoint) : "",
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.authorizationEndpoint !== "") {
            obj.authorizationEndpoint = message.authorizationEndpoint;
        }
        if (message.tokenEndpoint !== "") {
            obj.tokenEndpoint = message.tokenEndpoint;
        }
        if (message.userEndpoint !== "") {
            obj.userEndpoint = message.userEndpoint;
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        return obj;
    },
    create(base) {
        return exports.GitHubEnterpriseServerConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseGitHubEnterpriseServerConfig();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.authorizationEndpoint = (_b = object.authorizationEndpoint) !== null && _b !== void 0 ? _b : "";
        message.tokenEndpoint = (_c = object.tokenEndpoint) !== null && _c !== void 0 ? _c : "";
        message.userEndpoint = (_d = object.userEndpoint) !== null && _d !== void 0 ? _d : "";
        message.scopes = ((_e = object.scopes) === null || _e === void 0 ? void 0 : _e.map((e) => e)) || [];
        return message;
    },
};
function createBaseGoogleConfig() {
    return { clientId: "", scopes: [] };
}
exports.GoogleConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.scopes) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGoogleConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        return obj;
    },
    create(base) {
        return exports.GoogleConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGoogleConfig();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.scopes = ((_b = object.scopes) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseGitLabConfig() {
    return { clientId: "", scopes: [] };
}
exports.GitLabConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        for (const v of message.scopes) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGitLabConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        return obj;
    },
    create(base) {
        return exports.GitLabConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGitLabConfig();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.scopes = ((_b = object.scopes) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseGitLabSelfHostedConfig() {
    return { issuer: "", clientId: "", scopes: [] };
}
exports.GitLabSelfHostedConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.issuer !== "") {
            writer.uint32(10).string(message.issuer);
        }
        if (message.clientId !== "") {
            writer.uint32(18).string(message.clientId);
        }
        for (const v of message.scopes) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGitLabSelfHostedConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.issuer = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            issuer: isSet(object.issuer) ? globalThis.String(object.issuer) : "",
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.issuer !== "") {
            obj.issuer = message.issuer;
        }
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        return obj;
    },
    create(base) {
        return exports.GitLabSelfHostedConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseGitLabSelfHostedConfig();
        message.issuer = (_a = object.issuer) !== null && _a !== void 0 ? _a : "";
        message.clientId = (_b = object.clientId) !== null && _b !== void 0 ? _b : "";
        message.scopes = ((_c = object.scopes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseLDAPConfig() {
    return {
        servers: [],
        startTls: false,
        baseDn: "",
        bindDn: "",
        userBase: "",
        userObjectClasses: [],
        userFilters: [],
        timeout: undefined,
        attributes: undefined,
    };
}
exports.LDAPConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.servers) {
            writer.uint32(10).string(v);
        }
        if (message.startTls !== false) {
            writer.uint32(16).bool(message.startTls);
        }
        if (message.baseDn !== "") {
            writer.uint32(26).string(message.baseDn);
        }
        if (message.bindDn !== "") {
            writer.uint32(34).string(message.bindDn);
        }
        if (message.userBase !== "") {
            writer.uint32(42).string(message.userBase);
        }
        for (const v of message.userObjectClasses) {
            writer.uint32(50).string(v);
        }
        for (const v of message.userFilters) {
            writer.uint32(58).string(v);
        }
        if (message.timeout !== undefined) {
            duration_js_1.Duration.encode(message.timeout, writer.uint32(66).fork()).join();
        }
        if (message.attributes !== undefined) {
            exports.LDAPAttributes.encode(message.attributes, writer.uint32(74).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLDAPConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.servers.push(reader.string());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.startTls = reader.bool();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.baseDn = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.bindDn = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.userBase = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.userObjectClasses.push(reader.string());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.userFilters.push(reader.string());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.timeout = duration_js_1.Duration.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.attributes = exports.LDAPAttributes.decode(reader, reader.uint32());
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
            servers: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.servers) ? object.servers.map((e) => globalThis.String(e)) : [],
            startTls: isSet(object.startTls) ? globalThis.Boolean(object.startTls) : false,
            baseDn: isSet(object.baseDn) ? globalThis.String(object.baseDn) : "",
            bindDn: isSet(object.bindDn) ? globalThis.String(object.bindDn) : "",
            userBase: isSet(object.userBase) ? globalThis.String(object.userBase) : "",
            userObjectClasses: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.userObjectClasses)
                ? object.userObjectClasses.map((e) => globalThis.String(e))
                : [],
            userFilters: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.userFilters)
                ? object.userFilters.map((e) => globalThis.String(e))
                : [],
            timeout: isSet(object.timeout) ? duration_js_1.Duration.fromJSON(object.timeout) : undefined,
            attributes: isSet(object.attributes) ? exports.LDAPAttributes.fromJSON(object.attributes) : undefined,
        };
    },
    toJSON(message) {
        var _a, _b, _c;
        const obj = {};
        if ((_a = message.servers) === null || _a === void 0 ? void 0 : _a.length) {
            obj.servers = message.servers;
        }
        if (message.startTls !== false) {
            obj.startTls = message.startTls;
        }
        if (message.baseDn !== "") {
            obj.baseDn = message.baseDn;
        }
        if (message.bindDn !== "") {
            obj.bindDn = message.bindDn;
        }
        if (message.userBase !== "") {
            obj.userBase = message.userBase;
        }
        if ((_b = message.userObjectClasses) === null || _b === void 0 ? void 0 : _b.length) {
            obj.userObjectClasses = message.userObjectClasses;
        }
        if ((_c = message.userFilters) === null || _c === void 0 ? void 0 : _c.length) {
            obj.userFilters = message.userFilters;
        }
        if (message.timeout !== undefined) {
            obj.timeout = duration_js_1.Duration.toJSON(message.timeout);
        }
        if (message.attributes !== undefined) {
            obj.attributes = exports.LDAPAttributes.toJSON(message.attributes);
        }
        return obj;
    },
    create(base) {
        return exports.LDAPConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseLDAPConfig();
        message.servers = ((_a = object.servers) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        message.startTls = (_b = object.startTls) !== null && _b !== void 0 ? _b : false;
        message.baseDn = (_c = object.baseDn) !== null && _c !== void 0 ? _c : "";
        message.bindDn = (_d = object.bindDn) !== null && _d !== void 0 ? _d : "";
        message.userBase = (_e = object.userBase) !== null && _e !== void 0 ? _e : "";
        message.userObjectClasses = ((_f = object.userObjectClasses) === null || _f === void 0 ? void 0 : _f.map((e) => e)) || [];
        message.userFilters = ((_g = object.userFilters) === null || _g === void 0 ? void 0 : _g.map((e) => e)) || [];
        message.timeout = (object.timeout !== undefined && object.timeout !== null)
            ? duration_js_1.Duration.fromPartial(object.timeout)
            : undefined;
        message.attributes = (object.attributes !== undefined && object.attributes !== null)
            ? exports.LDAPAttributes.fromPartial(object.attributes)
            : undefined;
        return message;
    },
};
function createBaseSAMLConfig() {
    return {
        metadataXml: Buffer.alloc(0),
        binding: 0,
        withSignedRequest: false,
        nameIdFormat: 0,
        transientMappingAttributeName: undefined,
    };
}
exports.SAMLConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.metadataXml.length !== 0) {
            writer.uint32(10).bytes(message.metadataXml);
        }
        if (message.binding !== 0) {
            writer.uint32(16).int32(message.binding);
        }
        if (message.withSignedRequest !== false) {
            writer.uint32(24).bool(message.withSignedRequest);
        }
        if (message.nameIdFormat !== 0) {
            writer.uint32(32).int32(message.nameIdFormat);
        }
        if (message.transientMappingAttributeName !== undefined) {
            writer.uint32(42).string(message.transientMappingAttributeName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSAMLConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.metadataXml = Buffer.from(reader.bytes());
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.binding = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.withSignedRequest = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.nameIdFormat = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.transientMappingAttributeName = reader.string();
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
            metadataXml: isSet(object.metadataXml) ? Buffer.from(bytesFromBase64(object.metadataXml)) : Buffer.alloc(0),
            binding: isSet(object.binding) ? sAMLBindingFromJSON(object.binding) : 0,
            withSignedRequest: isSet(object.withSignedRequest) ? globalThis.Boolean(object.withSignedRequest) : false,
            nameIdFormat: isSet(object.nameIdFormat) ? sAMLNameIDFormatFromJSON(object.nameIdFormat) : 0,
            transientMappingAttributeName: isSet(object.transientMappingAttributeName)
                ? globalThis.String(object.transientMappingAttributeName)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.metadataXml.length !== 0) {
            obj.metadataXml = base64FromBytes(message.metadataXml);
        }
        if (message.binding !== 0) {
            obj.binding = sAMLBindingToJSON(message.binding);
        }
        if (message.withSignedRequest !== false) {
            obj.withSignedRequest = message.withSignedRequest;
        }
        if (message.nameIdFormat !== 0) {
            obj.nameIdFormat = sAMLNameIDFormatToJSON(message.nameIdFormat);
        }
        if (message.transientMappingAttributeName !== undefined) {
            obj.transientMappingAttributeName = message.transientMappingAttributeName;
        }
        return obj;
    },
    create(base) {
        return exports.SAMLConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseSAMLConfig();
        message.metadataXml = (_a = object.metadataXml) !== null && _a !== void 0 ? _a : Buffer.alloc(0);
        message.binding = (_b = object.binding) !== null && _b !== void 0 ? _b : 0;
        message.withSignedRequest = (_c = object.withSignedRequest) !== null && _c !== void 0 ? _c : false;
        message.nameIdFormat = (_d = object.nameIdFormat) !== null && _d !== void 0 ? _d : 0;
        message.transientMappingAttributeName = (_e = object.transientMappingAttributeName) !== null && _e !== void 0 ? _e : undefined;
        return message;
    },
};
function createBaseAzureADConfig() {
    return { clientId: "", tenant: undefined, emailVerified: false, scopes: [] };
}
exports.AzureADConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.tenant !== undefined) {
            exports.AzureADTenant.encode(message.tenant, writer.uint32(18).fork()).join();
        }
        if (message.emailVerified !== false) {
            writer.uint32(24).bool(message.emailVerified);
        }
        for (const v of message.scopes) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAzureADConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tenant = exports.AzureADTenant.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.emailVerified = reader.bool();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            tenant: isSet(object.tenant) ? exports.AzureADTenant.fromJSON(object.tenant) : undefined,
            emailVerified: isSet(object.emailVerified) ? globalThis.Boolean(object.emailVerified) : false,
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.tenant !== undefined) {
            obj.tenant = exports.AzureADTenant.toJSON(message.tenant);
        }
        if (message.emailVerified !== false) {
            obj.emailVerified = message.emailVerified;
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        return obj;
    },
    create(base) {
        return exports.AzureADConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAzureADConfig();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.tenant = (object.tenant !== undefined && object.tenant !== null)
            ? exports.AzureADTenant.fromPartial(object.tenant)
            : undefined;
        message.emailVerified = (_b = object.emailVerified) !== null && _b !== void 0 ? _b : false;
        message.scopes = ((_c = object.scopes) === null || _c === void 0 ? void 0 : _c.map((e) => e)) || [];
        return message;
    },
};
function createBaseOptions() {
    return {
        isLinkingAllowed: false,
        isCreationAllowed: false,
        isAutoCreation: false,
        isAutoUpdate: false,
        autoLinking: 0,
    };
}
exports.Options = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.isLinkingAllowed !== false) {
            writer.uint32(8).bool(message.isLinkingAllowed);
        }
        if (message.isCreationAllowed !== false) {
            writer.uint32(16).bool(message.isCreationAllowed);
        }
        if (message.isAutoCreation !== false) {
            writer.uint32(24).bool(message.isAutoCreation);
        }
        if (message.isAutoUpdate !== false) {
            writer.uint32(32).bool(message.isAutoUpdate);
        }
        if (message.autoLinking !== 0) {
            writer.uint32(40).int32(message.autoLinking);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOptions();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.isLinkingAllowed = reader.bool();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.isCreationAllowed = reader.bool();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.isAutoCreation = reader.bool();
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.isAutoUpdate = reader.bool();
                    continue;
                case 5:
                    if (tag !== 40) {
                        break;
                    }
                    message.autoLinking = reader.int32();
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
            isLinkingAllowed: isSet(object.isLinkingAllowed) ? globalThis.Boolean(object.isLinkingAllowed) : false,
            isCreationAllowed: isSet(object.isCreationAllowed) ? globalThis.Boolean(object.isCreationAllowed) : false,
            isAutoCreation: isSet(object.isAutoCreation) ? globalThis.Boolean(object.isAutoCreation) : false,
            isAutoUpdate: isSet(object.isAutoUpdate) ? globalThis.Boolean(object.isAutoUpdate) : false,
            autoLinking: isSet(object.autoLinking) ? autoLinkingOptionFromJSON(object.autoLinking) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.isLinkingAllowed !== false) {
            obj.isLinkingAllowed = message.isLinkingAllowed;
        }
        if (message.isCreationAllowed !== false) {
            obj.isCreationAllowed = message.isCreationAllowed;
        }
        if (message.isAutoCreation !== false) {
            obj.isAutoCreation = message.isAutoCreation;
        }
        if (message.isAutoUpdate !== false) {
            obj.isAutoUpdate = message.isAutoUpdate;
        }
        if (message.autoLinking !== 0) {
            obj.autoLinking = autoLinkingOptionToJSON(message.autoLinking);
        }
        return obj;
    },
    create(base) {
        return exports.Options.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseOptions();
        message.isLinkingAllowed = (_a = object.isLinkingAllowed) !== null && _a !== void 0 ? _a : false;
        message.isCreationAllowed = (_b = object.isCreationAllowed) !== null && _b !== void 0 ? _b : false;
        message.isAutoCreation = (_c = object.isAutoCreation) !== null && _c !== void 0 ? _c : false;
        message.isAutoUpdate = (_d = object.isAutoUpdate) !== null && _d !== void 0 ? _d : false;
        message.autoLinking = (_e = object.autoLinking) !== null && _e !== void 0 ? _e : 0;
        return message;
    },
};
function createBaseLDAPAttributes() {
    return {
        idAttribute: "",
        firstNameAttribute: "",
        lastNameAttribute: "",
        displayNameAttribute: "",
        nickNameAttribute: "",
        preferredUsernameAttribute: "",
        emailAttribute: "",
        emailVerifiedAttribute: "",
        phoneAttribute: "",
        phoneVerifiedAttribute: "",
        preferredLanguageAttribute: "",
        avatarUrlAttribute: "",
        profileAttribute: "",
    };
}
exports.LDAPAttributes = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.idAttribute !== "") {
            writer.uint32(10).string(message.idAttribute);
        }
        if (message.firstNameAttribute !== "") {
            writer.uint32(18).string(message.firstNameAttribute);
        }
        if (message.lastNameAttribute !== "") {
            writer.uint32(26).string(message.lastNameAttribute);
        }
        if (message.displayNameAttribute !== "") {
            writer.uint32(34).string(message.displayNameAttribute);
        }
        if (message.nickNameAttribute !== "") {
            writer.uint32(42).string(message.nickNameAttribute);
        }
        if (message.preferredUsernameAttribute !== "") {
            writer.uint32(50).string(message.preferredUsernameAttribute);
        }
        if (message.emailAttribute !== "") {
            writer.uint32(58).string(message.emailAttribute);
        }
        if (message.emailVerifiedAttribute !== "") {
            writer.uint32(66).string(message.emailVerifiedAttribute);
        }
        if (message.phoneAttribute !== "") {
            writer.uint32(74).string(message.phoneAttribute);
        }
        if (message.phoneVerifiedAttribute !== "") {
            writer.uint32(82).string(message.phoneVerifiedAttribute);
        }
        if (message.preferredLanguageAttribute !== "") {
            writer.uint32(90).string(message.preferredLanguageAttribute);
        }
        if (message.avatarUrlAttribute !== "") {
            writer.uint32(98).string(message.avatarUrlAttribute);
        }
        if (message.profileAttribute !== "") {
            writer.uint32(106).string(message.profileAttribute);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLDAPAttributes();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.idAttribute = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.firstNameAttribute = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.lastNameAttribute = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.displayNameAttribute = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.nickNameAttribute = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.preferredUsernameAttribute = reader.string();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.emailAttribute = reader.string();
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.emailVerifiedAttribute = reader.string();
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.phoneAttribute = reader.string();
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.phoneVerifiedAttribute = reader.string();
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.preferredLanguageAttribute = reader.string();
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.avatarUrlAttribute = reader.string();
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.profileAttribute = reader.string();
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
            idAttribute: isSet(object.idAttribute) ? globalThis.String(object.idAttribute) : "",
            firstNameAttribute: isSet(object.firstNameAttribute) ? globalThis.String(object.firstNameAttribute) : "",
            lastNameAttribute: isSet(object.lastNameAttribute) ? globalThis.String(object.lastNameAttribute) : "",
            displayNameAttribute: isSet(object.displayNameAttribute) ? globalThis.String(object.displayNameAttribute) : "",
            nickNameAttribute: isSet(object.nickNameAttribute) ? globalThis.String(object.nickNameAttribute) : "",
            preferredUsernameAttribute: isSet(object.preferredUsernameAttribute)
                ? globalThis.String(object.preferredUsernameAttribute)
                : "",
            emailAttribute: isSet(object.emailAttribute) ? globalThis.String(object.emailAttribute) : "",
            emailVerifiedAttribute: isSet(object.emailVerifiedAttribute)
                ? globalThis.String(object.emailVerifiedAttribute)
                : "",
            phoneAttribute: isSet(object.phoneAttribute) ? globalThis.String(object.phoneAttribute) : "",
            phoneVerifiedAttribute: isSet(object.phoneVerifiedAttribute)
                ? globalThis.String(object.phoneVerifiedAttribute)
                : "",
            preferredLanguageAttribute: isSet(object.preferredLanguageAttribute)
                ? globalThis.String(object.preferredLanguageAttribute)
                : "",
            avatarUrlAttribute: isSet(object.avatarUrlAttribute) ? globalThis.String(object.avatarUrlAttribute) : "",
            profileAttribute: isSet(object.profileAttribute) ? globalThis.String(object.profileAttribute) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.idAttribute !== "") {
            obj.idAttribute = message.idAttribute;
        }
        if (message.firstNameAttribute !== "") {
            obj.firstNameAttribute = message.firstNameAttribute;
        }
        if (message.lastNameAttribute !== "") {
            obj.lastNameAttribute = message.lastNameAttribute;
        }
        if (message.displayNameAttribute !== "") {
            obj.displayNameAttribute = message.displayNameAttribute;
        }
        if (message.nickNameAttribute !== "") {
            obj.nickNameAttribute = message.nickNameAttribute;
        }
        if (message.preferredUsernameAttribute !== "") {
            obj.preferredUsernameAttribute = message.preferredUsernameAttribute;
        }
        if (message.emailAttribute !== "") {
            obj.emailAttribute = message.emailAttribute;
        }
        if (message.emailVerifiedAttribute !== "") {
            obj.emailVerifiedAttribute = message.emailVerifiedAttribute;
        }
        if (message.phoneAttribute !== "") {
            obj.phoneAttribute = message.phoneAttribute;
        }
        if (message.phoneVerifiedAttribute !== "") {
            obj.phoneVerifiedAttribute = message.phoneVerifiedAttribute;
        }
        if (message.preferredLanguageAttribute !== "") {
            obj.preferredLanguageAttribute = message.preferredLanguageAttribute;
        }
        if (message.avatarUrlAttribute !== "") {
            obj.avatarUrlAttribute = message.avatarUrlAttribute;
        }
        if (message.profileAttribute !== "") {
            obj.profileAttribute = message.profileAttribute;
        }
        return obj;
    },
    create(base) {
        return exports.LDAPAttributes.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const message = createBaseLDAPAttributes();
        message.idAttribute = (_a = object.idAttribute) !== null && _a !== void 0 ? _a : "";
        message.firstNameAttribute = (_b = object.firstNameAttribute) !== null && _b !== void 0 ? _b : "";
        message.lastNameAttribute = (_c = object.lastNameAttribute) !== null && _c !== void 0 ? _c : "";
        message.displayNameAttribute = (_d = object.displayNameAttribute) !== null && _d !== void 0 ? _d : "";
        message.nickNameAttribute = (_e = object.nickNameAttribute) !== null && _e !== void 0 ? _e : "";
        message.preferredUsernameAttribute = (_f = object.preferredUsernameAttribute) !== null && _f !== void 0 ? _f : "";
        message.emailAttribute = (_g = object.emailAttribute) !== null && _g !== void 0 ? _g : "";
        message.emailVerifiedAttribute = (_h = object.emailVerifiedAttribute) !== null && _h !== void 0 ? _h : "";
        message.phoneAttribute = (_j = object.phoneAttribute) !== null && _j !== void 0 ? _j : "";
        message.phoneVerifiedAttribute = (_k = object.phoneVerifiedAttribute) !== null && _k !== void 0 ? _k : "";
        message.preferredLanguageAttribute = (_l = object.preferredLanguageAttribute) !== null && _l !== void 0 ? _l : "";
        message.avatarUrlAttribute = (_m = object.avatarUrlAttribute) !== null && _m !== void 0 ? _m : "";
        message.profileAttribute = (_o = object.profileAttribute) !== null && _o !== void 0 ? _o : "";
        return message;
    },
};
function createBaseAzureADTenant() {
    return { tenantType: undefined, tenantId: undefined };
}
exports.AzureADTenant = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.tenantType !== undefined) {
            writer.uint32(8).int32(message.tenantType);
        }
        if (message.tenantId !== undefined) {
            writer.uint32(18).string(message.tenantId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAzureADTenant();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.tenantType = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.tenantId = reader.string();
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
            tenantType: isSet(object.tenantType) ? azureADTenantTypeFromJSON(object.tenantType) : undefined,
            tenantId: isSet(object.tenantId) ? globalThis.String(object.tenantId) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.tenantType !== undefined) {
            obj.tenantType = azureADTenantTypeToJSON(message.tenantType);
        }
        if (message.tenantId !== undefined) {
            obj.tenantId = message.tenantId;
        }
        return obj;
    },
    create(base) {
        return exports.AzureADTenant.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAzureADTenant();
        message.tenantType = (_a = object.tenantType) !== null && _a !== void 0 ? _a : undefined;
        message.tenantId = (_b = object.tenantId) !== null && _b !== void 0 ? _b : undefined;
        return message;
    },
};
function createBaseAppleConfig() {
    return { clientId: "", teamId: "", keyId: "", scopes: [] };
}
exports.AppleConfig = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.clientId !== "") {
            writer.uint32(10).string(message.clientId);
        }
        if (message.teamId !== "") {
            writer.uint32(18).string(message.teamId);
        }
        if (message.keyId !== "") {
            writer.uint32(26).string(message.keyId);
        }
        for (const v of message.scopes) {
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppleConfig();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.clientId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.teamId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.keyId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.scopes.push(reader.string());
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
            clientId: isSet(object.clientId) ? globalThis.String(object.clientId) : "",
            teamId: isSet(object.teamId) ? globalThis.String(object.teamId) : "",
            keyId: isSet(object.keyId) ? globalThis.String(object.keyId) : "",
            scopes: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.scopes) ? object.scopes.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.clientId !== "") {
            obj.clientId = message.clientId;
        }
        if (message.teamId !== "") {
            obj.teamId = message.teamId;
        }
        if (message.keyId !== "") {
            obj.keyId = message.keyId;
        }
        if ((_a = message.scopes) === null || _a === void 0 ? void 0 : _a.length) {
            obj.scopes = message.scopes;
        }
        return obj;
    },
    create(base) {
        return exports.AppleConfig.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseAppleConfig();
        message.clientId = (_a = object.clientId) !== null && _a !== void 0 ? _a : "";
        message.teamId = (_b = object.teamId) !== null && _b !== void 0 ? _b : "";
        message.keyId = (_c = object.keyId) !== null && _c !== void 0 ? _c : "";
        message.scopes = ((_d = object.scopes) === null || _d === void 0 ? void 0 : _d.map((e) => e)) || [];
        return message;
    },
};
function bytesFromBase64(b64) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
}
function base64FromBytes(arr) {
    return globalThis.Buffer.from(arr).toString("base64");
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=idp.js.map