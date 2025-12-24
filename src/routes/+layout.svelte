<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css';
  import { fly, fade } from 'svelte/transition';

  const paypalUsername = 'AxelLab427'; // Change this to your username
  const donationAmounts = [1, 3, 5, 10];
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
      if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
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

      <div class="bmac-wrapper" use:clickOutside on:click_outside={closeDropdown}>
        <button class="bmac-button" on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.211 5.31c-.341-.531-.83-.935-1.428-1.134-1.026-.341-2.583-.553-4.242-.553-.332 0-.661.008-.985.025C13.528 1.581 11.97 0 10 0 7.239 0 5 2.239 5 5v1h-.312C2.102 6 0 8.102 0 10.688v1.125C0 14.316 2.102 16.418 4.688 16.418h11.232c1.472 0 2.802-.857 3.424-2.12.593-1.205.659-2.52.187-3.712.39-.462.628-1.054.628-1.693 0-.158-.016-.312-.045-.461.642-.317 1.085-.947 1.085-1.68 0-.64-.325-1.2-.816-1.527v.085zm-2.613 5.48c.118.3.136.634.053.957-.083.32-.266.602-.516.815-.246.208-.553.33-.878.347h-.01c-.13.004-.263.005-.393.005h-1.056c-.552 0-1-.448-1-1s.448-1 1-1h.22c.162 0 .324-.002.485-.008.318-.01.62-.112.872-.29.24-.17.417-.414.502-.693.085-.278.082-.576-.008-.853-.09-.276-.264-.516-.496-.683-.242-.175-.534-.265-.838-.258-.458.012-.888.225-1.185.586-.183.224-.457.355-.747.355h-.116c-.552 0-1-.448-1-1s.448-1 1-1h.062c.628-.767 1.587-1.22 2.596-1.246.702-.016 1.385.19 1.95.584.545.38.955.932 1.15 1.564.2.63.195 1.314-.015 1.942z"/>
          </svg>
          Buy me a coffee
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 300 }}>
            {#each donationAmounts as amount}
              <a href="https://paypal.me/{paypalUsername}/{amount}" target="_blank" rel="noopener noreferrer" on:click={closeDropdown}>
                ${amount}
              </a>
            {/each}
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
    <span>&copy; AxelBase ETH Gas Cost Calculator – {currentYear}</span>
    <div class="footer-links">
      <a href="{base}/privacy">Privacy</a>
      <a href="{base}/terms">Terms</a>
    </div>
  </div>
</footer>

<style>
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
    gap: 20px;
  }

  .brand-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
  }

  .nav-logo {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: white;
    padding: 2px;
  }

  .brand-name {
    color: white;
    font-weight: 700;
    font-size: 1.2rem;
  }

  .nav-right-links {
    list-style: none;
    display: flex;
    gap: 1.5rem;
    margin: 0;
    padding: 0;
  }

  .nav-link {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition-smooth);
    padding: 5px 10px;
  }

  .nav-link:hover {
    color: white;
    transform: scale(1.1);
  }

  /* BMAC Button Styles */
  .bmac-wrapper {
    position: relative;
  }

  .bmac-button {
    background: #FFDD00;
    color: #000;
    border: none;
    padding: 8px 18px;
    border-radius: 50px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: var(--transition-smooth);
    font-size: 0.9rem;
  }

  .bmac-button:hover {
    transform: scale(1.05) rotate(-2deg);
    box-shadow: 0 5px 15px rgba(255, 221, 0, 0.4);
  }

  .bmac-dropdown {
    position: absolute;
    top: 50px;
    left: 0;
    background: white;
    border-radius: 15px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 100px;
  }

  .bmac-dropdown a {
    padding: 10px 20px;
    text-decoration: none;
    color: var(--fir-green);
    font-weight: bold;
    transition: background 0.2s;
  }

  .bmac-dropdown a:hover {
    background: var(--accent-soft);
  }

  /* Footer */
  .custom-footer {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    background: var(--fir-green);
    color: white;
    padding: 15px 0;
    z-index: 1000;
  }

  .footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    font-size: 0.9rem;
  }

  .footer-links a {
    color: white;
    margin-left: 20px;
    text-decoration: none;
    opacity: 0.8;
  }

  .footer-links a:hover {
    opacity: 1;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    .nav-right-links { display: none; }
    .brand-name { display: none; }
  }
</style>