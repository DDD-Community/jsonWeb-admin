<template>
  <v-col cols="4" sm="6" md="4">
    <v-dialog
      ref="dialog"
      v-model="timeModal"
      :return-value.sync="time"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-text-field
          v-model="time"
          :label="`${label}`"
          readonly
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker
        v-show="timeModal"
        v-model="time"
        full-width
        :allowed-minutes="(m) => m % 5 === 0"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="timeModal = false">Cancel</v-btn>
        <v-btn text color="primary" @click="setTime">OK</v-btn>
      </v-time-picker>
    </v-dialog>
  </v-col>
</template>

<script>
import { CAFE } from "@/constants/cafe";

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      time: "",
      timeModal: false,
    };
  },
  methods: {
    setTime() {
      this.$refs.dialog.save(this.time);
      this.$emit("time-from-picker", this.time);
    },
  },
  mounted() {
    if (this.label === CAFE.TIME.OPEN_KOR) {
      this.time = CAFE.TIME.OPEN_TIME;
    } else if (this.label === CAFE.TIME.CLOSE_KOR) {
      this.time = CAFE.TIME.CLOSE_TIME;
    }
  },
};
</script>
