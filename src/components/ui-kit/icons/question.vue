<template>
	<div class="question-icon">
		<div class="question-icon__mark"></div>
	</div>
</template>

<script>
	export default {
		name: "QuestionIcon",
	};
</script>

<style lang="scss" scoped>
	.question-icon {
		width: 18px;
		height: 19px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #f0f0f0;

		&:hover {
			background: #d3d3d3;
		}
		&__mark {
			width: 6.5px;
			height: 11px;
			background-color: #303030;
			mask: url(../../../assets/icons/questionmark.svg);
		}
	}
</style>
