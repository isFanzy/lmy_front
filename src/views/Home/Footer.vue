<template>

  <div class="container" v-if="progress.percent.value == 0 ? false : true">
    <el-divider>
      下载进度
    </el-divider>
    <div style="display: inline-block; width: 100%">
      <el-progress
          :text-inside="true"
          :stroke-width="24"
          :percentage="progress.percent.value"
          status="progress.status.value"
      >

      </el-progress>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const progress: any = {
  percent: ref(0),
  status: ref("success")
}
</script>

<style scoped>
.container {
  display: block;
  margin-top: -5%;
}
</style>