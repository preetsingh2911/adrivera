const fs = require('fs');
const path = require('path');

const sitePath = fs.existsSync(path.join(__dirname, '..', 'src', 'content', 'site.ts'))
  ? path.join(__dirname, '..', 'src', 'content', 'site.ts')
  : path.join(__dirname, '..', 'content', 'site.ts');

if (!fs.existsSync(sitePath)) {
  console.error('[BUILD CHECK ERROR] site.ts file was not found.');
  process.exit(1);
}

const content = fs.readFileSync(sitePath, 'utf8');

if (content.includes('REPLACE_WITH_VERIFIED_NUMBER')) {
  if (process.env.ALLOW_PLACEHOLDERS === 'true') {
    console.warn(
      '[BUILD WARNING] whatsappNumber is still the placeholder, but ALLOW_PLACEHOLDERS=true is active. Permitting scaffold build.'
    );
  } else {
    console.error('\n================================================================');
    console.error('FATAL PRODUCTION BUILD FAILURE:');
    console.error('whatsappNumber in /content/site.ts is set to "REPLACE_WITH_VERIFIED_NUMBER".');
    console.error('Per project rules, production builds are blocked until the founder supplies');
    console.error('a verified business WhatsApp number.');
    console.error('================================================================\n');
    process.exit(1);
  }
}
