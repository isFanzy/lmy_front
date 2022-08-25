<template>
  <div class="noticeDV">
    <el-radio-group v-model="autoLogin" class="el-radio">
      <el-radio label="1" size="large" @change="ifAuto">下次自动登录</el-radio>
    </el-radio-group>
    <el-radio-group v-model="notice" class="el-radio">
      <el-radio label="1" size="large" @change="ifRead">未注册手机登录时会自动创建新账号，<br>我已阅读并同意服务协议和隐私权条款</el-radio>
    </el-radio-group>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

let autoLogin = ref('0')
const notice = ref('0')
const ifAuto = function () {
  console.log("11111");


}
</script>

<style scoped>
.noticeDV {
  height: 100%;
  width: 100%;

}
</style>