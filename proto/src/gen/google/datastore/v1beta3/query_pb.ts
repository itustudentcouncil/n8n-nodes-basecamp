// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file google/datastore/v1beta3/query.proto (package google.datastore.v1beta3, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../api/annotations_pb";
import type { Entity, Value } from "./entity_pb";
import { file_google_datastore_v1beta3_entity } from "./entity_pb";
import { file_google_protobuf_wrappers } from "@bufbuild/protobuf/wkt";
import { file_google_type_latlng } from "../../type/latlng_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/datastore/v1beta3/query.proto.
 */
export const file_google_datastore_v1beta3_query: GenFile = /*@__PURE__*/
  fileDesc("CiRnb29nbGUvZGF0YXN0b3JlL3YxYmV0YTMvcXVlcnkucHJvdG8SGGdvb2dsZS5kYXRhc3RvcmUudjFiZXRhMyK0AQoMRW50aXR5UmVzdWx0EjAKBmVudGl0eRgBIAEoCzIgLmdvb2dsZS5kYXRhc3RvcmUudjFiZXRhMy5FbnRpdHkSDwoHdmVyc2lvbhgEIAEoAxIOCgZjdXJzb3IYAyABKAwiUQoKUmVzdWx0VHlwZRIbChdSRVNVTFRfVFlQRV9VTlNQRUNJRklFRBAAEggKBEZVTEwQARIOCgpQUk9KRUNUSU9OEAISDAoIS0VZX09OTFkQAyKLAwoFUXVlcnkSOAoKcHJvamVjdGlvbhgCIAMoCzIkLmdvb2dsZS5kYXRhc3RvcmUudjFiZXRhMy5Qcm9qZWN0aW9uEjYKBGtpbmQYAyADKAsyKC5nb29nbGUuZGF0YXN0b3JlLnYxYmV0YTMuS2luZEV4cHJlc3Npb24SMAoGZmlsdGVyGAQgASgLMiAuZ29vZ2xlLmRhdGFzdG9yZS52MWJldGEzLkZpbHRlchI2CgVvcmRlchgFIAMoCzInLmdvb2dsZS5kYXRhc3RvcmUudjFiZXRhMy5Qcm9wZXJ0eU9yZGVyEkAKC2Rpc3RpbmN0X29uGAYgAygLMisuZ29vZ2xlLmRhdGFzdG9yZS52MWJldGEzLlByb3BlcnR5UmVmZXJlbmNlEhQKDHN0YXJ0X2N1cnNvchgHIAEoDBISCgplbmRfY3Vyc29yGAggASgMEg4KBm9mZnNldBgKIAEoBRIqCgVsaW1pdBgMIAEoCzIbLmdvb2dsZS5wcm90b2J1Zi5JbnQzMlZhbHVlIh4KDktpbmRFeHByZXNzaW9uEgwKBG5hbWUYASABKAkiIQoRUHJvcGVydHlSZWZlcmVuY2USDAoEbmFtZRgCIAEoCSJLCgpQcm9qZWN0aW9uEj0KCHByb3BlcnR5GAEgASgLMisuZ29vZ2xlLmRhdGFzdG9yZS52MWJldGEzLlByb3BlcnR5UmVmZXJlbmNlItsBCg1Qcm9wZXJ0eU9yZGVyEj0KCHByb3BlcnR5GAEgASgLMisuZ29vZ2xlLmRhdGFzdG9yZS52MWJldGEzLlByb3BlcnR5UmVmZXJlbmNlEkQKCWRpcmVjdGlvbhgCIAEoDjIxLmdvb2dsZS5kYXRhc3RvcmUudjFiZXRhMy5Qcm9wZXJ0eU9yZGVyLkRpcmVjdGlvbiJFCglEaXJlY3Rpb24SGQoVRElSRUNUSU9OX1VOU1BFQ0lGSUVEEAASDQoJQVNDRU5ESU5HEAESDgoKREVTQ0VORElORxACIqMBCgZGaWx0ZXISRQoQY29tcG9zaXRlX2ZpbHRlchgBIAEoCzIpLmdvb2dsZS5kYXRhc3RvcmUudjFiZXRhMy5Db21wb3NpdGVGaWx0ZXJIABJDCg9wcm9wZXJ0eV9maWx0ZXIYAiABKAsyKC5nb29nbGUuZGF0YXN0b3JlLnYxYmV0YTMuUHJvcGVydHlGaWx0ZXJIAEINCgtmaWx0ZXJfdHlwZSKzAQoPQ29tcG9zaXRlRmlsdGVyEj4KAm9wGAEgASgOMjIuZ29vZ2xlLmRhdGFzdG9yZS52MWJldGEzLkNvbXBvc2l0ZUZpbHRlci5PcGVyYXRvchIxCgdmaWx0ZXJzGAIgAygLMiAuZ29vZ2xlLmRhdGFzdG9yZS52MWJldGEzLkZpbHRlciItCghPcGVyYXRvchIYChRPUEVSQVRPUl9VTlNQRUNJRklFRBAAEgcKA0FORBABItYCCg5Qcm9wZXJ0eUZpbHRlchI9Cghwcm9wZXJ0eRgBIAEoCzIrLmdvb2dsZS5kYXRhc3RvcmUudjFiZXRhMy5Qcm9wZXJ0eVJlZmVyZW5jZRI9CgJvcBgCIAEoDjIxLmdvb2dsZS5kYXRhc3RvcmUudjFiZXRhMy5Qcm9wZXJ0eUZpbHRlci5PcGVyYXRvchIuCgV2YWx1ZRgDIAEoCzIfLmdvb2dsZS5kYXRhc3RvcmUudjFiZXRhMy5WYWx1ZSKVAQoIT3BlcmF0b3ISGAoUT1BFUkFUT1JfVU5TUEVDSUZJRUQQABINCglMRVNTX1RIQU4QARIWChJMRVNTX1RIQU5fT1JfRVFVQUwQAhIQCgxHUkVBVEVSX1RIQU4QAxIZChVHUkVBVEVSX1RIQU5fT1JfRVFVQUwQBBIJCgVFUVVBTBAFEhAKDEhBU19BTkNFU1RPUhALIrQCCghHcWxRdWVyeRIUCgxxdWVyeV9zdHJpbmcYASABKAkSFgoOYWxsb3dfbGl0ZXJhbHMYAiABKAgSTQoObmFtZWRfYmluZGluZ3MYBSADKAsyNS5nb29nbGUuZGF0YXN0b3JlLnYxYmV0YTMuR3FsUXVlcnkuTmFtZWRCaW5kaW5nc0VudHJ5EkgKE3Bvc2l0aW9uYWxfYmluZGluZ3MYBCADKAsyKy5nb29nbGUuZGF0YXN0b3JlLnYxYmV0YTMuR3FsUXVlcnlQYXJhbWV0ZXIaYQoSTmFtZWRCaW5kaW5nc0VudHJ5EgsKA2tleRgBIAEoCRI6CgV2YWx1ZRgCIAEoCzIrLmdvb2dsZS5kYXRhc3RvcmUudjFiZXRhMy5HcWxRdWVyeVBhcmFtZXRlcjoCOAEiaQoRR3FsUXVlcnlQYXJhbWV0ZXISMAoFdmFsdWUYAiABKAsyHy5nb29nbGUuZGF0YXN0b3JlLnYxYmV0YTMuVmFsdWVIABIQCgZjdXJzb3IYAyABKAxIAEIQCg5wYXJhbWV0ZXJfdHlwZSLtAwoQUXVlcnlSZXN1bHRCYXRjaBIXCg9za2lwcGVkX3Jlc3VsdHMYBiABKAUSFgoOc2tpcHBlZF9jdXJzb3IYAyABKAwSTQoSZW50aXR5X3Jlc3VsdF90eXBlGAEgASgOMjEuZ29vZ2xlLmRhdGFzdG9yZS52MWJldGEzLkVudGl0eVJlc3VsdC5SZXN1bHRUeXBlEj4KDmVudGl0eV9yZXN1bHRzGAIgAygLMiYuZ29vZ2xlLmRhdGFzdG9yZS52MWJldGEzLkVudGl0eVJlc3VsdBISCgplbmRfY3Vyc29yGAQgASgMElAKDG1vcmVfcmVzdWx0cxgFIAEoDjI6Lmdvb2dsZS5kYXRhc3RvcmUudjFiZXRhMy5RdWVyeVJlc3VsdEJhdGNoLk1vcmVSZXN1bHRzVHlwZRIYChBzbmFwc2hvdF92ZXJzaW9uGAcgASgDIpgBCg9Nb3JlUmVzdWx0c1R5cGUSIQodTU9SRV9SRVNVTFRTX1RZUEVfVU5TUEVDSUZJRUQQABIQCgxOT1RfRklOSVNIRUQQARIcChhNT1JFX1JFU1VMVFNfQUZURVJfTElNSVQQAhIdChlNT1JFX1JFU1VMVFNfQUZURVJfQ1VSU09SEAQSEwoPTk9fTU9SRV9SRVNVTFRTEANC1AEKHGNvbS5nb29nbGUuZGF0YXN0b3JlLnYxYmV0YTNCClF1ZXJ5UHJvdG9QAVpAY2xvdWQuZ29vZ2xlLmNvbS9nby9kYXRhc3RvcmUvYXBpdjFiZXRhMy9kYXRhc3RvcmVwYjtkYXRhc3RvcmVwYqoCHkdvb2dsZS5DbG91ZC5EYXRhc3RvcmUuVjFCZXRhM8oCHkdvb2dsZVxDbG91ZFxEYXRhc3RvcmVcVjFiZXRhM+oCIUdvb2dsZTo6Q2xvdWQ6OkRhdGFzdG9yZTo6VjFiZXRhM2IGcHJvdG8z", [file_google_api_annotations, file_google_datastore_v1beta3_entity, file_google_protobuf_wrappers, file_google_type_latlng]);

/**
 * The result of fetching an entity from Datastore.
 *
 * @generated from message google.datastore.v1beta3.EntityResult
 */
export type EntityResult = Message<"google.datastore.v1beta3.EntityResult"> & {
  /**
   * The resulting entity.
   *
   * @generated from field: google.datastore.v1beta3.Entity entity = 1;
   */
  entity?: Entity;

  /**
   * The version of the entity, a strictly positive number that monotonically
   * increases with changes to the entity.
   *
   * This field is set for
   * [`FULL`][google.datastore.v1beta3.EntityResult.ResultType.FULL] entity
   * results.
   *
   * For [missing][google.datastore.v1beta3.LookupResponse.missing] entities in
   * `LookupResponse`, this is the version of the snapshot that was used to look
   * up the entity, and it is always set except for eventually consistent reads.
   *
   * @generated from field: int64 version = 4;
   */
  version: bigint;

  /**
   * A cursor that points to the position after the result entity.
   * Set only when the `EntityResult` is part of a `QueryResultBatch` message.
   *
   * @generated from field: bytes cursor = 3;
   */
  cursor: Uint8Array;
};

/**
 * Describes the message google.datastore.v1beta3.EntityResult.
 * Use `create(EntityResultSchema)` to create a new message.
 */
export const EntityResultSchema: GenMessage<EntityResult> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 0);

/**
 * Specifies what data the 'entity' field contains.
 * A `ResultType` is either implied (for example, in `LookupResponse.missing`
 * from `datastore.proto`, it is always `KEY_ONLY`) or specified by context
 * (for example, in message `QueryResultBatch`, field `entity_result_type`
 * specifies a `ResultType` for all the values in field `entity_results`).
 *
 * @generated from enum google.datastore.v1beta3.EntityResult.ResultType
 */
export enum EntityResult_ResultType {
  /**
   * Unspecified. This value is never used.
   *
   * @generated from enum value: RESULT_TYPE_UNSPECIFIED = 0;
   */
  RESULT_TYPE_UNSPECIFIED = 0,

  /**
   * The key and properties.
   *
   * @generated from enum value: FULL = 1;
   */
  FULL = 1,

  /**
   * A projected subset of properties. The entity may have no key.
   *
   * @generated from enum value: PROJECTION = 2;
   */
  PROJECTION = 2,

  /**
   * Only the key.
   *
   * @generated from enum value: KEY_ONLY = 3;
   */
  KEY_ONLY = 3,
}

/**
 * Describes the enum google.datastore.v1beta3.EntityResult.ResultType.
 */
export const EntityResult_ResultTypeSchema: GenEnum<EntityResult_ResultType> = /*@__PURE__*/
  enumDesc(file_google_datastore_v1beta3_query, 0, 0);

/**
 * A query for entities.
 *
 * @generated from message google.datastore.v1beta3.Query
 */
export type Query = Message<"google.datastore.v1beta3.Query"> & {
  /**
   * The projection to return. Defaults to returning all properties.
   *
   * @generated from field: repeated google.datastore.v1beta3.Projection projection = 2;
   */
  projection: Projection[];

  /**
   * The kinds to query (if empty, returns entities of all kinds).
   * Currently at most 1 kind may be specified.
   *
   * @generated from field: repeated google.datastore.v1beta3.KindExpression kind = 3;
   */
  kind: KindExpression[];

  /**
   * The filter to apply.
   *
   * @generated from field: google.datastore.v1beta3.Filter filter = 4;
   */
  filter?: Filter;

  /**
   * The order to apply to the query results (if empty, order is unspecified).
   *
   * @generated from field: repeated google.datastore.v1beta3.PropertyOrder order = 5;
   */
  order: PropertyOrder[];

  /**
   * The properties to make distinct. The query results will contain the first
   * result for each distinct combination of values for the given properties
   * (if empty, all results are returned).
   *
   * @generated from field: repeated google.datastore.v1beta3.PropertyReference distinct_on = 6;
   */
  distinctOn: PropertyReference[];

  /**
   * A starting point for the query results. Query cursors are
   * returned in query result batches and
   * [can only be used to continue the same
   * query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
   *
   * @generated from field: bytes start_cursor = 7;
   */
  startCursor: Uint8Array;

  /**
   * An ending point for the query results. Query cursors are
   * returned in query result batches and
   * [can only be used to limit the same
   * query](https://cloud.google.com/datastore/docs/concepts/queries#cursors_limits_and_offsets).
   *
   * @generated from field: bytes end_cursor = 8;
   */
  endCursor: Uint8Array;

  /**
   * The number of results to skip. Applies before limit, but after all other
   * constraints. Optional. Must be >= 0 if specified.
   *
   * @generated from field: int32 offset = 10;
   */
  offset: number;

  /**
   * The maximum number of results to return. Applies after all other
   * constraints. Optional.
   * Unspecified is interpreted as no limit.
   * Must be >= 0 if specified.
   *
   * @generated from field: google.protobuf.Int32Value limit = 12;
   */
  limit?: number;
};

/**
 * Describes the message google.datastore.v1beta3.Query.
 * Use `create(QuerySchema)` to create a new message.
 */
export const QuerySchema: GenMessage<Query> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 1);

/**
 * A representation of a kind.
 *
 * @generated from message google.datastore.v1beta3.KindExpression
 */
export type KindExpression = Message<"google.datastore.v1beta3.KindExpression"> & {
  /**
   * The name of the kind.
   *
   * @generated from field: string name = 1;
   */
  name: string;
};

/**
 * Describes the message google.datastore.v1beta3.KindExpression.
 * Use `create(KindExpressionSchema)` to create a new message.
 */
export const KindExpressionSchema: GenMessage<KindExpression> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 2);

/**
 * A reference to a property relative to the kind expressions.
 *
 * @generated from message google.datastore.v1beta3.PropertyReference
 */
export type PropertyReference = Message<"google.datastore.v1beta3.PropertyReference"> & {
  /**
   * The name of the property.
   * If name includes "."s, it may be interpreted as a property name path.
   *
   * @generated from field: string name = 2;
   */
  name: string;
};

/**
 * Describes the message google.datastore.v1beta3.PropertyReference.
 * Use `create(PropertyReferenceSchema)` to create a new message.
 */
export const PropertyReferenceSchema: GenMessage<PropertyReference> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 3);

/**
 * A representation of a property in a projection.
 *
 * @generated from message google.datastore.v1beta3.Projection
 */
export type Projection = Message<"google.datastore.v1beta3.Projection"> & {
  /**
   * The property to project.
   *
   * @generated from field: google.datastore.v1beta3.PropertyReference property = 1;
   */
  property?: PropertyReference;
};

/**
 * Describes the message google.datastore.v1beta3.Projection.
 * Use `create(ProjectionSchema)` to create a new message.
 */
export const ProjectionSchema: GenMessage<Projection> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 4);

/**
 * The desired order for a specific property.
 *
 * @generated from message google.datastore.v1beta3.PropertyOrder
 */
export type PropertyOrder = Message<"google.datastore.v1beta3.PropertyOrder"> & {
  /**
   * The property to order by.
   *
   * @generated from field: google.datastore.v1beta3.PropertyReference property = 1;
   */
  property?: PropertyReference;

  /**
   * The direction to order by. Defaults to `ASCENDING`.
   *
   * @generated from field: google.datastore.v1beta3.PropertyOrder.Direction direction = 2;
   */
  direction: PropertyOrder_Direction;
};

/**
 * Describes the message google.datastore.v1beta3.PropertyOrder.
 * Use `create(PropertyOrderSchema)` to create a new message.
 */
export const PropertyOrderSchema: GenMessage<PropertyOrder> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 5);

/**
 * The sort direction.
 *
 * @generated from enum google.datastore.v1beta3.PropertyOrder.Direction
 */
export enum PropertyOrder_Direction {
  /**
   * Unspecified. This value must not be used.
   *
   * @generated from enum value: DIRECTION_UNSPECIFIED = 0;
   */
  DIRECTION_UNSPECIFIED = 0,

  /**
   * Ascending.
   *
   * @generated from enum value: ASCENDING = 1;
   */
  ASCENDING = 1,

  /**
   * Descending.
   *
   * @generated from enum value: DESCENDING = 2;
   */
  DESCENDING = 2,
}

/**
 * Describes the enum google.datastore.v1beta3.PropertyOrder.Direction.
 */
export const PropertyOrder_DirectionSchema: GenEnum<PropertyOrder_Direction> = /*@__PURE__*/
  enumDesc(file_google_datastore_v1beta3_query, 5, 0);

/**
 * A holder for any type of filter.
 *
 * @generated from message google.datastore.v1beta3.Filter
 */
export type Filter = Message<"google.datastore.v1beta3.Filter"> & {
  /**
   * The type of filter.
   *
   * @generated from oneof google.datastore.v1beta3.Filter.filter_type
   */
  filterType: {
    /**
     * A composite filter.
     *
     * @generated from field: google.datastore.v1beta3.CompositeFilter composite_filter = 1;
     */
    value: CompositeFilter;
    case: "compositeFilter";
  } | {
    /**
     * A filter on a property.
     *
     * @generated from field: google.datastore.v1beta3.PropertyFilter property_filter = 2;
     */
    value: PropertyFilter;
    case: "propertyFilter";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.datastore.v1beta3.Filter.
 * Use `create(FilterSchema)` to create a new message.
 */
export const FilterSchema: GenMessage<Filter> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 6);

/**
 * A filter that merges multiple other filters using the given operator.
 *
 * @generated from message google.datastore.v1beta3.CompositeFilter
 */
export type CompositeFilter = Message<"google.datastore.v1beta3.CompositeFilter"> & {
  /**
   * The operator for combining multiple filters.
   *
   * @generated from field: google.datastore.v1beta3.CompositeFilter.Operator op = 1;
   */
  op: CompositeFilter_Operator;

  /**
   * The list of filters to combine.
   * Must contain at least one filter.
   *
   * @generated from field: repeated google.datastore.v1beta3.Filter filters = 2;
   */
  filters: Filter[];
};

/**
 * Describes the message google.datastore.v1beta3.CompositeFilter.
 * Use `create(CompositeFilterSchema)` to create a new message.
 */
export const CompositeFilterSchema: GenMessage<CompositeFilter> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 7);

/**
 * A composite filter operator.
 *
 * @generated from enum google.datastore.v1beta3.CompositeFilter.Operator
 */
export enum CompositeFilter_Operator {
  /**
   * Unspecified. This value must not be used.
   *
   * @generated from enum value: OPERATOR_UNSPECIFIED = 0;
   */
  OPERATOR_UNSPECIFIED = 0,

  /**
   * The results are required to satisfy each of the combined filters.
   *
   * @generated from enum value: AND = 1;
   */
  AND = 1,
}

/**
 * Describes the enum google.datastore.v1beta3.CompositeFilter.Operator.
 */
export const CompositeFilter_OperatorSchema: GenEnum<CompositeFilter_Operator> = /*@__PURE__*/
  enumDesc(file_google_datastore_v1beta3_query, 7, 0);

/**
 * A filter on a specific property.
 *
 * @generated from message google.datastore.v1beta3.PropertyFilter
 */
export type PropertyFilter = Message<"google.datastore.v1beta3.PropertyFilter"> & {
  /**
   * The property to filter by.
   *
   * @generated from field: google.datastore.v1beta3.PropertyReference property = 1;
   */
  property?: PropertyReference;

  /**
   * The operator to filter by.
   *
   * @generated from field: google.datastore.v1beta3.PropertyFilter.Operator op = 2;
   */
  op: PropertyFilter_Operator;

  /**
   * The value to compare the property to.
   *
   * @generated from field: google.datastore.v1beta3.Value value = 3;
   */
  value?: Value;
};

/**
 * Describes the message google.datastore.v1beta3.PropertyFilter.
 * Use `create(PropertyFilterSchema)` to create a new message.
 */
export const PropertyFilterSchema: GenMessage<PropertyFilter> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 8);

/**
 * A property filter operator.
 *
 * @generated from enum google.datastore.v1beta3.PropertyFilter.Operator
 */
export enum PropertyFilter_Operator {
  /**
   * Unspecified. This value must not be used.
   *
   * @generated from enum value: OPERATOR_UNSPECIFIED = 0;
   */
  OPERATOR_UNSPECIFIED = 0,

  /**
   * Less than.
   *
   * @generated from enum value: LESS_THAN = 1;
   */
  LESS_THAN = 1,

  /**
   * Less than or equal.
   *
   * @generated from enum value: LESS_THAN_OR_EQUAL = 2;
   */
  LESS_THAN_OR_EQUAL = 2,

  /**
   * Greater than.
   *
   * @generated from enum value: GREATER_THAN = 3;
   */
  GREATER_THAN = 3,

  /**
   * Greater than or equal.
   *
   * @generated from enum value: GREATER_THAN_OR_EQUAL = 4;
   */
  GREATER_THAN_OR_EQUAL = 4,

  /**
   * Equal.
   *
   * @generated from enum value: EQUAL = 5;
   */
  EQUAL = 5,

  /**
   * Has ancestor.
   *
   * @generated from enum value: HAS_ANCESTOR = 11;
   */
  HAS_ANCESTOR = 11,
}

/**
 * Describes the enum google.datastore.v1beta3.PropertyFilter.Operator.
 */
export const PropertyFilter_OperatorSchema: GenEnum<PropertyFilter_Operator> = /*@__PURE__*/
  enumDesc(file_google_datastore_v1beta3_query, 8, 0);

/**
 * A [GQL
 * query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
 *
 * @generated from message google.datastore.v1beta3.GqlQuery
 */
export type GqlQuery = Message<"google.datastore.v1beta3.GqlQuery"> & {
  /**
   * A string of the format described
   * [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).
   *
   * @generated from field: string query_string = 1;
   */
  queryString: string;

  /**
   * When false, the query string must not contain any literals and instead must
   * bind all values. For example,
   * `SELECT * FROM Kind WHERE a = 'string literal'` is not allowed, while
   * `SELECT * FROM Kind WHERE a = @value` is.
   *
   * @generated from field: bool allow_literals = 2;
   */
  allowLiterals: boolean;

  /**
   * For each non-reserved named binding site in the query string, there must be
   * a named parameter with that name, but not necessarily the inverse.
   *
   * Key must match regex `[A-Za-z_$][A-Za-z_$0-9]*`, must not match regex
   * `__.*__`, and must not be `""`.
   *
   * @generated from field: map<string, google.datastore.v1beta3.GqlQueryParameter> named_bindings = 5;
   */
  namedBindings: { [key: string]: GqlQueryParameter };

  /**
   * Numbered binding site @1 references the first numbered parameter,
   * effectively using 1-based indexing, rather than the usual 0.
   *
   * For each binding site numbered i in `query_string`, there must be an i-th
   * numbered parameter. The inverse must also be true.
   *
   * @generated from field: repeated google.datastore.v1beta3.GqlQueryParameter positional_bindings = 4;
   */
  positionalBindings: GqlQueryParameter[];
};

/**
 * Describes the message google.datastore.v1beta3.GqlQuery.
 * Use `create(GqlQuerySchema)` to create a new message.
 */
export const GqlQuerySchema: GenMessage<GqlQuery> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 9);

/**
 * A binding parameter for a GQL query.
 *
 * @generated from message google.datastore.v1beta3.GqlQueryParameter
 */
export type GqlQueryParameter = Message<"google.datastore.v1beta3.GqlQueryParameter"> & {
  /**
   * The type of parameter.
   *
   * @generated from oneof google.datastore.v1beta3.GqlQueryParameter.parameter_type
   */
  parameterType: {
    /**
     * A value parameter.
     *
     * @generated from field: google.datastore.v1beta3.Value value = 2;
     */
    value: Value;
    case: "value";
  } | {
    /**
     * A query cursor. Query cursors are returned in query
     * result batches.
     *
     * @generated from field: bytes cursor = 3;
     */
    value: Uint8Array;
    case: "cursor";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.datastore.v1beta3.GqlQueryParameter.
 * Use `create(GqlQueryParameterSchema)` to create a new message.
 */
export const GqlQueryParameterSchema: GenMessage<GqlQueryParameter> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 10);

/**
 * A batch of results produced by a query.
 *
 * @generated from message google.datastore.v1beta3.QueryResultBatch
 */
export type QueryResultBatch = Message<"google.datastore.v1beta3.QueryResultBatch"> & {
  /**
   * The number of results skipped, typically because of an offset.
   *
   * @generated from field: int32 skipped_results = 6;
   */
  skippedResults: number;

  /**
   * A cursor that points to the position after the last skipped result.
   * Will be set when `skipped_results` != 0.
   *
   * @generated from field: bytes skipped_cursor = 3;
   */
  skippedCursor: Uint8Array;

  /**
   * The result type for every entity in `entity_results`.
   *
   * @generated from field: google.datastore.v1beta3.EntityResult.ResultType entity_result_type = 1;
   */
  entityResultType: EntityResult_ResultType;

  /**
   * The results for this batch.
   *
   * @generated from field: repeated google.datastore.v1beta3.EntityResult entity_results = 2;
   */
  entityResults: EntityResult[];

  /**
   * A cursor that points to the position after the last result in the batch.
   *
   * @generated from field: bytes end_cursor = 4;
   */
  endCursor: Uint8Array;

  /**
   * The state of the query after the current batch.
   *
   * @generated from field: google.datastore.v1beta3.QueryResultBatch.MoreResultsType more_results = 5;
   */
  moreResults: QueryResultBatch_MoreResultsType;

  /**
   * The version number of the snapshot this batch was returned from.
   * This applies to the range of results from the query's `start_cursor` (or
   * the beginning of the query if no cursor was given) to this batch's
   * `end_cursor` (not the query's `end_cursor`).
   *
   * In a single transaction, subsequent query result batches for the same query
   * can have a greater snapshot version number. Each batch's snapshot version
   * is valid for all preceding batches.
   * The value will be zero for eventually consistent queries.
   *
   * @generated from field: int64 snapshot_version = 7;
   */
  snapshotVersion: bigint;
};

/**
 * Describes the message google.datastore.v1beta3.QueryResultBatch.
 * Use `create(QueryResultBatchSchema)` to create a new message.
 */
export const QueryResultBatchSchema: GenMessage<QueryResultBatch> = /*@__PURE__*/
  messageDesc(file_google_datastore_v1beta3_query, 11);

/**
 * The possible values for the `more_results` field.
 *
 * @generated from enum google.datastore.v1beta3.QueryResultBatch.MoreResultsType
 */
export enum QueryResultBatch_MoreResultsType {
  /**
   * Unspecified. This value is never used.
   *
   * @generated from enum value: MORE_RESULTS_TYPE_UNSPECIFIED = 0;
   */
  MORE_RESULTS_TYPE_UNSPECIFIED = 0,

  /**
   * There may be additional batches to fetch from this query.
   *
   * @generated from enum value: NOT_FINISHED = 1;
   */
  NOT_FINISHED = 1,

  /**
   * The query is finished, but there may be more results after the limit.
   *
   * @generated from enum value: MORE_RESULTS_AFTER_LIMIT = 2;
   */
  MORE_RESULTS_AFTER_LIMIT = 2,

  /**
   * The query is finished, but there may be more results after the end
   * cursor.
   *
   * @generated from enum value: MORE_RESULTS_AFTER_CURSOR = 4;
   */
  MORE_RESULTS_AFTER_CURSOR = 4,

  /**
   * The query is finished, and there are no more results.
   *
   * @generated from enum value: NO_MORE_RESULTS = 3;
   */
  NO_MORE_RESULTS = 3,
}

/**
 * Describes the enum google.datastore.v1beta3.QueryResultBatch.MoreResultsType.
 */
export const QueryResultBatch_MoreResultsTypeSchema: GenEnum<QueryResultBatch_MoreResultsType> = /*@__PURE__*/
  enumDesc(file_google_datastore_v1beta3_query, 11, 0);
