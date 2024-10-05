"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectServiceDefinition = exports.GetServiceAccountResponse = exports.GetServiceAccountRequest = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "google.cloud.bigquery.v2";
function createBaseGetServiceAccountRequest() {
    return { projectId: "" };
}
exports.GetServiceAccountRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetServiceAccountRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
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
        return { projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.projectId !== "") {
            obj.projectId = message.projectId;
        }
        return obj;
    },
    create(base) {
        return exports.GetServiceAccountRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetServiceAccountRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetServiceAccountResponse() {
    return { kind: "", email: "" };
}
exports.GetServiceAccountResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.kind !== "") {
            writer.uint32(10).string(message.kind);
        }
        if (message.email !== "") {
            writer.uint32(18).string(message.email);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetServiceAccountResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.kind = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.email = reader.string();
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
            kind: isSet(object.kind) ? globalThis.String(object.kind) : "",
            email: isSet(object.email) ? globalThis.String(object.email) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.kind !== "") {
            obj.kind = message.kind;
        }
        if (message.email !== "") {
            obj.email = message.email;
        }
        return obj;
    },
    create(base) {
        return exports.GetServiceAccountResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetServiceAccountResponse();
        message.kind = (_a = object.kind) !== null && _a !== void 0 ? _a : "";
        message.email = (_b = object.email) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
exports.ProjectServiceDefinition = {
    name: "ProjectService",
    fullName: "google.cloud.bigquery.v2.ProjectService",
    methods: {
        getServiceAccount: {
            name: "GetServiceAccount",
            requestType: exports.GetServiceAccountRequest,
            requestStream: false,
            responseType: exports.GetServiceAccountResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    578365826: [
                        Buffer.from([
                            53,
                            18,
                            51,
                            47,
                            98,
                            105,
                            103,
                            113,
                            117,
                            101,
                            114,
                            121,
                            47,
                            118,
                            50,
                            47,
                            112,
                            114,
                            111,
                            106,
                            101,
                            99,
                            116,
                            115,
                            47,
                            123,
                            112,
                            114,
                            111,
                            106,
                            101,
                            99,
                            116,
                            95,
                            105,
                            100,
                            61,
                            42,
                            125,
                            47,
                            115,
                            101,
                            114,
                            118,
                            105,
                            99,
                            101,
                            65,
                            99,
                            99,
                            111,
                            117,
                            110,
                            116,
                        ]),
                    ],
                },
            },
        },
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=project.js.map