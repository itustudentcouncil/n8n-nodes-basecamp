// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/actions/sdk/v2/config_file.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Struct } from "../../../protobuf/struct.js";
import { AccountLinkingSecret } from "./account_linking_secret.js";
import { Actions } from "./action.js";
import { EntitySet } from "./interactionmodel/entity_set.js";
import { GlobalIntentEvent } from "./interactionmodel/global_intent_event.js";
import { Intent } from "./interactionmodel/intent.js";
import { StaticPrompt } from "./interactionmodel/prompt/static_prompt.js";
import { Scene } from "./interactionmodel/scene.js";
import { Type } from "./interactionmodel/type/type.js";
import { Manifest } from "./manifest.js";
import { Settings } from "./settings.js";
import { Webhook } from "./webhook.js";

export const protobufPackage = "google.actions.sdk.v2";

/** Wrapper for repeated config files. Repeated fields cannot exist in a oneof. */
export interface ConfigFiles {
  /** Multiple config files. */
  configFiles: ConfigFile[];
}

/**
 * Represents a single file which contains structured data. Developers can
 * define most of their project using structured config including Actions,
 * Settings, Fulfillment.
 */
export interface ConfigFile {
  /**
   * Relative path of the config file from the project root in the SDK file
   * structure. Each file types below have an allowed file path.
   * Eg: settings/settings.yaml
   */
  filePath: string;
  /**
   * Single manifest file.
   * Allowed file path: `manifest.yaml`
   */
  manifest?:
    | Manifest
    | undefined;
  /**
   * Single actions file with all the actions defined.
   * Allowed file paths: `actions/{language}?/actions.yaml`
   */
  actions?:
    | Actions
    | undefined;
  /**
   * Single settings config which includes non-localizable settings and
   * settings for the project's default locale (if specified).
   * For a locale override file, only localized_settings field will be
   * populated.
   * Allowed file paths: `settings/{language}?/settings.yaml`
   * Note that the non-localized settings file `settings/settings.yaml` must
   * be present in the write flow requests.
   */
  settings?:
    | Settings
    | undefined;
  /**
   * Single webhook definition.
   * Allowed file path: `webhooks/{WebhookName}.yaml`
   */
  webhook?:
    | Webhook
    | undefined;
  /**
   * Single intent definition.
   * Allowed file paths: `custom/intents/{language}?/{IntentName}.yaml`
   */
  intent?:
    | Intent
    | undefined;
  /**
   * Single type definition.
   * Allowed file paths: `custom/types/{language}?/{TypeName}.yaml`
   */
  type?:
    | Type
    | undefined;
  /**
   * Single entity set definition.
   * Allowed file paths: `custom/entitySets/{language}?/{EntitySetName}.yaml`
   */
  entitySet?:
    | EntitySet
    | undefined;
  /**
   * Single global intent event definition.
   * Allowed file paths: `custom/global/{GlobalIntentEventName}.yaml`
   * The file name (GlobalIntentEventName) should be the name of the intent
   * that this global intent event corresponds to.
   */
  globalIntentEvent?:
    | GlobalIntentEvent
    | undefined;
  /**
   * Single scene definition.
   * Allowed file paths: `custom/scenes/{SceneName}.yaml`
   */
  scene?:
    | Scene
    | undefined;
  /**
   * Single static prompt definition.
   * Allowed file paths: `custom/prompts/{language}?/{StaticPromptName}.yaml`
   */
  staticPrompt?:
    | StaticPrompt
    | undefined;
  /**
   * Metadata corresponding to the client secret used in account linking.
   * Allowed file path: `settings/accountLinkingSecret.yaml`
   */
  accountLinkingSecret?:
    | AccountLinkingSecret
    | undefined;
  /**
   * Single resource bundle, which is a map from a string to a string or list
   * of strings. Resource bundles could be used for localizing strings in
   * static prompts.
   * Allowed file paths: `resources/strings/{language}?/{multiple
   * directories}?/{BundleName}.yaml`
   */
  resourceBundle?: { [key: string]: any } | undefined;
}

function createBaseConfigFiles(): ConfigFiles {
  return { configFiles: [] };
}

export const ConfigFiles: MessageFns<ConfigFiles> = {
  encode(message: ConfigFiles, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.configFiles) {
      ConfigFile.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConfigFiles {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigFiles();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.configFiles.push(ConfigFile.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigFiles {
    return {
      configFiles: globalThis.Array.isArray(object?.configFiles)
        ? object.configFiles.map((e: any) => ConfigFile.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ConfigFiles): unknown {
    const obj: any = {};
    if (message.configFiles?.length) {
      obj.configFiles = message.configFiles.map((e) => ConfigFile.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigFiles>): ConfigFiles {
    return ConfigFiles.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigFiles>): ConfigFiles {
    const message = createBaseConfigFiles();
    message.configFiles = object.configFiles?.map((e) => ConfigFile.fromPartial(e)) || [];
    return message;
  },
};

function createBaseConfigFile(): ConfigFile {
  return {
    filePath: "",
    manifest: undefined,
    actions: undefined,
    settings: undefined,
    webhook: undefined,
    intent: undefined,
    type: undefined,
    entitySet: undefined,
    globalIntentEvent: undefined,
    scene: undefined,
    staticPrompt: undefined,
    accountLinkingSecret: undefined,
    resourceBundle: undefined,
  };
}

export const ConfigFile: MessageFns<ConfigFile> = {
  encode(message: ConfigFile, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.filePath !== "") {
      writer.uint32(10).string(message.filePath);
    }
    if (message.manifest !== undefined) {
      Manifest.encode(message.manifest, writer.uint32(18).fork()).join();
    }
    if (message.actions !== undefined) {
      Actions.encode(message.actions, writer.uint32(26).fork()).join();
    }
    if (message.settings !== undefined) {
      Settings.encode(message.settings, writer.uint32(34).fork()).join();
    }
    if (message.webhook !== undefined) {
      Webhook.encode(message.webhook, writer.uint32(50).fork()).join();
    }
    if (message.intent !== undefined) {
      Intent.encode(message.intent, writer.uint32(58).fork()).join();
    }
    if (message.type !== undefined) {
      Type.encode(message.type, writer.uint32(66).fork()).join();
    }
    if (message.entitySet !== undefined) {
      EntitySet.encode(message.entitySet, writer.uint32(122).fork()).join();
    }
    if (message.globalIntentEvent !== undefined) {
      GlobalIntentEvent.encode(message.globalIntentEvent, writer.uint32(74).fork()).join();
    }
    if (message.scene !== undefined) {
      Scene.encode(message.scene, writer.uint32(82).fork()).join();
    }
    if (message.staticPrompt !== undefined) {
      StaticPrompt.encode(message.staticPrompt, writer.uint32(90).fork()).join();
    }
    if (message.accountLinkingSecret !== undefined) {
      AccountLinkingSecret.encode(message.accountLinkingSecret, writer.uint32(106).fork()).join();
    }
    if (message.resourceBundle !== undefined) {
      Struct.encode(Struct.wrap(message.resourceBundle), writer.uint32(98).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ConfigFile {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfigFile();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.filePath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.manifest = Manifest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.actions = Actions.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.settings = Settings.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.webhook = Webhook.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.intent = Intent.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.type = Type.decode(reader, reader.uint32());
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.entitySet = EntitySet.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.globalIntentEvent = GlobalIntentEvent.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.scene = Scene.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.staticPrompt = StaticPrompt.decode(reader, reader.uint32());
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.accountLinkingSecret = AccountLinkingSecret.decode(reader, reader.uint32());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.resourceBundle = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ConfigFile {
    return {
      filePath: isSet(object.filePath) ? globalThis.String(object.filePath) : "",
      manifest: isSet(object.manifest) ? Manifest.fromJSON(object.manifest) : undefined,
      actions: isSet(object.actions) ? Actions.fromJSON(object.actions) : undefined,
      settings: isSet(object.settings) ? Settings.fromJSON(object.settings) : undefined,
      webhook: isSet(object.webhook) ? Webhook.fromJSON(object.webhook) : undefined,
      intent: isSet(object.intent) ? Intent.fromJSON(object.intent) : undefined,
      type: isSet(object.type) ? Type.fromJSON(object.type) : undefined,
      entitySet: isSet(object.entitySet) ? EntitySet.fromJSON(object.entitySet) : undefined,
      globalIntentEvent: isSet(object.globalIntentEvent)
        ? GlobalIntentEvent.fromJSON(object.globalIntentEvent)
        : undefined,
      scene: isSet(object.scene) ? Scene.fromJSON(object.scene) : undefined,
      staticPrompt: isSet(object.staticPrompt) ? StaticPrompt.fromJSON(object.staticPrompt) : undefined,
      accountLinkingSecret: isSet(object.accountLinkingSecret)
        ? AccountLinkingSecret.fromJSON(object.accountLinkingSecret)
        : undefined,
      resourceBundle: isObject(object.resourceBundle) ? object.resourceBundle : undefined,
    };
  },

  toJSON(message: ConfigFile): unknown {
    const obj: any = {};
    if (message.filePath !== "") {
      obj.filePath = message.filePath;
    }
    if (message.manifest !== undefined) {
      obj.manifest = Manifest.toJSON(message.manifest);
    }
    if (message.actions !== undefined) {
      obj.actions = Actions.toJSON(message.actions);
    }
    if (message.settings !== undefined) {
      obj.settings = Settings.toJSON(message.settings);
    }
    if (message.webhook !== undefined) {
      obj.webhook = Webhook.toJSON(message.webhook);
    }
    if (message.intent !== undefined) {
      obj.intent = Intent.toJSON(message.intent);
    }
    if (message.type !== undefined) {
      obj.type = Type.toJSON(message.type);
    }
    if (message.entitySet !== undefined) {
      obj.entitySet = EntitySet.toJSON(message.entitySet);
    }
    if (message.globalIntentEvent !== undefined) {
      obj.globalIntentEvent = GlobalIntentEvent.toJSON(message.globalIntentEvent);
    }
    if (message.scene !== undefined) {
      obj.scene = Scene.toJSON(message.scene);
    }
    if (message.staticPrompt !== undefined) {
      obj.staticPrompt = StaticPrompt.toJSON(message.staticPrompt);
    }
    if (message.accountLinkingSecret !== undefined) {
      obj.accountLinkingSecret = AccountLinkingSecret.toJSON(message.accountLinkingSecret);
    }
    if (message.resourceBundle !== undefined) {
      obj.resourceBundle = message.resourceBundle;
    }
    return obj;
  },

  create(base?: DeepPartial<ConfigFile>): ConfigFile {
    return ConfigFile.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ConfigFile>): ConfigFile {
    const message = createBaseConfigFile();
    message.filePath = object.filePath ?? "";
    message.manifest = (object.manifest !== undefined && object.manifest !== null)
      ? Manifest.fromPartial(object.manifest)
      : undefined;
    message.actions = (object.actions !== undefined && object.actions !== null)
      ? Actions.fromPartial(object.actions)
      : undefined;
    message.settings = (object.settings !== undefined && object.settings !== null)
      ? Settings.fromPartial(object.settings)
      : undefined;
    message.webhook = (object.webhook !== undefined && object.webhook !== null)
      ? Webhook.fromPartial(object.webhook)
      : undefined;
    message.intent = (object.intent !== undefined && object.intent !== null)
      ? Intent.fromPartial(object.intent)
      : undefined;
    message.type = (object.type !== undefined && object.type !== null) ? Type.fromPartial(object.type) : undefined;
    message.entitySet = (object.entitySet !== undefined && object.entitySet !== null)
      ? EntitySet.fromPartial(object.entitySet)
      : undefined;
    message.globalIntentEvent = (object.globalIntentEvent !== undefined && object.globalIntentEvent !== null)
      ? GlobalIntentEvent.fromPartial(object.globalIntentEvent)
      : undefined;
    message.scene = (object.scene !== undefined && object.scene !== null) ? Scene.fromPartial(object.scene) : undefined;
    message.staticPrompt = (object.staticPrompt !== undefined && object.staticPrompt !== null)
      ? StaticPrompt.fromPartial(object.staticPrompt)
      : undefined;
    message.accountLinkingSecret = (object.accountLinkingSecret !== undefined && object.accountLinkingSecret !== null)
      ? AccountLinkingSecret.fromPartial(object.accountLinkingSecret)
      : undefined;
    message.resourceBundle = object.resourceBundle ?? undefined;
    return message;
  },
};

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