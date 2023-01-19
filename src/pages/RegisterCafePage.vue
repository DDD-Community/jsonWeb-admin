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
            <OpenHourInput @time="updateDate" :date="'월요일'"></OpenHourInput>
          </v-col>
          <v-col>
            <OpenHourInput @time="updateDate" :date="'화요일'"></OpenHourInput>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <OpenHourInput @time="updateDate" :date="'수요일'"></OpenHourInput>
          </v-col>
          <v-col>
            <OpenHourInput @time="updateDate" :date="'목요일'"></OpenHourInput>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <OpenHourInput @time="updateDate" :date="'금요일'"></OpenHourInput>
          </v-col>
          <v-col>
            <OpenHourInput @time="updateDate" :date="'토요일'"></OpenHourInput>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <OpenHourInput @time="updateDate" :date="'일요일'"></OpenHourInput>
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
      date: [
        {
          day: "월요일",
          time: "",
        },
        {
          day: "화요일",
          time: "",
        },
        {
          day: "수요일",
          time: "",
        },
        {
          day: "목요일",
          time: "",
        },
        {
          day: "금요일",
          time: "",
        },
        {
          day: "토요일",
          time: "",
        },
        {
          day: "일요일",
          time: "",
        },
      ],
    };
  },
  methods: {
    registerCafe() {
      const form = {
        cafeName: this.cafeName,
        homepage: this.homepage,
        address: this.address,
        tel: this.tel,
        date: this.date,
      };
      console.log(form);
    },
    updateDate([day, time]) {
      this.date[day] = time;
    },
  },
  computed: {},
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
