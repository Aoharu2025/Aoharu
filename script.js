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

// 이미지 클릭 시 이미지 유지, 비디오 표시 및 재생
const introImage = document.getElementById('intro-image');
const introImageContainer = document.getElementById('intro-image-container');
const videoContainer = document.getElementById('video-container');
const introVideo = document.getElementById('intro-video');
const blackBackground = document.createElement('div');

// 검은 배경 스타일 추가
blackBackground.style.position = 'fixed';
blackBackground.style.top = '0';
blackBackground.style.left = '0';
blackBackground.style.width = '100%';
blackBackground.style.height = '100%';
blackBackground.style.backgroundColor = 'black';
blackBackground.style.zIndex = '9998';
blackBackground.style.display = 'none';
document.body.appendChild(blackBackground);

introImage.addEventListener('click', () => {
  // 검은 배경 표시
  blackBackground.style.display = 'block';
  
  // 비디오 컨테이너 표시
  videoContainer.style.display = 'flex';
  
  // 비디오 자동 재생
  introVideo.play();

  // 비디오 재생 시작 후 2초 뒤 이미지 숨김
  setTimeout(() => {
    introImageContainer.style.display = 'none'; // 이미지 숨김
  }, 2000);
});

// 비디오 끝난 후 검은 배경과 비디오 숨김, 사이트 콘텐츠 표시
introVideo.addEventListener('ended', () => {
  document.body.classList.add('show-content'); // 콘텐츠 표시
  videoContainer.style.display = 'none'; // 비디오 숨김
  blackBackground.style.display = 'none'; // 검은 배경 숨김
});
