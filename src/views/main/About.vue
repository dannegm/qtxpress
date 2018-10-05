<template>
    <div class="about">
        <section id="header" class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <p class="title">
                        Nosotros
                    </p>
                </div>
            </div>
        </section>
        <section id="company">
            <div class="container">
                <div class="columns">
                    <div class="column is-three-fifths">
                        <h1 class="title">
                            Nuestra <b>Empresa</b>
                        </h1>
                        <p>
                            Somos una empresa con más de 20 años de experiencia, autorizada por la secretaría de comunicaciones y
                            transportes para el servicio público federal de carga de Materiales y Residuos Peligrosos, otorgamos
                            servicio desde las terminales de almacenamiento y reparto de PEMEX Refinación, Terminales de Nutstar
                            en USA, hasta la puerta de sus instalaciones brindando confianza y la satisfacción de nuestros clientes.
                        </p>
                    </div>
                    <div class="column is-one-fifths is-offset-one-fifth has-text-right">
                        <figure class="image is-3by2">
                            <img src="/img/logo-large.png" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section id='why-trust'>
            <div class="container">
                <div class="notification is-link">
                    <div class="columns">
                        <div class="column is-two-fifths">
                            <h1 class="title">
                                ¿Por qué
                                <br />confiar en
                                <br />Quality Tank?
                            </h1>
                        </div>
                        <div class="column is-three-fifths">
                            <p>
                                Nosotros garantizamos a nuestros clientes carga completa, eso unido a un excelente servicio al
                                cliente y a una imagen moderna y limpia es la forma de QT Express. Brindar el mejor servicio con
                                estas características es parte de nuestro compromiso.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section id="separator" class="hero has-text-centered">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        Nuestros <b>Clientes</b> Satisfechos
                    </h1>
                    <p class="subtitle">
                        Contamos con el respaldo y la confianza de excelentes socios de negocios
                    </p>
                </div>
            </div>
        </section>
        <section id="cards">
            <div class="container">
                <div class="columns is-4">
                    <div class="column is-one-fifths">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-square">
                                    <img src="/img/about/logo1.png" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="column is-one-fifths">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-square">
                                    <img src="/img/about/logo2.png" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="column is-one-fifths">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-square">
                                    <img src="/img/about/logo3.png" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="column is-one-fifths">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-square">
                                    <img src="/img/about/logo4.png" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div class="column is-one-fifths">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-square">
                                    <img src="/img/about/logo5.png" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container has-text-centered has-text-white">
                    <p>Confianza, adaptación e innovación son nuestras bases para lograr la total
                        <br />satisfacción de nuestros clientes.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'about',
}
</script>

<style lang="less" scoped>
.about {
    #header {
        background: linear-gradient(to bottom, #1c1928 0%,#100735 100%) !important;
        background-image: url('/img/about-hero.jpg') !important;
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
    #company {
        margin: 3rem;
        .title {
            font-weight: 600;
            b {
                color: #34088f;
            }
        }
    }
    #why-trust {
        .notification {
            background: #34088f !important;
            padding: 2rem 10rem;
            .column {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .title {
                font-size: 1.6em !important;
            }
            p {
                font-size: 1em !important;
            }
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
        background-color: #262627;

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
                }
            }
        }
    }
}
</style>
