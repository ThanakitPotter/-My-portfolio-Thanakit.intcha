import { SiGithub, SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";

const socialLinks = [
  { href: "https://github.com/ThanakitPotter", Icon: SiGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/thanakit-intarapracha-81081a386/", Icon: SiLinkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com/Thanakitpotter/", Icon: SiFacebook, label: "Facebook" },
  { href: "https://www.instagram.com/potter_thanakit/", Icon: SiInstagram, label: "Instagram" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 text-center sm:text-left">
            &copy; {currentYear} Thanakit Intharapacha. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            {socialLinks.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-slate-400 hover:text-indigo-400 transition-colors"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}