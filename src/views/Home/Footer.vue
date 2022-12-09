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
import {ref, watch} from "vue";
import {ElNotification} from "element-plus";

const progress =
    {
      percent: ref(50),
      status: ref("success")
    }
// watch() 默认是懒侦听的，即仅在侦听源发生变化时才执行回调函数
// const changeProgress = function () {
//   progress.percent.value = 100;
// }
const downloadOver = function () {
  ElNotification.success({
    title: 'Success',
    message: '下载完成，请移步传输页面',
    offset: 100,
  })
}
watch(
    () => progress.percent.value,
    (count, prevCount) => {
      /* ... */
      if (count == 100) {
        console.log("========下载完成，请移步传输页面========")
        downloadOver();
        progress.percent.value = 0;
      }
    }
)
// watch(progress.percent.value, () => {
//   console.log("======下载完成======")
//   if (progress.percent.value === 100) {
//     downloadOver();
//   }
// })
</script>

<style scoped>
.container {
  display: block;
  margin-top: -3%;
}
</style>