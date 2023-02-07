import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://<>.supabase.co";
const PUBLIC_KEY = "password";
//const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            console.log('Supabase Instance: ', supabase)
            return supabase.from("video")
                .select("*");
        }
    }
}