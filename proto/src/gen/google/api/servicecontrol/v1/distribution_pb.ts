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
// @generated from file google/api/servicecontrol/v1/distribution.proto (package google.api.servicecontrol.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Distribution_Exemplar } from "../../distribution_pb";
import { file_google_api_distribution } from "../../distribution_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/api/servicecontrol/v1/distribution.proto.
 */
export const file_google_api_servicecontrol_v1_distribution: GenFile = /*@__PURE__*/
  fileDesc("Ci9nb29nbGUvYXBpL3NlcnZpY2Vjb250cm9sL3YxL2Rpc3RyaWJ1dGlvbi5wcm90bxIcZ29vZ2xlLmFwaS5zZXJ2aWNlY29udHJvbC52MSKeBQoMRGlzdHJpYnV0aW9uEg0KBWNvdW50GAEgASgDEgwKBG1lYW4YAiABKAESDwoHbWluaW11bRgDIAEoARIPCgdtYXhpbXVtGAQgASgBEiAKGHN1bV9vZl9zcXVhcmVkX2RldmlhdGlvbhgFIAEoARIVCg1idWNrZXRfY291bnRzGAYgAygDElIKDmxpbmVhcl9idWNrZXRzGAcgASgLMjguZ29vZ2xlLmFwaS5zZXJ2aWNlY29udHJvbC52MS5EaXN0cmlidXRpb24uTGluZWFyQnVja2V0c0gAElwKE2V4cG9uZW50aWFsX2J1Y2tldHMYCCABKAsyPS5nb29nbGUuYXBpLnNlcnZpY2Vjb250cm9sLnYxLkRpc3RyaWJ1dGlvbi5FeHBvbmVudGlhbEJ1Y2tldHNIABJWChBleHBsaWNpdF9idWNrZXRzGAkgASgLMjouZ29vZ2xlLmFwaS5zZXJ2aWNlY29udHJvbC52MS5EaXN0cmlidXRpb24uRXhwbGljaXRCdWNrZXRzSAASNAoJZXhlbXBsYXJzGAogAygLMiEuZ29vZ2xlLmFwaS5EaXN0cmlidXRpb24uRXhlbXBsYXIaSgoNTGluZWFyQnVja2V0cxIaChJudW1fZmluaXRlX2J1Y2tldHMYASABKAUSDQoFd2lkdGgYAiABKAESDgoGb2Zmc2V0GAMgASgBGlYKEkV4cG9uZW50aWFsQnVja2V0cxIaChJudW1fZmluaXRlX2J1Y2tldHMYASABKAUSFQoNZ3Jvd3RoX2ZhY3RvchgCIAEoARINCgVzY2FsZRgDIAEoARohCg9FeHBsaWNpdEJ1Y2tldHMSDgoGYm91bmRzGAEgAygBQg8KDWJ1Y2tldF9vcHRpb25C7AEKIGNvbS5nb29nbGUuYXBpLnNlcnZpY2Vjb250cm9sLnYxQhFEaXN0cmlidXRpb25Qcm90b1ABWkpjbG91ZC5nb29nbGUuY29tL2dvL3NlcnZpY2Vjb250cm9sL2FwaXYxL3NlcnZpY2Vjb250cm9scGI7c2VydmljZWNvbnRyb2xwYvgBAaoCHkdvb2dsZS5DbG91ZC5TZXJ2aWNlQ29udHJvbC5WMcoCHkdvb2dsZVxDbG91ZFxTZXJ2aWNlQ29udHJvbFxWMeoCIUdvb2dsZTo6Q2xvdWQ6OlNlcnZpY2VDb250cm9sOjpWMWIGcHJvdG8z", [file_google_api_distribution]);

/**
 * Distribution represents a frequency distribution of double-valued sample
 * points. It contains the size of the population of sample points plus
 * additional optional information:
 *
 * * the arithmetic mean of the samples
 * * the minimum and maximum of the samples
 * * the sum-squared-deviation of the samples, used to compute variance
 * * a histogram of the values of the sample points
 *
 * @generated from message google.api.servicecontrol.v1.Distribution
 */
export type Distribution = Message<"google.api.servicecontrol.v1.Distribution"> & {
  /**
   * The total number of samples in the distribution. Must be >= 0.
   *
   * @generated from field: int64 count = 1;
   */
  count: bigint;

  /**
   * The arithmetic mean of the samples in the distribution. If `count` is
   * zero then this field must be zero.
   *
   * @generated from field: double mean = 2;
   */
  mean: number;

  /**
   * The minimum of the population of values. Ignored if `count` is zero.
   *
   * @generated from field: double minimum = 3;
   */
  minimum: number;

  /**
   * The maximum of the population of values. Ignored if `count` is zero.
   *
   * @generated from field: double maximum = 4;
   */
  maximum: number;

  /**
   * The sum of squared deviations from the mean:
   *   Sum[i=1..count]((x_i - mean)^2)
   * where each x_i is a sample values. If `count` is zero then this field
   * must be zero, otherwise validation of the request fails.
   *
   * @generated from field: double sum_of_squared_deviation = 5;
   */
  sumOfSquaredDeviation: number;

  /**
   * The number of samples in each histogram bucket. `bucket_counts` are
   * optional. If present, they must sum to the `count` value.
   *
   * The buckets are defined below in `bucket_option`. There are N buckets.
   * `bucket_counts[0]` is the number of samples in the underflow bucket.
   * `bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples
   * in each of the finite buckets. And `bucket_counts[N] is the number
   * of samples in the overflow bucket. See the comments of `bucket_option`
   * below for more details.
   *
   * Any suffix of trailing zeros may be omitted.
   *
   * @generated from field: repeated int64 bucket_counts = 6;
   */
  bucketCounts: bigint[];

  /**
   * Defines the buckets in the histogram. `bucket_option` and `bucket_counts`
   * must be both set, or both unset.
   *
   * Buckets are numbered in the range of [0, N], with a total of N+1 buckets.
   * There must be at least two buckets (a single-bucket histogram gives
   * no information that isn't already provided by `count`).
   *
   * The first bucket is the underflow bucket which has a lower bound
   * of -inf. The last bucket is the overflow bucket which has an
   * upper bound of +inf. All other buckets (if any) are called "finite"
   * buckets because they have finite lower and upper bounds. As described
   * below, there are three ways to define the finite buckets.
   *
   *   (1) Buckets with constant width.
   *   (2) Buckets with exponentially growing widths.
   *   (3) Buckets with arbitrary user-provided widths.
   *
   * In all cases, the buckets cover the entire real number line (-inf,
   * +inf). Bucket upper bounds are exclusive and lower bounds are
   * inclusive. The upper bound of the underflow bucket is equal to the
   * lower bound of the smallest finite bucket; the lower bound of the
   * overflow bucket is equal to the upper bound of the largest finite
   * bucket.
   *
   * @generated from oneof google.api.servicecontrol.v1.Distribution.bucket_option
   */
  bucketOption: {
    /**
     * Buckets with constant width.
     *
     * @generated from field: google.api.servicecontrol.v1.Distribution.LinearBuckets linear_buckets = 7;
     */
    value: Distribution_LinearBuckets;
    case: "linearBuckets";
  } | {
    /**
     * Buckets with exponentially growing width.
     *
     * @generated from field: google.api.servicecontrol.v1.Distribution.ExponentialBuckets exponential_buckets = 8;
     */
    value: Distribution_ExponentialBuckets;
    case: "exponentialBuckets";
  } | {
    /**
     * Buckets with arbitrary user-provided width.
     *
     * @generated from field: google.api.servicecontrol.v1.Distribution.ExplicitBuckets explicit_buckets = 9;
     */
    value: Distribution_ExplicitBuckets;
    case: "explicitBuckets";
  } | { case: undefined; value?: undefined };

  /**
   * Example points. Must be in increasing order of `value` field.
   *
   * @generated from field: repeated google.api.Distribution.Exemplar exemplars = 10;
   */
  exemplars: Distribution_Exemplar[];
};

/**
 * Describes the message google.api.servicecontrol.v1.Distribution.
 * Use `create(DistributionSchema)` to create a new message.
 */
export const DistributionSchema: GenMessage<Distribution> = /*@__PURE__*/
  messageDesc(file_google_api_servicecontrol_v1_distribution, 0);

/**
 * Describing buckets with constant width.
 *
 * @generated from message google.api.servicecontrol.v1.Distribution.LinearBuckets
 */
export type Distribution_LinearBuckets = Message<"google.api.servicecontrol.v1.Distribution.LinearBuckets"> & {
  /**
   * The number of finite buckets. With the underflow and overflow buckets,
   * the total number of buckets is `num_finite_buckets` + 2.
   * See comments on `bucket_options` for details.
   *
   * @generated from field: int32 num_finite_buckets = 1;
   */
  numFiniteBuckets: number;

  /**
   * The i'th linear bucket covers the interval
   *   [offset + (i-1) * width, offset + i * width)
   * where i ranges from 1 to num_finite_buckets, inclusive.
   * Must be strictly positive.
   *
   * @generated from field: double width = 2;
   */
  width: number;

  /**
   * The i'th linear bucket covers the interval
   *   [offset + (i-1) * width, offset + i * width)
   * where i ranges from 1 to num_finite_buckets, inclusive.
   *
   * @generated from field: double offset = 3;
   */
  offset: number;
};

/**
 * Describes the message google.api.servicecontrol.v1.Distribution.LinearBuckets.
 * Use `create(Distribution_LinearBucketsSchema)` to create a new message.
 */
export const Distribution_LinearBucketsSchema: GenMessage<Distribution_LinearBuckets> = /*@__PURE__*/
  messageDesc(file_google_api_servicecontrol_v1_distribution, 0, 0);

/**
 * Describing buckets with exponentially growing width.
 *
 * @generated from message google.api.servicecontrol.v1.Distribution.ExponentialBuckets
 */
export type Distribution_ExponentialBuckets = Message<"google.api.servicecontrol.v1.Distribution.ExponentialBuckets"> & {
  /**
   * The number of finite buckets. With the underflow and overflow buckets,
   * the total number of buckets is `num_finite_buckets` + 2.
   * See comments on `bucket_options` for details.
   *
   * @generated from field: int32 num_finite_buckets = 1;
   */
  numFiniteBuckets: number;

  /**
   * The i'th exponential bucket covers the interval
   *   [scale * growth_factor^(i-1), scale * growth_factor^i)
   * where i ranges from 1 to num_finite_buckets inclusive.
   * Must be larger than 1.0.
   *
   * @generated from field: double growth_factor = 2;
   */
  growthFactor: number;

  /**
   * The i'th exponential bucket covers the interval
   *   [scale * growth_factor^(i-1), scale * growth_factor^i)
   * where i ranges from 1 to num_finite_buckets inclusive.
   * Must be > 0.
   *
   * @generated from field: double scale = 3;
   */
  scale: number;
};

/**
 * Describes the message google.api.servicecontrol.v1.Distribution.ExponentialBuckets.
 * Use `create(Distribution_ExponentialBucketsSchema)` to create a new message.
 */
export const Distribution_ExponentialBucketsSchema: GenMessage<Distribution_ExponentialBuckets> = /*@__PURE__*/
  messageDesc(file_google_api_servicecontrol_v1_distribution, 0, 1);

/**
 * Describing buckets with arbitrary user-provided width.
 *
 * @generated from message google.api.servicecontrol.v1.Distribution.ExplicitBuckets
 */
export type Distribution_ExplicitBuckets = Message<"google.api.servicecontrol.v1.Distribution.ExplicitBuckets"> & {
  /**
   * 'bound' is a list of strictly increasing boundaries between
   * buckets. Note that a list of length N-1 defines N buckets because
   * of fenceposting. See comments on `bucket_options` for details.
   *
   * The i'th finite bucket covers the interval
   *   [bound[i-1], bound[i])
   * where i ranges from 1 to bound_size() - 1. Note that there are no
   * finite buckets at all if 'bound' only contains a single element; in
   * that special case the single bound defines the boundary between the
   * underflow and overflow buckets.
   *
   * bucket number                   lower bound    upper bound
   *  i == 0 (underflow)              -inf           bound[i]
   *  0 < i < bound_size()            bound[i-1]     bound[i]
   *  i == bound_size() (overflow)    bound[i-1]     +inf
   *
   * @generated from field: repeated double bounds = 1;
   */
  bounds: number[];
};

/**
 * Describes the message google.api.servicecontrol.v1.Distribution.ExplicitBuckets.
 * Use `create(Distribution_ExplicitBucketsSchema)` to create a new message.
 */
export const Distribution_ExplicitBucketsSchema: GenMessage<Distribution_ExplicitBuckets> = /*@__PURE__*/
  messageDesc(file_google_api_servicecontrol_v1_distribution, 0, 2);
