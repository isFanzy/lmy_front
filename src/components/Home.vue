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
          <el-button @click="testAxios">testAxios</el-button>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Aside from "@/views/Home/Aside.vue";
import Header from "@/views/Home/Header.vue";
import Main from "@/views/Home/Main.vue";
import Footer from "@/views/Home/Footer.vue";
import aixos from "@/Plugins/axiosInstance";
import { getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();

const testAxios = function () {
  proxy.$axios.get('/api/user').then(res => {
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