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
// @generated from file google/chat/v1/contextual_addon.proto (package google.chat.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { WidgetMarkup, WidgetMarkup_OnClick } from "./widgets_pb";
import { file_google_chat_v1_widgets } from "./widgets_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file google/chat/v1/contextual_addon.proto.
 */
export const file_google_chat_v1_contextual_addon: GenFile = /*@__PURE__*/
  fileDesc("CiVnb29nbGUvY2hhdC92MS9jb250ZXh0dWFsX2FkZG9uLnByb3RvEg5nb29nbGUuY2hhdC52MSKKBQoVQ29udGV4dHVhbEFkZE9uTWFya3VwGvAECgRDYXJkEkUKBmhlYWRlchgBIAEoCzI1Lmdvb2dsZS5jaGF0LnYxLkNvbnRleHR1YWxBZGRPbk1hcmt1cC5DYXJkLkNhcmRIZWFkZXISRAoIc2VjdGlvbnMYAiADKAsyMi5nb29nbGUuY2hhdC52MS5Db250ZXh0dWFsQWRkT25NYXJrdXAuQ2FyZC5TZWN0aW9uEksKDGNhcmRfYWN0aW9ucxgDIAMoCzI1Lmdvb2dsZS5jaGF0LnYxLkNvbnRleHR1YWxBZGRPbk1hcmt1cC5DYXJkLkNhcmRBY3Rpb24SDAoEbmFtZRgEIAEoCRrZAQoKQ2FyZEhlYWRlchINCgV0aXRsZRgBIAEoCRIQCghzdWJ0aXRsZRgCIAEoCRJVCgtpbWFnZV9zdHlsZRgDIAEoDjJALmdvb2dsZS5jaGF0LnYxLkNvbnRleHR1YWxBZGRPbk1hcmt1cC5DYXJkLkNhcmRIZWFkZXIuSW1hZ2VTdHlsZRIRCglpbWFnZV91cmwYBCABKAkiQAoKSW1hZ2VTdHlsZRIbChdJTUFHRV9TVFlMRV9VTlNQRUNJRklFRBAAEgkKBUlNQUdFEAESCgoGQVZBVEFSEAIaSAoHU2VjdGlvbhIOCgZoZWFkZXIYASABKAkSLQoHd2lkZ2V0cxgCIAMoCzIcLmdvb2dsZS5jaGF0LnYxLldpZGdldE1hcmt1cBpaCgpDYXJkQWN0aW9uEhQKDGFjdGlvbl9sYWJlbBgBIAEoCRI2Cghvbl9jbGljaxgCIAEoCzIkLmdvb2dsZS5jaGF0LnYxLldpZGdldE1hcmt1cC5PbkNsaWNrQq0BChJjb20uZ29vZ2xlLmNoYXQudjFCFENvbnRleHR1YWxBZGRPblByb3RvUAFaLGNsb3VkLmdvb2dsZS5jb20vZ28vY2hhdC9hcGl2MS9jaGF0cGI7Y2hhdHBiogILRFlOQVBJUHJvdG+qAhNHb29nbGUuQXBwcy5DaGF0LlYxygITR29vZ2xlXEFwcHNcQ2hhdFxWMeoCFkdvb2dsZTo6QXBwczo6Q2hhdDo6VjFiBnByb3RvMw", [file_google_chat_v1_widgets]);

/**
 * The markup for developers to specify the contents of a contextual AddOn.
 *
 * @generated from message google.chat.v1.ContextualAddOnMarkup
 */
export type ContextualAddOnMarkup = Message<"google.chat.v1.ContextualAddOnMarkup"> & {
};

/**
 * Describes the message google.chat.v1.ContextualAddOnMarkup.
 * Use `create(ContextualAddOnMarkupSchema)` to create a new message.
 */
export const ContextualAddOnMarkupSchema: GenMessage<ContextualAddOnMarkup> = /*@__PURE__*/
  messageDesc(file_google_chat_v1_contextual_addon, 0);

/**
 * A card is a UI element that can contain UI widgets such as text and
 * images.
 *
 * @generated from message google.chat.v1.ContextualAddOnMarkup.Card
 */
export type ContextualAddOnMarkup_Card = Message<"google.chat.v1.ContextualAddOnMarkup.Card"> & {
  /**
   * The header of the card. A header usually contains a title and an image.
   *
   * @generated from field: google.chat.v1.ContextualAddOnMarkup.Card.CardHeader header = 1;
   */
  header?: ContextualAddOnMarkup_Card_CardHeader;

  /**
   * Sections are separated by a line divider.
   *
   * @generated from field: repeated google.chat.v1.ContextualAddOnMarkup.Card.Section sections = 2;
   */
  sections: ContextualAddOnMarkup_Card_Section[];

  /**
   * The actions of this card.
   *
   * @generated from field: repeated google.chat.v1.ContextualAddOnMarkup.Card.CardAction card_actions = 3;
   */
  cardActions: ContextualAddOnMarkup_Card_CardAction[];

  /**
   * Name of the card.
   *
   * @generated from field: string name = 4;
   */
  name: string;
};

/**
 * Describes the message google.chat.v1.ContextualAddOnMarkup.Card.
 * Use `create(ContextualAddOnMarkup_CardSchema)` to create a new message.
 */
export const ContextualAddOnMarkup_CardSchema: GenMessage<ContextualAddOnMarkup_Card> = /*@__PURE__*/
  messageDesc(file_google_chat_v1_contextual_addon, 0, 0);

/**
 * @generated from message google.chat.v1.ContextualAddOnMarkup.Card.CardHeader
 */
export type ContextualAddOnMarkup_Card_CardHeader = Message<"google.chat.v1.ContextualAddOnMarkup.Card.CardHeader"> & {
  /**
   * The title must be specified. The header has a fixed height: if both a
   * title and subtitle is specified, each takes up one line. If only the
   * title is specified, it takes up both lines.
   *
   * @generated from field: string title = 1;
   */
  title: string;

  /**
   * The subtitle of the card header.
   *
   * @generated from field: string subtitle = 2;
   */
  subtitle: string;

  /**
   * The image's type (for example, square border or circular border).
   *
   * @generated from field: google.chat.v1.ContextualAddOnMarkup.Card.CardHeader.ImageStyle image_style = 3;
   */
  imageStyle: ContextualAddOnMarkup_Card_CardHeader_ImageStyle;

  /**
   * The URL of the image in the card header.
   *
   * @generated from field: string image_url = 4;
   */
  imageUrl: string;
};

/**
 * Describes the message google.chat.v1.ContextualAddOnMarkup.Card.CardHeader.
 * Use `create(ContextualAddOnMarkup_Card_CardHeaderSchema)` to create a new message.
 */
export const ContextualAddOnMarkup_Card_CardHeaderSchema: GenMessage<ContextualAddOnMarkup_Card_CardHeader> = /*@__PURE__*/
  messageDesc(file_google_chat_v1_contextual_addon, 0, 0, 0);

/**
 * @generated from enum google.chat.v1.ContextualAddOnMarkup.Card.CardHeader.ImageStyle
 */
export enum ContextualAddOnMarkup_Card_CardHeader_ImageStyle {
  /**
   * @generated from enum value: IMAGE_STYLE_UNSPECIFIED = 0;
   */
  IMAGE_STYLE_UNSPECIFIED = 0,

  /**
   * Square border.
   *
   * @generated from enum value: IMAGE = 1;
   */
  IMAGE = 1,

  /**
   * Circular border.
   *
   * @generated from enum value: AVATAR = 2;
   */
  AVATAR = 2,
}

/**
 * Describes the enum google.chat.v1.ContextualAddOnMarkup.Card.CardHeader.ImageStyle.
 */
export const ContextualAddOnMarkup_Card_CardHeader_ImageStyleSchema: GenEnum<ContextualAddOnMarkup_Card_CardHeader_ImageStyle> = /*@__PURE__*/
  enumDesc(file_google_chat_v1_contextual_addon, 0, 0, 0, 0);

/**
 * A section contains a collection of widgets that are rendered
 * (vertically) in the order that they are specified. Across all platforms,
 * cards have a narrow fixed width, so
 * there's currently no need for layout properties (for example, float).
 *
 * @generated from message google.chat.v1.ContextualAddOnMarkup.Card.Section
 */
export type ContextualAddOnMarkup_Card_Section = Message<"google.chat.v1.ContextualAddOnMarkup.Card.Section"> & {
  /**
   * The header of the section. Formatted text is
   * supported. For more information
   * about formatting text, see
   * [Formatting text in Google Chat
   * apps](https://developers.google.com/workspace/chat/format-messages#card-formatting)
   * and
   * [Formatting
   * text in Google Workspace
   * Add-ons](https://developers.google.com/apps-script/add-ons/concepts/widgets#text_formatting).
   *
   * @generated from field: string header = 1;
   */
  header: string;

  /**
   * A section must contain at least one widget.
   *
   * @generated from field: repeated google.chat.v1.WidgetMarkup widgets = 2;
   */
  widgets: WidgetMarkup[];
};

/**
 * Describes the message google.chat.v1.ContextualAddOnMarkup.Card.Section.
 * Use `create(ContextualAddOnMarkup_Card_SectionSchema)` to create a new message.
 */
export const ContextualAddOnMarkup_Card_SectionSchema: GenMessage<ContextualAddOnMarkup_Card_Section> = /*@__PURE__*/
  messageDesc(file_google_chat_v1_contextual_addon, 0, 0, 1);

/**
 * A card action is
 * the action associated with the card. For an invoice card, a
 * typical action would be: delete invoice, email invoice or open the
 * invoice in browser.
 *
 * Not supported by Google Chat apps.
 *
 * @generated from message google.chat.v1.ContextualAddOnMarkup.Card.CardAction
 */
export type ContextualAddOnMarkup_Card_CardAction = Message<"google.chat.v1.ContextualAddOnMarkup.Card.CardAction"> & {
  /**
   * The label used to be displayed in the action menu item.
   *
   * @generated from field: string action_label = 1;
   */
  actionLabel: string;

  /**
   * The onclick action for this action item.
   *
   * @generated from field: google.chat.v1.WidgetMarkup.OnClick on_click = 2;
   */
  onClick?: WidgetMarkup_OnClick;
};

/**
 * Describes the message google.chat.v1.ContextualAddOnMarkup.Card.CardAction.
 * Use `create(ContextualAddOnMarkup_Card_CardActionSchema)` to create a new message.
 */
export const ContextualAddOnMarkup_Card_CardActionSchema: GenMessage<ContextualAddOnMarkup_Card_CardAction> = /*@__PURE__*/
  messageDesc(file_google_chat_v1_contextual_addon, 0, 0, 2);
