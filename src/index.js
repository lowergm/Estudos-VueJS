import { defineCustomElement } from 'vue'
import AppContador from "./contador.vue";

customElements.define('app-contador', defineCustomElement(AppContador));
