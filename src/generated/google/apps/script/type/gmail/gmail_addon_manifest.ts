// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/apps/script/type/gmail/gmail_addon_manifest.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { HomepageExtensionPoint, MenuItemExtensionPoint } from "../extension_point.js";

export const protobufPackage = "google.apps.script.type.gmail";

/** Properties customizing the appearance and execution of a Gmail add-on. */
export interface GmailAddOnManifest {
  /**
   * Defines an endpoint that will be executed in contexts that don't
   * match a declared contextual trigger. Any cards generated by this function
   * will always be available to the user, but may be eclipsed by contextual
   * content when this add-on declares more targeted triggers.
   *
   * If present, this overrides the configuration from
   * `addOns.common.homepageTrigger`.
   */
  homepageTrigger:
    | HomepageExtensionPoint
    | undefined;
  /** Defines the set of conditions that trigger the add-on. */
  contextualTriggers: ContextualTrigger[];
  /**
   * Defines set of [universal
   * actions](/gmail/add-ons/how-tos/universal-actions) for the add-on. The user
   * triggers universal actions from the add-on toolbar menu.
   */
  universalActions: UniversalAction[];
  /**
   * Defines the compose time trigger for a compose time add-on. This is the
   * trigger that causes an add-on to take action when the user is composing an
   * email.
   * All compose time addons are required to have the
   * gmail.addons.current.action.compose scope even though it might not edit the
   * draft.
   */
  composeTrigger:
    | ComposeTrigger
    | undefined;
  /**
   * The name of an endpoint that verifies that the add-on has
   * all the required third-party authorizations, by probing the third-party
   * APIs. If the probe fails, the function should throw an exception to
   * initiate the authorization flow. This function is called before each
   * invocation of the add-on, in order to ensure a smooth user experience.
   */
  authorizationCheckFunction: string;
}

/**
 * An action that is always available in the add-on toolbar menu regardless of
 * message context.
 */
export interface UniversalAction {
  /**
   * Required. User-visible text describing the action, for example, "Add a new
   * contact."
   */
  text: string;
  /** A link that is opened by Gmail when the user triggers the action. */
  openLink?:
    | string
    | undefined;
  /**
   * An endpoint that is called when the user triggers the
   * action. See the [universal actions
   * guide](/gmail/add-ons/how-tos/universal-actions) for details.
   */
  runFunction?: string | undefined;
}

/** A trigger that activates when user is composing an email. */
export interface ComposeTrigger {
  /**
   * Defines the set of actions for compose time add-on. These are actions
   * that user can trigger on a compose time addon.
   */
  actions: MenuItemExtensionPoint[];
  /** Define the level of data access when a compose time addon is triggered. */
  draftAccess: ComposeTrigger_DraftAccess;
}

/** An enum defining the level of data access this compose trigger requires. */
export enum ComposeTrigger_DraftAccess {
  /** UNSPECIFIED - Default value when nothing is set for DraftAccess. */
  UNSPECIFIED = 0,
  /**
   * NONE - NONE means compose trigger won't be able to access any data of the draft
   * when a compose addon is triggered.
   */
  NONE = 1,
  /**
   * METADATA - METADATA gives compose trigger the permission to access the metadata of
   * the draft when a compose addon is triggered. This includes the audience
   * list (To/cc list) of a draft message.
   */
  METADATA = 2,
  UNRECOGNIZED = -1,
}

export function composeTrigger_DraftAccessFromJSON(object: any): ComposeTrigger_DraftAccess {
  switch (object) {
    case 0:
    case "UNSPECIFIED":
      return ComposeTrigger_DraftAccess.UNSPECIFIED;
    case 1:
    case "NONE":
      return ComposeTrigger_DraftAccess.NONE;
    case 2:
    case "METADATA":
      return ComposeTrigger_DraftAccess.METADATA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ComposeTrigger_DraftAccess.UNRECOGNIZED;
  }
}

export function composeTrigger_DraftAccessToJSON(object: ComposeTrigger_DraftAccess): string {
  switch (object) {
    case ComposeTrigger_DraftAccess.UNSPECIFIED:
      return "UNSPECIFIED";
    case ComposeTrigger_DraftAccess.NONE:
      return "NONE";
    case ComposeTrigger_DraftAccess.METADATA:
      return "METADATA";
    case ComposeTrigger_DraftAccess.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Defines a trigger that fires when the open email meets a specific criteria.
 * When the trigger fires, it executes a specific endpoint, usually
 * in order to create new cards and update the UI.
 */
export interface ContextualTrigger {
  /** UnconditionalTriggers are executed when any mail message is opened. */
  unconditional?:
    | UnconditionalTrigger
    | undefined;
  /**
   * Required. The name of the endpoint to call when a message matches the
   * trigger.
   */
  onTriggerFunction: string;
}

/** A trigger that fires when any email message is opened. */
export interface UnconditionalTrigger {
}

function createBaseGmailAddOnManifest(): GmailAddOnManifest {
  return {
    homepageTrigger: undefined,
    contextualTriggers: [],
    universalActions: [],
    composeTrigger: undefined,
    authorizationCheckFunction: "",
  };
}

export const GmailAddOnManifest: MessageFns<GmailAddOnManifest> = {
  encode(message: GmailAddOnManifest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.homepageTrigger !== undefined) {
      HomepageExtensionPoint.encode(message.homepageTrigger, writer.uint32(114).fork()).join();
    }
    for (const v of message.contextualTriggers) {
      ContextualTrigger.encode(v!, writer.uint32(26).fork()).join();
    }
    for (const v of message.universalActions) {
      UniversalAction.encode(v!, writer.uint32(34).fork()).join();
    }
    if (message.composeTrigger !== undefined) {
      ComposeTrigger.encode(message.composeTrigger, writer.uint32(98).fork()).join();
    }
    if (message.authorizationCheckFunction !== "") {
      writer.uint32(58).string(message.authorizationCheckFunction);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GmailAddOnManifest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGmailAddOnManifest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 14:
          if (tag !== 114) {
            break;
          }

          message.homepageTrigger = HomepageExtensionPoint.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.contextualTriggers.push(ContextualTrigger.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.universalActions.push(UniversalAction.decode(reader, reader.uint32()));
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.composeTrigger = ComposeTrigger.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.authorizationCheckFunction = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GmailAddOnManifest {
    return {
      homepageTrigger: isSet(object.homepageTrigger)
        ? HomepageExtensionPoint.fromJSON(object.homepageTrigger)
        : undefined,
      contextualTriggers: globalThis.Array.isArray(object?.contextualTriggers)
        ? object.contextualTriggers.map((e: any) => ContextualTrigger.fromJSON(e))
        : [],
      universalActions: globalThis.Array.isArray(object?.universalActions)
        ? object.universalActions.map((e: any) => UniversalAction.fromJSON(e))
        : [],
      composeTrigger: isSet(object.composeTrigger) ? ComposeTrigger.fromJSON(object.composeTrigger) : undefined,
      authorizationCheckFunction: isSet(object.authorizationCheckFunction)
        ? globalThis.String(object.authorizationCheckFunction)
        : "",
    };
  },

  toJSON(message: GmailAddOnManifest): unknown {
    const obj: any = {};
    if (message.homepageTrigger !== undefined) {
      obj.homepageTrigger = HomepageExtensionPoint.toJSON(message.homepageTrigger);
    }
    if (message.contextualTriggers?.length) {
      obj.contextualTriggers = message.contextualTriggers.map((e) => ContextualTrigger.toJSON(e));
    }
    if (message.universalActions?.length) {
      obj.universalActions = message.universalActions.map((e) => UniversalAction.toJSON(e));
    }
    if (message.composeTrigger !== undefined) {
      obj.composeTrigger = ComposeTrigger.toJSON(message.composeTrigger);
    }
    if (message.authorizationCheckFunction !== "") {
      obj.authorizationCheckFunction = message.authorizationCheckFunction;
    }
    return obj;
  },

  create(base?: DeepPartial<GmailAddOnManifest>): GmailAddOnManifest {
    return GmailAddOnManifest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GmailAddOnManifest>): GmailAddOnManifest {
    const message = createBaseGmailAddOnManifest();
    message.homepageTrigger = (object.homepageTrigger !== undefined && object.homepageTrigger !== null)
      ? HomepageExtensionPoint.fromPartial(object.homepageTrigger)
      : undefined;
    message.contextualTriggers = object.contextualTriggers?.map((e) => ContextualTrigger.fromPartial(e)) || [];
    message.universalActions = object.universalActions?.map((e) => UniversalAction.fromPartial(e)) || [];
    message.composeTrigger = (object.composeTrigger !== undefined && object.composeTrigger !== null)
      ? ComposeTrigger.fromPartial(object.composeTrigger)
      : undefined;
    message.authorizationCheckFunction = object.authorizationCheckFunction ?? "";
    return message;
  },
};

function createBaseUniversalAction(): UniversalAction {
  return { text: "", openLink: undefined, runFunction: undefined };
}

export const UniversalAction: MessageFns<UniversalAction> = {
  encode(message: UniversalAction, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    if (message.openLink !== undefined) {
      writer.uint32(18).string(message.openLink);
    }
    if (message.runFunction !== undefined) {
      writer.uint32(26).string(message.runFunction);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UniversalAction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUniversalAction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.text = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.openLink = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.runFunction = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UniversalAction {
    return {
      text: isSet(object.text) ? globalThis.String(object.text) : "",
      openLink: isSet(object.openLink) ? globalThis.String(object.openLink) : undefined,
      runFunction: isSet(object.runFunction) ? globalThis.String(object.runFunction) : undefined,
    };
  },

  toJSON(message: UniversalAction): unknown {
    const obj: any = {};
    if (message.text !== "") {
      obj.text = message.text;
    }
    if (message.openLink !== undefined) {
      obj.openLink = message.openLink;
    }
    if (message.runFunction !== undefined) {
      obj.runFunction = message.runFunction;
    }
    return obj;
  },

  create(base?: DeepPartial<UniversalAction>): UniversalAction {
    return UniversalAction.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UniversalAction>): UniversalAction {
    const message = createBaseUniversalAction();
    message.text = object.text ?? "";
    message.openLink = object.openLink ?? undefined;
    message.runFunction = object.runFunction ?? undefined;
    return message;
  },
};

function createBaseComposeTrigger(): ComposeTrigger {
  return { actions: [], draftAccess: 0 };
}

export const ComposeTrigger: MessageFns<ComposeTrigger> = {
  encode(message: ComposeTrigger, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.actions) {
      MenuItemExtensionPoint.encode(v!, writer.uint32(42).fork()).join();
    }
    if (message.draftAccess !== 0) {
      writer.uint32(32).int32(message.draftAccess);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ComposeTrigger {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseComposeTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 5:
          if (tag !== 42) {
            break;
          }

          message.actions.push(MenuItemExtensionPoint.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.draftAccess = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ComposeTrigger {
    return {
      actions: globalThis.Array.isArray(object?.actions)
        ? object.actions.map((e: any) => MenuItemExtensionPoint.fromJSON(e))
        : [],
      draftAccess: isSet(object.draftAccess) ? composeTrigger_DraftAccessFromJSON(object.draftAccess) : 0,
    };
  },

  toJSON(message: ComposeTrigger): unknown {
    const obj: any = {};
    if (message.actions?.length) {
      obj.actions = message.actions.map((e) => MenuItemExtensionPoint.toJSON(e));
    }
    if (message.draftAccess !== 0) {
      obj.draftAccess = composeTrigger_DraftAccessToJSON(message.draftAccess);
    }
    return obj;
  },

  create(base?: DeepPartial<ComposeTrigger>): ComposeTrigger {
    return ComposeTrigger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ComposeTrigger>): ComposeTrigger {
    const message = createBaseComposeTrigger();
    message.actions = object.actions?.map((e) => MenuItemExtensionPoint.fromPartial(e)) || [];
    message.draftAccess = object.draftAccess ?? 0;
    return message;
  },
};

function createBaseContextualTrigger(): ContextualTrigger {
  return { unconditional: undefined, onTriggerFunction: "" };
}

export const ContextualTrigger: MessageFns<ContextualTrigger> = {
  encode(message: ContextualTrigger, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.unconditional !== undefined) {
      UnconditionalTrigger.encode(message.unconditional, writer.uint32(10).fork()).join();
    }
    if (message.onTriggerFunction !== "") {
      writer.uint32(34).string(message.onTriggerFunction);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ContextualTrigger {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContextualTrigger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.unconditional = UnconditionalTrigger.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.onTriggerFunction = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContextualTrigger {
    return {
      unconditional: isSet(object.unconditional) ? UnconditionalTrigger.fromJSON(object.unconditional) : undefined,
      onTriggerFunction: isSet(object.onTriggerFunction) ? globalThis.String(object.onTriggerFunction) : "",
    };
  },

  toJSON(message: ContextualTrigger): unknown {
    const obj: any = {};
    if (message.unconditional !== undefined) {
      obj.unconditional = UnconditionalTrigger.toJSON(message.unconditional);
    }
    if (message.onTriggerFunction !== "") {
      obj.onTriggerFunction = message.onTriggerFunction;
    }
    return obj;
  },

  create(base?: DeepPartial<ContextualTrigger>): ContextualTrigger {
    return ContextualTrigger.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ContextualTrigger>): ContextualTrigger {
    const message = createBaseContextualTrigger();
    message.unconditional = (object.unconditional !== undefined && object.unconditional !== null)
      ? UnconditionalTrigger.fromPartial(object.unconditional)
      : undefined;
    message.onTriggerFunction = object.onTriggerFunction ?? "";
    return message;
  },
};

function createBaseUnconditionalTrigger(): UnconditionalTrigger {
  return {};
}

export const UnconditionalTrigger: MessageFns<UnconditionalTrigger> = {
  encode(_: UnconditionalTrigger, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UnconditionalTrigger {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnconditionalTrigger();
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

  fromJSON(_: any): UnconditionalTrigger {
    return {};
  },

  toJSON(_: UnconditionalTrigger): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<UnconditionalTrigger>): UnconditionalTrigger {
    return UnconditionalTrigger.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<UnconditionalTrigger>): UnconditionalTrigger {
    const message = createBaseUnconditionalTrigger();
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