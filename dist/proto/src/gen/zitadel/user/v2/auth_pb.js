"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasskeyAuthenticatorSchema = exports.PasskeyAuthenticator = exports.PasskeyRegistrationCodeSchema = exports.ReturnPasskeyRegistrationCodeSchema = exports.SendPasskeyRegistrationLinkSchema = exports.file_zitadel_user_v2_auth = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const field_behavior_pb_1 = require("../../../google/api/field_behavior_pb");
const annotations_pb_1 = require("../../../protoc-gen-openapiv2/options/annotations_pb");
const validate_pb_1 = require("../../../validate/validate_pb");
exports.file_zitadel_user_v2_auth = (0, codegenv1_1.fileDesc)("Chp6aXRhZGVsL3VzZXIvdjIvYXV0aC5wcm90bxIPeml0YWRlbC51c2VyLnYyIpMDChtTZW5kUGFzc2tleVJlZ2lzdHJhdGlvbkxpbmsS4gIKDHVybF90ZW1wbGF0ZRgBIAEoCULGApJBuAIywQEiT3B0aW9uYWxseSBzZXQgYSB1cmxfdGVtcGxhdGUsIHdoaWNoIHdpbGwgYmUgdXNlZCBpbiB0aGUgbWFpbCBzZW50IGJ5IFpJVEFERUwgdG8gZ3VpZGUgdGhlIHVzZXIgdG8geW91ciBwYXNza2V5IHJlZ2lzdHJhdGlvbiBwYWdlLiBJZiBubyB0ZW1wbGF0ZSBpcyBzZXQsIHRoZSBkZWZhdWx0IFpJVEFERUwgdXJsIHdpbGwgYmUgdXNlZC4iSmwiaHR0cHM6Ly9leGFtcGxlLmNvbS9wYXNza2V5L3JlZ2lzdGVyP3VzZXJJRD17ey5Vc2VySUR9fSZvcmdJRD17ey5PcmdJRH19JmNvZGVJRD17ey5Db2RlSUR9fSZjb2RlPXt7LkNvZGV9fSJ4yAGAAQH6QgdyBRABGMgBSACIAQFCDwoNX3VybF90ZW1wbGF0ZSIfCh1SZXR1cm5QYXNza2V5UmVnaXN0cmF0aW9uQ29kZSLwAQoXUGFzc2tleVJlZ2lzdHJhdGlvbkNvZGUSeAoCaWQYASABKAlCbJJBWzIuImlkIHRvIHRoZSBvbmUgdGltZSBjb2RlIGdlbmVyYXRlZCBieSBaSVRBREVMIkomImUyYTQ4ZDZhLTM2MmItNGRiNi1hMWZiLTM0ZmVhYjg0ZGM2MiJ4yAHiQQEC+kIHcgUQARjIARJbCgRjb2RlGAIgASgJQk2SQTwyJCJvbmUgdGltZSBjb2RlIGdlbmVyYXRlZCBieSBaSVRBREVMIkoRIlNvbWVTcGVjaWFsQ29kZSJ4yAHiQQEC+kIHcgUQARjIASqLAQoUUGFzc2tleUF1dGhlbnRpY2F0b3ISJQohUEFTU0tFWV9BVVRIRU5USUNBVE9SX1VOU1BFQ0lGSUVEEAASIgoeUEFTU0tFWV9BVVRIRU5USUNBVE9SX1BMQVRGT1JNEAESKAokUEFTU0tFWV9BVVRIRU5USUNBVE9SX0NST1NTX1BMQVRGT1JNEAJCMlowZ2l0aHViLmNvbS96aXRhZGVsL3ppdGFkZWwvcGtnL2dycGMvdXNlci92Mjt1c2VyYgZwcm90bzM", [field_behavior_pb_1.file_google_api_field_behavior, annotations_pb_1.file_protoc_gen_openapiv2_options_annotations, validate_pb_1.file_validate_validate]);
exports.SendPasskeyRegistrationLinkSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_auth, 0);
exports.ReturnPasskeyRegistrationCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_auth, 1);
exports.PasskeyRegistrationCodeSchema = (0, codegenv1_1.messageDesc)(exports.file_zitadel_user_v2_auth, 2);
var PasskeyAuthenticator;
(function (PasskeyAuthenticator) {
    PasskeyAuthenticator[PasskeyAuthenticator["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    PasskeyAuthenticator[PasskeyAuthenticator["PLATFORM"] = 1] = "PLATFORM";
    PasskeyAuthenticator[PasskeyAuthenticator["CROSS_PLATFORM"] = 2] = "CROSS_PLATFORM";
})(PasskeyAuthenticator = exports.PasskeyAuthenticator || (exports.PasskeyAuthenticator = {}));
exports.PasskeyAuthenticatorSchema = (0, codegenv1_1.enumDesc)(exports.file_zitadel_user_v2_auth, 0);
//# sourceMappingURL=auth_pb.js.map