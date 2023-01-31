<template>
<nav-bar/>
<div class="px-3 py-3 pt-md-5 pb-md-4 mx-auto">
	<router-view/>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/NavBar.vue';

export default defineComponent({
	components: {
		NavBar
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
}
</style>
