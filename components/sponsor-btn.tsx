import { Heart } from "lucide-react";
import Link from "next/link";
import SponsorNavBtn from "./sponsor-nav-btn";

type SponsorBtnProps = {
  variant?: "default" | "outline";
  className?: string;
};

export const SponsorBtn = ({
  variant = "default",
  className,
}: SponsorBtnProps) => {
  return (
    <div id="sponsor-btn" className={`w-fit mt-5`}>
      <Link href="https://github.com/sponsors/oconva">
        <SponsorNavBtn variant="outline" />
      </Link>
    </div>
  );
};

export default SponsorBtn;
