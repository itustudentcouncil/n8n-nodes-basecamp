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
// @generated from file google/maps/places/v1/ev_charging.proto (package google.maps.places.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/maps/places/v1/ev_charging.proto.
 */
export const file_google_maps_places_v1_ev_charging: GenFile = /*@__PURE__*/
  fileDesc("Cidnb29nbGUvbWFwcy9wbGFjZXMvdjEvZXZfY2hhcmdpbmcucHJvdG8SFWdvb2dsZS5tYXBzLnBsYWNlcy52MSKxAwoPRVZDaGFyZ2VPcHRpb25zEhcKD2Nvbm5lY3Rvcl9jb3VudBgBIAEoBRJaChVjb25uZWN0b3JfYWdncmVnYXRpb24YAiADKAsyOy5nb29nbGUubWFwcy5wbGFjZXMudjEuRVZDaGFyZ2VPcHRpb25zLkNvbm5lY3RvckFnZ3JlZ2F0aW9uGqgCChRDb25uZWN0b3JBZ2dyZWdhdGlvbhI0CgR0eXBlGAEgASgOMiYuZ29vZ2xlLm1hcHMucGxhY2VzLnYxLkVWQ29ubmVjdG9yVHlwZRIaChJtYXhfY2hhcmdlX3JhdGVfa3cYAiABKAESDQoFY291bnQYAyABKAUSHAoPYXZhaWxhYmxlX2NvdW50GAQgASgFSACIAQESIQoUb3V0X29mX3NlcnZpY2VfY291bnQYBSABKAVIAYgBARJBCh1hdmFpbGFiaWxpdHlfbGFzdF91cGRhdGVfdGltZRgGIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCEgoQX2F2YWlsYWJsZV9jb3VudEIXChVfb3V0X29mX3NlcnZpY2VfY291bnQq5QIKD0VWQ29ubmVjdG9yVHlwZRIhCh1FVl9DT05ORUNUT1JfVFlQRV9VTlNQRUNJRklFRBAAEhsKF0VWX0NPTk5FQ1RPUl9UWVBFX09USEVSEAESGwoXRVZfQ09OTkVDVE9SX1RZUEVfSjE3NzIQAhIcChhFVl9DT05ORUNUT1JfVFlQRV9UWVBFXzIQAxIdChlFVl9DT05ORUNUT1JfVFlQRV9DSEFERU1PEAQSIQodRVZfQ09OTkVDVE9SX1RZUEVfQ0NTX0NPTUJPXzEQBRIhCh1FVl9DT05ORUNUT1JfVFlQRV9DQ1NfQ09NQk9fMhAGEhsKF0VWX0NPTk5FQ1RPUl9UWVBFX1RFU0xBEAcSJgoiRVZfQ09OTkVDVE9SX1RZUEVfVU5TUEVDSUZJRURfR0JfVBAIEi0KKUVWX0NPTk5FQ1RPUl9UWVBFX1VOU1BFQ0lGSUVEX1dBTExfT1VUTEVUEAlCowEKGWNvbS5nb29nbGUubWFwcy5wbGFjZXMudjFCD0V2Q2hhcmdpbmdQcm90b1ABWjdjbG91ZC5nb29nbGUuY29tL2dvL21hcHMvcGxhY2VzL2FwaXYxL3BsYWNlc3BiO3BsYWNlc3Bi+AEBogIGR01QU1YxqgIVR29vZ2xlLk1hcHMuUGxhY2VzLlYxygIVR29vZ2xlXE1hcHNcUGxhY2VzXFYxYgZwcm90bzM", [file_google_protobuf_timestamp]);

/**
 * Information about the EV Charge Station hosted in Place.
 * Terminology follows
 * https://afdc.energy.gov/fuels/electricity_infrastructure.html One port
 * could charge one car at a time. One port has one or more connectors. One
 * station has one or more ports.
 *
 * @generated from message google.maps.places.v1.EVChargeOptions
 */
export type EVChargeOptions = Message<"google.maps.places.v1.EVChargeOptions"> & {
  /**
   * Number of connectors at this station. However, because some ports can have
   * multiple connectors but only be able to charge one car at a time (e.g.) the
   * number of connectors may be greater than the total number of cars which can
   * charge simultaneously.
   *
   * @generated from field: int32 connector_count = 1;
   */
  connectorCount: number;

  /**
   * A list of EV charging connector aggregations that contain connectors of the
   * same type and same charge rate.
   *
   * @generated from field: repeated google.maps.places.v1.EVChargeOptions.ConnectorAggregation connector_aggregation = 2;
   */
  connectorAggregation: EVChargeOptions_ConnectorAggregation[];
};

/**
 * Describes the message google.maps.places.v1.EVChargeOptions.
 * Use `create(EVChargeOptionsSchema)` to create a new message.
 */
export const EVChargeOptionsSchema: GenMessage<EVChargeOptions> = /*@__PURE__*/
  messageDesc(file_google_maps_places_v1_ev_charging, 0);

/**
 * EV charging information grouped by [type, max_charge_rate_kw].
 * Shows EV charge aggregation of connectors that have the same type and max
 * charge rate in kw.
 *
 * @generated from message google.maps.places.v1.EVChargeOptions.ConnectorAggregation
 */
export type EVChargeOptions_ConnectorAggregation = Message<"google.maps.places.v1.EVChargeOptions.ConnectorAggregation"> & {
  /**
   * The connector type of this aggregation.
   *
   * @generated from field: google.maps.places.v1.EVConnectorType type = 1;
   */
  type: EVConnectorType;

  /**
   * The static max charging rate in kw of each connector in the aggregation.
   *
   * @generated from field: double max_charge_rate_kw = 2;
   */
  maxChargeRateKw: number;

  /**
   * Number of connectors in this aggregation.
   *
   * @generated from field: int32 count = 3;
   */
  count: number;

  /**
   * Number of connectors in this aggregation that are currently available.
   *
   * @generated from field: optional int32 available_count = 4;
   */
  availableCount?: number;

  /**
   * Number of connectors in this aggregation that are currently out of
   * service.
   *
   * @generated from field: optional int32 out_of_service_count = 5;
   */
  outOfServiceCount?: number;

  /**
   * The timestamp when the connector availability information in this
   * aggregation was last updated.
   *
   * @generated from field: google.protobuf.Timestamp availability_last_update_time = 6;
   */
  availabilityLastUpdateTime?: Timestamp;
};

/**
 * Describes the message google.maps.places.v1.EVChargeOptions.ConnectorAggregation.
 * Use `create(EVChargeOptions_ConnectorAggregationSchema)` to create a new message.
 */
export const EVChargeOptions_ConnectorAggregationSchema: GenMessage<EVChargeOptions_ConnectorAggregation> = /*@__PURE__*/
  messageDesc(file_google_maps_places_v1_ev_charging, 0, 0);

/**
 * See http://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=6872107 for
 * additional information/context on EV charging connector types.
 *
 * @generated from enum google.maps.places.v1.EVConnectorType
 */
export enum EVConnectorType {
  /**
   * Unspecified connector.
   *
   * @generated from enum value: EV_CONNECTOR_TYPE_UNSPECIFIED = 0;
   */
  EV_CONNECTOR_TYPE_UNSPECIFIED = 0,

  /**
   * Other connector types.
   *
   * @generated from enum value: EV_CONNECTOR_TYPE_OTHER = 1;
   */
  EV_CONNECTOR_TYPE_OTHER = 1,

  /**
   * J1772 type 1 connector.
   *
   * @generated from enum value: EV_CONNECTOR_TYPE_J1772 = 2;
   */
  EV_CONNECTOR_TYPE_J1772 = 2,

  /**
   * IEC 62196 type 2 connector. Often referred to as MENNEKES.
   *
   * @generated from enum value: EV_CONNECTOR_TYPE_TYPE_2 = 3;
   */
  EV_CONNECTOR_TYPE_TYPE_2 = 3,

  /**
   * CHAdeMO type connector.
   *
   * @generated from enum value: EV_CONNECTOR_TYPE_CHADEMO = 4;
   */
  EV_CONNECTOR_TYPE_CHADEMO = 4,

  /**
   * Combined Charging System (AC and DC). Based on SAE.
   *  Type-1 J-1772 connector
   *
   * @generated from enum value: EV_CONNECTOR_TYPE_CCS_COMBO_1 = 5;
   */
  EV_CONNECTOR_TYPE_CCS_COMBO_1 = 5,

  /**
   * Combined Charging System (AC and DC). Based on Type-2
   * Mennekes connector
   *
   * @generated from enum value: EV_CONNECTOR_TYPE_CCS_COMBO_2 = 6;
   */
  EV_CONNECTOR_TYPE_CCS_COMBO_2 = 6,

  /**
   * The generic TESLA connector. This is NACS in the North America but can be
   * non-NACS in other parts of the world (e.g. CCS Combo 2 (CCS2) or GB/T).
   * This value is less representative of an actual connector type, and more
   * represents the ability to charge a Tesla brand vehicle at a Tesla owned
   * charging station.
   *
   * @generated from enum value: EV_CONNECTOR_TYPE_TESLA = 7;
   */
  EV_CONNECTOR_TYPE_TESLA = 7,

  /**
   * GB/T type corresponds to the GB/T standard in China. This type covers all
   * GB_T types.
   *
   * @generated from enum value: EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T = 8;
   */
  EV_CONNECTOR_TYPE_UNSPECIFIED_GB_T = 8,

  /**
   * Unspecified wall outlet.
   *
   * @generated from enum value: EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET = 9;
   */
  EV_CONNECTOR_TYPE_UNSPECIFIED_WALL_OUTLET = 9,
}

/**
 * Describes the enum google.maps.places.v1.EVConnectorType.
 */
export const EVConnectorTypeSchema: GenEnum<EVConnectorType> = /*@__PURE__*/
  enumDesc(file_google_maps_places_v1_ev_charging, 0);
