<template>

<div class="container">
  <el-divider>
    下载进度
  </el-divider>
  <el-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="progress.percent.value"
      status="progress.status.value"
  >
  </el-progress>

</div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const progress : any = {
  percent : ref(20),
  status : ref("success")
}
</script>

<style scoped>
.container{
  display: block;
  margin-top: -5%;
}
</style>