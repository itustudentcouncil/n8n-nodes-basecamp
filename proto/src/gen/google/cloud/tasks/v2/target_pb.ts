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
// @generated from file google/cloud/tasks/v2/target.proto (package google.cloud.tasks.v2, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_field_behavior } from "../../../api/field_behavior_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/tasks/v2/target.proto.
 */
export const file_google_cloud_tasks_v2_target: GenFile = /*@__PURE__*/
  fileDesc("CiJnb29nbGUvY2xvdWQvdGFza3MvdjIvdGFyZ2V0LnByb3RvEhVnb29nbGUuY2xvdWQudGFza3MudjIi4QIKC0h0dHBSZXF1ZXN0EhAKA3VybBgBIAEoCUID4EECEjYKC2h0dHBfbWV0aG9kGAIgASgOMiEuZ29vZ2xlLmNsb3VkLnRhc2tzLnYyLkh0dHBNZXRob2QSQAoHaGVhZGVycxgDIAMoCzIvLmdvb2dsZS5jbG91ZC50YXNrcy52Mi5IdHRwUmVxdWVzdC5IZWFkZXJzRW50cnkSDAoEYm9keRgEIAEoDBI4CgtvYXV0aF90b2tlbhgFIAEoCzIhLmdvb2dsZS5jbG91ZC50YXNrcy52Mi5PQXV0aFRva2VuSAASNgoKb2lkY190b2tlbhgGIAEoCzIgLmdvb2dsZS5jbG91ZC50YXNrcy52Mi5PaWRjVG9rZW5IABouCgxIZWFkZXJzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4AUIWChRhdXRob3JpemF0aW9uX2hlYWRlciKyAgoUQXBwRW5naW5lSHR0cFJlcXVlc3QSNgoLaHR0cF9tZXRob2QYASABKA4yIS5nb29nbGUuY2xvdWQudGFza3MudjIuSHR0cE1ldGhvZBJDChJhcHBfZW5naW5lX3JvdXRpbmcYAiABKAsyJy5nb29nbGUuY2xvdWQudGFza3MudjIuQXBwRW5naW5lUm91dGluZxIUCgxyZWxhdGl2ZV91cmkYAyABKAkSSQoHaGVhZGVycxgEIAMoCzI4Lmdvb2dsZS5jbG91ZC50YXNrcy52Mi5BcHBFbmdpbmVIdHRwUmVxdWVzdC5IZWFkZXJzRW50cnkSDAoEYm9keRgFIAEoDBouCgxIZWFkZXJzRW50cnkSCwoDa2V5GAEgASgJEg0KBXZhbHVlGAIgASgJOgI4ASJUChBBcHBFbmdpbmVSb3V0aW5nEg8KB3NlcnZpY2UYASABKAkSDwoHdmVyc2lvbhgCIAEoCRIQCghpbnN0YW5jZRgDIAEoCRIMCgRob3N0GAQgASgJIjoKCk9BdXRoVG9rZW4SHQoVc2VydmljZV9hY2NvdW50X2VtYWlsGAEgASgJEg0KBXNjb3BlGAIgASgJIjwKCU9pZGNUb2tlbhIdChVzZXJ2aWNlX2FjY291bnRfZW1haWwYASABKAkSEAoIYXVkaWVuY2UYAiABKAkqcwoKSHR0cE1ldGhvZBIbChdIVFRQX01FVEhPRF9VTlNQRUNJRklFRBAAEggKBFBPU1QQARIHCgNHRVQQAhIICgRIRUFEEAMSBwoDUFVUEAQSCgoGREVMRVRFEAUSCQoFUEFUQ0gQBhILCgdPUFRJT05TEAdCagoZY29tLmdvb2dsZS5jbG91ZC50YXNrcy52MkILVGFyZ2V0UHJvdG9QAVo+Y2xvdWQuZ29vZ2xlLmNvbS9nby9jbG91ZHRhc2tzL2FwaXYyL2Nsb3VkdGFza3NwYjtjbG91ZHRhc2tzcGJiBnByb3RvMw", [file_google_api_field_behavior]);

/**
 * HTTP request.
 *
 * The task will be pushed to the worker as an HTTP request. If the worker
 * or the redirected worker acknowledges the task by returning a successful HTTP
 * response code ([`200` - `299`]), the task will be removed from the queue. If
 * any other HTTP response code is returned or no response is received, the
 * task will be retried according to the following:
 *
 * * User-specified throttling: [retry
 * configuration][google.cloud.tasks.v2.Queue.retry_config],
 *   [rate limits][google.cloud.tasks.v2.Queue.rate_limits], and the [queue's
 *   state][google.cloud.tasks.v2.Queue.state].
 *
 * * System throttling: To prevent the worker from overloading, Cloud Tasks may
 *   temporarily reduce the queue's effective rate. User-specified settings
 *   will not be changed.
 *
 *  System throttling happens because:
 *
 *   * Cloud Tasks backs off on all errors. Normally the backoff specified in
 *     [rate limits][google.cloud.tasks.v2.Queue.rate_limits] will be used. But
 *     if the worker returns `429` (Too Many Requests), `503` (Service
 *     Unavailable), or the rate of errors is high, Cloud Tasks will use a
 *     higher backoff rate. The retry specified in the `Retry-After` HTTP
 *     response header is considered.
 *
 *   * To prevent traffic spikes and to smooth sudden increases in traffic,
 *     dispatches ramp up slowly when the queue is newly created or idle and
 *     if large numbers of tasks suddenly become available to dispatch (due to
 *     spikes in create task rates, the queue being unpaused, or many tasks
 *     that are scheduled at the same time).
 *
 * @generated from message google.cloud.tasks.v2.HttpRequest
 */
export type HttpRequest = Message<"google.cloud.tasks.v2.HttpRequest"> & {
  /**
   * Required. The full url path that the request will be sent to.
   *
   * This string must begin with either "http://" or "https://". Some examples
   * are: `http://acme.com` and `https://acme.com/sales:8080`. Cloud Tasks will
   * encode some characters for safety and compatibility. The maximum allowed
   * URL length is 2083 characters after encoding.
   *
   * The `Location` header response from a redirect response [`300` - `399`]
   * may be followed. The redirect is not counted as a separate attempt.
   *
   * @generated from field: string url = 1;
   */
  url: string;

  /**
   * The HTTP method to use for the request. The default is POST.
   *
   * @generated from field: google.cloud.tasks.v2.HttpMethod http_method = 2;
   */
  httpMethod: HttpMethod;

  /**
   * HTTP request headers.
   *
   * This map contains the header field names and values.
   * Headers can be set when the
   * [task is created][google.cloud.tasks.v2beta3.CloudTasks.CreateTask].
   *
   * These headers represent a subset of the headers that will accompany the
   * task's HTTP request. Some HTTP request headers will be ignored or replaced.
   *
   * A partial list of headers that will be ignored or replaced is:
   *
   * * Host: This will be computed by Cloud Tasks and derived from
   *   [HttpRequest.url][google.cloud.tasks.v2.HttpRequest.url].
   * * Content-Length: This will be computed by Cloud Tasks.
   * * User-Agent: This will be set to `"Google-Cloud-Tasks"`.
   * * `X-Google-*`: Google use only.
   * * `X-AppEngine-*`: Google use only.
   *
   * `Content-Type` won't be set by Cloud Tasks. You can explicitly set
   * `Content-Type` to a media type when the
   *  [task is created][google.cloud.tasks.v2beta3.CloudTasks.CreateTask].
   *  For example, `Content-Type` can be set to `"application/octet-stream"` or
   *  `"application/json"`.
   *
   * Headers which can have multiple values (according to RFC2616) can be
   * specified using comma-separated values.
   *
   * The size of the headers must be less than 80KB.
   *
   * @generated from field: map<string, string> headers = 3;
   */
  headers: { [key: string]: string };

  /**
   * HTTP request body.
   *
   * A request body is allowed only if the
   * [HTTP method][google.cloud.tasks.v2.HttpRequest.http_method] is POST, PUT,
   * or PATCH. It is an error to set body on a task with an incompatible
   * [HttpMethod][google.cloud.tasks.v2.HttpMethod].
   *
   * @generated from field: bytes body = 4;
   */
  body: Uint8Array;

  /**
   * The mode for generating an `Authorization` header for HTTP requests.
   *
   * If specified, all `Authorization` headers in the
   * [HttpRequest.headers][google.cloud.tasks.v2.HttpRequest.headers] field will
   * be overridden.
   *
   * @generated from oneof google.cloud.tasks.v2.HttpRequest.authorization_header
   */
  authorizationHeader: {
    /**
     * If specified, an
     * [OAuth token](https://developers.google.com/identity/protocols/OAuth2)
     * will be generated and attached as an `Authorization` header in the HTTP
     * request.
     *
     * This type of authorization should generally only be used when calling
     * Google APIs hosted on *.googleapis.com.
     *
     * @generated from field: google.cloud.tasks.v2.OAuthToken oauth_token = 5;
     */
    value: OAuthToken;
    case: "oauthToken";
  } | {
    /**
     * If specified, an
     * [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect)
     * token will be generated and attached as an `Authorization` header in the
     * HTTP request.
     *
     * This type of authorization can be used for many scenarios, including
     * calling Cloud Run, or endpoints where you intend to validate the token
     * yourself.
     *
     * @generated from field: google.cloud.tasks.v2.OidcToken oidc_token = 6;
     */
    value: OidcToken;
    case: "oidcToken";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message google.cloud.tasks.v2.HttpRequest.
 * Use `create(HttpRequestSchema)` to create a new message.
 */
export const HttpRequestSchema: GenMessage<HttpRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_tasks_v2_target, 0);

/**
 * App Engine HTTP request.
 *
 * The message defines the HTTP request that is sent to an App Engine app when
 * the task is dispatched.
 *
 * Using [AppEngineHttpRequest][google.cloud.tasks.v2.AppEngineHttpRequest]
 * requires
 * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
 * Google IAM permission for the project
 * and the following scope:
 *
 * `https://www.googleapis.com/auth/cloud-platform`
 *
 * The task will be delivered to the App Engine app which belongs to the same
 * project as the queue. For more information, see
 * [How Requests are
 * Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
 * and how routing is affected by
 * [dispatch
 * files](https://cloud.google.com/appengine/docs/python/config/dispatchref).
 * Traffic is encrypted during transport and never leaves Google datacenters.
 * Because this traffic is carried over a communication mechanism internal to
 * Google, you cannot explicitly set the protocol (for example, HTTP or HTTPS).
 * The request to the handler, however, will appear to have used the HTTP
 * protocol.
 *
 * The [AppEngineRouting][google.cloud.tasks.v2.AppEngineRouting] used to
 * construct the URL that the task is delivered to can be set at the queue-level
 * or task-level:
 *
 * * If [app_engine_routing_override is set on the
 *   queue][google.cloud.tasks.v2.Queue.app_engine_routing_override], this value
 *   is used for all tasks in the queue, no matter what the setting is for the
 *   [task-level
 *   app_engine_routing][google.cloud.tasks.v2.AppEngineHttpRequest.app_engine_routing].
 *
 *
 * The `url` that the task will be sent to is:
 *
 * * `url =` [host][google.cloud.tasks.v2.AppEngineRouting.host] `+`
 *   [relative_uri][google.cloud.tasks.v2.AppEngineHttpRequest.relative_uri]
 *
 * Tasks can be dispatched to secure app handlers, unsecure app handlers, and
 * URIs restricted with
 * [`login:
 * admin`](https://cloud.google.com/appengine/docs/standard/python/config/appref).
 * Because tasks are not run as any user, they cannot be dispatched to URIs
 * restricted with
 * [`login:
 * required`](https://cloud.google.com/appengine/docs/standard/python/config/appref)
 * Task dispatches also do not follow redirects.
 *
 * The task attempt has succeeded if the app's request handler returns an HTTP
 * response code in the range [`200` - `299`]. The task attempt has failed if
 * the app's handler returns a non-2xx response code or Cloud Tasks does
 * not receive response before the
 * [deadline][google.cloud.tasks.v2.Task.dispatch_deadline]. Failed tasks will
 * be retried according to the [retry
 * configuration][google.cloud.tasks.v2.Queue.retry_config]. `503` (Service
 * Unavailable) is considered an App Engine system error instead of an
 * application error and will cause Cloud Tasks' traffic congestion control to
 * temporarily throttle the queue's dispatches. Unlike other types of task
 * targets, a `429` (Too Many Requests) response from an app handler does not
 * cause traffic congestion control to throttle the queue.
 *
 * @generated from message google.cloud.tasks.v2.AppEngineHttpRequest
 */
export type AppEngineHttpRequest = Message<"google.cloud.tasks.v2.AppEngineHttpRequest"> & {
  /**
   * The HTTP method to use for the request. The default is POST.
   *
   * The app's request handler for the task's target URL must be able to handle
   * HTTP requests with this http_method, otherwise the task attempt fails with
   * error code 405 (Method Not Allowed). See [Writing a push task request
   * handler](https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler)
   * and the App Engine documentation for your runtime on [How Requests are
   * Handled](https://cloud.google.com/appengine/docs/standard/python3/how-requests-are-handled).
   *
   * @generated from field: google.cloud.tasks.v2.HttpMethod http_method = 1;
   */
  httpMethod: HttpMethod;

  /**
   * Task-level setting for App Engine routing.
   *
   * * If [app_engine_routing_override is set on the
   *   queue][google.cloud.tasks.v2.Queue.app_engine_routing_override], this
   *   value is used for all tasks in the queue, no matter what the setting is
   *   for the [task-level
   *   app_engine_routing][google.cloud.tasks.v2.AppEngineHttpRequest.app_engine_routing].
   *
   * @generated from field: google.cloud.tasks.v2.AppEngineRouting app_engine_routing = 2;
   */
  appEngineRouting?: AppEngineRouting;

  /**
   * The relative URI.
   *
   * The relative URI must begin with "/" and must be a valid HTTP relative URI.
   * It can contain a path and query string arguments.
   * If the relative URI is empty, then the root path "/" will be used.
   * No spaces are allowed, and the maximum length allowed is 2083 characters.
   *
   * @generated from field: string relative_uri = 3;
   */
  relativeUri: string;

  /**
   * HTTP request headers.
   *
   * This map contains the header field names and values.
   * Headers can be set when the
   * [task is created][google.cloud.tasks.v2.CloudTasks.CreateTask].
   * Repeated headers are not supported but a header value can contain commas.
   *
   * Cloud Tasks sets some headers to default values:
   *
   * * `User-Agent`: By default, this header is
   *   `"AppEngine-Google; (+http://code.google.com/appengine)"`.
   *   This header can be modified, but Cloud Tasks will append
   *   `"AppEngine-Google; (+http://code.google.com/appengine)"` to the
   *   modified `User-Agent`.
   *
   * If the task has a [body][google.cloud.tasks.v2.AppEngineHttpRequest.body],
   * Cloud Tasks sets the following headers:
   *
   * * `Content-Type`: By default, the `Content-Type` header is set to
   *   `"application/octet-stream"`. The default can be overridden by explicitly
   *   setting `Content-Type` to a particular media type when the
   *   [task is created][google.cloud.tasks.v2.CloudTasks.CreateTask].
   *   For example, `Content-Type` can be set to `"application/json"`.
   * * `Content-Length`: This is computed by Cloud Tasks. This value is
   *   output only.   It cannot be changed.
   *
   * The headers below cannot be set or overridden:
   *
   * * `Host`
   * * `X-Google-*`
   * * `X-AppEngine-*`
   *
   * In addition, Cloud Tasks sets some headers when the task is dispatched,
   * such as headers containing information about the task; see
   * [request
   * headers](https://cloud.google.com/tasks/docs/creating-appengine-handlers#reading_request_headers).
   * These headers are set only when the task is dispatched, so they are not
   * visible when the task is returned in a Cloud Tasks response.
   *
   * Although there is no specific limit for the maximum number of headers or
   * the size, there is a limit on the maximum size of the
   * [Task][google.cloud.tasks.v2.Task]. For more information, see the
   * [CreateTask][google.cloud.tasks.v2.CloudTasks.CreateTask] documentation.
   *
   * @generated from field: map<string, string> headers = 4;
   */
  headers: { [key: string]: string };

  /**
   * HTTP request body.
   *
   * A request body is allowed only if the HTTP method is POST or PUT. It is
   * an error to set a body on a task with an incompatible
   * [HttpMethod][google.cloud.tasks.v2.HttpMethod].
   *
   * @generated from field: bytes body = 5;
   */
  body: Uint8Array;
};

/**
 * Describes the message google.cloud.tasks.v2.AppEngineHttpRequest.
 * Use `create(AppEngineHttpRequestSchema)` to create a new message.
 */
export const AppEngineHttpRequestSchema: GenMessage<AppEngineHttpRequest> = /*@__PURE__*/
  messageDesc(file_google_cloud_tasks_v2_target, 1);

/**
 * App Engine Routing.
 *
 * Defines routing characteristics specific to App Engine - service, version,
 * and instance.
 *
 * For more information about services, versions, and instances see
 * [An Overview of App
 * Engine](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine),
 * [Microservices Architecture on Google App
 * Engine](https://cloud.google.com/appengine/docs/python/microservices-on-app-engine),
 * [App Engine Standard request
 * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed),
 * and [App Engine Flex request
 * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
 *
 * Using [AppEngineRouting][google.cloud.tasks.v2.AppEngineRouting] requires
 * [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control)
 * Google IAM permission for the project
 * and the following scope:
 *
 * `https://www.googleapis.com/auth/cloud-platform`
 *
 * @generated from message google.cloud.tasks.v2.AppEngineRouting
 */
export type AppEngineRouting = Message<"google.cloud.tasks.v2.AppEngineRouting"> & {
  /**
   * App service.
   *
   * By default, the task is sent to the service which is the default
   * service when the task is attempted.
   *
   * For some queues or tasks which were created using the App Engine
   * Task Queue API, [host][google.cloud.tasks.v2.AppEngineRouting.host] is not
   * parsable into [service][google.cloud.tasks.v2.AppEngineRouting.service],
   * [version][google.cloud.tasks.v2.AppEngineRouting.version], and
   * [instance][google.cloud.tasks.v2.AppEngineRouting.instance]. For example,
   * some tasks which were created using the App Engine SDK use a custom domain
   * name; custom domains are not parsed by Cloud Tasks. If
   * [host][google.cloud.tasks.v2.AppEngineRouting.host] is not parsable, then
   * [service][google.cloud.tasks.v2.AppEngineRouting.service],
   * [version][google.cloud.tasks.v2.AppEngineRouting.version], and
   * [instance][google.cloud.tasks.v2.AppEngineRouting.instance] are the empty
   * string.
   *
   * @generated from field: string service = 1;
   */
  service: string;

  /**
   * App version.
   *
   * By default, the task is sent to the version which is the default
   * version when the task is attempted.
   *
   * For some queues or tasks which were created using the App Engine
   * Task Queue API, [host][google.cloud.tasks.v2.AppEngineRouting.host] is not
   * parsable into [service][google.cloud.tasks.v2.AppEngineRouting.service],
   * [version][google.cloud.tasks.v2.AppEngineRouting.version], and
   * [instance][google.cloud.tasks.v2.AppEngineRouting.instance]. For example,
   * some tasks which were created using the App Engine SDK use a custom domain
   * name; custom domains are not parsed by Cloud Tasks. If
   * [host][google.cloud.tasks.v2.AppEngineRouting.host] is not parsable, then
   * [service][google.cloud.tasks.v2.AppEngineRouting.service],
   * [version][google.cloud.tasks.v2.AppEngineRouting.version], and
   * [instance][google.cloud.tasks.v2.AppEngineRouting.instance] are the empty
   * string.
   *
   * @generated from field: string version = 2;
   */
  version: string;

  /**
   * App instance.
   *
   * By default, the task is sent to an instance which is available when
   * the task is attempted.
   *
   * Requests can only be sent to a specific instance if
   * [manual scaling is used in App Engine
   * Standard](https://cloud.google.com/appengine/docs/python/an-overview-of-app-engine?hl=en_US#scaling_types_and_instance_classes).
   * App Engine Flex does not support instances. For more information, see
   * [App Engine Standard request
   * routing](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed)
   * and [App Engine Flex request
   * routing](https://cloud.google.com/appengine/docs/flexible/python/how-requests-are-routed).
   *
   * @generated from field: string instance = 3;
   */
  instance: string;

  /**
   * Output only. The host that the task is sent to.
   *
   * The host is constructed from the domain name of the app associated with
   * the queue's project ID (for example <app-id>.appspot.com), and the
   * [service][google.cloud.tasks.v2.AppEngineRouting.service],
   * [version][google.cloud.tasks.v2.AppEngineRouting.version], and
   * [instance][google.cloud.tasks.v2.AppEngineRouting.instance]. Tasks which
   * were created using the App Engine SDK might have a custom domain name.
   *
   * For more information, see
   * [How Requests are
   * Routed](https://cloud.google.com/appengine/docs/standard/python/how-requests-are-routed).
   *
   * @generated from field: string host = 4;
   */
  host: string;
};

/**
 * Describes the message google.cloud.tasks.v2.AppEngineRouting.
 * Use `create(AppEngineRoutingSchema)` to create a new message.
 */
export const AppEngineRoutingSchema: GenMessage<AppEngineRouting> = /*@__PURE__*/
  messageDesc(file_google_cloud_tasks_v2_target, 2);

/**
 * Contains information needed for generating an
 * [OAuth token](https://developers.google.com/identity/protocols/OAuth2).
 * This type of authorization should generally only be used when calling Google
 * APIs hosted on *.googleapis.com.
 *
 * @generated from message google.cloud.tasks.v2.OAuthToken
 */
export type OAuthToken = Message<"google.cloud.tasks.v2.OAuthToken"> & {
  /**
   * [Service account email](https://cloud.google.com/iam/docs/service-accounts)
   * to be used for generating OAuth token.
   * The service account must be within the same project as the queue. The
   * caller must have iam.serviceAccounts.actAs permission for the service
   * account.
   *
   * @generated from field: string service_account_email = 1;
   */
  serviceAccountEmail: string;

  /**
   * OAuth scope to be used for generating OAuth access token.
   * If not specified, "https://www.googleapis.com/auth/cloud-platform"
   * will be used.
   *
   * @generated from field: string scope = 2;
   */
  scope: string;
};

/**
 * Describes the message google.cloud.tasks.v2.OAuthToken.
 * Use `create(OAuthTokenSchema)` to create a new message.
 */
export const OAuthTokenSchema: GenMessage<OAuthToken> = /*@__PURE__*/
  messageDesc(file_google_cloud_tasks_v2_target, 3);

/**
 * Contains information needed for generating an
 * [OpenID Connect
 * token](https://developers.google.com/identity/protocols/OpenIDConnect).
 * This type of authorization can be used for many scenarios, including
 * calling Cloud Run, or endpoints where you intend to validate the token
 * yourself.
 *
 * @generated from message google.cloud.tasks.v2.OidcToken
 */
export type OidcToken = Message<"google.cloud.tasks.v2.OidcToken"> & {
  /**
   * [Service account email](https://cloud.google.com/iam/docs/service-accounts)
   * to be used for generating OIDC token.
   * The service account must be within the same project as the queue. The
   * caller must have iam.serviceAccounts.actAs permission for the service
   * account.
   *
   * @generated from field: string service_account_email = 1;
   */
  serviceAccountEmail: string;

  /**
   * Audience to be used when generating OIDC token. If not specified, the URI
   * specified in target will be used.
   *
   * @generated from field: string audience = 2;
   */
  audience: string;
};

/**
 * Describes the message google.cloud.tasks.v2.OidcToken.
 * Use `create(OidcTokenSchema)` to create a new message.
 */
export const OidcTokenSchema: GenMessage<OidcToken> = /*@__PURE__*/
  messageDesc(file_google_cloud_tasks_v2_target, 4);

/**
 * The HTTP method used to deliver the task.
 *
 * @generated from enum google.cloud.tasks.v2.HttpMethod
 */
export enum HttpMethod {
  /**
   * HTTP method unspecified
   *
   * @generated from enum value: HTTP_METHOD_UNSPECIFIED = 0;
   */
  HTTP_METHOD_UNSPECIFIED = 0,

  /**
   * HTTP POST
   *
   * @generated from enum value: POST = 1;
   */
  POST = 1,

  /**
   * HTTP GET
   *
   * @generated from enum value: GET = 2;
   */
  GET = 2,

  /**
   * HTTP HEAD
   *
   * @generated from enum value: HEAD = 3;
   */
  HEAD = 3,

  /**
   * HTTP PUT
   *
   * @generated from enum value: PUT = 4;
   */
  PUT = 4,

  /**
   * HTTP DELETE
   *
   * @generated from enum value: DELETE = 5;
   */
  DELETE = 5,

  /**
   * HTTP PATCH
   *
   * @generated from enum value: PATCH = 6;
   */
  PATCH = 6,

  /**
   * HTTP OPTIONS
   *
   * @generated from enum value: OPTIONS = 7;
   */
  OPTIONS = 7,
}

/**
 * Describes the enum google.cloud.tasks.v2.HttpMethod.
 */
export const HttpMethodSchema: GenEnum<HttpMethod> = /*@__PURE__*/
  enumDesc(file_google_cloud_tasks_v2_target, 0);
