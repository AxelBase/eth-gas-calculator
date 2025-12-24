<!-- src/routes/blog/+page.svelte -->

<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'Understanding Ethereum Gas Fees', description: 'An introduction to gas, its role in Ethereum transactions, and why fees exist on the network.' },
    { href: '/blog/posts/post2', title: 'The Core Gas Fee Formula Explained', description: 'Breakdown of how transaction cost is calculated: gas limit × gas price = total fee in ETH.' },
    { href: '/blog/posts/post3', title: 'Gas Limit: What It Is and Common Values', description: 'Learn what gas limit means, why 21,000 is the standard for simple ETH transfers, and higher values for complex operations.' },
    { href: '/blog/posts/post4', title: 'Gas Price in Gwei: Current Trends in 2025', description: 'How gas prices fluctuate, why they are often below 1 Gwei today, and what affects network congestion.' },
    { href: '/blog/posts/post5', title: 'Estimating Costs for Different Transaction Types', description: 'Examples of gas usage for ETH transfers, ERC-20 tokens, NFT mints, and DeFi swaps.' },
    { href: '/blog/posts/post6', title: 'Why This Calculator Uses a Static USD Rate', description: 'Explanation of the fixed ETH-to-USD conversion and its benefits for consistent, offline estimates.' },
    { href: '/blog/posts/post7', title: 'Precision in Fee Calculations', description: 'How the tool handles large numbers and displays ETH costs with 10 decimal places for accuracy.' },
  ];
</script>

<svelte:head>
  <title>Blog | ETH Gas Cost Calculator Insights</title>
  <meta name="description" content="In-depth articles on Ethereum gas mechanics, fee calculations, and practical usage of the ETH Gas Cost Calculator." />
</svelte:head>

<div class="container fade-in blog-index">
  <header class="blog-header">
    <h1><i class="bi bi-journal-richtext"></i> Blog: ETH Gas Insights</h1>
    <p class="subtitle">
      Dive deeper into Ethereum transaction fees, gas mechanics, and practical estimation techniques. Explore technical explanations and real-world examples to better understand network costs in 2025.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article &rarr;</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 2rem;
  }

  .blog-header h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.1rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .post-card .card-body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    color: var(--accent-secondary);
    margin-bottom: 0.75rem;
  }

  .post-description {
    color: var(--text-secondary);
    flex-grow: 1;
    margin-bottom: 1rem;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    align-self: flex-start;
    transition: var(--transition-fast);
  }

  .post-card:hover .read-more {
    transform: translateX(5px);
  }
</style>