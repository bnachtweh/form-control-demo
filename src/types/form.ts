enum FormLabelPosition {
	FLOATING = 'floating',
	STACKED = 'stacked',
}

type InputType =
	| 'date'
	| 'text'
	| 'email'
	| 'password'
	| 'number'
	| 'textarea'
	| 'toggle'
	| 'hidden';

type InputMode = 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';

interface FormLabelProps {
	text: string;
	position?: `${FormLabelPosition}`;
}

interface DateRange {
	minYear?: string;
	maxYear?: string;
}

interface PickerEntry {
	columnIndex: number;
	text?: string;
	value: string;
}

interface BaseFormProps {
	debounce?: number;
	disabled?: boolean;
	initialValue?: string | number | undefined;
	label?: FormLabelProps;
	name: string;
	placeholder?: string;
	readonly?: boolean;
	rules?: string;
}

interface FormTogglePayload {
	value: boolean;
	isTrusted: boolean;
}

interface FormEvent extends Event {
	target: HTMLInputElement | HTMLSelectElement;
}

export {
	DateRange,
	BaseFormProps,
	FormEvent,
	FormLabelProps,
	FormTogglePayload,
	InputMode,
	InputType,
	PickerEntry,
};
