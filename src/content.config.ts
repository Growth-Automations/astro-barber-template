import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const imageSchema = z.object({
  src: z.string(),
  alt: z.string()
});

const settings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/settings' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    contact: z.object({
      phone: z.object({
        display: z.string(),
        value: z.string()
      }),
      email: z.string().email(),
      address: z.object({
        line1: z.string(),
        line2: z.string().optional(),
        city: z.string(),
        state: z.string(),
        postalCode: z.string()
      })
    }),
    hours: z.array(z.object({ label: z.string(), value: z.string() })),
    social: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
    navigation: z.array(z.object({ label: z.string(), href: z.string() }))
  })
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    description: z.string(),
    category: z.string().optional(),
    duration: z.string().optional(),
    price: z.string().optional(),
    ctaLabel: z.string().optional(),
    highlight: z.string().optional(),
    image: imageSchema.optional(),
    featured: z.boolean().default(false),
    processTitle: z.string().optional(),
    processDescription: z.string().optional(),
    processSteps: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          duration: z.string().optional()
        })
      )
      .optional(),
    processImage: imageSchema.optional()
  })
});

const pricing = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/pricing' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    price: z.string(),
    duration: z.string().optional(),
    description: z.string().optional(),
    features: z.array(z.string()),
    badge: z.string().optional(),
    recommended: z.boolean().default(false),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional()
  })
});

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    description: z.string(),
    category: z.string().optional(),
    featured: z.boolean().default(false),
    thumbnail: imageSchema,
    gallery: z.array(imageSchema).optional(),
    results: z.array(z.object({ label: z.string(), value: z.string() })).optional()
  })
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    specialty: z.string().optional(),
    image: imageSchema.optional(),
    socials: z.array(z.object({ label: z.string(), href: z.string() })).optional()
  })
});

const timeline = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/timeline' }),
  schema: z.object({
    year: z.string(),
    title: z.string(),
    description: z.string()
  })
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string().optional(),
    quote: z.string(),
    company: z.string().optional(),
    avatar: z.string().optional()
  })
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().optional()
  })
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      seo: z.object({ title: z.string(), description: z.string() }),
      hero: z
        .object({
          eyebrow: z.string().optional(),
          heading: z.string(),
          subheading: z.string(),
          cta: z.object({ label: z.string(), href: z.string() }).optional(),
          image: image().optional()
        })
        .optional()
    })
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.string(),
    category: z.string(),
    image: imageSchema.optional(),
    author: z.object({ name: z.string(), role: z.string().optional() }).optional(),
    cta: z.object({ label: z.string(), href: z.string() }).optional()
  })
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    price: z.string(),
    description: z.string(),
    highlight: z.string().optional(),
    image: imageSchema.optional(),
    gallery: z.array(imageSchema).optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false)
  })
});

const home = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/home' }),
  schema: z.object({
    hero: z.object({
      eyebrow: z.string().optional(),
      heading: z.string(),
      subheading: z.string(),
      highlight: z.string().optional(),
      primaryCta: z.object({ label: z.string(), href: z.string() }),
      secondaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
      image: imageSchema,
      accentImage: imageSchema.optional(),
      stats: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
      appointment: z
        .object({
          title: z.string(),
          description: z.string(),
          primaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
          phone: z.object({ display: z.string(), href: z.string() }).optional(),
          note: z.string().optional()
        })
        .optional()
    }),
    intro: z.object({ eyebrow: z.string().optional(), heading: z.string(), body: z.string() }),
    highlights: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string().optional(),
        eyebrow: z.string().optional()
      })
    ),
    featuredServices: z.array(z.string()).optional(),
    featuredPortfolio: z.array(z.string()).optional(),
    featuredProducts: z.array(z.string()).optional(),
    testimonialsHeading: z.string().optional(),
    offerStrip: z
      .object({
        eyebrow: z.string().optional(),
        badge: z.string().optional(),
        heading: z.string(),
        subheading: z.string().optional(),
        primaryCta: z.object({ label: z.string(), href: z.string() }),
        secondaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
        backgroundImage: imageSchema.optional(),
        patternWord: z.string().optional()
      })
      .optional(),
    pricing: z
      .object({
        eyebrow: z.string().optional(),
        heading: z.string(),
        subheading: z.string().optional(),
        tiers: z.array(z.string()),
        footnote: z.string().optional(),
        backgroundWord: z.string().optional()
      })
      .optional(),
    cta: z
      .object({
        eyebrow: z.string().optional(),
        heading: z.string(),
        body: z.string(),
        primaryCta: z.object({ label: z.string(), href: z.string() }),
        secondaryCta: z.object({ label: z.string(), href: z.string() }).optional(),
        finePrint: z.string().optional(),
        backgroundImage: imageSchema.optional()
      })
      .optional()
  })
});

const featuredStyles = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/featured-styles' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    image: imageSchema,
    featured: z.boolean().default(false),
    category: z.string().optional(),
    bookingLink: z.string().optional()
  })
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    date: z.string().optional(),
    image: imageSchema,
    featured: z.boolean().default(false),
    ctaLabel: z.string().optional(),
    ctaHref: z.string().optional()
  })
});

const membershipTiers = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/membership-tiers' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    benefits: z.array(z.string()),
    price: z.string().optional(),
    badge: z.string().optional(),
    featured: z.boolean().default(false),
    icon: z.string().optional()
  })
});

export const collections = {
  settings,
  services,
  pricing,
  portfolio,
  team,
  timeline,
  testimonials,
  faqs,
  pages,
  blog,
  products,
  home,
  'featured-styles': featuredStyles,
  events,
  'membership-tiers': membershipTiers
};
