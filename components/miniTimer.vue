<template>
  <div>
    <a :href="link" class="float hidden md:flex" target="_blank">
      <i class="my-float items-center">
        <img src="../assets/img/miniTimer.png" alt="" />
      </i>
      <span class="text-white text-xs mt-3 ml-2">6</span>
    </a>

    <a
      :href="link"
      class="float-mobile flex md:hidden flex-col"
      target="_blank"
    >
      <i class="my-float items-center">
        <img src="../assets/img/miniTimer.png" alt="" />
      </i>
      <span class="text-white text-xs mt-3 ml-2">6</span>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.float {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #191b73;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  font-size: 30px;
  z-index: 100;
}
.float-mobile {
  position: fixed;
  top: 100px;
  right: 0px;
  background-color: #191b73;
  color: #fff;
  text-align: center;
  font-size: 30px;
  z-index: 100;
  box-shadow: 2px 2px 3px #999;
  border-radius: 10px 0px 0px 10px;
}

.float:hover {
  width: 100px;
}
.float span:hover {
  visibility: visible;
}

.my-float {
  margin-top: 4px;
  margin-left: 4px;
}
</style>
