const app = Vue.createApp({

  data() {
    return {
      firstName: 'Jeff',
      lastName: 'Allison',
      gender: 'male',
      email: 'myemail@email.com',
      picture: 'https://placekitten.com/g/200/300'
    }
  }, 
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

      // console.log(results)
      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.gender = results[0].gender
      this.email = results[0].email
      this.picture = results[0].picture.large
    },
  }
})

app.mount('#app')