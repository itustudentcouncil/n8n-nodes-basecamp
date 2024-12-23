// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/monitoring/dashboard/v1/metrics.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Aggregation, PickTimeSeriesFilter, StatisticalTimeSeriesFilter } from "./common.js";

export const protobufPackage = "google.monitoring.dashboard.v1";

/** Defines the possible types of spark chart supported by the `Scorecard`. */
export enum SparkChartType {
  /** SPARK_CHART_TYPE_UNSPECIFIED - Not allowed in well-formed requests. */
  SPARK_CHART_TYPE_UNSPECIFIED = 0,
  /** SPARK_LINE - The sparkline will be rendered as a small line chart. */
  SPARK_LINE = 1,
  /** SPARK_BAR - The sparkbar will be rendered as a small bar chart. */
  SPARK_BAR = 2,
  UNRECOGNIZED = -1,
}

export function sparkChartTypeFromJSON(object: any): SparkChartType {
  switch (object) {
    case 0:
    case "SPARK_CHART_TYPE_UNSPECIFIED":
      return SparkChartType.SPARK_CHART_TYPE_UNSPECIFIED;
    case 1:
    case "SPARK_LINE":
      return SparkChartType.SPARK_LINE;
    case 2:
    case "SPARK_BAR":
      return SparkChartType.SPARK_BAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SparkChartType.UNRECOGNIZED;
  }
}

export function sparkChartTypeToJSON(object: SparkChartType): string {
  switch (object) {
    case SparkChartType.SPARK_CHART_TYPE_UNSPECIFIED:
      return "SPARK_CHART_TYPE_UNSPECIFIED";
    case SparkChartType.SPARK_LINE:
      return "SPARK_LINE";
    case SparkChartType.SPARK_BAR:
      return "SPARK_BAR";
    case SparkChartType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * TimeSeriesQuery collects the set of supported methods for querying time
 * series data from the Stackdriver metrics API.
 */
export interface TimeSeriesQuery {
  /** Filter parameters to fetch time series. */
  timeSeriesFilter?:
    | TimeSeriesFilter
    | undefined;
  /** Parameters to fetch a ratio between two time series filters. */
  timeSeriesFilterRatio?:
    | TimeSeriesFilterRatio
    | undefined;
  /** A query used to fetch time series with MQL. */
  timeSeriesQueryLanguage?:
    | string
    | undefined;
  /** A query used to fetch time series with PromQL. */
  prometheusQuery?:
    | string
    | undefined;
  /**
   * The unit of data contained in fetched time series. If non-empty, this
   * unit will override any unit that accompanies fetched data. The format is
   * the same as the
   * [`unit`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.metricDescriptors)
   * field in `MetricDescriptor`.
   */
  unitOverride: string;
  /**
   * Optional. If set, Cloud Monitoring will treat the full query duration as
   * the alignment period so that there will be only 1 output value.
   *
   * *Note: This could override the configured alignment period except for
   * the cases where a series of data points are expected, like
   *   - XyChart
   *   - Scorecard's spark chart
   */
  outputFullDuration: boolean;
}

/**
 * A filter that defines a subset of time series data that is displayed in a
 * widget. Time series data is fetched using the
 * [`ListTimeSeries`](https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list)
 * method.
 */
export interface TimeSeriesFilter {
  /**
   * Required. The [monitoring
   * filter](https://cloud.google.com/monitoring/api/v3/filters) that identifies
   * the metric types, resources, and projects to query.
   */
  filter: string;
  /**
   * By default, the raw time series data is returned.
   * Use this field to combine multiple time series for different views of the
   * data.
   */
  aggregation:
    | Aggregation
    | undefined;
  /** Apply a second aggregation after `aggregation` is applied. */
  secondaryAggregation:
    | Aggregation
    | undefined;
  /** Ranking based time series filter. */
  pickTimeSeriesFilter?:
    | PickTimeSeriesFilter
    | undefined;
  /**
   * Statistics based time series filter.
   * Note: This field is deprecated and completely ignored by the API.
   *
   * @deprecated
   */
  statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter | undefined;
}

/**
 * A pair of time series filters that define a ratio computation. The output
 * time series is the pair-wise division of each aligned element from the
 * numerator and denominator time series.
 */
export interface TimeSeriesFilterRatio {
  /** The numerator of the ratio. */
  numerator:
    | TimeSeriesFilterRatio_RatioPart
    | undefined;
  /** The denominator of the ratio. */
  denominator:
    | TimeSeriesFilterRatio_RatioPart
    | undefined;
  /** Apply a second aggregation after the ratio is computed. */
  secondaryAggregation:
    | Aggregation
    | undefined;
  /** Ranking based time series filter. */
  pickTimeSeriesFilter?:
    | PickTimeSeriesFilter
    | undefined;
  /**
   * Statistics based time series filter.
   * Note: This field is deprecated and completely ignored by the API.
   *
   * @deprecated
   */
  statisticalTimeSeriesFilter?: StatisticalTimeSeriesFilter | undefined;
}

/**
 * Describes a query to build the numerator or denominator of a
 * TimeSeriesFilterRatio.
 */
export interface TimeSeriesFilterRatio_RatioPart {
  /**
   * Required. The [monitoring
   * filter](https://cloud.google.com/monitoring/api/v3/filters) that
   * identifies the metric types, resources, and projects to query.
   */
  filter: string;
  /**
   * By default, the raw time series data is returned.
   * Use this field to combine multiple time series for different views of the
   * data.
   */
  aggregation: Aggregation | undefined;
}

/** Defines a threshold for categorizing time series values. */
export interface Threshold {
  /** A label for the threshold. */
  label: string;
  /**
   * The value of the threshold. The value should be defined in the native scale
   * of the metric.
   */
  value: number;
  /** The state color for this threshold. Color is not allowed in a XyChart. */
  color: Threshold_Color;
  /**
   * The direction for the current threshold. Direction is not allowed in a
   * XyChart.
   */
  direction: Threshold_Direction;
  /**
   * The target axis to use for plotting the threshold. Target axis is not
   * allowed in a Scorecard.
   */
  targetAxis: Threshold_TargetAxis;
}

/**
 * The color suggests an interpretation to the viewer when actual values cross
 * the threshold. Comments on each color provide UX guidance on how users can
 * be expected to interpret a given state color.
 */
export enum Threshold_Color {
  /** COLOR_UNSPECIFIED - Color is unspecified. Not allowed in well-formed requests. */
  COLOR_UNSPECIFIED = 0,
  /** YELLOW - Crossing the threshold is "concerning" behavior. */
  YELLOW = 4,
  /** RED - Crossing the threshold is "emergency" behavior. */
  RED = 6,
  UNRECOGNIZED = -1,
}

export function threshold_ColorFromJSON(object: any): Threshold_Color {
  switch (object) {
    case 0:
    case "COLOR_UNSPECIFIED":
      return Threshold_Color.COLOR_UNSPECIFIED;
    case 4:
    case "YELLOW":
      return Threshold_Color.YELLOW;
    case 6:
    case "RED":
      return Threshold_Color.RED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Threshold_Color.UNRECOGNIZED;
  }
}

export function threshold_ColorToJSON(object: Threshold_Color): string {
  switch (object) {
    case Threshold_Color.COLOR_UNSPECIFIED:
      return "COLOR_UNSPECIFIED";
    case Threshold_Color.YELLOW:
      return "YELLOW";
    case Threshold_Color.RED:
      return "RED";
    case Threshold_Color.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Whether the threshold is considered crossed by an actual value above or
 * below its threshold value.
 */
export enum Threshold_Direction {
  /** DIRECTION_UNSPECIFIED - Not allowed in well-formed requests. */
  DIRECTION_UNSPECIFIED = 0,
  /**
   * ABOVE - The threshold will be considered crossed if the actual value is above
   * the threshold value.
   */
  ABOVE = 1,
  /**
   * BELOW - The threshold will be considered crossed if the actual value is below
   * the threshold value.
   */
  BELOW = 2,
  UNRECOGNIZED = -1,
}

export function threshold_DirectionFromJSON(object: any): Threshold_Direction {
  switch (object) {
    case 0:
    case "DIRECTION_UNSPECIFIED":
      return Threshold_Direction.DIRECTION_UNSPECIFIED;
    case 1:
    case "ABOVE":
      return Threshold_Direction.ABOVE;
    case 2:
    case "BELOW":
      return Threshold_Direction.BELOW;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Threshold_Direction.UNRECOGNIZED;
  }
}

export function threshold_DirectionToJSON(object: Threshold_Direction): string {
  switch (object) {
    case Threshold_Direction.DIRECTION_UNSPECIFIED:
      return "DIRECTION_UNSPECIFIED";
    case Threshold_Direction.ABOVE:
      return "ABOVE";
    case Threshold_Direction.BELOW:
      return "BELOW";
    case Threshold_Direction.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** An axis identifier. */
export enum Threshold_TargetAxis {
  /** TARGET_AXIS_UNSPECIFIED - The target axis was not specified. Defaults to Y1. */
  TARGET_AXIS_UNSPECIFIED = 0,
  /** Y1 - The y_axis (the right axis of chart). */
  Y1 = 1,
  /** Y2 - The y2_axis (the left axis of chart). */
  Y2 = 2,
  UNRECOGNIZED = -1,
}

export function threshold_TargetAxisFromJSON(object: any): Threshold_TargetAxis {
  switch (object) {
    case 0:
    case "TARGET_AXIS_UNSPECIFIED":
      return Threshold_TargetAxis.TARGET_AXIS_UNSPECIFIED;
    case 1:
    case "Y1":
      return Threshold_TargetAxis.Y1;
    case 2:
    case "Y2":
      return Threshold_TargetAxis.Y2;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Threshold_TargetAxis.UNRECOGNIZED;
  }
}

export function threshold_TargetAxisToJSON(object: Threshold_TargetAxis): string {
  switch (object) {
    case Threshold_TargetAxis.TARGET_AXIS_UNSPECIFIED:
      return "TARGET_AXIS_UNSPECIFIED";
    case Threshold_TargetAxis.Y1:
      return "Y1";
    case Threshold_TargetAxis.Y2:
      return "Y2";
    case Threshold_TargetAxis.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseTimeSeriesQuery(): TimeSeriesQuery {
  return {
    timeSeriesFilter: undefined,
    timeSeriesFilterRatio: undefined,
    timeSeriesQueryLanguage: undefined,
    prometheusQuery: undefined,
    unitOverride: "",
    outputFullDuration: false,
  };
}

export const TimeSeriesQuery: MessageFns<TimeSeriesQuery> = {
  encode(message: TimeSeriesQuery, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.timeSeriesFilter !== undefined) {
      TimeSeriesFilter.encode(message.timeSeriesFilter, writer.uint32(10).fork()).join();
    }
    if (message.timeSeriesFilterRatio !== undefined) {
      TimeSeriesFilterRatio.encode(message.timeSeriesFilterRatio, writer.uint32(18).fork()).join();
    }
    if (message.timeSeriesQueryLanguage !== undefined) {
      writer.uint32(26).string(message.timeSeriesQueryLanguage);
    }
    if (message.prometheusQuery !== undefined) {
      writer.uint32(50).string(message.prometheusQuery);
    }
    if (message.unitOverride !== "") {
      writer.uint32(42).string(message.unitOverride);
    }
    if (message.outputFullDuration !== false) {
      writer.uint32(56).bool(message.outputFullDuration);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimeSeriesQuery {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeSeriesQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.timeSeriesFilter = TimeSeriesFilter.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.timeSeriesFilterRatio = TimeSeriesFilterRatio.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.timeSeriesQueryLanguage = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.prometheusQuery = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.unitOverride = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.outputFullDuration = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeSeriesQuery {
    return {
      timeSeriesFilter: isSet(object.timeSeriesFilter) ? TimeSeriesFilter.fromJSON(object.timeSeriesFilter) : undefined,
      timeSeriesFilterRatio: isSet(object.timeSeriesFilterRatio)
        ? TimeSeriesFilterRatio.fromJSON(object.timeSeriesFilterRatio)
        : undefined,
      timeSeriesQueryLanguage: isSet(object.timeSeriesQueryLanguage)
        ? globalThis.String(object.timeSeriesQueryLanguage)
        : undefined,
      prometheusQuery: isSet(object.prometheusQuery) ? globalThis.String(object.prometheusQuery) : undefined,
      unitOverride: isSet(object.unitOverride) ? globalThis.String(object.unitOverride) : "",
      outputFullDuration: isSet(object.outputFullDuration) ? globalThis.Boolean(object.outputFullDuration) : false,
    };
  },

  toJSON(message: TimeSeriesQuery): unknown {
    const obj: any = {};
    if (message.timeSeriesFilter !== undefined) {
      obj.timeSeriesFilter = TimeSeriesFilter.toJSON(message.timeSeriesFilter);
    }
    if (message.timeSeriesFilterRatio !== undefined) {
      obj.timeSeriesFilterRatio = TimeSeriesFilterRatio.toJSON(message.timeSeriesFilterRatio);
    }
    if (message.timeSeriesQueryLanguage !== undefined) {
      obj.timeSeriesQueryLanguage = message.timeSeriesQueryLanguage;
    }
    if (message.prometheusQuery !== undefined) {
      obj.prometheusQuery = message.prometheusQuery;
    }
    if (message.unitOverride !== "") {
      obj.unitOverride = message.unitOverride;
    }
    if (message.outputFullDuration !== false) {
      obj.outputFullDuration = message.outputFullDuration;
    }
    return obj;
  },

  create(base?: DeepPartial<TimeSeriesQuery>): TimeSeriesQuery {
    return TimeSeriesQuery.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimeSeriesQuery>): TimeSeriesQuery {
    const message = createBaseTimeSeriesQuery();
    message.timeSeriesFilter = (object.timeSeriesFilter !== undefined && object.timeSeriesFilter !== null)
      ? TimeSeriesFilter.fromPartial(object.timeSeriesFilter)
      : undefined;
    message.timeSeriesFilterRatio =
      (object.timeSeriesFilterRatio !== undefined && object.timeSeriesFilterRatio !== null)
        ? TimeSeriesFilterRatio.fromPartial(object.timeSeriesFilterRatio)
        : undefined;
    message.timeSeriesQueryLanguage = object.timeSeriesQueryLanguage ?? undefined;
    message.prometheusQuery = object.prometheusQuery ?? undefined;
    message.unitOverride = object.unitOverride ?? "";
    message.outputFullDuration = object.outputFullDuration ?? false;
    return message;
  },
};

function createBaseTimeSeriesFilter(): TimeSeriesFilter {
  return {
    filter: "",
    aggregation: undefined,
    secondaryAggregation: undefined,
    pickTimeSeriesFilter: undefined,
    statisticalTimeSeriesFilter: undefined,
  };
}

export const TimeSeriesFilter: MessageFns<TimeSeriesFilter> = {
  encode(message: TimeSeriesFilter, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.aggregation !== undefined) {
      Aggregation.encode(message.aggregation, writer.uint32(18).fork()).join();
    }
    if (message.secondaryAggregation !== undefined) {
      Aggregation.encode(message.secondaryAggregation, writer.uint32(26).fork()).join();
    }
    if (message.pickTimeSeriesFilter !== undefined) {
      PickTimeSeriesFilter.encode(message.pickTimeSeriesFilter, writer.uint32(34).fork()).join();
    }
    if (message.statisticalTimeSeriesFilter !== undefined) {
      StatisticalTimeSeriesFilter.encode(message.statisticalTimeSeriesFilter, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimeSeriesFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeSeriesFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.aggregation = Aggregation.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.secondaryAggregation = Aggregation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pickTimeSeriesFilter = PickTimeSeriesFilter.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.statisticalTimeSeriesFilter = StatisticalTimeSeriesFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeSeriesFilter {
    return {
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      aggregation: isSet(object.aggregation) ? Aggregation.fromJSON(object.aggregation) : undefined,
      secondaryAggregation: isSet(object.secondaryAggregation)
        ? Aggregation.fromJSON(object.secondaryAggregation)
        : undefined,
      pickTimeSeriesFilter: isSet(object.pickTimeSeriesFilter)
        ? PickTimeSeriesFilter.fromJSON(object.pickTimeSeriesFilter)
        : undefined,
      statisticalTimeSeriesFilter: isSet(object.statisticalTimeSeriesFilter)
        ? StatisticalTimeSeriesFilter.fromJSON(object.statisticalTimeSeriesFilter)
        : undefined,
    };
  },

  toJSON(message: TimeSeriesFilter): unknown {
    const obj: any = {};
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.aggregation !== undefined) {
      obj.aggregation = Aggregation.toJSON(message.aggregation);
    }
    if (message.secondaryAggregation !== undefined) {
      obj.secondaryAggregation = Aggregation.toJSON(message.secondaryAggregation);
    }
    if (message.pickTimeSeriesFilter !== undefined) {
      obj.pickTimeSeriesFilter = PickTimeSeriesFilter.toJSON(message.pickTimeSeriesFilter);
    }
    if (message.statisticalTimeSeriesFilter !== undefined) {
      obj.statisticalTimeSeriesFilter = StatisticalTimeSeriesFilter.toJSON(message.statisticalTimeSeriesFilter);
    }
    return obj;
  },

  create(base?: DeepPartial<TimeSeriesFilter>): TimeSeriesFilter {
    return TimeSeriesFilter.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimeSeriesFilter>): TimeSeriesFilter {
    const message = createBaseTimeSeriesFilter();
    message.filter = object.filter ?? "";
    message.aggregation = (object.aggregation !== undefined && object.aggregation !== null)
      ? Aggregation.fromPartial(object.aggregation)
      : undefined;
    message.secondaryAggregation = (object.secondaryAggregation !== undefined && object.secondaryAggregation !== null)
      ? Aggregation.fromPartial(object.secondaryAggregation)
      : undefined;
    message.pickTimeSeriesFilter = (object.pickTimeSeriesFilter !== undefined && object.pickTimeSeriesFilter !== null)
      ? PickTimeSeriesFilter.fromPartial(object.pickTimeSeriesFilter)
      : undefined;
    message.statisticalTimeSeriesFilter =
      (object.statisticalTimeSeriesFilter !== undefined && object.statisticalTimeSeriesFilter !== null)
        ? StatisticalTimeSeriesFilter.fromPartial(object.statisticalTimeSeriesFilter)
        : undefined;
    return message;
  },
};

function createBaseTimeSeriesFilterRatio(): TimeSeriesFilterRatio {
  return {
    numerator: undefined,
    denominator: undefined,
    secondaryAggregation: undefined,
    pickTimeSeriesFilter: undefined,
    statisticalTimeSeriesFilter: undefined,
  };
}

export const TimeSeriesFilterRatio: MessageFns<TimeSeriesFilterRatio> = {
  encode(message: TimeSeriesFilterRatio, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.numerator !== undefined) {
      TimeSeriesFilterRatio_RatioPart.encode(message.numerator, writer.uint32(10).fork()).join();
    }
    if (message.denominator !== undefined) {
      TimeSeriesFilterRatio_RatioPart.encode(message.denominator, writer.uint32(18).fork()).join();
    }
    if (message.secondaryAggregation !== undefined) {
      Aggregation.encode(message.secondaryAggregation, writer.uint32(26).fork()).join();
    }
    if (message.pickTimeSeriesFilter !== undefined) {
      PickTimeSeriesFilter.encode(message.pickTimeSeriesFilter, writer.uint32(34).fork()).join();
    }
    if (message.statisticalTimeSeriesFilter !== undefined) {
      StatisticalTimeSeriesFilter.encode(message.statisticalTimeSeriesFilter, writer.uint32(42).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimeSeriesFilterRatio {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeSeriesFilterRatio();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.numerator = TimeSeriesFilterRatio_RatioPart.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.denominator = TimeSeriesFilterRatio_RatioPart.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.secondaryAggregation = Aggregation.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.pickTimeSeriesFilter = PickTimeSeriesFilter.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.statisticalTimeSeriesFilter = StatisticalTimeSeriesFilter.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeSeriesFilterRatio {
    return {
      numerator: isSet(object.numerator) ? TimeSeriesFilterRatio_RatioPart.fromJSON(object.numerator) : undefined,
      denominator: isSet(object.denominator) ? TimeSeriesFilterRatio_RatioPart.fromJSON(object.denominator) : undefined,
      secondaryAggregation: isSet(object.secondaryAggregation)
        ? Aggregation.fromJSON(object.secondaryAggregation)
        : undefined,
      pickTimeSeriesFilter: isSet(object.pickTimeSeriesFilter)
        ? PickTimeSeriesFilter.fromJSON(object.pickTimeSeriesFilter)
        : undefined,
      statisticalTimeSeriesFilter: isSet(object.statisticalTimeSeriesFilter)
        ? StatisticalTimeSeriesFilter.fromJSON(object.statisticalTimeSeriesFilter)
        : undefined,
    };
  },

  toJSON(message: TimeSeriesFilterRatio): unknown {
    const obj: any = {};
    if (message.numerator !== undefined) {
      obj.numerator = TimeSeriesFilterRatio_RatioPart.toJSON(message.numerator);
    }
    if (message.denominator !== undefined) {
      obj.denominator = TimeSeriesFilterRatio_RatioPart.toJSON(message.denominator);
    }
    if (message.secondaryAggregation !== undefined) {
      obj.secondaryAggregation = Aggregation.toJSON(message.secondaryAggregation);
    }
    if (message.pickTimeSeriesFilter !== undefined) {
      obj.pickTimeSeriesFilter = PickTimeSeriesFilter.toJSON(message.pickTimeSeriesFilter);
    }
    if (message.statisticalTimeSeriesFilter !== undefined) {
      obj.statisticalTimeSeriesFilter = StatisticalTimeSeriesFilter.toJSON(message.statisticalTimeSeriesFilter);
    }
    return obj;
  },

  create(base?: DeepPartial<TimeSeriesFilterRatio>): TimeSeriesFilterRatio {
    return TimeSeriesFilterRatio.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimeSeriesFilterRatio>): TimeSeriesFilterRatio {
    const message = createBaseTimeSeriesFilterRatio();
    message.numerator = (object.numerator !== undefined && object.numerator !== null)
      ? TimeSeriesFilterRatio_RatioPart.fromPartial(object.numerator)
      : undefined;
    message.denominator = (object.denominator !== undefined && object.denominator !== null)
      ? TimeSeriesFilterRatio_RatioPart.fromPartial(object.denominator)
      : undefined;
    message.secondaryAggregation = (object.secondaryAggregation !== undefined && object.secondaryAggregation !== null)
      ? Aggregation.fromPartial(object.secondaryAggregation)
      : undefined;
    message.pickTimeSeriesFilter = (object.pickTimeSeriesFilter !== undefined && object.pickTimeSeriesFilter !== null)
      ? PickTimeSeriesFilter.fromPartial(object.pickTimeSeriesFilter)
      : undefined;
    message.statisticalTimeSeriesFilter =
      (object.statisticalTimeSeriesFilter !== undefined && object.statisticalTimeSeriesFilter !== null)
        ? StatisticalTimeSeriesFilter.fromPartial(object.statisticalTimeSeriesFilter)
        : undefined;
    return message;
  },
};

function createBaseTimeSeriesFilterRatio_RatioPart(): TimeSeriesFilterRatio_RatioPart {
  return { filter: "", aggregation: undefined };
}

export const TimeSeriesFilterRatio_RatioPart: MessageFns<TimeSeriesFilterRatio_RatioPart> = {
  encode(message: TimeSeriesFilterRatio_RatioPart, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.filter !== "") {
      writer.uint32(10).string(message.filter);
    }
    if (message.aggregation !== undefined) {
      Aggregation.encode(message.aggregation, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TimeSeriesFilterRatio_RatioPart {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimeSeriesFilterRatio_RatioPart();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filter = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.aggregation = Aggregation.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TimeSeriesFilterRatio_RatioPart {
    return {
      filter: isSet(object.filter) ? globalThis.String(object.filter) : "",
      aggregation: isSet(object.aggregation) ? Aggregation.fromJSON(object.aggregation) : undefined,
    };
  },

  toJSON(message: TimeSeriesFilterRatio_RatioPart): unknown {
    const obj: any = {};
    if (message.filter !== "") {
      obj.filter = message.filter;
    }
    if (message.aggregation !== undefined) {
      obj.aggregation = Aggregation.toJSON(message.aggregation);
    }
    return obj;
  },

  create(base?: DeepPartial<TimeSeriesFilterRatio_RatioPart>): TimeSeriesFilterRatio_RatioPart {
    return TimeSeriesFilterRatio_RatioPart.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<TimeSeriesFilterRatio_RatioPart>): TimeSeriesFilterRatio_RatioPart {
    const message = createBaseTimeSeriesFilterRatio_RatioPart();
    message.filter = object.filter ?? "";
    message.aggregation = (object.aggregation !== undefined && object.aggregation !== null)
      ? Aggregation.fromPartial(object.aggregation)
      : undefined;
    return message;
  },
};

function createBaseThreshold(): Threshold {
  return { label: "", value: 0, color: 0, direction: 0, targetAxis: 0 };
}

export const Threshold: MessageFns<Threshold> = {
  encode(message: Threshold, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.label !== "") {
      writer.uint32(10).string(message.label);
    }
    if (message.value !== 0) {
      writer.uint32(17).double(message.value);
    }
    if (message.color !== 0) {
      writer.uint32(24).int32(message.color);
    }
    if (message.direction !== 0) {
      writer.uint32(32).int32(message.direction);
    }
    if (message.targetAxis !== 0) {
      writer.uint32(40).int32(message.targetAxis);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Threshold {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseThreshold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.label = reader.string();
          continue;
        case 2:
          if (tag !== 17) {
            break;
          }

          message.value = reader.double();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.color = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.direction = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.targetAxis = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Threshold {
    return {
      label: isSet(object.label) ? globalThis.String(object.label) : "",
      value: isSet(object.value) ? globalThis.Number(object.value) : 0,
      color: isSet(object.color) ? threshold_ColorFromJSON(object.color) : 0,
      direction: isSet(object.direction) ? threshold_DirectionFromJSON(object.direction) : 0,
      targetAxis: isSet(object.targetAxis) ? threshold_TargetAxisFromJSON(object.targetAxis) : 0,
    };
  },

  toJSON(message: Threshold): unknown {
    const obj: any = {};
    if (message.label !== "") {
      obj.label = message.label;
    }
    if (message.value !== 0) {
      obj.value = message.value;
    }
    if (message.color !== 0) {
      obj.color = threshold_ColorToJSON(message.color);
    }
    if (message.direction !== 0) {
      obj.direction = threshold_DirectionToJSON(message.direction);
    }
    if (message.targetAxis !== 0) {
      obj.targetAxis = threshold_TargetAxisToJSON(message.targetAxis);
    }
    return obj;
  },

  create(base?: DeepPartial<Threshold>): Threshold {
    return Threshold.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Threshold>): Threshold {
    const message = createBaseThreshold();
    message.label = object.label ?? "";
    message.value = object.value ?? 0;
    message.color = object.color ?? 0;
    message.direction = object.direction ?? 0;
    message.targetAxis = object.targetAxis ?? 0;
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
