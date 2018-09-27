<template>
    <div class="contact">
        <section class="hero is-info is-bold">
            <div class="hero-body">
                <div class="container">
                <h1 class="title">
                    Contacto
                </h1>
                <h2 class="subtitle">
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </h2>
                </div>
            </div>
        </section>

        <section class="section">
            <div class="container columns">
                <div class="column is-half">
                    <ContactForm />
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ContactForm from '@/components/ContactForm'
export default {
    name: 'contact',
    components: {
        ContactForm,
    }
}
</script>
