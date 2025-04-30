
# 🔥 Grillschulle

**Grillschulle** is a web-based application designed to manage, display, and promote grilling school events. It allows users to view upcoming events, explore class details, and register for barbecue workshops and grill courses. Built with modern web technologies to deliver a smooth, responsive user experience.

---

## 🚀 Features

- 📅 View and manage grilling class schedules
- 🧑‍🍳 Explore course descriptions and instructor details
- 📝 Register for upcoming events
- 📸 Visuals and galleries for each class
- 📱 Responsive design optimized for all devices

---

## 📦 Tech Stack

| Tech           | Description                                  |
|----------------|----------------------------------------------|
| React / Vite   | Modern frontend framework                    |
| Tailwind CSS   | Utility-first styling framework              |
| Supabase       | Backend-as-a-Service (Auth, DB, Storage)     |
| TypeScript     | Static typing for scalability and safety     |

---

## 🛠 Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/DimitarHristovski/Grillschulle.git
cd Grillschulle
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Add the following variables:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

> Make sure these match the API settings from your Supabase project dashboard.

### 4. Start the development server

```bash
npm run dev
```

---

## 📁 Project Structure

```bash
src/
├── components/       # UI components
├── pages/            # Route pages
├── styles/           # Global and custom styles
├── lib/              # Supabase client setup
.env                  # Environment configuration
```

---

## 📅 Events & Classes

All event and class data is fetched from a Supabase backend. Admins can manage this via Supabase Table Editor or custom dashboard integration.

---

## 🙌 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## 📮 Contact

For questions, feedback, or collaboration, reach out on GitHub [@DimitarHristovski](https://github.com/DimitarHristovski).
OR www.dimitarhristovski.com