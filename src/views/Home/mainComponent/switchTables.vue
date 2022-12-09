<template>
  <div class="container">
    <p style="text-align: center; margin: 0 0 20px">
      表单注入
    </p>
    <div style="text-align: center">
      <el-transfer
          v-model="leftValue"
          style="text-align: left; display: inline-block"
          filterable
          :left-default-checked="[]"
          :right-default-checked="[]"
          :render-content="renderFunc"
          :titles="['部门表', '总表']"
          :button-texts="['取消', '导入']"
          :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}',
      }"
          :data="data"
          @change="handleChange"
      >
        <template #left-footer>
          <el-button class="transfer-footer" size="small" disabled>Operation</el-button>
        </template>
        <template #right-footer>
          <el-button class="transfer-footer" size="small">注入所选</el-button>
        </template>
      </el-transfer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {getCurrentInstance, onMounted, reactive, ref} from 'vue'
import type {VNode, VNodeProps} from 'vue'

const {proxy} = getCurrentInstance()
const data: Option[] = reactive([])

interface Option {
  key: number
  label: string
  disabled: boolean
}

onMounted(() => {
  proxy.$axios.get("/api/readExcel/showAllOthers").then((res: any) => {
    const d = res.data.data;
    for (let i = 0; i < d.length; i++) {
      data.push({key:i,label:d[i].tableName,disabled:false})
    }
  })
})

const rightValue = ref([1])
const leftValue = ref([1])

const renderFunc = (
    h: (type: string, props: VNodeProps | null, children?: string) => VNode,
    option: Option
) => {
  return h('span', null, option.label)
}
const handleChange = (
    value: number | string,
    direction: 'left' | 'right',
    movedKeys: string[] | number[]
) => {
  console.log(value, direction, movedKeys)
}
</script>

<style scoped>
div {
  border: 1px solid red;
}

.transfer-footer {
  margin-left: 15px;
  padding: 6px 5px;
}
</style>
