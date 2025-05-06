import { createFileRoute } from "@tanstack/react-router";
import { TaxCalculatorForm } from "../features/tax-calc-form";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="h-screen flex justify-center items-center">
      <TaxCalculatorForm />
    </div>
  );
}
