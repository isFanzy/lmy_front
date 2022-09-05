<template>
  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item>下载</v-contextmenu-item>
    <v-contextmenu-item>分享</v-contextmenu-item>
    <v-contextmenu-item>收藏</v-contextmenu-item>
    <v-contextmenu-item>重命名</v-contextmenu-item>
    <v-contextmenu-item>移动</v-contextmenu-item>
    <v-contextmenu-item>查看详细信息</v-contextmenu-item>
    <v-contextmenu-item>放入回收站</v-contextmenu-item>
  </v-contextmenu>
  <div class="common-layout" style="height: 100%;width: 100%;margin-top: 2%">
    <el-container style="height: 100%;width: 100%">
      <el-aside style="height: 100%;">
        <Aside/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <div class="main" v-contextmenu:contextmenu style="height: 90%">
            <Main/>
          </div>
        </el-main>
        <el-footer>
          <Footer/>
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
import {getCurrentInstance, onMounted} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";

const {proxy} = getCurrentInstance();

onMounted(() => {
  //检测存不存在桶子
  proxy.$axios.get('/api/bucket').then(res => {
    if (res.data.code == 201 || res.data == null) {
      ElMessageBox.prompt('请输入本地库地址', '未发现指定文件夹', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        // inputPattern:
        //     /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: 'Invalid Email',
      })
          .then(({value}) => {
            ElMessage({
              type: 'success',
              message: `Your email is:${value}`,
            })
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: 'Input canceled',
            })
          })
    }
  })
})

</script>

<style scoped>
* {
  /*border: 1px red solid;*/
}

body {
}
</style>