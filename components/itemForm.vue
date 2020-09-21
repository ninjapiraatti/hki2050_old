<template>
	<div>
		{{ message }}
		<form action="#" @submit.prevent="onSubmit">
			<p v-if="errorsPresent" class="error">Please fill out all fields!</p>
			<ul class="form-fields">
				<li class="form-field"><input type="text" placeholder="Your Name" name="name" v-model="item.name" /></li>
				<li class="form-field"><input type="text" placeholder="id" name="id" v-model="item.condition" /></li>
				<li class="form-field"><textarea placeholder="Bio" name="bio" v-model="item.description" /></li>
				<li class="form-field"><input type="text" name="image" placeholder="Image URL" v-model="item.image" /></li>
				<li class="form-field"><input type="number" placeholder="Strength" name="strength" v-model="item.basestatmods.strength" /></li>
				<li class="form-field"><input type="number" placeholder="Perception" name="perception" v-model="item.basestatmods.perception" /></li> 
				<li class="form-field"><input type="number" placeholder="Endurance" name="endurance" v-model="item.basestatmods.endurance" /></li> 
				<li class="form-field"><input type="number" placeholder="Charisma" name="charisma" v-model="item.basestatmods.charisma" /></li> 
				<li class="form-field"><input type="number" placeholder="Intelligence" name="intelligence" v-model="item.basestatmods.intelligence" /></li> 
				<li class="form-field"><input type="number" placeholder="Agility" name="agility" v-model="item.basestatmods.agility" /></li> 
				<li class="form-field"><input type="number" placeholder="Luck" name="luck" v-model="item.basestatmods.luck" /></li> 
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
			condition: '',
			description: '',
			image: '',
			amount: '',
			damage: '',
			basestatmods: {
				strength: '',
				perception: '',
				endurance: '',
				charisma: '',
				intelligence: '',
				agility: '',
				luck: ''
			},
			skillmodifiers: {
				bruteforce: '',
				wrestle: '',
				melee: '',
				drunkenfight: '',
				firearms: '',
				investigation: '',
				outdoorsmanship: '',
				medical: '',
				lockpicking: '',
				mechanics: '',
				health: '',
				stealth: '',
				sustainedstrength: '',
				sex: '',
				persuasion: '',
				bartering: '',
				streetsmarts: '',
				distraction: '',
				performance: '',
				hacking: '',
				stealing: '',
				initiative: '',
				criticalhits: '',
				gambling: ''
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