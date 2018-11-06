
<template>
  <q-page padding>
    <select-item ref='productModal'></select-item>
    <q-btn :disable="!productsLoaded"  @click="selectProduct()">select product</q-btn>
    <pre>{{selection}}</pre>
  </q-page>
</template>

<script>
import SelectItem from './select-item.vue'
export default {
  components: {SelectItem},
  name: 'home',
  data() {
    return {
      selection: {},
    }
  },
  async created() {
    await this.$store.dispatch('products/load')
  },
  computed: {
    productsLoaded() {
      return this.$store.getters['products/loaded']
    }
  },
  methods: {
    async selectProduct () {
      try {
        
        const products = this.$store.getters['products/all']
        this.selection = await this.$refs.productModal.open('myref', products)
        // do stuff with the selected item.
      } catch (error) {
        this.selection = error
      }
    },
    
  }
}
</script>
