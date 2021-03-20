import axios from "axios";
class ApiTask {
  getData = async (text) => {
   
      const key = "08ac85c15110990b8f3829841f61de1d";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&lang=uk&appid=08ac85c15110990b8f3829841f61de1d`;
      const data = await axios.get(url);
      return data; 
    
  }

  getData5Days = async(text)=>{
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${text}&lang=ua&units=metric&APPID=08ac85c15110990b8f3829841f61de1d`;
    const data = await axios.get(url)
    return data
  }
};

export default new ApiTask();
