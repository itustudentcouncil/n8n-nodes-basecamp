// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/maps/routing/v2/traffic_model.proto

/* eslint-disable */

export const protobufPackage = "google.maps.routing.v2";

/**
 * Specifies the assumptions to use when calculating time in traffic. This
 * setting affects the value returned in the `duration` field in the
 * response, which contains the predicted time in traffic based on historical
 * averages.
 */
export enum TrafficModel {
  /** TRAFFIC_MODEL_UNSPECIFIED - Unused. If specified, will default to `BEST_GUESS`. */
  TRAFFIC_MODEL_UNSPECIFIED = 0,
  /**
   * BEST_GUESS - Indicates that the returned `duration` should be the best
   * estimate of travel time given what is known about both historical traffic
   * conditions and live traffic. Live traffic becomes more important the closer
   * the `departure_time` is to now.
   */
  BEST_GUESS = 1,
  /**
   * PESSIMISTIC - Indicates that the returned duration should be longer than the
   * actual travel time on most days, though occasional days with particularly
   * bad traffic conditions may exceed this value.
   */
  PESSIMISTIC = 2,
  /**
   * OPTIMISTIC - Indicates that the returned duration should be shorter than the actual
   * travel time on most days, though occasional days with particularly good
   * traffic conditions may be faster than this value.
   */
  OPTIMISTIC = 3,
  UNRECOGNIZED = -1,
}

export function trafficModelFromJSON(object: any): TrafficModel {
  switch (object) {
    case 0:
    case "TRAFFIC_MODEL_UNSPECIFIED":
      return TrafficModel.TRAFFIC_MODEL_UNSPECIFIED;
    case 1:
    case "BEST_GUESS":
      return TrafficModel.BEST_GUESS;
    case 2:
    case "PESSIMISTIC":
      return TrafficModel.PESSIMISTIC;
    case 3:
    case "OPTIMISTIC":
      return TrafficModel.OPTIMISTIC;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TrafficModel.UNRECOGNIZED;
  }
}

export function trafficModelToJSON(object: TrafficModel): string {
  switch (object) {
    case TrafficModel.TRAFFIC_MODEL_UNSPECIFIED:
      return "TRAFFIC_MODEL_UNSPECIFIED";
    case TrafficModel.BEST_GUESS:
      return "BEST_GUESS";
    case TrafficModel.PESSIMISTIC:
      return "PESSIMISTIC";
    case TrafficModel.OPTIMISTIC:
      return "OPTIMISTIC";
    case TrafficModel.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
