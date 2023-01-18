<template>
  <div class="d-flex align-center">
    <h2>카페 등록</h2>
    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              v-model="cafeName"
              label="카페 이름"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="homepage"
              label="홈페이지(URL)"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              v-model="address"
              label="주소"
              required
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              v-model="tel"
              label="전화번호"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <OpenHourInput :date="'월요일'"></OpenHourInput>
          </v-col>
          <v-col>
            <OpenHourInput :date="'화요일'"></OpenHourInput>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <OpenHourInput :date="'수요일'"></OpenHourInput>
          </v-col>
          <v-col>
            <OpenHourInput :date="'목요일'"></OpenHourInput>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <OpenHourInput :date="'금요일'"></OpenHourInput>
          </v-col>
          <v-col>
            <OpenHourInput :date="'토요일'"></OpenHourInput>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <OpenHourInput :date="'일요일'"></OpenHourInput>
          </v-col>
        </v-row>
      </v-container>
      <v-btn block color="primary" @click="registerCafe">등록</v-btn>
    </v-form>
  </div>
</template>

<script>
import OpenHourInput from "@/components/OpenHourInput.vue";

export default {
  name: "registerCafe",
  components: {
    OpenHourInput,
  },
  data() {
    return {
      checkbox: false,
      cafeName: "",
      homepage: "",
      address: "",
      tel: "",
    };
  },
  methods: {
    registerCafe() {
      const form = {
        cafeName: this.cafeName,
        homepage: this.homepage,
        address: this.address,
        tel: this.tel,
      };
      console.log(form);
    },
  },
  computed: {},
};
</script>

<style scoped>
/deep/ .v-btn {
  margin-left: 30px;
}

v-text-field {
  width: 100px;
}
</style>
