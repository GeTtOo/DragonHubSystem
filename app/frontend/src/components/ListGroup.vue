<template>
<div class="card">
	<div class="card-header">
		<strong>{{value.name}}</strong>
	</div>
	<ul class="list-group list-group-flush">
		<template v-for="(item, index) in value.list" :key="index">
			<router-link class="list-group-item list-group-item-action" :to="'users/' + item.url">
				<h6>{{ item.name }}</h6>
			</router-link>
		</template>
	</ul>
</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import IListItems from '@/types/IListItems'

export default defineComponent({
	name: 'ItemsList',
	props: { 
		value: { type: Object as PropType<IListItems>, required: true }
	}
})
</script>

<style lang="scss" scoped>
	.card {
		.card-header {
			color: $white;
			background-color: $gray-800;
			border-bottom: 2px solid $orange-500;
		}

		.list-group-item {
			background-color: $gray-100;
		}

		a:hover {
			color: $white;
			background-color: $orange-500;
			box-shadow:
			inset 
				0 -3em 3em rgba($gray-900, 0.1),
				0.3em 0.3em 1em rgba($gray-900, 0.1);
			text-shadow: none;
		}
	}
</style>