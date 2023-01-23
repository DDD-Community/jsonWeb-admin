<template>
  <div>
    <v-row class="d-flex justify-center">
      <v-img max-height="150" max-width="200" :src="preview" alt=""></v-img>
    </v-row>
    <v-row>
      <v-col>
        <v-file-input
          v-model="file"
          :multiple="false"
          :clearable="false"
          label="카페 대표 사진"
          filled
          prepend-icon="mdi-camera"
          accept="image/*"
          @change="previewFile(file)"
        >
        </v-file-input>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    preview: "",
    file: null,
  }),
  methods: {
    previewFile(file) {
      if (file == null) {
        this.preview = "";
        return;
      }
      const fileData = (data) => {
        this.preview = data;
      };
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener(
        "load",
        () => {
          fileData(reader.result);
        },
        false
      );

      this.$emit("image", file);
    },
  },
  mounted() {},
  computed: {},
};
</script>

<style scoped></style>
