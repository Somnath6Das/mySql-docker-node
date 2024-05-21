import { createClient } from "redis";

let client;

export const initRedisClient = async () => {
    if(!client) {
        client = createClient();
        client.on("error", ()=> console.log("Error creating redis client"))
    }
    try {
        await client.connect();
    } catch (error) {
        console.log("Error occurred while initializing redis");
        throw error;
    }
}

export const getValue = async (key) => {
    try {
       const data = await client.json.get(`user:${key}`);
       return data; 
    } catch (error) {
         console.log("Error occurred while initializing redis");
         throw error;
    }
}

export const setValue = async (key, value) => {
  try {
    const data = await client.json.set(`user:${key}`, "$", value);
    return data;
  } catch (error) {
    console.log("Error occurred while initializing redis");
    throw error;
  }
};