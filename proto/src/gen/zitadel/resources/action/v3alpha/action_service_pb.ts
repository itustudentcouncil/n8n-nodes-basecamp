// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/resources/action/v3alpha/action_service.proto (package zitadel.resources.action.v3alpha, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../../google/api/annotations_pb";
import { file_google_api_field_behavior } from "../../../../google/api/field_behavior_pb";
import { file_google_protobuf_duration, file_google_protobuf_struct } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../../../../protoc-gen-openapiv2/options/annotations_pb";
import { file_validate_validate } from "../../../../validate/validate_pb";
import { file_zitadel_protoc_gen_zitadel_v2_options } from "../../../protoc_gen_zitadel/v2/options_pb";
import type { GetTarget, PatchTarget, Target } from "./target_pb";
import { file_zitadel_resources_action_v3alpha_target } from "./target_pb";
import type { Condition, Execution, GetExecution } from "./execution_pb";
import { file_zitadel_resources_action_v3alpha_execution } from "./execution_pb";
import type { ExecutionFieldName, ExecutionSearchFilter, TargetFieldName, TargetSearchFilter } from "./query_pb";
import { file_zitadel_resources_action_v3alpha_query } from "./query_pb";
import type { Details, ListDetails, SearchQuery } from "../../object/v3alpha/object_pb";
import { file_zitadel_resources_object_v3alpha_object } from "../../object/v3alpha/object_pb";
import type { Instance } from "../../../object/v3alpha/object_pb";
import { file_zitadel_object_v3alpha_object } from "../../../object/v3alpha/object_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/resources/action/v3alpha/action_service.proto.
 */
export const file_zitadel_resources_action_v3alpha_action_service: GenFile = /*@__PURE__*/
  fileDesc("CjV6aXRhZGVsL3Jlc291cmNlcy9hY3Rpb24vdjNhbHBoYS9hY3Rpb25fc2VydmljZS5wcm90bxIgeml0YWRlbC5yZXNvdXJjZXMuYWN0aW9uLnYzYWxwaGEizQEKE0NyZWF0ZVRhcmdldFJlcXVlc3QSZQoIaW5zdGFuY2UYASABKAsyIC56aXRhZGVsLm9iamVjdC52M2FscGhhLkluc3RhbmNlQiySQSk6JyJkb21haW4gZnJvbSBIT1NUIG9yIDphdXRob3JpdHkgaGVhZGVyIkgAiAEBEkIKBnRhcmdldBgCIAEoCzIoLnppdGFkZWwucmVzb3VyY2VzLmFjdGlvbi52M2FscGhhLlRhcmdldEII+kIFigECEAFCCwoJX2luc3RhbmNlIlIKFENyZWF0ZVRhcmdldFJlc3BvbnNlEjoKB2RldGFpbHMYASABKAsyKS56aXRhZGVsLnJlc291cmNlcy5vYmplY3QudjNhbHBoYS5EZXRhaWxzIocCChJQYXRjaFRhcmdldFJlcXVlc3QSZQoIaW5zdGFuY2UYASABKAsyIC56aXRhZGVsLm9iamVjdC52M2FscGhhLkluc3RhbmNlQiySQSk6JyJkb21haW4gZnJvbSBIT1NUIG9yIDphdXRob3JpdHkgaGVhZGVyIkgAiAEBEjQKAmlkGAIgASgJQiiSQRtKEyI2OTYyOTAyNjgwNjQ4OTQ1NSJ4yAGAAQH6QgdyBRABGMgBEkcKBnRhcmdldBgDIAEoCzItLnppdGFkZWwucmVzb3VyY2VzLmFjdGlvbi52M2FscGhhLlBhdGNoVGFyZ2V0Qgj6QgWKAQIQAUILCglfaW5zdGFuY2UiUQoTUGF0Y2hUYXJnZXRSZXNwb25zZRI6CgdkZXRhaWxzGAEgASgLMikueml0YWRlbC5yZXNvdXJjZXMub2JqZWN0LnYzYWxwaGEuRGV0YWlscyK/AQoTRGVsZXRlVGFyZ2V0UmVxdWVzdBJlCghpbnN0YW5jZRgBIAEoCzIgLnppdGFkZWwub2JqZWN0LnYzYWxwaGEuSW5zdGFuY2VCLJJBKTonImRvbWFpbiBmcm9tIEhPU1Qgb3IgOmF1dGhvcml0eSBoZWFkZXIiSACIAQESNAoCaWQYAiABKAlCKJJBG0oTIjY5NjI5MDI2ODA2NDg5NDU1InjIAYABAfpCB3IFEAEYyAFCCwoJX2luc3RhbmNlIlIKFERlbGV0ZVRhcmdldFJlc3BvbnNlEjoKB2RldGFpbHMYASABKAsyKS56aXRhZGVsLnJlc291cmNlcy5vYmplY3QudjNhbHBoYS5EZXRhaWxzIrwBChBHZXRUYXJnZXRSZXF1ZXN0EmUKCGluc3RhbmNlGAEgASgLMiAueml0YWRlbC5vYmplY3QudjNhbHBoYS5JbnN0YW5jZUIskkEpOiciZG9tYWluIGZyb20gSE9TVCBvciA6YXV0aG9yaXR5IGhlYWRlciJIAIgBARI0CgJpZBgCIAEoCUIokkEbShMiNjk2MjkwMjY4MDY0ODk0NTUieMgBgAEB+kIHcgUQARjIAUILCglfaW5zdGFuY2UiUAoRR2V0VGFyZ2V0UmVzcG9uc2USOwoGdGFyZ2V0GAEgASgLMisueml0YWRlbC5yZXNvdXJjZXMuYWN0aW9uLnYzYWxwaGEuR2V0VGFyZ2V0IqkDChRTZWFyY2hUYXJnZXRzUmVxdWVzdBJlCghpbnN0YW5jZRgBIAEoCzIgLnppdGFkZWwub2JqZWN0LnYzYWxwaGEuSW5zdGFuY2VCLJJBKTonImRvbWFpbiBmcm9tIEhPU1Qgb3IgOmF1dGhvcml0eSBoZWFkZXIiSACIAQESQQoFcXVlcnkYAiABKAsyLS56aXRhZGVsLnJlc291cmNlcy5vYmplY3QudjNhbHBoYS5TZWFyY2hRdWVyeUgBiAEBEnYKDnNvcnRpbmdfY29sdW1uGAMgASgOMjEueml0YWRlbC5yZXNvdXJjZXMuYWN0aW9uLnYzYWxwaGEuVGFyZ2V0RmllbGROYW1lQiaSQSM6ISJUQVJHRVRfRklFTERfTkFNRV9DUkVBVElPTl9EQVRFIkgCiAEBEkUKB2ZpbHRlcnMYBCADKAsyNC56aXRhZGVsLnJlc291cmNlcy5hY3Rpb24udjNhbHBoYS5UYXJnZXRTZWFyY2hGaWx0ZXJCCwoJX2luc3RhbmNlQggKBl9xdWVyeUIRCg9fc29ydGluZ19jb2x1bW4ilAEKFVNlYXJjaFRhcmdldHNSZXNwb25zZRI+CgdkZXRhaWxzGAEgASgLMi0ueml0YWRlbC5yZXNvdXJjZXMub2JqZWN0LnYzYWxwaGEuTGlzdERldGFpbHMSOwoGcmVzdWx0GAIgAygLMisueml0YWRlbC5yZXNvdXJjZXMuYWN0aW9uLnYzYWxwaGEuR2V0VGFyZ2V0IokCChNTZXRFeGVjdXRpb25SZXF1ZXN0EmUKCGluc3RhbmNlGAEgASgLMiAueml0YWRlbC5vYmplY3QudjNhbHBoYS5JbnN0YW5jZUIskkEpOiciZG9tYWluIGZyb20gSE9TVCBvciA6YXV0aG9yaXR5IGhlYWRlciJIAIgBARI+Cgljb25kaXRpb24YAiABKAsyKy56aXRhZGVsLnJlc291cmNlcy5hY3Rpb24udjNhbHBoYS5Db25kaXRpb24SPgoJZXhlY3V0aW9uGAMgASgLMisueml0YWRlbC5yZXNvdXJjZXMuYWN0aW9uLnYzYWxwaGEuRXhlY3V0aW9uQgsKCV9pbnN0YW5jZSJSChRTZXRFeGVjdXRpb25SZXNwb25zZRI6CgdkZXRhaWxzGAEgASgLMikueml0YWRlbC5yZXNvdXJjZXMub2JqZWN0LnYzYWxwaGEuRGV0YWlscyK1AwoXU2VhcmNoRXhlY3V0aW9uc1JlcXVlc3QSZQoIaW5zdGFuY2UYASABKAsyIC56aXRhZGVsLm9iamVjdC52M2FscGhhLkluc3RhbmNlQiySQSk6JyJkb21haW4gZnJvbSBIT1NUIG9yIDphdXRob3JpdHkgaGVhZGVyIkgAiAEBEkEKBXF1ZXJ5GAIgASgLMi0ueml0YWRlbC5yZXNvdXJjZXMub2JqZWN0LnYzYWxwaGEuU2VhcmNoUXVlcnlIAYgBARJ8Cg5zb3J0aW5nX2NvbHVtbhgDIAEoDjI0LnppdGFkZWwucmVzb3VyY2VzLmFjdGlvbi52M2FscGhhLkV4ZWN1dGlvbkZpZWxkTmFtZUIpkkEmOiQiRVhFQ1VUSU9OX0ZJRUxEX05BTUVfQ1JFQVRJT05fREFURSJIAogBARJICgdmaWx0ZXJzGAQgAygLMjcueml0YWRlbC5yZXNvdXJjZXMuYWN0aW9uLnYzYWxwaGEuRXhlY3V0aW9uU2VhcmNoRmlsdGVyQgsKCV9pbnN0YW5jZUIICgZfcXVlcnlCEQoPX3NvcnRpbmdfY29sdW1uIpoBChhTZWFyY2hFeGVjdXRpb25zUmVzcG9uc2USPgoHZGV0YWlscxgBIAEoCzItLnppdGFkZWwucmVzb3VyY2VzLm9iamVjdC52M2FscGhhLkxpc3REZXRhaWxzEj4KBnJlc3VsdBgCIAMoCzIuLnppdGFkZWwucmVzb3VyY2VzLmFjdGlvbi52M2FscGhhLkdldEV4ZWN1dGlvbiIfCh1MaXN0RXhlY3V0aW9uRnVuY3Rpb25zUmVxdWVzdCIzCh5MaXN0RXhlY3V0aW9uRnVuY3Rpb25zUmVzcG9uc2USEQoJZnVuY3Rpb25zGAEgAygJIh0KG0xpc3RFeGVjdXRpb25NZXRob2RzUmVxdWVzdCIvChxMaXN0RXhlY3V0aW9uTWV0aG9kc1Jlc3BvbnNlEg8KB21ldGhvZHMYASADKAkiHgocTGlzdEV4ZWN1dGlvblNlcnZpY2VzUmVxdWVzdCIxCh1MaXN0RXhlY3V0aW9uU2VydmljZXNSZXNwb25zZRIQCghzZXJ2aWNlcxgBIAMoCTLdFgoOWklUQURFTEFjdGlvbnMSqgIKDENyZWF0ZVRhcmdldBI1LnppdGFkZWwucmVzb3VyY2VzLmFjdGlvbi52M2FscGhhLkNyZWF0ZVRhcmdldFJlcXVlc3QaNi56aXRhZGVsLnJlc291cmNlcy5hY3Rpb24udjNhbHBoYS5DcmVhdGVUYXJnZXRSZXNwb25zZSKqAZJBVUpTCgMyMDESTAobVGFyZ2V0IHN1Y2Nlc3NmdWxseSBjcmVhdGVkEi0KKxopIy9kZWZpbml0aW9ucy92M2FscGhhQ3JlYXRlVGFyZ2V0UmVzcG9uc2WKtRgcChUKE2FjdGlvbi50YXJnZXQud3JpdGUSAwjJAYLT5JMCLDoGdGFyZ2V0IiIvcmVzb3VyY2VzL3YzYWxwaGEvYWN0aW9ucy90YXJnZXRzEooCCgtQYXRjaFRhcmdldBI0LnppdGFkZWwucmVzb3VyY2VzLmFjdGlvbi52M2FscGhhLlBhdGNoVGFyZ2V0UmVxdWVzdBo1LnppdGFkZWwucmVzb3VyY2VzLmFjdGlvbi52M2FscGhhLlBhdGNoVGFyZ2V0UmVzcG9uc2UijQGSQThKNgoDMjAwEi8KLVRhcmdldCBzdWNjZXNzZnVsbHkgdXBkYXRlZCBvciBsZWZ0IHVuY2hhbmdlZIq1GBcKFQoTYWN0aW9uLnRhcmdldC53cml0ZYLT5JMCMToGdGFyZ2V0MicvcmVzb3VyY2VzL3YzYWxwaGEvYWN0aW9ucy90YXJnZXRzL3tpZH0S8wEKDERlbGV0ZVRhcmdldBI1LnppdGFkZWwucmVzb3VyY2VzLmFjdGlvbi52M2FscGhhLkRlbGV0ZVRhcmdldFJlcXVlc3QaNi56aXRhZGVsLnJlc291cmNlcy5hY3Rpb24udjNhbHBoYS5EZWxldGVUYXJnZXRSZXNwb25zZSJ0kkEmSiQKAzIwMBIdChtUYXJnZXQgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWSKtRgYChYKFGFjdGlvbi50YXJnZXQuZGVsZXRlgtPkkwIpKicvcmVzb3VyY2VzL3YzYWxwaGEvYWN0aW9ucy90YXJnZXRzL3tpZH0S6gEKCUdldFRhcmdldBIyLnppdGFkZWwucmVzb3VyY2VzLmFjdGlvbi52M2FscGhhLkdldFRhcmdldFJlcXVlc3QaMy56aXRhZGVsLnJlc291cmNlcy5hY3Rpb24udjNhbHBoYS5HZXRUYXJnZXRSZXNwb25zZSJ0kkEoSiYKAzIwMBIfCh1UYXJnZXQgc3VjY2Vzc2Z1bGx5IHJldHJpZXZlZIq1GBYKFAoSYWN0aW9uLnRhcmdldC5yZWFkgtPkkwIpEicvcmVzb3VyY2VzL3YzYWxwaGEvYWN0aW9ucy90YXJnZXRzL3tpZH0SyAIKDVNlYXJjaFRhcmdldHMSNi56aXRhZGVsLnJlc291cmNlcy5hY3Rpb24udjNhbHBoYS5TZWFyY2hUYXJnZXRzUmVxdWVzdBo3LnppdGFkZWwucmVzb3VyY2VzLmFjdGlvbi52M2FscGhhLlNlYXJjaFRhcmdldHNSZXNwb25zZSLFAZJBbUoxCgMyMDASKgooQSBsaXN0IG9mIGFsbCB0YXJnZXRzIG1hdGNoaW5nIHRoZSBxdWVyeUo4CgM0MDASMQoSaW52YWxpZCBsaXN0IHF1ZXJ5EhsKGRoXIy9kZWZpbml0aW9ucy9ycGNTdGF0dXOKtRgWChQKEmFjdGlvbi50YXJnZXQucmVhZILT5JMCNToHZmlsdGVycyIqL3Jlc291cmNlcy92M2FscGhhL2FjdGlvbnMvdGFyZ2V0cy9fc2VhcmNoEsACCgxTZXRFeGVjdXRpb24SNS56aXRhZGVsLnJlc291cmNlcy5hY3Rpb24udjNhbHBoYS5TZXRFeGVjdXRpb25SZXF1ZXN0GjYueml0YWRlbC5yZXNvdXJjZXMuYWN0aW9uLnYzYWxwaGEuU2V0RXhlY3V0aW9uUmVzcG9uc2UiwAGSQWpKaAoDMjAwEmEKMEV4ZWN1dGlvbiBzdWNjZXNzZnVsbHkgdXBkYXRlZCBvciBsZWZ0IHVuY2hhbmdlZBItCisaKSMvZGVmaW5pdGlvbnMvdjNhbHBoYVNldEV4ZWN1dGlvblJlc3BvbnNlirUYHwoYChZhY3Rpb24uZXhlY3V0aW9uLndyaXRlEgMIyQGC0+STAio6ASoaJS9yZXNvdXJjZXMvdjNhbHBoYS9hY3Rpb25zL2V4ZWN1dGlvbnMS4wIKEFNlYXJjaEV4ZWN1dGlvbnMSOS56aXRhZGVsLnJlc291cmNlcy5hY3Rpb24udjNhbHBoYS5TZWFyY2hFeGVjdXRpb25zUmVxdWVzdBo6LnppdGFkZWwucmVzb3VyY2VzLmFjdGlvbi52M2FscGhhLlNlYXJjaEV4ZWN1dGlvbnNSZXNwb25zZSLXAZJBeUo9CgMyMDASNgo0QSBsaXN0IG9mIGFsbCBub24gbm9vcCBleGVjdXRpb25zIG1hdGNoaW5nIHRoZSBxdWVyeUo4CgM0MDASMQoSaW52YWxpZCBsaXN0IHF1ZXJ5EhsKGRoXIy9kZWZpbml0aW9ucy9ycGNTdGF0dXOKtRgZChcKFWFjdGlvbi5leGVjdXRpb24ucmVhZILT5JMCODoHZmlsdGVycyItL3Jlc291cmNlcy92M2FscGhhL2FjdGlvbnMvZXhlY3V0aW9ucy9fc2VhcmNoEpYCChZMaXN0RXhlY3V0aW9uRnVuY3Rpb25zEj8ueml0YWRlbC5yZXNvdXJjZXMuYWN0aW9uLnYzYWxwaGEuTGlzdEV4ZWN1dGlvbkZ1bmN0aW9uc1JlcXVlc3QaQC56aXRhZGVsLnJlc291cmNlcy5hY3Rpb24udjNhbHBoYS5MaXN0RXhlY3V0aW9uRnVuY3Rpb25zUmVzcG9uc2UieZJBKkooCgMyMDASIQofTGlzdCBhbGwgZnVuY3Rpb25zIHN1Y2Nlc3NmdWxseYq1GBEKDwoNYXV0aGVudGljYXRlZILT5JMCMRIvL3Jlc291cmNlcy92M2FscGhhL2FjdGlvbnMvZXhlY3V0aW9ucy9mdW5jdGlvbnMSjAIKFExpc3RFeGVjdXRpb25NZXRob2RzEj0ueml0YWRlbC5yZXNvdXJjZXMuYWN0aW9uLnYzYWxwaGEuTGlzdEV4ZWN1dGlvbk1ldGhvZHNSZXF1ZXN0Gj4ueml0YWRlbC5yZXNvdXJjZXMuYWN0aW9uLnYzYWxwaGEuTGlzdEV4ZWN1dGlvbk1ldGhvZHNSZXNwb25zZSJ1kkEoSiYKAzIwMBIfCh1MaXN0IGFsbCBtZXRob2RzIHN1Y2Nlc3NmdWxseYq1GBEKDwoNYXV0aGVudGljYXRlZILT5JMCLxItL3Jlc291cmNlcy92M2FscGhhL2FjdGlvbnMvZXhlY3V0aW9ucy9tZXRob2RzEpECChVMaXN0RXhlY3V0aW9uU2VydmljZXMSPi56aXRhZGVsLnJlc291cmNlcy5hY3Rpb24udjNhbHBoYS5MaXN0RXhlY3V0aW9uU2VydmljZXNSZXF1ZXN0Gj8ueml0YWRlbC5yZXNvdXJjZXMuYWN0aW9uLnYzYWxwaGEuTGlzdEV4ZWN1dGlvblNlcnZpY2VzUmVzcG9uc2Uid5JBKUonCgMyMDASIAoeTGlzdCBhbGwgc2VydmljZXMgc3VjY2Vzc2Z1bGx5irUYEQoPCg1hdXRoZW50aWNhdGVkgtPkkwIwEi4vcmVzb3VyY2VzL3YzYWxwaGEvYWN0aW9ucy9leGVjdXRpb25zL3NlcnZpY2VzQp0IWkNnaXRodWIuY29tL3ppdGFkZWwveml0YWRlbC9wa2cvZ3JwYy9yZXNvdXJjZXMvYWN0aW9uL3YzYWxwaGE7YWN0aW9ukkHUBxKyAgoOQWN0aW9uIFNlcnZpY2USoAFUaGlzIEFQSSBpcyBpbnRlbmRlZCB0byBtYW5hZ2UgY3VzdG9tIGV4ZWN1dGlvbnMgKHByZXZpb3VzbHkga25vd24gYXMgYWN0aW9ucykgaW4gYSBaSVRBREVMIGluc3RhbmNlLiBJdCB3aWxsIGNvbnRpbnVlIGJyZWFraW5nIGFzIGxvbmcgYXMgaXQgaXMgaW4gYWxwaGEgc3RhdGUuIi4KB1pJVEFERUwSE2h0dHBzOi8veml0YWRlbC5jb20aDmhpQHppdGFkZWwuY29tKkIKCkFwYWNoZSAyLjASNGh0dHBzOi8vZ2l0aHViLmNvbS96aXRhZGVsL3ppdGFkZWwvYmxvYi9tYWluL0xJQ0VOU0UyCTMuMC1hbHBoYRoOJENVU1RPTS1ET01BSU4iAS8qAgIBMhBhcHBsaWNhdGlvbi9qc29uMhBhcHBsaWNhdGlvbi9ncnBjMhphcHBsaWNhdGlvbi9ncnBjLXdlYitwcm90bzoQYXBwbGljYXRpb24vanNvbjoQYXBwbGljYXRpb24vZ3JwYzoaYXBwbGljYXRpb24vZ3JwYy13ZWIrcHJvdG9SbQoDNDAzEmYKR1JldHVybmVkIHdoZW4gdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGFjY2VzcyB0aGUgcmVzb3VyY2UuEhsKGRoXIy9kZWZpbml0aW9ucy9ycGNTdGF0dXNSUAoDNDA0EkkKKlJldHVybmVkIHdoZW4gdGhlIHJlc291cmNlIGRvZXMgbm90IGV4aXN0LhIbChkaFyMvZGVmaW5pdGlvbnMvcnBjU3RhdHVzWsIBCr8BCgZPQXV0aDIStAEIAygEMiEkQ1VTVE9NLURPTUFJTi9vYXV0aC92Mi9hdXRob3JpemU6HSRDVVNUT00tRE9NQUlOL29hdXRoL3YyL3Rva2VuQmwKEAoGb3BlbmlkEgZvcGVuaWQKWAoqdXJuOnppdGFkZWw6aWFtOm9yZzpwcm9qZWN0OmlkOnppdGFkZWw6YXVkEip1cm46eml0YWRlbDppYW06b3JnOnByb2plY3Q6aWQ6eml0YWRlbDphdWRiQAo+CgZPQXV0aDISNAoGb3BlbmlkCip1cm46eml0YWRlbDppYW06b3JnOnByb2plY3Q6aWQ6eml0YWRlbDphdWRyPgoiRGV0YWlsZWQgaW5mb3JtYXRpb24gYWJvdXQgWklUQURFTBIYaHR0cHM6Ly96aXRhZGVsLmNvbS9kb2NzYgZwcm90bzM", [file_google_api_annotations, file_google_api_field_behavior, file_google_protobuf_duration, file_google_protobuf_struct, file_protoc_gen_openapiv2_options_annotations, file_validate_validate, file_zitadel_protoc_gen_zitadel_v2_options, file_zitadel_resources_action_v3alpha_target, file_zitadel_resources_action_v3alpha_execution, file_zitadel_resources_action_v3alpha_query, file_zitadel_resources_object_v3alpha_object, file_zitadel_object_v3alpha_object]);

/**
 * @generated from message zitadel.resources.action.v3alpha.CreateTargetRequest
 */
export type CreateTargetRequest = Message<"zitadel.resources.action.v3alpha.CreateTargetRequest"> & {
  /**
   * @generated from field: optional zitadel.object.v3alpha.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * @generated from field: zitadel.resources.action.v3alpha.Target target = 2;
   */
  target?: Target;
};

/**
 * Describes the message zitadel.resources.action.v3alpha.CreateTargetRequest.
 * Use `create(CreateTargetRequestSchema)` to create a new message.
 */
export const CreateTargetRequestSchema: GenMessage<CreateTargetRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 0);

/**
 * @generated from message zitadel.resources.action.v3alpha.CreateTargetResponse
 */
export type CreateTargetResponse = Message<"zitadel.resources.action.v3alpha.CreateTargetResponse"> & {
  /**
   * @generated from field: zitadel.resources.object.v3alpha.Details details = 1;
   */
  details?: Details;
};

/**
 * Describes the message zitadel.resources.action.v3alpha.CreateTargetResponse.
 * Use `create(CreateTargetResponseSchema)` to create a new message.
 */
export const CreateTargetResponseSchema: GenMessage<CreateTargetResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 1);

/**
 * @generated from message zitadel.resources.action.v3alpha.PatchTargetRequest
 */
export type PatchTargetRequest = Message<"zitadel.resources.action.v3alpha.PatchTargetRequest"> & {
  /**
   * @generated from field: optional zitadel.object.v3alpha.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * @generated from field: string id = 2;
   */
  id: string;

  /**
   * @generated from field: zitadel.resources.action.v3alpha.PatchTarget target = 3;
   */
  target?: PatchTarget;
};

/**
 * Describes the message zitadel.resources.action.v3alpha.PatchTargetRequest.
 * Use `create(PatchTargetRequestSchema)` to create a new message.
 */
export const PatchTargetRequestSchema: GenMessage<PatchTargetRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 2);

/**
 * @generated from message zitadel.resources.action.v3alpha.PatchTargetResponse
 */
export type PatchTargetResponse = Message<"zitadel.resources.action.v3alpha.PatchTargetResponse"> & {
  /**
   * @generated from field: zitadel.resources.object.v3alpha.Details details = 1;
   */
  details?: Details;
};

/**
 * Describes the message zitadel.resources.action.v3alpha.PatchTargetResponse.
 * Use `create(PatchTargetResponseSchema)` to create a new message.
 */
export const PatchTargetResponseSchema: GenMessage<PatchTargetResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 3);

/**
 * @generated from message zitadel.resources.action.v3alpha.DeleteTargetRequest
 */
export type DeleteTargetRequest = Message<"zitadel.resources.action.v3alpha.DeleteTargetRequest"> & {
  /**
   * @generated from field: optional zitadel.object.v3alpha.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * @generated from field: string id = 2;
   */
  id: string;
};

/**
 * Describes the message zitadel.resources.action.v3alpha.DeleteTargetRequest.
 * Use `create(DeleteTargetRequestSchema)` to create a new message.
 */
export const DeleteTargetRequestSchema: GenMessage<DeleteTargetRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 4);

/**
 * @generated from message zitadel.resources.action.v3alpha.DeleteTargetResponse
 */
export type DeleteTargetResponse = Message<"zitadel.resources.action.v3alpha.DeleteTargetResponse"> & {
  /**
   * @generated from field: zitadel.resources.object.v3alpha.Details details = 1;
   */
  details?: Details;
};

/**
 * Describes the message zitadel.resources.action.v3alpha.DeleteTargetResponse.
 * Use `create(DeleteTargetResponseSchema)` to create a new message.
 */
export const DeleteTargetResponseSchema: GenMessage<DeleteTargetResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 5);

/**
 * @generated from message zitadel.resources.action.v3alpha.GetTargetRequest
 */
export type GetTargetRequest = Message<"zitadel.resources.action.v3alpha.GetTargetRequest"> & {
  /**
   * @generated from field: optional zitadel.object.v3alpha.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * @generated from field: string id = 2;
   */
  id: string;
};

/**
 * Describes the message zitadel.resources.action.v3alpha.GetTargetRequest.
 * Use `create(GetTargetRequestSchema)` to create a new message.
 */
export const GetTargetRequestSchema: GenMessage<GetTargetRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 6);

/**
 * @generated from message zitadel.resources.action.v3alpha.GetTargetResponse
 */
export type GetTargetResponse = Message<"zitadel.resources.action.v3alpha.GetTargetResponse"> & {
  /**
   * @generated from field: zitadel.resources.action.v3alpha.GetTarget target = 1;
   */
  target?: GetTarget;
};

/**
 * Describes the message zitadel.resources.action.v3alpha.GetTargetResponse.
 * Use `create(GetTargetResponseSchema)` to create a new message.
 */
export const GetTargetResponseSchema: GenMessage<GetTargetResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 7);

/**
 * @generated from message zitadel.resources.action.v3alpha.SearchTargetsRequest
 */
export type SearchTargetsRequest = Message<"zitadel.resources.action.v3alpha.SearchTargetsRequest"> & {
  /**
   * @generated from field: optional zitadel.object.v3alpha.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * list limitations and ordering.
   *
   * @generated from field: optional zitadel.resources.object.v3alpha.SearchQuery query = 2;
   */
  query?: SearchQuery;

  /**
   * The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent.
   *
   * @generated from field: optional zitadel.resources.action.v3alpha.TargetFieldName sorting_column = 3;
   */
  sortingColumn?: TargetFieldName;

  /**
   * Define the criteria to query for.
   *
   * @generated from field: repeated zitadel.resources.action.v3alpha.TargetSearchFilter filters = 4;
   */
  filters: TargetSearchFilter[];
};

/**
 * Describes the message zitadel.resources.action.v3alpha.SearchTargetsRequest.
 * Use `create(SearchTargetsRequestSchema)` to create a new message.
 */
export const SearchTargetsRequestSchema: GenMessage<SearchTargetsRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 8);

/**
 * @generated from message zitadel.resources.action.v3alpha.SearchTargetsResponse
 */
export type SearchTargetsResponse = Message<"zitadel.resources.action.v3alpha.SearchTargetsResponse"> & {
  /**
   * @generated from field: zitadel.resources.object.v3alpha.ListDetails details = 1;
   */
  details?: ListDetails;

  /**
   * @generated from field: repeated zitadel.resources.action.v3alpha.GetTarget result = 2;
   */
  result: GetTarget[];
};

/**
 * Describes the message zitadel.resources.action.v3alpha.SearchTargetsResponse.
 * Use `create(SearchTargetsResponseSchema)` to create a new message.
 */
export const SearchTargetsResponseSchema: GenMessage<SearchTargetsResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 9);

/**
 * @generated from message zitadel.resources.action.v3alpha.SetExecutionRequest
 */
export type SetExecutionRequest = Message<"zitadel.resources.action.v3alpha.SetExecutionRequest"> & {
  /**
   * @generated from field: optional zitadel.object.v3alpha.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * @generated from field: zitadel.resources.action.v3alpha.Condition condition = 2;
   */
  condition?: Condition;

  /**
   * @generated from field: zitadel.resources.action.v3alpha.Execution execution = 3;
   */
  execution?: Execution;
};

/**
 * Describes the message zitadel.resources.action.v3alpha.SetExecutionRequest.
 * Use `create(SetExecutionRequestSchema)` to create a new message.
 */
export const SetExecutionRequestSchema: GenMessage<SetExecutionRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 10);

/**
 * @generated from message zitadel.resources.action.v3alpha.SetExecutionResponse
 */
export type SetExecutionResponse = Message<"zitadel.resources.action.v3alpha.SetExecutionResponse"> & {
  /**
   * @generated from field: zitadel.resources.object.v3alpha.Details details = 1;
   */
  details?: Details;
};

/**
 * Describes the message zitadel.resources.action.v3alpha.SetExecutionResponse.
 * Use `create(SetExecutionResponseSchema)` to create a new message.
 */
export const SetExecutionResponseSchema: GenMessage<SetExecutionResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 11);

/**
 * @generated from message zitadel.resources.action.v3alpha.SearchExecutionsRequest
 */
export type SearchExecutionsRequest = Message<"zitadel.resources.action.v3alpha.SearchExecutionsRequest"> & {
  /**
   * @generated from field: optional zitadel.object.v3alpha.Instance instance = 1;
   */
  instance?: Instance;

  /**
   * list limitations and ordering.
   *
   * @generated from field: optional zitadel.resources.object.v3alpha.SearchQuery query = 2;
   */
  query?: SearchQuery;

  /**
   * The field the result is sorted by. The default is the creation date. Beware that if you change this, your result pagination might be inconsistent.
   *
   * @generated from field: optional zitadel.resources.action.v3alpha.ExecutionFieldName sorting_column = 3;
   */
  sortingColumn?: ExecutionFieldName;

  /**
   * Define the criteria to query for.
   *
   * @generated from field: repeated zitadel.resources.action.v3alpha.ExecutionSearchFilter filters = 4;
   */
  filters: ExecutionSearchFilter[];
};

/**
 * Describes the message zitadel.resources.action.v3alpha.SearchExecutionsRequest.
 * Use `create(SearchExecutionsRequestSchema)` to create a new message.
 */
export const SearchExecutionsRequestSchema: GenMessage<SearchExecutionsRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 12);

/**
 * @generated from message zitadel.resources.action.v3alpha.SearchExecutionsResponse
 */
export type SearchExecutionsResponse = Message<"zitadel.resources.action.v3alpha.SearchExecutionsResponse"> & {
  /**
   * @generated from field: zitadel.resources.object.v3alpha.ListDetails details = 1;
   */
  details?: ListDetails;

  /**
   * @generated from field: repeated zitadel.resources.action.v3alpha.GetExecution result = 2;
   */
  result: GetExecution[];
};

/**
 * Describes the message zitadel.resources.action.v3alpha.SearchExecutionsResponse.
 * Use `create(SearchExecutionsResponseSchema)` to create a new message.
 */
export const SearchExecutionsResponseSchema: GenMessage<SearchExecutionsResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 13);

/**
 * @generated from message zitadel.resources.action.v3alpha.ListExecutionFunctionsRequest
 */
export type ListExecutionFunctionsRequest = Message<"zitadel.resources.action.v3alpha.ListExecutionFunctionsRequest"> & {
};

/**
 * Describes the message zitadel.resources.action.v3alpha.ListExecutionFunctionsRequest.
 * Use `create(ListExecutionFunctionsRequestSchema)` to create a new message.
 */
export const ListExecutionFunctionsRequestSchema: GenMessage<ListExecutionFunctionsRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 14);

/**
 * @generated from message zitadel.resources.action.v3alpha.ListExecutionFunctionsResponse
 */
export type ListExecutionFunctionsResponse = Message<"zitadel.resources.action.v3alpha.ListExecutionFunctionsResponse"> & {
  /**
   * All available methods
   *
   * @generated from field: repeated string functions = 1;
   */
  functions: string[];
};

/**
 * Describes the message zitadel.resources.action.v3alpha.ListExecutionFunctionsResponse.
 * Use `create(ListExecutionFunctionsResponseSchema)` to create a new message.
 */
export const ListExecutionFunctionsResponseSchema: GenMessage<ListExecutionFunctionsResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 15);

/**
 * @generated from message zitadel.resources.action.v3alpha.ListExecutionMethodsRequest
 */
export type ListExecutionMethodsRequest = Message<"zitadel.resources.action.v3alpha.ListExecutionMethodsRequest"> & {
};

/**
 * Describes the message zitadel.resources.action.v3alpha.ListExecutionMethodsRequest.
 * Use `create(ListExecutionMethodsRequestSchema)` to create a new message.
 */
export const ListExecutionMethodsRequestSchema: GenMessage<ListExecutionMethodsRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 16);

/**
 * @generated from message zitadel.resources.action.v3alpha.ListExecutionMethodsResponse
 */
export type ListExecutionMethodsResponse = Message<"zitadel.resources.action.v3alpha.ListExecutionMethodsResponse"> & {
  /**
   * All available methods
   *
   * @generated from field: repeated string methods = 1;
   */
  methods: string[];
};

/**
 * Describes the message zitadel.resources.action.v3alpha.ListExecutionMethodsResponse.
 * Use `create(ListExecutionMethodsResponseSchema)` to create a new message.
 */
export const ListExecutionMethodsResponseSchema: GenMessage<ListExecutionMethodsResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 17);

/**
 * @generated from message zitadel.resources.action.v3alpha.ListExecutionServicesRequest
 */
export type ListExecutionServicesRequest = Message<"zitadel.resources.action.v3alpha.ListExecutionServicesRequest"> & {
};

/**
 * Describes the message zitadel.resources.action.v3alpha.ListExecutionServicesRequest.
 * Use `create(ListExecutionServicesRequestSchema)` to create a new message.
 */
export const ListExecutionServicesRequestSchema: GenMessage<ListExecutionServicesRequest> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 18);

/**
 * @generated from message zitadel.resources.action.v3alpha.ListExecutionServicesResponse
 */
export type ListExecutionServicesResponse = Message<"zitadel.resources.action.v3alpha.ListExecutionServicesResponse"> & {
  /**
   * All available methods
   *
   * @generated from field: repeated string services = 1;
   */
  services: string[];
};

/**
 * Describes the message zitadel.resources.action.v3alpha.ListExecutionServicesResponse.
 * Use `create(ListExecutionServicesResponseSchema)` to create a new message.
 */
export const ListExecutionServicesResponseSchema: GenMessage<ListExecutionServicesResponse> = /*@__PURE__*/
  messageDesc(file_zitadel_resources_action_v3alpha_action_service, 19);

/**
 * @generated from service zitadel.resources.action.v3alpha.ZITADELActions
 */
export const ZITADELActions: GenService<{
  /**
   * Create a target
   *
   * Create a new target, which can be used in executions.
   *
   * @generated from rpc zitadel.resources.action.v3alpha.ZITADELActions.CreateTarget
   */
  createTarget: {
    methodKind: "unary";
    input: typeof CreateTargetRequestSchema;
    output: typeof CreateTargetResponseSchema;
  },
  /**
   * Patch a target
   *
   * Patch an existing target.
   *
   * @generated from rpc zitadel.resources.action.v3alpha.ZITADELActions.PatchTarget
   */
  patchTarget: {
    methodKind: "unary";
    input: typeof PatchTargetRequestSchema;
    output: typeof PatchTargetResponseSchema;
  },
  /**
   * Delete a target
   *
   * Delete an existing target. This will remove it from any configured execution as well.
   *
   * @generated from rpc zitadel.resources.action.v3alpha.ZITADELActions.DeleteTarget
   */
  deleteTarget: {
    methodKind: "unary";
    input: typeof DeleteTargetRequestSchema;
    output: typeof DeleteTargetResponseSchema;
  },
  /**
   * Target by ID
   *
   * Returns the target identified by the requested ID.
   *
   * @generated from rpc zitadel.resources.action.v3alpha.ZITADELActions.GetTarget
   */
  getTarget: {
    methodKind: "unary";
    input: typeof GetTargetRequestSchema;
    output: typeof GetTargetResponseSchema;
  },
  /**
   * Search targets
   *
   * Search all matching targets. By default all targets of the instance are returned.
   * Make sure to include a limit and sorting for pagination.
   *
   * @generated from rpc zitadel.resources.action.v3alpha.ZITADELActions.SearchTargets
   */
  searchTargets: {
    methodKind: "unary";
    input: typeof SearchTargetsRequestSchema;
    output: typeof SearchTargetsResponseSchema;
  },
  /**
   * Sets an execution to call a target or include the targets of another execution.
   *
   * Setting an empty list of targets will remove all targets from the execution, making it a noop.
   *
   * @generated from rpc zitadel.resources.action.v3alpha.ZITADELActions.SetExecution
   */
  setExecution: {
    methodKind: "unary";
    input: typeof SetExecutionRequestSchema;
    output: typeof SetExecutionResponseSchema;
  },
  /**
   * Search executions
   *
   * Search all matching executions. By default all executions of the instance are returned that have at least one execution target.
   * Make sure to include a limit and sorting for pagination.
   *
   * @generated from rpc zitadel.resources.action.v3alpha.ZITADELActions.SearchExecutions
   */
  searchExecutions: {
    methodKind: "unary";
    input: typeof SearchExecutionsRequestSchema;
    output: typeof SearchExecutionsResponseSchema;
  },
  /**
   * List all available functions
   *
   * List all available functions which can be used as condition for executions.
   *
   * @generated from rpc zitadel.resources.action.v3alpha.ZITADELActions.ListExecutionFunctions
   */
  listExecutionFunctions: {
    methodKind: "unary";
    input: typeof ListExecutionFunctionsRequestSchema;
    output: typeof ListExecutionFunctionsResponseSchema;
  },
  /**
   * List all available methods
   *
   * List all available methods which can be used as condition for executions.
   *
   * @generated from rpc zitadel.resources.action.v3alpha.ZITADELActions.ListExecutionMethods
   */
  listExecutionMethods: {
    methodKind: "unary";
    input: typeof ListExecutionMethodsRequestSchema;
    output: typeof ListExecutionMethodsResponseSchema;
  },
  /**
   * List all available service
   *
   * List all available services which can be used as condition for executions.
   *
   * @generated from rpc zitadel.resources.action.v3alpha.ZITADELActions.ListExecutionServices
   */
  listExecutionServices: {
    methodKind: "unary";
    input: typeof ListExecutionServicesRequestSchema;
    output: typeof ListExecutionServicesResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_zitadel_resources_action_v3alpha_action_service, 0);
