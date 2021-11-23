---
title: 部署
---

## 部署cdn资源服务
1. 部署cdn资源服务，用nginx部署或其他容器部署cdn资源。[点击下载](http://192.168.0.96:2061/cdnserver.zip)
1. 将步骤1下载的cdn压缩包拷贝到服务器上解压进行部署即可
### nginx部署配置
```js
server {
    listen       2061;#//端口
    server_name  192.168.0.96; #访问地址
    root /data/projects/web-pro/cdnserver; #指定部署项目的绝对路径
	location / {
          add_header Access-Control-Allow-Origin *;
          add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
          add_header Access-Control-Allow-Headers 'DNT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization';
	}

    error_page 404 /404.html;
        location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
        location = /50x.html {
    }

    #开启gzip压缩
    gzip on;
    gzip_min_length 1k;
    gzip_comp_level 9;
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;
    gzip_vary on;
    gzip_disable "MSIE [1-6]\.";
}
```
1. 修改server配置中的listen、server_name、root。改成你自己的即可

::: tip
说明：构建之前先修改环境变量：.env.production文件的VUE_APP_CDN_SERVER，修改成步骤1部署的地址，如：http://192.168.0.96:2061
:::