import { defineStore } from 'pinia'

export interface INewsState {
    data: any
}

// google economic news
const economic_url = "./api/news"

export const useNews = defineStore('news', {
    state: (): INewsState => ({
        data : [],
    }),
    actions: {
        async getNews() {
            try{
                const response = await fetch(
                    `./api/news`
                )
                if (response.status !== 200)
                    throw new Error(`error when fetching news`)
                this.data = await response.json();
            }catch(e){
                console.log(`[ERROR] ${e}`)
            }
        }
    },
    getters:{
        getData(): any {
            return this.data;
        },
    }
})
