import {defineStore} from 'pinia'

export const useBucketsStore = defineStore('buckets', {
    state: () => {
        return {
            "path":"",
            "currentBucket":{

            }
        }
    },
    // 计算属性
    getters:{

    }
})
