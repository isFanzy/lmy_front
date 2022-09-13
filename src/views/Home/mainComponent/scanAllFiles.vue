<template>
  <div class="container">
    <v-contextmenu
        ref="contextmenu"
    >
      <v-contextmenu-item @click="newFile">新建</v-contextmenu-item>
      <v-contextmenu-item @click="downloadFile">下载</v-contextmenu-item>
      <v-contextmenu-item @click="uploadFile">上传</v-contextmenu-item>
      <v-contextmenu-item @click="likeFile">收藏</v-contextmenu-item>
      <v-contextmenu-item @click="renameFile">重命名</v-contextmenu-item>
      <v-contextmenu-item @click="moveFile">移动到</v-contextmenu-item>
      <v-contextmenu-item @click="deleteFile">放入回收站</v-contextmenu-item>
      <v-contextmenu-item @click="lookFile">查看详细信息</v-contextmenu-item>
    </v-contextmenu>

    <div class="container">
      <div class="title" style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])"
        >全选
        </el-button
        >
        <el-button @click="toggleSelection()">取消全选</el-button>
      </div>
      <div class="table" v-contextmenu:contextmenu>
        <el-table
            ref="multipleTableRef"
            :data="tableData"
            @selection-change="handleSelectionChange"
            border
            style="width: 100%"
            v-loading="loading"
            @row-contextmenu="clickTableRow"
            @row-click="leftClick"
            size="default"
        >
          <el-table-column type="selection" width="45"/>
          <el-table-column prop="name" label="文件名称"/>
          <el-table-column prop="path" label="文件路径"/>
          <el-table-column prop="length" label="文件大小" width="100%"/>
          <el-table-column prop="lastModified" label="最后一次修改" width="120%"/>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// STORE
import {useBucketsStore} from "@/Pinia/store/bucket";
import {userightClickStore} from "@/Pinia/store/rightclick";
import {getCurrentInstance, onMounted, ref, watch} from "vue";
import {ElMessage, ElMessageBox, ElTable} from "element-plus";
import {storeToRefs} from "pinia";
import {User} from "@element-plus/icons-vue/dist/types";

const currentBucket = storeToRefs(useBucketsStore());
const userRightClick = userightClickStore();

const {proxy} = getCurrentInstance();
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
watch(() => currentBucket.path.value,
    (value, prev) => {
      /* ... */
      getFirstFiles();
    }
)
// 发送根据路径获取第一层文件(缓存优先)请求
const getFirstFiles = function () {
  proxy.$axios({
    method: 'get',
    url: '/api/getFilesByPath',
    params: {
      path: currentBucket.path.value,
      userIp: "121.225.44.233",
    }
  }).then((res: any) => {
    if (res.data.code == 200) {
      // 获取成功
      tableData.value = res.data.data;
    } else {
      ElMessage.error("未在本地找到指定桶")
    }
  })
}
// 多选
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: User[]) => {
  multipleSelection.value = val
}

// 每一行 item 的右键击事件
const clickTableRow = (row: any, event: any, colume: any) => {
  console.log("======right click======")
}
// 每一行 item 的左键击事件
const leftClick = function () {
  console.log("======left click======")
}

// 新建文件
const newFile = function (name: any) {
  ElMessageBox.prompt('文件名', '新建', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    // inputPattern:
    //     /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    // inputErrorMessage: 'Invalid Email',
  })
      .then(({value}) => {
        ElMessage({
          center: true,
          type: 'success',
          message: `FileName is:${value}`,
        })
      })
      .catch(() => {
        ElMessage({
          center: true,
          type: 'info',
          message: 'Input canceled',
        })
      })
}

// 下载文件
const downloadFile = function () {
  ElMessageBox.confirm(
      '此操作将下载整个文件夹，是否继续...',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }
  )
      .then(() => {
        ElMessage({
          center: true,
          type: 'success',
          message: '-START DOWNLOAD-',
        })
      })
      .catch(() => {
        ElMessage({
          center: true,
          type: 'info',
          message: '- CANCEL DOWNLOAD-',
        })
      })
}

// 上传文件
const uploadFile = function () {
  ElMessageBox.confirm(
      '此操作将上传整个文件夹到远程仓库中，是否继续...',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }
  )
      .then(() => {
        ElMessage({
          center: true,
          type: 'success',
          message: '-START UPLOAD-',
        })
      })
      .catch(() => {
        ElMessage({
          center: true,
          type: 'info',
          message: '-CANCEL UPLOAD-',
        })
      })
}

// 收藏
const likeFile = function () {
  ElMessage({
    type: 'success',
    showClose: true,
    message: '-DONE-',
    center: true,
  })
}

// 重命名
const renameFile = function () {
  ElMessageBox.prompt('文件名', '重命名', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    // inputPattern:
    //     /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    // inputErrorMessage: 'Invalid Email',
  })
      .then(({value}) => {
        ElMessage({
          center: true,
          type: 'success',
          message: `FileName is:${value}`,
        })
      })
      .catch(() => {
        ElMessage({
          center: true,
          type: 'info',
          message: 'Input canceled',
        })
      })
}

// 移动
const moveFile = function () {

}

// 删除
const deleteFile = function () {
  ElMessageBox.confirm(
      '此操作将删除整个文件夹，是否继续...',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }
  )
      .then(() => {
        ElMessage({
          center: true,
          type: 'success',
          message: '-Done-',
        })
      })
      .catch(() => {
        ElMessage({
          center: true,
          type: 'info',
          message: '-CANCEL-',
        })
      })
}

// 详情
const lookFile = function () {
  proxy.$router.push('/details')
}
</script>

<style scoped>
.table:hover {
  cursor: pointer;
}

</style>