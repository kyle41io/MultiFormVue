<template>
  <div class="work-experience">
    <div class="companies">
      <CompanyCard
        v-for="(company, index) in companies"
        :key="index"
        :company-data="company"
        @delete-company="deleteCompany(index)"
      />
    </div>

    <div class="add-company" @click="addCompany"><AddIcon />Thêm công ty</div>
    <div class="nav-btn">
      <button :class="{ disabled: !allRequiredPass }" @click="handleNext">
        Tiếp
      </button>
      <button class="back" @click="$emit('update-step', 1)">Quay lại</button>
    </div>
  </div>
</template>

<script>
import CompanyCard from "./shared/CompanyCard.vue";
import AddIcon from "./icons/AddIcon.vue";
export default {
  components: { CompanyCard, AddIcon },
  data() {
    return {
      companies: [{}],
    };
  },
  methods: {
    deleteCompany(index) {
      this.companies.splice(index, 1);
    },
    addCompany() {
      const newCompany = {
        companyName: "",
        position: "",
        period: "",
        description: "",
      };
      this.companies.push(newCompany);
    },
    handleNext() {
      this.$emit("update-companies", this.companies);
      this.$emit("update-step", 3);
    },
  },
  computed: {
    allRequiredPass() {
      for (const company of this.companies) {
        if (!company.companyName || !company.position || !company.period) {
          return false;
        }
      }
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.work-experience {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;
  .companies {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  button {
    width: 102px;
    height: 40px;
    flex-shrink: 0;
    font-size: 16px;
    border-radius: 3px;
    background: #627d98;
    color: white;
    border: none;
    cursor: pointer;
    &.disabled {
      cursor: default;
      pointer-events: none;
      background: #dcdcdc;
    }
    &:hover {
      background: #2a6aaa;
    }
    &.back {
      border-radius: 3px;
      border: 1px solid #dcdcdc;
      background: #fff;
      color: #666;
      &:hover {
        background: #dbdbdb;
      }
    }
  }
  .add-company {
    display: inline-flex;
    height: 40px;
    padding: 4px 8px;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    border-radius: 3px;
    border: 1px solid #dcdcdc;
    background: #fff;
    cursor: pointer;
    &:hover {
      background: #dbdbdb;
    }
  }
  .nav-btn {
    display: flex;
    gap: 26px;
  }
}
</style>
