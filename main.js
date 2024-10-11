const Images = {
    imgData: 
    [
        [
            "funny-cat1_part1x1.jpg",
            "funny-cat1_part2x1.jpg",
            "funny-cat1_part3x1.jpg",
            "funny-cat1_part4x1.jpg",
            "funny-cat1_part5x1.jpg",
        ],
        [
            "monkey_part1x1.jpg",
            "monkey_part2x1.jpg",
            "monkey_part3x1.jpg",
            "monkey_part4x1.jpg",
            "monkey_part5x1.jpg",
        ],
        [
            "panda_swap_part1x1.jpg",
            "panda_swap_part2x1.jpg",
            "panda_swap_part3x1.jpg",
            "panda_swap_part4x1.jpg",
            "panda_swap_part5x1.jpg",
        ]
        
    ]
    
};

// Lưu trạng thái ảnh hiện tại (index của mảng)
let currentSetIndex = 0;

// Thêm sự kiện click cho từng img để thay đổi ảnh khi nhấn
const imgElements = document.querySelectorAll('.puzzle img');

imgElements.forEach((img, index) => {
    img.addEventListener('click', function() {
        // Khi ảnh được nhấn, chuyển đổi bộ ảnh
        currentSetIndex = (currentSetIndex + 1) % Images.imgData.length;
        this.src = `./img/${Images.imgData[currentSetIndex][index]}`;
        // Sau khi đổi ảnh, kiểm tra xem tất cả ảnh có cùng bộ hay không
        checkAllImagesSameSet();
    });
});

// Hàm kiểm tra xem tất cả các ảnh có thuộc cùng một bộ ảnh không
function checkAllImagesSameSet() {
    let isSameSet = true;
    const currentSet = Images.imgData[currentSetIndex]; // Lấy bộ ảnh hiện tại

    imgElements.forEach((img, index) => {
        // Lấy tên ảnh đang hiển thị và so sánh với bộ ảnh hiện tại
        const imgName = img.src.split('/').pop();
        if (imgName !== currentSet[index]) {
            isSameSet = false;
        }
    });

    // Nếu tất cả ảnh thuộc cùng một bộ, thêm viền
    if (isSameSet) {
        imgElements.forEach(img => {
            img.classList.add('all-same-border');
        });
    } else {
        imgElements.forEach(img => {
            img.classList.remove('all-same-border');
        });
    }
}