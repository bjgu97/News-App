<template>
  <div id="app">
    <tool-bar> </tool-bar>
    <router-view> </router-view> <!-- 이 영역이 url에 따라 바뀜: -->
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar, // component는 ToolBar로 등록해도 태그는 tool-bar로. 
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
