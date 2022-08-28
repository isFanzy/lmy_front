<template>
  <div class="common-layout" style="height: 100%;width: 100%">
    <el-container style="height: 100%;width: 100%">
      <el-aside style="height: 100%;">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <Main/>
        </el-main>
        <el-footer>
          <Footer/>
        </el-footer>
      </el-container>
    </el-container>
    <el-button @click="testAxios">testAxios</el-button>
  </div>
</template>

<script lang="ts" setup>
import Aside from "@/views/Home/Aside.vue";
import Header from "@/views/Home/Header.vue";
import Main from "@/views/Home/Main.vue";
import Footer from "@/views/Home/Footer.vue";
import request from "@/Plugins/axiosInstance";

const testAxios = function () {
  request.get('www.baidu.com').then(res => {
    console.log(res.data)
  })
}

</script>

<style scoped>
* {
  border: 1px red solid;
}

body {
}
</style>