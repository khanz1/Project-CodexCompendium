# Pinia - State Management

## Installation

> Add Pinia for state management? **Yes**

or

> `npm i pinia`

## Usage

- change in `main.js` file to:

```jsx
// main.js
import { createPinia } from "pinia";

const app = createApp(App);
app.use(createPinia());
app.mount("#app");
```

- add `store/counter.js` file :

```jsx
// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // you can also define state like this
  state: () => ({ count: 0 })

  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    // also can be written like this
    doubleCount() {
      return this.count * 2
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

## Folder Structure

```jsx
src
└── stores
    ├── index.js          # (Optional) Initializes Pinia
    ├── module1.js        # 'module1' id
    ├── nested-module2.js # 'nested/module2' id
    ├── nested-module3.js # 'nested/module3' id
    └── nested.js         # 'nested' id
```

## Core Concepts (Options API / without setup())

- [`mapStores`](https://pinia.vuejs.org/cookbook/options-api.html#giving-access-to-the-whole-store)

```jsx
import { useUserStore } from '@/stores/user'
import { useProductStore } from '@/stores/product'
import { mapStores } from 'pinia'

computed: {
  ...mapStores(useUserStore, useProductStore),
}
```

- [`mapState`](https://pinia.vuejs.org/core-concepts/state.html#usage-with-the-options-api)

```jsx
import { useUserStore } from '@/stores/user'
import { mapState } from 'pinia'

computed: {
  ...mapState(useUserStore, ['username', 'todos'])
}
```

- [`mapWritableState`](https://pinia.vuejs.org/core-concepts/state.html#modifiable-state)

```jsx
import { useUserStore } from '@/stores/user'
import { mapWritableState } from 'pinia'

computed: {
  ...mapWritableState(useCounterStore, ['username', 'todos'])
}
```

- [`mapActions`](https://pinia.vuejs.org/core-concepts/actions.html#without-setup)

```jsx

import { useProductStore } from '@/stores/product'
import { mapActions } from 'pinia'

methods: {
  ...mapActions(useProductStore, ['addProduct'])
}
```

### Additional

- Using router on store

```jsx
import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(router);
app.use(pinia);

app.mount("#app");
```

- Composing Actions and async/await

```jsx
// stores
addProduct(payload) {
  return axios.post('http://localhost:3000/product', payload)
}

//components
methods: {
  ...mapActions(useProductStore, ['addProduct']),
  async addProductMethod() {
    try {
      await this.addProduct({ name: 'Product Name' })
      this.fetchProduct()
      this.$router.push('/')
    } catch (err) {
      console.log(err)
    }
  },
 addProductMethod() {
  this.addProduct({ name: 'Product Name' })
   .then(({ data }) => {
      this.$router.push('/')
   })
   .catch()
 }
}
```
