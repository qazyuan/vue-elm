<template>
    <div class="header-wrapper">
        <div class="back">
            <span class="iconfont icon-jiantou1"></span>
        </div>
        <div class="input-wrapper">
            <span class="iconfont icon-sousuo"></span>
            <input class="input-text" type="text" name="text" placeholder="输入城市或景点">
        </div>
        <div class="address">
            <router-link to="/city">{{city}}</router-link>
            <span class="iconfont icon-jiantou"></span>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'Header',
    props: {
        city: String
    }
}
</script>
<style scoped>
/*@import '../../../assets/styles/variables.css';*/
@import '../../../assets/styles/iconfont.css';

    .header-wrapper {
        display: flex;
        align-items: center;
        height: 1rem;
        background: #00bcd4;
        padding-left: 0.3rem;
        color: #fff;
        a {
            color: #fff;
        }
    }
    .back {
        width: 0.64rem;
    }
    .input-wrapper {
        display: flex;
        flex: 1;
        height: 0.6rem;
        background: #fff;
        border-radius: 0.06rem;
        padding-left: 0.2rem;
        line-height: 0.6rem;
        color: #555;
        input {
            padding-left: 0.1rem;
        }
    }
    .address {
        width: 1rem;
        padding: 0.1rem;
    }

</style>