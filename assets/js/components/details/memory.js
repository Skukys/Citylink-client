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
        ram: 4,
        value: null,
        chast: null,
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
      let res = await request('POST', '/memory', this.detail, true)
    }
  },
  //language=vue
  template: `
    <div class="content window flex">
    <div class="detail flex center">
      <div class="detail-form flex center column">
        <div class="detail-form__title">Память</div> 
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
            Type:
            <select name="brand" id="brand" v-model="detail.ram">
              <option v-for="item in ram" :value="item.id">{{item.name}}</option>
            </select>
          </label>
          <label>
            Value:
            <input type="text" placeholder="PCI slots" v-model="detail.value">
          </label>
          <label>
            Chast:
            <input type="text" placeholder="PCI slots" v-model="detail.chast">
          </label>
          <button @click="createDetail">Добавить</button>
        </div>
      </div>
    </div>
    <div class="detail__bg">
      <img src="assets/img/ram.jpg" alt="">
    </div>
    </div>
  `
}