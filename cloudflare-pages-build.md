# Cloudflare Pages Build Configuration

## Required Settings

Configure these settings in the Cloudflare Pages dashboard:

### Build Settings

- **Framework preset**: Hugo
- **Build command**: `cd hugo-site && hugo --minify`
- **Build output directory**: `hugo-site/public`
- **Root directory**: (leave empty - use repository root)

### Environment Variables

No environment variables required for basic builds.

### Hugo Version

Cloudflare Pages will automatically detect and use Hugo Extended. Ensure Hugo Extended is
available in the build environment.

## Alternative Configuration

If Cloudflare Pages is trying to use Wrangler (Workers), you can disable it by:

1. **Setting Framework preset to Hugo** in the dashboard
2. **Or** ensuring no `wrangler.toml` file exists in the root
3. **Or** explicitly setting the build command to use Hugo

## Manual Build Test

Test the build locally before deploying:

```bash
cd hugo-site
hugo --minify
ls -la public/
```

The `public/` directory should contain the built site files.

## Troubleshooting

### Error: "Missing entry-point to Worker script"

**Problem**: Cloudflare Pages is trying to use Wrangler/Workers instead of Hugo

**Solution**: 
1. Go to Cloudflare Pages dashboard
2. Settings → Builds & deployments
3. Set Framework preset to "Hugo"
4. Set Build command to: `cd hugo-site && hugo --minify`
5. Set Build output directory to: `hugo-site/public`

### Error: "Unable to locate config file"

**Problem**: Hugo can't find `config.toml`

**Solution**: Ensure the build command includes `cd hugo-site` to change to the correct
directory before running Hugo.

