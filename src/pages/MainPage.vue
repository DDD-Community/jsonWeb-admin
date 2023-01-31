<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-img
        src="@/assets/logo.svg"
        max-width="300"
        max-height="500"
        style="border-radius: 25px"
      ></v-img>
    </v-row>
    <v-row class="d-flex justify-center mt-10 mb-10">
      <v-chip
        >디자인이 구린거 같으면 제가 백엔드 개발자임을 상기해주세요</v-chip
      >
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <v-btn :to="'/admin-page/register/cafe'" color="primary"
          >카페 등록</v-btn
        >
      </v-col>

      <v-col class="d-flex justify-center">
        <v-btn :to="'/admin-page/register/theme'" color="primary"
          >테마 등록</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped></style>
