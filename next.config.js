const fs = require('fs');
const path = require('path');

// Requirement 3: Build-time check that fails the production build if whatsappNumber is still the placeholder.
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

module.exports = nextConfig;
