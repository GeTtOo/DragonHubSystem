<template>
	<div class="container">
		<div class="row mb-3">
			<div class="col-lg mx-auto"><ChartBar/></div>
			<div class="col-lg mx-auto"><ChartBar/></div>
		</div>
		<div class="row mb-3">
			<h4><strong>Admins actions</strong></h4>
			<div class="col-lg-12 mx-auto"><InfoTable :data="data"/></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChartBar from '@/components/ChartBar.vue';
import InfoTable from '@/components/InfoTable.vue';
import IInfoTable from '@/types/IInfoTable';

const adminActions: IInfoTable = {
	title: ['Admin', 'Target', 'Action', 'Reason', 'Server', 'Date'],
	data: [
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 1' },
			{ type: '', row: 'Kick' },
			{ type: '', row: 'Test' },
			{ type: '', row: '[1] Сибирский Мишка AWP' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 2' },
			{ type: '', row: 'Kick' },
			{ type: '', row: 'Test' },
			{ type: '', row: '[1] Сибирский Мишка AWP' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 3' },
			{ type: '', row: 'Kick' },
			{ type: '', row: 'Test' },
			{ type: '', row: '[1] Сибирский Мишка AWP' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 4' },
			{ type: '', row: 'Kick' },
			{ type: '', row: 'Test' },
			{ type: '', row: '[1] Сибирский Мишка AWP' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 5' },
			{ type: '', row: 'Kick' },
			{ type: '', row: 'Test' },
			{ type: '', row: '[1] Сибирский Мишка AWP' },
			{ type: 'time', row: '01.02.2022' }
		],
	],
	pages: 1
}

export default defineComponent({
	name: 'AdminMain',
	components: { ChartBar, InfoTable },
	data() {
		return {
			data: adminActions
		}
	},
})
</script>

<style lang="scss" scoped>

</style>