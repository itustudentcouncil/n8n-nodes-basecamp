import { INodeType } from "n8n-workflow";
export declare class Basecamp implements INodeType {
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
