/**
 * CreateRecord请求参数结构体
 */
export interface CreateRecordRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 记录类型，通过 API 记录类型获得，大写英文，比如：A 。
      */
    RecordType: string;
    /**
      * 记录线路，通过 API 记录线路获得，中文，比如：默认。
      */
    RecordLine: string;
    /**
      * 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。
      */
    Value: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
    /**
      * 主机记录，如 www，如果不传，默认为 @。
      */
    SubDomain?: string;
    /**
      * 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。
      */
    RecordLineId?: string;
    /**
      * MX 优先级，当记录类型是 MX 时有效，范围1-20，MX 记录时必选。
      */
    MX?: number;
    /**
      * TTL，范围1-604800，不同等级域名最小值不同。
      */
    TTL?: number;
    /**
      * 权重信息，0到100的整数。仅企业 VIP 域名可用，0 表示关闭，不传该参数，表示不设置权重信息。
      */
    Weight?: number;
    /**
      * 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
      */
    Status?: string;
}
/**
 * 查看任务详情返回结构
 */
export interface DescribeBatchTaskDetail {
    /**
      * 见BatchRecordInfo
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordList: Array<BatchRecordInfo>;
    /**
      * 任务编号
      */
    Id: number;
    /**
      * 域名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainGrade: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrMsg: string;
    /**
      * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation: string;
    /**
      * 域名ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainId: number;
}
/**
 * ModifyVasAutoRenewStatus返回参数结构体
 */
export interface ModifyVasAutoRenewStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteDomainAlias返回参数结构体
 */
export interface DeleteDomainAliasResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifySubdomainStatus请求参数结构体
 */
export interface ModifySubdomainStatusRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 记录类型。允许的值为A、CNAME、MX、TXT、NS、AAAA、SPF、SRV、CAA、URL、URL1。若要传多个，用英文逗号分隔，例如A,TXT,CNAME。
      */
    RecordType: string;
    /**
      * 记录状态。允许的值为disable。
      */
    Status: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
    /**
      * 主机记录，如 www，如果不传，默认为 @。
      */
    SubDomain?: string;
}
/**
 * CreateRecordBatch返回参数结构体
 */
export interface CreateRecordBatchResponse {
    /**
      * 批量添加域名信息
      */
    DetailList: Array<CreateRecordBatchDetail>;
    /**
      * 批量任务的ID
      */
    JobId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 批量添加域名任务中的记录信息
 */
export interface CreateDomainBatchRecord {
    /**
      * 子域名(主机记录)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubDomain: string;
    /**
      * 记录类型, 详见 DescribeRecordType 接口
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordType: string;
    /**
      * 解析记录的线路，详见 DescribeRecordLineList 接口
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordLine: string;
    /**
      * 记录值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 记录的 TTL 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    TTL: number;
    /**
      * 记录添加状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrMsg: string;
    /**
      * 此条记录在列表中的ID
      */
    Id: number;
}
/**
 * 域名解析量统计查询信息
 */
export interface DomainAnalyticsInfo {
    /**
      * DATE:按天维度统计 HOUR:按小时维度统计
      */
    DnsFormat: string;
    /**
      * 当前统计周期解析量总计
      */
    DnsTotal: number;
    /**
      * 当前查询的域名
      */
    Domain: string;
    /**
      * 当前统计周期开始时间
      */
    StartDate: string;
    /**
      * 当前统计周期结束时间
      */
    EndDate: string;
}
/**
 * DescribeBatchTask请求参数结构体
 */
export interface DescribeBatchTaskRequest {
    /**
      * 任务ID
      */
    JobId: number;
}
/**
 * 当前统计维度解析量小计
 */
export interface DomainAnalyticsDetail {
    /**
      * 当前统计维度解析量小计
      */
    Num: number;
    /**
      * 按天统计时，为统计日期
      */
    DateKey: string;
    /**
      * 按小时统计时，为统计的当前时间的小时数(0-23)，例：HourKey为23时，统计周期为22点-23点的解析量
注意：此字段可能返回 null，表示取不到有效值。
      */
    HourKey: number;
}
/**
 * PayOrderWithBalance返回参数结构体
 */
export interface PayOrderWithBalanceResponse {
    /**
      * 此次操作支付成功的订单id数组
      */
    DealIdList: Array<string>;
    /**
      * 此次操作支付成功的大订单号数组
      */
    BigDealIdList: Array<string>;
    /**
      * 此次操作支付成功的订单号数组
      */
    DealNameList: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomain返回参数结构体
 */
export interface DescribeDomainResponse {
    /**
      * 域名信息
      */
    DomainInfo: DomainInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRecordLineList返回参数结构体
 */
export interface DescribeRecordLineListResponse {
    /**
      * 线路列表。
      */
    LineList: Array<LineInfo>;
    /**
      * 线路分组列表。
      */
    LineGroupList: Array<LineGroupInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 域名详情
 */
export interface DomainInfo {
    /**
      * 域名ID
      */
    DomainId: number;
    /**
      * 域名状态
      */
    Status: string;
    /**
      * 域名套餐等级
      */
    Grade: string;
    /**
      * 域名分组ID
      */
    GroupId: number;
    /**
      * 是否星标域名
      */
    IsMark: string;
    /**
      * TTL(DNS记录缓存时间)
      */
    TTL: number;
    /**
      * cname加速启用状态
      */
    CnameSpeedup: string;
    /**
      * 域名备注
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 域名Punycode
      */
    Punycode: string;
    /**
      * 域名DNS状态
      */
    DnsStatus: string;
    /**
      * 域名的NS列表
      */
    DnspodNsList: Array<string>;
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名等级代号
      */
    GradeLevel: number;
    /**
      * 域名所属的用户ID
      */
    UserId: number;
    /**
      * 是否为付费域名
      */
    IsVip: string;
    /**
      * 域名所有者的账号
      */
    Owner: string;
    /**
      * 域名等级的描述
      */
    GradeTitle: string;
    /**
      * 域名创建时间
      */
    CreatedOn: string;
    /**
      * 最后操作时间
      */
    UpdatedOn: string;
    /**
      * 腾讯云账户Uin
      */
    Uin: string;
    /**
      * 域名实际使用的NS列表
注意：此字段可能返回 null，表示取不到有效值。
      */
    ActualNsList: Array<string>;
    /**
      * 域名的记录数量
      */
    RecordCount: number;
    /**
      * 域名所有者的账户昵称
注意：此字段可能返回 null，表示取不到有效值。
      */
    OwnerNick: string;
}
/**
 * CreateDomainBatch请求参数结构体
 */
export interface CreateDomainBatchRequest {
    /**
      * 域名数组
      */
    DomainList: Array<string>;
    /**
      * 每个域名添加 @ 和 www 的 A 记录值，记录值为IP，如果不传此参数或者传空，将只添加域名，不添加记录。
      */
    RecordValue?: string;
}
/**
 * DescribeDomainShareInfo请求参数结构体
 */
export interface DescribeDomainShareInfoRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * 域名列表元素
 */
export interface DomainListItem {
    /**
      * 系统分配给域名的唯一标识
      */
    DomainId: number;
    /**
      * 域名的原始格式
      */
    Name: string;
    /**
      * 域名的状态，正常：ENABLE，暂停：PAUSE，封禁：SPAM
      */
    Status: string;
    /**
      * 域名默认的解析记录默认TTL值
      */
    TTL: number;
    /**
      * 是否开启CNAME加速，开启：ENABLE，未开启：DISABLE
      */
    CNAMESpeedup: string;
    /**
      * DNS 设置状态，错误：DNSERROR，正常：空字符串
      */
    DNSStatus: string;
    /**
      * 域名的套餐等级代码
      */
    Grade: string;
    /**
      * 域名所属的分组Id
      */
    GroupId: number;
    /**
      * 是否开启搜索引擎推送优化，是：YES，否：NO
      */
    SearchEnginePush: string;
    /**
      * 域名备注说明
      */
    Remark: string;
    /**
      * 经过punycode编码后的域名格式
      */
    Punycode: string;
    /**
      * 系统为域名分配的有效DNS
      */
    EffectiveDNS: Array<string>;
    /**
      * 域名套餐等级对应的序号
      */
    GradeLevel: number;
    /**
      * 套餐名称
      */
    GradeTitle: string;
    /**
      * 是否是付费套餐
      */
    IsVip: string;
    /**
      * 付费套餐开通时间
      */
    VipStartAt: string;
    /**
      * 付费套餐到期时间
      */
    VipEndAt: string;
    /**
      * 域名是否开通VIP自动续费，是：YES，否：NO，默认：DEFAULT
      */
    VipAutoRenew: string;
    /**
      * 域名下的记录数量
      */
    RecordCount: number;
    /**
      * 域名添加时间
      */
    CreatedOn: string;
    /**
      * 域名更新时间
      */
    UpdatedOn: string;
    /**
      * 域名所属账号
      */
    Owner: string;
}
/**
 * DescribeRecordType返回参数结构体
 */
export interface DescribeRecordTypeResponse {
    /**
      * 记录类型列表
      */
    TypeList: Array<string>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDomainRemark返回参数结构体
 */
export interface ModifyDomainRemarkResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainAliasList返回参数结构体
 */
export interface DescribeDomainAliasListResponse {
    /**
      * 域名别名列表
      */
    DomainAliasList: Array<DomainAliasInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 查询记录列表的数量统计信息
 */
export interface RecordCountInfo {
    /**
      * 子域名数量
      */
    SubdomainCount: number;
    /**
      * 列表返回的记录数
      */
    ListCount: number;
    /**
      * 总的记录数
      */
    TotalCount: number;
}
/**
 * DeleteShareDomain返回参数结构体
 */
export interface DeleteShareDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRecord请求参数结构体
 */
export interface ModifyRecordRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 记录类型，通过 API 记录类型获得，大写英文，比如：A 。
      */
    RecordType: string;
    /**
      * 记录线路，通过 API 记录线路获得，中文，比如：默认。
      */
    RecordLine: string;
    /**
      * 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。
      */
    Value: string;
    /**
      * 记录 ID 。
      */
    RecordId: number;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
    /**
      * 主机记录，如 www，如果不传，默认为 @。
      */
    SubDomain?: string;
    /**
      * 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。
      */
    RecordLineId?: string;
    /**
      * MX 优先级，当记录类型是 MX 时有效，范围1-20，MX 记录时必选。
      */
    MX?: number;
    /**
      * TTL，范围1-604800，不同等级域名最小值不同。
      */
    TTL?: number;
    /**
      * 权重信息，0到100的整数。仅企业 VIP 域名可用，0 表示关闭，不传该参数，表示不设置权重信息。
      */
    Weight?: number;
    /**
      * 记录初始状态，取值范围为 ENABLE 和 DISABLE 。默认为 ENABLE ，如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
      */
    Status?: string;
}
/**
 * 批量任务中的记录信息
 */
export interface BatchRecordInfo {
    /**
      * 记录 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordId: number;
    /**
      * 子域名(主机记录)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubDomain: string;
    /**
      * 记录类型, 详见 DescribeRecordType 接口
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordType: string;
    /**
      * 解析记录的线路，详见 DescribeRecordLineList 接口
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordLine: string;
    /**
      * 记录值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 记录的 TTL 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    TTL: number;
    /**
      * 记录添加状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrMsg: string;
    /**
      * 此条记录在列表中的ID
      */
    Id: number;
    /**
      * 记录生效状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Enabled: number;
    /**
      * 记录的MX权重
注意：此字段可能返回 null，表示取不到有效值。
      */
    MX: number;
}
/**
 * 线路分组信息
 */
export interface LineGroupInfo {
    /**
      * 线路分组ID
      */
    LineId: string;
    /**
      * 线路分组名称
      */
    Name: string;
    /**
      * 分组类型
      */
    Type: string;
    /**
      * 线路分组包含的线路列表
      */
    LineList: Array<string>;
}
/**
 * DeleteDomain请求参数结构体
 */
export interface DeleteDomainRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * ModifyDomainOwner请求参数结构体
 */
export interface ModifyDomainOwnerRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名需要转入的账号，支持Uin或者邮箱格式
      */
    Account: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * ModifyPackageAutoRenew请求参数结构体
 */
export interface ModifyPackageAutoRenewRequest {
    /**
      * 资源ID
      */
    ResourceId: string;
    /**
      * enable 开启自动续费；disable 关闭自动续费
      */
    Status: string;
}
/**
 * 域名共享信息
 */
export interface DomainShareInfo {
    /**
      * 域名共享对象的账号
      */
    ShareTo: string;
    /**
      * 共享模式，“rw”：可读写。 “r”:：只读
      */
    Mode: string;
    /**
      * 共享状态“enabled”：共享成功。“pending”：共享到的账号不存在, 等待注册
      */
    Status: string;
}
/**
 * DescribeRecordLineList请求参数结构体
 */
export interface DescribeRecordLineListRequest {
    /**
      * 域名。
      */
    Domain: string;
    /**
      * 域名等级。
+ 旧套餐：D_FREE、D_PLUS、D_EXTRA、D_EXPERT、D_ULTRA 分别对应免费套餐、个人豪华、企业1、企业2、企业3。
+ 新套餐：DP_FREE、DP_PLUS、DP_EXTRA、DP_EXPERT、DP_ULTRA 分别对应新免费、个人专业版、企业创业版、企业标准版、企业旗舰版。
      */
    DomainGrade: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * DescribeRecordList返回参数结构体
 */
export interface DescribeRecordListResponse {
    /**
      * 记录的数量统计信息
      */
    RecordCountInfo: RecordCountInfo;
    /**
      * 获取的记录列表
      */
    RecordList: Array<RecordListItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateRecordBatch请求参数结构体
 */
export interface CreateRecordBatchRequest {
    /**
      * 域名ID，多个 domain_id 用英文逗号进行分割。
      */
    DomainIdList: Array<string>;
    /**
      * 记录数组
      */
    RecordList: Array<AddRecordBatch>;
}
/**
 * DeleteDomainAlias请求参数结构体
 */
export interface DeleteDomainAliasRequest {
    /**
      * 域名别名ID
      */
    DomainAliasId: number;
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain
      */
    DomainId?: number;
}
/**
 * 域名别名信息
 */
export interface DomainAliasInfo {
    /**
      * 域名别名ID
      */
    Id: number;
    /**
      * 域名别名
      */
    DomainAlias: string;
}
/**
 * CreateDeal请求参数结构体
 */
export interface CreateDealRequest {
    /**
      * 询价类型，1 新购，2 续费，3 套餐升级（增值服务暂时只支持新购）
      */
    DealType: number;
    /**
      * 商品类型，1 域名套餐 2 增值服务
      */
    GoodsType: number;
    /**
      * 套餐类型：
DP_PLUS：专业版
DP_EXPERT：企业版
DP_ULTRA：尊享版

增值服务类型
LB：负载均衡
URL：URL转发
DMONITOR_TASKS：D监控任务数
DMONITOR_IP：D监控备用 IP 数
CUSTOMLINE：自定义线路数
      */
    GoodsChildType: string;
    /**
      * 增值服务购买数量，如果是域名套餐固定为1，如果是增值服务则按以下规则：
负载均衡、D监控任务数、D监控备用 IP 数、自定义线路数、URL 转发（必须是5的正整数倍，如 5、10、15 等）
      */
    GoodsNum: number;
    /**
      * 是否开启自动续费，1 开启，2 不开启（增值服务暂不支持自动续费），默认值为 2 不开启
      */
    AutoRenew: number;
    /**
      * 需要绑定套餐的域名，如 dnspod.cn，如果是续费或升级，domain 参数必须要传，新购可不传。
      */
    Domain?: string;
    /**
      * 套餐时长：
1. 套餐以月为单位（按月只能是 3、6 还有 12 的倍数），套餐例如购买一年则传12，最大120 。（续费最低一年）
2. 升级套餐时不需要传。
3. 增值服务的时长单位为年，买一年传1（增值服务新购按年只能是 1，增值服务续费最大为 10）
      */
    TimeSpan?: number;
    /**
      * 套餐类型，需要升级到的套餐类型，只有升级时需要。
      */
    NewPackageType?: string;
}
/**
 * ModifyDomainLock请求参数结构体
 */
export interface ModifyDomainLockRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名要锁定的天数，最多可锁定的天数可以通过获取域名权限接口获取。
      */
    LockDays: number;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * ModifyDomainStatus请求参数结构体
 */
export interface ModifyDomainStatusRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名状态，”enable” 、”disable” 分别代表启用和暂停
      */
    Status: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * 子域名别名解析量统计信息
 */
export interface SubdomainAliasAnalyticsItem {
    /**
      * 子域名解析量统计查询信息
      */
    Info: SubdomainAnalyticsInfo;
    /**
      * 当前统计维度解析量小计
      */
    Data: Array<DomainAnalyticsDetail>;
}
/**
 * ModifyDomainStatus返回参数结构体
 */
export interface ModifyDomainStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 批量添加的记录
 */
export interface AddRecordBatch {
    /**
      * 记录类型, 详见 DescribeRecordType 接口。
      */
    RecordType: string;
    /**
      * 记录值。
      */
    Value: string;
    /**
      * 子域名(主机记录)，默认为@。
      */
    SubDomain?: string;
    /**
      * 解析记录的线路，详见 DescribeRecordLineList 接口，RecordLine和RecordLineId都未填时，默认为「默认」线路。
      */
    RecordLine?: string;
    /**
      * 解析记录的线路 ID，RecordLine和RecordLineId都有时，系统优先取 RecordLineId。
      */
    RecordLineId?: string;
    /**
      * 记录权重值(暂未支持)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Weight?: number;
    /**
      * 记录的 MX 记录值，非 MX 记录类型，默认为 0，MX记录则必选。
      */
    MX?: number;
    /**
      * 记录的 TTL 值，默认600。
      */
    TTL?: number;
    /**
      * 记录状态(暂未支持)。0表示禁用，1表示启用。默认启用。
      */
    Enabled?: number;
    /**
      * 记录备注(暂未支持)。
      */
    Remark?: string;
}
/**
 * DescribeRecord请求参数结构体
 */
export interface DescribeRecordRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 记录 ID 。
      */
    RecordId: number;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * CreateDomainGroup返回参数结构体
 */
export interface CreateDomainGroupResponse {
    /**
      * 域名分组ID
      */
    GroupId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeSubdomainAnalytics请求参数结构体
 */
export interface DescribeSubdomainAnalyticsRequest {
    /**
      * 要查询解析量的域名
      */
    Domain: string;
    /**
      * 查询的开始时间，格式：YYYY-MM-DD
      */
    StartDate: string;
    /**
      * 查询的结束时间，格式：YYYY-MM-DD
      */
    EndDate: string;
    /**
      * 要查询解析量的子域名
      */
    Subdomain: string;
    /**
      * DATE:按天维度统计 HOUR:按小时维度统计
      */
    DnsFormat?: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * DeleteRecord请求参数结构体
 */
export interface DeleteRecordRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 记录 ID 。
      */
    RecordId: number;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * DescribeDomain请求参数结构体
 */
export interface DescribeDomainRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * ModifyRecordStatus请求参数结构体
 */
export interface ModifyRecordStatusRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 记录 ID 。
      */
    RecordId: number;
    /**
      * 记录的状态。取值范围为 ENABLE 和 DISABLE。如果传入 DISABLE，解析不会生效，也不会验证负载均衡的限制。
      */
    Status: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * CreateRecord返回参数结构体
 */
export interface CreateRecordResponse {
    /**
      * 记录ID
      */
    RecordId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRecord返回参数结构体
 */
export interface DescribeRecordResponse {
    /**
      * 记录信息
      */
    RecordInfo: RecordInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 记录信息
 */
export interface RecordInfo {
    /**
      * 记录 ID 。
      */
    Id: number;
    /**
      * 子域名(主机记录)。
      */
    SubDomain: string;
    /**
      * 记录类型, 详见 DescribeRecordType 接口。
      */
    RecordType: string;
    /**
      * 解析记录的线路，详见 DescribeRecordLineList 接口。
      */
    RecordLine: string;
    /**
      * 解析记录的线路 ID ，详见 DescribeRecordLineList 接口。
      */
    RecordLineId: string;
    /**
      * 记录值。
      */
    Value: string;
    /**
      * 记录权重值。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Weight: number;
    /**
      * 记录的 MX 记录值，非 MX 记录类型，默认为 0。
      */
    MX: number;
    /**
      * 记录的 TTL 值。
      */
    TTL: number;
    /**
      * 记录状态。0表示禁用，1表示启用。
      */
    Enabled: number;
    /**
      * 该记录的 D 监控状态。
"Ok" : 服务器正常。
"Warn" : 该记录有报警, 服务器返回 4XX。
"Down" : 服务器宕机。
"" : 该记录未开启 D 监控。
      */
    MonitorStatus: string;
    /**
      * 记录的备注。
注意：此字段可能返回 null，表示取不到有效值。
      */
    Remark: string;
    /**
      * 记录最后更新时间。
      */
    UpdatedOn: string;
    /**
      * 域名 ID 。
      */
    DomainId: number;
}
/**
 * 批量添加记录返回结构
 */
export interface CreateRecordBatchDetail {
    /**
      * 见RecordInfoBatch
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordList: Array<CreateRecordBatchRecord>;
    /**
      * 任务编号
      */
    Id: number;
    /**
      * 域名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainGrade: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrMsg: string;
    /**
      * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation: string;
    /**
      * 域名ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainId: number;
}
/**
 * DescribeSubdomainAnalytics返回参数结构体
 */
export interface DescribeSubdomainAnalyticsResponse {
    /**
      * 当前统计维度解析量小计
      */
    Data: Array<DomainAnalyticsDetail>;
    /**
      * 子域名解析量统计查询信息
      */
    Info: SubdomainAnalyticsInfo;
    /**
      * 子域名别名解析量统计信息
      */
    AliasData: Array<SubdomainAliasAnalyticsItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRecord返回参数结构体
 */
export interface ModifyRecordResponse {
    /**
      * 记录ID
      */
    RecordId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDomainUnlock返回参数结构体
 */
export interface ModifyDomainUnlockResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainLogList请求参数结构体
 */
export interface DescribeDomainLogListRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
    /**
      * 记录开始的偏移，第一条记录为 0，依次类推，默认为0
      */
    Offset?: number;
    /**
      * 共要获取的日志条数，比如获取20条，则为20，默认为500条，单次最多获取500条。
      */
    Limit?: number;
}
/**
 * DescribeDomainList返回参数结构体
 */
export interface DescribeDomainListResponse {
    /**
      * 列表页统计信息
      */
    DomainCountInfo: DomainCountInfo;
    /**
      * 域名列表
      */
    DomainList: Array<DomainListItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRecordBatch请求参数结构体
 */
export interface ModifyRecordBatchRequest {
    /**
      * 记录ID数组
      */
    RecordIdList: Array<number>;
    /**
      * 要修改的字段，可选值为 [“sub_domain”、”record_type”、”area”、”value”、”mx”、”ttl”、”status”] 中的某一个。
      */
    Change: string;
    /**
      * 修改为，具体依赖 change 字段，必填参数。
      */
    ChangeTo: string;
    /**
      * 要修改到的记录值，仅当 change 字段为 “record_type” 时为必填参数。
      */
    Value?: string;
    /**
      * MX记录优先级，仅当修改为 MX 记录时为必填参数。
      */
    MX?: string;
}
/**
 * DeleteRecord返回参数结构体
 */
export interface DeleteRecordResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 批量添加记录任务中的记录信息
 */
export interface CreateRecordBatchRecord {
    /**
      * 子域名(主机记录)。
注意：此字段可能返回 null，表示取不到有效值。
      */
    SubDomain: string;
    /**
      * 记录类型, 详见 DescribeRecordType 接口
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordType: string;
    /**
      * 解析记录的线路，详见 DescribeRecordLineList 接口
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordLine: string;
    /**
      * 记录值
注意：此字段可能返回 null，表示取不到有效值。
      */
    Value: string;
    /**
      * 记录的 TTL 值
注意：此字段可能返回 null，表示取不到有效值。
      */
    TTL: number;
    /**
      * 记录添加状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrMsg: string;
    /**
      * 此条记录在列表中的ID
      */
    Id: number;
    /**
      * 记录的MX权重
注意：此字段可能返回 null，表示取不到有效值。
      */
    MX: number;
}
/**
 * CreateDomain返回参数结构体
 */
export interface CreateDomainResponse {
    /**
      * 域名信息
      */
    DomainInfo: DomainCreateInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 列表页分页统计信息
 */
export interface DomainCountInfo {
    /**
      * 符合条件的域名数量
      */
    DomainTotal: number;
    /**
      * 用户可以查看的所有域名数量
      */
    AllTotal: number;
    /**
      * 用户账号添加的域名数量
      */
    MineTotal: number;
    /**
      * 共享给用户的域名数量
      */
    ShareTotal: number;
    /**
      * 付费域名数量
      */
    VipTotal: number;
    /**
      * 暂停的域名数量
      */
    PauseTotal: number;
    /**
      * dns设置错误的域名数量
      */
    ErrorTotal: number;
    /**
      * 锁定的域名数量
      */
    LockTotal: number;
    /**
      * 封禁的域名数量
      */
    SpamTotal: number;
    /**
      * 30天内即将到期的域名数量
      */
    VipExpire: number;
    /**
      * 分享给其它人的域名数量
      */
    ShareOutTotal: number;
    /**
      * 指定分组内的域名数量
      */
    GroupTotal: number;
}
/**
 * 用户信息
 */
export interface UserInfo {
    /**
      * 用户昵称
      */
    Nick: string;
    /**
      * 用户ID
      */
    Id: number;
    /**
      * 用户账号, 邮箱格式
      */
    Email: string;
    /**
      * 账号状态：”enabled”: 正常；”disabled”: 被封禁
      */
    Status: string;
    /**
      * 电话号码
      */
    Telephone: string;
    /**
      * 邮箱是否通过验证：”yes”: 通过；”no”: 未通过
      */
    EmailVerified: string;
    /**
      * 手机是否通过验证：”yes”: 通过；”no”: 未通过
      */
    TelephoneVerified: string;
    /**
      * 账号等级, 按照用户账号下域名等级排序, 选取一个最高等级为账号等级, 具体对应情况参见域名等级。
      */
    UserGrade: string;
    /**
      * 用户名称, 企业用户对应为公司名称
      */
    RealName: string;
    /**
      * 是否绑定微信：”yes”: 通过；”no”: 未通过
      */
    WechatBinded: string;
    /**
      * 用户UIN
      */
    Uin: number;
}
/**
 * ModifyRecordBatch返回参数结构体
 */
export interface ModifyRecordBatchResponse {
    /**
      * 批量任务ID
      */
    JobId: number;
    /**
      * 见modifyRecordBatchDetail
      */
    DetailList: Array<ModifyRecordBatchDetail>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainLogList返回参数结构体
 */
export interface DescribeDomainLogListResponse {
    /**
      * 域名信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    LogList: Array<string>;
    /**
      * 分页大小
      */
    PageSize: number;
    /**
      * 日志总条数
      */
    TotalCount: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRecordType请求参数结构体
 */
export interface DescribeRecordTypeRequest {
    /**
      * 域名等级。
+ 旧套餐：D_FREE、D_PLUS、D_EXTRA、D_EXPERT、D_ULTRA 分别对应免费套餐、个人豪华、企业1、企业2、企业3。
+ 新套餐：DP_FREE、DP_PLUS、DP_EXTRA、DP_EXPERT、DP_ULTRA 分别对应新免费、个人专业版、企业创业版、企业标准版、企业旗舰版。
      */
    DomainGrade: string;
}
/**
 * 记录列表元素
 */
export interface RecordListItem {
    /**
      * 记录Id
      */
    RecordId: number;
    /**
      * 记录值
      */
    Value: string;
    /**
      * 记录状态，启用：ENABLE，暂停：DISABLE
      */
    Status: string;
    /**
      * 更新时间
      */
    UpdatedOn: string;
    /**
      * 主机名
      */
    Name: string;
    /**
      * 记录线路
      */
    Line: string;
    /**
      * 线路Id
      */
    LineId: string;
    /**
      * 记录类型
      */
    Type: string;
    /**
      * 记录权重，用于负载均衡记录
注意：此字段可能返回 null，表示取不到有效值。
      */
    Weight: number;
    /**
      * 记录监控状态，正常：OK，告警：WARN，宕机：DOWN，未设置监控或监控暂停则为空
      */
    MonitorStatus: string;
    /**
      * 记录备注说明
      */
    Remark: string;
    /**
      * 记录缓存时间
      */
    TTL: number;
    /**
      * MX值，只有MX记录有
注意：此字段可能返回 null，表示取不到有效值。
      */
    MX: number;
}
/**
 * CreateDomainBatch返回参数结构体
 */
export interface CreateDomainBatchResponse {
    /**
      * 批量添加域名信息
      */
    DetailList: Array<CreateDomainBatchDetail>;
    /**
      * 批量任务的ID
      */
    JobId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDomainOwner返回参数结构体
 */
export interface ModifyDomainOwnerResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 子域名解析量统计查询信息
 */
export interface SubdomainAnalyticsInfo {
    /**
      * DATE:按天维度统计 HOUR:按小时维度统计
      */
    DnsFormat: string;
    /**
      * 当前统计周期解析量总计
      */
    DnsTotal: number;
    /**
      * 当前查询的域名
      */
    Domain: string;
    /**
      * 当前统计周期开始时间
      */
    StartDate: string;
    /**
      * 当前统计周期结束时间
      */
    EndDate: string;
    /**
      * 当前统计的子域名
      */
    Subdomain: string;
}
/**
 * 批量添加记录返回结构
 */
export interface ModifyRecordBatchDetail {
    /**
      * 见RecordInfoBatchModify
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordList: Array<BatchRecordInfo>;
    /**
      * 任务编号
      */
    Id: number;
    /**
      * 域名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainGrade: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrMsg: string;
    /**
      * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation: string;
    /**
      * 域名ID
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainId: number;
}
/**
 * DescribeUserDetail返回参数结构体
 */
export interface DescribeUserDetailResponse {
    /**
      * 帐户信息
      */
    UserInfo: UserInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDomain请求参数结构体
 */
export interface CreateDomainRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名分组ID
      */
    GroupId?: number;
    /**
      * 是否星标域名，”yes”、”no” 分别代表是和否。
      */
    IsMark?: string;
}
/**
 * ModifyPackageAutoRenew返回参数结构体
 */
export interface ModifyPackageAutoRenewResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 域名别名解析量统计信息
 */
export interface DomainAliasAnalyticsItem {
    /**
      * 域名解析量统计查询信息
      */
    Info: DomainAnalyticsInfo;
    /**
      * 当前统计维度解析量小计
      */
    Data: Array<DomainAnalyticsDetail>;
}
/**
 * DescribeDomainShareInfo返回参数结构体
 */
export interface DescribeDomainShareInfoResponse {
    /**
      * 域名共享信息
      */
    ShareList: Array<DomainShareInfo>;
    /**
      * 域名拥有者账号
      */
    Owner: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyDomainRemark请求参数结构体
 */
export interface ModifyDomainRemarkRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
    /**
      * 域名备注，删除备注请提交空内容。
      */
    Remark?: string;
}
/**
 * CreateDomainAlias返回参数结构体
 */
export interface CreateDomainAliasResponse {
    /**
      * 域名别名ID
      */
    DomainAliasId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeRecordList请求参数结构体
 */
export interface DescribeRecordListRequest {
    /**
      * 要获取的解析记录所属的域名
      */
    Domain: string;
    /**
      * 要获取的解析记录所属的域名Id，如果传了DomainId，系统将会忽略Domain参数
      */
    DomainId?: number;
    /**
      * 解析记录的主机头，如果传了此参数，则只会返回此主机头对应的解析记录
      */
    Subdomain?: string;
    /**
      * 获取某种类型的解析记录，如 A，CNAME，NS，AAAA，显性URL，隐性URL，CAA，SPF等
      */
    RecordType?: string;
    /**
      * 获取某条线路名称的解析记录
      */
    RecordLine?: string;
    /**
      * 获取某个线路Id对应的解析记录，如果传RecordLineId，系统会忽略RecordLine参数
      */
    RecordLineId?: string;
    /**
      * 获取某个分组下的解析记录时，传这个分组Id
      */
    GroupId?: number;
    /**
      * 通过关键字搜索解析记录，当前支持搜索主机头和记录值
      */
    Keyword?: string;
    /**
      * 排序字段，支持 name,line,type,value,weight,mx,ttl,updated_on 几个字段。
      */
    SortField?: string;
    /**
      * 排序方式，正序：ASC，逆序：DESC。默认值为ASC。
      */
    SortType?: string;
    /**
      * 偏移量，默认值为0。
      */
    Offset?: number;
    /**
      * 限制数量，当前Limit最大支持3000。默认值为100。
      */
    Limit?: number;
}
/**
 * PayOrderWithBalance请求参数结构体
 */
export interface PayOrderWithBalanceRequest {
    /**
      * 需要支付的大订单号数组
      */
    BigDealIdList: Array<string>;
    /**
      * 代金券ID数组
      */
    VoucherIdList?: Array<string>;
}
/**
 * DescribeDomainPurview返回参数结构体
 */
export interface DescribeDomainPurviewResponse {
    /**
      * 域名权限列表
      */
    PurviewList: Array<PurviewInfo>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 子订单号列表
 */
export interface Deals {
    /**
      * 子订单ID
      */
    DealId: string;
    /**
      * 子订单号
      */
    DealName: string;
}
/**
 * ModifySubdomainStatus返回参数结构体
 */
export interface ModifySubdomainStatusResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainAnalytics返回参数结构体
 */
export interface DescribeDomainAnalyticsResponse {
    /**
      * 当前统计维度解析量小计
      */
    Data: Array<DomainAnalyticsDetail>;
    /**
      * 域名解析量统计查询信息
      */
    Info: DomainAnalyticsInfo;
    /**
      * 域名别名解析量统计信息
      */
    AliasData: Array<DomainAliasAnalyticsItem>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyRecordStatus返回参数结构体
 */
export interface ModifyRecordStatusResponse {
    /**
      * 记录ID。
      */
    RecordId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDomainGroup请求参数结构体
 */
export interface CreateDomainGroupRequest {
    /**
      * 域名分组
      */
    GroupName: string;
}
/**
 * 解析线路信息
 */
export interface LineInfo {
    /**
      * 线路名称
      */
    Name: string;
    /**
      * 线路ID
      */
    LineId: string;
}
/**
 * DeleteDomain返回参数结构体
 */
export interface DeleteDomainResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainAliasList请求参数结构体
 */
export interface DescribeDomainAliasListRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名ID,域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain
      */
    DomainId?: number;
}
/**
 * CreateDomainAlias请求参数结构体
 */
export interface CreateDomainAliasRequest {
    /**
      * 域名别名
      */
    DomainAlias: string;
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名ID，参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain
      */
    DomainId?: number;
}
/**
 * DeleteShareDomain请求参数结构体
 */
export interface DeleteShareDomainRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名共享的账号
      */
    Account: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * ModifyDynamicDNS请求参数结构体
 */
export interface ModifyDynamicDNSRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 记录ID。
      */
    RecordId: number;
    /**
      * 记录线路，通过 API 记录线路获得，中文，比如：默认。
      */
    RecordLine: string;
    /**
      * 记录值，如 IP : 200.200.200.200， CNAME : cname.dnspod.com.， MX : mail.dnspod.com.。
      */
    Value: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
    /**
      * 主机记录，如 www，如果不传，默认为 @。
      */
    SubDomain?: string;
    /**
      * 线路的 ID，通过 API 记录线路获得，英文字符串，比如：10=1。参数RecordLineId优先级高于RecordLine，如果同时传递二者，优先使用RecordLineId参数。
      */
    RecordLineId?: string;
    /**
      * TTL值，如果不传，默认为域名的TTL值。
      */
    Ttl?: number;
}
/**
 * 域名权限项
 */
export interface PurviewInfo {
    /**
      * 权限名称
      */
    Name: string;
    /**
      * 权限值
      */
    Value: string;
}
/**
 * ModifyRecordRemark请求参数结构体
 */
export interface ModifyRecordRemarkRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 记录 ID 。
      */
    RecordId: number;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
    /**
      * 解析记录备注，删除备注请提交空内容。
      */
    Remark?: string;
}
/**
 * DescribeUserDetail请求参数结构体
 */
export declare type DescribeUserDetailRequest = null;
/**
 * ModifyRecordRemark返回参数结构体
 */
export interface ModifyRecordRemarkResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainList请求参数结构体
 */
export interface DescribeDomainListRequest {
    /**
      * 域名分组类型，默认为ALL。可取值为ALL，MINE，SHARE，ISMARK，PAUSE，VIP，RECENT，SHARE_OUT。
      */
    Type?: string;
    /**
      * 记录开始的偏移, 第一条记录为 0, 依次类推。默认值为0。
      */
    Offset?: number;
    /**
      * 要获取的域名数量, 比如获取20个, 则为20。默认值为3000。
      */
    Limit?: number;
    /**
      * 分组ID, 获取指定分组的域名
      */
    GroupId?: number;
    /**
      * 根据关键字搜索域名
      */
    Keyword?: string;
}
/**
 * 域名信息（创建域名时返回）
 */
export interface DomainCreateInfo {
    /**
      * 域名ID
      */
    Id: number;
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名的punycode
      */
    Punycode: string;
    /**
      * 域名的NS列表
      */
    GradeNsList: Array<string>;
}
/**
 * DescribeDomainPurview请求参数结构体
 */
export interface DescribeDomainPurviewRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * 批量添加域名返回结构
 */
export interface CreateDomainBatchDetail {
    /**
      * 见RecordInfoBatch
注意：此字段可能返回 null，表示取不到有效值。
      */
    RecordList: Array<CreateDomainBatchRecord>;
    /**
      * 任务编号
      */
    Id: number;
    /**
      * 域名
注意：此字段可能返回 null，表示取不到有效值。
      */
    Domain: string;
    /**
      * 域名等级
注意：此字段可能返回 null，表示取不到有效值。
      */
    DomainGrade: string;
    /**
      * 错误信息
注意：此字段可能返回 null，表示取不到有效值。
      */
    ErrMsg: string;
    /**
      * 该条任务运行状态
注意：此字段可能返回 null，表示取不到有效值。
      */
    Status: string;
    /**
      * 操作类型
注意：此字段可能返回 null，表示取不到有效值。
      */
    Operation: string;
}
/**
 * ModifyDomainUnlock请求参数结构体
 */
export interface ModifyDomainUnlockRequest {
    /**
      * 域名
      */
    Domain: string;
    /**
      * 域名解锁码，锁定的时候会返回。
      */
    LockCode: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * ModifyDomainLock返回参数结构体
 */
export interface ModifyDomainLockResponse {
    /**
      * 域名锁定信息
      */
    LockInfo: LockInfo;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateDeal返回参数结构体
 */
export interface CreateDealResponse {
    /**
      * 大订单号，一个大订单号下可以有多个子订单，说明是同一次下单
      */
    BigDealId: string;
    /**
      * 子订单列表
      */
    DealList: Array<Deals>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ModifyVasAutoRenewStatus请求参数结构体
 */
export interface ModifyVasAutoRenewStatusRequest {
    /**
      * 资源ID
      */
    ResourceId: string;
    /**
      * enable 开启自动续费；disable 关闭自动续费
      */
    Status: string;
}
/**
 * 域名锁定信息
 */
export interface LockInfo {
    /**
      * 域名 ID
      */
    DomainId: number;
    /**
      * 域名解锁码
      */
    LockCode: string;
    /**
      * 域名自动解锁日期
      */
    LockEnd: string;
}
/**
 * DescribeBatchTask返回参数结构体
 */
export interface DescribeBatchTaskResponse {
    /**
      * 批量任务详情
      */
    DetailList: Array<DescribeBatchTaskDetail>;
    /**
      * 总任务条数
      */
    TotalCount: number;
    /**
      * 成功条数
      */
    SuccessCount: number;
    /**
      * 失败条数
      */
    FailCount: number;
    /**
      * 批量任务类型
      */
    JobType: string;
    /**
      * 任务创建时间
      */
    CreatedAt: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DescribeDomainAnalytics请求参数结构体
 */
export interface DescribeDomainAnalyticsRequest {
    /**
      * 要查询解析量的域名
      */
    Domain: string;
    /**
      * 查询的开始时间，格式：YYYY-MM-DD
      */
    StartDate: string;
    /**
      * 查询的结束时间，格式：YYYY-MM-DD
      */
    EndDate: string;
    /**
      * DATE:按天维度统计 HOUR:按小时维度统计
      */
    DnsFormat?: string;
    /**
      * 域名 ID 。参数 DomainId 优先级比参数 Domain 高，如果传递参数 DomainId 将忽略参数 Domain 。
      */
    DomainId?: number;
}
/**
 * ModifyDynamicDNS返回参数结构体
 */
export interface ModifyDynamicDNSResponse {
    /**
      * 记录ID
      */
    RecordId: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
