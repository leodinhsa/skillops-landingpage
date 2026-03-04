const withNextIntl = require('next-intl/plugin')('./i18n/request.tsx');

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withNextIntl(nextConfig)