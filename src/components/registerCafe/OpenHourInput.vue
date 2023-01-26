<template>
  <div class="d-flex justify-center">
    <v-col>
      <v-chip outlined> {{ date }}</v-chip>
    </v-col>
    <v-row class="ml-5 mr-5">
      <v-checkbox v-model="directInput" :label="'직접입력'"></v-checkbox>
    </v-row>
    <v-row v-if="!directInput">
      <v-col>
        <TimePicker
          :allow-minutes="(m) => m % 5 === 0"
          default-time="10:00"
          :label="cafeTime.OPEN_KOR"
          @time-from-picker="updateOpenTime"
        ></TimePicker
      ></v-col>
      <v-col>
        <TimePicker
          :allow-minutes="(m) => m % 5 === 0"
          default-time="22:00"
          :label="cafeTime.CLOSE_KOR"
          @time-from-picker="updateCloseTime"
        ></TimePicker
      ></v-col>
    </v-row>
    <v-row v-if="directInput">
      <v-col>
        <v-text-field
          v-model="textTime"
          @change="emitTime"
          placeholder="ex. 휴무일"
          >직접입력</v-text-field
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TimePicker from "@/components/TimePicker.vue";
import { CAFE } from "@/constants/cafe";

export default {
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  components: {
    TimePicker,
  },
  data() {
    return {
      cafeTime: CAFE.TIME,
      directInput: false,
      openTime: CAFE.TIME.OPEN_TIME,
      closeTime: CAFE.TIME.CLOSE_TIME,
      textTime: "",
    };
  },
  methods: {
    updateOpenTime(openTime) {
      this.openTime = openTime;
      this.emitTime();
    },
    updateCloseTime(closeTime) {
      this.closeTime = closeTime;
      this.emitTime();
    },
    getTimeText() {
      return this.directInput
        ? this.textTime
        : `${this.openTime} ~ ${this.closeTime}`;
    },
    emitTime() {
      this.$emit("time", [this.$props.date, this.getTimeText()]);
    },
  },
};
</script>

<style scoped></style>
