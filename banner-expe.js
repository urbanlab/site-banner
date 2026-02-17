document.addEventListener('DOMContentLoaded', function() {
    // Create the banner
    const banner = document.createElement('div');
    banner.id = 'experimentation-banner';
    // Banner styling
    banner.style.position = 'fixed';
    banner.style.top = '0';
    banner.style.left = '0';
    banner.style.width = '100%';
    banner.style.backgroundColor = '#ff0000';
    banner.style.color = '#ffffff';
    banner.style.padding = '12px';
    banner.style.textAlign = 'center';
    banner.style.zIndex = '9999';
    banner.style.fontFamily = 'Arial, sans-serif';
    banner.style.fontSize = '16px';
    banner.style.fontWeight = 'bold';
    banner.style.boxSizing = 'border-box';
    // Content styling: Add top margin to avoid hiding body content
    document.body.style.marginTop = '50px';
    // Banner text
    banner.textContent = '\uD83D\uDE80 Exp\u00E9rimentation termin\u00E9e, informations sur ';
    // Link
    const link = document.createElement('a');
    link.href = 'https://erasme.org';
    link.textContent = 'https://erasme.org';
    link.style.color = '#ffffff';
    link.style.textDecoration = 'underline';
    link.target = '_blank';
    banner.appendChild(link);
    // Closing emoji
    const endEmoji = document.createTextNode(' \uD83D\uDE80');
    banner.appendChild(endEmoji);
    // Close button
    const closeBtn = document.createElement('span');
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.marginLeft = '10px';
    closeBtn.style.float = 'right';
    closeBtn.style.lineHeight = '1';
    closeBtn.textContent = '\u2715';
    closeBtn.onclick = function() {
        banner.style.display = 'none';
        document.body.style.marginTop = '0';
    };
    banner.appendChild(closeBtn);
    // Insert the banner at the start of the body
    document.body.insertBefore(banner, document.body.firstChild);
});
