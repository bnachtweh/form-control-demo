<script setup lang="ts">
	// Vendor
	import { useField } from 'vee-validate';
	import { computed, ref } from 'vue';

	// Composable
	import { useFormWidgetContext } from '../composable/form';

	const module = 'form-text';

	// Macros
	const props = withDefaults(
		defineProps<{
			debounce?: number;
			inputmode?:
				| 'none'
				| 'text'
				| 'tel'
				| 'url'
				| 'email'
				| 'numeric'
				| 'decimal'
				| 'search';
			pattern?: string;
			symbol?: string;
			type?:
				| 'date'
				| 'email'
				| 'number'
				| 'password'
				| 'search'
				| 'tel'
				| 'text'
				| 'url'
				| 'time'
				| 'week'
				| 'month'
				| 'datetime-local'
				| 'textarea';
		}>(),
		{
			debounce: 0,
			type: 'text',
		}
	);

	// Refs
	const componentSymbol = ref(JSON.stringify(props.symbol));

	// Composable
	const { disabled, initialValue, name, rules } = useFormWidgetContext();
	const { value: inputValue } = useField(name, rules, {
		initialValue,
	});

	// Computed
	const moduleClasses = computed(() => ({
		[module]: true,
		[`${module}--symbol`]: !!props.symbol,
		rounded: true,
		'p-2': true,
	}));
</script>

<template>
	<textarea
		v-if="type === 'textarea'"
		v-model="inputValue"
		:class="moduleClasses"
		:debounce="debounce"
		:disabled="disabled"
		:name="name"
	/>
	<input
		v-else
		v-model="inputValue"
		:class="moduleClasses"
		:debounce="debounce"
		:disabled="disabled"
		:inputmode="inputmode"
		:name="name"
		:pattern="pattern"
		:type="type"
	/>
</template>

<style lang="scss">
	$module: 'form-text';

	.#{$module} {
		&--symbol {
			&::before {
				display: inline;
				padding-inline-end: 4px;
				content: v-bind(componentSymbol);
			}
		}
	}
</style>
