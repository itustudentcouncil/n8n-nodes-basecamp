// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               unknown
// source: google/cloud/essentialcontacts/v1/enums.proto

/* eslint-disable */

export const protobufPackage = "google.cloud.essentialcontacts.v1";

/**
 * The notification categories that an essential contact can be subscribed to.
 * Each notification will be categorized by the sender into one of the following
 * categories. All contacts that are subscribed to that category will receive
 * the notification.
 */
export enum NotificationCategory {
  /** NOTIFICATION_CATEGORY_UNSPECIFIED - Notification category is unrecognized or unspecified. */
  NOTIFICATION_CATEGORY_UNSPECIFIED = 0,
  /**
   * ALL - All notifications related to the resource, including notifications
   * pertaining to categories added in the future.
   */
  ALL = 2,
  /** SUSPENSION - Notifications related to imminent account suspension. */
  SUSPENSION = 3,
  /**
   * SECURITY - Notifications related to security/privacy incidents, notifications, and
   * vulnerabilities.
   */
  SECURITY = 5,
  /**
   * TECHNICAL - Notifications related to technical events and issues such as outages,
   * errors, or bugs.
   */
  TECHNICAL = 6,
  /**
   * BILLING - Notifications related to billing and payments notifications, price updates,
   * errors, or credits.
   */
  BILLING = 7,
  /**
   * LEGAL - Notifications related to enforcement actions, regulatory compliance, or
   * government notices.
   */
  LEGAL = 8,
  /**
   * PRODUCT_UPDATES - Notifications related to new versions, product terms updates, or
   * deprecations.
   */
  PRODUCT_UPDATES = 9,
  /**
   * TECHNICAL_INCIDENTS - Child category of TECHNICAL. If assigned, technical incident notifications
   * will go to these contacts instead of TECHNICAL.
   */
  TECHNICAL_INCIDENTS = 10,
  UNRECOGNIZED = -1,
}

export function notificationCategoryFromJSON(object: any): NotificationCategory {
  switch (object) {
    case 0:
    case "NOTIFICATION_CATEGORY_UNSPECIFIED":
      return NotificationCategory.NOTIFICATION_CATEGORY_UNSPECIFIED;
    case 2:
    case "ALL":
      return NotificationCategory.ALL;
    case 3:
    case "SUSPENSION":
      return NotificationCategory.SUSPENSION;
    case 5:
    case "SECURITY":
      return NotificationCategory.SECURITY;
    case 6:
    case "TECHNICAL":
      return NotificationCategory.TECHNICAL;
    case 7:
    case "BILLING":
      return NotificationCategory.BILLING;
    case 8:
    case "LEGAL":
      return NotificationCategory.LEGAL;
    case 9:
    case "PRODUCT_UPDATES":
      return NotificationCategory.PRODUCT_UPDATES;
    case 10:
    case "TECHNICAL_INCIDENTS":
      return NotificationCategory.TECHNICAL_INCIDENTS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NotificationCategory.UNRECOGNIZED;
  }
}

export function notificationCategoryToJSON(object: NotificationCategory): string {
  switch (object) {
    case NotificationCategory.NOTIFICATION_CATEGORY_UNSPECIFIED:
      return "NOTIFICATION_CATEGORY_UNSPECIFIED";
    case NotificationCategory.ALL:
      return "ALL";
    case NotificationCategory.SUSPENSION:
      return "SUSPENSION";
    case NotificationCategory.SECURITY:
      return "SECURITY";
    case NotificationCategory.TECHNICAL:
      return "TECHNICAL";
    case NotificationCategory.BILLING:
      return "BILLING";
    case NotificationCategory.LEGAL:
      return "LEGAL";
    case NotificationCategory.PRODUCT_UPDATES:
      return "PRODUCT_UPDATES";
    case NotificationCategory.TECHNICAL_INCIDENTS:
      return "TECHNICAL_INCIDENTS";
    case NotificationCategory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/**
 * A contact's validation state indicates whether or not it is the correct
 * contact to be receiving notifications for a particular resource.
 */
export enum ValidationState {
  /** VALIDATION_STATE_UNSPECIFIED - The validation state is unknown or unspecified. */
  VALIDATION_STATE_UNSPECIFIED = 0,
  /**
   * VALID - The contact is marked as valid. This is usually done manually by the
   * contact admin. All new contacts begin in the valid state.
   */
  VALID = 1,
  /**
   * INVALID - The contact is considered invalid. This may become the state if the
   * contact's email is found to be unreachable.
   */
  INVALID = 2,
  UNRECOGNIZED = -1,
}

export function validationStateFromJSON(object: any): ValidationState {
  switch (object) {
    case 0:
    case "VALIDATION_STATE_UNSPECIFIED":
      return ValidationState.VALIDATION_STATE_UNSPECIFIED;
    case 1:
    case "VALID":
      return ValidationState.VALID;
    case 2:
    case "INVALID":
      return ValidationState.INVALID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ValidationState.UNRECOGNIZED;
  }
}

export function validationStateToJSON(object: ValidationState): string {
  switch (object) {
    case ValidationState.VALIDATION_STATE_UNSPECIFIED:
      return "VALIDATION_STATE_UNSPECIFIED";
    case ValidationState.VALID:
      return "VALID";
    case ValidationState.INVALID:
      return "INVALID";
    case ValidationState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
