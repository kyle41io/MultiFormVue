<template>
  <div>
    <div id="confirm-info">
      <InputCustom
        required
        type="textarea"
        label="Lý do muốn ứng tuyển vào công ty"
        :maxCharacter="1000"
        v-model="confirmInfo.reasonToApply"
      />
      <InputCustom
        required
        type="money"
        label="Mức lương mong muốn"
        v-model="confirmInfo.desiredSalary"
      />
    </div>
    <button :class="{ disabled: !allRequiredPass }" @click="handleComplete">
      Hoàn thành
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

import InputCustom from "./shared/InputCustom.vue";

export default {
  components: { InputCustom },
  methods: {
    handleComplete() {
      console.log(this.$store.state);
    },
  },
  computed: mapState({
    allRequiredPass() {
      return this.confirmInfo.reasonToApply && this.confirmInfo.desiredSalary;
    },
    confirmInfo: (state) => state.confirmInfo,
  }),
};
</script>

<style lang="scss" scoped>
#confirm-info {
  display: flex;
  width: 926px;
  min-height: 346px;
  padding: 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
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
  &:hover {
    background: #2a6aaa;
  }
}
</style>
