"use client"

import { formSchema } from "@/models/formSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { sendTransaction } from "@/services/sendTransaction"
import { useToast } from "./ui/use-toast"

export function TransferForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      address: ""
    },
  })
  const { toast } = useToast()

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const res = await sendTransaction(values)
    if (res.status === 200) {
      toast({
        title: res.message + " ✅",
      })
      form.reset()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder="0" {...field} type="number" min={0} onKeyDown={(e) => e.code === 'Minus' ? e.preventDefault() : ''}/>
              </FormControl>
              <FormDescription>
                Enter the amount you want to transfer.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="0x55d398326f99059fF775485246999027B3197955" {...field} />
              </FormControl>
              <FormDescription>
                Enter the address you want to transfer to.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
