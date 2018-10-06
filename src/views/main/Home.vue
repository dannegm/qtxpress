<template>
    <div class="home">
        <SlideShow :slides="slides" />
        <section id="slider-footer" class="hero">
            <div class="hero-body">
                <div class="container" v-appear="'slideInLeft'">
                    <div class="columns">
                        <div class="column is-one-fifth has-text-right">
                            <i class="qt qt-truck"></i>
                        </div>
                        <div class="column">
                            <h1 class="title">
                                Rápido <b>Seguro</b> y <b>Confiable</b>
                            </h1>
                            <p class="subtitle">
                                Brindar el mejor servicio con estas características es nuestro compromiso
                            </p>
                        </div>
                    </div>
                </div>

                <img id="trailer" src="img/home/trailer.png" v-appear="'slideInRight'" />
            </div>
        </section>
        <section id="separator" class="hero has-text-centered" v-appear="'slideInUp'">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Confianza, <b>Innovación</b> y Adaptación
                    </h1>
                    <p class="subtitle">
                        Las ventajas de contratar nuestros servicios de carga y traslado
                        <br /> de combustible
                    </p>
                </div>
            </div>
        </section>
        <section id="cards">
            <div class="container">
                <div class="columns is-4">
                    <div class="column is-one-third">
                        <div class="card" v-appear="'zoomIn'">
                            <div class="card-image">
                                <figure class="image">
                                    <img src="/img/home/card3.jpg" />
                                </figure>
                            </div>
                            <div class="card-content has-text-centered">
                                <p class="title">
                                    Amplia cobertura
                                </p>
                                <p class="content">
                                    Cobertura en todo México y frontera E.U.A.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column is-one-third" v-appear="'zoomIn'">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image">
                                    <img src="/img/home/card2.jpg" />
                                </figure>
                            </div>
                            <div class="card-content has-text-centered">
                                <p class="title">
                                    Amplia cobertura
                                </p>
                                <p class="content">
                                    Cobertura en todo México y frontera E.U.A.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column is-one-third" v-appear="'zoomIn'">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image">
                                    <img src="/img/home/card1.jpg" />
                                </figure>
                            </div>
                            <div class="card-content has-text-centered">
                                <p class="title">
                                    Amplia cobertura
                                </p>
                                <p class="content">
                                    Cobertura en todo México y frontera E.U.A.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import SlideShow from '@/components/SlideShow'
export default {
    name: 'home',
    components: {
        SlideShow,
    },
    data () {
        return {
            slides: [
                {
                    background: 'img/slider/slider1.jpg',
                    title: 'Ubicación Estratégica',
                    subtitle: 'Oficina ubicada estratégicamente en Cadereyta Jiménez, Nuevo León para optimizar los tiempos de entrega.',
                },
                {
                    background: 'img/slider/slider2.jpg',
                    title: 'Quality Tank',
                    subtitle: 'Empresa lider en servicios de autotransporte de hidrocarburos y materiales peligrosos.',
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.home {
    #slider-footer {
        background: #cfcfcf !important;
        .qt-truck {
            font-size: 4rem;
        }
        .title {
            font-size: 2em !important;
        }
        .subtitle {
            font-size: 1em !important;
            margin-top: -10px !important;
        }
        #trailer {
            position: absolute;
            left: 50%;
            margin-left: 243px;
            margin-top: -190px;
            width: 322px;
        }
    }
    #separator {
        &:before {
            display: block;
            content: ' ';
            background: #340885;
            position: absolute;
            left: 50%;
            margin-left: -25vw;
            z-index: -1;
            height: 4px;
            width: 50vw;
            margin-top: 87px;
        }
        .title {
            font-size: 2em !important;
            background: #fff;
            display: inline-block;
            padding: 0 2rem;
            b {
                color: #34088f;
            }
        }
        .subtitle {
            font-size: 1em !important;
            margin-top: -10px !important;
        }
    }
    #cards {
        margin-top: 10rem;
        background-color: #27282a;
        background-image: url('/img/home-footer.jpg');
        background-position: center;
        background-size: cover;

        .container {
            .columns {
                column-gap: 1rem !important;
                margin-top: -12rem;
                margin-bottom: 4rem;

                .card {
                    transition: all .2s;

                    &:hover {
                        transform: translateY(-10%);
                    }

                    .title {
                        margin-bottom: .5rem;
                        color: #34088f !important;
                        font-weight: 600 !important;
                    }
                    p {
                        margin: 0;
                    }
                }
            }
        }
    }
}
</style>

