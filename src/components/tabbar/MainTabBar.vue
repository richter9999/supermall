<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" active-color="red" >
        <template #item-icon>
          <img src="@/assets/img/tabbar/icon_API.png" >
        </template>
        <template #item-icon-active>
          <img src="@/assets/img/tabbar/icon_API_HL.png" >
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/category" active-color="blue" >
        <template #item-icon>
          <img src="@/assets/img/tabbar/icon_component.png" >
        </template>
        <template #item-icon-active>
          <img src="@/assets/img/tabbar/icon_component_HL.png" >
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart" active-color="pink" >
        <template #item-icon>
          <img src="@/assets/img/tabbar/icon_component.png" >
        </template>
        <template #item-icon-active>
          <img src="@/assets/img/tabbar/icon_component_HL.png" >
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile" active-color="green" >
        <template #item-icon>
          <img src="@/assets/img/tabbar/wechat.png" >
        </template>
        <template #item-icon-active>
          <img src="@/assets/img/tabbar/wechatHL.png" >
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/tabbar/TabBar";
import TabBarItem from "@/components/tabbar/TabBarItem";
export default {
name: "MainTabBar",
  components: {TabBarItem, TabBar}
}
</script>

<style>
</style>