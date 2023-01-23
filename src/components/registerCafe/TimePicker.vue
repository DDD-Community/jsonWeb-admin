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
        v-if="timeModal"
        v-model="time"
        full-width
        :allowed-minutes="allowedMinutes"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="timeModal = false">Cancel</v-btn>
        <v-btn text color="primary" @click="set">OK</v-btn>
      </v-time-picker>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  name: "TimePicker",
  props: ["label"],
  data: () => ({
    time: "",
    timeModal: false,
  }),
  methods: {
    set() {
      this.$refs.dialog.save(this.time);
      this.$emit("timeFromChild", this.time);
    },
    allowedMinutes: (m) => m % 5 === 0,
  },
  mounted() {
    if (this.label === "오픈시각") {
      this.time = "10:00";
    } else if (this.label === "종료시각") {
      this.time = "22:00";
    }
  },
};
</script>
