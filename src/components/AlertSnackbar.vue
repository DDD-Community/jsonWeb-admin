<template>
  <v-snackbar v-model="show" top right color="red">
    {{ message }}
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: "",
    };
  },
  methods: {},
};
</script>

<style scoped></style>
