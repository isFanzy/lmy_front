<template>
  <v-contextmenu ref="contextmenu">
    <v-contextmenu-item v-for="(item,index) in userRightClick.list">
      {{ item.name }}
    </v-contextmenu-item>
  </v-contextmenu>

  <div class="title" style="display: inline-flex">
    <el-radio-group v-model="radio1" class="ml-4">
      <el-radio label="1" size="large">全选</el-radio>
    </el-radio-group>
  </div>
  <div class="table" v-contextmenu:contextmenu>
    <el-table
        :data="tableData"
        border
        style="width: 100%"
        v-loading="loading"
        @row-contextmenu="clickTableRow"
    >
      <el-table-column prop="name" label="文件名称"/>
      <el-table-column prop="path" label="文件路径"/>
      <el-table-column prop="length" label="文件大小" width="100%"/>
      <el-table-column prop="lastModified" label="最后一次修改" width="120%"/>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance, onMounted, ref} from "vue";
import {useBucketsStore} from "@/Pinia/store/bucket";
import {userightClickStore} from "@/Pinia/store/rightclick";

const {proxy} = getCurrentInstance();

// STORE
const currentBucket = useBucketsStore();
const userRightClick = userightClickStore();

const loading = ref(true)
const radio1 = ref('1')
const tableData = ref([
  {
    name: "",
    path: "",
    length: "",
    lastModified: ""
  }
])
const menuList = [];

// 渲染文件目录
onMounted(() => {
  console.log("Main.vue ======= onMounted")
  getFirstFiles();
  userRightClick.list.forEach(res => {
    console.log("res", res);
  })
  loading.value = false;
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
  }).then((res: any) => {
    if (res.data.code == 200) {
      // 获取成功
      tableData.value = res.data.data;
      console.log("tableData.value", tableData.value)
    } else {
      // 获取失败
    }
  })
}

// 每一行 item 的点击事件
const clickTableRow = (row: any, event: any, colume: any) => {
  console.log("======click======")
}


</script>

<style scoped>
.table:hover {
  cursor: pointer;
}
</style>