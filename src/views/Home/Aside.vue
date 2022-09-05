<template>
  <el-row class="tac" style="height: 100%;width: 100%">
    <el-col :span="24">
      <h2 class="mb-2" :aria-disabled="true">我的文件</h2>
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          @select="handleSelect"
      >
        <el-sub-menu index="1">
          <template #title>
            <span :title="itemTitle">{{itemTitle}}</span>
          </template>
          <el-menu-item-group v-for="(item,index) in buckets.data">
            <el-menu-item>
              {{ item.path }}{{ index.default }}
            </el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2">
          <span>相册</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon>
            <document/>
          </el-icon>
          <span>回收站</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <setting/>
          </el-icon>
          <span>收藏夹</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span>传输</span>
        </el-menu-item>
      </el-menu>
    </el-col>

  </el-row>
</template>

<script lang="ts" setup>
import {useBucketsStore} from "@/Pinia/store/bucket";
import {getCurrentInstance, onMounted, ref} from "vue";
import request from "@/Utils/axiosInstance";
import {Logger} from "sass";
import {ElLoading} from "element-plus";

const {proxy} = getCurrentInstance();
const currentBucket = useBucketsStore();
const fullscreenLoading = ref(false)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const itemTitle = ref("未发现桶")
/*
所有的桶
GET:localhost:10086/bucket
{
	"code": 200,
	"message": "请求成功!",
	"data": [
		{
			"bucketId": "1563836627301281792",
			"password": "123456",
			"whiteIpList": [
				"10.3.0.191",
				"10.3.0.192"
			],
			"path": "C:\\Users\\Yet\\Nutstore"
		},
		{
			"bucketId": "1563504011335172096",
			"password": "12345",
			"whiteIpList": [
				"10.3.0.191"
			],
			"path": "C:\\Users\\Yet\\Nutstore\\1"
		}
	]
}
* */
const buckets = ref([]);

onMounted(() => {
  console.log("============HOOK============")
  // Loading 状态

  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  setTimeout(() => {
    loading.close()
  }, 2000)
  fullscreenLoading.value = true;


  proxy.$axios.get('/api/bucket').then((res) => {
    if (res.data.code != 200) {
      console.log("未找到桶")
    } else {
      itemTitle.value = "已知桶";
      buckets.value = res.data;
      console.log(buckets.value)
    }
    console.log(res.data)
    fullscreenLoading.value = false;
  })
})
</script>

<style scoped>

</style>