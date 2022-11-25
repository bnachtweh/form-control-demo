<script setup lang="ts">
	// Vendor
	import { computed, ref } from 'vue';
	import { useForm } from 'vee-validate';

	// Components
	import FormWidget from './components/FormWidget.vue';
	import FormText from './components/FormText.vue';
	import FormChoice from './components/FormChoice.vue';
	import FormRow from './components/FormRow.vue';

	const module = 'app-container';

	const COLLEAGUE_VALUES = ['Jimmy', 'Jeroen', 'Dennis', 'Tom Dumoulin'];

	const { handleSubmit, values } = useForm();

	// REfs
	const submitted = ref(false);

	// Computed
	const moduleClasses = computed(() => [module, 'p-4']);

	// Methods
	const onSubmit = handleSubmit(() => (submitted.value = true));
</script>

<template>
	<div :class="moduleClasses">
		<h1 class="text-3xl font-bold">Form control composable</h1>

		<form @submit.prevent="onSubmit">
			<FormWidget label="Email" name="email" rules="required:E-mail|email">
				<FormText />
			</FormWidget>

			<FormRow class="flex gap-6">
				<FormWidget
					initial-value="Klaas"
					label="First name"
					name="firstName"
					rules="required"
				>
					<FormText />
				</FormWidget>
				<FormWidget label="Last name" name="lastName" rules="required">
					<FormText />
				</FormWidget>
			</FormRow>

			<FormRow>
				<FormWidget label="Drop it down" name="colleague">
					<FormChoice :options="COLLEAGUE_VALUES" />
				</FormWidget>
			</FormRow>

			<FormRow>
				<FormWidget
					label="Select some"
					name="colleague_2"
					rules="choiceEquals:Dennis,Jeroen"
				>
					<FormChoice expanded multiple :options="COLLEAGUE_VALUES" />
				</FormWidget>
			</FormRow>

			<FormRow>
				<FormWidget
					label="Who's your favourite colleague?"
					name="colleague_3"
					rules="choiceEquals:Dennis"
				>
					<FormChoice expanded :options="COLLEAGUE_VALUES" />
				</FormWidget>
			</FormRow>

			<FormRow>
				<button class="bg-teal-200 text-teal-900 p-4 rounded" type="submit">Submit</button>
			</FormRow>

			<FormRow>
				{{ values }}
			</FormRow>
		</form>
	</div>
</template>
