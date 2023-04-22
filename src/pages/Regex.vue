<template>
  <div class="flex flex-col">
    <div class="flex flex-row h-1/2">
      <div
        class="flex flex-col font-bold text-5xl text-text justify-center mx-auto h-full"
      >
        <div>อะไรคือ</div>
        <div class="my-4">REGULAR EXPRESSION</div>
        <div>???</div>
      </div>
      <img :src="Regex" class="my-12 mx-auto" />
    </div>
    <div class="h-7 bg-secondary"></div>
    <div class="h-fit bg-primary">
      <div class="mt-12 ml-12">
        <div class="text-3xl text-text font-semibold">ลิงค์เอกสาร</div>
        <a
          class="text-white mt-2"
          href="https://drive.google.com/drive/u/1/folders/14LbZhK8atDmCzYnovl3Hjl3WMLkGLZoo?fbclid=IwAR3GatqX4FttExERZ60E2lH6Qzq7o0JnLw-CpOSDAWoL5lobY7OW0PBcPVg"
        >
          https://drive.google.com/drive/u/1/folders/14LbZhK8atDmCzYnovl3Hjl3WMLkGLZoo?fbclid=IwAR3GatqX4FttExERZ60E2lH6Qzq7o0JnLw-CpOSDAWoL5lobY7OW0PBcPVg
        </a>
      </div>

      <div class="mt-12 ml-12">
        <div class="text-3xl text-text font-semibold">
          ลิงค์ Source code (Frontend)
        </div>
        <a
          class="text-white mt-2"
          href="https://github.com/DiFve/TOC-Wikipedia-Temple-Webscraping-Frontend"
        >
          https://github.com/DiFve/TOC-Wikipedia-Temple-Webscraping-Frontend
        </a>
      </div>

      <div class="mt-12 ml-12">
        <div class="text-3xl text-text font-semibold">
          ลิงค์ Source code (Backend)
        </div>
        <a
          class="text-white mt-2"
          href="https://github.com/DiFve/TOC-Wikipedia-Temple-Webscraping-Backend"
        >
          https://github.com/DiFve/TOC-Wikipedia-Temple-Webscraping-Backend
        </a>
      </div>

      <div class="mt-12 ml-12">
        <div class="text-3xl text-text font-semibold">
          Regular expression คืออะไร
        </div>
        <div class="text-white mt-2">
          Regular expression หรือที่เรียกย่อ ๆ กันว่า “ regex ”
          ซึ่งก็คือการกำหนดรูปแบบหรือกลุ่มคำ เพื่อเอาไว้ใช้ค้นหา จับคู่
          และจัดการข้อความตามรูปแบบตามที่เราต้องการ
          โดยสามารถเป็นได้ทั้งอักขระธรรมดาและอักขระธรรมดา
        </div>
      </div>

      <div class="mt-12 ml-12">
        <div class="text-3xl text-text font-semibold">
          Regular expression ที่ใช้มีอะไรบ้าง
        </div>
        <div class="text-white mt-2">
          Regular expression ที่ใช้ในหน้าเว็บไซต์นี้มีทั้งหมด 6 regular
          expression และแบ่งออกเป็น 3 ประเภท ได้แก่ re.findall 1 regular
          expression, re.match 3 regular expressions และ re.sub อีก 2 regular
          expressions
        </div>
      </div>

      <div class="mt-12 ml-12">
        <div class="text-3xl text-text font-semibold">
          แต่ละ Regular expression ทำงานยังไงบ้าง
        </div>
        <div class="text-white mt-2">
          1.re.findall("&#62;(.*?)&#60;", html_content) - regular expression นี้
          ใช้เพื่อแยกข้อความทั้งหมดที่อยู่ระหว่างอักขระ &#62; และ &#60;
          จากเนื้อหา HTML
        </div>
        <img :src="example_1" class="h-14 mt-2" />
        <div class="text-white mt-6">
          2. if re.match(r"^(วัด|ที่พักสงฆ์).*$", s) - regular expression นี้
          ใช้เพื่อจับคู่สตริงที่ขึ้นต้นด้วย "วัด" or "ที่พักสงฆ์".
        </div>
        <img :src="example_2" class="h-14 mt-2" />

        <div class="text-white mt-6">
          3.
          re.match(r"^(?!.*(มหานิกาย|ธรรมยุติกนิกาย|จีนนิกาย|อนัมนิกาย)$).*$",s)
          - regular expression นี้ ใช้เพื่อจับคู่สตริงที่ไม่มีคำว่า "มหานิกาย",
          "ธรรมยุติกนิกาย", "จีนนิกาย", หรือ "อนัมนิกาย".
        </div>
        <img :src="example_3" class="h-14 mt-2" />

        <div class="text-white mt-6">
          4. re.match(r"^(?:(?!ในอำเภอ|ในจังหวัด|ในตำบล|ในกิ่งอำเภอ).)*$", s) -
          regular expression นี้ ใช้เพื่อจับคู่สตริงที่ไม่มีคำ "ในอำเภอ",
          "ในจังหวัด", "ในตำบล", หรือ "ในกิ่งอำเภอ".
        </div>
        <img :src="example_4" class="h-14 mt-2" />

        <div class="text-white mt-6">
          5 re.sub(r' (ตำบล|ที่ตั้ง).*$', '', s) - regular expression นี้
          ใช้เพื่อลบสตริงที่เป็นคำว่า ตำบล หรือ ที่ตั้ง
          และทุกอย่างที่ต่อจากสตริง
        </div>
        <img :src="example_5" class="h-14 mt-2" />

        <div class="text-white mt-6">
          6. re.sub(r'\(.*\)', '', s) - regular expression นี้
          ใช้เพื่อลบข้อความทั้งหมดที่อยู่ในวงเล็บออกจากสตริง
        </div>
        <img :src="example_6" class="h-14 mt-2" />
      </div>
      <div class="mt-12 ml-12 mb-6">
        <div class="text-3xl text-text font-semibold">Library ที่นำมาใช้</div>
        <div class="text-white mt-2">ใช้ทั้งหมด 3 library ได้แก่</div>
        <div class="text-white mt-2">
          requests (เป็นไลบรารี Python สำหรับการร้องขอ HTTP
          ในที่นี้ใช้สำหรับดึงเนื้อหา HTML ของหน้าเว็บ)
        </div>
        <div class="text-white mt-2">
          re (เป็นไลบรารี Python สำหรับการทำงานเกี่ยวกับ regular expression
          ในที่นี้ใช้เพื่อค้นหารูปแบบในเนื้อหา HTML และจัดการสตริงโดยใช้ regular
          expression)
        </div>
        <div class="text-white mt-2">
          FastAPI (เป็นไลบรารี Python สำหรับการทำงาน Backend โดยสามาทำให้ python
          ใช้ REST API ได้)
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Regex from "../assets/Regex.png";
import example_1 from "../assets/example_1.png";
import example_2 from "../assets/example_2.png";
import example_3 from "../assets/example_3.png";
import example_4 from "../assets/example_4.png";
import example_5 from "../assets/example_5.png";
import example_6 from "../assets/example_6.png";
import { hasScopeRef } from "@vue/compiler-core";

export default {
  data() {
    return {
      Regex: Regex,
      example_1: example_1,
      example_2: example_2,
      example_3: example_3,
      example_4: example_4,
      example_5: example_5,
      example_6: example_6,
    };
  },
  components: { hasScopeRef },
};
</script>
