// @generated by protoc-gen-es v2.1.0 with parameter "target=ts"
// @generated from file zitadel/policy.proto (package zitadel.policy.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { ObjectDetails } from "./object_pb";
import { file_zitadel_object } from "./object_pb";
import type { IDPLoginPolicyLink } from "./idp_pb";
import { file_zitadel_idp } from "./idp_pb";
import type { Duration } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_duration } from "@bufbuild/protobuf/wkt";
import { file_protoc_gen_openapiv2_options_annotations } from "../protoc-gen-openapiv2/options/annotations_pb";
import { file_validate_validate } from "../validate/validate_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file zitadel/policy.proto.
 */
export const file_zitadel_policy: GenFile = /*@__PURE__*/
  fileDesc("ChR6aXRhZGVsL3BvbGljeS5wcm90bxIReml0YWRlbC5wb2xpY3kudjEi8AEKDE9yZ0lBTVBvbGljeRIqCgdkZXRhaWxzGAEgASgLMhkueml0YWRlbC52MS5PYmplY3REZXRhaWxzEmMKGXVzZXJfbG9naW5fbXVzdF9iZV9kb21haW4YAiABKAhCQJJBPTI7dGhlIHVzZXJuYW1lIGhhcyB0byBlbmQgd2l0aCB0aGUgZG9tYWluIG9mIGl0cyBvcmdhbml6YXRpb24STwoKaXNfZGVmYXVsdBgDIAEoCEI7kkE4MjZkZWZpbmVzIGlmIHRoZSBvcmdhbml6YXRpb24ncyBhZG1pbiBjaGFuZ2VkIHRoZSBwb2xpY3kigwQKDERvbWFpblBvbGljeRIqCgdkZXRhaWxzGAEgASgLMhkueml0YWRlbC52MS5PYmplY3REZXRhaWxzEmMKGXVzZXJfbG9naW5fbXVzdF9iZV9kb21haW4YAiABKAhCQJJBPTI7dGhlIHVzZXJuYW1lIGhhcyB0byBlbmQgd2l0aCB0aGUgZG9tYWluIG9mIGl0cyBvcmdhbml6YXRpb24STwoKaXNfZGVmYXVsdBgDIAEoCEI7kkE4MjZkZWZpbmVzIGlmIHRoZSBvcmdhbml6YXRpb24ncyBhZG1pbiBjaGFuZ2VkIHRoZSBwb2xpY3kSewoUdmFsaWRhdGVfb3JnX2RvbWFpbnMYBCABKAhCXZJBWjJYZGVmaW5lcyBpZiBvcmdhbml6YXRpb24gZG9tYWlucyBzaG91bGQgYmUgdmFsaWRhdGVkIG9yZyBjb3VudCBhcyB2YWxpZGF0ZWQgYXV0b21hdGljYWxseRKTAQorc210cF9zZW5kZXJfYWRkcmVzc19tYXRjaGVzX2luc3RhbmNlX2RvbWFpbhgFIAEoCEJekkFbMllkZWZpbmVzIGlmIHRoZSBTTVRQIHNlbmRlciBhZGRyZXNzIGRvbWFpbiBzaG91bGQgbWF0Y2ggYW4gZXhpc3RpbmcgZG9tYWluIG9uIHRoZSBpbnN0YW5jZSK8DAoLTGFiZWxQb2xpY3kSKgoHZGV0YWlscxgBIAEoCzIZLnppdGFkZWwudjEuT2JqZWN0RGV0YWlscxJCCg1wcmltYXJ5X2NvbG9yGAIgASgJQiuSQSgyG2hleCB2YWx1ZSBmb3IgcHJpbWFyeSBjb2xvckoJIiM1NDY5ZDQiEk8KCmlzX2RlZmF1bHQYBCABKAhCO5JBODI2ZGVmaW5lcyBpZiB0aGUgb3JnYW5pemF0aW9uJ3MgYWRtaW4gY2hhbmdlZCB0aGUgcG9saWN5EpEBChZoaWRlX2xvZ2luX25hbWVfc3VmZml4GAUgASgIQnGSQW4ybGhpZGVzIHRoZSBvcmcgc3VmZml4IG9uIHRoZSBsb2dpbiBmb3JtIGlmIHRoZSBzY29wZSAidXJuOnppdGFkZWw6aWFtOm9yZzpkb21haW46cHJpbWFyeTp7ZG9tYWlubmFtZX0iIGlzIHNldBI8Cgp3YXJuX2NvbG9yGAYgASgJQiiSQSUyGGhleCB2YWx1ZSBmb3Igd2FybiBjb2xvckoJIiNDRDNENTYiEkgKEGJhY2tncm91bmRfY29sb3IYByABKAlCLpJBKzIeaGV4IHZhbHVlIGZvciBiYWNrZ3JvdW5kIGNvbG9ySgkiI0ZBRkFGQSISPAoKZm9udF9jb2xvchgIIAEoCUIokkElMhhoZXggdmFsdWUgZm9yIGZvbnQgY29sb3JKCSIjMDAwMDAwIhJWChJwcmltYXJ5X2NvbG9yX2RhcmsYCSABKAlCOpJBNzIqaGV4IHZhbHVlIGZvciB0aGUgcHJpbWFyeSBjb2xvciBkYXJrIHRoZW1lSgkiI0JCQkFGQSISWAoVYmFja2dyb3VuZF9jb2xvcl9kYXJrGAogASgJQjmSQTYyKWhleCB2YWx1ZSBmb3IgYmFja2dyb3VuZCBjb2xvciBkYXJrIHRoZW1lSgkiIzExMTgyNyISTwoPd2Fybl9jb2xvcl9kYXJrGAsgASgJQjaSQTMyJmhleCB2YWx1ZSBmb3Igd2FybmluZyBjb2xvciBkYXJrIHRoZW1lSgkiI0ZGM0I1QiISTAoPZm9udF9jb2xvcl9kYXJrGAwgASgJQjOSQTAyI2hleCB2YWx1ZSBmb3IgZm9udCBjb2xvciBkYXJrIHRoZW1lSgkiI0ZGRkZGRiISGQoRZGlzYWJsZV93YXRlcm1hcmsYDSABKAgSkAEKCGxvZ29fdXJsGA4gASgJQn6SQXsyI2hleCB2YWx1ZSBmb3IgZm9udCBjb2xvciBkYXJrIHRoZW1lSlQiaHR0cHM6Ly9hY21lLmNvbS9hc3NldHMvdjEvMTY1NjE3ODUwNjkyNjU0NjAxL3BvbGljeS9sYWJlbC9sb2dvLTE4MDk1MDQxNjMyMTQ5NDY1NyISkAEKCGljb25fdXJsGA8gASgJQn6SQXsyI2hleCB2YWx1ZSBmb3IgZm9udCBjb2xvciBkYXJrIHRoZW1lSlQiaHR0cHM6Ly9hY21lLmNvbS9hc3NldHMvdjEvMTY1NjE3ODUwNjkyNjU0NjAxL3BvbGljeS9sYWJlbC9pY29uLTE4MDk1MDQ5ODg3NDE3ODgxNyISnAEKDWxvZ29fdXJsX2RhcmsYECABKAlChAGSQYABMiNoZXggdmFsdWUgZm9yIGZvbnQgY29sb3IgZGFyayB0aGVtZUpZImh0dHBzOi8vYWNtZS5jb20vYXNzZXRzL3YxLzE2NTYxNzg1MDY5MjY1NDYwMS9wb2xpY3kvbGFiZWwvbG9nby1kYXJrLTE4MDk1MDIyOTM3NjQ2MTM0NSISnAEKDWljb25fdXJsX2RhcmsYESABKAlChAGSQYABMiNoZXggdmFsdWUgZm9yIGZvbnQgY29sb3IgZGFyayB0aGVtZUpZImh0dHBzOi8vYWNtZS5jb20vYXNzZXRzL3YxLzE2NTYxNzg1MDY5MjY1NDYwMS9wb2xpY3kvbGFiZWwvaWNvbi1kYXJrLTE4MDk1MDI0MzIzNzQwNTQ0MSISEAoIZm9udF91cmwYEiABKAkSMAoKdGhlbWVfbW9kZRgTIAEoDjIcLnppdGFkZWwucG9saWN5LnYxLlRoZW1lTW9kZSKrEgoLTG9naW5Qb2xpY3kSKgoHZGV0YWlscxgBIAEoCzIZLnppdGFkZWwudjEuT2JqZWN0RGV0YWlscxJnChdhbGxvd191c2VybmFtZV9wYXNzd29yZBgCIAEoCEJGkkFDMkFkZWZpbmVzIGlmIGEgdXNlciBpcyBhbGxvd2VkIHRvIGxvZyBpbiB3aXRoIHVzZXJuYW1lIGFuZCBwYXNzd29yZBJjCg5hbGxvd19yZWdpc3RlchgDIAEoCEJLkkFIMkZkZWZpbmVzIGlmIGEgcGVyc29uIGlzIGFsbG93ZWQgdG8gcmVnaXN0ZXIgYSB1c2VyIG9uIHRoaXMgb3JnYW5pemF0aW9uEnIKEmFsbG93X2V4dGVybmFsX2lkcBgEIAEoCEJWkkFTMlFkZWZpbmVzIGlmIGEgdXNlciBpcyBhbGxvd2VkIHRvIGFkZCBhIGRlZmluZWQgaWRlbnRpdHkgcHJvdmlkZXIuIEUuZy4gR29vZ2xlIGF1dGgSSwoJZm9yY2VfbWZhGAUgASgIQjiSQTUyM2RlZmluZXMgaWYgYSB1c2VyIE1VU1QgdXNlIGEgbXVsdGktZmFjdG9yIHRvIGxvZyBpbhJxChFwYXNzd29yZGxlc3NfdHlwZRgGIAEoDjIjLnppdGFkZWwucG9saWN5LnYxLlBhc3N3b3JkbGVzc1R5cGVCMZJBLjIsZGVmaW5lcyBpZiBwYXNzd29yZGxlc3MgaXMgYWxsb3dlZCBmb3IgdXNlcnMSTwoKaXNfZGVmYXVsdBgHIAEoCEI7kkE4MjZkZWZpbmVzIGlmIHRoZSBvcmdhbml6YXRpb24ncyBhZG1pbiBjaGFuZ2VkIHRoZSBwb2xpY3kSZAoTaGlkZV9wYXNzd29yZF9yZXNldBgIIAEoCEJHkkFEMkJkZWZpbmVzIGlmIHBhc3N3b3JkIHJlc2V0IGxpbmsgc2hvdWxkIGJlIHNob3duIGluIHRoZSBsb2dpbiBzY3JlZW4SkwEKGGlnbm9yZV91bmtub3duX3VzZXJuYW1lcxgJIAEoCEJxkkFuMmxkZWZpbmVzIGlmIHVua25vd24gdXNlcm5hbWUgb24gbG9naW4gc2NyZWVuIGRpcmVjdGx5IHJldHVybnMgYW4gZXJyb3Igb3IgYWx3YXlzIGRpc3BsYXlzIHRoZSBwYXNzd29yZCBzY3JlZW4SrQEKFGRlZmF1bHRfcmVkaXJlY3RfdXJpGAogASgJQo4BkkGKATJpZGVmaW5lcyB3aGVyZSB0aGUgdXNlciB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gaWYgdGhlIGxvZ2luIGlzIHN0YXJ0ZWQgd2l0aG91dCBhcHAgY29udGV4dCAoZS5nLiBmcm9tIG1haWwpSh0iaHR0cHM6Ly9hY21lLmNvbS91aS9jb25zb2xlIhJKChdwYXNzd29yZF9jaGVja19saWZldGltZRgLIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbkIOkkELSgkiODY0MDAwcyISUAodZXh0ZXJuYWxfbG9naW5fY2hlY2tfbGlmZXRpbWUYDCABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb25CDpJBC0oJIjg2NDAwMHMiEkoKFm1mYV9pbml0X3NraXBfbGlmZXRpbWUYDSABKAsyGS5nb29nbGUucHJvdG9idWYuRHVyYXRpb25CD5JBDEoKIjI1OTIwMDBzIhJOChxzZWNvbmRfZmFjdG9yX2NoZWNrX2xpZmV0aW1lGA4gASgLMhkuZ29vZ2xlLnByb3RvYnVmLkR1cmF0aW9uQg2SQQpKCCI2NDgwMHMiEk0KG211bHRpX2ZhY3Rvcl9jaGVja19saWZldGltZRgPIAEoCzIZLmdvb2dsZS5wcm90b2J1Zi5EdXJhdGlvbkINkkEKSggiNDMyMDBzIhI7Cg5zZWNvbmRfZmFjdG9ycxgQIAMoDjIjLnppdGFkZWwucG9saWN5LnYxLlNlY29uZEZhY3RvclR5cGUSOQoNbXVsdGlfZmFjdG9ycxgRIAMoDjIiLnppdGFkZWwucG9saWN5LnYxLk11bHRpRmFjdG9yVHlwZRIwCgRpZHBzGBIgAygLMiIueml0YWRlbC5pZHAudjEuSURQTG9naW5Qb2xpY3lMaW5rEvABChZhbGxvd19kb21haW5fZGlzY292ZXJ5GBMgASgIQs8BkkHLATLIAUlmIHNldCB0byB0cnVlLCB0aGUgc3VmZml4IChAZG9tYWluLmNvbSkgb2YgYW4gdW5rbm93biB1c2VybmFtZSBpbnB1dCBvbiB0aGUgbG9naW4gc2NyZWVuIHdpbGwgYmUgbWF0Y2hlZCBhZ2FpbnN0IHRoZSBvcmcgZG9tYWlucyBhbmQgd2lsbCByZWRpcmVjdCB0byB0aGUgcmVnaXN0cmF0aW9uIG9mIHRoYXQgb3JnYW5pemF0aW9uIG9uIHN1Y2Nlc3MuEo0BChhkaXNhYmxlX2xvZ2luX3dpdGhfZW1haWwYFCABKAhCa5JBaDJmZGVmaW5lcyBpZiB0aGUgdXNlciBjYW4gYWRkaXRpb25hbGx5ICh0byB0aGUgbG9naW4gbmFtZSkgYmUgaWRlbnRpZmllZCBieSB0aGVpciB2ZXJpZmllZCBlbWFpbCBhZGRyZXNzEowBChhkaXNhYmxlX2xvZ2luX3dpdGhfcGhvbmUYFSABKAhCapJBZzJlZGVmaW5lcyBpZiB0aGUgdXNlciBjYW4gYWRkaXRpb25hbGx5ICh0byB0aGUgbG9naW4gbmFtZSkgYmUgaWRlbnRpZmllZCBieSB0aGVpciB2ZXJpZmllZCBwaG9uZSBudW1iZXISqwEKFGZvcmNlX21mYV9sb2NhbF9vbmx5GBYgASgIQowBkkGIATKFAWlmIGFjdGl2YXRlZCwgb25seSBsb2NhbCBhdXRoZW50aWNhdGVkIHVzZXJzIGFyZSBmb3JjZWQgdG8gdXNlIE1GQS4gQXV0aGVudGljYXRpb24gdGhyb3VnaCBJRFBzIHdvbid0IHByb21wdCBhIE1GQSBzdGVwIGluIHRoZSBsb2dpbi4i+wMKGFBhc3N3b3JkQ29tcGxleGl0eVBvbGljeRIqCgdkZXRhaWxzGAEgASgLMhkueml0YWRlbC52MS5PYmplY3REZXRhaWxzEhwKCm1pbl9sZW5ndGgYAiABKARCCJJBBUoDIjgiElUKDWhhc191cHBlcmNhc2UYAyABKAhCPpJBOzI5ZGVmaW5lcyBpZiB0aGUgcGFzc3dvcmQgTVVTVCBjb250YWluIGFuIHVwcGVyIGNhc2UgbGV0dGVyElMKDWhhc19sb3dlcmNhc2UYBCABKAhCPJJBOTI3ZGVmaW5lcyBpZiB0aGUgcGFzc3dvcmQgTVVTVCBjb250YWluIGEgbG93ZXJjYXNlIGxldHRlchJGCgpoYXNfbnVtYmVyGAUgASgIQjKSQS8yLWRlZmluZXMgaWYgdGhlIHBhc3N3b3JkIE1VU1QgY29udGFpbiBhIG51bWJlchJQCgpoYXNfc3ltYm9sGAYgASgIQjySQTkyN2RlZmluZXMgaWYgdGhlIHBhc3N3b3JkIE1VU1QgY29udGFpbiBhIHN5bWJvbC4gRS5nLiAiJCISTwoKaXNfZGVmYXVsdBgHIAEoCEI7kkE4MjZkZWZpbmVzIGlmIHRoZSBvcmdhbml6YXRpb24ncyBhZG1pbiBjaGFuZ2VkIHRoZSBwb2xpY3kimgEKEVBhc3N3b3JkQWdlUG9saWN5EioKB2RldGFpbHMYASABKAsyGS56aXRhZGVsLnYxLk9iamVjdERldGFpbHMSIAoMbWF4X2FnZV9kYXlzGAIgASgEQgqSQQdKBSIzNjUiEiMKEGV4cGlyZV93YXJuX2RheXMYAyABKARCCZJBBkoEIjEwIhISCgppc19kZWZhdWx0GAQgASgIIvgECg1Mb2Nrb3V0UG9saWN5EioKB2RldGFpbHMYASABKAsyGS56aXRhZGVsLnYxLk9iamVjdERldGFpbHMS9AEKFW1heF9wYXNzd29yZF9hdHRlbXB0cxgCIAEoBELUAZJB0AEyxwFNYXhpbXVtIHBhc3N3b3JkIGNoZWNrIGF0dGVtcHRzIGJlZm9yZSB0aGUgYWNjb3VudCBnZXRzIGxvY2tlZC4gQXR0ZW1wdHMgYXJlIHJlc2V0IGFzIHNvb24gYXMgdGhlIHBhc3N3b3JkIGlzIGVudGVyZWQgY29ycmVjdGx5IG9yIHRoZSBwYXNzd29yZCBpcyByZXNldC4gSWYgc2V0IHRvIDAgdGhlIGFjY291bnQgd2lsbCBuZXZlciBiZSBsb2NrZWQuSgQiMTAiEvIBChBtYXhfb3RwX2F0dGVtcHRzGAMgASgEQtcBkkHTATLKAU1heGltdW0gZmFpbGVkIGF0dGVtcHRzIGZvciBhIHNpbmdsZSBPVFAgdHlwZSAoVE9UUCwgU01TLCBFbWFpbCkgYmVmb3JlIHRoZSBhY2NvdW50IGdldHMgbG9ja2VkLiBBdHRlbXB0cyBhcmUgcmVzZXQgYXMgc29vbiBhcyB0aGUgT1RQIGlzIGVudGVyZWQgY29ycmVjdGx5LiBJZiBzZXQgdG8gMCB0aGUgYWNjb3VudCB3aWxsIG5ldmVyIGJlIGxvY2tlZC5KBCIxMCISTwoKaXNfZGVmYXVsdBgEIAEoCEI7kkE4MjZkZWZpbmVzIGlmIHRoZSBvcmdhbml6YXRpb24ncyBhZG1pbiBjaGFuZ2VkIHRoZSBwb2xpY3ki7AUKDVByaXZhY3lQb2xpY3kSKgoHZGV0YWlscxgBIAEoCzIZLnppdGFkZWwudjEuT2JqZWN0RGV0YWlscxJICgh0b3NfbGluaxgCIAEoCUI2kkEzSjEiaHR0cHM6Ly96aXRhZGVsLmNvbS9kb2NzL2xlZ2FsL3Rlcm1zLW9mLXNlcnZpY2UiEkoKDHByaXZhY3lfbGluaxgDIAEoCUI0kkExSi8iaHR0cHM6Ly96aXRhZGVsLmNvbS9kb2NzL2xlZ2FsL3ByaXZhY3ktcG9saWN5IhISCgppc19kZWZhdWx0GAQgASgIEkcKCWhlbHBfbGluaxgFIAEoCUI0kkExSi8iaHR0cHM6Ly96aXRhZGVsLmNvbS9kb2NzL21hbnVhbHMvaW50cm9kdWN0aW9uIhJgCg1zdXBwb3J0X2VtYWlsGAYgASgJQkmSQTkyHWhlbHAgLyBzdXBwb3J0IGVtYWlsIGFkZHJlc3MuShgic3VwcG9ydC1lbWFpbEB0ZXN0LmNvbSL6QgpyCBjAAtABAWABEmUKCWRvY3NfbGluaxgHIAEoCUJSkkFPMjFMaW5rIHRvIGRvY3VtZW50YXRpb24gdG8gYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUuShoiaHR0cHM6Ly96aXRhZGVsLmNvbS9kb2NzIhJ/CgtjdXN0b21fbGluaxgIIAEoCUJqkkFnMkxMaW5rIHRvIGFuIGV4dGVybmFsIHJlc291cmNlIHRoYXQgd2lsbCBiZSBhdmFpbGFibGUgdG8gdXNlcnMgaW4gdGhlIGNvbnNvbGUuShciaHR0cHM6Ly9leHRlcm5hbC5saW5rIhJyChBjdXN0b21fbGlua190ZXh0GAkgASgJQliSQVUyR1RoZSBidXR0b24gdGV4dCB0aGF0IHdvdWxkIGJlIHNob3duIGluIGNvbnNvbGUgcG9pbnRpbmcgdG8gY3VzdG9tIGxpbmsuSgoiRXh0ZXJuYWwiIs4BChJOb3RpZmljYXRpb25Qb2xpY3kSKgoHZGV0YWlscxgBIAEoCzIZLnppdGFkZWwudjEuT2JqZWN0RGV0YWlscxISCgppc19kZWZhdWx0GAIgASgIEngKD3Bhc3N3b3JkX2NoYW5nZRgDIAEoCEJfkkFcMlpJZiBzZXQgdG8gdHJ1ZSB0aGUgdXNlcnMgd2lsbCBnZXQgYSBub3RpZmljYXRpb24gd2hlbmV2ZXIgdGhlaXIgcGFzc3dvcmQgaGFzIGJlZW4gY2hhbmdlZC4qZwoJVGhlbWVNb2RlEhoKFlRIRU1FX01PREVfVU5TUEVDSUZJRUQQABITCg9USEVNRV9NT0RFX0FVVE8QARITCg9USEVNRV9NT0RFX0RBUksQAhIUChBUSEVNRV9NT0RFX0xJR0hUEAMqsAEKEFNlY29uZEZhY3RvclR5cGUSIgoeU0VDT05EX0ZBQ1RPUl9UWVBFX1VOU1BFQ0lGSUVEEAASGgoWU0VDT05EX0ZBQ1RPUl9UWVBFX09UUBABEhoKFlNFQ09ORF9GQUNUT1JfVFlQRV9VMkYQAhIgChxTRUNPTkRfRkFDVE9SX1RZUEVfT1RQX0VNQUlMEAMSHgoaU0VDT05EX0ZBQ1RPUl9UWVBFX09UUF9TTVMQBCphCg9NdWx0aUZhY3RvclR5cGUSIQodTVVMVElfRkFDVE9SX1RZUEVfVU5TUEVDSUZJRUQQABIrCidNVUxUSV9GQUNUT1JfVFlQRV9VMkZfV0lUSF9WRVJJRklDQVRJT04QASpUChBQYXNzd29yZGxlc3NUeXBlEiEKHVBBU1NXT1JETEVTU19UWVBFX05PVF9BTExPV0VEEAASHQoZUEFTU1dPUkRMRVNTX1RZUEVfQUxMT1dFRBABQixaKmdpdGh1Yi5jb20veml0YWRlbC96aXRhZGVsL3BrZy9ncnBjL3BvbGljeWIGcHJvdG8z", [file_zitadel_object, file_zitadel_idp, file_google_protobuf_duration, file_protoc_gen_openapiv2_options_annotations, file_validate_validate]);

/**
 * deprecated: please use DomainPolicy instead
 *
 * @generated from message zitadel.policy.v1.OrgIAMPolicy
 */
export type OrgIAMPolicy = Message<"zitadel.policy.v1.OrgIAMPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool user_login_must_be_domain = 2;
   */
  userLoginMustBeDomain: boolean;

  /**
   * @generated from field: bool is_default = 3;
   */
  isDefault: boolean;
};

/**
 * Describes the message zitadel.policy.v1.OrgIAMPolicy.
 * Use `create(OrgIAMPolicySchema)` to create a new message.
 */
export const OrgIAMPolicySchema: GenMessage<OrgIAMPolicy> = /*@__PURE__*/
  messageDesc(file_zitadel_policy, 0);

/**
 * @generated from message zitadel.policy.v1.DomainPolicy
 */
export type DomainPolicy = Message<"zitadel.policy.v1.DomainPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool user_login_must_be_domain = 2;
   */
  userLoginMustBeDomain: boolean;

  /**
   * @generated from field: bool is_default = 3;
   */
  isDefault: boolean;

  /**
   * @generated from field: bool validate_org_domains = 4;
   */
  validateOrgDomains: boolean;

  /**
   * @generated from field: bool smtp_sender_address_matches_instance_domain = 5;
   */
  smtpSenderAddressMatchesInstanceDomain: boolean;
};

/**
 * Describes the message zitadel.policy.v1.DomainPolicy.
 * Use `create(DomainPolicySchema)` to create a new message.
 */
export const DomainPolicySchema: GenMessage<DomainPolicy> = /*@__PURE__*/
  messageDesc(file_zitadel_policy, 1);

/**
 * @generated from message zitadel.policy.v1.LabelPolicy
 */
export type LabelPolicy = Message<"zitadel.policy.v1.LabelPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * hex value for primary color
   *
   * @generated from field: string primary_color = 2;
   */
  primaryColor: string;

  /**
   * defines if the organization's admin changed the policy
   *
   * @generated from field: bool is_default = 4;
   */
  isDefault: boolean;

  /**
   * hides the org suffix on the login form if the scope \"urn:zitadel:iam:org:domain:primary:{domainname}\" is set
   *
   * @generated from field: bool hide_login_name_suffix = 5;
   */
  hideLoginNameSuffix: boolean;

  /**
   * hex value for secondary color
   *
   * @generated from field: string warn_color = 6;
   */
  warnColor: string;

  /**
   * hex value for background color
   *
   * @generated from field: string background_color = 7;
   */
  backgroundColor: string;

  /**
   * hex value for font color
   *
   * @generated from field: string font_color = 8;
   */
  fontColor: string;

  /**
   * hex value for primary color dark theme
   *
   * @generated from field: string primary_color_dark = 9;
   */
  primaryColorDark: string;

  /**
   * hex value for background color dark theme
   *
   * @generated from field: string background_color_dark = 10;
   */
  backgroundColorDark: string;

  /**
   * hex value for warning color dark theme
   *
   * @generated from field: string warn_color_dark = 11;
   */
  warnColorDark: string;

  /**
   * hex value for font color dark theme
   *
   * @generated from field: string font_color_dark = 12;
   */
  fontColorDark: string;

  /**
   * @generated from field: bool disable_watermark = 13;
   */
  disableWatermark: boolean;

  /**
   * @generated from field: string logo_url = 14;
   */
  logoUrl: string;

  /**
   * @generated from field: string icon_url = 15;
   */
  iconUrl: string;

  /**
   * @generated from field: string logo_url_dark = 16;
   */
  logoUrlDark: string;

  /**
   * @generated from field: string icon_url_dark = 17;
   */
  iconUrlDark: string;

  /**
   * @generated from field: string font_url = 18;
   */
  fontUrl: string;

  /**
   * @generated from field: zitadel.policy.v1.ThemeMode theme_mode = 19;
   */
  themeMode: ThemeMode;
};

/**
 * Describes the message zitadel.policy.v1.LabelPolicy.
 * Use `create(LabelPolicySchema)` to create a new message.
 */
export const LabelPolicySchema: GenMessage<LabelPolicy> = /*@__PURE__*/
  messageDesc(file_zitadel_policy, 2);

/**
 * @generated from message zitadel.policy.v1.LoginPolicy
 */
export type LoginPolicy = Message<"zitadel.policy.v1.LoginPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool allow_username_password = 2;
   */
  allowUsernamePassword: boolean;

  /**
   * @generated from field: bool allow_register = 3;
   */
  allowRegister: boolean;

  /**
   * @generated from field: bool allow_external_idp = 4;
   */
  allowExternalIdp: boolean;

  /**
   * @generated from field: bool force_mfa = 5;
   */
  forceMfa: boolean;

  /**
   * @generated from field: zitadel.policy.v1.PasswordlessType passwordless_type = 6;
   */
  passwordlessType: PasswordlessType;

  /**
   * @generated from field: bool is_default = 7;
   */
  isDefault: boolean;

  /**
   * @generated from field: bool hide_password_reset = 8;
   */
  hidePasswordReset: boolean;

  /**
   * @generated from field: bool ignore_unknown_usernames = 9;
   */
  ignoreUnknownUsernames: boolean;

  /**
   * @generated from field: string default_redirect_uri = 10;
   */
  defaultRedirectUri: string;

  /**
   * @generated from field: google.protobuf.Duration password_check_lifetime = 11;
   */
  passwordCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration external_login_check_lifetime = 12;
   */
  externalLoginCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration mfa_init_skip_lifetime = 13;
   */
  mfaInitSkipLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration second_factor_check_lifetime = 14;
   */
  secondFactorCheckLifetime?: Duration;

  /**
   * @generated from field: google.protobuf.Duration multi_factor_check_lifetime = 15;
   */
  multiFactorCheckLifetime?: Duration;

  /**
   * @generated from field: repeated zitadel.policy.v1.SecondFactorType second_factors = 16;
   */
  secondFactors: SecondFactorType[];

  /**
   * @generated from field: repeated zitadel.policy.v1.MultiFactorType multi_factors = 17;
   */
  multiFactors: MultiFactorType[];

  /**
   * @generated from field: repeated zitadel.idp.v1.IDPLoginPolicyLink idps = 18;
   */
  idps: IDPLoginPolicyLink[];

  /**
   * If set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organization on success.
   *
   * @generated from field: bool allow_domain_discovery = 19;
   */
  allowDomainDiscovery: boolean;

  /**
   * @generated from field: bool disable_login_with_email = 20;
   */
  disableLoginWithEmail: boolean;

  /**
   * @generated from field: bool disable_login_with_phone = 21;
   */
  disableLoginWithPhone: boolean;

  /**
   * @generated from field: bool force_mfa_local_only = 22;
   */
  forceMfaLocalOnly: boolean;
};

/**
 * Describes the message zitadel.policy.v1.LoginPolicy.
 * Use `create(LoginPolicySchema)` to create a new message.
 */
export const LoginPolicySchema: GenMessage<LoginPolicy> = /*@__PURE__*/
  messageDesc(file_zitadel_policy, 3);

/**
 * @generated from message zitadel.policy.v1.PasswordComplexityPolicy
 */
export type PasswordComplexityPolicy = Message<"zitadel.policy.v1.PasswordComplexityPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: uint64 min_length = 2;
   */
  minLength: bigint;

  /**
   * @generated from field: bool has_uppercase = 3;
   */
  hasUppercase: boolean;

  /**
   * @generated from field: bool has_lowercase = 4;
   */
  hasLowercase: boolean;

  /**
   * @generated from field: bool has_number = 5;
   */
  hasNumber: boolean;

  /**
   * @generated from field: bool has_symbol = 6;
   */
  hasSymbol: boolean;

  /**
   * @generated from field: bool is_default = 7;
   */
  isDefault: boolean;
};

/**
 * Describes the message zitadel.policy.v1.PasswordComplexityPolicy.
 * Use `create(PasswordComplexityPolicySchema)` to create a new message.
 */
export const PasswordComplexityPolicySchema: GenMessage<PasswordComplexityPolicy> = /*@__PURE__*/
  messageDesc(file_zitadel_policy, 4);

/**
 * @generated from message zitadel.policy.v1.PasswordAgePolicy
 */
export type PasswordAgePolicy = Message<"zitadel.policy.v1.PasswordAgePolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * Amount of days after which a password will expire. The user will be forced to change the password on the following authentication.
   *
   * @generated from field: uint64 max_age_days = 2;
   */
  maxAgeDays: bigint;

  /**
   * Amount of days after which the user should be notified of the upcoming expiry. ZITADEL will not notify the user.
   *
   * @generated from field: uint64 expire_warn_days = 3;
   */
  expireWarnDays: bigint;

  /**
   * If true, the returned values represent the instance settings, e.g. by an organization without custom settings.
   *
   * @generated from field: bool is_default = 4;
   */
  isDefault: boolean;
};

/**
 * Describes the message zitadel.policy.v1.PasswordAgePolicy.
 * Use `create(PasswordAgePolicySchema)` to create a new message.
 */
export const PasswordAgePolicySchema: GenMessage<PasswordAgePolicy> = /*@__PURE__*/
  messageDesc(file_zitadel_policy, 5);

/**
 * @generated from message zitadel.policy.v1.LockoutPolicy
 */
export type LockoutPolicy = Message<"zitadel.policy.v1.LockoutPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: uint64 max_password_attempts = 2;
   */
  maxPasswordAttempts: bigint;

  /**
   * @generated from field: uint64 max_otp_attempts = 3;
   */
  maxOtpAttempts: bigint;

  /**
   * @generated from field: bool is_default = 4;
   */
  isDefault: boolean;
};

/**
 * Describes the message zitadel.policy.v1.LockoutPolicy.
 * Use `create(LockoutPolicySchema)` to create a new message.
 */
export const LockoutPolicySchema: GenMessage<LockoutPolicy> = /*@__PURE__*/
  messageDesc(file_zitadel_policy, 6);

/**
 * @generated from message zitadel.policy.v1.PrivacyPolicy
 */
export type PrivacyPolicy = Message<"zitadel.policy.v1.PrivacyPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: string tos_link = 2;
   */
  tosLink: string;

  /**
   * @generated from field: string privacy_link = 3;
   */
  privacyLink: string;

  /**
   * @generated from field: bool is_default = 4;
   */
  isDefault: boolean;

  /**
   * @generated from field: string help_link = 5;
   */
  helpLink: string;

  /**
   * @generated from field: string support_email = 6;
   */
  supportEmail: string;

  /**
   * @generated from field: string docs_link = 7;
   */
  docsLink: string;

  /**
   * @generated from field: string custom_link = 8;
   */
  customLink: string;

  /**
   * @generated from field: string custom_link_text = 9;
   */
  customLinkText: string;
};

/**
 * Describes the message zitadel.policy.v1.PrivacyPolicy.
 * Use `create(PrivacyPolicySchema)` to create a new message.
 */
export const PrivacyPolicySchema: GenMessage<PrivacyPolicy> = /*@__PURE__*/
  messageDesc(file_zitadel_policy, 7);

/**
 * @generated from message zitadel.policy.v1.NotificationPolicy
 */
export type NotificationPolicy = Message<"zitadel.policy.v1.NotificationPolicy"> & {
  /**
   * @generated from field: zitadel.v1.ObjectDetails details = 1;
   */
  details?: ObjectDetails;

  /**
   * @generated from field: bool is_default = 2;
   */
  isDefault: boolean;

  /**
   * @generated from field: bool password_change = 3;
   */
  passwordChange: boolean;
};

/**
 * Describes the message zitadel.policy.v1.NotificationPolicy.
 * Use `create(NotificationPolicySchema)` to create a new message.
 */
export const NotificationPolicySchema: GenMessage<NotificationPolicy> = /*@__PURE__*/
  messageDesc(file_zitadel_policy, 8);

/**
 * @generated from enum zitadel.policy.v1.ThemeMode
 */
export enum ThemeMode {
  /**
   * @generated from enum value: THEME_MODE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: THEME_MODE_AUTO = 1;
   */
  AUTO = 1,

  /**
   * @generated from enum value: THEME_MODE_DARK = 2;
   */
  DARK = 2,

  /**
   * @generated from enum value: THEME_MODE_LIGHT = 3;
   */
  LIGHT = 3,
}

/**
 * Describes the enum zitadel.policy.v1.ThemeMode.
 */
export const ThemeModeSchema: GenEnum<ThemeMode> = /*@__PURE__*/
  enumDesc(file_zitadel_policy, 0);

/**
 * @generated from enum zitadel.policy.v1.SecondFactorType
 */
export enum SecondFactorType {
  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * SECOND_FACTOR_TYPE_OTP is the type for TOTP
   *
   * @generated from enum value: SECOND_FACTOR_TYPE_OTP = 1;
   */
  OTP = 1,

  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_U2F = 2;
   */
  U2F = 2,

  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_OTP_EMAIL = 3;
   */
  OTP_EMAIL = 3,

  /**
   * @generated from enum value: SECOND_FACTOR_TYPE_OTP_SMS = 4;
   */
  OTP_SMS = 4,
}

/**
 * Describes the enum zitadel.policy.v1.SecondFactorType.
 */
export const SecondFactorTypeSchema: GenEnum<SecondFactorType> = /*@__PURE__*/
  enumDesc(file_zitadel_policy, 1);

/**
 * @generated from enum zitadel.policy.v1.MultiFactorType
 */
export enum MultiFactorType {
  /**
   * @generated from enum value: MULTI_FACTOR_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: MULTI_FACTOR_TYPE_U2F_WITH_VERIFICATION = 1;
   */
  U2F_WITH_VERIFICATION = 1,
}

/**
 * Describes the enum zitadel.policy.v1.MultiFactorType.
 */
export const MultiFactorTypeSchema: GenEnum<MultiFactorType> = /*@__PURE__*/
  enumDesc(file_zitadel_policy, 2);

/**
 * @generated from enum zitadel.policy.v1.PasswordlessType
 */
export enum PasswordlessType {
  /**
   * @generated from enum value: PASSWORDLESS_TYPE_NOT_ALLOWED = 0;
   */
  NOT_ALLOWED = 0,

  /**
   * PLANNED: PASSWORDLESS_TYPE_WITH_CERT
   *
   * @generated from enum value: PASSWORDLESS_TYPE_ALLOWED = 1;
   */
  ALLOWED = 1,
}

/**
 * Describes the enum zitadel.policy.v1.PasswordlessType.
 */
export const PasswordlessTypeSchema: GenEnum<PasswordlessType> = /*@__PURE__*/
  enumDesc(file_zitadel_policy, 3);
