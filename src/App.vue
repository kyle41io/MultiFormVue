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
      info: {},
      companies: [{}],
      reasonToApply: "",
      desiredSalary: 0,
    };
  },
  methods: {
    updateStep(step) {
      this.step = step;
    },
    updateInfo(info) {
      this.info = info;
    },
    updateCompanies(companies) {
      this.companies = companies;
    },
    updateConfirmInfo(confirmInfo) {
      this.reasonToApply = confirmInfo.reasonToApply;
      this.desiredSalary = confirmInfo.desiredSalary;
    },
    createJSONObject() {
      const jsonObject = {
        info: this.info,
        companies: this.companies,
        reasonToApply: this.reasonToApply,
        desiredSalary: this.desiredSalary,
      };
      console.log(jsonObject);
    },
  },
  computed: {
    component() {
      if (this.step === 1) {
        return PersonalInfo;
      } else if (this.step === 2) {
        return WorkExperience;
      } else if (this.step === 3) {
        return ConfirmInfo;
      }
    },
  },
};
</script>

<template>
  <div id="app">
    <StepBar :step="step" />
    <keep-alive
      ><component
        :is="component"
        :step="step"
        @update-step="updateStep"
        @update-info="updateInfo"
        @update-companies="updateCompanies"
        @update-confirm-info="updateConfirmInfo"
      ></component
    ></keep-alive>
    <!-- <button @click="createJSONObject">Tạo JSON Object</button> -->
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
