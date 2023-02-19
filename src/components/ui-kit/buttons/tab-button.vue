<template>
	<div class="tab-button">Серьги</div>
</template>

<script>
	export default {
		name: "TabButton",
	};
</script>

<style lang="scss" scoped>
	.tab-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 110px;
		height: 40px;
		border-radius: 21px;
		background: #f0f0f0;
		color: #303030;

		&:hover {
			background: #dddddd;
		}
	}
</style>
