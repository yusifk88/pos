<template>
  <q-layout view="hHr lpR fFf" class="bg-grey-2">

    <q-header class="bg-white text-black" v-if="!$store.state.HasUser" >
      <q-toolbar>
        <q-toolbar-title class="text-bold xs-hide sm-hide md-hide">
          Minimal POS
        </q-toolbar-title>
        <q-space/>

        <q-input
          standout
          dense
          rounded
          style="width: 450px"
          placeholder = "Search Item"
        >
          <template v-slot:append>
            <q-icon name="search"></q-icon>
          </template>
        </q-input>
        <q-space/>
        <q-btn
          flat
          class="bg-grey-2 text-grey-10 q-ma-md"
          round
        >
         <q-icon name="dashboard"/>

        </q-btn>

    <q-btn
          flat
          class="bg-grey-2 text-grey-10"
          rounded
        >
          Help <q-icon name="help_outline"/>

        </q-btn>

    <q-btn
          flat
          class="bg-grey-2 text-grey-10"
          rounded
        >
          Logout <q-icon name="logout"/>

        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer :width=450 v-if="!$store.state.HasUser" show-if-above side="right" v-model="right">
      <q-toolbar>
        <q-toolbar-title class="text-bold">
           Current Order
        </q-toolbar-title>
        <q-btn  class="bg-red-1 text-red" flat rounded >Clear All</q-btn>
        <q-btn  round class="bg-grey-2 text-black text-grey-10 q-ma-md" icon="settings" flat ></q-btn>
      </q-toolbar>
        <order/>
    <order-summary></order-summary>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import order from '../components/order/index'
import OrderSummary from '../components/order/OrderSummary'
export default {
  components: {
    OrderSummary,

    order
  },
  data () {
    return {
      right: false
    }
  },
  computed: {
    /**
     * @return {boolean}
     */
    HasUser () {
      return this.$store.state.HasUser
    }
  },
  mounted () {
    console.log(this.HasUser)
  }
}
</script>
