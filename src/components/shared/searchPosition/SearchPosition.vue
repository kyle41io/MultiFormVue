<template>
  <div class="search-position">
    <label>Vị trí làm việc</label>
    <p>Có thể chọn nhiều vị trí mà bạn muốn làm việc.</p>
    <InputAutoComplete
      placeholder=""
      v-model="keyword"
      :options="listOptions"
      :keyId="keyId"
      :keyName="keyName"
      :maxChoice="3"
      :listSelected="selectedPositions"
      @onSelectItem="onSelectItem"
      @onRemoveItem="onRemoveItem"
    />
    <!-- <input type="text" /> -->
  </div>
</template>

<script>
import InputAutoComplete from "./InputAutoComplete.vue";
import { positions } from "@/const";
export default {
  components: { InputAutoComplete },
  data() {
    return {
      keyword: "",
      keyName: "name",
      keyId: "code",
      listOptions: positions,
      selectedPositions: [],
    };
  },
  methods: {
    onSelectItem(item) {
      this.selectedPositions.push(item);
    },
    onRemoveItem(item) {
      this.selectedPositions = this.selectedPositions.filter(
        (c) => c[this.keyId] != item[this.keyId]
      );
    },
  },
  computed: {
    // listOptions() {
    //   return (
    //     (this.keyword.length &&
    //       positions.filter((c) =>
    //         c[this.keyName].toLowerCase().includes(this.keyword.toLowerCase())
    //       )) ||
    //     []
    //   );
    // },
  },
};
</script>

<style lang="scss" scoped>
.search-position {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 6px;
  p {
    color: #666;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    margin-top: -4px;
  }
  .icon {
    position: absolute;
    top: 56px;
    left: 12px;
  }
  input {
    height: 40px;
    width: 528px;
    padding: 8px;
    padding-left: 40px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
  }
}
</style>
