import {request} from "./api.js"
import './scripts.js'

import Home from './components/home.js'
import Register from './components/register.js'
import Login from './components/login.js'
import Make from './components/make.js'

import Processor from './components/details/processor.js'
import Motherboard from './components/details/motherboard.js'
import Memory from './components/details/memory.js'
import Storage from './components/details/storage.js'

window.app = new Vue({
  el: '#app',
  data() {
    return {
      page: 'make',
      brands:[],
      socket: [],
      ram: [],
      reyt: [],
    }
  },
  components: {
    Home, Register, Login, Motherboard, Processor, Memory, Storage, Make
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
      let ram = await request('GET', '/ram')
      this.ram = ram.json.body.ramTypes
      let reyt = await request('GET', '/reyt')
      this.reyt = reyt.json.body.reyt
    }
  }
})
