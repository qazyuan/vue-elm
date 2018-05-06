new Vue({
    el: "#vue-demo",
    data: {
        score: 100,
        ended: false,

    },
    methods: {
        punchFun: function () {
            this.score = this.score - 20;
            if (this.score <= 0) {
                this.ended = true;
            }
        },
        reset: function () {
            this.score = 100;
            this.ended = false;
        }
    },
    computed: {
        bagClass: function () {
            if (!this.score) {
                return 'bagBurst';
            } else {
                return 'bagInit';
            }
        }
    }
})