# 안태호 · Game Designer Portfolio

PPT 포트폴리오(`포트폴리오_안태호.pptx`)를 정적 웹사이트로 옮긴 개인 포트폴리오입니다.
빌드 도구 없이 HTML / CSS / 바닐라 JS만 사용하므로, 폴더째 어디에 올려도 그대로 동작합니다.

## 구성

```
index.html          홈 (Hero · About · 지표 · 강점 · 경력 타임라인 · 프로젝트 · Contact)
projects.html       프로젝트 상세 4종 (#tds, #maplen, #berserker, #maple)
resume.html         이력서 (인적사항 · 학력 · 강점 · 스킬 · 경력 요약/상세)
assets/css/style.css
assets/js/main.js   스크롤 리빌, 모바일 메뉴, 섹션 하이라이트, 숫자 카운트업
assets/img/         프로필 사진 및 프로젝트 이미지
```

## 로컬에서 보기

```bash
python3 -m http.server 4321
```

브라우저에서 `http://localhost:4321` 접속.

## GitHub Pages로 배포하기

레퍼런스 사이트(`khwan789.github.io`)와 같은 `username.github.io` 형태로 올리는 방법입니다.

> **먼저 알아둘 것**
> 따로 폴더를 새로 만들거나 `git clone` 할 필요가 없습니다.
> **지금 이 폴더(`/Users/taeho/Documents/PF`)가 그대로 저장소가 됩니다.**
> 아래 명령들은 전부 이 폴더 안에서 실행합니다.

### 1. GitHub에서 빈 저장소 만들기

github.com 에 로그인 → 우측 상단 **`+` → New repository**

- **Repository name**: `<본인깃허브아이디>.github.io` (예: `BIGRO8IN.github.io`)
- **Public** 선택
- ⚠️ **`Add a README file`, `.gitignore`, `license` 는 모두 체크하지 마세요.**
  체크하면 저장소가 비어있지 않게 되어 아래 `push`가 거부됩니다.

만들고 나면 나오는 주소(`https://github.com/아이디/아이디.github.io.git`)를 복사해 둡니다.

### 2. 터미널에서 이 폴더를 저장소로 만들고 올리기

터미널을 열고, 먼저 이 폴더로 이동합니다.

```bash
cd /Users/taeho/Documents/PF
```

그 다음 아래를 한 줄씩 실행합니다. (각 명령이 하는 일을 옆에 적어뒀습니다)

```bash
git init
```
현재 폴더를 git 저장소로 만듭니다. `.git` 폴더가 생깁니다.

```bash
git add .
```
폴더 안의 모든 파일을 커밋 대상으로 추가합니다.

```bash
git commit -m "Add portfolio site"
```
현재 상태를 기록합니다.

```bash
git branch -M main
```
기본 브랜치 이름을 `main` 으로 맞춥니다.

```bash
git remote add origin https://github.com/<본인아이디>/<본인아이디>.github.io.git
```
1번에서 만든 GitHub 저장소와 연결합니다. `<본인아이디>` 부분은 실제 아이디로 바꿔야 합니다.

```bash
git push -u origin main
```
실제로 업로드합니다.

> **push 할 때 아이디/비밀번호를 물어보면**
> 비밀번호 칸에 GitHub 계정 비밀번호를 넣으면 실패합니다.
> GitHub → Settings → Developer settings → Personal access tokens → **Tokens (classic)** 에서
> `repo` 권한으로 토큰을 발급받아, 그 토큰을 비밀번호 대신 붙여넣으세요.

### 3. Pages 켜기

저장소 페이지에서 **Settings → Pages** 로 이동 →
Source를 `Deploy from a branch`, 브랜치를 `main` / `/ (root)` 로 지정하고 Save.

### 4. 확인

1~2분 뒤 `https://<본인아이디>.github.io` 에서 확인할 수 있습니다.

### 이후 내용을 수정했을 때

파일을 고친 뒤 아래 세 줄만 반복하면 사이트에 반영됩니다.

```bash
git add .
```

```bash
git commit -m "수정 내용 요약"
```

```bash
git push
```

### 참고: 저장소 이름을 다르게 하고 싶다면

`portfolio` 처럼 다른 이름으로 만들면 주소가 `https://<본인아이디>.github.io/portfolio/` 가 됩니다.
이 경우에도 사이트 내부 링크는 모두 상대경로라 수정 없이 동작합니다.

## 수정하기

- **내용**: 각 HTML 파일을 직접 편집하면 됩니다. 텍스트는 모두 PPT 원본 기준입니다.
- **색상 / 폰트**: `assets/css/style.css` 최상단 `:root` 변수만 바꾸면 전체 톤이 바뀝니다.
  (`--accent` 가 포인트 컬러, `--bg` 계열이 배경색)
- **이미지 교체**: `assets/img/` 안의 파일을 같은 이름으로 덮어쓰면 됩니다.
  - `hero.webp` 메인 배경 (CSS에서 블러 + 어둡게 처리됨)
  - `profile.jpg` 프로필 사진
  - `tds-play.jpg`, `maplen-cover.jpg`, `berserker-cover.jpg`, `berserker-collab.jpg`,
    `maple-cover.jpg`, `maple-play.jpg` 프로젝트 이미지

## 참고

원본 PPT에 포함된 실제 기획서 · 데이터 이미지는 보안상 웹 버전에서 제외했고,
각 프로젝트 하단에 그 사실을 명시해 두었습니다.
