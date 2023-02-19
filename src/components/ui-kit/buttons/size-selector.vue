<template>
	<div class="size-selector">18,5</div>
</template>

<script>
	export default {
		name: "SizeSelector",
	};
</script>

<style lang="scss" scoped>
	.size-selector {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 50px;
		height: 32px;
		background: #ffffff;
		box-shadow: 0 0 0 1px #dadada inset;
		color: #303030;

		&:hover {
			box-shadow: 0 0 0 1px #303030 inset;
		}
	}
	.pressed {
		background: #303030;
		color: #ffffff;
	}
</style>
