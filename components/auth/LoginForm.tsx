"use client";
import React from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signInData } from "@/constant";

const LoginForm = () => {
  const formSchema = z.object({
    name: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className=" flex flex-col gap-6 w-full animate-fade-in-up">
      <CardHeader className="text-center  flex flex-col gap-1 p-0">
        <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
          Login to access your hiring dashboard
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            {signInData.map(({ label, name, placeholder, type }, index) => (
              <FormField
                key={index}
                name={name as "name" | "password"}
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-1.5">
                    <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {label}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={placeholder}
                        type={type}
                        className="focus-visible:ring-2 focus-visible:ring-offset-1 transition-all duration-150"
                        required
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-xs" />
                  </FormItem>
                )}
              />
            ))}

            <Button
              type="submit"
              className="w-full h-11 font-medium text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:brightness-110 transition-all duration-150"
            >
              Sign In
            </Button>

            <div className="text-center">
              <Button
                variant="link"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Forgot password?
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </div>
  );
};

export default LoginForm;
