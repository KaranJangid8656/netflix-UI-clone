# Netflix UI Clone

A modern, responsive Netflix clone built with Next.js 14, TypeScript, Tailwind CSS, and Shadcn UI components. This project replicates key features and the signature look-and-feel of Netflix's streaming platform.

## Screenshots

![Home Page](https://res.cloudinary.com/dx9bvma03/image/upload/v1757930490/Screenshot_2025-09-15_152839_zdby6a.png)

![Movie Categories](https://res.cloudinary.com/dx9bvma03/image/upload/v1757930586/Screenshot_2025-09-14_194306_srrgvf.png)

![Profile Selection](https://res.cloudinary.com/dx9bvma03/image/upload/v1757930573/Screenshot_2025-09-14_194409_iw5gwk.png)

![Login Page](https://res.cloudinary.com/dx9bvma03/image/upload/v1757930649/Screenshot_2025-09-14_194445_lgqt41.png)

![Browse Page](https://res.cloudinary.com/dx9bvma03/image/upload/v1757930674/Screenshot_2025-09-14_194639_l6fgax.png)

## Features

### 🎯 Key Features

- **Modern UI/UX**: Faithful recreation of Netflix's sleek user interface
- **Dynamic Content**: Movie/Show rows with horizontal scrolling
- **Interactive Elements**: 
  - YouTube video integration
  - Hover effects on movie cards
  - Dynamic navigation bar
  - Profile selection screen
  



### 🛠️ Technical Features

- Server-side rendering with Next.js 14
- Type-safe development with TypeScript
- Modern styling with Tailwind CSS
- Custom UI components using Shadcn UI
- YouTube API integration
- Responsive image handling
- Optimized performance
- Clean, maintainable code structure

## 🔧 Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: 
  - Tailwind CSS
  - Shadcn UI components
  - CSS Modules
- **UI Components**:
  - Lucide Icons
  - Radix UI primitives
- **Performance**:
  - Next.js Image optimization
  - YouTube iframe API
  - CSS animations
  - Lazy loading

## 🗂️ Project Structure

```
netflix-clone/
├── app/                    # Next.js app directory
│   ├── browse/            # Browse page
│   ├── home/              # Home page
│   ├── login/            # Login page
│   ├── profiles/         # Profile selection
│   └── layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   ├── MovieRow.tsx      # Movie row component
│   └── ...
├── public/               # Static assets
├── styles/              # Global styles
└── lib/                # Utility functions
```

## 💻 Usage

1. **Home Page**: The landing page showcases featured content and categorized movies/shows
2. **Browse**: Navigate through different categories and search for content
3. **Profiles**: Select or manage different user profiles
4. **Authentication**: Login page with form validation (demo purposes)

## 🎨 Customization

- Modify `tailwind.config.ts` for theme customization
- Update components in `components/ui` for UI modifications
- Add new pages in the `app` directory
- Customize content categories in page components

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Netflix's user interface
- Built with Next.js and Tailwind CSS
- UI components from Shadcn UI
- Icons from Lucide Icons

## ⚠️ Disclaimer

This is a demo project created for educational purposes only. All content, logos, and branding elements belong to their respective owners.

## 👤 Author

Karan Suthar
- GitHub: [@KaranJangid8656](https://github.com/KaranJangid8656)

---

Made with ❤️ using Next.js and Tailwind CSS
