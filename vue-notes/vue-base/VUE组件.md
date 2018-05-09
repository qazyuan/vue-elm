### 实例化Vue对象
### 数据和方法
    data: {},
    methods: {}
    
### 属性绑定
    :href
    :value
    :style

### 鼠标点击事件
    @click
    @dblclick

### 键盘事件
    @keyup
    
### 事件修饰符
- 点击事件： prevent stop once
- 键盘事件修饰符： enter alt


### 双向绑定 select/input/textarea
- v-model
- ref通过dom绑定


### 计算属性 computed
- 计算属性和methods区别

        methods执行所有的方法
        computed当虚拟dom和实际dom不一致时才会执行里面的func

- 当一个功能能用watch\computed\methods实现时，优先使用computed
### 动态绑定class
    可以通过点击事件等触发样式的改变，用computed里面的属性来实时更改样式

    
### v-if v-else-if v-show
    不同之处： v-show有dom结构，display: none
    
    
### 初始化多个vue的实例化对象

```
<div id="app-one">
    <h2>{{title}}</h2>
</div>
<div id="app-two">
    <h2>{{title}}</h2>
    <button @click="changeTitle">changeTitleOne</button>
</div>

<script type="text/javascript">
    var one = new Vue({
        el: '#app-one',
        data: {
            'title': 'this is app-one'
        }
    });
    var two = new Vue({
        el: '#app-two',
        data: {
            'title': 'this is app-two'
        },
        methods: {
            changeTitle: function () {
                one.title = "changed title one"; //修改one中title的值
            }
        }
    });

    two.title= "changed title two";
```

### vue组件

```
var data = {
    name: luhan0
};
Vue.component('greeting', {
    template: `<p>{{name}}: this is a new vue component
    <button v-on:click="changeName">改名</button>
    </p>`,
    data: function () {
        // return {
        //     name: "luhan0"
        // };
        return data;
    },
    methods: {
        changeName: function () {
            this.name = "hello";
        }
    }
});
```

### 组件全局注册和局部注册
- 组件全局注册

        import 后用Vue.component('', 组件)全局引入
- 组件局部注册
  
        在组件内import后再component里面注册

### css样式作用域 scoped

### 组件嵌套

### 传值问题
- 父组件向子组件传值：属性传值

        属性传值v-bind:  子组件通过props接收
        传值和传引用的区别
        
- 子组件向父组件传值
        
        子组件：this.$emit(event, args)
        /*
        * event: 要触发的事件
        * args: 将要传给父组件的参数
        */ 
        父组件：v-on: event = functionName()
        

### vue路由
- 配置路由
    
```
    // 配置路由
    const router = new VueRouter({
        routes: [
        {path: '/', component: Home},
        {path: '/hello', component: HelloWorld}
        ],
        mode: 'history'
    });
```



    