<template>
  <div :class="['input-complete', isFocused && 'focus']">
    <div class="icon-search">
      <SearchIcon />
    </div>
    <div class="d-flex">
      <template v-if="listSelected.length">
        <SelectedItem
          v-for="item in listSelected"
          :key="item[keyId]"
          :keyName="keyName"
          :item="item"
          @onRemoveItem="onRemoveItem(item)"
        />
      </template>
      <input
        v-if="!checkMaxChoices"
        type="text"
        :placeholder="placeholder"
        v-model="keyword"
        @input="onInputSearch"
        @focus="isFocused = true"
      />
    </div>
    <DropdownMenu
      v-if="showDropdown"
      :options="options"
      :keyId="keyId"
      :keyName="keyName"
      :listSelected="listSelected"
      @onSelectItem="onSelectItem"
    />
  </div>
</template>

<script>
import SearchIcon from "@/components/icons/SearchIcon.vue";
import DropDownMenu from "./DropDownMenu.vue";
import SelectedItem from "./SelectedItem.vue";
export default {
  components: { SearchIcon, DropDownMenu, SelectedItem },
  props: {
    listSelected: {
      type: Array,
      default: () => [],
    },
    maxChoice: {
      type: Number,
      required: false,
    },
    placeholder: {
      type: String,
      default: () => "Tìm kiếm",
    },
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: () => "",
    },
    keyId: {
      type: String,
      default: () => "id",
    },
    keyName: {
      type: String,
      default: () => "name",
    },
  },
  computed: {
    showDropdown() {
      return this.isFocused && this.keyword.length;
    },
    checkMaxChoices() {
      return this.maxChoice && this.listSelected.length == this.maxChoice;
    },
  },
  data() {
    return {
      keyword: "",
      isFocused: false,
    };
  },
  methods: {
    onInputSearch() {
      this.$emit("input", this.keyword);
    },
    onSelectItem(item) {
      if (!this.checkMaxChoices) {
        this.keyword = "";
        this.isFocused = false;
        this.onInputSearch();
        this.$emit("onSelectItem", item);
      }
    },
    onRemoveItem(item) {
      this.$emit("onRemoveItem", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-complete {
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #dbdbdb;
  padding: 8px 10px;
  display: flex;
  gap: 8px;
  font-size: 14px;
  line-height: 20px;
  height: 40px;
  width: 528px;
  position: relative;

  .icon-search {
    height: 20px;
    display: flex;
    align-items: center;
  }
  .d-flex {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    align-items: center;
    input {
      outline: 0;
      border: none;
      width: 400px;
      background: transparent;
    }
  }
}
</style>
