<template>
  <div class="company-card">
    <div class="company-name">
      <div class="company-search">
        <select v-model="companyData.companyName">
          <option v-for="(company, index) in companies" :key="index">
            {{ company }}
          </option>
        </select>
        <div class="drop-icon"><DropDownIcon /></div>
      </div>
      <div class="bin-icon" @click="$emit('delete-company')">
        <BinIcon />
      </div>
    </div>
    <InputCustom
      required
      label="Vị trí từng làm"
      v-model="companyData.position"
      :maxCharacter="100"
    />
    <InputCustom
      required
      type="period"
      label="Thời gian làm việc"
      v-model="companyData.period"
    />
    <InputCustom
      type="textarea"
      label="Mô tả về công việc"
      :maxCharacter="5000"
      v-model="companyData.description"
    />
  </div>
</template>

<script>
import BinIcon from "../icons/BinIcon.vue";
import InputCustom from "./InputCustom.vue";
import DropDownIcon from "../icons/DropDownIcon.vue";
import { companies } from "@/const";
export default {
  props: {
    companyData: {
      type: Object,
      required: true,
    },
  },
  components: { BinIcon, InputCustom, DropDownIcon },
  data() {
    return {
      companies: companies,
    };
  },
};
</script>

<style lang="scss" scoped>
.company-card {
  display: flex;
  width: 1026px;
  min-height: 520px;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex-shrink: 0;
  border-radius: 4px;
  border: 1px solid #dcdcdc;
  .company-name {
    display: flex;
    gap: 16px;
    height: 60px;
    padding: 10px 16px;
    align-items: center;
    gap: 16px;
    align-self: stretch;
    border-radius: 4px;
    background: #f8f8f8;
    .company-search {
      width: 100%;
      position: relative;
      .drop-icon {
        position: absolute;
        top: 10px;
        right: 12px;
      }
      select {
        width: 100%;
        display: flex;
        height: 40px;
        padding: 8px 10px;
        justify-content: space-between;
        align-items: center;
        flex: 1 0 0;
        border-radius: 4px;
        border: 1px solid var(--black-04, #dbdbdb);
        background: var(--White, #fff);
        appearance: none;
      }
    }
    .bin-icon {
      cursor: pointer;
      padding-top: 4px;
      &:hover {
        background: #ff555577;
        border-radius: 4px;
      }
    }
  }
}
</style>
