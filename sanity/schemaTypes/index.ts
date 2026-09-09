import { type SchemaTypeDefinition } from 'sanity';

import project from './project';
import client from './client';
import siteSettings from './siteSettings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, client, siteSettings],
};
