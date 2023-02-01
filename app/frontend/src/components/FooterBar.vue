<template>
<footer class="footer mt-auto py-3">
	<div class="container">
		<div class="row">
			<div class="col text-start">
				<strong>Project name</strong> &copy; 2023
			</div>
			<div class="col text-end">
				Powered by <strong>SAT</strong>
			</div>
		</div>
	</div>
</footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: "FooterBar"
})
</script>

<style lang="scss" scoped>
	footer {
		border-top: 2px solid $orange-500;
		background-color: $gray-800;
		color: $gray-500;
	}
</style>