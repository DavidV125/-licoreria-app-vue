# 🍷 Tienda de Licores - Vue 3 App (con autenticación y JSON Server)

Una aplicación web desarrollada con Vue 3, Pinia y Vite que simula una tienda de licores. Incluye autenticación de usuario, carga de productos desde un archivo `.json` externo mediante JSON Server, y todas las funcionalidades del carrito y compra.

---

# 🍷 Liquor Store - Vue 3 App (with authentication and JSON Server)

A web application built with Vue 3, Pinia, and Vite that simulates a liquor store. It includes user authentication, product loading from an external `.json` file via JSON Server, and full shopping cart functionality.

## 📦 Funcionalidades / Features

- **Login con credenciales**  
  Login with credentials

- **Listado de productos dinámico desde JSON Server**  
  Dynamic product listing from JSON Server

- **Agregar productos al carrito**  
  Add products to cart

- **Cálculo de total con 10% de descuento sobre $200,000**  
  Total calculation with 10% discount over $200,000

- **Confirmación de compra con número de orden aleatorio**  
  Purchase confirmation with random order number

- **Diseño responsive con Bootstrap 5**  
  Responsive design with Bootstrap 5


---

## 🛠️ Tecnologías / Technologies

- Vue 3 (Composition API)
- Pinia (state management)
- Vite
- Bootstrap 5
- JSON Server
- JavaScript (modular)

---

## ⚙️ Instalación y Ejecución / Installation and Running

1. **Clona el repositorio** / Clone the repository:
   ```bash
   git clone https://github.com/DavidV125/liquor-store-app-vue.git
   cd licoreria-app-vue
2. Instala dependencias / Install dependencies:
  bash
  npm install

3. Ejecuta JSON Server (los datos están en productos.js):
  cmd json-server --watch src/assets/productos.js 

4. Inicia el servidor de desarrollo / Run the dev server:
  npm run dev
---

🔐 Acceso / Login

**Credenciales de prueba / Test Credentials**:

- **Usuario / Username:** `david`  
- **Contraseña / Password:** `123`

---

## 📁 Archivos de datos / Data Files
El archivo productos.js contiene los datos de los productos y credenciales. Puedes editar este archivo para personalizar los productos disponibles y los usuarios autorizados.

The productos.js file contains both the product data and login credentials. You can edit this file to customize the available products and authorized users.

## 📷 Imágenes / Screenshots

![image](https://github.com/user-attachments/assets/1b506efe-2cb7-46b8-9c50-51a2053204f4)
![image](https://github.com/user-attachments/assets/a4517440-563c-46ae-be87-5164198f6d6d)
![image](https://github.com/user-attachments/assets/63107e1f-cd60-4392-842d-50dfa4e77286)

## 🔗 Versiones relacionadas / Related Versions
- ✅ Versión adaptada para GitHub Pages (sin autenticación ni JSON Server):
- Repo: https://github.com/DavidV125/liquor-store-vue-no-api
- Link GH Pages: davidv125.github.io/liquor-store-vue-no-api/

## 👤 Autor / Author
- David Villacura
- Frontend Developer Trainee
- 📧 davvillacura@gmail.com
- 🌐 GitHub Profile: https://github.com/DavidV125
