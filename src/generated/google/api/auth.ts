// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/api/auth.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";

export const protobufPackage = "google.api";

/**
 * `Authentication` defines the authentication configuration for API methods
 * provided by an API service.
 *
 * Example:
 *
 *     name: calendar.googleapis.com
 *     authentication:
 *       providers:
 *       - id: google_calendar_auth
 *         jwks_uri: https://www.googleapis.com/oauth2/v1/certs
 *         issuer: https://securetoken.google.com
 *       rules:
 *       - selector: "*"
 *         requirements:
 *           provider_id: google_calendar_auth
 *       - selector: google.calendar.Delegate
 *         oauth:
 *           canonical_scopes: https://www.googleapis.com/auth/calendar.read
 */
export interface Authentication {
  /**
   * A list of authentication rules that apply to individual API methods.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   */
  rules: AuthenticationRule[];
  /** Defines a set of authentication providers that a service supports. */
  providers: AuthProvider[];
}

/**
 * Authentication rules for the service.
 *
 * By default, if a method has any authentication requirements, every request
 * must include a valid credential matching one of the requirements.
 * It's an error to include more than one kind of credential in a single
 * request.
 *
 * If a method doesn't have any auth requirements, request credentials will be
 * ignored.
 */
export interface AuthenticationRule {
  /**
   * Selects the methods to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   */
  selector: string;
  /** The requirements for OAuth credentials. */
  oauth:
    | OAuthRequirements
    | undefined;
  /**
   * If true, the service accepts API keys without any other credential.
   * This flag only applies to HTTP and gRPC requests.
   */
  allowWithoutCredential: boolean;
  /** Requirements for additional authentication providers. */
  requirements: AuthRequirement[];
}

/** Specifies a location to extract JWT from an API request. */
export interface JwtLocation {
  /** Specifies HTTP header name to extract JWT token. */
  header?:
    | string
    | undefined;
  /** Specifies URL query parameter name to extract JWT token. */
  query?:
    | string
    | undefined;
  /** Specifies cookie name to extract JWT token. */
  cookie?:
    | string
    | undefined;
  /**
   * The value prefix. The value format is "value_prefix{token}"
   * Only applies to "in" header type. Must be empty for "in" query type.
   * If not empty, the header value has to match (case sensitive) this prefix.
   * If not matched, JWT will not be extracted. If matched, JWT will be
   * extracted after the prefix is removed.
   *
   * For example, for "Authorization: Bearer {JWT}",
   * value_prefix="Bearer " with a space at the end.
   */
  valuePrefix: string;
}

/**
 * Configuration for an authentication provider, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 */
export interface AuthProvider {
  /**
   * The unique identifier of the auth provider. It will be referred to by
   * `AuthRequirement.provider_id`.
   *
   * Example: "bookstore_auth".
   */
  id: string;
  /**
   * Identifies the principal that issued the JWT. See
   * https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.1
   * Usually a URL or an email address.
   *
   * Example: https://securetoken.google.com
   * Example: 1234567-compute@developer.gserviceaccount.com
   */
  issuer: string;
  /**
   * URL of the provider's public key set to validate signature of the JWT. See
   * [OpenID
   * Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderMetadata).
   * Optional if the key set document:
   *  - can be retrieved from
   *    [OpenID
   *    Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)
   *    of the issuer.
   *  - can be inferred from the email domain of the issuer (e.g. a Google
   *  service account).
   *
   * Example: https://www.googleapis.com/oauth2/v1/certs
   */
  jwksUri: string;
  /**
   * The list of JWT
   * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
   * that are allowed to access. A JWT containing any of these audiences will
   * be accepted. When this setting is absent, JWTs with audiences:
   *   - "https://[service.name]/[google.protobuf.Api.name]"
   *   - "https://[service.name]/"
   * will be accepted.
   * For example, if no audiences are in the setting, LibraryService API will
   * accept JWTs with the following audiences:
   *   -
   *   https://library-example.googleapis.com/google.example.library.v1.LibraryService
   *   - https://library-example.googleapis.com/
   *
   * Example:
   *
   *     audiences: bookstore_android.apps.googleusercontent.com,
   *                bookstore_web.apps.googleusercontent.com
   */
  audiences: string;
  /**
   * Redirect URL if JWT token is required but not present or is expired.
   * Implement authorizationUrl of securityDefinitions in OpenAPI spec.
   */
  authorizationUrl: string;
  /**
   * Defines the locations to extract the JWT.  For now it is only used by the
   * Cloud Endpoints to store the OpenAPI extension [x-google-jwt-locations]
   * (https://cloud.google.com/endpoints/docs/openapi/openapi-extensions#x-google-jwt-locations)
   *
   * JWT locations can be one of HTTP headers, URL query parameters or
   * cookies. The rule is that the first match wins.
   *
   * If not specified,  default to use following 3 locations:
   *    1) Authorization: Bearer
   *    2) x-goog-iap-jwt-assertion
   *    3) access_token query parameter
   *
   * Default locations can be specified as followings:
   *    jwt_locations:
   *    - header: Authorization
   *      value_prefix: "Bearer "
   *    - header: x-goog-iap-jwt-assertion
   *    - query: access_token
   */
  jwtLocations: JwtLocation[];
}

/**
 * OAuth scopes are a way to define data and permissions on data. For example,
 * there are scopes defined for "Read-only access to Google Calendar" and
 * "Access to Cloud Platform". Users can consent to a scope for an application,
 * giving it permission to access that data on their behalf.
 *
 * OAuth scope specifications should be fairly coarse grained; a user will need
 * to see and understand the text description of what your scope means.
 *
 * In most cases: use one or at most two OAuth scopes for an entire family of
 * products. If your product has multiple APIs, you should probably be sharing
 * the OAuth scope across all of those APIs.
 *
 * When you need finer grained OAuth consent screens: talk with your product
 * management about how developers will use them in practice.
 *
 * Please note that even though each of the canonical scopes is enough for a
 * request to be accepted and passed to the backend, a request can still fail
 * due to the backend requiring additional scopes or permissions.
 */
export interface OAuthRequirements {
  /**
   * The list of publicly documented OAuth scopes that are allowed access. An
   * OAuth token containing any of these scopes will be accepted.
   *
   * Example:
   *
   *      canonical_scopes: https://www.googleapis.com/auth/calendar,
   *                        https://www.googleapis.com/auth/calendar.read
   */
  canonicalScopes: string;
}

/**
 * User-defined authentication requirements, including support for
 * [JSON Web Token
 * (JWT)](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32).
 */
export interface AuthRequirement {
  /**
   * [id][google.api.AuthProvider.id] from authentication provider.
   *
   * Example:
   *
   *     provider_id: bookstore_auth
   */
  providerId: string;
  /**
   * NOTE: This will be deprecated soon, once AuthProvider.audiences is
   * implemented and accepted in all the runtime components.
   *
   * The list of JWT
   * [audiences](https://tools.ietf.org/html/draft-ietf-oauth-json-web-token-32#section-4.1.3).
   * that are allowed to access. A JWT containing any of these audiences will
   * be accepted. When this setting is absent, only JWTs with audience
   * "https://[Service_name][google.api.Service.name]/[API_name][google.protobuf.Api.name]"
   * will be accepted. For example, if no audiences are in the setting,
   * LibraryService API will only accept JWTs with the following audience
   * "https://library-example.googleapis.com/google.example.library.v1.LibraryService".
   *
   * Example:
   *
   *     audiences: bookstore_android.apps.googleusercontent.com,
   *                bookstore_web.apps.googleusercontent.com
   */
  audiences: string;
}

function createBaseAuthentication(): Authentication {
  return { rules: [], providers: [] };
}

export const Authentication: MessageFns<Authentication> = {
  encode(message: Authentication, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.rules) {
      AuthenticationRule.encode(v!, writer.uint32(26).fork()).join();
    }
    for (const v of message.providers) {
      AuthProvider.encode(v!, writer.uint32(34).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Authentication {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthentication();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rules.push(AuthenticationRule.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.providers.push(AuthProvider.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Authentication {
    return {
      rules: globalThis.Array.isArray(object?.rules)
        ? object.rules.map((e: any) => AuthenticationRule.fromJSON(e))
        : [],
      providers: globalThis.Array.isArray(object?.providers)
        ? object.providers.map((e: any) => AuthProvider.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Authentication): unknown {
    const obj: any = {};
    if (message.rules?.length) {
      obj.rules = message.rules.map((e) => AuthenticationRule.toJSON(e));
    }
    if (message.providers?.length) {
      obj.providers = message.providers.map((e) => AuthProvider.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<Authentication>): Authentication {
    return Authentication.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Authentication>): Authentication {
    const message = createBaseAuthentication();
    message.rules = object.rules?.map((e) => AuthenticationRule.fromPartial(e)) || [];
    message.providers = object.providers?.map((e) => AuthProvider.fromPartial(e)) || [];
    return message;
  },
};

function createBaseAuthenticationRule(): AuthenticationRule {
  return { selector: "", oauth: undefined, allowWithoutCredential: false, requirements: [] };
}

export const AuthenticationRule: MessageFns<AuthenticationRule> = {
  encode(message: AuthenticationRule, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.selector !== "") {
      writer.uint32(10).string(message.selector);
    }
    if (message.oauth !== undefined) {
      OAuthRequirements.encode(message.oauth, writer.uint32(18).fork()).join();
    }
    if (message.allowWithoutCredential !== false) {
      writer.uint32(40).bool(message.allowWithoutCredential);
    }
    for (const v of message.requirements) {
      AuthRequirement.encode(v!, writer.uint32(58).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuthenticationRule {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthenticationRule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.selector = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.oauth = OAuthRequirements.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.allowWithoutCredential = reader.bool();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.requirements.push(AuthRequirement.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthenticationRule {
    return {
      selector: isSet(object.selector) ? globalThis.String(object.selector) : "",
      oauth: isSet(object.oauth) ? OAuthRequirements.fromJSON(object.oauth) : undefined,
      allowWithoutCredential: isSet(object.allowWithoutCredential)
        ? globalThis.Boolean(object.allowWithoutCredential)
        : false,
      requirements: globalThis.Array.isArray(object?.requirements)
        ? object.requirements.map((e: any) => AuthRequirement.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AuthenticationRule): unknown {
    const obj: any = {};
    if (message.selector !== "") {
      obj.selector = message.selector;
    }
    if (message.oauth !== undefined) {
      obj.oauth = OAuthRequirements.toJSON(message.oauth);
    }
    if (message.allowWithoutCredential !== false) {
      obj.allowWithoutCredential = message.allowWithoutCredential;
    }
    if (message.requirements?.length) {
      obj.requirements = message.requirements.map((e) => AuthRequirement.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AuthenticationRule>): AuthenticationRule {
    return AuthenticationRule.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthenticationRule>): AuthenticationRule {
    const message = createBaseAuthenticationRule();
    message.selector = object.selector ?? "";
    message.oauth = (object.oauth !== undefined && object.oauth !== null)
      ? OAuthRequirements.fromPartial(object.oauth)
      : undefined;
    message.allowWithoutCredential = object.allowWithoutCredential ?? false;
    message.requirements = object.requirements?.map((e) => AuthRequirement.fromPartial(e)) || [];
    return message;
  },
};

function createBaseJwtLocation(): JwtLocation {
  return { header: undefined, query: undefined, cookie: undefined, valuePrefix: "" };
}

export const JwtLocation: MessageFns<JwtLocation> = {
  encode(message: JwtLocation, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.header !== undefined) {
      writer.uint32(10).string(message.header);
    }
    if (message.query !== undefined) {
      writer.uint32(18).string(message.query);
    }
    if (message.cookie !== undefined) {
      writer.uint32(34).string(message.cookie);
    }
    if (message.valuePrefix !== "") {
      writer.uint32(26).string(message.valuePrefix);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): JwtLocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseJwtLocation();
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

          message.query = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.cookie = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.valuePrefix = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): JwtLocation {
    return {
      header: isSet(object.header) ? globalThis.String(object.header) : undefined,
      query: isSet(object.query) ? globalThis.String(object.query) : undefined,
      cookie: isSet(object.cookie) ? globalThis.String(object.cookie) : undefined,
      valuePrefix: isSet(object.valuePrefix) ? globalThis.String(object.valuePrefix) : "",
    };
  },

  toJSON(message: JwtLocation): unknown {
    const obj: any = {};
    if (message.header !== undefined) {
      obj.header = message.header;
    }
    if (message.query !== undefined) {
      obj.query = message.query;
    }
    if (message.cookie !== undefined) {
      obj.cookie = message.cookie;
    }
    if (message.valuePrefix !== "") {
      obj.valuePrefix = message.valuePrefix;
    }
    return obj;
  },

  create(base?: DeepPartial<JwtLocation>): JwtLocation {
    return JwtLocation.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<JwtLocation>): JwtLocation {
    const message = createBaseJwtLocation();
    message.header = object.header ?? undefined;
    message.query = object.query ?? undefined;
    message.cookie = object.cookie ?? undefined;
    message.valuePrefix = object.valuePrefix ?? "";
    return message;
  },
};

function createBaseAuthProvider(): AuthProvider {
  return { id: "", issuer: "", jwksUri: "", audiences: "", authorizationUrl: "", jwtLocations: [] };
}

export const AuthProvider: MessageFns<AuthProvider> = {
  encode(message: AuthProvider, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.jwksUri !== "") {
      writer.uint32(26).string(message.jwksUri);
    }
    if (message.audiences !== "") {
      writer.uint32(34).string(message.audiences);
    }
    if (message.authorizationUrl !== "") {
      writer.uint32(42).string(message.authorizationUrl);
    }
    for (const v of message.jwtLocations) {
      JwtLocation.encode(v!, writer.uint32(50).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuthProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.issuer = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.jwksUri = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.audiences = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.authorizationUrl = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.jwtLocations.push(JwtLocation.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthProvider {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      issuer: isSet(object.issuer) ? globalThis.String(object.issuer) : "",
      jwksUri: isSet(object.jwksUri) ? globalThis.String(object.jwksUri) : "",
      audiences: isSet(object.audiences) ? globalThis.String(object.audiences) : "",
      authorizationUrl: isSet(object.authorizationUrl) ? globalThis.String(object.authorizationUrl) : "",
      jwtLocations: globalThis.Array.isArray(object?.jwtLocations)
        ? object.jwtLocations.map((e: any) => JwtLocation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AuthProvider): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.issuer !== "") {
      obj.issuer = message.issuer;
    }
    if (message.jwksUri !== "") {
      obj.jwksUri = message.jwksUri;
    }
    if (message.audiences !== "") {
      obj.audiences = message.audiences;
    }
    if (message.authorizationUrl !== "") {
      obj.authorizationUrl = message.authorizationUrl;
    }
    if (message.jwtLocations?.length) {
      obj.jwtLocations = message.jwtLocations.map((e) => JwtLocation.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<AuthProvider>): AuthProvider {
    return AuthProvider.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthProvider>): AuthProvider {
    const message = createBaseAuthProvider();
    message.id = object.id ?? "";
    message.issuer = object.issuer ?? "";
    message.jwksUri = object.jwksUri ?? "";
    message.audiences = object.audiences ?? "";
    message.authorizationUrl = object.authorizationUrl ?? "";
    message.jwtLocations = object.jwtLocations?.map((e) => JwtLocation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOAuthRequirements(): OAuthRequirements {
  return { canonicalScopes: "" };
}

export const OAuthRequirements: MessageFns<OAuthRequirements> = {
  encode(message: OAuthRequirements, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.canonicalScopes !== "") {
      writer.uint32(10).string(message.canonicalScopes);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OAuthRequirements {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOAuthRequirements();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.canonicalScopes = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OAuthRequirements {
    return { canonicalScopes: isSet(object.canonicalScopes) ? globalThis.String(object.canonicalScopes) : "" };
  },

  toJSON(message: OAuthRequirements): unknown {
    const obj: any = {};
    if (message.canonicalScopes !== "") {
      obj.canonicalScopes = message.canonicalScopes;
    }
    return obj;
  },

  create(base?: DeepPartial<OAuthRequirements>): OAuthRequirements {
    return OAuthRequirements.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<OAuthRequirements>): OAuthRequirements {
    const message = createBaseOAuthRequirements();
    message.canonicalScopes = object.canonicalScopes ?? "";
    return message;
  },
};

function createBaseAuthRequirement(): AuthRequirement {
  return { providerId: "", audiences: "" };
}

export const AuthRequirement: MessageFns<AuthRequirement> = {
  encode(message: AuthRequirement, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.providerId !== "") {
      writer.uint32(10).string(message.providerId);
    }
    if (message.audiences !== "") {
      writer.uint32(18).string(message.audiences);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): AuthRequirement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAuthRequirement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.providerId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.audiences = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AuthRequirement {
    return {
      providerId: isSet(object.providerId) ? globalThis.String(object.providerId) : "",
      audiences: isSet(object.audiences) ? globalThis.String(object.audiences) : "",
    };
  },

  toJSON(message: AuthRequirement): unknown {
    const obj: any = {};
    if (message.providerId !== "") {
      obj.providerId = message.providerId;
    }
    if (message.audiences !== "") {
      obj.audiences = message.audiences;
    }
    return obj;
  },

  create(base?: DeepPartial<AuthRequirement>): AuthRequirement {
    return AuthRequirement.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<AuthRequirement>): AuthRequirement {
    const message = createBaseAuthRequirement();
    message.providerId = object.providerId ?? "";
    message.audiences = object.audiences ?? "";
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
