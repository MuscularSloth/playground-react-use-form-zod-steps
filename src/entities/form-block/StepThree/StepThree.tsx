import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	RadioGroup,
	RadioGroupItem,
} from "@/shared/components";
import { useFormContext } from "react-hook-form";

const StepThree = () => {
	const form = useFormContext();

	return (
		<>
			<FormField
				control={form.control}
				name='shipment'
				render={({ field }) => (
					<FormItem className='space-y-3'>
						<FormLabel>Select shipment</FormLabel>
						<FormControl>
							<RadioGroup
								onValueChange={field.onChange}
								defaultValue={field.value || "UkrPoshta"}
								className='flex flex-col space-y-1'
							>
								<FormItem className='flex items-center space-x-3 space-y-0'>
									<FormControl>
										<RadioGroupItem value='UkrPoshta' />
									</FormControl>
									<FormLabel className='font-normal'>UkrPoshta</FormLabel>
								</FormItem>

								<FormItem className='flex items-center space-x-3 space-y-0'>
									<FormControl>
										<RadioGroupItem value='NovaPoshta' />
									</FormControl>
									<FormLabel className='font-normal'>NovaPoshta</FormLabel>
								</FormItem>

								<FormItem className='flex items-center space-x-3 space-y-0'>
									<FormControl>
										<RadioGroupItem value='InvalidShipping' />
									</FormControl>
									<FormLabel className='font-normal'>
										Invalid shipping
									</FormLabel>
								</FormItem>
							</RadioGroup>
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
		</>
	);
};

export default StepThree;
