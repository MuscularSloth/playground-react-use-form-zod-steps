import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	Input,
	FormMessage,
} from "@/shared/components";
import { useFormContext } from "react-hook-form";

const StepFour = () => {
	const form = useFormContext();

	const currentShipment = form.getValues("shipment");

	return (
		<>
			<FormField
				control={form.control}
				name='city'
				render={({ field }) => (
					<FormItem>
						<FormLabel>City</FormLabel>
						<FormControl>
							<Input placeholder='City' {...field} />
						</FormControl>
						<FormMessage />
					</FormItem>
				)}
			/>
			{currentShipment === "NovaPoshta" ? (
				<FormField
					control={form.control}
					name='department'
					render={({ field }) => (
						<FormItem>
							<FormLabel>department</FormLabel>
							<FormControl>
								<Input placeholder='department' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			) : (
				<>
					<FormField
						control={form.control}
						name='street'
						render={({ field }) => (
							<FormItem>
								<FormLabel>street</FormLabel>
								<FormControl>
									<Input placeholder='street' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='house'
						render={({ field }) => (
							<FormItem>
								<FormLabel>house</FormLabel>
								<FormControl>
									<Input placeholder='house' {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</>
			)}
		</>
	);
};

export default StepFour;
