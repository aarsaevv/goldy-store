<template>
	<div class="add-to-cart">в корзину</div>
</template>

<script>
	export default {
		name: "AddToCart",
	};
</script>

<style lang="scss" scoped>
	.add-to-cart {
		display: flex;
		width: 250px;
		height: 56px;
		background: #303030;
		color: white;
		text-transform: uppercase;
		justify-content: center;
		align-items: center;

		&:hover {
			background: #505050;
		}
	}

	.pressed {
		background: #000000;
	}
</style>
