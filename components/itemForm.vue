<template>
	<div>
		{{ message }}
		<form action="#" @submit.prevent="onSubmit">
			<p v-if="errorsPresent" class="error">Please fill out all fields!</p>
			<ul class="form-fields">
				<li class="form-field"><input type="text" placeholder="Your Name" name="name" v-model="item.name" /></li>
				<li class="form-field"><input type="text" placeholder="id" name="id" v-model="item.id" /></li>
				<li class="form-field"><textarea placeholder="Bio" name="bio" v-model="item.bio" /></li>
				<li class="form-field"><input type="text" name="image" placeholder="Image URL" v-model="item.image" /></li>
				<li class="form-field"><input type="number" placeholder="Strength" name="strength" v-model="item.basestats.strength" /></li>
				<li class="form-field"><input type="number" placeholder="Perception" name="perception" v-model="item.basestats.perception" /></li> 
				<li class="form-field"><input type="number" placeholder="Endurance" name="endurance" v-model="item.basestats.endurance" /></li> 
				<li class="form-field"><input type="number" placeholder="Charisma" name="charisma" v-model="item.basestats.charisma" /></li> 
				<li class="form-field"><input type="number" placeholder="Intelligence" name="intelligence" v-model="item.basestats.intelligence" /></li> 
				<li class="form-field"><input type="number" placeholder="Agility" name="agility" v-model="item.basestats.agility" /></li> 
				<li class="form-field"><input type="number" placeholder="Luck" name="luck" v-model="item.basestats.luck" /></li> 
				<li class="form-field"><input type="submit" class="button" value="Save" /></li>
			</ul>
		</form>    
	</div>
</template>

<script>
export default {
  name: 'itemform',
  props: {
    item: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: '',
		  id: '',
		  bio: '',
		  image: '',
		  dem: 100,
		  owner: JSON.parse(localStorage.getItem('user')),
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
      if (this.item.name === '') {
		this.errorsPresent = true;
      } else {
		this.$emit('createOrUpdate', this.item);
		this.$router.push('/dashboard'); 
      }
    }
  }
};
</script>