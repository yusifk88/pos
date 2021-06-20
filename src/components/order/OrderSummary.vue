<template>
  <div class="q-pa-lg">
    <q-card flat class="summary-card">
      <q-card-section>
        <q-list>
          <q-item>
            <q-item-section>
              Subtotal
            </q-item-section>
            <q-item-section side class="text-weight-bolder">
              GHS2,000.00
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              Discounts
            </q-item-section>
            <q-item-section side class="text-weight-bolder">
              -GHS5.00
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section>
              Sales Taxes
            </q-item-section>
            <q-item-section side class="text-weight-bolder">
              GHS2.5.00
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section class="text-h6">
              Total
            </q-item-section>
            <q-item-section side class="text-weight-bolder text-h6">
              GHS1,997.5
            </q-item-section>
          </q-item>

        </q-list>
      </q-card-section>
      <q-card-actions>
        <q-btn class="bg-orange full-width no-box-shadow" size="lg" flat unelevated rounded >Save</q-btn>
      </q-card-actions>

    </q-card>

  </div>

</template>

<script>
export default {
  name: 'OrderSummary'
}
</script>

<style scoped>
  .summary-card{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
  }

</style>
