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

const StepOne = () => {
	const form = useFormContext();

	return (
		<FormField
			control={form.control}
			name='stepOneField'
			render={({ field }) => (
				<FormItem>
					<FormLabel>Step 1</FormLabel>
					<FormControl>
						<Input placeholder='step 1 placeholder' {...field} />
					</FormControl>
					<FormDescription>Enter some string here</FormDescription>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default StepOne;
