<template>
  <v-snackbar top right v-model="show" :color="color">
    {{ message }}
  </v-snackbar>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("snackbar", ["show", "message", "color"]),
  },
};
</script>

<style scoped></style>
