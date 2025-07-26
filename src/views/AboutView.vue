<template>
  <Navbar />

  <v-container fluid class="ma-5">
    <v-row>
      <v-col cols="12" md="6">
        <v-img src="../assets/abc123.jpg" class="my-4" contain height="300" />
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-center">
          <h2>{{ $t('about.inspiration') }}</h2> 
          <p>{{ $t('about.inspiration_p1') }}
            <strong>{{ $t('about.inspiration_p2') }}</strong>
          </p>
          <p>
            {{ $t('about.inspiration_p3') }}
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <div class="text-center">
          <h2>{{ $t('about.communication') }}</h2>
          <p>{{ $t('about.feedback') }}</p>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">{{ $t('about.name') }}</label>
              <input type="text" id="name" v-model="name" :placeholder="$t('about.your_name')" required>
            </div>
            <div class="form-group">
              <label for="email">{{ $t('about.email') }}</label>
              <input type="email" id="email" v-model="email" :placeholder="$t('about.your_email')" required>
            </div>
            <div class="form-group">
              <label for="message">{{ $t('about.message') }}</label>
              <textarea id="message" rows="5" v-model="message" :placeholder="$t('about.leave_message')" required></textarea>
            </div>
            <button type="submit">{{ $t('about.send') }}</button>
          </form>

        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-center">
          
          <h2>{{ $t('about.donation') }}</h2>
          <p>  {{ $t('about.donation_p') }}</p>
          <PayPalDonateButton />
        </div>
      </v-col>
    </v-row>
  </v-container>

</template>


<script>
import Navbar from '../components/Navbar.vue';
import PayPalDonateButton from '../components/PayPalDonateButton.vue';
import emailjs from 'emailjs-com'


export default {
    name: 'AboutView',
    components: {
        Navbar, PayPalDonateButton
    },
    data() {
        return {
            name: '',
            email: '',
            message: ''
          };
    },
    methods: {
        submitForm() {
            // Prepare the template parameters
            const templateParams = {
              from_name: this.name,
              from_email: this.email,
              message: this.message
            }

            // Send the email
            emailjs.send('service_k0usqcn', 'template_cks7b23', templateParams)
              .then((response) => {
                console.log('Email sent successfully!', response.status, response.text)
                // Clear form fields after successful submission
                this.name = ''
                this.email = ''
                this.message = ''
                // You can add a success message here
              }, (error) => {
                console.error('Failed to send email:', error)
              })
          }
    },
    mounted() {
      emailjs.init("zyOMB1fZpi05OyRTU")
    }
    
};

</script>

<style scoped>

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  height: auto;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;  

}
</style>
