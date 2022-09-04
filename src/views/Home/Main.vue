<template>
  <div class="title" style="display: inline-flex">
    <el-radio-group v-model="radio1" class="ml-4">
      <el-radio label="1" size="large">全选</el-radio>
    </el-radio-group>
  </div>
  <div class="table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="文件名称" >

      </el-table-column>
<!--      <el-table-column prop="time" label="修改时间" width="180"/>-->
<!--      <el-table-column prop="fileType" label="文件类型"/>-->
<!--      <el-table-column prop="byte" label="文件大小"/>-->
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance, onMounted, ref} from "vue";
import {useBucketsStore} from "@/Pinia/store/bucket";

const {proxy} = getCurrentInstance();
const currentBucket = useBucketsStore();

const radio1 = ref('1')
const tableData = ref([
  {name:"111",time:"222"}
])

// 渲染文件目录
onMounted(() => {
  console.log("Main.vue ======= onMounted")
  getFirstFiles();
})

// 发送根据路径获取第一层文件(缓存优先)请求
const getFirstFiles = function () {
  console.log("========getFirstFiles========")
  proxy.$axios({
    method: 'get',
    url: '/api/getFilesByPath',
    params: {
      path: "D:\\cloudTest\\1",
      userIp: "121.225.44.233",
    }
  }).then(res => {
    if (res.data.code == 200) {
      // 获取成功
      tableData.value = res.data.data;
      console.log("tableData.value",tableData.value)
    } else {
      // 获取失败
    }
  })
}
</script>

<style scoped>
.table:hover {
  cursor: pointer;
}
</style>