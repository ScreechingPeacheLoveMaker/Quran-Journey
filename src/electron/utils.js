export const isDev = process.env.NODE_ENV === 'development';

// export default function isDev(){
//     return process.env.NODE_ENV === 'development';
// }


export async function quranAPI(){
    try {
        const response= await fetch("http://api.alquran.cloud/v1/surah")
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}` )
        }
        const data = await response.json()
        const surahList = data.data
        return surahList

    } catch (error) {
        console.error("Error fetching data: ",error);
        throw error;
    }
}