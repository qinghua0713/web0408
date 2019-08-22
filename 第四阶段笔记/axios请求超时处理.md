```vue
//在main.js设置全局的请求次数，请求的间隙
axios.defaults.retry = 4;
axios.defaults.retryDelay = 1000;

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    var config = err.config;
    //如果配置不存在或未设置重试选项，则拒绝
    if(!config || !config.retry) return Promise.reject(err);

    // 设置变量以跟踪重试计数
    config.__retryCount = config.__retryCount || 0;

    // 检查我们是否已经将重试的总数最大化
    if(config.__retryCount >= config.retry) {
        // 错误拒绝
        return Promise.reject(err);
    }

    // 增加重试计数
    config.__retryCount += 1;

    //创造新的承诺，以处理指数后退
    var backoff = new Promise(function(resolve) {
        setTimeout(function() {
            resolve();
        }, config.retryDelay || 1);
    });

    // 返回承诺，其中回忆axios重试请求
    return backoff.then(function() {
        return axios(config);
    });
});
```

