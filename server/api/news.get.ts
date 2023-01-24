import {defineEventHandler} from "h3";
import Parser from 'rss-parser';
const parser = new Parser();

const economic_url = "https://news.google.com/rss/search?q=%EB%B6%80%EB%8F%99%EC%82%B0&hl=ko&gl=KR&ceid=KR:ko.xml"
const investing_url = "https://kr.investing.com/rss/news_285.rss"
export default defineEventHandler(async (event:any)=>{
    console.log(getQuery(event));
    const [googleNews, investingNews] = await Promise.all([
        parser.parseURL(economic_url),
        parser.parseURL(investing_url)
    ]);

    console.log(googleNews);
    console.log(investingNews);

    return {"googleNews" :  googleNews ,"investingNews" : investingNews};
});