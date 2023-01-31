<template>
<div class="container">
	<div class="row">
		<div class="col-lg-4 mb-2 mx-auto">
			<ul class="list-group">
				<li class="list-group-item">
					<div class="container text-center">
						<div class="row text-start">
							<h5><strong>Server name</strong></h5>
						</div>
						<div class="row">
							<small class="text-start">
								<strong>Online: 10/16</strong>
							</small>
						</div>
						<div class="row">
							<div class="col-sm">
								<p class="text-start map"><small>de_dust2</small></p>
							</div>
							<div class="col">
								<a href="" class="btn btn-primary btn-wrapper-end"><strong>Connect</strong></a>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="col-lg-4 mb-2 mx-auto">
			<ul class="list-group">
				<li class="list-group-item">
					<div class="container text-center">
						<div class="row text-start">
							<h5><strong>Server name</strong></h5>
						</div>
						<div class="row">
							<small class="text-start">
								<strong>Online: 10/16</strong>
							</small>
						</div>
						<div class="row">
							<div class="col-sm">
								<p class="text-start map"><small>de_dust2</small></p>
							</div>
							<div class="col">
								<a href="" class="btn btn-primary btn-wrapper-end"><strong>Connect</strong></a>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<div class="col-lg-4 mb-2 mx-auto">
			<ul class="list-group">
				<li class="list-group-item">
					<div class="container text-center">
						<div class="row text-start">
							<h5><strong>Server name</strong></h5>
						</div>
						<div class="row">
							<small class="text-start">
								<strong>Online: 10/16</strong>
							</small>
						</div>
						<div class="row">
							<div class="col-sm">
								<p class="text-start map"><small>de_dust2</small></p>
							</div>
							<div class="col">
								<a href="" class="btn btn-primary btn-wrapper-end"><strong>Connect</strong></a>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ServerStatus'
});
</script>

<style lang="scss" scoped>
	.list-group {
		li {
			background-size: cover;
			background-repeat: no-repeat;
			background-image: linear-gradient(
				to left,
				rgba(255, 255, 255, 0),
				rgba($gray-900, 0.45) 20%
			), url("@/assets/dust2.jpg");
			color: $gray-100;
			text-shadow: 1px 1px 1px #000;
		}

		.col {
			display: flex;
			justify-content: flex-end;
		}

		.map {
			color: $gray-400;
			margin-bottom: 1px;
		}
	}

	.btn-primary {
		color: $gray-100;
		background-color: $orange-500 !important;
		border-color: $gray-900;
		box-shadow:
			inset 0 -3em 3em rgba($gray-900, 0.1),
				0 0  0 2px rgb($gray-900, 0.1),
				0.3em 0.3em 1em rgba($gray-900, 0.1);
		text-shadow: none;
	}
</style>