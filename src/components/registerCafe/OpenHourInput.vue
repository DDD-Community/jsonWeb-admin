<template>
  <div class="d-flex justify-center">
    <div>
      <v-text-field id="date" disabled :label="`${date}`"></v-text-field>
    </div>
    <div class="d-flex ml-5 mr-5">
      <v-checkbox v-model="directInput" :label="'직접입력'"></v-checkbox>
    </div>
    <v-row v-if="!directInput">
      <TimePicker
        :label="CAFE.TIME.OPEN_KOR"
        @time-from-picker="updateOpenTime"
      ></TimePicker>
      <TimePicker
        :label="CAFE.TIME.CLOSE_KOR"
        @time-from-picker="updateCloseTime"
      ></TimePicker>
    </v-row>
    <v-row v-if="directInput" class="mr-15">
      <v-text-field
        v-model="textTime"
        @change="emitTime"
        placeholder="ex. 휴무일"
        >직접입력</v-text-field
      >
    </v-row>
  </div>
</template>

<script>
import TimePicker from "@/components/registerCafe/TimePicker.vue";
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
  computed: {
    CAFE() {
      return CAFE;
    },
  },
};
</script>

<style scoped>
/deep/ #date {
  width: 65px;
}
</style>
