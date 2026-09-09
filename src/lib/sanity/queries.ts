import { groq } from 'next-sanity';

export const getSiteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    phoneNumbers,
    whatsappNumber,
    email,
    address
  }
`;

export const getProjectsQuery = groq`
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    slug,
    category,
    client,
    year,
    coverImage,
    gallery,
    description
  }
`;

export const getProjectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    client,
    year,
    coverImage,
    gallery,
    description
  }
`;

export const getClientsQuery = groq`
  *[_type == "client"] | order(name asc) {
    _id,
    name,
    logo
  }
`;
