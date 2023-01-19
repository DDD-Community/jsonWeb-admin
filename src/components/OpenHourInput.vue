<template>
  <div class="d-flex align-center">
    <div class="d-flex align-center">
      <v-text-field id="date" disabled :label="`${date}`"></v-text-field>
    </div>
    <div class="d-flex ml-5 mr-5">
      <v-checkbox v-model="directInput" :label="'직접입력'"></v-checkbox>
    </div>
    <v-row v-if="!directInput">
      <TimePicker
        :label="'오픈시각'"
        @timeFromChild="updateOpenTime"
      ></TimePicker>
      <TimePicker
        :label="'종료시각'"
        @timeFromChild="updateCloseTime"
      ></TimePicker>
    </v-row>
    <v-row v-if="directInput">
      <v-text-field v-model="textTime" @change="emitTime"
        >직접입력</v-text-field
      >
    </v-row>
  </div>
</template>

<script>
import TimePicker from "@/components/TimePicker.vue";

export default {
  name: "OpenHourInput",
  props: ["date"],
  components: {
    TimePicker,
  },
  data: () => ({
    directInput: false,
    openTime: "",
    closeTime: "",
    textTime: "",
  }),
  methods: {
    updateOpenTime(openTime) {
      this.openTime = openTime;
      this.emitTime();
    },
    updateCloseTime(closeTime) {
      this.closeTime = closeTime;
      this.emitTime();
    },
    emitTime() {
      let time = "";
      if (this.directInput) {
        time = this.textTime;
      } else {
        time = `${this.openTime} ~ ${this.closeTime}`;
      }
      this.$emit("time", [this.$props.date, time]);
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped>
/deep/ #date {
  width: 65px;
}
</style>
