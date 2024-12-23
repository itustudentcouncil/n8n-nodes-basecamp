// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/addressvalidation/v1/usps_data.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.maps.addressvalidation.v1";

/** USPS representation of a US address. */
export interface UspsAddress {
  /** First address line. */
  firstAddressLine: string;
  /** Firm name. */
  firm: string;
  /** Second address line. */
  secondAddressLine: string;
  /** Puerto Rican urbanization name. */
  urbanization: string;
  /** City + state + postal code. */
  cityStateZipAddressLine: string;
  /** City name. */
  city: string;
  /** 2 letter state code. */
  state: string;
  /** Postal code e.g. 10009. */
  zipCode: string;
  /** 4-digit postal code extension e.g. 5023. */
  zipCodeExtension: string;
}

/**
 * The USPS data for the address. `uspsData` is not guaranteed to be fully
 * populated for every US or PR address sent to the Address Validation API. It's
 * recommended to integrate the backup address fields in the response if you
 * utilize uspsData as the primary part of the response.
 */
export interface UspsData {
  /** USPS standardized address. */
  standardizedAddress:
    | UspsAddress
    | undefined;
  /** 2 digit delivery point code */
  deliveryPointCode: string;
  /**
   * The delivery point check digit. This number is added to the end of the
   * delivery_point_barcode for mechanically scanned mail. Adding all the
   * digits of the delivery_point_barcode, delivery_point_check_digit, postal
   * code, and ZIP+4 together should yield a number divisible by 10.
   */
  deliveryPointCheckDigit: string;
  /**
   * The possible values for DPV confirmation. Returns a single character or
   * returns no value.
   *
   * * `N`: Primary and any secondary number information failed to
   * DPV confirm.
   * * `D`: Address was DPV confirmed for the primary number only, and the
   * secondary number information was missing.
   * * `S`: Address was DPV confirmed for the primary number only, and the
   * secondary number information was present but not confirmed.
   * * `Y`: Address was DPV confirmed for primary and any secondary numbers.
   * * Empty: If the response does not contain a `dpv_confirmation` value, the
   * address was not submitted for DPV confirmation.
   */
  dpvConfirmation: string;
  /**
   * The footnotes from delivery point validation.
   * Multiple footnotes may be strung together in the same string.
   *
   * * `AA`: Input address matched to the ZIP+4 file
   * * `A1`: Input address was not matched to the ZIP+4 file
   * * `BB`: Matched to DPV (all components)
   * * `CC`: Secondary number not matched and not required
   * * `C1`: Secondary number not matched but required
   * * `N1`: High-rise address missing secondary number
   * * `M1`: Primary number missing
   * * `M3`: Primary number invalid
   * * `P1`: Input address PO, RR or HC box number missing
   * * `P3`: Input address PO, RR, or HC Box number invalid
   * * `F1`: Input address matched to a military address
   * * `G1`: Input address matched to a general delivery address
   * * `U1`: Input address matched to a unique ZIP code
   * * `PB`: Input address matched to PBSA record
   * * `RR`: DPV confirmed address with PMB information
   * * `R1`: DPV confirmed address without PMB information
   * * `R7`: Carrier Route R777 or R779 record
   * * `IA`: Informed Address identified
   * * `TA`: Primary number matched by dropping a trailing alpha
   */
  dpvFootnote: string;
  /**
   * Indicates if the address is a CMRA (Commercial Mail Receiving Agency)--a
   * private business receiving mail for clients. Returns a single character.
   *
   * * `Y`: The address is a CMRA
   * * `N`: The address is not a CMRA
   */
  dpvCmra: string;
  /**
   * Is this place vacant?
   * Returns a single character.
   *
   * * `Y`: The address is vacant
   * * `N`: The address is not vacant
   */
  dpvVacant: string;
  /**
   * Is this a no stat address or an active address?
   * No stat addresses are ones which are not continuously occupied or addresses
   * that the USPS does not service. Returns a single character.
   *
   * * `Y`: The address is not active
   * * `N`: The address is active
   */
  dpvNoStat: string;
  /**
   * Indicates the NoStat type. Returns a reason code as int.
   *
   * * `1`: IDA (Internal Drop Address) – Addresses that do not receive mail
   * directly from the USPS but are delivered to a drop address that services
   * them.
   * * `2`: CDS - Addresses that have not yet become deliverable. For example, a
   * new subdivision where lots and primary numbers have been determined, but no
   * structure exists yet for occupancy.
   * * `3`: Collision - Addresses that do not actually DPV confirm.
   * * `4`: CMZ (College, Military and Other Types) - ZIP + 4 records USPS has
   * incorporated into the data.
   * * `5`: Regular - Indicates addresses not receiving delivery and the
   * addresses are not counted as possible deliveries.
   * * `6`: Secondary Required - The address requires secondary information.
   */
  dpvNoStatReasonCode: number;
  /**
   * Flag indicates mail is delivered to a single receptable at a site.
   * Returns a single character.
   *
   * * `Y`: The mail is delivered to a single receptable at a site.
   * * `N`: The mail is not delivered to a single receptable at a site.
   */
  dpvDrop: string;
  /**
   * Indicates that mail is not delivered to the street address.
   * Returns a single character.
   *
   * * `Y`: The mail is not delivered to the street address.
   * * `N`: The mail is delivered to the street address.
   */
  dpvThrowback: string;
  /**
   * Flag indicates mail delivery is not performed every day of the week.
   * Returns a single character.
   *
   * * `Y`: The mail delivery is not performed every day of the week.
   * * `N`: No indication the mail delivery is not performed every day of the
   * week.
   */
  dpvNonDeliveryDays: string;
  /**
   * Integer identifying non-delivery days. It can be interrogated using bit
   * flags:
   * 0x40 – Sunday is a non-delivery day
   * 0x20 – Monday is a non-delivery day
   * 0x10 – Tuesday is a non-delivery day
   * 0x08 – Wednesday is a non-delivery day
   * 0x04 – Thursday is a non-delivery day
   * 0x02 – Friday is a non-delivery day
   * 0x01 – Saturday is a non-delivery day
   */
  dpvNonDeliveryDaysValues: number;
  /**
   * Flag indicates door is accessible, but package will not be left due to
   * security concerns.
   * Returns a single character.
   *
   * * `Y`: The package will not be left due to security concerns.
   * * `N`: No indication the package will not be left due to security concerns.
   */
  dpvNoSecureLocation: string;
  /**
   * Indicates the address was matched to PBSA record.
   * Returns a single character.
   *
   * * `Y`: The address was matched to PBSA record.
   * * `N`: The address was not matched to PBSA record.
   */
  dpvPbsa: string;
  /**
   * Flag indicates addresses where USPS cannot knock on a door to deliver mail.
   * Returns a single character.
   *
   * * `Y`: The door is not accessible.
   * * `N`: No indication the door is not accessible.
   */
  dpvDoorNotAccessible: string;
  /**
   * Indicates that more than one DPV return code is valid for the address.
   * Returns a single character.
   *
   * * `Y`: Address was DPV confirmed for primary and any secondary numbers.
   * * `N`: Primary and any secondary number information failed to
   * DPV confirm.
   * * `S`: Address was DPV confirmed for the primary number only, and the
   * secondary number information was present by not confirmed,  or a single
   * trailing alpha on a primary number was dropped to make a DPV match and
   * secondary information required.
   * * `D`: Address was DPV confirmed for the primary number only, and the
   * secondary number information was missing.
   * * `R`: Address confirmed but assigned to phantom route R777 and R779 and
   * USPS delivery is not provided.
   */
  dpvEnhancedDeliveryCode: string;
  /**
   * The carrier route code.
   * A four character code consisting of a one letter prefix and a three digit
   * route designator.
   *
   * Prefixes:
   *
   * * `C`: Carrier route (or city route)
   * * `R`: Rural route
   * * `H`: Highway Contract Route
   * * `B`: Post Office Box Section
   * * `G`: General delivery unit
   */
  carrierRoute: string;
  /** Carrier route rate sort indicator. */
  carrierRouteIndicator: string;
  /**
   * The delivery address is matchable, but the EWS file indicates that an exact
   * match will be available soon.
   */
  ewsNoMatch: boolean;
  /** Main post office city. */
  postOfficeCity: string;
  /** Main post office state. */
  postOfficeState: string;
  /** Abbreviated city. */
  abbreviatedCity: string;
  /** FIPS county code. */
  fipsCountyCode: string;
  /** County name. */
  county: string;
  /** Enhanced Line of Travel (eLOT) number. */
  elotNumber: string;
  /** eLOT Ascending/Descending Flag (A/D). */
  elotFlag: string;
  /** LACSLink return code. */
  lacsLinkReturnCode: string;
  /** LACSLink indicator. */
  lacsLinkIndicator: string;
  /** PO Box only postal code. */
  poBoxOnlyPostalCode: boolean;
  /**
   * Footnotes from matching a street or highrise record to suite information.
   * If business name match is found, the secondary number is returned.
   *
   * * `A`: SuiteLink record match, business address improved.
   * * `00`: No match, business address is not improved.
   */
  suitelinkFootnote: string;
  /** PMB (Private Mail Box) unit designator. */
  pmbDesignator: string;
  /** PMB (Private Mail Box) number; */
  pmbNumber: string;
  /**
   * Type of the address record that matches the input address.
   *
   * * `F`: FIRM. This is a match to a Firm Record, which is the finest level of
   * match available for an address.
   * * `G`: GENERAL DELIVERY. This is a match to a General Delivery record.
   * * `H`: BUILDING / APARTMENT. This is a match to a Building or Apartment
   * record.
   * * `P`: POST OFFICE BOX. This is a match to a Post Office Box.
   * * `R`: RURAL ROUTE or HIGHWAY CONTRACT: This is a match to either a Rural
   * Route or a Highway Contract record, both of which may have associated Box
   * Number ranges.
   * * `S`: STREET RECORD: This is a match to a Street record containing a valid
   * primary number range.
   */
  addressRecordType: string;
  /**
   * Indicator that a default address was found, but more specific addresses
   * exists.
   */
  defaultAddress: boolean;
  /**
   * Error message for USPS data retrieval. This is populated when USPS
   * processing is suspended because of the detection of artificially created
   * addresses.
   *
   * The USPS data fields might not be populated when this error is present.
   */
  errorMessage: string;
  /** Indicator that the request has been CASS processed. */
  cassProcessed: boolean;
}

function createBaseUspsAddress(): UspsAddress {
  return {
    firstAddressLine: "",
    firm: "",
    secondAddressLine: "",
    urbanization: "",
    cityStateZipAddressLine: "",
    city: "",
    state: "",
    zipCode: "",
    zipCodeExtension: "",
  };
}

export const UspsAddress: MessageFns<UspsAddress> = {
  encode(message: UspsAddress, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.firstAddressLine !== "") {
      writer.uint32(10).string(message.firstAddressLine);
    }
    if (message.firm !== "") {
      writer.uint32(18).string(message.firm);
    }
    if (message.secondAddressLine !== "") {
      writer.uint32(26).string(message.secondAddressLine);
    }
    if (message.urbanization !== "") {
      writer.uint32(34).string(message.urbanization);
    }
    if (message.cityStateZipAddressLine !== "") {
      writer.uint32(42).string(message.cityStateZipAddressLine);
    }
    if (message.city !== "") {
      writer.uint32(50).string(message.city);
    }
    if (message.state !== "") {
      writer.uint32(58).string(message.state);
    }
    if (message.zipCode !== "") {
      writer.uint32(66).string(message.zipCode);
    }
    if (message.zipCodeExtension !== "") {
      writer.uint32(74).string(message.zipCodeExtension);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UspsAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUspsAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.firstAddressLine = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.firm = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.secondAddressLine = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.urbanization = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.cityStateZipAddressLine = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.city = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.state = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.zipCode = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.zipCodeExtension = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UspsAddress {
    return {
      firstAddressLine: isSet(object.firstAddressLine) ? globalThis.String(object.firstAddressLine) : "",
      firm: isSet(object.firm) ? globalThis.String(object.firm) : "",
      secondAddressLine: isSet(object.secondAddressLine) ? globalThis.String(object.secondAddressLine) : "",
      urbanization: isSet(object.urbanization) ? globalThis.String(object.urbanization) : "",
      cityStateZipAddressLine: isSet(object.cityStateZipAddressLine)
        ? globalThis.String(object.cityStateZipAddressLine)
        : "",
      city: isSet(object.city) ? globalThis.String(object.city) : "",
      state: isSet(object.state) ? globalThis.String(object.state) : "",
      zipCode: isSet(object.zipCode) ? globalThis.String(object.zipCode) : "",
      zipCodeExtension: isSet(object.zipCodeExtension) ? globalThis.String(object.zipCodeExtension) : "",
    };
  },

  toJSON(message: UspsAddress): unknown {
    const obj: any = {};
    if (message.firstAddressLine !== "") {
      obj.firstAddressLine = message.firstAddressLine;
    }
    if (message.firm !== "") {
      obj.firm = message.firm;
    }
    if (message.secondAddressLine !== "") {
      obj.secondAddressLine = message.secondAddressLine;
    }
    if (message.urbanization !== "") {
      obj.urbanization = message.urbanization;
    }
    if (message.cityStateZipAddressLine !== "") {
      obj.cityStateZipAddressLine = message.cityStateZipAddressLine;
    }
    if (message.city !== "") {
      obj.city = message.city;
    }
    if (message.state !== "") {
      obj.state = message.state;
    }
    if (message.zipCode !== "") {
      obj.zipCode = message.zipCode;
    }
    if (message.zipCodeExtension !== "") {
      obj.zipCodeExtension = message.zipCodeExtension;
    }
    return obj;
  },

  create(base?: DeepPartial<UspsAddress>): UspsAddress {
    return UspsAddress.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UspsAddress>): UspsAddress {
    const message = createBaseUspsAddress();
    message.firstAddressLine = object.firstAddressLine ?? "";
    message.firm = object.firm ?? "";
    message.secondAddressLine = object.secondAddressLine ?? "";
    message.urbanization = object.urbanization ?? "";
    message.cityStateZipAddressLine = object.cityStateZipAddressLine ?? "";
    message.city = object.city ?? "";
    message.state = object.state ?? "";
    message.zipCode = object.zipCode ?? "";
    message.zipCodeExtension = object.zipCodeExtension ?? "";
    return message;
  },
};

function createBaseUspsData(): UspsData {
  return {
    standardizedAddress: undefined,
    deliveryPointCode: "",
    deliveryPointCheckDigit: "",
    dpvConfirmation: "",
    dpvFootnote: "",
    dpvCmra: "",
    dpvVacant: "",
    dpvNoStat: "",
    dpvNoStatReasonCode: 0,
    dpvDrop: "",
    dpvThrowback: "",
    dpvNonDeliveryDays: "",
    dpvNonDeliveryDaysValues: 0,
    dpvNoSecureLocation: "",
    dpvPbsa: "",
    dpvDoorNotAccessible: "",
    dpvEnhancedDeliveryCode: "",
    carrierRoute: "",
    carrierRouteIndicator: "",
    ewsNoMatch: false,
    postOfficeCity: "",
    postOfficeState: "",
    abbreviatedCity: "",
    fipsCountyCode: "",
    county: "",
    elotNumber: "",
    elotFlag: "",
    lacsLinkReturnCode: "",
    lacsLinkIndicator: "",
    poBoxOnlyPostalCode: false,
    suitelinkFootnote: "",
    pmbDesignator: "",
    pmbNumber: "",
    addressRecordType: "",
    defaultAddress: false,
    errorMessage: "",
    cassProcessed: false,
  };
}

export const UspsData: MessageFns<UspsData> = {
  encode(message: UspsData, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.standardizedAddress !== undefined) {
      UspsAddress.encode(message.standardizedAddress, writer.uint32(10).fork()).join();
    }
    if (message.deliveryPointCode !== "") {
      writer.uint32(18).string(message.deliveryPointCode);
    }
    if (message.deliveryPointCheckDigit !== "") {
      writer.uint32(26).string(message.deliveryPointCheckDigit);
    }
    if (message.dpvConfirmation !== "") {
      writer.uint32(34).string(message.dpvConfirmation);
    }
    if (message.dpvFootnote !== "") {
      writer.uint32(42).string(message.dpvFootnote);
    }
    if (message.dpvCmra !== "") {
      writer.uint32(50).string(message.dpvCmra);
    }
    if (message.dpvVacant !== "") {
      writer.uint32(58).string(message.dpvVacant);
    }
    if (message.dpvNoStat !== "") {
      writer.uint32(66).string(message.dpvNoStat);
    }
    if (message.dpvNoStatReasonCode !== 0) {
      writer.uint32(232).int32(message.dpvNoStatReasonCode);
    }
    if (message.dpvDrop !== "") {
      writer.uint32(242).string(message.dpvDrop);
    }
    if (message.dpvThrowback !== "") {
      writer.uint32(250).string(message.dpvThrowback);
    }
    if (message.dpvNonDeliveryDays !== "") {
      writer.uint32(258).string(message.dpvNonDeliveryDays);
    }
    if (message.dpvNonDeliveryDaysValues !== 0) {
      writer.uint32(264).int32(message.dpvNonDeliveryDaysValues);
    }
    if (message.dpvNoSecureLocation !== "") {
      writer.uint32(274).string(message.dpvNoSecureLocation);
    }
    if (message.dpvPbsa !== "") {
      writer.uint32(282).string(message.dpvPbsa);
    }
    if (message.dpvDoorNotAccessible !== "") {
      writer.uint32(290).string(message.dpvDoorNotAccessible);
    }
    if (message.dpvEnhancedDeliveryCode !== "") {
      writer.uint32(298).string(message.dpvEnhancedDeliveryCode);
    }
    if (message.carrierRoute !== "") {
      writer.uint32(74).string(message.carrierRoute);
    }
    if (message.carrierRouteIndicator !== "") {
      writer.uint32(82).string(message.carrierRouteIndicator);
    }
    if (message.ewsNoMatch !== false) {
      writer.uint32(88).bool(message.ewsNoMatch);
    }
    if (message.postOfficeCity !== "") {
      writer.uint32(98).string(message.postOfficeCity);
    }
    if (message.postOfficeState !== "") {
      writer.uint32(106).string(message.postOfficeState);
    }
    if (message.abbreviatedCity !== "") {
      writer.uint32(114).string(message.abbreviatedCity);
    }
    if (message.fipsCountyCode !== "") {
      writer.uint32(122).string(message.fipsCountyCode);
    }
    if (message.county !== "") {
      writer.uint32(130).string(message.county);
    }
    if (message.elotNumber !== "") {
      writer.uint32(138).string(message.elotNumber);
    }
    if (message.elotFlag !== "") {
      writer.uint32(146).string(message.elotFlag);
    }
    if (message.lacsLinkReturnCode !== "") {
      writer.uint32(154).string(message.lacsLinkReturnCode);
    }
    if (message.lacsLinkIndicator !== "") {
      writer.uint32(162).string(message.lacsLinkIndicator);
    }
    if (message.poBoxOnlyPostalCode !== false) {
      writer.uint32(168).bool(message.poBoxOnlyPostalCode);
    }
    if (message.suitelinkFootnote !== "") {
      writer.uint32(178).string(message.suitelinkFootnote);
    }
    if (message.pmbDesignator !== "") {
      writer.uint32(186).string(message.pmbDesignator);
    }
    if (message.pmbNumber !== "") {
      writer.uint32(194).string(message.pmbNumber);
    }
    if (message.addressRecordType !== "") {
      writer.uint32(202).string(message.addressRecordType);
    }
    if (message.defaultAddress !== false) {
      writer.uint32(208).bool(message.defaultAddress);
    }
    if (message.errorMessage !== "") {
      writer.uint32(218).string(message.errorMessage);
    }
    if (message.cassProcessed !== false) {
      writer.uint32(224).bool(message.cassProcessed);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UspsData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUspsData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.standardizedAddress = UspsAddress.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.deliveryPointCode = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.deliveryPointCheckDigit = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.dpvConfirmation = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.dpvFootnote = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.dpvCmra = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.dpvVacant = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.dpvNoStat = reader.string();
          continue;
        case 29:
          if (tag !== 232) {
            break;
          }

          message.dpvNoStatReasonCode = reader.int32();
          continue;
        case 30:
          if (tag !== 242) {
            break;
          }

          message.dpvDrop = reader.string();
          continue;
        case 31:
          if (tag !== 250) {
            break;
          }

          message.dpvThrowback = reader.string();
          continue;
        case 32:
          if (tag !== 258) {
            break;
          }

          message.dpvNonDeliveryDays = reader.string();
          continue;
        case 33:
          if (tag !== 264) {
            break;
          }

          message.dpvNonDeliveryDaysValues = reader.int32();
          continue;
        case 34:
          if (tag !== 274) {
            break;
          }

          message.dpvNoSecureLocation = reader.string();
          continue;
        case 35:
          if (tag !== 282) {
            break;
          }

          message.dpvPbsa = reader.string();
          continue;
        case 36:
          if (tag !== 290) {
            break;
          }

          message.dpvDoorNotAccessible = reader.string();
          continue;
        case 37:
          if (tag !== 298) {
            break;
          }

          message.dpvEnhancedDeliveryCode = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.carrierRoute = reader.string();
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.carrierRouteIndicator = reader.string();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.ewsNoMatch = reader.bool();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.postOfficeCity = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.postOfficeState = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.abbreviatedCity = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.fipsCountyCode = reader.string();
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.county = reader.string();
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.elotNumber = reader.string();
          continue;
        case 18:
          if (tag !== 146) {
            break;
          }

          message.elotFlag = reader.string();
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.lacsLinkReturnCode = reader.string();
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.lacsLinkIndicator = reader.string();
          continue;
        case 21:
          if (tag !== 168) {
            break;
          }

          message.poBoxOnlyPostalCode = reader.bool();
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.suitelinkFootnote = reader.string();
          continue;
        case 23:
          if (tag !== 186) {
            break;
          }

          message.pmbDesignator = reader.string();
          continue;
        case 24:
          if (tag !== 194) {
            break;
          }

          message.pmbNumber = reader.string();
          continue;
        case 25:
          if (tag !== 202) {
            break;
          }

          message.addressRecordType = reader.string();
          continue;
        case 26:
          if (tag !== 208) {
            break;
          }

          message.defaultAddress = reader.bool();
          continue;
        case 27:
          if (tag !== 218) {
            break;
          }

          message.errorMessage = reader.string();
          continue;
        case 28:
          if (tag !== 224) {
            break;
          }

          message.cassProcessed = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UspsData {
    return {
      standardizedAddress: isSet(object.standardizedAddress)
        ? UspsAddress.fromJSON(object.standardizedAddress)
        : undefined,
      deliveryPointCode: isSet(object.deliveryPointCode) ? globalThis.String(object.deliveryPointCode) : "",
      deliveryPointCheckDigit: isSet(object.deliveryPointCheckDigit)
        ? globalThis.String(object.deliveryPointCheckDigit)
        : "",
      dpvConfirmation: isSet(object.dpvConfirmation) ? globalThis.String(object.dpvConfirmation) : "",
      dpvFootnote: isSet(object.dpvFootnote) ? globalThis.String(object.dpvFootnote) : "",
      dpvCmra: isSet(object.dpvCmra) ? globalThis.String(object.dpvCmra) : "",
      dpvVacant: isSet(object.dpvVacant) ? globalThis.String(object.dpvVacant) : "",
      dpvNoStat: isSet(object.dpvNoStat) ? globalThis.String(object.dpvNoStat) : "",
      dpvNoStatReasonCode: isSet(object.dpvNoStatReasonCode) ? globalThis.Number(object.dpvNoStatReasonCode) : 0,
      dpvDrop: isSet(object.dpvDrop) ? globalThis.String(object.dpvDrop) : "",
      dpvThrowback: isSet(object.dpvThrowback) ? globalThis.String(object.dpvThrowback) : "",
      dpvNonDeliveryDays: isSet(object.dpvNonDeliveryDays) ? globalThis.String(object.dpvNonDeliveryDays) : "",
      dpvNonDeliveryDaysValues: isSet(object.dpvNonDeliveryDaysValues)
        ? globalThis.Number(object.dpvNonDeliveryDaysValues)
        : 0,
      dpvNoSecureLocation: isSet(object.dpvNoSecureLocation) ? globalThis.String(object.dpvNoSecureLocation) : "",
      dpvPbsa: isSet(object.dpvPbsa) ? globalThis.String(object.dpvPbsa) : "",
      dpvDoorNotAccessible: isSet(object.dpvDoorNotAccessible) ? globalThis.String(object.dpvDoorNotAccessible) : "",
      dpvEnhancedDeliveryCode: isSet(object.dpvEnhancedDeliveryCode)
        ? globalThis.String(object.dpvEnhancedDeliveryCode)
        : "",
      carrierRoute: isSet(object.carrierRoute) ? globalThis.String(object.carrierRoute) : "",
      carrierRouteIndicator: isSet(object.carrierRouteIndicator) ? globalThis.String(object.carrierRouteIndicator) : "",
      ewsNoMatch: isSet(object.ewsNoMatch) ? globalThis.Boolean(object.ewsNoMatch) : false,
      postOfficeCity: isSet(object.postOfficeCity) ? globalThis.String(object.postOfficeCity) : "",
      postOfficeState: isSet(object.postOfficeState) ? globalThis.String(object.postOfficeState) : "",
      abbreviatedCity: isSet(object.abbreviatedCity) ? globalThis.String(object.abbreviatedCity) : "",
      fipsCountyCode: isSet(object.fipsCountyCode) ? globalThis.String(object.fipsCountyCode) : "",
      county: isSet(object.county) ? globalThis.String(object.county) : "",
      elotNumber: isSet(object.elotNumber) ? globalThis.String(object.elotNumber) : "",
      elotFlag: isSet(object.elotFlag) ? globalThis.String(object.elotFlag) : "",
      lacsLinkReturnCode: isSet(object.lacsLinkReturnCode) ? globalThis.String(object.lacsLinkReturnCode) : "",
      lacsLinkIndicator: isSet(object.lacsLinkIndicator) ? globalThis.String(object.lacsLinkIndicator) : "",
      poBoxOnlyPostalCode: isSet(object.poBoxOnlyPostalCode) ? globalThis.Boolean(object.poBoxOnlyPostalCode) : false,
      suitelinkFootnote: isSet(object.suitelinkFootnote) ? globalThis.String(object.suitelinkFootnote) : "",
      pmbDesignator: isSet(object.pmbDesignator) ? globalThis.String(object.pmbDesignator) : "",
      pmbNumber: isSet(object.pmbNumber) ? globalThis.String(object.pmbNumber) : "",
      addressRecordType: isSet(object.addressRecordType) ? globalThis.String(object.addressRecordType) : "",
      defaultAddress: isSet(object.defaultAddress) ? globalThis.Boolean(object.defaultAddress) : false,
      errorMessage: isSet(object.errorMessage) ? globalThis.String(object.errorMessage) : "",
      cassProcessed: isSet(object.cassProcessed) ? globalThis.Boolean(object.cassProcessed) : false,
    };
  },

  toJSON(message: UspsData): unknown {
    const obj: any = {};
    if (message.standardizedAddress !== undefined) {
      obj.standardizedAddress = UspsAddress.toJSON(message.standardizedAddress);
    }
    if (message.deliveryPointCode !== "") {
      obj.deliveryPointCode = message.deliveryPointCode;
    }
    if (message.deliveryPointCheckDigit !== "") {
      obj.deliveryPointCheckDigit = message.deliveryPointCheckDigit;
    }
    if (message.dpvConfirmation !== "") {
      obj.dpvConfirmation = message.dpvConfirmation;
    }
    if (message.dpvFootnote !== "") {
      obj.dpvFootnote = message.dpvFootnote;
    }
    if (message.dpvCmra !== "") {
      obj.dpvCmra = message.dpvCmra;
    }
    if (message.dpvVacant !== "") {
      obj.dpvVacant = message.dpvVacant;
    }
    if (message.dpvNoStat !== "") {
      obj.dpvNoStat = message.dpvNoStat;
    }
    if (message.dpvNoStatReasonCode !== 0) {
      obj.dpvNoStatReasonCode = Math.round(message.dpvNoStatReasonCode);
    }
    if (message.dpvDrop !== "") {
      obj.dpvDrop = message.dpvDrop;
    }
    if (message.dpvThrowback !== "") {
      obj.dpvThrowback = message.dpvThrowback;
    }
    if (message.dpvNonDeliveryDays !== "") {
      obj.dpvNonDeliveryDays = message.dpvNonDeliveryDays;
    }
    if (message.dpvNonDeliveryDaysValues !== 0) {
      obj.dpvNonDeliveryDaysValues = Math.round(message.dpvNonDeliveryDaysValues);
    }
    if (message.dpvNoSecureLocation !== "") {
      obj.dpvNoSecureLocation = message.dpvNoSecureLocation;
    }
    if (message.dpvPbsa !== "") {
      obj.dpvPbsa = message.dpvPbsa;
    }
    if (message.dpvDoorNotAccessible !== "") {
      obj.dpvDoorNotAccessible = message.dpvDoorNotAccessible;
    }
    if (message.dpvEnhancedDeliveryCode !== "") {
      obj.dpvEnhancedDeliveryCode = message.dpvEnhancedDeliveryCode;
    }
    if (message.carrierRoute !== "") {
      obj.carrierRoute = message.carrierRoute;
    }
    if (message.carrierRouteIndicator !== "") {
      obj.carrierRouteIndicator = message.carrierRouteIndicator;
    }
    if (message.ewsNoMatch !== false) {
      obj.ewsNoMatch = message.ewsNoMatch;
    }
    if (message.postOfficeCity !== "") {
      obj.postOfficeCity = message.postOfficeCity;
    }
    if (message.postOfficeState !== "") {
      obj.postOfficeState = message.postOfficeState;
    }
    if (message.abbreviatedCity !== "") {
      obj.abbreviatedCity = message.abbreviatedCity;
    }
    if (message.fipsCountyCode !== "") {
      obj.fipsCountyCode = message.fipsCountyCode;
    }
    if (message.county !== "") {
      obj.county = message.county;
    }
    if (message.elotNumber !== "") {
      obj.elotNumber = message.elotNumber;
    }
    if (message.elotFlag !== "") {
      obj.elotFlag = message.elotFlag;
    }
    if (message.lacsLinkReturnCode !== "") {
      obj.lacsLinkReturnCode = message.lacsLinkReturnCode;
    }
    if (message.lacsLinkIndicator !== "") {
      obj.lacsLinkIndicator = message.lacsLinkIndicator;
    }
    if (message.poBoxOnlyPostalCode !== false) {
      obj.poBoxOnlyPostalCode = message.poBoxOnlyPostalCode;
    }
    if (message.suitelinkFootnote !== "") {
      obj.suitelinkFootnote = message.suitelinkFootnote;
    }
    if (message.pmbDesignator !== "") {
      obj.pmbDesignator = message.pmbDesignator;
    }
    if (message.pmbNumber !== "") {
      obj.pmbNumber = message.pmbNumber;
    }
    if (message.addressRecordType !== "") {
      obj.addressRecordType = message.addressRecordType;
    }
    if (message.defaultAddress !== false) {
      obj.defaultAddress = message.defaultAddress;
    }
    if (message.errorMessage !== "") {
      obj.errorMessage = message.errorMessage;
    }
    if (message.cassProcessed !== false) {
      obj.cassProcessed = message.cassProcessed;
    }
    return obj;
  },

  create(base?: DeepPartial<UspsData>): UspsData {
    return UspsData.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UspsData>): UspsData {
    const message = createBaseUspsData();
    message.standardizedAddress = (object.standardizedAddress !== undefined && object.standardizedAddress !== null)
      ? UspsAddress.fromPartial(object.standardizedAddress)
      : undefined;
    message.deliveryPointCode = object.deliveryPointCode ?? "";
    message.deliveryPointCheckDigit = object.deliveryPointCheckDigit ?? "";
    message.dpvConfirmation = object.dpvConfirmation ?? "";
    message.dpvFootnote = object.dpvFootnote ?? "";
    message.dpvCmra = object.dpvCmra ?? "";
    message.dpvVacant = object.dpvVacant ?? "";
    message.dpvNoStat = object.dpvNoStat ?? "";
    message.dpvNoStatReasonCode = object.dpvNoStatReasonCode ?? 0;
    message.dpvDrop = object.dpvDrop ?? "";
    message.dpvThrowback = object.dpvThrowback ?? "";
    message.dpvNonDeliveryDays = object.dpvNonDeliveryDays ?? "";
    message.dpvNonDeliveryDaysValues = object.dpvNonDeliveryDaysValues ?? 0;
    message.dpvNoSecureLocation = object.dpvNoSecureLocation ?? "";
    message.dpvPbsa = object.dpvPbsa ?? "";
    message.dpvDoorNotAccessible = object.dpvDoorNotAccessible ?? "";
    message.dpvEnhancedDeliveryCode = object.dpvEnhancedDeliveryCode ?? "";
    message.carrierRoute = object.carrierRoute ?? "";
    message.carrierRouteIndicator = object.carrierRouteIndicator ?? "";
    message.ewsNoMatch = object.ewsNoMatch ?? false;
    message.postOfficeCity = object.postOfficeCity ?? "";
    message.postOfficeState = object.postOfficeState ?? "";
    message.abbreviatedCity = object.abbreviatedCity ?? "";
    message.fipsCountyCode = object.fipsCountyCode ?? "";
    message.county = object.county ?? "";
    message.elotNumber = object.elotNumber ?? "";
    message.elotFlag = object.elotFlag ?? "";
    message.lacsLinkReturnCode = object.lacsLinkReturnCode ?? "";
    message.lacsLinkIndicator = object.lacsLinkIndicator ?? "";
    message.poBoxOnlyPostalCode = object.poBoxOnlyPostalCode ?? false;
    message.suitelinkFootnote = object.suitelinkFootnote ?? "";
    message.pmbDesignator = object.pmbDesignator ?? "";
    message.pmbNumber = object.pmbNumber ?? "";
    message.addressRecordType = object.addressRecordType ?? "";
    message.defaultAddress = object.defaultAddress ?? false;
    message.errorMessage = object.errorMessage ?? "";
    message.cassProcessed = object.cassProcessed ?? false;
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
