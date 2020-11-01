import { connect } from 'react-redux';
import Header from 'src/components/Header';

const mapStateToProps = (state) => ({
  user: state.user.user,
});

const mapDispatchToProps = {};

// Container
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
