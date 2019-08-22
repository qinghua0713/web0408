####  JQuery一个对象可以同时绑定多个事件，这是如何实现的？

```js
$('div').on('click.a',function(){
    console.log('我是第一个绑定事件')
})

$('div').on('click.b',function(){
    console.log('我是多个绑定事件')
})
```

