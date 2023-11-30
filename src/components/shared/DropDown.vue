<template>
  <div id="drop-down">
    <label for="">Thành phố</label>
    <select v-model="info.city">
      <option v-for="(city, index) in cities" :key="index">{{ city }}</option>
    </select>
    <div class="icon"><DropDownIcon /></div>
  </div>
</template>

<script>
import DropDownIcon from "@/components/icons/DropDownIcon.vue";
export default {
  components: { DropDownIcon },
  data() {
    return {
      info: { name: "", bod: "", city: "", position: "", descrioption: "" },
      cities: ["Hà Nội", "TP Hồ Chí Minh", "TP Đà Nẵng"],
      positions: [
        "Internship",
        "Fresher",
        "Junior",
        "Middle",
        "Senior",
        "Leader",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
#drop-down {
  display: flex;
  flex-direction: column;
  gap: 4px;
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
    outline-color: #627d98;
    -webkit-appearance: none;
  }
  .icon {
    position: absolute;
    right: 12px;
    top: 36px;
  }
}
</style>
