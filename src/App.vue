<template>
  <router-view/>
</template>

<style lang="scss">
html,
body,
#app{
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

<script lang="ts" setup>
import axios from "axios";
axios.defaults.withCredentials = true

</script>