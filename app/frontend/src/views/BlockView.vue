<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-6 mx-auto">
				<BlockTable/>
			</div>
			<div class="col-lg-6 mx-auto">
				<BlockTable/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BlockTable from '@/components/BlockTable.vue';

export default defineComponent({
	name: "BlockView",
	components: {
		BlockTable
	},
})
</script>

<style lang="scss" scoped>

</style>