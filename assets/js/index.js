import {request} from "./api.js";

import Home from './components/home.js'
import Register from './components/register.js'
import Login from './components/login.js'

import Motherboard from './components/details/motherboard.js'

window.app = new Vue({
  el: '#app',
  data() {
    return {
      page: 'home',
      brands:[],
      socket: [],
    }
  },
  components: {
    Home, Register, Login, Motherboard
  },
  mounted(){
    this.getInfo()
  },
  methods: {
    changePage(name) {
      this.page = name
    },
    async getInfo() {
      let brand = await request('GET', '/brands')
      this.brands = brand.json.body.brands
      let socket = await request('GET', '/socket')
      this.socket = socket.json.body.sockets
    }
  }
})