import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
export declare const file_google_api_http: GenFile;
export type Http = Message<"google.api.Http"> & {
    rules: HttpRule[];
    fullyDecodeReservedExpansion: boolean;
};
export declare const HttpSchema: GenMessage<Http>;
export type HttpRule = Message<"google.api.HttpRule"> & {
    selector: string;
    pattern: {
        value: string;
        case: "get";
    } | {
        value: string;
        case: "put";
    } | {
        value: string;
        case: "post";
    } | {
        value: string;
        case: "delete";
    } | {
        value: string;
        case: "patch";
    } | {
        value: CustomHttpPattern;
        case: "custom";
    } | {
        case: undefined;
        value?: undefined;
    };
    body: string;
    responseBody: string;
    additionalBindings: HttpRule[];
};
export declare const HttpRuleSchema: GenMessage<HttpRule>;
export type CustomHttpPattern = Message<"google.api.CustomHttpPattern"> & {
    kind: string;
    path: string;
};
export declare const CustomHttpPatternSchema: GenMessage<CustomHttpPattern>;
