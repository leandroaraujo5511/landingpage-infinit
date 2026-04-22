/** Ajuste o número para o WhatsApp oficial (DDI + DDD + número, sem símbolos). */
export const WHATSAPP_E164 = "5589994013162";

export const CONTACT_EMAIL = "contato@infinittech.com.br";

export const COMPANY_LEGAL_NAME =
	"LEANDRO GONCALVES DE ARAUJO INFINIT TECH E CONSULTORIA";

export const COMPANY_CNPJ = "64.882.714/0001-53";

/** Substitua pelos perfis oficiais quando disponíveis. */
export const SOCIAL = {
	linkedin: "https://www.linkedin.com/",
	instagram: "https://www.instagram.com/",
} as const;

export function whatsappLink(text: string): string {
	const q = encodeURIComponent(text);
	return `https://wa.me/${WHATSAPP_E164}?text=${q}`;
}
