// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/playablelocations/v3/playablelocations.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Duration } from "../../../protobuf/duration.js";
import { ClientInfo } from "../../unity/clientinfo.js";
import { Impression, PlayerReport } from "./resources.js";
import { AreaFilter, Criterion, PlayableLocationList } from "./sample/resources.js";

export const protobufPackage = "google.maps.playablelocations.v3";

/**
 * Life of a query:
 *
 * - When a game starts in a new location, your game server issues a
 * [SamplePlayableLocations][google.maps.playablelocations.v3.PlayableLocations.SamplePlayableLocations]
 * request. The request specifies the S2 cell, and contains one or more
 * "criteria" for filtering:
 *
 * - Criterion 0: i locations for long-lived bases, or level 0 monsters, or...
 * - Criterion 1: j locations for short-lived bases, or level 1 monsters, ...
 * - Criterion 2: k locations for random objects.
 * - etc (up to 5 criterion may be specified).
 *
 * `PlayableLocationList` will then contain mutually
 * exclusive lists of `PlayableLocation` objects that satisfy each of
 * the criteria. Think of it as a collection of real-world locations that you
 * can then associate with your game state.
 *
 * Note: These points are impermanent in nature. E.g, parks can close, and
 * places can be removed.
 *
 * The response specifies how long you can expect the playable locations to
 * last. Once they expire, you should query the `samplePlayableLocations` API
 * again to get a fresh view of the real world.
 */
export interface SamplePlayableLocationsRequest {
  /** Required. Specifies the area to search within for playable locations. */
  areaFilter:
    | AreaFilter
    | undefined;
  /**
   * Required. Specifies one or more (up to 5) criteria for filtering the
   * returned playable locations.
   */
  criteria: Criterion[];
}

/**
 * Response for the
 * [SamplePlayableLocations][google.maps.playablelocations.v3.PlayableLocations.SamplePlayableLocations]
 * method.
 */
export interface SamplePlayableLocationsResponse {
  /**
   * Each PlayableLocation object corresponds to a game_object_type specified
   * in the request.
   */
  locationsPerGameObjectType: { [key: number]: PlayableLocationList };
  /**
   * Required. Specifies the "time-to-live" for the set of playable locations.
   * You can use this value to determine how long to cache the set of playable
   * locations. After this length of time, your back-end game server should
   * issue a new
   * [SamplePlayableLocations][google.maps.playablelocations.v3.PlayableLocations.SamplePlayableLocations]
   * request to get a fresh set of playable locations (because for example, they
   * might have been removed, a park might have closed for the day, a
   * business might have closed permanently).
   */
  ttl: Duration | undefined;
}

export interface SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry {
  key: number;
  value: PlayableLocationList | undefined;
}

/** A request for logging your player's bad location reports. */
export interface LogPlayerReportsRequest {
  /**
   * Required. Player reports. The maximum number of player reports that you can
   * log at once is 50.
   */
  playerReports: PlayerReport[];
  /**
   * Required. A string that uniquely identifies the log player reports request.
   * This allows you to detect duplicate requests. We recommend that you use
   * UUIDs for this value. The value must not exceed 50 characters.
   *
   * You should reuse the `request_id` only when retrying a request in the case
   * of a failure. In that case, the request must be identical to the one that
   * failed.
   */
  requestId: string;
  /**
   * Required. Information about the client device (for example, device model
   * and operating system).
   */
  clientInfo: ClientInfo | undefined;
}

/**
 * A response for the
 * [LogPlayerReports][google.maps.playablelocations.v3.PlayableLocations.LogPlayerReports]
 * method.
 *
 * This method returns no data upon success.
 */
export interface LogPlayerReportsResponse {
}

/** A request for logging impressions. */
export interface LogImpressionsRequest {
  /**
   * Required. Impression event details. The maximum number of impression
   * reports that you can log at once is 50.
   */
  impressions: Impression[];
  /**
   * Required. A string that uniquely identifies the log impressions request.
   * This allows you to detect duplicate requests. We recommend that you use
   * UUIDs for this value. The value must not exceed 50 characters.
   *
   * You should reuse the `request_id` only when retrying a request in case of
   * failure. In this case, the request must be identical to the one that
   * failed.
   */
  requestId: string;
  /**
   * Required. Information about the client device. For example, device model
   * and operating system.
   */
  clientInfo: ClientInfo | undefined;
}

/**
 * A response for the
 * [LogImpressions][google.maps.playablelocations.v3.PlayableLocations.LogImpressions]
 * method. This method returns no data upon success.
 */
export interface LogImpressionsResponse {
}

function createBaseSamplePlayableLocationsRequest(): SamplePlayableLocationsRequest {
  return { areaFilter: undefined, criteria: [] };
}

export const SamplePlayableLocationsRequest: MessageFns<SamplePlayableLocationsRequest> = {
  encode(message: SamplePlayableLocationsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.areaFilter !== undefined) {
      AreaFilter.encode(message.areaFilter, writer.uint32(10).fork()).join();
    }
    for (const v of message.criteria) {
      Criterion.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SamplePlayableLocationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSamplePlayableLocationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.areaFilter = AreaFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.criteria.push(Criterion.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SamplePlayableLocationsRequest {
    return {
      areaFilter: isSet(object.areaFilter) ? AreaFilter.fromJSON(object.areaFilter) : undefined,
      criteria: globalThis.Array.isArray(object?.criteria)
        ? object.criteria.map((e: any) => Criterion.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SamplePlayableLocationsRequest): unknown {
    const obj: any = {};
    if (message.areaFilter !== undefined) {
      obj.areaFilter = AreaFilter.toJSON(message.areaFilter);
    }
    if (message.criteria?.length) {
      obj.criteria = message.criteria.map((e) => Criterion.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<SamplePlayableLocationsRequest>): SamplePlayableLocationsRequest {
    return SamplePlayableLocationsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SamplePlayableLocationsRequest>): SamplePlayableLocationsRequest {
    const message = createBaseSamplePlayableLocationsRequest();
    message.areaFilter = (object.areaFilter !== undefined && object.areaFilter !== null)
      ? AreaFilter.fromPartial(object.areaFilter)
      : undefined;
    message.criteria = object.criteria?.map((e) => Criterion.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSamplePlayableLocationsResponse(): SamplePlayableLocationsResponse {
  return { locationsPerGameObjectType: {}, ttl: undefined };
}

export const SamplePlayableLocationsResponse: MessageFns<SamplePlayableLocationsResponse> = {
  encode(message: SamplePlayableLocationsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.locationsPerGameObjectType).forEach(([key, value]) => {
      SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry.encode(
        { key: key as any, value },
        writer.uint32(10).fork(),
      ).join();
    });
    if (message.ttl !== undefined) {
      Duration.encode(message.ttl, writer.uint32(74).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SamplePlayableLocationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSamplePlayableLocationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry.decode(
            reader,
            reader.uint32(),
          );
          if (entry1.value !== undefined) {
            message.locationsPerGameObjectType[entry1.key] = entry1.value;
          }
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.ttl = Duration.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SamplePlayableLocationsResponse {
    return {
      locationsPerGameObjectType: isObject(object.locationsPerGameObjectType)
        ? Object.entries(object.locationsPerGameObjectType).reduce<{ [key: number]: PlayableLocationList }>(
          (acc, [key, value]) => {
            acc[globalThis.Number(key)] = PlayableLocationList.fromJSON(value);
            return acc;
          },
          {},
        )
        : {},
      ttl: isSet(object.ttl) ? Duration.fromJSON(object.ttl) : undefined,
    };
  },

  toJSON(message: SamplePlayableLocationsResponse): unknown {
    const obj: any = {};
    if (message.locationsPerGameObjectType) {
      const entries = Object.entries(message.locationsPerGameObjectType);
      if (entries.length > 0) {
        obj.locationsPerGameObjectType = {};
        entries.forEach(([k, v]) => {
          obj.locationsPerGameObjectType[k] = PlayableLocationList.toJSON(v);
        });
      }
    }
    if (message.ttl !== undefined) {
      obj.ttl = Duration.toJSON(message.ttl);
    }
    return obj;
  },

  create(base?: DeepPartial<SamplePlayableLocationsResponse>): SamplePlayableLocationsResponse {
    return SamplePlayableLocationsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SamplePlayableLocationsResponse>): SamplePlayableLocationsResponse {
    const message = createBaseSamplePlayableLocationsResponse();
    message.locationsPerGameObjectType = Object.entries(object.locationsPerGameObjectType ?? {}).reduce<
      { [key: number]: PlayableLocationList }
    >((acc, [key, value]) => {
      if (value !== undefined) {
        acc[globalThis.Number(key)] = PlayableLocationList.fromPartial(value);
      }
      return acc;
    }, {});
    message.ttl = (object.ttl !== undefined && object.ttl !== null) ? Duration.fromPartial(object.ttl) : undefined;
    return message;
  },
};

function createBaseSamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry(): SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry {
  return { key: 0, value: undefined };
}

export const SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry: MessageFns<
  SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry
> = {
  encode(
    message: SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry,
    writer: BinaryWriter = new BinaryWriter(),
  ): BinaryWriter {
    if (message.key !== 0) {
      writer.uint32(8).int32(message.key);
    }
    if (message.value !== undefined) {
      PlayableLocationList.encode(message.value, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.key = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = PlayableLocationList.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry {
    return {
      key: isSet(object.key) ? globalThis.Number(object.key) : 0,
      value: isSet(object.value) ? PlayableLocationList.fromJSON(object.value) : undefined,
    };
  },

  toJSON(message: SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry): unknown {
    const obj: any = {};
    if (message.key !== 0) {
      obj.key = Math.round(message.key);
    }
    if (message.value !== undefined) {
      obj.value = PlayableLocationList.toJSON(message.value);
    }
    return obj;
  },

  create(
    base?: DeepPartial<SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry>,
  ): SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry {
    return SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry.fromPartial(base ?? {});
  },
  fromPartial(
    object: DeepPartial<SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry>,
  ): SamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry {
    const message = createBaseSamplePlayableLocationsResponse_LocationsPerGameObjectTypeEntry();
    message.key = object.key ?? 0;
    message.value = (object.value !== undefined && object.value !== null)
      ? PlayableLocationList.fromPartial(object.value)
      : undefined;
    return message;
  },
};

function createBaseLogPlayerReportsRequest(): LogPlayerReportsRequest {
  return { playerReports: [], requestId: "", clientInfo: undefined };
}

export const LogPlayerReportsRequest: MessageFns<LogPlayerReportsRequest> = {
  encode(message: LogPlayerReportsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.playerReports) {
      PlayerReport.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.requestId !== "") {
      writer.uint32(18).string(message.requestId);
    }
    if (message.clientInfo !== undefined) {
      ClientInfo.encode(message.clientInfo, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LogPlayerReportsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogPlayerReportsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.playerReports.push(PlayerReport.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clientInfo = ClientInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogPlayerReportsRequest {
    return {
      playerReports: globalThis.Array.isArray(object?.playerReports)
        ? object.playerReports.map((e: any) => PlayerReport.fromJSON(e))
        : [],
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      clientInfo: isSet(object.clientInfo) ? ClientInfo.fromJSON(object.clientInfo) : undefined,
    };
  },

  toJSON(message: LogPlayerReportsRequest): unknown {
    const obj: any = {};
    if (message.playerReports?.length) {
      obj.playerReports = message.playerReports.map((e) => PlayerReport.toJSON(e));
    }
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.clientInfo !== undefined) {
      obj.clientInfo = ClientInfo.toJSON(message.clientInfo);
    }
    return obj;
  },

  create(base?: DeepPartial<LogPlayerReportsRequest>): LogPlayerReportsRequest {
    return LogPlayerReportsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LogPlayerReportsRequest>): LogPlayerReportsRequest {
    const message = createBaseLogPlayerReportsRequest();
    message.playerReports = object.playerReports?.map((e) => PlayerReport.fromPartial(e)) || [];
    message.requestId = object.requestId ?? "";
    message.clientInfo = (object.clientInfo !== undefined && object.clientInfo !== null)
      ? ClientInfo.fromPartial(object.clientInfo)
      : undefined;
    return message;
  },
};

function createBaseLogPlayerReportsResponse(): LogPlayerReportsResponse {
  return {};
}

export const LogPlayerReportsResponse: MessageFns<LogPlayerReportsResponse> = {
  encode(_: LogPlayerReportsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LogPlayerReportsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogPlayerReportsResponse();
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

  fromJSON(_: any): LogPlayerReportsResponse {
    return {};
  },

  toJSON(_: LogPlayerReportsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<LogPlayerReportsResponse>): LogPlayerReportsResponse {
    return LogPlayerReportsResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<LogPlayerReportsResponse>): LogPlayerReportsResponse {
    const message = createBaseLogPlayerReportsResponse();
    return message;
  },
};

function createBaseLogImpressionsRequest(): LogImpressionsRequest {
  return { impressions: [], requestId: "", clientInfo: undefined };
}

export const LogImpressionsRequest: MessageFns<LogImpressionsRequest> = {
  encode(message: LogImpressionsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.impressions) {
      Impression.encode(v!, writer.uint32(10).fork()).join();
    }
    if (message.requestId !== "") {
      writer.uint32(18).string(message.requestId);
    }
    if (message.clientInfo !== undefined) {
      ClientInfo.encode(message.clientInfo, writer.uint32(26).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LogImpressionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogImpressionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.impressions.push(Impression.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.clientInfo = ClientInfo.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): LogImpressionsRequest {
    return {
      impressions: globalThis.Array.isArray(object?.impressions)
        ? object.impressions.map((e: any) => Impression.fromJSON(e))
        : [],
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      clientInfo: isSet(object.clientInfo) ? ClientInfo.fromJSON(object.clientInfo) : undefined,
    };
  },

  toJSON(message: LogImpressionsRequest): unknown {
    const obj: any = {};
    if (message.impressions?.length) {
      obj.impressions = message.impressions.map((e) => Impression.toJSON(e));
    }
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.clientInfo !== undefined) {
      obj.clientInfo = ClientInfo.toJSON(message.clientInfo);
    }
    return obj;
  },

  create(base?: DeepPartial<LogImpressionsRequest>): LogImpressionsRequest {
    return LogImpressionsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<LogImpressionsRequest>): LogImpressionsRequest {
    const message = createBaseLogImpressionsRequest();
    message.impressions = object.impressions?.map((e) => Impression.fromPartial(e)) || [];
    message.requestId = object.requestId ?? "";
    message.clientInfo = (object.clientInfo !== undefined && object.clientInfo !== null)
      ? ClientInfo.fromPartial(object.clientInfo)
      : undefined;
    return message;
  },
};

function createBaseLogImpressionsResponse(): LogImpressionsResponse {
  return {};
}

export const LogImpressionsResponse: MessageFns<LogImpressionsResponse> = {
  encode(_: LogImpressionsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): LogImpressionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLogImpressionsResponse();
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

  fromJSON(_: any): LogImpressionsResponse {
    return {};
  },

  toJSON(_: LogImpressionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<LogImpressionsResponse>): LogImpressionsResponse {
    return LogImpressionsResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<LogImpressionsResponse>): LogImpressionsResponse {
    const message = createBaseLogImpressionsResponse();
    return message;
  },
};

/** The Playable Locations API for v3. */
export type PlayableLocationsDefinition = typeof PlayableLocationsDefinition;
export const PlayableLocationsDefinition = {
  name: "PlayableLocations",
  fullName: "google.maps.playablelocations.v3.PlayableLocations",
  methods: {
    /**
     * Returns a set of playable locations that lie within a specified area,
     * that satisfy optional filter criteria.
     *
     * Note: Identical `SamplePlayableLocations` requests can return different
     * results as the state of the world changes over time.
     */
    samplePlayableLocations: {
      name: "SamplePlayableLocations",
      requestType: SamplePlayableLocationsRequest,
      requestStream: false,
      responseType: SamplePlayableLocationsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              32,
              58,
              1,
              42,
              34,
              27,
              47,
              118,
              51,
              58,
              115,
              97,
              109,
              112,
              108,
              101,
              80,
              108,
              97,
              121,
              97,
              98,
              108,
              101,
              76,
              111,
              99,
              97,
              116,
              105,
              111,
              110,
              115,
            ]),
          ],
        },
      },
    },
    /**
     * Logs bad playable location reports submitted by players.
     *
     * Reports are not partially saved; either all reports are saved and this
     * request succeeds, or no reports are saved, and this request fails.
     */
    logPlayerReports: {
      name: "LogPlayerReports",
      requestType: LogPlayerReportsRequest,
      requestStream: false,
      responseType: LogPlayerReportsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              25,
              58,
              1,
              42,
              34,
              20,
              47,
              118,
              51,
              58,
              108,
              111,
              103,
              80,
              108,
              97,
              121,
              101,
              114,
              82,
              101,
              112,
              111,
              114,
              116,
              115,
            ]),
          ],
        },
      },
    },
    /**
     * Logs new events when playable locations are displayed, and when they are
     * interacted with.
     *
     * Impressions are not partially saved; either all impressions are saved and
     * this request succeeds, or no impressions are saved, and this request fails.
     */
    logImpressions: {
      name: "LogImpressions",
      requestType: LogImpressionsRequest,
      requestStream: false,
      responseType: LogImpressionsResponse,
      responseStream: false,
      options: {
        _unknownFields: {
          578365826: [
            Buffer.from([
              23,
              58,
              1,
              42,
              34,
              18,
              47,
              118,
              51,
              58,
              108,
              111,
              103,
              73,
              109,
              112,
              114,
              101,
              115,
              115,
              105,
              111,
              110,
              115,
            ]),
          ],
        },
      },
    },
  },
} as const;

export interface PlayableLocationsServiceImplementation<CallContextExt = {}> {
  /**
   * Returns a set of playable locations that lie within a specified area,
   * that satisfy optional filter criteria.
   *
   * Note: Identical `SamplePlayableLocations` requests can return different
   * results as the state of the world changes over time.
   */
  samplePlayableLocations(
    request: SamplePlayableLocationsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SamplePlayableLocationsResponse>>;
  /**
   * Logs bad playable location reports submitted by players.
   *
   * Reports are not partially saved; either all reports are saved and this
   * request succeeds, or no reports are saved, and this request fails.
   */
  logPlayerReports(
    request: LogPlayerReportsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<LogPlayerReportsResponse>>;
  /**
   * Logs new events when playable locations are displayed, and when they are
   * interacted with.
   *
   * Impressions are not partially saved; either all impressions are saved and
   * this request succeeds, or no impressions are saved, and this request fails.
   */
  logImpressions(
    request: LogImpressionsRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<LogImpressionsResponse>>;
}

export interface PlayableLocationsClient<CallOptionsExt = {}> {
  /**
   * Returns a set of playable locations that lie within a specified area,
   * that satisfy optional filter criteria.
   *
   * Note: Identical `SamplePlayableLocations` requests can return different
   * results as the state of the world changes over time.
   */
  samplePlayableLocations(
    request: DeepPartial<SamplePlayableLocationsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SamplePlayableLocationsResponse>;
  /**
   * Logs bad playable location reports submitted by players.
   *
   * Reports are not partially saved; either all reports are saved and this
   * request succeeds, or no reports are saved, and this request fails.
   */
  logPlayerReports(
    request: DeepPartial<LogPlayerReportsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<LogPlayerReportsResponse>;
  /**
   * Logs new events when playable locations are displayed, and when they are
   * interacted with.
   *
   * Impressions are not partially saved; either all impressions are saved and
   * this request succeeds, or no impressions are saved, and this request fails.
   */
  logImpressions(
    request: DeepPartial<LogImpressionsRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<LogImpressionsResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

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