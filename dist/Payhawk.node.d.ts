import { INodeType } from "n8n-workflow";
import { DefaultOperationParser, OperationContext } from "@devlikeapro/n8n-openapi-node";
import { OpenAPIV3 } from "openapi-types";
export declare class CustomOperationParser extends DefaultOperationParser {
    name(operation: OpenAPIV3.OperationObject, context: OperationContext): string;
}
export declare class Payhawk implements INodeType {
    description: {
        name: string;
        displayName: string;
        icon: string;
        description: string;
        defaults: {
            name: string;
        };
        properties: import("n8n-workflow").INodeProperties[];
        credentials: {
            name: string;
            required: boolean;
        }[];
        requestDefaults: {
            headers: {
                Accept: string;
                "Content-Type": string;
            };
            baseURL: string;
        };
        version: number;
        group: string[];
        subtitle: string;
        inputs: string[];
        outputs: string[];
    };
}
