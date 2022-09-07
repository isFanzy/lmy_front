<template>


  <div class="common-layout" style="height: 100%;width: 100%;">
    <el-container style="height: 100%;width: 100%">
      <el-aside style="height: 100%;">
        <Aside/>
      </el-aside>
      <el-container style="margin-top: 3%">
        <el-header>
          <Header/>
        </el-header>
        <el-main>
          <div class="main"  style="height: 90%" >
            <Main />
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

const { proxy } = getCurrentInstance();

onMounted(() => {
  //检测存不存在桶子
  proxy.$axios.get('/api/bucket').then((res: { data: any | null; }) => {
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