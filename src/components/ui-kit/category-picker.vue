<template>
	<div>
		<div v-for="image in this.images" class="category-picker"></div>
	</div>
</template>

<script>
	export default {
		name: "CategoryPicker",
		props: {},
		computed: {
			imageSources() {
				return this.images;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.category-picker {
		width: 200px;
		height: 259px;
		background: #f8f8f8;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
