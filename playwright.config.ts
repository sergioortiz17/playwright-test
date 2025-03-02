import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Carpeta donde están las pruebas
  use: {
    headless: true, // Ejecutar sin interfaz gráfica
    screenshot: 'only-on-failure', // Capturar pantallazos solo si falla
    video: 'retain-on-failure', // Guardar video solo si falla la prueba
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]], // Reporte en HTML
});
