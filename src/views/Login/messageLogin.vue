<template>
  <el-form :model="messageBox" :rules="baseRules">
    <el-form-item prop="phoneNum">
      <el-input v-model="messageBox.phoneNum.value" placeholder="请输入手机号"/>
    </el-form-item>
    <el-form-item prop="code">
      <el-input v-model="messageBox.code.value" placeholder="请输入验证码">
        <template #append>
          <el-button class="sendMessage" @click="getCode()" :disabled="ifSending.value == true ? true : false">
            {{ verifyCode.countdown.value === 60 ? "发送验证码" : `${verifyCode.countdown.value}s重新后发送` }}
          </el-button>
        </template>
      </el-input>
    </el-form-item>
  </el-form>

  <el-button class="btnLogin" type="primary">登录</el-button>
  <notice/>
</template>


<script lang="ts" setup>
import notice from '@/views/Login/Notice.vue'
import {ElMessage, ElMessageBox} from "element-plus";
import {Action} from "element-plus";
import { ref } from "vue";
const ifSending = ref(true);
const messageBox = {
  phoneNum: ref(''),
  code: ref('')
}

/* 表单验证 */
const baseRules = ref({
  phoneNum: [
    {
      required: true,
      message: '请输入手机号码',
      trigger: 'change'
    },
    {
      min: 11,
      max: 11,
      message: '请输入11位手机号码',
      trigger: 'change'
    },
    {
      pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,
      message: '请输入正确的手机号码'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'change'
    },
    {
      min: 6,
      max: 6,
      message: '请输入完整验证码',
      trigger: 'change'
    }
  ]
});

// 倒计时
const verifyCode: any = {
  verifyCodeTips: "获取验证码",
  countdown: ref(60),
}

// 发送短信点击时间
const getCode = function () {
  ifSending.value = true;
  settime();
}
const settime = function () {
  if (verifyCode.countdown.value == 1) {
    verifyCode.countdown.value = 60;
    verifyCode.verifyCodeTips.value = "获取验证码";
    ifSending.value = false;
    return;
  } else {
    verifyCode.countdown.value--;
  }
  setTimeout(() => {
    settime();
  }, 1000);
}

</script>

<style scoped>
.btnLogin {
  width: 100%;
}
</style>