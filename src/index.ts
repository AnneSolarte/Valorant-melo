import "./components/export";
import styles from "./components/card/card.css"
import {traer_api} from "./components/data"
import Card, { Attribute } from "./components/card/card"

class AppContainer extends HTMLElement {
    ValList: Card[] = [];

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const dataVal = await traer_api();

        dataVal.forEach((data: any) => {
            const ValCard = this.ownerDocument.createElement("my-card") as Card;
                ValCard.setAttribute(Attribute.name, data.displayName);
                ValCard.setAttribute(Attribute.roles, data.role);
                ValCard.setAttribute(Attribute.back, data.background);
                ValCard.setAttribute(Attribute.img, data.fullPortrait);
                ValCard.setAttribute(Attribute.description, data.description);
                this.ValList.push(ValCard);
        });
        this.render(this.ValList);
    }

    render(ValList:any) {
        const ValCards = this.ownerDocument.createElement("section")
        ValCards.className = "ValSection"
        this.ValList.forEach((ValCard) => {
            ValCards.appendChild(ValCard)
        });
        this.shadowRoot?.appendChild(ValCards);

        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += ``

            const css = this.ownerDocument.createElement("style");
            css.innerHTML = styles;
            this.shadowRoot?.appendChild(css);
        }
    }
}

customElements.define("app-container", AppContainer);
