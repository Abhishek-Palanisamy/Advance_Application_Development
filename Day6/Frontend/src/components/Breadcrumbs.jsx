import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/Styles.css';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Breadcrumbs = () => {
    const { pathname } = useLocation();
    const pathnames = pathname.split("/").filter((x) => x);

    // If on the homepage, return null to not render breadcrumbs
    if (pathnames.length === 0 || pathnames[0] === '/') {
        return null;
    }

    let breadcrumbPath = "";
    return (
        <div className='breadcrumbs'>
            <Link to='/'>Home</Link>
            {
                pathnames.map((name, index) => {
                    breadcrumbPath += `/${name}`;
                    const isLast = index === pathnames.length - 1;

                    return isLast ? (
                        <span key={breadcrumbPath}>/ {capitalizeFirstLetter(name)}</span>
                    ) : (
                        <span key={breadcrumbPath}>
                            / <Link to={breadcrumbPath}>{capitalizeFirstLetter(name)}</Link>
                        </span>
                    );
                })
            }
        </div>
    );
}

export default Breadcrumbs;
