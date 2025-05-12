import { env } from "@/config/env";

export async function getUnSplashImage(imagePrompt: string) {
    const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${encodeURIComponent(imagePrompt)}&client_id=${env.UNSPlASH_ACCESS_KEY}`
  );
  const data = await response.json();
  return data.urls?.thumb || "";
}