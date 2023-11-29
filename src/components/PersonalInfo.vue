<template>
  <div>
    <inputCustom
      type="textarea"
      required
      label="hello"
      placeholder="let get ready"
      ><template #icon><SearchIcon></SearchIcon></template
    ></inputCustom>
  </div>
</template>

<script>
import InputCustom from "@/components/shared/InputCustom.vue";
import SearchIcon from "@/components/icons/SearchIcon.vue";
export default {
  components: { InputCustom, SearchIcon },
};
</script>

<style lang="scss" scoped></style>
