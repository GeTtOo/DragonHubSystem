<template>
<div class="row">
	<div class="col-lg">
		<div class="card">
			<div class="card-header text-center">
				<strong>News</strong>
			</div>
			<div class="list-group list-group-flush">
				<div class="list-group-item">
					<div class="card mb-3">
						<div class="row g-0">
							<div class="col-md-4 news_image rounded-start"></div>
							<div class="col-md-8">
								<div class="card-body">
									<h5 class="card-title">News 1</h5>
									<p class="card-text">The quick brown fox jumps over the lazy dog. Jackdaws love my big sphinx of quartz. Pack my box with five dozen liquor jugs.</p>
									<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
								</div>
							</div>
						</div>
					</div>
					<div class="card mb-3">
						<div class="row g-0">
							<div class="col-md-4 news_image rounded-start"></div>
							<div class="col-md-8">
							<div class="card-body">
								<h5 class="card-title">News 2</h5>
								<p class="card-text">The quick brown fox jumps over the lazy dog. Jackdaws love my big sphinx of quartz. Pack my box with five dozen liquor jugs.</p>
								<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: "NewsSlide"
})
</script>

<style lang="scss" scoped>
	.card-header {
		color: $white;
		background-color: $gray-800;
		border-bottom: 2px solid $orange-500;
	}

	.list-group-item {
		background-color: $gray-100;
	}

	.news_image {
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url("@/assets/dust2.jpg");
	}
</style>