<template>
  <div class="container">
    <div class="fileSystem">

    </div>
    <div class="searchDV">
      <el-input
          v-model="searchFor"
          class="w-50 m-2"
          size="large"
          placeholder="文件地址"
      />

      <!--  打开文件夹   -->
      <el-upload
          ref="upload"
          class="upload-demo"
          action="#"
          :on-exceed="handleExceed"
          :auto-upload="false"
          :show-file-list="false"
          :multiple="true"
      >
        <el-button icon="el-icon-plus" @click="uploadFile"/>
      </el-upload>
      <!--   搜索  -->
      <el-button icon="el-icon-search" @click="search"/>


    </div>
  </div>
</template>

<script lang="ts" setup>
import {ElMessage, ElMessageBox} from "element-plus";
import {getCurrentInstance, ref} from "vue";

const {proxy} = getCurrentInstance();
const searchFor = ref('C:\\Users\\Administrator');
const search = function () {
  ElMessageBox.prompt('', '搜索文件', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
  })
      .then(({value}) => {
        ElMessage({
          type: 'success',
          message: `${value}`,
        })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: 'Input canceled',
        })
      })
}
const uploadFile = function () {
}
/*
* 文件上传
* */

</script>

<style scoped>
.searchDV {
  width: 100%;
  display: inline-flex;
}
</style>