import type { GenExtension, GenFile } from "@bufbuild/protobuf/codegenv1";
import type { FieldOptions, FileOptions, MessageOptions, MethodOptions, ServiceOptions } from "@bufbuild/protobuf/wkt";
import type { JSONSchema, Operation, Schema, Swagger, Tag } from "./openapiv2_pb";
export declare const file_protoc_gen_openapiv2_options_annotations: GenFile;
export declare const openapiv2_swagger: GenExtension<FileOptions, Swagger>;
export declare const openapiv2_operation: GenExtension<MethodOptions, Operation>;
export declare const openapiv2_schema: GenExtension<MessageOptions, Schema>;
export declare const openapiv2_tag: GenExtension<ServiceOptions, Tag>;
export declare const openapiv2_field: GenExtension<FieldOptions, JSONSchema>;
