import MobileDrawerAuth from "./auth-button-wrapper";
import HeaderClient from "./header-client";

export const dynamic = "force-dynamic"

export default function Header() {
    return <HeaderClient authSlot={<MobileDrawerAuth />} />;
}

