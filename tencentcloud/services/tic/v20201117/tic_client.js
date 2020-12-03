"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
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
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * tic client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tic.tencentcloudapi.com", "2020-11-17", clientConfig);
    }
    /**
     * 本接口（DescribeStackEvents）用于查看一个或多个事件详细信息。

- 可以根据事件ID过滤感兴趣的事件
- 也可以根据版本ID，资源栈ID，事件类型，事件状态过滤事件，过滤信息详细请见过滤器Filter
- 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的事件
     */
    async DescribeStackEvents(req, cb) {
        return this.request("DescribeStackEvents", req, cb);
    }
    /**
     * 本接口（UpdateStack）用于更新资源栈的名称和描述。
     */
    async UpdateStack(req, cb) {
        return this.request("UpdateStack", req, cb);
    }
    /**
     * 本接口（UpdateStackVersion）用于更新一个版本的模版内容，名称或描述，模版仅限COS URL，且为zip格式。
     */
    async UpdateStackVersion(req, cb) {
        return this.request("UpdateStackVersion", req, cb);
    }
    /**
     * 本接口（DestroyStack）用于删除资源栈下的某个版本所创建的资源。
     */
    async DestroyStack(req, cb) {
        return this.request("DestroyStack", req, cb);
    }
    /**
     * 本接口（ApplyStack）用于触发资源栈下某个版本的Apply事件。

- 当版本处于PLAN_IN_PROGRESS或APPLY_IN_PROGRESS状态时，将无法再执行本操作
- 当版本处于APPLY_COMPLETED状态时，本操作无法执行
     */
    async ApplyStack(req, cb) {
        return this.request("ApplyStack", req, cb);
    }
    /**
     * 本接口（CreateStackVersion）用于给资源栈新增一个HCL模版版本，仅限COS链接，且为zip格式。
     */
    async CreateStackVersion(req, cb) {
        return this.request("CreateStackVersion", req, cb);
    }
    /**
     * 本接口（DeleteStack）用于删除一个资源栈（配置、版本、事件信息）。但不会销毁资源管理的云资源。如果需要销毁资源栈管理的云资源，请调用 DestoryStack 接口销毁云资源。
     */
    async DeleteStack(req, cb) {
        return this.request("DeleteStack", req, cb);
    }
    /**
     * 本接口（PlanStack）用于触发资源栈下某个版本的PLAN事件。

- 当版本处于PLAN_IN_PROGRESS或APPLY_IN_PROGRESS状态时，将无法再执行本操作
- 当版本处于APPLY_COMPLETED状态时，本操作无法执行
     */
    async PlanStack(req, cb) {
        return this.request("PlanStack", req, cb);
    }
    /**
     * 本接口（DeleteStackVersion）用于删除一个版本，处于PLAN_IN_PROGRESS和APPLY_IN_PROGRESS状态中的版本无法删除。
     */
    async DeleteStackVersion(req, cb) {
        return this.request("DeleteStackVersion", req, cb);
    }
    /**
     * 本接口（DescribeStackEvent）用于获取单个事件详情，尤其是可以得到事件的详细控制台输出文本。
     */
    async DescribeStackEvent(req, cb) {
        return this.request("DescribeStackEvent", req, cb);
    }
    /**
     * 本接口（DescribeStackVersions）用于查询一个或多个版本的详细信息。

- 可以根据版本ID查询感兴趣的版本
- 可以根据版本名字和状态来过滤版本，详见过滤器Filter
- 如果参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的版本
     */
    async DescribeStackVersions(req, cb) {
        return this.request("DescribeStackVersions", req, cb);
    }
    /**
     * 本接口（DescribeStacks）用于查询一个或多个资源栈的详细信息。

- 可以根据资源栈ID来查询感兴趣的资源栈信息
- 若参数为空，返回当前用户一定数量（Limit所指定的数量，默认为20）的资源栈
     */
    async DescribeStacks(req, cb) {
        return this.request("DescribeStacks", req, cb);
    }
    /**
     * 本接口（CreateStack）用于通过传递一个COS的terraform zip模版URL来创建一个资源栈。创建资源栈后仍需要用户调用对应的plan, apply, destory执行对应的事件。
     */
    async CreateStack(req, cb) {
        return this.request("CreateStack", req, cb);
    }
}
exports.Client = Client;
