document.addEventListener("DOMContentLoaded", function() {
    // 创建包含所有图像文件名的数组
    const images = [
        // '72ce7ae3180710e31784bc7aa020fff1.jpg',
        // '648659b7a81862055569988b8c8096a7.jpg',
        // 'c0f1ada11d33de0c9c3519fa9e0beba6.jpg'
        "4f74609d67acd304f8aed6bca1115681.jpg"
        // 添加更多图像文件名
    ];

    // 定义一个函数来随机选择并应用背景图像
    function setRandomBackground() {
        const randomImage = images[Math.floor(Math.random() * images.length)];
        document.body.style.backgroundImage = `url('img/bg/${randomImage}')`;
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundAttachment = 'fixed';
    }

    // 初次调用函数设置背景图像
    setRandomBackground();

    // 每10秒调用一次函数更换背景图像
    setInterval(setRandomBackground, 600000); // 10000毫秒 = 10秒
});
