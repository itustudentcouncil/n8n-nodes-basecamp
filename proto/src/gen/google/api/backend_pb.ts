// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file google/api/backend.proto (package google.api, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/api/backend.proto.
 */
export const file_google_api_backend: GenFile = /*@__PURE__*/
  fileDesc("Chhnb29nbGUvYXBpL2JhY2tlbmQucHJvdG8SCmdvb2dsZS5hcGkiMQoHQmFja2VuZBImCgVydWxlcxgBIAMoCzIXLmdvb2dsZS5hcGkuQmFja2VuZFJ1bGUisgQKC0JhY2tlbmRSdWxlEhAKCHNlbGVjdG9yGAEgASgJEg8KB2FkZHJlc3MYAiABKAkSEAoIZGVhZGxpbmUYAyABKAESGAoMbWluX2RlYWRsaW5lGAQgASgBQgIYARIaChJvcGVyYXRpb25fZGVhZGxpbmUYBSABKAESQQoQcGF0aF90cmFuc2xhdGlvbhgGIAEoDjInLmdvb2dsZS5hcGkuQmFja2VuZFJ1bGUuUGF0aFRyYW5zbGF0aW9uEhYKDGp3dF9hdWRpZW5jZRgHIAEoCUgAEhYKDGRpc2FibGVfYXV0aBgIIAEoCEgAEhAKCHByb3RvY29sGAkgASgJEl4KHW92ZXJyaWRlc19ieV9yZXF1ZXN0X3Byb3RvY29sGAogAygLMjcuZ29vZ2xlLmFwaS5CYWNrZW5kUnVsZS5PdmVycmlkZXNCeVJlcXVlc3RQcm90b2NvbEVudHJ5GloKH092ZXJyaWRlc0J5UmVxdWVzdFByb3RvY29sRW50cnkSCwoDa2V5GAEgASgJEiYKBXZhbHVlGAIgASgLMhcuZ29vZ2xlLmFwaS5CYWNrZW5kUnVsZToCOAEiZQoPUGF0aFRyYW5zbGF0aW9uEiAKHFBBVEhfVFJBTlNMQVRJT05fVU5TUEVDSUZJRUQQABIUChBDT05TVEFOVF9BRERSRVNTEAESGgoWQVBQRU5EX1BBVEhfVE9fQUREUkVTUxACQhAKDmF1dGhlbnRpY2F0aW9uQm4KDmNvbS5nb29nbGUuYXBpQgxCYWNrZW5kUHJvdG9QAVpFZ29vZ2xlLmdvbGFuZy5vcmcvZ2VucHJvdG8vZ29vZ2xlYXBpcy9hcGkvc2VydmljZWNvbmZpZztzZXJ2aWNlY29uZmlnogIER0FQSWIGcHJvdG8z");

/**
 * `Backend` defines the backend configuration for a service.
 *
 * @generated from message google.api.Backend
 */
export type Backend = Message<"google.api.Backend"> & {
  /**
   * A list of API backend rules that apply to individual API methods.
   *
   * **NOTE:** All service configuration rules follow "last one wins" order.
   *
   * @generated from field: repeated google.api.BackendRule rules = 1;
   */
  rules: BackendRule[];
};

/**
 * Describes the message google.api.Backend.
 * Use `create(BackendSchema)` to create a new message.
 */
export const BackendSchema: GenMessage<Backend> = /*@__PURE__*/
  messageDesc(file_google_api_backend, 0);

/**
 * A backend rule provides configuration for an individual API element.
 *
 * @generated from message google.api.BackendRule
 */
export type BackendRule = Message<"google.api.BackendRule"> & {
  /**
   * Selects the methods to which this rule applies.
   *
   * Refer to [selector][google.api.DocumentationRule.selector] for syntax
   * details.
   *
   * @generated from field: string selector = 1;
   */
  selector: string;

  /**
   * The address of the API backend.
   *
   * The scheme is used to determine the backend protocol and security.
   * The following schemes are accepted:
   *
   *    SCHEME        PROTOCOL    SECURITY
   *    http://       HTTP        None
   *    https://      HTTP        TLS
   *    grpc://       gRPC        None
   *    grpcs://      gRPC        TLS
   *
   * It is recommended to explicitly include a scheme. Leaving out the scheme
   * may cause constrasting behaviors across platforms.
   *
   * If the port is unspecified, the default is:
   * - 80 for schemes without TLS
   * - 443 for schemes with TLS
   *
   * For HTTP backends, use [protocol][google.api.BackendRule.protocol]
   * to specify the protocol version.
   *
   * @generated from field: string address = 2;
   */
  address: string;

  /**
   * The number of seconds to wait for a response from a request. The default
   * varies based on the request protocol and deployment environment.
   *
   * @generated from field: double deadline = 3;
   */
  deadline: number;

  /**
   * Deprecated, do not use.
   *
   * @generated from field: double min_deadline = 4 [deprecated = true];
   * @deprecated
   */
  minDeadline: number;

  /**
   * The number of seconds to wait for the completion of a long running
   * operation. The default is no deadline.
   *
   * @generated from field: double operation_deadline = 5;
   */
  operationDeadline: number;

  /**
   * @generated from field: google.api.BackendRule.PathTranslation path_translation = 6;
   */
  pathTranslation: BackendRule_PathTranslation;

  /**
   * Authentication settings used by the backend.
   *
   * These are typically used to provide service management functionality to
   * a backend served on a publicly-routable URL. The `authentication`
   * details should match the authentication behavior used by the backend.
   *
   * For example, specifying `jwt_audience` implies that the backend expects
   * authentication via a JWT.
   *
   * When authentication is unspecified, the resulting behavior is the same
   * as `disable_auth` set to `true`.
   *
   * Refer to https://developers.google.com/identity/protocols/OpenIDConnect for
   * JWT ID token.
   *
   * @generated from oneof google.api.BackendRule.authentication
   */
  authentication: {
    /**
     * The JWT audience is used when generating a JWT ID token for the backend.
     * This ID token will be added in the HTTP "authorization" header, and sent
     * to the backend.
     *
     * @generated from field: string jwt_audience = 7;
     */
    value: string;
    case: "jwtAudience";
  } | {
    /**
     * When disable_auth is true, a JWT ID token won't be generated and the
     * original "Authorization" HTTP header will be preserved. If the header is
     * used to carry the original token and is expected by the backend, this
     * field must be set to true to preserve the header.
     *
     * @generated from field: bool disable_auth = 8;
     */
    value: boolean;
    case: "disableAuth";
  } | { case: undefined; value?: undefined };

  /**
   * The protocol used for sending a request to the backend.
   * The supported values are "http/1.1" and "h2".
   *
   * The default value is inferred from the scheme in the
   * [address][google.api.BackendRule.address] field:
   *
   *    SCHEME        PROTOCOL
   *    http://       http/1.1
   *    https://      http/1.1
   *    grpc://       h2
   *    grpcs://      h2
   *
   * For secure HTTP backends (https://) that support HTTP/2, set this field
   * to "h2" for improved performance.
   *
   * Configuring this field to non-default values is only supported for secure
   * HTTP backends. This field will be ignored for all other backends.
   *
   * See
   * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
   * for more details on the supported values.
   *
   * @generated from field: string protocol = 9;
   */
  protocol: string;

  /**
   * The map between request protocol and the backend address.
   *
   * @generated from field: map<string, google.api.BackendRule> overrides_by_request_protocol = 10;
   */
  overridesByRequestProtocol: { [key: string]: BackendRule };
};

/**
 * Describes the message google.api.BackendRule.
 * Use `create(BackendRuleSchema)` to create a new message.
 */
export const BackendRuleSchema: GenMessage<BackendRule> = /*@__PURE__*/
  messageDesc(file_google_api_backend, 1);

/**
 * Path Translation specifies how to combine the backend address with the
 * request path in order to produce the appropriate forwarding URL for the
 * request.
 *
 * Path Translation is applicable only to HTTP-based backends. Backends which
 * do not accept requests over HTTP/HTTPS should leave `path_translation`
 * unspecified.
 *
 * @generated from enum google.api.BackendRule.PathTranslation
 */
export enum BackendRule_PathTranslation {
  /**
   * @generated from enum value: PATH_TRANSLATION_UNSPECIFIED = 0;
   */
  PATH_TRANSLATION_UNSPECIFIED = 0,

  /**
   * Use the backend address as-is, with no modification to the path. If the
   * URL pattern contains variables, the variable names and values will be
   * appended to the query string. If a query string parameter and a URL
   * pattern variable have the same name, this may result in duplicate keys in
   * the query string.
   *
   * # Examples
   *
   * Given the following operation config:
   *
   *     Method path:        /api/company/{cid}/user/{uid}
   *     Backend address:    https://example.cloudfunctions.net/getUser
   *
   * Requests to the following request paths will call the backend at the
   * translated path:
   *
   *     Request path: /api/company/widgetworks/user/johndoe
   *     Translated:
   *     https://example.cloudfunctions.net/getUser?cid=widgetworks&uid=johndoe
   *
   *     Request path: /api/company/widgetworks/user/johndoe?timezone=EST
   *     Translated:
   *     https://example.cloudfunctions.net/getUser?timezone=EST&cid=widgetworks&uid=johndoe
   *
   * @generated from enum value: CONSTANT_ADDRESS = 1;
   */
  CONSTANT_ADDRESS = 1,

  /**
   * The request path will be appended to the backend address.
   *
   * # Examples
   *
   * Given the following operation config:
   *
   *     Method path:        /api/company/{cid}/user/{uid}
   *     Backend address:    https://example.appspot.com
   *
   * Requests to the following request paths will call the backend at the
   * translated path:
   *
   *     Request path: /api/company/widgetworks/user/johndoe
   *     Translated:
   *     https://example.appspot.com/api/company/widgetworks/user/johndoe
   *
   *     Request path: /api/company/widgetworks/user/johndoe?timezone=EST
   *     Translated:
   *     https://example.appspot.com/api/company/widgetworks/user/johndoe?timezone=EST
   *
   * @generated from enum value: APPEND_PATH_TO_ADDRESS = 2;
   */
  APPEND_PATH_TO_ADDRESS = 2,
}

/**
 * Describes the enum google.api.BackendRule.PathTranslation.
 */
export const BackendRule_PathTranslationSchema: GenEnum<BackendRule_PathTranslation> = /*@__PURE__*/
  enumDesc(file_google_api_backend, 1, 0);
