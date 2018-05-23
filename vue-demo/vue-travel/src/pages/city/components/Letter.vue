<template>
    <div class="letter-wrapper">
        <p class="item"
        @click="clickHandler(key)"
        @touchstart = "startHandle"
        @touchmove = "moveHandle"
        @touchend = "endHandle"
        :ref="key"
        v-for="(key, index) in letters">{{key}}</p>
    </div>
</template>
<script>
export default {
    name: 'Letter',
    props: {
        cities: {
            type: Object
        }
    },
    data () {
        return {
            touchStatus: false
        }
    },
    computed: {
        letters: function () {
            let aletter = [];
            for (let i in this.cities) {
                aletter.push(i);
            }
            return aletter;
        }
    },
    methods: {
        clickHandler (key) {
            this.$emit('change', key);
        },
        startHandle () {
            this.touchStatus = true;
        },
        moveHandle (e) {
            if (this.touchStatus) {
                const startY = this.$refs['A'][0].offsetTop;
                let touchY = e.touches[0].clientY;
                let index = Math.floor((touchY - startY)/20);
                this.$emit('change', this.letters[index]);
            }
        },
        endHandle () {
            this.touchStatus = false;
        }
    }
};
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