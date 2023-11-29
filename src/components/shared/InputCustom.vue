<template>
  <div class="input-container">
    <label for="">
      <span v-if="required" class="required">Must</span>{{ label }}
    </label>
    <textarea v-if="type == 'textarea'"></textarea>
    <input v-else :type="type" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    required: {
      type: Boolean,
    },
    label: { type: String },
    type: {
      type: String,
    },
    placeholder: { type: String },
  },
  data() {
    return {
      type: "text",
      required: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14px;
  .required {
    width: 45px;
    height: 20px;
    color: white;
    background: #627d98;
    padding: 3px 8px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 700;
    line-height: 20px;
    margin-right: 8px;
  }
}
input {
  min-height: 40px;
  width: 528px;
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
}
textarea {
  display: flex;
  width: 528px;
  height: 152px;
  padding: 8px 10px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  resize: none;
}
</style>
