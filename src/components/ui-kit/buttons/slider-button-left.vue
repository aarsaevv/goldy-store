<template>
	<div class="slider-button"></div>
</template>

<script>
	export default {
		name: "SliderButtonLeft",
	};
</script>

<style lang="scss" scoped>
	.slider-button {
		width: 54px;
		height: 54px;
		box-shadow: 0 0 0 1px #303030 inset;
		border-radius: 50%;

		transform: rotate(180deg);
		&::before {
			content: url(../../../assets/images/arrow-slider.svg);
			position: relative;
			top: 18px;
			left: 18px;
		}
		&:hover {
			background: #f5f5f5;
		}
		// &:hover::before {
		// 	animation: moveArrowOnPress 0.3s forwards ease-out;
		// }
	}

	// .pressed {

	// }

	// @keyframes moveArrowOnPress {
	// 	from {
	// 		left: 18px;
	// 	}
	// 	to {
	// 		left: 26px;
	// 	}
	// }
</style>
