import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Landing Page",
    username: "Company Profile",
    body: "Halaman website yang bersih, cepat, dan responsif yang disesuaikan dengan merek dan tujuan Anda.",
    img: "/landing_page.png",
  },
  {
    name: "Company Profile",
    username: "Website Development",
    body: "Website profesional yang menampilkan identitas dan keunggulan bisnis Anda.",
    img: "/company_profile.png",
  },
  {
    name: "Online Store",
    username: "E-Commerce Development",
    body: "Toko online custom dengan sistem checkout mudah dan inventaris pintar.",
    img: "/online_store.png",
  },
  {
    name: "Admin Dashboard",
    username: "Web/App Development",
    body: "Dashboard interaktif untuk kelola data, pengguna, dan operasional bisnis.",
    img: "/admin_dashboard.png",
  },
  {
    name: "Booking System",
    username: "Web App Development",
    body: "Sistem reservasi online untuk klinik, bengkel, rental, dan layanan lainnya.",
    img: "/booking.png",
  },
  {
    name: "Custom System",
    username: "Tailored IT Solutions",
    body: "Saya membangun apa yang Anda butuhkan — dari ide hingga penerapan.",
    img: "/globe.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => {
  return (
    <figure className={cn("relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-2", "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]")}>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-2">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
