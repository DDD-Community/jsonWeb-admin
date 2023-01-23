<template>
  <v-card>
    <v-form>
      <div class="d-flex justify-center text-h4">카페 등록</div>
      <v-container>
        <v-row class="ml-15 mr-15">
          <v-col cols="4">
            <v-text-field
              v-model="name"
              label="카페 이름"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="homepage"
              label="홈페이지(URL)"
              required
              placeholder="https://exitnow.link"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="ml-15 mr-15">
          <v-col cols="4">
            <v-text-field
              v-model="tel"
              label="전화번호"
              required
              placeholder="- 없이 입력해 주세요"
            ></v-text-field>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="address"
              label="주소"
              required
              placeholder="도로명 주소를 입력해 주세요"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="ml-15 mr-15">
          <v-col>
            <ImageInput @image="updateImage"></ImageInput>
          </v-col>
        </v-row>
        <v-row class="ml-15 mr-15">
          <v-col v-for="i in days.length" :key="i" cols="6">
            <OpenHourInput
              @time="updateDate"
              :date="days[i - 1]"
            ></OpenHourInput>
          </v-col>
        </v-row>
        <v-row class="ml-15 mr-15" v-for="i in priceInputNum" :key="i">
          <v-col
            ><PriceInput @priceInput="updatePriceInput"></PriceInput
          ></v-col>
        </v-row>
        <v-row>
          <v-col class="d-flex justify-center"
            ><v-btn color="accent" @click="addPriceInputNum">추가</v-btn></v-col
          >
          <v-col class="d-flex justify-center"
            ><v-btn color="accent" @click="subPriceInputNum">삭제</v-btn></v-col
          >
        </v-row>
        <v-row>
          <v-col>
            <v-alert
              dismissible
              :value="priceInputAlert"
              type="error"
              transition="fade-transition"
            >
              {{ priceInputAlertMessage }}</v-alert
            ></v-col
          >
        </v-row>

        <v-row>
          <v-col>
            <v-btn block color="primary" @click="registerCafe">등록</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import OpenHourInput from "@/components/registerCafe/OpenHourInput.vue";
import PriceInput from "@/components/registerCafe/PriceInput.vue";
import ImageInput from "@/components/registerCafe/ImageInput.vue";

export default {
  name: "registerCafe",
  components: {
    ImageInput,
    OpenHourInput,
    PriceInput,
  },
  data() {
    return {
      priceInputNum: 3,
      priceInputAlert: false,
      priceInputAlertMessage: "",
      image: null,
      days: [
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
        "일요일",
      ],
      name: "",
      homepage: "",
      address: "",
      tel: "",
      openHourList: [],
      priceList: [],
    };
  },
  methods: {
    registerCafe() {
      const form = {
        cafeName: this.name,
        homepage: this.homepage,
        image: this.image,
        address: this.address,
        tel: this.tel,
        openHourList: this.openHourList,
        priceList: this.priceList,
      };
      console.log(form);
      if (this.image != null) {
        let formData = new FormData();
        formData.append("image", this.image);
        this.$axios.post("/images/cafes", formData).then((res) => {
          console.log(res);
        });
      }
    },
    updateDate([day, time]) {
      this.openHourList.find((it) => it.day === day).time = time;
    },
    addPriceInputNum() {
      this.priceInputNum++;
      if (this.priceInputNum > 5) {
        this.priceInputAlert = true;
        this.priceInputNum = 5;
        this.priceInputAlertMessage = "최대 5개까지 입력 가능합니다.";
        setTimeout(() => {
          this.priceInputAlert = false;
        }, 2000);
      }
    },
    subPriceInputNum() {
      this.priceInputNum--;
      if (this.priceInputNum < 1) {
        this.priceInputAlert = true;
        this.priceInputNum = 1;
        this.priceInputAlertMessage = "최소 1개는 입력해야 합니다.";
        setTimeout(() => {
          this.priceInputAlert = false;
        }, 2000);
      }
    },
    updatePriceInput(priceInput) {
      const { day, headCount, price } = priceInput;
      this.priceList.push({
        day: day,
        headCount: headCount,
        price: price,
      });
      console.log(this.priceList);
    },
    updateImage(image) {
      this.image = image;
    },
  },
  computed: {},
  mounted() {
    this.openHourList = this.days.map((day) => {
      return {
        day: day,
        time: "10:00 ~ 22:00",
      };
    });
  },
};
</script>

<style scoped>
/deep/ v-btn {
  margin-left: 30px;
}

v-text-field {
  width: 100px;
}
</style>
