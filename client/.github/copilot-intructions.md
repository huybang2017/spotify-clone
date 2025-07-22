# 🎨 Copilot Instructions: Giao diện UI cho Spotify Clone

> 💬 **Lưu ý:** Mọi trao đổi và hướng dẫn sẽ sử dụng **tiếng Việt** để dễ hiểu. Tuy nhiên, tất cả **code, tên file, tên biến, component** phải viết bằng **tiếng Anh**.

## 1. Tech Stack

- React + TypeScript
- Tailwind CSS for styling
- Shadcn/ui cho components cơ bản
- SVG Icon dùng dưới dạng components
- File định dạng `.tsx` (Functional Components only)

## 2. UI Directory Structure

```
client/
├── src/
│ ├── components/ # Reusable UI components
│ │ └── icons/ # SVG icons
│ ├── lib/
│ │ ├── constants/ # Fake data, constants
│ ├── pages/ # Main pages (Home, Album, etc.)
│ ├── layouts/ # Page layout components
│ └── App.tsx # App entry point
└── public/ # Static assets
```

## 3. Naming Conventions

- Component: **PascalCase**, ví dụ `TrackCard.tsx`
- Page: `HomePage.tsx`, `AlbumPage.tsx`
- Layout: `MainLayout.tsx`, `AuthLayout.tsx`
- Hook: `useXyz.ts`
- Utils UI: `formatTime.ts`, `classNames.ts`,...

## 4. UI Design Rules

- Only UI: ❌ No API calls or backend logic
- **TailwindCSS only**, prefer classes: `neutral`, `black`, `white`, `green`
- Responsive using `flex`, `grid`, breakpoints: `sm`, `md`, `lg`
- Shadcn components như: `Button`, `Card`, `ScrollArea`, etc.
- SVG icons sử dụng từ `components/icons`

## 5. Output Expectations

- Clean, modular components
- No logic handling (auth, data fetching, player actions, etc.)
- Props should be faked or typed
- Nếu cần dữ liệu: dùng fake data từ `lib/constants`
- Không tạo file mới ngoài các thư mục đã quy định
