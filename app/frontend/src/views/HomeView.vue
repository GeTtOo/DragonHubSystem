<template>
<ServerStatus/>

<div class="container mt-3">
	<div class="row">
		<div class="col-lg-4 mb-2 mx-auto">
			<ListGroup :value="topPlayers"/>
		</div>
		<div class="col-lg-4 mb-2 mx-auto">
			<ListGroup :value="adminAction"/>
		</div>
		<div class="col-lg-4 mb-2 mx-auto">
			<ListGroup :value="lastPlayers"/>
		</div>
	</div>
</div>
<div class="container mt-3">
	<div class="row">
		<div class="col-lg mb-2 mx-auto">
			<NewsSlide/>
		</div>
	</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ServerStatus from '@/components/ServerStatus.vue';
import ListGroup from '@/components/ListGroup.vue';
import IListItems from '@/types/IListItems';
import NewsSlide from '@/components/NewsSlide.vue';

const lastPlayers: IListItems = {
	name: "Last Players", 
	list: [
		{id: 0, name: "Player 0", url: "1"},
		{id: 1, name: "Player 1", url: "1"},
		{id: 2, name: "Player 2", url: "1"},
		{id: 3, name: "Player 3", url: "1"},
		{id: 4, name: "Player 4", url: "1"},
		{id: 5, name: "Player 5", url: "1"},
		{id: 6, name: "Player 6", url: "1"},
		{id: 7, name: "Player 7", url: "1"},
		{id: 8, name: "Player 8", url: "1"},
		{id: 9, name: "Player 9", url: "1"}
	],
}

const adminAction: IListItems = {
	name: "Admin Actions", 
	list: [
		{id: 0, name: "Admin Player 10 Kick Player 0", url: "1"},
		{id: 1, name: "Admin Player 10 Kick Player 1", url: "1"},
		{id: 2, name: "Admin Player 10 Kick Player 2", url: "1"},
		{id: 3, name: "Admin Player 10 Kick Player 3", url: "1"},
		{id: 4, name: "Admin Player 10 Kick Player 4", url: "1"},
		{id: 5, name: "Admin Player 10 Kick Player 5", url: "1"},
		{id: 6, name: "Admin Player 10 Kick Player 6", url: "1"},
		{id: 7, name: "Admin Player 10 Kick Player 7", url: "1"},
		{id: 8, name: "Admin Player 10 Kick Player 8", url: "1"},
		{id: 9, name: "Admin Player 10 Kick Player 9", url: "1"}
	]
}

const topPlayers: IListItems = {
	name: "Top Players", 
	list: [
		{id: 0, name: "Player 0", url: "1"},
		{id: 1, name: "Player 1", url: "1"},
		{id: 2, name: "Player 2", url: "1"},
		{id: 3, name: "Player 3", url: "1"},
		{id: 4, name: "Player 4", url: "1"},
		{id: 5, name: "Player 5", url: "1"},
		{id: 6, name: "Player 6", url: "1"},
		{id: 7, name: "Player 7", url: "1"},
		{id: 8, name: "Player 8", url: "1"},
		{id: 9, name: "Player 9", url: "1"}
	]
}

export default defineComponent({
	name: 'HomeView',
	components: {
		ServerStatus, ListGroup, NewsSlide
	},
	data() {
		return {
			lastPlayers: lastPlayers,
			adminAction: adminAction,
			topPlayers: topPlayers
		}
	}
});
</script>

<style lang="scss" scoped>
	
</style>