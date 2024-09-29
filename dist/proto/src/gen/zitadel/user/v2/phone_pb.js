"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnPhoneVerificationCodeSchema = exports.SendPhoneVerificationCodeSchema = exports.HumanPhoneSchema = exports.SetHumanPhoneSchema = exports.file_zitadel_user_v2_phone = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const annotations_pb_1 = require("../../../google/api/annotations_pb");
const field_behavior_pb_1 = require("../../../google/api/field_behavior_pb");
const annotations_pb_2 = require("../../../protoc-gen-openapiv2/options/annotations_pb");
const validate_pb_1 = require("../../../validate/validate_pb");
exports.file_zitadel_user_v2_phone = (0, codegenv1_1.fileDesc)("Cht6aXRhZGVsL3VzZXIvdjIvcGhvbmUucHJvdG8SD3ppdGFkZWwudXNlci52MiL2AQoNU2V0SHVtYW5QaG9uZRIvCgVwaG9uZRgBIAEoCUIgkkETSg4iKzQxNzkxMjM0NTY3InjIAfpCB3IFEAAYyAESPwoJc2VuZF9jb2RlGAIgASgLMioueml0YWRlbC51c2VyLnYyLlNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGVIABJDCgtyZXR1cm5fY29kZRgDIAEoCzIsLnppdGFkZWwudXNlci52Mi5SZXR1cm5QaG9uZVZlcmlmaWNhdGlvbkNvZGVIABIeCgtpc192ZXJpZmllZBgEIAEoCEIH+kIEagIIAUgAQg4KDHZlcmlmaWNhdGlvbiJICgpIdW1hblBob25lEiUKBXBob25lGAEgASgJQhaSQRNKDiIrNDE3OTEyMzQ1NjcieMgBEhMKC2lzX3ZlcmlmaWVkGAIgASgIIhsKGVNlbmRQaG9uZVZlcmlmaWNhdGlvbkNvZGUiHQobUmV0dXJuUGhvbmVWZXJpZmljYXRpb25Db2RlQjJaMGdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL3VzZXIvdjI7dXNlcmIGcHJvdG8z", [annotations_pb_1.file_google_api_annotations, field_behavior_pb_1.file_google_api_field_behavior, annotations_pb_2.file_protoc_gen_openapiv2_options_annotations, validate_pb_1.file_validate_validate]);
exports.SetHumanPhoneSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_phone, 0);
exports.HumanPhoneSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_phone, 1);
exports.SendPhoneVerificationCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_phone, 2);
exports.ReturnPhoneVerificationCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_phone, 3);
//# sourceMappingURL=phone_pb.js.map