<template>
    <div class="users">
        <ul>
            <li v-for="user in UsersInfo">
                <h1>{{user.name}}</h1>
                <h3>{{user.position}}</h3>
                <h4 @click="changeTitle(title)">{{title}}</h4>
            </li>

        </ul>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'Users',
        props: {
            UsersInfo: {
                type: Array
            }
        },
        data() {
            return {
                title: '子组件数据'
            }
        },
        methods: {
            changeTitle: function (title) {
                this.title = '子组件已修改';
                this.$emit('changeT', this.title);
            }
        }
    }

</script>
<style type="text/css" scoped>
    ul {
        display: flex;
        flex-wrap: wrap;
        margin: 5px;
    }
    li {
        flex-grow: 1;
        flex-basis: 200px;
        list-style: none;
        border: 1px solid #333;
        padding: 5px 10px;
        margin: 5px;
        text-align: center;
        /*box-sizing: content-box;*/
    }
</style>