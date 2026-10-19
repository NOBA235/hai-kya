import { Info } from "lucide-react";
import { DEMO_NOTICE } from "@/data/repository";

/** Always visible, never dismissible: this prototype uses invented data. */
export function DemoBanner() {
  return (
    <aside aria-label="Demo notice" className="border-b border-line bg-brand-wash">
      <p className="mx-auto flex max-w-3xl items-start gap-2 px-4 py-2 text-sm text-brand-deep sm:px-6">
        <Info aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
        <span className="text-balance">{DEMO_NOTICE}</span>
      </p>
    </aside>
  );
}
