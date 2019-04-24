<?php
/**
 * Description:钩子
 * Created by PhpStorm.
 * User: VIjay
 * Date: 2019/4/24
 * Time: 21:04
 */

// GitHub Webhook Secret.
// Keep it the same with the 'Secret' field on your Webhooks / Manage webhook page of your respostory.
$secret = "mall";
// 项目根目录, 如: "/var/www/fizzday"
$path = "/www/wwwroot/mall.yuemeet.com";
// Headers deliveried from GitHub
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];
if ($signature) {
    $hash = "sha1=" . hash_hmac('sha1', $HTTP_RAW_POST_DATA, $secret);
    if (strcmp($signature, $hash) == 0) {
        echo shell_exec("cd {$path} && /usr/bin/git reset --hard origin/master && /usr/bin/git clean -f && /usr/bin/git pull 2>&1");
        exit();
    }
}
http_response_code(404);


/*error_reporting(E_ALL);
$gitPost = json_decode(file_get_contents("php://input"));
$dir = '/www/wwwroot/mall.yuemeet.com';//该目录为git检出目录
$comm = "cd $dir  && git checkout  master  && git pull origin master && git reset --hard && cd /home/www/ownShop/application && ln -f config_product.php config.php && ln -f database_product.php database.php 2>&1";
$handle = popen($comm, 'r');
$read = stream_get_contents($handle);
echo "'$handle'; " . gettype($handle) . "\n";
pclose($handle);*/
