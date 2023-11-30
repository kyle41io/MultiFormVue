<template>
  <div>
    <CompanyCard />
    <div class="nav-btn">
      <button @click="$emit('update-step', 1)">Quay lại</button>
      <button
        :class="{ disabled: !allRequiredPass }"
        @click="$emit('update-step', 3)"
      >
        Tiếp
      </button>
    </div>
  </div>
</template>

<script>
import CompanyCard from "./CompanyCard.vue";
export default {
  components: { CompanyCard },
  data() {
    return {
      allRequiredPass: true,
    };
  },
};
</script>

<style lang="scss" scoped>
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
.nav-btn {
  display: flex;
  gap: 26px;
}
</style>
