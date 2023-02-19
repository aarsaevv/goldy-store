<template>
	<div class="phone-icon"></div>
</template>

<script>
	export default {
		name: "PhoneIcon",
	};
</script>

<style lang="scss" scoped>
	.phone-icon {
		width: 16px;
		height: 16px;
		background-color: #303030;
		mask: url(../../../assets/icons/phone.svg);

		&:hover {
			opacity: 0.5;
		}
	}
</style>
