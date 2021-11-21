import axios from "axios";
const url = 'http://localhost:5000/api/'

export default class API{

    static async login(userData) {
        const res = await axios.post(url, userData);
        return res.data;
    }


    static async signup(userData) {
        const res = await axios.post(url+"/signup", userData);
        return res.data;
    }

    static async meeting(data){
        const res = await axios.post(url+"/meeting", data);
        return res.data;
    }

    static async getMeeting(){
        const res = await axios.get(url+"/meeting");
        return res.data;
    }

    static async discussion(){
        const res = await axios.post(url+"/discussion");
        return res.data;
    }

}