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
// @generated from file google/cloud/paymentgateway/issuerswitch/v1/logs.proto (package google.cloud.paymentgateway.issuerswitch.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { ApiType, TransactionType, XmlApiType } from "./common_fields_pb";
import { file_google_cloud_paymentgateway_issuerswitch_v1_common_fields } from "./common_fields_pb";
import type { TransactionInfo_State } from "./transactions_pb";
import { file_google_cloud_paymentgateway_issuerswitch_v1_transactions } from "./transactions_pb";
import type { LogSeverity } from "../../../../logging/type/log_severity_pb";
import { file_google_logging_type_log_severity } from "../../../../logging/type/log_severity_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/paymentgateway/issuerswitch/v1/logs.proto.
 */
export const file_google_cloud_paymentgateway_issuerswitch_v1_logs: GenFile = /*@__PURE__*/
  fileDesc("CjZnb29nbGUvY2xvdWQvcGF5bWVudGdhdGV3YXkvaXNzdWVyc3dpdGNoL3YxL2xvZ3MucHJvdG8SK2dvb2dsZS5jbG91ZC5wYXltZW50Z2F0ZXdheS5pc3N1ZXJzd2l0Y2gudjEitAUKDlVwaVRyYW5zYWN0aW9uEg8KB21lc3NhZ2UYASABKAkSMgoIc2V2ZXJpdHkYAiABKA4yIC5nb29nbGUubG9nZ2luZy50eXBlLkxvZ1NldmVyaXR5EkYKCGFwaV90eXBlGAMgASgOMjQuZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5BcGlUeXBlEk0KDHhtbF9hcGlfdHlwZRgEIAEoDjI3Lmdvb2dsZS5jbG91ZC5wYXltZW50Z2F0ZXdheS5pc3N1ZXJzd2l0Y2gudjEuWG1sQXBpVHlwZRJWChB0cmFuc2FjdGlvbl90eXBlGAUgASgOMjwuZ29vZ2xlLmNsb3VkLnBheW1lbnRnYXRld2F5Lmlzc3VlcnN3aXRjaC52MS5UcmFuc2FjdGlvblR5cGUSFgoOdHJhbnNhY3Rpb25faWQYBiABKAkSEgoKbWVzc2FnZV9pZBgHIAEoCRILCgNycm4YCCABKAkSOAoUcGF5bG9hZF9yZWNlaXB0X3RpbWUYCSABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEjUKEXBheWxvYWRfc2VudF90aW1lGAogASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBJSCgZzdGF0dXMYCyABKA4yQi5nb29nbGUuY2xvdWQucGF5bWVudGdhdGV3YXkuaXNzdWVyc3dpdGNoLnYxLlRyYW5zYWN0aW9uSW5mby5TdGF0ZRISCgplcnJvcl9jb2RlGAwgASgJEhYKDnVwaV9lcnJvcl9jb2RlGA0gASgJEhUKDWVycm9yX21lc3NhZ2UYDiABKAkSDgoEc2VudBgPIAEoCUgAEhIKCHJlY2VpdmVkGBAgASgJSABCCQoHcGF5bG9hZEKhAgovY29tLmdvb2dsZS5jbG91ZC5wYXltZW50Z2F0ZXdheS5pc3N1ZXJzd2l0Y2gudjFCCUxvZ3NQcm90b1ABWlNjbG91ZC5nb29nbGUuY29tL2dvL3BheW1lbnRnYXRld2F5L2lzc3VlcnN3aXRjaC9hcGl2MS9pc3N1ZXJzd2l0Y2hwYjtpc3N1ZXJzd2l0Y2hwYqoCK0dvb2dsZS5DbG91ZC5QYXltZW50R2F0ZXdheS5Jc3N1ZXJTd2l0Y2guVjHKAitHb29nbGVcQ2xvdWRcUGF5bWVudEdhdGV3YXlcSXNzdWVyU3dpdGNoXFYx6gIvR29vZ2xlOjpDbG91ZDo6UGF5bWVudEdhdGV3YXk6Oklzc3VlclN3aXRjaDo6VjFiBnByb3RvMw", [file_google_cloud_paymentgateway_issuerswitch_v1_common_fields, file_google_cloud_paymentgateway_issuerswitch_v1_transactions, file_google_logging_type_log_severity, file_google_protobuf_timestamp]);

/**
 * The payload for the log entry.
 *
 * @generated from message google.cloud.paymentgateway.issuerswitch.v1.UpiTransaction
 */
export type UpiTransaction = Message<"google.cloud.paymentgateway.issuerswitch.v1.UpiTransaction"> & {
  /**
   * A human readable message about the log entry.
   *
   * @generated from field: string message = 1;
   */
  message: string;

  /**
   * The severity of the log entry.
   *
   * @generated from field: google.logging.type.LogSeverity severity = 2;
   */
  severity: LogSeverity;

  /**
   * The API type of the transaction.
   *
   * @generated from field: google.cloud.paymentgateway.issuerswitch.v1.ApiType api_type = 3;
   */
  apiType: ApiType;

  /**
   * The XML API type of the transaction.
   *
   * @generated from field: google.cloud.paymentgateway.issuerswitch.v1.XmlApiType xml_api_type = 4;
   */
  xmlApiType: XmlApiType;

  /**
   * The type of the transaction.
   *
   * @generated from field: google.cloud.paymentgateway.issuerswitch.v1.TransactionType transaction_type = 5;
   */
  transactionType: TransactionType;

  /**
   * UPI's transaction ID.
   *
   * @generated from field: string transaction_id = 6;
   */
  transactionId: string;

  /**
   * UPI's message ID.
   *
   * @generated from field: string message_id = 7;
   */
  messageId: string;

  /**
   * The payment's RRN. This will be present only for payment related
   * transactions.
   *
   * @generated from field: string rrn = 8;
   */
  rrn: string;

  /**
   * The timestamp at which the payload was received by the issuer switch.
   *
   * @generated from field: google.protobuf.Timestamp payload_receipt_time = 9;
   */
  payloadReceiptTime?: Timestamp;

  /**
   * The timestamp at which the payload was sent by the issuer switch.
   *
   * @generated from field: google.protobuf.Timestamp payload_sent_time = 10;
   */
  payloadSentTime?: Timestamp;

  /**
   * Status of the transaction which could be SUCCESS or FAILURE. This will be
   * populated only after transaction is complete.
   *
   * @generated from field: google.cloud.paymentgateway.issuerswitch.v1.TransactionInfo.State status = 11;
   */
  status: TransactionInfo_State;

  /**
   * Issuer switch error code. This will be present only for failed
   * transactions.
   *
   * @generated from field: string error_code = 12;
   */
  errorCode: string;

  /**
   * UPI error code that was sent back to NPCI. This will be present only for
   * failed transactions.
   *
   * @generated from field: string upi_error_code = 13;
   */
  upiErrorCode: string;

  /**
   * Issuer switch error message. This will be present only for failed
   * transactions.
   *
   * @generated from field: string error_message = 14;
   */
  errorMessage: string;

  /**
   * The ack, request or response payload.
   *
   * @generated from oneof google.cloud.paymentgateway.issuerswitch.v1.UpiTransaction.payload
   */
  payload: {
    /**
     * The payload in XML format sent to the issuer switch.
     *
     * @generated from field: string sent = 15;
     */
    value: string;
    case: "sent";
  } | {
    /**
     * The payload in XML format received by the issuer switch.
     *
     * @generated from field: string received = 16;
     */
    value: string;
    case: "received";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.paymentgateway.issuerswitch.v1.UpiTransaction.
 * Use `create(UpiTransactionSchema)` to create a new message.
 */
export const UpiTransactionSchema: GenMessage<UpiTransaction> = /*@__PURE__*/
  messageDesc(file_google_cloud_paymentgateway_issuerswitch_v1_logs, 0);
