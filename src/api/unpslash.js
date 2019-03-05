import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID ee3ff0ce1930c7282ac5a111ea4db969dbab75d817e92131ebb1e6ee8371bc45'
  }
});
