<template>
  <q-page padding style="height: 700px; overflow: auto">
    <div class="row q-mb-md">
      <div class="col-md-12">
        <q-btn size="sm" @click="selected='all'; selectedItems = all" :color="selected=='all' ? 'white' : 'black'" :class="selected=='all' ? 'bg-orange' : ''" flat rounded >All</q-btn>

        <q-btn size="sm" :class="selected==item.name ? 'bg-orange' : ''"
               :color="selected==item.name ? 'white' : 'black'" :key="item.id"
               @click="selected = item.name; selectedItems = item.items" flat
               rounded
               v-for="item in activeCategories">{{item.name}}</q-btn>

      </div>
    </div>
    <div class="row">
      <div v-for="item in selectedItems" :key="item.id" class="col-lg-3 col-md-6">
    <item :item="item"/>

      </div>
    </div>
  </q-page>
</template>

<script>
import item from '../components/item'
export default {
  name: 'PageIndex',
  components: { item },
  data () {
    return {
      categories: [],
      selected: 'all',
      selectedItems: [],
      all: []
    }
  },
  mounted () {
    this.getItems()
  },
  computed: {
    activeCategories () {
      return this.categories.filter(item => {
        return item.items.length > 0
      })
    }
  },
  methods: {
    getItems () {
      this.$axios.get('postitems')
        .then(res => {
          this.categories = res.data.categories
          this.selectedItems = res.data.all
          this.all = res.data.all
        })
    }
  }
}
</script>
