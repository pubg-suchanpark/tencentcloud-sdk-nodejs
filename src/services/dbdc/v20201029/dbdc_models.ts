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
 * 集群设备组信息。
 */
export interface InstanceDeviceInfo {
  /**
      * 集群ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
      * 读写设备组
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReadWriteDevice: Array<DeviceInfo>

  /**
      * 只读设备组
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReadOnlyDevice: Array<DeviceInfo>

  /**
      * 空闲设备组
注意：此字段可能返回 null，表示取不到有效值。
      */
  FreeDevice: Array<DeviceInfo>
}

/**
 * DescribeInstanceDetail返回参数结构体
 */
export interface DescribeInstanceDetailResponse {
  /**
   * 独享集群实例Id
   */
  InstanceId: string

  /**
   * 独享集群实例名称
   */
  InstanceName: string

  /**
   * 地域
   */
  Region: string

  /**
   * 产品ID, 0:CDB, 1:TDSQL
   */
  ProductId: number

  /**
   * 集群类型, 0:公有云, 1:金融围笼
   */
  Type: number

  /**
   * 主机类型, 0:物理机, 1:cvm本地盘, 2:cvm云盘
   */
  HostType: number

  /**
   * 自动续费标志, 0:未设置, 1:自动续费, 2:到期不续费
   */
  AutoRenewFlag: number

  /**
   * 集群状态
   */
  Status: number

  /**
   * 集群状态描述
   */
  StatusDesc: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 到期时间
   */
  PeriodEndTime: string

  /**
   * 主机数
   */
  HostNum: number

  /**
   * Db实例数
   */
  DbNum: number

  /**
   * 分配策略, 0:紧凑, 1:均匀
   */
  AssignStrategy: number

  /**
   * 总主机CPU(单位:核)
   */
  CpuSpec: number

  /**
   * 总已分配CPU(单位:核)
   */
  CpuAssigned: number

  /**
   * 总可分配CPU(单位:核)
   */
  CpuAssignable: number

  /**
   * 总主机内存(单位:GB)
   */
  MemorySpec: number

  /**
   * 总已分配内存(单位:GB)
   */
  MemoryAssigned: number

  /**
   * 总可分配内存(单位:GB)
   */
  MemoryAssignable: number

  /**
   * 总机器磁盘(单位:GB)
   */
  DiskSpec: number

  /**
   * 总已分配磁盘(单位:GB)
   */
  DiskAssigned: number

  /**
   * 总可分配磁盘(单位:GB)
   */
  DiskAssignable: number

  /**
   * 可用区
   */
  Zone: string

  /**
      * 围笼ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  FenceId: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceList返回参数结构体
 */
export interface DescribeInstanceListResponse {
  /**
   * 独享集群列表
   */
  Instances: Array<DescribeInstanceDetail>

  /**
   * 独享集群实例总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDBInstances请求参数结构体
 */
export interface DescribeDBInstancesRequest {
  /**
   * 独享集群实例Id
   */
  InstanceId: string

  /**
   * 独享集群主机Id
   */
  HostId?: string

  /**
   * 分页返回数量
   */
  Limit?: number

  /**
   * 分页偏移量
   */
  Offset?: number

  /**
   * 实例类型,0:mariadb, 1:tdsql
   */
  ShardType?: Array<number>
}

/**
 * DescribeInstanceDetail请求参数结构体
 */
export interface DescribeInstanceDetailRequest {
  /**
   * 独享集群实例Id
   */
  InstanceId: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
   * 集群类型: 0 一主一备, 1 一主两备...N-1 一主N备
   */
  InstanceTypes?: Array<number>

  /**
   * 产品ID:  0 MYSQL，1 TDSQL
   */
  ProductIds?: Array<number>

  /**
   * 集群uuid: 如 dbdc-q810131s
   */
  InstanceIds?: Array<string>

  /**
   * 是否按金融围笼标志搜索
   */
  FenceFlag?: boolean

  /**
   * 按实例名字模糊匹配
   */
  InstanceName?: string

  /**
   * 每页数目, 整型
   */
  PageSize?: number

  /**
   * 页码, 整型
   */
  PageNumber?: number

  /**
   * 排序字段，枚举：createtime,groupname
   */
  OrderBy?: string

  /**
   * 排序方式: asc升序, desc降序
   */
  OrderByType?: string

  /**
   * 集群状态: -2 已删除, -1 已隔离, 0 创建中, 1 运行中, 2 扩容中, 3 删除中
   */
  InstanceStatus?: number
}

/**
 * 设备信息
 */
export interface DeviceInfo {
  /**
   * 设备ID
   */
  DeviceId: number

  /**
   * 设备No
   */
  DeviceNo: string

  /**
   * 设备类型
   */
  DevClass: string

  /**
   * 设备总内存，单位GB
   */
  MaxMemory: number

  /**
   * 设备总磁盘，单位GB
   */
  MaxDisk: number

  /**
   * 设备剩余内存，单位GB
   */
  RestMemory: number

  /**
   * 设备剩余磁盘，单位GB
   */
  RestDisk: number

  /**
   * 设备机器个数
   */
  RawDeviceNum: number

  /**
   * 数据库实例个数
   */
  InstanceNum: number
}

/**
 * DB实例详情
 */
export interface DBInstanceDetail {
  /**
   * DB实例Id
   */
  InstanceId: string

  /**
   * DB实例名称
   */
  InstanceName: string

  /**
   * DB实例状态,-1:已隔离, 0:创建中, 1:流程中, 2:运行中, 3:未初始化
   */
  Status: number

  /**
   * DB实例状态描述,-1:已隔离, 0:创建中, 1:流程中, 2:运行中, 3:未初始化
   */
  StatusDesc: string

  /**
   * DB实例版本
   */
  DbVersion: string

  /**
   * Vip信息
   */
  Vip: string

  /**
   * Vip使用的端口号
   */
  Vport: number

  /**
   * 字符串型的私有网络ID
   */
  UniqueVpcId: string

  /**
   * 字符串型的私有网络子网ID
   */
  UniqueSubnetId: string

  /**
   * 是否为分布式版本,0:否,1:是
   */
  Shard: number

  /**
   * DB实例节点数
   */
  NodeNum: number

  /**
   * CPU规格(单位:核数)
   */
  Cpu: number

  /**
   * 内存规格(单位:GB)
   */
  Memory: number

  /**
   * 磁盘规格(单位:GB)
   */
  Disk: number

  /**
   * 分布式类型的实例的分片数
   */
  ShardNum: number

  /**
   * 可用区
   */
  Zone: string

  /**
   * Db所在主机列表, 格式: m1,s1|m2,s2
   */
  DbHosts: string

  /**
   * 主机角色, 1:主, 2:从, 3:主+从
   */
  HostRole: number

  /**
   * DB引擎，MySQL,Percona,MariaDB
   */
  DbEngine: string
}

/**
 * ModifyInstanceName返回参数结构体
 */
export interface ModifyInstanceNameResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 集群扩展信息。
 */
export interface InstanceExpand {
  /**
   * 集群ID
   */
  InstanceId: string

  /**
   * 集群名称
   */
  InstanceName: string

  /**
   * 用户ID
   */
  AppId: number

  /**
   * 地域
   */
  Region: string

  /**
   * 可用区
   */
  Zone: string

  /**
   * 集群类型： 0：一主一备，1：一主两备
   */
  InstanceType: number

  /**
   * 集群状态: 0 集群创建中, 1 集群有效, 2 集群扩容中, 3 集群删除中, 4 集群缩容中 -1 集群已隔离 -2 集群已删除
   */
  InstanceStatus: number

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 实例自动续费标识： 0正常续费 1自动续费 2到期不续费
   */
  AutoRenewFlag: number

  /**
   * 机型
   */
  Machine: string

  /**
   * 过期时间
   */
  PeriodEndTime: string

  /**
   * 集群信息
   */
  InstanceDetail: InstanceDetail

  /**
   * 计费侧的产品ID
   */
  Pid: number
}

/**
 * 集群容量信息。
 */
export interface InstanceDetail {
  /**
   * 集群状态，0：运行中，1：不在运行
   */
  Status: number

  /**
   * 读写集群剩余内存容量，单位GB
   */
  ReadWriteTotalLeaveMemory: number

  /**
   * 读写集群剩余磁盘容量，单位GB
   */
  ReadWriteTotalLeaveDisk: number

  /**
   * 读写集群总内存容量，单位GB
   */
  ReadWriteTotalMemory: number

  /**
   * 读写集群总磁盘容量，单位GB
   */
  ReadWriteTotalDisk: number

  /**
   * 只读集群剩余内存容量，单位GB
   */
  ReadOnlyTotalLeaveMemory: number

  /**
   * 只读集群剩余磁盘容量，单位GB
   */
  ReadOnlyTotalLeaveDisk: number

  /**
   * 只读集群总内存容量，单位GB
   */
  ReadOnlyTotalMemory: number

  /**
   * 只读集群总磁盘容量，单位GB
   */
  ReadOnlyTotalDisk: number

  /**
   * 集群设备详情
   */
  InstanceDeviceInfos: Array<InstanceDeviceInfo>
}

/**
 * DescribeDBInstances返回参数结构体
 */
export interface DescribeDBInstancesResponse {
  /**
   * 独享集群内的DB实例列表
   */
  Instances: Array<DBInstanceDetail>

  /**
   * 独享集群内的DB实例总数
   */
  TotalCount: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 独享集群详情
 */
export interface DescribeInstanceDetail {
  /**
   * 独享集群实例Id
   */
  InstanceId: string

  /**
   * 独享集群实例名称
   */
  InstanceName: string

  /**
   * 地域
   */
  Region: string

  /**
   * 产品ID, 0:CDB, 1:TDSQL
   */
  ProductId: number

  /**
   * 集群类型, 0:公有云, 1:金融围笼
   */
  Type: number

  /**
   * 主机类型, 0:物理机, 1:cvm本地盘, 2:cvm云盘
   */
  HostType: number

  /**
   * 自动续费标志, 0:未设置, 1:自动续费, 2:到期不续费
   */
  AutoRenewFlag: number

  /**
   * 集群状态
   */
  Status: number

  /**
   * 集群状态描述
   */
  StatusDesc: string

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 到期时间
   */
  PeriodEndTime: string

  /**
   * 主机数
   */
  HostNum: number

  /**
   * DB实例数
   */
  DbNum: number

  /**
   * 分配策略, 0:紧凑, 1:均匀
   */
  AssignStrategy: number

  /**
   * 总主机CPU(单位:核数)
   */
  CpuSpec: number

  /**
   * 总已分配CPU(单位:核数)
   */
  CpuAssigned: number

  /**
   * 总可分配CPU(单位:核数)
   */
  CpuAssignable: number

  /**
   * 总主机内存(单位:GB)
   */
  MemorySpec: number

  /**
   * 总已分配内存(单位:GB)
   */
  MemoryAssigned: number

  /**
   * 总可分配内存(单位:GB)
   */
  MemoryAssignable: number

  /**
   * 总机器磁盘(单位:GB)
   */
  DiskSpec: number

  /**
   * 总已分配磁盘(单位:GB)
   */
  DiskAssigned: number

  /**
   * 总可分配磁盘(单位:GB)
   */
  DiskAssignable: number

  /**
   * 可用区
   */
  Zone: string

  /**
      * 围笼ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  FenceId: string
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 集群数量
   */
  TotalCount?: number

  /**
   * 集群扩展信息
   */
  Instances?: Array<InstanceExpand>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceList请求参数结构体
 */
export interface DescribeInstanceListRequest {
  /**
   * 分页返回数量
   */
  Limit?: number

  /**
   * 分页偏移量
   */
  Offset?: number

  /**
   * 排序字段，createTime,instancename两者之一
   */
  OrderBy?: string

  /**
   * 排序规则，desc,asc两者之一
   */
  SortBy?: string

  /**
   * 按产品过滤，0:CDB, 1:TDSQL
   */
  ProductId?: Array<number>

  /**
   * 按实例ID过滤
   */
  InstanceId?: Array<string>

  /**
   * 按实例名称过滤
   */
  InstanceName?: Array<string>

  /**
   * 按金融围笼ID过滤
   */
  FenceId?: Array<string>

  /**
   * 按实例状态过滤, -1:已隔离, 0:创建中, 1:运行中, 2:扩容中, 3:删除中
   */
  Status?: Array<number>
}

/**
 * ModifyInstanceName请求参数结构体
 */
export interface ModifyInstanceNameRequest {
  /**
   * 独享集群实例Id
   */
  InstanceId: string

  /**
   * 独享集群实例名称
   */
  InstanceName?: string
}
