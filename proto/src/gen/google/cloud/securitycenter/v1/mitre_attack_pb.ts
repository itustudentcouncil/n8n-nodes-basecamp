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
// @generated from file google/cloud/securitycenter/v1/mitre_attack.proto (package google.cloud.securitycenter.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/cloud/securitycenter/v1/mitre_attack.proto.
 */
export const file_google_cloud_securitycenter_v1_mitre_attack: GenFile = /*@__PURE__*/
  fileDesc("CjFnb29nbGUvY2xvdWQvc2VjdXJpdHljZW50ZXIvdjEvbWl0cmVfYXR0YWNrLnByb3RvEh5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjEivBMKC01pdHJlQXR0YWNrEkoKDnByaW1hcnlfdGFjdGljGAEgASgOMjIuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYxLk1pdHJlQXR0YWNrLlRhY3RpYxJRChJwcmltYXJ5X3RlY2huaXF1ZXMYAiADKA4yNS5nb29nbGUuY2xvdWQuc2VjdXJpdHljZW50ZXIudjEuTWl0cmVBdHRhY2suVGVjaG5pcXVlEk4KEmFkZGl0aW9uYWxfdGFjdGljcxgDIAMoDjIyLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MS5NaXRyZUF0dGFjay5UYWN0aWMSVAoVYWRkaXRpb25hbF90ZWNobmlxdWVzGAQgAygOMjUuZ29vZ2xlLmNsb3VkLnNlY3VyaXR5Y2VudGVyLnYxLk1pdHJlQXR0YWNrLlRlY2huaXF1ZRIPCgd2ZXJzaW9uGAUgASgJIrQCCgZUYWN0aWMSFgoSVEFDVElDX1VOU1BFQ0lGSUVEEAASEgoOUkVDT05OQUlTU0FOQ0UQARIYChRSRVNPVVJDRV9ERVZFTE9QTUVOVBACEhIKDklOSVRJQUxfQUNDRVNTEAUSDQoJRVhFQ1VUSU9OEAMSDwoLUEVSU0lTVEVOQ0UQBhIYChRQUklWSUxFR0VfRVNDQUxBVElPThAIEhMKD0RFRkVOU0VfRVZBU0lPThAHEhUKEUNSRURFTlRJQUxfQUNDRVNTEAkSDQoJRElTQ09WRVJZEAoSFAoQTEFURVJBTF9NT1ZFTUVOVBALEg4KCkNPTExFQ1RJT04QDBIXChNDT01NQU5EX0FORF9DT05UUk9MEAQSEAoMRVhGSUxUUkFUSU9OEA0SCgoGSU1QQUNUEA4inw4KCVRlY2huaXF1ZRIZChVURUNITklRVUVfVU5TUEVDSUZJRUQQABIQCgxNQVNRVUVSQURJTkcQMRIlCiFNQVRDSF9MRUdJVElNQVRFX05BTUVfT1JfTE9DQVRJT04QMhIoCiRCT09UX09SX0xPR09OX0lOSVRJQUxJWkFUSU9OX1NDUklQVFMQJRIRCg1TVEFSVFVQX0lURU1TECYSHQoZTkVUV09SS19TRVJWSUNFX0RJU0NPVkVSWRAgEhUKEVBST0NFU1NfRElTQ09WRVJZEDgSJQohQ09NTUFORF9BTkRfU0NSSVBUSU5HX0lOVEVSUFJFVEVSEAYSDgoKVU5JWF9TSEVMTBAHEgoKBlBZVEhPThA7EikKJUVYUExPSVRBVElPTl9GT1JfUFJJVklMRUdFX0VTQ0FMQVRJT04QPxIfChtQRVJNSVNTSU9OX0dST1VQU19ESVNDT1ZFUlkQEhIQCgxDTE9VRF9HUk9VUFMQExIjCh9JTkRJQ0FUT1JfUkVNT1ZBTF9GSUxFX0RFTEVUSU9OEEASHgoaQVBQTElDQVRJT05fTEFZRVJfUFJPVE9DT0wQLRIHCgNETlMQLhIdChlTT0ZUV0FSRV9ERVBMT1lNRU5UX1RPT0xTEC8SEgoOVkFMSURfQUNDT1VOVFMQDhIUChBERUZBVUxUX0FDQ09VTlRTECMSEgoOTE9DQUxfQUNDT1VOVFMQDxISCg5DTE9VRF9BQ0NPVU5UUxAQEgkKBVBST1hZEAkSEgoORVhURVJOQUxfUFJPWFkQChITCg9NVUxUSV9IT1BfUFJPWFkQCxIYChRBQ0NPVU5UX01BTklQVUxBVElPThAWEiAKHEFERElUSU9OQUxfQ0xPVURfQ1JFREVOVElBTFMQKBIXChNTU0hfQVVUSE9SSVpFRF9LRVlTEBcSJgoiQURESVRJT05BTF9DT05UQUlORVJfQ0xVU1RFUl9ST0xFUxA6EhkKFUlOR1JFU1NfVE9PTF9UUkFOU0ZFUhADEg4KCk5BVElWRV9BUEkQBBIPCgtCUlVURV9GT1JDRRAsEhIKDlNIQVJFRF9NT0RVTEVTEAUSHQoZQUNDRVNTX1RPS0VOX01BTklQVUxBVElPThAhEiAKHFRPS0VOX0lNUEVSU09OQVRJT05fT1JfVEhFRlQQJxIlCiFFWFBMT0lUX1BVQkxJQ19GQUNJTkdfQVBQTElDQVRJT04QGxIeChpET01BSU5fUE9MSUNZX01PRElGSUNBVElPThAeEhQKEERBVEFfREVTVFJVQ1RJT04QHRIQCgxTRVJWSUNFX1NUT1AQNBIbChdJTkhJQklUX1NZU1RFTV9SRUNPVkVSWRAkEhYKElJFU09VUkNFX0hJSkFDS0lORxAIEh0KGU5FVFdPUktfREVOSUFMX09GX1NFUlZJQ0UQERIbChdDTE9VRF9TRVJWSUNFX0RJU0NPVkVSWRAwEiIKHlNURUFMX0FQUExJQ0FUSU9OX0FDQ0VTU19UT0tFThAqEhoKFkFDQ09VTlRfQUNDRVNTX1JFTU9WQUwQMxIcChhTVEVBTF9XRUJfU0VTU0lPTl9DT09LSUUQGRIjCh9DUkVBVEVfT1JfTU9ESUZZX1NZU1RFTV9QUk9DRVNTEBgSJQohQUJVU0VfRUxFVkFUSU9OX0NPTlRST0xfTUVDSEFOSVNNECISGQoVVU5TRUNVUkVEX0NSRURFTlRJQUxTEA0SIQodTU9ESUZZX0FVVEhFTlRJQ0FUSU9OX1BST0NFU1MQHBITCg9JTVBBSVJfREVGRU5TRVMQHxIbChdESVNBQkxFX09SX01PRElGWV9UT09MUxA3EiEKHUVYRklMVFJBVElPTl9PVkVSX1dFQl9TRVJWSUNFEBQSIQodRVhGSUxUUkFUSU9OX1RPX0NMT1VEX1NUT1JBR0UQFRIWChJEWU5BTUlDX1JFU09MVVRJT04QDBIZChVMQVRFUkFMX1RPT0xfVFJBTlNGRVIQKRInCiNNT0RJRllfQ0xPVURfQ09NUFVURV9JTkZSQVNUUlVDVFVSRRAaEhMKD0NSRUFURV9TTkFQU0hPVBA2EiIKHkNMT1VEX0lORlJBU1RSVUNUVVJFX0RJU0NPVkVSWRA1EhcKE09CVEFJTl9DQVBBQklMSVRJRVMQKxITCg9BQ1RJVkVfU0NBTk5JTkcQARIWChJTQ0FOTklOR19JUF9CTE9DS1MQAhIkCiBDT05UQUlORVJfQURNSU5JU1RSQVRJT05fQ09NTUFORBA8EhIKDkVTQ0FQRV9UT19IT1NUED0SJAogQ09OVEFJTkVSX0FORF9SRVNPVVJDRV9ESVNDT1ZFUlkQORIuCipTVEVBTF9PUl9GT1JHRV9BVVRIRU5USUNBVElPTl9DRVJUSUZJQ0FURVMQPkLqAQoiY29tLmdvb2dsZS5jbG91ZC5zZWN1cml0eWNlbnRlci52MUIQTWl0cmVBdHRhY2tQcm90b1ABWkpjbG91ZC5nb29nbGUuY29tL2dvL3NlY3VyaXR5Y2VudGVyL2FwaXYxL3NlY3VyaXR5Y2VudGVycGI7c2VjdXJpdHljZW50ZXJwYqoCHkdvb2dsZS5DbG91ZC5TZWN1cml0eUNlbnRlci5WMcoCHkdvb2dsZVxDbG91ZFxTZWN1cml0eUNlbnRlclxWMeoCIUdvb2dsZTo6Q2xvdWQ6OlNlY3VyaXR5Q2VudGVyOjpWMWIGcHJvdG8z");

/**
 * MITRE ATT&CK tactics and techniques related to this finding.
 * See: https://attack.mitre.org
 *
 * @generated from message google.cloud.securitycenter.v1.MitreAttack
 */
export type MitreAttack = Message<"google.cloud.securitycenter.v1.MitreAttack"> & {
  /**
   * The MITRE ATT&CK tactic most closely represented by this finding, if any.
   *
   * @generated from field: google.cloud.securitycenter.v1.MitreAttack.Tactic primary_tactic = 1;
   */
  primaryTactic: MitreAttack_Tactic;

  /**
   * The MITRE ATT&CK technique most closely represented by this finding, if
   * any. primary_techniques is a repeated field because there are multiple
   * levels of MITRE ATT&CK techniques.  If the technique most closely
   * represented by this finding is a sub-technique (e.g. `SCANNING_IP_BLOCKS`),
   * both the sub-technique and its parent technique(s) will be listed (e.g.
   * `SCANNING_IP_BLOCKS`, `ACTIVE_SCANNING`).
   *
   * @generated from field: repeated google.cloud.securitycenter.v1.MitreAttack.Technique primary_techniques = 2;
   */
  primaryTechniques: MitreAttack_Technique[];

  /**
   * Additional MITRE ATT&CK tactics related to this finding, if any.
   *
   * @generated from field: repeated google.cloud.securitycenter.v1.MitreAttack.Tactic additional_tactics = 3;
   */
  additionalTactics: MitreAttack_Tactic[];

  /**
   * Additional MITRE ATT&CK techniques related to this finding, if any, along
   * with any of their respective parent techniques.
   *
   * @generated from field: repeated google.cloud.securitycenter.v1.MitreAttack.Technique additional_techniques = 4;
   */
  additionalTechniques: MitreAttack_Technique[];

  /**
   * The MITRE ATT&CK version referenced by the above fields. E.g. "8".
   *
   * @generated from field: string version = 5;
   */
  version: string;
};

/**
 * Describes the message google.cloud.securitycenter.v1.MitreAttack.
 * Use `create(MitreAttackSchema)` to create a new message.
 */
export const MitreAttackSchema: GenMessage<MitreAttack> = /*@__PURE__*/
  messageDesc(file_google_cloud_securitycenter_v1_mitre_attack, 0);

/**
 * MITRE ATT&CK tactics that can be referenced by SCC findings.
 * See: https://attack.mitre.org/tactics/enterprise/
 *
 * @generated from enum google.cloud.securitycenter.v1.MitreAttack.Tactic
 */
export enum MitreAttack_Tactic {
  /**
   * Unspecified value.
   *
   * @generated from enum value: TACTIC_UNSPECIFIED = 0;
   */
  TACTIC_UNSPECIFIED = 0,

  /**
   * TA0043
   *
   * @generated from enum value: RECONNAISSANCE = 1;
   */
  RECONNAISSANCE = 1,

  /**
   * TA0042
   *
   * @generated from enum value: RESOURCE_DEVELOPMENT = 2;
   */
  RESOURCE_DEVELOPMENT = 2,

  /**
   * TA0001
   *
   * @generated from enum value: INITIAL_ACCESS = 5;
   */
  INITIAL_ACCESS = 5,

  /**
   * TA0002
   *
   * @generated from enum value: EXECUTION = 3;
   */
  EXECUTION = 3,

  /**
   * TA0003
   *
   * @generated from enum value: PERSISTENCE = 6;
   */
  PERSISTENCE = 6,

  /**
   * TA0004
   *
   * @generated from enum value: PRIVILEGE_ESCALATION = 8;
   */
  PRIVILEGE_ESCALATION = 8,

  /**
   * TA0005
   *
   * @generated from enum value: DEFENSE_EVASION = 7;
   */
  DEFENSE_EVASION = 7,

  /**
   * TA0006
   *
   * @generated from enum value: CREDENTIAL_ACCESS = 9;
   */
  CREDENTIAL_ACCESS = 9,

  /**
   * TA0007
   *
   * @generated from enum value: DISCOVERY = 10;
   */
  DISCOVERY = 10,

  /**
   * TA0008
   *
   * @generated from enum value: LATERAL_MOVEMENT = 11;
   */
  LATERAL_MOVEMENT = 11,

  /**
   * TA0009
   *
   * @generated from enum value: COLLECTION = 12;
   */
  COLLECTION = 12,

  /**
   * TA0011
   *
   * @generated from enum value: COMMAND_AND_CONTROL = 4;
   */
  COMMAND_AND_CONTROL = 4,

  /**
   * TA0010
   *
   * @generated from enum value: EXFILTRATION = 13;
   */
  EXFILTRATION = 13,

  /**
   * TA0040
   *
   * @generated from enum value: IMPACT = 14;
   */
  IMPACT = 14,
}

/**
 * Describes the enum google.cloud.securitycenter.v1.MitreAttack.Tactic.
 */
export const MitreAttack_TacticSchema: GenEnum<MitreAttack_Tactic> = /*@__PURE__*/
  enumDesc(file_google_cloud_securitycenter_v1_mitre_attack, 0, 0);

/**
 * MITRE ATT&CK techniques that can be referenced by SCC findings.
 * See: https://attack.mitre.org/techniques/enterprise/
 * Next ID: 65
 *
 * @generated from enum google.cloud.securitycenter.v1.MitreAttack.Technique
 */
export enum MitreAttack_Technique {
  /**
   * Unspecified value.
   *
   * @generated from enum value: TECHNIQUE_UNSPECIFIED = 0;
   */
  TECHNIQUE_UNSPECIFIED = 0,

  /**
   * T1036
   *
   * @generated from enum value: MASQUERADING = 49;
   */
  MASQUERADING = 49,

  /**
   * T1036.005
   *
   * @generated from enum value: MATCH_LEGITIMATE_NAME_OR_LOCATION = 50;
   */
  MATCH_LEGITIMATE_NAME_OR_LOCATION = 50,

  /**
   * T1037
   *
   * @generated from enum value: BOOT_OR_LOGON_INITIALIZATION_SCRIPTS = 37;
   */
  BOOT_OR_LOGON_INITIALIZATION_SCRIPTS = 37,

  /**
   * T1037.005
   *
   * @generated from enum value: STARTUP_ITEMS = 38;
   */
  STARTUP_ITEMS = 38,

  /**
   * T1046
   *
   * @generated from enum value: NETWORK_SERVICE_DISCOVERY = 32;
   */
  NETWORK_SERVICE_DISCOVERY = 32,

  /**
   * T1057
   *
   * @generated from enum value: PROCESS_DISCOVERY = 56;
   */
  PROCESS_DISCOVERY = 56,

  /**
   * T1059
   *
   * @generated from enum value: COMMAND_AND_SCRIPTING_INTERPRETER = 6;
   */
  COMMAND_AND_SCRIPTING_INTERPRETER = 6,

  /**
   * T1059.004
   *
   * @generated from enum value: UNIX_SHELL = 7;
   */
  UNIX_SHELL = 7,

  /**
   * T1059.006
   *
   * @generated from enum value: PYTHON = 59;
   */
  PYTHON = 59,

  /**
   * T1068
   *
   * @generated from enum value: EXPLOITATION_FOR_PRIVILEGE_ESCALATION = 63;
   */
  EXPLOITATION_FOR_PRIVILEGE_ESCALATION = 63,

  /**
   * T1069
   *
   * @generated from enum value: PERMISSION_GROUPS_DISCOVERY = 18;
   */
  PERMISSION_GROUPS_DISCOVERY = 18,

  /**
   * T1069.003
   *
   * @generated from enum value: CLOUD_GROUPS = 19;
   */
  CLOUD_GROUPS = 19,

  /**
   * T1070.004
   *
   * @generated from enum value: INDICATOR_REMOVAL_FILE_DELETION = 64;
   */
  INDICATOR_REMOVAL_FILE_DELETION = 64,

  /**
   * T1071
   *
   * @generated from enum value: APPLICATION_LAYER_PROTOCOL = 45;
   */
  APPLICATION_LAYER_PROTOCOL = 45,

  /**
   * T1071.004
   *
   * @generated from enum value: DNS = 46;
   */
  DNS = 46,

  /**
   * T1072
   *
   * @generated from enum value: SOFTWARE_DEPLOYMENT_TOOLS = 47;
   */
  SOFTWARE_DEPLOYMENT_TOOLS = 47,

  /**
   * T1078
   *
   * @generated from enum value: VALID_ACCOUNTS = 14;
   */
  VALID_ACCOUNTS = 14,

  /**
   * T1078.001
   *
   * @generated from enum value: DEFAULT_ACCOUNTS = 35;
   */
  DEFAULT_ACCOUNTS = 35,

  /**
   * T1078.003
   *
   * @generated from enum value: LOCAL_ACCOUNTS = 15;
   */
  LOCAL_ACCOUNTS = 15,

  /**
   * T1078.004
   *
   * @generated from enum value: CLOUD_ACCOUNTS = 16;
   */
  CLOUD_ACCOUNTS = 16,

  /**
   * T1090
   *
   * @generated from enum value: PROXY = 9;
   */
  PROXY = 9,

  /**
   * T1090.002
   *
   * @generated from enum value: EXTERNAL_PROXY = 10;
   */
  EXTERNAL_PROXY = 10,

  /**
   * T1090.003
   *
   * @generated from enum value: MULTI_HOP_PROXY = 11;
   */
  MULTI_HOP_PROXY = 11,

  /**
   * T1098
   *
   * @generated from enum value: ACCOUNT_MANIPULATION = 22;
   */
  ACCOUNT_MANIPULATION = 22,

  /**
   * T1098.001
   *
   * @generated from enum value: ADDITIONAL_CLOUD_CREDENTIALS = 40;
   */
  ADDITIONAL_CLOUD_CREDENTIALS = 40,

  /**
   * T1098.004
   *
   * @generated from enum value: SSH_AUTHORIZED_KEYS = 23;
   */
  SSH_AUTHORIZED_KEYS = 23,

  /**
   * T1098.006
   *
   * @generated from enum value: ADDITIONAL_CONTAINER_CLUSTER_ROLES = 58;
   */
  ADDITIONAL_CONTAINER_CLUSTER_ROLES = 58,

  /**
   * T1105
   *
   * @generated from enum value: INGRESS_TOOL_TRANSFER = 3;
   */
  INGRESS_TOOL_TRANSFER = 3,

  /**
   * T1106
   *
   * @generated from enum value: NATIVE_API = 4;
   */
  NATIVE_API = 4,

  /**
   * T1110
   *
   * @generated from enum value: BRUTE_FORCE = 44;
   */
  BRUTE_FORCE = 44,

  /**
   * T1129
   *
   * @generated from enum value: SHARED_MODULES = 5;
   */
  SHARED_MODULES = 5,

  /**
   * T1134
   *
   * @generated from enum value: ACCESS_TOKEN_MANIPULATION = 33;
   */
  ACCESS_TOKEN_MANIPULATION = 33,

  /**
   * T1134.001
   *
   * @generated from enum value: TOKEN_IMPERSONATION_OR_THEFT = 39;
   */
  TOKEN_IMPERSONATION_OR_THEFT = 39,

  /**
   * T1190
   *
   * @generated from enum value: EXPLOIT_PUBLIC_FACING_APPLICATION = 27;
   */
  EXPLOIT_PUBLIC_FACING_APPLICATION = 27,

  /**
   * T1484
   *
   * @generated from enum value: DOMAIN_POLICY_MODIFICATION = 30;
   */
  DOMAIN_POLICY_MODIFICATION = 30,

  /**
   * T1485
   *
   * @generated from enum value: DATA_DESTRUCTION = 29;
   */
  DATA_DESTRUCTION = 29,

  /**
   * T1489
   *
   * @generated from enum value: SERVICE_STOP = 52;
   */
  SERVICE_STOP = 52,

  /**
   * T1490
   *
   * @generated from enum value: INHIBIT_SYSTEM_RECOVERY = 36;
   */
  INHIBIT_SYSTEM_RECOVERY = 36,

  /**
   * T1496
   *
   * @generated from enum value: RESOURCE_HIJACKING = 8;
   */
  RESOURCE_HIJACKING = 8,

  /**
   * T1498
   *
   * @generated from enum value: NETWORK_DENIAL_OF_SERVICE = 17;
   */
  NETWORK_DENIAL_OF_SERVICE = 17,

  /**
   * T1526
   *
   * @generated from enum value: CLOUD_SERVICE_DISCOVERY = 48;
   */
  CLOUD_SERVICE_DISCOVERY = 48,

  /**
   * T1528
   *
   * @generated from enum value: STEAL_APPLICATION_ACCESS_TOKEN = 42;
   */
  STEAL_APPLICATION_ACCESS_TOKEN = 42,

  /**
   * T1531
   *
   * @generated from enum value: ACCOUNT_ACCESS_REMOVAL = 51;
   */
  ACCOUNT_ACCESS_REMOVAL = 51,

  /**
   * T1539
   *
   * @generated from enum value: STEAL_WEB_SESSION_COOKIE = 25;
   */
  STEAL_WEB_SESSION_COOKIE = 25,

  /**
   * T1543
   *
   * @generated from enum value: CREATE_OR_MODIFY_SYSTEM_PROCESS = 24;
   */
  CREATE_OR_MODIFY_SYSTEM_PROCESS = 24,

  /**
   * T1548
   *
   * @generated from enum value: ABUSE_ELEVATION_CONTROL_MECHANISM = 34;
   */
  ABUSE_ELEVATION_CONTROL_MECHANISM = 34,

  /**
   * T1552
   *
   * @generated from enum value: UNSECURED_CREDENTIALS = 13;
   */
  UNSECURED_CREDENTIALS = 13,

  /**
   * T1556
   *
   * @generated from enum value: MODIFY_AUTHENTICATION_PROCESS = 28;
   */
  MODIFY_AUTHENTICATION_PROCESS = 28,

  /**
   * T1562
   *
   * @generated from enum value: IMPAIR_DEFENSES = 31;
   */
  IMPAIR_DEFENSES = 31,

  /**
   * T1562.001
   *
   * @generated from enum value: DISABLE_OR_MODIFY_TOOLS = 55;
   */
  DISABLE_OR_MODIFY_TOOLS = 55,

  /**
   * T1567
   *
   * @generated from enum value: EXFILTRATION_OVER_WEB_SERVICE = 20;
   */
  EXFILTRATION_OVER_WEB_SERVICE = 20,

  /**
   * T1567.002
   *
   * @generated from enum value: EXFILTRATION_TO_CLOUD_STORAGE = 21;
   */
  EXFILTRATION_TO_CLOUD_STORAGE = 21,

  /**
   * T1568
   *
   * @generated from enum value: DYNAMIC_RESOLUTION = 12;
   */
  DYNAMIC_RESOLUTION = 12,

  /**
   * T1570
   *
   * @generated from enum value: LATERAL_TOOL_TRANSFER = 41;
   */
  LATERAL_TOOL_TRANSFER = 41,

  /**
   * T1578
   *
   * @generated from enum value: MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE = 26;
   */
  MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE = 26,

  /**
   * T1578.001
   *
   * @generated from enum value: CREATE_SNAPSHOT = 54;
   */
  CREATE_SNAPSHOT = 54,

  /**
   * T1580
   *
   * @generated from enum value: CLOUD_INFRASTRUCTURE_DISCOVERY = 53;
   */
  CLOUD_INFRASTRUCTURE_DISCOVERY = 53,

  /**
   * T1588
   *
   * @generated from enum value: OBTAIN_CAPABILITIES = 43;
   */
  OBTAIN_CAPABILITIES = 43,

  /**
   * T1595
   *
   * @generated from enum value: ACTIVE_SCANNING = 1;
   */
  ACTIVE_SCANNING = 1,

  /**
   * T1595.001
   *
   * @generated from enum value: SCANNING_IP_BLOCKS = 2;
   */
  SCANNING_IP_BLOCKS = 2,

  /**
   * T1609
   *
   * @generated from enum value: CONTAINER_ADMINISTRATION_COMMAND = 60;
   */
  CONTAINER_ADMINISTRATION_COMMAND = 60,

  /**
   * T1611
   *
   * @generated from enum value: ESCAPE_TO_HOST = 61;
   */
  ESCAPE_TO_HOST = 61,

  /**
   * T1613
   *
   * @generated from enum value: CONTAINER_AND_RESOURCE_DISCOVERY = 57;
   */
  CONTAINER_AND_RESOURCE_DISCOVERY = 57,

  /**
   * T1649
   *
   * @generated from enum value: STEAL_OR_FORGE_AUTHENTICATION_CERTIFICATES = 62;
   */
  STEAL_OR_FORGE_AUTHENTICATION_CERTIFICATES = 62,
}

/**
 * Describes the enum google.cloud.securitycenter.v1.MitreAttack.Technique.
 */
export const MitreAttack_TechniqueSchema: GenEnum<MitreAttack_Technique> = /*@__PURE__*/
  enumDesc(file_google_cloud_securitycenter_v1_mitre_attack, 0, 1);
