import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Duration } from "@bufbuild/protobuf/wkt";
import type { CalendarPeriod } from "../../type/calendar_period_pb";
import type { Message } from "@bufbuild/protobuf";
export declare const file_google_monitoring_v3_service: GenFile;
export type Service = Message<"google.monitoring.v3.Service"> & {
    name: string;
    displayName: string;
    identifier: {
        value: Service_Custom;
        case: "custom";
    } | {
        value: Service_AppEngine;
        case: "appEngine";
    } | {
        value: Service_CloudEndpoints;
        case: "cloudEndpoints";
    } | {
        value: Service_ClusterIstio;
        case: "clusterIstio";
    } | {
        value: Service_MeshIstio;
        case: "meshIstio";
    } | {
        value: Service_IstioCanonicalService;
        case: "istioCanonicalService";
    } | {
        value: Service_CloudRun;
        case: "cloudRun";
    } | {
        value: Service_GkeNamespace;
        case: "gkeNamespace";
    } | {
        value: Service_GkeWorkload;
        case: "gkeWorkload";
    } | {
        value: Service_GkeService;
        case: "gkeService";
    } | {
        case: undefined;
        value?: undefined;
    };
    basicService?: Service_BasicService;
    telemetry?: Service_Telemetry;
    userLabels: {
        [key: string]: string;
    };
};
export declare const ServiceSchema: GenMessage<Service>;
export type Service_Custom = Message<"google.monitoring.v3.Service.Custom"> & {};
export declare const Service_CustomSchema: GenMessage<Service_Custom>;
export type Service_AppEngine = Message<"google.monitoring.v3.Service.AppEngine"> & {
    moduleId: string;
};
export declare const Service_AppEngineSchema: GenMessage<Service_AppEngine>;
export type Service_CloudEndpoints = Message<"google.monitoring.v3.Service.CloudEndpoints"> & {
    service: string;
};
export declare const Service_CloudEndpointsSchema: GenMessage<Service_CloudEndpoints>;
export type Service_ClusterIstio = Message<"google.monitoring.v3.Service.ClusterIstio"> & {
    location: string;
    clusterName: string;
    serviceNamespace: string;
    serviceName: string;
};
export declare const Service_ClusterIstioSchema: GenMessage<Service_ClusterIstio>;
export type Service_MeshIstio = Message<"google.monitoring.v3.Service.MeshIstio"> & {
    meshUid: string;
    serviceNamespace: string;
    serviceName: string;
};
export declare const Service_MeshIstioSchema: GenMessage<Service_MeshIstio>;
export type Service_IstioCanonicalService = Message<"google.monitoring.v3.Service.IstioCanonicalService"> & {
    meshUid: string;
    canonicalServiceNamespace: string;
    canonicalService: string;
};
export declare const Service_IstioCanonicalServiceSchema: GenMessage<Service_IstioCanonicalService>;
export type Service_CloudRun = Message<"google.monitoring.v3.Service.CloudRun"> & {
    serviceName: string;
    location: string;
};
export declare const Service_CloudRunSchema: GenMessage<Service_CloudRun>;
export type Service_GkeNamespace = Message<"google.monitoring.v3.Service.GkeNamespace"> & {
    projectId: string;
    location: string;
    clusterName: string;
    namespaceName: string;
};
export declare const Service_GkeNamespaceSchema: GenMessage<Service_GkeNamespace>;
export type Service_GkeWorkload = Message<"google.monitoring.v3.Service.GkeWorkload"> & {
    projectId: string;
    location: string;
    clusterName: string;
    namespaceName: string;
    topLevelControllerType: string;
    topLevelControllerName: string;
};
export declare const Service_GkeWorkloadSchema: GenMessage<Service_GkeWorkload>;
export type Service_GkeService = Message<"google.monitoring.v3.Service.GkeService"> & {
    projectId: string;
    location: string;
    clusterName: string;
    namespaceName: string;
    serviceName: string;
};
export declare const Service_GkeServiceSchema: GenMessage<Service_GkeService>;
export type Service_BasicService = Message<"google.monitoring.v3.Service.BasicService"> & {
    serviceType: string;
    serviceLabels: {
        [key: string]: string;
    };
};
export declare const Service_BasicServiceSchema: GenMessage<Service_BasicService>;
export type Service_Telemetry = Message<"google.monitoring.v3.Service.Telemetry"> & {
    resourceName: string;
};
export declare const Service_TelemetrySchema: GenMessage<Service_Telemetry>;
export type ServiceLevelObjective = Message<"google.monitoring.v3.ServiceLevelObjective"> & {
    name: string;
    displayName: string;
    serviceLevelIndicator?: ServiceLevelIndicator;
    goal: number;
    period: {
        value: Duration;
        case: "rollingPeriod";
    } | {
        value: CalendarPeriod;
        case: "calendarPeriod";
    } | {
        case: undefined;
        value?: undefined;
    };
    userLabels: {
        [key: string]: string;
    };
};
export declare const ServiceLevelObjectiveSchema: GenMessage<ServiceLevelObjective>;
export declare enum ServiceLevelObjective_View {
    VIEW_UNSPECIFIED = 0,
    FULL = 2,
    EXPLICIT = 1
}
export declare const ServiceLevelObjective_ViewSchema: GenEnum<ServiceLevelObjective_View>;
export type ServiceLevelIndicator = Message<"google.monitoring.v3.ServiceLevelIndicator"> & {
    type: {
        value: BasicSli;
        case: "basicSli";
    } | {
        value: RequestBasedSli;
        case: "requestBased";
    } | {
        value: WindowsBasedSli;
        case: "windowsBased";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const ServiceLevelIndicatorSchema: GenMessage<ServiceLevelIndicator>;
export type BasicSli = Message<"google.monitoring.v3.BasicSli"> & {
    method: string[];
    location: string[];
    version: string[];
    sliCriteria: {
        value: BasicSli_AvailabilityCriteria;
        case: "availability";
    } | {
        value: BasicSli_LatencyCriteria;
        case: "latency";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const BasicSliSchema: GenMessage<BasicSli>;
export type BasicSli_AvailabilityCriteria = Message<"google.monitoring.v3.BasicSli.AvailabilityCriteria"> & {};
export declare const BasicSli_AvailabilityCriteriaSchema: GenMessage<BasicSli_AvailabilityCriteria>;
export type BasicSli_LatencyCriteria = Message<"google.monitoring.v3.BasicSli.LatencyCriteria"> & {
    threshold?: Duration;
};
export declare const BasicSli_LatencyCriteriaSchema: GenMessage<BasicSli_LatencyCriteria>;
export type Range = Message<"google.monitoring.v3.Range"> & {
    min: number;
    max: number;
};
export declare const RangeSchema: GenMessage<Range>;
export type RequestBasedSli = Message<"google.monitoring.v3.RequestBasedSli"> & {
    method: {
        value: TimeSeriesRatio;
        case: "goodTotalRatio";
    } | {
        value: DistributionCut;
        case: "distributionCut";
    } | {
        case: undefined;
        value?: undefined;
    };
};
export declare const RequestBasedSliSchema: GenMessage<RequestBasedSli>;
export type TimeSeriesRatio = Message<"google.monitoring.v3.TimeSeriesRatio"> & {
    goodServiceFilter: string;
    badServiceFilter: string;
    totalServiceFilter: string;
};
export declare const TimeSeriesRatioSchema: GenMessage<TimeSeriesRatio>;
export type DistributionCut = Message<"google.monitoring.v3.DistributionCut"> & {
    distributionFilter: string;
    range?: Range;
};
export declare const DistributionCutSchema: GenMessage<DistributionCut>;
export type WindowsBasedSli = Message<"google.monitoring.v3.WindowsBasedSli"> & {
    windowCriterion: {
        value: string;
        case: "goodBadMetricFilter";
    } | {
        value: WindowsBasedSli_PerformanceThreshold;
        case: "goodTotalRatioThreshold";
    } | {
        value: WindowsBasedSli_MetricRange;
        case: "metricMeanInRange";
    } | {
        value: WindowsBasedSli_MetricRange;
        case: "metricSumInRange";
    } | {
        case: undefined;
        value?: undefined;
    };
    windowPeriod?: Duration;
};
export declare const WindowsBasedSliSchema: GenMessage<WindowsBasedSli>;
export type WindowsBasedSli_PerformanceThreshold = Message<"google.monitoring.v3.WindowsBasedSli.PerformanceThreshold"> & {
    type: {
        value: RequestBasedSli;
        case: "performance";
    } | {
        value: BasicSli;
        case: "basicSliPerformance";
    } | {
        case: undefined;
        value?: undefined;
    };
    threshold: number;
};
export declare const WindowsBasedSli_PerformanceThresholdSchema: GenMessage<WindowsBasedSli_PerformanceThreshold>;
export type WindowsBasedSli_MetricRange = Message<"google.monitoring.v3.WindowsBasedSli.MetricRange"> & {
    timeSeries: string;
    range?: Range;
};
export declare const WindowsBasedSli_MetricRangeSchema: GenMessage<WindowsBasedSli_MetricRange>;
