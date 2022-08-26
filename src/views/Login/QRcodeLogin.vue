<template>
  <div class="img">
    <el-image style="width: 100px; height: 100px" :src="require('@/assets/qrCode.png')" :fit="fit"/>
  </div>
  <div class="autoLogin">
    <el-radio-group v-model="autoLogin" class="el-radio">
      <el-radio label="1" size="large" @change="ifAuto">下次自动登录</el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
/* 二维码 url */
const url = ""

const autoLogin = ref('0')
const ifAuto = function () {
  console.log("11111");
}
</script>

<style scoped>
* {
  text-align: center;
}
</style>