
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// /**
// //  * Klasslarni birlashtirish uchun yordamchi funksiya
// //  * @param {...any} inputs 
// //  * @returns {string} 
// //  */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}