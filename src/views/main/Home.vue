<template>
    <div class="home">
        <section id="slider"
            class="hero is-large"
            style="background-image: url('img/slider/slider1.jpg') !important">
            <div class="hero-body">
                <div class="container">
                    <p class="title">
                        Ubicación Estratégica
                    </p>
                    <p class="subtitle">
                        Oficina ubicada estratégicamente en Cadereyta Jiménez, Nuevo León para optimizar los tiempos de entrega.
                    </p>
                </div>
            </div>
        </section>
        <section id="slider-footer" class="hero">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Rápido <b>Seguro</b> y <b>Confiable</b>
                    </h1>
                    <p class="subtitle">
                        Brindar el mejor servicio con estas características es nuestro compromiso
                    </p>
                </div>
            </div>
        </section>
        <section id="separator" class="hero has-text-centered">
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
                        <div class="card">
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
                    <div class="column is-one-third">
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
                    <div class="column is-one-third">
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
export default {
    name: 'home',
}
</script>

<style lang="less" scoped>
.home {
    #slider {
        background: linear-gradient(to bottom, #1c1928 0%,#100735 100%) !important;
        background-position: center !important;
        background-size: cover !important;

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
    #slider-footer {
        background: #cfcfcf !important;
        .title {
            font-size: 2em !important;
        }
        .subtitle {
            font-size: 1em !important;
            margin-top: -10px !important;
        }
    }
    #separator {
        .title {
            font-size: 2em !important;
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

