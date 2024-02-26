import { Link } from "react-router-dom";

function Links(props) {
  const { to, children, classname } = props;
  return (
    <Link to={to} className={`hover:text-gray-500 ${classname}`}>
      {children}
    </Link>
  );
}

export default Links;
