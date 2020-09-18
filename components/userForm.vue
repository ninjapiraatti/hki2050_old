<template>
	<div>
		{{ message }}
		<form action="#" @submit.prevent="onSubmit">
			<p v-if="errorsPresent" class="error">Please fill out all fields!</p>
			<ul class="form-fields">
				<li class="form-field"><input type="text" placeholder="Username" name="name" v-model="user.name" /></li>
				<li class="form-field"><input type="text" placeholder="adamjensen@tor.com" name="email" v-model="user.email" /></li> 
				<li class="form-field"><input type="password" placeholder="password" name="password" v-model="user.password" /></li>
				<li class="form-field"><input type="submit" class="button" value="Register" /></li>
			</ul>
		</form>    
	</div>
</template>

<script>
export default {
  name: 'userform',
  props: {
    user: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: '',
		  email: '',
		  password: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.user.name === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.user);
      }
    }
  }
};
</script>