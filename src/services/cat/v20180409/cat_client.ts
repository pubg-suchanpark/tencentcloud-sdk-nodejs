/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { AbstractClient } from "../../../common/abstract_client"
import { ClientConfig } from "../../../common/interface"
import {
  DescribeProbeNodesResponse,
  Label,
  Field,
  KeyValuePair,
  TaskResult,
  SuspendProbeTaskResponse,
  ProbeTaskBasicConfiguration,
  DescribeProbeMetricDataResponse,
  DescribeDetailedSingleProbeDataRequest,
  DescribeProbeTasksResponse,
  DeleteProbeTaskRequest,
  DescribeDetailedSingleProbeDataResponse,
  SuspendProbeTaskRequest,
  DescribeProbeMetricDataRequest,
  DescribeProbeTasksRequest,
  UpdateProbeTaskConfigurationListRequest,
  CreateProbeTasksRequest,
  ProbeTask,
  ResumeProbeTaskResponse,
  DeleteProbeTaskResponse,
  CreateProbeTasksResponse,
  ResumeProbeTaskRequest,
  DescribeProbeNodesRequest,
  NodeDefine,
  Tag,
  UpdateProbeTaskConfigurationListResponse,
  DetailedSingleDataDefine,
} from "./cat_models"

/**
 * cat client
 * @class
 */
export class Client extends AbstractClient {
  constructor(clientConfig: ClientConfig) {
    super("cat.tencentcloudapi.com", "2018-04-09", clientConfig)
  }

  /**
   * 暂停拨测任务
   */
  async SuspendProbeTask(
    req: SuspendProbeTaskRequest,
    cb?: (error: string, rep: SuspendProbeTaskResponse) => void
  ): Promise<SuspendProbeTaskResponse> {
    return this.request("SuspendProbeTask", req, cb)
  }

  /**
   * 列出云拨测指标详细数据
   */
  async DescribeProbeMetricData(
    req: DescribeProbeMetricDataRequest,
    cb?: (error: string, rep: DescribeProbeMetricDataResponse) => void
  ): Promise<DescribeProbeMetricDataResponse> {
    return this.request("DescribeProbeMetricData", req, cb)
  }

  /**
   * 查询拨测任务列表
   */
  async DescribeProbeTasks(
    req: DescribeProbeTasksRequest,
    cb?: (error: string, rep: DescribeProbeTasksResponse) => void
  ): Promise<DescribeProbeTasksResponse> {
    return this.request("DescribeProbeTasks", req, cb)
  }

  /**
   * 批量更新拨测任务配置
   */
  async UpdateProbeTaskConfigurationList(
    req: UpdateProbeTaskConfigurationListRequest,
    cb?: (error: string, rep: UpdateProbeTaskConfigurationListResponse) => void
  ): Promise<UpdateProbeTaskConfigurationListResponse> {
    return this.request("UpdateProbeTaskConfigurationList", req, cb)
  }

  /**
   * 查询拨测节点
   */
  async DescribeProbeNodes(
    req: DescribeProbeNodesRequest,
    cb?: (error: string, rep: DescribeProbeNodesResponse) => void
  ): Promise<DescribeProbeNodesResponse> {
    return this.request("DescribeProbeNodes", req, cb)
  }

  /**
   * 批量创建拨测任务
   */
  async CreateProbeTasks(
    req: CreateProbeTasksRequest,
    cb?: (error: string, rep: CreateProbeTasksResponse) => void
  ): Promise<CreateProbeTasksResponse> {
    return this.request("CreateProbeTasks", req, cb)
  }

  /**
   * 根据时间范围、任务ID、运营商等条件查询单次拨测详情数据
   */
  async DescribeDetailedSingleProbeData(
    req: DescribeDetailedSingleProbeDataRequest,
    cb?: (error: string, rep: DescribeDetailedSingleProbeDataResponse) => void
  ): Promise<DescribeDetailedSingleProbeDataResponse> {
    return this.request("DescribeDetailedSingleProbeData", req, cb)
  }

  /**
   * 删除拨测任务
   */
  async DeleteProbeTask(
    req: DeleteProbeTaskRequest,
    cb?: (error: string, rep: DeleteProbeTaskResponse) => void
  ): Promise<DeleteProbeTaskResponse> {
    return this.request("DeleteProbeTask", req, cb)
  }

  /**
   * 恢复拨测任务
   */
  async ResumeProbeTask(
    req: ResumeProbeTaskRequest,
    cb?: (error: string, rep: ResumeProbeTaskResponse) => void
  ): Promise<ResumeProbeTaskResponse> {
    return this.request("ResumeProbeTask", req, cb)
  }
}
