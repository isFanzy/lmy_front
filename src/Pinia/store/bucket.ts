import {defineStore} from 'pinia'

export const useBucketsStore = defineStore('buckets', {
    state: () => {
        return {
            "path":""
        }
    },
    // 计算属性
    getters:{

    }
})
