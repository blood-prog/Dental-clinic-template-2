let kv;
try {
  kv = require('@vercel/kv').kv;
} catch (e) {
  kv = null;
}

const memory = {};

async function get(key) {
  if (kv) {
    try { return await kv.get(key); } catch (e) { /* fall through */ }
  }
  return memory[key] ?? null;
}

async function set(key, value) {
  if (kv) {
    try { await kv.set(key, value); return; } catch (e) { /* fall through */ }
  }
  memory[key] = value;
}

async function del(key) {
  if (kv) {
    try { await kv.del(key); return; } catch (e) { /* fall through */ }
  }
  delete memory[key];
}

async function list(key) {
  const data = await get(key);
  return Array.isArray(data) ? data : [];
}

async function push(key, item) {
  const arr = await list(key);
  arr.push(item);
  await set(key, arr);
  return arr;
}

async function update(key, id, updates) {
  const arr = await list(key);
  const idx = arr.findIndex(i => i.id === id);
  if (idx === -1) return null;
  arr[idx] = { ...arr[idx], ...updates };
  await set(key, arr);
  return arr[idx];
}

async function remove(key, id) {
  const arr = await list(key);
  const filtered = arr.filter(i => i.id !== id);
  await set(key, filtered);
  return filtered;
}

module.exports = { get, set, del, list, push, update, remove, kv };
