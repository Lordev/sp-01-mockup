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

- **Real-time 3D Headphone Model Customization**: Customize the SP 01 headphone model in real-time, allowing users to see changes instantly as they select different options.

- **Smooth Color Transitions with Easing Animations**: Experience seamless and visually appealing color changes, enhanced by smooth easing animations for a polished look.

- **Front View with Subtle Mouse Interaction**: The camera provides a fixed front view of the 3D scene, with slight movements following the mouse for added interactivity.

- **Product Information Overlay with Detailed Specs**: Access detailed product specifications through an interactive overlay, providing users with all the information they need.

- **Shopping Cart Button Placeholder**: The project includes a shopping cart button as a placeholder, designed with e-commerce in mind. It can be extended to integrate with a backend or e-commerce platform.

- **Mobile-Optimized 3D Experience**: Enjoy a fully optimized 3D experience on mobile devices, ensuring smooth performance and usability on smaller screens.

## 📍 The Process

The journey of creating the SP 01 Model customizer began with early prototyping in Figma. The initial designs focused on creating a clean and intuitive interface for users to interact with the 3D model. These early drafts served as a foundation for the project's direction and evolved significantly during development.

### Early Prototyping

Here are some visuals showcasing the initial design concepts:

#### Landing Page
<img width="1920" height="1080" alt="Home" src="https://github.com/user-attachments/assets/438b8523-cf47-4cdf-9586-b40611bbd905" />

#### Headphone Customization Screen
<img width="1920" height="1080" alt="Product Customizer" src="https://github.com/user-attachments/assets/4cd8b318-5157-4a96-846f-e9f3572f7e65" />

With the designs in place, I started building the project using Next.js and React Three Fiber. The headphone model was brought to life with real-time color changes and smooth transitions, ensuring a premium and responsive user experience.

### Solving Individual Part Customization

One of the most interesting challenges was figuring out how to allow individual parts of the headphone model to be customized independently. Initially, all parts shared the same material, which meant that changing the color of one part would inadvertently change the color of all parts.

To solve this, I ensured that each part had its own independent material, allowing for precise control over colors and properties. This approach made the customization process more flexible and intuitive for users.

Another challenge was managing transitions between pages. To tackle this, I implemented a global state using the lightweight Zustand library. This allowed me to synchronize animations and state seamlessly across components, making the user experience much more fluid and cohesive.

The project grew from a simple idea into a fully interactive 3D product customizer, showcasing the potential of modern web technologies in creating immersive e-commerce experiences.

## ⚡ Performance Considerations

One of the heaviest 3D elements in this project is the headphones model. During testing on Vercel, I noticed that the model could take too long to render, especially on mobile devices. To address this, I used `useGLTF.preload()` to preload the model. This approach caches the model in memory before it's needed, reducing delays and improving the user experience. This optimization was crucial for ensuring smooth performance across devices.

To further enhance performance, I implemented dynamic scaling, which adjusts the 3D scene's scale based on the viewport size, ensuring efficient rendering on both desktop and mobile devices. Additionally, I reused materials for different parts of the headphone model by cloning them, reducing memory usage and maintaining consistent visual quality.

## 🧠 Key Learnings

This project was a valuable learning experience. Here are the key takeaways:

- **Advanced State Management**: Learned how to share and manage global state effectively using Zustand, ensuring seamless synchronization across components.
- **3D Scene Transitions**: Gained experience in handling complex animations and transitions within a 3D environment using React Three Fiber and Framer Motion.
- **Real-Time Interactivity**: Developed skills in creating real-time, interactive 3D models with smooth material and color transitions.
- **Responsive Design in 3D**: Adapted the 3D experience to work seamlessly across different screen sizes, ensuring usability on both desktop and mobile devices.
- **Material and Lighting Management**: Learned how to manage materials and lighting in Three.js to create a polished and realistic look for the 3D model.
- **3D Model Optimization**: Worked on optimizing the 3D model and scene to maintain performance while delivering high-quality visuals.

These skills will be incredibly useful for future projects, especially in building immersive e-commerce experiences or other interactive 3D applications.

## 🔮 Future Improvements

Some ideas for enhancing the project:

- **Add More Headphones or 3D Elements**: Expand the product catalog by including additional headphone models or other 3D elements to enrich the experience.
- **Implement the Shop Button**: Make the shop button functional by integrating it with a backend or e-commerce platform.
- **Refine Headphone Materials**: Experiment with different materials for the headphone meshes to provide more customization options.
- **Camera Interaction**: Enhance the current fixed front view with more interactive camera controls, such as zooming in, rotating, or panning, to provide a more dynamic user experience.

These improvements would make the project more robust and versatile, paving the way for a more comprehensive e-commerce experience.

## 🚦 Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open `http://localhost:3000` in your browser

## 🎞️ Preview

Here’s a quick demo of the project in action:


https://github.com/user-attachments/assets/55b904c6-2c0f-4e3e-819a-df63feb9c876

