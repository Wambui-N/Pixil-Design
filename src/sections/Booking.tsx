"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Analytics } from "@/lib/analytics";
import { toast } from "sonner";

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

const projectTypes = [
  { id: "website", label: "Web site" },
  { id: "branding", label: "Branding" },
  { id: "seo", label: "SEO" },
] as const;

const timeframes = [
  { id: "1month", label: "1 month" },
  { id: "2-3months", label: "2-3 months" },
  { id: "3plus", label: "3+ months" },
] as const;

// Define schema
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters." })
    .max(100, { message: "Name is too long." }),
  email: z
    .string()
    .email({ message: "Invalid email address." })
    .max(255, { message: "Email is too long." }),
  phone: z
    .string()
    .regex(/^\+?[\d\s-()]{0,20}$/, { message: "Invalid phone number format." })
    .optional(),
  companyName: z
    .string()
    .min(2, { message: "Company Name must be at least 2 characters." }),
  projectType: z
    .array(z.string())
    .min(1, { message: "Select at least one project type." }),
  desiredTime: z.string().min(1, { message: "Select a desired time." }),
  message: z.string().min(1, { message: "How can we help you?" }),
});

// Define the form data type
type FormData = z.infer<typeof formSchema>;

export function Booking() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const loadingToast = toast.loading("Submitting your request...", {
      duration: Infinity,
    });

    try {
      setIsSubmitting(true);

      Analytics.track("form_submission_started", {
        formType: "booking",
      });

      const response = await fetch("/api/submit-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      toast.dismiss(loadingToast);
      toast.success("Thanks for reaching out!", {
        description: "We'll get back to you within 24-48 hours.",
        duration: 5000,
      });
      // TODO send user welcome package
      // TODO enable tinycal booking
      // TODO Notify me when booking is made
      // TODO collect user email address

      methods.reset();
      Analytics.track("form_submission_success", {
        formType: "booking",
      });
    } catch (error) {
      console.error("Submission error:", error);

      toast.dismiss(loadingToast);
      toast.error("Something went wrong", {
        description: "Please try again or contact us directly.",
        duration: 5000,
      });

      Analytics.track("form_submission_error", {
        formType: "booking",
        error: error instanceof Error ? error.message : "Unknown error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="flex flex-col responsive py-12"
      aria-labelledby="booking-title"
    >
      <div className="space-y-4 py-12 text-center">
        <h2 id="booking-title" className="text-3xl font-bold">
          Enough chit chat, Let&apos;s get to work
        </h2>
        <p>
          We are committed to delivering personalized services, which is why we
          only take on 3 projects at a time.
          <br /> Are you our next success story?
        </p>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="space-y-8"
          noValidate
        >
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
                  <div
                    className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4"
                    role="group"
                    aria-labelledby="project-type-label"
                  >
                    {projectTypes.map(({ id, label }) => (
                      <label
                        key={id}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          value={label}
                          checked={field.value.includes(label)}
                          onChange={() => {
                            const newValue = field.value.includes(label)
                              ? field.value.filter((v) => v !== label)
                              : [...field.value, label];
                            field.onChange(newValue);
                          }}
                          className="w-5 h-5 rounded-full border border-grey accent-orange"
                          aria-label={label}
                        />
                        <span>{label}</span>
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
                    {timeframes.map(({ id, label }) => (
                      <label key={id} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          value={label}
                          checked={field.value === label}
                          onChange={() => field.onChange(label)}
                          className="w-5 h-5 rounded-full border border-grey accent-orange"
                        />
                        <span>{label}</span>
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
              className="w-auto bg-black text-white uppercase disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="sr-only">Submitting form...</span>
                  <span className="animate-pulse">Submitting...</span>
                </>
              ) : (
                "Book a Free Consultation"
              )}
            </Button>
          </div>
        </form>
      </FormProvider>
    </section>
  );
}
