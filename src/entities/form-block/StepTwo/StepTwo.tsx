import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
} from "@/shared/components";
import { useFormContext } from "react-hook-form";

const StepTwo = () => {
	const form = useFormContext();

	return (
		<FormField
			control={form.control}
			name='stepTwoField'
			render={({ field }) => (
				<FormItem>
					<FormLabel>Step 2</FormLabel>
					<FormControl>
						<Input placeholder='step 2 placeholder' {...field} />
					</FormControl>
					<FormDescription>Enter some string here too</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default StepTwo;
