import { Product } from './Product'

import { Notify } from 'quasar'
import { uid } from 'quasar'

// let uid = uid()
export async function load(context) {
  if(context.state.loaded) {
    return
  }
  let products = []
  Notify.create({ message: 'products loading, please wait ...', type: 'positive' })

  for (let index = 0; index < 100; index++) {
    products.push(new Product(index, uid()))
  }
  return new Promise((resolve) => setTimeout(() => {
    context.commit('setProducts', { 'products': products })
    context.commit('setLoaded', { 'loaded': true })

    Notify.create({ message: 'products loaded', type: 'positive' })
    resolve()
  }
  , 100))
}
