import { IAuthenticateGeneric, ICredentialType, INodeProperties } from "n8n-workflow";
export declare class Zitadel implements ICredentialType {
    name: string;
    displayName: string;
    documentationUrl: string;
    properties: INodeProperties[];
    authenticate: IAuthenticateGeneric;
}
