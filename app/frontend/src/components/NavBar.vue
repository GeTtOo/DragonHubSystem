<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
	<div class="container d-flex flex-wrap">
		<a class="navbar-brand" href="#">
			<img src="../assets/logo.svg" width="30" height="30">
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNavDropdown">
			<ul class="navbar-nav me-auto">
				<li class="nav-item">
					<router-link class="nav-link" to="/">Home</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/about">Statistics</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/block">Block list</router-link>
				</li>
				<li class="nav-item">
					<router-link class="nav-link" to="/shop">Shop</router-link>
				</li>
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						Administration
					</a>
					<ul class="dropdown-menu">
						<li><router-link class="dropdown-item" to="/admin">Main</router-link></li>
						<li><router-link class="dropdown-item" to="/users">Users</router-link></li>
					</ul>
				</li>
			</ul>
			<ul class="navbar-nav">
				<li class="nav-item dropdown">
					<a class="nav-link login dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						<fa icon="fa-solid fa-user" />
					</a>
					<ul class="dropdown-menu dropdown-menu-lg-end">
						<li><span class="dropdown-item-text">GeTtOo</span></li>
						<li><span class="dropdown-item-text">Balance: 0$</span></li>
						<li><hr class="dropdown-divider"></li>
						<li><router-link class="dropdown-item" to="/user/12345">My profile</router-link></li>
						<li><router-link class="dropdown-item" to="/settings">Settings</router-link></li>
						<li><router-link class="dropdown-item" to="/logout">Logout</router-link></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'NavBar'
});
</script>

<style lang="scss" scoped>
	nav {
		border-bottom: 2px solid $orange-500;
	}
	.nav-link {
		color: $gray-100;
	}
	.router-link-active {
		color: $orange-500 !important;
	}
	.login {
		font-size: x-large;
	}
	.login:hover {
		color: $orange-500;
	}
</style>