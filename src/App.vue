<script>
import PersonalInfo from "@/components/PersonalInfo.vue";
import WorkExperience from "@/components/WorkExperience.vue";
import ConfirmInfo from "@/components/ConfirmInfo.vue";
import StepBar from "@/components/StepBar.vue";

export default {
  components: { PersonalInfo, WorkExperience, ConfirmInfo, StepBar },
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    updateStep(step) {
      this.step = step;
    },
  },
  computed: {
    component() {
      switch (this.step) {
        case 1:
          return PersonalInfo;
        case 2:
          return WorkExperience;
        case 3:
          return ConfirmInfo;
        default:
          return PersonalInfo;
      }
    },
  },
};
</script>

<template>
  <div id="app">
    <StepBar :step="step" />
    <keep-alive>
      <component :is="component" :step="step" @update-step="updateStep">
      </component>
    </keep-alive>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 30px 0;
}
</style>
