"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
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
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signInData } from "@/constant";

const LoginForm = () => {
  const formSchema = z.object({
    name: z.string(),
    password: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Card className="animate-slide-up shadow-xl border-0">
      <CardHeader className=" flex flex-col gap-1">
        <CardTitle className="text-2xl text-center">Welcome Back</CardTitle>
        <CardDescription className="text-center">
          Enter your credentials to access the recruiting dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            {signInData.map(({ label, name, placeholder, type }, index) => (
              <FormField
                control={form.control}
                key={index}
                name={name as "name" | "password"}
                render={({ field }) => (
                  <FormItem className="flex flex-col gap-2">
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={placeholder}
                        type={type}
                        {...field}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="submit"
              className="w-full h-11 bg-primary hover:bg-primary/90"
            >
              Sign In
            </Button>
            <div className="text-center">
              <Button variant="link" className="text-sm text-primary">
                Forgot password?
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
