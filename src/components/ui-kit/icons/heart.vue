<template>
	<div class="heart-icon"></div>
</template>

<script>
	export default {
		name: "HeartIcon",
	};
</script>

<style lang="scss" scoped>
	.heart-icon {
		width: 20px;
		height: 18px;
		background-color: #c9c9c9;
		mask: url(../../../assets/icons/heart.svg);

		&:hover {
			background-color: #979797;
		}
	}
</style>
