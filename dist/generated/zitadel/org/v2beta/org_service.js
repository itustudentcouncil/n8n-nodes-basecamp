"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationServiceDefinition = exports.AddOrganizationResponse_CreatedAdmin = exports.AddOrganizationResponse = exports.AddOrganizationRequest_Admin = exports.AddOrganizationRequest = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("../../object/v2beta/object.js");
const user_service_js_1 = require("../../user/v2beta/user_service.js");
exports.protobufPackage = "zitadel.org.v2beta";
function createBaseAddOrganizationRequest() {
    return { name: "", admins: [] };
}
exports.AddOrganizationRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        for (const v of message.admins) {
            exports.AddOrganizationRequest_Admin.encode(v, writer.uint32(18).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOrganizationRequest();
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
                    if (tag !== 18) {
                        break;
                    }
                    message.admins.push(exports.AddOrganizationRequest_Admin.decode(reader, reader.uint32()));
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
            admins: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.admins)
                ? object.admins.map((e) => exports.AddOrganizationRequest_Admin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if ((_a = message.admins) === null || _a === void 0 ? void 0 : _a.length) {
            obj.admins = message.admins.map((e) => exports.AddOrganizationRequest_Admin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.AddOrganizationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddOrganizationRequest();
        message.name = (_a = object.name) !== null && _a !== void 0 ? _a : "";
        message.admins = ((_b = object.admins) === null || _b === void 0 ? void 0 : _b.map((e) => exports.AddOrganizationRequest_Admin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAddOrganizationRequest_Admin() {
    return { userId: undefined, human: undefined, roles: [] };
}
exports.AddOrganizationRequest_Admin = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== undefined) {
            writer.uint32(10).string(message.userId);
        }
        if (message.human !== undefined) {
            user_service_js_1.AddHumanUserRequest.encode(message.human, writer.uint32(18).fork()).join();
        }
        for (const v of message.roles) {
            writer.uint32(26).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOrganizationRequest_Admin();
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
                    message.human = user_service_js_1.AddHumanUserRequest.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.roles.push(reader.string());
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
            userId: isSet(object.userId) ? globalThis.String(object.userId) : undefined,
            human: isSet(object.human) ? user_service_js_1.AddHumanUserRequest.fromJSON(object.human) : undefined,
            roles: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.roles) ? object.roles.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.userId !== undefined) {
            obj.userId = message.userId;
        }
        if (message.human !== undefined) {
            obj.human = user_service_js_1.AddHumanUserRequest.toJSON(message.human);
        }
        if ((_a = message.roles) === null || _a === void 0 ? void 0 : _a.length) {
            obj.roles = message.roles;
        }
        return obj;
    },
    create(base) {
        return exports.AddOrganizationRequest_Admin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddOrganizationRequest_Admin();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : undefined;
        message.human = (object.human !== undefined && object.human !== null)
            ? user_service_js_1.AddHumanUserRequest.fromPartial(object.human)
            : undefined;
        message.roles = ((_b = object.roles) === null || _b === void 0 ? void 0 : _b.map((e) => e)) || [];
        return message;
    },
};
function createBaseAddOrganizationResponse() {
    return { details: undefined, organizationId: "", createdAdmins: [] };
}
exports.AddOrganizationResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.details !== undefined) {
            object_js_1.Details.encode(message.details, writer.uint32(10).fork()).join();
        }
        if (message.organizationId !== "") {
            writer.uint32(18).string(message.organizationId);
        }
        for (const v of message.createdAdmins) {
            exports.AddOrganizationResponse_CreatedAdmin.encode(v, writer.uint32(26).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOrganizationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.details = object_js_1.Details.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.organizationId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.createdAdmins.push(exports.AddOrganizationResponse_CreatedAdmin.decode(reader, reader.uint32()));
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
            details: isSet(object.details) ? object_js_1.Details.fromJSON(object.details) : undefined,
            organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "",
            createdAdmins: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.createdAdmins)
                ? object.createdAdmins.map((e) => exports.AddOrganizationResponse_CreatedAdmin.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.details !== undefined) {
            obj.details = object_js_1.Details.toJSON(message.details);
        }
        if (message.organizationId !== "") {
            obj.organizationId = message.organizationId;
        }
        if ((_a = message.createdAdmins) === null || _a === void 0 ? void 0 : _a.length) {
            obj.createdAdmins = message.createdAdmins.map((e) => exports.AddOrganizationResponse_CreatedAdmin.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.AddOrganizationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAddOrganizationResponse();
        message.details = (object.details !== undefined && object.details !== null)
            ? object_js_1.Details.fromPartial(object.details)
            : undefined;
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        message.createdAdmins = ((_b = object.createdAdmins) === null || _b === void 0 ? void 0 : _b.map((e) => exports.AddOrganizationResponse_CreatedAdmin.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAddOrganizationResponse_CreatedAdmin() {
    return { userId: "", emailCode: undefined, phoneCode: undefined };
}
exports.AddOrganizationResponse_CreatedAdmin = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.emailCode !== undefined) {
            writer.uint32(18).string(message.emailCode);
        }
        if (message.phoneCode !== undefined) {
            writer.uint32(26).string(message.phoneCode);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddOrganizationResponse_CreatedAdmin();
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
                    message.emailCode = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.phoneCode = reader.string();
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
            emailCode: isSet(object.emailCode) ? globalThis.String(object.emailCode) : undefined,
            phoneCode: isSet(object.phoneCode) ? globalThis.String(object.phoneCode) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userId !== "") {
            obj.userId = message.userId;
        }
        if (message.emailCode !== undefined) {
            obj.emailCode = message.emailCode;
        }
        if (message.phoneCode !== undefined) {
            obj.phoneCode = message.phoneCode;
        }
        return obj;
    },
    create(base) {
        return exports.AddOrganizationResponse_CreatedAdmin.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAddOrganizationResponse_CreatedAdmin();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.emailCode = (_b = object.emailCode) !== null && _b !== void 0 ? _b : undefined;
        message.phoneCode = (_c = object.phoneCode) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
exports.OrganizationServiceDefinition = {
    name: "OrganizationService",
    fullName: "zitadel.org.v2beta.OrganizationService",
    methods: {
        addOrganization: {
            name: "AddOrganization",
            requestType: exports.AddOrganizationRequest,
            requestStream: false,
            responseType: exports.AddOrganizationResponse,
            responseStream: false,
            options: {
                _unknownFields: {
                    8338: [
                        Buffer.from([
                            180,
                            1,
                            18,
                            22,
                            67,
                            114,
                            101,
                            97,
                            116,
                            101,
                            32,
                            97,
                            110,
                            32,
                            79,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            26,
                            140,
                            1,
                            67,
                            114,
                            101,
                            97,
                            116,
                            101,
                            32,
                            97,
                            32,
                            110,
                            101,
                            119,
                            32,
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            32,
                            119,
                            105,
                            116,
                            104,
                            32,
                            97,
                            110,
                            32,
                            97,
                            100,
                            109,
                            105,
                            110,
                            105,
                            115,
                            116,
                            114,
                            97,
                            116,
                            105,
                            118,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            46,
                            32,
                            73,
                            102,
                            32,
                            110,
                            111,
                            32,
                            115,
                            112,
                            101,
                            99,
                            105,
                            102,
                            105,
                            99,
                            32,
                            114,
                            111,
                            108,
                            101,
                            115,
                            32,
                            97,
                            114,
                            101,
                            32,
                            115,
                            101,
                            110,
                            116,
                            32,
                            102,
                            111,
                            114,
                            32,
                            116,
                            104,
                            101,
                            32,
                            117,
                            115,
                            101,
                            114,
                            115,
                            44,
                            32,
                            116,
                            104,
                            101,
                            121,
                            32,
                            119,
                            105,
                            108,
                            108,
                            32,
                            98,
                            101,
                            32,
                            103,
                            114,
                            97,
                            110,
                            116,
                            101,
                            100,
                            32,
                            116,
                            104,
                            101,
                            32,
                            114,
                            111,
                            108,
                            101,
                            32,
                            79,
                            82,
                            71,
                            95,
                            79,
                            87,
                            78,
                            69,
                            82,
                            46,
                            74,
                            11,
                            10,
                            3,
                            50,
                            48,
                            48,
                            18,
                            4,
                            10,
                            2,
                            79,
                            75,
                        ]),
                    ],
                    400010: [Buffer.from([19, 10, 12, 10, 10, 111, 114, 103, 46, 99, 114, 101, 97, 116, 101, 18, 3, 8, 201, 1])],
                    578365826: [
                        Buffer.from([
                            26,
                            58,
                            1,
                            42,
                            34,
                            21,
                            47,
                            118,
                            50,
                            98,
                            101,
                            116,
                            97,
                            47,
                            111,
                            114,
                            103,
                            97,
                            110,
                            105,
                            122,
                            97,
                            116,
                            105,
                            111,
                            110,
                            115,
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
//# sourceMappingURL=org_service.js.map