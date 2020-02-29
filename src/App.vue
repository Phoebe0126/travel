<template>
  <div id="app">
    <keep-alive> <!-- 只需获取一次数据-->
     <!-- 路由出口 -->
     <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
