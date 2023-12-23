import { Button, Input } from '../..';
import { Component } from '../../../core';
import { IComponent } from '../../../interfaces';

export class ModalWindow implements IComponent {
  private component: Component;
  private titleInput: Input;
  private descriptionInput: Input;
  private priceInput: Input;
  private addBtn: Button;

  constructor(addProductEvent: {}) {
    this.titleInput = new Input({
      attrs: {
        placeholder: 'Enter title',
        className: 'search__input',
      },
    });
    this.descriptionInput = new Input({
      attrs: {
        placeholder: 'Enter desc',
        className: 'search__input',
      },
    });
    this.priceInput = new Input({
      attrs: {
        placeholder: 'Enter price',
        className: 'priceInput',
      },
    });

    this.addBtn = new Button({
      textContent: 'add product',
      className: 'search__btn',
      events: addProductEvent,
    });

    this.component = new Component({
      tagName: 'ModalWindow',
      className: 'ModalWindow',
      children: [
        this.getTitleInput(),
        this.getDescriptionInput(),
        this.getPriceInput(),
        this.getAddBtn(),
      ],
    });
  }

  getComponent(): HTMLElement | HTMLInputElement {
    return this.component.getComponent();
  }

  getTitleInput() {
    return this.titleInput.getComponent();
  }

  getAddBtn() {
    return this.addBtn.getComponent();
  }

  getDescriptionInput() {
    return this.descriptionInput.getComponent();
  }

  getPriceInput() {
    return this.priceInput.getComponent();
  }

  reset() {
    this.getDescriptionInput().value = '';
    this.getTitleInput().value = '';
    this.getPriceInput().value = '';
  }
}
