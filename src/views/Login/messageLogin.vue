<template>
  <el-input v-model="phoneNum" placeholder="Please input"/>
  <el-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-btn"
  >
    <template #append>
      <el-button class="sendMessage" @click="getCode()">{{verifyCode.countdown.value === 60 ? "发送验证码" : `${verifyCode.countdown.value}s重新后发送`}}</el-button>
    </template>

  </el-input>
  <el-button class="btnLogin" type="primary">登录</el-button>
  <notice/>
</template>


<script lang="ts" setup>
import notice from '../Login/Notice.vue';
import {ElMessage, ElMessageBox} from "element-plus";
import {Action} from "element-plus";
import {ref} from "vue";

// 倒计时
const verifyCode: any = {
  verifyCodeTips: "获取验证码",
  countdown: ref(60),
  disable: true
}
const codeParam = {
  fromflag: 2,
  usertel: "130123123"
}
const settime = function () {
  console.log("settime()")
  if (verifyCode.countdown.value == 1) {
    verifyCode.countdown.value = 60;
    verifyCode.verifyCodeTips.value = "获取验证码";
    verifyCode.disable.value = true;
    return;
  } else {
    console.log(verifyCode.countdown.value);
    verifyCode.countdown.value--;
  }

  verifyCode.verifyCodeTips = "重新获取(" + verifyCode.countdown.value + ")";
  setTimeout(() => {
    verifyCode.verifyCodeTips = "重新获取(" + verifyCode.countdown.value + ")";
    settime();
  }, 1000);
}

function getCode() {
  if (codeParam.usertel == '') {
    console.debug("请填写手机号!");
    return;
  } else {
    const open = () => {
      ElMessageBox.alert('This is a message', 'Title', {
        // if you want to disable its autofocus
        // autofocus: false,
        confirmButtonText: 'OK',
        callback: (action: Action) => {
          ElMessage({
            type: 'info',
            message: `action: ${action}`,
          })
        },
      })
    }
    //发送验证码成功后开始倒计时
    verifyCode.disable = false;
    settime();
  }
}
</script>

<style scoped>
.btnLogin {
  width: 100%;
}
</style>