<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-6">
				<div class="card mb-3">
					<div class="row g-0">
						<div class="col-xl-4 profile_image rounded-start">
						</div>
						<div class="col-md-8">
							<div class="card-body">
								<h4 class="card-title"><strong>GeTtOo</strong></h4>
									<p class="card-text">
										<strong>SteamID:</strong> {{ $route.params.id }}<br>
										<strong>Discord:</strong> GeTtOo#0001<br>
										<strong>User group:</strong> Admin<br>
									</p>
								<p class="card-text"><small class="text-muted">Last connection: 3 mins ago</small></p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-lg-6">
				<div class="card mb-3">
					<div class="row g-0">
						<div class="card-body">
							<p>
								<a href="#" class="btn btn-primary btn-wrapper-end mx-1 my-1"><strong>Server 1</strong></a>
								<a href="#" class="btn btn-primary btn-wrapper-end mx-1 my-1"><strong>Server 2</strong></a>
								<a href="#" class="btn btn-primary btn-wrapper-end mx-1 my-1"><strong>Server 3</strong></a>
							</p>
							<div class="card card-body">
								<div class="card-text">
									<div class="row">
										<div class="col text-start">
											<strong>Last connect:</strong> 01.01.2023
										</div>
										<div class="col text-end">
											<strong>Total time:</strong> 2 daus
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container my-2">
		<div class="col">
			<div class="card">
				<div class="card-header">
					<h4><strong>Player stats on servers</strong></h4>
					<div class="col mx-2">
						<ul class="nav nav-pills justify-content-start">
							<li class="nav-item">
								<a class="btn btn-primary btn-wrapper-end m-2" href="#"><strong>Server 1</strong></a>
							</li>
							<li class="nav-item">
								<a class="btn btn-primary btn-wrapper-end m-2" href="#"><strong>Server 2</strong></a>
							</li>
							<li class="nav-item">
								<a class="btn btn-primary btn-wrapper-end m-2" href="#"><strong>Server 3</strong></a>
							</li>
						</ul>
					</div>
				</div>
				<div class="row my-2 mx-1">
					<div class="col-lg-4 mb-1">
						<ListGroup :value="statPlayers"/>
					</div>
					<div class="col-lg-8 mb-1">
						<ListGroup :value="statPlayers"/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container my-2">
		<div class="row">
			<div class="col-lg-4 mb-2">
				<ListGroup :value="statPlayers"/>
			</div>
			<div class="col-lg-4 mb-2">
				<ListGroup :value="statPlayers"/>
			</div>
			<div class="col-lg-4 mb-2">
				<ListGroup :value="statPlayers"/>
			</div>
		</div>
	</div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListGroup from '@/components/ListGroup.vue';
import IListItems from '@/types/IListItems';

const topPlayers: IListItems = {
	name: "Top Players", 
	list: [
		{name: "[1] Player 0", url: "1"},
		{name: "[1] Player 1", url: "1"},
		{name: "[1] Player 2", url: "1"},
		{name: "[1] Player 3", url: "1"},
		{name: "[1] Player 4", url: "1"},
	]
}

export default defineComponent({
	components: { ListGroup },
	data() {
		return {
			statPlayers: topPlayers
		}
	},
})
</script>

<style lang="scss" scoped>
	.profile_image {
		background-size:contain;
		background-repeat: no-repeat;
		background-image: url("https://avatars.cloudflare.steamstatic.com/595e9274eeacb30b3356a64af0c3e7d720550176_full.jpg");
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