const container = document.querySelector('.container');
const leafColors = ['var(--leaf1)', 'var(--leaf2)', 'var(--leaf3)'];

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    
    const size = Math.random() * 20 + 15; // 15-35px
    leaf.style.width = size + 'px';
    leaf.style.height = size * 0.8 + 'px'; // Folhas ligeiramente achatadas
    
    leaf.style.left = Math.random() * 100 + 'vw';
    leaf.style.background = leafColors[Math.floor(Math.random() * leafColors.length)];
    leaf.style.borderRadius = '50% 30% 70% 40% / 60% 40% 70% 30%';
    
    container.appendChild(leaf);
    
    const duration = Math.random() * 12 + 8;
    const horizontalMovement = (Math.random() - 0.5) * 100;
    
    leaf.animate([
        { transform: `translate(0, 0) rotate(0deg)`, opacity: 1 },
        { transform: `translate(${horizontalMovement}px, 100vh) rotate(360deg)`, opacity: 0.5 }
    ], { 
        duration: duration * 1000, 
        iterations: Infinity,
        delay: Math.random() * 4000,
        easing: 'ease-in-out'
    });
}

for (let i = 0; i < 25; i++) {
    createLeaf();
}