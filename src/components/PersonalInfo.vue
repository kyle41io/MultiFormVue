<template>
  <div class="">
    <div id="personal-info">
      <InputCustom
        required
        label="Họ và tên"
        v-model="info.name"
        :maxCharacter="100"
      />
      <InputCustom required label="Ngày sinh" type="date" v-model="info.dob" />
      <DropDown v-model="info.city"></DropDown>
      <SearchPosition />
      <InputCustom
        type="textarea"
        label="Mô tả về bản thân"
        :maxCharacter="1000"
        v-model="info.description"
      />
      <UploadImage v-model="info.avatar" />
    </div>
    <button :class="{ disabled: !allRequiredPass }" @click="handleNext">
      Tiếp
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

import InputCustom from "@/components/shared/InputCustom.vue";
import SearchPosition from "@/components/shared/searchPosition/SearchPosition.vue";
import DropDown from "./shared/DropDown.vue";
import UploadImage from "./shared/UploadImage.vue";

export default {
  components: {
    InputCustom,
    DropDown,
    SearchPosition,
    UploadImage,
  },
  methods: {
    handleNext() {
      this.$emit("update-step", 2);
    },
  },
  computed: mapState({
    allRequiredPass() {
      return this.info.name && this.info.dob;
    },
    info: (state) => state.info,
  }),
};
</script>

<style lang="scss" scoped>
#personal-info {
  display: flex;
  width: 926px;
  min-height: 849px;
  padding: 24px 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
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
