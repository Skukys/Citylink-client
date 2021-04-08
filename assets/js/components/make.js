export default {
  methods: {
    closeModal() {
      let modal = document.querySelector('.make__full')
      modal.classList.add('close')
    }
  },
  //language=vue
  template: `
    <div class="content window">
    <div class="make__full flex center column">
      <h1 class="make__title">Соберите свой компьютер</h1>
      <button @click="closeModal">Начать</button>
    </div>
    <div class="make flex">
      <div class="make__left flex center">
        <div class="make-control flex center column">
          <div class="make-control__title">Выберите комплектующие</div>
          <ul class="make-control__items flex column center">
            <li class="make-control__item flex">
              <div class="item__image flex center">
                <img src="assets/img/icons/motherboard.png" alt="">
              </div>
              <div class="item__text">
                Материнская плата
              </div>
            </li>
            <li class="make-control__item flex">
              <div class="item__image flex center">
                <img src="assets/img/icons/motherboard.png" alt="">
              </div>
              <div class="item__text">
                Материнская плата
              </div>
            </li>
            <li class="make-control__item flex">
              <div class="item__image flex center">
                <img src="assets/img/icons/motherboard.png" alt="">
              </div>
              <div class="item__text">
                Материнская плата
              </div>
            </li>
            <li class="make-control__item flex">
              <div class="item__image flex center">
                <img src="assets/img/icons/motherboard.png" alt="">
              </div>
              <div class="item__text">
                Материнская плата
              </div>
            </li>
            <li class="make-control__item flex">
              <div class="item__image flex center">
                <img src="assets/img/icons/motherboard.png" alt="">
              </div>
              <div class="item__text">
                Материнская плата
              </div>
            </li>
            <li class="make-control__item flex">
              <div class="item__image flex center">
                <img src="assets/img/icons/motherboard.png" alt="">
              </div>
              <div class="item__text">
                Материнская плата
              </div>
            </li>
          </ul>
          <button>Завершить</button>
        </div>
      </div>
      <div class="make__right"></div>
    </div>
    </div>
  `
}