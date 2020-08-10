<template>
  <div class="example">{{ message }}</div>
</template>

<script> 
    export default {    
        name: "Dashboard",    
        data() {    
            return {    
                user: {    
                    name: "User"    
                }    
            }    
        },    
        methods: {    
            getUserData: function() {    
                let self = this    
                fetch('api/user', {method: 'GET'})
                    .then((response) => {    
                        console.log(response.data.user)    
                        self.$set(this, "user", response.data.user)    
                    })    
                    .catch((errors) => {    
                        console.log(errors)    
                        this.$router.push('/insert'); 
                    })    
            }    
        },    
        mounted() {    
            this.getUserData()    
        }    
    }
</script>