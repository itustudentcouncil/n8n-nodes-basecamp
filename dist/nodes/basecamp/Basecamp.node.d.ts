import { IExecuteFunctions, INodeType } from "n8n-workflow";
export declare class Basecamp implements INodeType {
    description: {
        description: string;
        name: string;
        displayName: string;
        icon: string;
        defaults: {
            name: string;
        };
        properties: ({
            displayName: string;
            name: string;
            type: "options";
            noDataExpression: boolean;
            displayOptions: {
                show: {
                    resource: string[];
                };
            };
            options: {
                name: string;
                value: any;
            }[];
            default: any;
        } | {
            displayName: string;
            name: string;
            noDataExpression: boolean;
            type: "options";
            default: string;
            options: {
                name: string;
                value: string;
            }[];
        } | {
            displayName: string;
            description: string;
            name: string;
            type: "number";
            required: boolean;
            default: number;
            displayOptions: {
                show: {
                    operation: string[];
                };
            };
        } | {
            displayName: string;
            description: string;
            name: string;
            type: "json";
            required: boolean;
            default: {};
            displayOptions: {
                show: {
                    operation: string[];
                };
            };
        })[];
        credentials: {
            name: string;
            required: boolean;
        }[];
        version: number;
        group: string[];
        subtitle: string;
        inputs: string[];
        outputs: string[];
    };
    execute(this: IExecuteFunctions): Promise<import("n8n-workflow").INodeExecutionData[][]>;
}
