<template>
  <v-col>
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
        :allowed-minutes="allowMinutes"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="timeModal = false">Cancel</v-btn>
        <v-btn text color="primary" @click="setTime">OK</v-btn>
      </v-time-picker>
    </v-dialog>
  </v-col>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    defaultTime: {
      type: String,
    },
    allowMinutes: {
      type: Function,
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
    this.time = this.defaultTime;
  },
};
</script>
