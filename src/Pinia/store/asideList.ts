import {defineStore} from 'pinia'

export const useAsideList = defineStore('asideList', {
    state: () => {
        return {
            "current": "scanFiles",
            "list": [
                {
                    "index": "f",
                    "name": "考勤总表",
                    "route": "/photo",
                    "imEmpty": true,
                    "ifShow": true,
                    "ifDisable": false
                },
                {
                    "index": "b",
                    "name": "表单注入",
                    "route": "/switchTable",
                    "imEmpty": true,
                    "ifShow": false,
                    "ifDisable": false
                },
                {
                    "index": "a",
                    "name": "相册",
                    "route": "/photo",
                    "imEmpty": true,
                    "ifShow": true,
                    "ifDisable": false
                },
                {
                    "index": "e",
                    "name": "OCR",
                    "route": "/photo",
                    "imEmpty": true,
                    "ifShow": true,
                    "ifDisable": false
                },
                {
                    "index": "c",
                    "name": "文件转换",
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