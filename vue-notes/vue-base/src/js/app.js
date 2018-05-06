new Vue({
    el: '#vue-app',
    data: {
        'name': 'yang',
        'job': 'font-end',
        'websit': 'http://www.baidu.com',
        "webTag": '<a href="http://www.baidu.com">测试</a>',
        "age": 30,
        "x": 0,
        "y": 0,
        "a": 2,
        "b": 5,
        "changeColor": true,
        "changeLength": true,
        "Error": false,
        "Success": true,
        "charactors": ['aaa', 'bbb', 'ccc'],
        "list": [
            {"name": 'aaa', 'age': 11},
            {"name": 'bbb', 'age': 13},
            {"name": 'cccc', 'age': 15},
            {"name": 'dddd', 'age': 88}
        ]
    },
    methods: {
        toggleError: function () {
            this.Error = !this.Error;
        },
        toggleSuccess: function () {
            this.Success = !this.Success;
        }
        // greet: function (str) {
        //     return `${this.name} ${str}`;
        // },
        // add: function (n) {
        //     this.age = this.age + (+n);
        // },
        // minus: function (n) {
        //     if (+n > this.age) {
        //         this.age = 0;
        //     } else {
        //         this.age = this.age - (+n);
        //     }
        // },
        // undate:function (event) {
        //     // console.log(event);
        //     this.x = event.offsetX;
        //     this.y = event.offsetY;
        // },
        // logName: function (event) {
        //     this.name = this.$refs.name.value;
        // },
        // logAge: function () {
        //     this.age = this.$refs.age.value;
        // },
        // addToA: function () {
        //     console.log('addToA');
        //     return this.age + this.a;
        // },
        // addToB: function () {
        //     console.log('addToB');
        //     return this.age + this.b;
        // }
        // colorChange: function () {
        //     // console.log(this.changeColor);
        //     this.changeColor = !this.changeColor;
        // },
        // changeDouble: function () {
        //     this.changeLength = !this.changeLength;
        //     this.changeColor = !this.changeColor;
        // }
    },
    computed: {
        addToA: function () {
            console.log('addToA');
            return this.age + this.a;
        },
        addToB: function () {
            console.log('addToB');
            return this.age + this.b;
        },
        changeStyle: function () {
            return {
                changeColor: this.changeColor,
                changeLength: this.changeLength
            }
        }
     }
});