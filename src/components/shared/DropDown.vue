<template>
  <div id="drop-down">
    <label for="">Thành phố</label>
    <select v-model="selectedCity" @change="handleChange">
      <option v-for="(city, index) in cities" :key="index">{{ city }}</option>
    </select>
    <div class="icon"><DropDownIcon /></div>
  </div>
</template>

<script>
import DropDownIcon from "@/components/icons/DropDownIcon.vue";
import { cities } from "@/const/index";
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  components: { DropDownIcon },
  data() {
    return {
      selectedCity: this.value,
      cities: cities,
    };
  },
  methods: {
    handleChange() {
      this.$emit("input", this.selectedCity);
    },
  },
};
</script>

<style lang="scss" scoped>
#drop-down {
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  select {
    display: flex;
    width: 528px;
    height: 40px;
    padding: 8px 10px;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    border: 1px solid var(--black-04, #dbdbdb);
    background: var(--White, #fff);
    appearance: none;
  }
  .icon {
    position: absolute;
    right: 12px;
    top: 36px;
  }
}
</style>
