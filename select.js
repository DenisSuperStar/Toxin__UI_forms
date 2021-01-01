const templated = (default_text, content_data = [], selected_item) => {
    let placeholder = default_text ?? 'Дата прибытия'
    const items = content_data.map(item => {
        let cm_cls = '';
        if (item.id == selected_item) {
            placeholder = item.value;
            cls = 'selected';
        }

        return `
            <li class="select__item ${cm_cls}" data-type="item" data-value="${item.id}">${item.value}</li>
        `;
    });

    return `
        <div class="select__input" data-type="input">
            <div class="select__text" data-type="text">${placeholder}</div>
            <span class="select__icon" data-type="icon"></span>
        </div>
        <div class="select__dropdown">
            <ul class="select__list">${items.join('')}</ul>
        </div>
    `
}

class Select {
    constructor(target, options) {
        this.$container = document.querySelector(target);
        this.props = options;
        this.$el = null;
    }

    create(class_name) {
        this.$el = document.createElement('div');
        this.$el.setAttribute('class', class_name);
        this.$el.classList.add('close');
        this.$container.prepend(this.$el);

        this.current_item = null;
        this.$icon = null;
        this.$value = null;
        this.#template();
        this.#setup();

        return this;
    }

    #template() {
        const {content, selected} = this.props;
        this.current_item = selected;
        this.$el.innerHTML = templated(this.props.default, content, this.current_item);
    }

    get current() {
        return this.props.content.find(item => item.id == this.current_item);
    }

    toggle() {
        this.$icon.addEventListener('click', () => {
            this.$el.classList.toggle('close');
        });
    }

    _clickHandler(event) {
        const {type} = event.target.dataset;
        if ((type === 'input') || (type === 'icon')) {
            this.toggle();
        } else if (type === 'item') {
            const {value} = event.target.dataset;
            this.current_item = value;
            this.#handleState(value);
        }
    }

    #setup() {
        this._clickHandler = this._clickHandler.bind(this);
        this.$el.addEventListener('click', this._clickHandler);
        this.$icon = this.$el.querySelector('[data-type="icon"]');
        this.$value = this.$el.querySelector('[data-type="text"]');
    }

    #handleState(idx) {
        this.$value.innerHTML = this.current.value;
        this.$el
            .querySelectorAll('[data-type="item"]')
            .forEach(current => {
                current.classList.remove('selected');
            });
        this.$el
            .querySelector(`[data-value="${idx}"]`)
            .classList
            .add('selected');
    }
}

const arrive = new Select('.form__arrive', {
    default: 'ДД.ММ.ГГГГ',
    content: [
        {id: 1, value: '19.08.2019'},
        {id: 2, value: '17.11.1941'},
        {id: 3, value: '30.10.2018'},
        {id: 4, value: '17.11.2020'}
    ],
    selected: 0
});

arrive.create('select').toggle();

const arrive_selected = new Select('.form__arrive--selected', {
    default: 'ДД.ММ.ГГГГ',
    content: [
        {id: 1, value: '19.08.2019'},
        {id: 2, value: '17.11.1941'},
        {id: 3, value: '30.10.2018'},
        {id: 4, value: '17.11.2019'}
    ],
    selected: 1
});

arrive_selected.create('select').toggle();

const leave = new Select('.form__leave', {
    default: 'ДД.ММ.ГГГГ',
    content: [
        {id: 1, value: '19.08.2019'},
        {id: 2, value: '17.11.1941'},
        {id: 3, value: '30.10.2018'},
        {id: 4, value: '17.11.2020'}
    ],
    selected: 0
});

leave.create('select').toggle();

const leave_selected = new Select('.form__leave--selected', {
    default: 'ДД.ММ.ГГГГ',
    content: [
        {id: 1, value: '19.08.2019'},
        {id: 2, value: '23.08.2019'},
        {id: 3, value: '30.10.2018'},
        {id: 4, value: '17.11.2020'}
    ],
    selected: 2
});

leave_selected.create('select').toggle();

const guests = new Select('.form__guests', {
    default: 'Сколько гостей',
    content: [
        {id: 1, value: '1 гость'},
        {id: 2, value: '2 гостя'},
        {id: 3, value: '3 гостя'},
        {id: 4, value: '4 гостя'},
        {id: 5, value: '5 гостей'},
        {id: 6, value: '6 гостей'},
        {id: 7, value: '7 гостей'},
        {id: 8, value: '8 гостей'},
        {id: 9, value: '9 гостей'},
        {id: 10, value: '10 гостей'},
        {id: 11, value: '11 гостей'},
        {id: 12, value: '12 гостей'},
        {id: 13, value: '13 гостей'},
        {id: 14, value: '14 гостей'},
        {id: 15, value: '15 гостей'},
        {id: 16, value: '16 гостей'},
        {id: 17, value: '17 гостей'},
        {id: 18, value: '18 гостей'},
        {id: 19, value: '19 гостей'}
    ],
    selected: 0
});

guests.create('select select--long').toggle();

const guests_selected = new Select('.form__guests--selected', {
    default: 'Сколько гостей',
    content: [
        {id: 1, value: '1 гость'},
        {id: 2, value: '2 гостя'},
        {id: 3, value: '3 гостя'},
        {id: 4, value: '4 гостя'},
        {id: 5, value: '5 гостей'},
        {id: 6, value: '6 гостей'},
        {id: 7, value: '7 гостей'},
        {id: 8, value: '8 гостей'},
        {id: 9, value: '9 гостей'},
        {id: 10, value: '10 гостей'},
        {id: 11, value: '11 гостей'},
        {id: 12, value: '12 гостей'},
        {id: 13, value: '13 гостей'},
        {id: 14, value: '14 гостей'},
        {id: 15, value: '15 гостей'},
        {id: 16, value: '16 гостей'},
        {id: 17, value: '17 гостей'},
        {id: 18, value: '18 гостей'},
        {id: 19, value: '19 гостей'}
    ],
    selected: 3
});

guests_selected.create('select select--long').toggle();