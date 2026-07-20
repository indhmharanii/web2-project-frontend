import "./AdminLayout.css";

function AdminLayout({ sidebar, topbar, children }) {
  return (
    <div className="admin-layout-container">

      <aside className="admin-layout-sidebar">
        {sidebar}
      </aside>

      <div className="admin-layout-wrapper">

        <header className="admin-layout-topbar">
          {topbar}
        </header>

        <main className="admin-layout-content">
          {children}
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;