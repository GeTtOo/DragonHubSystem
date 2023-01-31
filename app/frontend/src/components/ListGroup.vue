<template>
<div class="card">
	<div class="card-header">
		{{value.name}}
	</div>
	<ul class="list-group list-group-flush">
		<li class="list-group-item" v-for="(item, id) in value.list" :key="id"> 
			<h6>{{ item.name }}</h6>
		</li>
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
	
</style>