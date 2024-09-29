import type { GenEnum, GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { FieldOptions, FileOptions, MessageOptions } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
export declare const file_google_api_resource: GenFile;
export type ResourceDescriptor = Message<"google.api.ResourceDescriptor"> & {
    type: string;
    pattern: string[];
    nameField: string;
    history: ResourceDescriptor_History;
    plural: string;
    singular: string;
    style: ResourceDescriptor_Style[];
};
export declare const ResourceDescriptorSchema: GenMessage<ResourceDescriptor>;
export declare enum ResourceDescriptor_History {
    HISTORY_UNSPECIFIED = 0,
    ORIGINALLY_SINGLE_PATTERN = 1,
    FUTURE_MULTI_PATTERN = 2
}
export declare const ResourceDescriptor_HistorySchema: GenEnum<ResourceDescriptor_History>;
export declare enum ResourceDescriptor_Style {
    STYLE_UNSPECIFIED = 0,
    DECLARATIVE_FRIENDLY = 1
}
export declare const ResourceDescriptor_StyleSchema: GenEnum<ResourceDescriptor_Style>;
export type ResourceReference = Message<"google.api.ResourceReference"> & {
    type: string;
    childType: string;
};
export declare const ResourceReferenceSchema: GenMessage<ResourceReference>;
export declare const resource_reference: GenExtension<FieldOptions, ResourceReference>;
export declare const resource_definition: GenExtension<FileOptions, ResourceDescriptor[]>;
export declare const resource: GenExtension<MessageOptions, ResourceDescriptor>;
