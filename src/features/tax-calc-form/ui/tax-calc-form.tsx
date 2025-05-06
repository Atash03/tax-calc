import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { formSchema } from "../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "../../../components/ui";

export const TaxCalculatorForm = () => {
  const [tax, setTax] = React.useState<number | null>(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit({ totalTax, taxRate }: z.infer<typeof formSchema>) {
    setTax(totalTax * (taxRate / 100));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-slate-100 p-6 min-w-[365px] rounded-lg shadow-lg space-y-4"
      >
        <h1 className="text-center text-[24px]">Расчет суммы налога</h1>

        <FormField
          control={form.control}
          name="totalTax"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="totalTax">Сумма дохода</FormLabel>
              <FormControl>
                <Input
                  id="totalTax"
                  type="number"
                  placeholder="Введите сумму дохода"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="taxRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="taxRate">Ставка налога</FormLabel>
              <FormControl>
                <Input
                  id="taxRate"
                  type="number"
                  placeholder="Введите ставка налога"
                  {...field}
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Рассчитать</Button>

        {tax && (
          <div className="font-bold text-slate-950 text-[18px]">
            Сумма исчисленного налога:{" "}
            <span className="text-green-700">{tax.toFixed(2)} TMT</span>
          </div>
        )}
      </form>
    </Form>
  );
};
