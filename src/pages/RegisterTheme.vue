<template>
  <v-card>
    <v-form>
      <div class="d-flex justify-center text-h4">테마 등록</div>
      <v-container>
        <v-row class="ml-15 mr-15">
          <v-col>
            <v-select
              label="카페"
              v-model="registerThemeForm.cafeId"
              :items="cafes"
              item-text="name"
              item-value="cafeId"
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              multiple
              label="장르"
              v-model="registerThemeForm.genreList"
              :items="genres"
              item-text="genre"
              item-value="genre"
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field
              v-model="registerThemeForm.name"
              label="테마 이름"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="ml-15 mr-15">
          <v-col>
            <v-text-field
              v-model="registerThemeForm.time"
              label="소요시간"
              type="number"
              min="0"
              required
              placeholder="숫자만 입력해 주세요."
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="registerThemeForm.difficulty"
              label="난이도"
              type="number"
              step="0.5"
              min="0"
              max="5"
              required
              placeholder="소수점 .5 단위로 입력해주세요."
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="registerThemeForm.minPlayerCount"
              label="최소 인원수"
              type="number"
              min="0"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="registerThemeForm.maxPlayerCount"
              label="최대 인원수"
              type="number"
              min="0"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row class="ml-15 mr-15">
          <v-col>
            <ImageInput
              label="테마 대표 사진"
              @multipart-image="updateImage"
            ></ImageInput>
          </v-col>
        </v-row>
        <v-row class="ml-15 mr-15">
          <v-textarea
            v-model="registerThemeForm.description"
            label="테마 설명"
            counter="number"
            hint="최대 300글자"
          ></v-textarea>
        </v-row>
        <v-row>
          <v-col>
            <v-btn block color="primary" @click="registerTheme">등록</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import ImageInput from "@/components/ImageInput.vue";
import { IMAGE_TYPE } from "@/constants/cafe";
import { getCafeNames, getGenres, postTheme, uploadImage } from "@/api/api";
import { THEME } from "@/constants/theme";

export default {
  components: {
    ImageInput,
  },
  data() {
    return {
      multipartImage: null,
      registerThemeForm: {
        cafeId: 0,
        name: "",
        description: "",
        imageUrl: "",
        time: 60,
        minPlayerCount: 2,
        maxPlayerCount: 6,
        difficulty: 3.0,
        ageLimit: "",
        genreList: [],
      },
      cafes: [],
      genres: [],
    };
  },
  methods: {
    alert(message, color = "red") {
      this.$store.commit("snackbar/showMessage", {
        message: message,
        color: color,
      });
    },
    async registerTheme() {
      console.log(this.registerThemeForm);
      if (!this.multipartImage) {
        this.alert(IMAGE_TYPE.ERROR_MESSAGE);
        return;
      }
      if (this.registerThemeForm.cafeId === 0) {
        this.alert(THEME.MESSAGE.CAFE_NOT_SELECTED);
        return;
      }
      this.registerThemeForm.imageUrl = await uploadImage(
        this.multipartImage,
        IMAGE_TYPE.THEME
      );
      const success = await postTheme(this.registerThemeForm);
      console.log(success);
      if (success) {
        this.alert(THEME.MESSAGE.REGISTER_SUCCESS, "green");
      } else {
        this.alert(THEME.MESSAGE.REGISTER_FAIL);
      }
    },
    updateImage(multipartImage) {
      this.multipartImage = multipartImage;
    },
  },
  created() {
    getCafeNames().then((res) => {
      this.cafes = res.data.data;
    });
    getGenres().then((res) => {
      this.genres = res.data.data;
    });
    console.log(this.cafes);
    console.log(this.genres);
  },
};
</script>

<style scoped></style>
