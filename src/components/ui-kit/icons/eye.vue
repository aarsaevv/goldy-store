<template>
	<div class="eye-icon"></div>
</template>

<script>
	export default {
		name: "EyeIcon",
	};
</script>

<style lang="scss" scoped>
	.eye-icon {
		width: 20px;
		height: 20px;
		background-color: #c9c9c9;
		mask: url(../../../assets/icons/eye.svg);

		&:hover {
			background-color: #979797;
		}
	}
</style>
