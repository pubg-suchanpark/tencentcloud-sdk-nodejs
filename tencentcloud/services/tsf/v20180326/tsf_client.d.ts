import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribePublicConfigSummaryRequest, DescribeImageTagsRequest, ReleaseConfigResponse, DescribeApiVersionsResponse, StopContainerGroupResponse, DeleteLaneResponse, DescribeConfigReleaseLogsResponse, ContinueRunFailedTaskBatchRequest, DescribeSimpleClustersResponse, DeleteRepositoryResponse, DeleteApplicationResponse, UpdateRepositoryRequest, DescribeConfigsResponse, ModifyContainerReplicasRequest, CreateGatewayApiResponse, DescribeApiVersionsRequest, DescribeGroupBindedGatewaysResponse, UnbindApiGroupRequest, CreateNamespaceResponse, RedoTaskBatchRequest, DescribeTaskLastStatusRequest, ModifyUploadInfoResponse, CreateApiRateLimitRuleRequest, ChangeApiUsableStatusRequest, DescribeApiRateLimitRulesRequest, DescribeApiGroupsResponse, DeletePublicConfigRequest, DeleteNamespaceResponse, CreateMicroserviceRequest, DeleteImageTagsRequest, DescribeRepositoriesRequest, RollbackConfigRequest, CreateGatewayApiRequest, DescribeCreateGatewayApiStatusResponse, DeleteConfigResponse, DescribeGroupGatewaysRequest, UpdateApiRateLimitRuleResponse, DescribeGatewayAllGroupApisResponse, DescribeServerlessGroupsResponse, DescribeConfigsRequest, AddInstancesResponse, StartContainerGroupRequest, StopGroupResponse, UpdateHealthCheckSettingsRequest, CreateClusterResponse, CreateMicroserviceResponse, StopGroupRequest, ShrinkGroupResponse, DescribeLanesResponse, CreateNamespaceRequest, DescribeClusterInstancesRequest, DescribeGroupBindedGatewaysRequest, DescribeRepositoryRequest, RedoTaskRequest, DeleteApiGroupResponse, DraftApiGroupRequest, CreateLaneResponse, DescribePkgsResponse, DescribeSimpleNamespacesResponse, DescribeMicroservicesResponse, DescribePublicConfigRequest, CreatePublicConfigResponse, CreateConfigResponse, DescribeCreateGatewayApiStatusRequest, DescribeConfigReleaseLogsRequest, ModifyContainerGroupRequest, UpdateRepositoryResponse, RollbackConfigResponse, RevocationConfigRequest, StartContainerGroupResponse, ModifyTaskRequest, DisableTaskRequest, DescribeBasicResourceUsageResponse, RemoveInstancesRequest, DeleteGroupResponse, DescribeSimpleApplicationsResponse, DeployContainerGroupRequest, DescribeSimpleApplicationsRequest, DescribePublicConfigsRequest, ReleaseApiGroupResponse, UpdateApiRateLimitRulesRequest, DescribeGroupInstancesRequest, DescribeMsApiListRequest, DescribeUploadInfoResponse, DescribeMsApiListResponse, EnableTaskRequest, DisableTaskResponse, DescribeMicroserviceRequest, DescribePodInstancesResponse, DescribeRepositoriesResponse, CreateGroupRequest, StopTaskBatchResponse, CreateContainGroupResponse, DescribeContainerGroupDetailResponse, DescribeGroupGatewaysResponse, DeployServerlessGroupResponse, CreateAllGatewayApiAsyncResponse, DeleteTaskResponse, DeleteMicroserviceRequest, RemoveInstancesResponse, DescribeGroupResponse, DeleteContainerGroupResponse, DeleteServerlessGroupResponse, DeleteImageTagsResponse, ExecuteTaskRequest, DescribeApplicationResponse, DescribeApiUseDetailRequest, DescribeSimpleGroupsResponse, DescribeFlowLastBatchStateRequest, DeletePublicConfigResponse, TerminateTaskFlowBatchResponse, ShrinkInstancesResponse, DescribeApiRateLimitRulesResponse, AddClusterInstancesRequest, DescribeGroupUseDetailResponse, DescribeSimpleNamespacesRequest, ExecuteTaskFlowResponse, ExpandGroupResponse, DescribePublicConfigsResponse, RevocationPublicConfigResponse, ContinueRunFailedTaskBatchResponse, DescribeSimpleClustersRequest, DeployServerlessGroupRequest, DescribeLaneRulesResponse, DescribeImageRepositoryRequest, DescribeApiGroupRequest, RedoTaskExecuteResponse, DescribeContainerGroupDetailRequest, ModifyTaskResponse, DescribeGroupRequest, DescribeGroupUseDetailRequest, StopTaskExecuteResponse, StartGroupResponse, DescribeServerlessGroupRequest, ShrinkGroupRequest, CreateLaneRuleResponse, CreateTaskResponse, DescribeContainerGroupsResponse, UpdateApiGroupResponse, AddInstancesRequest, CreateApplicationRequest, DeployGroupRequest, CreateTaskFlowRequest, ModifyContainerReplicasResponse, UnbindApiGroupResponse, CreateApplicationResponse, DeployGroupResponse, DescribeServerlessGroupResponse, RedoTaskBatchResponse, UpdateApiGroupRequest, ExecuteTaskFlowRequest, TerminateTaskFlowBatchRequest, DeleteServerlessGroupRequest, DescribeApiUseDetailResponse, ModifyUploadInfoRequest, UpdateGatewayApiResponse, ModifyLaneResponse, DescribePublicConfigSummaryResponse, DescribePublicConfigReleaseLogsRequest, CreateServerlessGroupResponse, DescribeApplicationAttributeResponse, ModifyLaneRequest, DescribeLanesRequest, DescribeGatewayMonitorOverviewResponse, CreatePublicConfigRequest, CreateAllGatewayApiAsyncRequest, EnableTaskFlowResponse, DisableTaskFlowResponse, DescribeGatewayMonitorOverviewRequest, DescribeImageTagsResponse, RedoTaskFlowBatchRequest, StopTaskExecuteRequest, DescribePkgsRequest, DescribeApplicationAttributeRequest, CreateTaskRequest, DescribePublicConfigResponse, DescribeConfigResponse, ModifyContainerGroupResponse, DeleteApplicationRequest, RevocationPublicConfigRequest, DeleteTaskRequest, CreateConfigRequest, DescribeUploadInfoRequest, UpdateGatewayApiRequest, DescribeRepositoryResponse, DescribeApiGroupsRequest, DeletePkgsResponse, DescribeGroupsResponse, ModifyLaneRuleRequest, CreateTaskFlowResponse, DescribeMicroservicesRequest, AddClusterInstancesResponse, DescribeTaskLastStatusResponse, ReleasePublicConfigResponse, DescribeApplicationsRequest, DescribePublicConfigReleasesRequest, DescribeLaneRulesRequest, CreateServerlessGroupRequest, CreateRepositoryResponse, CreateLaneRuleRequest, DescribeServerlessGroupsRequest, DeletePkgsRequest, ChangeApiUsableStatusResponse, EnableTaskResponse, UpdateApiRateLimitRulesResponse, DescribeGroupInstancesResponse, DescribeDownloadInfoRequest, DeleteApiGroupRequest, ReleaseApiGroupRequest, StartGroupRequest, DescribeClusterInstancesResponse, ExpandGroupRequest, ModifyLaneRuleResponse, EnableTaskFlowRequest, DescribeReleasedConfigRequest, ModifyMicroserviceRequest, DescribeConfigReleasesRequest, DescribeApiGroupResponse, UpdateApiRateLimitRuleRequest, CreateLaneRequest, CreateApiGroupResponse, RedoTaskExecuteRequest, DescribeApplicationsResponse, DescribeConfigRequest, DescribeGatewayAllGroupApisRequest, DeleteGroupRequest, BindApiGroupRequest, StopTaskBatchRequest, DescribeContainerGroupsRequest, DisableTaskFlowRequest, DescribePodInstancesRequest, RedoTaskResponse, ShrinkInstancesRequest, DeleteConfigRequest, DescribePublicConfigReleaseLogsResponse, ExecuteTaskResponse, CreateApiRateLimitRuleResponse, RevocationConfigResponse, CreateClusterRequest, DeleteContainerGroupRequest, ReleaseConfigRequest, DescribeApiDetailRequest, StopContainerGroupRequest, UpdateHealthCheckSettingsResponse, DescribeFlowLastBatchStateResponse, DescribeSimpleGroupsRequest, DescribeConfigReleasesResponse, ModifyMicroserviceResponse, CreateApiGroupRequest, DescribeDownloadInfoResponse, DescribeApplicationRequest, DeployContainerGroupResponse, DescribeBasicResourceUsageRequest, DeleteMicroserviceResponse, DescribeReleasedConfigResponse, DescribeApiDetailResponse, DescribeGroupsRequest, CreateRepositoryRequest, DeleteNamespaceRequest, BindApiGroupResponse, DescribeMicroserviceResponse, DescribeImageRepositoryResponse, DescribeConfigSummaryResponse, CreateContainGroupRequest, DescribePublicConfigReleasesResponse, DeleteRepositoryRequest, DraftApiGroupResponse, DescribeConfigSummaryRequest, DeleteLaneRequest, ReleasePublicConfigRequest, RedoTaskFlowBatchResponse, CreateGroupResponse } from "./tsf_models";
/**
 * tsf client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 创建任务
     */
    CreateTask(req: CreateTaskRequest, cb?: (error: string, rep: CreateTaskResponse) => void): Promise<CreateTaskResponse>;
    /**
     * 删除公共配置项
     */
    DeletePublicConfig(req: DeletePublicConfigRequest, cb?: (error: string, rep: DeletePublicConfigResponse) => void): Promise<DeletePublicConfigResponse>;
    /**
     * 查询配置
     */
    DescribeConfig(req: DescribeConfigRequest, cb?: (error: string, rep: DescribeConfigResponse) => void): Promise<DescribeConfigResponse>;
    /**
     * 对执行失败的任务批次执行续跑
     */
    ContinueRunFailedTaskBatch(req: ContinueRunFailedTaskBatchRequest, cb?: (error: string, rep: ContinueRunFailedTaskBatchResponse) => void): Promise<ContinueRunFailedTaskBatchResponse>;
    /**
     * 修改容器部署组实例数
     */
    ModifyContainerReplicas(req: ModifyContainerReplicasRequest, cb?: (error: string, rep: ModifyContainerReplicasResponse) => void): Promise<ModifyContainerReplicasResponse>;
    /**
     * 虚拟机部署组下线实例
     */
    ShrinkInstances(req: ShrinkInstancesRequest, cb?: (error: string, rep: ShrinkInstancesResponse) => void): Promise<ShrinkInstancesResponse>;
    /**
     * 启用工作流
     */
    EnableTaskFlow(req: EnableTaskFlowRequest, cb?: (error: string, rep: EnableTaskFlowResponse) => void): Promise<EnableTaskFlowResponse>;
    /**
     * 获取部署组实例列表
     */
    DescribePodInstances(req: DescribePodInstancesRequest, cb?: (error: string, rep: DescribePodInstancesResponse) => void): Promise<DescribePodInstancesResponse>;
    /**
     * 撤回已发布的公共配置
     */
    RevocationPublicConfig(req: RevocationPublicConfigRequest, cb?: (error: string, rep: RevocationPublicConfigResponse) => void): Promise<RevocationPublicConfigResponse>;
    /**
     * 创建命名空间
     */
    CreateNamespace(req: CreateNamespaceRequest, cb?: (error: string, rep: CreateNamespaceResponse) => void): Promise<CreateNamespaceResponse>;
    /**
     * 添加云主机节点至TSF集群
     */
    AddClusterInstances(req: AddClusterInstancesRequest, cb?: (error: string, rep: AddClusterInstancesResponse) => void): Promise<AddClusterInstancesResponse>;
    /**
     * 重新执行工作流批次
     */
    RedoTaskFlowBatch(req: RedoTaskFlowBatchRequest, cb?: (error: string, rep: RedoTaskFlowBatchResponse) => void): Promise<RedoTaskFlowBatchResponse>;
    /**
     * 查询公共配置汇总列表
     */
    DescribePublicConfigSummary(req: DescribePublicConfigSummaryRequest, cb?: (error: string, rep: DescribePublicConfigSummaryResponse) => void): Promise<DescribePublicConfigSummaryResponse>;
    /**
     * 查询仓库列表
     */
    DescribeRepositories(req: DescribeRepositoriesRequest, cb?: (error: string, rep: DescribeRepositoriesResponse) => void): Promise<DescribeRepositoriesResponse>;
    /**
     * 查询配置项列表
     */
    DescribeConfigs(req: DescribeConfigsRequest, cb?: (error: string, rep: DescribeConfigsResponse) => void): Promise<DescribeConfigsResponse>;
    /**
     * 停用任务
     */
    DisableTask(req: DisableTaskRequest, cb?: (error: string, rep: DisableTaskResponse) => void): Promise<DisableTaskResponse>;
    /**
     * 停用工作流
     */
    DisableTaskFlow(req: DisableTaskFlowRequest, cb?: (error: string, rep: DisableTaskFlowResponse) => void): Promise<DisableTaskFlowResponse>;
    /**
     * 创建集群
     */
    CreateCluster(req: CreateClusterRequest, cb?: (error: string, rep: CreateClusterResponse) => void): Promise<CreateClusterResponse>;
    /**
     * 停止正在某个节点上执行的任务
     */
    StopTaskExecute(req: StopTaskExecuteRequest, cb?: (error: string, rep: StopTaskExecuteResponse) => void): Promise<StopTaskExecuteResponse>;
    /**
     *  容器部署组详情
     */
    DescribeContainerGroupDetail(req: DescribeContainerGroupDetailRequest, cb?: (error: string, rep: DescribeContainerGroupDetailResponse) => void): Promise<DescribeContainerGroupDetailResponse>;
    /**
     * 回滚配置
     */
    RollbackConfig(req: RollbackConfigRequest, cb?: (error: string, rep: RollbackConfigResponse) => void): Promise<RollbackConfigResponse>;
    /**
     * 镜像版本列表
     */
    DescribeImageTags(req: DescribeImageTagsRequest, cb?: (error: string, rep: DescribeImageTagsResponse) => void): Promise<DescribeImageTagsResponse>;
    /**
     * 调用该接口和COS的上传接口后，需要调用此接口更新TSF中保存的程序包状态。
调用此接口完成后，才标志上传包流程结束。
     */
    ModifyUploadInfo(req: ModifyUploadInfoRequest, cb?: (error: string, rep: ModifyUploadInfoResponse) => void): Promise<ModifyUploadInfoResponse>;
    /**
     * 查询简单集群列表
     */
    DescribeSimpleClusters(req: DescribeSimpleClustersRequest, cb?: (error: string, rep: DescribeSimpleClustersResponse) => void): Promise<DescribeSimpleClustersResponse>;
    /**
     * 查询API详情
     */
    DescribeApiDetail(req: DescribeApiDetailRequest, cb?: (error: string, rep: DescribeApiDetailResponse) => void): Promise<DescribeApiDetailResponse>;
    /**
     * 部署Serverless应用
     */
    DeployServerlessGroup(req: DeployServerlessGroupRequest, cb?: (error: string, rep: DeployServerlessGroupResponse) => void): Promise<DeployServerlessGroupResponse>;
    /**
     * 创建配置项
     */
    CreateConfig(req: CreateConfigRequest, cb?: (error: string, rep: CreateConfigResponse) => void): Promise<CreateConfigResponse>;
    /**
     * 容器部署组列表
     */
    DescribeContainerGroups(req: DescribeContainerGroupsRequest, cb?: (error: string, rep: DescribeContainerGroupsResponse) => void): Promise<DescribeContainerGroupsResponse>;
    /**
     * 批量删除镜像版本
     */
    DeleteImageTags(req: DeleteImageTagsRequest, cb?: (error: string, rep: DeleteImageTagsResponse) => void): Promise<DeleteImageTagsResponse>;
    /**
     * TSF上传的程序包存放在腾讯云对象存储（COS）中，通过该API可以获取从COS下载程序包需要的信息，包括包所在的桶、存储路径、鉴权信息等，之后使用COS API（或SDK）进行下载。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     */
    DescribeDownloadInfo(req: DescribeDownloadInfoRequest, cb?: (error: string, rep: DescribeDownloadInfoResponse) => void): Promise<DescribeDownloadInfoResponse>;
    /**
     * 获取应用列表
     */
    DescribeApplications(req: DescribeApplicationsRequest, cb?: (error: string, rep: DescribeApplicationsResponse) => void): Promise<DescribeApplicationsResponse>;
    /**
     * 更新仓库信息
     */
    UpdateRepository(req: UpdateRepositoryRequest, cb?: (error: string, rep: UpdateRepositoryResponse) => void): Promise<UpdateRepositoryResponse>;
    /**
     * 查询某个API分组已绑定的网关部署组信息列表
     */
    DescribeGroupBindedGateways(req: DescribeGroupBindedGatewaysRequest, cb?: (error: string, rep: DescribeGroupBindedGatewaysResponse) => void): Promise<DescribeGroupBindedGatewaysResponse>;
    /**
     * 获取应用详情
     */
    DescribeApplication(req: DescribeApplicationRequest, cb?: (error: string, rep: DescribeApplicationResponse) => void): Promise<DescribeApplicationResponse>;
    /**
     * 查询网关分组监控明细数据
     */
    DescribeGroupUseDetail(req: DescribeGroupUseDetailRequest, cb?: (error: string, rep: DescribeGroupUseDetailResponse) => void): Promise<DescribeGroupUseDetailResponse>;
    /**
     * 查询公共配置（单条）
     */
    DescribePublicConfig(req: DescribePublicConfigRequest, cb?: (error: string, rep: DescribePublicConfigResponse) => void): Promise<DescribePublicConfigResponse>;
    /**
     * 查询泳道列表
     */
    DescribeLanes(req: DescribeLanesRequest, cb?: (error: string, rep: DescribeLanesResponse) => void): Promise<DescribeLanesResponse>;
    /**
     * 更新健康检查配置
     */
    UpdateHealthCheckSettings(req: UpdateHealthCheckSettingsRequest, cb?: (error: string, rep: UpdateHealthCheckSettingsResponse) => void): Promise<UpdateHealthCheckSettingsResponse>;
    /**
     * 手动执行一次任务。
     */
    ExecuteTask(req: ExecuteTaskRequest, cb?: (error: string, rep: ExecuteTaskResponse) => void): Promise<ExecuteTaskResponse>;
    /**
     * 批量导入API至api分组(也支持新建API到分组)
     */
    CreateGatewayApi(req: CreateGatewayApiRequest, cb?: (error: string, rep: CreateGatewayApiResponse) => void): Promise<CreateGatewayApiResponse>;
    /**
     * 查询简单命名空间列表
     */
    DescribeSimpleNamespaces(req: DescribeSimpleNamespacesRequest, cb?: (error: string, rep: DescribeSimpleNamespacesResponse) => void): Promise<DescribeSimpleNamespacesResponse>;
    /**
     * 创建API限流规则
     */
    CreateApiRateLimitRule(req: CreateApiRateLimitRuleRequest, cb?: (error: string, rep: CreateApiRateLimitRuleResponse) => void): Promise<CreateApiRateLimitRuleResponse>;
    /**
     * 创建Serverless部署组
     */
    CreateServerlessGroup(req: CreateServerlessGroupRequest, cb?: (error: string, rep: CreateServerlessGroupResponse) => void): Promise<CreateServerlessGroupResponse>;
    /**
     * 停止容器部署组
     */
    StopContainerGroup(req: StopContainerGroupRequest, cb?: (error: string, rep: StopContainerGroupResponse) => void): Promise<StopContainerGroupResponse>;
    /**
     * 查询一键导入API分组任务的状态
     */
    DescribeCreateGatewayApiStatus(req: DescribeCreateGatewayApiStatusRequest, cb?: (error: string, rep: DescribeCreateGatewayApiStatusResponse) => void): Promise<DescribeCreateGatewayApiStatusResponse>;
    /**
     * 修改任务
     */
    ModifyTask(req: ModifyTaskRequest, cb?: (error: string, rep: ModifyTaskResponse) => void): Promise<ModifyTaskResponse>;
    /**
     * 更新API限流规则
     */
    UpdateApiRateLimitRule(req: UpdateApiRateLimitRuleRequest, cb?: (error: string, rep: UpdateApiRateLimitRuleResponse) => void): Promise<UpdateApiRateLimitRuleResponse>;
    /**
     * API分组批量与网关解绑
     */
    UnbindApiGroup(req: UnbindApiGroupRequest, cb?: (error: string, rep: UnbindApiGroupResponse) => void): Promise<UnbindApiGroupResponse>;
    /**
     * 创建泳道规则
     */
    CreateLaneRule(req: CreateLaneRuleRequest, cb?: (error: string, rep: CreateLaneRuleResponse) => void): Promise<CreateLaneRuleResponse>;
    /**
     * 删除容器部署组
     */
    DeleteContainerGroup(req: DeleteContainerGroupRequest, cb?: (error: string, rep: DeleteContainerGroupResponse) => void): Promise<DeleteContainerGroupResponse>;
    /**
     * 查询API 分组信息列表
     */
    DescribeApiGroups(req: DescribeApiGroupsRequest, cb?: (error: string, rep: DescribeApiGroupsResponse) => void): Promise<DescribeApiGroupsResponse>;
    /**
     * 发布配置
     */
    ReleaseConfig(req: ReleaseConfigRequest, cb?: (error: string, rep: ReleaseConfigResponse) => void): Promise<ReleaseConfigResponse>;
    /**
     * 停止一个工作流批次
     */
    TerminateTaskFlowBatch(req: TerminateTaskFlowBatchRequest, cb?: (error: string, rep: TerminateTaskFlowBatchResponse) => void): Promise<TerminateTaskFlowBatchResponse>;
    /**
     * 批量更新API限流规则
     */
    UpdateApiRateLimitRules(req: UpdateApiRateLimitRulesRequest, cb?: (error: string, rep: UpdateApiRateLimitRulesResponse) => void): Promise<UpdateApiRateLimitRulesResponse>;
    /**
     * 获取虚拟机部署组列表
     */
    DescribeGroups(req: DescribeGroupsRequest, cb?: (error: string, rep: DescribeGroupsResponse) => void): Promise<DescribeGroupsResponse>;
    /**
     * 镜像仓库列表
     */
    DescribeImageRepository(req: DescribeImageRepositoryRequest, cb?: (error: string, rep: DescribeImageRepositoryResponse) => void): Promise<DescribeImageRepositoryResponse>;
    /**
     * 一键导入API分组
     */
    CreateAllGatewayApiAsync(req: CreateAllGatewayApiAsyncRequest, cb?: (error: string, rep: CreateAllGatewayApiAsyncResponse) => void): Promise<CreateAllGatewayApiAsyncResponse>;
    /**
     * 创建仓库
     */
    CreateRepository(req: CreateRepositoryRequest, cb?: (error: string, rep: CreateRepositoryResponse) => void): Promise<CreateRepositoryResponse>;
    /**
     * 查询集群实例
     */
    DescribeClusterInstances(req: DescribeClusterInstancesRequest, cb?: (error: string, rep: DescribeClusterInstancesResponse) => void): Promise<DescribeClusterInstancesResponse>;
    /**
     * 创建公共配置项
     */
    CreatePublicConfig(req: CreatePublicConfigRequest, cb?: (error: string, rep: CreatePublicConfigResponse) => void): Promise<CreatePublicConfigResponse>;
    /**
     * 网关与API分组批量绑定
     */
    BindApiGroup(req: BindApiGroupRequest, cb?: (error: string, rep: BindApiGroupResponse) => void): Promise<BindApiGroupResponse>;
    /**
     * 查询简单部署组列表
     */
    DescribeSimpleGroups(req: DescribeSimpleGroupsRequest, cb?: (error: string, rep: DescribeSimpleGroupsResponse) => void): Promise<DescribeSimpleGroupsResponse>;
    /**
     * 查询某个网关绑定的API 分组信息列表
     */
    DescribeGroupGateways(req: DescribeGroupGatewaysRequest, cb?: (error: string, rep: DescribeGroupGatewaysResponse) => void): Promise<DescribeGroupGatewaysResponse>;
    /**
     * 添加云主机节点至TSF集群
     */
    AddInstances(req: AddInstancesRequest, cb?: (error: string, rep: AddInstancesResponse) => void): Promise<AddInstancesResponse>;
    /**
     * 查询配置汇总列表
     */
    DescribeConfigSummary(req: DescribeConfigSummaryRequest, cb?: (error: string, rep: DescribeConfigSummaryResponse) => void): Promise<DescribeConfigSummaryResponse>;
    /**
     * 重新执行任务
     */
    RedoTask(req: RedoTaskRequest, cb?: (error: string, rep: RedoTaskResponse) => void): Promise<RedoTaskResponse>;
    /**
     * 无
     */
    DescribePkgs(req: DescribePkgsRequest, cb?: (error: string, rep: DescribePkgsResponse) => void): Promise<DescribePkgsResponse>;
    /**
     * 创建API分组
     */
    CreateApiGroup(req: CreateApiGroupRequest, cb?: (error: string, rep: CreateApiGroupResponse) => void): Promise<CreateApiGroupResponse>;
    /**
     * 查询简单应用列表
     */
    DescribeSimpleApplications(req: DescribeSimpleApplicationsRequest, cb?: (error: string, rep: DescribeSimpleApplicationsResponse) => void): Promise<DescribeSimpleApplicationsResponse>;
    /**
     * 查询API分组
     */
    DescribeApiGroup(req: DescribeApiGroupRequest, cb?: (error: string, rep: DescribeApiGroupResponse) => void): Promise<DescribeApiGroupResponse>;
    /**
     * 发布Api分组
     */
    ReleaseApiGroup(req: ReleaseApiGroupRequest, cb?: (error: string, rep: ReleaseApiGroupResponse) => void): Promise<ReleaseApiGroupResponse>;
    /**
     * 查询Serverless部署组列表
     */
    DescribeServerlessGroups(req: DescribeServerlessGroupsRequest, cb?: (error: string, rep: DescribeServerlessGroupsResponse) => void): Promise<DescribeServerlessGroupsResponse>;
    /**
     * 创建虚拟机部署组
     */
    CreateGroup(req: CreateGroupRequest, cb?: (error: string, rep: CreateGroupResponse) => void): Promise<CreateGroupResponse>;
    /**
     * 查询任务最近一次执行状态
     */
    DescribeTaskLastStatus(req: DescribeTaskLastStatusRequest, cb?: (error: string, rep: DescribeTaskLastStatusResponse) => void): Promise<DescribeTaskLastStatusResponse>;
    /**
     * 查询虚拟机部署组云主机列表
     */
    DescribeGroupInstances(req: DescribeGroupInstancesRequest, cb?: (error: string, rep: DescribeGroupInstancesResponse) => void): Promise<DescribeGroupInstancesResponse>;
    /**
     * 删除仓库
     */
    DeleteRepository(req: DeleteRepositoryRequest, cb?: (error: string, rep: DeleteRepositoryResponse) => void): Promise<DeleteRepositoryResponse>;
    /**
     * 从软件仓库批量删除程序包。
一次最多支持删除1000个包，数量超过1000，返回UpperDeleteLimit错误。
     */
    DeletePkgs(req: DeletePkgsRequest, cb?: (error: string, rep: DeletePkgsResponse) => void): Promise<DeletePkgsResponse>;
    /**
     * 查询公共配置项列表
     */
    DescribePublicConfigs(req: DescribePublicConfigsRequest, cb?: (error: string, rep: DescribePublicConfigsResponse) => void): Promise<DescribePublicConfigsResponse>;
    /**
     * 启用任务
     */
    EnableTask(req: EnableTaskRequest, cb?: (error: string, rep: EnableTaskResponse) => void): Promise<EnableTaskResponse>;
    /**
     * 删除容器部署组
     */
    DeleteGroup(req: DeleteGroupRequest, cb?: (error: string, rep: DeleteGroupResponse) => void): Promise<DeleteGroupResponse>;
    /**
     * 从 TSF 集群中批量移除云主机节点
     */
    RemoveInstances(req: RemoveInstancesRequest, cb?: (error: string, rep: RemoveInstancesResponse) => void): Promise<RemoveInstancesResponse>;
    /**
     * 虚拟机部署组添加实例
     */
    ExpandGroup(req: ExpandGroupRequest, cb?: (error: string, rep: ExpandGroupResponse) => void): Promise<ExpandGroupResponse>;
    /**
     * 删除任务
     */
    DeleteTask(req: DeleteTaskRequest, cb?: (error: string, rep: DeleteTaskResponse) => void): Promise<DeleteTaskResponse>;
    /**
     * 删除泳道
     */
    DeleteLane(req: DeleteLaneRequest, cb?: (error: string, rep: DeleteLaneResponse) => void): Promise<DeleteLaneResponse>;
    /**
     * 查询配置发布信息
     */
    DescribeConfigReleases(req: DescribeConfigReleasesRequest, cb?: (error: string, rep: DescribeConfigReleasesResponse) => void): Promise<DescribeConfigReleasesResponse>;
    /**
     * 创建泳道
     */
    CreateLane(req: CreateLaneRequest, cb?: (error: string, rep: CreateLaneResponse) => void): Promise<CreateLaneResponse>;
    /**
     * 查询网关监控概览
     */
    DescribeGatewayMonitorOverview(req: DescribeGatewayMonitorOverviewRequest, cb?: (error: string, rep: DescribeGatewayMonitorOverviewResponse) => void): Promise<DescribeGatewayMonitorOverviewResponse>;
    /**
     * 部署虚拟机部署组应用
     */
    DeployGroup(req: DeployGroupRequest, cb?: (error: string, rep: DeployGroupResponse) => void): Promise<DeployGroupResponse>;
    /**
     * 更新Api分组
     */
    UpdateApiGroup(req: UpdateApiGroupRequest, cb?: (error: string, rep: UpdateApiGroupResponse) => void): Promise<UpdateApiGroupResponse>;
    /**
     * 更新泳道信息
     */
    ModifyLane(req: ModifyLaneRequest, cb?: (error: string, rep: ModifyLaneResponse) => void): Promise<ModifyLaneResponse>;
    /**
     * 新增微服务
     */
    CreateMicroservice(req: CreateMicroserviceRequest, cb?: (error: string, rep: CreateMicroserviceResponse) => void): Promise<CreateMicroserviceResponse>;
    /**
     * 修改微服务详情
     */
    ModifyMicroservice(req: ModifyMicroserviceRequest, cb?: (error: string, rep: ModifyMicroserviceResponse) => void): Promise<ModifyMicroserviceResponse>;
    /**
     * 删除命名空间
     */
    DeleteNamespace(req: DeleteNamespaceRequest, cb?: (error: string, rep: DeleteNamespaceResponse) => void): Promise<DeleteNamespaceResponse>;
    /**
     * 查询服务API列表
     */
    DescribeMsApiList(req: DescribeMsApiListRequest, cb?: (error: string, rep: DescribeMsApiListResponse) => void): Promise<DescribeMsApiListResponse>;
    /**
     * 删除Api分组
     */
    DeleteApiGroup(req: DeleteApiGroupRequest, cb?: (error: string, rep: DeleteApiGroupResponse) => void): Promise<DeleteApiGroupResponse>;
    /**
     * 创建应用
     */
    CreateApplication(req: CreateApplicationRequest, cb?: (error: string, rep: CreateApplicationResponse) => void): Promise<CreateApplicationResponse>;
    /**
     * 重新执行任务批次
     */
    RedoTaskBatch(req: RedoTaskBatchRequest, cb?: (error: string, rep: RedoTaskBatchResponse) => void): Promise<RedoTaskBatchResponse>;
    /**
     * 查询公共配置发布历史
     */
    DescribePublicConfigReleaseLogs(req: DescribePublicConfigReleaseLogsRequest, cb?: (error: string, rep: DescribePublicConfigReleaseLogsResponse) => void): Promise<DescribePublicConfigReleaseLogsResponse>;
    /**
     * 查询配置发布历史
     */
    DescribeConfigReleaseLogs(req: DescribeConfigReleaseLogsRequest, cb?: (error: string, rep: DescribeConfigReleaseLogsResponse) => void): Promise<DescribeConfigReleaseLogsResponse>;
    /**
     * 执行一次工作流
     */
    ExecuteTaskFlow(req: ExecuteTaskFlowRequest, cb?: (error: string, rep: ExecuteTaskFlowResponse) => void): Promise<ExecuteTaskFlowResponse>;
    /**
     * 查询微服务详情
     */
    DescribeMicroservice(req: DescribeMicroserviceRequest, cb?: (error: string, rep: DescribeMicroserviceResponse) => void): Promise<DescribeMicroserviceResponse>;
    /**
     * 删除Serverless部署组
     */
    DeleteServerlessGroup(req: DeleteServerlessGroupRequest, cb?: (error: string, rep: DeleteServerlessGroupResponse) => void): Promise<DeleteServerlessGroupResponse>;
    /**
     * 重新执行在某个节点上执行任务。
     */
    RedoTaskExecute(req: RedoTaskExecuteRequest, cb?: (error: string, rep: RedoTaskExecuteResponse) => void): Promise<RedoTaskExecuteResponse>;
    /**
     * 查询工作流最新一个批次的状态信息
     */
    DescribeFlowLastBatchState(req: DescribeFlowLastBatchStateRequest, cb?: (error: string, rep: DescribeFlowLastBatchStateResponse) => void): Promise<DescribeFlowLastBatchStateResponse>;
    /**
     * 查询网关所有分组下Api列表
     */
    DescribeGatewayAllGroupApis(req: DescribeGatewayAllGroupApisRequest, cb?: (error: string, rep: DescribeGatewayAllGroupApisResponse) => void): Promise<DescribeGatewayAllGroupApisResponse>;
    /**
     * 启动容器部署组
     */
    StartContainerGroup(req: StartContainerGroupRequest, cb?: (error: string, rep: StartContainerGroupResponse) => void): Promise<StartContainerGroupResponse>;
    /**
     * 部署容器应用
     */
    DeployContainerGroup(req: DeployContainerGroupRequest, cb?: (error: string, rep: DeployContainerGroupResponse) => void): Promise<DeployContainerGroupResponse>;
    /**
     * 创建工作流
     */
    CreateTaskFlow(req: CreateTaskFlowRequest, cb?: (error: string, rep: CreateTaskFlowResponse) => void): Promise<CreateTaskFlowResponse>;
    /**
     * 查询虚拟机部署组详情
     */
    DescribeGroup(req: DescribeGroupRequest, cb?: (error: string, rep: DescribeGroupResponse) => void): Promise<DescribeGroupResponse>;
    /**
     * 删除应用
     */
    DeleteApplication(req: DeleteApplicationRequest, cb?: (error: string, rep: DeleteApplicationResponse) => void): Promise<DeleteApplicationResponse>;
    /**
     * 查询API限流规则
     */
    DescribeApiRateLimitRules(req: DescribeApiRateLimitRulesRequest, cb?: (error: string, rep: DescribeApiRateLimitRulesResponse) => void): Promise<DescribeApiRateLimitRulesResponse>;
    /**
     * 删除微服务
     */
    DeleteMicroservice(req: DeleteMicroserviceRequest, cb?: (error: string, rep: DeleteMicroserviceResponse) => void): Promise<DeleteMicroserviceResponse>;
    /**
     * TSF基本资源信息概览接口
     */
    DescribeBasicResourceUsage(req?: DescribeBasicResourceUsageRequest, cb?: (error: string, rep: DescribeBasicResourceUsageResponse) => void): Promise<DescribeBasicResourceUsageResponse>;
    /**
     * 删除配置项
     */
    DeleteConfig(req: DeleteConfigRequest, cb?: (error: string, rep: DeleteConfigResponse) => void): Promise<DeleteConfigResponse>;
    /**
     * 发布公共配置
     */
    ReleasePublicConfig(req: ReleasePublicConfigRequest, cb?: (error: string, rep: ReleasePublicConfigResponse) => void): Promise<ReleasePublicConfigResponse>;
    /**
     * 下线Api分组
     */
    DraftApiGroup(req: DraftApiGroupRequest, cb?: (error: string, rep: DraftApiGroupResponse) => void): Promise<DraftApiGroupResponse>;
    /**
     * 停止执行中的任务批次， 非运行中的任务不可调用。
     */
    StopTaskBatch(req: StopTaskBatchRequest, cb?: (error: string, rep: StopTaskBatchResponse) => void): Promise<StopTaskBatchResponse>;
    /**
     * 获取微服务列表
     */
    DescribeMicroservices(req: DescribeMicroservicesRequest, cb?: (error: string, rep: DescribeMicroservicesResponse) => void): Promise<DescribeMicroservicesResponse>;
    /**
     * 查询API 版本
     */
    DescribeApiVersions(req: DescribeApiVersionsRequest, cb?: (error: string, rep: DescribeApiVersionsResponse) => void): Promise<DescribeApiVersionsResponse>;
    /**
     * 启用或禁用API
     */
    ChangeApiUsableStatus(req: ChangeApiUsableStatusRequest, cb?: (error: string, rep: ChangeApiUsableStatusResponse) => void): Promise<ChangeApiUsableStatusResponse>;
    /**
     * 创建容器部署组
     */
    CreateContainGroup(req: CreateContainGroupRequest, cb?: (error: string, rep: CreateContainGroupResponse) => void): Promise<CreateContainGroupResponse>;
    /**
     * 查询Serverless部署组明细
     */
    DescribeServerlessGroup(req: DescribeServerlessGroupRequest, cb?: (error: string, rep: DescribeServerlessGroupResponse) => void): Promise<DescribeServerlessGroupResponse>;
    /**
     * 查询仓库信息
     */
    DescribeRepository(req: DescribeRepositoryRequest, cb?: (error: string, rep: DescribeRepositoryResponse) => void): Promise<DescribeRepositoryResponse>;
    /**
     * 获取应用列表其它字段，如实例数量信息等
     */
    DescribeApplicationAttribute(req: DescribeApplicationAttributeRequest, cb?: (error: string, rep: DescribeApplicationAttributeResponse) => void): Promise<DescribeApplicationAttributeResponse>;
    /**
     * 撤回已发布的配置
     */
    RevocationConfig(req: RevocationConfigRequest, cb?: (error: string, rep: RevocationConfigResponse) => void): Promise<RevocationConfigResponse>;
    /**
     * 查询泳道规则列表
     */
    DescribeLaneRules(req: DescribeLaneRulesRequest, cb?: (error: string, rep: DescribeLaneRulesResponse) => void): Promise<DescribeLaneRulesResponse>;
    /**
     * 更新泳道规则
     */
    ModifyLaneRule(req: ModifyLaneRuleRequest, cb?: (error: string, rep: ModifyLaneRuleResponse) => void): Promise<ModifyLaneRuleResponse>;
    /**
     * 查询group发布的配置
     */
    DescribeReleasedConfig(req: DescribeReleasedConfigRequest, cb?: (error: string, rep: DescribeReleasedConfigResponse) => void): Promise<DescribeReleasedConfigResponse>;
    /**
     * 查询公共配置发布信息
     */
    DescribePublicConfigReleases(req: DescribePublicConfigReleasesRequest, cb?: (error: string, rep: DescribePublicConfigReleasesResponse) => void): Promise<DescribePublicConfigReleasesResponse>;
    /**
     * 查询网关API监控明细数据
     */
    DescribeApiUseDetail(req: DescribeApiUseDetailRequest, cb?: (error: string, rep: DescribeApiUseDetailResponse) => void): Promise<DescribeApiUseDetailResponse>;
    /**
     * TSF会将软件包上传到腾讯云对象存储（COS）。调用此接口获取上传信息，如目标地域，桶，包Id，存储路径，鉴权信息等，之后请使用COS API（或SDK）进行上传。
COS相关文档请查阅：https://cloud.tencent.com/document/product/436
     */
    DescribeUploadInfo(req: DescribeUploadInfoRequest, cb?: (error: string, rep: DescribeUploadInfoResponse) => void): Promise<DescribeUploadInfoResponse>;
    /**
     * 更新API
     */
    UpdateGatewayApi(req: UpdateGatewayApiRequest, cb?: (error: string, rep: UpdateGatewayApiResponse) => void): Promise<UpdateGatewayApiResponse>;
    /**
     * 停止虚拟机部署组
     */
    StopGroup(req: StopGroupRequest, cb?: (error: string, rep: StopGroupResponse) => void): Promise<StopGroupResponse>;
    /**
     * 下线部署组所有机器实例
     */
    ShrinkGroup(req: ShrinkGroupRequest, cb?: (error: string, rep: ShrinkGroupResponse) => void): Promise<ShrinkGroupResponse>;
    /**
     * 启动分组
     */
    StartGroup(req: StartGroupRequest, cb?: (error: string, rep: StartGroupResponse) => void): Promise<StartGroupResponse>;
    /**
     * 修改容器部署组
     */
    ModifyContainerGroup(req: ModifyContainerGroupRequest, cb?: (error: string, rep: ModifyContainerGroupResponse) => void): Promise<ModifyContainerGroupResponse>;
}
