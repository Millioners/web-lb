import { loadEmployees } from '../api/employees.js';
import { renderEmployeeCard } from '../ui/employeeCard.js';

export async function initAbout() {
    const list = document.querySelector('.team__list');
    const tpl = document.getElementById('employee-card-tpl');

    const controller = new AbortController();

    try {
        const emps = await loadEmployees(6, { signal: controller.signal });

        const frag = document.createDocumentFragment();
        for (const emp of emps) {
            frag.append(renderEmployeeCard(tpl, emp));
        }

        list.innerHTML = '';
        list.append(frag);
    } catch (e) {
        console.error('Помилка при ініціалізації About Page:', e);
    }

    return () => controller.abort();
}
