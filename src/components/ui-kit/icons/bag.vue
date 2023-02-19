<template>
	<div class="bag-icon">
		<div class="bag-icon__icon"></div>
	</div>
</template>

<script>
	export default {
		name: "BagIcon",
	};
</script>

<style lang="scss" scoped>
	.bag-icon {
		width: 32px;
		height: 32px;
		display: flex;
		justify-content: center;
		align-items: center;

		&:hover {
			background: #f8f8f8;
		}
		&__icon {
			width: 16px;
			height: 17px;
			background-color: #303030;
			mask: url(../../../assets/icons/bag.svg);
		}
	}
</style>
