<template>
	<nav class="navbar">
		<ul class="nav nav--mobile">
			<li class="nav-link">
				<a href="/">Home</a>
			</li>
			<li class="nav-link">
				<a href="/dashboard">Dashboard</a>
			</li>
			<li class="nav-link">
				<a href="/register">Register</a>
			</li>
			<li class="nav-link">
				<a href="/api/logout">Logout</a>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'Nav'
};
</script>