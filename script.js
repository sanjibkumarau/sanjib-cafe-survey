var sanjibCafe = {
  init: function () {
    this.domCached()
    this.bindEvent()
    console.log(this);
  },
  domCached: function () {
    this.form = document.querySelector('form')
    this.thank = document.querySelector('#thank')
    this.thankBtn = document.querySelector('#thank button')
  },
  bindEvent: function () {
    this.form.addEventListener('submit', this.formSubmit.bind(this))
    this.thankBtn.addEventListener('click', this.formAgain.bind(this))
  },
  formSubmit: function (event) {
    event.preventDefault();
    this.form.className = 'd-none'
    this.thank.className = 'd-block'
    this.form.reset();
  },
  formAgain: function () {
    this.thank.className = 'd-none'
    this.form.className = 'd-block'
  }
}

sanjibCafe.init();