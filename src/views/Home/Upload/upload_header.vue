<template>
  <div class="container">
    <h1>打开文件夹</h1>
    <div class="searchDV">
      <el-input
          v-model="searchFor"
          class="w-50 m-2"
          size="large"
          placeholder="Please Input"
      />
      <el-button @click="">浏览</el-button>
      <el-button @click="">确认</el-button>

    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.container {
  height: 20%;
}

.searchDV {
  width: 100%;
  display: inline-flex;
}
</style>