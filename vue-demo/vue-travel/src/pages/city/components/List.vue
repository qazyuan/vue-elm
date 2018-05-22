<template>
    <div>
        <p class="header">热门城市</p>
        <div class="city-wrapper">
            <div class="item">北京</div>
            <div class="item">三亚</div>
            <div class="item">上海</div>
            <div class="item">北京</div>
            <div class="item">三亚</div>
            <div class="item">上海</div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'List'
}

</script>
<style type="text/css">
    .header {
        background: #eee;
        height: 0.4rem;
        line-height: 0.4rem;
        padding: 0.1rem 0 0.1rem 0.3rem;
        font-size: 0.12rem;
    }
    .city-wrapper {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .item {
            height: 0.9rem;
            width: 32.8%;
            line-height: 0.9rem;
            text-align: center;
            background: #fff;
            border: 1px solid #eee;
        }

    }
</style>