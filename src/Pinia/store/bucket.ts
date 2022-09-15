import {defineStore} from 'pinia'


export const
    useBucketsStore
        =

        defineStore(
            'buckets',
            {
                state: () => {
                    return {
                        "path": '',
                        "ip": "",
                        "fileTree": [
                            {
                                "name": "",
                                "path": "",
                                "child": [
                                    {
                                        "name": "",
                                        "path": "",
                                        "child": []
                                    },
                                ]
                            }
                        ],
                    }
                }

                ,
// 计算属性
                getters: {}
            })
