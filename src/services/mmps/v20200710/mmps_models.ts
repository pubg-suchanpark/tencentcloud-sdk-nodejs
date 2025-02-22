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

/**
 * DescribeFlySecMiniAppReportUrl请求参数结构体
 */
export interface DescribeFlySecMiniAppReportUrlRequest {
  /**
   * 任务id
   */
  TaskID: string

  /**
   * 小程序appid
   */
  MiniAppID: string

  /**
   * 诊断方式 1:基础诊断，2:深度诊断
   */
  Mode: number

  /**
   * 诊断报告类型 0:基础诊断报告, 1:总裁版诊断报告
   */
  ReportType?: number
}

/**
 * DescribeScanTaskList请求参数结构体
 */
export interface DescribeScanTaskListRequest {
  /**
   * 任务来源, -1:所有, 0:默认值(私域), 1:灵犀, 2:灵鲲;
   */
  Source: number

  /**
   * 应用平台, 0:android, 1:ios, 2:小程序
   */
  Platform: number

  /**
   * 任务状态,可多值查询,例如:"1,2,3" 0:默认值(待检测/待咨询), 1.检测中, 2:待评估, 3:评估中, 4:任务完成/咨询完成, 5:任务失败, 6:咨询中;
   */
  TaskStatuses: string

  /**
   * 任务类型,可多值查询,采用逗号分隔,例如:"0,1" 0:基础版, 1:专家版, 2:本地化
   */
  TaskTypes: string

  /**
   * 页码
   */
  PageNo: number

  /**
   * 页码大小
   */
  PageSize: number

  /**
   * 应用名称或小程序名称(可选参数)
   */
  AppName?: string

  /**
   * 查询时间范围, 查询开始时间(2021-09-30 或 2021-09-30 10:57:34)
   */
  StartTime?: string

  /**
   * 查询时间范围, 查询结束时间(2021-09-30 或 2021-09-30 10:57:34)
   */
  EndTime?: string
}

/**
 * DescribeFlySecMiniAppScanTaskParam请求参数结构体
 */
export interface DescribeFlySecMiniAppScanTaskParamRequest {
  /**
   * 任务id
   */
  TaskID: string
}

/**
 * 翼扬安全资源使用情况
 */
export interface ResourceUsageInfoData {
  /**
   * 资源名称, 具体名称请查看产品配置
   */
  ResourceName: string

  /**
   * 资源总数
   */
  Total: number

  /**
   * 资源未使用次数
   */
  UnusedCount: number
}

/**
 * CreateAppScanTask请求参数结构体
 */
export interface CreateAppScanTaskRequest {
  /**
   * 任务类型, 0:基础版, 1:专家版, 2:本地化
   */
  TaskType: number

  /**
   * 任务来源, 0:默认值(私域), 1:灵犀, 2:灵鲲;
   */
  Source: number

  /**
   * 小程序AppID
   */
  AppPackage: string

  /**
   * 应用平台, 0:android, 1:ios, 2:小程序
   */
  Platform: number

  /**
   * 小程序名称
   */
  AppName?: string

  /**
   * 小程序版本
   */
  AppVersion?: string

  /**
   * 联系人信息
   */
  ContactName?: string

  /**
   * 联系电话
   */
  TelNumber?: string

  /**
   * 公司名称
   */
  CorpName?: string

  /**
   * 商务对接人员
   */
  SalesPerson?: string

  /**
   * 公司邮箱
   */
  Email?: string
}

/**
 * DescribeScanTaskStatus请求参数结构体
 */
export interface DescribeScanTaskStatusRequest {
  /**
   * 任务类型, 0:基础版, 1:专家版, 2:本地化
   */
  TaskType: number

  /**
   * 任务来源, 0:默认值(私域), 1:灵犀, 2:灵鲲;
   */
  Source: number

  /**
   * 任务id
   */
  TaskID: string

  /**
   * 应用平台, 0:android, 1:ios, 2:小程序
   */
  Platform: number
}

/**
 * DescribeBasicDiagnosisResourceUsageInfo返回参数结构体
 */
export interface DescribeBasicDiagnosisResourceUsageInfoResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Ret: number

  /**
   * 资源类型
   */
  ResourceName: string

  /**
   * 资源总数
   */
  Total: number

  /**
   * 资源未使用次数
   */
  UnusedCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateAppScanTaskRepeat返回参数结构体
 */
export interface CreateAppScanTaskRepeatResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Result: number

  /**
   * 任务id
   */
  TaskID: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeBasicDiagnosisResourceUsageInfo请求参数结构体
 */
export interface DescribeBasicDiagnosisResourceUsageInfoRequest {
  /**
   * 诊断模式 1:基础诊断，2:深度诊断
   */
  Mode: number
}

/**
 * DescribeResourceUsageInfo返回参数结构体
 */
export interface DescribeResourceUsageInfoResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Ret: number

  /**
   * 安全资源数据列表
   */
  Data: Array<ResourceUsageInfoData>

  /**
   * 安全资源数量
   */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScanTaskReportUrl返回参数结构体
 */
export interface DescribeScanTaskReportUrlResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Result: number

  /**
   * 诊断报告/堆栈信息下载链接
   */
  ReportUrl: string

  /**
      * 诊断报告/堆栈名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReportTitle: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlySecMiniAppScanTaskStatus请求参数结构体
 */
export interface DescribeFlySecMiniAppScanTaskStatusRequest {
  /**
   * 任务id
   */
  TaskID: string
}

/**
 * CreateFlySecMiniAppScanTask返回参数结构体
 */
export interface CreateFlySecMiniAppScanTaskResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Ret: number

  /**
   * 任务id
   */
  TaskID: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlySecMiniAppScanTask请求参数结构体
 */
export interface CreateFlySecMiniAppScanTaskRequest {
  /**
   * 小程序AppID
   */
  MiniAppID: string

  /**
   * 诊断模式 1:基础诊断，2:深度诊断
   */
  Mode: number

  /**
   * 小程序测试账号(自有账号体系需提供,其他情况不需要)
   */
  MiniAppTestAccount?: string

  /**
   * 小程序测试密码(自有账号体系需提供,其他情况不需要)
   */
  MiniAppTestPwd?: string

  /**
   * 小程序所属行业
   */
  Industry?: string

  /**
   * 小程序调查问卷json字符串
   */
  SurveyContent?: string

  /**
   * 手机号码
   */
  Mobile?: string

  /**
   * 邮箱地址
   */
  Email?: string

  /**
   * 商务合作接口人
   */
  SalesPerson?: string

  /**
   * 诊断扫描版本 0:正式版 1:体验版
   */
  ScanVersion?: number
}

/**
 * DescribeFlySecMiniAppScanTaskList请求参数结构体
 */
export interface DescribeFlySecMiniAppScanTaskListRequest {
  /**
   * 诊断方式 1:基础诊断，2:深度诊断
   */
  Mode: number

  /**
   * 诊断状态 -1:查询全部, 0:排队中, 1:成功, 2:失败, 3:进行中
   */
  Status: number

  /**
   * 查询数量, 0:查询所有, 其他值:最近几次的诊断数量
   */
  Size: number

  /**
   * 小程序appid(为空的时候,则查询当前用户诊断的所有小程序)
   */
  MiniAppID?: string
}

/**
 * DescribeFlySecMiniAppScanTaskParam返回参数结构体
 */
export interface DescribeFlySecMiniAppScanTaskParamResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Ret: number

  /**
   * 小程序AppID
   */
  MiniAppID: string

  /**
   * 诊断模式 1:基础诊断，2:深度诊断
   */
  Mode: number

  /**
      * 小程序测试账号(自有账号体系需提供,其他情况不需要)
注意：此字段可能返回 null，表示取不到有效值。
      */
  MiniAppTestAccount: string

  /**
      * 小程序测试密码(自有账号体系需提供,其他情况不需要)
注意：此字段可能返回 null，表示取不到有效值。
      */
  MiniAppTestPwd: string

  /**
      * 诊断扫描版本 0:正式版 1:体验版
注意：此字段可能返回 null，表示取不到有效值。
      */
  ScanVersion: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlySecMiniAppScanTaskRepeat请求参数结构体
 */
export interface CreateFlySecMiniAppScanTaskRepeatRequest {
  /**
   * 小程序AppID
   */
  MiniAppID: string

  /**
   * 诊断模式 1:基础诊断，2:深度诊断
   */
  Mode: number

  /**
   * 原任务id
   */
  OrgTaskID: string

  /**
   * 小程序测试账号(自有账号体系需提供,其他情况不需要)
   */
  MiniAppTestAccount?: string

  /**
   * 小程序测试密码(自有账号体系需提供,其他情况不需要)
   */
  MiniAppTestPwd?: string

  /**
   * 诊断扫描版本 0:正式版 1:体验版
   */
  ScanVersion?: number
}

/**
 * CreateAppScanTaskRepeat请求参数结构体
 */
export interface CreateAppScanTaskRepeatRequest {
  /**
   * 任务类型, 0:基础版, 1:专家版, 2:本地化
   */
  TaskType: number

  /**
   * 任务来源, 0:默认值(私域), 1:灵犀, 2:灵鲲;
   */
  Source: number

  /**
   * 小程序AppID
   */
  AppPackage: string

  /**
   * 应用平台, 0:android, 1:ios, 2:小程序
   */
  Platform: number

  /**
   * 原诊断任务ID
   */
  OrgTaskID: string
}

/**
 * DescribeScanTaskReportUrl请求参数结构体
 */
export interface DescribeScanTaskReportUrlRequest {
  /**
   * 任务来源, 0:默认值(私域), 1:灵犀, 2:灵鲲;
   */
  Source: number

  /**
   * 任务id
   */
  TaskID: string

  /**
   * 应用平台, 0:android, 1:ios, 2:小程序
   */
  Platform: number

  /**
   * 报告类型, 0:诊断报告, 1:堆栈报告
   */
  ReportType: number

  /**
   * 任务类型, 0:基础版, 1:专家版, 2:本地化
   */
  TaskType: number
}

/**
 * 任务流步骤详情
 */
export interface TaskFlowStepsInfo {
  /**
      * 流程编号
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowNo: string

  /**
   * 流程名称
   */
  FlowName: string

  /**
   * 流程状态, 其他值:进行中, 2:成功, 3:失败
   */
  FlowStatus: number

  /**
      * 流程状态描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowStateDesc: string

  /**
      * 流程启动时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  StartTime: string

  /**
      * 流程完成时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  EndTime: string
}

/**
 * DescribeFlySecMiniAppScanTaskList返回参数结构体
 */
export interface DescribeFlySecMiniAppScanTaskListResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Ret: number

  /**
      * 诊断任务数据列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<FlySecMiniAppTaskData>

  /**
      * 诊断任务数
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 翼扬诊断小程序任务数据
 */
export interface FlySecMiniAppTaskData {
  /**
   * 任务id
   */
  TaskID: string

  /**
   * 小程序appid
   */
  MiniAppID: string

  /**
   * 小程序名称
   */
  MiniAppName: string

  /**
   * 小程序版本
   */
  MiniAppVersion: string

  /**
   * 诊断模式 1:基础诊断，2:深度诊断
   */
  Mode: number

  /**
   * 诊断时间
   */
  CreateTime: number

  /**
   * 诊断状态, 0:排队中, 1:成功, 2:失败, 3:进行中
   */
  Status: number

  /**
   * 诊断失败错误码
   */
  Error: number
}

/**
 * CreateAppScanTask返回参数结构体
 */
export interface CreateAppScanTaskResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Result: number

  /**
   * 任务id
   */
  TaskID: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeFlySecMiniAppReportUrl返回参数结构体
 */
export interface DescribeFlySecMiniAppReportUrlResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Ret: number

  /**
      * 诊断报告下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  Url: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScanTaskList返回参数结构体
 */
export interface DescribeScanTaskListResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Result: number

  /**
      * 诊断任务数据列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Data: Array<AppTaskData>

  /**
      * 任务总数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  Total: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 隐私合规应用信息
 */
export interface AppInfoItem {
  /**
   * 小程序apiiid
   */
  AppPackage: string

  /**
      * 小程序应用名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppName: string

  /**
      * 小程序应用版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  AppVersion: string

  /**
   * 应用平台, 0:android, 1:ios, 2:小程序
   */
  Platform: number

  /**
      * 小程序隐私诊断报告下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReportUrl: string

  /**
      * 小程序隐私诊断报告名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReportTitle: string

  /**
      * 小程序隐私诊断堆栈报告下载链接
注意：此字段可能返回 null，表示取不到有效值。
      */
  BehaviorUrl: string

  /**
      * 小程序隐私诊断堆栈报告名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  BehaviorTitle: string
}

/**
 * DescribeFlySecMiniAppScanTaskStatus返回参数结构体
 */
export interface DescribeFlySecMiniAppScanTaskStatusResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Ret: number

  /**
   * 诊断状态, 0:排队中, 1:成功, 2:失败, 3:进行中
   */
  Status: number

  /**
      * 诊断失败错误码
注意：此字段可能返回 null，表示取不到有效值。
      */
  Errno: number

  /**
      * 小程序名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  MiniAppName: string

  /**
      * 小程序版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  MiniAppVersion: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateFlySecMiniAppScanTaskRepeat返回参数结构体
 */
export interface CreateFlySecMiniAppScanTaskRepeatResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Ret: number

  /**
   * 任务id
   */
  TaskID: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeScanTaskStatus返回参数结构体
 */
export interface DescribeScanTaskStatusResponse {
  /**
   * 返回值, 0:成功, 其他值请查看“返回值”定义
   */
  Result: number

  /**
   * 0:默认值(待检测/待咨询), 1.检测中,  4:任务完成/咨询完成, 5:任务失败, 6:咨询中;
   */
  Status: number

  /**
      * 诊断失败的错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ErrMsg: string

  /**
      * 任务流详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  FlowSteps: Array<TaskFlowStepsInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 应用隐私合规诊断任务数据
 */
export interface AppTaskData {
  /**
   * 任务id
   */
  TaskID: string

  /**
   * 任务类型, 0:基础版, 1:专家版, 2:本地化
   */
  TaskType: number

  /**
   * 0:默认值(待检测/待咨询), 1.检测中, 2:待评估, 3:评估中, 4:任务完成/咨询完成, 5:任务失败, 6:咨询中;
   */
  TaskStatus: number

  /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  TaskErrMsg: string

  /**
   * 来源,0:默认值(私域), 1:灵犀, 2:灵鲲
   */
  Source: number

  /**
   * 应用信息
   */
  AppInfo: AppInfoItem

  /**
   * 任务启动时间
   */
  StartTime: string

  /**
   * 任务完成时间(更新时间)
   */
  EndTime: string
}

/**
 * DescribeResourceUsageInfo请求参数结构体
 */
export type DescribeResourceUsageInfoRequest = null
