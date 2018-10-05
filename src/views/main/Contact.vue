<template>
    <div class="contact">
        <section id="header" class="hero is-medium">
            <div class="hero-body">
                <div class="container">
                    <p class="title">
                        Contacto
                    </p>
                </div>
            </div>
        </section>

        <section id="hero-footer" class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="slot column is-one-third">
                            <div class="media">
                                <div class="media-left">
                                    <i class="qt qt-marker"></i>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">
                                        Dirección
                                    </p>
                                    <p class="subtitle">
                                        Calle, Ciudad Mante, #0, Col. Martín de Zavala, Cadereyta Jiménez.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="slot column is-one-third">
                            <div class="media">
                                <div class="media-left">
                                    <i class="qt qt-message"></i>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">
                                        Correo Electrónico
                                    </p>
                                    <p class="subtitle">
                                        info@qualitytank.com
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="slot column is-one-third">
                            <div class="media">
                                <div class="media-left">
                                    <i class="qt qt-message"></i>
                                </div>
                                <div class="media-phone">
                                    <p class="title is-4">
                                        Teléfono
                                    </p>
                                    <p class="subtitle">
                                        01(828)2841778, 01(81)10945418
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="form">
            <div class="container">
                <div class="columns">
                    <div class="column is-half">
                        <h1 class="title">Estamos para <b>Servirte</b></h1>
                        <p>
                            <b>¿Te interesa alguno de nuestros servicios? </b>
                            <br />Regístra tus datos en el siguiente formulario y en breve nos comunicaremos contigo
                            para darle seguimiento a tu solicitud, duda o comentario.
                        </p>
                    </div>
                    <div class="column is-half">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>

        <section id="map" style="height: 500px;">
            <GmapMap
                :center="mapLocation"
                :zoom="8"
                :options="{styles:mapStyle}"
                style="width: 100%; height: 100%;">
                <GmapMarker :position="mapLocation" :icon="mapMarker.icon" />
            </GmapMap>
        </section>
    </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

import { sanFransisco } from '@/utils/mapStyles'

import ContactForm from '@/components/ContactForm'

Vue.use (VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLEMAPS_API_KEY,
  },
})

export default {
    name: 'contact',
    components: {
        ContactForm,
        VueGoogleMaps,
    },
    data () {
        return {
            mapStyle: sanFransisco,
            mapLocation: {
                lat: 25.6490376,
                lng: -100.4431822
            },
            mapMarker: {
                icon: {
                    anchor: {
                        x: 0.5,
                        y: 1,
                    },
                    scaledSize: {
                        width: 32,
                        height: 42,
                    },
                    url: '/img/green-marker.png',
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.contact {
    #header {
        background: linear-gradient(to bottom, #1c1928 0%,#100735 100%) !important;
        background-image: url('/img/slider/slider1.jpg') !important;
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
    #hero-footer {
        background: #cfcfcf !important;
        .slot {
            padding: 0rem 4rem;

            .media-left {
                background: #340885;
                color: #fff;
                font-size: 3rem;
                width: 72px;
                height: 72px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .title {
                font-size: 1.4rem !important;
                font-weight: 500;
                margin-bottom: 2rem;
            }
            .subtitle {
                font-size: 1rem !important;
            }
        }
    }
    #form {
        margin-top: 2rem;
        .title {
            font-size: 1.8em !important;
            font-weight: 600;

            b {
                color: #34088f !important;
            }
        }
    }
}
</style>