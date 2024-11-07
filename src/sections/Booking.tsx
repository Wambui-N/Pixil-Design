"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";

// Define schema
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().optional(),
  companyName: z
    .string()
    .min(2, { message: "Company Name must be at least 2 characters." }),
  projectType: z
    .array(z.string())
    .min(1, { message: "Select at least one project type." }),
  desiredTime: z.string().min(1, { message: "Select a desired time." }),
  message: z
    .string()
    .min(1, { message: "How can we help you?" }),
});

// Define the form data type
type FormData = z.infer<typeof formSchema>;

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      projectType: [],
      desiredTime: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    try {
      setIsSubmitting(true);
      console.log("Form submitted:", values);
      setSubmitStatus("success");
      methods.reset();

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col responsive py-12">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-2 gap-12 w-full">
            <FormField
              control={methods.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Full Name" {...field} />
                  </FormControl>
                  <FormMessage className="text-orange" />
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage className="text-orange" />
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Phone Number (Optional)" {...field} />
                  </FormControl>
                  <FormMessage className="text-orange" />
                </FormItem>
              )}
            />
            <FormField
              control={methods.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Company Name" {...field} />
                  </FormControl>
                  <FormMessage className="text-orange" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={methods.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Project Type</FormLabel>
                <FormControl>
                  <div className="grid grid-cols-3 w-full gap-4">
                    {["Web site", "Branding", "SEO"].map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          value={type}
                          checked={field.value.includes(type)}
                          onChange={() => {
                            const newValue = field.value.includes(type)
                              ? field.value.filter((v) => v !== type)
                              : [...field.value, type];
                            field.onChange(newValue);
                          }}
                          className="w-5 h-5 rounded-full border border-grey accent-orange"
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </FormControl>
                <FormMessage className="text-orange" />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="desiredTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">Desired Time</FormLabel>
                <FormControl>
                  <div className="grid grid-cols-3 w-full gap-4">
                    {["1 month", "2-3 months", "3+ months"].map((time) => (
                      <label key={time} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value={time}
                          checked={field.value === time}
                          onChange={() => field.onChange(time)}
                          className="w-5 h-5 rounded-full border border-grey accent-orange"
                        />
                        <span>{time}</span>
                      </label>
                    ))}
                  </div>
                </FormControl>
                <FormMessage className="text-orange" />
              </FormItem>
            )}
          />
          <FormField
            control={methods.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="form-label">
                  Please tell us about your business and what you're looking to
                  achieve.
                </FormLabel>
                <FormControl>
                  <textarea
                    placeholder=""
                    {...field}
                    className="w-full p-2 border border-grey rounded-md"
                  />
                </FormControl>
                <FormMessage className="text-orange" />
              </FormItem>
            )}
          />
          <div className="inline-block w-full text-center">
            <Button
              className="w-auto bg-black text-white"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book a Free Consultation"}
            </Button>

            {submitStatus === "success" && (
              <p className="mt-4 text-blue">
                Thank you! We'll be in touch soon.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="mt-4 text-orange-500">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
