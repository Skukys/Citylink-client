export default {
    //language=vue
    template: `
    <div class="content flex center window">
      <div class="form flex">
        <div class="form__left flex center">
          <div class="form__bg"><img src="assets/img/bg.jpg" alt=""></div>
          <div class="form__logo">Make Pc</div>
        </div>
        <div class="form__right flex column">
          <div class="form__header flex">
            <nav class="form__nav flex">
              <a @click="$root.changePage('register')">Регистрация</a>
              <a class="active">Вход</a>
            </nav>
            <div class="form__home">
              <a @click="$root.changePage('home')">На главную</a>
            </div>
          </div>
          <div class="form__main flex column center">
            <div class="form__title">Вход</div>
            <div class="form__main-inputs flex column center">
              <input type="email" placeholder="Email">
              <input type="password" placeholder="Password">
            </div>
            <div class="form__buttons">
              <button>Вход</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
}