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
 * 报告分类信息
 */
export interface ClassifyInfo {
  /**
   * 一级分类
   */
  FirstClass: string

  /**
   * 二级分类
   */
  SecondClass: string

  /**
   * 三级分类
   */
  ThirdClass: string

  /**
   * 一级分类序号
   */
  FirstClassId: number

  /**
   * 二级分类序号
   */
  SecondClassId: number

  /**
   * 三级分类序号
   */
  ThirdClassId: number
}

/**
 * DescribeStructureTaskResult请求参数结构体
 */
export interface DescribeStructureTaskResultRequest {
  /**
   * 结构化任务ID
   */
  MainTaskId: string
}

/**
 * 机器核保输出
 */
export interface MachineUnderwriteOutput {
  /**
   * 客户号
   */
  CustomerId: string

  /**
   * 客户姓名
   */
  CustomerName: string

  /**
   * 各个险种的结果
   */
  Results: Array<InsuranceResult>
}

/**
 * CreateStructureTask请求参数结构体
 */
export interface CreateStructureTaskRequest {
  /**
      * 服务类型
Structured 仅结构化
Underwrite 结构化+核保
      */
  ServiceType: string

  /**
   * 创建任务时可以上传多个报告，后台生成多个识别子任务，子任务的详细信息
   */
  TaskInfos: Array<CreateStructureTaskInfo>

  /**
   * 保单号
   */
  PolicyId?: string

  /**
      * 核保触发方式
Auto 自动
Manual 手动
      */
  TriggerType?: string

  /**
      * 险种，如果是体检报告类型，此参数是必填，类型说明如下：
CriticalDiseaseInsurance:重疾险
LifeInsurance：寿险
AccidentInsurance：意外险
      */
  InsuranceTypes?: Array<string>

  /**
   * 回调地址，接收Post请求传送结果
   */
  CallbackUrl?: string
}

/**
 * DescribeStructCompareData请求参数结构体
 */
export interface DescribeStructCompareDataRequest {
  /**
   * 主任务号
   */
  MainTaskId?: string

  /**
   * 子任务号
   */
  SubTaskId?: string
}

/**
 * 包含险种的各个核保结论
 */
export interface InsuranceResult {
  /**
   * 险种
   */
  InsuranceType: string

  /**
   * 对应险种的机器核保结果
   */
  Result: Array<MachinePredict>
}

/**
 * DescribeStructureDifference返回参数结构体
 */
export interface DescribeStructureDifferenceResponse {
  /**
   * 主任务号
   */
  MainTaskId: string

  /**
      * 结果状态：
0：返回成功
1：结果未生成
2：结果生成失败
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
   * 差异的结果数组
   */
  Results: Array<PerStructDifference>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 复核差异接口的每一份报告的差异结果
 */
export interface PerStructDifference {
  /**
   * 子任务ID
   */
  SubTaskId: string

  /**
   * 任务类型
   */
  TaskType: string

  /**
   * 修改的项
   */
  ModifyItems: Array<StructureModifyItem>

  /**
   * 新增的项
   */
  NewItems: Array<StructureOneItem>

  /**
   * 删除的项
   */
  RemoveItems: Array<StructureOneItem>
}

/**
 * UploadMedicalFile请求参数结构体
 */
export interface UploadMedicalFileRequest {
  /**
   * 文件内容的base64的值。FileBase64与FileURL有一个不为空即可，若FileURL同时存在，那么取FileBase64。
   */
  File?: File

  /**
   * 文件的URL地址。FileBase64与FileURL有一个不为空即可，若FileBase64同时存在，那么取FileBase64。
   */
  FileURL?: string
}

/**
 * 结构化对比指标（准确率/召回率）数据
 */
export interface CompareMetricsData {
  /**
      * 短文准确率
注意：此字段可能返回 null，表示取不到有效值。
      */
  ShortStructAccuracy: string

  /**
      * 短文召回率
注意：此字段可能返回 null，表示取不到有效值。
      */
  ShortStructRecall: string

  /**
      * 长文结构化准确率
注意：此字段可能返回 null，表示取不到有效值。
      */
  LongStructAccuracy: string

  /**
      * 长文结构化召回率
注意：此字段可能返回 null，表示取不到有效值。
      */
  LongStructRecall: string

  /**
      * 长文提取准确率
注意：此字段可能返回 null，表示取不到有效值。
      */
  LongContentAccuracy: string

  /**
      * 长文提取召回率
注意：此字段可能返回 null，表示取不到有效值。
      */
  LongContentRecall: string
}

/**
 * DescribeMachineUnderwrite请求参数结构体
 */
export interface DescribeMachineUnderwriteRequest {
  /**
   * 核保任务ID
   */
  UnderwriteTaskId: string
}

/**
 * 人工复核数据的子任务信息
 */
export interface ReviewDataTaskInfo {
  /**
   * 主任务号
   */
  MainTaskId: string

  /**
   * 子任务号
   */
  SubTaskId: string

  /**
   * 任务名
   */
  TaskName: string

  /**
   * 任务类型
   */
  TaskType: string
}

/**
 * DescribeStructureResult请求参数结构体
 */
export interface DescribeStructureResultRequest {
  /**
   * 创建任务时返回的主任务ID
   */
  MainTaskId: string
}

/**
 * 机器核保结论子项
 */
export interface UnderwriteItem {
  /**
   * 字段名
   */
  Name: string

  /**
   * 结果
   */
  Result: string

  /**
   * 风险值或者说明
   */
  Value: string
}

/**
 * DescribeStructCompareData返回参数结构体
 */
export interface DescribeStructCompareDataResponse {
  /**
   * 保单号
   */
  PolicyId: string

  /**
   * 主任务号
   */
  MainTaskId: string

  /**
      * 客户号
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomerId: string

  /**
      * 客户姓名
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomerName: string

  /**
   * 复核时间
   */
  ReviewTime: string

  /**
   * 算法识别结果
   */
  MachineResult: string

  /**
   * 人工复核结果
   */
  ManualResult: string

  /**
   * 结构化对比指标数据
   */
  Metrics: CompareMetricsData

  /**
   * 新增项
   */
  NewItems: string

  /**
   * 修改项
   */
  ModifyItems: string

  /**
   * 子任务号
   */
  SubTaskId: string

  /**
   * 所有的子任务
   */
  AllTasks: Array<ReviewDataTaskInfo>

  /**
   * 任务类型
   */
  TaskType: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 复核差异接口的新增或者删除的项
 */
export interface StructureOneItem {
  /**
      * 新字段的路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  Path: string

  /**
      * 字段的值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string
}

/**
 * 用于返回结构化任务结果
 */
export interface ResultObject {
  /**
   * 图片质量分
   */
  Quality: number

  /**
   * 由结构化算法结构化json转换的字符串，具体协议参见算法结构化结果协议
   */
  StructureResult: string

  /**
      * 报告分类信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReportType: Array<ClassifyInfo>
}

/**
 * DescribeStructureResult返回参数结构体
 */
export interface DescribeStructureResultResponse {
  /**
      * 结果状态：
0：返回成功
1：结果未生成
2：结果生成失败
      */
  Status: number

  /**
   * 结构化结果
   */
  Results: Array<StructureResultObject>

  /**
   * 主任务ID
   */
  MainTaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机器核保预测结果
 */
export interface MachinePredict {
  /**
   * 核保引擎名称
   */
  Title: string

  /**
   * 核保结论
   */
  Conclusion: string

  /**
   * AI决策树解释
   */
  Explanation: Array<UnderwriteItem>

  /**
   * 疾病指标
   */
  Disease: Array<UnderwriteItem>

  /**
   * 检查异常
   */
  Laboratory: Array<UnderwriteItem>
}

/**
 * CreateStructureTask返回参数结构体
 */
export interface CreateStructureTaskResponse {
  /**
   * 创建的主任务号，用于查询结果
   */
  MainTaskId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeStructureTaskResult返回参数结构体
 */
export interface DescribeStructureTaskResultResponse {
  /**
      * 结果状态：
0：返回成功
1：结果未生成
2：结果生成失败
      */
  Status: number

  /**
      * 结构化识别结果数组，每个数组元素对应一个图片的结构化结果，顺序和输入参数的ImageList或FileList对应。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Results: Array<ResultObject>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeMachineUnderwrite返回参数结构体
 */
export interface DescribeMachineUnderwriteResponse {
  /**
   * 腾讯云主账号ID
   */
  Uin: string

  /**
   * 操作人子账户ID
   */
  SubAccountUin: string

  /**
   * 保单ID
   */
  PolicyId: string

  /**
   * 主任务ID
   */
  MainTaskId: string

  /**
   * 核保任务ID
   */
  UnderwriteTaskId: string

  /**
   * 状态码
   */
  Status: number

  /**
   * 机器核保结果
   */
  UnderwriteResults: Array<MachineUnderwriteOutput>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateUnderwriteTaskById请求参数结构体
 */
export interface CreateUnderwriteTaskByIdRequest {
  /**
   * 主任务ID数组，
   */
  MainTaskIds: Array<string>

  /**
   * 回调地址，可不传（提供轮询机制）。
   */
  CallbackUrl?: string
}

/**
 * CreateUnderwriteTaskById返回参数结构体
 */
export interface CreateUnderwriteTaskByIdResponse {
  /**
   * 核保任务ID数据
   */
  UnderwriteTaskIds: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 结构化结果
 */
export interface StructureResultObject {
  /**
   * 0表示正常返回
   */
  Code: number

  /**
   * 报告类型
   */
  TaskType: string

  /**
   * 结构化结果
   */
  StructureResult: string

  /**
   * 子任务ID
   */
  SubTaskId: string
}

/**
 * 创建结构化任务子任务信息
 */
export interface CreateStructureTaskInfo {
  /**
   * 任务类型
   */
  TaskType: string

  /**
   * 报告文件上传的地址列表，需按顺序排列。如果使用ImageList参数，置为空数组即可
   */
  FileList: Array<string>

  /**
   * 客户号
   */
  CustomerId?: string

  /**
   * 客户姓名
   */
  CustomerName?: string

  /**
   * 报告上传的图片内容数组，图片内容采用base64编码，需按顺序排列
   */
  ImageList?: Array<string>

  /**
   * 报告年份
   */
  Year?: string
}

/**
 * DescribeStructureDifference请求参数结构体
 */
export interface DescribeStructureDifferenceRequest {
  /**
   * 主任务号
   */
  MainTaskId?: string

  /**
   * 子任务号
   */
  SubTaskId?: string
}

/**
 * UploadMedicalFile返回参数结构体
 */
export interface UploadMedicalFileResponse {
  /**
      * 文件存储的key，可以用来创建结构化任务。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FileKey: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 结构化复核差异接口的修改的项
 */
export interface StructureModifyItem {
  /**
      * 修改的字段的路径
注意：此字段可能返回 null，表示取不到有效值。
      */
  Path: string

  /**
      * 机器结果的值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Machine: string

  /**
      * 人工结果的值
注意：此字段可能返回 null，表示取不到有效值。
      */
  Manual: string
}
