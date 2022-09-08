import {defineStore} from 'pinia'

export const useAsideList = defineStore('asideList', {
    state: () => {
        return {
            "current":"scanFiles",
            "list": [
                {
                    "index": "a",
                    "name": "相册",
                    "route": "/photo",
                    "imEmpty": true,
                    "ifShow": true,
                    "ifDisable": false
                },
                {
                    "index": "b",
                    "name": "回收站",
                    "route": "/photo",
                    "imEmpty": true,
                    "ifShow": true,
                    "ifDisable": false
                },
                {
                    "index": "c",
                    "name": "收藏夹",
                    "route": "/photo",
                    "imEmpty": true,
                    "ifShow": false,
                    "ifDisable": false
                },
                {
                    "index": "d",
                    "name": "传输",
                    "route": "/photo",
                    "imEmpty": true,
                    "ifShow": false,
                    "ifDisable": false
                }
            ]
        }
    }

})