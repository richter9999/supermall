<template>
  <div class="tab-bar-item"  @click="itemClick">
      <slot v-if="!isActive" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>
      <div :style="activeStyle"><slot  name="item-text"></slot></div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red',
    },

  },
  computed: {
    isActive() {  //动态确定 是否为当前 点击
      //console.log('isActive : ', this.$route.path.includes(this.path));
      return this.$route.path.includes(this.path)
    },
    activeStyle() { //动态确定 文字样式
      return this.isActive?{color: this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;

}
</style>