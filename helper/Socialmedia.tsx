import Link from "next/link";
import IconHelper from "@/helper/icon_helper";

export const Socialmedia = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: IconHelper.social.facebook,
      href: "https://www.facebook.com/photo/?fbid=598104994988064&set=a.598104968321400&__tn__=%3C",
    },
    {
      name: "Instagram",
      icon: IconHelper.social.instagram,
      href: "https://www.instagram.com/imarrt_official/?hl=en#",
    },
    {
      name: "WhatsApp",
      icon: IconHelper.social.whatsapp,
      href: "https://wa.me/918675450005",
    },
  ];

  return (
    <div className="flex gap-3 items-center">
      {socialLinks.map((s, i) => {
        const Icon = s.icon;
        return (
          <Link
            key={i}
            href={s.href}
            target="_blank"
            className="
              w-[38px] h-[38px] flex items-center justify-center
              bg-[#222] rounded-full
              transition-all duration-300 no-underline text-[#F8E22A]
              hover:bg-[#F8E22A] hover:text-[#111111] hover:-translate-y-[3px]
            "
          >
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
};
