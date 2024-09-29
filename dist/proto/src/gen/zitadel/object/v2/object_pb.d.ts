import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
export declare const file_zitadel_object_v2_object: GenFile;
export type Organisation = Message<"zitadel.object.v2.Organisation"> & {
    org: {
        value: string;
        case: "orgId";
    } | {
        value: string;
        case: "orgDomain";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const OrganisationSchema: GenMessage<Organisation>;
export type Organization = Message<"zitadel.object.v2.Organization"> & {
    org: {
        value: string;
        case: "orgId";
    } | {
        value: string;
        case: "orgDomain";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const OrganizationSchema: GenMessage<Organization>;
export type RequestContext = Message<"zitadel.object.v2.RequestContext"> & {
    resourceOwner: {
        value: string;
        case: "orgId";
    } | {
        value: boolean;
        case: "instance";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const RequestContextSchema: GenMessage<RequestContext>;
export type ListQuery = Message<"zitadel.object.v2.ListQuery"> & {
    offset: bigint;
    limit: number;
    asc: boolean;
};
export declare const ListQuerySchema: GenMessage<ListQuery>;
export type Details = Message<"zitadel.object.v2.Details"> & {
    sequence: bigint;
    changeDate?: Timestamp;
    resourceOwner: string;
};
export declare const DetailsSchema: GenMessage<Details>;
export type ListDetails = Message<"zitadel.object.v2.ListDetails"> & {
    totalResult: bigint;
    processedSequence: bigint;
    timestamp?: Timestamp;
};
export declare const ListDetailsSchema: GenMessage<ListDetails>;
export declare enum TextQueryMethod {
    EQUALS = 0,
    EQUALS_IGNORE_CASE = 1,
    STARTS_WITH = 2,
    STARTS_WITH_IGNORE_CASE = 3,
    CONTAINS = 4,
    CONTAINS_IGNORE_CASE = 5,
    ENDS_WITH = 6,
    ENDS_WITH_IGNORE_CASE = 7
}
export declare const TextQueryMethodSchema: GenEnum<TextQueryMethod>;
export declare enum ListQueryMethod {
    IN = 0
}
export declare const ListQueryMethodSchema: GenEnum<ListQueryMethod>;
export declare enum TimestampQueryMethod {
    EQUALS = 0,
    GREATER = 1,
    GREATER_OR_EQUALS = 2,
    LESS = 3,
    LESS_OR_EQUALS = 4
}
export declare const TimestampQueryMethodSchema: GenEnum<TimestampQueryMethod>;
