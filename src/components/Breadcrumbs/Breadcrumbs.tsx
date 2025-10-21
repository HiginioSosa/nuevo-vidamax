import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.scss';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  // Mapeo de rutas a nombres legibles
  const routeNames: { [key: string]: string } = {
    '/inicio': 'Inicio',
    '/nuestros-seguros': 'Nuestros Seguros',
    '/centro-ayuda': 'Centro de Ayuda',
    '/polizas': 'Pólizas',
  };

  // Construir el breadcrumb basado en la ruta actual
  const buildBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [
      { label: 'Inicio', path: '/inicio' }
    ];

    const currentPath = location.pathname;

    // Si no estamos en inicio, agregar la ruta actual
    if (currentPath !== '/inicio' && currentPath !== '/') {
      const currentLabel = routeNames[currentPath] || 'Página';
      breadcrumbs.push({ label: currentLabel, path: currentPath });

      // Si estamos en nuestros-seguros, agregar "Nuevo Vidamax"
      if (currentPath === '/nuestros-seguros') {
        breadcrumbs.push({ label: 'Nuevo Vidamax', path: currentPath });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = buildBreadcrumbs();

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;

          return (
            <li key={crumb.path} className="breadcrumbs__item">
              {!isLast ? (
                <>
                  <Link to={crumb.path} className="breadcrumbs__link">
                    {crumb.label}
                  </Link>
                  <span className="breadcrumbs__separator">/</span>
                </>
              ) : (
                <span className="breadcrumbs__current">{crumb.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
