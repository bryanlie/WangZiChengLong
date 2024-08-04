<template>
  <Navbar />

  <v-container fluid class="ma-5">
    <v-row>
      <v-col cols="12" md="6">
        <v-img src="../assets/abc123.jpg" class="my-4" contain height="300" />
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-center">
          <h2>Inspiration</h2> 
          <p>The world around us is changing at an astonishing pace. From self-driving cars to personalized medicine, 
            advancements in STEM (Science, Technology, Engineering, and Math) and computer science (CS) are shaping the future we live in.  
            <strong>We believe everyone deserves the opportunity to participate in, and be empowered by, these incredible advancements.</strong>
          </p>
          <p>
            This project was born from a simple idea: <strong>to create a central hub for knowledge and resources.</strong> 
            We envisioned a space where learners of all ages could explore the fascinating world of Math, CS, 
            and even languages, at their own pace.
          </p>

          <p>
            <strong>The rise of Artificial Intelligence (AI) adds another exciting layer to this journey. </strong>
            AI holds immense potential to revolutionize various industries and solve some of humanity's most pressing challenges. 
            By providing accessible resources on STEM and CS, we hope to equip learners with the skills needed to contribute 
            to this rapidly evolving field.
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <div class="text-center">
          <h2>Communication</h2>
          <p>Please send us your feedback, thank you!</p>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="name" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <label for="message">Message:</label>
              <textarea id="message" rows="5" v-model="message" placeholder="Leave a Message" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>

        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-center">
          
          <h2>Donation</h2>
          <p>  If you would like to support the kids who can benefit from this project, you can donate to us via PayPal or any Debit/Credit card. 
              We will use the raised money to further improve user experience on this website. Thank you for your support!</p>
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
