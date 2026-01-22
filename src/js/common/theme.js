const KEY = 'theme';

function systemPrefersDark() {
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches;
}

export function applyTheme(theme) {
    const isDark = theme === 'dark';
    const html = document.documentElement;
    
    if (isDark) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
    
    console.log('✓ Тема змінена на:', theme, '| dark клас:', html.classList.contains('dark'));
}

export function initThemeToggle() {
    // Ініціалізація при завантаженні сторінки
    const saved = localStorage.getItem(KEY);
    const theme = saved ?? (systemPrefersDark() ? 'dark' : 'light');
    console.log('🔧 Ініціалізація теми:', theme);
    applyTheme(theme);

    // Знайти кнопку
    const toggleBtn = document.getElementById('theme-toggle');
    console.log('🔍 Кнопка знайдена:', !!toggleBtn);
    
    if (!toggleBtn) {
        console.error('❌ Кнопка переключення теми не знайдена!');
        return;
    }

    // Додати обробник кліку
    toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('👆 Клік по кнопці');
        
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');
        const next = isDark ? 'light' : 'dark';
        
        console.log('🔄 Поточна тема:', isDark ? 'dark' : 'light', '→ Перемикаємо на:', next);
        
        localStorage.setItem(KEY, next);
        applyTheme(next);
    });
    
    console.log('✓ initThemeToggle завершена успішно');
}
