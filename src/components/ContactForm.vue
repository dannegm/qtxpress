<template>
    <div class="contact-form">
        <section>
            <b-field horizontal label="Name">
                <b-input v-model="name"></b-input>
            </b-field>

            <b-field horizontal label="Email">
                <b-input v-model="email" type="email"></b-input>
            </b-field>

            <b-field horizontal label="Message">
                <b-input v-model="message" type="textarea"></b-input>
            </b-field>

            <b-field horizontal>
                <p class="control">
                    <button
                        class="button is-info"
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
export default {
    name: 'ContactForm',
    methods: {
        async sendEmail () {
            try {
                const sendEmail = functions.httpsCallable ('sendEmail');
                await sendEmail ({
                    from: `${this.name} <${this.email}>`,
                    to: 'dannegm@gmail.com',
                    to: 'memoadian@gmail.com',
                    subject: `Tienes un mensade de ${this.name}`,
                    text: this.message,
                });

                this.success ('El mensaje fue enviado');
                this.message = '';
            } catch (e) {
                this.danger ('Hubo un error, mira la consola');
                console.error(e);
                console.log(JSON.stringify(e, null, 4));
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
            name: '',
            email: '',
            message: '',
        }
    }
}
</script>