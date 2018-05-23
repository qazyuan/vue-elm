<template>
    <div class="search-wrapper">
        <div class="input-wrapper">
            <span class="iconfont icon-sousuo"></span>
            <input class="input-text" type="text" name="text" placeholder="输入城市或景点">
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'Search'

}

</script>
<style type="text/css">
    @import '../../../assets/styles/iconfont.css';
    .search-wrapper {
        height: 0.8rem;
        line-height: 0.8rem;
        background: #00bcd4;
        font-size: 0.24rem;
        text-align: center;
    }
    .input-wrapper {
        width: 80%;
        margin: 0 auto;
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
</style>