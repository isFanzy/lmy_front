<template>
  <el-row class="tac" style="height: 100%;width: 100%">
    <el-col :span="24">
      <h2 class="mb-2" :aria-disabled="true">我的文件</h2>
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="handleSelect"
      >
        <el-sub-menu>
          <template #title>
            <span :title="itemTitle">{{ itemTitle }}</span>
          </template>

          <el-menu-item :index=item.path v-for="(item,index) in buckets.data">
            <el-icon>
              <Position/>
            </el-icon>
            {{ item.path }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item
            :index=item.index
            :disabled="item.ifDisable"
            v-for="(item,index) in asidelist.list.value"
        >
          {{ item.name }}
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import {useBucketsStore} from "@/Pinia/store/bucket";
import {getCurrentInstance, onMounted, ref} from "vue";
import {ElMessage, ElLoading} from "element-plus";
import {useAsideList} from "@/Pinia/store/asideList";
import {storeToRefs} from "pinia";

const {proxy} = getCurrentInstance();
const currentBucket = storeToRefs(useBucketsStore());
const fullscreenLoading = ref(false)

const asidelist = storeToRefs(useAsideList())

const handleSelect = (key: string, keyPath: string[], item: any) => {
  currentBucket.path.value = item.index.replaceAll(/\\/g, "\\\\")
  switch (item.index) {
    case "a":
      asidelist.current.value = "scanAllPhotos"
      console.log('a', asidelist.current.value)
      break;
    case 'b':
      asidelist.current.value = "scanAllCash"
      console.log('b', asidelist.current.value);
      break;
    case 'c':
      asidelist.current.value = "scanAllFavorite"
      console.log('c', asidelist.current.value);
      break;
    case 'd':
      asidelist.current.value = "scanAllLoadings"
      console.log('d', asidelist.current.value);
      break;
    default:
      asidelist.current.value = "scanFiles"
  }
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
const buckets = ref([""]);

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
  }, 2 * 1000)
  fullscreenLoading.value = true;

  // 拿到所有桶
  proxy.$axios.get('/api/bucket').then((res: any) => {
    if (res.data.code != 200) {
      ElMessage.error("未找到桶")
    } else {
      itemTitle.value = "已知桶";
      buckets.value = res.data;
    }
    fullscreenLoading.value = false;
  })
})
</script>

<style scoped>

</style>