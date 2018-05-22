<template>
    <div class="tab-wrapper">
        <div class="tab-container">
            <div class="tab" :class="isActive ? 'active': ''" @click="clickHandle()">境内</div>
            <div class="tab" :class="!isActive ? 'active':'' " @click="clickHandle()">境外.港澳台</div>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    name: 'Tab',
    data() {
        return {
            isActive: true
        }
    },
    methods: {
        clickHandle: function () {
            this.isActive = !this.isActive;
        }
    }
}

</script>
<style type="text/css">
    .tab-wrapper {
        height: 0.8rem;
        line-height: 0.8rem;
        background: #00bcd4;
        font-size: 0.24rem;
        text-align: center;
    }
    .tab-container {
        width: 60%;
        height: 0.6rem;
        display: flex;
        margin: 0 auto;
    }
    .tab {
        flex: 1;
        text-align: center;
        line-height: 0.6rem;
        color: #fff;
        border: 1px solid #fff;
        &.active {
            background: #fff;
            color: #00bcd4;
        }
    }
</style>