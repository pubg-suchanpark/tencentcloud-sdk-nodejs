import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeAbnormalEventResponse, DescribeAbnormalEventRequest, CreatePictureRequest, DescribeHistoryScaleRequest, DescribeCallDetailRequest, RemoveUserByStrRoomIdResponse, StartMCUMixTranscodeRequest, StartMCUMixTranscodeByStrRoomIdRequest, CreateTroubleInfoRequest, DescribeDetailEventResponse, StopMCUMixTranscodeByStrRoomIdResponse, DescribeRoomInformationRequest, DescribeRecordStatisticResponse, StartMCUMixTranscodeByStrRoomIdResponse, DismissRoomByStrRoomIdRequest, DescribeRecordStatisticRequest, DescribeUserInformationRequest, ModifyPictureRequest, ModifyPictureResponse, StopMCUMixTranscodeResponse, RemoveUserRequest, DismissRoomRequest, DescribeCloudRecordingRequest, StopMCUMixTranscodeRequest, CreateCloudRecordingRequest, DeleteCloudRecordingResponse, CreateTroubleInfoResponse, StopMCUMixTranscodeByStrRoomIdRequest, DeletePictureResponse, ModifyCloudRecordingRequest, CreateCloudRecordingResponse, StartMCUMixTranscodeResponse, DescribeTrtcMcuTranscodeTimeResponse, DeleteCloudRecordingRequest, DescribePictureRequest, DescribeExternalTrtcMeasureResponse, DescribePictureResponse, DescribeTrtcMcuTranscodeTimeRequest, DescribeDetailEventRequest, DismissRoomByStrRoomIdResponse, ModifyCloudRecordingResponse, DescribeCloudRecordingResponse, DismissRoomResponse, DescribeUserInformationResponse, DescribeCallDetailResponse, DeletePictureRequest, DescribeRoomInformationResponse, DescribeExternalTrtcMeasureRequest, RemoveUserByStrRoomIdRequest, CreatePictureResponse, RemoveUserResponse, DescribeHistoryScaleResponse } from "./trtc_models";
/**
 * trtc client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 接口说明：启动云端混流，并指定混流画面中各路画面的布局位置。

TRTC 的一个房间中可能会同时存在多路音视频流，您可以通过此 API 接口，通知腾讯云服务端将多路视频画面合成一路，并指定每一路画面的位置，同时将多路声音进行混音，最终形成一路音视频流，以便用于录制和直播观看。房间销毁后混流自动结束。

您可以通过此接口实现如下目标：
- 设置最终直播流的画质和音质，包括视频分辨率、视频码率、视频帧率、以及声音质量等。
- 设置各路画面的位置和布局，您只需要在启动时设置一次，排版引擎会自动完成后续的画面排布。
- 设置录制文件名，用于二次回放。
- 设置 CDN 直播流 ID，用于在 CDN 进行直播观看。

目前已经支持了如下几种布局模板：
- 悬浮模板：第一个进入房间的用户的视频画面会铺满整个屏幕，其他用户的视频画面从左下角依次水平排列，显示为小画面，最多4行，每行4个，小画面悬浮于大画面之上。最多支持1个大画面和15个小画面，如果用户只发送音频，仍然会占用画面位置。
- 九宫格模板：所有用户的视频画面大小一致，平分整个屏幕，人数越多，每个画面的尺寸越小。最多支持16个画面，如果用户只发送音频，仍然会占用画面位置。
- 屏幕分享模板：适合视频会议和在线教育场景的布局，屏幕分享（或者主讲的摄像头）始终占据屏幕左侧的大画面位置，其他用户依次垂直排列于右侧，最多两列，每列最多8个小画面。最多支持1个大画面和15个小画面。若上行分辨率宽高比与画面输出宽高比不一致时，左侧大画面为了保持内容的完整性采用缩放方式处理，右侧小画面采用裁剪方式处理。
- 画中画模板：适用于混合大小两路视频画面和其他用户混音，或者混合一路大画面和其他用户混音的场景。小画面悬浮于大画面之上，可以指定大小画面的用户以及小画面的显示位置，最多支持2个画面。
- 自定义模板：适用于在混流中指定用户的画面位置，或者预设视频画面位置的场景。当预设位置指定用户时，排版引擎会该用户预留位置；当预设位置未指定用户时，排版引擎会根据进房间顺序自动填充。预设位置填满时，不再混合其他用户的画面和声音。自定义模板启用占位图功能时（LayoutParams中的PlaceHolderMode设置成1），在预设位置的用户没有上行视频时可显示对应的占位图（PlaceImageId）。

注意：
1、**混流转码为收费功能，调用接口将产生云端混流转码费用，详见[云端混流转码计费说明](https://cloud.tencent.com/document/product/647/49446)。**
2、2020年1月9号及以后创建的应用才能直接调用此接口。2020年1月9日之前创建的应用默认使用云直播的云端混流，如需切换至MCU混流，请[提交工单](https://console.cloud.tencent.com/workorder/category)寻求帮助。
3、客户端混流和服务端混流不能混用。
     */
    StartMCUMixTranscode(req: StartMCUMixTranscodeRequest, cb?: (error: string, rep: StartMCUMixTranscodeResponse) => void): Promise<StartMCUMixTranscodeResponse>;
    /**
     * 查询sdkappid下的房间列表。默认返回10条通话，一次最多返回100条通话。可查询14天内的数据。
**注意**：该接口只用于历史数据统计或核对数据使用，实时类关键业务逻辑不能使用。
     */
    DescribeRoomInformation(req: DescribeRoomInformationRequest, cb?: (error: string, rep: DescribeRoomInformationResponse) => void): Promise<DescribeRoomInformationResponse>;
    /**
     * 接口说明：结束云端混流
     */
    StopMCUMixTranscode(req: StopMCUMixTranscodeRequest, cb?: (error: string, rep: StopMCUMixTranscodeResponse) => void): Promise<StopMCUMixTranscodeResponse>;
    /**
     * 创建异常信息
     */
    CreateTroubleInfo(req: CreateTroubleInfoRequest, cb?: (error: string, rep: CreateTroubleInfoResponse) => void): Promise<CreateTroubleInfoResponse>;
    /**
     * 可查询sdkqppid 每天的房间数和用户数，每分钟1次，可查询最近14天的数据。当天未结束，无法查到当天的房间数与用户数。
     */
    DescribeHistoryScale(req: DescribeHistoryScaleRequest, cb?: (error: string, rep: DescribeHistoryScaleResponse) => void): Promise<DescribeHistoryScaleResponse>;
    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁删除自定义背景图或水印，可通过此接口删除已上传的图片。无需频繁删除图片的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中操作。
     */
    DeletePicture(req: DeletePictureRequest, cb?: (error: string, rep: DeletePictureResponse) => void): Promise<DeletePictureResponse>;
    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁新增自定义背景图或水印，可通过此接口上传新的图片素材。无需频繁新增图片的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中操作。
     */
    CreatePicture(req: CreatePictureRequest, cb?: (error: string, rep: CreatePictureResponse) => void): Promise<CreatePictureResponse>;
    /**
     * 接口说明：将用户从房间移出，适用于主播/房主/管理员踢人等场景。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     */
    RemoveUser(req: RemoveUserRequest, cb?: (error: string, rep: RemoveUserResponse) => void): Promise<RemoveUserResponse>;
    /**
     * 查询指定时间内的用户列表及用户通话质量数据，可查询14天内数据。DataType 不为null，查询起止时间不超过1个小时，查询用户不超过6个，支持跨天查询。DataType，UserIds为null时，查询起止时间不超过4个小时， 默认查询6个用户，同时支持每页查询100以内用户个数（PageSize不超过100）。接口用于查询质量问题，不推荐作为计费使用。
**注意**：该接口只用于历史数据统计或核对数据使用，实时类关键业务逻辑不能使用。
     */
    DescribeCallDetail(req: DescribeCallDetailRequest, cb?: (error: string, rep: DescribeCallDetailResponse) => void): Promise<DescribeCallDetailResponse>;
    /**
     * 成功开启录制后，可以使用此接口来更新录制任务。仅在录制任务进行时有效，录制退出后更新将会返回错误。更新操作是全量覆盖，并不是增量更新的模式，也就是说每次更新都需要携带全量的信息。
     */
    ModifyCloudRecording(req: ModifyCloudRecordingRequest, cb?: (error: string, rep: ModifyCloudRecordingResponse) => void): Promise<ModifyCloudRecordingResponse>;
    /**
     * ###接口说明：
启动云端录制功能，完成房间内的音视频录制，并上传到指定的云存储。您可以通过此 API 接口把TRTC 房间中的每一路音视频流做单独的录制有或者多路视频画面混流一路。

###您可以通过此接口实现如下目标：
* 指定订阅流参数（RecordParams）来指定需要录制的主播的黑名单或者白名单。
* 指定第三方存储的参数（StorageParams）来指定上传到您希望的云存储
* 指定混流模式下的音视频转码详细参数（MixTranscodeParams），包括视频分辨率、视频码率、视频帧率、以及声音质量等
* 指定混流模式各路画面的位置和布局或者也可以指定自动模板的方式来配置。

###关键名词：
* 单流录制：分别录制房间的订阅UserId的音频和视频。录制服务会实时将录制文件（M3U8/TS）上传至云存储。
* 混流录制：将房间内订阅UserId的音视频混录成一个音视频文件，并将录制文件（M3U8/TS）上传至云存储。
     */
    CreateCloudRecording(req: CreateCloudRecordingRequest, cb?: (error: string, rep: CreateCloudRecordingResponse) => void): Promise<CreateCloudRecordingResponse>;
    /**
     * 获取Trtc的用量统计数据。走计费渠道二期 只允许查两天的数据
     */
    DescribeExternalTrtcMeasure(req: DescribeExternalTrtcMeasureRequest, cb?: (error: string, rep: DescribeExternalTrtcMeasureResponse) => void): Promise<DescribeExternalTrtcMeasureResponse>;
    /**
     * 接口说明：结束云端混流
     */
    StopMCUMixTranscodeByStrRoomId(req: StopMCUMixTranscodeByStrRoomIdRequest, cb?: (error: string, rep: StopMCUMixTranscodeByStrRoomIdResponse) => void): Promise<StopMCUMixTranscodeByStrRoomIdResponse>;
    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁修改自定义背景图或水印素材，可通过此接口修改已上传的图片。无需频繁修改图片素材的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中操作。
     */
    ModifyPicture(req: ModifyPictureRequest, cb?: (error: string, rep: ModifyPictureResponse) => void): Promise<ModifyPictureResponse>;
    /**
     * 接口说明：把房间所有用户从房间移出，解散房间。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     */
    DismissRoomByStrRoomId(req: DismissRoomByStrRoomIdRequest, cb?: (error: string, rep: DismissRoomByStrRoomIdResponse) => void): Promise<DismissRoomByStrRoomIdResponse>;
    /**
     * 查询SDKAppID下用户的异常体验事件，返回异常体验ID与可能产生异常体验的原因。可查询15天内数据，查询起止时间不超过1个小时。支持跨天查询。异常体验ID映射见：https://cloud.tencent.com/document/product/647/44916
     */
    DescribeAbnormalEvent(req: DescribeAbnormalEventRequest, cb?: (error: string, rep: DescribeAbnormalEventResponse) => void): Promise<DescribeAbnormalEventResponse>;
    /**
     * 接口说明：启动云端混流，并指定混流画面中各路画面的布局位置。

TRTC 的一个房间中可能会同时存在多路音视频流，您可以通过此 API 接口，通知腾讯云服务端将多路视频画面合成一路，并指定每一路画面的位置，同时将多路声音进行混音，最终形成一路音视频流，以便用于录制和直播观看。

您可以通过此接口实现如下目标：
- 设置最终直播流的画质和音质，包括视频分辨率、视频码率、视频帧率、以及声音质量等。
- 设置各路画面的位置和布局，您只需要在启动时设置一次，排版引擎会自动完成后续的画面排布。
- 设置录制文件名，用于二次回放。
- 设置 CDN 直播流 ID，用于在 CDN 进行直播观看。

目前已经支持了如下几种布局模板：
- 悬浮模板：第一个进入房间的用户的视频画面会铺满整个屏幕，其他用户的视频画面从左下角依次水平排列，显示为小画面，最多4行，每行4个，小画面悬浮于大画面之上。最多支持1个大画面和15个小画面，如果用户只发送音频，仍然会占用画面位置。
- 九宫格模板：所有用户的视频画面大小一致，平分整个屏幕，人数越多，每个画面的尺寸越小。最多支持16个画面，如果用户只发送音频，仍然会占用画面位置。
- 屏幕分享模板：适合视频会议和在线教育场景的布局，屏幕分享（或者主讲的摄像头）始终占据屏幕左侧的大画面位置，其他用户依次垂直排列于右侧，最多两列，每列最多8个小画面。最多支持1个大画面和15个小画面。若上行分辨率宽高比与画面输出宽高比不一致时，左侧大画面为了保持内容的完整性采用缩放方式处理，右侧小画面采用裁剪方式处理。
- 画中画模板：适用于混合大小两路视频画面和其他用户混音，或者混合一路大画面和其他用户混音的场景。小画面悬浮于大画面之上，可以指定大小画面的用户以及小画面的显示位置。
- 自定义模板：适用于在混流中指定用户的画面位置，或者预设视频画面位置的场景。当预设位置指定用户时，排版引擎会该用户预留位置；当预设位置未指定用户时，排版引擎会根据进房间顺序自动填充。预设位置填满时，不再混合其他用户的画面和声音。自定义模板启用占位图功能时（LayoutParams中的PlaceHolderMode设置成1），在预设位置的用户没有上行视频时可显示对应的占位图（PlaceImageId）。

注意：
1、**混流转码为收费功能，调用接口将产生云端混流转码费用，详见[云端混流转码计费说明](https://cloud.tencent.com/document/product/647/49446)。**
2、2020年1月9号及以后创建的应用才能直接调用此接口。2020年1月9日之前创建的应用默认使用云直播的云端混流，如需切换至MCU混流，请[提交工单](https://console.cloud.tencent.com/workorder/category)寻求帮助。
3、客户端混流和服务端混流不能混用。
     */
    StartMCUMixTranscodeByStrRoomId(req: StartMCUMixTranscodeByStrRoomIdRequest, cb?: (error: string, rep: StartMCUMixTranscodeByStrRoomIdResponse) => void): Promise<StartMCUMixTranscodeByStrRoomIdResponse>;
    /**
     * 接口说明：将用户从房间移出，适用于主播/房主/管理员踢人等场景。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     */
    RemoveUserByStrRoomId(req: RemoveUserByStrRoomIdRequest, cb?: (error: string, rep: RemoveUserByStrRoomIdResponse) => void): Promise<RemoveUserByStrRoomIdResponse>;
    /**
     * 接口说明：把房间所有用户从房间移出，解散房间。支持所有平台，Android、iOS、Windows 和 macOS 需升级到 TRTC SDK 6.6及以上版本。
     */
    DismissRoom(req: DismissRoomRequest, cb?: (error: string, rep: DismissRoomResponse) => void): Promise<DismissRoomResponse>;
    /**
     * 查询云端录制计费时长。

- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 日结后付费将于次日上午推送账单，建议次日上午9点以后再来查询前一天的用量。
     */
    DescribeRecordStatistic(req: DescribeRecordStatisticRequest, cb?: (error: string, rep: DescribeRecordStatisticResponse) => void): Promise<DescribeRecordStatisticResponse>;
    /**
     * 查询旁路转码计费时长。
- 查询时间小于等于1天时，返回每5分钟粒度的数据；查询时间大于1天时，返回按天汇总的数据。
- 单次查询统计区间最多不能超过31天。
- 若查询当天用量，由于统计延迟等原因，返回数据可能不够准确。
- 日结后付费将于次日上午推送账单，建议次日上午9点以后再来查询前一天的用量。
     */
    DescribeTrtcMcuTranscodeTime(req: DescribeTrtcMcuTranscodeTimeRequest, cb?: (error: string, rep: DescribeTrtcMcuTranscodeTimeResponse) => void): Promise<DescribeTrtcMcuTranscodeTimeResponse>;
    /**
     * 成功开启录制后，可以使用此接口来查询录制状态。仅在录制任务进行时有效，录制退出后查询将会返回错误。
     */
    DescribeCloudRecording(req: DescribeCloudRecordingRequest, cb?: (error: string, rep: DescribeCloudRecordingResponse) => void): Promise<DescribeCloudRecordingResponse>;
    /**
     * 成功开启录制后，可以使用此接口来停止录制任务。仅在录制任务进行时有效，录制退出后更新将会返回错误。停止录制成功后不代表文件全部传输完成，如果未完成后台将会继续上传文件，成功后通过事件回调通知客户文件全部传输完成状态。
     */
    DeleteCloudRecording(req: DeleteCloudRecordingRequest, cb?: (error: string, rep: DeleteCloudRecordingResponse) => void): Promise<DeleteCloudRecordingResponse>;
    /**
     * 如果您需要在 [云端混流转码](https://cloud.tencent.com/document/product/647/16827) 时频繁查找自定义背景图或水印信息，可通过此接口查找已上传的图片信息。无需频繁查找图片信息的场景，建议直接在 [控制台 > 应用管理 > 素材管理](https://cloud.tencent.com/document/product/647/50769) 中查看。
     */
    DescribePicture(req: DescribePictureRequest, cb?: (error: string, rep: DescribePictureResponse) => void): Promise<DescribePictureResponse>;
    /**
     * 查询用户某次通话内的进退房，视频开关等详细事件。可查询14天内数据。
     */
    DescribeDetailEvent(req: DescribeDetailEventRequest, cb?: (error: string, rep: DescribeDetailEventResponse) => void): Promise<DescribeDetailEventResponse>;
    /**
     * 查询指定时间内的用户列表，可查询14天内数据，查询起止时间不超过4小时。默认每页查询6个用户，支持每页最大查询100个用户PageSize不超过100）。
**注意**：该接口只用于历史数据统计或核对数据使用，实时类关键业务逻辑不能使用。
     */
    DescribeUserInformation(req: DescribeUserInformationRequest, cb?: (error: string, rep: DescribeUserInformationResponse) => void): Promise<DescribeUserInformationResponse>;
}
