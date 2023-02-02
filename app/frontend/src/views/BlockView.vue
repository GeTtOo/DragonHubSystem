<template>
	<div class="container">
		<div class="row">
			<div class="col-xl-6 mx-auto">
				<InfoTable :data="tableMutes"/>
			</div>
			<div class="col-xl-6 mx-auto">
				<InfoTable :data="tableBans"/>
			</div>
		</div>
		<div class="col-xl-12">
			<InfoTable :data="tableBans"/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import InfoTable from '@/components/InfoTable.vue';
import IInfoTable from '@/types/IInfoTable';

const bans: IInfoTable = {
	name: 'Block list',
	title: ['Player', 'Administrator', 'Reason', 'Time'],
	data: [
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 1' },
			{ type: '', row: 'Big test reason just for test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 2' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 3' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 4' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 5' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 6' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 7' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 8' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 9' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 0' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		]
	],
	pages: 10
}

const mutes: IInfoTable = {
	name: 'Mute list',
	title: ['Player', 'Administrator', 'Type', 'Reason', 'Time'],
	data: [
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 1' },
			{ type: '', row: 'Global' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 2' },
			{ type: '', row: 'Voice' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 3' },
			{ type: '', row: 'Chat' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 4' },
			{ type: '', row: 'Chat' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 5' },
			{ type: '', row: 'Chat' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 6' },
			{ type: '', row: 'Chat' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 7' },
			{ type: '', row: 'Chat' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 8' },
			{ type: '', row: 'Chat' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 9' },
			{ type: '', row: 'Chat' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		],
		[
			{ type: 'th', row: 'Player 10' },
			{ type: 'th', row: 'Player 0' },
			{ type: '', row: 'Chat' },
			{ type: '', row: 'Test' },
			{ type: 'time', row: '01.02.2022' }
		]
	],
	pages: 10
}

export default defineComponent({
	name: "BlockView",
	components: {
		InfoTable
	},
	data() {
		return {
			tableBans: bans,
			tableMutes: mutes
		}
	}
})
</script>

<style lang="scss" scoped>

</style>