<template>
    <div class="icon-wrapper">
        <div class="icon">
            <img src="">
            <p>经典门票1</p>
        </div>
        <div class="icon">
            <img src="">
            <p>经典门票2</p>
        </div>
        <div class="icon">
            <img src="">
            <p>经典门票3</p>
        </div>
        <div class="icon">
            <img src="">
            <p>经典门票4</p>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'HomeIcons'
    }
</script>
<style type="text/css" scoped>
    .icon-wrapper {
        background: #eee;
        padding-bottom: 50%;
        display: flex;
        .icon {
            flex: 1;
            display: flex;
            align-items: vertical;
            p {
                text-align: center;
            }
        }
    }
</style>