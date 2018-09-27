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
                        class="button is-primary"
                        @click="sendEmail()">
                        Send message
                    </button>
                </p>
            </b-field>
        </section>

        <section>
            <b-field horizontal>
                <b-notification auto-close has-icon type="is-success" :active.sync="success">
                    El mensaje fue enviado
                </b-notification>
            </b-field>
            <b-field horizontal>
                <b-notification auto-close has-icon type="is-danger" :active.sync="error">
                    Hubo un error, mira la consola
                </b-notification>
            </b-field>
        </section>
    </div>
</template>

<script>
import { send } from '@/services/mailgun'

export default {
  name: 'ContactForm',
  methods: {
      async sendEmail () {
        try {
            await send ({
                from: `${this.name} <${this.email}>`,
                to: 'dannegm@gmail.com',
                to: 'memoadian@gmail.com',
                subject: `Tienes un mensade de ${this.name}`,
                text: this.message,
            });

            this.success = true;
            this.message = '';
        } catch (e) {
            this.error = true;
            console.log(e);
            console.log(JSON.stringify(e, null, 4));
        }
      }
  },
  data: () => ({
      name: 'Daniel García',
      email: 'im@danielgarcia.me',
      message: 'Esto es un mensaje de prueba desde Axios/Vue',
      success: false,
      error: false,
  })
}
</script>