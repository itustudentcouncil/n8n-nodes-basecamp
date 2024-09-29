"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFactorStateSchema = exports.AuthFactorState = exports.UserStateSchema = exports.UserState = exports.AccessTokenTypeSchema = exports.AccessTokenType = exports.GenderSchema = exports.Gender = exports.ReturnInviteCodeSchema = exports.SendInviteCodeSchema = exports.PasskeySchema = exports.MachineUserSchema = exports.UserSchema = exports.HumanUserSchema = exports.SetMetadataEntrySchema = exports.HumanProfileSchema = exports.SetHumanProfileSchema = exports.file_zitadel_user_v2_user = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const field_behavior_pb_1 = require("../../../google/api/field_behavior_pb");
const wkt_1 = require("@bufbuild/protobuf/wkt");
const annotations_pb_1 = require("../../../protoc-gen-openapiv2/options/annotations_pb");
const validate_pb_1 = require("../../../validate/validate_pb");
const object_pb_1 = require("../../object/v2/object_pb");
const email_pb_1 = require("./email_pb");
const phone_pb_1 = require("./phone_pb");
exports.file_zitadel_user_v2_user = (0, codegenv1_1.fileDesc)("Chp6aXRhZGVsL3VzZXIvdjIvdXNlci5wcm90bxIPeml0YWRlbC51c2VyLnYyIqQDCg9TZXRIdW1hblByb2ZpbGUSNQoKZ2l2ZW5fbmFtZRgBIAEoCUIhkkEQSggiTWlubmllInjIAYABAeJBAQL6QgdyBRABGMgBEjUKC2ZhbWlseV9uYW1lGAIgASgJQiCSQQ9KByJNb3VzZSJ4yAGAAQHiQQEC+kIHcgUQARjIARIuCgluaWNrX25hbWUYAyABKAlCFpJBC0oGIk1pbmkieMgB+kIFcgMYyAFIAIgBARI5CgxkaXNwbGF5X25hbWUYBCABKAlCHpJBE0oOIk1pbm5pZSBNb3VzZSJ4yAH6QgVyAxjIAUgBiAEBEjMKEnByZWZlcnJlZF9sYW5ndWFnZRgFIAEoCUISkkEISgQiZW4ieAr6QgRyAhgKSAKIAQESQgoGZ2VuZGVyGAYgASgOMhcueml0YWRlbC51c2VyLnYyLkdlbmRlckIUkkERSg8iR0VOREVSX0ZFTUFMRSJIA4gBAUIMCgpfbmlja19uYW1lQg8KDV9kaXNwbGF5X25hbWVCFQoTX3ByZWZlcnJlZF9sYW5ndWFnZUIJCgdfZ2VuZGVyItgDCgxIdW1hblByb2ZpbGUSJwoKZ2l2ZW5fbmFtZRgBIAEoCUITkkEQSggiTWlubmllInjIAYABARInCgtmYW1pbHlfbmFtZRgCIAEoCUISkkEPSgciTW91c2UieMgBgAEBEiYKCW5pY2tfbmFtZRgDIAEoCUIOkkELSgYiTWluaSJ4yAFIAIgBARIxCgxkaXNwbGF5X25hbWUYBCABKAlCFpJBE0oOIk1pbm5pZSBNb3VzZSJ4yAFIAYgBARIsChJwcmVmZXJyZWRfbGFuZ3VhZ2UYBSABKAlCC5JBCEoEImVuIngKSAKIAQESQgoGZ2VuZGVyGAYgASgOMhcueml0YWRlbC51c2VyLnYyLkdlbmRlckIUkkERSg8iR0VOREVSX0ZFTUFMRSJIA4gBARJoCgphdmF0YXJfdXJsGAcgASgJQlSSQVEyFmF2YXRhciBVUkwgb2YgdGhlIHVzZXJKNyJodHRwczovL2FwaS56aXRhZGVsLmNoL2Fzc2V0cy92MS9hdmF0YXItMzI0MzJqa2g0a2ozMiJCDAoKX25pY2tfbmFtZUIPCg1fZGlzcGxheV9uYW1lQhUKE19wcmVmZXJyZWRfbGFuZ3VhZ2VCCQoHX2dlbmRlciKxAQoQU2V0TWV0YWRhdGFFbnRyeRIuCgNrZXkYASABKAlCIZJBEEoIIm15LWtleSJ4yAGAAQHiQQEC+kIHcgUQARjIARJtCgV2YWx1ZRgCIAEoDEJekkFMMiNUaGUgdmFsdWUgaGFzIHRvIGJlIGJhc2U2NCBlbmNvZGVkLkoeIlZHaHBjeUJwY3lCdGVTQjBaWE4wSUhaaGJIVmwieKDCHoABAeJBAQL6Qgh6BhABGKDCHiKdBAoJSHVtYW5Vc2VyEjwKB3VzZXJfaWQYASABKAlCK5JBKEomImQ2NTRlNmJhLTcwYTMtNDhlZi1hOTVkLTM3YzhkOGE3OTAxYSISSQoFc3RhdGUYAiABKA4yGi56aXRhZGVsLnVzZXIudjIuVXNlclN0YXRlQh6SQRsyGWN1cnJlbnQgc3RhdGUgb2YgdGhlIHVzZXISJQoIdXNlcm5hbWUYAyABKAlCE5JBEEoOIm1pbm5pZS1tb3VzZSISSQoLbG9naW5fbmFtZXMYBCADKAlCNJJBMUovWyJnaWdpQHppdGFkZWwuY29tIiwgImdpZ2lAeml0YWRlbC56aXRhZGVsLmNoIl0SNQoUcHJlZmVycmVkX2xvZ2luX25hbWUYBSABKAlCF5JBFEoSImdpZ2lAeml0YWRlbC5jb20iEi4KB3Byb2ZpbGUYBiABKAsyHS56aXRhZGVsLnVzZXIudjIuSHVtYW5Qcm9maWxlEioKBWVtYWlsGAcgASgLMhsueml0YWRlbC51c2VyLnYyLkh1bWFuRW1haWwSKgoFcGhvbmUYCCABKAsyGy56aXRhZGVsLnVzZXIudjIuSHVtYW5QaG9uZRIgChhwYXNzd29yZF9jaGFuZ2VfcmVxdWlyZWQYCSABKAgSNAoQcGFzc3dvcmRfY2hhbmdlZBgKIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAimQQKBFVzZXISPAoHdXNlcl9pZBgBIAEoCUIrkkEoSiYiZDY1NGU2YmEtNzBhMy00OGVmLWE5NWQtMzdjOGQ4YTc5MDFhIhIrCgdkZXRhaWxzGAggASgLMhoueml0YWRlbC5vYmplY3QudjIuRGV0YWlscxJJCgVzdGF0ZRgCIAEoDjIaLnppdGFkZWwudXNlci52Mi5Vc2VyU3RhdGVCHpJBGzIZY3VycmVudCBzdGF0ZSBvZiB0aGUgdXNlchIlCgh1c2VybmFtZRgDIAEoCUITkkEQSg4ibWlubmllLW1vdXNlIhJJCgtsb2dpbl9uYW1lcxgEIAMoCUI0kkExSi9bImdpZ2lAeml0YWRlbC5jb20iLCAiZ2lnaUB6aXRhZGVsLnppdGFkZWwuY2giXRI1ChRwcmVmZXJyZWRfbG9naW5fbmFtZRgFIAEoCUIXkkEUShIiZ2lnaUB6aXRhZGVsLmNvbSISUgoFaHVtYW4YBiABKAsyGi56aXRhZGVsLnVzZXIudjIuSHVtYW5Vc2VyQiWSQSIyIG9uZSBvZiB0eXBlIHVzZSBodW1hbiBvciBtYWNoaW5lSAASVgoHbWFjaGluZRgHIAEoCzIcLnppdGFkZWwudXNlci52Mi5NYWNoaW5lVXNlckIlkkEiMiBvbmUgb2YgdHlwZSB1c2UgaHVtYW4gb3IgbWFjaGluZUgAQgYKBHR5cGUi4QEKC01hY2hpbmVVc2VyEhwKBG5hbWUYASABKAlCDpJBC0oJInppdGFkZWwiEjAKC2Rlc2NyaXB0aW9uGAIgASgJQhuSQRhKFiJUaGUgb25lIGFuZCBvbmx5IElBTSISHwoKaGFzX3NlY3JldBgDIAEoCEILkkEISgYidHJ1ZSISYQoRYWNjZXNzX3Rva2VuX3R5cGUYBCABKA4yIC56aXRhZGVsLnVzZXIudjIuQWNjZXNzVG9rZW5UeXBlQiSSQSEyH1R5cGUgb2YgYWNjZXNzIHRva2VuIHRvIHJlY2VpdmUiqAEKB1Bhc3NrZXkSJAoCaWQYASABKAlCGJJBFUoTIjY5NjI5MDIzOTA2NDg4MzM0IhJSCgVzdGF0ZRgCIAEoDjIgLnppdGFkZWwudXNlci52Mi5BdXRoRmFjdG9yU3RhdGVCIZJBHjIcY3VycmVudCBzdGF0ZSBvZiB0aGUgcGFzc2tleRIjCgRuYW1lGAMgASgJQhWSQRJKCiJmaWRvIGtleSJ4yAGAAQEigwIKDlNlbmRJbnZpdGVDb2RlEoQBCgx1cmxfdGVtcGxhdGUYASABKAlCaZJBXEpUImh0dHBzOi8vZXhhbXBsZS5jb20vdXNlci9pbnZpdGU/dXNlcklEPXt7LlVzZXJJRH19JmNvZGU9e3suQ29kZX19Jm9yZ0lEPXt7Lk9yZ0lEfX0ieMgBgAEB+kIHcgUQARjIAUgAiAEBEkQKEGFwcGxpY2F0aW9uX25hbWUYAiABKAlCJZJBGEoQIkN1c3RvbWVyUG9ydGFsInjIAYABAfpCB3IFEAEYyAFIAYgBAUIPCg1fdXJsX3RlbXBsYXRlQhMKEV9hcHBsaWNhdGlvbl9uYW1lIhIKEFJldHVybkludml0ZUNvZGUqWAoGR2VuZGVyEhYKEkdFTkRFUl9VTlNQRUNJRklFRBAAEhEKDUdFTkRFUl9GRU1BTEUQARIPCgtHRU5ERVJfTUFMRRACEhIKDkdFTkRFUl9ESVZFUlNFEAMqSgoPQWNjZXNzVG9rZW5UeXBlEhwKGEFDQ0VTU19UT0tFTl9UWVBFX0JFQVJFUhAAEhkKFUFDQ0VTU19UT0tFTl9UWVBFX0pXVBABKp4BCglVc2VyU3RhdGUSGgoWVVNFUl9TVEFURV9VTlNQRUNJRklFRBAAEhUKEVVTRVJfU1RBVEVfQUNUSVZFEAESFwoTVVNFUl9TVEFURV9JTkFDVElWRRACEhYKElVTRVJfU1RBVEVfREVMRVRFRBADEhUKEVVTRVJfU1RBVEVfTE9DS0VEEAQSFgoSVVNFUl9TVEFURV9JTklUSUFMEAUqkQEKD0F1dGhGYWN0b3JTdGF0ZRIhCh1BVVRIX0ZBQ1RPUl9TVEFURV9VTlNQRUNJRklFRBAAEh8KG0FVVEhfRkFDVE9SX1NUQVRFX05PVF9SRUFEWRABEhsKF0FVVEhfRkFDVE9SX1NUQVRFX1JFQURZEAISHQoZQVVUSF9GQUNUT1JfU1RBVEVfUkVNT1ZFRBADQjJaMGdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL3VzZXIvdjI7dXNlcmIGcHJvdG8z", [field_behavior_pb_1.file_google_api_field_behavior, wkt_1.file_google_protobuf_timestamp, annotations_pb_1.file_protoc_gen_openapiv2_options_annotations, validate_pb_1.file_validate_validate, object_pb_1.file_zitadel_object_v2_object, email_pb_1.file_zitadel_user_v2_email, phone_pb_1.file_zitadel_user_v2_phone]);
exports.SetHumanProfileSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_user, 0);
exports.HumanProfileSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_user, 1);
exports.SetMetadataEntrySchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_user, 2);
exports.HumanUserSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_user, 3);
exports.UserSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_user, 4);
exports.MachineUserSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_user, 5);
exports.PasskeySchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_user, 6);
exports.SendInviteCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_user, 7);
exports.ReturnInviteCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_user, 8);
var Gender;
(function (Gender) {
    Gender[Gender["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["MALE"] = 2] = "MALE";
    Gender[Gender["DIVERSE"] = 3] = "DIVERSE";
})(Gender = exports.Gender || (exports.Gender = {}));
exports.GenderSchema = (0, codegenv1_1.enumDesc)(exports.file_zitadel_user_v2_user, 0);
var AccessTokenType;
(function (AccessTokenType) {
    AccessTokenType[AccessTokenType["BEARER"] = 0] = "BEARER";
    AccessTokenType[AccessTokenType["JWT"] = 1] = "JWT";
})(AccessTokenType = exports.AccessTokenType || (exports.AccessTokenType = {}));
exports.AccessTokenTypeSchema = (0, codegenv1_1.enumDesc)(exports.file_zitadel_user_v2_user, 1);
var UserState;
(function (UserState) {
    UserState[UserState["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    UserState[UserState["ACTIVE"] = 1] = "ACTIVE";
    UserState[UserState["INACTIVE"] = 2] = "INACTIVE";
    UserState[UserState["DELETED"] = 3] = "DELETED";
    UserState[UserState["LOCKED"] = 4] = "LOCKED";
    UserState[UserState["INITIAL"] = 5] = "INITIAL";
})(UserState = exports.UserState || (exports.UserState = {}));
exports.UserStateSchema = (0, codegenv1_1.enumDesc)(exports.file_zitadel_user_v2_user, 2);
var AuthFactorState;
(function (AuthFactorState) {
    AuthFactorState[AuthFactorState["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    AuthFactorState[AuthFactorState["NOT_READY"] = 1] = "NOT_READY";
    AuthFactorState[AuthFactorState["READY"] = 2] = "READY";
    AuthFactorState[AuthFactorState["REMOVED"] = 3] = "REMOVED";
})(AuthFactorState = exports.AuthFactorState || (exports.AuthFactorState = {}));
exports.AuthFactorStateSchema = (0, codegenv1_1.enumDesc)(exports.file_zitadel_user_v2_user, 3);
//# sourceMappingURL=user_pb.js.map