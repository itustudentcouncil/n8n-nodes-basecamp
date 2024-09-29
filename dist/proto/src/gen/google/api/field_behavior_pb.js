"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.field_behavior = exports.FieldBehaviorSchema = exports.FieldBehavior = exports.file_google_api_field_behavior = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const wkt_1 = require("@bufbuild/protobuf/wkt");
exports.file_google_api_field_behavior = (0, codegenv1_1.fileDesc)("Ch9nb29nbGUvYXBpL2ZpZWxkX2JlaGF2aW9yLnByb3RvEgpnb29nbGUuYXBpKrYBCg1GaWVsZEJlaGF2aW9yEh4KGkZJRUxEX0JFSEFWSU9SX1VOU1BFQ0lGSUVEEAASDAoIT1BUSU9OQUwQARIMCghSRVFVSVJFRBACEg8KC09VVFBVVF9PTkxZEAMSDgoKSU5QVVRfT05MWRAEEg0KCUlNTVVUQUJMRRAFEhIKDlVOT1JERVJFRF9MSVNUEAYSFQoRTk9OX0VNUFRZX0RFRkFVTFQQBxIOCgpJREVOVElGSUVSEAg6ZAoOZmllbGRfYmVoYXZpb3ISHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGJwIIAMoDjIZLmdvb2dsZS5hcGkuRmllbGRCZWhhdmlvckICEABSDWZpZWxkQmVoYXZpb3JCcAoOY29tLmdvb2dsZS5hcGlCEkZpZWxkQmVoYXZpb3JQcm90b1ABWkFnb29nbGUuZ29sYW5nLm9yZy9nZW5wcm90by9nb29nbGVhcGlzL2FwaS9hbm5vdGF0aW9uczthbm5vdGF0aW9uc6ICBEdBUEliBnByb3RvMw", [wkt_1.file_google_protobuf_descriptor]);
var FieldBehavior;
(function (FieldBehavior) {
    FieldBehavior[FieldBehavior["FIELD_BEHAVIOR_UNSPECIFIED"] = 0] = "FIELD_BEHAVIOR_UNSPECIFIED";
    FieldBehavior[FieldBehavior["OPTIONAL"] = 1] = "OPTIONAL";
    FieldBehavior[FieldBehavior["REQUIRED"] = 2] = "REQUIRED";
    FieldBehavior[FieldBehavior["OUTPUT_ONLY"] = 3] = "OUTPUT_ONLY";
    FieldBehavior[FieldBehavior["INPUT_ONLY"] = 4] = "INPUT_ONLY";
    FieldBehavior[FieldBehavior["IMMUTABLE"] = 5] = "IMMUTABLE";
    FieldBehavior[FieldBehavior["UNORDERED_LIST"] = 6] = "UNORDERED_LIST";
    FieldBehavior[FieldBehavior["NON_EMPTY_DEFAULT"] = 7] = "NON_EMPTY_DEFAULT";
    FieldBehavior[FieldBehavior["IDENTIFIER"] = 8] = "IDENTIFIER";
})(FieldBehavior = exports.FieldBehavior || (exports.FieldBehavior = {}));
exports.FieldBehaviorSchema = (0, codegenv1_1.enumDesc)(exports.file_google_api_field_behavior, 0);
exports.field_behavior = (0, codegenv1_1.extDesc)(exports.file_google_api_field_behavior, 0);
//# sourceMappingURL=field_behavior_pb.js.map