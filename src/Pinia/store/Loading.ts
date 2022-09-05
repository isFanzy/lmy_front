import {defineStore} from 'pinia'

export const useLoading = defineStore('loading', {
    state: () => {
        return {
            "ifLoad":false
        }
    }

})
