<script>
import PersonalInfo from "@/components/PersonalInfo.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import ConfirmInfo from "@/components/ConfirmInfo.vue";

export default {
  components: { PersonalInfo, WorkExperience, ConfirmInfo },
  data() {
    return {
      component: PersonalInfo,
    };
  },
};
</script>

<template>
  <div id="app">
    <keep-alive><component :is="component"></component></keep-alive>
  </div>
</template>

<style scoped></style>
