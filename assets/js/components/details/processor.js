import {request} from "../../api.js";

export default {
  data() {
    return {
      brands: [],
      sockets: [],
      ram: [],
      detail: {
        name: 'B550-A Pro',
        brand: 18,
        socket: 33,
        maxChast: 95,
        baseChast: 2,
        yad: 2,
        cash: 2,
        tdp: 2,
        image: null,
      },
    }
  },
  mounted() {
    this.brands = this.$root.brands
    this.sockets = this.$root.socket
    let file = document.querySelector('#file')
    let fileInput = document.querySelector('#fileInput')

    fileInput.addEventListener('click', ()=>{
      file.click()
    })
  },
  methods:{
    async createDetail(){
      this.detail.image = document.querySelector('#file').files[0]
      let res = await request('POST', '/processor', this.detail, true)
    }
  },
  //language=vue
  template: `
    <div class="content flex">
    <div class="detail flex center">
      <div class="detail-form flex center column">
        <div class="detail-form__title">Материнская плата</div> 
        <div class="detail-form__form flex column center">
          <label>
            Name:
            <input type="text" placeholder="Name" v-model="detail.name">
          </label>
          <div class="detail-form__file flex center" id="fileInput">
            <img src="assets/img/upload.png" alt="">
          </div>
          <input id="file" type="file">
          <label>
            Brand:
            <select name="brand" id="brand" v-model="detail.brand">
              <option v-for="brand in brands" :value="brand.id">{{brand.name}}</option>
            </select>
          </label>
          <label>
            Socket:
            <select name="brand" id="brand" v-model="detail.socket">
              <option v-for="socket in sockets" :value="socket.id">{{socket.name}}</option>
            </select>
          </label>
          <label>
            Base:
            <input type="text" placeholder="PCI slots" v-model="detail.baseChast">
          </label>
          <label>
            Max:
            <input type="text" placeholder="PCI slots" v-model="detail.maxChast">
          </label>
          <label>
            Yad:
            <input type="text" placeholder="PCI slots" v-model="detail.yad">
          </label>
          <label>
            Cash:
            <input type="text" placeholder="PCI slots" v-model="detail.cash">
          </label>
          <label>
            Tdp:
            <input type="text" placeholder="PCI slots" v-model="detail.tdp">
          </label>
          <button @click="createDetail">Добавить</button>
        </div>
      </div>
    </div>
    <div class="detail__bg">
      <img src="assets/img/motherboard.jpg" alt="">
    </div>
    </div>
  `
}