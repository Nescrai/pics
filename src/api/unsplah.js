import axios from "axios";

 export default axios.create({
    baseURL: 'https://api.unsplash.com' ,
    headers: {
        Authorization: 'Client-ID EpbpskVeY8h_jAU_woTbLHMabtXp7a9Zkk1f7OxcCAo'
      }
 });