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
        ram: 4,
        ramSlots: 4,
        tdp: 95,
        sata: 3,
        m2: 2,
        pci: 2,
        image: null
      },
    }
  },
  mounted() {
    this.brands = this.$root.brands
    this.sockets = this.$root.socket
    this.ram = this.$root.ram
    let file = document.querySelector('#file')
    let fileInput = document.querySelector('#fileInput')

    fileInput.addEventListener('click', ()=>{
      file.click()
    })
  },
  methods:{
    async createDetail(){
      this.detail.image = document.querySelector('#file').files[0]
      let res = await request('POST', '/motherboard', this.detail, true)
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
            <select name="socket" id="socket" v-model="detail.socket">
              <option v-for="socket in sockets" :value="socket.id">{{socket.name}}</option>
            </select>
          </label>
          <label>
            Ram-type:
            <select name="ram" id="ram" v-model="detail.ram">
              <option v-for="item in ram" :value="item.id">{{item.name}}</option>
            </select>
          </label>
          <label>
            Ram-slots:
            <input type="text" placeholder="Slots" v-model="detail.ramSlots">
          </label>
          <label>
            Max TDP:
            <input type="text" placeholder="Max TDP" v-model="detail.tdp">
          </label>
          <label>
            Sata slots: 
            <input type="text" placeholder="SATA slots" v-model="detail.sata">
          </label>
          <label>
            M2 slots:
            <input type="text" placeholder="M2" v-model="detail.m2">
          </label>
          <label>
            Pci slots:
            <input type="text" placeholder="PCI slots" v-model="detail.pci">
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