<template>
    <div class="slide-show">
        <section
            v-for="(slide, index) in slides"
            v-if="current == index"
            :key="index"
            class="hero is-large">
            <img class="hero-background" :src="slide.background" />
            <div class="hero-body">
                <div class="container">
                    <p class="title" v-appear="'slideInLeft'">
                        {{slide.title}}
                    </p>
                    <p class="subtitle" v-appear="'slideInRight'">
                        {{slide.subtitle}}
                    </p>
                </div>
            </div>
        </section>
        <div class="dots">
            <ul class="dots-list">
                <li
                    v-for="(slide, index) in slides"
                    :key="index"
                    :class="{'is-active': current == index}"
                    @click="setCurrent(index)"
                    class="dot-item">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SlideShow',
    props: [
        'slides',
        'interval',
    ],
    methods: {
        setCurrent (index) {
            this.pause ();
            this.play ();
            this.current = index;
        },
        next () {
            if (this.current >= (this.slides.length - 1)) {
                this.current = 0;
            } else {
                this.current++;
            }
        },
        play () {
            this.timer = setInterval (this.next, this.interval || 5 * 1000)
        },
        pause () {
            clearInterval (this.timer)
        }
    },
    mounted () {
        this.play ()
    },
    data () {
        return {
            timer: null,
            current: 0,
        }
    },
}
</script>

<style lang="less" scoped>
@keyframes zoomIn {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.5);
    }
}

.slide-show {
    overflow: hidden;
    position: relative;
    height: 575px;

    .dots {
        position: absolute;
        height: 575px;
        width: 64px;
        right: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;

        .dots-list {
            display: block;
            margin: 0px;
            padding: 0px;

            .dot-item {
                display: block;
                width: 8px;
                height: 8px;
                border: 1px solid #fff;
                margin: 8px;
                padding: 0px;
                border-radius: 50%;

                &.is-active {
                    background: #fff;
                }
            }
        }
    }

    .hero {
        background: linear-gradient(to bottom, #1c1928 0%, #100735 100%) !important;
        position: absolute;
        width: 100%;
        height: 575px;

        .hero-background {
            position: absolute;
            width: 100%;
            height: auto;
            margin: 0;
            padding: 0;
            animation-name: zoomIn;
            animation-duration: 25s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
        }

        .hero-body {
            padding-bottom: 12rem !important;
            padding-top: 14rem !important;

            .title, .subtitle {
                color: #ffffff;
            }

            .title {
                font-size: 3.2em !important;
                font-weight: 600 !important;
            }

            .subtitle {
                font-size: 1.6em !important;
                margin-top: 1em;
                width: 45%;
            }
        }
    }
}
</style>
