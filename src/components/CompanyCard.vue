<template>
  <div class="company-card">
    <div class="company-name">
      <select v-model="city">
        <option v-for="(city, index) in cities" :key="index">{{ city }}</option>
      </select>
      <BinIcon />
    </div>
  </div>
</template>

<script>
import BinIcon from "./icons/BinIcon.vue";
export default {
  components: { BinIcon },
  data() {
    return {
      experiences: [],
      cities: ["MorSoftware", "TestCompany", "HeroInc", "NinjaSchool"],
    };
  },
};
</script>

<style lang="scss" scoped>
.company-card {
  display: flex;
  width: 1026px;
  height: 504px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  .company-name {
    width: 100%;
    display: flex;
    gap: 16px;
    height: 60px;
    padding: 10px 16px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    border-radius: 4px;
    background: #f8f8f8;
    select {
      display: flex;
      height: 40px;
      padding: 8px 10px;
      justify-content: space-between;
      align-items: center;
      flex: 1 0 0;
      border-radius: 4px;
      border: 1px solid var(--black-04, #dbdbdb);
      background: var(--White, #fff);
      -webkit-appearance: none;
    }
  }
}
</style>
