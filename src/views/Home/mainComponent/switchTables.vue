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
          :left-default-checked="[2, 3]"
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
import { ref } from 'vue'
import type { VNode, VNodeProps } from 'vue'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = (): Option[] => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `部门 ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref(generateData())
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
div{
  border: 1px solid red;
}
.transfer-footer {
  margin-left: 15px;
  padding: 6px 5px;
}
</style>