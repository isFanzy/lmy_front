<template>
  <div class="Login">
    <div class="dv_welcome">
      <el-tabs type="border-card" class="demo-tabs" stretch="true">
        <el-tab-pane>
          <template #label>
            <span class="custom-tabs-label">
              <span>短信登录</span>
            </span>
          </template>
          <!-- 短信登录-->
          <message-login/>
        </el-tab-pane>
        <el-tab-pane label="账号登录">
          <div>
            账号登录
          </div>
        </el-tab-pane>
        <el-tab-pane label="扫码登录">
          <div>
            扫码登录
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import MessageLogin from "@/views/Login/messageLogin.vue";

@Options({
  components: {MessageLogin},
  props: {
    msg: String
  }
})
export default class HelloWorld extends Vue {
  msg!: string
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  border: red 1px solid;
  border-radius: 10%;
}

.Login {
  width: 300pt;
  height: 300pt;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;

}

.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
