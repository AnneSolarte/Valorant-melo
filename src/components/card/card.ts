import styles from "./card.css"

export enum Attribute {
    "name" = "name",
    "roles" = "roles",
    "img" = "img",
    "back" = "back",
    "description" = "description",

}

class Card extends HTMLElement {
    name?: string;
    roles?: string;
    img?: string;
    back?: string;
    description?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute, null> = {
            roles: null,
            name: null,
            img: null,
            back: null,
            description: null,
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {

                default:
                this[propName] = newValue;
                break;
            }

            this.render();
        }

        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = ``

                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);

                this.shadowRoot.innerHTML += `
                <section class="cardSection">
                    <img class="backImg" src="${this.back}">
                    <div class="divSection">
                        <img class="characterImg" src="${this.img}">
                        <div class="divInfo">
                            <div class="namerol">
                                <h1 class="name">${this.name}</h1>
                                <h3 class="role">${this.roles}</h3>
                            </div>
                            <p class="descrip">${this.description}</p>
                        </div>
                    </div>
                </section>
                `;
            }
        }
    }

customElements.define("my-card", Card);
export default Card;
