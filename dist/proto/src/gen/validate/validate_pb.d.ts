import type { GenEnum, GenExtension, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Duration, FieldOptions, MessageOptions, OneofOptions, Timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";
export declare const file_validate_validate: GenFile;
export type FieldRules = Message<"validate.FieldRules"> & {
    message?: MessageRules;
    type: {
        value: FloatRules;
        case: "float";
    } | {
        value: DoubleRules;
        case: "double";
    } | {
        value: Int32Rules;
        case: "int32";
    } | {
        value: Int64Rules;
        case: "int64";
    } | {
        value: UInt32Rules;
        case: "uint32";
    } | {
        value: UInt64Rules;
        case: "uint64";
    } | {
        value: SInt32Rules;
        case: "sint32";
    } | {
        value: SInt64Rules;
        case: "sint64";
    } | {
        value: Fixed32Rules;
        case: "fixed32";
    } | {
        value: Fixed64Rules;
        case: "fixed64";
    } | {
        value: SFixed32Rules;
        case: "sfixed32";
    } | {
        value: SFixed64Rules;
        case: "sfixed64";
    } | {
        value: BoolRules;
        case: "bool";
    } | {
        value: StringRules;
        case: "string";
    } | {
        value: BytesRules;
        case: "bytes";
    } | {
        value: EnumRules;
        case: "enum";
    } | {
        value: RepeatedRules;
        case: "repeated";
    } | {
        value: MapRules;
        case: "map";
    } | {
        value: AnyRules;
        case: "any";
    } | {
        value: DurationRules;
        case: "duration";
    } | {
        value: TimestampRules;
        case: "timestamp";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const FieldRulesSchema: GenMessage<FieldRules>;
export type FloatRules = Message<"validate.FloatRules"> & {
    const: number;
    lt: number;
    lte: number;
    gt: number;
    gte: number;
    in: number[];
    notIn: number[];
    ignoreEmpty: boolean;
};
export declare const FloatRulesSchema: GenMessage<FloatRules>;
export type DoubleRules = Message<"validate.DoubleRules"> & {
    const: number;
    lt: number;
    lte: number;
    gt: number;
    gte: number;
    in: number[];
    notIn: number[];
    ignoreEmpty: boolean;
};
export declare const DoubleRulesSchema: GenMessage<DoubleRules>;
export type Int32Rules = Message<"validate.Int32Rules"> & {
    const: number;
    lt: number;
    lte: number;
    gt: number;
    gte: number;
    in: number[];
    notIn: number[];
    ignoreEmpty: boolean;
};
export declare const Int32RulesSchema: GenMessage<Int32Rules>;
export type Int64Rules = Message<"validate.Int64Rules"> & {
    const: bigint;
    lt: bigint;
    lte: bigint;
    gt: bigint;
    gte: bigint;
    in: bigint[];
    notIn: bigint[];
    ignoreEmpty: boolean;
};
export declare const Int64RulesSchema: GenMessage<Int64Rules>;
export type UInt32Rules = Message<"validate.UInt32Rules"> & {
    const: number;
    lt: number;
    lte: number;
    gt: number;
    gte: number;
    in: number[];
    notIn: number[];
    ignoreEmpty: boolean;
};
export declare const UInt32RulesSchema: GenMessage<UInt32Rules>;
export type UInt64Rules = Message<"validate.UInt64Rules"> & {
    const: bigint;
    lt: bigint;
    lte: bigint;
    gt: bigint;
    gte: bigint;
    in: bigint[];
    notIn: bigint[];
    ignoreEmpty: boolean;
};
export declare const UInt64RulesSchema: GenMessage<UInt64Rules>;
export type SInt32Rules = Message<"validate.SInt32Rules"> & {
    const: number;
    lt: number;
    lte: number;
    gt: number;
    gte: number;
    in: number[];
    notIn: number[];
    ignoreEmpty: boolean;
};
export declare const SInt32RulesSchema: GenMessage<SInt32Rules>;
export type SInt64Rules = Message<"validate.SInt64Rules"> & {
    const: bigint;
    lt: bigint;
    lte: bigint;
    gt: bigint;
    gte: bigint;
    in: bigint[];
    notIn: bigint[];
    ignoreEmpty: boolean;
};
export declare const SInt64RulesSchema: GenMessage<SInt64Rules>;
export type Fixed32Rules = Message<"validate.Fixed32Rules"> & {
    const: number;
    lt: number;
    lte: number;
    gt: number;
    gte: number;
    in: number[];
    notIn: number[];
    ignoreEmpty: boolean;
};
export declare const Fixed32RulesSchema: GenMessage<Fixed32Rules>;
export type Fixed64Rules = Message<"validate.Fixed64Rules"> & {
    const: bigint;
    lt: bigint;
    lte: bigint;
    gt: bigint;
    gte: bigint;
    in: bigint[];
    notIn: bigint[];
    ignoreEmpty: boolean;
};
export declare const Fixed64RulesSchema: GenMessage<Fixed64Rules>;
export type SFixed32Rules = Message<"validate.SFixed32Rules"> & {
    const: number;
    lt: number;
    lte: number;
    gt: number;
    gte: number;
    in: number[];
    notIn: number[];
    ignoreEmpty: boolean;
};
export declare const SFixed32RulesSchema: GenMessage<SFixed32Rules>;
export type SFixed64Rules = Message<"validate.SFixed64Rules"> & {
    const: bigint;
    lt: bigint;
    lte: bigint;
    gt: bigint;
    gte: bigint;
    in: bigint[];
    notIn: bigint[];
    ignoreEmpty: boolean;
};
export declare const SFixed64RulesSchema: GenMessage<SFixed64Rules>;
export type BoolRules = Message<"validate.BoolRules"> & {
    const: boolean;
};
export declare const BoolRulesSchema: GenMessage<BoolRules>;
export type StringRules = Message<"validate.StringRules"> & {
    const: string;
    len: bigint;
    minLen: bigint;
    maxLen: bigint;
    lenBytes: bigint;
    minBytes: bigint;
    maxBytes: bigint;
    pattern: string;
    prefix: string;
    suffix: string;
    contains: string;
    notContains: string;
    in: string[];
    notIn: string[];
    wellKnown: {
        value: boolean;
        case: "email";
    } | {
        value: boolean;
        case: "hostname";
    } | {
        value: boolean;
        case: "ip";
    } | {
        value: boolean;
        case: "ipv4";
    } | {
        value: boolean;
        case: "ipv6";
    } | {
        value: boolean;
        case: "uri";
    } | {
        value: boolean;
        case: "uriRef";
    } | {
        value: boolean;
        case: "address";
    } | {
        value: boolean;
        case: "uuid";
    } | {
        value: KnownRegex;
        case: "wellKnownRegex";
    } | {
        case: undefined;
        value?: undefined;
    };
    strict: boolean;
    ignoreEmpty: boolean;
};
export declare const StringRulesSchema: GenMessage<StringRules>;
export type BytesRules = Message<"validate.BytesRules"> & {
    const: Uint8Array;
    len: bigint;
    minLen: bigint;
    maxLen: bigint;
    pattern: string;
    prefix: Uint8Array;
    suffix: Uint8Array;
    contains: Uint8Array;
    in: Uint8Array[];
    notIn: Uint8Array[];
    wellKnown: {
        value: boolean;
        case: "ip";
    } | {
        value: boolean;
        case: "ipv4";
    } | {
        value: boolean;
        case: "ipv6";
    } | {
        case: undefined;
        value?: undefined;
    };
    ignoreEmpty: boolean;
};
export declare const BytesRulesSchema: GenMessage<BytesRules>;
export type EnumRules = Message<"validate.EnumRules"> & {
    const: number;
    definedOnly: boolean;
    in: number[];
    notIn: number[];
};
export declare const EnumRulesSchema: GenMessage<EnumRules>;
export type MessageRules = Message<"validate.MessageRules"> & {
    skip: boolean;
    required: boolean;
};
export declare const MessageRulesSchema: GenMessage<MessageRules>;
export type RepeatedRules = Message<"validate.RepeatedRules"> & {
    minItems: bigint;
    maxItems: bigint;
    unique: boolean;
    items?: FieldRules;
    ignoreEmpty: boolean;
};
export declare const RepeatedRulesSchema: GenMessage<RepeatedRules>;
export type MapRules = Message<"validate.MapRules"> & {
    minPairs: bigint;
    maxPairs: bigint;
    noSparse: boolean;
    keys?: FieldRules;
    values?: FieldRules;
    ignoreEmpty: boolean;
};
export declare const MapRulesSchema: GenMessage<MapRules>;
export type AnyRules = Message<"validate.AnyRules"> & {
    required: boolean;
    in: string[];
    notIn: string[];
};
export declare const AnyRulesSchema: GenMessage<AnyRules>;
export type DurationRules = Message<"validate.DurationRules"> & {
    required: boolean;
    const?: Duration;
    lt?: Duration;
    lte?: Duration;
    gt?: Duration;
    gte?: Duration;
    in: Duration[];
    notIn: Duration[];
};
export declare const DurationRulesSchema: GenMessage<DurationRules>;
export type TimestampRules = Message<"validate.TimestampRules"> & {
    required: boolean;
    const?: Timestamp;
    lt?: Timestamp;
    lte?: Timestamp;
    gt?: Timestamp;
    gte?: Timestamp;
    ltNow: boolean;
    gtNow: boolean;
    within?: Duration;
};
export declare const TimestampRulesSchema: GenMessage<TimestampRules>;
export declare enum KnownRegex {
    UNKNOWN = 0,
    HTTP_HEADER_NAME = 1,
    HTTP_HEADER_VALUE = 2
}
export declare const KnownRegexSchema: GenEnum<KnownRegex>;
export declare const disabled: GenExtension<MessageOptions, boolean>;
export declare const ignored: GenExtension<MessageOptions, boolean>;
export declare const required: GenExtension<OneofOptions, boolean>;
export declare const rules: GenExtension<FieldOptions, FieldRules>;
