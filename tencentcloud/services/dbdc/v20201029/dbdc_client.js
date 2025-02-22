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
 * dbdc client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("dbdc.tencentcloudapi.com", "2020-10-29", clientConfig);
    }
    /**
     * 根据不同地域不同用户，获取集群列表信息
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 本接口用于查询独享集群实例列表
     */
    async DescribeInstanceList(req, cb) {
        return this.request("DescribeInstanceList", req, cb);
    }
    /**
     * 本接口用于查询独享集群详情
     */
    async DescribeInstanceDetail(req, cb) {
        return this.request("DescribeInstanceDetail", req, cb);
    }
    /**
     * 本接口用于查询独享集群内的DB实例列表
     */
    async DescribeDBInstances(req, cb) {
        return this.request("DescribeDBInstances", req, cb);
    }
    /**
     * 本接口用于修改集群名称
     */
    async ModifyInstanceName(req, cb) {
        return this.request("ModifyInstanceName", req, cb);
    }
}
exports.Client = Client;
