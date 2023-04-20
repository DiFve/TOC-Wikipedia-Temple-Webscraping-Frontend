<template>
  <div
    class="w-full h-16 bg-primary flex flex-row items-center justify-center text-white font-bold"
  >
    <div class="flex flex-row mx-48 w-full items-center justify-between">
      <button @click="goTo('/')">
        <div v-if="!isHomeSelected">HOME</div>

        <div v-else class="underline">HOME</div>
      </button>

      <button @click="goTo('/lists/buengkan')">
        <div v-if="!isListSelected">LISTS</div>
        <div v-else class="underline">LISTS</div>
      </button>

      <button @click="goTo('/regex')">
        <div v-if="!isRegexSelected">REGEX</div>
        <div v-else class="underline">REGEX</div>
      </button>

      <button @click="goTo('/aboutus')">
        <div v-if="!isAboutUsSelected">ABOUT US</div>
        <div v-else class="underline">ABOUT US</div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.path;
    },
    isHomeSelected() {
      return this.currentRoute === "/";
    },
    isListSelected() {
      return (
        this.currentRoute === "/lists/buengkan" ||
        this.currentRoute === "/lists/loei" ||
        this.currentRoute === "/lists/srisaked" ||
        this.currentRoute === "/lists/sakolnakorn" ||
        this.currentRoute === "/lists/songkla"
      );
    },
    isRegexSelected() {
      return this.currentRoute === "/regex";
    },
    isAboutUsSelected() {
      return this.currentRoute === "/aboutus";
    },
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },
};
</script>
