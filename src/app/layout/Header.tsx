export function Header() {
  return (
    <header
      style={{
        height: 64,
        background: '#fff',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 16px',
      }}
    >
      <input
        type="search"
        placeholder="Buscar..."
        style={{ width: 320, maxWidth: '60%', height: 36, border: '1px solid #d1d5db', borderRadius: 8, padding: '0 10px' }}
      />
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 700 }}>
        U
      </div>
    </header>
  )
}