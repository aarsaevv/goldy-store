<template>
	<div class="buy">купить в 1 клик</div>
</template>

<script>
	export default {
		name: "Buy",
	};
</script>

<style lang="scss" scoped>
	.buy {
		display: flex;
		width: 250px;
		height: 56px;
		background: #ffffff;
		box-shadow: 0 0 0 1px #303030 inset;
		color: #303030;
		text-transform: uppercase;
		justify-content: center;
		align-items: center;

		&:hover {
			background: #303030;
			color: #ffffff;
		}
	}

	.pressed {
		background: #000000;
	}
</style>
