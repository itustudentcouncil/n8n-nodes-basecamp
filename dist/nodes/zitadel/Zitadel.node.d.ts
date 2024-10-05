import { IExecuteFunctions, INodeType } from "n8n-workflow";
export declare const createAccessTokenInterceptor: (token: string) => (call: any, options: any) => AsyncGenerator<any, any, any>;
export declare class Zitadel implements INodeType {
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
            options: {
                name: string;
                value: string;
            }[];
            displayOptions: {
                show: {
                    service: ("UserService" | "OrganizationService" | "AuthService" | "ManagementService" | "AdminService" | "ZITADELActions" | "UserSchemaService")[];
                };
            };
            default: string;
            required: boolean;
        } | {
            displayName: string;
            name: string;
            type: "string" | "json";
            default: string;
            required: boolean;
            displayOptions: {
                show: {
                    service: string[];
                    operation: string[];
                };
            };
        } | {
            displayName: string;
            name: string;
            type: "options";
            options: {
                name: "UserService" | "OrganizationService" | "AuthService" | "ManagementService" | "AdminService" | "ZITADELActions" | "UserSchemaService";
                value: "UserService" | "OrganizationService" | "AuthService" | "ManagementService" | "AdminService" | "ZITADELActions" | "UserSchemaService";
            }[];
            default: "UserService" | "OrganizationService" | "AuthService" | "ManagementService" | "AdminService" | "ZITADELActions" | "UserSchemaService";
            noDataExpression: boolean;
            required: boolean;
            description: string;
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
