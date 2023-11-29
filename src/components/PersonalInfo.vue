<template>
  <div class="">
    <div id="personal-info">
      <InputCustom required label="Họ và tên" />
      <InputCustom required label="Ngày sinh" type="date" />
      <InputCustom type="textarea" label="Mô tả về bản thân" />
    </div>
    <button :class="{ disabled: !allRequiredPass }">Tiếp</button>
  </div>
</template>

<script>
import InputCustom from "@/components/shared/InputCustom.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
export default {
  components: { InputCustom, SearchIcon },
  data() {
    return {
      allRequiredPass: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#personal-info {
  display: flex;
  width: 926px;
  height: 849px;
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
