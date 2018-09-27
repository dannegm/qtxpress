<template>
    <div class="contact-form">
        <section>
            <b-field horizontal label="Name" :type="errors.name ? 'is-danger' : ''" :message="errors.name">
                <b-input v-model="name"></b-input>
            </b-field>
            <b-field horizontal label="Email" :type="errors.name ? 'is-danger' : ''" :message="errors.email">
                <b-input v-model.trim="email" type="email"></b-input>
            </b-field>

            <b-field horizontal label="Message" :type="errors.name ? 'is-danger' : ''" :message="errors.message">
                <b-input v-model.trim="message" type="textarea"></b-input>
            </b-field>

            <b-field horizontal>
                <p class="control">
                    <button
                        class="button is-info"
                        :class="{'is-loading':isSending}"
                        @click="sendEmail()">
                        Send message
                    </button>
                </p>
            </b-field>
        </section>
    </div>
</template>

<script>
import { functions } from '@/services/firebase'
import { required, email } from 'vuelidate/lib/validators'
export default {
    name: 'ContactForm',
    methods: {
        async sendEmail () {
            this.errors = {
                name: null,
                email: null,
                message: null,
            }

            this.$v.$touch ();
            if (!this.$v.$invalid) {
                this.isSending = true;
                try {
                    const sendEmail = functions.httpsCallable ('sendEmail');
                    await sendEmail ({
                        from: `${this.name} <${this.email}>`,
                        to: 'dannegm@gmail.com',
                        subject: `Tienes un mensade de ${this.name}`,
                        text: this.message,
                    });

                    this.success ('El mensaje fue enviado');
                    this.message = '';
                    this.isSending = false;
                } catch (e) {
                    this.danger ('Hubo un error, intentalo de nuevo');
                    this.isSending = false;
                    console.error(e);
                    console.log(JSON.stringify(e, null, 4));
                }
            } else {
                this.danger ('Verifica tu información de contacto');
                if (!this.$v.name.required) this.errors.name = 'Escribe tu nombre';
                if (!this.$v.email.required) this.errors.email = 'Escribe tu correo electrónico';
                if (!this.$v.message.required) this.errors.message = 'Cuéntanos algo';
            }
        },
        success (msg) {
            this.$toast.open ({
                message: msg,
                type: 'is-success',
                position: 'is-bottom',
            })
        },
        danger (msg) {
            this.$toast.open ({
                message: msg,
                type: 'is-danger',
                position: 'is-bottom',
            })
        }
    },
    data () {
        return {
            isSending: false,
            errors: {},
            name: '',
            email: '',
            message: '',
        }
    },
    validations: {
        name: {
            required,
        },
        email: {
            required,
            email,
        },
        message: {
            required,
        },
    }
}
</script>