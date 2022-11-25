<script setup lang="ts">
	// Vendor
	import { useField } from 'vee-validate';
	import { computed, ref } from 'vue';

	// Composable
	import { useFormWidgetContext } from '../composable/form';

	const module = 'form-choice';

	// Macros
	withDefaults(
		defineProps<{
			expanded?: boolean;
			multiple?: boolean;
			options?: string[];
		}>(),
		{
			expanded: false,
			multiple: false,
		}
	);

	// Refs
	const _checked = ref([]);

	// Composable
	const { disabled, initialValue, name, rules } = useFormWidgetContext();
	const { value: inputValue, handleChange } = useField(name, rules, {
		initialValue,
	});

	// Computed
	const moduleClasses = computed(() => ({
		[module]: true,
	}));
</script>

<template>
	<div v-if="expanded" :class="moduleClasses">
		<label v-for="(option, key) in options" :key="key">
			<input
				v-if="multiple"
				:id="`${name}_${key}`"
				v-model="_checked"
				type="checkbox"
				:value="option"
				@change="() => handleChange(_checked)"
			/>
			<input
				v-else
				v-model="inputValue"
				:disabled="disabled"
				false-value=""
				:name="name"
				type="radio"
				:value="option"
			/>
			{{ option }}
		</label>
	</div>
	<select
		v-else
		v-model="inputValue"
		:class="moduleClasses"
		:disabled="disabled"
		:multiple="multiple"
		:name="name"
	>
		<option v-for="(option, key) in options" :key="key" :value="option">
			{{ option }}
		</option>
	</select>
</template>

<style scoped>
	label + label {
		margin-inline-start: 1rem;
	}
</style>
