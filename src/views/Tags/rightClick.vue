<template>
  <div class="container">
    <el-dropdown trigger="contextmenu">
            <span class="el-dropdown-link">
              Dropdown List<el-icon class="el-icon--right"><arrow-down/></el-icon>
            </span>
      <template #dropdown>
        <el-dropdown-menu v-for="(item) in listItem">
          <el-dropdown-item :icon="CircleCheck">{{ item }}</el-dropdown-item>
          <el-dropdown-menu v-if="item.son != null ? true :false">
            <el-dropdown-item :icon="CircleCheck" v-for="(sitem) in listSonItem">{{ sitem }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance, onMounted} from "vue";


const {proxy} = getCurrentInstance()


// const list = userRightClick.list;
const listItem = [];
const listSonItem = [];

onMounted(() => {
  // list.forEach((item, index) => {
  //   console.log(item.name, index)
  //   listItem[index] = item.name;
  //   if (item.son != null) {
  //     let sons = item.son;
  //     sons.forEach((sonItem, sindex) => {
  //           console.log(sonItem.name, index + "-" + sindex);
  //           listSonItem[sindex] = sonItem.name;
  //         }
  //     )
  //   }
  // })
})
</script>

<style scoped>

</style>