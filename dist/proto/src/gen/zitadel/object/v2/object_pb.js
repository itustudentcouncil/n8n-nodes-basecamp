"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampQueryMethodSchema = exports.TimestampQueryMethod = exports.ListQueryMethodSchema = exports.ListQueryMethod = exports.TextQueryMethodSchema = exports.TextQueryMethod = exports.ListDetailsSchema = exports.DetailsSchema = exports.ListQuerySchema = exports.RequestContextSchema = exports.OrganizationSchema = exports.OrganisationSchema = exports.file_zitadel_object_v2_object = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const wkt_1 = require("@bufbuild/protobuf/wkt");
const annotations_pb_1 = require("../../../protoc-gen-openapiv2/options/annotations_pb");
const validate_pb_1 = require("../../../validate/validate_pb");
exports.file_zitadel_object_v2_object = (0, codegenv1_1.fileDesc)("Ch56aXRhZGVsL29iamVjdC92Mi9vYmplY3QucHJvdG8SEXppdGFkZWwub2JqZWN0LnYyIj0KDE9yZ2FuaXNhdGlvbhIQCgZvcmdfaWQYASABKAlIABIUCgpvcmdfZG9tYWluGAIgASgJSABCBQoDb3JnIj0KDE9yZ2FuaXphdGlvbhIQCgZvcmdfaWQYASABKAlIABIUCgpvcmdfZG9tYWluGAIgASgJSABCBQoDb3JnIlEKDlJlcXVlc3RDb250ZXh0EhAKBm9yZ19pZBgBIAEoCUgAEhsKCGluc3RhbmNlGAIgASgIQgf6QgRqAggBSABCEAoOcmVzb3VyY2Vfb3duZXIi0AMKCUxpc3RRdWVyeRIYCgZvZmZzZXQYASABKARCCJJBBUoDIjAiEqMCCgVsaW1pdBgCIAEoDUKTApJBjwIyhwJNYXhpbXVtIGFtb3VudCBvZiBldmVudHMgcmV0dXJuZWQuIFRoZSBkZWZhdWx0IGlzIHNldCB0byAxMDAwIGluIGh0dHBzOi8vZ2l0aHViLmNvbS96aXRhZGVsL3ppdGFkZWwvYmxvYi9uZXctZXZlbnRzdG9yZS9jbWQveml0YWRlbC9zdGFydHVwLnlhbWwuIElmIHRoZSBsaW1pdCBleGNlZWRzIHRoZSBtYXhpbXVtIGNvbmZpZ3VyZWQgWklUQURFTCB3aWxsIHRocm93IGFuIGVycm9yLiBJZiBubyBsaW1pdCBpcyBwcmVzZW50IHRoZSBkZWZhdWx0IGlzIHRha2VuLkoDMTAwEicKA2FzYxgDIAEoCEIakkEXMhVkZWZhdWx0IGlzIGRlc2NlbmRpbmc6WpJBVwpVKhJHZW5lcmFsIExpc3QgUXVlcnkyP09iamVjdCB1bnNwZWNpZmljIGxpc3QgZmlsdGVycyBsaWtlIG9mZnNldCwgbGltaXQgYW5kIGFzYy9kZXNjLiKIAQoHRGV0YWlscxIaCghzZXF1ZW5jZRgBIAEoBEIIkkEFSgMiMiISLwoLY2hhbmdlX2RhdGUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEjAKDnJlc291cmNlX293bmVyGAMgASgJQhiSQRVKEyI2OTYyOTAyMzkwNjQ4ODMzNCIitgEKC0xpc3REZXRhaWxzEh4KDHRvdGFsX3Jlc3VsdBgBIAEoBEIIkkEFSgMiMiISKQoScHJvY2Vzc2VkX3NlcXVlbmNlGAIgASgEQg2SQQpKCCIyNjc4MzEiElwKCXRpbWVzdGFtcBgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCLZJBKjIodGhlIGxhc3QgdGltZSB0aGUgcHJvamVjdGlvbiBnb3QgdXBkYXRlZCrFAgoPVGV4dFF1ZXJ5TWV0aG9kEhwKGFRFWFRfUVVFUllfTUVUSE9EX0VRVUFMUxAAEigKJFRFWFRfUVVFUllfTUVUSE9EX0VRVUFMU19JR05PUkVfQ0FTRRABEiEKHVRFWFRfUVVFUllfTUVUSE9EX1NUQVJUU19XSVRIEAISLQopVEVYVF9RVUVSWV9NRVRIT0RfU1RBUlRTX1dJVEhfSUdOT1JFX0NBU0UQAxIeChpURVhUX1FVRVJZX01FVEhPRF9DT05UQUlOUxAEEioKJlRFWFRfUVVFUllfTUVUSE9EX0NPTlRBSU5TX0lHTk9SRV9DQVNFEAUSHwobVEVYVF9RVUVSWV9NRVRIT0RfRU5EU19XSVRIEAYSKwonVEVYVF9RVUVSWV9NRVRIT0RfRU5EU19XSVRIX0lHTk9SRV9DQVNFEAcqKwoPTGlzdFF1ZXJ5TWV0aG9kEhgKFExJU1RfUVVFUllfTUVUSE9EX0lOEAAq1wEKFFRpbWVzdGFtcFF1ZXJ5TWV0aG9kEiEKHVRJTUVTVEFNUF9RVUVSWV9NRVRIT0RfRVFVQUxTEAASIgoeVElNRVNUQU1QX1FVRVJZX01FVEhPRF9HUkVBVEVSEAESLAooVElNRVNUQU1QX1FVRVJZX01FVEhPRF9HUkVBVEVSX09SX0VRVUFMUxACEh8KG1RJTUVTVEFNUF9RVUVSWV9NRVRIT0RfTEVTUxADEikKJVRJTUVTVEFNUF9RVUVSWV9NRVRIT0RfTEVTU19PUl9FUVVBTFMQBEI2WjRnaXRodWIuY29tL3ppdGFkZWwveml0YWRlbC9wa2cvZ3JwYy9vYmplY3QvdjI7b2JqZWN0YgZwcm90bzM", [wkt_1.file_google_protobuf_timestamp, annotations_pb_1.file_protoc_gen_openapiv2_options_annotations, validate_pb_1.file_validate_validate]);
exports.OrganisationSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_object_v2_object, 0);
exports.OrganizationSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_object_v2_object, 1);
exports.RequestContextSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_object_v2_object, 2);
exports.ListQuerySchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_object_v2_object, 3);
exports.DetailsSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_object_v2_object, 4);
exports.ListDetailsSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_object_v2_object, 5);
var TextQueryMethod;
(function (TextQueryMethod) {
    TextQueryMethod[TextQueryMethod["EQUALS"] = 0] = "EQUALS";
    TextQueryMethod[TextQueryMethod["EQUALS_IGNORE_CASE"] = 1] = "EQUALS_IGNORE_CASE";
    TextQueryMethod[TextQueryMethod["STARTS_WITH"] = 2] = "STARTS_WITH";
    TextQueryMethod[TextQueryMethod["STARTS_WITH_IGNORE_CASE"] = 3] = "STARTS_WITH_IGNORE_CASE";
    TextQueryMethod[TextQueryMethod["CONTAINS"] = 4] = "CONTAINS";
    TextQueryMethod[TextQueryMethod["CONTAINS_IGNORE_CASE"] = 5] = "CONTAINS_IGNORE_CASE";
    TextQueryMethod[TextQueryMethod["ENDS_WITH"] = 6] = "ENDS_WITH";
    TextQueryMethod[TextQueryMethod["ENDS_WITH_IGNORE_CASE"] = 7] = "ENDS_WITH_IGNORE_CASE";
})(TextQueryMethod = exports.TextQueryMethod || (exports.TextQueryMethod = {}));
exports.TextQueryMethodSchema = (0, codegenv1_1.enumDesc)(exports.file_zitadel_object_v2_object, 0);
var ListQueryMethod;
(function (ListQueryMethod) {
    ListQueryMethod[ListQueryMethod["IN"] = 0] = "IN";
})(ListQueryMethod = exports.ListQueryMethod || (exports.ListQueryMethod = {}));
exports.ListQueryMethodSchema = (0, codegenv1_1.enumDesc)(exports.file_zitadel_object_v2_object, 1);
var TimestampQueryMethod;
(function (TimestampQueryMethod) {
    TimestampQueryMethod[TimestampQueryMethod["EQUALS"] = 0] = "EQUALS";
    TimestampQueryMethod[TimestampQueryMethod["GREATER"] = 1] = "GREATER";
    TimestampQueryMethod[TimestampQueryMethod["GREATER_OR_EQUALS"] = 2] = "GREATER_OR_EQUALS";
    TimestampQueryMethod[TimestampQueryMethod["LESS"] = 3] = "LESS";
    TimestampQueryMethod[TimestampQueryMethod["LESS_OR_EQUALS"] = 4] = "LESS_OR_EQUALS";
})(TimestampQueryMethod = exports.TimestampQueryMethod || (exports.TimestampQueryMethod = {}));
exports.TimestampQueryMethodSchema = (0, codegenv1_1.enumDesc)(exports.file_zitadel_object_v2_object, 2);
//# sourceMappingURL=object_pb.js.map