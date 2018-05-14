<template>
    <div class="header-wrapper">
        <div class="input-wrapper">
            <i class="icon"></i>
            <input class="input-text" type="text" name="text" placeholder="输入城市或景点">
        </div>
        <div class="address">北京</div>
    </div>
</template>
<script type="text/javascript">
    export default {
        name: 'Header'
    }
</script>
<style type="text/css">
    .header-wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        height: 1.15rem;
        background: #199EAF;
        padding-left: 0.3rem;
    }
    .input-wrapper {
        height: 0.75rem;
        width: 5.5rem;
        background: #fff;
        border: 1px solid #444;
        border-radius: 10px;
        input {
            line-height: 0.75rem;
        }
    }

</style>