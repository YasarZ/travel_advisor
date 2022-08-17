import axios from "axios";



export const getPlacesData = async (type, sw, ne) => {
    try {
        const { data: { data  } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': '455db63b6cmsh23a1d1edc64dd16p1af289jsn90a20ee9b41b',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });
        return data;
    } catch(error) {
        console.log(error)
    }
}