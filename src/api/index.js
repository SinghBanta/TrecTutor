import axios from 'axios';


export const getPlacesData = async (type, sw,ne)=>{
    try{
        const {data: { data }}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: '11.847676',
                bl_longitude: '109.095887',
                tr_longitude: '109.149359',
                tr_latitude: '12.838442',
          },
          headers: {
            'X-RapidAPI-Key': "c806756f51msh4b9fa660e4c6637p18b377jsnd70d421bcc3a",
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        
            console.log(data);
        return data;
    } catch (error){
        console.log(error)
    }
}