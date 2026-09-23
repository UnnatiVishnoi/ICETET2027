import { Link } from 'react-router-dom';

export default function PageBanner({ title, intro }) {
  return (
    <div className="page-banner">
      <div className="container">
        <p className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{title}</span>
        </p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </div>
  );
}
