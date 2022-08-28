<template>
  <div class="searchDV">
    <el-input
        v-model="searchFor"
        class="w-50 m-2"
        size="large"
        placeholder="Please Input"
    />
    <el-button icon="el-icon-search" @click="alert()"/>
  </div>
</template>

<script lang="ts" setup>
import {ElMessage, ElMessageBox} from "element-plus";
import {ref} from "vue";

const searchFor = ref('');
const alert = function () {
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
</script>

<style scoped>
.searchDV {
  width: 100%;
  display: inline-flex;
}
</style>