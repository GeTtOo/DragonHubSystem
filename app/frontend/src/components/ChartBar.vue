<template>
	<div class="bg">
		<Line :data="data" :options="options"/>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default defineComponent({
	name: 'ChartBar',
	components: { Line },
	data() {
		return {
			data: {
				labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				datasets: [{
					label: 'Players',
					data: [10, 12, 6, 21, 8, 15, 3],
					fill: false,
					borderColor: '#2b3035',
					tension: 0.1
				},
				{
					label: 'New Players',
					data: [4, 6, 1, 14, 2, 11, 0],
					fill: false,
					borderColor: '#b0b2b5',
					tension: 0.1
				}]
			},
			options: {
				backgroundColor: '#fd7e14'
			}
		}
	},
})
</script>

<style lang="scss" scoped>
	.bg {
		background-color: $gray-100;
	}
</style>