<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <router-view class="flex-1 overflow-y-auto"></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>
