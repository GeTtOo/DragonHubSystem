<template>
<ServerStatus/>
<div class="container mt-3">
	<div class="row">
		<div class="col-lg mb-2 mx-auto">
			<NewsSlide/>
		</div>
	</div>
</div>
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
		{name: "Player 0", url: "1"},
		{name: "Player 1", url: "1"},
		{name: "Player 2", url: "1"},
		{name: "Player 3", url: "1"},
		{name: "Player 4", url: "1"},
	],
}

const adminAction: IListItems = {
	name: "Admin Actions", 
	list: [
		{name: "Admin Player 10 Kick Player 0", url: "1"},
		{name: "Admin Player 10 Kick Player 1", url: "1"},
		{name: "Admin Player 10 Kick Player 2", url: "1"},
		{name: "Admin Player 10 Kick Player 3", url: "1"},
		{name: "Admin Player 10 Kick Player 4", url: "1"},
	]
}

const topPlayers: IListItems = {
	name: "Top Players", 
	list: [
		{name: "Player 0", url: "1"},
		{name: "Player 1", url: "1"},
		{name: "Player 2", url: "1"},
		{name: "Player 3", url: "1"},
		{name: "Player 4", url: "1"},
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