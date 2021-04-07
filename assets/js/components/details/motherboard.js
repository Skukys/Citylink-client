export default {
  data() {
    return {
      brands: [],
      sockets: [],
      ram: [],
    }
  },
  mounted() {
    this.brands = this.$root.brands
    this.sockets = this.$root.socket
    this.ram = this.$root.ram
  },
  script(){
    console.log('hello')
  },
  //language=vue
  template: `
    <div class="content flex window">
    <div class="detail flex center">
      <div class="detail-form flex center column">
        <div class="detail-form__title">Материнская плата</div>
        <div class="detail-form__form flex column center">
          <input type="text" placeholder="Name">
          <div class="detail-form__file flex center">
            <img src="assets/img/upload.png" alt="">
          </div>
          <input type="file">
          <select name="brand" id="brand">
            <option v-for="brand in brands" value="">{{brand.name}}</option>
          </select>
          <select name="socket" id="socket">
            <option v-for="socket in sockets" value="">{{socket.name}}</option>
          </select>
          <select name="ram" id="ram">
            <option v-for="item in ram" value="">{{item.name}}</option>
          </select>
          <input type="text" placeholder="Slots">
          <input type="text" placeholder="Max TDP">
          <input type="text" placeholder="SATA slots">
          <input type="text" placeholder="M2">
          <input type="text" placeholder="PCI slots">
          <button>Добавить</button>
        </div>
      </div>
    </div>
    <div class="detail__bg">
      <img src="assets/img/motherboard.jpg" alt="">
    </div>
    </div>
  `
}
