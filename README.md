# 🎧 SP 01 Model

An interactive 3D headphone customizer featuring the SP 01 model. This project showcases real-time customization, smooth animations, and responsive design, making it a perfect example of a modern e-commerce product demo.

## 📦 Technologies

- `Next.js`
- `React`
- `TypeScript`
- `React Three Fiber`
- `React Three Drei`
- `Framer Motion`
- `Three.js`
- `Zustand`
- `Tailwind CSS`

## 🚀 Features

- Real-time 3D customization with smooth color transitions.
- Fixed front view with subtle mouse interaction for basic depth.
- Product info overlay and a shopping-cart placeholder for future e-commerce integration.
- Mobile-optimized 3D experience.

## 📍 The Process

I started with quick Figma prototypes to explore layout and interaction. From those designs I built the UI and the 3D view with Next.js and React Three Fiber, iterating quickly on the look and feel until the experience felt right. 

During development I ran into a couple of notable challenges: parts of the headphone initially shared the same material, so changing one color affected others, and coordinating smooth transitions across routes required consistent state.

I addressed these by giving each headphone part its own material instance and by using a lightweight global store (Zustand) to synchronize animations and UI state. 

I kept the scope intentionally small for an MVP focus on core customization, smooth easing, and responsive layout and applied a few performance tweaks (preloading the GLB and dynamic scaling) to keep the demo snappy on mobile and desktop.

By the end the project became a compact, interactive 3D customizer that demonstrates real-time customization, smooth transitions, and responsive design.

## ⚡ Performance Considerations

The headphones model is the heaviest asset. I preloaded the GLB to reduce load delays and implemented dynamic scaling for efficient rendering on different viewports. These simple optimizations keep the MVP responsive on mobile and desktop.

## 🧠 Key Learnings

- Using Zustand for lightweight global state.
- Handling 3D transitions and easing with React Three Fiber.
- Balancing real-time interactivity with simple performance optimizations.

## 🔮 Potential Enhancements

Ideas for future exploration (MVP-level scope kept small):

- Add more headphone models or accessories.
- Hook up the shop button to a backend or store.
- Offer additional material presets for more visual options.
- Improve camera controls (zoom/rotate) for a richer preview.

## 🚦 Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open `http://localhost:3000` in your browser

## 🎞️ Preview

Here’s a quick demo of the project in action:

https://github.com/user-attachments/assets/55b904c6-2c0f-4e3e-819a-df63feb9c876

