import View from './View.js';
import icons from 'url:../../img/icons.svg';
import { element } from 'wd/lib/commands.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _successMessage = 'Recipe was succesfully uplaoded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toogleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toogleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toogleWindow.bind(this));
    this._overlay.addEventListener('click', this.toogleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  renderMessage(message = this._successMessage) {
    const markup = `
    <div class="add-recipe-message">
    <div class="message">
    <div>
       <svg>
          <use href="${icons}#icon-smile"></use>
       </svg>
    </div>
    <p>${message}</p>
    </div>;
    </div>
    `;

    this._window.insertAdjacentHTML('afterend', markup);
  }

  deleteMessage() {
    const element = document.getElementsByClassName('add-recipe-message');
    element[0].remove();
  }

  _generateMarkup() {}
}
export default new AddRecipeView();
