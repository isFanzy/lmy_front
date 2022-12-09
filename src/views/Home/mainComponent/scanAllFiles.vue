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
      <div class="title" style="margin-top: 20px;margin-bottom: 20px">
        <el-button @click="toggleSelection([tableData[0]])">全选
        </el-button>
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
            size="small"
        >
          <el-table-column type="selection" width="45"/>
          <el-table-column prop="departmentName" label="部门"/>
          <el-table-column prop="username" label="姓名"/>
          <el-table-column prop="normalAttendance" label="正常出勤"/>
          <el-table-column prop="holidayYSick" label="疫情假（天）"/>
          <el-table-column prop="doubleOvertime" label="双休加班（时）"/>
          <el-table-column prop="normalOvertime" label="法定加班（时）"/>
          <el-table-column prop="rest" label="调休（天）"/>
          <el-table-column prop="trip" label="出差"/>
          <el-table-column prop="holidayBusiness" label="事假（天）"/>
          <el-table-column prop="holidaySick" label="病假（天）"/>
          <el-table-column prop="holidayFree" label="带薪假（天）"/>
          <el-table-column prop="afterNightOvertime" label="夜班（个）"/>
          <el-table-column prop="nightOvertime" label="晚班（个）"/>
          <el-table-column prop="lastOvertime" label="加班(h)"/>
          <el-table-column prop="totleTime" label="总值班（个）"/>
          <el-table-column prop="lastFree" label="余休(h)"/>
          <el-table-column prop="late" label="迟到早退"/>
          <el-table-column prop="allIn" label="全勤"/>
          <el-table-column prop="note" label="备注"/>
          <el-table-column prop="sign" label="签名"/>
          <el-table-column prop="createTime" label="入职日期"/>
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

const currentBucket = storeToRefs(useBucketsStore());
const userRightClick = userightClickStore();

const {proxy} = getCurrentInstance();
const loading = ref(true)
const radio1 = ref('1')
const tableData = ref([
  {

  }
])

// 渲染文件目录
onMounted(() => {
  console.log("Main.vue ======= onMounted")
  loading.value = false;
})
watch(() => currentBucket.path.value,
    (value, prev) => {
      /* ... */
      // getFirstFiles();
    }
)
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref<User[]>([])
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleAllSelection()
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

</script>

<style scoped>
.table:hover {
  cursor: pointer;
}

</style>