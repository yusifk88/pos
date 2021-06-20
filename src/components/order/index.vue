<template>
  <div class="order-container">
  <q-list>
    <order-item v-for="item in items" :key="item.id" :item="item"/>

  </q-list>
  </div>
</template>

<script>
import orderItem from './orderItem'
export default {
  components: { orderItem },
  name: 'index',
  computed: {
    items () {
      return this.$store.state.mainStore.orderItems
    }
  }
}
</script>

<style scoped>
  .order-container{

    height: 450px;
    overflow: auto;

  }

</style>
