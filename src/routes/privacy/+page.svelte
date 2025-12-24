<!-- src/routes/privacy/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | ETH Gas Cost Calculator</title>
  <meta name="description" content="Learn how the ETH Gas Cost Calculator protects your privacy with a fully client-side, no-data-collection approach." />
  <meta property="og:title" content="Privacy Policy | ETH Gas Cost Calculator" />
  <meta property="og:description" content="Learn how the ETH Gas Cost Calculator protects your privacy with a fully client-side, no-data-collection approach." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 25, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>ETH Gas Cost Calculator</strong>, a simple, open-source, client-side web utility that helps users estimate Ethereum transaction fees. This tool runs entirely in your browser with no server interaction. We are fully committed to your privacy and operate under a <strong>zero-data-collection policy</strong>. Because all calculations and processing happen locally on your device, <strong>we do not collect, store, transmit, or access any personal information</strong>. This Privacy Policy explains our practices clearly and transparently.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The ETH Gas Cost Calculator is designed to function without gathering any data whatsoever. Specifically, we do not collect:</p>
    <ul>
      <li><strong>Personal Information</strong>: Names, email addresses, wallet addresses, IP addresses, or any identifiers.</li>
      <li><strong>Usage Data</strong>: Browser details, device information, location, visit duration, or interaction patterns.</li>
      <li><strong>Input Data</strong>: Gas limit values, gas prices, or any numbers you enter are processed only in your browser and never leave your device.</li>
      <li><strong>Analytics or Tracking Data</strong>: No cookies, pixels, fingerprints, or third-party analytics tools are used.</li>
    </ul>
    <p>Everything stays on your device. There is no backend server receiving or logging anything.</p>

    <h2>3. How the Tool Operates</h2>
    <p>When you use the calculator:</p>
    <ul>
      <li><strong>All Processing is Local</strong>: JavaScript performs fee calculations instantly in the browser using pure mathematical operations.</li>
      <li><strong>No Network Requests</strong>: Beyond loading the initial static files (HTML, CSS, JS), no data is sent anywhere.</li>
      <li><strong>No Persistent Storage</strong>: Inputs are held only in memory during your session and disappear on page refresh or close.</li>
    </ul>
    <p>This architecture guarantees <strong>complete privacy</strong> even when estimating fees for sensitive transactions.</p>

    <h2>4. Third-Party Services</h2>
    <p>We do not integrate any third-party analytics, advertising, or tracking services. The site uses only Bootstrap via CDN for styling, which loads static assets but does not track users. No other external services are involved.</p>

    <h2>5. Cookies and Tracking</h2>
    <p>This site <strong>does not use cookies</strong>, localStorage for tracking, session storage beyond temporary calculation needs, or any tracking technologies. Your experience is completely <em>stateless</em>.</p>

    <h2>6. Data Security</h2>
    <p>Since no data leaves your device, security risks associated with transmission or server storage are eliminated. We recommend using a trusted browser and keeping it updated for general web safety.</p>

    <h2>7. Children's Privacy</h2>
    <p>The tool is not directed at children under 13. We do not knowingly collect any information from children.</p>

    <h2>8. Changes to This Policy</h2>
    <p>We may occasionally update this Privacy Policy. Changes will be posted here with a new effective date. Continued use constitutes acceptance of the updated terms.</p>

    <h2>9. Contact</h2>
    <p>For questions about this policy, please open an issue on our public GitHub repository.</p>

    <p class="italic-note">Your privacy is protected by design—nothing is collected, nothing is shared. Use the ETH Gas Cost Calculator with complete confidence.</p>
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