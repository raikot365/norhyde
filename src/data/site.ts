export interface FormatConfig {
  id: 'botella' | 'botellita';
  label: string;
  shortLabel: string;
  capacity: string;
  price: number;
  description: string;
}

export interface ComboRule {
  format: 'botella' | 'botellita';
  qty: number;
  price: number;
  label: string;
  savings: number;
}

export function formatARS(amount: number): string {
  return `$${amount.toLocaleString('es-AR')}`;
}

export function buildWhatsAppUrl(message: string, phone: string = SITE.whatsappNumber): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const SITE = {
  brandName: 'Norhydé',
  tagline: 'Licores Artesanales',
  origin: 'Misiones, Argentina',
  heroTitle: 'Licores Artesanales de la Tierra Colorada',
  heroSubtitle:
    'Maceraciones lentas en pequeños lotes con frutos del monte misionero, frutas de chacra, hierbas nativas y especias seleccionadas.',
  // Actualizar con el número real de WhatsApp (código de país + área + número, sin '+' ni espacios)
  whatsappNumber: '5493755657859',
  whatsappDisplay: '+54 9 3755 657859',
  instagramHandle: '@licoresnorhyde',
  instagramUrl: 'https://instagram.com/licoresnorhyde/',
  email: 'hola@norhyde.com.ar',
  locationNote: 'Elaboración artesanal en Misiones · Envíos a todo el país a coordinar.',
  stockNotice:
    'Elaboración artesanal con insumos estacionales · Consultar stock disponible según temporada.',
  logoPath: '/assets/logo-norhyde.jpeg',
  formats: {
    botella: {
      id: 'botella',
      label: 'Botella grande',
      shortLabel: 'Botella',
      capacity: '250 ml',
      price: 15000,
      description: 'Ideal para compartir en sobremesas, celebraciones y regalos especiales.',
    },
    botellita: {
      id: 'botellita',
      label: 'Botellita',
      shortLabel: 'Botellita',
      capacity: '50 ml',
      price: 6000,
      description: 'Formato práctico para degustar sabores, armar combos o regalar recuerdos.',
    },
  } satisfies Record<'botella' | 'botellita', FormatConfig>,
  combos: [
    {
      format: 'botella',
      qty: 2,
      price: 28000,
      label: '2 Botellas grandes',
      savings: 2000,
    },
    {
      format: 'botellita',
      qty: 2,
      price: 11000,
      label: '2 Botellitas',
      savings: 1000,
    },
    {
      format: 'botellita',
      qty: 3,
      price: 15000,
      label: '3 Botellitas',
      savings: 3000,
    },
  ] satisfies ComboRule[],
} as const;
