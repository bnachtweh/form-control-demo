cmp
<script setup lang="ts">
	// Vendor
	import { computed, useAttrs, useSlots } from 'vue';
	import { useFieldError } from 'vee-validate';

	const module = 'o-form-widget';

	// Macros
	const props = withDefaults(
		defineProps<{
			initialValue?: string | number | boolean | null;
			label?: string;
			name: string;
			rules?: string;
		}>(),
		{
			initialValue: undefined,
		}
	);

	// Composable
	const slots = useSlots();
	const errorMessage = useFieldError(props.name);

	// Computed
	const moduleClasses = computed(() => [module, 'flex', 'flex-col', 'my-2']);
</script>

<template>
	<div :class="moduleClasses">
		<div class="flex flex-col gap-1">
			<label v-if="label" :for="name">
				{{ label }}
				<span v-if="rules?.includes('required')" class="text-indigo-400">*</span>
			</label>
			<slot />
		</div>
		<div v-if="slots.error || errorMessage" class="py-2">
			<span class="text-red-400">
				<slot name="error" />
				{{ errorMessage }}
			</span>
		</div>
	</div>
</template>
