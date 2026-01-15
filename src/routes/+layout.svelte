<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css';
  import { fly } from 'svelte/transition';

  const currentYear = new Date().getFullYear();

  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="custom-navbar">
  <nav class="nav-container">
    <div class="nav-left">
      <a href="{base}/" class="brand-wrapper">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" class="nav-logo" />
        <span class="brand-name">AxelBase</span>
      </a>

      <!-- Buy Me a Coffee Dropdown – style taken from File 1, colors adapted -->
      <div class="bmac-wrapper position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button d-flex align-items-center gap-2 shadow-sm"
          on:click={toggleDropdown}
          aria-label="Support options"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span>Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> One Coffee
            </a>
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
              class="custom-amount bitcoin-option"
            >
              Buy via Crypto (Bitcoin)
            </a>
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav-right-links">
      <li><a class="nav-link" href="{base}/">Home</a></li>
      <li><a class="nav-link" href="{base}/#about">About</a></li>
      <li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main>
  <slot />
</main>

<footer class="custom-footer">
  <div class="footer-container">
    <span>© AxelBase ETH Gas Cost Calculator – {currentYear}</span>
    <div class="footer-links">
      <a href="{base}/privacy">Privacy</a>
      <a href="{base}/terms">Terms</a>
    </div>
  </div>
</footer>

<style>
  /* ────────────────────────────────────────────────
     Keeping File 2 base layout + adapting BMAC from File 1
  ──────────────────────────────────────────────── */

  .custom-navbar {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 95%;
    max-width: 1200px;
    background: var(--fir-green);
    border-radius: 50px;
    padding: 10px 30px;
    z-index: 1000;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-left {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .brand-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .nav-logo {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background: white;
    padding: 2px;
  }

  .brand-name {
    color: white;
    font-weight: 700;
    font-size: 1.25rem;
  }

  .nav-right-links {
    list-style: none;
    display: flex;
    gap: 1.6rem;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    color: rgba(255,255,255,0.82);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition-smooth);
    padding: 6px 10px;
  }

  .nav-link:hover {
    color: white;
    transform: scale(1.08);
  }

  /* ── Buy Me a Coffee Button + Dropdown (mostly from File 1) ── */
  .bmac-button {
    background: #f59e0b;           /* warm coffee yellow – good contrast on dark nav */
    color: #111;
    border: none;
    padding: 9px 18px;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 0.92rem;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  }

  .bmac-button:hover {
    background: #fbbf24;
    transform: translateY(-1px);
    box-shadow: 0 5px 15px rgba(245, 158, 11, 0.35);
  }

  .bmac-dropdown {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 240px;
    margin-top: 12px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 12px 32px rgba(49, 55, 43, 0.18);
    overflow: hidden;
    border: 1px solid rgba(49, 55, 43, 0.08);
    z-index: 1000;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    color: #222;
    text-decoration: none;
    font-size: 0.97rem;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: var(--accent-soft);
    color: var(--fir-green);
    padding-left: 28px;
  }

  .bmac-dropdown .amount {
    font-weight: 800;
    color: #f59e0b;
    font-size: 1.12rem;
    min-width: 38px;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 700;
    color: var(--fir-green);
    border-top: 1px solid #eee;
    justify-content: center !important;
    padding: 14px 20px;
  }

  .bitcoin-option {
    color: #f7931a !important;
    font-weight: 700;
  }

  .bitcoin-option:hover {
    background: #fef9f0 !important;
    color: #e07b00 !important;
  }

  /* Footer (File 2) */
  .custom-footer {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--fir-green);
    color: white;
    padding: 16px 0;
    z-index: 1000;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    font-size: 0.92rem;
  }

  .footer-links a {
    color: white;
    margin-left: 24px;
    text-decoration: none;
    opacity: 0.85;
  }

  .footer-links a:hover {
    opacity: 1;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .nav-right-links { display: none; }
    .brand-name { display: none; }
    .bmac-dropdown {
      left: -60px;
      transform: translateX(0);
      width: 220px;
    }
  }
</style>