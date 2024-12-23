// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/addressvalidation/v1/address_validation_service.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { PostalAddress } from "../../../type/postal_address.js";
import { Address } from "./address.js";
import { Geocode } from "./geocode.js";
import { AddressMetadata } from "./metadata.js";
import { UspsData } from "./usps_data.js";

export const protobufPackage = "google.maps.addressvalidation.v1";

/** The request for validating an address. */
export interface ValidateAddressRequest {
  /**
   * Required. The address being validated. Unformatted addresses should be
   * submitted via [`address_lines`][google.type.PostalAddress.address_lines].
   *
   * The total length of the fields in this input must not exceed 280
   * characters.
   *
   * Supported regions can be found
   * [here](https://developers.google.com/maps/documentation/address-validation/coverage).
   *
   * The [language_code][google.type.PostalAddress.language_code] value in the
   * input address is reserved for future uses and is ignored today. The
   * validated address result will be populated based on the preferred language
   * for the given address, as identified by the system.
   *
   * The Address Validation API ignores the values in
   * [recipients][google.type.PostalAddress.recipients] and
   * [organization][google.type.PostalAddress.organization]. Any values in those
   * fields will be discarded and not returned. Please do not set them.
   */
  address:
    | PostalAddress
    | undefined;
  /**
   * This field must be empty for the first address validation request. If
   * more requests are necessary to fully validate a single address (for
   * example if the changes the user makes after the initial validation need to
   * be re-validated), then each followup request must populate this field with
   * the
   * [response_id][google.maps.addressvalidation.v1.ValidateAddressResponse.response_id]
   * from the very first response in the validation sequence.
   */
  previousResponseId: string;
  /**
   * Enables USPS CASS compatible mode. This affects _only_ the
   * [google.maps.addressvalidation.v1.ValidationResult.usps_data] field of
   * [google.maps.addressvalidation.v1.ValidationResult]. Note: for USPS CASS
   * enabled requests for addresses in Puerto Rico, a
   * [google.type.PostalAddress.region_code] of the `address` must be provided
   * as "PR", or an [google.type.PostalAddress.administrative_area] of the
   * `address` must be provided as "Puerto Rico" (case-insensitive) or "PR".
   *
   * It's recommended to use a componentized `address`, or alternatively specify
   * at least two [google.type.PostalAddress.address_lines] where the first line
   * contains the street number and name and the second line contains the city,
   * state, and zip code.
   */
  enableUspsCass: boolean;
  /**
   * Optional. A string which identifies an Autocomplete session for billing
   * purposes. Must be a URL and filename safe base64 string with at most 36
   * ASCII characters in length. Otherwise an INVALID_ARGUMENT error is
   * returned.
   *
   * The session begins when the user starts typing a query, and concludes when
   * they select a place and a call to Place Details or Address Validation is
   * made. Each session can have multiple autocomplete queries, followed by one
   * Place Details or Address Validation request. The credentials used for each
   * request within a session must belong to the same Google Cloud Console
   * project. Once a session has concluded, the token is no longer valid; your
   * app must generate a fresh token for each session. If the `session_token`
   * parameter is omitted, or if you reuse a session token, the session is
   * charged as if no session token was provided (each request is billed
   * separately).
   *
   * Note: Address Validation can only be used in sessions with the
   * Autocomplete (New) API, not the old Autocomplete API. See
   * https://developers.google.com/maps/documentation/places/web-service/session-pricing
   * for more details.
   */
  sessionToken: string;
}

/** The response to an address validation request. */
export interface ValidateAddressResponse {
  /** The result of the address validation. */
  result:
    | ValidationResult
    | undefined;
  /**
   * The UUID that identifies this response. If the address needs to be
   * re-validated, this UUID *must* accompany the new request.
   */
  responseId: string;
}

/** The request for sending validation feedback. */
export interface ProvideValidationFeedbackRequest {
  /**
   * Required. The outcome of the sequence of validation attempts.
   *
   * If this field is set to `VALIDATION_CONCLUSION_UNSPECIFIED`, an
   * `INVALID_ARGUMENT` error will be returned.
   */
  conclusion: ProvideValidationFeedbackRequest_ValidationConclusion;
  /**
   * Required. The ID of the response that this feedback is for. This should be
   * the
   * [response_id][google.maps.addressvalidation.v1.ValidateAddressRequest.response_id]
   * from the first response in a series of address validation attempts.
   */
  responseId: string;
}

/**
 * The possible final outcomes of the sequence of address validation requests
 * needed to validate an address.
 */
export enum ProvideValidationFeedbackRequest_ValidationConclusion {
  /**
   * VALIDATION_CONCLUSION_UNSPECIFIED - This value is unused.
   * If the `ProvideValidationFeedbackRequest.conclusion` field is set to
   * `VALIDATION_CONCLUSION_UNSPECIFIED`, an `INVALID_ARGUMENT` error will be
   * returned.
   */
  VALIDATION_CONCLUSION_UNSPECIFIED = 0,
  /**
   * VALIDATED_VERSION_USED - The version of the address returned by the Address Validation API was
   * used for the transaction.
   */
  VALIDATED_VERSION_USED = 1,
  /**
   * USER_VERSION_USED - The version of the address provided by the user was used for the
   * transaction
   */
  USER_VERSION_USED = 2,
  /**
   * UNVALIDATED_VERSION_USED - A version of the address that was entered after the last validation
   * attempt but that was not re-validated was used for the transaction.
   */
  UNVALIDATED_VERSION_USED = 3,
  /** UNUSED - The transaction was abandoned and the address was not used. */
  UNUSED = 4,
  UNRECOGNIZED = -1,
}

export function provideValidationFeedbackRequest_ValidationConclusionFromJSON(
  object: any,
): ProvideValidationFeedbackRequest_ValidationConclusion {
  switch (object) {
    case 0:
    case "VALIDATION_CONCLUSION_UNSPECIFIED":
      return ProvideValidationFeedbackRequest_ValidationConclusion.VALIDATION_CONCLUSION_UNSPECIFIED;
    case 1:
    case "VALIDATED_VERSION_USED":
      return ProvideValidationFeedbackRequest_ValidationConclusion.VALIDATED_VERSION_USED;
    case 2:
    case "USER_VERSION_USED":
      return ProvideValidationFeedbackRequest_ValidationConclusion.USER_VERSION_USED;
    case 3:
    case "UNVALIDATED_VERSION_USED":
      return ProvideValidationFeedbackRequest_ValidationConclusion.UNVALIDATED_VERSION_USED;
    case 4:
    case "UNUSED":
      return ProvideValidationFeedbackRequest_ValidationConclusion.UNUSED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProvideValidationFeedbackRequest_ValidationConclusion.UNRECOGNIZED;
  }
}

export function provideValidationFeedbackRequest_ValidationConclusionToJSON(
  object: ProvideValidationFeedbackRequest_ValidationConclusion,
): string {
  switch (object) {
    case ProvideValidationFeedbackRequest_ValidationConclusion.VALIDATION_CONCLUSION_UNSPECIFIED:
      return "VALIDATION_CONCLUSION_UNSPECIFIED";
    case ProvideValidationFeedbackRequest_ValidationConclusion.VALIDATED_VERSION_USED:
      return "VALIDATED_VERSION_USED";
    case ProvideValidationFeedbackRequest_ValidationConclusion.USER_VERSION_USED:
      return "USER_VERSION_USED";
    case ProvideValidationFeedbackRequest_ValidationConclusion.UNVALIDATED_VERSION_USED:
      return "UNVALIDATED_VERSION_USED";
    case ProvideValidationFeedbackRequest_ValidationConclusion.UNUSED:
      return "UNUSED";
    case ProvideValidationFeedbackRequest_ValidationConclusion.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * The response for validation feedback.
 *
 * The response is empty if the feedback is sent successfully.
 */
export interface ProvideValidationFeedbackResponse {
}

/** The result of validating an address. */
export interface ValidationResult {
  /** Overall verdict flags */
  verdict:
    | Verdict
    | undefined;
  /** Information about the address itself as opposed to the geocode. */
  address:
    | Address
    | undefined;
  /** Information about the location and place that the address geocoded to. */
  geocode:
    | Geocode
    | undefined;
  /**
   * Other information relevant to deliverability. `metadata` is not guaranteed
   * to be fully populated for every address sent to the Address Validation API.
   */
  metadata:
    | AddressMetadata
    | undefined;
  /**
   * Extra deliverability flags provided by USPS. Only provided in region `US`
   * and `PR`.
   */
  uspsData: UspsData | undefined;
}

/** High level overview of the address validation result and geocode. */
export interface Verdict {
  /**
   * The granularity of the **input** address. This is the result of parsing the
   * input address and does not give any validation signals. For validation
   * signals, refer to `validation_granularity` below.
   *
   * For example, if the input address includes a specific apartment number,
   * then the `input_granularity` here will be `SUB_PREMISE`. If we cannot match
   * the apartment number in the databases or the apartment number is invalid,
   * the `validation_granularity` will likely be `PREMISE` or below.
   */
  inputGranularity: Verdict_Granularity;
  /**
   * The granularity level that the API can fully **validate** the address to.
   * For example, an `validation_granularity` of `PREMISE` indicates all address
   * components at the level of `PREMISE` or more coarse can be validated.
   *
   * Per address component validation result can be found in
   * [google.maps.addressvalidation.v1.Address.address_components].
   */
  validationGranularity: Verdict_Granularity;
  /**
   * Information about the granularity of the
   * [`geocode`][google.maps.addressvalidation.v1.ValidationResult.geocode].
   * This can be understood as the semantic meaning of how coarse or fine the
   * geocoded location is.
   *
   * This can differ from the `validation_granularity` above occasionally. For
   * example, our database might record the existence of an apartment number but
   * do not have a precise location for the apartment within a big apartment
   * complex. In that case, the `validation_granularity` will be `SUB_PREMISE`
   * but the `geocode_granularity` will be `PREMISE`.
   */
  geocodeGranularity: Verdict_Granularity;
  /**
   * The address is considered complete if there are no unresolved tokens, no
   * unexpected or missing address components. See
   * [`missing_component_types`][google.maps.addressvalidation.v1.Address.missing_component_types],
   * [`unresolved_tokens`][google.maps.addressvalidation.v1.Address.unresolved_tokens]
   * or
   * [`unexpected`][google.maps.addressvalidation.v1.AddressComponent.unexpected]
   * fields for more details.
   */
  addressComplete: boolean;
  /**
   * At least one address component cannot be categorized or validated, see
   * [google.maps.addressvalidation.v1.Address.address_components] for
   * details.
   */
  hasUnconfirmedComponents: boolean;
  /**
   * At least one address component was inferred (added) that wasn't in the
   * input, see
   * [google.maps.addressvalidation.v1.Address.address_components] for
   * details.
   */
  hasInferredComponents: boolean;
  /**
   * At least one address component was replaced, see
   * [google.maps.addressvalidation.v1.Address.address_components] for
   * details.
   */
  hasReplacedComponents: boolean;
}

/**
 * The various granularities that an address or a geocode can have.
 * When used to indicate granularity for an *address*, these values indicate
 * with how fine a granularity the address identifies a mailing destination.
 * For example, an address such as "123 Main Street, Redwood City, CA, 94061"
 * identifies a `PREMISE` while something like "Redwood City, CA, 94061"
 * identifies a `LOCALITY`. However, if we are unable to find a geocode for
 * "123 Main Street" in Redwood City, the geocode returned might be of
 * `LOCALITY` granularity even though the address is more granular.
 */
export enum Verdict_Granularity {
  /** GRANULARITY_UNSPECIFIED - Default value. This value is unused. */
  GRANULARITY_UNSPECIFIED = 0,
  /** SUB_PREMISE - Below-building level result, such as an apartment. */
  SUB_PREMISE = 1,
  /** PREMISE - Building-level result. */
  PREMISE = 2,
  /** PREMISE_PROXIMITY - A geocode that approximates the building-level location of the address. */
  PREMISE_PROXIMITY = 3,
  /**
   * BLOCK - The address or geocode indicates a block. Only used in regions which
   * have block-level addressing, such as Japan.
   */
  BLOCK = 4,
  /**
   * ROUTE - The geocode or address is granular to route, such as a street, road, or
   * highway.
   */
  ROUTE = 5,
  /**
   * OTHER - All other granularities, which are bucketed together since they are not
   * deliverable.
   */
  OTHER = 6,
  UNRECOGNIZED = -1,
}

export function verdict_GranularityFromJSON(object: any): Verdict_Granularity {
  switch (object) {
    case 0:
    case "GRANULARITY_UNSPECIFIED":
      return Verdict_Granularity.GRANULARITY_UNSPECIFIED;
    case 1:
    case "SUB_PREMISE":
      return Verdict_Granularity.SUB_PREMISE;
    case 2:
    case "PREMISE":
      return Verdict_Granularity.PREMISE;
    case 3:
    case "PREMISE_PROXIMITY":
      return Verdict_Granularity.PREMISE_PROXIMITY;
    case 4:
    case "BLOCK":
      return Verdict_Granularity.BLOCK;
    case 5:
    case "ROUTE":
      return Verdict_Granularity.ROUTE;
    case 6:
    case "OTHER":
      return Verdict_Granularity.OTHER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Verdict_Granularity.UNRECOGNIZED;
  }
}

export function verdict_GranularityToJSON(object: Verdict_Granularity): string {
  switch (object) {
    case Verdict_Granularity.GRANULARITY_UNSPECIFIED:
      return "GRANULARITY_UNSPECIFIED";
    case Verdict_Granularity.SUB_PREMISE:
      return "SUB_PREMISE";
    case Verdict_Granularity.PREMISE:
      return "PREMISE";
    case Verdict_Granularity.PREMISE_PROXIMITY:
      return "PREMISE_PROXIMITY";
    case Verdict_Granularity.BLOCK:
      return "BLOCK";
    case Verdict_Granularity.ROUTE:
      return "ROUTE";
    case Verdict_Granularity.OTHER:
      return "OTHER";
    case Verdict_Granularity.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseValidateAddressRequest(): ValidateAddressRequest {
  return { address: undefined, previousResponseId: "", enableUspsCass: false, sessionToken: "" };
}

export const ValidateAddressRequest: MessageFns<ValidateAddressRequest> = {
  encode(message: ValidateAddressRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.address !== undefined) {
      PostalAddress.encode(message.address, writer.uint32(10).fork()).join();
    }
    if (message.previousResponseId !== "") {
      writer.uint32(18).string(message.previousResponseId);
    }
    if (message.enableUspsCass !== false) {
      writer.uint32(24).bool(message.enableUspsCass);
    }
    if (message.sessionToken !== "") {
      writer.uint32(42).string(message.sessionToken);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ValidateAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.address = PostalAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.previousResponseId = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.enableUspsCass = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.sessionToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateAddressRequest {
    return {
      address: isSet(object.address) ? PostalAddress.fromJSON(object.address) : undefined,
      previousResponseId: isSet(object.previousResponseId) ? globalThis.String(object.previousResponseId) : "",
      enableUspsCass: isSet(object.enableUspsCass) ? globalThis.Boolean(object.enableUspsCass) : false,
      sessionToken: isSet(object.sessionToken) ? globalThis.String(object.sessionToken) : "",
    };
  },

  toJSON(message: ValidateAddressRequest): unknown {
    const obj: any = {};
    if (message.address !== undefined) {
      obj.address = PostalAddress.toJSON(message.address);
    }
    if (message.previousResponseId !== "") {
      obj.previousResponseId = message.previousResponseId;
    }
    if (message.enableUspsCass !== false) {
      obj.enableUspsCass = message.enableUspsCass;
    }
    if (message.sessionToken !== "") {
      obj.sessionToken = message.sessionToken;
    }
    return obj;
  },

  create(base?: DeepPartial<ValidateAddressRequest>): ValidateAddressRequest {
    return ValidateAddressRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidateAddressRequest>): ValidateAddressRequest {
    const message = createBaseValidateAddressRequest();
    message.address = (object.address !== undefined && object.address !== null)
      ? PostalAddress.fromPartial(object.address)
      : undefined;
    message.previousResponseId = object.previousResponseId ?? "";
    message.enableUspsCass = object.enableUspsCass ?? false;
    message.sessionToken = object.sessionToken ?? "";
    return message;
  },
};

function createBaseValidateAddressResponse(): ValidateAddressResponse {
  return { result: undefined, responseId: "" };
}

export const ValidateAddressResponse: MessageFns<ValidateAddressResponse> = {
  encode(message: ValidateAddressResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.result !== undefined) {
      ValidationResult.encode(message.result, writer.uint32(10).fork()).join();
    }
    if (message.responseId !== "") {
      writer.uint32(18).string(message.responseId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ValidateAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidateAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.result = ValidationResult.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.responseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidateAddressResponse {
    return {
      result: isSet(object.result) ? ValidationResult.fromJSON(object.result) : undefined,
      responseId: isSet(object.responseId) ? globalThis.String(object.responseId) : "",
    };
  },

  toJSON(message: ValidateAddressResponse): unknown {
    const obj: any = {};
    if (message.result !== undefined) {
      obj.result = ValidationResult.toJSON(message.result);
    }
    if (message.responseId !== "") {
      obj.responseId = message.responseId;
    }
    return obj;
  },

  create(base?: DeepPartial<ValidateAddressResponse>): ValidateAddressResponse {
    return ValidateAddressResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidateAddressResponse>): ValidateAddressResponse {
    const message = createBaseValidateAddressResponse();
    message.result = (object.result !== undefined && object.result !== null)
      ? ValidationResult.fromPartial(object.result)
      : undefined;
    message.responseId = object.responseId ?? "";
    return message;
  },
};

function createBaseProvideValidationFeedbackRequest(): ProvideValidationFeedbackRequest {
  return { conclusion: 0, responseId: "" };
}

export const ProvideValidationFeedbackRequest: MessageFns<ProvideValidationFeedbackRequest> = {
  encode(message: ProvideValidationFeedbackRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.conclusion !== 0) {
      writer.uint32(8).int32(message.conclusion);
    }
    if (message.responseId !== "") {
      writer.uint32(18).string(message.responseId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProvideValidationFeedbackRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvideValidationFeedbackRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.conclusion = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.responseId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ProvideValidationFeedbackRequest {
    return {
      conclusion: isSet(object.conclusion)
        ? provideValidationFeedbackRequest_ValidationConclusionFromJSON(object.conclusion)
        : 0,
      responseId: isSet(object.responseId) ? globalThis.String(object.responseId) : "",
    };
  },

  toJSON(message: ProvideValidationFeedbackRequest): unknown {
    const obj: any = {};
    if (message.conclusion !== 0) {
      obj.conclusion = provideValidationFeedbackRequest_ValidationConclusionToJSON(message.conclusion);
    }
    if (message.responseId !== "") {
      obj.responseId = message.responseId;
    }
    return obj;
  },

  create(base?: DeepPartial<ProvideValidationFeedbackRequest>): ProvideValidationFeedbackRequest {
    return ProvideValidationFeedbackRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ProvideValidationFeedbackRequest>): ProvideValidationFeedbackRequest {
    const message = createBaseProvideValidationFeedbackRequest();
    message.conclusion = object.conclusion ?? 0;
    message.responseId = object.responseId ?? "";
    return message;
  },
};

function createBaseProvideValidationFeedbackResponse(): ProvideValidationFeedbackResponse {
  return {};
}

export const ProvideValidationFeedbackResponse: MessageFns<ProvideValidationFeedbackResponse> = {
  encode(_: ProvideValidationFeedbackResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ProvideValidationFeedbackResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvideValidationFeedbackResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ProvideValidationFeedbackResponse {
    return {};
  },

  toJSON(_: ProvideValidationFeedbackResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ProvideValidationFeedbackResponse>): ProvideValidationFeedbackResponse {
    return ProvideValidationFeedbackResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ProvideValidationFeedbackResponse>): ProvideValidationFeedbackResponse {
    const message = createBaseProvideValidationFeedbackResponse();
    return message;
  },
};

function createBaseValidationResult(): ValidationResult {
  return { verdict: undefined, address: undefined, geocode: undefined, metadata: undefined, uspsData: undefined };
}

export const ValidationResult: MessageFns<ValidationResult> = {
  encode(message: ValidationResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.verdict !== undefined) {
      Verdict.encode(message.verdict, writer.uint32(10).fork()).join();
    }
    if (message.address !== undefined) {
      Address.encode(message.address, writer.uint32(18).fork()).join();
    }
    if (message.geocode !== undefined) {
      Geocode.encode(message.geocode, writer.uint32(26).fork()).join();
    }
    if (message.metadata !== undefined) {
      AddressMetadata.encode(message.metadata, writer.uint32(34).fork()).join();
    }
    if (message.uspsData !== undefined) {
      UspsData.encode(message.uspsData, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ValidationResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidationResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.verdict = Verdict.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.address = Address.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.geocode = Geocode.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.metadata = AddressMetadata.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.uspsData = UspsData.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValidationResult {
    return {
      verdict: isSet(object.verdict) ? Verdict.fromJSON(object.verdict) : undefined,
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      geocode: isSet(object.geocode) ? Geocode.fromJSON(object.geocode) : undefined,
      metadata: isSet(object.metadata) ? AddressMetadata.fromJSON(object.metadata) : undefined,
      uspsData: isSet(object.uspsData) ? UspsData.fromJSON(object.uspsData) : undefined,
    };
  },

  toJSON(message: ValidationResult): unknown {
    const obj: any = {};
    if (message.verdict !== undefined) {
      obj.verdict = Verdict.toJSON(message.verdict);
    }
    if (message.address !== undefined) {
      obj.address = Address.toJSON(message.address);
    }
    if (message.geocode !== undefined) {
      obj.geocode = Geocode.toJSON(message.geocode);
    }
    if (message.metadata !== undefined) {
      obj.metadata = AddressMetadata.toJSON(message.metadata);
    }
    if (message.uspsData !== undefined) {
      obj.uspsData = UspsData.toJSON(message.uspsData);
    }
    return obj;
  },

  create(base?: DeepPartial<ValidationResult>): ValidationResult {
    return ValidationResult.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ValidationResult>): ValidationResult {
    const message = createBaseValidationResult();
    message.verdict = (object.verdict !== undefined && object.verdict !== null)
      ? Verdict.fromPartial(object.verdict)
      : undefined;
    message.address = (object.address !== undefined && object.address !== null)
      ? Address.fromPartial(object.address)
      : undefined;
    message.geocode = (object.geocode !== undefined && object.geocode !== null)
      ? Geocode.fromPartial(object.geocode)
      : undefined;
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? AddressMetadata.fromPartial(object.metadata)
      : undefined;
    message.uspsData = (object.uspsData !== undefined && object.uspsData !== null)
      ? UspsData.fromPartial(object.uspsData)
      : undefined;
    return message;
  },
};

function createBaseVerdict(): Verdict {
  return {
    inputGranularity: 0,
    validationGranularity: 0,
    geocodeGranularity: 0,
    addressComplete: false,
    hasUnconfirmedComponents: false,
    hasInferredComponents: false,
    hasReplacedComponents: false,
  };
}

export const Verdict: MessageFns<Verdict> = {
  encode(message: Verdict, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.inputGranularity !== 0) {
      writer.uint32(8).int32(message.inputGranularity);
    }
    if (message.validationGranularity !== 0) {
      writer.uint32(16).int32(message.validationGranularity);
    }
    if (message.geocodeGranularity !== 0) {
      writer.uint32(24).int32(message.geocodeGranularity);
    }
    if (message.addressComplete !== false) {
      writer.uint32(32).bool(message.addressComplete);
    }
    if (message.hasUnconfirmedComponents !== false) {
      writer.uint32(40).bool(message.hasUnconfirmedComponents);
    }
    if (message.hasInferredComponents !== false) {
      writer.uint32(48).bool(message.hasInferredComponents);
    }
    if (message.hasReplacedComponents !== false) {
      writer.uint32(56).bool(message.hasReplacedComponents);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Verdict {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVerdict();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.inputGranularity = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.validationGranularity = reader.int32() as any;
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.geocodeGranularity = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.addressComplete = reader.bool();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.hasUnconfirmedComponents = reader.bool();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.hasInferredComponents = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.hasReplacedComponents = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Verdict {
    return {
      inputGranularity: isSet(object.inputGranularity) ? verdict_GranularityFromJSON(object.inputGranularity) : 0,
      validationGranularity: isSet(object.validationGranularity)
        ? verdict_GranularityFromJSON(object.validationGranularity)
        : 0,
      geocodeGranularity: isSet(object.geocodeGranularity) ? verdict_GranularityFromJSON(object.geocodeGranularity) : 0,
      addressComplete: isSet(object.addressComplete) ? globalThis.Boolean(object.addressComplete) : false,
      hasUnconfirmedComponents: isSet(object.hasUnconfirmedComponents)
        ? globalThis.Boolean(object.hasUnconfirmedComponents)
        : false,
      hasInferredComponents: isSet(object.hasInferredComponents)
        ? globalThis.Boolean(object.hasInferredComponents)
        : false,
      hasReplacedComponents: isSet(object.hasReplacedComponents)
        ? globalThis.Boolean(object.hasReplacedComponents)
        : false,
    };
  },

  toJSON(message: Verdict): unknown {
    const obj: any = {};
    if (message.inputGranularity !== 0) {
      obj.inputGranularity = verdict_GranularityToJSON(message.inputGranularity);
    }
    if (message.validationGranularity !== 0) {
      obj.validationGranularity = verdict_GranularityToJSON(message.validationGranularity);
    }
    if (message.geocodeGranularity !== 0) {
      obj.geocodeGranularity = verdict_GranularityToJSON(message.geocodeGranularity);
    }
    if (message.addressComplete !== false) {
      obj.addressComplete = message.addressComplete;
    }
    if (message.hasUnconfirmedComponents !== false) {
      obj.hasUnconfirmedComponents = message.hasUnconfirmedComponents;
    }
    if (message.hasInferredComponents !== false) {
      obj.hasInferredComponents = message.hasInferredComponents;
    }
    if (message.hasReplacedComponents !== false) {
      obj.hasReplacedComponents = message.hasReplacedComponents;
    }
    return obj;
  },

  create(base?: DeepPartial<Verdict>): Verdict {
    return Verdict.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Verdict>): Verdict {
    const message = createBaseVerdict();
    message.inputGranularity = object.inputGranularity ?? 0;
    message.validationGranularity = object.validationGranularity ?? 0;
    message.geocodeGranularity = object.geocodeGranularity ?? 0;
    message.addressComplete = object.addressComplete ?? false;
    message.hasUnconfirmedComponents = object.hasUnconfirmedComponents ?? false;
    message.hasInferredComponents = object.hasInferredComponents ?? false;
    message.hasReplacedComponents = object.hasReplacedComponents ?? false;
    return message;
  },
};

/** The service for validating addresses. */
export type AddressValidationDefinition = typeof AddressValidationDefinition;
export const AddressValidationDefinition = {
  name: "AddressValidation",
  fullName: "google.maps.addressvalidation.v1.AddressValidation",
  methods: {
    /** Validates an address. */
    validateAddress: {
      name: "ValidateAddress",
      requestType: ValidateAddressRequest,
      requestStream: false,
      responseType: ValidateAddressResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              24,
              58,
              1,
              42,
              34,
              19,
              47,
              118,
              49,
              58,
              118,
              97,
              108,
              105,
              100,
              97,
              116,
              101,
              65,
              100,
              100,
              114,
              101,
              115,
              115,
            ]),
          ],
        },
      },
    },
    /**
     * Feedback about the outcome of the sequence of validation attempts. This
     * should be the last call made after a sequence of validation calls for the
     * same address, and should be called once the transaction is concluded. This
     * should only be sent once for the sequence of `ValidateAddress` requests
     * needed to validate an address fully.
     */
    provideValidationFeedback: {
      name: "ProvideValidationFeedback",
      requestType: ProvideValidationFeedbackRequest,
      requestStream: false,
      responseType: ProvideValidationFeedbackResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              34,
              58,
              1,
              42,
              34,
              29,
              47,
              118,
              49,
              58,
              112,
              114,
              111,
              118,
              105,
              100,
              101,
              86,
              97,
              108,
              105,
              100,
              97,
              116,
              105,
              111,
              110,
              70,
              101,
              101,
              100,
              98,
              97,
              99,
              107,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface AddressValidationServiceImplementation<CallContextExt = {}> {
  /** Validates an address. */
  validateAddress(
    request: ValidateAddressRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ValidateAddressResponse>>;
  /**
   * Feedback about the outcome of the sequence of validation attempts. This
   * should be the last call made after a sequence of validation calls for the
   * same address, and should be called once the transaction is concluded. This
   * should only be sent once for the sequence of `ValidateAddress` requests
   * needed to validate an address fully.
   */
  provideValidationFeedback(
    request: ProvideValidationFeedbackRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ProvideValidationFeedbackResponse>>;
}

export interface AddressValidationClient<CallOptionsExt = {}> {
  /** Validates an address. */
  validateAddress(
    request: DeepPartial<ValidateAddressRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ValidateAddressResponse>;
  /**
   * Feedback about the outcome of the sequence of validation attempts. This
   * should be the last call made after a sequence of validation calls for the
   * same address, and should be called once the transaction is concluded. This
   * should only be sent once for the sequence of `ValidateAddress` requests
   * needed to validate an address fully.
   */
  provideValidationFeedback(
    request: DeepPartial<ProvideValidationFeedbackRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ProvideValidationFeedbackResponse>;
}

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
