import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build-time check for verified whatsappNumber
const siteTsPath = path.join(__dirname, 'content/site.ts');
if (fs.existsSync(siteTsPath)) {
  const content = fs.readFileSync(siteTsPath, 'utf8');
  if (content.includes('REPLACE_WITH_VERIFIED_NUMBER')) {
    if (process.env.NODE_ENV === 'production' && process.env.ALLOW_PLACEHOLDERS !== 'true') {
      console.error('\n================================================================');
      console.error('FATAL PRODUCTION BUILD FAILURE:');
      console.error('whatsappNumber in /content/site.ts is still "REPLACE_WITH_VERIFIED_NUMBER".');
      console.error('Production builds are blocked per project requirements until a verified number is provided.');
      console.error('================================================================\n');
      throw new Error(
        'Production build rejected: whatsappNumber is still "REPLACE_WITH_VERIFIED_NUMBER".'
      );
    }
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
