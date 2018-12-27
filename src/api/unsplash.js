import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{Authorization:'Client-ID YOUR_UNSPLASH_CLIENT_ID_HERE'}
})