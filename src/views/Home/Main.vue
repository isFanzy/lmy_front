<template>
  <div class="container">
    <component :is="asideList.current.value"/>
  </div>
</template>

<script lang="ts">
import scanFiles from '@/views/Home/mainComponent/scanAllFiles.vue'
import scanAllPhotos from '@/views/Home/mainComponent/scanAllPhotos.vue'
import scanAllCash from '@/views/Home/mainComponent/scanAllCash.vue'
import scanAllFavorite from '@/views/Home/mainComponent/scanAllFavorite.vue'
import scanAllLoadings from '@/views/Home/mainComponent/scanAllLoadings.vue'

import {useAsideList} from "@/Pinia/store/asideList";
import {storeToRefs} from "pinia";
import {getCurrentInstance, onMounted, ref, render, watch} from "vue";


export default {
  setup() {
    const {proxy} = getCurrentInstance()
    const asideList = storeToRefs(useAsideList())

    const currentComponent = function () {
      console.log("currentComponent", asideList.current.value)
      return `${asideList.current.value}`
    }
    watch(() => asideList.current.value,
        (value, prev) => {
          /* ... */
          currentComponent();
        }
    )
    return {
      asideList,
      currentComponent
    }
  },
  components: {
    scanFiles,
    scanAllPhotos,
    scanAllCash,
    scanAllFavorite,
    scanAllLoadings
  },
}
</script>

<style scoped>


</style>