<template>
<nav-bar/>
<main class="flex-shrink-0">
	<div class="px-3 py-3 pt-md-3 pb-md-4 mx-auto">
		<router-view/>
	</div>
</main>
<footer-bar/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';

export default defineComponent({
	components: {
		NavBar, FooterBar
	},
	mounted() {
		document.title = 'SAT'
	}
});
</script>

<style lang="scss">
html, body {
	background-color: $gray-200;
	height: 100%;
	margin: 0;
	padding: 0;
}

#app {
	background-color: $gray-200;
	font-family: var(--bs-body-font-family), Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	flex-direction: column;
	height: 100%;
}
</style>
