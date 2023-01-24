import {defineEventHandler} from "h3";

export default defineEventHandler(async (event:any)=>{
    return {"response" :  "success"};
});