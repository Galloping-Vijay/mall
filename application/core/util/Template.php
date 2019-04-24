<?php
/**
 * Created by CRMEB.
 * Copyright (c) 2017~2019 http://www.crmeb.com All rights reserved.
 * Author: liaofei <136327134@qq.com>
 * Date: 2019/4/3 16:36
 */

namespace app\core\util;

use app\core\model\routine\RoutineFormId;
use app\ebapi\model\user\WechatUser;
use think\Request;
use app\core\traits\LogicTrait;

/** 模版消息类
 * Class Template
 * @package app\core\util
 */
class Template
{

    use LogicTrait;

    protected  $providers=[
        RoutineTwoTemplateService::class,
        RoutineTemplateService::class,
    ];

}