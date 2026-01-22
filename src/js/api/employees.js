export async function loadEmployees(limit = 6, { signal } = {}) {
    const url = `https://jsonplaceholder.typeicode.com/users?_limit=${limit}`;
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const users = await res.json();

    return users.map(u => ({
        id: u.id,
        name: u.name,
        role: u.company?.catchPhrase ?? 'Team member',
        profileUrl: `https://jsonplaceholder.typeicode.com/users/${u.id}`,
        photo: `https://picsum.photos/seed/emp-${u.id}/400/400`,
    }));
}
