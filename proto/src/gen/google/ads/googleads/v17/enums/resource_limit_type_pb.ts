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
// @generated from file google/ads/googleads/v17/enums/resource_limit_type.proto (package google.ads.googleads.v17.enums, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/ads/googleads/v17/enums/resource_limit_type.proto.
 */
export const file_google_ads_googleads_v17_enums_resource_limit_type: GenFile = /*@__PURE__*/
  fileDesc("Cjhnb29nbGUvYWRzL2dvb2dsZWFkcy92MTcvZW51bXMvcmVzb3VyY2VfbGltaXRfdHlwZS5wcm90bxIeZ29vZ2xlLmFkcy5nb29nbGVhZHMudjE3LmVudW1zIpIuChVSZXNvdXJjZUxpbWl0VHlwZUVudW0i+C0KEVJlc291cmNlTGltaXRUeXBlEg8KC1VOU1BFQ0lGSUVEEAASCwoHVU5LTk9XThABEhoKFkNBTVBBSUdOU19QRVJfQ1VTVE9NRVIQAhIfChtCQVNFX0NBTVBBSUdOU19QRVJfQ1VTVE9NRVIQAxIlCiFFWFBFUklNRU5UX0NBTVBBSUdOU19QRVJfQ1VTVE9NRVIQaRIgChxIT1RFTF9DQU1QQUlHTlNfUEVSX0NVU1RPTUVSEAQSKQolU01BUlRfU0hPUFBJTkdfQ0FNUEFJR05TX1BFUl9DVVNUT01FUhAFEhoKFkFEX0dST1VQU19QRVJfQ0FNUEFJR04QBhIjCh9BRF9HUk9VUFNfUEVSX1NIT1BQSU5HX0NBTVBBSUdOEAgSIAocQURfR1JPVVBTX1BFUl9IT1RFTF9DQU1QQUlHThAJEioKJlJFUE9SVElOR19BRF9HUk9VUFNfUEVSX0xPQ0FMX0NBTVBBSUdOEAoSKAokUkVQT1JUSU5HX0FEX0dST1VQU19QRVJfQVBQX0NBTVBBSUdOEAsSKAokTUFOQUdFRF9BRF9HUk9VUFNfUEVSX1NNQVJUX0NBTVBBSUdOEDQSIgoeQURfR1JPVVBfQ1JJVEVSSUFfUEVSX0NVU1RPTUVSEAwSJwojQkFTRV9BRF9HUk9VUF9DUklURVJJQV9QRVJfQ1VTVE9NRVIQDRItCilFWFBFUklNRU5UX0FEX0dST1VQX0NSSVRFUklBX1BFUl9DVVNUT01FUhBrEiIKHkFEX0dST1VQX0NSSVRFUklBX1BFUl9DQU1QQUlHThAOEiIKHkNBTVBBSUdOX0NSSVRFUklBX1BFUl9DVVNUT01FUhAPEicKI0JBU0VfQ0FNUEFJR05fQ1JJVEVSSUFfUEVSX0NVU1RPTUVSEBASLQopRVhQRVJJTUVOVF9DQU1QQUlHTl9DUklURVJJQV9QRVJfQ1VTVE9NRVIQbBIhCh1XRUJQQUdFX0NSSVRFUklBX1BFUl9DVVNUT01FUhAREiYKIkJBU0VfV0VCUEFHRV9DUklURVJJQV9QRVJfQ1VTVE9NRVIQEhIsCihFWFBFUklNRU5UX1dFQlBBR0VfQ1JJVEVSSUFfUEVSX0NVU1RPTUVSEBMSKwonQ09NQklORURfQVVESUVOQ0VfQ1JJVEVSSUFfUEVSX0FEX0dST1VQEBQSNQoxQ1VTVE9NRVJfTkVHQVRJVkVfUExBQ0VNRU5UX0NSSVRFUklBX1BFUl9DVVNUT01FUhAVEjsKN0NVU1RPTUVSX05FR0FUSVZFX1lPVVRVQkVfQ0hBTk5FTF9DUklURVJJQV9QRVJfQ1VTVE9NRVIQFhIZChVDUklURVJJQV9QRVJfQURfR1JPVVAQFxIfChtMSVNUSU5HX0dST1VQU19QRVJfQURfR1JPVVAQGBIqCiZFWFBMSUNJVExZX1NIQVJFRF9CVURHRVRTX1BFUl9DVVNUT01FUhAZEioKJklNUExJQ0lUTFlfU0hBUkVEX0JVREdFVFNfUEVSX0NVU1RPTUVSEBoSKwonQ09NQklORURfQVVESUVOQ0VfQ1JJVEVSSUFfUEVSX0NBTVBBSUdOEBsSIgoeTkVHQVRJVkVfS0VZV09SRFNfUEVSX0NBTVBBSUdOEBwSJAogTkVHQVRJVkVfUExBQ0VNRU5UU19QRVJfQ0FNUEFJR04QHRIcChhHRU9fVEFSR0VUU19QRVJfQ0FNUEFJR04QHhIjCh9ORUdBVElWRV9JUF9CTE9DS1NfUEVSX0NBTVBBSUdOECASHAoYUFJPWElNSVRJRVNfUEVSX0NBTVBBSUdOECESKAokTElTVElOR19TQ09QRVNfUEVSX1NIT1BQSU5HX0NBTVBBSUdOECISLAooTElTVElOR19TQ09QRVNfUEVSX05PTl9TSE9QUElOR19DQU1QQUlHThAjEiQKIE5FR0FUSVZFX0tFWVdPUkRTX1BFUl9TSEFSRURfU0VUECQSJgoiTkVHQVRJVkVfUExBQ0VNRU5UU19QRVJfU0hBUkVEX1NFVBAlEi0KKVNIQVJFRF9TRVRTX1BFUl9DVVNUT01FUl9GT1JfVFlQRV9ERUZBVUxUECgSPgo6U0hBUkVEX1NFVFNfUEVSX0NVU1RPTUVSX0ZPUl9ORUdBVElWRV9QTEFDRU1FTlRfTElTVF9MT1dFUhApEjsKN0hPVEVMX0FEVkFOQ0VfQk9PS0lOR19XSU5ET1dfQklEX01PRElGSUVSU19QRVJfQURfR1JPVVAQLBIjCh9CSURESU5HX1NUUkFURUdJRVNfUEVSX0NVU1RPTUVSEC0SIQodQkFTSUNfVVNFUl9MSVNUU19QRVJfQ1VTVE9NRVIQLxIjCh9MT0dJQ0FMX1VTRVJfTElTVFNfUEVSX0NVU1RPTUVSEDASJwoiUlVMRV9CQVNFRF9VU0VSX0xJU1RTX1BFUl9DVVNUT01FUhCZARIiCh5CQVNFX0FEX0dST1VQX0FEU19QRVJfQ1VTVE9NRVIQNRIoCiRFWFBFUklNRU5UX0FEX0dST1VQX0FEU19QRVJfQ1VTVE9NRVIQNhIdChlBRF9HUk9VUF9BRFNfUEVSX0NBTVBBSUdOEDcSIwofVEVYVF9BTkRfT1RIRVJfQURTX1BFUl9BRF9HUk9VUBA4EhoKFklNQUdFX0FEU19QRVJfQURfR1JPVVAQORIjCh9TSE9QUElOR19TTUFSVF9BRFNfUEVSX0FEX0dST1VQEDoSJgoiUkVTUE9OU0lWRV9TRUFSQ0hfQURTX1BFUl9BRF9HUk9VUBA7EhgKFEFQUF9BRFNfUEVSX0FEX0dST1VQEDwSIwofQVBQX0VOR0FHRU1FTlRfQURTX1BFUl9BRF9HUk9VUBA9EhoKFkxPQ0FMX0FEU19QRVJfQURfR1JPVVAQPhIaChZWSURFT19BRFNfUEVSX0FEX0dST1VQED8SKwomTEVBRF9GT1JNX0NBTVBBSUdOX0FTU0VUU19QRVJfQ0FNUEFJR04QjwESKgomUFJPTU9USU9OX0NVU1RPTUVSX0FTU0VUU19QRVJfQ1VTVE9NRVIQTxIqCiZQUk9NT1RJT05fQ0FNUEFJR05fQVNTRVRTX1BFUl9DQU1QQUlHThBQEioKJlBST01PVElPTl9BRF9HUk9VUF9BU1NFVFNfUEVSX0FEX0dST1VQEFESKQokQ0FMTE9VVF9DVVNUT01FUl9BU1NFVFNfUEVSX0NVU1RPTUVSEIYBEikKJENBTExPVVRfQ0FNUEFJR05fQVNTRVRTX1BFUl9DQU1QQUlHThCHARIpCiRDQUxMT1VUX0FEX0dST1VQX0FTU0VUU19QRVJfQURfR1JPVVAQiAESKgolU0lURUxJTktfQ1VTVE9NRVJfQVNTRVRTX1BFUl9DVVNUT01FUhCJARIqCiVTSVRFTElOS19DQU1QQUlHTl9BU1NFVFNfUEVSX0NBTVBBSUdOEIoBEioKJVNJVEVMSU5LX0FEX0dST1VQX0FTU0VUU19QRVJfQURfR1JPVVAQiwESNAovU1RSVUNUVVJFRF9TTklQUEVUX0NVU1RPTUVSX0FTU0VUU19QRVJfQ1VTVE9NRVIQjAESNAovU1RSVUNUVVJFRF9TTklQUEVUX0NBTVBBSUdOX0FTU0VUU19QRVJfQ0FNUEFJR04QjQESNAovU1RSVUNUVVJFRF9TTklQUEVUX0FEX0dST1VQX0FTU0VUU19QRVJfQURfR1JPVVAQjgESLAonTU9CSUxFX0FQUF9DVVNUT01FUl9BU1NFVFNfUEVSX0NVU1RPTUVSEJABEiwKJ01PQklMRV9BUFBfQ0FNUEFJR05fQVNTRVRTX1BFUl9DQU1QQUlHThCRARIsCidNT0JJTEVfQVBQX0FEX0dST1VQX0FTU0VUU19QRVJfQURfR1JPVVAQkgESLwoqSE9URUxfQ0FMTE9VVF9DVVNUT01FUl9BU1NFVFNfUEVSX0NVU1RPTUVSEJMBEi8KKkhPVEVMX0NBTExPVVRfQ0FNUEFJR05fQVNTRVRTX1BFUl9DQU1QQUlHThCUARIvCipIT1RFTF9DQUxMT1VUX0FEX0dST1VQX0FTU0VUU19QRVJfQURfR1JPVVAQlQESJgohQ0FMTF9DVVNUT01FUl9BU1NFVFNfUEVSX0NVU1RPTUVSEJYBEiYKIUNBTExfQ0FNUEFJR05fQVNTRVRTX1BFUl9DQU1QQUlHThCXARImCiFDQUxMX0FEX0dST1VQX0FTU0VUU19QRVJfQURfR1JPVVAQmAESJwoiUFJJQ0VfQ1VTVE9NRVJfQVNTRVRTX1BFUl9DVVNUT01FUhCaARInCiJQUklDRV9DQU1QQUlHTl9BU1NFVFNfUEVSX0NBTVBBSUdOEJsBEicKIlBSSUNFX0FEX0dST1VQX0FTU0VUU19QRVJfQURfR1JPVVAQnAESKgolQURfSU1BR0VfQ0FNUEFJR05fQVNTRVRTX1BFUl9DQU1QQUlHThCvARIqCiVBRF9JTUFHRV9BRF9HUk9VUF9BU1NFVFNfUEVSX0FEX0dST1VQELABEiYKIVBBR0VfRkVFRF9BU1NFVF9TRVRTX1BFUl9DVVNUT01FUhCdARIzCi5EWU5BTUlDX0VEVUNBVElPTl9GRUVEX0FTU0VUX1NFVFNfUEVSX0NVU1RPTUVSEJ4BEiMKHkFTU0VUU19QRVJfUEFHRV9GRUVEX0FTU0VUX1NFVBCfARIwCitBU1NFVFNfUEVSX0RZTkFNSUNfRURVQ0FUSU9OX0ZFRURfQVNTRVRfU0VUEKABEjAKK0RZTkFNSUNfUkVBTF9FU1RBVEVfQVNTRVRfU0VUU19QRVJfQ1VTVE9NRVIQoQESLQooQVNTRVRTX1BFUl9EWU5BTUlDX1JFQUxfRVNUQVRFX0FTU0VUX1NFVBCiARIrCiZEWU5BTUlDX0NVU1RPTV9BU1NFVF9TRVRTX1BFUl9DVVNUT01FUhCjARIoCiNBU1NFVFNfUEVSX0RZTkFNSUNfQ1VTVE9NX0FTU0VUX1NFVBCkARI3CjJEWU5BTUlDX0hPVEVMU19BTkRfUkVOVEFMU19BU1NFVF9TRVRTX1BFUl9DVVNUT01FUhClARI0Ci9BU1NFVFNfUEVSX0RZTkFNSUNfSE9URUxTX0FORF9SRU5UQUxTX0FTU0VUX1NFVBCmARIqCiVEWU5BTUlDX0xPQ0FMX0FTU0VUX1NFVFNfUEVSX0NVU1RPTUVSEKcBEicKIkFTU0VUU19QRVJfRFlOQU1JQ19MT0NBTF9BU1NFVF9TRVQQqAESLAonRFlOQU1JQ19GTElHSFRTX0FTU0VUX1NFVFNfUEVSX0NVU1RPTUVSEKkBEikKJEFTU0VUU19QRVJfRFlOQU1JQ19GTElHSFRTX0FTU0VUX1NFVBCqARIrCiZEWU5BTUlDX1RSQVZFTF9BU1NFVF9TRVRTX1BFUl9DVVNUT01FUhCrARIoCiNBU1NFVFNfUEVSX0RZTkFNSUNfVFJBVkVMX0FTU0VUX1NFVBCsARIpCiREWU5BTUlDX0pPQlNfQVNTRVRfU0VUU19QRVJfQ1VTVE9NRVIQrQESJgohQVNTRVRTX1BFUl9EWU5BTUlDX0pPQlNfQVNTRVRfU0VUEK4BEi8KKkJVU0lORVNTX05BTUVfQ0FNUEFJR05fQVNTRVRTX1BFUl9DQU1QQUlHThCzARIvCipCVVNJTkVTU19MT0dPX0NBTVBBSUdOX0FTU0VUU19QRVJfQ0FNUEFJR04QtAESEwoPVkVSU0lPTlNfUEVSX0FEEFISGwoXVVNFUl9GRUVEU19QRVJfQ1VTVE9NRVIQWhIdChlTWVNURU1fRkVFRFNfUEVSX0NVU1RPTUVSEFsSHAoYRkVFRF9BVFRSSUJVVEVTX1BFUl9GRUVEEFwSGwoXRkVFRF9JVEVNU19QRVJfQ1VTVE9NRVIQXhIfChtDQU1QQUlHTl9GRUVEU19QRVJfQ1VTVE9NRVIQXxIkCiBCQVNFX0NBTVBBSUdOX0ZFRURTX1BFUl9DVVNUT01FUhBgEioKJkVYUEVSSU1FTlRfQ0FNUEFJR05fRkVFRFNfUEVSX0NVU1RPTUVSEG0SHwobQURfR1JPVVBfRkVFRFNfUEVSX0NVU1RPTUVSEGESJAogQkFTRV9BRF9HUk9VUF9GRUVEU19QRVJfQ1VTVE9NRVIQYhIqCiZFWFBFUklNRU5UX0FEX0dST1VQX0ZFRURTX1BFUl9DVVNUT01FUhBuEh8KG0FEX0dST1VQX0ZFRURTX1BFUl9DQU1QQUlHThBjEh8KG0ZFRURfSVRFTV9TRVRTX1BFUl9DVVNUT01FUhBkEiAKHEZFRURfSVRFTVNfUEVSX0ZFRURfSVRFTV9TRVQQZRIlCiFDQU1QQUlHTl9FWFBFUklNRU5UU19QRVJfQ1VTVE9NRVIQcBIoCiRFWFBFUklNRU5UX0FSTVNfUEVSX1ZJREVPX0VYUEVSSU1FTlQQcRIdChlPV05FRF9MQUJFTFNfUEVSX0NVU1RPTUVSEHMSFwoTTEFCRUxTX1BFUl9DQU1QQUlHThB1EhcKE0xBQkVMU19QRVJfQURfR1JPVVAQdhIaChZMQUJFTFNfUEVSX0FEX0dST1VQX0FEEHcSIQodTEFCRUxTX1BFUl9BRF9HUk9VUF9DUklURVJJT04QeBIeChpUQVJHRVRfQ1VTVE9NRVJTX1BFUl9MQUJFTBB5EicKI0tFWVdPUkRfUExBTlNfUEVSX1VTRVJfUEVSX0NVU1RPTUVSEHoSMwovS0VZV09SRF9QTEFOX0FEX0dST1VQX0tFWVdPUkRTX1BFUl9LRVlXT1JEX1BMQU4QexIrCidLRVlXT1JEX1BMQU5fQURfR1JPVVBTX1BFUl9LRVlXT1JEX1BMQU4QfBIzCi9LRVlXT1JEX1BMQU5fTkVHQVRJVkVfS0VZV09SRFNfUEVSX0tFWVdPUkRfUExBThB9EisKJ0tFWVdPUkRfUExBTl9DQU1QQUlHTlNfUEVSX0tFWVdPUkRfUExBThB+EiQKH0NPTlZFUlNJT05fQUNUSU9OU19QRVJfQ1VTVE9NRVIQgAESIQocQkFUQ0hfSk9CX09QRVJBVElPTlNfUEVSX0pPQhCCARIcChdCQVRDSF9KT0JTX1BFUl9DVVNUT01FUhCDARI5CjRIT1RFTF9DSEVDS19JTl9EQVRFX1JBTkdFX0JJRF9NT0RJRklFUlNfUEVSX0FEX0dST1VQEIQBEkAKO1NIQVJFRF9TRVRTX1BFUl9BQ0NPVU5UX0ZPUl9BQ0NPVU5UX0xFVkVMX05FR0FUSVZFX0tFWVdPUkRTELEBEjMKLkFDQ09VTlRfTEVWRUxfTkVHQVRJVkVfS0VZV09SRFNfUEVSX1NIQVJFRF9TRVQQsgESLwoqRU5BQkxFRF9BU1NFVF9QRVJfSE9URUxfUFJPUEVSVFlfQVNTRVRfU0VUELUBEjcKMkVOQUJMRURfSE9URUxfUFJPUEVSVFlfQVNTRVRfTElOS1NfUEVSX0FTU0VUX0dST1VQELYBEhoKFUJSQU5EU19QRVJfU0hBUkVEX1NFVBC3ARItCihFTkFCTEVEX0JSQU5EX0xJU1RfQ1JJVEVSSUFfUEVSX0NBTVBBSUdOELgBEiYKIVNIQVJFRF9TRVRTX1BFUl9BQ0NPVU5UX0ZPUl9CUkFORBC5ARImCiFMT09LQUxJS0VfVVNFUl9MSVNUU19QRVJfQ1VTVE9NRVIQugFC8AEKImNvbS5nb29nbGUuYWRzLmdvb2dsZWFkcy52MTcuZW51bXNCFlJlc291cmNlTGltaXRUeXBlUHJvdG9QAVpDZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hZHMvZ29vZ2xlYWRzL3YxNy9lbnVtcztlbnVtc6ICA0dBQaoCHkdvb2dsZS5BZHMuR29vZ2xlQWRzLlYxNy5FbnVtc8oCHkdvb2dsZVxBZHNcR29vZ2xlQWRzXFYxN1xFbnVtc+oCIkdvb2dsZTo6QWRzOjpHb29nbGVBZHM6OlYxNzo6RW51bXNiBnByb3RvMw");

/**
 * Container for enum describing possible resource limit types.
 *
 * @generated from message google.ads.googleads.v17.enums.ResourceLimitTypeEnum
 */
export type ResourceLimitTypeEnum = Message<"google.ads.googleads.v17.enums.ResourceLimitTypeEnum"> & {
};

/**
 * Describes the message google.ads.googleads.v17.enums.ResourceLimitTypeEnum.
 * Use `create(ResourceLimitTypeEnumSchema)` to create a new message.
 */
export const ResourceLimitTypeEnumSchema: GenMessage<ResourceLimitTypeEnum> = /*@__PURE__*/
  messageDesc(file_google_ads_googleads_v17_enums_resource_limit_type, 0);

/**
 * Resource limit type.
 *
 * @generated from enum google.ads.googleads.v17.enums.ResourceLimitTypeEnum.ResourceLimitType
 */
export enum ResourceLimitTypeEnum_ResourceLimitType {
  /**
   * No value has been specified.
   *
   * @generated from enum value: UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Used for return value only. Represents an unclassified operation unknown
   * in this version.
   *
   * @generated from enum value: UNKNOWN = 1;
   */
  UNKNOWN = 1,

  /**
   * Number of ENABLED and PAUSED campaigns per customer.
   *
   * @generated from enum value: CAMPAIGNS_PER_CUSTOMER = 2;
   */
  CAMPAIGNS_PER_CUSTOMER = 2,

  /**
   * Number of ENABLED and PAUSED base campaigns per customer.
   *
   * @generated from enum value: BASE_CAMPAIGNS_PER_CUSTOMER = 3;
   */
  BASE_CAMPAIGNS_PER_CUSTOMER = 3,

  /**
   * Number of ENABLED and PAUSED experiment campaigns per customer.
   *
   * @generated from enum value: EXPERIMENT_CAMPAIGNS_PER_CUSTOMER = 105;
   */
  EXPERIMENT_CAMPAIGNS_PER_CUSTOMER = 105,

  /**
   * Number of ENABLED and PAUSED Hotel campaigns per customer.
   *
   * @generated from enum value: HOTEL_CAMPAIGNS_PER_CUSTOMER = 4;
   */
  HOTEL_CAMPAIGNS_PER_CUSTOMER = 4,

  /**
   * Number of ENABLED and PAUSED Smart Shopping campaigns per customer.
   *
   * @generated from enum value: SMART_SHOPPING_CAMPAIGNS_PER_CUSTOMER = 5;
   */
  SMART_SHOPPING_CAMPAIGNS_PER_CUSTOMER = 5,

  /**
   * Number of ENABLED ad groups per campaign.
   *
   * @generated from enum value: AD_GROUPS_PER_CAMPAIGN = 6;
   */
  AD_GROUPS_PER_CAMPAIGN = 6,

  /**
   * Number of ENABLED ad groups per Shopping campaign.
   *
   * @generated from enum value: AD_GROUPS_PER_SHOPPING_CAMPAIGN = 8;
   */
  AD_GROUPS_PER_SHOPPING_CAMPAIGN = 8,

  /**
   * Number of ENABLED ad groups per Hotel campaign.
   *
   * @generated from enum value: AD_GROUPS_PER_HOTEL_CAMPAIGN = 9;
   */
  AD_GROUPS_PER_HOTEL_CAMPAIGN = 9,

  /**
   * Number of ENABLED reporting ad groups per local campaign.
   *
   * @generated from enum value: REPORTING_AD_GROUPS_PER_LOCAL_CAMPAIGN = 10;
   */
  REPORTING_AD_GROUPS_PER_LOCAL_CAMPAIGN = 10,

  /**
   * Number of ENABLED reporting ad groups per App campaign. It includes app
   * campaign and app campaign for engagement.
   *
   * @generated from enum value: REPORTING_AD_GROUPS_PER_APP_CAMPAIGN = 11;
   */
  REPORTING_AD_GROUPS_PER_APP_CAMPAIGN = 11,

  /**
   * Number of ENABLED managed ad groups per smart campaign.
   *
   * @generated from enum value: MANAGED_AD_GROUPS_PER_SMART_CAMPAIGN = 52;
   */
  MANAGED_AD_GROUPS_PER_SMART_CAMPAIGN = 52,

  /**
   * Number of ENABLED ad group criteria per customer.
   * An ad group criterion is considered as ENABLED if:
   * 1. it's not REMOVED
   * 2. its ad group is not REMOVED
   * 3. its campaign is not REMOVED.
   *
   * @generated from enum value: AD_GROUP_CRITERIA_PER_CUSTOMER = 12;
   */
  AD_GROUP_CRITERIA_PER_CUSTOMER = 12,

  /**
   * Number of ad group criteria across all base campaigns for a customer.
   *
   * @generated from enum value: BASE_AD_GROUP_CRITERIA_PER_CUSTOMER = 13;
   */
  BASE_AD_GROUP_CRITERIA_PER_CUSTOMER = 13,

  /**
   * Number of ad group criteria across all experiment campaigns for a
   * customer.
   *
   * @generated from enum value: EXPERIMENT_AD_GROUP_CRITERIA_PER_CUSTOMER = 107;
   */
  EXPERIMENT_AD_GROUP_CRITERIA_PER_CUSTOMER = 107,

  /**
   * Number of ENABLED ad group criteria per campaign.
   * An ad group criterion is considered as ENABLED if:
   * 1. it's not REMOVED
   * 2. its ad group is not REMOVED.
   *
   * @generated from enum value: AD_GROUP_CRITERIA_PER_CAMPAIGN = 14;
   */
  AD_GROUP_CRITERIA_PER_CAMPAIGN = 14,

  /**
   * Number of ENABLED campaign criteria per customer.
   *
   * @generated from enum value: CAMPAIGN_CRITERIA_PER_CUSTOMER = 15;
   */
  CAMPAIGN_CRITERIA_PER_CUSTOMER = 15,

  /**
   * Number of ENABLED campaign criteria across all base campaigns for a
   * customer.
   *
   * @generated from enum value: BASE_CAMPAIGN_CRITERIA_PER_CUSTOMER = 16;
   */
  BASE_CAMPAIGN_CRITERIA_PER_CUSTOMER = 16,

  /**
   * Number of ENABLED campaign criteria across all experiment campaigns for a
   * customer.
   *
   * @generated from enum value: EXPERIMENT_CAMPAIGN_CRITERIA_PER_CUSTOMER = 108;
   */
  EXPERIMENT_CAMPAIGN_CRITERIA_PER_CUSTOMER = 108,

  /**
   * Number of ENABLED webpage criteria per customer, including
   * campaign level and ad group level.
   *
   * @generated from enum value: WEBPAGE_CRITERIA_PER_CUSTOMER = 17;
   */
  WEBPAGE_CRITERIA_PER_CUSTOMER = 17,

  /**
   * Number of ENABLED webpage criteria across all base campaigns for
   * a customer.
   *
   * @generated from enum value: BASE_WEBPAGE_CRITERIA_PER_CUSTOMER = 18;
   */
  BASE_WEBPAGE_CRITERIA_PER_CUSTOMER = 18,

  /**
   * Meximum number of ENABLED webpage criteria across all experiment
   * campaigns for a customer.
   *
   * @generated from enum value: EXPERIMENT_WEBPAGE_CRITERIA_PER_CUSTOMER = 19;
   */
  EXPERIMENT_WEBPAGE_CRITERIA_PER_CUSTOMER = 19,

  /**
   * Number of combined audience criteria per ad group.
   *
   * @generated from enum value: COMBINED_AUDIENCE_CRITERIA_PER_AD_GROUP = 20;
   */
  COMBINED_AUDIENCE_CRITERIA_PER_AD_GROUP = 20,

  /**
   * Limit for placement criterion type group in customer negative criterion.
   *
   * @generated from enum value: CUSTOMER_NEGATIVE_PLACEMENT_CRITERIA_PER_CUSTOMER = 21;
   */
  CUSTOMER_NEGATIVE_PLACEMENT_CRITERIA_PER_CUSTOMER = 21,

  /**
   * Limit for YouTube TV channels in customer negative criterion.
   *
   * @generated from enum value: CUSTOMER_NEGATIVE_YOUTUBE_CHANNEL_CRITERIA_PER_CUSTOMER = 22;
   */
  CUSTOMER_NEGATIVE_YOUTUBE_CHANNEL_CRITERIA_PER_CUSTOMER = 22,

  /**
   * Number of ENABLED criteria per ad group.
   *
   * @generated from enum value: CRITERIA_PER_AD_GROUP = 23;
   */
  CRITERIA_PER_AD_GROUP = 23,

  /**
   * Number of listing group criteria per ad group.
   *
   * @generated from enum value: LISTING_GROUPS_PER_AD_GROUP = 24;
   */
  LISTING_GROUPS_PER_AD_GROUP = 24,

  /**
   * Number of ENABLED explicitly shared budgets per customer.
   *
   * @generated from enum value: EXPLICITLY_SHARED_BUDGETS_PER_CUSTOMER = 25;
   */
  EXPLICITLY_SHARED_BUDGETS_PER_CUSTOMER = 25,

  /**
   * Number of ENABLED implicitly shared budgets per customer.
   *
   * @generated from enum value: IMPLICITLY_SHARED_BUDGETS_PER_CUSTOMER = 26;
   */
  IMPLICITLY_SHARED_BUDGETS_PER_CUSTOMER = 26,

  /**
   * Number of combined audience criteria per campaign.
   *
   * @generated from enum value: COMBINED_AUDIENCE_CRITERIA_PER_CAMPAIGN = 27;
   */
  COMBINED_AUDIENCE_CRITERIA_PER_CAMPAIGN = 27,

  /**
   * Number of negative keywords per campaign.
   *
   * @generated from enum value: NEGATIVE_KEYWORDS_PER_CAMPAIGN = 28;
   */
  NEGATIVE_KEYWORDS_PER_CAMPAIGN = 28,

  /**
   * Number of excluded campaign criteria in placement dimension, for example,
   * placement, mobile application, YouTube channel, etc. The API criterion
   * type is NOT limited to placement only, and this does not include
   * exclusions at the ad group or other levels.
   *
   * @generated from enum value: NEGATIVE_PLACEMENTS_PER_CAMPAIGN = 29;
   */
  NEGATIVE_PLACEMENTS_PER_CAMPAIGN = 29,

  /**
   * Number of geo targets per campaign.
   *
   * @generated from enum value: GEO_TARGETS_PER_CAMPAIGN = 30;
   */
  GEO_TARGETS_PER_CAMPAIGN = 30,

  /**
   * Number of negative IP blocks per campaign.
   *
   * @generated from enum value: NEGATIVE_IP_BLOCKS_PER_CAMPAIGN = 32;
   */
  NEGATIVE_IP_BLOCKS_PER_CAMPAIGN = 32,

  /**
   * Number of proximity targets per campaign.
   *
   * @generated from enum value: PROXIMITIES_PER_CAMPAIGN = 33;
   */
  PROXIMITIES_PER_CAMPAIGN = 33,

  /**
   * Number of listing scopes per Shopping campaign.
   *
   * @generated from enum value: LISTING_SCOPES_PER_SHOPPING_CAMPAIGN = 34;
   */
  LISTING_SCOPES_PER_SHOPPING_CAMPAIGN = 34,

  /**
   * Number of listing scopes per non-Shopping campaign.
   *
   * @generated from enum value: LISTING_SCOPES_PER_NON_SHOPPING_CAMPAIGN = 35;
   */
  LISTING_SCOPES_PER_NON_SHOPPING_CAMPAIGN = 35,

  /**
   * Number of criteria per negative keyword shared set.
   *
   * @generated from enum value: NEGATIVE_KEYWORDS_PER_SHARED_SET = 36;
   */
  NEGATIVE_KEYWORDS_PER_SHARED_SET = 36,

  /**
   * Number of criteria per negative placement shared set.
   *
   * @generated from enum value: NEGATIVE_PLACEMENTS_PER_SHARED_SET = 37;
   */
  NEGATIVE_PLACEMENTS_PER_SHARED_SET = 37,

  /**
   * Default number of shared sets allowed per type per customer.
   *
   * @generated from enum value: SHARED_SETS_PER_CUSTOMER_FOR_TYPE_DEFAULT = 40;
   */
  SHARED_SETS_PER_CUSTOMER_FOR_TYPE_DEFAULT = 40,

  /**
   * Number of shared sets of negative placement list type for a
   * manager customer.
   *
   * @generated from enum value: SHARED_SETS_PER_CUSTOMER_FOR_NEGATIVE_PLACEMENT_LIST_LOWER = 41;
   */
  SHARED_SETS_PER_CUSTOMER_FOR_NEGATIVE_PLACEMENT_LIST_LOWER = 41,

  /**
   * Number of hotel_advance_booking_window bid modifiers per ad group.
   *
   * @generated from enum value: HOTEL_ADVANCE_BOOKING_WINDOW_BID_MODIFIERS_PER_AD_GROUP = 44;
   */
  HOTEL_ADVANCE_BOOKING_WINDOW_BID_MODIFIERS_PER_AD_GROUP = 44,

  /**
   * Number of ENABLED shared bidding strategies per customer.
   *
   * @generated from enum value: BIDDING_STRATEGIES_PER_CUSTOMER = 45;
   */
  BIDDING_STRATEGIES_PER_CUSTOMER = 45,

  /**
   * Number of open basic user lists per customer.
   *
   * @generated from enum value: BASIC_USER_LISTS_PER_CUSTOMER = 47;
   */
  BASIC_USER_LISTS_PER_CUSTOMER = 47,

  /**
   * Number of open logical user lists per customer.
   *
   * @generated from enum value: LOGICAL_USER_LISTS_PER_CUSTOMER = 48;
   */
  LOGICAL_USER_LISTS_PER_CUSTOMER = 48,

  /**
   * Number of open rule based user lists per customer.
   *
   * @generated from enum value: RULE_BASED_USER_LISTS_PER_CUSTOMER = 153;
   */
  RULE_BASED_USER_LISTS_PER_CUSTOMER = 153,

  /**
   * Number of ENABLED and PAUSED ad group ads across all base campaigns for a
   * customer.
   *
   * @generated from enum value: BASE_AD_GROUP_ADS_PER_CUSTOMER = 53;
   */
  BASE_AD_GROUP_ADS_PER_CUSTOMER = 53,

  /**
   * Number of ENABLED and PAUSED ad group ads across all experiment campaigns
   * for a customer.
   *
   * @generated from enum value: EXPERIMENT_AD_GROUP_ADS_PER_CUSTOMER = 54;
   */
  EXPERIMENT_AD_GROUP_ADS_PER_CUSTOMER = 54,

  /**
   * Number of ENABLED and PAUSED ad group ads per campaign.
   *
   * @generated from enum value: AD_GROUP_ADS_PER_CAMPAIGN = 55;
   */
  AD_GROUP_ADS_PER_CAMPAIGN = 55,

  /**
   * Number of ENABLED ads per ad group that do not fall in to other buckets.
   * Includes text and many other types.
   *
   * @generated from enum value: TEXT_AND_OTHER_ADS_PER_AD_GROUP = 56;
   */
  TEXT_AND_OTHER_ADS_PER_AD_GROUP = 56,

  /**
   * Number of ENABLED image ads per ad group.
   *
   * @generated from enum value: IMAGE_ADS_PER_AD_GROUP = 57;
   */
  IMAGE_ADS_PER_AD_GROUP = 57,

  /**
   * Number of ENABLED shopping smart ads per ad group.
   *
   * @generated from enum value: SHOPPING_SMART_ADS_PER_AD_GROUP = 58;
   */
  SHOPPING_SMART_ADS_PER_AD_GROUP = 58,

  /**
   * Number of ENABLED responsive search ads per ad group.
   *
   * @generated from enum value: RESPONSIVE_SEARCH_ADS_PER_AD_GROUP = 59;
   */
  RESPONSIVE_SEARCH_ADS_PER_AD_GROUP = 59,

  /**
   * Number of ENABLED app ads per ad group.
   *
   * @generated from enum value: APP_ADS_PER_AD_GROUP = 60;
   */
  APP_ADS_PER_AD_GROUP = 60,

  /**
   * Number of ENABLED app engagement ads per ad group.
   *
   * @generated from enum value: APP_ENGAGEMENT_ADS_PER_AD_GROUP = 61;
   */
  APP_ENGAGEMENT_ADS_PER_AD_GROUP = 61,

  /**
   * Number of ENABLED local ads per ad group.
   *
   * @generated from enum value: LOCAL_ADS_PER_AD_GROUP = 62;
   */
  LOCAL_ADS_PER_AD_GROUP = 62,

  /**
   * Number of ENABLED video ads per ad group.
   *
   * @generated from enum value: VIDEO_ADS_PER_AD_GROUP = 63;
   */
  VIDEO_ADS_PER_AD_GROUP = 63,

  /**
   * Number of ENABLED lead form CampaignAssets per campaign.
   *
   * @generated from enum value: LEAD_FORM_CAMPAIGN_ASSETS_PER_CAMPAIGN = 143;
   */
  LEAD_FORM_CAMPAIGN_ASSETS_PER_CAMPAIGN = 143,

  /**
   * Number of ENABLED promotion CustomerAssets per customer.
   *
   * @generated from enum value: PROMOTION_CUSTOMER_ASSETS_PER_CUSTOMER = 79;
   */
  PROMOTION_CUSTOMER_ASSETS_PER_CUSTOMER = 79,

  /**
   * Number of ENABLED promotion CampaignAssets per campaign.
   *
   * @generated from enum value: PROMOTION_CAMPAIGN_ASSETS_PER_CAMPAIGN = 80;
   */
  PROMOTION_CAMPAIGN_ASSETS_PER_CAMPAIGN = 80,

  /**
   * Number of ENABLED promotion AdGroupAssets per ad group.
   *
   * @generated from enum value: PROMOTION_AD_GROUP_ASSETS_PER_AD_GROUP = 81;
   */
  PROMOTION_AD_GROUP_ASSETS_PER_AD_GROUP = 81,

  /**
   * Number of ENABLED callout CustomerAssets per customer.
   *
   * @generated from enum value: CALLOUT_CUSTOMER_ASSETS_PER_CUSTOMER = 134;
   */
  CALLOUT_CUSTOMER_ASSETS_PER_CUSTOMER = 134,

  /**
   * Number of ENABLED callout CampaignAssets per campaign.
   *
   * @generated from enum value: CALLOUT_CAMPAIGN_ASSETS_PER_CAMPAIGN = 135;
   */
  CALLOUT_CAMPAIGN_ASSETS_PER_CAMPAIGN = 135,

  /**
   * Number of ENABLED callout AdGroupAssets per ad group.
   *
   * @generated from enum value: CALLOUT_AD_GROUP_ASSETS_PER_AD_GROUP = 136;
   */
  CALLOUT_AD_GROUP_ASSETS_PER_AD_GROUP = 136,

  /**
   * Number of ENABLED sitelink CustomerAssets per customer.
   *
   * @generated from enum value: SITELINK_CUSTOMER_ASSETS_PER_CUSTOMER = 137;
   */
  SITELINK_CUSTOMER_ASSETS_PER_CUSTOMER = 137,

  /**
   * Number of ENABLED sitelink CampaignAssets per campaign.
   *
   * @generated from enum value: SITELINK_CAMPAIGN_ASSETS_PER_CAMPAIGN = 138;
   */
  SITELINK_CAMPAIGN_ASSETS_PER_CAMPAIGN = 138,

  /**
   * Number of ENABLED sitelink AdGroupAssets per ad group.
   *
   * @generated from enum value: SITELINK_AD_GROUP_ASSETS_PER_AD_GROUP = 139;
   */
  SITELINK_AD_GROUP_ASSETS_PER_AD_GROUP = 139,

  /**
   * Number of ENABLED structured snippet CustomerAssets per customer.
   *
   * @generated from enum value: STRUCTURED_SNIPPET_CUSTOMER_ASSETS_PER_CUSTOMER = 140;
   */
  STRUCTURED_SNIPPET_CUSTOMER_ASSETS_PER_CUSTOMER = 140,

  /**
   * Number of ENABLED structured snippet CampaignAssets per campaign.
   *
   * @generated from enum value: STRUCTURED_SNIPPET_CAMPAIGN_ASSETS_PER_CAMPAIGN = 141;
   */
  STRUCTURED_SNIPPET_CAMPAIGN_ASSETS_PER_CAMPAIGN = 141,

  /**
   * Number of ENABLED structured snippet AdGroupAssets per ad group.
   *
   * @generated from enum value: STRUCTURED_SNIPPET_AD_GROUP_ASSETS_PER_AD_GROUP = 142;
   */
  STRUCTURED_SNIPPET_AD_GROUP_ASSETS_PER_AD_GROUP = 142,

  /**
   * Number of ENABLED mobile app CustomerAssets per customer.
   *
   * @generated from enum value: MOBILE_APP_CUSTOMER_ASSETS_PER_CUSTOMER = 144;
   */
  MOBILE_APP_CUSTOMER_ASSETS_PER_CUSTOMER = 144,

  /**
   * Number of ENABLED mobile app CampaignAssets per campaign.
   *
   * @generated from enum value: MOBILE_APP_CAMPAIGN_ASSETS_PER_CAMPAIGN = 145;
   */
  MOBILE_APP_CAMPAIGN_ASSETS_PER_CAMPAIGN = 145,

  /**
   * Number of ENABLED mobile app AdGroupAssets per ad group.
   *
   * @generated from enum value: MOBILE_APP_AD_GROUP_ASSETS_PER_AD_GROUP = 146;
   */
  MOBILE_APP_AD_GROUP_ASSETS_PER_AD_GROUP = 146,

  /**
   * Number of ENABLED hotel callout CustomerAssets per customer.
   *
   * @generated from enum value: HOTEL_CALLOUT_CUSTOMER_ASSETS_PER_CUSTOMER = 147;
   */
  HOTEL_CALLOUT_CUSTOMER_ASSETS_PER_CUSTOMER = 147,

  /**
   * Number of ENABLED hotel callout CampaignAssets per campaign.
   *
   * @generated from enum value: HOTEL_CALLOUT_CAMPAIGN_ASSETS_PER_CAMPAIGN = 148;
   */
  HOTEL_CALLOUT_CAMPAIGN_ASSETS_PER_CAMPAIGN = 148,

  /**
   * Number of ENABLED hotel callout AdGroupAssets per ad group.
   *
   * @generated from enum value: HOTEL_CALLOUT_AD_GROUP_ASSETS_PER_AD_GROUP = 149;
   */
  HOTEL_CALLOUT_AD_GROUP_ASSETS_PER_AD_GROUP = 149,

  /**
   * Number of ENABLED call CustomerAssets per customer.
   *
   * @generated from enum value: CALL_CUSTOMER_ASSETS_PER_CUSTOMER = 150;
   */
  CALL_CUSTOMER_ASSETS_PER_CUSTOMER = 150,

  /**
   * Number of ENABLED call CampaignAssets per campaign.
   *
   * @generated from enum value: CALL_CAMPAIGN_ASSETS_PER_CAMPAIGN = 151;
   */
  CALL_CAMPAIGN_ASSETS_PER_CAMPAIGN = 151,

  /**
   * Number of ENABLED call AdGroupAssets per ad group.
   *
   * @generated from enum value: CALL_AD_GROUP_ASSETS_PER_AD_GROUP = 152;
   */
  CALL_AD_GROUP_ASSETS_PER_AD_GROUP = 152,

  /**
   * Number of ENABLED price CustomerAssets per customer.
   *
   * @generated from enum value: PRICE_CUSTOMER_ASSETS_PER_CUSTOMER = 154;
   */
  PRICE_CUSTOMER_ASSETS_PER_CUSTOMER = 154,

  /**
   * Number of ENABLED price CampaignAssets per campaign.
   *
   * @generated from enum value: PRICE_CAMPAIGN_ASSETS_PER_CAMPAIGN = 155;
   */
  PRICE_CAMPAIGN_ASSETS_PER_CAMPAIGN = 155,

  /**
   * Number of ENABLED price AdGroupAssets per ad group.
   *
   * @generated from enum value: PRICE_AD_GROUP_ASSETS_PER_AD_GROUP = 156;
   */
  PRICE_AD_GROUP_ASSETS_PER_AD_GROUP = 156,

  /**
   * Number of ENABLED ad image CampaignAssets per campaign.
   *
   * @generated from enum value: AD_IMAGE_CAMPAIGN_ASSETS_PER_CAMPAIGN = 175;
   */
  AD_IMAGE_CAMPAIGN_ASSETS_PER_CAMPAIGN = 175,

  /**
   * Number of ENABLED ad image AdGroupAssets per ad group.
   *
   * @generated from enum value: AD_IMAGE_AD_GROUP_ASSETS_PER_AD_GROUP = 176;
   */
  AD_IMAGE_AD_GROUP_ASSETS_PER_AD_GROUP = 176,

  /**
   * Number of ENABLED page feed asset sets per customer.
   *
   * @generated from enum value: PAGE_FEED_ASSET_SETS_PER_CUSTOMER = 157;
   */
  PAGE_FEED_ASSET_SETS_PER_CUSTOMER = 157,

  /**
   * Number of ENABLED dynamic education feed asset sets per customer.
   *
   * @generated from enum value: DYNAMIC_EDUCATION_FEED_ASSET_SETS_PER_CUSTOMER = 158;
   */
  DYNAMIC_EDUCATION_FEED_ASSET_SETS_PER_CUSTOMER = 158,

  /**
   * Number of ENABLED assets per page feed asset set.
   *
   * @generated from enum value: ASSETS_PER_PAGE_FEED_ASSET_SET = 159;
   */
  ASSETS_PER_PAGE_FEED_ASSET_SET = 159,

  /**
   * Number of ENABLED assets per dynamic education asset set.
   *
   * @generated from enum value: ASSETS_PER_DYNAMIC_EDUCATION_FEED_ASSET_SET = 160;
   */
  ASSETS_PER_DYNAMIC_EDUCATION_FEED_ASSET_SET = 160,

  /**
   * Number of ENABLED dynamic real estate asset sets per customer.
   *
   * @generated from enum value: DYNAMIC_REAL_ESTATE_ASSET_SETS_PER_CUSTOMER = 161;
   */
  DYNAMIC_REAL_ESTATE_ASSET_SETS_PER_CUSTOMER = 161,

  /**
   * Number of ENABLED assets per dynamic real estate asset set.
   *
   * @generated from enum value: ASSETS_PER_DYNAMIC_REAL_ESTATE_ASSET_SET = 162;
   */
  ASSETS_PER_DYNAMIC_REAL_ESTATE_ASSET_SET = 162,

  /**
   * Number of ENABLED dynamic custom asset sets per customer.
   *
   * @generated from enum value: DYNAMIC_CUSTOM_ASSET_SETS_PER_CUSTOMER = 163;
   */
  DYNAMIC_CUSTOM_ASSET_SETS_PER_CUSTOMER = 163,

  /**
   * Number of ENABLED assets per dynamic custom asset set.
   *
   * @generated from enum value: ASSETS_PER_DYNAMIC_CUSTOM_ASSET_SET = 164;
   */
  ASSETS_PER_DYNAMIC_CUSTOM_ASSET_SET = 164,

  /**
   * Number of ENABLED dynamic hotels and rentals asset sets per
   * customer.
   *
   * @generated from enum value: DYNAMIC_HOTELS_AND_RENTALS_ASSET_SETS_PER_CUSTOMER = 165;
   */
  DYNAMIC_HOTELS_AND_RENTALS_ASSET_SETS_PER_CUSTOMER = 165,

  /**
   * Number of ENABLED assets per dynamic hotels and rentals asset set.
   *
   * @generated from enum value: ASSETS_PER_DYNAMIC_HOTELS_AND_RENTALS_ASSET_SET = 166;
   */
  ASSETS_PER_DYNAMIC_HOTELS_AND_RENTALS_ASSET_SET = 166,

  /**
   * Number of ENABLED dynamic local asset sets per customer.
   *
   * @generated from enum value: DYNAMIC_LOCAL_ASSET_SETS_PER_CUSTOMER = 167;
   */
  DYNAMIC_LOCAL_ASSET_SETS_PER_CUSTOMER = 167,

  /**
   * Number of ENABLED assets per dynamic local asset set.
   *
   * @generated from enum value: ASSETS_PER_DYNAMIC_LOCAL_ASSET_SET = 168;
   */
  ASSETS_PER_DYNAMIC_LOCAL_ASSET_SET = 168,

  /**
   * Number of ENABLED dynamic flights asset sets per customer.
   *
   * @generated from enum value: DYNAMIC_FLIGHTS_ASSET_SETS_PER_CUSTOMER = 169;
   */
  DYNAMIC_FLIGHTS_ASSET_SETS_PER_CUSTOMER = 169,

  /**
   * Number of ENABLED assets per dynamic flights asset set.
   *
   * @generated from enum value: ASSETS_PER_DYNAMIC_FLIGHTS_ASSET_SET = 170;
   */
  ASSETS_PER_DYNAMIC_FLIGHTS_ASSET_SET = 170,

  /**
   * Number of ENABLED dynamic travel asset sets per customer.
   *
   * @generated from enum value: DYNAMIC_TRAVEL_ASSET_SETS_PER_CUSTOMER = 171;
   */
  DYNAMIC_TRAVEL_ASSET_SETS_PER_CUSTOMER = 171,

  /**
   * Number of ENABLED assets per dynamic travel asset set.
   *
   * @generated from enum value: ASSETS_PER_DYNAMIC_TRAVEL_ASSET_SET = 172;
   */
  ASSETS_PER_DYNAMIC_TRAVEL_ASSET_SET = 172,

  /**
   * Number of ENABLED dynamic jobs asset sets per customer.
   *
   * @generated from enum value: DYNAMIC_JOBS_ASSET_SETS_PER_CUSTOMER = 173;
   */
  DYNAMIC_JOBS_ASSET_SETS_PER_CUSTOMER = 173,

  /**
   * Number of ENABLED assets per dynamic jobs asset set.
   *
   * @generated from enum value: ASSETS_PER_DYNAMIC_JOBS_ASSET_SET = 174;
   */
  ASSETS_PER_DYNAMIC_JOBS_ASSET_SET = 174,

  /**
   * Number of ENABLED business name CampaignAssets per campaign.
   *
   * @generated from enum value: BUSINESS_NAME_CAMPAIGN_ASSETS_PER_CAMPAIGN = 179;
   */
  BUSINESS_NAME_CAMPAIGN_ASSETS_PER_CAMPAIGN = 179,

  /**
   * Number of ENABLED business logo CampaignAssets per campaign.
   *
   * @generated from enum value: BUSINESS_LOGO_CAMPAIGN_ASSETS_PER_CAMPAIGN = 180;
   */
  BUSINESS_LOGO_CAMPAIGN_ASSETS_PER_CAMPAIGN = 180,

  /**
   * Number of versions per ad.
   *
   * @generated from enum value: VERSIONS_PER_AD = 82;
   */
  VERSIONS_PER_AD = 82,

  /**
   * Number of ENABLED user feeds per customer.
   *
   * @generated from enum value: USER_FEEDS_PER_CUSTOMER = 90;
   */
  USER_FEEDS_PER_CUSTOMER = 90,

  /**
   * Number of ENABLED system feeds per customer.
   *
   * @generated from enum value: SYSTEM_FEEDS_PER_CUSTOMER = 91;
   */
  SYSTEM_FEEDS_PER_CUSTOMER = 91,

  /**
   * Number of feed attributes per feed.
   *
   * @generated from enum value: FEED_ATTRIBUTES_PER_FEED = 92;
   */
  FEED_ATTRIBUTES_PER_FEED = 92,

  /**
   * Number of ENABLED feed items per customer.
   *
   * @generated from enum value: FEED_ITEMS_PER_CUSTOMER = 94;
   */
  FEED_ITEMS_PER_CUSTOMER = 94,

  /**
   * Number of ENABLED campaign feeds per customer.
   *
   * @generated from enum value: CAMPAIGN_FEEDS_PER_CUSTOMER = 95;
   */
  CAMPAIGN_FEEDS_PER_CUSTOMER = 95,

  /**
   * Number of ENABLED campaign feeds across all base campaigns for a
   * customer.
   *
   * @generated from enum value: BASE_CAMPAIGN_FEEDS_PER_CUSTOMER = 96;
   */
  BASE_CAMPAIGN_FEEDS_PER_CUSTOMER = 96,

  /**
   * Number of ENABLED campaign feeds across all experiment campaigns for a
   * customer.
   *
   * @generated from enum value: EXPERIMENT_CAMPAIGN_FEEDS_PER_CUSTOMER = 109;
   */
  EXPERIMENT_CAMPAIGN_FEEDS_PER_CUSTOMER = 109,

  /**
   * Number of ENABLED ad group feeds per customer.
   *
   * @generated from enum value: AD_GROUP_FEEDS_PER_CUSTOMER = 97;
   */
  AD_GROUP_FEEDS_PER_CUSTOMER = 97,

  /**
   * Number of ENABLED ad group feeds across all base campaigns for a
   * customer.
   *
   * @generated from enum value: BASE_AD_GROUP_FEEDS_PER_CUSTOMER = 98;
   */
  BASE_AD_GROUP_FEEDS_PER_CUSTOMER = 98,

  /**
   * Number of ENABLED ad group feeds across all experiment campaigns for a
   * customer.
   *
   * @generated from enum value: EXPERIMENT_AD_GROUP_FEEDS_PER_CUSTOMER = 110;
   */
  EXPERIMENT_AD_GROUP_FEEDS_PER_CUSTOMER = 110,

  /**
   * Number of ENABLED ad group feeds per campaign.
   *
   * @generated from enum value: AD_GROUP_FEEDS_PER_CAMPAIGN = 99;
   */
  AD_GROUP_FEEDS_PER_CAMPAIGN = 99,

  /**
   * Number of ENABLED feed items per customer.
   *
   * @generated from enum value: FEED_ITEM_SETS_PER_CUSTOMER = 100;
   */
  FEED_ITEM_SETS_PER_CUSTOMER = 100,

  /**
   * Number of feed items per feed item set.
   *
   * @generated from enum value: FEED_ITEMS_PER_FEED_ITEM_SET = 101;
   */
  FEED_ITEMS_PER_FEED_ITEM_SET = 101,

  /**
   * Number of ENABLED campaign experiments per customer.
   *
   * @generated from enum value: CAMPAIGN_EXPERIMENTS_PER_CUSTOMER = 112;
   */
  CAMPAIGN_EXPERIMENTS_PER_CUSTOMER = 112,

  /**
   * Number of video experiment arms per experiment.
   *
   * @generated from enum value: EXPERIMENT_ARMS_PER_VIDEO_EXPERIMENT = 113;
   */
  EXPERIMENT_ARMS_PER_VIDEO_EXPERIMENT = 113,

  /**
   * Number of owned labels per customer.
   *
   * @generated from enum value: OWNED_LABELS_PER_CUSTOMER = 115;
   */
  OWNED_LABELS_PER_CUSTOMER = 115,

  /**
   * Number of applied labels per campaign.
   *
   * @generated from enum value: LABELS_PER_CAMPAIGN = 117;
   */
  LABELS_PER_CAMPAIGN = 117,

  /**
   * Number of applied labels per ad group.
   *
   * @generated from enum value: LABELS_PER_AD_GROUP = 118;
   */
  LABELS_PER_AD_GROUP = 118,

  /**
   * Number of applied labels per ad group ad.
   *
   * @generated from enum value: LABELS_PER_AD_GROUP_AD = 119;
   */
  LABELS_PER_AD_GROUP_AD = 119,

  /**
   * Number of applied labels per ad group criterion.
   *
   * @generated from enum value: LABELS_PER_AD_GROUP_CRITERION = 120;
   */
  LABELS_PER_AD_GROUP_CRITERION = 120,

  /**
   * Number of customers with a single label applied.
   *
   * @generated from enum value: TARGET_CUSTOMERS_PER_LABEL = 121;
   */
  TARGET_CUSTOMERS_PER_LABEL = 121,

  /**
   * Number of ENABLED keyword plans per user per customer.
   * The limit is applied per <user, customer> pair because by default a plan
   * is private to a user of a customer. Each user of a customer has their own
   * independent limit.
   *
   * @generated from enum value: KEYWORD_PLANS_PER_USER_PER_CUSTOMER = 122;
   */
  KEYWORD_PLANS_PER_USER_PER_CUSTOMER = 122,

  /**
   * Number of keyword plan ad group keywords per keyword plan.
   *
   * @generated from enum value: KEYWORD_PLAN_AD_GROUP_KEYWORDS_PER_KEYWORD_PLAN = 123;
   */
  KEYWORD_PLAN_AD_GROUP_KEYWORDS_PER_KEYWORD_PLAN = 123,

  /**
   * Number of keyword plan ad groups per keyword plan.
   *
   * @generated from enum value: KEYWORD_PLAN_AD_GROUPS_PER_KEYWORD_PLAN = 124;
   */
  KEYWORD_PLAN_AD_GROUPS_PER_KEYWORD_PLAN = 124,

  /**
   * Number of keyword plan negative keywords (both campaign and ad group) per
   * keyword plan.
   *
   * @generated from enum value: KEYWORD_PLAN_NEGATIVE_KEYWORDS_PER_KEYWORD_PLAN = 125;
   */
  KEYWORD_PLAN_NEGATIVE_KEYWORDS_PER_KEYWORD_PLAN = 125,

  /**
   * Number of keyword plan campaigns per keyword plan.
   *
   * @generated from enum value: KEYWORD_PLAN_CAMPAIGNS_PER_KEYWORD_PLAN = 126;
   */
  KEYWORD_PLAN_CAMPAIGNS_PER_KEYWORD_PLAN = 126,

  /**
   * Number of ENABLED conversion actions per customer.
   *
   * @generated from enum value: CONVERSION_ACTIONS_PER_CUSTOMER = 128;
   */
  CONVERSION_ACTIONS_PER_CUSTOMER = 128,

  /**
   * Number of operations in a single batch job.
   *
   * @generated from enum value: BATCH_JOB_OPERATIONS_PER_JOB = 130;
   */
  BATCH_JOB_OPERATIONS_PER_JOB = 130,

  /**
   * Number of PENDING or ENABLED batch jobs per customer.
   *
   * @generated from enum value: BATCH_JOBS_PER_CUSTOMER = 131;
   */
  BATCH_JOBS_PER_CUSTOMER = 131,

  /**
   * Number of hotel check-in date range bid modifiers per ad agroup.
   *
   * @generated from enum value: HOTEL_CHECK_IN_DATE_RANGE_BID_MODIFIERS_PER_AD_GROUP = 132;
   */
  HOTEL_CHECK_IN_DATE_RANGE_BID_MODIFIERS_PER_AD_GROUP = 132,

  /**
   * Number of shared sets of type ACCOUNT_LEVEL_NEGATIVE_KEYWORDS per
   * account.
   *
   * @generated from enum value: SHARED_SETS_PER_ACCOUNT_FOR_ACCOUNT_LEVEL_NEGATIVE_KEYWORDS = 177;
   */
  SHARED_SETS_PER_ACCOUNT_FOR_ACCOUNT_LEVEL_NEGATIVE_KEYWORDS = 177,

  /**
   * Number of keywords per ACCOUNT_LEVEL_NEGATIVE_KEYWORDS shared set.
   *
   * @generated from enum value: ACCOUNT_LEVEL_NEGATIVE_KEYWORDS_PER_SHARED_SET = 178;
   */
  ACCOUNT_LEVEL_NEGATIVE_KEYWORDS_PER_SHARED_SET = 178,

  /**
   * Maximum number of asset per hotel property asset set.
   *
   * @generated from enum value: ENABLED_ASSET_PER_HOTEL_PROPERTY_ASSET_SET = 181;
   */
  ENABLED_ASSET_PER_HOTEL_PROPERTY_ASSET_SET = 181,

  /**
   * Maximum number of enabled hotel property assets per asset group.
   *
   * @generated from enum value: ENABLED_HOTEL_PROPERTY_ASSET_LINKS_PER_ASSET_GROUP = 182;
   */
  ENABLED_HOTEL_PROPERTY_ASSET_LINKS_PER_ASSET_GROUP = 182,

  /**
   * Number of criteria per brand shared set.
   *
   * @generated from enum value: BRANDS_PER_SHARED_SET = 183;
   */
  BRANDS_PER_SHARED_SET = 183,

  /**
   * Number of active brand list criteria per campaign.
   *
   * @generated from enum value: ENABLED_BRAND_LIST_CRITERIA_PER_CAMPAIGN = 184;
   */
  ENABLED_BRAND_LIST_CRITERIA_PER_CAMPAIGN = 184,

  /**
   * Maximum number of shared sets of brand type for an account.
   *
   * @generated from enum value: SHARED_SETS_PER_ACCOUNT_FOR_BRAND = 185;
   */
  SHARED_SETS_PER_ACCOUNT_FOR_BRAND = 185,

  /**
   * Maximum number of lookalike lists per customer.
   *
   * @generated from enum value: LOOKALIKE_USER_LISTS_PER_CUSTOMER = 186;
   */
  LOOKALIKE_USER_LISTS_PER_CUSTOMER = 186,
}

/**
 * Describes the enum google.ads.googleads.v17.enums.ResourceLimitTypeEnum.ResourceLimitType.
 */
export const ResourceLimitTypeEnum_ResourceLimitTypeSchema: GenEnum<ResourceLimitTypeEnum_ResourceLimitType> = /*@__PURE__*/
  enumDesc(file_google_ads_googleads_v17_enums_resource_limit_type, 0, 0);
