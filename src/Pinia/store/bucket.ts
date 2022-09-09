import {defineStore} from 'pinia'

export const useBucketsStore = defineStore('buckets', {
    state: () => {
        return {
            "path": '',
            "ip": ""
        }
    },
    // 计算属性
    getters: {}
})
