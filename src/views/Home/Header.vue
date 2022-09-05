<template>
  <div class="container">
    <div class="fileSystem">

    </div>
    <div class="searchDV">
      <el-input
          v-model="searchFor"
          class="w-50 m-2"
          size="large"
          placeholder="搜索文件"
      />
      <!--   搜索  -->
      <el-button icon="el-icon-search" @click="search"/>

      <el-button icon="el-icon-plus" @click="uploadFile"/>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {ElMessage, ElMessageBox} from "element-plus";
import {getCurrentInstance, onMounted, ref} from "vue";
import {useBucketsStore} from "@/Pinia/store/bucket";
import {storeToRefs} from "pinia";

const currentBucket = useBucketsStore();
const {proxy} = getCurrentInstance();
const searchFor = ref("");
const localIP = ref("");
const fileLocate = ref("");
const {path} = storeToRefs(currentBucket)
/*
* 文件上传
* */
// 获取ip
onMounted(() => {
  proxy.$axios.post('/getIPapi/json/?lang=zh-CN').then(res => {
    localIP.value = res.data.query;
    console.log("=======本地IP1========" + localIP.value);
  })
})


const search = function () {
  if (searchFor.value == null) {
    ElMessageBox.prompt('', '搜索文件', {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
    })
        .then(({value}) => {
          searchFor.value  = value;
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
  } else {

  }

}

//发送创建桶请求
const createBucket = function () {
  proxy.$axios({
    method: 'post',
    url: '/api/bucket',
    params: {
      "bucketId": "",
      "whiteIpList": localIP.value,
      "password": "",
      "path": fileLocate.value
    }
  }).then(res => {
    console.log(res.data)
    // 操作失败
    if (res.data.code != 200) {
      ElMessage.error(res.data.data)
    } else {
      //操作成功
      currentBucket.path = fileLocate.value;
      ElMessage.success(res.data.data);
    }
  })
}
const uploadFile = function () {
  ElMessageBox.prompt('请输入本地库地址', '绑定本地库', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    // inputPattern:
    //     /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    // inputErrorMessage: 'Invalid Email',
  })
      .then(({value}) => {
            ElMessage({
              type: 'success',
              message: `您绑定的本地库地址为:${value}`,
            })
            fileLocate.value = value;
            console.log("fileLocate.value", fileLocate.value);
            // 创键一个新的桶
            createBucket();
          }
      )
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