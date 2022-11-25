// Vendor
import { defineRule } from 'vee-validate';
import { email, one_of, required } from '@vee-validate/rules';

export const setupGlobalFormRules = () => {
	defineRule('email', (value: string) => {
		return email(value) || 'E-mail is not valid';
	});

	defineRule('required', (value: string) => {
		return required(value) || 'Field is required';
	});

	defineRule('choiceEquals', (value: unknown, list: unknown[]) => {
		return one_of(value, list) || `Choice can only be ${list.join(' or ')}`;
	});
};
