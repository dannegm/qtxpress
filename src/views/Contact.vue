<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <p class="title">
                Contacto
            </p>
            <ContactForm />
        </div>
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
