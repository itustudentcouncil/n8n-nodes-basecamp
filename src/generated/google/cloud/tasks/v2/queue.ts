// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/tasks/v2/queue.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import Long from "long";
import { Duration } from "../../../protobuf/duration.js";
import { Timestamp } from "../../../protobuf/timestamp.js";
import { AppEngineRouting } from "./target.js";

export const protobufPackage = "google.cloud.tasks.v2";

/**
 * A queue is a container of related tasks. Queues are configured to manage
 * how those tasks are dispatched. Configurable properties include rate limits,
 * retry options, queue types, and others.
 */
export interface Queue {
  /**
   * Caller-specified and required in
   * [CreateQueue][google.cloud.tasks.v2.CloudTasks.CreateQueue], after which it
   * becomes output only.
   *
   * The queue name.
   *
   * The queue name must have the following format:
   * `projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID`
   *
   * * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]),
   *    hyphens (-), colons (:), or periods (.).
   *    For more information, see
   *    [Identifying
   *    projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects)
   * * `LOCATION_ID` is the canonical ID for the queue's location.
   *    The list of available locations can be obtained by calling
   *    [ListLocations][google.cloud.location.Locations.ListLocations].
   *    For more information, see https://cloud.google.com/about/locations/.
   * * `QUEUE_ID` can contain letters ([A-Za-z]), numbers ([0-9]), or
   *   hyphens (-). The maximum length is 100 characters.
   */
  name: string;
  /**
   * Overrides for
   * [task-level
   * app_engine_routing][google.cloud.tasks.v2.AppEngineHttpRequest.app_engine_routing].
   * These settings apply only to
   * [App Engine tasks][google.cloud.tasks.v2.AppEngineHttpRequest] in this
   * queue. [Http tasks][google.cloud.tasks.v2.HttpRequest] are not affected.
   *
   * If set, `app_engine_routing_override` is used for all
   * [App Engine tasks][google.cloud.tasks.v2.AppEngineHttpRequest] in the
   * queue, no matter what the setting is for the [task-level
   * app_engine_routing][google.cloud.tasks.v2.AppEngineHttpRequest.app_engine_routing].
   */
  appEngineRoutingOverride:
    | AppEngineRouting
    | undefined;
  /**
   * Rate limits for task dispatches.
   *
   * [rate_limits][google.cloud.tasks.v2.Queue.rate_limits] and
   * [retry_config][google.cloud.tasks.v2.Queue.retry_config] are related
   * because they both control task attempts. However they control task attempts
   * in different ways:
   *
   * * [rate_limits][google.cloud.tasks.v2.Queue.rate_limits] controls the total
   * rate of
   *   dispatches from a queue (i.e. all traffic dispatched from the
   *   queue, regardless of whether the dispatch is from a first
   *   attempt or a retry).
   * * [retry_config][google.cloud.tasks.v2.Queue.retry_config] controls what
   * happens to
   *   particular a task after its first attempt fails. That is,
   *   [retry_config][google.cloud.tasks.v2.Queue.retry_config] controls task
   *   retries (the second attempt, third attempt, etc).
   *
   * The queue's actual dispatch rate is the result of:
   *
   * * Number of tasks in the queue
   * * User-specified throttling:
   * [rate_limits][google.cloud.tasks.v2.Queue.rate_limits],
   *   [retry_config][google.cloud.tasks.v2.Queue.retry_config], and the
   *   [queue's state][google.cloud.tasks.v2.Queue.state].
   * * System throttling due to `429` (Too Many Requests) or `503` (Service
   *   Unavailable) responses from the worker, high error rates, or to smooth
   *   sudden large traffic spikes.
   */
  rateLimits:
    | RateLimits
    | undefined;
  /**
   * Settings that determine the retry behavior.
   *
   * * For tasks created using Cloud Tasks: the queue-level retry settings
   *   apply to all tasks in the queue that were created using Cloud Tasks.
   *   Retry settings cannot be set on individual tasks.
   * * For tasks created using the App Engine SDK: the queue-level retry
   *   settings apply to all tasks in the queue which do not have retry settings
   *   explicitly set on the task and were created by the App Engine SDK. See
   *   [App Engine
   *   documentation](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/retrying-tasks).
   */
  retryConfig:
    | RetryConfig
    | undefined;
  /**
   * Output only. The state of the queue.
   *
   * `state` can only be changed by calling
   * [PauseQueue][google.cloud.tasks.v2.CloudTasks.PauseQueue],
   * [ResumeQueue][google.cloud.tasks.v2.CloudTasks.ResumeQueue], or uploading
   * [queue.yaml/xml](https://cloud.google.com/appengine/docs/python/config/queueref).
   * [UpdateQueue][google.cloud.tasks.v2.CloudTasks.UpdateQueue] cannot be used
   * to change `state`.
   */
  state: Queue_State;
  /**
   * Output only. The last time this queue was purged.
   *
   * All tasks that were [created][google.cloud.tasks.v2.Task.create_time]
   * before this time were purged.
   *
   * A queue can be purged using
   * [PurgeQueue][google.cloud.tasks.v2.CloudTasks.PurgeQueue], the [App Engine
   * Task Queue SDK, or the Cloud
   * Console](https://cloud.google.com/appengine/docs/standard/python/taskqueue/push/deleting-tasks-and-queues#purging_all_tasks_from_a_queue).
   *
   * Purge time will be truncated to the nearest microsecond. Purge
   * time will be unset if the queue has never been purged.
   */
  purgeTime:
    | Date
    | undefined;
  /**
   * Configuration options for writing logs to
   * [Stackdriver Logging](https://cloud.google.com/logging/docs/). If this
   * field is unset, then no logs are written.
   */
  stackdriverLoggingConfig: StackdriverLoggingConfig | undefined;
}

/** State of the queue. */
export enum Queue_State {
  /** STATE_UNSPECIFIED - Unspecified state. */
  STATE_UNSPECIFIED = 0,
  /**
   * RUNNING - The queue is running. Tasks can be dispatched.
   *
   * If the queue was created using Cloud Tasks and the queue has
   * had no activity (method calls or task dispatches) for 30 days,
   * the queue may take a few minutes to re-activate. Some method
   * calls may return [NOT_FOUND][google.rpc.Code.NOT_FOUND] and
   * tasks may not be dispatched for a few minutes until the queue
   * has been re-activated.
   */
  RUNNING = 1,
  /**
   * PAUSED - Tasks are paused by the user. If the queue is paused then Cloud
   * Tasks will stop delivering tasks from it, but more tasks can
   * still be added to it by the user.
   */
  PAUSED = 2,
  /**
   * DISABLED - The queue is disabled.
   *
   * A queue becomes `DISABLED` when
   * [queue.yaml](https://cloud.google.com/appengine/docs/python/config/queueref)
   * or
   * [queue.xml](https://cloud.google.com/appengine/docs/standard/java/config/queueref)
   * is uploaded which does not contain the queue. You cannot directly disable
   * a queue.
   *
   * When a queue is disabled, tasks can still be added to a queue
   * but the tasks are not dispatched.
   *
   * To permanently delete this queue and all of its tasks, call
   * [DeleteQueue][google.cloud.tasks.v2.CloudTasks.DeleteQueue].
   */
  DISABLED = 3,
  UNRECOGNIZED = -1,
}

export function queue_StateFromJSON(object: any): Queue_State {
  switch (object) {
    case 0:
    case "STATE_UNSPECIFIED":
      return Queue_State.STATE_UNSPECIFIED;
    case 1:
    case "RUNNING":
      return Queue_State.RUNNING;
    case 2:
    case "PAUSED":
      return Queue_State.PAUSED;
    case 3:
    case "DISABLED":
      return Queue_State.DISABLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Queue_State.UNRECOGNIZED;
  }
}

export function queue_StateToJSON(object: Queue_State): string {
  switch (object) {
    case Queue_State.STATE_UNSPECIFIED:
      return "STATE_UNSPECIFIED";
    case Queue_State.RUNNING:
      return "RUNNING";
    case Queue_State.PAUSED:
      return "PAUSED";
    case Queue_State.DISABLED:
      return "DISABLED";
    case Queue_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * Rate limits.
 *
 * This message determines the maximum rate that tasks can be dispatched by a
 * queue, regardless of whether the dispatch is a first task attempt or a retry.
 *
 * Note: The debugging command,
 * [RunTask][google.cloud.tasks.v2.CloudTasks.RunTask], will run a task even if
 * the queue has reached its [RateLimits][google.cloud.tasks.v2.RateLimits].
 */
export interface RateLimits {
  /**
   * The maximum rate at which tasks are dispatched from this queue.
   *
   * If unspecified when the queue is created, Cloud Tasks will pick the
   * default.
   *
   * * The maximum allowed value is 500.
   *
   * This field has the same meaning as
   * [rate in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#rate).
   */
  maxDispatchesPerSecond: number;
  /**
   * Output only. The max burst size.
   *
   * Max burst size limits how fast tasks in queue are processed when
   * many tasks are in the queue and the rate is high. This field
   * allows the queue to have a high rate so processing starts shortly
   * after a task is enqueued, but still limits resource usage when
   * many tasks are enqueued in a short period of time.
   *
   * The [token bucket](https://wikipedia.org/wiki/Token_Bucket)
   * algorithm is used to control the rate of task dispatches. Each
   * queue has a token bucket that holds tokens, up to the maximum
   * specified by `max_burst_size`. Each time a task is dispatched, a
   * token is removed from the bucket. Tasks will be dispatched until
   * the queue's bucket runs out of tokens. The bucket will be
   * continuously refilled with new tokens based on
   * [max_dispatches_per_second][google.cloud.tasks.v2.RateLimits.max_dispatches_per_second].
   *
   * Cloud Tasks will pick the value of `max_burst_size` based on the
   * value of
   * [max_dispatches_per_second][google.cloud.tasks.v2.RateLimits.max_dispatches_per_second].
   *
   * For queues that were created or updated using
   * `queue.yaml/xml`, `max_burst_size` is equal to
   * [bucket_size](https://cloud.google.com/appengine/docs/standard/python/config/queueref#bucket_size).
   * Since `max_burst_size` is output only, if
   * [UpdateQueue][google.cloud.tasks.v2.CloudTasks.UpdateQueue] is called on a
   * queue created by `queue.yaml/xml`, `max_burst_size` will be reset based on
   * the value of
   * [max_dispatches_per_second][google.cloud.tasks.v2.RateLimits.max_dispatches_per_second],
   * regardless of whether
   * [max_dispatches_per_second][google.cloud.tasks.v2.RateLimits.max_dispatches_per_second]
   * is updated.
   */
  maxBurstSize: number;
  /**
   * The maximum number of concurrent tasks that Cloud Tasks allows
   * to be dispatched for this queue. After this threshold has been
   * reached, Cloud Tasks stops dispatching tasks until the number of
   * concurrent requests decreases.
   *
   * If unspecified when the queue is created, Cloud Tasks will pick the
   * default.
   *
   * The maximum allowed value is 5,000.
   *
   * This field has the same meaning as
   * [max_concurrent_requests in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#max_concurrent_requests).
   */
  maxConcurrentDispatches: number;
}

/**
 * Retry config.
 *
 * These settings determine when a failed task attempt is retried.
 */
export interface RetryConfig {
  /**
   * Number of attempts per task.
   *
   * Cloud Tasks will attempt the task `max_attempts` times (that is, if the
   * first attempt fails, then there will be `max_attempts - 1` retries). Must
   * be >= -1.
   *
   * If unspecified when the queue is created, Cloud Tasks will pick the
   * default.
   *
   * -1 indicates unlimited attempts.
   *
   * This field has the same meaning as
   * [task_retry_limit in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  maxAttempts: number;
  /**
   * If positive, `max_retry_duration` specifies the time limit for
   * retrying a failed task, measured from when the task was first
   * attempted. Once `max_retry_duration` time has passed *and* the
   * task has been attempted
   * [max_attempts][google.cloud.tasks.v2.RetryConfig.max_attempts] times, no
   * further attempts will be made and the task will be deleted.
   *
   * If zero, then the task age is unlimited.
   *
   * If unspecified when the queue is created, Cloud Tasks will pick the
   * default.
   *
   * `max_retry_duration` will be truncated to the nearest second.
   *
   * This field has the same meaning as
   * [task_age_limit in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  maxRetryDuration:
    | Duration
    | undefined;
  /**
   * A task will be [scheduled][google.cloud.tasks.v2.Task.schedule_time] for
   * retry between [min_backoff][google.cloud.tasks.v2.RetryConfig.min_backoff]
   * and [max_backoff][google.cloud.tasks.v2.RetryConfig.max_backoff] duration
   * after it fails, if the queue's
   * [RetryConfig][google.cloud.tasks.v2.RetryConfig] specifies that the task
   * should be retried.
   *
   * If unspecified when the queue is created, Cloud Tasks will pick the
   * default.
   *
   * `min_backoff` will be truncated to the nearest second.
   *
   * This field has the same meaning as
   * [min_backoff_seconds in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  minBackoff:
    | Duration
    | undefined;
  /**
   * A task will be [scheduled][google.cloud.tasks.v2.Task.schedule_time] for
   * retry between [min_backoff][google.cloud.tasks.v2.RetryConfig.min_backoff]
   * and [max_backoff][google.cloud.tasks.v2.RetryConfig.max_backoff] duration
   * after it fails, if the queue's
   * [RetryConfig][google.cloud.tasks.v2.RetryConfig] specifies that the task
   * should be retried.
   *
   * If unspecified when the queue is created, Cloud Tasks will pick the
   * default.
   *
   * `max_backoff` will be truncated to the nearest second.
   *
   * This field has the same meaning as
   * [max_backoff_seconds in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  maxBackoff:
    | Duration
    | undefined;
  /**
   * The time between retries will double `max_doublings` times.
   *
   * A task's retry interval starts at
   * [min_backoff][google.cloud.tasks.v2.RetryConfig.min_backoff], then doubles
   * `max_doublings` times, then increases linearly, and finally
   * retries at intervals of
   * [max_backoff][google.cloud.tasks.v2.RetryConfig.max_backoff] up to
   * [max_attempts][google.cloud.tasks.v2.RetryConfig.max_attempts] times.
   *
   * For example, if
   * [min_backoff][google.cloud.tasks.v2.RetryConfig.min_backoff] is 10s,
   * [max_backoff][google.cloud.tasks.v2.RetryConfig.max_backoff] is 300s, and
   * `max_doublings` is 3, then the a task will first be retried in
   * 10s. The retry interval will double three times, and then
   * increase linearly by 2^3 * 10s.  Finally, the task will retry at
   * intervals of [max_backoff][google.cloud.tasks.v2.RetryConfig.max_backoff]
   * until the task has been attempted
   * [max_attempts][google.cloud.tasks.v2.RetryConfig.max_attempts] times. Thus,
   * the requests will retry at 10s, 20s, 40s, 80s, 160s, 240s, 300s, 300s, ....
   *
   * If unspecified when the queue is created, Cloud Tasks will pick the
   * default.
   *
   * This field has the same meaning as
   * [max_doublings in
   * queue.yaml/xml](https://cloud.google.com/appengine/docs/standard/python/config/queueref#retry_parameters).
   */
  maxDoublings: number;
}

/**
 * Configuration options for writing logs to
 * [Stackdriver Logging](https://cloud.google.com/logging/docs/).
 */
export interface StackdriverLoggingConfig {
  /**
   * Specifies the fraction of operations to write to
   * [Stackdriver Logging](https://cloud.google.com/logging/docs/).
   * This field may contain any value between 0.0 and 1.0, inclusive.
   * 0.0 is the default and means that no operations are logged.
   */
  samplingRatio: number;
}

function createBaseQueue(): Queue {
  return {
    name: "",
    appEngineRoutingOverride: undefined,
    rateLimits: undefined,
    retryConfig: undefined,
    state: 0,
    purgeTime: undefined,
    stackdriverLoggingConfig: undefined,
  };
}

export const Queue: MessageFns<Queue> = {
  encode(message: Queue, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.appEngineRoutingOverride !== undefined) {
      AppEngineRouting.encode(message.appEngineRoutingOverride, writer.uint32(18).fork()).join();
    }
    if (message.rateLimits !== undefined) {
      RateLimits.encode(message.rateLimits, writer.uint32(26).fork()).join();
    }
    if (message.retryConfig !== undefined) {
      RetryConfig.encode(message.retryConfig, writer.uint32(34).fork()).join();
    }
    if (message.state !== 0) {
      writer.uint32(40).int32(message.state);
    }
    if (message.purgeTime !== undefined) {
      Timestamp.encode(toTimestamp(message.purgeTime), writer.uint32(50).fork()).join();
    }
    if (message.stackdriverLoggingConfig !== undefined) {
      StackdriverLoggingConfig.encode(message.stackdriverLoggingConfig, writer.uint32(74).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Queue {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueue();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.appEngineRoutingOverride = AppEngineRouting.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.rateLimits = RateLimits.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.retryConfig = RetryConfig.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.state = reader.int32() as any;
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.purgeTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.stackdriverLoggingConfig = StackdriverLoggingConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Queue {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      appEngineRoutingOverride: isSet(object.appEngineRoutingOverride)
        ? AppEngineRouting.fromJSON(object.appEngineRoutingOverride)
        : undefined,
      rateLimits: isSet(object.rateLimits) ? RateLimits.fromJSON(object.rateLimits) : undefined,
      retryConfig: isSet(object.retryConfig) ? RetryConfig.fromJSON(object.retryConfig) : undefined,
      state: isSet(object.state) ? queue_StateFromJSON(object.state) : 0,
      purgeTime: isSet(object.purgeTime) ? fromJsonTimestamp(object.purgeTime) : undefined,
      stackdriverLoggingConfig: isSet(object.stackdriverLoggingConfig)
        ? StackdriverLoggingConfig.fromJSON(object.stackdriverLoggingConfig)
        : undefined,
    };
  },

  toJSON(message: Queue): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.appEngineRoutingOverride !== undefined) {
      obj.appEngineRoutingOverride = AppEngineRouting.toJSON(message.appEngineRoutingOverride);
    }
    if (message.rateLimits !== undefined) {
      obj.rateLimits = RateLimits.toJSON(message.rateLimits);
    }
    if (message.retryConfig !== undefined) {
      obj.retryConfig = RetryConfig.toJSON(message.retryConfig);
    }
    if (message.state !== 0) {
      obj.state = queue_StateToJSON(message.state);
    }
    if (message.purgeTime !== undefined) {
      obj.purgeTime = message.purgeTime.toISOString();
    }
    if (message.stackdriverLoggingConfig !== undefined) {
      obj.stackdriverLoggingConfig = StackdriverLoggingConfig.toJSON(message.stackdriverLoggingConfig);
    }
    return obj;
  },

  create(base?: DeepPartial<Queue>): Queue {
    return Queue.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<Queue>): Queue {
    const message = createBaseQueue();
    message.name = object.name ?? "";
    message.appEngineRoutingOverride =
      (object.appEngineRoutingOverride !== undefined && object.appEngineRoutingOverride !== null)
        ? AppEngineRouting.fromPartial(object.appEngineRoutingOverride)
        : undefined;
    message.rateLimits = (object.rateLimits !== undefined && object.rateLimits !== null)
      ? RateLimits.fromPartial(object.rateLimits)
      : undefined;
    message.retryConfig = (object.retryConfig !== undefined && object.retryConfig !== null)
      ? RetryConfig.fromPartial(object.retryConfig)
      : undefined;
    message.state = object.state ?? 0;
    message.purgeTime = object.purgeTime ?? undefined;
    message.stackdriverLoggingConfig =
      (object.stackdriverLoggingConfig !== undefined && object.stackdriverLoggingConfig !== null)
        ? StackdriverLoggingConfig.fromPartial(object.stackdriverLoggingConfig)
        : undefined;
    return message;
  },
};

function createBaseRateLimits(): RateLimits {
  return { maxDispatchesPerSecond: 0, maxBurstSize: 0, maxConcurrentDispatches: 0 };
}

export const RateLimits: MessageFns<RateLimits> = {
  encode(message: RateLimits, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.maxDispatchesPerSecond !== 0) {
      writer.uint32(9).double(message.maxDispatchesPerSecond);
    }
    if (message.maxBurstSize !== 0) {
      writer.uint32(16).int32(message.maxBurstSize);
    }
    if (message.maxConcurrentDispatches !== 0) {
      writer.uint32(24).int32(message.maxConcurrentDispatches);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RateLimits {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRateLimits();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.maxDispatchesPerSecond = reader.double();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.maxBurstSize = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.maxConcurrentDispatches = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RateLimits {
    return {
      maxDispatchesPerSecond: isSet(object.maxDispatchesPerSecond)
        ? globalThis.Number(object.maxDispatchesPerSecond)
        : 0,
      maxBurstSize: isSet(object.maxBurstSize) ? globalThis.Number(object.maxBurstSize) : 0,
      maxConcurrentDispatches: isSet(object.maxConcurrentDispatches)
        ? globalThis.Number(object.maxConcurrentDispatches)
        : 0,
    };
  },

  toJSON(message: RateLimits): unknown {
    const obj: any = {};
    if (message.maxDispatchesPerSecond !== 0) {
      obj.maxDispatchesPerSecond = message.maxDispatchesPerSecond;
    }
    if (message.maxBurstSize !== 0) {
      obj.maxBurstSize = Math.round(message.maxBurstSize);
    }
    if (message.maxConcurrentDispatches !== 0) {
      obj.maxConcurrentDispatches = Math.round(message.maxConcurrentDispatches);
    }
    return obj;
  },

  create(base?: DeepPartial<RateLimits>): RateLimits {
    return RateLimits.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RateLimits>): RateLimits {
    const message = createBaseRateLimits();
    message.maxDispatchesPerSecond = object.maxDispatchesPerSecond ?? 0;
    message.maxBurstSize = object.maxBurstSize ?? 0;
    message.maxConcurrentDispatches = object.maxConcurrentDispatches ?? 0;
    return message;
  },
};

function createBaseRetryConfig(): RetryConfig {
  return { maxAttempts: 0, maxRetryDuration: undefined, minBackoff: undefined, maxBackoff: undefined, maxDoublings: 0 };
}

export const RetryConfig: MessageFns<RetryConfig> = {
  encode(message: RetryConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.maxAttempts !== 0) {
      writer.uint32(8).int32(message.maxAttempts);
    }
    if (message.maxRetryDuration !== undefined) {
      Duration.encode(message.maxRetryDuration, writer.uint32(18).fork()).join();
    }
    if (message.minBackoff !== undefined) {
      Duration.encode(message.minBackoff, writer.uint32(26).fork()).join();
    }
    if (message.maxBackoff !== undefined) {
      Duration.encode(message.maxBackoff, writer.uint32(34).fork()).join();
    }
    if (message.maxDoublings !== 0) {
      writer.uint32(40).int32(message.maxDoublings);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RetryConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetryConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.maxAttempts = reader.int32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.maxRetryDuration = Duration.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.minBackoff = Duration.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.maxBackoff = Duration.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.maxDoublings = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RetryConfig {
    return {
      maxAttempts: isSet(object.maxAttempts) ? globalThis.Number(object.maxAttempts) : 0,
      maxRetryDuration: isSet(object.maxRetryDuration) ? Duration.fromJSON(object.maxRetryDuration) : undefined,
      minBackoff: isSet(object.minBackoff) ? Duration.fromJSON(object.minBackoff) : undefined,
      maxBackoff: isSet(object.maxBackoff) ? Duration.fromJSON(object.maxBackoff) : undefined,
      maxDoublings: isSet(object.maxDoublings) ? globalThis.Number(object.maxDoublings) : 0,
    };
  },

  toJSON(message: RetryConfig): unknown {
    const obj: any = {};
    if (message.maxAttempts !== 0) {
      obj.maxAttempts = Math.round(message.maxAttempts);
    }
    if (message.maxRetryDuration !== undefined) {
      obj.maxRetryDuration = Duration.toJSON(message.maxRetryDuration);
    }
    if (message.minBackoff !== undefined) {
      obj.minBackoff = Duration.toJSON(message.minBackoff);
    }
    if (message.maxBackoff !== undefined) {
      obj.maxBackoff = Duration.toJSON(message.maxBackoff);
    }
    if (message.maxDoublings !== 0) {
      obj.maxDoublings = Math.round(message.maxDoublings);
    }
    return obj;
  },

  create(base?: DeepPartial<RetryConfig>): RetryConfig {
    return RetryConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RetryConfig>): RetryConfig {
    const message = createBaseRetryConfig();
    message.maxAttempts = object.maxAttempts ?? 0;
    message.maxRetryDuration = (object.maxRetryDuration !== undefined && object.maxRetryDuration !== null)
      ? Duration.fromPartial(object.maxRetryDuration)
      : undefined;
    message.minBackoff = (object.minBackoff !== undefined && object.minBackoff !== null)
      ? Duration.fromPartial(object.minBackoff)
      : undefined;
    message.maxBackoff = (object.maxBackoff !== undefined && object.maxBackoff !== null)
      ? Duration.fromPartial(object.maxBackoff)
      : undefined;
    message.maxDoublings = object.maxDoublings ?? 0;
    return message;
  },
};

function createBaseStackdriverLoggingConfig(): StackdriverLoggingConfig {
  return { samplingRatio: 0 };
}

export const StackdriverLoggingConfig: MessageFns<StackdriverLoggingConfig> = {
  encode(message: StackdriverLoggingConfig, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.samplingRatio !== 0) {
      writer.uint32(9).double(message.samplingRatio);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): StackdriverLoggingConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStackdriverLoggingConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 9) {
            break;
          }

          message.samplingRatio = reader.double();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StackdriverLoggingConfig {
    return { samplingRatio: isSet(object.samplingRatio) ? globalThis.Number(object.samplingRatio) : 0 };
  },

  toJSON(message: StackdriverLoggingConfig): unknown {
    const obj: any = {};
    if (message.samplingRatio !== 0) {
      obj.samplingRatio = message.samplingRatio;
    }
    return obj;
  },

  create(base?: DeepPartial<StackdriverLoggingConfig>): StackdriverLoggingConfig {
    return StackdriverLoggingConfig.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<StackdriverLoggingConfig>): StackdriverLoggingConfig {
    const message = createBaseStackdriverLoggingConfig();
    message.samplingRatio = object.samplingRatio ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(Math.trunc(date.getTime() / 1_000));
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds.toNumber() || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
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
