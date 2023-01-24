import { defineStore } from 'pinia'

export interface INewsState {
    data: any
}

// google economic news
// @ts-ignore
const economic_url:any = `${process.env.URL}/api/news`

export const useNews = defineStore('news', {
    state: (): INewsState => ({
        data : [],
    }),
    actions: {
        async getNews() {
            try{
                const response = await fetch(economic_url)
                if (response.status !== 200)
                    throw new Error(`error when fetching news`)
                this.data = await response.json();
                console.log(this.data);
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
