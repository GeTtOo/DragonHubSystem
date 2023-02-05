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
				labels: [
					'22 January', '23 January', '24 January', '25 January', '26 January', '27 January', '28 January',
					'29 January', '30 January', '31 January', '1 February', '2 February', '3 February', '4 February'
				],
				datasets: [{
					label: 'Players',
					data: [
						10, 12, 6, 21, 8, 15, 3,
						10, 12, 6, 21, 8, 15, 3
					],
					//borderColor: '#2b3035',
					//backgroundColor: '#2b3035',
					borderColor: 'rgba(253, 126, 20, 80%)',
					backgroundColor: 'rgba(253, 126, 20, 80%)',
					tension: 0.3
				},
				{
					label: 'New Players',
					data: [
						4, 6, 1, 14, 2, 11, 0,
						4, 6, 1, 14, 2, 11, 0
					],
					//borderColor: '#fd7e14',
					//backgroundColor: '#fd7e14',
					borderColor: 'rgba(253, 126, 20, 35%)',
					backgroundColor: 'rgba(253, 126, 20, 35%)',
					tension: 0.3
				}]
			},
			options: {
				layout: {
					padding: 0
				},
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