<template>
  <q-card v-ripple class="my-card" flat @click="addToCart(item)">
    <q-card-section horizontal class="col-12">
      <q-card-section class="q-pt-xs">
        <div class="text-h5 q-mt-sm q-mb-xs"
             style="overflow-x: hidden !important; white-space: nowrap !important; text-overflow: ellipsis !important; width: 250px;"
        >{{item.name}}</div>
        <div class="text-caption text-grey">
          {{item.description}}
        </div>
      </q-card-section>

    </q-card-section>
    <div class="row">
      <q-card-section class="col-8 flex flex-center text-orange text-weight-bolder">

        GHS{{item.selling_price}}

      </q-card-section>

      <q-card-section class="col-4 flex flex-center">
        <q-img
          class="rounded-borders"
          :src="'https://web.builtaccounting.com'+item.photo"
          height="80px"
          width="80px"
        />
      </q-card-section>
    </div>

  </q-card>

</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  name: 'item',
  methods: {
    addToCart (item) {
      item.invoice_quantity = 1
      item.invoice_amount = item.selling_price
      this.$store.state.mainStore.orderItems.push(item)
    }
  }
}
</script>

<style scoped>
  .my-card{
    margin: 5px;
    cursor: pointer;
  }

</style>
