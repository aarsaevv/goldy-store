<template>
	<div class="location-icon"></div>
</template>

<script>
	export default {
		name: "LocationIcon",
	};
</script>

<style lang="scss" scoped>
	.location-icon {
		width: 12px;
		height: 16px;
		background-color: #303030;
		mask: url(../../../assets/icons/location.svg);

		&:hover {
			opacity: 0.5;
		}
	}
</style>
