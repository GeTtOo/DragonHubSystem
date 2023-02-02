<template>
	<div class="container">
		<div class="row">
			<div class="col-8 mb-2">
				<h4><strong>Players</strong></h4>
			</div>
			<div class="col-4">
				<form class="d-flex" role="search">
					<input class="form-control" type="search" placeholder="Search" aria-label="Search">
				</form>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12 mx-auto">
				<InfoTable :data="players"/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InfoTable from '@/components/InfoTable.vue';
import IInfoTable from '@/types/IInfoTable';

const players: IInfoTable = {
	title: ['ID', 'Avatar', 'Name', 'Steam ID', 'Discord', 'IP', 'Balance', 'Lact connect', 'Time'],
	data: [
		[
			{ type: '', row: '1' },
			{ type: '', row: 'null' },
			{ type: '', row: 'Player 1' },
			{ type: '', row: '765432109812345' },
			{ type: '', row: 'Player1#2412' },
			{ type: '', row: '127.0.0.1' },
			{ type: '', row: '0' },
			{ type: '', row: '02.02.2023 08:35' },
			{ type: '', row: '2d:12h:54m:01s' }
		]
	],
	pages: 1
}

export default defineComponent({
	name: 'UsersList',
	components: {
		InfoTable
	},
	data() {
		return {
			players: players
		}
	}
})
</script>

<style lang="scss" scoped>

</style>