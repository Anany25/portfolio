/* WIPE ANIMATION - BACKUP CODE */

/* ============================================
   HTML STRUCTURE
   ============================================ */
/*
<div class="hero-image-wrapper">
    <div class="profile-image-container" id="profile-container">
        <!-- Normal Image (Background Layer) -->
        <img src="assets/profile-normal.jpg" alt="Anany Singh" class="profile-img normal">
        
        <!-- Artistic Image (Foreground Layer with Mask) -->
        <div class="artistic-mask" id="artistic-mask">
            <img src="assets/profile-artistic.jpg" alt="Anany Singh Artistic" class="profile-img artistic">
        </div>
    </div>
</div>
*/

/* ============================================
   CSS STYLES
   ============================================ */
.profile - image - container {
    position: relative;
    width: 400px;
    height: 400px;
    border - radius: 50 %;
    overflow: hidden;
    box - shadow: 0 0 40px rgba(99, 102, 241, 0.3);
    border: 4px solid transparent;
    background: linear - gradient(135deg, #6366f1 0 %, #8b5cf6 100 %);
    background - clip: padding - box;
}

.profile - img {
    width: 100 %;
    height: 100 %;
    object - fit: cover;
    display: block;
}

.profile - img.normal {
    position: absolute;
    top: 0;
    left: 0;
}

.artistic - mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100 %;
    overflow: hidden;
    transition: width 0.05s linear;
}

.profile - img.artistic {
    width: 400px;
    height: 400px;
    max - width: none;
}

/* ============================================
   JAVASCRIPT
   ============================================ */
/*
const heroSection = document.getElementById('hero');
const profileContainer = document.getElementById('profile-container');
const artisticMask = document.getElementById('artistic-mask');

if (heroSection && profileContainer && artisticMask) {
    heroSection.addEventListener('mousemove', (e) => {
        const rect = profileContainer.getBoundingClientRect();
        let x = e.clientX - rect.left;
        
        // Clamp the value
        if (x < 0) x = 0;
        if (x > rect.width) x = rect.width;
        
        artisticMask.style.width = `${x}px`;
    });

    // Reset on mouse leave
    heroSection.addEventListener('mouseleave', () => {
        artisticMask.style.width = '0px';
    });
}
*/
