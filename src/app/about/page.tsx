import { redirect } from "next/navigation";

/**
 * The standalone About "overview" hub was removed. `/about` now lands on the
 * company profile, which is the section's primary page.
 */
export default function AboutIndex() {
  redirect("/about/company");
}
