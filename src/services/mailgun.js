import axios from 'axios';

const settings = {
    baseURL: `https://api.mailgun.net/v3/${process.env.VUE_APP_MAILGUN_DOMAIN}`,
    auth: {
        username: 'api',
        password: process.env.VUE_APP_MAILGUN_API_KEY,
    },
};

function send (data) {
    const messageData = new FormData ();
    Object.keys(data).forEach (key => messageData.append (key, data [key]));
    return axios.post ('/messages', messageData, settings);
}

export { send }