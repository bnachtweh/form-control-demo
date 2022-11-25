<script setup lang="ts">
	// Vendor
	import { computed } from 'vue';

	const module = 'form-row';

	// Computed
	const moduleClasses = computed(() => [module, 'mb-6', 'flex', 'gap-6']);
</script>

<template>
	<div :class="moduleClasses">
		<slot />
	</div>
</template>
