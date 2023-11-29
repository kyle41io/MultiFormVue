<template>
  <div class="step-container">
    <h1>Đơn ứng tuyển</h1>
    <div class="step-bar">
      <div
        class="step-section"
        v-for="(stepDesc, index) in stepDescs"
        :key="index"
      >
        <div
          class="step"
          :class="{ active: step === index + 1, complete: step >= index + 1 }"
        >
          {{ index + 1 }}
        </div>
        <p class="step-desc">{{ stepDesc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { step: { type: Number } },

  data() {
    return {
      stepDescs: [
        "Thông tin cá nhân",
        "Kinh nghiệm làm việc",
        "Xác nhận thông tin",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.step-container {
  width: 926px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 22px;
  h1 {
    color: #333;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 36px;
  }
  .step-bar {
    display: flex;
    position: relative;
    gap: 40px;
  }
  .step-bar::before {
    content: "";
    position: absolute;
    left: 40px;
    top: 20%;
    height: 2px;
    width: 350px;
    background-color: #dbdbdb;
    z-index: -1;
  }

  .step-bar div {
    position: relative;
  }

  .step:before {
    content: "";
    position: absolute;
    left: 50%;
    top: -1px;
    height: 10px;
    width: 10px;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: #000;
    z-index: 1;
  }

  .step:first-child:before {
    display: none;
  }
  .step-section {
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .step-desc {
      color: #333;
      text-align: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
    }
  }
  & div .step {
    display: flex;
    width: 32px;
    height: 32px;
    padding: 6px 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 90px;
    border: 1px solid #dbdbdb;
    background: #dbdbdb;
    color: white;
    &.active {
      width: 40px;
      height: 40px;
    }
    &.complete {
      background: #617d98;
    }
  }
}
</style>
