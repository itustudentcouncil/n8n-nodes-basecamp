import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { UserState } from "./user_pb";
import type { TextQueryMethod } from "../../object/v2/object_pb";
import type { Message } from "@bufbuild/protobuf";
export declare const file_zitadel_user_v2_query: GenFile;
export type SearchQuery = Message<"zitadel.user.v2.SearchQuery"> & {
    query: {
        value: UserNameQuery;
        case: "userNameQuery";
    } | {
        value: FirstNameQuery;
        case: "firstNameQuery";
    } | {
        value: LastNameQuery;
        case: "lastNameQuery";
    } | {
        value: NickNameQuery;
        case: "nickNameQuery";
    } | {
        value: DisplayNameQuery;
        case: "displayNameQuery";
    } | {
        value: EmailQuery;
        case: "emailQuery";
    } | {
        value: StateQuery;
        case: "stateQuery";
    } | {
        value: TypeQuery;
        case: "typeQuery";
    } | {
        value: LoginNameQuery;
        case: "loginNameQuery";
    } | {
        value: InUserIDQuery;
        case: "inUserIdsQuery";
    } | {
        value: OrQuery;
        case: "orQuery";
    } | {
        value: AndQuery;
        case: "andQuery";
    } | {
        value: NotQuery;
        case: "notQuery";
    } | {
        value: InUserEmailsQuery;
        case: "inUserEmailsQuery";
    } | {
        value: OrganizationIdQuery;
        case: "organizationIdQuery";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const SearchQuerySchema: GenMessage<SearchQuery>;
export type OrQuery = Message<"zitadel.user.v2.OrQuery"> & {
    queries: SearchQuery[];
};
export declare const OrQuerySchema: GenMessage<OrQuery>;
export type AndQuery = Message<"zitadel.user.v2.AndQuery"> & {
    queries: SearchQuery[];
};
export declare const AndQuerySchema: GenMessage<AndQuery>;
export type NotQuery = Message<"zitadel.user.v2.NotQuery"> & {
    query?: SearchQuery;
};
export declare const NotQuerySchema: GenMessage<NotQuery>;
export type InUserIDQuery = Message<"zitadel.user.v2.InUserIDQuery"> & {
    userIds: string[];
};
export declare const InUserIDQuerySchema: GenMessage<InUserIDQuery>;
export type UserNameQuery = Message<"zitadel.user.v2.UserNameQuery"> & {
    userName: string;
    method: TextQueryMethod;
};
export declare const UserNameQuerySchema: GenMessage<UserNameQuery>;
export type FirstNameQuery = Message<"zitadel.user.v2.FirstNameQuery"> & {
    firstName: string;
    method: TextQueryMethod;
};
export declare const FirstNameQuerySchema: GenMessage<FirstNameQuery>;
export type LastNameQuery = Message<"zitadel.user.v2.LastNameQuery"> & {
    lastName: string;
    method: TextQueryMethod;
};
export declare const LastNameQuerySchema: GenMessage<LastNameQuery>;
export type NickNameQuery = Message<"zitadel.user.v2.NickNameQuery"> & {
    nickName: string;
    method: TextQueryMethod;
};
export declare const NickNameQuerySchema: GenMessage<NickNameQuery>;
export type DisplayNameQuery = Message<"zitadel.user.v2.DisplayNameQuery"> & {
    displayName: string;
    method: TextQueryMethod;
};
export declare const DisplayNameQuerySchema: GenMessage<DisplayNameQuery>;
export type EmailQuery = Message<"zitadel.user.v2.EmailQuery"> & {
    emailAddress: string;
    method: TextQueryMethod;
};
export declare const EmailQuerySchema: GenMessage<EmailQuery>;
export type LoginNameQuery = Message<"zitadel.user.v2.LoginNameQuery"> & {
    loginName: string;
    method: TextQueryMethod;
};
export declare const LoginNameQuerySchema: GenMessage<LoginNameQuery>;
export type StateQuery = Message<"zitadel.user.v2.StateQuery"> & {
    state: UserState;
};
export declare const StateQuerySchema: GenMessage<StateQuery>;
export type TypeQuery = Message<"zitadel.user.v2.TypeQuery"> & {
    type: Type;
};
export declare const TypeQuerySchema: GenMessage<TypeQuery>;
export type InUserEmailsQuery = Message<"zitadel.user.v2.InUserEmailsQuery"> & {
    userEmails: string[];
};
export declare const InUserEmailsQuerySchema: GenMessage<InUserEmailsQuery>;
export type OrganizationIdQuery = Message<"zitadel.user.v2.OrganizationIdQuery"> & {
    organizationId: string;
};
export declare const OrganizationIdQuerySchema: GenMessage<OrganizationIdQuery>;
export declare enum Type {
    UNSPECIFIED = 0,
    HUMAN = 1,
    MACHINE = 2
}
export declare const TypeSchema: GenEnum<Type>;
export declare enum UserFieldName {
    UNSPECIFIED = 0,
    USER_NAME = 1,
    FIRST_NAME = 2,
    LAST_NAME = 3,
    NICK_NAME = 4,
    DISPLAY_NAME = 5,
    EMAIL = 6,
    STATE = 7,
    TYPE = 8,
    CREATION_DATE = 9
}
export declare const UserFieldNameSchema: GenEnum<UserFieldName>;
