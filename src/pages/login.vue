<template>
<q-page padding>
  <div class="row">
    <div class="col-md-4 q-mx-auto">
      <q-card flat class="q-mt-lg-md">
        <q-card-section class="text-center">
          <h4>Welcome to minimal POS</h4>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section>
        <q-form
          class="q-gutter-md"
          ref="login_form"
        >
          <q-input
            outlined
            v-model="email"
            label="E-Mail *"
            hint="Login E-Mail"
            type="email"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'E-mail is required to login',
                    val => val && /\S+@\S+\.\S+/.test(String(val).toLowerCase()) || 'Invalid E-mIal provided'
            ]"
          />

          <q-input
            :type="isPwd ? 'password' : 'text'"
            v-model="password"
            label="Password *"
            lazy-rules
            outlined
            :rules="[
          val => val && val.length > 0 || 'Password is required'
        ]"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

        </q-form>
        </q-card-section>

        <q-card-actions>
          <q-btn
            size="20px"
            rounded
            class="bg-warning full-width"
            flat
            @click="login"
            :loading="logingin"
          >Login</q-btn>
        </q-card-actions>
       </q-card>

    </div>

  </div>
  <q-ajax-bar
    ref="bar"
    position="top"
    color="warning"
    size="10px"
    skip-hijack
  />
</q-page>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: 'amloyal4life@gmail.com',
      password: 'password',
      isPwd: true,
      logingin: false
    }
  },
  methods: {
    login () {
      this.$refs.login_form.validate()
        .then(status => {
          if (status) {
            this.logingin = true
            const formData = new FormData()
            formData.append('email', this.email)
            formData.append('password', this.password)
            this.$axios.post('auth/login', formData)
              .then(res => {
                localStorage.setItem('token', res.data.access_token)
                this.getUser()
              })
              // eslint-disable-next-line node/handle-callback-err
              .catch(error => {
                this.logingin = false
              })
          }
        })
    },
    getUser () {
      const bar = this.$refs.bar
      bar.start()
      this.$axios.get('auth/user')
        .then(res => {
          bar.stop()
          this.$router.push({ path: '/' })
          this.$store.state.user = res.data
          this.$store.state.HasUser = true
        })
    }
  }

}
</script>

<style scoped>

</style>
