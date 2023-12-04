<template>
  <div class="upload-image">
    <label for="">Ảnh cá nhân</label>
    <p class="image-name">{{ imageName }}</p>
    <div
      class="upload-zone"
      :class="{ dragging: isDragging, error: isError }"
      @dragover.prevent="isDragging = true"
      @dragenter.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="drop($event)"
    >
      <UploadIcon />
      <div class="">
        <h2>Hãy kéo và thả ảnh vào đây hoặc</h2>
        <label for="file">nhấn vào đây</label>
        <input id="file" type="file" @change="handleFileUpload" />
      </div>
    </div>
    <div class="error-message" v-if="isError">
      Chỉ nhận file type là PNG hoặc JPEG
    </div>
  </div>
</template>

<script>
import UploadIcon from "../icons/UploadIcon.vue";
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  components: { UploadIcon },
  data() {
    return {
      isDragging: false,
      isError: false,
      imageName: this.value,
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      this.validateFile(file);
    },
    validateFile(file) {
      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        this.isError = false;
        this.imageName = file.name;
        this.$emit("input", file.name);
      } else {
        this.isError = true;
        this.imageName = "";
        this.$emit("input", "");
      }
    },
    drop(event) {
      event.preventDefault();
      this.isDragging = false;
      const file = event.dataTransfer.files[0];
      this.validateFile(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.upload-image {
  width: 100%;
  .upload-zone {
    width: 100%;
    margin-top: 8px;
    height: 192px;
    flex-shrink: 0;
    border-radius: 7px;
    border: 1px solid #dcdcdc;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 6px;
    div {
      display: flex;
      flex-direction: column;
      h2 {
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
      }
      label {
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        text-decoration-line: underline;
        cursor: pointer;
      }
      input {
        visibility: hidden;
      }
    }
    &.error {
      border-color: rgb(219, 66, 66);
    }
    &.dragging {
      border: 2px dotted #627d98;
    }
  }
  .image-name {
    width: 100%;
    overflow: hidden;
    color: #627d98;
    font-weight: 700;
  }
  .error-message {
    color: rgb(219, 66, 66);
    font-size: 14px;
  }
}
</style>
