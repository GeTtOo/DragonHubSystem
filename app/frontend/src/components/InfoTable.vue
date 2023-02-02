<template>
<table class="table align-middle caption-top">
	<caption><strong>{{ data.name }}</strong></caption>
	<thead>
		<tr>
			<th scope="col" v-for="(item, index) in data.title" :key="index">{{ item }}</th>
		</tr>
	</thead>
	<tbody>
		<tr v-for="(rows, index) in data.data" :key="index">
			<template v-for="(col, number) in rows" :key="number">
				<th v-if="col.type === 'th'" scope="row">{{ col.row }}</th>
				<td v-else-if="col.type === 'time'" class="time expired">{{ col.row }}</td>
				<td v-else>{{ col.row }}</td>
			</template>
		</tr>
	</tbody>
	<tfoot>
		<td :colspan="data.title.length">
			<div class="row">
				<div class="col-4 d-grid gap-2 d-md-flex justify-content-md-start">
					<button class="btn btn-primary" type="button">
						<fa class="fa" icon="fa-solid fa-circle-arrow-left"/>
					</button>
				</div>
				<div class="col-4 d-grid gap-2 d-md-flex justify-content-md-center">
					<button class="btn btn-primary " type="button"><strong>1</strong></button>
				</div>
				<div class="col-4 d-grid gap-2 d-md-flex justify-content-md-end">
					<button class="btn btn-primary" type="button">
						<fa class="fa" icon="fa-solid fa-circle-arrow-right"/>
					</button>
				</div>
			</div>
		</td>
	</tfoot>
</table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import IInfoTable from '@/types/IInfoTable';

export default defineComponent({
	name: "InfoTable",
	props: { 
		data: { type: Object as PropType<IInfoTable>, required: true }
	}
})
</script>

<style lang="scss" scoped>
	caption {
		color: $black;
	}
	thead {
		color: $white;
		background-color: $gray-800;
		border-bottom: 2px solid $orange-500;
	}
	
	tbody {
		background-color: $gray-100;
	}

	tfoot {
		color: $white;
		background-color: $gray-800;
		border-top: 2px solid $orange-500;

		button {
			background-color: $orange-500 !important;
			border-color: $orange-500 !important;
		}
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

	.fa {
		font-size: large;
		display: inline-block;
		vertical-align: -.225em;
	}
</style>