<template>
  <v-card>
    <v-form>
      <div class="d-flex justify-center text-h4">카페 등록</div>
      <v-container>
        <v-row class="ml-15 mr-15">
          <v-col cols="4">
            <v-text-field
              v-model="registerCafeForm.name"
              label="카페 이름"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="8">
            <v-text-field
              v-model="registerCafeForm.homepage"
              label="홈페이지(URL)"
              required
              placeholder="https://exitnow.link"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="ml-15 mr-15">
          <v-col cols="4">
            <v-text-field
              v-model="registerCafeForm.tel"
              label="전화번호"
              required
              placeholder="- 포함해서 입력해 주세요"
            ></v-text-field>
          </v-col>
          <v-col cols="8">
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
    <!--    <AlertSnackbar message="" show="priceInput.isAlert"></AlertSnackbar>-->
    <v-snackbar v-model="priceInput.isAlert" top right color="red">
      {{ priceInput.alertMessage }}
    </v-snackbar>
  </v-card>
</template>

<script>
import OpenHourInput from "@/components/registerCafe/OpenHourInput.vue";
import PriceInput from "@/components/registerCafe/PriceInput.vue";
import ImageInput from "@/components/registerCafe/ImageInput.vue";
import { getDefaultOpenHourList, DAYS } from "@/constants/cafe";
import { postCafe, uploadImage } from "@/api/cafe";
// import AlertSnackbar from "@/components/AlertSnackbar.vue";

export default {
  components: {
    // AlertSnackbar,
    ImageInput,
    OpenHourInput,
    PriceInput,
  },
  data() {
    return {
      priceInput: {
        count: 3,
        isAlert: false,
        alertMessage: "",
      },
      multipartImage: null,
      registerCafeForm: {
        imageUrl: "",
        name: "",
        homepage: "",
        address: "",
        tel: "",
        openHourList: getDefaultOpenHourList(),
        priceList: [],
      },
      days: DAYS,
    };
  },
  methods: {
    registerCafe() {
      console.log(this.registerCafeForm);
      if (this.multipartImage != null) {
        // 이미지 먼저 업로드
        uploadImage(this.multipartImage)
          .then((res) => {
            this.registerCafeForm.imageUrl = res.data.data.imageUrl;

            // 이미지 업로드 성공 시 카페 등록 요청
            postCafe(this.registerCafeForm)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    updateDate([day, time]) {
      this.registerCafeForm.openHourList.find((it) => it.day === day).time =
        time;
    },
    addPriceInputNum() {
      this.priceInput.count++;
      if (this.priceInput.count > 5) {
        this.priceInput.isAlert = true;
        this.priceInput.count = 5;
        this.priceInput.alertMessage = "최대 5개까지 입력 가능합니다.";
        setTimeout(() => {
          this.priceInput.isAlert = false;
        }, 2000);
      }
    },
    subPriceInputNum() {
      this.priceInput.count--;
      if (this.priceInput.count < 1) {
        this.priceInput.isAlert = true;
        this.priceInput.count = 1;
        this.priceInput.alertMessage = "최소 1개는 입력해야 합니다.";
        setTimeout(() => {
          this.priceInput.isAlert = false;
        }, 2000);
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

<style scoped>
/deep/ v-btn {
  margin-left: 30px;
}
</style>
