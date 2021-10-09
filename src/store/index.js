// store/index.js
import { createStore } from 'vuex'
import stack from './modules/stack'

const store = createStore({
    modules: {
        stack,
    },
})

export default store
