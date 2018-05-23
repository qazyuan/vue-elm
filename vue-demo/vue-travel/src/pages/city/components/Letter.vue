<template>
    <div class="letter-wrapper">
        <p class="item" :class="curIndex == index ? 'current' : ''" v-for="(item, key, index) in cities" @click="cliLetter(index)">{{key}}</p>
    </div>
</template>
<script>
export default {
    name: 'Letter',
    props: {
        cities: {
            type: Object
        },
        curIndex: {
            type: Number
        }
    },
    methods: {
        cliLetter (index) {
            this.$emit('LClick', index);
        }
    }
}
</script>
<style type="text/css" scoped>
.letter-wrapper {
    position: absolute;
    top: 1.58rem;
    bottom: 0;
    right: 0.1rem;
    width: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.item {
    text-align: center;
    line-height: 0.4rem;
    color: #00bcd4;

    &.current {
        background-color: #00bcd4;
        color: #fff;
    }
}

</style>