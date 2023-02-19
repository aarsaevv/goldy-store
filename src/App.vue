<template>
	<div id="app">
		<CategoryPicker images="images" />
	</div>
</template>

<script>
	import CategoryPicker from "./components/ui-kit/category-picker.vue";
	export default {
		name: "App",
		components: { CategoryPicker },
	};
</script>

<style lang="scss">
	@import "../node_modules/normalize.css/normalize.css";

	#app {
		font-family: Inter, sans-serif;
		font-weight: 400;
		font-size: 14px;
	}
</style>
