"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resource = exports.resource_definition = exports.resource_reference = exports.ResourceReferenceSchema = exports.ResourceDescriptor_StyleSchema = exports.ResourceDescriptor_Style = exports.ResourceDescriptor_HistorySchema = exports.ResourceDescriptor_History = exports.ResourceDescriptorSchema = exports.file_google_api_resource = void 0;
const codegenv1_1 = require("@bufbuild/protobuf/codegenv1");
const wkt_1 = require("@bufbuild/protobuf/wkt");
exports.file_google_api_resource = (0, codegenv1_1.fileDesc)("Chlnb29nbGUvYXBpL3Jlc291cmNlLnByb3RvEgpnb29nbGUuYXBpIu4CChJSZXNvdXJjZURlc2NyaXB0b3ISDAoEdHlwZRgBIAEoCRIPCgdwYXR0ZXJuGAIgAygJEhIKCm5hbWVfZmllbGQYAyABKAkSNwoHaGlzdG9yeRgEIAEoDjImLmdvb2dsZS5hcGkuUmVzb3VyY2VEZXNjcmlwdG9yLkhpc3RvcnkSDgoGcGx1cmFsGAUgASgJEhAKCHNpbmd1bGFyGAYgASgJEjMKBXN0eWxlGAogAygOMiQuZ29vZ2xlLmFwaS5SZXNvdXJjZURlc2NyaXB0b3IuU3R5bGUiWwoHSGlzdG9yeRIXChNISVNUT1JZX1VOU1BFQ0lGSUVEEAASHQoZT1JJR0lOQUxMWV9TSU5HTEVfUEFUVEVSThABEhgKFEZVVFVSRV9NVUxUSV9QQVRURVJOEAIiOAoFU3R5bGUSFQoRU1RZTEVfVU5TUEVDSUZJRUQQABIYChRERUNMQVJBVElWRV9GUklFTkRMWRABIjUKEVJlc291cmNlUmVmZXJlbmNlEgwKBHR5cGUYASABKAkSEgoKY2hpbGRfdHlwZRgCIAEoCTpsChJyZXNvdXJjZV9yZWZlcmVuY2USHS5nb29nbGUucHJvdG9idWYuRmllbGRPcHRpb25zGJ8IIAEoCzIdLmdvb2dsZS5hcGkuUmVzb3VyY2VSZWZlcmVuY2VSEXJlc291cmNlUmVmZXJlbmNlOm4KE3Jlc291cmNlX2RlZmluaXRpb24SHC5nb29nbGUucHJvdG9idWYuRmlsZU9wdGlvbnMYnQggAygLMh4uZ29vZ2xlLmFwaS5SZXNvdXJjZURlc2NyaXB0b3JSEnJlc291cmNlRGVmaW5pdGlvbjpcCghyZXNvdXJjZRIfLmdvb2dsZS5wcm90b2J1Zi5NZXNzYWdlT3B0aW9ucxidCCABKAsyHi5nb29nbGUuYXBpLlJlc291cmNlRGVzY3JpcHRvclIIcmVzb3VyY2VCbgoOY29tLmdvb2dsZS5hcGlCDVJlc291cmNlUHJvdG9QAVpBZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcGkvYW5ub3RhdGlvbnM7YW5ub3RhdGlvbnP4AQGiAgRHQVBJYgZwcm90bzM", [wkt_1.file_google_protobuf_descriptor]);
exports.ResourceDescriptorSchema = (0, codegenv1_1.messageDesc)(exports.file_google_api_resource, 0);
var ResourceDescriptor_History;
(function (ResourceDescriptor_History) {
    ResourceDescriptor_History[ResourceDescriptor_History["HISTORY_UNSPECIFIED"] = 0] = "HISTORY_UNSPECIFIED";
    ResourceDescriptor_History[ResourceDescriptor_History["ORIGINALLY_SINGLE_PATTERN"] = 1] = "ORIGINALLY_SINGLE_PATTERN";
    ResourceDescriptor_History[ResourceDescriptor_History["FUTURE_MULTI_PATTERN"] = 2] = "FUTURE_MULTI_PATTERN";
})(ResourceDescriptor_History = exports.ResourceDescriptor_History || (exports.ResourceDescriptor_History = {}));
exports.ResourceDescriptor_HistorySchema = (0, codegenv1_1.enumDesc)(exports.file_google_api_resource, 0, 0);
var ResourceDescriptor_Style;
(function (ResourceDescriptor_Style) {
    ResourceDescriptor_Style[ResourceDescriptor_Style["STYLE_UNSPECIFIED"] = 0] = "STYLE_UNSPECIFIED";
    ResourceDescriptor_Style[ResourceDescriptor_Style["DECLARATIVE_FRIENDLY"] = 1] = "DECLARATIVE_FRIENDLY";
})(ResourceDescriptor_Style = exports.ResourceDescriptor_Style || (exports.ResourceDescriptor_Style = {}));
exports.ResourceDescriptor_StyleSchema = (0, codegenv1_1.enumDesc)(exports.file_google_api_resource, 0, 1);
exports.ResourceReferenceSchema = (0, codegenv1_1.messageDesc)(exports.file_google_api_resource, 1);
exports.resource_reference = (0, codegenv1_1.extDesc)(exports.file_google_api_resource, 0);
exports.resource_definition = (0, codegenv1_1.extDesc)(exports.file_google_api_resource, 1);
exports.resource = (0, codegenv1_1.extDesc)(exports.file_google_api_resource, 2);
//# sourceMappingURL=resource_pb.js.map