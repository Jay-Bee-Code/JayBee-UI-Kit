# JayBee UI Kit 💎

<img width="1722" height="1555" alt="image" src="https://github.com/user-attachments/assets/55e2f33d-9b9e-4868-803b-29574beceb29" />


[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

**[English](#english-description) | [العربية](#arabic-description)**

---

<a id="english-description"></a>
## 🇬🇧 English Description

**JayBee UI Kit** is a cutting-edge **Admin Dashboard & Design System** built with **Neomorphism (Soft UI)** and **Glassmorphism** aesthetics. Developed using **Next.js 16** and **Tailwind CSS**, it bridges the gap between realistic design physics and modern web performance.

It serves as a robust foundation for building SaaS applications, CRM systems, and modern web apps with a unique, tactile feel.

### ✨ Key Features

* **🎨 Advanced Neomorphism:** Custom Tailwind utilities (`neo-flat`, `neo-inset`) for realistic soft UI effects.
* **🌑 Dark & Light Mode:** Fully optimized themes with persistent state and contrast management.
* **🧊 Glassmorphism Elements:** Frosted glass effects for credit cards and overlays.
* **📊 Data Visualization:** Beautiful, custom-styled charts using **Recharts**.
* **📋 Kanban Board:** Interactive drag-and-drop task management.
* **📱 Fully Responsive:** Mobile-first design that looks great on all devices.
* **🔒 Authentication Pages:** Ready-to-use login and register forms.

### 🛠️ Tech Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Charts:** [Recharts](https://recharts.org/)
* **Accessibility:** [Radix UI](https://www.radix-ui.com/) Primitives
* **Language:** TypeScript

### 🚀 Getting Started

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Jay-Bee-Code/JayBee-UI-Kit.git](https://github.com/Jay-Bee-Code/JayBee-UI-Kit.git)
    cd JayBee-UI-Kit
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser.

---

<a id="arabic-description"></a>
## 🇩🇿 وصف المشروع (العربية)

**JayBee UI Kit** هو نظام تصميم (Design System) ولوحة تحكم متكاملة مبنية بأسلوب **النيومورفيزم (Neomorphism)** و **الزجاج (Glassmorphism)**. تم تطويره باستخدام **Next.js 16** و **Tailwind CSS** ليجمع بين جمالية التصميم الواقعي وسرعة أداء الويب الحديث.

هذا المشروع يمثل قاعدة صلبة لبناء تطبيقات الويب الحديثة، أنظمة إدارة العملاء (CRM)، وتطبيقات SaaS بواجهات جذابة وغير تقليدية.

### ✨ المميزات الرئيسية

* **🎨 نظام نيومورفيزم متقدم:** أدوات CSS مخصصة لمحاكاة البروز والحفر (`neo-flat`, `neo-inset`) بواقعية تامة.
* **🌑 الوضع الليلي (Dark Mode):** دعم كامل للثيم الداكن والفاتح مع تباين ألوان مدروس بعناية.
* **🧊 تأثيرات الزجاج:** بطاقات بنكية وعناصر واجهة شفافة تحاكي الزجاج المثلج (Frosted Glass).
* **📊 تصور البيانات:** رسوم بيانية تفاعلية وأنيقة مخصصة لتلائم الثيم العام.
* **📋 لوحة المهام (Kanban):** نظام إدارة مهام تفاعلي يحاكي حركة البطاقات الحقيقية.
* **📱 متجاوب بالكامل:** تصميم يعمل بسلاسة وكفاءة على جميع أحجام الشاشات.
* **🔒 صفحات المصادقة:** نماذج تسجيل دخول وإنشاء حساب جاهزة للاستخدام.

### 🛠️ التقنيات المستخدمة

* **إطار العمل:** [Next.js 16](https://nextjs.org/) (App Router)
* **التنسيق:** [Tailwind CSS](https://tailwindcss.com/)
* **الأيقونات:** [Lucide React](https://lucide.dev/)
* **الرسوم البيانية:** [Recharts](https://recharts.org/)
* **إمكانية الوصول:** [Radix UI](https://www.radix-ui.com/)
* **لغة البرمجة:** TypeScript

### 🚀 التثبيت والتشغيل

1.  **استنساخ المستودع (Clone):**
    ```bash
    git clone [https://github.com/Jay-Bee-Code/JayBee-UI-Kit.git](https://github.com/Jay-Bee-Code/JayBee-UI-Kit.git)
    cd JayBee-UI-Kit
    ```

2.  **تثبيت الحزم (Install):**
    ```bash
    npm install
    # أو
    yarn install
    ```

3.  **تشغيل السيرفر المحلي:**
    ```bash
    npm run dev
    ```

4.  افتح الرابط [http://localhost:3000](http://localhost:3000) في متصفحك.

---

## 📂 Project Structure / هيكلية المشروع

| Route / المسار | Page / الصفحة | Description / الوصف |
| :--- | :--- | :--- |
| `/` | **Dashboard** | Main overview, widgets, and charts / النظرة العامة والودجات |
| `/wallet` | **Wallet** | Finance management & credit cards / المحفظة والبطاقات البنكية |
| `/tasks` | **Tasks** | Kanban board for project management / لوحة إدارة المهام |
| `/customers` | **Customers** | Advanced data tables with filters / جدول العملاء المتقدم |
| `/analytics` | **Analytics** | Detailed performance charts / تحليلات ورسوم بيانية |
| `/settings` | **Settings** | User profile & app preferences / الإعدادات والملف الشخصي |

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
<div align="center">
  Created with ❤️ by <strong>JayBee Dev</strong> © 2026
</div>
