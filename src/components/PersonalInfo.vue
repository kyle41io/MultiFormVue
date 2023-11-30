<template>
  <div class="">
    <div id="personal-info">
      <InputCustom required label="Họ và tên" />
      <InputCustom required label="Ngày sinh" type="date" />
      <DropDown></DropDown>
      <SearchPosition />
      <InputCustom
        type="textarea"
        label="Mô tả về bản thân"
        :maxCharacter="1000"
      />
      <UploadImage />
    </div>
    <button
      :class="{ disabled: !allRequiredPass }"
      @click="$emit('update-step', 2)"
    >
      Tiếp
    </button>
  </div>
</template>

<script>
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
  data() {
    return {
      allRequiredPass: true,
      info: {
        name: "",
        dob: "",
        city: "",
        positions: [],
        descriotion: "",
        avatar: "",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#personal-info {
  display: flex;
  width: 926px;
  height: 849px;
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
