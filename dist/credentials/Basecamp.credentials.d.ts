import type { ICredentialType, INodeProperties } from "n8n-workflow";
export declare class Basecamp implements ICredentialType {
    name: string;
    extends: string[];
    displayName: string;
    documentationUrl: string;
    properties: INodeProperties[];
}