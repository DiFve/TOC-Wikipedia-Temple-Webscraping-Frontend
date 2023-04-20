<template>
  <div class="flex flex-col">
    <div class="h-1/2">
      <div class="flex flex-row h-full bg-primary">
        <img :src="Wat" class="h-full" />
        <div class="flex flex-col justify-center items-center w-full">
          <div class="text-white font-bold text-5xl">THIS WEBSITE IS</div>
          <div class="text-white font-bold text-5xl">SCRAPING DATA FROM</div>
          <div class="text-white font-bold text-5xl">WIKIPEDIA</div>

          <div class="flex flex-row">
            <button
              class="mt-16 bg-secondary p-5 text-text rounded-xl"
              @click="this.$router.push('/lists/buengkan')"
            >
              <div class="font-semibold text-3xl">รายชื่อวัดทั้งหมด</div>
            </button>

            <button
              @click="downloadCsv"
              class="font-semibold text-3xl mt-16 bg-[#C7E9B0] p-5 text-text rounded-xl ml-5"
            >
              Download CSV
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="h-1/2 flex flex-row">
      <button
        class="basis-1/5 flex flex-col items-center justify-center"
        @click="this.$router.push('/lists/buengkan')"
      >
        <img :src="Buengkan" class="rounded-full w-48 h-48" />
        <div class="mt-4 text-text text-xl">บึงกาฬ</div>
      </button>

      <button
        class="basis-1/5 flex flex-col items-center justify-center"
        @click="this.$router.push('/lists/loei')"
      >
        <img :src="Loei" class="rounded-full w-48 h-48" />
        <div class="mt-4 text-text text-xl">เลย</div>
      </button>

      <button
        class="basis-1/5 flex flex-col items-center justify-center"
        @click="this.$router.push('/lists/srisaked')"
      >
        <img :src="Srisaket" class="rounded-full w-48 h-48" />
        <div class="mt-4 text-text text-xl">ศรีสะเกษ</div>
      </button>

      <button
        class="basis-1/5 flex flex-col items-center justify-center"
        @click="this.$router.push('/lists/sakolnakorn')"
      >
        <img :src="Sakolnakorn" class="rounded-full w-48 h-48" />
        <div class="mt-4 text-text text-xl">สกลนคร</div>
      </button>

      <button
        class="basis-1/5 flex flex-col items-center justify-center"
        @click="this.$router.push('/lists/songkla')"
      >
        <img :src="Songkla" class="rounded-full h-48 w-48" />
        <div class="mt-4 text-text text-xl">สงขลา</div>
      </button>
    </div>
  </div>
</template>

<script>
// import stringify from "csv-stringify";

import Wat from "../assets/Wat.jpeg";
import Buengkan from "../assets/Buengkan.jpeg";
import Loei from "../assets/Loei.jpeg";
import Sakolnakorn from "../assets/Sakolnakorn.jpeg";
import Songkla from "../assets/Songkla.jpeg";
import Srisaket from "../assets/Srisaket.jpeg";

import axios from "axios";
import config from "../../config.json";

export default {
  data() {
    return {
      Wat: Wat,
      Buengkan: Buengkan,
      Loei: Loei,
      Sakolnakorn: Sakolnakorn,
      Songkla: Songkla,
      Srisaket: Srisaket,
      allList: {},
    };
  },

  async mounted() {
    const res = await axios.get(`${config.apiURL}`);

    this.allList = res.data.result;

    console.log(this.allList);
  },

  methods: {
    jsonToCsv(json) {
      const headers = Object.keys(json);
      const rows = json[headers[0]].map((_, i) =>
        headers.map((header) => json[header][i])
      );
      const csvContent =
        "data:text/csv;charset=utf-8,\uFEFF" +
        [headers, ...rows]
          .map((row) => row.map((cell) => `"${cell}"`).join(","))
          .join("\r\n");
      return encodeURI(csvContent);
    },
    downloadCsv() {
      const csvContent = this.jsonToCsv(this.allList);
      const link = document.createElement("a");
      link.setAttribute("href", csvContent);
      link.setAttribute("download", "example.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>
