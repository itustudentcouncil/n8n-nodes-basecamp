// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/actions/sdk/v2/settings.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { AccountLinking } from "./account_linking.js";
import { LocalizedSettings } from "./localized_settings.js";
import { SurfaceRequirements } from "./surface.js";

export const protobufPackage = "google.actions.sdk.v2";

/** Represents settings of an Actions project that are not locale specific. */
export interface Settings {
  /** Actions project id. */
  projectId: string;
  /**
   * Locale which is default for the project. For all files except under
   * `resources/` with no locale in the path, the localized data is attributed
   * to this `default_locale`. For files under `resources/` no locale means that
   * the resource is applicable to all locales.
   */
  defaultLocale: string;
  /**
   * Represents the regions where users can invoke your Actions, which is
   * based on the user's location of presence. Cannot be set if
   * `disabled_regions` is set. If both `enabled_regions` and `disabled_regions`
   * are not specified, users can invoke your Actions in all regions. Each
   * region is represented using the Canonical Name of Adwords geotargets. See
   * https://developers.google.com/adwords/api/docs/appendix/geotargeting
   * Examples include:
   * - "Germany"
   * - "Ghana"
   * - "Greece"
   * - "Grenada"
   * - "United Kingdom"
   * - "United States"
   * - "United States Minor Outlying Islands"
   * - "Uruguay"
   */
  enabledRegions: string[];
  /**
   * Represents the regions where your Actions are blocked, based on the user's
   * location of presence. Cannot be set if `enabled_regions` is set.
   * Each region is represented using the Canonical Name of Adwords geotargets.
   * See https://developers.google.com/adwords/api/docs/appendix/geotargeting
   * Examples include:
   * - "Germany"
   * - "Ghana"
   * - "Greece"
   * - "Grenada"
   * - "United Kingdom"
   * - "United States"
   * - "United States Minor Outlying Islands"
   * - "Uruguay"
   */
  disabledRegions: string[];
  /** The category for this Actions project. */
  category: Settings_Category;
  /**
   * Whether Actions can use transactions (for example, making
   * reservations, taking orders, etc.). If false, then attempts to use the
   * Transactions APIs fail.
   */
  usesTransactionsApi: boolean;
  /** Whether Actions can perform transactions for digital goods. */
  usesDigitalPurchaseApi: boolean;
  /** Whether Actions use Interactive Canvas. */
  usesInteractiveCanvas: boolean;
  /** Whether Actions use the home storage feature. */
  usesHomeStorage: boolean;
  /** Whether Actions content is designed for family (DFF). */
  designedForFamily: boolean;
  /** Whether Actions contains alcohol or tobacco related content. */
  containsAlcoholOrTobaccoContent: boolean;
  /**
   * Whether Actions may leave mic open without an explicit prompt during
   * conversation.
   */
  keepsMicOpen: boolean;
  /**
   * The surface requirements that a client surface must support to invoke
   * Actions in this project.
   */
  surfaceRequirements:
    | SurfaceRequirements
    | undefined;
  /**
   * Free-form testing instructions for Actions reviewer (for example, account
   * linking instructions).
   */
  testingInstructions: string;
  /**
   * Localized settings for the project's default locale. Every additional
   * locale should have its own settings file in its own directory.
   */
  localizedSettings:
    | LocalizedSettings
    | undefined;
  /**
   * Allow users to create or link accounts through Google sign-in and/or your
   * own OAuth service.
   */
  accountLinking:
    | AccountLinking
    | undefined;
  /**
   * Android apps selected to acccess Google Play purchases for transactions.
   * This is a selection from the Android apps connected to the actions project
   * to verify brand ownership and enable additional features. See
   * https://developers.google.com/assistant/console/brand-verification for more
   * information.
   */
  selectedAndroidApps: string[];
}

/** The category choices for an Actions project. */
export enum Settings_Category {
  /** CATEGORY_UNSPECIFIED - Unknown / Unspecified. */
  CATEGORY_UNSPECIFIED = 0,
  /** BUSINESS_AND_FINANCE - Business and Finance category. */
  BUSINESS_AND_FINANCE = 2,
  /** EDUCATION_AND_REFERENCE - Education and Reference category. */
  EDUCATION_AND_REFERENCE = 3,
  /** FOOD_AND_DRINK - Food and Drink category. */
  FOOD_AND_DRINK = 4,
  /** GAMES_AND_TRIVIA - Games and Trivia category. */
  GAMES_AND_TRIVIA = 5,
  /** HEALTH_AND_FITNESS - Health and Fitness category. */
  HEALTH_AND_FITNESS = 6,
  /** KIDS_AND_FAMILY - Kids and Family category. */
  KIDS_AND_FAMILY = 20,
  /** LIFESTYLE - Lifestyle category. */
  LIFESTYLE = 7,
  /** LOCAL - Local category. */
  LOCAL = 8,
  /** MOVIES_AND_TV - Movies and TV category. */
  MOVIES_AND_TV = 9,
  /** MUSIC_AND_AUDIO - Music and Audio category. */
  MUSIC_AND_AUDIO = 10,
  /** NEWS - News category, */
  NEWS = 1,
  /** NOVELTY_AND_HUMOR - Novelty and Humor category. */
  NOVELTY_AND_HUMOR = 11,
  /** PRODUCTIVITY - Productivity category. */
  PRODUCTIVITY = 12,
  /** SHOPPING - Shopping category. */
  SHOPPING = 13,
  /** SOCIAL - Social category. */
  SOCIAL = 14,
  /** SPORTS - Sports category. */
  SPORTS = 15,
  /** TRAVEL_AND_TRANSPORTATION - Travel and Transportation category. */
  TRAVEL_AND_TRANSPORTATION = 16,
  /** UTILITIES - Utilities category. */
  UTILITIES = 17,
  /** WEATHER - Weather category. */
  WEATHER = 18,
  /** HOME_CONTROL - Home Control category. */
  HOME_CONTROL = 19,
  UNRECOGNIZED = -1,
}

export function settings_CategoryFromJSON(object: any): Settings_Category {
  switch (object) {
    case 0:
    case "CATEGORY_UNSPECIFIED":
      return Settings_Category.CATEGORY_UNSPECIFIED;
    case 2:
    case "BUSINESS_AND_FINANCE":
      return Settings_Category.BUSINESS_AND_FINANCE;
    case 3:
    case "EDUCATION_AND_REFERENCE":
      return Settings_Category.EDUCATION_AND_REFERENCE;
    case 4:
    case "FOOD_AND_DRINK":
      return Settings_Category.FOOD_AND_DRINK;
    case 5:
    case "GAMES_AND_TRIVIA":
      return Settings_Category.GAMES_AND_TRIVIA;
    case 6:
    case "HEALTH_AND_FITNESS":
      return Settings_Category.HEALTH_AND_FITNESS;
    case 20:
    case "KIDS_AND_FAMILY":
      return Settings_Category.KIDS_AND_FAMILY;
    case 7:
    case "LIFESTYLE":
      return Settings_Category.LIFESTYLE;
    case 8:
    case "LOCAL":
      return Settings_Category.LOCAL;
    case 9:
    case "MOVIES_AND_TV":
      return Settings_Category.MOVIES_AND_TV;
    case 10:
    case "MUSIC_AND_AUDIO":
      return Settings_Category.MUSIC_AND_AUDIO;
    case 1:
    case "NEWS":
      return Settings_Category.NEWS;
    case 11:
    case "NOVELTY_AND_HUMOR":
      return Settings_Category.NOVELTY_AND_HUMOR;
    case 12:
    case "PRODUCTIVITY":
      return Settings_Category.PRODUCTIVITY;
    case 13:
    case "SHOPPING":
      return Settings_Category.SHOPPING;
    case 14:
    case "SOCIAL":
      return Settings_Category.SOCIAL;
    case 15:
    case "SPORTS":
      return Settings_Category.SPORTS;
    case 16:
    case "TRAVEL_AND_TRANSPORTATION":
      return Settings_Category.TRAVEL_AND_TRANSPORTATION;
    case 17:
    case "UTILITIES":
      return Settings_Category.UTILITIES;
    case 18:
    case "WEATHER":
      return Settings_Category.WEATHER;
    case 19:
    case "HOME_CONTROL":
      return Settings_Category.HOME_CONTROL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Settings_Category.UNRECOGNIZED;
  }
}

export function settings_CategoryToJSON(object: Settings_Category): string {
  switch (object) {
    case Settings_Category.CATEGORY_UNSPECIFIED:
      return "CATEGORY_UNSPECIFIED";
    case Settings_Category.BUSINESS_AND_FINANCE:
      return "BUSINESS_AND_FINANCE";
    case Settings_Category.EDUCATION_AND_REFERENCE:
      return "EDUCATION_AND_REFERENCE";
    case Settings_Category.FOOD_AND_DRINK:
      return "FOOD_AND_DRINK";
    case Settings_Category.GAMES_AND_TRIVIA:
      return "GAMES_AND_TRIVIA";
    case Settings_Category.HEALTH_AND_FITNESS:
      return "HEALTH_AND_FITNESS";
    case Settings_Category.KIDS_AND_FAMILY:
      return "KIDS_AND_FAMILY";
    case Settings_Category.LIFESTYLE:
      return "LIFESTYLE";
    case Settings_Category.LOCAL:
      return "LOCAL";
    case Settings_Category.MOVIES_AND_TV:
      return "MOVIES_AND_TV";
    case Settings_Category.MUSIC_AND_AUDIO:
      return "MUSIC_AND_AUDIO";
    case Settings_Category.NEWS:
      return "NEWS";
    case Settings_Category.NOVELTY_AND_HUMOR:
      return "NOVELTY_AND_HUMOR";
    case Settings_Category.PRODUCTIVITY:
      return "PRODUCTIVITY";
    case Settings_Category.SHOPPING:
      return "SHOPPING";
    case Settings_Category.SOCIAL:
      return "SOCIAL";
    case Settings_Category.SPORTS:
      return "SPORTS";
    case Settings_Category.TRAVEL_AND_TRANSPORTATION:
      return "TRAVEL_AND_TRANSPORTATION";
    case Settings_Category.UTILITIES:
      return "UTILITIES";
    case Settings_Category.WEATHER:
      return "WEATHER";
    case Settings_Category.HOME_CONTROL:
      return "HOME_CONTROL";
    case Settings_Category.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

function createBaseSettings(): Settings {
  return {
    projectId: "",
    defaultLocale: "",
    enabledRegions: [],
    disabledRegions: [],
    category: 0,
    usesTransactionsApi: false,
    usesDigitalPurchaseApi: false,
    usesInteractiveCanvas: false,
    usesHomeStorage: false,
    designedForFamily: false,
    containsAlcoholOrTobaccoContent: false,
    keepsMicOpen: false,
    surfaceRequirements: undefined,
    testingInstructions: "",
    localizedSettings: undefined,
    accountLinking: undefined,
    selectedAndroidApps: [],
  };
}

export const Settings: MessageFns<Settings> = {
  encode(message: Settings, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.projectId !== "") {
      writer.uint32(10).string(message.projectId);
    }
    if (message.defaultLocale !== "") {
      writer.uint32(18).string(message.defaultLocale);
    }
    for (const v of message.enabledRegions) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.disabledRegions) {
      writer.uint32(34).string(v!);
    }
    if (message.category !== 0) {
      writer.uint32(40).int32(message.category);
    }
    if (message.usesTransactionsApi !== false) {
      writer.uint32(48).bool(message.usesTransactionsApi);
    }
    if (message.usesDigitalPurchaseApi !== false) {
      writer.uint32(56).bool(message.usesDigitalPurchaseApi);
    }
    if (message.usesInteractiveCanvas !== false) {
      writer.uint32(64).bool(message.usesInteractiveCanvas);
    }
    if (message.usesHomeStorage !== false) {
      writer.uint32(136).bool(message.usesHomeStorage);
    }
    if (message.designedForFamily !== false) {
      writer.uint32(72).bool(message.designedForFamily);
    }
    if (message.containsAlcoholOrTobaccoContent !== false) {
      writer.uint32(88).bool(message.containsAlcoholOrTobaccoContent);
    }
    if (message.keepsMicOpen !== false) {
      writer.uint32(96).bool(message.keepsMicOpen);
    }
    if (message.surfaceRequirements !== undefined) {
      SurfaceRequirements.encode(message.surfaceRequirements, writer.uint32(106).fork()).join();
    }
    if (message.testingInstructions !== "") {
      writer.uint32(114).string(message.testingInstructions);
    }
    if (message.localizedSettings !== undefined) {
      LocalizedSettings.encode(message.localizedSettings, writer.uint32(122).fork()).join();
    }
    if (message.accountLinking !== undefined) {
      AccountLinking.encode(message.accountLinking, writer.uint32(130).fork()).join();
    }
    for (const v of message.selectedAndroidApps) {
      writer.uint32(162).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Settings {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSettings();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.projectId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.defaultLocale = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.enabledRegions.push(reader.string());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.disabledRegions.push(reader.string());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.category = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.usesTransactionsApi = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.usesDigitalPurchaseApi = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.usesInteractiveCanvas = reader.bool();
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.usesHomeStorage = reader.bool();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.designedForFamily = reader.bool();
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.containsAlcoholOrTobaccoContent = reader.bool();
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.keepsMicOpen = reader.bool();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.surfaceRequirements = SurfaceRequirements.decode(reader, reader.uint32());
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.testingInstructions = reader.string();
          continue;
        case 15:
          if (tag !== 122) {
            break;
          }

          message.localizedSettings = LocalizedSettings.decode(reader, reader.uint32());
          continue;
        case 16:
          if (tag !== 130) {
            break;
          }

          message.accountLinking = AccountLinking.decode(reader, reader.uint32());
          continue;
        case 20:
          if (tag !== 162) {
            break;
          }

          message.selectedAndroidApps.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Settings {
    return {
      projectId: isSet(object.projectId) ? globalThis.String(object.projectId) : "",
      defaultLocale: isSet(object.defaultLocale) ? globalThis.String(object.defaultLocale) : "",
      enabledRegions: globalThis.Array.isArray(object?.enabledRegions)
        ? object.enabledRegions.map((e: any) => globalThis.String(e))
        : [],
      disabledRegions: globalThis.Array.isArray(object?.disabledRegions)
        ? object.disabledRegions.map((e: any) => globalThis.String(e))
        : [],
      category: isSet(object.category) ? settings_CategoryFromJSON(object.category) : 0,
      usesTransactionsApi: isSet(object.usesTransactionsApi) ? globalThis.Boolean(object.usesTransactionsApi) : false,
      usesDigitalPurchaseApi: isSet(object.usesDigitalPurchaseApi)
        ? globalThis.Boolean(object.usesDigitalPurchaseApi)
        : false,
      usesInteractiveCanvas: isSet(object.usesInteractiveCanvas)
        ? globalThis.Boolean(object.usesInteractiveCanvas)
        : false,
      usesHomeStorage: isSet(object.usesHomeStorage) ? globalThis.Boolean(object.usesHomeStorage) : false,
      designedForFamily: isSet(object.designedForFamily) ? globalThis.Boolean(object.designedForFamily) : false,
      containsAlcoholOrTobaccoContent: isSet(object.containsAlcoholOrTobaccoContent)
        ? globalThis.Boolean(object.containsAlcoholOrTobaccoContent)
        : false,
      keepsMicOpen: isSet(object.keepsMicOpen) ? globalThis.Boolean(object.keepsMicOpen) : false,
      surfaceRequirements: isSet(object.surfaceRequirements)
        ? SurfaceRequirements.fromJSON(object.surfaceRequirements)
        : undefined,
      testingInstructions: isSet(object.testingInstructions) ? globalThis.String(object.testingInstructions) : "",
      localizedSettings: isSet(object.localizedSettings)
        ? LocalizedSettings.fromJSON(object.localizedSettings)
        : undefined,
      accountLinking: isSet(object.accountLinking) ? AccountLinking.fromJSON(object.accountLinking) : undefined,
      selectedAndroidApps: globalThis.Array.isArray(object?.selectedAndroidApps)
        ? object.selectedAndroidApps.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Settings): unknown {
    const obj: any = {};
    if (message.projectId !== "") {
      obj.projectId = message.projectId;
    }
    if (message.defaultLocale !== "") {
      obj.defaultLocale = message.defaultLocale;
    }
    if (message.enabledRegions?.length) {
      obj.enabledRegions = message.enabledRegions;
    }
    if (message.disabledRegions?.length) {
      obj.disabledRegions = message.disabledRegions;
    }
    if (message.category !== 0) {
      obj.category = settings_CategoryToJSON(message.category);
    }
    if (message.usesTransactionsApi !== false) {
      obj.usesTransactionsApi = message.usesTransactionsApi;
    }
    if (message.usesDigitalPurchaseApi !== false) {
      obj.usesDigitalPurchaseApi = message.usesDigitalPurchaseApi;
    }
    if (message.usesInteractiveCanvas !== false) {
      obj.usesInteractiveCanvas = message.usesInteractiveCanvas;
    }
    if (message.usesHomeStorage !== false) {
      obj.usesHomeStorage = message.usesHomeStorage;
    }
    if (message.designedForFamily !== false) {
      obj.designedForFamily = message.designedForFamily;
    }
    if (message.containsAlcoholOrTobaccoContent !== false) {
      obj.containsAlcoholOrTobaccoContent = message.containsAlcoholOrTobaccoContent;
    }
    if (message.keepsMicOpen !== false) {
      obj.keepsMicOpen = message.keepsMicOpen;
    }
    if (message.surfaceRequirements !== undefined) {
      obj.surfaceRequirements = SurfaceRequirements.toJSON(message.surfaceRequirements);
    }
    if (message.testingInstructions !== "") {
      obj.testingInstructions = message.testingInstructions;
    }
    if (message.localizedSettings !== undefined) {
      obj.localizedSettings = LocalizedSettings.toJSON(message.localizedSettings);
    }
    if (message.accountLinking !== undefined) {
      obj.accountLinking = AccountLinking.toJSON(message.accountLinking);
    }
    if (message.selectedAndroidApps?.length) {
      obj.selectedAndroidApps = message.selectedAndroidApps;
    }
    return obj;
  },

  create(base?: DeepPartial<Settings>): Settings {
    return Settings.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Settings>): Settings {
    const message = createBaseSettings();
    message.projectId = object.projectId ?? "";
    message.defaultLocale = object.defaultLocale ?? "";
    message.enabledRegions = object.enabledRegions?.map((e) => e) || [];
    message.disabledRegions = object.disabledRegions?.map((e) => e) || [];
    message.category = object.category ?? 0;
    message.usesTransactionsApi = object.usesTransactionsApi ?? false;
    message.usesDigitalPurchaseApi = object.usesDigitalPurchaseApi ?? false;
    message.usesInteractiveCanvas = object.usesInteractiveCanvas ?? false;
    message.usesHomeStorage = object.usesHomeStorage ?? false;
    message.designedForFamily = object.designedForFamily ?? false;
    message.containsAlcoholOrTobaccoContent = object.containsAlcoholOrTobaccoContent ?? false;
    message.keepsMicOpen = object.keepsMicOpen ?? false;
    message.surfaceRequirements = (object.surfaceRequirements !== undefined && object.surfaceRequirements !== null)
      ? SurfaceRequirements.fromPartial(object.surfaceRequirements)
      : undefined;
    message.testingInstructions = object.testingInstructions ?? "";
    message.localizedSettings = (object.localizedSettings !== undefined && object.localizedSettings !== null)
      ? LocalizedSettings.fromPartial(object.localizedSettings)
      : undefined;
    message.accountLinking = (object.accountLinking !== undefined && object.accountLinking !== null)
      ? AccountLinking.fromPartial(object.accountLinking)
      : undefined;
    message.selectedAndroidApps = object.selectedAndroidApps?.map((e) => e) || [];
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