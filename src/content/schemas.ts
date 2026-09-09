import { z } from 'zod';
export const schemas = {
  pages: {
    home: z.object({
      "hero": z.object({
        "tagline": z.string(),
        "headline": z.string(),
        "subheadline": z.string(),
        "cta": z.string(),
        "ctaHref": z.string(),
        "secondaryCta": z.string(),
        "secondaryCtaHref": z.string()
      }),
      "scheduleTeaser": z.array(z.object({
        "id": z.string(),
        "day": z.string(),
        "time": z.string()
      })),
      "classes": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "level": z.string(),
        "duration": z.string(),
        "description": z.string(),
        "image": z.string()
      })),
      "whySatya": z.object({
        "quote": z.string(),
        "stat": z.string(),
        "statLabel": z.string(),
        "benefits": z.array(z.object({
          "id": z.string(),
          "text": z.string()
        }))
      }),
      "instructors": z.array(z.object({
        "id": z.string(),
        "name": z.string(),
        "specialty": z.string(),
        "bio": z.string(),
        "image": z.string()
      })),
      "cta": z.object({
        "headline": z.string(),
        "subheadline": z.string(),
        "button": z.string(),
        "buttonHref": z.string()
      })
    })
  }
};
export type Schemas = typeof schemas;