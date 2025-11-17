import { useEffect } from 'react';
import { toast } from 'react-toastify';

function WebsiteProtection() {
  useEffect(() => {
    const showProtectionToast = () => {
      toast.error('🔒 Website Protected by ShehriyarDev', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    };

    // Disable right click
    const handleContextMenu = (e) => {
      e.preventDefault();
      showProtectionToast();
      return false;
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e) => {
      // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J (Developer Tools)
      if (e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          (e.ctrlKey && e.shiftKey && e.key === 'J') ||
          (e.ctrlKey && e.shiftKey && e.key === 'C') ||
          (e.ctrlKey && e.key === 'u') || // View Source
          (e.ctrlKey && e.key === 'U') ||
          (e.ctrlKey && e.key === 's') || // Save Page
          (e.ctrlKey && e.key === 'S') ||
          (e.ctrlKey && e.key === 'a') || // Select All
          (e.ctrlKey && e.key === 'A') ||
          (e.ctrlKey && e.key === 'p') || // Print
          (e.ctrlKey && e.key === 'P') ||
          (e.ctrlKey && e.key === 'x') || // Cut
          (e.ctrlKey && e.key === 'X') ||
          (e.ctrlKey && e.key === 'c') || // Copy
          (e.ctrlKey && e.key === 'C') ||
          (e.ctrlKey && e.key === 'v') || // Paste
          (e.ctrlKey && e.key === 'V')) {
        e.preventDefault();
        showProtectionToast();
        return false;
      }
    };

    // Disable text selection
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable drag
    const handleDragStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('dragstart', handleDragStart);

    // Disable developer tools detection
    let devtools = {
      open: false,
      orientation: null
    };

    const threshold = 160;

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          devtools.open = true;
          showProtectionToast();
          // Optional: Redirect or close tab
          // window.location.href = 'about:blank';
        }
      } else {
        devtools.open = false;
      }
    }, 500);

    // Cleanup event listeners
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('dragstart', handleDragStart);
    };
  }, []);

  return null; // This component doesn't render anything
}

export default WebsiteProtection;