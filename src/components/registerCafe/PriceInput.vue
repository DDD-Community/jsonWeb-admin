<template>
  <div class="d-flex justify-center">
    <v-text-field label="날짜" v-model="day"></v-text-field>
    <v-text-field
      class="ml-5"
      label="사람수"
      type="number"
      v-model="headCount"
    ></v-text-field>
    <v-text-field
      @change="emitData"
      class="ml-3"
      label="가격"
      type="number"
      v-model="price"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "PriceInput",
  components: {},
  data: () => ({
    day: "",
    headCount: "",
    price: "",
  }),
  methods: {
    emitData() {
      this.$emit("priceInput", {
        day: this.day,
        headCount: this.headCount,
        price: this.price,
      });
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped></style>
