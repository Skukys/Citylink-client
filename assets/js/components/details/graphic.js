import {request} from "../../api.js";

export default {
  data() {
    return {
      brands: [],
      ram: [],
      detail: {
        name: 'B550-A Pro',
        brand: 18,
        image: null,
        power: null,
        memory: null,
        block: null,
        sli: null
      },
    }
  },
  mounted() {
    this.brands = this.$root.brands
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
      let res = await request('POST', '/graphic', this.detail, true)
    }
  },
  //language=vue
  template: `
    <div class="content window flex">
    <div class="detail flex center">
      <div class="detail-form flex center column">
        <div class="detail-form__title">Хранение</div> 
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
            Size:
            <input type="text" placeholder="PCI slots" v-model="detail.size">
          </label>
          <label>
            Type:
            <select name="brand" id="brand" v-model="detail.type">
              <option value="hdd">HDD</option>
              <option value="ssd">SSD</option>
            </select>
          </label>
          <label>
            Input:
            <select name="brand" id="brand" v-model="detail.input">
              <option value="hdd">SATA</option>
              <option value="ssd">M2</option>
            </select>
          </label>
          <button @click="createDetail">Добавить</button>
        </div>
      </div>
    </div>
    <div class="detail__bg">
      <img src="assets/img/storage.jpg" alt="">
    </div>
    </div>
  `
}