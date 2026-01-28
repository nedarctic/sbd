import { hasEnvVars } from "@/lib/utils";
import { AuthButton } from "./auth-button";
import { EnvVarWarning } from "./env-var-warning";
import { Suspense } from "react";

export default function MobileDrawerAuth() {
  if (!hasEnvVars) {
    return <EnvVarWarning />;
  }

  return (
    <Suspense>
      <AuthButton />
    </Suspense>
  );
}
