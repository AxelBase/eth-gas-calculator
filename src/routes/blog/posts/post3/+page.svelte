<!-- src/routes/blog/posts/post3/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Gas Limit: What It Is and Common Values | ETH Gas Cost Calculator Blog</title>
  <meta name="description" content="Learn about gas limit in Ethereum transactions, why 21,000 is standard for simple transfers, and typical values for different operation types." />
  <meta property="og:title" content="Gas Limit: What It Is and Common Values | ETH Gas Cost Calculator Blog" />
  <meta property="og:description" content="Learn about gas limit in Ethereum transactions, why 21,000 is standard for simple transfers, and typical values for different operation types." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Gas Limit: What It Is and Common Values</p>
  </div>

  <article class="prose">
    <h1>Gas Limit: What It Is and Common Values</h1>
   
    <p class="post-meta">Published: December 25, 2025</p>
   
    <p>The gas limit is one of the most important parameters in any Ethereum transaction. It defines the maximum amount of gas units a user authorizes for a transaction to consume. Setting an appropriate gas limit ensures operations complete successfully while protecting users from overpaying if something unexpected occurs during execution.</p>
   
    <p>When a transaction runs, it consumes gas incrementally based on each operation performed. If the transaction uses less gas than the specified limit, the unused portion is automatically refunded. However, if the transaction requires more gas than allocated, it fails entirely, though the gas already consumed is still deducted as payment for the attempted work.</p>
   
    <p>The most famous and widely used gas limit value is 21,000. This exact number represents the minimum gas required for a basic ETH transfer between two externally owned accounts. It has become the standard default in wallets and tools because it perfectly covers simple value transfers without excess.</p>
   
    <h2>Common Gas Limit Values</h2>
    <p>Different transaction types require different gas limits. ERC-20 token transfers typically need between 45,000 and 65,000 gas units, depending on the specific token contract implementation. Sending ETH to a smart contract wallet or performing multiple operations in one transaction increases requirements further.</p>
   
    <p>Decentralized exchange swaps often consume 100,000 to 200,000 gas units due to multiple contract interactions and price calculations. NFT minting operations vary widely but commonly fall in the 150,000 to 300,000 range. Deploying new smart contracts can require hundreds of thousands to millions of gas units depending on code complexity.</p>
   
    <h2>Choosing the Right Gas Limit</h2>
    <p>Modern wallets automatically estimate appropriate gas limits based on transaction type and current conditions. These estimates include safety margins to account for minor variations in execution paths. Users can manually adjust limits when needed, though setting them too low risks transaction failure while setting them excessively high increases potential cost without benefit.</p>
   
    <p>Gas calculators and estimation tools help users understand typical requirements for different operations. Knowing standard values enables better decision-making when customizing transaction parameters or troubleshooting failed operations.</p>
   
    <h2>Historical Context</h2>
    <p>The 21,000 gas limit for basic transfers was established in Ethereum's original design and has remained unchanged despite numerous protocol upgrades. This consistency provides stability and predictability across the ecosystem.</p>
   
    <h2>Key Takeaways</h2>
    <ul>
      <li>21,000 gas is the standard for simple ETH transfers</li>
      <li>Higher limits are required for token operations and smart contracts</li>
      <li>Unused gas is automatically refunded</li>
      <li>Proper gas limit prevents both failure and unnecessary expense</li>
    </ul>
   
    <h2>FAQ</h2>
    <details>
      <summary>Why exactly 21,000 gas?</summary>
      <p>It covers the precise operations needed for basic transfers in Ethereum's original design.</p>
    </details>
    <details>
      <summary>Can I set gas limit lower than required?</summary>
      <p>The transaction will fail once gas is exhausted, losing fees for work already done.</p>
    </details>
    <details>
      <summary>Do layer-2 networks use the same limits?</summary>
      <p>Layer-2 solutions often have different gas accounting but follow similar principles.</p>
    </details>
   
    <p class="italic-note">Understanding gas limit values helps users navigate Ethereum transactions with confidence and efficiency.</p>
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

  .prose h1, .prose h2{
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

  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
  }

  .prose details[open] {
    background-color: var(--card-bg);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-secondary);
    list-style: none;
  }

  .prose summary::-webkit-details-marker {
    display: none;
  }

  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--accent-primary);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }

  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>