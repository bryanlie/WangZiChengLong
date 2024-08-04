<template>

<div class="paypal-button-container" >
    <div id="paypal-button-container" ref="paypalButtonContainer"></div>
</div>

</template>
  
<script>
import { loadScript } from '@paypal/paypal-js';

export default {
    name: 'PayPalDonateButton',
    async mounted() {
        const paypalSdk = await loadScript({
            'client-id': 'AUbbqD2mZHIWmaxsPzdIxaBVQw6QXNPjwkG-NRZJg3oqYabnURkqyRJSlE835JaW86aWPPEN_d3g-6Ko', 
            currency: 'USD', 
        });

        paypalSdk.Buttons({
            style: {
                shape: "rect",
                layout: "vertical",
                label: "paypal",
                size: "medium",
                borderRadius: 10,
                tagline: false,
            },
            createOrder: (data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: '2.00', // Replace with the desired amount
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
}
  </script>

<style scoped>
.paypal-button-container {
    justify-content: center;
    align-items: center; 
    width: 100%;  
    max-width: 400px;  
    margin: 20px auto;  
  }
</style>
