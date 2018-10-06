<template>
    <div class="services">
        <section id="header" class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <p class="title" v-appear="'slideInLeft'">
                        Servicios
                    </p>
                </div>
            </div>
        </section>
        <section id="headline">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title" v-appear="'slideInLeft'">
                        Autotransporte <b>de hidrocarburos</b>
                        <br /> y <b>Materiales Peligrosos</b>
                    </h1>
                </div>
            </div>
        </section>
        <section id="services" v-appear="'slideInUp'">
            <div class="container">
                <div class="columns is-variable is-6">
                    <div class="column is-half">
                        <div class="columns is-4">
                            <div class="column is-one-thirds">
                                <h1 class="title">Transportamos</h1>
                            </div>
                            <div class="column is-two-thirds">
                                <ul>
                                    <li>Compuestos Refinados</li>
                                    <li>Gasolina Magna</li>
                                    <li>Gasolina Premium</li>
                                    <li>Diesel</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half">
                        <div class="columns is-4">
                            <div class="column is-one-thirds">
                                <h1 class="title">Cargamos con
                                    <br />equipos de:</h1>
                            </div>
                            <div class="column is-two-thirds">
                                <ul>
                                    <li>20.5 m3</li>
                                    <li>42.5 m3</li>
                                    <li>62 m3</li>
                                    <li>66 m3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="benefits" v-appear="'slideInUp'">
            <div class="container">
                <div class="notification is-dark">
                    <div class="headline has-text-centered">
                        <h1 class="title">
                            Beneficios
                        </h1>
                        <p class="subtitle">
                            Las ventajas de nuestros servicios en transporte de materiales peligrosos
                        </p>
                    </div>
                    <div class="columns">
                        <div class="slot column is-one-third" v-appear="'slideInLeft'">
                            <h1 class="title">
                                <i class="qt qt-marker"></i>
                                Ubicación
                                <br />Estrategica
                            </h1>
                            <p class="subtitle">
                                Oficina ubicada estrategicamente en Cadereyta Jimenez, Nuevo León, para optimizar los tiempos de traslado.
                            </p>
                        </div>
                        <div class="slot column is-one-third" v-appear="'slideInUp'">
                            <h1 class="title">
                                <i class="qt qt-handler"></i>
                                Operadores
                                <br />Certificados
                            </h1>
                            <p class="subtitle">
                                Personal calificado y expertos en el transporte  de combustibles y residuos peligrosos.
                            </p>
                        </div>
                        <div class="slot column is-one-third" v-appear="'slideInRight'">
                            <h1 class="title">
                                <i class="qt qt-haarp"></i>
                                Rastreo
                                <br />Satelital
                            </h1>
                            <p class="subtitle">
                                Mantenemos monitoreadas todas nuestras unidades las 24 horas, los 365 días del año.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    name: 'services',
}
</script>

<style lang="less" scoped>
.services {
    background-image: url('/img/services-bg.jpg') !important;
    background-position: center 200px !important;
    background-size: 100% auto !important;

    #header {
        background: linear-gradient(to bottom, #1c1928 0%,#100735 100%) !important;
        background-image: url('/img/services-hero.jpg') !important;
        background-position: center !important;
        background-size: cover !important;

        .hero-body {
            padding-bottom: 4rem !important;
            padding-top: 12rem !important;

            .title {
                color: #ffffff;
                font-size: 3.2em !important;
                font-weight: 600 !important;
            }
        }
    }
    #headline {
        .title {
            &:before {
                display: block;
                content: ' ';
                background: #340885;
                position: absolute;
                height: 4px;
                width: 3rem;
                margin-top: 44px;
                margin-left: -4rem;
            }

            margin-left: 4rem;
            font-size: 1.8em !important;
            b {
                color: #34088f !important;
            }
        }
    }
    #services {
        margin-top: -4rem;

        .title {
            font-size: 1.2em !important;
            font-weight: 600;
        }
        ul {
            li {
                font-size: 1.2em !important;

                &:before {
                    content: ' ';
                    width: 12px;
                    height: 4px;
                    background: #8cd50a;
                    margin-right: 10px;
                    display: inline-block;
                }
            }
        }
    }
    #benefits {
        padding-bottom: 6rem;
        .notification {
            background: rgba(38,38,38,0.9) !important;

            .headline {
                margin-top: 4rem;

                .title {
                    &:before, &:after {
                        display: block;
                        content: ' ';
                        background: #8cd50a;
                        width: 3rem;
                        height: 4px;
                        margin-top: 20px;
                    }
                    &:before {
                        margin-right: 1rem;
                        float: left;
                    }
                    &:after {
                        margin-left: 1rem;
                        float: right;
                    }

                    display: inline-block;
                    font-size: 2rem !important;
                    font-weight: 600;
                    margin-bottom: 2rem;
                }
                .subtitle {
                    font-size: 1rem !important;
                }
            }
            .slot {
                padding: 4rem;

                .title {
                    font-size: 1.6rem !important;
                    font-weight: 500;
                    margin-bottom: 3rem;
                    overflow: hidden;

                    i.qt {
                        display: block;
                        float: left;
                        font-size: 3rem;
                        margin-right: 2rem;
                    }
                }
                .subtitle {
                    font-size: 1rem !important;
                }
            }
        }
    }
}
</style>
