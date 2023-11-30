<template>
  <div class="search-position">
    <label>Vị trí làm việc</label>
    <div class="icon"><SearchIcon /></div>
    <input type="text" />
  </div>
</template>

<script>
import SearchIcon from "../icons/SearchIcon.vue";
export default {
  components: { SearchIcon },
};
</script>

<style lang="scss" scoped>
.search-position {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  & .icon {
    position: absolute;
    top: 32px;
    left: 12px;
  }
  input {
    min-height: 40px;
    width: 528px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    outline-color: #627d98;
  }
}
</style>
