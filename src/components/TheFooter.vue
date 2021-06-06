<template>
  <div class="footer-component text-white bg-primary-bgDark md:px-40 dark:text-gray-300">
    <div class="footer p-5">
      <div class="footer-content grid-cols-1">
        <p class="privacy">Privacy Policy</p>
        <p class="about">About</p>
        <p class="contact">Contact</p>
      </div>
      <div class="newsletter-content">
        <p class="subscribe">Subscribe to my newsletter</p>
        <Form class="my-2 newsletter-form max-w-md" @submit="handleNewsLetter">
          <input
            name="email"
            v-model="newsletterMail"
            class="email text-primary-light"
            type="email"
            validation="required"
          />
          <button
            class="bg-primary-dark text-white text-center rounded-sm border-2 border-primary p-1 my-2 w-40 hover:bg-primary"
            type="submit"
            label="Subscribe"
          >
            submit
          </button>
        </Form>
      </div>
    </div>
    <p class="copyright text-center py-1">ZEUS &copy; 2021</p>
  </div>
</template>

<script>
export default {
  name: "the-footer",
  data() {
    return {
      newsletterMail: "",
    };
  },
  methods: {
    handleNewsLetter(e) {
      e.preventDefault();
      this.newsletterMail = "";
    },
  },
};
</script>

<style>
</style>