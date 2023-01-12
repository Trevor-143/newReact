import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
      console.log(e.detail);
  }

  return (
    <header className="header">
        <h1>Task Tracker</h1>
        <Button color='green' text='Hello' onClick={onClick} />
    </header>
  )
}
Headers.defaultProps = {
    title: 'Task Tracker',
}

Header.prototypes = {
  title: PropTypes.string.isRequired,
}

export default Header
