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
    <div className="social-wrap">
      {socialLinks.map((s, i) => {
        const Icon = s.icon;
        return (
          <Link key={i} href={s.href} target="_blank" className="social-icon">
            <Icon size={18} />
          </Link>
        );
      })}
    </div>
  );
};