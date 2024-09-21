import { Keys } from "./../../../../node_modules/react-hook-form/dist/types/path/common.d";
import { z } from "zod";

const shipmentEnum = z.enum(["UkrPoshta", "NovaPoshta"], {
	errorMap: () => {
		return { message: "Select a valid shipment method" };
	},
});

export const stepOneSchema = z.object({
	stepOneField: z.string().min(1, "Step 1 is required"),
});

export const stepTwoSchema = z.object({
	stepTwoField: z.string().min(1, "Step 2 is required"),
});

export const stepThreeSchema = z.object({
	shipment: shipmentEnum,
});

export const stepFourSchema = z.object({
	city: z.string(),
	street: z.string(),
	house: z.string(),
	department: z.string(),
});

export const combinedSchema = z
	.object({})
	.merge(stepOneSchema)
	.merge(stepTwoSchema)
	.merge(stepThreeSchema)
	.merge(stepFourSchema)
	.superRefine((data, ctx) => {
		if (data.shipment === "UkrPoshta") {
			if (!data.city) {
				ctx.addIssue({
					code: "custom",
					message: "City is required",
					path: ["city"],
				});
			}
			if (!data.street) {
				ctx.addIssue({
					code: "custom",
					message: "Street is required",
					path: ["street"],
				});
			}
			if (!data.house) {
				ctx.addIssue({
					code: "custom",
					message: "House is required",
					path: ["house"],
				});
			}
		} else if (data.shipment === "NovaPoshta") {
			if (!data.city) {
				ctx.addIssue({
					code: "custom",
					message: "City is required",
					path: ["city"],
				});
			}
			if (!data.department) {
				ctx.addIssue({
					code: "custom",
					message: "Department is required",
					path: ["department"],
				});
			}
		}
	});

export type CombinedSchema = z.infer<typeof combinedSchema>;
export type FormFields = Keys<CombinedSchema>;
