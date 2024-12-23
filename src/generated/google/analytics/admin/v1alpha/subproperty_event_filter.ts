// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/analytics/admin/v1alpha/subproperty_event_filter.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.analytics.admin.v1alpha";

/** A specific filter expression */
export interface SubpropertyEventFilterCondition {
  /** A filter for null values. */
  nullFilter?:
    | boolean
    | undefined;
  /** A filter for a string-type dimension that matches a particular pattern. */
  stringFilter?:
    | SubpropertyEventFilterCondition_StringFilter
    | undefined;
  /** Required. The field that is being filtered. */
  fieldName: string;
}

/** A filter for a string-type dimension that matches a particular pattern. */
export interface SubpropertyEventFilterCondition_StringFilter {
  /** Required. The match type for the string filter. */
  matchType: SubpropertyEventFilterCondition_StringFilter_MatchType;
  /** Required. The string value used for the matching. */
  value: string;
  /**
   * Optional. If true, the string value is case sensitive. If false, the
   * match is case-insensitive.
   */
  caseSensitive: boolean;
}

/** How the filter will be used to determine a match. */
export enum SubpropertyEventFilterCondition_StringFilter_MatchType {
  /** MATCH_TYPE_UNSPECIFIED - Match type unknown or not specified. */
  MATCH_TYPE_UNSPECIFIED = 0,
  /** EXACT - Exact match of the string value. */
  EXACT = 1,
  /** BEGINS_WITH - Begins with the string value. */
  BEGINS_WITH = 2,
  /** ENDS_WITH - Ends with the string value. */
  ENDS_WITH = 3,
  /** CONTAINS - Contains the string value. */
  CONTAINS = 4,
  /** FULL_REGEXP - Full regular expression matches with the string value. */
  FULL_REGEXP = 5,
  /** PARTIAL_REGEXP - Partial regular expression matches with the string value. */
  PARTIAL_REGEXP = 6,
  UNRECOGNIZED = -1,
}

export function subpropertyEventFilterCondition_StringFilter_MatchTypeFromJSON(
  object: any,
): SubpropertyEventFilterCondition_StringFilter_MatchType {
  switch (object) {
    case 0:
    case "MATCH_TYPE_UNSPECIFIED":
      return SubpropertyEventFilterCondition_StringFilter_MatchType.MATCH_TYPE_UNSPECIFIED;
    case 1:
    case "EXACT":
      return SubpropertyEventFilterCondition_StringFilter_MatchType.EXACT;
    case 2:
    case "BEGINS_WITH":
      return SubpropertyEventFilterCondition_StringFilter_MatchType.BEGINS_WITH;
    case 3:
    case "ENDS_WITH":
      return SubpropertyEventFilterCondition_StringFilter_MatchType.ENDS_WITH;
    case 4:
    case "CONTAINS":
      return SubpropertyEventFilterCondition_StringFilter_MatchType.CONTAINS;
    case 5:
    case "FULL_REGEXP":
      return SubpropertyEventFilterCondition_StringFilter_MatchType.FULL_REGEXP;
    case 6:
    case "PARTIAL_REGEXP":
      return SubpropertyEventFilterCondition_StringFilter_MatchType.PARTIAL_REGEXP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubpropertyEventFilterCondition_StringFilter_MatchType.UNRECOGNIZED;
  }
}

export function subpropertyEventFilterCondition_StringFilter_MatchTypeToJSON(
  object: SubpropertyEventFilterCondition_StringFilter_MatchType,
): string {
  switch (object) {
    case SubpropertyEventFilterCondition_StringFilter_MatchType.MATCH_TYPE_UNSPECIFIED:
      return "MATCH_TYPE_UNSPECIFIED";
    case SubpropertyEventFilterCondition_StringFilter_MatchType.EXACT:
      return "EXACT";
    case SubpropertyEventFilterCondition_StringFilter_MatchType.BEGINS_WITH:
      return "BEGINS_WITH";
    case SubpropertyEventFilterCondition_StringFilter_MatchType.ENDS_WITH:
      return "ENDS_WITH";
    case SubpropertyEventFilterCondition_StringFilter_MatchType.CONTAINS:
      return "CONTAINS";
    case SubpropertyEventFilterCondition_StringFilter_MatchType.FULL_REGEXP:
      return "FULL_REGEXP";
    case SubpropertyEventFilterCondition_StringFilter_MatchType.PARTIAL_REGEXP:
      return "PARTIAL_REGEXP";
    case SubpropertyEventFilterCondition_StringFilter_MatchType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A logical expression of Subproperty event filters. */
export interface SubpropertyEventFilterExpression {
  /**
   * A list of expressions to OR’ed together. Must only contain
   * not_expression or filter_condition expressions.
   */
  orGroup?:
    | SubpropertyEventFilterExpressionList
    | undefined;
  /**
   * A filter expression to be NOT'ed (inverted, complemented). It can only
   * include a filter. This cannot be set on the top level
   * SubpropertyEventFilterExpression.
   */
  notExpression?:
    | SubpropertyEventFilterExpression
    | undefined;
  /**
   * Creates a filter that matches a specific event. This cannot be set on the
   * top level SubpropertyEventFilterExpression.
   */
  filterCondition?: SubpropertyEventFilterCondition | undefined;
}

/** A list of Subproperty event filter expressions. */
export interface SubpropertyEventFilterExpressionList {
  /** Required. Unordered list. A list of Subproperty event filter expressions */
  filterExpressions: SubpropertyEventFilterExpression[];
}

/**
 * A clause for defining a filter. A filter may be inclusive (events satisfying
 * the filter clause are included in the subproperty's data) or exclusive
 * (events satisfying the filter clause are excluded from the subproperty's
 * data).
 */
export interface SubpropertyEventFilterClause {
  /** Required. The type for the filter clause. */
  filterClauseType: SubpropertyEventFilterClause_FilterClauseType;
  /**
   * Required. The logical expression for what events are sent to the
   * subproperty.
   */
  filterExpression: SubpropertyEventFilterExpression | undefined;
}

/** Specifies whether this is an include or exclude filter clause. */
export enum SubpropertyEventFilterClause_FilterClauseType {
  /** FILTER_CLAUSE_TYPE_UNSPECIFIED - Filter clause type unknown or not specified. */
  FILTER_CLAUSE_TYPE_UNSPECIFIED = 0,
  /** INCLUDE - Events will be included in the Sub property if the filter clause is met. */
  INCLUDE = 1,
  /**
   * EXCLUDE - Events will be excluded from the Sub property if the filter clause is
   * met.
   */
  EXCLUDE = 2,
  UNRECOGNIZED = -1,
}

export function subpropertyEventFilterClause_FilterClauseTypeFromJSON(
  object: any,
): SubpropertyEventFilterClause_FilterClauseType {
  switch (object) {
    case 0:
    case "FILTER_CLAUSE_TYPE_UNSPECIFIED":
      return SubpropertyEventFilterClause_FilterClauseType.FILTER_CLAUSE_TYPE_UNSPECIFIED;
    case 1:
    case "INCLUDE":
      return SubpropertyEventFilterClause_FilterClauseType.INCLUDE;
    case 2:
    case "EXCLUDE":
      return SubpropertyEventFilterClause_FilterClauseType.EXCLUDE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SubpropertyEventFilterClause_FilterClauseType.UNRECOGNIZED;
  }
}

export function subpropertyEventFilterClause_FilterClauseTypeToJSON(
  object: SubpropertyEventFilterClause_FilterClauseType,
): string {
  switch (object) {
    case SubpropertyEventFilterClause_FilterClauseType.FILTER_CLAUSE_TYPE_UNSPECIFIED:
      return "FILTER_CLAUSE_TYPE_UNSPECIFIED";
    case SubpropertyEventFilterClause_FilterClauseType.INCLUDE:
      return "INCLUDE";
    case SubpropertyEventFilterClause_FilterClauseType.EXCLUDE:
      return "EXCLUDE";
    case SubpropertyEventFilterClause_FilterClauseType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** A resource message representing a GA4 Subproperty event filter. */
export interface SubpropertyEventFilter {
  /**
   * Output only. Format:
   * properties/{ordinary_property_id}/subpropertyEventFilters/{sub_property_event_filter}
   * Example: properties/1234/subpropertyEventFilters/5678
   */
  name: string;
  /** Immutable. Resource name of the Subproperty that uses this filter. */
  applyToProperty?:
    | string
    | undefined;
  /**
   * Required. Unordered list. Filter clauses that define the
   * SubpropertyEventFilter. All clauses are AND'ed together to determine what
   * data is sent to the subproperty.
   */
  filterClauses: SubpropertyEventFilterClause[];
}

function createBaseSubpropertyEventFilterCondition(): SubpropertyEventFilterCondition {
  return { nullFilter: undefined, stringFilter: undefined, fieldName: "" };
}

export const SubpropertyEventFilterCondition: MessageFns<SubpropertyEventFilterCondition> = {
  encode(message: SubpropertyEventFilterCondition, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.nullFilter !== undefined) {
      writer.uint32(16).bool(message.nullFilter);
    }
    if (message.stringFilter !== undefined) {
      SubpropertyEventFilterCondition_StringFilter.encode(message.stringFilter, writer.uint32(26).fork()).join();
    }
    if (message.fieldName !== "") {
      writer.uint32(10).string(message.fieldName);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SubpropertyEventFilterCondition {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubpropertyEventFilterCondition();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 16) {
            break;
          }

          message.nullFilter = reader.bool();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.stringFilter = SubpropertyEventFilterCondition_StringFilter.decode(reader, reader.uint32());
          continue;
        case 1:
          if (tag !== 10) {
            break;
          }

          message.fieldName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubpropertyEventFilterCondition {
    return {
      nullFilter: isSet(object.nullFilter) ? globalThis.Boolean(object.nullFilter) : undefined,
      stringFilter: isSet(object.stringFilter)
        ? SubpropertyEventFilterCondition_StringFilter.fromJSON(object.stringFilter)
        : undefined,
      fieldName: isSet(object.fieldName) ? globalThis.String(object.fieldName) : "",
    };
  },

  toJSON(message: SubpropertyEventFilterCondition): unknown {
    const obj: any = {};
    if (message.nullFilter !== undefined) {
      obj.nullFilter = message.nullFilter;
    }
    if (message.stringFilter !== undefined) {
      obj.stringFilter = SubpropertyEventFilterCondition_StringFilter.toJSON(message.stringFilter);
    }
    if (message.fieldName !== "") {
      obj.fieldName = message.fieldName;
    }
    return obj;
  },

  create(base?: DeepPartial<SubpropertyEventFilterCondition>): SubpropertyEventFilterCondition {
    return SubpropertyEventFilterCondition.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SubpropertyEventFilterCondition>): SubpropertyEventFilterCondition {
    const message = createBaseSubpropertyEventFilterCondition();
    message.nullFilter = object.nullFilter ?? undefined;
    message.stringFilter = (object.stringFilter !== undefined && object.stringFilter !== null)
      ? SubpropertyEventFilterCondition_StringFilter.fromPartial(object.stringFilter)
      : undefined;
    message.fieldName = object.fieldName ?? "";
    return message;
  },
};

function createBaseSubpropertyEventFilterCondition_StringFilter(): SubpropertyEventFilterCondition_StringFilter {
  return { matchType: 0, value: "", caseSensitive: false };
}

export const SubpropertyEventFilterCondition_StringFilter: MessageFns<SubpropertyEventFilterCondition_StringFilter> = {
  encode(
    message: SubpropertyEventFilterCondition_StringFilter,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.matchType !== 0) {
      writer.uint32(8).int32(message.matchType);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    if (message.caseSensitive !== false) {
      writer.uint32(24).bool(message.caseSensitive);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SubpropertyEventFilterCondition_StringFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubpropertyEventFilterCondition_StringFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.matchType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.caseSensitive = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubpropertyEventFilterCondition_StringFilter {
    return {
      matchType: isSet(object.matchType)
        ? subpropertyEventFilterCondition_StringFilter_MatchTypeFromJSON(object.matchType)
        : 0,
      value: isSet(object.value) ? globalThis.String(object.value) : "",
      caseSensitive: isSet(object.caseSensitive) ? globalThis.Boolean(object.caseSensitive) : false,
    };
  },

  toJSON(message: SubpropertyEventFilterCondition_StringFilter): unknown {
    const obj: any = {};
    if (message.matchType !== 0) {
      obj.matchType = subpropertyEventFilterCondition_StringFilter_MatchTypeToJSON(message.matchType);
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    if (message.caseSensitive !== false) {
      obj.caseSensitive = message.caseSensitive;
    }
    return obj;
  },

  create(
    base?: DeepPartial<SubpropertyEventFilterCondition_StringFilter>,
  ): SubpropertyEventFilterCondition_StringFilter {
    return SubpropertyEventFilterCondition_StringFilter.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<SubpropertyEventFilterCondition_StringFilter>,
  ): SubpropertyEventFilterCondition_StringFilter {
    const message = createBaseSubpropertyEventFilterCondition_StringFilter();
    message.matchType = object.matchType ?? 0;
    message.value = object.value ?? "";
    message.caseSensitive = object.caseSensitive ?? false;
    return message;
  },
};

function createBaseSubpropertyEventFilterExpression(): SubpropertyEventFilterExpression {
  return { orGroup: undefined, notExpression: undefined, filterCondition: undefined };
}

export const SubpropertyEventFilterExpression: MessageFns<SubpropertyEventFilterExpression> = {
  encode(message: SubpropertyEventFilterExpression, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.orGroup !== undefined) {
      SubpropertyEventFilterExpressionList.encode(message.orGroup, writer.uint32(10).fork()).join();
    }
    if (message.notExpression !== undefined) {
      SubpropertyEventFilterExpression.encode(message.notExpression, writer.uint32(18).fork()).join();
    }
    if (message.filterCondition !== undefined) {
      SubpropertyEventFilterCondition.encode(message.filterCondition, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SubpropertyEventFilterExpression {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubpropertyEventFilterExpression();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orGroup = SubpropertyEventFilterExpressionList.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.notExpression = SubpropertyEventFilterExpression.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filterCondition = SubpropertyEventFilterCondition.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubpropertyEventFilterExpression {
    return {
      orGroup: isSet(object.orGroup) ? SubpropertyEventFilterExpressionList.fromJSON(object.orGroup) : undefined,
      notExpression: isSet(object.notExpression)
        ? SubpropertyEventFilterExpression.fromJSON(object.notExpression)
        : undefined,
      filterCondition: isSet(object.filterCondition)
        ? SubpropertyEventFilterCondition.fromJSON(object.filterCondition)
        : undefined,
    };
  },

  toJSON(message: SubpropertyEventFilterExpression): unknown {
    const obj: any = {};
    if (message.orGroup !== undefined) {
      obj.orGroup = SubpropertyEventFilterExpressionList.toJSON(message.orGroup);
    }
    if (message.notExpression !== undefined) {
      obj.notExpression = SubpropertyEventFilterExpression.toJSON(message.notExpression);
    }
    if (message.filterCondition !== undefined) {
      obj.filterCondition = SubpropertyEventFilterCondition.toJSON(message.filterCondition);
    }
    return obj;
  },

  create(base?: DeepPartial<SubpropertyEventFilterExpression>): SubpropertyEventFilterExpression {
    return SubpropertyEventFilterExpression.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SubpropertyEventFilterExpression>): SubpropertyEventFilterExpression {
    const message = createBaseSubpropertyEventFilterExpression();
    message.orGroup = (object.orGroup !== undefined && object.orGroup !== null)
      ? SubpropertyEventFilterExpressionList.fromPartial(object.orGroup)
      : undefined;
    message.notExpression = (object.notExpression !== undefined && object.notExpression !== null)
      ? SubpropertyEventFilterExpression.fromPartial(object.notExpression)
      : undefined;
    message.filterCondition = (object.filterCondition !== undefined && object.filterCondition !== null)
      ? SubpropertyEventFilterCondition.fromPartial(object.filterCondition)
      : undefined;
    return message;
  },
};

function createBaseSubpropertyEventFilterExpressionList(): SubpropertyEventFilterExpressionList {
  return { filterExpressions: [] };
}

export const SubpropertyEventFilterExpressionList: MessageFns<SubpropertyEventFilterExpressionList> = {
  encode(message: SubpropertyEventFilterExpressionList, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.filterExpressions) {
      SubpropertyEventFilterExpression.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SubpropertyEventFilterExpressionList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubpropertyEventFilterExpressionList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filterExpressions.push(SubpropertyEventFilterExpression.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubpropertyEventFilterExpressionList {
    return {
      filterExpressions: globalThis.Array.isArray(object?.filterExpressions)
        ? object.filterExpressions.map((e: any) => SubpropertyEventFilterExpression.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubpropertyEventFilterExpressionList): unknown {
    const obj: any = {};
    if (message.filterExpressions?.length) {
      obj.filterExpressions = message.filterExpressions.map((e) => SubpropertyEventFilterExpression.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SubpropertyEventFilterExpressionList>): SubpropertyEventFilterExpressionList {
    return SubpropertyEventFilterExpressionList.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SubpropertyEventFilterExpressionList>): SubpropertyEventFilterExpressionList {
    const message = createBaseSubpropertyEventFilterExpressionList();
    message.filterExpressions = object.filterExpressions?.map((e) => SubpropertyEventFilterExpression.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseSubpropertyEventFilterClause(): SubpropertyEventFilterClause {
  return { filterClauseType: 0, filterExpression: undefined };
}

export const SubpropertyEventFilterClause: MessageFns<SubpropertyEventFilterClause> = {
  encode(message: SubpropertyEventFilterClause, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.filterClauseType !== 0) {
      writer.uint32(8).int32(message.filterClauseType);
    }
    if (message.filterExpression !== undefined) {
      SubpropertyEventFilterExpression.encode(message.filterExpression, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SubpropertyEventFilterClause {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubpropertyEventFilterClause();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.filterClauseType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.filterExpression = SubpropertyEventFilterExpression.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubpropertyEventFilterClause {
    return {
      filterClauseType: isSet(object.filterClauseType)
        ? subpropertyEventFilterClause_FilterClauseTypeFromJSON(object.filterClauseType)
        : 0,
      filterExpression: isSet(object.filterExpression)
        ? SubpropertyEventFilterExpression.fromJSON(object.filterExpression)
        : undefined,
    };
  },

  toJSON(message: SubpropertyEventFilterClause): unknown {
    const obj: any = {};
    if (message.filterClauseType !== 0) {
      obj.filterClauseType = subpropertyEventFilterClause_FilterClauseTypeToJSON(message.filterClauseType);
    }
    if (message.filterExpression !== undefined) {
      obj.filterExpression = SubpropertyEventFilterExpression.toJSON(message.filterExpression);
    }
    return obj;
  },

  create(base?: DeepPartial<SubpropertyEventFilterClause>): SubpropertyEventFilterClause {
    return SubpropertyEventFilterClause.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SubpropertyEventFilterClause>): SubpropertyEventFilterClause {
    const message = createBaseSubpropertyEventFilterClause();
    message.filterClauseType = object.filterClauseType ?? 0;
    message.filterExpression = (object.filterExpression !== undefined && object.filterExpression !== null)
      ? SubpropertyEventFilterExpression.fromPartial(object.filterExpression)
      : undefined;
    return message;
  },
};

function createBaseSubpropertyEventFilter(): SubpropertyEventFilter {
  return { name: "", applyToProperty: undefined, filterClauses: [] };
}

export const SubpropertyEventFilter: MessageFns<SubpropertyEventFilter> = {
  encode(message: SubpropertyEventFilter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.applyToProperty !== undefined) {
      writer.uint32(18).string(message.applyToProperty);
    }
    for (const v of message.filterClauses) {
      SubpropertyEventFilterClause.encode(v!, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SubpropertyEventFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubpropertyEventFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.applyToProperty = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.filterClauses.push(SubpropertyEventFilterClause.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SubpropertyEventFilter {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      applyToProperty: isSet(object.applyToProperty) ? globalThis.String(object.applyToProperty) : undefined,
      filterClauses: globalThis.Array.isArray(object?.filterClauses)
        ? object.filterClauses.map((e: any) => SubpropertyEventFilterClause.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SubpropertyEventFilter): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.applyToProperty !== undefined) {
      obj.applyToProperty = message.applyToProperty;
    }
    if (message.filterClauses?.length) {
      obj.filterClauses = message.filterClauses.map((e) => SubpropertyEventFilterClause.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SubpropertyEventFilter>): SubpropertyEventFilter {
    return SubpropertyEventFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SubpropertyEventFilter>): SubpropertyEventFilter {
    const message = createBaseSubpropertyEventFilter();
    message.name = object.name ?? "";
    message.applyToProperty = object.applyToProperty ?? undefined;
    message.filterClauses = object.filterClauses?.map((e) => SubpropertyEventFilterClause.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
