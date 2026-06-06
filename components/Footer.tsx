import { COMPANY, NAV_LINKS, WHATSAPP } from "@/lib/constants";

const services = ["Transporte de Cargas", "Paletes PBR Certificados"];

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black px-5 py-14 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <a href="#inicio" className="inline-flex items-center">
            <span className="font-heading text-lg font-extrabold tracking-[0.14em] text-white">
              <span className="text-brand-accent">GB</span> | {COMPANY.logoText.replace("GB | ", "")}
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-zinc-400">
            Transporte de cargas e paletes PBR certificados para empresas que exigem padrão,
            pontualidade e compromisso.
          </p>
        </div>

        <div>
          <h3 className="font-heading text-xl font-black uppercase text-white">Serviços</h3>
          <ul className="mt-5 space-y-3 text-sm text-zinc-400">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-xl font-black uppercase text-white">Links rápidos</h3>
          <ul className="mt-5 space-y-3 text-sm text-zinc-400">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-brand-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-xl font-black uppercase text-white">Contato</h3>
          <address className="mt-5 not-italic text-sm leading-7 text-zinc-400">
            <p>
              {COMPANY.name} | {COMPANY.address} | {COMPANY.phoneDisplay}
            </p>
            <p className="mt-3">CNPJ: {COMPANY.cnpj}</p>
            <p className="mt-3">
              Instagram:{" "}
              <a
                href={COMPANY.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="text-brand-accent transition hover:text-brand-accent"
              >
                {COMPANY.instagramHandle}
              </a>
            </p>
            <p>
              WhatsApp:{" "}
              <a
                href={WHATSAPP.general}
                target="_blank"
                rel="noreferrer"
                className="text-brand-accent transition hover:text-brand-accent"
              >
                {COMPANY.phoneDisplay}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-zinc-900 pt-6 text-sm text-zinc-500">
        © 2025 Grupo Baronne. Todos os direitos reservados.
      </div>
    </footer>
  );
}
