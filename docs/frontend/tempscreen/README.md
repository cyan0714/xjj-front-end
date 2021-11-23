---
title: 接口管理
---
## 介绍
旨在为开发、产品、测试人员提供更优雅的接口管理服务。可以帮助开发者轻松创建、发布、维护 API

## 平台地址
链接到[平台地址](http://192.168.0.96:3000/)


## 文档
链接到[官网文档](https://hellosean1025.github.io/yapi/documents/index.html)

## 请求接口之前获取accessToken
#### 添加'项目-->设置-->环境配置-->Header'
```js
userName  xjjuser
passWord  xjj876543
```
#### 将以下代码复制到'项目-->设置-->请求配置-->Pre-request Script(请求参数处理脚本)'
```js
context.requestHeader['accessToken'] = storage.getItem('accessToken')
```
#### 将以下代码复制到'项目-->设置-->请求配置-->Pre-response Script(响应数据处理脚本)'
```js
(function (){
    var logoutCode = '1001'
    var loginUrl = '/login'
    var tokenName = 'accessToken'
    var pkey = 'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAMKjRHvaEMvQovuPKu+oh1ZwKE2f/5tr4i+vBGnlTOL9CjhS9wz6lGQp44Xvwv4iOaLb7WttJnG2VuIdRdOS8TkCAwEAAQ=='
    var jsencryptUrl = 'https://cdn.bootcss.com/jsencrypt/3.0.0-rc.1/jsencrypt.js'
    var userName = context.requestHeader.userName
    var passWord = context.requestHeader.passWord
    var mock = context.requestHeader.mock
    var encode = function(code) {
      // RSA加密
      if (code === null || code === '' || code === undefined) {
        return code
      }
      var encrypt = new JSEncrypt()
      encrypt.setPublicKey(pkey)
      code = encrypt.encrypt(code)
      return code
    }
    var httpPost = function (resolve){
        var uCiphertext = encode(userName)
        var pCiphertext = encode(passWord)
        context.utils.axios({
            url: getHost() + loginUrl,
            method: "post",
            params:{
                u:uCiphertext,
                p:pCiphertext
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then(function(result) {
            if(result.data.code === '203'){
                storage.setItem(tokenName,result.data.data[tokenName])
            }
        }).catch(function(err) {
           alert(err);
        });
    }
    
    var loadJs = function (url, callback) {
    	var body = document.getElementsByTagName('body')[0];
    	var script = document.createElement('script');
    	script.type = 'text/javascript';
    	script.src = url;
    	if (typeof (callback) == 'function') {
    		script.onload = script.onreadystatechange = function () {
    			if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
    				callback();
    				script.onload = script.onreadystatechange = null;
    			}
    		};
    	}
    	body.appendChild(script);
    }
    var init = function (){
        if(context.responseData.code === logoutCode){
            loadJs(jsencryptUrl,function (){
                httpPost()
            })
            alert('接口票据已失效，请再重新尝试')
        }
    }
    
    
    var hrefUrl = context.href
    var baseUrl = '/api'
    var mockkey = '/mock/'
    var getApiByUrl = function (){
       return hrefUrl.substring(hrefUrl.indexOf(baseUrl))
    }
    var isMock = function (){
        return hrefUrl.indexOf(mockkey) > 0
    }
    var getHost = function (){
        hrefUrl = hrefUrl.replace(getApiByUrl(),'')
        return hrefUrl
    }
    if(!isMock()){
       init()
    }
})()
```