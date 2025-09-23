
const container = document.querySelector('.container');
const leafColors = ['var(--leaf1)', 'var(--leaf2)', 'var(--leaf3)'];

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    const size = Math.random() * 20 + 10;
    leaf.style.width = size + 'px';
    leaf.style.height = size + 'px';
    leaf.style.left = Math.random() * 100 + '%';
    leaf.style.background = leafColors[Math.floor(Math.random() * leafColors.length)];

    container.appendChild(leaf);
    const duration = Math.random() * 10 + 8;
    leaf.animate([
        { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
        { transform: `translateY(110vh) rotate(720deg)`, opacity: 0.7 }
    ], { duration: duration * 1000, iterations: Infinity, delay: Math.random() * 5000 });
}

for (let i = 0; i < 25; i++) {
    createLeaf();
}