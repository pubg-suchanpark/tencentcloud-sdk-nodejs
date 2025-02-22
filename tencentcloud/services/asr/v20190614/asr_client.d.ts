import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { SetVocabStateResponse, CreateCustomizationResponse, DescribeAsyncRecognitionTasksRequest, ModifyCustomizationStateRequest, GetAsrVocabResponse, CreateAsyncRecognitionTaskRequest, GetAsrVocabRequest, DescribeTaskStatusResponse, SentenceRecognitionRequest, CloseAsyncRecognitionTaskResponse, CreateCustomizationRequest, DownloadAsrVocabResponse, CreateRecTaskResponse, ModifyCustomizationResponse, CreateAsyncRecognitionTaskResponse, DeleteAsrVocabResponse, DownloadCustomizationResponse, CreateRecTaskRequest, GetAsrVocabListRequest, GetCustomizationListResponse, DownloadAsrVocabRequest, SetVocabStateRequest, CloseAsyncRecognitionTaskRequest, ModifyCustomizationRequest, DeleteCustomizationResponse, DeleteAsrVocabRequest, GetCustomizationListRequest, UpdateAsrVocabResponse, CreateAsrVocabResponse, CreateAsrVocabRequest, UpdateAsrVocabRequest, DescribeTaskStatusRequest, SentenceRecognitionResponse, DeleteCustomizationRequest, ModifyCustomizationStateResponse, DescribeAsyncRecognitionTasksResponse, GetAsrVocabListResponse, DownloadCustomizationRequest } from "./asr_models";
/**
 * asr client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 本接口用于关闭语音流异步识别任务。
     */
    CloseAsyncRecognitionTask(req: CloseAsyncRecognitionTaskRequest, cb?: (error: string, rep: CloseAsyncRecognitionTaskResponse) => void): Promise<CloseAsyncRecognitionTaskResponse>;
    /**
     * 用户通过该接口，可获得所有的热词表及其信息。
     */
    GetAsrVocabList(req: GetAsrVocabListRequest, cb?: (error: string, rep: GetAsrVocabListResponse) => void): Promise<GetAsrVocabListResponse>;
    /**
     * 用户通过本接口进行热词表的下载，获得词表权重文件形式的 base64 值，文件形式为通过 “|” 分割的词和权重，即 word|weight 的形式。
     */
    DownloadAsrVocab(req: DownloadAsrVocabRequest, cb?: (error: string, rep: DownloadAsrVocabResponse) => void): Promise<DownloadAsrVocabResponse>;
    /**
     * 本接口服务对时长5小时以内的录音文件进行识别，异步返回识别全部结果。
• 支持中文普通话、英语、粤语、日语、上海话、四川话、武汉话、贵阳话、昆明话、西安话、郑州话、太原话、兰州话、银川话、西宁话、南京话、合肥话、南昌话、长沙话、苏州话、杭州话、济南话、天津话、石家庄话、黑龙江话、吉林话、辽宁话。
• 支持通用、音视频领域
• 支持wav、mp3、m4a、flv、mp4、wma、3gp、amr、aac、ogg-opus、flac格式
• 支持语音 URL 和本地语音文件两种请求方式
• 语音 URL 的音频时长不能长于5小时，文件大小不超过512MB
• 本地语音文件不能大于5MB
• 提交录音文件识别请求后，在3小时内完成识别（大多数情况下1小时音频约3分钟以内完成识别，半小时内发送超过1000小时录音或者2万条识别任务的除外），识别结果在服务端可保存7天
• 支持回调或轮询的方式获取结果，结果获取请参考[ 录音文件识别结果查询](https://cloud.tencent.com/document/product/1093/37822)。
•   请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
•   签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。
• 默认接口请求频率限制：20次/秒，如您有提高请求频率限制的需求，请提[工单](https://console.cloud.tencent.com/workorder/category)进行咨询。
     */
    CreateRecTask(req: CreateRecTaskRequest, cb?: (error: string, rep: CreateRecTaskResponse) => void): Promise<CreateRecTaskResponse>;
    /**
     * 用户根据词表的ID可以获取对应的热词表信息
     */
    GetAsrVocab(req: GetAsrVocabRequest, cb?: (error: string, rep: GetAsrVocabResponse) => void): Promise<GetAsrVocabResponse>;
    /**
     * 在调用录音文件识别请求接口后，有回调和轮询两种方式获取识别结果。
<br>• 当采用回调方式时，识别完成后会将结果通过 POST 请求的形式通知到用户在请求时填写的回调 URL，具体请参见[ 录音识别结果回调 ](https://cloud.tencent.com/document/product/1093/52632)。
<br>• 当采用轮询方式时，需要主动提交任务ID来轮询识别结果，共有任务成功、等待、执行中和失败四种结果，具体信息请参见下文说明。
<br>•   请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"
<br>•   签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。
<br>•   默认接口请求频率限制：50次/秒，如您有提高请求频率限制的需求，请提[工单](https://console.cloud.tencent.com/workorder/category)进行咨询。
     */
    DescribeTaskStatus(req: DescribeTaskStatusRequest, cb?: (error: string, rep: DescribeTaskStatusResponse) => void): Promise<DescribeTaskStatusResponse>;
    /**
     * 通过该接口，用户可以修改自学习模型状态，上下线自学习模型
     */
    ModifyCustomizationState(req: ModifyCustomizationStateRequest, cb?: (error: string, rep: ModifyCustomizationStateResponse) => void): Promise<ModifyCustomizationStateResponse>;
    /**
     * 用户通过本接口进行对应的词表信息更新。
     */
    UpdateAsrVocab(req: UpdateAsrVocabRequest, cb?: (error: string, rep: UpdateAsrVocabResponse) => void): Promise<UpdateAsrVocabResponse>;
    /**
     * 用户通过该接口可以设置热词表的默认状态。初始状态为0，用户可设置状态为1，即为默认状态。默认状态表示用户在请求识别时，如不设置热词表ID，则默认使用状态为1的热词表。
     */
    SetVocabState(req: SetVocabStateRequest, cb?: (error: string, rep: SetVocabStateResponse) => void): Promise<SetVocabStateResponse>;
    /**
     * 本接口用于对语音流进行准实时识别，通过异步回调来返回识别结果。适用于直播审核等场景。
<br>• 支持rtmp、hls、rtsp等流媒体协议，以及各类基于http协议的直播流
<br>• 音频流时长无限制，服务会自动拉取音频流数据，若连续10分钟拉不到流数据时，服务会终止识别任务
<br>• 服务通过回调的方式来提供识别结果，用户需要提供CallbackUrl。回调时机为一小段话(最长15秒)回调一次。
<br>• 签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。
<br>• 默认单账号限制并发数为20路，如您有提高并发限制的需求，请提[工单](https://console.cloud.tencent.com/workorder/category)进行咨询。
     */
    CreateAsyncRecognitionTask(req: CreateAsyncRecognitionTaskRequest, cb?: (error: string, rep: CreateAsyncRecognitionTaskResponse) => void): Promise<CreateAsyncRecognitionTaskResponse>;
    /**
     * 用户通过本接口进行热词表的创建。
<br>•   默认最多可创建30个热词表。
<br>•   每个热词表最多可添加128个词，每个词最长10个字，不能超出限制。
<br>•   热词表可以通过数组或者本地文件形式上传。
<br>•   本地文件必须为UTF-8编码格式，每行仅添加一个热词且不能包含标点和特殊字符。
<br>•   热词权重取值范围为[1,10]之间的整数，权重越大代表该词被识别出来的概率越大。
     */
    CreateAsrVocab(req: CreateAsrVocabRequest, cb?: (error: string, rep: CreateAsrVocabResponse) => void): Promise<CreateAsrVocabResponse>;
    /**
     * 用户通过该接口可以删除自学习模型
     */
    DeleteCustomization(req: DeleteCustomizationRequest, cb?: (error: string, rep: DeleteCustomizationResponse) => void): Promise<DeleteCustomizationResponse>;
    /**
     * 用户使用该接口可以创建自学习模型，以供识别调用
     */
    CreateCustomization(req: CreateCustomizationRequest, cb?: (error: string, rep: CreateCustomizationResponse) => void): Promise<CreateCustomizationResponse>;
    /**
     * 本接口用于查询当前在运行的语音流异步识别任务列表。
<br>•   签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。
     */
    DescribeAsyncRecognitionTasks(req?: DescribeAsyncRecognitionTasksRequest, cb?: (error: string, rep: DescribeAsyncRecognitionTasksResponse) => void): Promise<DescribeAsyncRecognitionTasksResponse>;
    /**
     * 查询自学习模型列表
     */
    GetCustomizationList(req: GetCustomizationListRequest, cb?: (error: string, rep: GetCustomizationListResponse) => void): Promise<GetCustomizationListResponse>;
    /**
     * 用户通过本接口进行热词表的删除。
     */
    DeleteAsrVocab(req: DeleteAsrVocabRequest, cb?: (error: string, rep: DeleteAsrVocabResponse) => void): Promise<DeleteAsrVocabResponse>;
    /**
     * 用户通过该接口可以更新自学习模型，如模型名称、模型类型、模型语料。
     */
    ModifyCustomization(req: ModifyCustomizationRequest, cb?: (error: string, rep: ModifyCustomizationResponse) => void): Promise<ModifyCustomizationResponse>;
    /**
     * 本接口用于对60秒之内的短音频文件进行识别。<br>•   支持中文普通话、英语、粤语、日语、上海话、四川话、武汉话、贵阳话、昆明话、西安话、郑州话、太原话、兰州话、银川话、西宁话、南京话、合肥话、南昌话、长沙话、苏州话、杭州话、济南话、天津话、石家庄话、黑龙江话、吉林话、辽宁话。<br>•   支持本地语音文件上传和语音URL上传两种请求方式，音频时长不能超过60s，音频文件大小不能超过3MB。<br>•   音频格式支持wav、pcm、ogg-opus、speex、silk、mp3、m4a、aac。<br>•   请求方法为 HTTP POST , Content-Type为"application/json; charset=utf-8"<br>•   签名方法参考 [公共参数](https://cloud.tencent.com/document/api/1093/35640) 中签名方法v3。<br>•   默认接口请求频率限制：25次/秒，如您有提高请求频率限制的需求，请提[工单](https://console.cloud.tencent.com/workorder/category)进行咨询。
     */
    SentenceRecognition(req: SentenceRecognitionRequest, cb?: (error: string, rep: SentenceRecognitionResponse) => void): Promise<SentenceRecognitionResponse>;
    /**
     * 用户通过该接口可以下载自学习模型的语料
     */
    DownloadCustomization(req: DownloadCustomizationRequest, cb?: (error: string, rep: DownloadCustomizationResponse) => void): Promise<DownloadCustomizationResponse>;
}
