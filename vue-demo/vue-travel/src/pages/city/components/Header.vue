<template>
    <div class="header-wrapper">
        <router-link to="/">
            <span class="iconfont icon-jiantou1"></span>
        </router-link>
        <p>城市选择</p>
    </div>
</template>
<script type="text/javascript">
export default {
    "name": 'Header'
}
</script>
<style type="text/css" scoped>
    @import '../../../assets/styles/iconfont.css';
    .header-wrapper {
        position: relative;
        height: 0.86rem;
        line-height: 0.86rem;
        background: #00bcd4;
        color: #fff;
        text-align: center;
        font-size: 0.32rem;
        span {
            position: absolute;
            display: inline-block;
            left: 0.1rem;
            width: 0.64rem;
            height: 0.64rem;
            color: #fff;
        }
        a {
            color: #fff;
        }
    }

</style>