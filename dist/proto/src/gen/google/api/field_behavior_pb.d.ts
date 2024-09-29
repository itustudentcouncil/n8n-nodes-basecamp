import type { GenEnum, GenExtension, GenFile } from "@bufbuild/protobuf/codegenv1";
import type { FieldOptions } from "@bufbuild/protobuf/wkt";
export declare const file_google_api_field_behavior: GenFile;
export declare enum FieldBehavior {
    FIELD_BEHAVIOR_UNSPECIFIED = 0,
    OPTIONAL = 1,
    REQUIRED = 2,
    OUTPUT_ONLY = 3,
    INPUT_ONLY = 4,
    IMMUTABLE = 5,
    UNORDERED_LIST = 6,
    NON_EMPTY_DEFAULT = 7,
    IDENTIFIER = 8
}
export declare const FieldBehaviorSchema: GenEnum<FieldBehavior>;
export declare const field_behavior: GenExtension<FieldOptions, FieldBehavior[]>;
