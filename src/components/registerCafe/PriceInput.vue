<template>
  <div class="d-flex justify-center">
    <v-text-field label="날짜" v-model="priceInput.day"></v-text-field>
    <v-text-field
      class="ml-5"
      label="사람수"
      type="number"
      v-model="priceInput.headCount"
    ></v-text-field>
    <v-text-field
      @change="emitData"
      class="ml-3"
      label="가격"
      type="number"
      v-model="priceInput.price"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      priceInput: {
        day: "",
        headCount: "",
        price: "",
      },
    };
  },
  methods: {
    emitData() {
      this.$emit("price-input", this.priceInput);
    },
  },
};
</script>

<style scoped></style>
