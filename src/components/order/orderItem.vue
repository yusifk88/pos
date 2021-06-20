<template>
  <q-item>
    <q-item-section avatar>
      <q-img
        class="rounded-borders"
        :src="baseURL+item.photo"

      />

    </q-item-section>

    <q-item-section >
      <q-item-label lines="1">
        <span class="text-weight-bold">{{item.name}}</span>
      </q-item-label>

    </q-item-section>

    <q-item-section side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn v-if="item.invoice_quantity>1" class="gt-xs bg-grey-3" flat dense rounded icon="remove" />
        <q-btn v-else class="gt-xs bg-red" color="white" flat dense rounded icon="delete_outline" />

        <span class="q-pa-md"  >1</span>
        <q-btn class="gt-xs bg-grey-3"  size="md" flat dense round icon="add" />
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="text-grey-8 q-gutter-xs text-weight-bolder">
        GHS{{item.invoice_amount}}
      </div>
    </q-item-section>
  </q-item>

</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null
    }
  },
  name: 'orderItem',
  computed: {
    baseURL () {
      return this.$store.state.mainStore.baseURL
    }
  }
}
</script>

<style scoped>

</style>
