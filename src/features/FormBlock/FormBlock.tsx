import { StepFour, StepOne, StepThree, StepTwo } from "@/entities/form-block";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
	CombinedSchema,
	combinedSchema,
	FormFields,
} from "./constants/validationSchema";
import { Button } from "@/shared/components";

const getFieldsByStep = (step: number): Partial<FormFields>[] => {
	switch (step) {
		case 1:
			return ["stepOneField"];
		case 2:
			return ["stepTwoField"];
		case 3:
			return ["shipment"];
		case 4:
			return ["city", "street", "house", "department"];
		default:
			return [];
	}
};

const FormBlock = () => {
	const [step, setStep] = useState<number>(1);

	const form = useForm<CombinedSchema>({
		resolver: zodResolver(combinedSchema),
		defaultValues: {
			stepOneField: "",
			stepTwoField: "",
			shipment: "UkrPoshta",
			city: "",
			street: "",
			house: "",
			department: "",
		},
		mode: "onChange",
	});

	const onSubmit: SubmitHandler<{
		stepOneField: string;
		stepTwoField: string;
	}> = (data) => {
		console.log("Form Data", data);
	};

	const handleNext = async () => {
		const isValid = await form.trigger(getFieldsByStep(step));

		if (isValid) setStep(step + 1);
	};

	const handleBack = () => setStep(step - 1);

	const handleValidateStep = () => {
		form.trigger(getFieldsByStep(step));
	};

	const handleValidateForm = () => {
		form.trigger();
	};

	const handleResetErrors = () => {
		form.reset();
	};

	return (
		<>
			<FormProvider {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
					{step === 1 && <StepOne />}
					{step === 2 && <StepTwo />}
					{step === 3 && <StepThree />}
					{step === 4 && <StepFour />}
					<Button type='submit'>Submit</Button>
				</form>
			</FormProvider>
			<hr className='my-4' />
			<div className='py-4 flex gap-2'>
				<Button onClick={handleBack} disabled={step <= 1}>
					Back
				</Button>
				<Button onClick={handleNext} disabled={step >= 4}>
					Next
				</Button>
			</div>
			<div className='py-4 flex gap-2'>
				<Button onClick={handleValidateStep}>Validate step</Button>
				<Button onClick={handleValidateForm}>Validate form</Button>
				<Button onClick={handleResetErrors}>Reset form</Button>
			</div>
			<div className='py-4'>
				<pre>{JSON.stringify(form.formState.errors, null, 2)}</pre>
			</div>
		</>
	);
};

export default FormBlock;
