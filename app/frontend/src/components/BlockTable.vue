<template>
<table class="table">
	<thead>
		<tr>
			<th scope="col">Player</th>
			<th scope="col">Administrator</th>
			<th scope="col">Reason</th>
			<th scope="col">Time</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th scope="row">Player 1</th>
			<td scope="row">Player 10</td>
			<td>Test</td>
			<td class="time expired">01.02.23 18:00</td>
		</tr>
		<tr>
			<th scope="row">Player 2</th>
			<td scope="row">Player 10</td>
			<td>Test</td>
			<td class="time expired">01.02.23 16:00</td>
		</tr>
		<tr>
			<th scope="row">Player 3</th>
			<td>Player 10</td>
			<td>Test</td>
			<td class="time relevant">02.05.24 11:45</td>
		</tr>
		<tr>
			<th scope="row">Player 4</th>
			<td>Player 10</td>
			<td>Test</td>
			<td class="time relevant">12.02.25 18:00</td>
		</tr>
		<tr>
			<th scope="row">Player 5</th>
			<td>Player 10</td>
			<td>Test</td>
			<td class="time relevant">10.12.33 07:00</td>
		</tr>
		<tr>
			<th scope="row">Player 6</th>
			<td>Player 10</td>
			<td>Test</td>
			<td class="time expired">01.01.23 07:00</td>
		</tr>
		<tr>
			<th scope="row">Player 7</th>
			<td>Player 10</td>
			<td>Test</td>
			<td class="time expired">01.02.23 10:00</td>
		</tr>
		<tr>
			<th scope="row">Player 8</th>
			<td>Player 10</td>
			<td>Test</td>
			<td class="time relevant">23.10.33 21:15</td>
		</tr>
		<tr>
			<th scope="row">Player 9</th>
			<td>Player 10</td>
			<td>Test</td>
			<td class="time relevant">29.12.25 11:40</td>
		</tr>
		<tr>
			<th scope="row">Player 0</th>
			<td>Player 10</td>
			<td>Test</td>
			<td class="time expired">08.11.22 23:27</td>
		</tr>
	</tbody>
</table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: "BlockTable"
})
</script>

<style lang="scss" scoped>
	thead {
		color: $white;
		background-color: $gray-800;
		border-bottom: 2px solid $orange-500;
	}
	
	tbody {
		background-color: $gray-100;
	}

	.time {
		color: $white;
		text-align: center;
		font-weight: bold;
	}

	.expired {
		background-color: #63c930 !important;
	}

	.relevant {
		background-color: #dd3030 !important;
	}
</style>