<template>
  <div class="flex flex-col items-center">
    <div class="text-3xl font-semibold text-text mt-7">รายชื่อวัดทั้งหมด</div>
    <div class="flex flex-row w-screen text-xl mt-8 justify-between">
      <button @click="goTo('/lists/buengkan')" class="basis-1/5">
        <div
          class="bg-primary py-3 px-8 rounded-t-xl ml-14 text-white"
          v-if="isBuengkanSelected"
        >
          บึงกาฬ
        </div>
        <div v-else class="ml-14 text-text">บึงกาฬ</div>
      </button>
      <button @click="goTo('/lists/loei')" class="basis-1/5">
        <div
          class="bg-primary py-3 px-8 rounded-t-xl text-white"
          v-if="isLoeiSelected"
        >
          เลย
        </div>
        <div v-else class="text-text bg-white">เลย</div>
      </button>
      <button @click="goTo('/lists/srisaked')" class="basis-1/5">
        <div
          class="bg-primary py-3 px-8 rounded-t-xl text-white"
          v-if="isSrisakedSelected"
        >
          ศรีสะเกษ
        </div>
        <div v-else class="text-text">ศรีสะเกษ</div>
      </button>
      <button @click="goTo('/lists/sakolnakorn')" class="basis-1/5">
        <div
          class="bg-primary py-3 px-8 rounded-t-xl text-white"
          v-if="isSakolnakornSelected"
        >
          สกลนคร
        </div>
        <div v-else class="text-text">สกลนคร</div>
      </button>
      <button @click="goTo('/lists/songkla')" class="basis-1/5 mr-14">
        <div
          class="bg-primary py-3 px-8 rounded-t-xl text-white"
          v-if="isSongklaSelected"
        >
          สงขลา
        </div>
        <div v-else class="text-text">สงขลา</div>
      </button>
    </div>
    <div class="h-fit w-screen overflow-y-scroll">
      <div class="mx-14 bg-primary">
        <div class="pt-8"></div>
        <div class="grid grid-cols-4">
          <div
            class="mx-auto text-white pt-2 w-48"
            v-for="temple in templeList"
          >
            <div class="text-justify">{{ temple }}</div>
          </div>
        </div>
        <div class="pb-8"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import config from "../../config.json";

export default {
  async mounted() {
    // const res = await axios.get(`${config.apiURL}`);
    // this.allTempleList = res.data.result;
    // console.log(this.$allList);

    this.allTempleList = this.$store.state.allList;
  },

  computed: {
    currentRoute() {
      return this.$route.path;
    },
    isBuengkanSelected() {
      if (this.currentRoute === "/lists/buengkan") {
        this.templeList = this.allTempleList.บึงกาฬ;
      }
      return this.currentRoute === "/lists/buengkan";
    },
    isLoeiSelected() {
      if (this.currentRoute === "/lists/loei") {
        this.templeList = this.allTempleList.เลย;
      }

      return this.currentRoute === "/lists/loei";
    },
    isSrisakedSelected() {
      if (this.currentRoute === "/lists/srisaked") {
        this.templeList = this.allTempleList.ศรีสะเกษ;
      }
      return this.currentRoute === "/lists/srisaked";
    },
    isSakolnakornSelected() {
      if (this.currentRoute === "/lists/sakolnakorn") {
        this.templeList = this.allTempleList.สกลนคร;
      }
      return this.currentRoute === "/lists/sakolnakorn";
    },
    isSongklaSelected() {
      if (this.currentRoute === "/lists/songkla") {
        this.templeList = this.allTempleList.สงขลา;
      }
      return this.currentRoute === "/lists/songkla";
    },
  },
  methods: {
    goTo(route) {
      this.$router.push(route);
    },
  },

  data() {
    return {
      templeList: [],
      allTempleList: {},
    };
  },
};
</script>
