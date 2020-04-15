import axios from 'axios';


export default axios.create({
    baseURL:  'http://api.airpollutionapi.com/1.0',
    params: {
        APPID: 'h1v08vttjgi90hfgrn4o46ooa7'
    }
})