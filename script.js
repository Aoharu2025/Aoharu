// 학원 목록 토글 버튼과 사이드바
const toggleButton = document.getElementById('toggle-categories');
const sidebar = document.getElementById('categories-sidebar');

// 버튼 클릭 시 사이드바 표시/숨기기
toggleButton.addEventListener('click', () => {
  sidebar.classList.toggle('show');
});

// 학원 클릭 시 학생 목록 표시/숨기기
document.querySelectorAll('.category-item').forEach(item => {
  item.addEventListener('click', () => {
    const category = item.dataset.category;
    const studentList = document.querySelector(`.students-list[data-category="${category}"]`);
    if (studentList) {
      studentList.classList.toggle('hidden');
    }
  });
});

// 서브 카테고리 클릭 시 학생 목록 표시/숨기기
document.querySelectorAll('.sub-category-item').forEach(item => {
  item.addEventListener('click', () => {
    const subCategory = item.dataset.subCategory;
    const studentList = document.querySelector(`.students-list[data-sub-category="${subCategory}"]`);
    if (studentList) {
      studentList.classList.toggle('hidden');
    }
  });
});

// 이미지 클릭 시 숨기고 사이트 내용 표시
const introImage = document.getElementById('intro-image');
introImage.addEventListener('click', () => {
  document.body.classList.add('show-content');
});
