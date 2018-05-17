<template>
    <div>
        <span :class="itemClass" v-for="itemClass in starClasses"></span>
    </div>
</template>
<script type="text/javascript">
const LENGTH = 5
export default {
    name: 'Star',
    props: {
        score: {
            type: Number
        }
    },
    computed: {
        starClasses () {
            let onNumber = Math.floor(this.score);
            let half = ((this.score % 1) > 0 ? true : false);
            let stars = [];
            for (let i = 0; i < onNumber; i++) {
                stars.push('on');
            }
            if (half) {
                stars.push('half');
            }
            if (stars.length < LENGTH) {
                for (let i = 0; i < LENGTH - stars.length; i++) {
                    stars.push('close');
                }
            }
            return stars;
        }
    }
}
</script>
<style type="text/css" scoped>
    span {
        display: inline-block;
        width: 0.24rem;
        height: 0.24rem;
    }
    .on {
        background: url('../../assets/images/star_on.png') no-repeat;
        background-size: 0.24rem;    }
    .half {
        background: url('../../assets/images/star_half.png') no-repeat;
        background-size: 0.24rem;
    }
    .close {
        background: url('../../assets/images/star_off.png') no-repeat;
        background-size: 0.24rem;
    }
</style>