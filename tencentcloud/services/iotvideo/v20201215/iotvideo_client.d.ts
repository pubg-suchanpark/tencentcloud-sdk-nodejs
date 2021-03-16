import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DeleteProductRequest, DescribeDeviceDataHistoryRequest, DescribeCloudStorageDateRequest, CreateCloudStorageRequest, SetForwardAuthResponse, SetForwardAuthRequest, DescribeBatchsRequest, DescribeCategoryResponse, DescribeModelDefinitionResponse, CreateBatchRequest, ImportModelDefinitionRequest, DescribeCloudStorageTimeResponse, DescribeDeviceCommLogResponse, DeleteDeviceRequest, DeleteProductResponse, ModifyForwardRuleResponse, DescribeProductsRequest, DescribeDeviceEventHistoryResponse, DescribeBatchResponse, ModifyProductRequest, DescribeDeviceActionHistoryRequest, ImportModelDefinitionResponse, DescribeDevicesResponse, ModifyProductResponse, CreateForwardRuleRequest, DescribeCloudStorageThumbnailRequest, ModifyModelDefinitionRequest, DescribeBatchsResponse, DescribeCloudStorageResponse, DeleteForwardRuleRequest, DescribeDeviceEventHistoryRequest, DescribeDeviceRequest, DescribeForwardRuleResponse, DeleteDeviceResponse, DescribeBatchRequest, ModifyForwardRuleRequest, DescribeCategoryRequest, DescribeDeviceCommLogRequest, DescribeCloudStorageRequest, CreateProductResponse, DescribeCloudStorageEventsResponse, DescribeDevicesRequest, DescribeDeviceDataHistoryResponse, DescribeCloudStorageDateResponse, DescribeCloudStorageThumbnailResponse, CheckForwardAuthResponse, DescribeProductResponse, DescribeDeviceDataResponse, DescribeForwardRuleRequest, ModifyDeviceResponse, DeleteForwardRuleResponse, DescribeProductRequest, DescribeProductsResponse, CheckForwardAuthRequest, CreateProductRequest, DescribeDeviceDataRequest, CreateBatchResponse, ModifyModelDefinitionResponse, DescribeDeviceActionHistoryResponse, ModifyDeviceRequest, CreateCloudStorageResponse, DescribeModelDefinitionRequest, DescribeDeviceResponse, DescribeCloudStorageEventsRequest, CreateForwardRuleResponse, DescribeCloudStorageTimeRequest } from "./iotvideo_models";
/**
 * iotvideo client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 获取产品列表
     */
    DescribeProducts(req: DescribeProductsRequest, cb?: (error: string, rep: DescribeProductsResponse) => void): Promise<DescribeProductsResponse>;
    /**
     * 获取设备在指定时间范围内的通讯日志
     */
    DescribeDeviceCommLog(req: DescribeDeviceCommLogRequest, cb?: (error: string, rep: DescribeDeviceCommLogResponse) => void): Promise<DescribeDeviceCommLogResponse>;
    /**
     * 判断是否开启的转发的权限
     */
    CheckForwardAuth(req: CheckForwardAuthRequest, cb?: (error: string, rep: CheckForwardAuthResponse) => void): Promise<CheckForwardAuthResponse>;
    /**
     * 获取设备属性数据
     */
    DescribeDeviceData(req: DescribeDeviceDataRequest, cb?: (error: string, rep: DescribeDeviceDataResponse) => void): Promise<DescribeDeviceDataResponse>;
    /**
     * 修改产品信息
     */
    ModifyProduct(req: ModifyProductRequest, cb?: (error: string, rep: ModifyProductResponse) => void): Promise<ModifyProductResponse>;
    /**
     * 获取具有云存的日期
     */
    DescribeCloudStorageDate(req: DescribeCloudStorageDateRequest, cb?: (error: string, rep: DescribeCloudStorageDateResponse) => void): Promise<DescribeCloudStorageDateResponse>;
    /**
     * 查看设备详情
     */
    DescribeDevice(req: DescribeDeviceRequest, cb?: (error: string, rep: DescribeDeviceResponse) => void): Promise<DescribeDeviceResponse>;
    /**
     * 获取产品详情
     */
    DescribeProduct(req: DescribeProductRequest, cb?: (error: string, rep: DescribeProductResponse) => void): Promise<DescribeProductResponse>;
    /**
     * 修改设备信息
     */
    ModifyDevice(req: ModifyDeviceRequest, cb?: (error: string, rep: ModifyDeviceResponse) => void): Promise<ModifyDeviceResponse>;
    /**
     * 修改转发规则
     */
    ModifyForwardRule(req: ModifyForwardRuleRequest, cb?: (error: string, rep: ModifyForwardRuleResponse) => void): Promise<ModifyForwardRuleResponse>;
    /**
     * 获取设备云存服务详情
     */
    DescribeCloudStorage(req: DescribeCloudStorageRequest, cb?: (error: string, rep: DescribeCloudStorageResponse) => void): Promise<DescribeCloudStorageResponse>;
    /**
     * 获取批次列表
     */
    DescribeBatchs(req: DescribeBatchsRequest, cb?: (error: string, rep: DescribeBatchsResponse) => void): Promise<DescribeBatchsResponse>;
    /**
     * 创建产品
     */
    CreateProduct(req: CreateProductRequest, cb?: (error: string, rep: CreateProductResponse) => void): Promise<CreateProductResponse>;
    /**
     * 为用户提供获取动作历史的能力。
     */
    DescribeDeviceActionHistory(req: DescribeDeviceActionHistoryRequest, cb?: (error: string, rep: DescribeDeviceActionHistoryResponse) => void): Promise<DescribeDeviceActionHistoryResponse>;
    /**
     * 删除转发规则
     */
    DeleteForwardRule(req: DeleteForwardRuleRequest, cb?: (error: string, rep: DeleteForwardRuleResponse) => void): Promise<DeleteForwardRuleResponse>;
    /**
     * 创建批次
     */
    CreateBatch(req: CreateBatchRequest, cb?: (error: string, rep: CreateBatchResponse) => void): Promise<CreateBatchResponse>;
    /**
     * 获取设备在指定时间范围内上报的历史数据。
     */
    DescribeDeviceDataHistory(req: DescribeDeviceDataHistoryRequest, cb?: (error: string, rep: DescribeDeviceDataHistoryResponse) => void): Promise<DescribeDeviceDataHistoryResponse>;
    /**
     * 删除设备
     */
    DeleteDevice(req: DeleteDeviceRequest, cb?: (error: string, rep: DeleteDeviceResponse) => void): Promise<DeleteDeviceResponse>;
    /**
     * 获取批次详情
     */
    DescribeBatch(req: DescribeBatchRequest, cb?: (error: string, rep: DescribeBatchResponse) => void): Promise<DescribeBatchResponse>;
    /**
     * 设置转发权限
     */
    SetForwardAuth(req: SetForwardAuthRequest, cb?: (error: string, rep: SetForwardAuthResponse) => void): Promise<SetForwardAuthResponse>;
    /**
     * 获取Category详情
     */
    DescribeCategory(req: DescribeCategoryRequest, cb?: (error: string, rep: DescribeCategoryResponse) => void): Promise<DescribeCategoryResponse>;
    /**
     * 删除产品
     */
    DeleteProduct(req: DeleteProductRequest, cb?: (error: string, rep: DeleteProductResponse) => void): Promise<DeleteProductResponse>;
    /**
     * 获取设备的历史事件
     */
    DescribeDeviceEventHistory(req: DescribeDeviceEventHistoryRequest, cb?: (error: string, rep: DescribeDeviceEventHistoryResponse) => void): Promise<DescribeDeviceEventHistoryResponse>;
    /**
     * 开通云存服务
     */
    CreateCloudStorage(req: CreateCloudStorageRequest, cb?: (error: string, rep: CreateCloudStorageResponse) => void): Promise<CreateCloudStorageResponse>;
    /**
     * 导入其它产品的数据模板，覆盖现有数据模板的物模型和产品分类信息
     */
    ImportModelDefinition(req: ImportModelDefinitionRequest, cb?: (error: string, rep: ImportModelDefinitionResponse) => void): Promise<ImportModelDefinitionResponse>;
    /**
     * 拉取云存事件列表
     */
    DescribeCloudStorageEvents(req: DescribeCloudStorageEventsRequest, cb?: (error: string, rep: DescribeCloudStorageEventsResponse) => void): Promise<DescribeCloudStorageEventsResponse>;
    /**
     * 获取某一天云存时间轴
     */
    DescribeCloudStorageTime(req: DescribeCloudStorageTimeRequest, cb?: (error: string, rep: DescribeCloudStorageTimeResponse) => void): Promise<DescribeCloudStorageTimeResponse>;
    /**
     * 获取产品转发规则
     */
    DescribeForwardRule(req: DescribeForwardRuleRequest, cb?: (error: string, rep: DescribeForwardRuleResponse) => void): Promise<DescribeForwardRuleResponse>;
    /**
     * 创建转发规则
     */
    CreateForwardRule(req: CreateForwardRuleRequest, cb?: (error: string, rep: CreateForwardRuleResponse) => void): Promise<CreateForwardRuleResponse>;
    /**
     * 提供修改产品的数据模板的能力
     */
    ModifyModelDefinition(req: ModifyModelDefinitionRequest, cb?: (error: string, rep: ModifyModelDefinitionResponse) => void): Promise<ModifyModelDefinitionResponse>;
    /**
     * 拉取云存事件缩略图
     */
    DescribeCloudStorageThumbnail(req: DescribeCloudStorageThumbnailRequest, cb?: (error: string, rep: DescribeCloudStorageThumbnailResponse) => void): Promise<DescribeCloudStorageThumbnailResponse>;
    /**
     * 获取设备列表
     */
    DescribeDevices(req: DescribeDevicesRequest, cb?: (error: string, rep: DescribeDevicesResponse) => void): Promise<DescribeDevicesResponse>;
    /**
     * 查询产品配置的数据模板信息
     */
    DescribeModelDefinition(req: DescribeModelDefinitionRequest, cb?: (error: string, rep: DescribeModelDefinitionResponse) => void): Promise<DescribeModelDefinitionResponse>;
}
