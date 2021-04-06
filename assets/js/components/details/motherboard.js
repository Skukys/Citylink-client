export default {
  data(){
    return{
      brands:[],
      sockets: [],
    }
  },
  mounted(){
    this.brands = this.$root.brands
    this.sockets = this.$root.socket
  },
  //language=vue
  template: `
  <div class="content flex window">
    <div class="detail flex center">
      <div class="detail-form flex center column">
        <div class="detail-form__title">Материнская плата</div>
        <div class="detail-form__form">
          <input type="text" placeholder="Name">
          <select name="brand" id="brand">
            <option v-for="brand in brands" value="">{{brand.name}}</option>
          </select>
          <select name="brand" id="brand">
            <option v-for="socket in sockets" value="">{{socket.name}}</option>
          </select>
        </div>
      </div>
    </div>
    <div class="detail__bg">
      <img src="assets/img/motherboard.jpg" alt="">
    </div>
  </div>
  `
}