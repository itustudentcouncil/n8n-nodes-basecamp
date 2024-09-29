import type { GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { MethodOptions } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
export declare const file_zitadel_protoc_gen_zitadel_v2_options: GenFile;
export type Options = Message<"zitadel.protoc_gen_zitadel.v2.Options"> & {
    authOption?: AuthOption;
    httpResponse?: CustomHTTPResponse;
};
export declare const OptionsSchema: GenMessage<Options>;
export type AuthOption = Message<"zitadel.protoc_gen_zitadel.v2.AuthOption"> & {
    permission: string;
    orgField: string;
};
export declare const AuthOptionSchema: GenMessage<AuthOption>;
export type CustomHTTPResponse = Message<"zitadel.protoc_gen_zitadel.v2.CustomHTTPResponse"> & {
    successCode: number;
};
export declare const CustomHTTPResponseSchema: GenMessage<CustomHTTPResponse>;
export declare const options: GenExtension<MethodOptions, Options>;
