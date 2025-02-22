import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeProbeNodesResponse, SuspendProbeTaskResponse, DescribeProbeMetricDataResponse, DescribeDetailedSingleProbeDataRequest, DescribeProbeTasksResponse, DeleteProbeTaskRequest, DescribeDetailedSingleProbeDataResponse, SuspendProbeTaskRequest, DescribeProbeMetricDataRequest, DescribeProbeTasksRequest, UpdateProbeTaskConfigurationListRequest, CreateProbeTasksRequest, ResumeProbeTaskResponse, DeleteProbeTaskResponse, CreateProbeTasksResponse, ResumeProbeTaskRequest, DescribeProbeNodesRequest, UpdateProbeTaskConfigurationListResponse } from "./cat_models";
/**
 * cat client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 暂停拨测任务
     */
    SuspendProbeTask(req: SuspendProbeTaskRequest, cb?: (error: string, rep: SuspendProbeTaskResponse) => void): Promise<SuspendProbeTaskResponse>;
    /**
     * 列出云拨测指标详细数据
     */
    DescribeProbeMetricData(req: DescribeProbeMetricDataRequest, cb?: (error: string, rep: DescribeProbeMetricDataResponse) => void): Promise<DescribeProbeMetricDataResponse>;
    /**
     * 查询拨测任务列表
     */
    DescribeProbeTasks(req: DescribeProbeTasksRequest, cb?: (error: string, rep: DescribeProbeTasksResponse) => void): Promise<DescribeProbeTasksResponse>;
    /**
     * 批量更新拨测任务配置
     */
    UpdateProbeTaskConfigurationList(req: UpdateProbeTaskConfigurationListRequest, cb?: (error: string, rep: UpdateProbeTaskConfigurationListResponse) => void): Promise<UpdateProbeTaskConfigurationListResponse>;
    /**
     * 查询拨测节点
     */
    DescribeProbeNodes(req: DescribeProbeNodesRequest, cb?: (error: string, rep: DescribeProbeNodesResponse) => void): Promise<DescribeProbeNodesResponse>;
    /**
     * 批量创建拨测任务
     */
    CreateProbeTasks(req: CreateProbeTasksRequest, cb?: (error: string, rep: CreateProbeTasksResponse) => void): Promise<CreateProbeTasksResponse>;
    /**
     * 根据时间范围、任务ID、运营商等条件查询单次拨测详情数据
     */
    DescribeDetailedSingleProbeData(req: DescribeDetailedSingleProbeDataRequest, cb?: (error: string, rep: DescribeDetailedSingleProbeDataResponse) => void): Promise<DescribeDetailedSingleProbeDataResponse>;
    /**
     * 删除拨测任务
     */
    DeleteProbeTask(req: DeleteProbeTaskRequest, cb?: (error: string, rep: DeleteProbeTaskResponse) => void): Promise<DeleteProbeTaskResponse>;
    /**
     * 恢复拨测任务
     */
    ResumeProbeTask(req: ResumeProbeTaskRequest, cb?: (error: string, rep: ResumeProbeTaskResponse) => void): Promise<ResumeProbeTaskResponse>;
}
