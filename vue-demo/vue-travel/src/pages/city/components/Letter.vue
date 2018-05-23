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
            touchStatus: false,
            timer: null,
            startY: 0
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
    updated () {
        // console.log(refs['A']);
        this.startY = this.$refs['A'][0].offsetTop;
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
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                this.timer = setTimeout(() => {
                    let touchY = e.touches[0].clientY;
                    let index = Math.floor((touchY - this.startY) / 20);
                    if (index >= 0 && index < this.letters.length) {
                        this.$emit('change', this.letters[index]);
                    }
                }, 20);
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