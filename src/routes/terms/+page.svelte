<!-- src/routes/terms/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | ETH Gas Cost Calculator</title>
  <meta name="description" content="Read the terms of use for the ETH Gas Cost Calculator, a free, open-source tool for estimating Ethereum gas fees." />
  <meta property="og:title" content="Terms and Conditions | ETH Gas Cost Calculator" />
  <meta property="og:description" content="Read the terms of use for the ETH Gas Cost Calculator, a free, open-source tool for estimating Ethereum gas fees." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 25, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>ETH Gas Cost Calculator</strong> (the "Tool"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Tool. The Tool is provided free of charge as an open-source, educational utility for estimating Ethereum transaction gas costs.</p>

    <h2>2. Description of Service</h2>
    <p>The Tool is a static, client-side web application that performs simple mathematical calculations based on user-provided gas limit and gas price values. It displays results in ETH and provides an approximate USD equivalent using a fixed conversion rate. All processing occurs in your browser—no data is sent to any server.</p>

    <h2>3. License and Use</h2>
    <p>You are granted a limited, non-exclusive, non-transferable license to use the Tool for personal, non-commercial purposes. You may not:</p>
    <ul>
      <li>Modify, reverse-engineer, or create derivative works beyond normal use.</li>
      <li>Use the Tool for unlawful purposes or to promote illegal activities.</li>
      <li>Attempt to overload, disrupt, or interfere with the Tool's availability.</li>
      <li>Remove or alter any copyright or attribution notices.</li>
    </ul>

    <h2>4. No Warranties</h2>
    <p>The Tool is provided <strong>"as is"</strong> and <strong>"as available"</strong> without any warranties of any kind, express or implied. We do not guarantee:</p>
    <ul>
      <li>Accuracy of calculations for real-world transactions.</li>
      <li>Suitability for any specific purpose.</li>
      <li>Uninterrupted or error-free operation.</li>
      <li>That results reflect current network conditions or live gas prices.</li>
    </ul>
    <p>The static USD conversion is illustrative only and should not be relied upon for financial decisions.</p>

    <h2>5. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of the Tool, including but not limited to financial losses from incorrect fee estimates or transaction failures.</p>

    <h2>6. No Financial Advice</h2>
    <p>The Tool is for <em>educational and informational purposes only</em>. It does not constitute financial, investment, or professional advice. Always verify gas settings in your wallet and consult official sources before broadcasting transactions.</p>

    <h2>7. Intellectual Property</h2>
    <p>The Tool's source code is open-source and available on GitHub under the MIT license. Documentation and content are copyrighted but may be shared with attribution.</p>

    <h2>8. Changes to Terms</h2>
    <p>We may update these Terms at any time. Changes will be posted on this page with a new effective date. Continued use after changes constitutes acceptance.</p>

    <h2>9. Governing Law</h2>
    <p>These Terms shall be governed by general principles of applicable law without regard to conflict of law provisions.</p>

    <h2>10. Contact</h2>
    <p>For questions, please open an issue on our public GitHub repository.</p>

    <p class="italic-note">Thank you for using the ETH Gas Cost Calculator responsibly and enjoy accurate, private fee estimation.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>