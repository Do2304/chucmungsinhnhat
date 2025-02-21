// Hiệu ứng chúc mừng sinh nhật
document.addEventListener('DOMContentLoaded', () => {
    const gifts = document.querySelectorAll('.gift-img');
    gifts.forEach((gift, index) => {
        gift.style.backgroundImage = `url('gift${index + 1}.png')`; // Thay đổi đường dẫn với hình ảnh quà tặng thật
        gift.style.backgroundSize = 'cover';
        gift.style.animationDelay = `${index * 0.5}s`;
        gift.addEventListener('mouseenter', () => {
            gift.style.transform = 'scale(1.1)';
        });
        gift.addEventListener('mouseleave', () => {
            gift.style.transform = 'scale(1)';
        });
    });
});