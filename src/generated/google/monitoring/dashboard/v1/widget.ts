// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/monitoring/dashboard/v1/widget.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Empty } from "../../../protobuf/empty.js";
import { AlertChart } from "./alertchart.js";
import { CollapsibleGroup } from "./collapsible_group.js";
import { ErrorReportingPanel } from "./error_reporting_panel.js";
import { IncidentList } from "./incident_list.js";
import { LogsPanel } from "./logs_panel.js";
import { PieChart } from "./piechart.js";
import { Scorecard } from "./scorecard.js";
import { SectionHeader } from "./section_header.js";
import { SingleViewGroup } from "./single_view_group.js";
import { TimeSeriesTable } from "./table.js";
import { Text } from "./text.js";
import { XyChart } from "./xychart.js";

export const protobufPackage = "google.monitoring.dashboard.v1";

/**
 * Widget contains a single dashboard component and configuration of how to
 * present the component in the dashboard.
 */
export interface Widget {
  /** Optional. The title of the widget. */
  title: string;
  /** A chart of time series data. */
  xyChart?:
    | XyChart
    | undefined;
  /** A scorecard summarizing time series data. */
  scorecard?:
    | Scorecard
    | undefined;
  /** A raw string or markdown displaying textual content. */
  text?:
    | Text
    | undefined;
  /** A blank space. */
  blank?:
    | Empty
    | undefined;
  /** A chart of alert policy data. */
  alertChart?:
    | AlertChart
    | undefined;
  /** A widget that displays time series data in a tabular format. */
  timeSeriesTable?:
    | TimeSeriesTable
    | undefined;
  /**
   * A widget that groups the other widgets. All widgets that are within
   * the area spanned by the grouping widget are considered member widgets.
   */
  collapsibleGroup?:
    | CollapsibleGroup
    | undefined;
  /** A widget that shows a stream of logs. */
  logsPanel?:
    | LogsPanel
    | undefined;
  /** A widget that shows list of incidents. */
  incidentList?:
    | IncidentList
    | undefined;
  /** A widget that displays timeseries data as a pie chart. */
  pieChart?:
    | PieChart
    | undefined;
  /** A widget that displays a list of error groups. */
  errorReportingPanel?:
    | ErrorReportingPanel
    | undefined;
  /**
   * A widget that defines a section header for easier navigation of the
   * dashboard.
   */
  sectionHeader?:
    | SectionHeader
    | undefined;
  /** A widget that groups the other widgets by using a dropdown menu. */
  singleViewGroup?:
    | SingleViewGroup
    | undefined;
  /**
   * Optional. The widget id. Ids may be made up of alphanumerics, dashes and
   * underscores. Widget ids are optional.
   */
  id: string;
}

function createBaseWidget(): Widget {
  return {
    title: "",
    xyChart: undefined,
    scorecard: undefined,
    text: undefined,
    blank: undefined,
    alertChart: undefined,
    timeSeriesTable: undefined,
    collapsibleGroup: undefined,
    logsPanel: undefined,
    incidentList: undefined,
    pieChart: undefined,
    errorReportingPanel: undefined,
    sectionHeader: undefined,
    singleViewGroup: undefined,
    id: "",
  };
}

export const Widget: MessageFns<Widget> = {
  encode(message: Widget, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.xyChart !== undefined) {
      XyChart.encode(message.xyChart, writer.uint32(18).fork()).join();
    }
    if (message.scorecard !== undefined) {
      Scorecard.encode(message.scorecard, writer.uint32(26).fork()).join();
    }
    if (message.text !== undefined) {
      Text.encode(message.text, writer.uint32(34).fork()).join();
    }
    if (message.blank !== undefined) {
      Empty.encode(message.blank, writer.uint32(42).fork()).join();
    }
    if (message.alertChart !== undefined) {
      AlertChart.encode(message.alertChart, writer.uint32(58).fork()).join();
    }
    if (message.timeSeriesTable !== undefined) {
      TimeSeriesTable.encode(message.timeSeriesTable, writer.uint32(66).fork()).join();
    }
    if (message.collapsibleGroup !== undefined) {
      CollapsibleGroup.encode(message.collapsibleGroup, writer.uint32(74).fork()).join();
    }
    if (message.logsPanel !== undefined) {
      LogsPanel.encode(message.logsPanel, writer.uint32(82).fork()).join();
    }
    if (message.incidentList !== undefined) {
      IncidentList.encode(message.incidentList, writer.uint32(98).fork()).join();
    }
    if (message.pieChart !== undefined) {
      PieChart.encode(message.pieChart, writer.uint32(114).fork()).join();
    }
    if (message.errorReportingPanel !== undefined) {
      ErrorReportingPanel.encode(message.errorReportingPanel, writer.uint32(154).fork()).join();
    }
    if (message.sectionHeader !== undefined) {
      SectionHeader.encode(message.sectionHeader, writer.uint32(170).fork()).join();
    }
    if (message.singleViewGroup !== undefined) {
      SingleViewGroup.encode(message.singleViewGroup, writer.uint32(178).fork()).join();
    }
    if (message.id !== "") {
      writer.uint32(138).string(message.id);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Widget {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWidget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.title = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.xyChart = XyChart.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.scorecard = Scorecard.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.text = Text.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.blank = Empty.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.alertChart = AlertChart.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.timeSeriesTable = TimeSeriesTable.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.collapsibleGroup = CollapsibleGroup.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.logsPanel = LogsPanel.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.incidentList = IncidentList.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.pieChart = PieChart.decode(reader, reader.uint32());
          continue;
        case 19:
          if (tag !== 154) {
            break;
          }

          message.errorReportingPanel = ErrorReportingPanel.decode(reader, reader.uint32());
          continue;
        case 21:
          if (tag !== 170) {
            break;
          }

          message.sectionHeader = SectionHeader.decode(reader, reader.uint32());
          continue;
        case 22:
          if (tag !== 178) {
            break;
          }

          message.singleViewGroup = SingleViewGroup.decode(reader, reader.uint32());
          continue;
        case 17:
          if (tag !== 138) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Widget {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      xyChart: isSet(object.xyChart) ? XyChart.fromJSON(object.xyChart) : undefined,
      scorecard: isSet(object.scorecard) ? Scorecard.fromJSON(object.scorecard) : undefined,
      text: isSet(object.text) ? Text.fromJSON(object.text) : undefined,
      blank: isSet(object.blank) ? Empty.fromJSON(object.blank) : undefined,
      alertChart: isSet(object.alertChart) ? AlertChart.fromJSON(object.alertChart) : undefined,
      timeSeriesTable: isSet(object.timeSeriesTable) ? TimeSeriesTable.fromJSON(object.timeSeriesTable) : undefined,
      collapsibleGroup: isSet(object.collapsibleGroup) ? CollapsibleGroup.fromJSON(object.collapsibleGroup) : undefined,
      logsPanel: isSet(object.logsPanel) ? LogsPanel.fromJSON(object.logsPanel) : undefined,
      incidentList: isSet(object.incidentList) ? IncidentList.fromJSON(object.incidentList) : undefined,
      pieChart: isSet(object.pieChart) ? PieChart.fromJSON(object.pieChart) : undefined,
      errorReportingPanel: isSet(object.errorReportingPanel)
        ? ErrorReportingPanel.fromJSON(object.errorReportingPanel)
        : undefined,
      sectionHeader: isSet(object.sectionHeader) ? SectionHeader.fromJSON(object.sectionHeader) : undefined,
      singleViewGroup: isSet(object.singleViewGroup) ? SingleViewGroup.fromJSON(object.singleViewGroup) : undefined,
      id: isSet(object.id) ? globalThis.String(object.id) : "",
    };
  },

  toJSON(message: Widget): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.xyChart !== undefined) {
      obj.xyChart = XyChart.toJSON(message.xyChart);
    }
    if (message.scorecard !== undefined) {
      obj.scorecard = Scorecard.toJSON(message.scorecard);
    }
    if (message.text !== undefined) {
      obj.text = Text.toJSON(message.text);
    }
    if (message.blank !== undefined) {
      obj.blank = Empty.toJSON(message.blank);
    }
    if (message.alertChart !== undefined) {
      obj.alertChart = AlertChart.toJSON(message.alertChart);
    }
    if (message.timeSeriesTable !== undefined) {
      obj.timeSeriesTable = TimeSeriesTable.toJSON(message.timeSeriesTable);
    }
    if (message.collapsibleGroup !== undefined) {
      obj.collapsibleGroup = CollapsibleGroup.toJSON(message.collapsibleGroup);
    }
    if (message.logsPanel !== undefined) {
      obj.logsPanel = LogsPanel.toJSON(message.logsPanel);
    }
    if (message.incidentList !== undefined) {
      obj.incidentList = IncidentList.toJSON(message.incidentList);
    }
    if (message.pieChart !== undefined) {
      obj.pieChart = PieChart.toJSON(message.pieChart);
    }
    if (message.errorReportingPanel !== undefined) {
      obj.errorReportingPanel = ErrorReportingPanel.toJSON(message.errorReportingPanel);
    }
    if (message.sectionHeader !== undefined) {
      obj.sectionHeader = SectionHeader.toJSON(message.sectionHeader);
    }
    if (message.singleViewGroup !== undefined) {
      obj.singleViewGroup = SingleViewGroup.toJSON(message.singleViewGroup);
    }
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create(base?: DeepPartial<Widget>): Widget {
    return Widget.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Widget>): Widget {
    const message = createBaseWidget();
    message.title = object.title ?? "";
    message.xyChart = (object.xyChart !== undefined && object.xyChart !== null)
      ? XyChart.fromPartial(object.xyChart)
      : undefined;
    message.scorecard = (object.scorecard !== undefined && object.scorecard !== null)
      ? Scorecard.fromPartial(object.scorecard)
      : undefined;
    message.text = (object.text !== undefined && object.text !== null) ? Text.fromPartial(object.text) : undefined;
    message.blank = (object.blank !== undefined && object.blank !== null) ? Empty.fromPartial(object.blank) : undefined;
    message.alertChart = (object.alertChart !== undefined && object.alertChart !== null)
      ? AlertChart.fromPartial(object.alertChart)
      : undefined;
    message.timeSeriesTable = (object.timeSeriesTable !== undefined && object.timeSeriesTable !== null)
      ? TimeSeriesTable.fromPartial(object.timeSeriesTable)
      : undefined;
    message.collapsibleGroup = (object.collapsibleGroup !== undefined && object.collapsibleGroup !== null)
      ? CollapsibleGroup.fromPartial(object.collapsibleGroup)
      : undefined;
    message.logsPanel = (object.logsPanel !== undefined && object.logsPanel !== null)
      ? LogsPanel.fromPartial(object.logsPanel)
      : undefined;
    message.incidentList = (object.incidentList !== undefined && object.incidentList !== null)
      ? IncidentList.fromPartial(object.incidentList)
      : undefined;
    message.pieChart = (object.pieChart !== undefined && object.pieChart !== null)
      ? PieChart.fromPartial(object.pieChart)
      : undefined;
    message.errorReportingPanel = (object.errorReportingPanel !== undefined && object.errorReportingPanel !== null)
      ? ErrorReportingPanel.fromPartial(object.errorReportingPanel)
      : undefined;
    message.sectionHeader = (object.sectionHeader !== undefined && object.sectionHeader !== null)
      ? SectionHeader.fromPartial(object.sectionHeader)
      : undefined;
    message.singleViewGroup = (object.singleViewGroup !== undefined && object.singleViewGroup !== null)
      ? SingleViewGroup.fromPartial(object.singleViewGroup)
      : undefined;
    message.id = object.id ?? "";
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