// Vendor
import { computed, ComputedRef, getCurrentInstance } from 'vue';

// Types
import { BaseFormProps } from '../types/form';

// Composable
import { useLogger } from './logger';

export const useFormWidgetContext = (
	settings: BaseFormProps = {
		disabled: false,
		initialValue: undefined,
		label: undefined,
		name: 'input',
		placeholder: undefined,
		readonly: false,
		rules: undefined,
	}
) => {
	// Composable
	const instance = getCurrentInstance();
	const { warn } = useLogger();

	// Computed
	/**
	 * When we wrap the targeted "form-widget" component in a custom Vue component directly,
	 * the "form-widget" component that we need will become the custom components parent
	 * This can be recognized based on the missing internal __name prop,
	 * which is only visible on "native" components
	 */
	const targetEl = computed(() =>
		Object.hasOwn(instance?.parent?.type || {}, '__name')
			? instance?.parent
			: instance?.parent?.parent
	);

	const props: ComputedRef<BaseFormProps> = computed(() => {
		if (!targetEl.value?.props.name) {
			warn('Input name not specified. This can lead to undesired behaviour');
		}

		return {
			...settings,
			...targetEl.value?.props,
		};
	});

	return {
		...props.value,
	};
};
