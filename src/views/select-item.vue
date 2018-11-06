<template>

  <q-modal no-backdrop-dismiss class="row" ref="modal" :content-css="{height: 'auto', width: 'auto', minWidth: $q.platform.is.desktop ? '40vw': '100vw'}">
    <q-card class="col-12">
      <q-toolbar>
        <q-toolbar-title>{{title}}</q-toolbar-title>
      </q-toolbar>
      <q-card-main>
        <q-scroll-area style=" height: 350px;">
        <q-list highlight>
          <q-item @click.native.prevent="selectClicked(item)" v-for="item in items" :key="item.id">
            <q-item-main :label="item.name">
            </q-item-main>
          </q-item>
        </q-list>
        </q-scroll-area>
      </q-card-main>
      <q-card-actions align=end>
        <q-btn color="faded" @click="cancelClicked()">Cancel</q-btn>
      </q-card-actions>
    </q-card>
  </q-modal>

</template>

<script>

export default {
  name: 'SelectItem',
  props: {
    title: {
      type: String,
      required: false,
      default: 'Select an item'
    }
  },
  data() {
    return {
      callerReference: '',
      items: [],
      promise: {}
    }
  },
  methods: {
    async open (callerReference, items) {
      this.items = items
      this.promise = new Promise((resolve, reject) => {
        this.returnDataFromModal = resolve
        this.returnErrorFromModal = reject
      })
      this.callerReference = callerReference
      return await this.$refs.modal
        .show()
        .then(() =>  this.promise)
    },
    cancelClicked() {
      this.$refs.modal.hide()
      this.returnDataFromModal( {
          data: {},
          callerReference: this.callerReference
        })
    },
    selectClicked(item) {
      this.$refs.modal.hide()
      if (item.name === 'errorproduct') {
        this.returnErrorFromModal({
          callerReference: this.callerReference,
          error: 'simulated error: something went wrong while retrieving the item'
      })
      } else {
        this.returnDataFromModal( {
          data: item,
          callerReference: this.callerReference
        })
      }
    }
  }
}
</script>

<style>
</style>
