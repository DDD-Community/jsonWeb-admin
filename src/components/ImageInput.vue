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
          :label="`${label}`"
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
  props: {
    label: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      preview: "",
      file: null,
    };
  },
  methods: {
    previewFile(file) {
      if (file == null) {
        this.preview = "";
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener(
        "load",
        () => {
          this.preview = reader.result;
        },
        false
      );
      this.$emit("multipart-image", file);
    },
  },
};
</script>

<style scoped></style>
