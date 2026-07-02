# Geunhyuk Youk — Personal Academic Page

개인 학술 홈페이지 소스입니다. 순수 HTML/CSS/JS로 만들어져 빌드 과정 없이 GitHub Pages에 바로 배포됩니다.

**배포 주소 (배포 후):** https://geunhyukyouk.github.io/

---

## 📁 파일 구조

```
├── index.html                  # 모든 내용 (소개, 뉴스, 논문, 서비스, 학력)
├── favicon.svg                 # 브라우저 탭 아이콘
├── .nojekyll                   # GitHub Pages가 Jekyll 빌드를 건너뛰게 함 (삭제 금지)
└── static/
    ├── css/style.css           # 디자인 (라이트/다크 테마)
    ├── js/main.js              # 테마 토글, 스크롤 효과
    └── images/
        ├── profile.jpg         # ⚠️ 본인 사진 (직접 추가 필요!)
        ├── profile-placeholder.svg  # 사진 없을 때 대체 이미지
        └── *.png               # 논문 티저 이미지
```

---

## 🚀 GitHub Pages 배포 방법 (git 설치 불필요)

1. https://github.com/new 접속 (GeunhyukYouk 계정으로 로그인)
2. **Repository name**에 정확히 `GeunhyukYouk.github.io` 입력
   - 반드시 `<계정명>.github.io` 형식이어야 합니다 (대소문자는 무관)
3. **Public** 선택 → **Create repository** 클릭
4. 생성된 페이지에서 **"uploading an existing file"** 링크 클릭
5. 이 폴더의 **모든 파일과 폴더**를 브라우저 창으로 드래그 앤 드롭
   - `index.html`, `favicon.svg`, `.nojekyll`, `static/`, `README.md` 전부
6. 하단 **Commit changes** 클릭
7. 1~2분 후 https://geunhyukyouk.github.io/ 접속 → 완료! 🎉
   - 안 뜨면 저장소 **Settings → Pages**에서 Source가 `main` 브랜치인지 확인

이후 내용을 수정할 때는 저장소에서 파일을 열고 연필 아이콘(Edit)을 눌러 웹에서 바로 수정하면 됩니다.

---

## ✏️ 자주 하는 수정

### 프로필 사진 추가
`static/images/` 폴더에 `profile.jpg` 라는 이름으로 사진을 업로드하면 자동으로 표시됩니다.
(세로 사진 권장, 4:5 비율로 잘려 보입니다)

### 논문 추가
`index.html`에서 `<!-- FMA-Net++ -->` 주석으로 시작하는 `<article class="pub-card">` 블록을
복사해서 맨 위에 붙여넣고 내용만 바꾸면 됩니다.
- 티저 이미지: `static/images/` 에 업로드 후 `src` 수정 (가로 900px 정도로 줄이면 로딩이 빨라요)
- 뱃지 색상: `badge-accent`(강조·그라데이션) / `badge-conf`(학회) / `badge-journal`(저널) / `badge-oral`(Oral)

### News 추가
`<ul class="news-list">` 안의 `<li class="news-item">` 블록을 복사해 맨 위에 추가하세요.

### CV 교체
현재 Google Drive 링크를 사용 중입니다. PDF를 저장소에 직접 올리려면:
1. `cv.pdf`를 저장소 루트에 업로드
2. `index.html`에서 `drive.google.com/...` 링크 2곳을 `cv.pdf`로 교체

### 다크/라이트 테마 색상 변경
`static/css/style.css` 맨 위 `:root`(라이트) / `[data-theme="dark"]`(다크)의
`--accent-1`, `--accent-2` 값을 바꾸면 전체 포인트 색이 바뀝니다.

---

## 🔍 로컬 미리보기

`index.html`을 더블클릭해서 브라우저로 열면 됩니다. 별도 서버가 필요 없습니다.
