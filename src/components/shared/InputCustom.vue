<template>
  <div class="input-container">
    <label for="">
      <span v-if="required" class="required">Must</span>{{ label }}
    </label>
    <div v-if="type === 'textarea'">
      <textarea
        @input="handleInput"
        @keydown="handleKeyDown"
        v-model="value"
        @blur="isBlur = true"
        :class="{ error: isBlur && required && !value }"
      ></textarea>
      <p class="character">{{ characterCount }}/{{ maxCharacter }}</p>
    </div>
    <div v-else-if="type === 'period'" class="period">
      <input
        type="date"
        v-model="startDate"
        @input="handleInput"
        @blur="isBlur = true"
        :class="{ error: isBlur && required && !value }"
      />
      <DashIcon />
      <input
        type="date"
        v-model="endDate"
        @input="handleInput"
        @blur="isBlur = true"
        :class="{ error: isBlur && required && !value }"
      />
    </div>
    <div v-else-if="type === 'money'" class="money">
      <input
        type="number"
        style="padding-right: 24px"
        @input="handleInput"
        @keydown="handleKeyDown"
        @blur="isBlur = true"
        v-model="value"
        :class="{ error: isBlur && required && !value }"
      />
      <div class="currency">VNĐ</div>
    </div>
    <input
      v-else
      :type="type"
      :placeholder="placeholder"
      @input="handleInput"
      @keydown="handleKeyDown"
      @blur="isBlur = true"
      v-model="value"
      :class="{ error: isBlur && required && !value }"
    />
    <div v-if="isBlur && required && !value" class="error-text">
      Thông tin quan trọng, yêu cầu nhập
    </div>
  </div>
</template>

<script>
import DashIcon from "../icons/DashIcon.vue";
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
  components: { DashIcon },
  data() {
    return {
      characterCount: 0,
      startDate: null,
      endDate: null,
      value: null,
      isBlur: false,
    };
  },
  methods: {
    handleInput(event) {
      if (this.type === "period") {
        this.inputValue = this.startDate + " to " + this.endDate;
      } else {
        let inputText = this.value || "";
        if (inputText.length > this.maxCharacter) {
          inputText = inputText.substring(0, this.maxCharacter);
        }
        this.characterCount = inputText.length;
        this.inputValue = inputText;
      }
    },

    handleKeyDown(event) {
      const inputText = event.target.value;

      if (inputText.length >= this.maxCharacter && event.keyCode !== 8) {
        event.preventDefault();
      }
      this.inputValue = inputText;
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.input-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
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
  .period {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  .money {
    position: relative;
    .currency {
      position: absolute;
      top: 10px;
      left: 80px;
      color: #333;
    }
  }
  .error-text {
    color: red;
  }
}
input {
  min-height: 40px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  appearance: initial;
  &.error {
    border: 1px solid red;
    outline-color: red;
  }
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
  &.error {
    border: 1px solid red;
    outline-color: red;
  }
}
</style>
