<template>
  <div>
    <div id="confirm-info">
      <InputCustom
        required
        type="textarea"
        label="Lý do muốn ứng tuyển vào công ty"
        :maxCharacter="1000"
      />
    </div>
    <button :class="{ disabled: !allRequiredPass }" @click="handleComplete">
      Hoàn thành
    </button>
  </div>
</template>

<script>
import InputCustom from "./shared/InputCustom.vue";
export default {
  components: { InputCustom },
  data() {
    return {
      allRequiredPass: false,
    };
  },
  methods: {
    handleComplete() {
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
#confirm-info {
  display: flex;
  width: 926px;
  height: 346px;
  padding: 20px 32px 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
}
button {
  width: 102px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #627d98;
  color: white;
  margin-top: 24px;
  border: none;
  cursor: pointer;
  &.disabled {
    cursor: default;
    pointer-events: none;
    background: #dcdcdc;
  }
}
</style>
