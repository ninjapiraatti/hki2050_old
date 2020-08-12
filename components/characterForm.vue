<template>
	<div>
		{{ message }}
		<form action="#" @submit.prevent="onSubmit">
			<p v-if="errorsPresent" class="error">Please fill out all fields!</p>
			<ul class="form-fields">
				<li class="form-field"><input type="text" placeholder="Your Name" name="name" v-model="character.name" /></li>
				<li class="form-field"><input type="text" placeholder="adamjensen@tor.com" name="email" v-model="character.email" /></li> 
				<li class="form-field"><input type="password" placeholder="password" name="password" v-model="character.password" /></li>
				<li class="form-field"><textarea placeholder="Bio" name="bio" v-model="character.bio" /></li>
				<li class="form-field"><input type="number" placeholder="Strength" name="strength" v-model="character.basestats.strength" /></li>
				<li class="form-field"><input type="number" placeholder="Perception" name="perception" v-model="character.basestats.perception" /></li> 
				<li class="form-field"><input type="number" placeholder="Endurance" name="endurance" v-model="character.basestats.endurance" /></li> 
				<li class="form-field"><input type="number" placeholder="Charisma" name="charisma" v-model="character.basestats.charisma" /></li> 
				<li class="form-field"><input type="number" placeholder="Intelligence" name="intelligence" v-model="character.basestats.intelligence" /></li> 
				<li class="form-field"><input type="number" placeholder="Agility" name="agility" v-model="character.basestats.agility" /></li> 
				<li class="form-field"><input type="number" placeholder="Luck" name="luck" v-model="character.basestats.luck" /></li> 
				<li class="form-field"><input type="submit" class="button" value="Login" /></li>
			</ul>
		</form>    
	</div>
</template>

<script>
export default {
  name: 'characterform',
  props: {
    character: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: '',
		  email: '',
		  password: '',
		  email: '',
		  bio: '',
		  basestats: {
			strength: '',
			perception: '',
			endurance: '',
			charisma: '',
			intelligence: '',
			agility: '',
			luck: ''
		  }
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
      if (this.character.name === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.character);
      }
    }
  }
};
</script>