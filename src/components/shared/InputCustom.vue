<template>
  <div class="input-container">
    <label for="">
      <span v-if="required" class="required">Must</span>{{ label }}
    </label>
    <div v-if="type == 'textarea'">
      <textarea @input="handleInput" @keydown="handleKeyDown"></textarea>
      <p class="character">{{ characterCount }}/{{ maxCharacter }}</p>
    </div>
    <input
      v-else
      :type="type"
      :placeholder="placeholder"
      :style="{ width: type === 'date' ? '118px' : '528px' }"
    />
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
    maxCharacter: { type: Number },
  },
  data() {
    return { characterCount: 0 };
  },
  methods: {
    handleInput(event) {
      let inputText = event.target.value;
      if (inputText.length > this.maxCharacter) {
        inputText = inputText.substring(0, this.maxCharacter);
      }
      this.characterCount = inputText.length;
    },
    handleKeyDown(event) {
      const inputText = event.target.value;

      if (inputText.length >= this.maxCharacter && event.keyCode !== 8) {
        event.preventDefault();
      }
    },
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
  & div .character {
    color: #666;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
}
input {
  min-height: 40px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  outline-color: #627d98;
}
textarea {
  position: relative;
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
  outline-color: #627d98;
}
</style>
