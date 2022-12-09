<template>
  <el-row class="tac" style="height: 100%;width: 100%">
    <el-col :span="24">
      <h2 class="mb-2" :aria-disabled="true" style="margin-left:10px">功能列表</h2>
      <el-menu
          default-active="3"
          class="el-menu-vertical-demo"
          @select="handleSelect"
      >
        <el-sub-menu>
          <template #title>
            <span :title="itemTitle">{{ itemTitle }}</span>
          </template>

          <el-menu-item v-for="(item,index) in menu">
            <el-icon>
              <Position/>
            </el-icon>
            {{ item }}
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
      asidelist.current.value = "switchTables"
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
    case 'e':
      asidelist.current.value = "scanAllCash"
      console.log('e', asidelist.current.value);
      break;
    default:
      asidelist.current.value = "switchTables"
  }
}

const itemTitle = ref("华韩")
const menu = ref(["","",""]);

onMounted(() => {

})
</script>

<style scoped>

</style>
