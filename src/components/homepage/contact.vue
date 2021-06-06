<template>
  <div class="phi-contact" id="contact-component">
    <philosophy />
    <div
      class="contact px-4 py-5 md:grid grid-cols-2 md:gap-8 bg-primary-bgLight dark:bg-gray-500 md:px-40"
    >
    
      <div class="left-info">
        <p
          class="contact-title font-bold text-xl uppercase text-primary-dark py-1 dark:text-gray-200"
        >
          I've been<br />waiting for you
        </p>

        <div class="contact-content">
          <div class="contact-intro">
            <p class="number">+123456789</p>
            <div class="email">Zeusthe original@olympus.com</div>
            <div class="address">Asgard 123 patheon street</div>
            <div class="socal-links"></div>
          </div>
        </div>
      </div>

      <form @submit="handleContactForm" class="py-2 mt-4 max-w-md ">
        <div
          class="form-control py-1 font-semibold text-md text-primary-dark focus:border-primary dark:text-gray-300"
        >
          <label for="name" class="name">Name</label>
          <input name="name" id="name" v-model="name" validation="required" />
        </div>

        <div
          class="form-control py-1 font-semibold text-md text-primary-dark focus:border-primary dark:text-gray-300"
        >
          <label for="email" class="">Email</label>
          <input
            name="email"
            class="py-1 font-semibold text-md text-primary-dark"
            type="email"
            id="email"
            v-model="email"
            validation="required"
          />
        </div>

        <div
          class="form-control py-1 font-semibold text-md text-primary-dark focus:border-primary dark:text-gray-300"
        >
          <label for="message block" class="">Talk to Us</label>
          <textarea
            class="py-1 font-semibold block text-md text-primary-dark"
            name="Subject"
            v-model="message"
            id="message"
          />
        </div>

        <button
          class="bg-primary-link hover:bg-primary w-full text-white uppercase text-center rounded-2xl p-2 mt-6 dark:text-gray-300"
          type="submit"
          id="send-Message"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import philosophy from "./philosophy.vue";
export default {
  components: { philosophy },
  name: "contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    handleContactForm(e) {
      e.preventDefault();

      const formDetails = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>

<style>
</style>