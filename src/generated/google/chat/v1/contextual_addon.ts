// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/chat/v1/contextual_addon.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { WidgetMarkup, WidgetMarkup_OnClick } from "./widgets.js";

export const protobufPackage = "google.chat.v1";

/** The markup for developers to specify the contents of a contextual AddOn. */
export interface ContextualAddOnMarkup {
}

/**
 * A card is a UI element that can contain UI widgets such as text and
 * images.
 */
export interface ContextualAddOnMarkup_Card {
  /** The header of the card. A header usually contains a title and an image. */
  header:
    | ContextualAddOnMarkup_Card_CardHeader
    | undefined;
  /** Sections are separated by a line divider. */
  sections: ContextualAddOnMarkup_Card_Section[];
  /** The actions of this card. */
  cardActions: ContextualAddOnMarkup_Card_CardAction[];
  /** Name of the card. */
  name: string;
}

export interface ContextualAddOnMarkup_Card_CardHeader {
  /**
   * The title must be specified. The header has a fixed height: if both a
   * title and subtitle is specified, each takes up one line. If only the
   * title is specified, it takes up both lines.
   */
  title: string;
  /** The subtitle of the card header. */
  subtitle: string;
  /** The image's type (for example, square border or circular border). */
  imageStyle: ContextualAddOnMarkup_Card_CardHeader_ImageStyle;
  /** The URL of the image in the card header. */
  imageUrl: string;
}

export enum ContextualAddOnMarkup_Card_CardHeader_ImageStyle {
  IMAGE_STYLE_UNSPECIFIED = 0,
  /** IMAGE - Square border. */
  IMAGE = 1,
  /** AVATAR - Circular border. */
  AVATAR = 2,
  UNRECOGNIZED = -1,
}

export function contextualAddOnMarkup_Card_CardHeader_ImageStyleFromJSON(
  object: any,
): ContextualAddOnMarkup_Card_CardHeader_ImageStyle {
  switch (object) {
    case 0:
    case "IMAGE_STYLE_UNSPECIFIED":
      return ContextualAddOnMarkup_Card_CardHeader_ImageStyle.IMAGE_STYLE_UNSPECIFIED;
    case 1:
    case "IMAGE":
      return ContextualAddOnMarkup_Card_CardHeader_ImageStyle.IMAGE;
    case 2:
    case "AVATAR":
      return ContextualAddOnMarkup_Card_CardHeader_ImageStyle.AVATAR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContextualAddOnMarkup_Card_CardHeader_ImageStyle.UNRECOGNIZED;
  }
}

export function contextualAddOnMarkup_Card_CardHeader_ImageStyleToJSON(
  object: ContextualAddOnMarkup_Card_CardHeader_ImageStyle,
): string {
  switch (object) {
    case ContextualAddOnMarkup_Card_CardHeader_ImageStyle.IMAGE_STYLE_UNSPECIFIED:
      return "IMAGE_STYLE_UNSPECIFIED";
    case ContextualAddOnMarkup_Card_CardHeader_ImageStyle.IMAGE:
      return "IMAGE";
    case ContextualAddOnMarkup_Card_CardHeader_ImageStyle.AVATAR:
      return "AVATAR";
    case ContextualAddOnMarkup_Card_CardHeader_ImageStyle.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A section contains a collection of widgets that are rendered
 * (vertically) in the order that they are specified. Across all platforms,
 * cards have a narrow fixed width, so
 * there's currently no need for layout properties (for example, float).
 */
export interface ContextualAddOnMarkup_Card_Section {
  /**
   * The header of the section. Formatted text is
   * supported. For more information
   * about formatting text, see
   * [Formatting text in Google Chat
   * apps](https://developers.google.com/workspace/chat/format-messages#card-formatting)
   * and
   * [Formatting
   * text in Google Workspace
   * Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).
   */
  header: string;
  /** A section must contain at least one widget. */
  widgets: WidgetMarkup[];
}

/**
 * A card action is
 * the action associated with the card. For an invoice card, a
 * typical action would be: delete invoice, email invoice or open the
 * invoice in browser.
 *
 * Not supported by Google Chat apps.
 */
export interface ContextualAddOnMarkup_Card_CardAction {
  /** The label used to be displayed in the action menu item. */
  actionLabel: string;
  /** The onclick action for this action item. */
  onClick: WidgetMarkup_OnClick | undefined;
}

function createBaseContextualAddOnMarkup(): ContextualAddOnMarkup {
  return {};
}

export const ContextualAddOnMarkup: MessageFns<ContextualAddOnMarkup> = {
  encode(_: ContextualAddOnMarkup, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ContextualAddOnMarkup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextualAddOnMarkup();
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

  fromJSON(_: any): ContextualAddOnMarkup {
    return {};
  },

  toJSON(_: ContextualAddOnMarkup): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ContextualAddOnMarkup>): ContextualAddOnMarkup {
    return ContextualAddOnMarkup.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ContextualAddOnMarkup>): ContextualAddOnMarkup {
    const message = createBaseContextualAddOnMarkup();
    return message;
  },
};

function createBaseContextualAddOnMarkup_Card(): ContextualAddOnMarkup_Card {
  return { header: undefined, sections: [], cardActions: [], name: "" };
}

export const ContextualAddOnMarkup_Card: MessageFns<ContextualAddOnMarkup_Card> = {
  encode(message: ContextualAddOnMarkup_Card, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.header !== undefined) {
      ContextualAddOnMarkup_Card_CardHeader.encode(message.header, writer.uint32(10).fork()).join();
    }
    for (const v of message.sections) {
      ContextualAddOnMarkup_Card_Section.encode(v!, writer.uint32(18).fork()).join();
    }
    for (const v of message.cardActions) {
      ContextualAddOnMarkup_Card_CardAction.encode(v!, writer.uint32(26).fork()).join();
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ContextualAddOnMarkup_Card {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextualAddOnMarkup_Card();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = ContextualAddOnMarkup_Card_CardHeader.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.sections.push(ContextualAddOnMarkup_Card_Section.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.cardActions.push(ContextualAddOnMarkup_Card_CardAction.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContextualAddOnMarkup_Card {
    return {
      header: isSet(object.header) ? ContextualAddOnMarkup_Card_CardHeader.fromJSON(object.header) : undefined,
      sections: globalThis.Array.isArray(object?.sections)
        ? object.sections.map((e: any) => ContextualAddOnMarkup_Card_Section.fromJSON(e))
        : [],
      cardActions: globalThis.Array.isArray(object?.cardActions)
        ? object.cardActions.map((e: any) => ContextualAddOnMarkup_Card_CardAction.fromJSON(e))
        : [],
      name: isSet(object.name) ? globalThis.String(object.name) : "",
    };
  },

  toJSON(message: ContextualAddOnMarkup_Card): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = ContextualAddOnMarkup_Card_CardHeader.toJSON(message.header);
    }
    if (message.sections?.length) {
      obj.sections = message.sections.map((e) => ContextualAddOnMarkup_Card_Section.toJSON(e));
    }
    if (message.cardActions?.length) {
      obj.cardActions = message.cardActions.map((e) => ContextualAddOnMarkup_Card_CardAction.toJSON(e));
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    return obj;
  },

  create(base?: DeepPartial<ContextualAddOnMarkup_Card>): ContextualAddOnMarkup_Card {
    return ContextualAddOnMarkup_Card.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ContextualAddOnMarkup_Card>): ContextualAddOnMarkup_Card {
    const message = createBaseContextualAddOnMarkup_Card();
    message.header = (object.header !== undefined && object.header !== null)
      ? ContextualAddOnMarkup_Card_CardHeader.fromPartial(object.header)
      : undefined;
    message.sections = object.sections?.map((e) => ContextualAddOnMarkup_Card_Section.fromPartial(e)) || [];
    message.cardActions = object.cardActions?.map((e) => ContextualAddOnMarkup_Card_CardAction.fromPartial(e)) || [];
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseContextualAddOnMarkup_Card_CardHeader(): ContextualAddOnMarkup_Card_CardHeader {
  return { title: "", subtitle: "", imageStyle: 0, imageUrl: "" };
}

export const ContextualAddOnMarkup_Card_CardHeader: MessageFns<ContextualAddOnMarkup_Card_CardHeader> = {
  encode(message: ContextualAddOnMarkup_Card_CardHeader, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.subtitle !== "") {
      writer.uint32(18).string(message.subtitle);
    }
    if (message.imageStyle !== 0) {
      writer.uint32(24).int32(message.imageStyle);
    }
    if (message.imageUrl !== "") {
      writer.uint32(34).string(message.imageUrl);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ContextualAddOnMarkup_Card_CardHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextualAddOnMarkup_Card_CardHeader();
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

          message.subtitle = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.imageStyle = reader.int32() as any;
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.imageUrl = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContextualAddOnMarkup_Card_CardHeader {
    return {
      title: isSet(object.title) ? globalThis.String(object.title) : "",
      subtitle: isSet(object.subtitle) ? globalThis.String(object.subtitle) : "",
      imageStyle: isSet(object.imageStyle)
        ? contextualAddOnMarkup_Card_CardHeader_ImageStyleFromJSON(object.imageStyle)
        : 0,
      imageUrl: isSet(object.imageUrl) ? globalThis.String(object.imageUrl) : "",
    };
  },

  toJSON(message: ContextualAddOnMarkup_Card_CardHeader): unknown {
    const obj: any = {};
    if (message.title !== "") {
      obj.title = message.title;
    }
    if (message.subtitle !== "") {
      obj.subtitle = message.subtitle;
    }
    if (message.imageStyle !== 0) {
      obj.imageStyle = contextualAddOnMarkup_Card_CardHeader_ImageStyleToJSON(message.imageStyle);
    }
    if (message.imageUrl !== "") {
      obj.imageUrl = message.imageUrl;
    }
    return obj;
  },

  create(base?: DeepPartial<ContextualAddOnMarkup_Card_CardHeader>): ContextualAddOnMarkup_Card_CardHeader {
    return ContextualAddOnMarkup_Card_CardHeader.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ContextualAddOnMarkup_Card_CardHeader>): ContextualAddOnMarkup_Card_CardHeader {
    const message = createBaseContextualAddOnMarkup_Card_CardHeader();
    message.title = object.title ?? "";
    message.subtitle = object.subtitle ?? "";
    message.imageStyle = object.imageStyle ?? 0;
    message.imageUrl = object.imageUrl ?? "";
    return message;
  },
};

function createBaseContextualAddOnMarkup_Card_Section(): ContextualAddOnMarkup_Card_Section {
  return { header: "", widgets: [] };
}

export const ContextualAddOnMarkup_Card_Section: MessageFns<ContextualAddOnMarkup_Card_Section> = {
  encode(message: ContextualAddOnMarkup_Card_Section, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.header !== "") {
      writer.uint32(10).string(message.header);
    }
    for (const v of message.widgets) {
      WidgetMarkup.encode(v!, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ContextualAddOnMarkup_Card_Section {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextualAddOnMarkup_Card_Section();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.header = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.widgets.push(WidgetMarkup.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContextualAddOnMarkup_Card_Section {
    return {
      header: isSet(object.header) ? globalThis.String(object.header) : "",
      widgets: globalThis.Array.isArray(object?.widgets)
        ? object.widgets.map((e: any) => WidgetMarkup.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ContextualAddOnMarkup_Card_Section): unknown {
    const obj: any = {};
    if (message.header !== "") {
      obj.header = message.header;
    }
    if (message.widgets?.length) {
      obj.widgets = message.widgets.map((e) => WidgetMarkup.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ContextualAddOnMarkup_Card_Section>): ContextualAddOnMarkup_Card_Section {
    return ContextualAddOnMarkup_Card_Section.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ContextualAddOnMarkup_Card_Section>): ContextualAddOnMarkup_Card_Section {
    const message = createBaseContextualAddOnMarkup_Card_Section();
    message.header = object.header ?? "";
    message.widgets = object.widgets?.map((e) => WidgetMarkup.fromPartial(e)) || [];
    return message;
  },
};

function createBaseContextualAddOnMarkup_Card_CardAction(): ContextualAddOnMarkup_Card_CardAction {
  return { actionLabel: "", onClick: undefined };
}

export const ContextualAddOnMarkup_Card_CardAction: MessageFns<ContextualAddOnMarkup_Card_CardAction> = {
  encode(message: ContextualAddOnMarkup_Card_CardAction, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.actionLabel !== "") {
      writer.uint32(10).string(message.actionLabel);
    }
    if (message.onClick !== undefined) {
      WidgetMarkup_OnClick.encode(message.onClick, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ContextualAddOnMarkup_Card_CardAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextualAddOnMarkup_Card_CardAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.actionLabel = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.onClick = WidgetMarkup_OnClick.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContextualAddOnMarkup_Card_CardAction {
    return {
      actionLabel: isSet(object.actionLabel) ? globalThis.String(object.actionLabel) : "",
      onClick: isSet(object.onClick) ? WidgetMarkup_OnClick.fromJSON(object.onClick) : undefined,
    };
  },

  toJSON(message: ContextualAddOnMarkup_Card_CardAction): unknown {
    const obj: any = {};
    if (message.actionLabel !== "") {
      obj.actionLabel = message.actionLabel;
    }
    if (message.onClick !== undefined) {
      obj.onClick = WidgetMarkup_OnClick.toJSON(message.onClick);
    }
    return obj;
  },

  create(base?: DeepPartial<ContextualAddOnMarkup_Card_CardAction>): ContextualAddOnMarkup_Card_CardAction {
    return ContextualAddOnMarkup_Card_CardAction.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ContextualAddOnMarkup_Card_CardAction>): ContextualAddOnMarkup_Card_CardAction {
    const message = createBaseContextualAddOnMarkup_Card_CardAction();
    message.actionLabel = object.actionLabel ?? "";
    message.onClick = (object.onClick !== undefined && object.onClick !== null)
      ? WidgetMarkup_OnClick.fromPartial(object.onClick)
      : undefined;
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