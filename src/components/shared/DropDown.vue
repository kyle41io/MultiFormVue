<template>
  <div>
    <select v-model="info.city">
      <option v-for="(city, index) in cities" :key="index">{{ city }}</option>
    </select>
  </div>
</template>

<script>
export default {
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

<style lang="scss" scoped></style>
