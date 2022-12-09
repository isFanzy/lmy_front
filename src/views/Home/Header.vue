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

const {proxy} = getCurrentInstance();
const searchFor = ref("");
const localIP = ref("");
const fileLocate = ref("");
const currentBucket = storeToRefs(useBucketsStore())
let ipList = ref([''])
/*
* 文件上传
* */

// 获取ip
onMounted(() => {

})


// const search = function () {
//   // 如果为空，打开搜索框。如果不为空，直接进行搜索
//   if (searchFor.value == '') {
//     ElMessageBox.prompt('', '搜索文件', {
//       confirmButtonText: 'OK',
//       cancelButtonText: 'Cancel',
//     })
//         .then(({value}) => {
//           searchFor.value = value;
//           if (searchFor.value == null || value == null) {
//             ElMessage.error("无法搜索空文件夹")
//           } else {
//             ElMessage({
//               type: 'success',
//               message: `${value}`,
//             });
//             // 搜索
//             proxy.$axios({
//               method: 'post',
//               url: '/api/searchFiles',
//               params: {
//                 path: currentBucket.path.value + currentBucket.fileTree,
//                 name: searchFor.value,
//               }
//             }).then((res: any) => {
//               if (res.data.code == 200) {
//                 // 获取成功
//                 tableData.value = res.data.data;
//               } else {
//                 ElMessage.error("未找到指定文件")
//               }
//             })
//           }
//         })
//         .catch(() => {
//           ElMessage({
//             type: 'info',
//             message: 'Input canceled',
//           })
//         })
//   } else {
//     proxy.$router.push('/');
//   }
// }

//发送创建桶请求
interface requestBody {
  "bucketId": string;
  "whiteIpList": string[];
  "password": string;
  "path": string;
}

// 创建一个新的 桶
const createBucket = function () {
  const newBucket: requestBody = {
    bucketId: "",
    whiteIpList: [],
    password: "123456",
    path: fileLocate.value
  }
  newBucket.whiteIpList.push(localIP.value)
  console.log(newBucket)
  proxy.$axios({
    method: 'post',
    url: '/api/bucket',
    data: newBucket
  }).then((res: any) => {
    // 操作失败
    if (res.data.code != 200) {
      ElMessage.error(res.data.data)
    } else {
      //操作成功
      currentBucket.path.value = fileLocate.value;
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
