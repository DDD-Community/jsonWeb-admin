<template>
  <div class="d-flex justify-center">
    <v-text-field label="날짜" v-model="priceInput.day"></v-text-field>
    <v-text-field
      class="ml-5"
      label="사람수"
      min="0"
      type="number"
      v-model="priceInput.headCount"
    ></v-text-field>
    <v-text-field
      @change="emitData"
      class="ml-3"
      label="가격(원)"
      min="0"
      step="100"
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
        headCount: 0,
        price: 0,
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
