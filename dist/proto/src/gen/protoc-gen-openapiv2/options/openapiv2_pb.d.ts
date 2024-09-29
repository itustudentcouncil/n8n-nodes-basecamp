import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Value } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
export declare const file_protoc_gen_openapiv2_options_openapiv2: GenFile;
export type Swagger = Message<"grpc.gateway.protoc_gen_openapiv2.options.Swagger"> & {
    swagger: string;
    info?: Info;
    host: string;
    basePath: string;
    schemes: Scheme[];
    consumes: string[];
    produces: string[];
    responses: {
        [key: string]: Response;
    };
    securityDefinitions?: SecurityDefinitions;
    security: SecurityRequirement[];
    tags: Tag[];
    externalDocs?: ExternalDocumentation;
    extensions: {
        [key: string]: Value;
    };
};
export declare const SwaggerSchema: GenMessage<Swagger>;
export type Operation = Message<"grpc.gateway.protoc_gen_openapiv2.options.Operation"> & {
    tags: string[];
    summary: string;
    description: string;
    externalDocs?: ExternalDocumentation;
    operationId: string;
    consumes: string[];
    produces: string[];
    responses: {
        [key: string]: Response;
    };
    schemes: Scheme[];
    deprecated: boolean;
    security: SecurityRequirement[];
    extensions: {
        [key: string]: Value;
    };
    parameters?: Parameters;
};
export declare const OperationSchema: GenMessage<Operation>;
export type Parameters = Message<"grpc.gateway.protoc_gen_openapiv2.options.Parameters"> & {
    headers: HeaderParameter[];
};
export declare const ParametersSchema: GenMessage<Parameters>;
export type HeaderParameter = Message<"grpc.gateway.protoc_gen_openapiv2.options.HeaderParameter"> & {
    name: string;
    description: string;
    type: HeaderParameter_Type;
    format: string;
    required: boolean;
};
export declare const HeaderParameterSchema: GenMessage<HeaderParameter>;
export declare enum HeaderParameter_Type {
    UNKNOWN = 0,
    STRING = 1,
    NUMBER = 2,
    INTEGER = 3,
    BOOLEAN = 4
}
export declare const HeaderParameter_TypeSchema: GenEnum<HeaderParameter_Type>;
export type Header = Message<"grpc.gateway.protoc_gen_openapiv2.options.Header"> & {
    description: string;
    type: string;
    format: string;
    default: string;
    pattern: string;
};
export declare const HeaderSchema: GenMessage<Header>;
export type Response = Message<"grpc.gateway.protoc_gen_openapiv2.options.Response"> & {
    description: string;
    schema?: Schema;
    headers: {
        [key: string]: Header;
    };
    examples: {
        [key: string]: string;
    };
    extensions: {
        [key: string]: Value;
    };
};
export declare const ResponseSchema: GenMessage<Response>;
export type Info = Message<"grpc.gateway.protoc_gen_openapiv2.options.Info"> & {
    title: string;
    description: string;
    termsOfService: string;
    contact?: Contact;
    license?: License;
    version: string;
    extensions: {
        [key: string]: Value;
    };
};
export declare const InfoSchema: GenMessage<Info>;
export type Contact = Message<"grpc.gateway.protoc_gen_openapiv2.options.Contact"> & {
    name: string;
    url: string;
    email: string;
};
export declare const ContactSchema: GenMessage<Contact>;
export type License = Message<"grpc.gateway.protoc_gen_openapiv2.options.License"> & {
    name: string;
    url: string;
};
export declare const LicenseSchema: GenMessage<License>;
export type ExternalDocumentation = Message<"grpc.gateway.protoc_gen_openapiv2.options.ExternalDocumentation"> & {
    description: string;
    url: string;
};
export declare const ExternalDocumentationSchema: GenMessage<ExternalDocumentation>;
export type Schema = Message<"grpc.gateway.protoc_gen_openapiv2.options.Schema"> & {
    jsonSchema?: JSONSchema;
    discriminator: string;
    readOnly: boolean;
    externalDocs?: ExternalDocumentation;
    example: string;
};
export declare const SchemaSchema: GenMessage<Schema>;
export type JSONSchema = Message<"grpc.gateway.protoc_gen_openapiv2.options.JSONSchema"> & {
    ref: string;
    title: string;
    description: string;
    default: string;
    readOnly: boolean;
    example: string;
    multipleOf: number;
    maximum: number;
    exclusiveMaximum: boolean;
    minimum: number;
    exclusiveMinimum: boolean;
    maxLength: bigint;
    minLength: bigint;
    pattern: string;
    maxItems: bigint;
    minItems: bigint;
    uniqueItems: boolean;
    maxProperties: bigint;
    minProperties: bigint;
    required: string[];
    array: string[];
    type: JSONSchema_JSONSchemaSimpleTypes[];
    format: string;
    enum: string[];
    fieldConfiguration?: JSONSchema_FieldConfiguration;
    extensions: {
        [key: string]: Value;
    };
};
export declare const JSONSchemaSchema: GenMessage<JSONSchema>;
export type JSONSchema_FieldConfiguration = Message<"grpc.gateway.protoc_gen_openapiv2.options.JSONSchema.FieldConfiguration"> & {
    pathParamName: string;
};
export declare const JSONSchema_FieldConfigurationSchema: GenMessage<JSONSchema_FieldConfiguration>;
export declare enum JSONSchema_JSONSchemaSimpleTypes {
    UNKNOWN = 0,
    ARRAY = 1,
    BOOLEAN = 2,
    INTEGER = 3,
    NULL = 4,
    NUMBER = 5,
    OBJECT = 6,
    STRING = 7
}
export declare const JSONSchema_JSONSchemaSimpleTypesSchema: GenEnum<JSONSchema_JSONSchemaSimpleTypes>;
export type Tag = Message<"grpc.gateway.protoc_gen_openapiv2.options.Tag"> & {
    name: string;
    description: string;
    externalDocs?: ExternalDocumentation;
    extensions: {
        [key: string]: Value;
    };
};
export declare const TagSchema: GenMessage<Tag>;
export type SecurityDefinitions = Message<"grpc.gateway.protoc_gen_openapiv2.options.SecurityDefinitions"> & {
    security: {
        [key: string]: SecurityScheme;
    };
};
export declare const SecurityDefinitionsSchema: GenMessage<SecurityDefinitions>;
export type SecurityScheme = Message<"grpc.gateway.protoc_gen_openapiv2.options.SecurityScheme"> & {
    type: SecurityScheme_Type;
    description: string;
    name: string;
    in: SecurityScheme_In;
    flow: SecurityScheme_Flow;
    authorizationUrl: string;
    tokenUrl: string;
    scopes?: Scopes;
    extensions: {
        [key: string]: Value;
    };
};
export declare const SecuritySchemeSchema: GenMessage<SecurityScheme>;
export declare enum SecurityScheme_Type {
    INVALID = 0,
    BASIC = 1,
    API_KEY = 2,
    OAUTH2 = 3
}
export declare const SecurityScheme_TypeSchema: GenEnum<SecurityScheme_Type>;
export declare enum SecurityScheme_In {
    INVALID = 0,
    QUERY = 1,
    HEADER = 2
}
export declare const SecurityScheme_InSchema: GenEnum<SecurityScheme_In>;
export declare enum SecurityScheme_Flow {
    INVALID = 0,
    IMPLICIT = 1,
    PASSWORD = 2,
    APPLICATION = 3,
    ACCESS_CODE = 4
}
export declare const SecurityScheme_FlowSchema: GenEnum<SecurityScheme_Flow>;
export type SecurityRequirement = Message<"grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement"> & {
    securityRequirement: {
        [key: string]: SecurityRequirement_SecurityRequirementValue;
    };
};
export declare const SecurityRequirementSchema: GenMessage<SecurityRequirement>;
export type SecurityRequirement_SecurityRequirementValue = Message<"grpc.gateway.protoc_gen_openapiv2.options.SecurityRequirement.SecurityRequirementValue"> & {
    scope: string[];
};
export declare const SecurityRequirement_SecurityRequirementValueSchema: GenMessage<SecurityRequirement_SecurityRequirementValue>;
export type Scopes = Message<"grpc.gateway.protoc_gen_openapiv2.options.Scopes"> & {
    scope: {
        [key: string]: string;
    };
};
export declare const ScopesSchema: GenMessage<Scopes>;
export declare enum Scheme {
    UNKNOWN = 0,
    HTTP = 1,
    HTTPS = 2,
    WS = 3,
    WSS = 4
}
export declare const SchemeSchema: GenEnum<Scheme>;
