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
          <p>
            You can reach out to us via email at <a target="_blank" :href="`mailto:${myemail}`">
              {{ myemail }}
            </a>
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="text-center">
          
          <h2>Donation</h2>
          <div class="paypal-button-container">
            <div id="paypal-button-container" ref="paypalButtonContainer"></div>
            <p>          If you would like to support this project, you can donate to us via PayPal or any Debit/Credit card. 
              <br>
              Thank you for your support! We will use the raised money to further improve this website. </p>
          </div>
         
          
        </div>
      </v-col>
    </v-row>
  </v-container>

</template>


<script>
import Navbar from '../components/Navbar.vue';
import { loadScript } from '@paypal/paypal-js';


export default {
    name: 'AboutView',
    components: {
        Navbar
    },
    data() {
        return {
            myemail: 'danli091981@gmail.com',
          };
    },
    async mounted() {
        const paypalSdk = await loadScript({
            'client-id': 'AUbbqD2mZHIWmaxsPzdIxaBVQw6QXNPjwkG-NRZJg3oqYabnURkqyRJSlE835JaW86aWPPEN_d3g-6Ko', 
            currency: 'USD', 
        });

        paypalSdk.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: '1.00', // Replace with the desired amount
                      },
                    },
                  ],
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then((details) => {
                  // Handle successful payment
                  console.log(details);
                });
            },
            onError: (err) => {
              // Handle errors
              console.error(err);
            },
          }).render('#paypal-button-container');
  },
};

</script>

<style scoped>
.paypal-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; 
  padding: auto;
}
</style>
