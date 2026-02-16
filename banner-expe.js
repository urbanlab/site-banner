<script>
document.addEventListener('DOMContentLoaded', function() {
    // Create the banner
    const banner = document.createElement('div');
    banner.id = 'experimentation-banner'; // Optional identifier

    // Banner styling
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = '#ff0000'; // Red
    banner.style.color = '#ffffff'; // White text
    banner.style.padding = '12px';
    banner.style.textAlign = 'center';
    banner.style.zIndex = '9999';
    banner.style.fontFamily = 'Arial, sans-serif';
    banner.style.fontSize = '16px';
    banner.style.fontWeight = 'bold';
    banner.style.boxSizing = 'border-box'; // Include padding in width

    // Content styling: Add top margin to avoid hiding body content
    document.body.style.marginTop = '50px'; // Adjust as needed

    // Banner text
    banner.textContent = '🚀 Experimentation terminée 🚀 ';

    // Close button
    const closeBtn = document.createElement('span');
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.marginLeft = '10px';
    closeBtn.style.float = 'right';
    closeBtn.style.lineHeight = '1'; // Ensure it aligns well
    closeBtn.textContent = '✕';
    closeBtn.onclick = function() {
        banner.style.display = 'none';
        document.body.style.marginTop = '0'; // Reset margin if banner is closed
    };
    banner.appendChild(closeBtn);

    // Insert the banner at the start of the body
    document.body.insertBefore(banner, document.body.firstChild);
});
</script>
