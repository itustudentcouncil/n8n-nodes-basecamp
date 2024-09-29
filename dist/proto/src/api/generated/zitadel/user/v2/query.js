"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationIdQuery = exports.InUserEmailsQuery = exports.TypeQuery = exports.StateQuery = exports.LoginNameQuery = exports.EmailQuery = exports.DisplayNameQuery = exports.NickNameQuery = exports.LastNameQuery = exports.FirstNameQuery = exports.UserNameQuery = exports.InUserIDQuery = exports.NotQuery = exports.AndQuery = exports.OrQuery = exports.SearchQuery = exports.userFieldNameToJSON = exports.userFieldNameFromJSON = exports.UserFieldName = exports.typeToJSON = exports.typeFromJSON = exports.Type = exports.protobufPackage = void 0;
const wire_1 = require("@bufbuild/protobuf/wire");
const object_js_1 = require("../../object/v2/object.js");
const user_js_1 = require("./user.js");
exports.protobufPackage = "zitadel.user.v2";
var Type;
(function (Type) {
    Type[Type["TYPE_UNSPECIFIED"] = 0] = "TYPE_UNSPECIFIED";
    Type[Type["TYPE_HUMAN"] = 1] = "TYPE_HUMAN";
    Type[Type["TYPE_MACHINE"] = 2] = "TYPE_MACHINE";
    Type[Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Type = exports.Type || (exports.Type = {}));
function typeFromJSON(object) {
    switch (object) {
        case 0:
        case "TYPE_UNSPECIFIED":
            return Type.TYPE_UNSPECIFIED;
        case 1:
        case "TYPE_HUMAN":
            return Type.TYPE_HUMAN;
        case 2:
        case "TYPE_MACHINE":
            return Type.TYPE_MACHINE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Type.UNRECOGNIZED;
    }
}
exports.typeFromJSON = typeFromJSON;
function typeToJSON(object) {
    switch (object) {
        case Type.TYPE_UNSPECIFIED:
            return "TYPE_UNSPECIFIED";
        case Type.TYPE_HUMAN:
            return "TYPE_HUMAN";
        case Type.TYPE_MACHINE:
            return "TYPE_MACHINE";
        case Type.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.typeToJSON = typeToJSON;
var UserFieldName;
(function (UserFieldName) {
    UserFieldName[UserFieldName["USER_FIELD_NAME_UNSPECIFIED"] = 0] = "USER_FIELD_NAME_UNSPECIFIED";
    UserFieldName[UserFieldName["USER_FIELD_NAME_USER_NAME"] = 1] = "USER_FIELD_NAME_USER_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_FIRST_NAME"] = 2] = "USER_FIELD_NAME_FIRST_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_LAST_NAME"] = 3] = "USER_FIELD_NAME_LAST_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_NICK_NAME"] = 4] = "USER_FIELD_NAME_NICK_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_DISPLAY_NAME"] = 5] = "USER_FIELD_NAME_DISPLAY_NAME";
    UserFieldName[UserFieldName["USER_FIELD_NAME_EMAIL"] = 6] = "USER_FIELD_NAME_EMAIL";
    UserFieldName[UserFieldName["USER_FIELD_NAME_STATE"] = 7] = "USER_FIELD_NAME_STATE";
    UserFieldName[UserFieldName["USER_FIELD_NAME_TYPE"] = 8] = "USER_FIELD_NAME_TYPE";
    UserFieldName[UserFieldName["USER_FIELD_NAME_CREATION_DATE"] = 9] = "USER_FIELD_NAME_CREATION_DATE";
    UserFieldName[UserFieldName["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserFieldName = exports.UserFieldName || (exports.UserFieldName = {}));
function userFieldNameFromJSON(object) {
    switch (object) {
        case 0:
        case "USER_FIELD_NAME_UNSPECIFIED":
            return UserFieldName.USER_FIELD_NAME_UNSPECIFIED;
        case 1:
        case "USER_FIELD_NAME_USER_NAME":
            return UserFieldName.USER_FIELD_NAME_USER_NAME;
        case 2:
        case "USER_FIELD_NAME_FIRST_NAME":
            return UserFieldName.USER_FIELD_NAME_FIRST_NAME;
        case 3:
        case "USER_FIELD_NAME_LAST_NAME":
            return UserFieldName.USER_FIELD_NAME_LAST_NAME;
        case 4:
        case "USER_FIELD_NAME_NICK_NAME":
            return UserFieldName.USER_FIELD_NAME_NICK_NAME;
        case 5:
        case "USER_FIELD_NAME_DISPLAY_NAME":
            return UserFieldName.USER_FIELD_NAME_DISPLAY_NAME;
        case 6:
        case "USER_FIELD_NAME_EMAIL":
            return UserFieldName.USER_FIELD_NAME_EMAIL;
        case 7:
        case "USER_FIELD_NAME_STATE":
            return UserFieldName.USER_FIELD_NAME_STATE;
        case 8:
        case "USER_FIELD_NAME_TYPE":
            return UserFieldName.USER_FIELD_NAME_TYPE;
        case 9:
        case "USER_FIELD_NAME_CREATION_DATE":
            return UserFieldName.USER_FIELD_NAME_CREATION_DATE;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserFieldName.UNRECOGNIZED;
    }
}
exports.userFieldNameFromJSON = userFieldNameFromJSON;
function userFieldNameToJSON(object) {
    switch (object) {
        case UserFieldName.USER_FIELD_NAME_UNSPECIFIED:
            return "USER_FIELD_NAME_UNSPECIFIED";
        case UserFieldName.USER_FIELD_NAME_USER_NAME:
            return "USER_FIELD_NAME_USER_NAME";
        case UserFieldName.USER_FIELD_NAME_FIRST_NAME:
            return "USER_FIELD_NAME_FIRST_NAME";
        case UserFieldName.USER_FIELD_NAME_LAST_NAME:
            return "USER_FIELD_NAME_LAST_NAME";
        case UserFieldName.USER_FIELD_NAME_NICK_NAME:
            return "USER_FIELD_NAME_NICK_NAME";
        case UserFieldName.USER_FIELD_NAME_DISPLAY_NAME:
            return "USER_FIELD_NAME_DISPLAY_NAME";
        case UserFieldName.USER_FIELD_NAME_EMAIL:
            return "USER_FIELD_NAME_EMAIL";
        case UserFieldName.USER_FIELD_NAME_STATE:
            return "USER_FIELD_NAME_STATE";
        case UserFieldName.USER_FIELD_NAME_TYPE:
            return "USER_FIELD_NAME_TYPE";
        case UserFieldName.USER_FIELD_NAME_CREATION_DATE:
            return "USER_FIELD_NAME_CREATION_DATE";
        case UserFieldName.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.userFieldNameToJSON = userFieldNameToJSON;
function createBaseSearchQuery() {
    return {
        userNameQuery: undefined,
        firstNameQuery: undefined,
        lastNameQuery: undefined,
        nickNameQuery: undefined,
        displayNameQuery: undefined,
        emailQuery: undefined,
        stateQuery: undefined,
        typeQuery: undefined,
        loginNameQuery: undefined,
        inUserIdsQuery: undefined,
        orQuery: undefined,
        andQuery: undefined,
        notQuery: undefined,
        inUserEmailsQuery: undefined,
        organizationIdQuery: undefined,
    };
}
exports.SearchQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userNameQuery !== undefined) {
            exports.UserNameQuery.encode(message.userNameQuery, writer.uint32(10).fork()).join();
        }
        if (message.firstNameQuery !== undefined) {
            exports.FirstNameQuery.encode(message.firstNameQuery, writer.uint32(18).fork()).join();
        }
        if (message.lastNameQuery !== undefined) {
            exports.LastNameQuery.encode(message.lastNameQuery, writer.uint32(26).fork()).join();
        }
        if (message.nickNameQuery !== undefined) {
            exports.NickNameQuery.encode(message.nickNameQuery, writer.uint32(34).fork()).join();
        }
        if (message.displayNameQuery !== undefined) {
            exports.DisplayNameQuery.encode(message.displayNameQuery, writer.uint32(42).fork()).join();
        }
        if (message.emailQuery !== undefined) {
            exports.EmailQuery.encode(message.emailQuery, writer.uint32(50).fork()).join();
        }
        if (message.stateQuery !== undefined) {
            exports.StateQuery.encode(message.stateQuery, writer.uint32(58).fork()).join();
        }
        if (message.typeQuery !== undefined) {
            exports.TypeQuery.encode(message.typeQuery, writer.uint32(66).fork()).join();
        }
        if (message.loginNameQuery !== undefined) {
            exports.LoginNameQuery.encode(message.loginNameQuery, writer.uint32(74).fork()).join();
        }
        if (message.inUserIdsQuery !== undefined) {
            exports.InUserIDQuery.encode(message.inUserIdsQuery, writer.uint32(82).fork()).join();
        }
        if (message.orQuery !== undefined) {
            exports.OrQuery.encode(message.orQuery, writer.uint32(90).fork()).join();
        }
        if (message.andQuery !== undefined) {
            exports.AndQuery.encode(message.andQuery, writer.uint32(98).fork()).join();
        }
        if (message.notQuery !== undefined) {
            exports.NotQuery.encode(message.notQuery, writer.uint32(106).fork()).join();
        }
        if (message.inUserEmailsQuery !== undefined) {
            exports.InUserEmailsQuery.encode(message.inUserEmailsQuery, writer.uint32(114).fork()).join();
        }
        if (message.organizationIdQuery !== undefined) {
            exports.OrganizationIdQuery.encode(message.organizationIdQuery, writer.uint32(122).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseSearchQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userNameQuery = exports.UserNameQuery.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.firstNameQuery = exports.FirstNameQuery.decode(reader, reader.uint32());
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.lastNameQuery = exports.LastNameQuery.decode(reader, reader.uint32());
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.nickNameQuery = exports.NickNameQuery.decode(reader, reader.uint32());
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.displayNameQuery = exports.DisplayNameQuery.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.emailQuery = exports.EmailQuery.decode(reader, reader.uint32());
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.stateQuery = exports.StateQuery.decode(reader, reader.uint32());
                    continue;
                case 8:
                    if (tag !== 66) {
                        break;
                    }
                    message.typeQuery = exports.TypeQuery.decode(reader, reader.uint32());
                    continue;
                case 9:
                    if (tag !== 74) {
                        break;
                    }
                    message.loginNameQuery = exports.LoginNameQuery.decode(reader, reader.uint32());
                    continue;
                case 10:
                    if (tag !== 82) {
                        break;
                    }
                    message.inUserIdsQuery = exports.InUserIDQuery.decode(reader, reader.uint32());
                    continue;
                case 11:
                    if (tag !== 90) {
                        break;
                    }
                    message.orQuery = exports.OrQuery.decode(reader, reader.uint32());
                    continue;
                case 12:
                    if (tag !== 98) {
                        break;
                    }
                    message.andQuery = exports.AndQuery.decode(reader, reader.uint32());
                    continue;
                case 13:
                    if (tag !== 106) {
                        break;
                    }
                    message.notQuery = exports.NotQuery.decode(reader, reader.uint32());
                    continue;
                case 14:
                    if (tag !== 114) {
                        break;
                    }
                    message.inUserEmailsQuery = exports.InUserEmailsQuery.decode(reader, reader.uint32());
                    continue;
                case 15:
                    if (tag !== 122) {
                        break;
                    }
                    message.organizationIdQuery = exports.OrganizationIdQuery.decode(reader, reader.uint32());
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
            userNameQuery: isSet(object.userNameQuery) ? exports.UserNameQuery.fromJSON(object.userNameQuery) : undefined,
            firstNameQuery: isSet(object.firstNameQuery) ? exports.FirstNameQuery.fromJSON(object.firstNameQuery) : undefined,
            lastNameQuery: isSet(object.lastNameQuery) ? exports.LastNameQuery.fromJSON(object.lastNameQuery) : undefined,
            nickNameQuery: isSet(object.nickNameQuery) ? exports.NickNameQuery.fromJSON(object.nickNameQuery) : undefined,
            displayNameQuery: isSet(object.displayNameQuery) ? exports.DisplayNameQuery.fromJSON(object.displayNameQuery) : undefined,
            emailQuery: isSet(object.emailQuery) ? exports.EmailQuery.fromJSON(object.emailQuery) : undefined,
            stateQuery: isSet(object.stateQuery) ? exports.StateQuery.fromJSON(object.stateQuery) : undefined,
            typeQuery: isSet(object.typeQuery) ? exports.TypeQuery.fromJSON(object.typeQuery) : undefined,
            loginNameQuery: isSet(object.loginNameQuery) ? exports.LoginNameQuery.fromJSON(object.loginNameQuery) : undefined,
            inUserIdsQuery: isSet(object.inUserIdsQuery) ? exports.InUserIDQuery.fromJSON(object.inUserIdsQuery) : undefined,
            orQuery: isSet(object.orQuery) ? exports.OrQuery.fromJSON(object.orQuery) : undefined,
            andQuery: isSet(object.andQuery) ? exports.AndQuery.fromJSON(object.andQuery) : undefined,
            notQuery: isSet(object.notQuery) ? exports.NotQuery.fromJSON(object.notQuery) : undefined,
            inUserEmailsQuery: isSet(object.inUserEmailsQuery)
                ? exports.InUserEmailsQuery.fromJSON(object.inUserEmailsQuery)
                : undefined,
            organizationIdQuery: isSet(object.organizationIdQuery)
                ? exports.OrganizationIdQuery.fromJSON(object.organizationIdQuery)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userNameQuery !== undefined) {
            obj.userNameQuery = exports.UserNameQuery.toJSON(message.userNameQuery);
        }
        if (message.firstNameQuery !== undefined) {
            obj.firstNameQuery = exports.FirstNameQuery.toJSON(message.firstNameQuery);
        }
        if (message.lastNameQuery !== undefined) {
            obj.lastNameQuery = exports.LastNameQuery.toJSON(message.lastNameQuery);
        }
        if (message.nickNameQuery !== undefined) {
            obj.nickNameQuery = exports.NickNameQuery.toJSON(message.nickNameQuery);
        }
        if (message.displayNameQuery !== undefined) {
            obj.displayNameQuery = exports.DisplayNameQuery.toJSON(message.displayNameQuery);
        }
        if (message.emailQuery !== undefined) {
            obj.emailQuery = exports.EmailQuery.toJSON(message.emailQuery);
        }
        if (message.stateQuery !== undefined) {
            obj.stateQuery = exports.StateQuery.toJSON(message.stateQuery);
        }
        if (message.typeQuery !== undefined) {
            obj.typeQuery = exports.TypeQuery.toJSON(message.typeQuery);
        }
        if (message.loginNameQuery !== undefined) {
            obj.loginNameQuery = exports.LoginNameQuery.toJSON(message.loginNameQuery);
        }
        if (message.inUserIdsQuery !== undefined) {
            obj.inUserIdsQuery = exports.InUserIDQuery.toJSON(message.inUserIdsQuery);
        }
        if (message.orQuery !== undefined) {
            obj.orQuery = exports.OrQuery.toJSON(message.orQuery);
        }
        if (message.andQuery !== undefined) {
            obj.andQuery = exports.AndQuery.toJSON(message.andQuery);
        }
        if (message.notQuery !== undefined) {
            obj.notQuery = exports.NotQuery.toJSON(message.notQuery);
        }
        if (message.inUserEmailsQuery !== undefined) {
            obj.inUserEmailsQuery = exports.InUserEmailsQuery.toJSON(message.inUserEmailsQuery);
        }
        if (message.organizationIdQuery !== undefined) {
            obj.organizationIdQuery = exports.OrganizationIdQuery.toJSON(message.organizationIdQuery);
        }
        return obj;
    },
    create(base) {
        return exports.SearchQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseSearchQuery();
        message.userNameQuery = (object.userNameQuery !== undefined && object.userNameQuery !== null)
            ? exports.UserNameQuery.fromPartial(object.userNameQuery)
            : undefined;
        message.firstNameQuery = (object.firstNameQuery !== undefined && object.firstNameQuery !== null)
            ? exports.FirstNameQuery.fromPartial(object.firstNameQuery)
            : undefined;
        message.lastNameQuery = (object.lastNameQuery !== undefined && object.lastNameQuery !== null)
            ? exports.LastNameQuery.fromPartial(object.lastNameQuery)
            : undefined;
        message.nickNameQuery = (object.nickNameQuery !== undefined && object.nickNameQuery !== null)
            ? exports.NickNameQuery.fromPartial(object.nickNameQuery)
            : undefined;
        message.displayNameQuery = (object.displayNameQuery !== undefined && object.displayNameQuery !== null)
            ? exports.DisplayNameQuery.fromPartial(object.displayNameQuery)
            : undefined;
        message.emailQuery = (object.emailQuery !== undefined && object.emailQuery !== null)
            ? exports.EmailQuery.fromPartial(object.emailQuery)
            : undefined;
        message.stateQuery = (object.stateQuery !== undefined && object.stateQuery !== null)
            ? exports.StateQuery.fromPartial(object.stateQuery)
            : undefined;
        message.typeQuery = (object.typeQuery !== undefined && object.typeQuery !== null)
            ? exports.TypeQuery.fromPartial(object.typeQuery)
            : undefined;
        message.loginNameQuery = (object.loginNameQuery !== undefined && object.loginNameQuery !== null)
            ? exports.LoginNameQuery.fromPartial(object.loginNameQuery)
            : undefined;
        message.inUserIdsQuery = (object.inUserIdsQuery !== undefined && object.inUserIdsQuery !== null)
            ? exports.InUserIDQuery.fromPartial(object.inUserIdsQuery)
            : undefined;
        message.orQuery = (object.orQuery !== undefined && object.orQuery !== null)
            ? exports.OrQuery.fromPartial(object.orQuery)
            : undefined;
        message.andQuery = (object.andQuery !== undefined && object.andQuery !== null)
            ? exports.AndQuery.fromPartial(object.andQuery)
            : undefined;
        message.notQuery = (object.notQuery !== undefined && object.notQuery !== null)
            ? exports.NotQuery.fromPartial(object.notQuery)
            : undefined;
        message.inUserEmailsQuery = (object.inUserEmailsQuery !== undefined && object.inUserEmailsQuery !== null)
            ? exports.InUserEmailsQuery.fromPartial(object.inUserEmailsQuery)
            : undefined;
        message.organizationIdQuery = (object.organizationIdQuery !== undefined && object.organizationIdQuery !== null)
            ? exports.OrganizationIdQuery.fromPartial(object.organizationIdQuery)
            : undefined;
        return message;
    },
};
function createBaseOrQuery() {
    return { queries: [] };
}
exports.OrQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.queries) {
            exports.SearchQuery.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.queries.push(exports.SearchQuery.decode(reader, reader.uint32()));
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
            queries: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.queries) ? object.queries.map((e) => exports.SearchQuery.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.queries) === null || _a === void 0 ? void 0 : _a.length) {
            obj.queries = message.queries.map((e) => exports.SearchQuery.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.OrQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrQuery();
        message.queries = ((_a = object.queries) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SearchQuery.fromPartial(e))) || [];
        return message;
    },
};
function createBaseAndQuery() {
    return { queries: [] };
}
exports.AndQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.queries) {
            exports.SearchQuery.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAndQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.queries.push(exports.SearchQuery.decode(reader, reader.uint32()));
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
            queries: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.queries) ? object.queries.map((e) => exports.SearchQuery.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.queries) === null || _a === void 0 ? void 0 : _a.length) {
            obj.queries = message.queries.map((e) => exports.SearchQuery.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.AndQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAndQuery();
        message.queries = ((_a = object.queries) === null || _a === void 0 ? void 0 : _a.map((e) => exports.SearchQuery.fromPartial(e))) || [];
        return message;
    },
};
function createBaseNotQuery() {
    return { query: undefined };
}
exports.NotQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.query !== undefined) {
            exports.SearchQuery.encode(message.query, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNotQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.query = exports.SearchQuery.decode(reader, reader.uint32());
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
        return { query: isSet(object.query) ? exports.SearchQuery.fromJSON(object.query) : undefined };
    },
    toJSON(message) {
        const obj = {};
        if (message.query !== undefined) {
            obj.query = exports.SearchQuery.toJSON(message.query);
        }
        return obj;
    },
    create(base) {
        return exports.NotQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseNotQuery();
        message.query = (object.query !== undefined && object.query !== null)
            ? exports.SearchQuery.fromPartial(object.query)
            : undefined;
        return message;
    },
};
function createBaseInUserIDQuery() {
    return { userIds: [] };
}
exports.InUserIDQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.userIds) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInUserIDQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userIds.push(reader.string());
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
            userIds: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.userIds) ? object.userIds.map((e) => globalThis.String(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.userIds) === null || _a === void 0 ? void 0 : _a.length) {
            obj.userIds = message.userIds;
        }
        return obj;
    },
    create(base) {
        return exports.InUserIDQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInUserIDQuery();
        message.userIds = ((_a = object.userIds) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseUserNameQuery() {
    return { userName: "", method: 0 };
}
exports.UserNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.userName !== "") {
            writer.uint32(10).string(message.userName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userName = reader.string();
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
            userName: isSet(object.userName) ? globalThis.String(object.userName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.userName !== "") {
            obj.userName = message.userName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.UserNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUserNameQuery();
        message.userName = (_a = object.userName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseFirstNameQuery() {
    return { firstName: "", method: 0 };
}
exports.FirstNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.firstName !== "") {
            writer.uint32(10).string(message.firstName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFirstNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.firstName = reader.string();
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
            firstName: isSet(object.firstName) ? globalThis.String(object.firstName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.firstName !== "") {
            obj.firstName = message.firstName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.FirstNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseFirstNameQuery();
        message.firstName = (_a = object.firstName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseLastNameQuery() {
    return { lastName: "", method: 0 };
}
exports.LastNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.lastName !== "") {
            writer.uint32(10).string(message.lastName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLastNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.lastName = reader.string();
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
            lastName: isSet(object.lastName) ? globalThis.String(object.lastName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.lastName !== "") {
            obj.lastName = message.lastName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.LastNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLastNameQuery();
        message.lastName = (_a = object.lastName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseNickNameQuery() {
    return { nickName: "", method: 0 };
}
exports.NickNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.nickName !== "") {
            writer.uint32(10).string(message.nickName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseNickNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nickName = reader.string();
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
            nickName: isSet(object.nickName) ? globalThis.String(object.nickName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.nickName !== "") {
            obj.nickName = message.nickName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.NickNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseNickNameQuery();
        message.nickName = (_a = object.nickName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseDisplayNameQuery() {
    return { displayName: "", method: 0 };
}
exports.DisplayNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.displayName !== "") {
            writer.uint32(10).string(message.displayName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDisplayNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.displayName = reader.string();
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
            displayName: isSet(object.displayName) ? globalThis.String(object.displayName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.displayName !== "") {
            obj.displayName = message.displayName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.DisplayNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDisplayNameQuery();
        message.displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseEmailQuery() {
    return { emailAddress: "", method: 0 };
}
exports.EmailQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.emailAddress !== "") {
            writer.uint32(10).string(message.emailAddress);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEmailQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.emailAddress = reader.string();
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
            emailAddress: isSet(object.emailAddress) ? globalThis.String(object.emailAddress) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.emailAddress !== "") {
            obj.emailAddress = message.emailAddress;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.EmailQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseEmailQuery();
        message.emailAddress = (_a = object.emailAddress) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseLoginNameQuery() {
    return { loginName: "", method: 0 };
}
exports.LoginNameQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.loginName !== "") {
            writer.uint32(10).string(message.loginName);
        }
        if (message.method !== 0) {
            writer.uint32(16).int32(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLoginNameQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.loginName = reader.string();
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
            loginName: isSet(object.loginName) ? globalThis.String(object.loginName) : "",
            method: isSet(object.method) ? (0, object_js_1.textQueryMethodFromJSON)(object.method) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.loginName !== "") {
            obj.loginName = message.loginName;
        }
        if (message.method !== 0) {
            obj.method = (0, object_js_1.textQueryMethodToJSON)(message.method);
        }
        return obj;
    },
    create(base) {
        return exports.LoginNameQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseLoginNameQuery();
        message.loginName = (_a = object.loginName) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : 0;
        return message;
    },
};
function createBaseStateQuery() {
    return { state: 0 };
}
exports.StateQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.state !== 0) {
            writer.uint32(8).int32(message.state);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStateQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.state = reader.int32();
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
        return { state: isSet(object.state) ? (0, user_js_1.userStateFromJSON)(object.state) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.state !== 0) {
            obj.state = (0, user_js_1.userStateToJSON)(message.state);
        }
        return obj;
    },
    create(base) {
        return exports.StateQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseStateQuery();
        message.state = (_a = object.state) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseTypeQuery() {
    return { type: 0 };
}
exports.TypeQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTypeQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.type = reader.int32();
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
        return { type: isSet(object.type) ? typeFromJSON(object.type) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.type !== 0) {
            obj.type = typeToJSON(message.type);
        }
        return obj;
    },
    create(base) {
        return exports.TypeQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseTypeQuery();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseInUserEmailsQuery() {
    return { userEmails: [] };
}
exports.InUserEmailsQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.userEmails) {
            writer.uint32(10).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseInUserEmailsQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userEmails.push(reader.string());
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
            userEmails: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.userEmails)
                ? object.userEmails.map((e) => globalThis.String(e))
                : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if ((_a = message.userEmails) === null || _a === void 0 ? void 0 : _a.length) {
            obj.userEmails = message.userEmails;
        }
        return obj;
    },
    create(base) {
        return exports.InUserEmailsQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseInUserEmailsQuery();
        message.userEmails = ((_a = object.userEmails) === null || _a === void 0 ? void 0 : _a.map((e) => e)) || [];
        return message;
    },
};
function createBaseOrganizationIdQuery() {
    return { organizationId: "" };
}
exports.OrganizationIdQuery = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.organizationId !== "") {
            writer.uint32(10).string(message.organizationId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseOrganizationIdQuery();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.organizationId = reader.string();
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
        return { organizationId: isSet(object.organizationId) ? globalThis.String(object.organizationId) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.organizationId !== "") {
            obj.organizationId = message.organizationId;
        }
        return obj;
    },
    create(base) {
        return exports.OrganizationIdQuery.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseOrganizationIdQuery();
        message.organizationId = (_a = object.organizationId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=query.js.map