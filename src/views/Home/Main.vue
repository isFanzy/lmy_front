<template>
  <div class="title" style="display: inline-flex">
    <el-radio-group v-model="radio1" class="ml-4">
      <el-radio label="1" size="large">全选</el-radio>
    </el-radio-group>
  </div>
  <div class="table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="fileName" label="文件名称" width="180"/>
      <el-table-column prop="lastTime" label="修改时间" width="180"/>
      <el-table-column prop="fileType" label="文件类型"/>
      <el-table-column prop="byte" label="文件大小"/>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const radio1 = ref('1')
const tableData =
    [
      {
        fileName: 'zmc洗澡',
        lastTime: '2016-05-03',
        fileType: 'png',
        byte: '20mb',
      },
      {
        fileName: 'a',
        lastTime: '2016-05-03',
        fileType: 'png',
        byte: '20mb',
      },
    ]


</script>

<style scoped>
.table:hover{
  cursor: pointer;
}
</style>