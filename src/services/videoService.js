import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://kgwqvombhxfnmayztzur.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtnd3F2b21iaHhmbm1heXp0enVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkzMzcyNDcsImV4cCI6MTk4NDkxMzI0N30.8zom-YYvLNA-A17ifWWEOW-MCEb0D-xz2JT4w6WWukA";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            console.log('Supabase Instance: ', supabase)
            return supabase.from("video")
                    .select("*");
        }
    }
}