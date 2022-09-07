import {defineStore} from 'pinia'

export const userightClickStore = defineStore('rightClick', {
    state: () => {
        return {
            "ifShow": false,
            "list": [
                {
                    name: "新建", router: "", isabled: "true", son: [
                        {name: "新建文件夹", router: "/newPackege", isabled: "true", son: []},
                        {name: "新建文件", router: "/newFile", isabled: "true", son: []},
                        {name: "新建 .txt", router: "/newTXT", isabled: "true", son: []},
                        {name: "新建 .md", router: "/newMarkdown", isabled: "true", son: []},
                    ]
                },
                {
                    name: "下载", router: "/download", isabled: "true", son: []
                },
                {
                    name: "上传", router: "/upload", isabled: "true", son: []
                },
                {
                    name: "收藏", router: "/like", isabled: "true", son: []
                },
                {
                    name: "重命名", router: "/rename", isabled: "true", son: []
                },
                {
                    name: "移动到", router: "/move", isabled: "true", son: []
                },
                {
                    name: "查看详细信息", router: "/details", isabled: "true", son: []
                },
                {
                    name: "放入回收站", router: "/delete", isabled: "true", son: []
                }
            ]
        }
    }

})
