import { ChatBubbleIcon, RocketIcon, TokensIcon } from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { MarqueeDemo } from "./MarqueeBento";

const features = [
  {
    Icon: RocketIcon,
    name: "Layanan Kami",
    description: "Solusi untuk web, mobile, dan desktop.",
    href: "/#layanan",
    cta: "Lebih lanjut",
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    background: <MarqueeDemo />,
  },
  {
    Icon: TokensIcon,
    name: "Tentang",
    description: "Kami berfokus pada solusi digital.",
    href: "/#tentang",
    cta: "Lebih lanjut",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: ChatBubbleIcon,
    name: "Kontak",
    description: "Mari diskusikan ide Anda.",
    href: "/#kontak",
    cta: "Lebih lanjut",
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
];

export function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
