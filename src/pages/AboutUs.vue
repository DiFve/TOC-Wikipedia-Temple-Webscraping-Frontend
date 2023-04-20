<template>
  <div class="flex flex-col">
    <div
      class="mx-auto text-4xl text-text font-semibold h-32 flex justify-center items-center"
    >
      เว็บไซต์นี้เป็นส่วนหนึ่งของวิชา Theory of Computation
    </div>

    <div class="grid grid-cols-5 mt-12">
      <div class="mx-auto flex flex-col w-fit text-text text-lg font-semibold">
        <img :src="Earth" class="rounded-lg h-56 w-fit mx-auto border" />
        <div class="mx-auto">63010042</div>
        <div class="mx-auto">กฤษติภูมิ เทียนงาม</div>
      </div>

      <div class="mx-auto flex flex-col w-fit text-text text-lg font-semibold">
        <img :src="Kan" class="rounded-lg h-56 w-fit mx-auto border" />
        <div class="mx-auto">63010069</div>
        <div class="mx-auto">กานต์ธิดา ประสมทรัพย์</div>
      </div>

      <div class="mx-auto flex flex-col w-fit text-text text-lg font-semibold">
        <img :src="Sans" class="rounded-lg h-56 w-fit mx-auto border" />
        <div class="mx-auto">63010631</div>
        <div class="mx-auto">พชรพล โชคคุณ</div>
      </div>

      <div class="mx-auto flex flex-col w-fit text-text text-lg font-semibold">
        <img :src="Fikaew" class="rounded-lg h-56 w-fit mx-auto border" />
        <div class="mx-auto">63010719</div>
        <div class="mx-auto">ไฟแก้ว ฉายาวัฒนะ</div>
      </div>

      <div class="mx-auto flex flex-col w-fit text-text text-lg font-semibold">
        <img :src="Dear" class="rounded-lg h-56 w-fit mx-auto border" />
        <div class="mx-auto">63010727</div>
        <div class="mx-auto">ภัฑราณิษฐ์ เทศเจริญ</div>
      </div>

      <div
        class="mx-auto flex flex-col w-fit text-text text-lg font-semibold mt-12"
      >
        <img :src="Son" class="rounded-lg h-56 w-fit mx-auto border" />
        <div class="mx-auto">63010769</div>
        <div class="mx-auto">ภูริต สรารัตนกุล</div>
      </div>

      <div
        class="mx-auto flex flex-col w-fit text-text text-lg font-semibold mt-12"
      >
        <img :src="Jark" class="rounded-lg h-56 w-fit mx-auto border" />
        <div class="mx-auto">63010789</div>
        <div class="mx-auto">มาเหนือเมฆ ประดิษฐพงษ์</div>
      </div>

      <div
        class="mx-auto flex flex-col w-fit text-text text-lg font-semibold mt-12"
      >
        <img :src="Mark" class="rounded-lg h-56 w-fit mx-auto border" />
        <div class="mx-auto">63010791</div>
        <div class="mx-auto">ยงยุทธ์ แก้วดวงน้อย</div>
      </div>

      <div
        class="mx-auto flex flex-col w-fit text-text text-lg font-semibold mt-12"
      >
        <img :src="View" class="rounded-lg h-56 w-fit mx-auto border" />
        <div class="mx-auto">63010871</div>
        <div class="mx-auto">วัชระ วิริยะกุล</div>
      </div>

      <div
        class="mx-auto flex flex-col w-fit text-text text-lg font-semibold mt-12"
      >
        <img :src="Focus" class="rounded-lg h-56 w-fit mx-auto border" />
        <div class="mx-auto">63011017</div>
        <div class="mx-auto">สุรธันย์ บุญผ่อง</div>
      </div>
    </div>
  </div>
</template>

<script>
import Dear from "../assets/Dear.jpg";
import Earth from "../assets/Earth.jpg";
import Fikaew from "../assets/Fikaew.jpg";
import Focus from "../assets/Focus.png";
import Jark from "../assets/Jark.png";
import Kan from "../assets/Kan.png";
import Mark from "../assets/Mark.jpg";
import Sans from "../assets/Sans.jpg";
import Son from "../assets/Son.jpg";
import View from "../assets/View.png";

export default {
  data() {
    return {
      Dear: Dear,
      Earth: Earth,
      Fikaew: Fikaew,
      Focus: Focus,
      Jark: Jark,
      Kan: Kan,
      Mark: Mark,
      Sans: Sans,
      Son: Son,
      View: View,
    };
  },
};
</script>
