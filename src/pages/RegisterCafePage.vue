<template>
  <v-card>
    <v-form>
      <div class="d-flex justify-center text-h4">카페 등록</div>
      <v-container>
        <v-row class="ml-15 mr-15" v-for="j in 2" :key="j.id">
          <v-col v-for="i in 2" :key="i.id">
            <v-text-field
              v-model="registerCafeForm.name"
              label="카페 이름"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="registerCafeForm.homepage"
              label="홈페이지(URL)"
              required
              placeholder="https://exitnow.link"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="ml-15 mr-15">
          <v-col>
            <v-text-field
              v-model="registerCafeForm.tel"
              label="전화번호"
              required
              placeholder="- 포함해서 입력해 주세요"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="registerCafeForm.address"
              label="주소"
              required
              placeholder="도로명 주소를 입력해 주세요"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="ml-15 mr-15">
          <v-col>
            <ImageInput @multipart-image="updateImage"></ImageInput>
          </v-col>
        </v-row>
        <v-row class="ml-15 mr-15">
          <v-col v-for="i in days.length" :key="i.id" cols="6">
            <OpenHourInput
              @time="updateDate"
              :date="days[i - 1]"
            ></OpenHourInput>
          </v-col>
        </v-row>
        <v-row
          class="ml-15 mr-15"
          v-for="item in priceInput.count"
          :key="item.id"
        >
          <v-col
            ><PriceInput @price-input="updatePriceInput"></PriceInput
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
import { CAFE, DEFAULT_OPEN_HOUR_LIST } from "@/constants/cafe";
import { postCafe, uploadImage } from "@/api/cafe";

export default {
  components: {
    ImageInput,
    OpenHourInput,
    PriceInput,
  },
  data() {
    return {
      priceInput: {
        count: CAFE.PRICE_INPUT.DEFAULT,
      },
      multipartImage: null,
      registerCafeForm: {
        imageUrl: "",
        name: "",
        homepage: "",
        address: "",
        tel: "",
        openHourList: DEFAULT_OPEN_HOUR_LIST,
        priceList: [],
      },
      days: CAFE.DAYS,
    };
  },
  methods: {
    alert(message, color = "red") {
      this.$store.commit("snackbar/showMessage", {
        message: message,
        color: color,
      });
    },
    async registerCafe() {
      if (!this.multipartImage) {
        this.alert(CAFE.MESSAGE.IMAGE_IS_REQUIRED);
        return;
      }
      this.registerCafeForm.imageUrl = await uploadImage(this.multipartImage);
      await postCafe(this.registerCafeForm);
      postCafe(this.registerCafeForm).then(() => {
        this.alert(CAFE.MESSAGE.REGISTER_SUCCESS, "green");
      });
    },
    updateDate([day, time]) {
      this.registerCafeForm.openHourList.find((it) => it.day === day).time =
        time;
    },
    addPriceInputNum() {
      this.priceInput.count++;
      if (this.priceInput.count > CAFE.PRICE_INPUT.MAX) {
        this.priceInput.count = CAFE.PRICE_INPUT.MAX;
        this.alert(CAFE.PRICE_INPUT.MAX_LIMIT_MSG);
      }
    },
    subPriceInputNum() {
      this.priceInput.count--;
      if (this.priceInput.count < CAFE.PRICE_INPUT.MIN) {
        this.priceInput.count = CAFE.PRICE_INPUT.MIN;
        this.alert(CAFE.PRICE_INPUT.MIN_LIMIT_MSG);
      }
    },
    updatePriceInput(priceInput) {
      this.registerCafeForm.priceList.push(priceInput);
    },
    updateImage(multipartImage) {
      this.multipartImage = multipartImage;
    },
  },
};
</script>

<style scoped></style>
